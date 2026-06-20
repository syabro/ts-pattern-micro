type Primitive = string | number | boolean | bigint | symbol | null | undefined;

const wildcard = Symbol("match.wildcard");
const guardTag = Symbol("match.guard");
const notTag = Symbol("match.not");
const unionTag = Symbol("match.union");
const notSafeGuardTag = Symbol("match.notSafeGuard");

export type Wildcard = typeof wildcard;

/** Guard pattern created by `P.when` or one of the built-in `P.*` guards. */
export type GuardPattern<U = unknown, Narrows extends boolean = true, SupportsNot extends boolean = false> = {
  readonly [guardTag]: true;
  readonly [notSafeGuardTag]: SupportsNot;
  readonly guard: (value: unknown) => boolean;
  /** @internal Phantom type marker; not present at runtime. */
  readonly __narrow?: U;
  /** @internal Phantom type marker; not present at runtime. */
  readonly __narrows?: Narrows;
};

type AnyGuardPattern = GuardPattern<unknown, boolean, boolean>;

type NotPattern<Ptn = unknown> = {
  readonly [notTag]: true;
  readonly pattern: Ptn;
};

type AnyNotPattern = NotPattern<unknown>;

type UnionPattern<Patterns extends readonly unknown[] = readonly unknown[]> = {
  readonly [unionTag]: true;
  readonly patterns: Patterns;
};

type AnyUnionPattern = UnionPattern<readonly unknown[]>;

export type Pattern<T = unknown> =
  | Wildcard
  | AnyGuardPattern
  | AnyNotPattern
  | AnyUnionPattern
  | (T extends Primitive ? T : never)
  | (T extends readonly unknown[] ? ArrayPattern<T> : never)
  | (T extends (...args: any[]) => unknown ? never : T extends object ? { readonly [K in keyof T]?: Pattern<T[K]> } : never);

type ArrayPattern<T extends readonly unknown[]> =
  // Plain arrays cannot prove length at compile time; runtime still requires equal length.
  number extends T["length"] ? readonly Pattern<T[number]>[] : { readonly [K in keyof T]: Pattern<T[K]> };

function guardPattern<U, Narrows extends boolean, SupportsNot extends boolean>(
  guard: (value: unknown) => boolean,
  supportsNot: SupportsNot,
): GuardPattern<U, Narrows, SupportsNot> {
  return { [guardTag]: true, [notSafeGuardTag]: supportsNot, guard };
}

function builtin<T>(guard: (value: unknown) => value is T): GuardPattern<T, true, true> {
  return guardPattern<T, true, true>(guard, true);
}

type Constructor<T> = abstract new (...args: any[]) => T;

function instanceOf<C extends Constructor<unknown>>(klass: C): GuardPattern<InstanceType<C>, true, true> {
  return builtin((value: unknown): value is InstanceType<C> => value instanceof klass);
}

/** Creates a guard pattern that narrows handler types and can prove exhaustiveness. */
function when<T, U extends T>(guard: (value: T) => value is U): GuardPattern<U, true, false>;
/** Creates a runtime-only guard pattern. It does not narrow types or prove exhaustiveness. */
function when<T = unknown>(guard: (value: T) => boolean): GuardPattern<T, false, false>;
function when(guard: (value: any) => boolean): GuardPattern<unknown, boolean, false> {
  return guardPattern<unknown, boolean, false>(guard, false);
}

/** Negates a pattern. Custom `P.when(...)` guards are intentionally not supported inside `P.not(...)`. */
function not<const Ptn>(pattern: ValidNotInput<Ptn>): NotPattern<Ptn> {
  if (hasCustomGuardPattern(pattern)) throw new Error("P.not does not support P.when patterns");
  return { [notTag]: true, pattern };
}

