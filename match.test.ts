import { describe, expect, test } from "bun:test";
import { match, NonExhaustiveError, P } from "./match";

type Event =
  | { type: "ok"; value: number }
  | { type: "error"; error: string }
  | { type: "empty" };

describe("match", () => {
  test("matches primitives", () => {
    const result = match<number>(2)
      .with(1, () => "one")
      .with(2, () => "two")
      .otherwise(() => "other");

    expect(result).toBe("two");
  });

  test("matches bigint and symbol primitives", () => {
    const token = Symbol("token");

    expect(match<bigint>(1n).with(1n, () => "bigint").otherwise(() => "other")).toBe("bigint");
    expect(match<typeof token>(token).with(token, () => "symbol").otherwise(() => "other")).toBe("symbol");
  });

  test("runs otherwise when no case matches", () => {
    const result = match<number>(3)
      .with(1, () => "one")
      .with(2, () => "two")
      .otherwise(() => "other");

    expect(result).toBe("other");
  });

  test("matches object patterns", () => {
    const event: Event = { type: "ok", value: 42 };

    const result = match<Event>(event)
      .with({ type: "error" }, (event) => event.error)
      .with({ type: "ok" }, (event) => event.value)
      .with({ type: "empty" }, () => null)
      .exhaustive();

    expect(result).toBe(42);
  });

  test("matches nested guards", () => {
    const event: Event = { type: "ok", value: 42 };

    const result = match<Event>(event)
      .with({ type: "ok", value: P.when((value: unknown): value is 42 => value === 42) }, () => "answer")
      .otherwise(() => "other");

    expect(result).toBe("answer");
  });

  test("matches wildcard and tuples", () => {
    const result = match<readonly ["set", number]>(["set", 123] as const)
      .with(["set", P._], ([, value]) => value)
      .otherwise(() => 0);

    expect(result).toBe(123);
  });

  test("matches top-level wildcard", () => {
    const result = match({ id: 1 })
      .with(P._, (value) => value.id)
      .otherwise(() => 0);

    expect(result).toBe(1);
  });

  test("falls back when array pattern length does not match value length", () => {
    const result = match<readonly string[]>(["set", "123"])
      .with(["set"] as const, () => "short")
      .otherwise(() => "fallback");

    expect(result).toBe("fallback");
  });

  test("matches top-level type guard with when", () => {
    const value: string | number = "hello";

    const result = match<string | number>(value)
      .when(
        (value): value is string => typeof value === "string",
        (value) => value.toUpperCase(),
      )
      .otherwise((value) => value.toFixed(2));

    expect(result).toBe("HELLO");
  });

  test("matches and falls back with top-level boolean when", () => {
    expect(match<number>(1).when((value) => value > 0, () => "positive").otherwise(() => "other")).toBe("positive");
    expect(match<number>(-1).when((value) => value > 0, () => "positive").otherwise(() => "other")).toBe("other");
  });

  test("mixes when with with", () => {
    const result = match<string | number | boolean>(false)
      .when(
        (value): value is string => typeof value === "string",
        (value) => value.toUpperCase(),
      )
      .with(P.boolean, (value) => !value)
      .otherwise((value) => value + 1);

    expect(result).toBe(true);
  });

  test("matches guards inside tuples", () => {
    const result = match<readonly ["set", number]>(["set", 42] as const)
      .with(["set", P.when((value: unknown): value is 42 => value === 42)], ([, value]) => value)
      .otherwise(() => 0);

    expect(result).toBe(42);
  });

  test("matches built-in P guards", () => {
    const token = Symbol("token");

    expect(match<unknown>("x").with(P.string, (value) => value.toUpperCase()).otherwise(() => null)).toBe("X");
    expect(match<unknown>(2).with(P.number, (value) => value + 1).otherwise(() => null)).toBe(3);
    expect(match<unknown>(true).with(P.boolean, (value) => !value).otherwise(() => null)).toBe(false);
    expect(match<unknown>(1n).with(P.bigint, (value) => value + 1n).otherwise(() => null)).toBe(2n);
    expect(match<unknown>(token).with(P.symbol, (value) => value === token).otherwise(() => false)).toBe(true);
    expect(match<unknown>(null).with(P.null, () => "null").otherwise(() => "other")).toBe("null");
    expect(match<unknown>(undefined).with(P.undefined, () => "undefined").otherwise(() => "other")).toBe("undefined");
    expect(match<unknown>(null).with(P.nullish, () => "nullish").otherwise(() => "other")).toBe("nullish");
    expect(match<unknown>(undefined).with(P.nullish, () => "nullish").otherwise(() => "other")).toBe("nullish");
    expect(match<unknown>([1, 2]).with(P.array, (value) => value.length).otherwise(() => 0)).toBe(2);
    expect(match<unknown>({ length: 2 }).with(P.array, (value) => value.length).otherwise(() => 0)).toBe(0);
  });

  test("matches instanceOf patterns", () => {
    class CustomError extends Error {
      code = "custom";
    }

    expect(match<unknown>(new Date(0)).with(P.instanceOf(Date), (value) => value.toISOString()).otherwise(() => null)).toBe("1970-01-01T00:00:00.000Z");
    expect(match<unknown>(new CustomError("boom")).with(P.instanceOf(CustomError), (value) => value.code).otherwise(() => null)).toBe("custom");
    expect(match<unknown>({ message: "boom" }).with(P.instanceOf(Error), (value) => value.message).otherwise(() => "plain")).toBe("plain");
  });

  test("matches negated patterns", () => {
    expect(match<"idle" | "error">("idle").with(P.not("error"), () => "not-error").with("error", () => "error").exhaustive()).toBe("not-error");
    expect(match<Event>({ type: "ok", value: 1 }).with(P.not({ type: "error" }), () => "not-error").with({ type: "error" }, () => "error").exhaustive()).toBe("not-error");
    expect(match<string | number>(123).with(P.not(P.string), (value) => value + 1).with(P.string, (value) => value.length).exhaustive()).toBe(124);
    expect(match<Error | Date>(new Date(0)).with(P.not(P.instanceOf(Error)), (value) => value.toISOString()).with(P.instanceOf(Error), (value) => value.message).exhaustive()).toBe("1970-01-01T00:00:00.000Z");
  });

  test("matches P.any alias", () => {
    expect(match<unknown>("hello").with(P.any, () => "anything").otherwise(() => "fallback")).toBe("anything");
  });

  test("matches union patterns", () => {
    expect(match<"idle" | "loading" | "error">("loading").with(P.union("idle", "loading"), () => "pending").with("error", () => "error").exhaustive()).toBe("pending");
    expect(match<Event>({ type: "empty" }).with(P.union({ type: "ok" }, { type: "empty" }), () => "not-error").with({ type: "error" }, () => "error").exhaustive()).toBe("not-error");
    expect(match<string | number | boolean>(123).with(P.union(P.string, P.number), (value) => typeof value).with(P.boolean, () => "boolean").exhaustive()).toBe("number");
    expect(match<"idle" | "loading" | "error">("idle").with(P.union(P.not("error"), "error"), () => "covered").exhaustive()).toBe("covered");
  });

  test("matches multiple patterns in one with", () => {
    expect(match<"idle" | "loading" | "error">("loading").with("idle", "loading", () => "pending").with("error", () => "error").exhaustive()).toBe("pending");
    expect(match<Event>({ type: "empty" }).with({ type: "ok" }, { type: "empty" }, () => "not-error").with({ type: "error" }, () => "error").exhaustive()).toBe("not-error");
    expect(match<string | number | boolean>(123).with(P.string, P.number, (value) => typeof value).with(P.boolean, () => "boolean").exhaustive()).toBe("number");
  });

  test("matches pattern plus guard in one with", () => {
    const positive = { type: "ok" as const, value: 2 };
    const negative = { type: "ok" as const, value: -1 };

    expect(match<Event>(positive).with({ type: "ok" }, (value) => value.value > 0, () => "positive").with({ type: "ok" }, () => "other-ok").with({ type: "error" }, () => "error").with({ type: "empty" }, () => "empty").exhaustive()).toBe("positive");
    expect(match<Event>(negative).with({ type: "ok" }, (value) => value.value > 0, () => "positive").with({ type: "ok" }, () => "other-ok").with({ type: "error" }, () => "error").with({ type: "empty" }, () => "empty").exhaustive()).toBe("other-ok");
  });

  test("rejects P.when inside P.not, P.union, and multiple-pattern with", () => {
    expect(() => P.not(P.when(() => true) as never)).toThrow("P.not does not support P.when patterns");
    expect(() => P.union("ok", P.when(() => true) as never)).toThrow("P.union does not support P.when patterns");
    expect(() => match<string>("ok").with("ok", P.when(() => true) as never, () => "bad")).toThrow("P.union does not support P.when patterns");
  });

  test("matches null and undefined", () => {
    expect(match<null | string>(null).with(null, () => "null").otherwise(() => "other")).toBe("null");
    expect(match<undefined | string>(undefined).with(undefined, () => "undefined").otherwise(() => "other")).toBe("undefined");
  });

  test("matches nested objects", () => {
    const result = match({ user: { role: "admin", id: 1 } })
      .with({ user: { role: "admin" } }, (value) => value.user.id)
      .otherwise(() => 0);

    expect(result).toBe(1);
  });

  test("matches array guard inside objects", () => {
    const result = match<{ items: readonly number[] } | { items: string }>({ items: [1, 2, 3] })
      .with({ items: P.array }, (value) => value.items.length)
      .otherwise(() => 0);

    expect(result).toBe(3);
  });

  test("matches partial objects", () => {
    const result = match<{ a: number; b: number }>({ a: 1, b: 2 })
      .with({ a: 1 }, (value) => value.b)
      .otherwise(() => 0);

    expect(result).toBe(2);
  });

  test("object property patterns require the key to exist", () => {
    expect(match<{ storeId?: string; teamId?: string }>({ teamId: "team" }).with({ storeId: P._ }, () => "store").otherwise(() => "team")).toBe("team");
    expect(match<{ type?: undefined }>({}).with({ type: undefined }, () => "present").otherwise(() => "missing")).toBe("missing");
    expect(match<{ type?: undefined }>({ type: undefined }).with({ type: undefined }, () => "present").otherwise(() => "missing")).toBe("present");
  });

  test("uses the first matching case", () => {
    const result = match<{ type: string; value: number }>({ type: "ok", value: 42 })
      .with({ type: "ok" }, () => "first")
      .with({ type: "ok", value: 42 }, () => "second")
      .otherwise(() => "fallback");

    expect(result).toBe("first");
  });

  test("matches symbol keys in object patterns", () => {
    const secret = Symbol("secret");
    const value: { [secret]: number; visible: boolean } = { [secret]: 7, visible: true };

    const result = match(value)
      .with({ [secret]: 7 }, () => "symbol-key")
      .otherwise(() => "fallback");

    expect(result).toBe("symbol-key");
  });

  test("uses Object.is for primitive equality", () => {
    expect(match<number>(NaN).with(NaN, () => "nan").otherwise(() => "other")).toBe("nan");
    expect(match<number>(-0).with(0, () => "zero").otherwise(() => "other")).toBe("other");
  });

  test("empty object pattern matches non-array objects", () => {
    expect(match<object | null>({ a: 1 }).with({}, () => "object").otherwise(() => "other")).toBe("object");
    expect(match<object | null>([]).with({}, () => "object").otherwise(() => "other")).toBe("other");
    expect(match<object | null>(null).with({}, () => "object").otherwise(() => "other")).toBe("other");
  });

  test("throws NonExhaustiveError for runtime non-exhaustive exhaustive call", () => {
    const unsafe = match<Event>({ type: "empty" })
      .with({ type: "ok" }, (event) => event.value)
      .with({ type: "error" }, (event) => event.error)
      .exhaustive as unknown as () => unknown;

    expect(unsafe).toThrow(NonExhaustiveError);
    expect(unsafe).toThrow("Non-exhaustive match: no case matched");

    try {
      unsafe();
    } catch (error) {
      expect(error).toBeInstanceOf(NonExhaustiveError);
      expect((error as NonExhaustiveError).value).toEqual({ type: "empty" });
    }
  });
});
