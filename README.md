# ts-pattern-micro

**YOU ONLY NEED ONE FILE FROM THIS REPOSITORY: `ts-pattern-micro.ts`.**

Single-file, zero-dependency pattern matching for TypeScript.

Use it when you want `ts-pattern`-style matching without adding a package dependency or build step.

## Install

No npm package needed. Download the file into your project:

```bash
wget -O ts-pattern-micro.ts https://raw.githubusercontent.com/syabro/ts-pattern-micro/main/ts-pattern-micro.ts
```

## Quick start

```ts
import { match, P } from "./ts-pattern-micro";

type Event =
  | { type: "ok"; value: number }
  | { type: "error"; error: string }
  | { type: "empty" };

declare const event: Event;

const result = match(event)
  .with({ type: "ok" }, (event) => event.value)
  .with({ type: "error" }, (event) => event.error)
  .with({ type: "empty" }, () => null)
  .exhaustive();
```

The shape is always:

```ts
match(value).with(pattern, handler).otherwise(fallback)
match(value).with(pattern, handler).exhaustive()
```

Cases run top to bottom. The first matching case wins.

## Examples

### Built-in guards

```ts
const result = match(value as string | number | boolean)
  .with(P.string, (value) => value.toUpperCase())
  .with(P.number, (value) => value.toFixed(2))
  .with(P.boolean, (value) => value)
  .exhaustive();
```

### Custom conditions

Use `P.when(...)` when a built-in guard is not enough:

```ts
const result = match(value as number)
  .with(P.when((value): value is 0 => value === 0), () => "zero")
  .otherwise(() => "non-zero");
```

### Guarded handlers

Add a guard after a pattern when the handler needs an extra condition:

```ts
const result = match(event)
  .with({ type: "ok" }, (event) => event.value > 0, (event) => event.value)
  .otherwise(() => null);
```

### Multiple patterns in one branch

```ts
const result = match(event)
  .with({ type: "ok" }, { type: "empty" }, () => "not an error")
  .with({ type: "error" }, (event) => event.error)
  .exhaustive();
```

### Union patterns

Use `P.union(...)` when the group is itself part of a larger pattern:

```ts
type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: Error };

declare const state: State;

const result = match(state)
  .with({ status: P.union("idle", "loading") }, () => "pending")
  .with({ status: "success" }, (state) => state.data)
  .with({ status: "error" }, (state) => state.error.message)
  .exhaustive();
```

### Negation

```ts
const result = match(event)
  .with(P.not({ type: "error" }), () => "not an error")
  .with({ type: "error" }, (event) => event.error)
  .exhaustive();
```

### Class instances

```ts
const message = match(value as unknown)
  .with(P.instanceOf(Error), (error) => error.message)
  .with(P.instanceOf(Date), (date) => date.toISOString())
  .otherwise(() => null);
```

## Supported

- Primitive patterns: strings, numbers, booleans, bigint, symbols, `null`, `undefined`
- Partial object patterns: `{ type: "ok" }`
- Tuple and exact array patterns: `["set", P._]`
- Wildcard: `P._` or `P.any`
- Built-in guards: `P.string`, `P.number`, `P.boolean`, `P.bigint`, `P.symbol`, `P.null`, `P.undefined`, `P.nullish`
- Array guard: `P.array` for “any array”
- Class guard: `P.instanceOf(...)`
- Custom guard: `P.when(...)`
- Negation: `P.not(...)`
- Union patterns: `P.union(...)`
- Multiple patterns in one branch: `.with(a, b, handler)`
- Pattern guards: `.with(pattern, guard, handler)`
- Fallback: `.otherwise(...)`
- Exhaustiveness: `.exhaustive()`

## Out of scope

This is not full `ts-pattern`. It stays small on purpose.

- `P.select(...)`: read values directly in the handler instead.
- `P.array(pattern)` and variadic array patterns: use `P.array` for “any array”, tuple patterns for fixed shapes, or `P.when(...)` for item validation.
- `P.record(...)`: use object patterns for known keys, or `P.when(...)` for dynamic key/value checks.
- `P.optional(...)`: match `undefined` explicitly, or use `P.union(...)` / `P.nullish` where that fits.
- `P.intersection(...)`: merge object patterns when possible, or use `.with(pattern, guard, handler)` for extra conditions.
- Chainable guards like `P.string.startsWith(...)` or `P.number.between(...)`: use `P.when(...)`.

## Semantics

### Matching order and exhaustiveness

- Cases run top to bottom.
- The first matching case wins.
- `.otherwise(...)` runs when no case matches.
- `.exhaustive()` throws `NonExhaustiveError` when no case matches.
- The unmatched value is available as `error.value`.

### Equality and object patterns

- Primitive equality uses `Object.is`.
- `NaN` matches `NaN`.
- `0` does not match `-0`.
- Object patterns are partial: `{ a: 1 }` matches `{ a: 1, b: 2 }`.
- Object pattern keys must exist on the value: `{ a: P._ }` does not match `{}`.
- Object patterns do not match arrays.

### Type narrowing

- Use TypeScript type predicates when a guard should narrow types:

  ```ts
  P.when((value): value is string => typeof value === "string")
  ```

- Boolean guards only affect runtime.
- Boolean guards do not prove exhaustiveness.
- `P.union(...)` and `P.not(...)` support literals, objects, tuples, and built-in `P.*` guards.
- `P.union(...)` and `P.not(...)` do not support custom `P.when(...)` guards.
- `P.array` only checks that the value is an array.
- `P.array` does not validate item types.

## Development check

```bash
bun run check
```

This runs Bun tests and `tsc --noEmit` type checks.
