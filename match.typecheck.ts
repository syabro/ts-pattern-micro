import { match, P, type Narrow } from "./match";

// This file is checked by `tsc --noEmit`.
// Every `assertEqual<Actual, Expected>(true)` line is a compile-time test.

type Event =
  | { type: "ok"; value: number }
  | { type: "error"; error: string }
  | { type: "empty" };

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? (<T>() => T extends B ? 1 : 2) extends (<T>() => T extends A ? 1 : 2)
      ? true
      : false
    : false;

type Simplify<T> = { [K in keyof T]: T[K] } & {};

function assertEqual<Actual, Expected>(_value: Equal<Actual, Expected> extends true ? true : never) {}

// Narrow<T, Pattern>: object patterns pick the matching union member.
assertEqual<Simplify<Narrow<Event, { type: "ok" }>>, { type: "ok"; value: number }>(true);
assertEqual<Simplify<Narrow<Event, { type: "error" }>>, { type: "error"; error: string }>(true);
assertEqual<Simplify<Narrow<Event, { type: "empty" }>>, { type: "empty" }>(true);
assertEqual<Simplify<Narrow<Event | null, { type: "ok" }>>, { type: "ok"; value: number }>(true);
assertEqual<Simplify<Narrow<Event, { type: "ok"; value: ReturnType<typeof P.when<unknown, 42>> }>>, { type: "ok"; value: 42 }>(true);

declare const event: Event;

// `.with({ type: ... })` narrows handler input and enables `.exhaustive()` when all variants are covered.
const objectPatternResult = match<Event>(event)
  .with({ type: "ok" }, (event) => {
    assertEqual<Simplify<typeof event>, { type: "ok"; value: number }>(true);
    return event.value;
  })
  .with({ type: "error" }, (event) => {
    assertEqual<Simplify<typeof event>, { type: "error"; error: string }>(true);
    return event.error;
  })
  .with({ type: "empty" }, (event) => {
    assertEqual<Simplify<typeof event>, { type: "empty" }>(true);
    return null;
  })
  .exhaustive();

assertEqual<typeof objectPatternResult, number | string | null>(true);

// Nested type-predicate guards narrow the nested property in the handler.
const nestedGuardResult = match<Event>(event)
  .with({ type: "ok", value: P.when((value: unknown): value is 42 => value === 42) }, (event) => {
    assertEqual<Simplify<typeof event>, { type: "ok"; value: 42 }>(true);
    return event.value;
  })
  .otherwise(() => 0);

assertEqual<typeof nestedGuardResult, number>(true);

declare const nullableEvent: Event | null;

// Literal `null` patterns remove `null` from the remaining type before `.otherwise()`.
match<Event | null>(nullableEvent)
  .with(null, () => "null")
  .with({ type: "ok" }, (event) => {
    assertEqual<Simplify<typeof event>, { type: "ok"; value: number }>(true);
    return event.value;
  })
  .otherwise((event) => {
    assertEqual<Simplify<typeof event>, { type: "error"; error: string } | { type: "empty" }>(true);
    return event.type;
  });

declare const tuple: readonly ["set", number] | readonly ["get", string];

// Tuple patterns narrow each position and can prove exhaustiveness.
const tupleResult = match<typeof tuple>(tuple)
  .with(["set", P.number], (value) => {
    assertEqual<typeof value, readonly ["set", number]>(true);
    return value[1].toFixed(2);
  })
  .with(["get", P.string], (value) => {
    assertEqual<typeof value, readonly ["get", string]>(true);
    return value[1].toUpperCase();
  })
  .exhaustive();

assertEqual<typeof tupleResult, string>(true);

declare const primitive: string | number | boolean;

// Built-in primitive guards narrow the handler and remove their type from the remaining union.
const primitiveResult = match<typeof primitive>(primitive)
  .with(P.string, (value) => {
    assertEqual<typeof value, string>(true);
    return value.toUpperCase();
  })
  .with(P.number, (value) => {
    assertEqual<typeof value, number>(true);
    return value.toFixed(2);
  })
  .with(P.boolean, (value) => {
    assertEqual<typeof value, boolean>(true);
    return value ? "true" : "false";
  })
  .exhaustive();

