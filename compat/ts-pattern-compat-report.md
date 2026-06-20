# ts-pattern compatibility run

Generated all upstream `ts-pattern` test files into one curiosity-only harness:

- source repo: `gvergnaud/ts-pattern`, current default branch clone in `/tmp/ts-pattern-upstream`
- generated file: `compat/ts-pattern-all.generated.ts`
- upstream test files included: 48
- generated lines: 13,383

Run command:

```bash
bun test ./compat/ts-pattern-all.generated.ts --reporter=junit --reporter-outfile=/tmp/ts-pattern-compat.junit.xml
```

Result:

- total tests: 453
- pass: 274
- fail: 179

This is a runtime compatibility harness, not a faithful type-test port. Bun does not typecheck tests, and the generated file includes small shims for upstream-only helpers and unsupported `ts-pattern` APIs so the suite can run far enough to show feature gaps.

## Main failing areas

Most failures are expected because this micro-library intentionally does not implement full `ts-pattern`.

| Area | Approx failures | Why |
| --- | ---: | --- |
| `P.select` | 35 | Selection/extraction is not implemented. |
| `P.array(pattern)` / variadic arrays | 27 | Only bare `P.array` and exact array/tuple patterns are supported. |
| `P.record` | 26 | Record/key-value pattern matching is not implemented. |
| `P.not` edge cases | 6 | Basic negated patterns are supported; full `ts-pattern` negation semantics are not. |
| `P.union` edge cases / `P.intersection` | 10+ | Basic `P.union(...)` is supported; full union semantics and intersection are not. |
| `P.instanceOf` edge cases | 2 | Basic class matching is supported; full `ts-pattern` instance semantics are not. |
| Chainable string/number/bigint guards | 20+ | No `.startsWith()`, `.between()`, `.optional()`, `.select()`, etc. |
| Multiple patterns in one `.with(...)` | 5 | Only `.with(pattern, handler)` is supported. |
| `.returnType()` and exhaustive fallback helpers | 4+ | Not implemented. |

## Actually interesting semantic mismatches

These are not just missing APIs:

1. Runtime non-exhaustive error is a plain `Error`, not `NonExhaustiveError`.

   This is probably fine for the micro-library, but it differs from `ts-pattern`.

2. `.with(pattern, guard, handler)` is not supported.

   `ts-pattern` supports guard clauses inside `.with`; this library only supports `.when(...)` as a separate chain step.

## Recommendation

Do not chase full parity. The failures are mostly exactly the features we chose not to include.

The key-existence mismatch found in the first run is fixed: `{ key: P._ }` and `{ key: undefined }` no longer match objects where `key` is missing.