/** Matches any of the provided patterns. Custom `P.when(...)` guards are intentionally not supported inside `P.union(...)`. */
function union<const Patterns extends readonly [unknown, ...unknown[]]>(...patterns: { readonly [K in keyof Patterns]: ValidNotInput<Patterns[K]> }): UnionPattern<Patterns> {
  if (patterns.some(hasCustomGuardPattern)) throw new Error("P.union does not support P.when patterns");
  return { [unionTag]: true, patterns };
}

export const P = {
  /** Matches any value. */
  _: wildcard,
  /** Creates a guard pattern. */
  when,
  /** Negates a pattern, except custom `P.when(...)` guards. */
  not,
  /** Matches any of the provided patterns, except custom `P.when(...)` guards. */
  union,
  /** Matches instances of a class, like `Error`, `Date`, or your own class. */
  instanceOf,
  string: builtin((value: unknown): value is string => typeof value === "string"),
  number: builtin((value: unknown): value is number => typeof value === "number"),
  boolean: builtin((value: unknown): value is boolean => typeof value === "boolean"),
  bigint: builtin((value: unknown): value is bigint => typeof value === "bigint"),
  symbol: builtin((value: unknown): value is symbol => typeof value === "symbol"),
  null: builtin((value: unknown): value is null => value === null),
  undefined: builtin((value: unknown): value is undefined => value === undefined),
  /** Matches any array. It does not validate item types. */
  array: builtin((value: unknown): value is readonly unknown[] => Array.isArray(value)),
} as const;

type Simplify<T> = { [K in keyof T]: T[K] } & {};
type IsNever<T> = [T] extends [never] ? true : false;
type TupleKeys<T extends readonly unknown[]> = Exclude<keyof T, keyof readonly unknown[]>;

export type Narrow<T, Ptn> =
  Ptn extends Wildcard ? T :
  Ptn extends GuardPattern<infer U, boolean, boolean> ? NarrowGuard<T, U> :
  Ptn extends NotPattern<infer Inner> ? NarrowNot<T, Inner> :
  Ptn extends UnionPattern<infer Patterns> ? NarrowUnion<T, Patterns> :
  Ptn extends readonly unknown[] ? T extends readonly unknown[] ? NarrowArray<T, Ptn> : never :
  Ptn extends object ? T extends object ? NarrowObject<T, Ptn> : never :
  Ptn extends T ? Ptn : Extract<T, Ptn>;

type NarrowGuard<T, U> =
  T extends unknown
    ? U extends unknown
      ? unknown extends T ? U : unknown extends U ? T : T extends Primitive ? U extends Primitive ? T & U : never : U extends Primitive ? never : NarrowObjectGuard<T, U>
      : never
    : never;

type NarrowObjectGuard<T, U> = [Extract<T, U>] extends [never] ? U extends T ? U : T extends U ? T : never : Extract<T, U>;

type NarrowNot<T, Ptn> = Exclude<T, Narrow<T, Ptn>>;

type NarrowUnion<T, Patterns extends readonly unknown[]> = Patterns[number] extends infer Ptn ? Narrow<T, Ptn> : never;

type NarrowArray<T extends readonly unknown[], Ptn extends readonly unknown[]> =
  T extends readonly unknown[]
    ? number extends T["length"]
      ? T
      : SameLength<T, Ptn> extends true
        ? [BadTupleKeys<T, Ptn>] extends [never]
          ? { readonly [K in keyof T]: K extends keyof Ptn ? Narrow<T[K], Ptn[K]> : T[K] }
          : never
        : never
    : never;

type SameLength<A extends readonly unknown[], B extends readonly unknown[]> =
  A["length"] extends B["length"] ? B["length"] extends A["length"] ? true : false : false;

type BadTupleKeys<T extends readonly unknown[], Ptn extends readonly unknown[]> = {
  [K in TupleKeys<T> & TupleKeys<Ptn>]: IsNever<Narrow<T[K], Ptn[K]>> extends true ? K : never
}[TupleKeys<T> & TupleKeys<Ptn>];

