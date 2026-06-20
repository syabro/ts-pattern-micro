# ts-pattern-micro

Single-file, zero-dependency pattern matching for TypeScript.

## Install

No npm package needed. Download the file into your project:

```bash
wget -O match.ts https://raw.githubusercontent.com/syabro/ts-pattern-micro/main/match.ts
```

Then use:

```ts
import { match, P } from "./match";

type Event =
  | { type: "ok"; value: number }
  | { type: "error"; error: string }
  | { type: "empty" };

const result = match(event as Event)
  .with({ type: "ok" }, (event) => event.value)
  .with({ type: "error" }, (event) => event.error)
  .with({ type: "empty" }, () => null)
  .exhaustive();
```

Use built-in guards for common primitive cases:

```ts
const result = match(value as string | number | boolean)
  .with(P.string, (value) => value.toUpperCase())
  .with(P.number, (value) => value.toFixed(2))
  .with(P.boolean, (value) => value)
  .exhaustive();
```

Use `P.when(...)` for custom conditions:

```ts
const result = match(value as number)
  .with(P.when((value): value is 0 => value === 0), () => "zero")
  .otherwise(() => "non-zero");
```

Use `P.not(...)` to cover everything except one pattern:

```ts
const result = match(event as Event)
  .with(P.not({ type: "error" }), () => "not an error")
  .with({ type: "error" }, (event) => event.error)
  .exhaustive();
```

Use `P.instanceOf(...)` for classes:

```ts
const message = match(value as unknown)
  .with(P.instanceOf(Error), (error) => error.message)
  .with(P.instanceOf(Date), (date) => date.toISOString())
  .otherwise(() => null);
```

## What it supports

- primitive patterns: strings, numbers, booleans, bigint, symbols, `null`, `undefined`
- partial object patterns: `{ type: "ok" }`
- tuple/array patterns: `["set", P._]`
- array guard: `P.array`
- class guard: `P.instanceOf(...)`
- wildcard: `P._`
- negated patterns: `P.not(...)`
- guards: `P.when(...)`, `.when(...)`
- union exhaustiveness through `.exhaustive()`

## Notes

- Cases run top to bottom; the first match wins.
- Object patterns are partial: `{ a: 1 }` matches `{ a: 1, b: 2 }`, but not arrays.
- Equality uses `Object.is`, so `NaN` matches `NaN`, but `0` does not match `-0`.
- Boolean guards only affect runtime. Use a TypeScript type predicate if you want type narrowing.
- `P.not(...)` supports literals, objects, tuples, and built-in `P.*` guards. It intentionally does not support custom `P.when(...)` guards.
- `.exhaustive()` throws `Error("Non-exhaustive match")` at runtime if no case matches.
- `P.array` only checks that the value is an array; it does not validate item types.
- Plain arrays check length at runtime; tuples get stronger type checks.

## Development check

```bash
bun run check
```

This runs Bun tests and `tsc --noEmit` type checks.