assertEqual<typeof primitiveResult, string>(true);

declare const unknownValue: unknown;

// Built-in value guards also work from `unknown`.
match<unknown>(unknownValue)
  .with(P.bigint, (value) => {
    assertEqual<typeof value, bigint>(true);
    return value;
  })
  .with(P.symbol, (value) => {
    assertEqual<typeof value, symbol>(true);
    return value;
  })
  .with(P.null, (value) => {
    assertEqual<typeof value, null>(true);
    return value;
  })
  .with(P.undefined, (value) => {
    assertEqual<typeof value, undefined>(true);
    return value;
  })
  .with(P.array, (value) => {
    assertEqual<typeof value, readonly unknown[]>(true);
    return value;
  })
  .otherwise((value) => value);

const arrayOrString = null as unknown as readonly unknown[] | string;

// Bare `P.array` covers the array branch and stays compatible with `.exhaustive()`.
const arrayExhaustiveResult = match<typeof arrayOrString>(arrayOrString)
  .with(P.array, (value) => {
    assertEqual<typeof value, readonly unknown[]>(true);
    return value.length;
  })
  .with(P.string, (value) => {
    assertEqual<typeof value, string>(true);
    return value.length;
  })
  .exhaustive();

assertEqual<typeof arrayExhaustiveResult, number>(true);

// `.when(type predicate, handler)` narrows Remaining for `.otherwise()`.
const predicateWhenResult = match<typeof primitive>(primitive)
  .when(
    (value): value is string => typeof value === "string",
    (value) => {
      assertEqual<typeof value, string>(true);
      return "string" as const;
    },
  )
  .otherwise((value) => {
    assertEqual<typeof value, number | boolean>(true);
    return "other" as const;
  });

assertEqual<typeof predicateWhenResult, "string" | "other">(true);

declare const scalar: string | number;

// `.when(type predicate, handler)` can also prove exhaustiveness when all branches are covered.
const exhaustiveWhenResult = match<typeof scalar>(scalar)
  .when(
    (value): value is string => typeof value === "string",
    (value) => value.toUpperCase(),
  )
  .when(
    (value): value is number => typeof value === "number",
    (value) => value.toFixed(2),
  )
  .exhaustive();

assertEqual<typeof exhaustiveWhenResult, string>(true);

// `.with(...)` and `.when(...)` compose in one chain.
const mixedWhenWithResult = match<typeof primitive>(primitive)
  .with(P.boolean, (value) => {
    assertEqual<typeof value, boolean>(true);
    return "boolean" as const;
  })
  .when(
    (value): value is string => typeof value === "string",
    (value) => {
      assertEqual<typeof value, string>(true);
      return "string" as const;
    },
  )
  .with(P.number, (value) => {
    assertEqual<typeof value, number>(true);
    return "number" as const;
  })
  .exhaustive();

assertEqual<typeof mixedWhenWithResult, "boolean" | "string" | "number">(true);

// Negative type tests: these lines must fail unless the matcher keeps its safety guarantees.
const nonExhaustive = match<Event>(event)
  .with({ type: "ok" }, (event) => event.value)
  .with({ type: "error" }, (event) => event.error)
  .exhaustive;

// @ts-expect-error incomplete matches cannot call exhaustive
nonExhaustive();

const booleanPatternGuardOnly = match<number>(1)
  .with(P.when((value: number) => value > 0), () => "positive")
  .exhaustive;

// @ts-expect-error boolean guard patterns do not prove exhaustiveness
booleanPatternGuardOnly();

const booleanWhenOnly = match<number>(1)
  .when((value) => value > 0, () => "positive")
  .exhaustive;

// @ts-expect-error boolean when guards do not prove exhaustiveness
booleanWhenOnly();

// @ts-expect-error impossible guard pattern for an object input
match<{ a: number }>({ a: 1 }).with(P.string, () => "bad");

declare const fn: () => number;

// @ts-expect-error functions do not accept object patterns
match<typeof fn>(fn).with({}, () => "bad");

// @ts-expect-error tuple patterns must keep tuple length
match<readonly ["set", number]>(["set", 1] as const).with(["set"] as const, () => "bad");