type BadObjectKeys<T, Ptn> = {
  [K in keyof Ptn]: K extends keyof T
    ? IsNever<Narrow<T[K], Ptn[K]>> extends true ? K : never
    : K
}[keyof Ptn];

type NarrowObject<T, Ptn> =
  T extends object
    ? [BadObjectKeys<T, Ptn>] extends [never]
      ? Simplify<{ [K in keyof T]: K extends keyof Ptn ? Narrow<T[K], Ptn[K]> : T[K] }>
      : never
    : never;

type HasBooleanGuard<Ptn> =
  Ptn extends GuardPattern<unknown, infer Narrows, boolean> ? Narrows extends true ? false : true :
  Ptn extends NotPattern<infer Inner> ? HasCustomGuard<Inner> :
  Ptn extends UnionPattern<infer Patterns> ? true extends HasBooleanGuard<Patterns[number]> ? true : false :
  Ptn extends readonly (infer Item)[] ? true extends HasBooleanGuard<Item> ? true : false :
  Ptn extends object ? true extends { [K in keyof Ptn]: HasBooleanGuard<Ptn[K]> }[keyof Ptn] ? true : false :
  false;

type HasCustomGuard<Ptn> =
  Ptn extends GuardPattern<unknown, boolean, infer SupportsNot> ? SupportsNot extends true ? false : true :
  Ptn extends NotPattern<infer Inner> ? HasCustomGuard<Inner> :
  Ptn extends UnionPattern<infer Patterns> ? true extends HasCustomGuard<Patterns[number]> ? true : false :
  Ptn extends readonly (infer Item)[] ? true extends HasCustomGuard<Item> ? true : false :
  Ptn extends object ? true extends { [K in keyof Ptn]: HasCustomGuard<Ptn[K]> }[keyof Ptn] ? true : false :
  false;

type HasInvalidSpecial<Ptn> =
  Ptn extends NotPattern<infer Inner> ? HasCustomGuard<Inner> extends true ? true : HasInvalidSpecial<Inner> :
  Ptn extends UnionPattern<infer Patterns> ? HasCustomGuard<Patterns[number]> extends true ? true : HasInvalidSpecial<Patterns[number]> :
  Ptn extends readonly (infer Item)[] ? true extends HasInvalidSpecial<Item> ? true : false :
  Ptn extends object ? true extends { [K in keyof Ptn]: HasInvalidSpecial<Ptn[K]> }[keyof Ptn] ? true : false :
  false;

type ValidNotInput<Ptn> = HasCustomGuard<Ptn> extends true ? never : Ptn;
type ValidMultiPattern<T, Ptn> = ValidNotInput<Ptn> extends never ? never : ValidPattern<T, Ptn>;
type ValidMultiPatterns<T, Patterns extends readonly unknown[]> = { [K in keyof Patterns]: ValidMultiPattern<T, Patterns[K]> };

// Multiple `.with(a, b, handler)` patterns are handled as a union pattern.
type MultiPattern<Patterns extends readonly unknown[]> = UnionPattern<Patterns>;

type Covered<T, Ptn> = HasBooleanGuard<Ptn> extends true ? never : Narrow<T, Ptn>;
type ValidPattern<T, Ptn> = HasInvalidSpecial<Ptn> extends true ? never : IsNever<Narrow<T, Ptn>> extends true ? never : Ptn;

/** Phantom type used only to make incomplete `.exhaustive()` calls a type error. */
type NonExhaustive<T> = {
  readonly __error: "Non-exhaustive match";
  readonly missing: T;
};

