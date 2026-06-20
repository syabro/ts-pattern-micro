# micromatch-one-file

Tiny `ts-pattern`-style matcher meant to be copied into a project as one file.

Copy `match.ts`, then use:

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

Use type predicates when a guard should narrow TypeScript types:

```ts
const result = match(value as string | number | boolean)
  .when((value): value is string => typeof value === "string", (value) => value.toUpperCase())
  .with(P.number, (value) => value.toFixed(2))
  .with(P.boolean, (value) => value)
  .exhaustive();
```

## What it supports

- primitive patterns: strings, numbers, booleans, bigint, symbols, `null`, `undefined`
- partial object patterns: `{ type: "ok" }`
- tuple/array patterns: `["set", P._]`
- array guard: `P.array`
- wildcard: `P._`
- guards: `P.when(...)`, `.when(...)`
- union exhaustiveness through `.exhaustive()`

## Notes

- Cases run top to bottom; the first match wins.
- Object patterns are partial: `{ a: 1 }` matches `{ a: 1, b: 2 }`, but not arrays.
- Equality uses `Object.is`, so `NaN` matches `NaN`, but `0` does not match `-0`.
- Boolean guards only affect runtime. Use a TypeScript type predicate if you want type narrowing.
- `.exhaustive()` throws `Error("Non-exhaustive match")` at runtime if no case matches.
- `P.array` only checks that the value is an array; it does not validate item types.
- Plain arrays check length at runtime; tuples get stronger type checks.

## Development check

```bash
bun run check
```

This runs Bun tests and `tsc --noEmit` type checks.
