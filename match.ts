type Primitive = string | number | boolean | bigint | symbol | null | undefined;

const wildcard = Symbol("match.wildcard");
const guardTag = Symbol("match.guard");
const notTag = Symbol("match.not");
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

export type Pattern<T = unknown> =
  | Wildcard
  | AnyGuardPattern
  | AnyNotPattern
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

export const P = {
  /** Matches any value. */
  _: wildcard,
  /** Creates a guard pattern. */
  when,
  /** Negates a pattern, except custom `P.when(...)` guards. */
  not,
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
  Ptn extends readonly unknown[] ? T extends readonly unknown[] ? NarrowArray<T, Ptn> : never :
  Ptn extends object ? T extends object ? NarrowObject<T, Ptn> : never :
  Ptn extends T ? Ptn : Extract<T, Ptn>;

type NarrowGuard<T, U> =
  T extends unknown
    ? U extends unknown
      ? unknown extends T ? U : unknown extends U ? T : T extends Primitive ? U extends Primitive ? T & U : never : U extends Primitive ? never : T & U
      : never
    : never;

type NarrowNot<T, Ptn> = Exclude<T, Narrow<T, Ptn>>;

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
  Ptn extends readonly (infer Item)[] ? true extends HasBooleanGuard<Item> ? true : false :
  Ptn extends object ? true extends { [K in keyof Ptn]: HasBooleanGuard<Ptn[K]> }[keyof Ptn] ? true : false :
  false;

type HasCustomGuard<Ptn> =
  Ptn extends GuardPattern<unknown, boolean, infer SupportsNot> ? SupportsNot extends true ? false : true :
  Ptn extends NotPattern<infer Inner> ? HasCustomGuard<Inner> :
  Ptn extends readonly (infer Item)[] ? true extends HasCustomGuard<Item> ? true : false :
  Ptn extends object ? true extends { [K in keyof Ptn]: HasCustomGuard<Ptn[K]> }[keyof Ptn] ? true : false :
  false;

type HasInvalidNot<Ptn> =
  Ptn extends NotPattern<infer Inner> ? HasCustomGuard<Inner> extends true ? true : HasInvalidNot<Inner> :
  Ptn extends readonly (infer Item)[] ? true extends HasInvalidNot<Item> ? true : false :
  Ptn extends object ? true extends { [K in keyof Ptn]: HasInvalidNot<Ptn[K]> }[keyof Ptn] ? true : false :
  false;

type ValidNotInput<Ptn> = HasCustomGuard<Ptn> extends true ? never : Ptn;

type Covered<T, Ptn> = HasBooleanGuard<Ptn> extends true ? never : Narrow<T, Ptn>;
type ValidPattern<T, Ptn> = HasInvalidNot<Ptn> extends true ? never : IsNever<Narrow<T, Ptn>> extends true ? never : Ptn;

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
    with(pattern: unknown, handler: (value: unknown) => unknown) {
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

function hasCustomGuardPattern(value: unknown): boolean {
  if (isGuardPattern(value)) return value[notSafeGuardTag] !== true;
  if (isNotPattern(value)) return hasCustomGuardPattern(value.pattern);
  if (Array.isArray(value)) return value.some(hasCustomGuardPattern);
  if (isObject(value)) return Reflect.ownKeys(value).some((key) => hasCustomGuardPattern(value[key]));
  return false;
}