export type Matcher<Remaining, Out = never> = {
  with<const Ptn extends Pattern<Remaining>, R>(
    pattern: ValidPattern<Remaining, Ptn>,
    handler: (value: Narrow<Remaining, Ptn>) => R,
  ): Matcher<Exclude<Remaining, Covered<Remaining, Ptn>>, Out | R>;

  with<const Patterns extends readonly [Pattern<Remaining>, Pattern<Remaining>, ...Pattern<Remaining>[]], R>(
    ...args: [...patterns: ValidMultiPatterns<Remaining, Patterns>, handler: (value: NarrowUnion<Remaining, Patterns>) => R]
  ): Matcher<Exclude<Remaining, Covered<Remaining, MultiPattern<Patterns>>>, Out | R>;

  when<N extends Remaining, R>(
    guard: (value: Remaining) => value is N,
    handler: (value: N) => R,
  ): Matcher<Exclude<Remaining, N>, Out | R>;

  when<R>(
    guard: (value: Remaining) => boolean,
    handler: (value: Remaining) => R,
  ): Matcher<Remaining, Out | R>;

  otherwise<R>(handler: (value: Remaining) => R): Out | R;

  /** Runs the first matching case and throws if no case matches. Callable only after all union variants are covered. */
  exhaustive: [Remaining] extends [never] ? () => Out : NonExhaustive<Remaining>;
};

type Case = {
  pattern?: unknown;
  guard?: (value: unknown) => boolean;
  handler: (value: unknown) => unknown;
};

/** Starts a match chain. Cases are checked in order; the first match wins. */
export function match<T>(value: T): Matcher<T> {
  const cases: Case[] = [];

  const findMatch = () => cases.find((item) => item.guard ? item.guard(value) : matches(item.pattern, value));

  const api = {
    with(...args: unknown[]) {
      const handler = args[args.length - 1] as (value: unknown) => unknown;
      const patterns = args.slice(0, -1);
      const pattern = patterns.length === 1 ? patterns[0] : union(...patterns as [unknown, ...unknown[]]);
      cases.push({ pattern, handler });
      return api;
    },

    when(guard: (value: unknown) => boolean, handler: (value: unknown) => unknown) {
      cases.push({ guard, handler });
      return api;
    },

    otherwise(handler: (value: unknown) => unknown) {
      const item = findMatch();
      return item ? item.handler(value) : handler(value);
    },

    exhaustive() {
      const item = findMatch();
      if (item) return item.handler(value);
      throw new Error("Non-exhaustive match");
    },
  };

  return api as Matcher<T>;
}

function matches(pattern: unknown, value: unknown): boolean {
  if (pattern === wildcard) return true;
  if (isGuardPattern(pattern)) return pattern.guard(value);
  if (isNotPattern(pattern)) return !matches(pattern.pattern, value);
  if (isUnionPattern(pattern)) return pattern.patterns.some((item) => matches(item, value));

  if (Array.isArray(pattern)) {
    return Array.isArray(value) && pattern.length === value.length && pattern.every((item, index) => matches(item, value[index]));
  }

  if (isObject(pattern)) {
    return isObject(value) && !Array.isArray(value) && Reflect.ownKeys(pattern).every((key) => Object.hasOwn(value, key) && matches(pattern[key], value[key]));
  }

  return Object.is(pattern, value);
}

function isObject(value: unknown): value is Record<PropertyKey, unknown> {
  return typeof value === "object" && value !== null;
}

function isGuardPattern(value: unknown): value is GuardPattern<unknown, boolean, boolean> {
  return isObject(value) && value[guardTag] === true && typeof value.guard === "function";
}

function isNotPattern(value: unknown): value is NotPattern {
  return isObject(value) && value[notTag] === true && "pattern" in value;
}

function isUnionPattern(value: unknown): value is UnionPattern {
  return isObject(value) && value[unionTag] === true && Array.isArray(value.patterns);
}

function hasCustomGuardPattern(value: unknown): boolean {
  if (isGuardPattern(value)) return value[notSafeGuardTag] !== true;
  if (isNotPattern(value)) return hasCustomGuardPattern(value.pattern);
  if (isUnionPattern(value)) return value.patterns.some(hasCustomGuardPattern);
  if (Array.isArray(value)) return value.some(hasCustomGuardPattern);
  if (isObject(value)) return Reflect.ownKeys(value).some((key) => hasCustomGuardPattern(value[key]));
  return false;
}
