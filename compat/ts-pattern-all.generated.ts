// Generated from gvergnaud/ts-pattern tests for curiosity-only compatibility checks.
// Do not include this file in the normal project check; run it explicitly.

import { describe, expect, it } from 'bun:test';
import { match as localMatch, P as localP, type Pattern as LocalPattern } from '../match';

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? (<T>() => T extends B ? 1 : 2) extends (<T>() => T extends A ? 1 : 2)
      ? true
      : false
    : false;
type Expect<T extends true> = T;
type Not<T extends boolean> = T extends true ? false : true;
type Compute<T> = { [K in keyof T]: T[K] } & {};
type Primitives = string | number | boolean | bigint | symbol | null | undefined;
type IsPlainObject<T> = T extends object ? T extends readonly unknown[] ? false : T extends (...args: any[]) => unknown ? false : true : false;

type Pattern<T = unknown> = LocalPattern<T>;
type Matcher<input, output = never> = unknown;
type ArrayP<input, pattern> = unknown;
type GuardP<input, narrowed> = unknown;
type SelectP<key = unknown> = unknown;
type NotP<input, pattern> = unknown;
type OptionalP<input, pattern> = unknown;
type NonNullablePattern<p> = unknown;
type DeepExclude<a, b> = unknown;
type IsMatching<a, b> = unknown;
type InvertPattern<p, input = unknown> = unknown;
type ExtractPreciseValue<a, b> = unknown;
type BuildMany<a, b> = unknown;
type DistributeMatchingUnions<a, b> = unknown;
type FindSelected<a, b> = unknown;
type MixedNamedAndAnonymousSelectError = unknown;
type SeveralAnonymousSelectError = unknown;

namespace symbols {
  export type anonymousSelectKey = '@ts-pattern/anonymous-select-key';
}

class NonExhaustiveError extends Error {}

const unsupported = (name: string) => (..._args: unknown[]) => {
  throw new Error(`Unsupported ts-pattern API in ts-pattern-micro: ${name}`);
};

const P = Object.assign(Object.create(null), localP, {
  any: localP._,
  nullish: localP.when((value: unknown): value is null | undefined => value === null || value === undefined),
  nonNullable: localP.when((value: unknown) => value !== null && value !== undefined),
  select: unsupported('P.select'),
  not: localP.not,
  optional: unsupported('P.optional'),
  union: unsupported('P.union'),
  intersection: unsupported('P.intersection'),
  array: unsupported('P.array'),
  set: unsupported('P.set'),
  map: unsupported('P.map'),
  record: unsupported('P.record'),
  instanceOf: localP.instanceOf,
  shape: unsupported('P.shape'),
}) as any;

const match = localMatch as any;
const isMatching = (function (pattern: unknown, value?: unknown) {
  const run = (input: unknown) => localMatch(input).with(pattern as never, () => true).otherwise(() => false);
  return arguments.length === 1 ? run : run(value);
}) as any;

type Option<a> = { kind: 'none' } | { kind: 'some'; value: a };

const none: Option<never> = { kind: 'none' };
const some = <a>(value: a): Option<a> => ({
  kind: 'some',
  value,
});

type Blog = {
  id: number;
  title: string;
};

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };

type Event =
  | { type: 'fetch' }
  | { type: 'success'; data: string; requestTime?: number }
  | { type: 'error'; error: Error }
  | { type: 'cancel' };

type BigUnion =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

type AsyncResultStatus = 'idle' | 'loading' | 'error' | 'success';

interface BaseAsyncResult<TData, TError = Error> {
  status: AsyncResultStatus;
  data?: TData;
  error?: TError;
}

interface AsyncResultIdleOrLoading<TData, TError = Error>
  extends BaseAsyncResult<TData, TError> {
  status: 'idle' | 'loading';
}

interface AsyncResultSuccess<TData, TError = Error>
  extends BaseAsyncResult<TData, TError> {
  status: 'success';
  data: TData;
}

interface AsyncResultError<TData, TError = Error>
  extends BaseAsyncResult<TData, TError> {
  status: 'error';
  error: TError;
}
type AsyncResult<TData, TError = Error> =
  | AsyncResultIdleOrLoading<TData, TError>
  | AsyncResultSuccess<TData, TError>
  | AsyncResultError<TData, TError>;


namespace DefinitionModule {
interface RequestStyle {
  palette?: string;
}

type AxisBound = string | number;
type Aggregator = 'sum' | 'avg';

interface Axis {
  label?: string;
  scale?: 'linear' | 'log';
  min?: AxisBound;
  max?: AxisBound;
  include_zero?: boolean;
  units?: boolean;
}

interface DistributionXAxis {
  scale?: 'linear' | 'log';
  min?: AxisBound;
  max?: AxisBound;
  include_zero?: boolean;
}

interface DistributionYAxis {
  label?: string;
  scale?: 'linear' | 'log';
  min?: AxisBound;
  max?: AxisBound;
  include_zero?: boolean;
  units?: boolean;
}

interface Marker {
  value?: string;
  time?: string;
  display_type?: string;
  label?: string;
  val?: number;
  min?: number;
  max?: number;
  type?: string;
  from_ts?: string;
  to_ts?: string;
  ts?: string;
  on_right_yaxis?: boolean;
  is_hovered?: boolean;
}

interface Event {
  q: string;
  tags_execution?: 'TagsExecution';
}

type Markers = Marker[];

interface ConditionalFormat {
  comparator: 'Comparator';
  value?: number | string;
  palette: string;
  custom_bg_color?: string;
  custom_fg_color?: string;
  image_url?: string;
  hide_value?: boolean;
  metric?: string;
}

interface ContextMenuLink {
  link?: string;
  is_hidden?: boolean;
}

interface UserDefinedLink {
  label: string;
  link: string;
}

type CustomLink = ContextMenuLink | UserDefinedLink;

type OrderDir = 'a' | 'b';

type EventCompute = {
  aggregation: string;
  interval?: number;
  facet?: string;
};

interface GroupBy {
  facet: string;
  limit?: number;
  sort?: {
    aggregation: string;
    order: OrderDir;
    facet?: string;
  };
  should_exclude_missing?: boolean;
}

type EventQuery = {
  index?: string;
  compute?: EventCompute;
  multi_compute?: EventCompute[];
  search?: {
    query: string;
  };
  group_by?: GroupBy[];
};

type MetricQuery = string;

type ProcessQuery = {
  metric: string;
  search_by?: string;
  filter_by?: string[];
  query_filter?: string;
  limit: number;
  is_normalized_cpu?: boolean;
};

interface QueryTableColumnRequest {
  name: string;
  alias?: string;
  order?: OrderDir;
}

interface ApmStatsQuery {
  service: string;
  env: string;
  name: string;
  resource?: string;
  columns?: QueryTableColumnRequest[];
}

interface MetricRequest {
  metrics_query: MetricQuery;
  preTemplateQuery?: string;
  _query_options?: object;
}
interface LogRequest {
  logs_query: EventQuery;
}
interface ApmRequest {
  apm_query: EventQuery;
}
interface ApmStatsRequest {
  apm_stats_query: ApmStatsQuery;
}
interface RumRequest {
  rum_query: EventQuery;
}
interface EventRequest {
  events_query: EventQuery;
}
interface ProcessRequest {
  process_query: ProcessQuery;
}

interface ComplianceFindingsRequest {
  compliance_findings_query: EventQuery;
}

interface IssuesRequest {
  issues_query_query: EventQuery;
}
interface AuditRequest {
  audit_query: EventQuery;
}

type FormulaEventsDataSource =
  | 'logs'
  | 'spans'
  | 'rum'
  | 'network'
  | 'security_signals'
  | 'profiles'
  | 'events'
  | 'ci_pipelines'
  | 'ci_tests'
  | 'compliance_findings'
  | 'database_queries'
  | 'synthetics_batches'
  | 'app_sec_events'
  | 'app_sec_spans'
  | 'audit';

type FormulaMetricsQuery = {
  name: string;
  data_source: 'metrics' | 'cloud_cost';
  query: string;
  aggregator?: Aggregator;
};

type EventsCompute = {
  aggregation: EventsAggregator;
  metric?: string;
  interval?: number;
};

type EventsAggregator =
  | 'count'
  | 'cardinality'
  | 'median'
  | 'pc75'
  | 'pc90'
  | 'pc95'
  | 'pc98'
  | 'pc99'
  | 'sum'
  | 'min'
  | 'max'
  | 'avg';

type EventsGroupBy = {
  facet: string;
  limit?: number;
  sort?: {
    aggregation: EventsAggregator;
    order?: OrderDir;
    metric?: string;
  };
  should_exclude_missing?: boolean;
};

type FormulaEventsQuery = {
  name: string;
  data_source: FormulaEventsDataSource;
  compute: EventsCompute;
  search?: {
    query: string;
  };
  indexes?: string[];
  group_by?: EventsGroupBy[];
};

type FormulaProcessQuery = {
  name: string;
  data_source: 'process' | 'container';
  metric: string;
  text_filter?: string;
  tag_filters?: string[];
  query_filter?: string;
  limit?: number;
  sort?: OrderDir;
  is_normalized_cpu?: boolean;
  aggregator?: Aggregator;
};

interface FormulaApmDependencyStatsQuery {
  name: string;
  data_source: 'apm_dependency_stats';
  env: string;
  is_upstream?: boolean;
  operation_name: string;
  primary_tag_name?: string;
  primary_tag_value?: string;
  resource_name: string;
  service: string;
}

interface FormulaApmResourceStatsQuery {
  name: string;
  data_source: 'apm_resource_stats';
  env: string;
  group_by?: string[];
  operation_name: string;
  primary_tag_name?: string;
  primary_tag_value?: string;
  resource_name?: string;
  service: string;
}

type FormulaApmStatsQuery =
  | FormulaApmDependencyStatsQuery
  | FormulaApmResourceStatsQuery;

type FormulaIncidentsQuery = {
  name: string;
  data_source: 'incident_analytics';
  compute: EventsCompute;
  search?: {
    query: string;
  };
  indexes?: string[];
  group_by?: EventsGroupBy[];
};

type FormulaQuery =
  | FormulaMetricsQuery
  | FormulaEventsQuery
  | FormulaProcessQuery
  | FormulaApmStatsQuery
  | FormulaIncidentsQuery;

type FormulaQueries = FormulaQuery[];

type Formula = {
  formula: string;
  alias?: string;
  limit?: {
    count?: number;
    order?: OrderDir;
  };
};

interface TimeseriesFormulaRequest extends TimeseriesRequest {
  response_format: 'timeseries';
  formulas?: Formula[];
  queries: FormulaQueries;
}

type ScalarFormulaRequest = {
  response_format: 'scalar';
  formulas?: Formula[];
  queries: FormulaQueries;
};

type SQLTimeseriesRequest = {
  request_type: 'sql';
  response_format: 'timeseries';
  sql_query: string;
};

type SQLTableRequest = {
  request_type: 'sql';
  response_format: 'scalar';
  sql_query: string;
};

type EventPlatformRequest =
  | LogRequest
  | ApmRequest
  | RumRequest
  | ComplianceFindingsRequest
  | EventRequest
  | IssuesRequest
  | AuditRequest;

type TimeseriesDataSourceRequest =
  | MetricRequest
  | EventRequest
  | ProcessRequest
  | EventPlatformRequest
  | TimeseriesFormulaRequest
  | SQLTimeseriesRequest;

interface TimeseriesRequestStyle {
  palette?: string;
}

interface Metadata {
  [key: string]: { alias: string };
}

type DisplayType = 'line' | 'bar' | 'area';

interface TimeseriesRequest {
  type?: DisplayType;
  metadata?: Metadata;
  style?: TimeseriesRequestStyle;
  on_right_yaxis?: boolean;
}

type TimeseriesDefinitionRequest = TimeseriesDataSourceRequest &
  TimeseriesRequest;

interface TimeseriesDefinition {
  viz: 'timeseries';
  requests: TimeseriesDefinitionRequest[];
  yaxis?: Axis;
  right_yaxis?: Axis;
  events?: Event[];
  markers?: Marker[];
  custom_links?: CustomLink[];
}

type TableFormula = Formula & {
  conditional_formats?: ConditionalFormat[];
};

type TableFormulaRequest = {
  formulas?: TableFormula[];
  response_format: 'scalar';
  queries: FormulaQueries;
};

type QueryTableDataSourceRequest =
  | MetricRequest
  | EventPlatformRequest
  | ApmStatsRequest
  | TableFormulaRequest
  | SQLTableRequest;

interface QueryTableRequest {
  aggregator?: Aggregator;
  limit?: number;
  order?: OrderDir;
  alias?: string;
  conditional_formats?: ConditionalFormat[];
}

type QueryTableDefinitionRequest = QueryTableDataSourceRequest &
  QueryTableRequest;

type HasSearchBar = 'always' | 'never' | 'auto';

interface QueryTableDefinition {
  viz: 'query_table';
  requests: QueryTableDefinitionRequest[];
  has_search_bar?: HasSearchBar;
  custom_links?: CustomLink[];
}

interface HeatmapRequest {
  style?: RequestStyle;
}

interface HeatmapDefinitionRequest extends MetricRequest, HeatmapRequest {}

interface HeatmapDefinition {
  viz: 'heatmap';
  requests: HeatmapDefinitionRequest[];
  yaxis?: Axis;
  events?: Event[];
  custom_links?: CustomLink[];
}

interface ServiceMapDefinition {
  viz: 'servicemap';
  requests?: undefined;
  custom_links?: CustomLink[];
}

type TreemapProcessMemoryRequest = { q: string };

type TreemapDataSourceRequest =
  | ScalarFormulaRequest
  | TreemapProcessMemoryRequest;

type TreemapSizeBy = 'pct_cpu' | 'pct_mem';

type TreemapColorBy = 'user';

type TreemapGroupBy = 'family' | 'process' | 'user';

interface TreemapDefinition {
  viz: 'treemap';
  requests: TreemapDataSourceRequest[];
  size_by?: TreemapSizeBy;
  color_by?: TreemapColorBy;
  group_by?: TreemapGroupBy;
}

interface TopListRequest {
  conditional_formats?: ConditionalFormat[];
}

type TopListDataSourceRequest =
  | MetricRequest
  | EventPlatformRequest
  | ProcessRequest
  | ScalarFormulaRequest
  | SQLTableRequest;

type TopListDefinitionRequest = TopListDataSourceRequest & TopListRequest;

interface TopListDefinition {
  viz: 'toplist';
  requests: TopListDefinitionRequest[];
  custom_links?: CustomLink[];
}

type DistributionDataSourceRequest =
  | MetricRequest
  | ProcessRequest
  | ApmStatsRequest
  | EventPlatformRequest;

interface DistributionRequest {
  style?: RequestStyle;
}

type DistributionDefinitionRequest = DistributionDataSourceRequest &
  DistributionRequest;

interface DistributionDefinition {
  viz: 'distribution';
  requests: DistributionDefinitionRequest[];
  xaxis?: DistributionXAxis;
  yaxis?: DistributionYAxis;
  markers?: Markers;
  custom_links?: CustomLink[];
}

type ScatterPlotDimension = 'x' | 'y' | 'radius' | 'color';

type ScatterplotFormula = Formula & {
  dimension: ScatterPlotDimension;
};

interface ScatterplotScalarFormulaRequest extends ScalarFormulaRequest {
  formulas: ScatterplotFormula[];
}

type ScatterplotDataSourceRequest =
  | MetricRequest
  | ScatterplotScalarFormulaRequest
  | SQLTableRequest;

interface ScatterplotRequest {
  aggregator?: Aggregator;
}

type ScatterplotDefinitionRequest = ScatterplotDataSourceRequest &
  ScatterplotRequest;

interface ScatterplotDefinition {
  viz: 'scatterplot';
  requests: ScatterplotDefinitionRequest[];
  custom_links?: CustomLink[];
  xaxis?: Axis;
  yaxis?: Axis;
  color_by_groups?: string[];
}

interface GeomapStyle {
  palette_flip: boolean;
}

interface GeomapView {
  focus: string;
}

type GeomapDefinitionRequest =
  | MetricRequest
  | EventPlatformRequest
  | ScalarFormulaRequest
  | SQLTableRequest;

interface GeomapDefinition {
  viz: 'geomap';
  requests: GeomapDefinitionRequest[];
  custom_links?: CustomLink[];
  style: GeomapStyle;
  view: GeomapView;
}

type PlotPaletteName = 'red' | 'blue' | 'orange';

type SunburstRequest = {
  style?: {
    palette?: PlotPaletteName;
  };
};

interface SunburstDefinitionRequest
  extends ScalarFormulaRequest,
    SunburstRequest {}

type SunburstKnownLegend =
  | { type: 'table' }
  | { type: 'inline'; hide_value?: boolean; hide_percent?: boolean }
  | { type: 'none' };

type SunburstLegend =
  | { type: 'automatic'; hide_value?: boolean; hide_percent?: boolean }
  | SunburstKnownLegend;

type SunburstDefinition = {
  viz: 'sunburst';
  requests: SunburstDefinitionRequest[];
  hide_total?: boolean;
  legend?: SunburstLegend;
};

type WildcardDefinitionRequest = SQLTableRequest | ScalarFormulaRequest;

type WildcardDefinition = {
  viz: 'wildcard';
  requests: WildcardDefinitionRequest[];
  specification: {
    type: 'vega' | 'vega-lite';
    contents: object;
  };
};

type Definition =
  | TimeseriesDefinition
  | QueryTableDefinition
  | HeatmapDefinition
  | ServiceMapDefinition
  | TreemapDefinition
  | TopListDefinition
  | DistributionDefinition
  | ScatterplotDefinition
  | GeomapDefinition
  | SunburstDefinition
  | WildcardDefinition;

}
type Definition = DefinitionModule.Definition;

// ----- source: tests/bigints.test.ts
{

describe('BigInts', () => {
  it(`P.bigint.between(1, 10)`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.between(0n, 10n), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'between 0 and 10';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'something else';
        });

    expect(f(5n)).toBe('between 0 and 10');
    expect(f(0n)).toBe('between 0 and 10');
    expect(f(10n)).toBe('between 0 and 10');
    expect(f('gabriel')).toBe('something else');
  });

  it(`P.bigint.lt(..)`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.lt(10n), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'no';
        });

    expect(f(5n)).toBe('yes');
    expect(f(12n)).toBe('no');
    expect(f(10n)).toBe('no');
  });
  it(`P.bigint.gt(..)`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.gt(10n), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'no';
        });

    expect(f(5n)).toBe('no');
    expect(f(10n)).toBe('no');
    expect(f(12n)).toBe('yes');
  });
  it(`P.bigint.gte(..)`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.gte(10n), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'no';
        });

    expect(f(5n)).toBe('no');
    expect(f(10n)).toBe('yes');
    expect(f(12n)).toBe('yes');
  });
  it(`P.bigint.lte(..)`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.lte(10n), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'no';
        });

    expect(f(5n)).toBe('yes');
    expect(f(10n)).toBe('yes');
    expect(f(12n)).toBe('no');
  });
  it(`P.bigint.positive()`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.positive(), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'no';
        });

    expect(f(5n)).toBe('yes');
    expect(f(10123n)).toBe('yes');
    expect(f(-10123n)).toBe('no');
  });
  it(`P.bigint.negative()`, () => {
    const f = (input: string | bigint) =>
      match(input)
        .with(P.bigint.negative(), (value) => {
          type t = Expect<Equal<typeof value, bigint>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | bigint>>;
          return 'no';
        });

    expect(f(5n)).toBe('no');
    expect(f(10123n)).toBe('no');
    expect(f(-10123n)).toBe('yes');
  });
});

}


// ----- source: tests/branded-nominal-types.test.ts
{

describe('Branded strings', () => {
  type BrandedId = string & { __brand: 'brandId' };
  type FooBar = { type: 'foo'; id: BrandedId; value: string } | { type: 'bar' };
  type State = {
    fooBar: FooBar;
    fooBarId: BrandedId;
  };

  it('should treat branded strings as default string, and not as objects', () => {
    const state: State = {
      fooBar: { type: 'foo', id: '' as BrandedId, value: 'value' },
      fooBarId: '' as BrandedId,
    };

    expect(
      match(state)
        .with(
          { fooBar: { type: 'foo' }, fooBarId: P.when((id) => id === '') },
          (x) => `Match: ${x.fooBar.value}`
        )
        .otherwise(() => 'nope')
    ).toEqual('Match: value');
  });

  it('issue #167', () => {
    const tag: unique symbol = Symbol();
    type Tagged<Token> = { readonly [tag]: Token };
    type Opaque<Type, Token = unknown> = Type & Tagged<Token>;

    const opaqueString = (Math.random() > 0.5 ? 'A' : 'B') as Opaque<'A' | 'B'>;

    match(opaqueString)
      .with('A' as Opaque<'A'>, () => 1)
      .with('B' as Opaque<'B'>, () => 2)
      .exhaustive();
  });

  it('issue #178', () => {
    const symbol: unique symbol = Symbol();

    interface Branded<key extends string> {
      [symbol]: { [k in key]: true };
    }

    type Brand<a, key extends string> = a & Branded<key>;
    type BrandId = Brand<number, 'BrandId'>;

    const a: number = 1;
    const b: BrandId = 1 as BrandId;

    expect(
      match({ a, b })
        .with({ a, b }, () => '1')
        .with({ a: P.number, b: P.number }, () => '2')
        .exhaustive()
    ).toEqual('1');
  });
});

}


// ----- source: tests/build-many.test.ts
{

describe('BuildMany', () => {
  it('should correctly update the content of a readonly tuple', () => {
    type cases = [
      Expect<
        Equal<
          BuildMany<readonly [number, State], [[{ status: 'idle' }, [1]]]>,
          [number, { status: 'idle' }]
        >
      >,
      Expect<
        Equal<
          BuildMany<
            readonly [number, State],
            [[{ status: 'idle' }, [1]]] | [[{ status: 'loading' }, [1]]]
          >,
          [number, { status: 'idle' }] | [number, { status: 'loading' }]
        >
      >
    ];
  });
});

}


// ----- source: tests/chainable.test.ts
{

describe('chainable methods', () => {
  describe('string compositions', () => {
    it(`P.string.optional()`, () => {
      const f = (input?: string | number) =>
        match(input)
          .with(P.string.optional(), (value) => {
            type t = Expect<Equal<typeof value, string | undefined>>;
            return `yes ${value}`;
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'no';
          });

      expect(f(102)).toBe('no');
      expect(f()).toBe('yes undefined');
      expect(f('gabriel')).toBe('yes gabriel');
    });

    it(`P.string.select()`, () => {
      const f = (input?: string | number) =>
        match({ input })
          .with({ input: P.string.select() }, (value) => {
            type t = Expect<Equal<typeof value, string>>;
            return `yes ${value}`;
          })
          .otherwise(() => 'no');

      expect(f(102)).toBe('no');
      expect(f()).toBe('no');
      expect(f('gabriel')).toBe('yes gabriel');
    });
    it(`P.number.optional.select()`, () => {
      const f = (input?: string | number) =>
        match({ input })
          .with({ input: P.number.optional().select() }, (value) => {
            type t = Expect<Equal<typeof value, number | undefined>>;
            return `yes ${value}`;
          })
          .otherwise(() => 'no');

      expect(f(102)).toBe('yes 102');
      expect(f()).toBe('yes undefined');
      expect(f('gabriel')).toBe('no');
    });
    it(`P.string.optional.select()`, () => {
      const f = (input?: string | number) =>
        match({ input })
          .with({ input: P.string.optional().select() }, (value) => {
            type t = Expect<Equal<typeof value, string | undefined>>;
            return `yes ${value}`;
          })
          .otherwise(() => 'no');

      expect(f(102)).toBe('no');
      expect(f()).toBe('yes undefined');
      expect(f('gabriel')).toBe('yes gabriel');
    });
    it(`P.string.startsWith(..).optional().select()`, () => {
      const f = (input?: string | number) =>
        match({ input })
          .with(
            {
              input: P.string.startsWith('hello ').optional().select(),
            },
            (value) => {
              type t = Expect<
                Equal<typeof value, `hello ${string}` | undefined>
              >;
              return `starts with hello: ${value}`;
            }
          )
          .otherwise(() => 'no');

      expect(f('hello gabriel')).toBe('starts with hello: hello gabriel');
      expect(f('gabriel')).toBe('no');
    });

    it('P.string.startsWith(..).endsWith(..)', () => {
      const f = (input?: string | number) =>
        match(input)
          .with(P.string.startsWith('hello ').endsWith('!'), (value) => {
            type t = Expect<
              Equal<typeof value, `hello ${string}` & `${string}!`>
            >;
            return `yes: ${value}`;
          })
          .otherwise(() => 'no');

      expect(f('hello gabriel!')).toBe('yes: hello gabriel!');
      expect(f('hello gabriel')).toBe('no');
      expect(f('gabriel!')).toBe('no');
      expect(f('gabriel')).toBe('no');
    });
  });

  describe('number compositions', () => {
    it(`P.number.optional()`, () => {
      const f = (input?: string | number) =>
        match(input)
          .with(P.number.optional(), (value) => {
            type t = Expect<Equal<typeof value, number | undefined>>;
            return `yes ${value}`;
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string>>;
            return 'no';
          });

      expect(f(102)).toBe('yes 102');
      expect(f()).toBe('yes undefined');
      expect(f('gabriel')).toBe('no');
    });

    it(`P.number.select()`, () => {
      const f = (input?: string | number) =>
        match({ input })
          .with({ input: P.number.select() }, (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return `yes ${value}`;
          })
          .otherwise(() => 'no');

      expect(f(102)).toBe('yes 102');
      expect(f()).toBe('no');
      expect(f('gabriel')).toBe('no');
    });

    it(`P.number.int().positive().finite().between(..).optional().select(),`, () => {
      const f = (input?: string | number) =>
        match({ input })
          .with(
            {
              input: P.number
                .int()
                .positive()
                .finite()
                .between(3, 7)
                .optional()
                .select(),
            },
            (value) => {
              type t = Expect<Equal<typeof value, number | undefined>>;
              return `yes ${value}`;
            }
          )
          .otherwise(() => 'no');

      expect(f(5)).toBe('yes 5');
      expect(f()).toBe('yes undefined');
      expect(f(1)).toBe('no');
      expect(f(8)).toBe('no');
      expect(f(-2)).toBe('no');
      expect(f(4.123)).toBe('no');
      expect(f(Infinity)).toBe('no');
    });
  });

  describe('bigint compositions', () => {
    it(`P.bigint.optional()`, () => {
      const f = (input?: string | bigint) =>
        match(input)
          .with(P.bigint.optional(), (value) => {
            type t = Expect<Equal<typeof value, bigint | undefined>>;
            return `yes ${value}`;
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string>>;
            return 'no';
          });

      expect(f(102n)).toBe('yes 102');
      expect(f()).toBe('yes undefined');
      expect(f('gabriel')).toBe('no');
    });

    it(`P.bigint.select()`, () => {
      const f = (input?: string | bigint) =>
        match({ input })
          .with({ input: P.bigint.select() }, (value) => {
            type t = Expect<Equal<typeof value, bigint>>;
            return `yes ${value}`;
          })
          .otherwise(() => 'no');

      expect(f(102n)).toBe('yes 102');
      expect(f()).toBe('no');
      expect(f('gabriel')).toBe('no');
    });

    it(`P.bigint.positive().between(..).optional().select(),`, () => {
      const f = (input?: string | bigint) =>
        match({ input })
          .with(
            {
              input: P.bigint.positive().between(3n, 7n).optional().select(),
            },
            (value) => {
              type t = Expect<Equal<typeof value, bigint | undefined>>;
              return `yes ${value}`;
            }
          )
          .otherwise(() => 'no');

      expect(f(5n)).toBe('yes 5');
      expect(f()).toBe('yes undefined');
      expect(f(1n)).toBe('no');
      expect(f(8n)).toBe('no');
      expect(f(-2n)).toBe('no');
    });
  });

  describe('and', () => {
    it('should infer the intersection of narrowed patterns', () => {
      const f = (input?: string | number) =>
        match(input)
          .with(
            P.string.startsWith('hello ').and(P.string.endsWith('!')),
            (value) => {
              type t = Expect<
                Equal<typeof value, `hello ${string}` & `${string}!`>
              >;
              return `yes: ${value}`;
            }
          )
          .otherwise(() => 'no');

      expect(f('hello gabriel!')).toBe('yes: hello gabriel!');
      expect(f('hello gabriel')).toBe('no');
      expect(f('gabriel!')).toBe('no');
      expect(f('gabriel')).toBe('no');
    });
  });

  describe('or', () => {
    it('should infer the union of narrowed patterns', () => {
      const f = (input?: string | number) =>
        match(input)
          .with(
            P.string.startsWith('hello ').or(P.string.endsWith('!')),
            (value) => {
              type t = Expect<
                Equal<typeof value, `hello ${string}` | `${string}!`>
              >;
              return `yes: ${value}`;
            }
          )
          .otherwise(() => 'no');

      expect(f('hello gabriel!')).toBe('yes: hello gabriel!');
      expect(f('hello gabriel')).toBe('yes: hello gabriel');
      expect(f('gabriel!')).toBe('yes: gabriel!');
      expect(f('gabriel')).toBe('no');
    });
  });
});

}


// ----- source: tests/deep-exclude.test.ts
{

type Colors = 'pink' | 'purple' | 'red' | 'yellow' | 'blue';

describe('DeepExclude', () => {
  it('Primitives', () => {
    type cases = [
      Expect<Equal<DeepExclude<string, 'hello'>, string>>,
      Expect<Equal<DeepExclude<string, string>, never>>,
      Expect<Equal<DeepExclude<string | number, string>, number>>,
      Expect<Equal<DeepExclude<string | number, boolean>, string | number>>,
      Expect<
        Equal<
          DeepExclude<Primitives, null | undefined>,
          string | number | bigint | boolean | symbol
        >
      >,
      Expect<Equal<DeepExclude<Primitives, never>, Primitives>>
    ];
  });

  it('Literals', () => {
    type cases = [
      Expect<Equal<DeepExclude<'hello' | 'bonjour', 'hello'>, 'bonjour'>>,
      Expect<
        Equal<DeepExclude<'hello' | 'bonjour', 'hola'>, 'hello' | 'bonjour'>
      >,
      Expect<Equal<DeepExclude<1 | 2 | 3, 3>, 1 | 2>>,
      Expect<Equal<DeepExclude<'hello' | 1, string>, 1>>,
      Expect<Equal<DeepExclude<'hello' | 1, number>, 'hello'>>,
      Expect<Equal<DeepExclude<200n | number, bigint>, number>>,
      Expect<Equal<DeepExclude<undefined | number, number>, undefined>>
    ];
  });

  describe('Objects', () => {
    it('should correctly exclude when it matches', () => {
      type cases = [
        Expect<Equal<DeepExclude<{ a: 'x' | 'y' }, { a: string }>, never>>,
        Expect<Equal<DeepExclude<{ a: 'x' | 'y' }, { a: 'x' }>, { a: 'y' }>>
      ];
    });

    it("if it doesn't match, it should leave the data structure untouched", () => {
      type cases = [
        Expect<
          Equal<DeepExclude<{ a: 'x' | 'y' }, { b: 'x' }>, { a: 'x' | 'y' }>
        >,
        Expect<
          Equal<DeepExclude<{ a: 'x' | 'y' }, { a: 'z' }>, { a: 'x' | 'y' }>
        >
      ];
    });

    it('should work with nested object and only distribute what is necessary', () => {
      type x = DeepExclude<{ str: string | null | undefined }, { str: string }>;
      type xx = DistributeMatchingUnions<
        { str: string | null | undefined },
        { str: string }
      >;
      type xxx = FindUnionsMany<
        { str: string | null | undefined },
        { str: string }
      >;
      type xxxx = IsMatching<
        { str: string | null | undefined },
        { str: string }
      >;
      type xxxxx = FindUnions<
        { str: string | null | undefined },
        { str: string },
        []
      >;
      type y = DeepExclude<
        { str: string | null | undefined },
        { str: null | undefined }
      >;

      type cases = [
        Expect<Equal<x, { str: null } | { str: undefined }>>,
        Expect<Equal<y, { str: string }>>,
        Expect<
          Equal<
            DeepExclude<{ a: { b: 'x' | 'y' } }, { a: { b: 'x' } }>,
            { a: { b: 'y' } }
          >
        >,
        Expect<
          Equal<
            DeepExclude<{ a: { b: 'x' | 'y' | 'z' } }, { a: { b: 'x' } }>,
            { a: { b: 'y' } } | { a: { b: 'z' } }
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              { a: { b: 'x' | 'y' | 'z' }; c: 'u' | 'v' },
              { a: { b: 'x' } }
            >,
            { a: { b: 'y' }; c: 'u' | 'v' } | { a: { b: 'z' }; c: 'u' | 'v' }
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              { a: { b: 'x' | 'y' | 'z' }; c: 'u' | 'v' },
              { c: 'u' }
            >,
            { a: { b: 'x' | 'y' | 'z' }; c: 'v' }
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              { a: { b: 'x' | 'y' | 'z' }; c: 'u' | 'v' },
              { c: 'u' }
            >,
            { a: { b: 'x' | 'y' | 'z' }; c: 'v' }
          >
        >
      ];
    });

    it("should exclude the undefined case of optional properties when the pattern's key is also optional", () => {
      type input = {
        type: 'a';
        data?: { type: 'img'; src: string } | { type: 'text'; p: string };
      };
      type pattern = {
        readonly type: 'a';
        readonly data?: { readonly type: 'img' };
      };
      type res1 = DeepExclude<input, pattern>;
      type test1 = Expect<
        Equal<res1, { type: 'a'; data: { type: 'text'; p: string } }>
      >;
    });
  });

  describe('Tuples', () => {
    it('should correctly exclude when it matches', () => {
      type cases = [
        Expect<Equal<DeepExclude<['x' | 'y'], [string]>, never>>,
        Expect<Equal<DeepExclude<['x' | 'y'], ['x']>, ['y']>>,
        Expect<
          Equal<
            DeepExclude<[string, string], readonly [unknown, unknown]>,
            never
          >
        >,
        Expect<
          Equal<
            DeepExclude<[number, State], [unknown, { status: 'error' }]>,
            | [number, { status: 'idle' }]
            | [number, { status: 'loading' }]
            | [number, { status: 'success'; data: string }]
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              readonly [number, State],
              [unknown, { status: 'error' }]
            >,
            | [number, { status: 'idle' }]
            | [number, { status: 'loading' }]
            | [number, { status: 'success'; data: string }]
          >
        >
      ];
    });

    it("if it doesn't match, it should leave the data structure untouched", () => {
      type cases = [
        Expect<Equal<DeepExclude<['x' | 'y'], ['z']>, ['x' | 'y']>>,
        Expect<Equal<DeepExclude<['x' | 'y'], []>, ['x' | 'y']>>,
        Expect<Equal<DeepExclude<['x' | 'y'], ['a', 'b', 'c']>, ['x' | 'y']>>
      ];
    });

    it('should work with nested tuples and only distribute what is necessary', () => {
      type cases = [
        Expect<Equal<DeepExclude<[['x' | 'y']], [['x']]>, [['y']]>>,
        Expect<
          Equal<DeepExclude<[['x' | 'y' | 'z']], [['x']]>, [['y']] | [['z']]>
        >,
        Expect<
          Equal<
            DeepExclude<[['x' | 'y' | 'z'], 'u' | 'v'], [['x'], unknown]>,
            [['y'], 'u' | 'v'] | [['z'], 'u' | 'v']
          >
        >,
        Expect<
          Equal<
            DeepExclude<[['x' | 'y' | 'z'], 'u' | 'v'], [unknown, 'v']>,
            [['x' | 'y' | 'z'], 'u']
          >
        >
      ];
    });

    it('should work with nested unary tuples', () => {
      type State = {};
      type Msg = [type: 'Login'] | [type: 'UrlChange', url: string];
      type Input = [State, Msg];

      type cases = [
        Expect<Equal<DeepExclude<[[number]], [[unknown]]>, never>>,
        Expect<Equal<DeepExclude<[[[number]]], [[[unknown]]]>, never>>,
        Expect<Equal<DeepExclude<[[[[number]]]], [[[[unknown]]]]>, never>>,
        Expect<
          Equal<
            DeepExclude<[[[number]]], readonly [readonly [readonly [unknown]]]>,
            never
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              readonly [[[[{ t: number }]]]],
              readonly [[[[{ t: unknown }]]]]
            >,
            never
          >
        >,
        Expect<
          Equal<
            DeepExclude<[{}, Msg], [unknown, ['UrlChange', unknown]]>,
            [{}, [type: 'Login']]
          >
        >
      ];
    });
  });

  describe('Variadic', () => {
    it('should correctly turn variadic exclude into their opposite', () => {
      type res1 = DeepExclude<number[], [number, ...number[]]>;
      type test1 = Expect<Equal<res1, []>>;

      type res2 = DeepExclude<number[], []>;
      type test2 = Expect<Equal<res2, [number, ...number[]]>>;

      type res3 = DeepExclude<number[], [...number[], number]>;
      type test3 = Expect<Equal<res3, []>>;

      type res4 = DeepExclude<[number, ...number[]], [...number[], number]>;
      // @ts-expect-error fixme! never would make more sense here.
      type test4 = Expect<Equal<res4, never>>;
    });

    it('should only exclude if the pattern really matches', () => {
      type res1 = DeepExclude<number[], [string, ...number[]]>;
      type test1 = Expect<Equal<res1, number[]>>;

      type res3 = DeepExclude<number[], [...string[], number]>;
      type test3 = Expect<Equal<res3, number[]>>;

      // matches, but some cases may not have been handled.
      type res4 = DeepExclude<[number, ...string[]], [...number[], string]>;
      type test4 = Expect<Equal<res4, [number, ...string[]]>>;
    });
  });

  describe('List', () => {
    type cases = [
      Expect<Equal<DeepExclude<(1 | 2 | 3)[], 1[]>, (1 | 2 | 3)[]>>,
      Expect<Equal<DeepExclude<(1 | 2 | 3)[], (1 | 2 | 3)[]>, never>>,
      Expect<Equal<DeepExclude<(1 | 2 | 3)[], unknown[]>, never>>,
      Expect<
        Equal<DeepExclude<(1 | 2 | 3)[] | string[], string[]>, (1 | 2 | 3)[]>
      >
    ];

    it('should work with empty list patterns', () => {
      type res1 = DeepExclude<{ values: (1 | 2 | 3)[] }, { values: [] }>;
      type test1 = Expect<
        Equal<res1, { values: [1 | 2 | 3, ...(1 | 2 | 3)[]] }>
      >;

      type cases = [
        Expect<Equal<DeepExclude<[] | [1, 2, 3], []>, [1, 2, 3]>>,
        Expect<
          Equal<
            DeepExclude<{ values: [] | [1, 2, 3] }, { values: [] }>,
            { values: [1, 2, 3] }
          >
        >,
        Expect<
          Equal<
            DeepExclude<{ values: [1, 2, 3] }, { values: [] }>,
            { values: [1, 2, 3] }
          >
        >
      ];
    });
  });

  describe('Sets', () => {
    type cases = [
      Expect<Equal<DeepExclude<Set<1 | 2 | 3>, Set<1>>, Set<1 | 2 | 3>>>,
      Expect<Equal<DeepExclude<Set<1 | 2 | 3>, Set<1 | 2 | 3>>, never>>,
      Expect<Equal<DeepExclude<Set<1 | 2 | 3>, Set<unknown>>, never>>,
      Expect<
        Equal<
          DeepExclude<Set<1 | 2 | 3> | Set<string>, Set<string>>,
          Set<1 | 2 | 3>
        >
      >
    ];
  });

  describe('Maps', () => {
    type cases = [
      Expect<
        Equal<
          DeepExclude<Map<string, 1 | 2 | 3>, Map<string, 1>>,
          Map<string, 1 | 2 | 3>
        >
      >,
      Expect<
        Equal<
          DeepExclude<Map<string, 1 | 2 | 3>, Map<string, 1 | 2 | 3>>,
          never
        >
      >,
      Expect<
        Equal<DeepExclude<Map<string, 1 | 2 | 3>, Map<string, unknown>>, never>
      >,
      Expect<
        Equal<
          DeepExclude<
            Map<string, 1 | 2 | 3> | Map<string, string>,
            Map<string, string>
          >,
          Map<string, 1 | 2 | 3>
        >
      >
    ];
  });

  it('should work with big unions', () => {
    type cases = [
      Expect<
        Equal<
          DeepExclude<
            | { type: 'textWithColor'; union: BigUnion }
            | {
                type: 'textWithColorAndBackground';
                union: BigUnion;
                union2: BigUnion;
              },
            { type: 'textWithColor' }
          >,
          {
            type: 'textWithColorAndBackground';
            union: BigUnion;
            union2: BigUnion;
          }
        >
      >,
      Expect<
        Equal<
          DeepExclude<
            | { type: 'textWithColor'; union: BigUnion }
            | {
                type: 'textWithColorAndBackground';
                union: BigUnion;
                union2: BigUnion;
              },
            {
              type: 'textWithColorAndBackground';
              union: Exclude<BigUnion, 'a'>;
            }
          >,
          | { type: 'textWithColor'; union: BigUnion }
          | {
              type: 'textWithColorAndBackground';
              union: 'a';
              union2: BigUnion;
            }
        >
      >
    ];
  });

  it('should work in common cases', () => {
    type cases = [
      Expect<Equal<DeepExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
      Expect<
        Equal<
          DeepExclude<
            | { type: 'textWithColor'; color: Colors }
            | {
                type: 'textWithColorAndBackground';
                color: Colors;
                backgroundColor: Colors;
              },
            { type: 'textWithColor' }
          >,
          {
            type: 'textWithColorAndBackground';
            color: Colors;
            backgroundColor: Colors;
          }
        >
      >,
      Expect<
        Equal<
          DeepExclude<
            | { type: 'textWithColor'; color: Colors }
            | {
                type: 'textWithColorAndBackground';
                color: Colors;
                backgroundColor: Colors;
              },
            { type: 'textWithColor'; color: 'pink' }
          >,
          | {
              type: 'textWithColorAndBackground';
              color: Colors;
              backgroundColor: Colors;
            }
          | { type: 'textWithColor'; color: 'purple' }
          | { type: 'textWithColor'; color: 'red' }
          | { type: 'textWithColor'; color: 'yellow' }
          | { type: 'textWithColor'; color: 'blue' }
        >
      >,
      Expect<
        Equal<
          DeepExclude<
            [Option<{ type: 'a' } | { type: 'b' }>, 'c' | 'd'],
            [{ kind: 'some'; value: { type: 'a' } }, any]
          >,
          | [{ kind: 'none' }, 'c' | 'd']
          | [{ kind: 'some'; value: { type: 'b' } }, 'c' | 'd']
        >
      >,
      Expect<
        Equal<
          DeepExclude<
            { x: 'a' | 'b'; y: 'c' | 'd'; z: 'e' | 'f' },
            { x: 'a'; y: 'c' }
          >,
          | { x: 'b'; y: 'c'; z: 'e' | 'f' }
          | { x: 'b'; y: 'd'; z: 'e' | 'f' }
          | { x: 'a'; y: 'd'; z: 'e' | 'f' }
        >
      >
    ];
  });

  describe('Multiple patterns', () => {
    it('should work when pattern is a union', () => {
      type cases = [
        Expect<
          Equal<
            DeepExclude<
              { x: 'a' | 'b'; y: 'c' | 'd'; z: 'e' | 'f' },
              { x: 'a'; y: 'c' } | { x: 'b'; y: 'c' }
            >,
            { x: 'b'; y: 'd'; z: 'e' | 'f' } | { x: 'a'; y: 'd'; z: 'e' | 'f' }
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              { a: { b: 'x' | 'y' | 'z' }; c: 'u' | 'v' },
              { c: 'u' } | { a: { b: 'x' } }
            >,
            { a: { b: 'y' }; c: 'v' } | { a: { b: 'z' }; c: 'v' }
          >
        >
      ];
    });
  });

  describe('Excluding nested unions', () => {
    it('should correctly exclude', () => {
      type cases = [
        Expect<
          Equal<
            DeepExclude<
              ['a' | 'b' | 'c', 'a' | 'b' | 'c'],
              ['b' | 'c', 'b' | 'c']
            >,
            ['a', 'a'] | ['a', 'b'] | ['a', 'c'] | ['b', 'a'] | ['c', 'a']
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              ['a' | 'b' | 'c', { type: 'a' | 'b' | 'c' }],
              ['b' | 'c', { type: 'c' }]
            >,
            | ['a', { type: 'c' }]
            | ['a', { type: 'a' }]
            | ['a', { type: 'b' }]
            | ['b', { type: 'a' }]
            | ['b', { type: 'b' }]
            | ['c', { type: 'a' }]
            | ['c', { type: 'b' }]
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              ['a' | 'b' | 'c', { type: 'a' | 'b' | 'c' }],
              ['b' | 'c', { type: 'b' | 'c' }]
            >,
            | ['a', { type: 'a' }]
            | ['a', { type: 'b' }]
            | ['a', { type: 'c' }]
            | ['b', { type: 'a' }]
            | ['c', { type: 'a' }]
          >
        >,
        Expect<
          Equal<
            DeepExclude<
              ['a' | 'b' | 'c', { type: 'a' | 'b' | 'c' | 'd' }],
              ['b' | 'c', { type: 'b' | 'c' }]
            >,
            | ['a', { type: 'a' }]
            | ['a', { type: 'b' }]
            | ['a', { type: 'c' }]
            | ['a', { type: 'd' }]
            | ['b', { type: 'a' }]
            | ['b', { type: 'd' }]
            | ['c', { type: 'a' }]
            | ['c', { type: 'd' }]
          >
        >
      ];
    });
  });

  describe('readonly', () => {
    type Input = readonly ['a' | 'b', 'c' | 'd'];
    type p = ['a', 'c'] | ['a', 'd'] | ['b', 'c'] | ['b', 'd'];

    type cases = [
      Expect<
        Equal<
          DeepExclude<Input, ['a', 'c']>,
          ['a', 'd'] | ['b', 'c'] | ['b', 'd']
        >
      >,
      Expect<Equal<DeepExclude<Input, p>, never>>
    ];
  });

  it('should work with unknown', () => {
    type cases = [
      Expect<
        Equal<
          DeepExclude<
            [number, { type: 'a'; b: string }],
            [unknown, { type: 'a'; b: unknown }]
          >,
          never
        >
      >
    ];
  });

  it('should work when `b` contains a union', () => {
    type t = Expect<
      Equal<
        DeepExclude<
          {
            type: 'c';
            value:
              | { type: 'd'; value: boolean }
              | { type: 'e'; value: string[] }
              | { type: 'f'; value: number[] };
          },
          {
            type: 'c';
            value: {
              type: 'd' | 'e';
            };
          }
        >,
        { type: 'c'; value: { type: 'f'; value: number[] } }
      >
    >;
  });
});

}


// ----- source: tests/distribute-unions.test.ts
{


describe('FindAllUnions', () => {
  it('should correctly find all unions on an object', () => {
    type res1 = FindUnions<{ a: 1 | 2; b: 3 | 4; c: 6 | 7 }, { a: 1; b: 3 }>;
    type test1 = Expect<
      Equal<
        res1,
        [
          {
            cases:
              | {
                  value: 1;
                  subUnions: [];
                }
              | {
                  value: 2;
                  subUnions: [];
                };
            path: ['a'];
          },
          {
            cases:
              | {
                  value: 4;
                  subUnions: [];
                }
              | {
                  value: 3;
                  subUnions: [];
                };
            path: ['b'];
          }
        ]
      >
    >;
    type res2 = FindUnions<
      {
        a: 1 | 2;
        b: 3 | 4;
        c: 5 | 6;
        d: 7 | 8; // not matched
      },
      { a: 1; b: 3; c: 5 }
    >;
    type test2 = Expect<
      Equal<
        res2,
        [
          {
            cases:
              | {
                  value: 1;
                  subUnions: [];
                }
              | {
                  value: 2;
                  subUnions: [];
                };
            path: ['a'];
          },
          {
            cases:
              | {
                  value: 3;
                  subUnions: [];
                }
              | {
                  value: 4;
                  subUnions: [];
                };
            path: ['b'];
          },
          {
            cases:
              | {
                  value: 5;
                  subUnions: [];
                }
              | {
                  value: 6;
                  subUnions: [];
                };
            path: ['c'];
          }
        ]
      >
    >;
    type res3 = FindUnions<
      {
        a: 1 | 2;
        b: 3 | 4;
        c: 5 | 6;
        d: { e: 7 | 8; f: 9 | 10 };
        g: 11 | 12; // not matched by the pattern
      },
      {
        a: 1;
        b: 3;
        c: 5;
        d: { e: 7; f: 9 };
      }
    >;

    type test3 = Expect<
      Equal<
        res3,
        [
          {
            cases:
              | {
                  value: 1;
                  subUnions: [];
                }
              | {
                  value: 2;
                  subUnions: [];
                };
            path: ['a'];
          },
          {
            cases:
              | {
                  value: 3;
                  subUnions: [];
                }
              | {
                  value: 4;
                  subUnions: [];
                };
            path: ['b'];
          },
          {
            cases:
              | {
                  value: 5;
                  subUnions: [];
                }
              | {
                  value: 6;
                  subUnions: [];
                };
            path: ['c'];
          },
          {
            cases:
              | {
                  value: 7;
                  subUnions: [];
                }
              | {
                  value: 8;
                  subUnions: [];
                };
            path: ['d', 'e'];
          },
          {
            cases:
              | {
                  value: 9;
                  subUnions: [];
                }
              | {
                  value: 10;
                  subUnions: [];
                };
            path: ['d', 'f'];
          }
        ]
      >
    >;

    type res4 = FindUnions<
      { a: { b: { e: 7 | 8; f: 9 | 10 } } } | { c: 11 | 12 },
      { a: { b: { e: 7; f: 9 } } }
    >;
    type test4 = Expect<
      Equal<
        res4,
        [
          {
            cases:
              | {
                  value: { a: { b: { e: 7 | 8; f: 9 | 10 } } };
                  subUnions: [
                    {
                      cases:
                        | {
                            value: 7;
                            subUnions: [];
                          }
                        | {
                            value: 8;
                            subUnions: [];
                          };
                      path: ['a', 'b', 'e'];
                    },
                    {
                      cases:
                        | {
                            value: 9;
                            subUnions: [];
                          }
                        | {
                            value: 10;
                            subUnions: [];
                          };
                      path: ['a', 'b', 'f'];
                    }
                  ];
                }
              | { value: { c: 11 | 12 }; subUnions: [] };
            path: [];
          }
        ]
      >
    >;

    type res5 = FindUnions<
      {
        e: 'not a union';
        a: {
          e: 7 | 8;
          f: 9 | 10;
          g: 11 | 12; // not matched
        };
        b: 2 | 3;
      },
      { e: 'not a union'; a: { e: 7; f: 9 }; b: 2 }
    >;
    type test5 = Expect<
      Equal<
        res5,
        [
          {
            cases:
              | {
                  value: 7;
                  subUnions: [];
                }
              | {
                  value: 8;
                  subUnions: [];
                };
            path: ['a', 'e'];
          },
          {
            cases:
              | {
                  value: 9;
                  subUnions: [];
                }
              | {
                  value: 10;
                  subUnions: [];
                };
            path: ['a', 'f'];
          },
          {
            cases:
              | {
                  value: 2;
                  subUnions: [];
                }
              | {
                  value: 3;
                  subUnions: [];
                };
            path: ['b'];
          }
        ]
      >
    >;
  });

  it('should correctly find all unions on a tuple', () => {
    type cases = [
      Expect<
        Equal<
          FindUnions<[1 | 2, 3 | 4], [1, 3]>,
          [
            {
              cases:
                | {
                    value: 1;
                    subUnions: [];
                  }
                | {
                    value: 2;
                    subUnions: [];
                  };
              path: [0];
            },
            {
              cases:
                | {
                    value: 3;
                    subUnions: [];
                  }
                | {
                    value: 4;
                    subUnions: [];
                  };
              path: [1];
            }
          ]
        >
      >,
      Expect<
        Equal<
          FindUnions<[1 | 2, 3 | 4, 5 | 6], [1, 3, 5]>,
          [
            {
              cases:
                | {
                    value: 1;
                    subUnions: [];
                  }
                | {
                    value: 2;
                    subUnions: [];
                  };
              path: [0];
            },
            {
              cases:
                | {
                    value: 3;
                    subUnions: [];
                  }
                | {
                    value: 4;
                    subUnions: [];
                  };
              path: [1];
            },
            {
              cases:
                | {
                    value: 5;
                    subUnions: [];
                  }
                | {
                    value: 6;
                    subUnions: [];
                  };
              path: [2];
            }
          ]
        >
      >,
      Expect<
        Equal<
          FindUnions<
            { type: 'a'; value: 1 | 2 } | { type: 'b'; value: 4 | 5 },
            { type: 'a'; value: 1 }
          >,
          [
            {
              cases:
                | {
                    value: { type: 'a'; value: 1 | 2 };
                    subUnions: [
                      {
                        cases:
                          | {
                              value: 1;
                              subUnions: [];
                            }
                          | {
                              value: 2;
                              subUnions: [];
                            };
                        path: ['value'];
                      }
                    ];
                  }
                | {
                    value: { type: 'b'; value: 4 | 5 };
                    subUnions: [];
                  };
              path: [];
            }
          ]
        >
      >,
      Expect<
        Equal<
          FindUnions<readonly ['a' | 'b', 'c' | 'd'], ['a', 'c']>,
          [
            {
              cases:
                | {
                    value: 'a';
                    subUnions: [];
                  }
                | {
                    value: 'b';
                    subUnions: [];
                  };
              path: [0];
            },
            {
              cases:
                | {
                    value: 'c';
                    subUnions: [];
                  }
                | {
                    value: 'd';
                    subUnions: [];
                  };
              path: [1];
            }
          ]
        >
      >
    ];
  });

  it('when matched against an empty array, the input should be turned into a union of empty array and non-empty array', () => {
    type res1 = FindUnions<readonly number[], readonly []>;
    type tes1 = Expect<
      Equal<
        res1,
        [
          {
            cases:
              | {
                  value: readonly [];
                  subUnions: [];
                }
              | {
                  value: readonly [number, ...(readonly number[])];
                  subUnions: [];
                };
            path: [];
          }
        ]
      >
    >;

    type res2 = FindUnions<[number], []>;
    type tes2 = Expect<Equal<res2, []>>;

    type res3 = FindUnions<[number], [number, ...number[]]>;
    type tes3 = Expect<Equal<res3, []>>;

    type res4 = FindUnions<[number], [...number[], number]>;
    type tes4 = Expect<Equal<res4, []>>;

    type res5 = FindUnions<[number], [...number[], number]>;
    type tes5 = Expect<Equal<res5, []>>;

    type res6 = FindUnions<readonly number[], readonly [number, ...number[]]>;
    type tes6 = Expect<
      Equal<
        res6,
        [
          {
            cases:
              | {
                  value: readonly [];
                  subUnions: [];
                }
              | {
                  value: readonly [number, ...(readonly number[])];
                  subUnions: [];
                };
            path: [];
          }
        ]
      >
    >;

    type res7 = FindUnions<readonly number[], readonly [...number[], number]>;
    type tes7 = Expect<
      Equal<
        res7,
        [
          {
            cases:
              | {
                  value: readonly [];
                  subUnions: [];
                }
              | {
                  value: readonly [...number[], number];
                  subUnions: [];
                };
            path: [];
          }
        ]
      >
    >;

    type res8 = FindUnions<
      readonly [...number[], number],
      readonly [...number[], number]
    >;
    type tes8 = Expect<Equal<res8, []>>;

    type res9 = FindUnions<
      readonly [number, ...number[]],
      readonly [number, ...number[]]
    >;
    type tes9 = Expect<Equal<res9, []>>;
  });

  it('should avoid duplicating the unions, even if the pattern matches the same path twice', () => {
    type cases = [
      Expect<
        Equal<
          FindUnionsMany<
            { type: { x: 'a'; y: 1 | 2 } | { x: 'b'; y: 3 | 4 } },
            { type: { x: 'a'; y: 1 } } | { type: { x: 'a'; y: 2 } }
          >,
          [
            {
              cases:
                | {
                    value: {
                      x: 'a';
                      y: 1 | 2;
                    };
                    subUnions: [
                      {
                        cases:
                          | {
                              value: 1;
                              subUnions: [];
                            }
                          | {
                              value: 2;
                              subUnions: [];
                            };
                        path: ['type', 'y'];
                      }
                    ];
                  }
                | {
                    value: {
                      x: 'b';
                      y: 3 | 4;
                    };
                    subUnions: [];
                  };
              path: ['type'];
            }
          ]
        >
      >
    ];
  });
});

describe('Distribute', () => {
  it('should distribute unions into a list of values with their path', () => {
    type cases = [
      Expect<
        Equal<
          Distribute<
            [
              {
                cases:
                  | {
                      value: 1;
                      subUnions: [];
                    }
                  | {
                      value: 2;
                      subUnions: [];
                    };
                path: [0];
              },
              {
                cases:
                  | {
                      value: 3;
                      subUnions: [];
                    }
                  | {
                      value: 4;
                      subUnions: [];
                    };
                path: [1];
              }
            ]
          >,
          | [[1, [0]], [3, [1]]]
          | [[1, [0]], [4, [1]]]
          | [[2, [0]], [3, [1]]]
          | [[2, [0]], [4, [1]]]
        >
      >,
      Expect<
        Equal<
          Distribute<
            [
              {
                cases:
                  | {
                      value: 1;
                      subUnions: [];
                    }
                  | {
                      value: 2;
                      subUnions: [];
                    };
                path: [0];
              },
              {
                cases:
                  | {
                      value: 3;
                      subUnions: [];
                    }
                  | {
                      value: 4;
                      subUnions: [];
                    };
                path: [1];
              },
              {
                cases:
                  | {
                      value: 5;
                      subUnions: [];
                    }
                  | {
                      value: 6;
                      subUnions: [];
                    };
                path: [2];
              }
            ]
          >,
          | [[1, [0]], [3, [1]], [5, [2]]]
          | [[1, [0]], [3, [1]], [6, [2]]]
          | [[1, [0]], [4, [1]], [5, [2]]]
          | [[1, [0]], [4, [1]], [6, [2]]]
          | [[2, [0]], [3, [1]], [5, [2]]]
          | [[2, [0]], [3, [1]], [6, [2]]]
          | [[2, [0]], [4, [1]], [5, [2]]]
          | [[2, [0]], [4, [1]], [6, [2]]]
        >
      >,
      Equal<
        // Nested
        Distribute<
          [
            {
              cases:
                | {
                    value: {
                      type: 'a';
                      value: 1 | 2;
                    };
                    subUnions: [
                      {
                        cases:
                          | {
                              value: 1;
                              subUnions: [];
                            }
                          | {
                              value: 2;
                              subUnions: [];
                            };
                        path: ['value'];
                      }
                    ];
                  }
                | {
                    value: {
                      type: 'b';
                      value: 4 | 5;
                    };
                    subUnions: [
                      {
                        cases:
                          | {
                              value: 4;
                              subUnions: [];
                            }
                          | {
                              value: 5;
                              subUnions: [];
                            };
                        path: ['value'];
                      }
                    ];
                  };
              path: [];
            }
          ]
        >,
        | [[{ type: 'a'; value: 1 | 2 }, []], [1, ['value']]]
        | [[{ type: 'a'; value: 1 | 2 }, []], [2, ['value']]]
        | [[{ type: 'b'; value: 4 | 5 }, []], [4, ['value']]]
        | [[{ type: 'b'; value: 4 | 5 }, []], [5, ['value']]]
      >
    ];
  });
});

describe('DistributeMatchingUnions', () => {
  type cases = [
    Expect<
      Equal<
        DistributeMatchingUnions<
          { a: 1 | 2; b: '3' | '4'; c: '5' | '6' },
          { a: 1; b: '3'; c: '5' }
        >,
        | { a: 1; b: '3'; c: '5' }
        | { a: 1; b: '3'; c: '6' }
        | { a: 1; b: '4'; c: '5' }
        | { a: 1; b: '4'; c: '6' }
        | { a: 2; b: '3'; c: '5' }
        | { a: 2; b: '3'; c: '6' }
        | { a: 2; b: '4'; c: '5' }
        | { a: 2; b: '4'; c: '6' }
      >
    >,
    Expect<
      Equal<
        DistributeMatchingUnions<
          { x: 'a'; value: Option<string> } | { x: 'b'; value: Option<number> },
          { x: 'a'; value: { kind: 'none' } }
        >,
        | { x: 'a'; value: { kind: 'none' } }
        | { x: 'a'; value: { kind: 'some'; value: string } }
        | { x: 'b'; value: Option<number> }
      >
    >,
    Expect<
      Equal<
        DistributeMatchingUnions<
          [1, number] | ['two', string] | [3, boolean],
          [3, true]
        >,
        [1, number] | ['two', string] | [3, false] | [3, true]
      >
    >
  ];

  it('should leave unions of literals untouched', () => {
    type cases = [
      Expect<Equal<DistributeMatchingUnions<'a' | 'b', 'a'>, 'a' | 'b'>>,
      Expect<Equal<DistributeMatchingUnions<1 | 2, 1>, 1 | 2>>,
      Expect<Equal<DistributeMatchingUnions<boolean, true>, false | true>>
    ];
  });

  it('should work on nested tuples', () => {
    type cases = [
      Expect<
        Equal<
          DistributeMatchingUnions<
            [1, ['two', Option<string>] | [3, Option<boolean>]],
            [1, ['two', { kind: 'some'; value: string }]]
          >,
          | [1, ['two', { kind: 'none' }]]
          | [1, ['two', { kind: 'some'; value: string }]]
          | [1, [3, Option<boolean>]]
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            [1, ['two', Option<string>]] | [3, Option<boolean>],
            [1, ['two', { kind: 'some'; value: string }]]
          >,
          | [1, ['two', { kind: 'none' }]]
          | [1, ['two', { kind: 'some'; value: string }]]
          | [3, Option<boolean>]
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<['a' | 'b', 1 | 2], ['a', unknown]>,
          ['a', 1 | 2] | ['b', 1 | 2]
        >
      >
    ];
  });

  it("unknown should match but shouldn't distribute", () => {
    type cases = [
      Expect<
        Equal<
          DistributeMatchingUnions<
            [1, ['two', Option<string>]] | [3, Option<boolean>],
            [1, unknown]
          >,
          [1, ['two', Option<string>]] | [3, Option<boolean>]
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            { a: 1 | 2; b: '3' | '4'; c: '5' | '6' },
            { a: 1; b: unknown; c: unknown }
          >,
          | { a: 1; b: '3' | '4'; c: '5' | '6' }
          | { a: 2; b: '3' | '4'; c: '5' | '6' }
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            { a: 1 | 2; b: '3' | '4'; c: '5' | '6' },
            { a: 1; b: '3'; c: unknown }
          >,
          | { a: 1; b: '3'; c: '5' | '6' }
          | { a: 2; b: '3'; c: '5' | '6' }
          | { a: 1; b: '4'; c: '5' | '6' }
          | { a: 2; b: '4'; c: '5' | '6' }
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            { a: 1 | 2; b: ['3' | '4', '5' | '6'] },
            { a: 1; b: ['3', unknown] }
          >,
          | { a: 1; b: ['3', '5' | '6'] }
          | { a: 2; b: ['3', '5' | '6'] }
          | { a: 1; b: ['4', '5' | '6'] }
          | { a: 2; b: ['4', '5' | '6'] }
        >
      >
    ];
  });

  it('should work for non unions', () => {
    type res1 = DistributeMatchingUnions<[], []>;
    type test1 = Expect<Equal<res1, []>>;

    type cases = [
      Expect<Equal<DistributeMatchingUnions<{}, {}>, {}>>,
      Expect<
        Equal<
          DistributeMatchingUnions<Map<string, string>, Map<string, string>>,
          Map<string, string>
        >
      >,
      Expect<
        Equal<DistributeMatchingUnions<Set<string>, Set<string>>, Set<string>>
      >,
      Expect<Equal<DistributeMatchingUnions<string, string>, string>>,
      Expect<Equal<DistributeMatchingUnions<number, number>, number>>,
      Expect<Equal<DistributeMatchingUnions<any, any>, any>>,
      Expect<Equal<DistributeMatchingUnions<never, never>, never>>,
      Expect<Equal<DistributeMatchingUnions<unknown, unknown>, unknown>>
    ];
  });

  it('should work with objects', () => {
    type X = 1 | 2 | 3 | 4 | 5 | 6 | 7;

    type cases = [
      Expect<
        Equal<
          DistributeMatchingUnions<
            { a: X; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X },
            { a: 1 }
          >,
          | { a: 1; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
          | { a: 2; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
          | { a: 3; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
          | { a: 4; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
          | { a: 5; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
          | { a: 6; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
          | { a: 7; b: X; c: X; d: X; e: X; f: X; g: X; h: X; i: X }
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            {
              type: 'type';
              x: undefined;
              q: string;
              union1: 'a' | 'b';
              color: '3';
              union2: '1' | '2';
            },
            { union1: 'a'; union2: '1' }
          >,
          | {
              type: 'type';
              q: string;
              x: undefined;
              union1: 'a';
              color: '3';
              union2: '1';
            }
          | {
              type: 'type';
              q: string;
              x: undefined;
              union1: 'a';
              color: '3';
              union2: '2';
            }
          | {
              type: 'type';
              q: string;
              x: undefined;
              union1: 'b';
              color: '3';
              union2: '1';
            }
          | {
              type: 'type';
              q: string;
              x: undefined;
              union1: 'b';
              color: '3';
              union2: '2';
            }
        >
      >
    ];
  });

  it('should not distribute unions for lists, set and maps', () => {
    // The reason is that list can be heterogeneous, so
    // matching on a A[] for a in input of (A|B)[] doesn't
    // rule anything out. You can still have a (A|B)[] afterward.
    // The same logic goes for Set and Maps.
    type cases = [
      Expect<
        Equal<DistributeMatchingUnions<('a' | 'b')[], 'a'[]>, ('a' | 'b')[]>
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            { type: 'a' | 'b'; x: 'c' | 'd' }[],
            { type: 'a'; x: 'c' }[]
          >,
          { type: 'a' | 'b'; x: 'c' | 'd' }[]
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<Set<'a' | 'b'>, Set<'a'>>,
          Set<'a' | 'b'>
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<Map<string, 'a' | 'b'>, Map<string, 'a'>>,
          Map<string, 'a' | 'b'>
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            | {
                type: 'a';
                items: ({ t: 'x'; some: string; data: number } | { t: 'y' })[];
              }
            | {
                type: 'b';
                items: { other: boolean; data: string }[];
              },
            { type: 'a'; items: { t: 'y' }[] }
          >,
          | {
              type: 'a';
              items: ({ t: 'x'; some: string; data: number } | { t: 'y' })[];
            }
          | {
              type: 'b';
              items: { other: boolean; data: string }[];
            }
        >
      >
    ];
  });

  it('should return the input if the inverted pattern is `unknown` (if the pattern is `P._`', () => {
    type cases = [
      Expect<
        Equal<
          DistributeMatchingUnions<
            [1, number] | ['two', string] | [3, boolean],
            unknown
          >,
          [1, number] | ['two', string] | [3, boolean]
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            { a: 1 | 2; b: '3' | '4'; c: '5' | '6' },
            unknown
          >,
          { a: 1 | 2; b: '3' | '4'; c: '5' | '6' }
        >
      >,
      Expect<
        Equal<
          DistributeMatchingUnions<
            | { x: 'a'; value: Option<string> }
            | { x: 'b'; value: Option<number> },
            unknown
          >,
          { x: 'a'; value: Option<string> } | { x: 'b'; value: Option<number> }
        >
      >
    ];
  });

  it('should work with readonly inputs', () => {
    type cases = [
      Expect<
        Equal<
          DistributeMatchingUnions<readonly ['a' | 'b', 'c' | 'd'], ['a', 'c']>,
          ['a', 'c'] | ['a', 'd'] | ['b', 'c'] | ['b', 'd']
        >
      >
    ];
  });
});

}


// ----- source: tests/exhaustive-fallback.test.ts
{

describe('Exhaustive fallback function', () => {
  it("should be called if the runtime value isn't expected", () => {
    const input: 'a' | 'b' = 'c' as any;
    const result = match(input)
      .with('a', (x) => x)
      .with('b', (x) => x)
      .exhaustive((v) => ({ unexpectedValue: v }));

    type t = Expect<
      Equal<typeof result, { unexpectedValue: unknown } | 'a' | 'b'>
    >;

    expect(result).toStrictEqual({ unexpectedValue: 'c' });
  });

  it('should throw otherwise', () => {
    expect(() => {
      const input: 'a' | 'b' = 'c' as any;
      return match(input)
        .with('a', (x) => x)
        .with('b', (x) => x)
        .exhaustive();
    }).toThrow();
  });

  it('should return a value assignable to the explicit output type', () => {
    const input: 'a' | 'b' = 'c' as any;
    const res = match<typeof input, 'a' | 'b'>(input)
      .with('a', (x) => x)
      .with('b', (x) => x)
      // @ts-expect-error 'c' isn't assignable to a|b
      .exhaustive(() => {
        // Note: ideally the error message should be here.
        return 'c';
      });
  });

  it('should return a value assignable .returnType<T>()', () => {
    const input: 'a' | 'b' = 'c' as any;
    const res = match(input)
      .returnType<'a' | 'b'>()
      .with('a', (x) => x)
      .with('b', (x) => x)
      // @ts-expect-error 'c' isn't assignable to a|b
      .exhaustive(() => 'c');
  });
});

}


// ----- source: tests/exhaustive-match.test.ts
{

describe('exhaustive()', () => {
  describe('should exclude matched patterns from subsequent `.with()` clauses', () => {
    it('string literals', () => {
      type Input = 'a' | 'b' | 'c';
      const input = 'b' as Input;

      match(input)
        .with('b', (x) => {
          type t = Expect<Equal<typeof x, 'b'>>;
          return 1;
        })
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with('a', (x) => 1)
        .with('b', (x) => 1)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with('a', (x) => {
          type t = Expect<Equal<typeof x, 'a'>>;
          return 1;
        })
        .with('b', (x) => {
          type t = Expect<Equal<typeof x, 'b'>>;
          return 2;
        })
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with('a', (x) => {
          type t = Expect<Equal<typeof x, 'a'>>;
          return 1;
        })
        .with('b', (x) => {
          type t = Expect<Equal<typeof x, 'b'>>;
          return 2;
        })
        .with('c', (x) => {
          type t = Expect<Equal<typeof x, 'c'>>;
          return 2;
        })
        .exhaustive();
    });

    it('number literals', () => {
      type Input = 1 | 2 | 3;
      const input = 2 as Input;

      match(input)
        .with(2, (x) => {
          type t = Expect<Equal<typeof x, 2>>;
          return 2;
        })
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with(1, (x) => 1)
        .with(2, () => 3)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with(1, (x) => {
          type t = Expect<Equal<typeof x, 1>>;
          return 1;
        })
        .with(2, (x) => {
          type t = Expect<Equal<typeof x, 2>>;
          return 2;
        })
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with(1, (x) => {
          type t = Expect<Equal<typeof x, 1>>;
          return 1;
        })
        .with(2, (x) => {
          type t = Expect<Equal<typeof x, 2>>;
          return 2;
        })
        .with(3, (x) => {
          type t = Expect<Equal<typeof x, 3>>;
          return 2;
        })
        .exhaustive();
    });

    it('boolean literals', () => {
      type Input =
        | [true, true]
        | [false, true]
        | [false, false]
        | [true, false];
      const input = [true, true] as Input;

      match(input)
        .with([true, true], () => true)
        .with([false, true], () => false)
        .with([true, false], () => false)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with([true, true], () => true)
        .with([false, true], () => false)
        .with([true, false], () => false)
        .with([false, false], () => false)
        .exhaustive();
    });

    it('boolean literals', () => {
      type Input = [boolean, boolean];
      const input = [true, true] as Input;

      match(input)
        .with([true, true], () => true)
        .with([false, true], () => false)
        .with([true, false], () => false)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with([true, true], () => true)
        .with([false, true], () => false)
        .with([true, false], () => false)
        .with([false, false], () => false)
        .exhaustive();
    });

    it('union of objects', () => {
      type letter =
        | 'a'
        | 'b'
        | 'c'
        | 'd'
        | 'e'
        | 'f'
        | 'g'
        | 'h'
        | 'i'
        | 'j'
        | 'k'
        | 'l'
        | 'm'
        | 'n'
        | 'o'
        | 'p'
        | 'q'
        | 'r'
        | 's'
        | 't'
        | 'u'
        | 'v'
        | 'w'
        | 'x'
        | 'y'
        | 'z';

      type Input =
        | { type: 1; data: number }
        | { type: 'two'; data: string }
        | { type: 3; data: boolean }
        | { type: 4 }
        | (letter extends any ? { type: letter } : never);

      const input = { type: 1, data: 2 } as Input;

      match(input)
        .with({ type: 1 }, (x) => 1)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with({ type: 1 }, (x) => 1)
        .with({ type: 'two' }, (x) => 2)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with({ type: 1, data: P.select() }, (data) => {
          type t = Expect<Equal<typeof data, number>>;
          return 1;
        })
        .with({ type: 'two', data: P.select() }, (data) => data.length)
        .with({ type: 3, data: true }, ({ data }) => {
          type t = Expect<Equal<typeof data, true>>;
          return 3;
        })
        .with({ type: 3, data: P.any }, ({ data }) => {
          type t = Expect<Equal<typeof data, boolean>>;
          return 3;
        })
        .with({ type: 4 }, () => 3)
        .with({ type: 'a' }, () => 0)
        .with({ type: 'b' }, () => 0)
        .with({ type: 'c' }, () => 0)
        .with({ type: 'd' }, () => 0)
        .with({ type: 'e' }, () => 0)
        .with({ type: 'f' }, () => 0)
        .with({ type: 'g' }, () => 0)
        .with({ type: 'h' }, () => 0)
        .with({ type: 'i' }, () => 0)
        .with({ type: 'j' }, () => 0)
        .with({ type: 'k' }, () => 0)
        .with({ type: 'l' }, () => 0)
        .with({ type: 'm' }, () => 0)
        .with({ type: 'n' }, () => 0)
        .with({ type: 'o' }, () => 0)
        .with({ type: 'p' }, () => 0)
        .with({ type: 'q' }, () => 0)
        .with({ type: 'r' }, () => 0)
        .with({ type: 's' }, () => 0)
        .with({ type: 't' }, () => 0)
        .with({ type: 'u' }, () => 0)
        .with({ type: 'v' }, () => 0)
        .with({ type: 'w' }, () => 0)
        .with({ type: 'x' }, () => 0)
        .with({ type: 'y' }, () => 0)
        .with({ type: 'z' }, () => 0)
        .exhaustive();

      match<Option<number>>({ kind: 'some', value: 3 })
        .with({ kind: 'some' }, ({ value }) => value)
        .with({ kind: 'none' }, () => 0)
        .exhaustive();

      match<Option<number>>({ kind: 'some', value: 3 })
        .with({ kind: 'some', value: 3 }, ({ value }): number => value)
        .with({ kind: 'none' }, () => 0)
        // @ts-expect-error: missing {kind: 'some', value: number}
        .exhaustive();

      match<Option<number>>({ kind: 'some', value: 3 })
        .with({ kind: 'some', value: 3 }, ({ value }): number => value)
        .with({ kind: 'some', value: P.number }, ({ value }): number => value)
        .with({ kind: 'none' }, () => 0)
        .exhaustive();
    });

    it('union of tuples', () => {
      type Input = [1, number] | ['two', string] | [3, boolean];
      const input = [1, 3] as Input;

      match(input)
        .with([1, P.any], (x) => 1)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with([1, P.any], (x) => 1)
        .with(['two', P.any], (x) => 2)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with([1, P.any], (x) => 1)
        .with(['two', P.any], ([_, data]) => data.length)
        .with([3, P.any], () => 3)
        .exhaustive();

      match(input)
        .with([1, P.any], (x) => 1)
        .with(['two', 'Hey'], ([_, data]) => data.length)
        .with(['two', P.any], ([_, data]) => data.length)
        .with([3, P.any], () => 3)
        .exhaustive();
    });

    it('deeply nested 1', () => {
      type Input =
        | [1, Option<number>]
        | ['two', Option<string>]
        | [3, Option<boolean>];
      const input = [1, { kind: 'some', value: 3 }] as Input;

      match(input)
        .with([1, { kind: 'some' }], (x) => 1)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with([1, P.any], (x) => 1)
        .with(['two', P.any], (x) => 2)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with([1, P._], (x) => 1)
        .with(['two', { kind: 'some' }], ([_, { value }]) => value.length)
        .with([3, P._], () => 3)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with(['two', { kind: 'some' }], ([_, { value }]) => value.length)
        .with(['two', { kind: 'none' }], () => 4)
        .with([1, P._], () => 3)
        .with([3, P._], () => 3)
        .exhaustive();
    });

    it('deeply nested 2', () => {
      type Input = ['two', Option<string>];
      const input = ['two', { kind: 'some', value: 'hello' }] as Input;

      match(input)
        .with(['two', { kind: 'some' }], ([_, { value }]) => value.length)
        .with(['two', { kind: 'none' }], () => 4)
        .exhaustive();
    });

    it('should work with non-unions', () => {
      match<number>(2)
        .with(2, () => 'two')
        .with(3, () => 'three')
        // @ts-expect-error
        .exhaustive();

      match<number>(2)
        .with(2, () => 'two')
        .with(3, () => 'three')
        .with(P.number, () => 'something else')
        .exhaustive();

      match<string>('Hello')
        .with('Hello', () => 'english')
        .with('Bonjour', () => 'french')
        // @ts-expect-error
        .exhaustive();

      match<string>('Hello')
        .with('Hello', () => 'english')
        .with('Bonjour', () => 'french')
        .with(P.any, (c) => 'something else')
        .exhaustive();
    });

    it('should work with object properties union', () => {
      type Input = { value: 'a' | 'b' };
      const input = { value: 'a' } as Input;

      match(input)
        .with({ value: 'a' }, (x) => 1)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with({ value: P.any }, (x) => 1)
        .exhaustive();

      match(input)
        .with({ value: 'a' }, (x) => 1)
        .with({ value: 'b' }, (x) => 1)
        .exhaustive();
    });

    it('should work with lists', () => {
      type Input =
        | {
            type: 'a';
            items: ({ some: string; data: number } | string)[];
          }
        | {
            type: 'b';
            items: { other: boolean; data: string }[];
          };

      const input = {
        type: 'a',
        items: [{ some: 'hello', data: 42 }],
      } as Input;

      match(input)
        .with({ type: 'a' }, (x) => x.items)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with({ type: 'a' }, (x) => x.items)
        .with({ type: 'b', items: P.array({ data: P.string }) }, (x) => [])
        .exhaustive();

      match(input)
        .with({ type: 'a', items: P.array(P.any) }, (x) => x.items)
        .with({ type: 'b', items: P.array({ data: P.string }) }, (x) => [])
        .exhaustive();

      match<Input>(input)
        .with({ type: 'a', items: P.array({ some: P.any }) }, (x) => x.items)
        .with({ type: 'b', items: P.array({ data: P.string }) }, (x) => [])
        // @ts-expect-error
        .exhaustive();
    });

    it('should support P.any in a readonly tuple', () => {
      const f = (n: number, state: State) => {
        const x = match([n, state])
          .with(
            [1, { status: 'success', data: P.select() }],
            ([_, { data }]) => data.startsWith('coucou'),
            (data) => data.replace('coucou', 'bonjour')
          )
          .with([2, P.any], () => "It's a twoooo")
          .with([P.any, { status: 'error' }], () => 'Oups')
          .with([P.any, { status: 'idle' }], () => '')
          .with([P.any, { status: 'loading' }], () => '')
          .with([P.any, { status: 'success' }], () => '')
          .exhaustive();
      };
    });

    it('should work with Sets', () => {
      type Input = Set<string> | Set<number>;
      const input = new Set(['']) as Input;

      match(input)
        .with(P.set(P.string), (x) => x)
        // @ts-expect-error
        .exhaustive();

      match(input)
        .with(P.set(P.string), (x) => x)
        .with(P.set(P.number), (x) => new Set([]))
        .exhaustive();
    });

    it('should work with Sets', () => {
      type Input = Set<string> | Set<number>;
      const input = new Set(['']) as Input;

      expect(
        match(input)
          .with(P.set(P.string), (x) => x)
          // @ts-expect-error
          .exhaustive()
      ).toEqual(input);

      expect(
        match(input)
          .with(P.set(P.string), (x) => 1)
          .with(P.set(P.number), (x) => 2)
          .exhaustive()
      ).toEqual(1);
    });

    it('should work with Maps', () => {
      type Input = Map<string, 1 | 2 | 3>;
      const input = new Map([['hello', 1]]) as Input;

      expect(
        match(input)
          .with(P.map('hello', P.number), (x) => x)
          // @ts-expect-error
          .exhaustive()
      ).toEqual(input);

      expect(
        match(input)
          .with(P.map('hello', 1), (x) => x)
          // @ts-expect-error
          .exhaustive()
      ).toEqual(input);

      expect(
        match(input)
          .with(P.map('hello', 1), (x) => x)
          // @ts-expect-error
          .exhaustive()
      ).toEqual(input);

      match(input)
        .with(P.any, (x) => x)
        .exhaustive();
    });

    it('should work with structures with a lot of unions', () => {
      type X = 1 | 2 | 3 | 4 | 5 | 6 | 7;
      // This structures has 7 ** 9 = 40353607 possibilities
      match<{
        a: X;
        b: X;
        c: X;
        d: X;
        e: X;
        f: X;
        g: X;
        h: X;
        i: X;
      }>({ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1 })
        .with({ b: 1 }, () => 'otherwise')
        .with({ b: 2 }, () => 'b = 2')
        .with({ b: 3 }, () => 'otherwise')
        .with({ b: 4 }, () => 'otherwise')
        .with({ b: 5 }, () => 'otherwise')
        .with({ b: 6 }, () => 'otherwise')
        .with({ b: 7 }, () => 'otherwise')
        .exhaustive();

      match<{
        a: X;
        b: X;
        c: X;
      }>({ a: 1, b: 1, c: 1 })
        .with({ a: P.not(1) }, () => 'a != 1')
        .with({ a: 1 }, () => 'a != 1')
        .exhaustive();

      match<{
        a: BigUnion;
        b: BigUnion;
      }>({ a: 'a', b: 'b' })
        .with({ a: 'a' }, () => 0)
        .with({ a: 'b' }, () => 0)
        .with({ a: 'c' }, (x) => 0)
        .with({ a: 'd' }, () => 0)
        .with({ a: 'e' }, (x) => 0)
        .with({ a: 'f', b: P.any }, (x) => 0)
        .with({ a: P.any }, (x) => 0)
        .exhaustive();
    });

    it('should work with generics', () => {
      const last = <a>(xs: a[]) =>
        match<a[], Option<a>>(xs)
          .with([], () => none)
          .with(P.any, (x, y) => some(xs[xs.length - 1]))
          .exhaustive();

      expect(last([1, 2, 3])).toEqual(some(3));
    });

    it('should work with generics in type guards', () => {
      const map = <A, B>(
        option: Option<A>,
        mapper: (value: A) => B
      ): Option<B> =>
        match<Option<A>, Option<B>>(option)
          .when(
            (option): option is { kind: 'some'; value: A } =>
              option.kind === 'some',
            (option) => ({
              kind: 'some',
              value: mapper(option.value),
            })
          )
          .when(
            (option): option is { kind: 'none' } => option.kind === 'none',
            (option) => option
          )
          .otherwise(() => ({ kind: 'none' }));

      const res = map(
        { kind: 'some' as const, value: 20 },
        (x) => `number is ${x}`
      );

      type t = Expect<Equal<typeof res, Option<string>>>;

      expect(res).toEqual({ kind: 'some' as const, value: `number is 20` });
    });

    it('should work with inputs of varying shapes', () => {
      type Input = { type: 'test' } | ['hello', Option<string>] | 'hello'[];
      const input = { type: 'test' } as Input;

      expect(
        match(input)
          .with(['hello', { kind: 'some' }], ([, { value }]) => {
            return value;
          })
          .with(['hello'], ([str]) => {
            return str;
          })
          .with({ type: P.any }, (x) => x.type)
          .with(P.array(P.any), (x) => {
            type t = Expect<
              Equal<typeof x, 'hello'[] | ('hello' | Option<string>)[]>
            >;
            return `("hello" | Option<string>)[] | "hello"[]`;
          })
          .exhaustive()
      ).toEqual('test');
    });

    it('should infer literals as literal types', () => {
      type Input = { type: 'video'; duration: number };

      match<Input>({ type: 'video', duration: 10 })
        .with({ type: 'video', duration: 10 }, (x) => '')
        // @ts-expect-error
        .exhaustive();

      let n: number = 10;
      match<number>(n)
        .with(10, (x) => '')
        // @ts-expect-error
        .exhaustive();
    });

    it('should correctly exclude cases if when pattern contains a type guard', () => {
      match<{ x: 1 | 2 | 3 }>({ x: 2 })
        .with({ x: P.when((x): x is 1 => x === 1) }, (x) => {
          type t = Expect<Equal<typeof x, { x: 1 }>>;
          return '';
        })
        .with({ x: P.when((x): x is 2 => x === 2) }, (x) => {
          type t = Expect<Equal<typeof x, { x: 2 }>>;
          return '';
        })
        .with({ x: P.when((x): x is 3 => x === 3) }, (x) => {
          type t = Expect<Equal<typeof x, { x: 3 }>>;
          return '';
        })
        .exhaustive();
    });

    it('should correctly exclude cases if .when is a type guard', () => {
      match<Option<string>, Option<number>>({ kind: 'none' })
        .when(
          (option): option is { kind: 'some'; value: string } =>
            option.kind === 'some',
          (option) => ({
            kind: 'some',
            value: option.value.length,
          })
        )
        .when(
          (option): option is { kind: 'none' } => option.kind === 'none',
          (option) => option
        )
        .exhaustive();
    });

    it('should correctly exclude cases if the pattern is a literal type', () => {
      const input = { kind: 'none' } as Option<string>;
      match(input)
        .with({ kind: 'some', value: 'hello' }, (option) => '')
        .with({ kind: 'none' }, (option) => '')
        // @ts-expect-error: handled { kind: 'some', value: string }
        .exhaustive();

      match(input)
        .with({ kind: 'some', value: 'hello' }, (option) => '')
        .with({ kind: 'none' }, (option) => '')
        .with({ kind: 'some' }, (option) => '')
        .exhaustive();
    });

    it('should not exclude cases if the pattern is a literal type and the value is not', () => {
      match<{ x: number }>({ x: 2 })
        .with({ x: 2 }, ({ x }) => {
          type t = Expect<Equal<typeof x, 2>>;
          return '';
        })
        // @ts-expect-error
        .exhaustive();

      match<1 | 2 | 3>(2)
        .with(2, (x) => {
          type t = Expect<Equal<typeof x, 2>>;
          return '';
        })
        // @ts-expect-error
        .exhaustive();

      match<1 | 2 | 3>(2)
        .with(1, (x) => {
          type t = Expect<Equal<typeof x, 1>>;
          return '';
        })
        .with(2, (x) => {
          type t = Expect<Equal<typeof x, 2>>;
          return '';
        })
        .with(3, (x) => {
          type t = Expect<Equal<typeof x, 3>>;
          return '';
        })
        .exhaustive();
    });
  });

  it('real world example', () => {
    type Input =
      | { type: 'text'; text: string; author: { name: string } }
      | { type: 'video'; duration: number; src: string }
      | {
          type: 'movie';
          duration: number;
          author: { name: string };
          src: string;
          title: string;
        }
      | { type: 'picture'; src: string };

    const isNumber = (x: unknown): x is number => typeof x === 'number';

    match<Input>({ type: 'text', text: 'Hello', author: { name: 'Gabriel' } })
      .with(
        {
          type: 'text',
          text: P.select('text'),
          author: { name: P.select('authorName') },
        },
        ({ text, authorName }) => `${text} from ${authorName}`
      )
      .with({ type: 'video', duration: P.when((x) => x > 10) }, () => '')
      .with(
        {
          type: 'video',
          duration: P.when(isNumber),
        },
        () => ''
      )
      .with({ type: 'movie', duration: 10 }, () => '')
      .with(
        {
          type: 'movie',
          duration: 10,
          author: P.select('author'),
          title: P.select('title'),
        },
        ({ author, title }) => ''
      )
      .with({ type: 'picture' }, () => '')
      .with({ type: 'movie', duration: P.when(isNumber) }, () => '')
      .exhaustive();
  });

  it('reducer example', () => {
    const initState: State = {
      status: 'idle',
    };

    const reducer = (state: State, event: Event): State =>
      match<[State, Event], State>([state, event])
        .with(
          [{ status: 'loading' }, { type: 'success', data: P.select() }],
          (data) => ({ status: 'success', data })
        )
        .with(
          [{ status: 'loading' }, { type: 'error', error: P.select() }],
          (error) => ({ status: 'error', error })
        )
        .with([{ status: 'loading' }, { type: 'cancel' }], () => initState)

        .with([{ status: P.not('loading') }, { type: 'fetch' }], (value) => ({
          status: 'loading',
        }))
        .with(P._, () => state)
        .exhaustive();
  });

  it('select should always match', () => {
    type Input = { type: 3; data: number };

    const input = { type: 3, data: 2 } as Input;

    match<Input>(input)
      .with({ type: 3, data: P.select() }, (data) => {
        type t = Expect<Equal<typeof data, number>>;
        return 3;
      })
      .exhaustive();

    type Input2 = { type: 3; data: true } | 2;
    match<Input2>(2)
      .with({ type: 3, data: P.select() }, (data) => {
        type t = Expect<Equal<typeof data, true>>;
        return 3;
      })
      .with(2, () => 2)
      .exhaustive();
  });

  describe('Exhaustive match with runtime error', () => {
    type FlagComponent = { color: 'red' | 'white' | 'blue' };

    function checkFlagComponent(component: FlagComponent) {
      return match(component)
        .with({ color: 'red' }, () => {
          throw new Error('Red error');
        })
        .with({ color: 'white' }, () => {
          throw new Error('White error');
        })
        .with({ color: 'blue' }, () => {
          throw new Error('Blue error');
        })
        .exhaustive();
    }

    it('Unmatched pattern results in NonExhaustiveError', () => {
      expect.assertions(3);
      const input = { color: 'orange' } as unknown as FlagComponent;

      try {
        checkFlagComponent(input);
      } catch (e) {
        const err = e as NonExhaustiveError;
        expect(err).toBeInstanceOf(NonExhaustiveError);
        expect(err.message).toEqual(
          'Pattern matching error: no pattern matches value {"color":"orange"}'
        );
        expect(err.input).toStrictEqual(input);
      }
    });

    it('Matched pattern with callback error does not result in NonExhaustiveError', () => {
      expect.assertions(3);

      try {
        checkFlagComponent({ color: 'blue' });
      } catch (e) {
        const err = e as Error;
        expect(err).toBeInstanceOf(Error);
        expect(err).not.toBeInstanceOf(NonExhaustiveError);
        expect(err.message).toEqual('Blue error');
      }
    });
  });

  describe('Exhaustive match and `not` patterns', () => {
    it('should work with a single not pattern', () => {
      const reducer1 = (state: State, event: Event): State =>
        match<[State, Event], State>([state, event])
          .with([{ status: P.not('loading') }, P.any], (x) => state)
          .with([{ status: 'loading' }, { type: 'fetch' }], () => state)
          // @ts-expect-error
          .exhaustive();

      const reducer3 = (state: State, event: Event): State =>
        match<[State, Event], State>([state, event])
          .with([{ status: P.not('loading') }, P.any], (x) => state)
          .with([{ status: 'loading' }, P.any], () => state)
          .exhaustive();
    });

    it('should work with several not patterns', () => {
      const reducer = (state: State, event: Event): State =>
        match<[State, Event], State>([state, event])
          .with(
            [{ status: P.not('loading') }, { type: P.not('fetch') }],
            (x) => state
          )
          .with([{ status: 'loading' }, { type: P.any }], () => state)
          .with([{ status: P.any }, { type: 'fetch' }], () => state)
          .exhaustive();

      const f = (input: readonly [1 | 2 | 3, 1 | 2 | 3, 1 | 2 | 3]) =>
        match(input)
          .with([P.not(1), P.not(1), P.not(1)], (x) => 'ok')
          .with([1, P._, P._], () => 'ok')
          .with([P._, 1, P._], () => 'ok')
          .with([P._, P._, 1], () => 'ok')
          .exhaustive();

      const range = [1, 2, 3] as const;
      const flatMap = <A, B>(
        xs: readonly A[],
        f: (x: A) => readonly B[]
      ): B[] => xs.reduce<B[]>((acc, x) => acc.concat(f(x)), []);

      const allPossibleCases = flatMap(range, (x) =>
        flatMap(range, (y) => flatMap(range, (z) => [[x, y, z]] as const))
      );

      allPossibleCases.forEach((x) => expect(f(x)).toBe('ok'));

      const f2 = (input: [1 | 2 | 3, 1 | 2 | 3, 1 | 2 | 3]) =>
        match(input)
          .with([P.not(1), P.not(1), P.not(1)], (x) => 'ok')
          .with([1, P.any, P.any], () => 'ok')
          .with([P.any, 1, P.any], () => 'ok')
          // @ts-expect-error : NonExhaustiveError<[3, 3, 1] | [3, 2, 1] | [2, 3, 1] | [2, 2, 1]>
          .exhaustive();
    });

    it('should work with not patterns and lists', () => {
      const f = (input: (1 | 2 | 3)[]) =>
        match(input)
          .with([P.not(1)], (x) => 'ok')
          .with([1], (x) => 'ok')
          // @ts-expect-error: NonExhaustiveError<(1 | 2 | 3)[]>, because lists can be heterogenous
          .exhaustive();
    });
  });

  describe('exhaustive and any', () => {
    const f = (input: { t: 'a'; x: any } | { t: 'b' }) =>
      match(input)
        .with({ t: 'a' }, (x) => {
          type t = Expect<Equal<typeof x, { t: 'a'; x: any }>>;
          return 'ok';
        })
        .with({ t: 'b' }, (x) => 'ok')
        .exhaustive();

    const f2 = (input: { t: 'a'; x: any } | { t: 'b' }) =>
      match(input)
        .with({ t: 'a', x: 'hello' }, (x) => 'ok')
        .with({ t: 'b' }, (x) => 'ok')
        // FIXME should error @ts-expect-error
        .exhaustive();

    const f3 = (input: { t: 'a'; x: any } | { t: 'b' }) =>
      match(input)
        .with({ t: 'a', x: P.any }, (x) => 'ok')
        .with({ t: 'b' }, (x) => 'ok')
        .exhaustive();
  });

  describe('issue #44', () => {
    it("shouldn't exclude cases if the pattern contains unknown keys", () => {
      type Person = {
        sex: 'a' | 'b';
        age: 'c' | 'd';
      };

      function withTypo(person: Person) {
        return (
          match(person)
            //   this pattern contains an addition unknown key
            .with({ sex: 'b', oopsThisIsATypo: 'c' }, (x) => {
              // The unknown key should be added to the object type
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    age: 'c' | 'd';
                    sex: 'b';
                    oopsThisIsATypo: 'c';
                  }
                >
              >;
              return 1;
            })
            // those are correct
            .with({ sex: 'b', age: 'd' }, () => 2)
            .with({ sex: 'a', age: 'c' }, () => 3)
            .with({ sex: 'a', age: 'd' }, () => 4)
            // this pattern shouldn't be considered exhaustive
            // @ts-expect-error
            .exhaustive()
        );
      }

      function withoutTypo(person: Person) {
        return (
          match(person)
            .with({ sex: 'b', age: 'c' }, (x) => 1)
            .with({ sex: 'b', age: 'd' }, () => 2)
            .with({ sex: 'a', age: 'c' }, () => 3)
            .with({ sex: 'a', age: 'd' }, () => 4)
            // this should be ok
            .exhaustive()
        );
      }

      expect(() => withTypo({ sex: 'b', age: 'c' })).toThrow();
      expect(withoutTypo({ sex: 'b', age: 'c' })).toBe(1);
    });
  });

  it('issue #271: P.array should exhaustively match readonly arrays', () => {
    type Input = string | Date | readonly string[];
    const input = ['a', 'b', 'c'] as Input;

    const output = match(input)
      .with(P.array(P.string), (value) => 1)
      .with(P.string, (value) => 2)
      .with(P.instanceOf(Date), (value) => 3)
      .exhaustive();
  });

  describe('issue #278: should support exhaustive check on optional property', () => {
    // https://github.com/gvergnaud/ts-pattern/issues/278

    type Input = { type?: 'one' } | { type: 'two' };

    it("exhaustive should fail when the optional key isn't provided", () => {
      const f = (input: Input) =>
        match(input)
          .with({ type: 'one' }, (x) => {
            return false;
          })
          .with({ type: 'two' }, (x) => {
            return false;
          })
          // @ts-expect-error
          .exhaustive();

      expect(f({ type: 'one' })).toBe(false);
      expect(f({ type: 'two' })).toBe(false);
      expect(() => f({})).toThrow();
    });

    it('exhaustive should fail when matching on { type: undefined }', () => {
      // Because { type: undefined } doesn't match when passing an empty object –
      // the key must be present on the object.
      const f = (input: Input) =>
        match(input)
          .with({ type: 'one' }, (x) => {
            return false;
          })
          .with({ type: 'two' }, (x) => {
            return false;
          })
          .with({ type: undefined }, (x) => {
            type t = Expect<Equal<typeof x, { type: undefined }>>;
            return true;
          })
          // @ts-expect-error
          .exhaustive();

      expect(f({ type: 'one' })).toBe(false);
      expect(f({ type: 'two' })).toBe(false);
      expect(f({ type: undefined })).toBe(true);
      expect(() => f({})).toThrow();
    });

    it('exhaustive should pass when using P.optional(undefined)', () => {
      const f = (input: Input) =>
        match(input)
          .with({ type: 'one' }, (x) => {
            return false;
          })
          .with({ type: 'two' }, (x) => {
            return false;
          })
          .with({ type: P.optional(undefined) }, (x) => {
            type t = Expect<Equal<typeof x, { type?: undefined }>>;
            return true;
          })
          .exhaustive();

      expect(f({ type: 'one' })).toBe(false);
      expect(f({ type: 'two' })).toBe(false);
      expect(f({ type: undefined })).toBe(true);
      expect(f({})).toBe(true);
    });

    it('exhaustive should pass when using {} and { type: undefined }', () => {
      const f = (input: Input) =>
        match(input)
          .with({ type: 'one' }, (x) => {
            return false;
          })
          .with({ type: 'two' }, (x) => {
            return false;
          })
          .with({ type: undefined }, (x) => {
            type t = Expect<Equal<typeof x, { type: undefined }>>;
            return true;
          })
          .with({}, (x) => {
            return true;
          })
          .exhaustive();

      expect(f({ type: 'one' })).toBe(false);
      expect(f({ type: 'two' })).toBe(false);
      expect(f({ type: undefined })).toBe(true);
      expect(f({})).toBe(true);
    });
  });
});

}


// ----- source: tests/extract-precise-value.test.ts
{

describe('ExtractPreciseValue', () => {
  it('should correctly extract the matching value from the input and an inverted pattern', () => {
    type res1 = ExtractPreciseValue<
      { type: 'test' } | ['hello', Option<string>] | 'hello'[],
      ['hello', { kind: 'some' }]
    >;

    type test1 = Expect<
      Equal<res1, ['hello', { kind: 'some'; value: string }]>
    >;

    type cases = [
      Expect<
        Equal<
          ExtractPreciseValue<
            | { type: 'a'; message: string }
            | { type: 'b'; count: number }
            | { type: 'c'; count: number },
            { count: number }
          >,
          { type: 'b'; count: number } | { type: 'c'; count: number }
        >
      >,
      Expect<
        Equal<
          ExtractPreciseValue<
            | {
                type: 'a';
                x: { type: 'b'; count: number } | { type: 'c'; count: number };
                y: 'other';
              }
            | { type: 'b'; count: number }
            | { type: 'c'; count: number },
            { type: 'a'; x: { type: 'b' } }
          >,
          {
            type: 'a';
            x: { type: 'b'; count: number };
            y: 'other';
          }
        >
      >,
      Expect<
        Equal<
          ExtractPreciseValue<
            | {
                type: 'a';
                x:
                  | { type: 'b'; count: number }
                  | { type: 'c'; count: number }
                  | { type: 'd' };
                y: 'other';
              }
            | { type: 'b'; count: number }
            | { type: 'c'; count: number },
            { type: 'a'; x: { count: number } }
          >,
          {
            type: 'a';
            x: { type: 'b'; count: number } | { type: 'c'; count: number };
            y: 'other';
          }
        >
      >
    ];
  });

  it('should use the type of the pattern if the input is any or never', () => {
    type cases = [
      Expect<
        Equal<
          ExtractPreciseValue<any, ['hello', { kind: 'some' }]>,
          ['hello', { kind: 'some' }]
        >
      >
    ];
  });

  it('should return the input type when pattern is unknown', () => {
    type cases = [
      Expect<
        Equal<
          ExtractPreciseValue<[State, Event], [unknown, unknown]>,
          [State, Event]
        >
      >
    ];
  });

  it('should return the correct branch a union based on the pattern', () => {
    type cases = [
      Expect<
        Equal<
          ExtractPreciseValue<
            { a: string; b: number } | [boolean, number],
            readonly [true, 2]
          >,
          [true, 2]
        >
      >,
      Expect<
        Equal<
          ExtractPreciseValue<
            | {
                type: 'img';
                src: string;
              }
            | {
                type: 'text';
                p: string;
              }
            | {
                type: 'video';
                src: number;
              }
            | {
                type: 'gif';
                p: string;
              }
            | undefined,
            {
              type: 'video';
              src: unknown;
            }
          >,
          {
            type: 'video';
            src: number;
          }
        >
      >
    ];
  });

  it('should support readonly input types', () => {
    type cases = [
      Expect<
        Equal<
          ExtractPreciseValue<
            { readonly a: string; b: number } | [boolean, number],
            readonly [true, 2]
          >,
          [true, 2]
        >
      >,
      Expect<
        Equal<
          ExtractPreciseValue<
            { readonly a: string; b: number } | [boolean, number],
            { b: number }
          >,
          { readonly a: string; b: number }
        >
      >,
      Expect<
        Equal<
          ExtractPreciseValue<
            { readonly a: string; b: number } | [boolean, number],
            { readonly a: string }
          >,
          { readonly a: string; b: number }
        >
      >
    ];
  });

  it('should work if the input type contains anys', () => {
    type Input = { t: 'a'; data: 'string'; x: any } | { t: 'b' };

    type cases = [
      Expect<
        Equal<
          ExtractPreciseValue<Input, { t: 'a' }>,
          { t: 'a'; data: 'string'; x: any }
        >
      >,
      Expect<Equal<ExtractPreciseValue<Input, { t: 'b' }>, { t: 'b' }>>,

      Expect<
        Equal<
          ExtractPreciseValue<[string | number, any], [string, unknown]>,
          [string, any]
        >
      >,
      Expect<
        Equal<
          ExtractPreciseValue<[number, any] | ['t', 2], ['t', unknown]>,
          ['t', 2]
        >
      >,

      Expect<
        Equal<
          ExtractPreciseValue<
            [
              { t: 'a' } | { t: 'b'; data: any },
              { t: 'a'; x: boolean } | { t: 'b' }
            ],
            [{ t: 'b' }, { t: 'a' }]
          >,
          [{ t: 'b'; data: any }, { t: 'a'; x: boolean }]
        >
      >
    ];
  });

  it('should work with arrays', () => {
    type res1 = ExtractPreciseValue<
      boolean | { type: string } | string[],
      string[]
    >;
    type test1 = Expect<Equal<res1, string[]>>;

    type res2 = ExtractPreciseValue<
      ({ a: string } | { b?: number | boolean; c: string })[],
      { b: number }[]
    >;
    type test2 = Expect<Equal<res2, { b: number; c: string }[]>>;
  });

  describe('Optional properties', () => {
    it('should pick the input type as the upper bound, even if it is assignable to the pattern type', () => {
      // This happens if the input type only has optional properties
      type Input =
        | { type: 'test'; id?: string }
        | { type: 'test2'; id?: string; otherProp: string }
        | { type: 'test3'; id?: string; otherProp?: string };

      type cases = [
        Expect<
          Equal<
            ExtractPreciseValue<Input, { type: 'test' }>,
            { type: 'test'; id?: string }
          >
        >,
        Expect<
          Equal<
            ExtractPreciseValue<Input, { type: 'test2' }>,
            { type: 'test2'; id?: string; otherProp: string }
          >
        >,
        Expect<
          Equal<
            ExtractPreciseValue<Input, { type: 'test3' }>,
            { type: 'test3'; id?: string; otherProp?: string }
          >
        >
      ];
    });

    it('should keep optional properties if they are optional on both `a` and `b`', () => {
      type Input =
        | {
            type: 'a';
            data?: { type: 'img'; src: string } | { type: 'text'; p: string };
          }
        | {
            type: 'b';
            data?: { type: 'video'; src: number } | { type: 'gif'; p: string };
          };

      type cases = [
        Expect<
          Equal<
            ExtractPreciseValue<
              Input,
              {
                type: 'a';
                data?: { type: 'img' } | undefined;
              }
            >,
            {
              type: 'a';
              data?: { type: 'img'; src: string } | undefined;
            }
          >
        >,
        Expect<
          Equal<
            ExtractPreciseValue<
              { data: { type?: 'a'; value: number } },
              { data: { type?: 'a' } }
            >,
            { data: { type?: 'a'; value: number } }
          >
        >
      ];
    });
  });

  describe('non-nullable patterns', () => {
    type nonNullable = InvertPattern<NonNullablePattern, unknown>;

    it('should exclude objects if the absent', () => {
      type res1 = ExtractPreciseValue<{ a: string }, { b: nonNullable }>;
      type test1 = Expect<Equal<res1, never>>;

      type res2 = ExtractPreciseValue<
        { a: string } | { b: number },
        { b: nonNullable }
      >;
      type test2 = Expect<Equal<res2, { b: number }>>;

      type res3 = ExtractPreciseValue<
        { a: string } | { b: number } | { b: string; c: boolean },
        { b: nonNullable }
      >;
      type test3 = Expect<
        Equal<res3, { b: number } | { b: string; c: boolean }>
      >;
    });

    it('should keep empty objects if they come from the input type', () => {
      type res1 = ExtractPreciseValue<
        { a: string } | { b: {} },
        { b: nonNullable }
      >;
      type test1 = Expect<Equal<res1, { b: {} }>>;
    });

    it('should exclude objects even if the non-nullable key is deeply nested', () => {
      type res1 = ExtractPreciseValue<{ a: number }, { b: { c: nonNullable } }>;
      type test1 = Expect<Equal<res1, never>>;

      type res2 = ExtractPreciseValue<
        | { nested: { a: string } }
        | { nested: { b: number } }
        | { nested: { b: string; c: boolean } },
        { nested: { b: nonNullable } }
      >;
      type test2 = Expect<
        Equal<
          res2,
          { nested: { b: number } } | { nested: { b: string; c: boolean } }
        >
      >;
    });
  });

  describe('Branded strings', () => {
    it('Type narrowing should correctly work on branded strings', () => {
      // Branded strings is a commonly used way of implementing
      // nominal types in typescript.

      type BrandedId = string & { __brand: 'brandId' };

      type FooBar =
        | { type: 'foo'; id: BrandedId; value: string }
        | { type: 'bar' };

      type cases = [
        Expect<
          Equal<
            ExtractPreciseValue<
              {
                fooBar: FooBar;
                fooBarId: BrandedId;
              },
              {
                fooBar: { type: 'foo' };
                fooBarId: BrandedId;
              }
            >,
            {
              fooBar: {
                type: 'foo';
                id: BrandedId;
                value: string;
              };
              fooBarId: BrandedId;
            }
          >
        >
      ];
    });
  });

  describe('class instances', () => {
    it('Type narrowing should correctly work on class instances', () => {
      class A {
        a = 'a';
      }
      class B {
        b = 'b';
      }
      type cases = [Expect<Equal<ExtractPreciseValue<A | B, A>, A>>];
    });

    it('issue #63: it should correctly narrow Error subclasses', () => {
      class FooError extends Error {
        foo = 'bar';
      }

      class BazError extends Error {
        baz = 'bil';
      }

      class ErrorWithOptionalKeys1 extends Error {
        foo?: string;
      }

      class ErrorWithOptionalKeys2 extends Error {
        baz?: string;
      }

      type cases = [
        Expect<
          Equal<
            ExtractPreciseValue<FooError | BazError | Error, FooError>,
            FooError
          >
        >,
        Expect<
          Equal<
            ExtractPreciseValue<
              | ErrorWithOptionalKeys1
              | ErrorWithOptionalKeys2
              | ErrorWithOptionalKeys1,
              ErrorWithOptionalKeys1
            >,
            ErrorWithOptionalKeys1
          >
        >
      ];
    });
  });

  describe('variadic patterns', () => {
    it('[a, ...b[]]', () => {
      type res1 = ExtractPreciseValue<unknown[], [unknown, ...unknown[]]>;
      type t1 = Expect<Equal<res1, [unknown, ...unknown[]]>>;

      type res2 = ExtractPreciseValue<unknown[], [number, ...string[]]>;
      type t2 = Expect<Equal<res2, [number, ...string[]]>>;

      type res3 = ExtractPreciseValue<
        [string, ...boolean[]],
        ['a', ...unknown[]]
      >;
      type t3 = Expect<Equal<res3, ['a', ...boolean[]]>>;

      type res4 = ExtractPreciseValue<
        (string | boolean)[],
        ['a', ...unknown[]]
      >;
      type t4 = Expect<Equal<res4, ['a', ...(string | boolean)[]]>>;
    });

    it('[a, b, ...c[]]', () => {
      type res1 = ExtractPreciseValue<
        unknown[],
        [unknown, unknown, ...unknown[]]
      >;
      type t1 = Expect<Equal<res1, [unknown, unknown, ...unknown[]]>>;

      type res2 = ExtractPreciseValue<
        unknown[],
        [number, boolean, ...string[]]
      >;
      type t2 = Expect<Equal<res2, [number, boolean, ...string[]]>>;

      type res3 = ExtractPreciseValue<
        [string, number, ...boolean[]],
        ['a', 2, ...unknown[]]
      >;
      type t3 = Expect<Equal<res3, ['a', 2, ...boolean[]]>>;
    });

    it('[...a[], b]', () => {
      type res1 = ExtractPreciseValue<unknown[], [...unknown[], unknown]>;
      type t1 = Expect<Equal<res1, [...unknown[], unknown]>>;

      type res2 = ExtractPreciseValue<unknown[], [...string[], number]>;
      type t2 = Expect<Equal<res2, [...string[], number]>>;

      type res3 = ExtractPreciseValue<
        [...boolean[], string],
        [...unknown[], 'a']
      >;
      type t3 = Expect<Equal<res3, [...boolean[], 'a']>>;
    });
    it('[...a[], b, c]', () => {
      type res1 = ExtractPreciseValue<
        unknown[],
        [...unknown[], unknown, unknown]
      >;
      type t1 = Expect<Equal<res1, [...unknown[], unknown, unknown]>>;

      type res2 = ExtractPreciseValue<
        unknown[],
        [...string[], number, boolean]
      >;
      type t2 = Expect<Equal<res2, [...string[], number, boolean]>>;

      type res3 = ExtractPreciseValue<
        [...boolean[], string, boolean],
        [...unknown[], 'a', true]
      >;
      type t3 = Expect<Equal<res3, [...boolean[], 'a', true]>>;
    });
    it('[a, ...b[], c]', () => {
      type res1 = ExtractPreciseValue<
        unknown[],
        [unknown, ...unknown[], unknown]
      >;
      type t1 = Expect<Equal<res1, [unknown, ...unknown[], unknown]>>;

      type res2 = ExtractPreciseValue<
        unknown[],
        [number, ...string[], boolean]
      >;
      type t2 = Expect<Equal<res2, [number, ...string[], boolean]>>;

      type res3 = ExtractPreciseValue<
        [string, ...boolean[], number],
        ['a', ...unknown[], 2]
      >;
      type t3 = Expect<Equal<res3, ['a', ...boolean[], 2]>>;
    });
  });
});

describe('generics', () => {
  it("shouldn't get stuck on generics in the input structure that aren't matched by the pattern", () => {
    const fn = <TResult, TError>() => {
      type res1 = ExtractPreciseValue<
        // ^?
        AsyncResult<TResult, TError>,
        { status: 'loading' }
      >;

      type test1 = Expect<
        Equal<
          res1,
          {
            status: 'loading';
            data?: TResult | undefined;
            error?: TError | undefined;
          }
        >
      >;
    };
  });
});

}


// ----- source: tests/find-selected.test.ts
{

type AnonymousSelectP = SelectP<symbols.anonymousSelectKey>;

describe('FindSelected', () => {
  describe('should correctly return kwargs', () => {
    it('Tuples', () => {
      type res1 = FindSelected<
        { a: { b: { c: [3] } } },
        {
          a: {
            b: {
              c: [SelectP<'c'>];
            };
          };
        }
      >;
      type test1 = Expect<Equal<res1, { c: 3 }>>;

      type cases = [
        Expect<
          Equal<
            FindSelected<[State, Event], [SelectP<'state'>, SelectP<'event'>]>,
            { state: State; event: Event }
          >
        >,
        Expect<
          Equal<
            FindSelected<
              [1, 2, 3],
              [SelectP<'first'>, SelectP<'second'>, SelectP<'third'>]
            >,
            { first: 1; second: 2; third: 3 }
          >
        >,
        Expect<
          Equal<
            FindSelected<
              [1, 2, 3, 4],
              [SelectP<'1'>, SelectP<'2'>, SelectP<'3'>, SelectP<'4'>]
            >,
            { '1': 1; '2': 2; '3': 3; '4': 4 }
          >
        >,
        Expect<
          Equal<
            FindSelected<
              [1, 2, 3, 4, 5],
              [
                SelectP<'1'>,
                SelectP<'2'>,
                SelectP<'3'>,
                SelectP<'4'>,
                SelectP<'5'>
              ]
            >,
            { '1': 1; '2': 2; '3': 3; '4': 4; '5': 5 }
          >
        >
      ];
    });

    describe('variadic tuples', () => {
      it('[a, ...b[]]', () => {
        type res1 = FindSelected<
          [State, ...Event[]],
          [SelectP<'state'>, ...ArrayP<unknown, SelectP<'event'>>[]]
        >;
        type test1 = Expect<Equal<res1, { state: State; event: Event[] }>>;

        type res2 = FindSelected<
          [1, ...number[]],
          [AnonymousSelectP, ...ArrayP<unknown, unknown>[]]
        >;
        type test2 = Expect<Equal<res2, 1>>;

        type res3 = FindSelected<
          [1, ...number[]],
          [unknown, ...ArrayP<unknown, AnonymousSelectP>[]]
        >;
        type test3 = Expect<Equal<res3, number[]>>;
      });

      it('[a, b, ...c[]]', () => {
        type res1 = FindSelected<
          [State, State, ...Event[]],
          [
            SelectP<'state'>,
            SelectP<'state2'>,
            ...ArrayP<unknown, SelectP<'event'>>[]
          ]
        >;
        type test1 = Expect<
          Equal<res1, { state: State; state2: State; event: Event[] }>
        >;

        type res2 = FindSelected<
          [1, 2, ...number[]],
          [AnonymousSelectP, unknown, ...ArrayP<unknown, unknown>[]]
        >;
        type test2 = Expect<Equal<res2, 1>>;

        type res3 = FindSelected<
          [1, 2, ...number[]],
          [unknown, AnonymousSelectP, ...ArrayP<unknown, unknown>[]]
        >;
        type test3 = Expect<Equal<res3, 2>>;

        type res4 = FindSelected<
          [1, 2, ...number[]],
          [unknown, unknown, ...ArrayP<unknown, AnonymousSelectP>[]]
        >;
        type test4 = Expect<Equal<res4, number[]>>;
      });
      it('[...a[], b]', () => {
        type res1 = FindSelected<
          [...Event[], State],
          [...ArrayP<unknown, SelectP<'event'>>[], SelectP<'state'>]
        >;
        type test1 = Expect<Equal<res1, { state: State; event: Event[] }>>;

        type res2 = FindSelected<
          [...number[], 1],
          [...ArrayP<unknown, unknown>[], AnonymousSelectP]
        >;
        type test2 = Expect<Equal<res2, 1>>;

        type res3 = FindSelected<
          [...number[], 1],
          [...ArrayP<unknown, AnonymousSelectP>[], unknown]
        >;
        type test3 = Expect<Equal<res3, number[]>>;
      });
      it('[...a[], b, c]', () => {
        type res1 = FindSelected<
          [...Event[], State, State],
          [
            ...ArrayP<unknown, SelectP<'event'>>[],
            SelectP<'state'>,
            SelectP<'state2'>
          ]
        >;
        type test1 = Expect<
          Equal<res1, { state: State; state2: State; event: Event[] }>
        >;

        type res2 = FindSelected<
          [...number[], 1, 2],
          [...ArrayP<unknown, unknown>[], AnonymousSelectP, unknown]
        >;
        type test2 = Expect<Equal<res2, 1>>;

        type res3 = FindSelected<
          [...number[], 1, 2],
          [...ArrayP<unknown, unknown>[], unknown, AnonymousSelectP]
        >;
        type test3 = Expect<Equal<res3, 2>>;

        type res4 = FindSelected<
          [...number[], 1, 2],
          [...ArrayP<unknown, AnonymousSelectP>[], unknown, unknown]
        >;
        type test4 = Expect<Equal<res4, number[]>>;
      });

      it('[a, ...b[], c]', () => {
        type res1 = FindSelected<
          [State, ...Event[], State],
          [
            SelectP<'state'>,
            ...ArrayP<unknown, SelectP<'event'>>[],
            SelectP<'state2'>
          ]
        >;
        type test1 = Expect<
          Equal<res1, { state: State; state2: State; event: Event[] }>
        >;

        type res2 = FindSelected<
          [1, ...number[], 2],
          [AnonymousSelectP, ...ArrayP<unknown, unknown>[], unknown]
        >;
        type test2 = Expect<Equal<res2, 1>>;

        type res3 = FindSelected<
          [1, ...number[], 2],
          [unknown, ...ArrayP<unknown, unknown>[], AnonymousSelectP]
        >;
        type test3 = Expect<Equal<res3, 2>>;

        type res4 = FindSelected<
          [1, ...number[], 2],
          [unknown, ...ArrayP<unknown, AnonymousSelectP>[], unknown]
        >;
        type test4 = Expect<Equal<res4, number[]>>;
      });

      it('[a, b, select(c), ...d[], e]', () => {
        type res1 = FindSelected<
          [State, State, number, ...Event[], 1],
          [1, 2, AnonymousSelectP, ...ArrayP<unknown, 3>[], 4]
        >;
        type test1 = Expect<Equal<res1, number>>;

        type res2 = FindSelected<
          [State, State, Event, ...State[], 1],
          [1, 2, AnonymousSelectP, ...ArrayP<unknown, 3>[], 4]
        >;
        type test2 = Expect<Equal<res2, Event>>;
      });

      it('[a, ...b[], select(c), d, e]', () => {
        type res1 = FindSelected<
          [State, State, State, number, State, State],
          [1, ...ArrayP<unknown, 3>[], AnonymousSelectP, 4, 2]
        >;
        type test1 = Expect<Equal<res1, number>>;

        type res2 = FindSelected<
          [State, State, State, State, number, State],
          [1, ...ArrayP<unknown, 3>[], AnonymousSelectP, 4, 2]
        >;
        type test2 = Expect<Equal<res2, State>>;
      });
    });

    it('list selections should be wrapped in arrays', () => {
      type cases = [
        Expect<
          Equal<
            FindSelected<State[], ArrayP<unknown, SelectP<'state'>>>,
            { state: State[] }
          >
        >,
        Expect<
          Equal<
            FindSelected<
              State[][],
              ArrayP<unknown, ArrayP<unknown, SelectP<'state'>>>
            >,
            { state: State[][] }
          >
        >,
        Expect<
          Equal<
            FindSelected<
              State[][][],
              ArrayP<
                unknown,
                ArrayP<unknown, ArrayP<unknown, SelectP<'state'>>>
              >
            >,
            { state: State[][][] }
          >
        >
      ];
    });

    it('Objects', () => {
      type cases = [
        Expect<
          Equal<
            FindSelected<
              { a: { b: { c: 3 } } },
              { a: { b: { c: SelectP<'c'> } } }
            >,
            { c: 3 }
          >
        >,
        Expect<
          Equal<
            FindSelected<
              { a: { b: { c: 3 }; d: { e: 7 } } },
              {
                a: {
                  b: { c: SelectP<'c'> };
                  d: { e: SelectP<'e'> };
                };
              }
            >,
            { c: 3; e: 7 }
          >
        >
      ];
    });

    it('Mixed', () => {
      type res1 = FindSelected<
        { a: { b: { c: [3, 4] } } },
        { a: { b: { c: [SelectP<'c'>, unknown] } } }
      >;

      type res12 = FindSelected<
        [{ c: 3 }, { e: 7 }],
        [{ c: SelectP<'c'> }, { e: 7 }]
      >;

      type x = Extract<[1, 2], readonly any[]>;
      type test1 = Expect<Equal<res1, { c: 3 }>>;
      type res2 = FindSelected<
        { a: [{ c: 3 }, { e: 7 }]; b: { d: string }[] },
        {
          a: [{ c: SelectP<'c'> }, { e: 7 }];
          b: Matcher<unknown, { d: SelectP<'d'> }, 'array'>;
        }
      >;
      type test2 = Expect<Equal<res2, { c: 3; d: string[] }>>;
    });
  });

  describe('Anonymous selections', () => {
    it('should correctly return a positional argument', () => {
      type cases = [
        Expect<
          Equal<
            FindSelected<
              { a: [{ c: 3 }, { e: 7 }]; b: { d: string }[] },
              {
                a: [{ c: AnonymousSelectP }, { e: 7 }];
              }
            >,
            3
          >
        >
      ];
    });

    it('should return an error when trying to use several anonymous select', () => {
      type cases = [
        Expect<
          Equal<
            FindSelected<
              { a: [{ c: 3 }, { e: 7 }]; b: { d: string }[] },
              {
                a: [{ c: AnonymousSelectP }, { e: AnonymousSelectP }];
              }
            >,
            SeveralAnonymousSelectError
          >
        >,
        Expect<
          Equal<
            FindSelected<
              { a: [{ c: 3 }, { e: 7 }]; b: { d: string }[] },
              {
                a: [unknown, { e: AnonymousSelectP }];
                b: AnonymousSelectP;
              }
            >,
            SeveralAnonymousSelectError
          >
        >,
        Expect<
          Equal<
            FindSelected<
              [{ c: 3 }, { e: 7 }],
              [{ c: AnonymousSelectP }, { e: AnonymousSelectP }]
            >,
            SeveralAnonymousSelectError
          >
        >,
        Expect<
          Equal<
            FindSelected<
              [{ c: 3 }, { e: 7 }],
              [AnonymousSelectP, { e: AnonymousSelectP }]
            >,
            SeveralAnonymousSelectError
          >
        >,
        Expect<
          Equal<
            FindSelected<
              [{ c: 3 }, { e: 7 }],
              [AnonymousSelectP, AnonymousSelectP]
            >,
            SeveralAnonymousSelectError
          >
        >,
        Expect<
          Equal<
            FindSelected<
              { type: 'point'; x: number; y: number },
              {
                type: 'point';
                x: AnonymousSelectP;
                y: AnonymousSelectP;
              }
            >,
            SeveralAnonymousSelectError
          >
        >
      ];
    });

    describe('Mix of named and unnamed selections', () => {
      type Input =
        | { type: 'text'; text: string; author: { name: string } }
        | { type: 'video'; duration: number; src: string }
        | {
            type: 'movie';
            duration: number;
            author: { name: string };
            src: string;
            title: string;
          }
        | { type: 'picture'; src: string };

      type cases = [
        Expect<
          Equal<
            FindSelected<
              Input,
              {
                type: 'text';
                text: AnonymousSelectP;
                author: {
                  name: SelectP<'authorName'>;
                };
              }
            >,
            MixedNamedAndAnonymousSelectError
          >
        >
      ];
    });

    describe('No selection', () => {
      it('should return the input type', () => {
        type Input = { type: 'text'; text: string; author: { name: string } };

        type cases = [
          Expect<Equal<FindSelected<Input, { type: 'text' }>, Input>>,
          Expect<
            Equal<FindSelected<{ text: any }, { text: 'text' }>, { text: any }>
          >,
          Expect<
            Equal<
              FindSelected<
                { text: any },
                { str: NotP<null | undefined, null | undefined> }
              >,
              { text: any }
            >
          >,
          Expect<
            Equal<
              FindSelected<{ text: unknown }, { text: 'text' }>,
              { text: unknown }
            >
          >,
          Expect<
            Equal<
              FindSelected<
                { text: unknown },
                { str: NotP<null | undefined, null | undefined> }
              >,
              { text: unknown }
            >
          >
        ];
      });

      it("shouldn't change optional properties", () => {
        type p = {
          type: 'a';
          data: OptionalP<
            | {
                type: 'img';
                src: string;
              }
            | {
                type: 'text';
                p: string;
              }
            | {
                type: 'video';
                src: number;
              }
            | {
                type: 'gif';
                p: string;
              }
            | undefined,
            | {
                type: 'img';
              }
            | undefined
          >;
        };

        type value = {
          type: 'a';
          data?:
            | {
                type: 'img';
                src: string;
              }
            | undefined;
        };

        type t = Expect<Equal<FindSelected<value, p>, value>>;
      });
    });
  });
});

}


// ----- source: tests/generics.test.ts
{

describe('generics', () => {
  type State<T> =
    | { t: 'success'; value: T }
    | { t: 'error'; error: Error }
    | { t: 'loading' };

  it('should have basic support for objects containing generics', () => {
    const f = <T>(input: State<T>) => {
      return match(input)
        .with({ t: 'success' }, (x) => {
          type t = Expect<Equal<typeof x, { t: 'success'; value: T }>>;
          return 'success!';
        })
        .with({ t: 'error' }, (x) => {
          type t = Expect<Equal<typeof x, { t: 'error'; error: Error }>>;
          return 'error :(';
        })
        .with({ t: 'loading' }, (x) => {
          type t = Expect<Equal<typeof x, { t: 'loading' }>>;
          return 'loading...';
        })
        .exhaustive();
    };
  });

  it('should have basic support for arrays containing generics', () => {
    const last = <a>(xs: a[]) =>
      match<a[], Option<a>>(xs)
        .with([], () => none)
        .with(P._, (x, y) => {
          type t = Expect<Equal<typeof x, a[]>>;
          type t2 = Expect<Equal<typeof y, a[]>>;
          return some(xs[xs.length - 1]);
        })
        .exhaustive();
  });

  it('should have basic support for tuples containing generics', () => {
    type State<T> = { t: 'success'; value: T } | { t: 'error'; error: Error };

    const f = <a, b>(xs: [State<a>, State<b>]) =>
      match(xs)
        .with([{ t: 'success' }, { t: 'success' }], ([x, y]) => {
          type t = Expect<Equal<typeof x, { t: 'success'; value: a }>>;
          type t2 = Expect<Equal<typeof y, { t: 'success'; value: b }>>;
          return 'success!';
        })
        .with([{ t: 'success' }, { t: 'error' }], ([x, y]) => {
          type t = Expect<Equal<typeof x, { t: 'success'; value: a }>>;
          type t2 = Expect<Equal<typeof y, { t: 'error'; error: Error }>>;
          return 'success!';
        })
        .with([{ t: 'error' }, P._], ([x, y]) => {
          type t = Expect<Equal<typeof x, { t: 'error'; error: Error }>>;
          type t2 = Expect<Equal<typeof y, State<b>>>;
          return 'error :(';
        })
        .exhaustive();
  });

  it('Basic generic type guards (with no type level manipulation of the input) should work', () => {
    const isSuccess = <T>(x: any): x is { t: 'success'; value: T } =>
      Boolean(x && typeof x === 'object' && x.t === 'success');

    const isDoubleSuccess = <T>(x: any): x is { t: 'success'; value: [T, T] } =>
      Boolean(
        x &&
          typeof x === 'object' &&
          x.t === 'success' &&
          Array.isArray(x.value) &&
          x.value.length === 2
      );

    const f = <T>(input: State<[number, number] | number>) => {
      return match({ input })
        .with({ input: P.when(isSuccess) }, (x) => {
          type t = Expect<
            Equal<
              typeof x,
              { input: { t: 'success'; value: number | [number, number] } }
            >
          >;
          return 'ok';
        })
        .with({ input: P.when(isDoubleSuccess) }, (x) => {
          type t = Expect<
            Equal<
              typeof x,
              { input: { t: 'success'; value: [number, number] } }
            >
          >;
          return 'ok';
        })
        .otherwise(() => 'nope');
    };
  });

  it("shouldn't get stucked on type parameters if they aren't included in the pattern", () => {
    const fn = <TResult, TError>(result: AsyncResult<TResult, TError>) => {
      return match(result)
        .with({ status: 'success' }, (x) => {
          type test = Expect<
            Equal<typeof x, AsyncResultSuccess<TResult, TError>>
          >;
        })
        .with({ status: 'error' }, (x) => {
          type test = Expect<
            Equal<typeof x, AsyncResultError<TResult, TError>>
          >;
        })
        .with({ status: 'loading' }, (x) => {
          type test = Expect<
            Equal<
              typeof x,
              {
                status: 'loading';
                error?: TError | undefined;
                data?: TResult | undefined;
              }
            >
          >;
        })
        .with({ status: 'idle' }, (x) => {
          type test = Expect<
            Equal<
              typeof x,
              {
                status: 'idle';
                error?: TError | undefined;
                data?: TResult | undefined;
              }
            >
          >;
        })
        .exhaustive();
    };
  });
});

}


// ----- source: tests/helpers.test.ts
{

describe('helpers', () => {
  describe('Take', () => {
    it('should correctly return the start of a tuple', () => {
      type cases = [
        Expect<Equal<Take<[1, 2, 3], Iterator<0>>, []>>,
        Expect<Equal<Take<[1, 2, 3], Iterator<1>>, [1]>>,
        Expect<Equal<Take<[1, 2, 3], Iterator<2>>, [1, 2]>>,
        Expect<Equal<Take<[1, 2, 3], Iterator<3>>, [1, 2, 3]>>,
        Expect<Equal<Take<[1, 2, 3], Iterator<4>>, [1, 2, 3]>>
      ];
    });

    it('should correctly return the start of a readonly tuple', () => {
      type cases = [
        Expect<Equal<Take<readonly [1, 2, 3], Iterator<0>>, []>>,
        Expect<Equal<Take<readonly [1, 2, 3], Iterator<1>>, [1]>>,
        Expect<Equal<Take<readonly [1, 2, 3], Iterator<2>>, [1, 2]>>,
        Expect<Equal<Take<readonly [1, 2, 3], Iterator<3>>, [1, 2, 3]>>,
        Expect<Equal<Take<readonly [1, 2, 3], Iterator<4>>, [1, 2, 3]>>
      ];
    });
  });

  describe('Drop', () => {
    it('should correctly remove the n first elements of a tuple', () => {
      type cases = [
        Expect<Equal<Drop<[1, 2, 3], Iterator<0>>, [1, 2, 3]>>,
        Expect<Equal<Drop<[1, 2, 3], Iterator<1>>, [2, 3]>>,
        Expect<Equal<Drop<[1, 2, 3], Iterator<2>>, [3]>>,
        Expect<Equal<Drop<[1, 2, 3], Iterator<3>>, []>>,
        Expect<Equal<Drop<[1, 2, 3], Iterator<4>>, []>>
      ];
    });

    it('should correctly remove the n first elements of a readonly tuple', () => {
      type cases = [
        Expect<
          Equal<Drop<readonly [1, 2, 3], Iterator<0>>, readonly [1, 2, 3]>
        >,
        Expect<Equal<Drop<readonly [1, 2, 3], Iterator<1>>, [2, 3]>>,
        Expect<Equal<Drop<readonly [1, 2, 3], Iterator<2>>, [3]>>,
        Expect<Equal<Drop<readonly [1, 2, 3], Iterator<3>>, []>>,
        Expect<Equal<Drop<readonly [1, 2, 3], Iterator<4>>, []>>
      ];
    });
  });

  describe('UpdateAt', () => {
    type cases = [
      Expect<
        Equal<UpdateAt<readonly [1, 2, 3], Iterator<0>, true>, [true, 2, 3]>
      >,
      Expect<
        Equal<UpdateAt<readonly [1, 2, 3], Iterator<1>, true>, [1, true, 3]>
      >,
      Expect<
        Equal<UpdateAt<readonly [1, 2, 3], Iterator<2>, true>, [1, 2, true]>
      >,
      Expect<Equal<UpdateAt<readonly [1, 2, 3], Iterator<3>, true>, [1, 2, 3]>>,
      Expect<Equal<UpdateAt<readonly [1, 2, 3], Iterator<4>, true>, [1, 2, 3]>>
    ];
  });

  describe('LeastUpperBound', () => {
    it('If both a and b extend each other, it should pick b', () => {
      class B {}
      class A extends B {}
      type t = Expect<Equal<LeastUpperBound<A | B, B>, B>>;
    });
  });

  describe('IntersectObjects', () => {
    it('', () => {
      type x = IntersectObjects<
        | { k: 'a'; value: number; a: string }
        | { k: 'b'; value: string; b: string }
        | { k: 'c'; value: number; c: string }
      >;

      type t = Expect<
        Equal<
          x,
          {
            k: 'a' | 'b' | 'c';
            value: number | string;
            a: string;
            b: string;
            c: string;
          }
        >
      >;

      type t2 = Expect<
        Equal<
          IntersectObjects<
            | { k: 'a'; value: number }
            | { k: 'b'; value: string }
            | { k: 'c'; value: number }
          >,
          {
            k: 'a' | 'b' | 'c';
            value: number | string;
          }
        >
      >;

      type t3 = Expect<
        Equal<
          IntersectObjects<
            | { type: 1; data: number }
            | { type: 'two'; data: string }
            | { type: 3; data: boolean }
            | { type: 4 }
          >,
          { type: 1 | 'two' | 3 | 4; data: number | string | boolean }
        >
      >;
    });
  });

  describe('IsReadonlyArray', () => {
    type t1 = IsReadonlyArray<readonly []>;
    type test1 = Expect<Equal<t1, true>>;
    type t2 = IsReadonlyArray<readonly number[]>;
    type test2 = Expect<Equal<t2, true>>;
    type t3 = IsReadonlyArray<readonly [number]>;
    type test3 = Expect<Equal<t3, true>>;
    type t4 = IsReadonlyArray<readonly [number, ...(readonly any[])]>;
    type test4 = Expect<Equal<t4, true>>;
    type t5 = IsReadonlyArray<readonly [...(readonly any[]), number]>;
    type test5 = Expect<Equal<t5, true>>;

    type t6 = IsReadonlyArray<[]>;
    type test6 = Expect<Equal<t6, false>>;
    type t7 = IsReadonlyArray<number[]>;
    type test7 = Expect<Equal<t7, false>>;
    type t8 = IsReadonlyArray<[number]>;
    type test8 = Expect<Equal<t8, false>>;
    type t9 = IsReadonlyArray<[number, ...any[]]>;
    type test9 = Expect<Equal<t9, false>>;
    type t10 = IsReadonlyArray<[...any[], number]>;
    type test10 = Expect<Equal<t10, false>>;
  });
});

}


// ----- source: tests/infer.test.ts
{

describe('P.infer', () => {
  describe('array', () => {
    it('should correctly narrow types of arrays containing tuples', () => {
      const QuizValue = P.union('initial', 'correct', 'incorrect');
      const QuizState = {
        answerEntries: P.array([P.string, QuizValue]),
        appendOnlyAnswerEntries: P.array([P.string, P.array(QuizValue)]),
      };

      type QuizValue = P.infer<typeof QuizValue>;
      type expected1 = 'initial' | 'correct' | 'incorrect';
      type test1 = Expect<Equal<QuizValue, expected1>>;

      type QuizState = P.infer<typeof QuizState>;
      type expected2 = {
        answerEntries: [string, QuizValue][];
        appendOnlyAnswerEntries: [string, QuizValue[]][];
      };
      type test2 = Expect<Equal<QuizState, expected2>>;
    });
  });

  it("P.infer shouldn't count as an inference point of the pattern", () => {
    const getValueOfType = <T extends P.Pattern<unknown>>(
      obj: unknown,
      path: string,
      pattern: T,
      defaultValue: P.infer<T>
    ): P.infer<T> => defaultValue;

    getValueOfType(
      null,
      'a.b.c',
      { x: P.string },
      // @ts-expect-error 👇 error should be here
      'oops'
    );
  });
});

}


// ----- source: tests/instance-of.test.ts
{

class A {
  a = 'a';
}
class B {
  b = 'b';
}

describe('instanceOf', () => {
  it('should work at the top level', () => {
    const get = (x: A | B): string =>
      match(x)
        .with(P.instanceOf(A), (x) => {
          type t = Expect<Equal<typeof x, A>>;
          return 'instance of A';
        })
        .with(P.instanceOf(B), (x) => {
          type t = Expect<Equal<typeof x, B>>;
          return 'instance of B';
        })
        .exhaustive();

    expect(get(new A())).toEqual('instance of A');
    expect(get(new B())).toEqual('instance of B');
  });

  it('should work as a nested pattern', () => {
    type Input = { value: A | B };

    const input = { value: new A() };

    const output = match<Input>(input)
      .with({ value: P.instanceOf(A) }, (a) => {
        type t = Expect<Equal<typeof a, { value: A }>>;
        return 'instance of A!';
      })
      .with({ value: P.instanceOf(B) }, (b) => {
        type t = Expect<Equal<typeof b, { value: B }>>;
        return 'instance of B!';
      })
      .exhaustive();

    expect(output).toEqual('instance of A!');
  });

  it('issue #63: should work on union of errors', () => {
    class FooError extends Error {
      constructor(public foo: string) {
        super();
      }
    }

    class BazError extends Error {
      constructor(public baz: string) {
        super();
      }
    }

    type Input = FooError | BazError | Error;

    let err: Input = new FooError('foo');

    expect(
      match<Input, string | undefined>(err)
        .with(P.instanceOf(FooError), (err) => err.foo)
        .with(P.instanceOf(BazError), (err) => err.baz)
        .otherwise(() => 'nothing')
    ).toBe('foo');
  });

  it('should work with abstract classes', () => {
    abstract class Abstract {}

    class A extends Abstract {}
    class B extends Abstract {}

    const get = (x: A | B): string =>
      match(x)
        .with(P.instanceOf(Abstract), (x) => {
          type t = Expect<Equal<typeof x, A | B>>;
          return 'instance of Abstract';
        })
        .exhaustive();

    expect(get(new A())).toEqual('instance of Abstract');
    expect(get(new B())).toEqual('instance of Abstract');
  });
});

}


// ----- source: tests/intersection-and-union.test.ts
{

describe('and, and or patterns', () => {
  type A = {
    type: 'a';
    value: [
      { type: 'd'; value: number } | { type: 'e'; value: string },
      boolean
    ];
  };

  type B = {
    type: 'b';
    data: {
      some?: 'thing' | 'stuff' | '?';
    };
    children: Input[];
  };

  type Input = A | B;

  abstract class Parent {}

  class Child1 extends Parent {
    constructor(public a?: Parent, public b?: Parent) {
      super();
    }
  }

  class Child2 extends Parent {
    constructor(public a?: Parent, public b?: Parent) {
      super();
    }
  }

  describe('or', () => {
    it('should match if one of the patterns matches', () => {
      const f = (input: Input) =>
        match(input)
          .with(
            P.union(
              { type: 'a', value: [{ type: 'd' }, true] } as const,
              {
                type: 'b',
              } as const
            ),
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  | B
                  | {
                      type: 'a';
                      value: [{ type: 'd'; value: number }, true];
                    }
                >
              >;
              return 'branch 3';
            }
          )
          .with(
            {
              type: 'a',
              value: [P.union({ type: 'd' }, { type: 'e' }), true],
            },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    type: 'a';
                    value: [
                      (
                        | { type: 'd'; value: number }
                        | { type: 'e'; value: string }
                      ),
                      true
                    ];
                  }
                >
              >;
              return 'branch 1';
            }
          )
          .with({ type: 'a' }, (x) => {
            type t = Expect<Equal<typeof x, A>>;
            return 'branch 2';
          })

          .exhaustive();
    });

    it('unions and intersections should work on properties shared by several element in a union type', () => {
      type C = {
        type: 'c';
        value:
          | { type: 'd'; value: boolean }
          | { type: 'e'; value: string[] }
          | { type: 'f'; value: number[] };
      };

      type Input =
        | { type: 'a'; value: string }
        | { type: 'b'; value: number }
        | C;

      const f = (input: Input) =>
        match(input)
          .with({ type: P.union('a', 'b') }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                { type: 'a'; value: string } | { type: 'b'; value: number }
              >
            >;
            return 'branch 1';
          })
          .with({ type: 'c' }, (x) => {
            type t = Expect<Equal<typeof x, C>>;
            return 'branch 2';
          })
          .exhaustive();

      const fe = (input: Input) =>
        match(input)
          .with({ type: P.union('a', 'b') }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                { type: 'a'; value: string } | { type: 'b'; value: number }
              >
            >;
            return 'branch 1';
          })
          .with({ type: 'c', value: { type: P.union('d', 'e') } }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                {
                  type: 'c';
                  value:
                    | { type: 'd'; value: boolean }
                    | { type: 'e'; value: string[] };
                }
              >
            >;
            return 'branch 2';
          })
          .with({ type: 'c', value: { type: 'f' } }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                {
                  type: 'c';
                  value: { type: 'f'; value: number[] };
                }
              >
            >;
            return 'branch 2';
          })
          .exhaustive();
    });

    it('should work on any depth', () => {
      type Country = 'France' | 'Germany' | 'Spain' | 'USA';

      const input = { country: 'France' } as { country: Country };

      match(input)
        .with(
          { country: P.union('France', 'Germany', 'Spain') },
          (x) => 'Europe'
        )
        .with({ country: 'USA' }, () => 'America')
        .exhaustive();
    });
  });

  describe('and', () => {
    it('should match if all patterns match', () => {
      const f = (n: Parent) =>
        match(n)
          .with(
            P.intersection(P.instanceOf(Child1), {
              a: P.instanceOf(Child2),
              b: P.instanceOf(Child2),
            }),
            (x) => {
              type t = Expect<
                Equal<typeof x, Child1 & { a: Child2; b: Child2 }>
              >;
              return 'match!';
            }
          )
          .with(P.union(P.instanceOf(Child1), P.instanceOf(Child2)), (x) => {
            return 'catchall';
          })
          .exhaustive();

      expect(f(new Child1(new Child2(), new Child2()))).toBe('match!');
      expect(f(new Child1(new Child1(), new Child2()))).toBe('catchall');
    });

    it('should consider two incompatible patterns as matching never', () => {
      const f = (n: number | string) => {
        return (
          match(n)
            .with(P.intersection(P.number, P.nullish), (x) => {
              return 'never';
            })
            .with(P.string, () => 'string')
            // @ts-expect-error NonExhaustiveError<number>
            .exhaustive()
        );
      };
      expect(() => f(20)).toThrow();
    });
  });

  describe('composition', () => {
    it('or and and should nest nicely', () => {
      const f = (n: Parent) =>
        match(n)
          .with(
            P.instanceOf(Child1).and({
              a: P.instanceOf(Child2).optional(),
              b: P.instanceOf(Child2),
            }),
            (x) => {
              type t = Expect<
                Equal<typeof x, Child1 & { b: Child2; a?: Child2 | undefined }>
              >;
              return 'match!';
            }
          )
          .with(
            P.shape({ a: P.instanceOf(Child1) }).and(
              P.shape({
                a: { a: P.instanceOf(Child1), b: P.instanceOf(Child1) },
              }).or({ b: { a: P.instanceOf(Child2), b: P.instanceOf(Child2) } })
            ),
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  { a: Child1 } & (
                    | { a: { a: Child1; b: Child1 } }
                    | { b: { a: Child2; b: Child2 } }
                  )
                >
              >;
              return 'branch 2';
            }
          )
          .with(P.union(P.instanceOf(Child1), P.instanceOf(Child2)), () => {
            return 'catchall';
          })
          .exhaustive();

      expect(f(new Child1(new Child2(), new Child2()))).toBe('match!');
      expect(f(new Child1(new Child1(), new Child2()))).toBe('catchall');
    });

    it("using a and patterns with when shouldn't consider the pattern exhaustive unless the guard function truly matches every possibilities of the input", () => {
      const f = (n: number) => {
        return (
          match(n)
            .with(
              P.intersection(
                P.number,
                P.when((n): n is never => typeof n === 'number' && n > 20)
              ),
              (x) => {
                return 'big number';
              }
            )
            // @ts-expect-error
            .exhaustive()
        );
      };

      const f2 = (n: number | string) => {
        return match(n)
          .with(
            P.intersection(
              P.any,
              P.any,
              P.when((n): n is number => typeof n === 'number'),
              P.any,
              P.select()
            ),
            (x) => {
              type t = Expect<Equal<typeof x, number>>;
              return 'big number';
            }
          )
          .with(P.string, () => 'string')
          .exhaustive();
      };

      const f3 = (n: number | string) => {
        return (
          match(n)
            .with(
              P.intersection(
                P.any,
                P.any,
                P.when((n): n is number => typeof n === 'number'),
                P.any,
                P.select()
              ),
              (x) => {
                type t = Expect<Equal<typeof x, number>>;
                return 'big number';
              }
            )
            // @ts-expect-error: string isn't handled
            .exhaustive()
        );
      };
    });

    it('intersection should work with selects', () => {
      const f = (n: number | string) => {
        return match({ n })
          .with(
            {
              n: P.intersection(
                P.any,
                P.when((n): n is number => typeof n === 'number'),
                P.any,
                P.select()
              ),
            },
            (x) => {
              type t = Expect<Equal<typeof x, number>>;
              return x;
            }
          )
          .with({ n: P.string }, () => 'string')
          .exhaustive();
      };

      expect(f(20)).toEqual(20);
      expect(f('20')).toEqual('string');
    });

    it('union & intersections should work with selects', () => {
      type Input = {
        value:
          | { type: 'a'; v: number }
          | { type: 'b'; v: string }
          | { type: 'c'; v: boolean };
      };
      const f = (input: Input) => {
        return match(input)
          .with(
            {
              value: P.intersection(
                P.select(),
                P.union({ type: 'a' }, { type: 'b' })
              ),
            },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  { type: 'a'; v: number } | { type: 'b'; v: string }
                >
              >;
              return x.type;
            }
          )
          .with({ value: { type: 'c' } }, () => 'other')
          .exhaustive();
      };

      expect(f({ value: { type: 'a', v: 20 } })).toEqual('a');
      expect(f({ value: { type: 'c', v: true } })).toEqual('other');
    });

    it('unions containing selects should consider all selections optional', () => {
      type Input = {
        value:
          | { type: 'a'; n: number }
          | { type: 'b'; s: string }
          | { type: 'c'; b: boolean };
      };
      const f = (input: Input) => {
        return match(input)
          .with(
            {
              value: P.union(
                { type: 'a', n: P.select('n') },
                { type: 'b', s: P.select('s') }
              ),
            },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    n: number | undefined;
                    s: string | undefined;
                  }
                >
              >;
              return x;
            }
          )
          .with(
            {
              value: P.union({ type: 'a', n: P.select() }, { type: 'b' }),
            },
            (x) => {
              type t = Expect<Equal<typeof x, number | undefined>>;
              return x;
            }
          )

          .with({ value: { type: 'c' } }, () => 'other')
          .exhaustive();
      };

      expect(f({ value: { type: 'a', n: 20 } })).toEqual({
        n: 20,
        s: undefined,
      });
      expect(f({ value: { type: 'b', s: 'str' } })).toEqual({
        a: undefined,
        s: 'str',
      });
      expect(f({ value: { type: 'c', b: true } })).toEqual('other');
    });

    it('P.not should work with unions and intersections', () => {
      type Input = {
        value:
          | { type: 'a'; n: number }
          | { type: 'b'; s: string }
          | { type: 'c'; b: boolean };
      };
      const f = (input: Input) => {
        return match(input)
          .with({ value: P.not({ type: P.union('a', 'b') }) }, (x) => {
            type t = Expect<
              Equal<typeof x, { value: { type: 'c'; b: boolean } }>
            >;
            return 'not a or b';
          })
          .with({ value: P.union({ type: 'a' }, { type: 'b' }) }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                { value: { type: 'a'; n: number } | { type: 'b'; s: string } }
              >
            >;
            return 'a or b';
          })
          .exhaustive();
      };

      expect(f({ value: { type: 'b', s: 'str' } })).toEqual('a or b');
      expect(f({ value: { type: 'c', b: true } })).toEqual('not a or b');
    });

    it('P.array should work with unions and intersections', () => {
      type Input = {
        value: (
          | { type: 'a'; n: number }
          | { type: 'b'; s: string }
          | { type: 'c'; b: boolean }
        )[];
      };
      const f = (input: Input) => {
        return match(input)
          .with({ value: P.array({ type: P.union('a', 'b') }) }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                {
                  value: (
                    | { type: 'a'; n: number }
                    | { type: 'b'; s: string }
                  )[];
                }
              >
            >;
            return x.value.map((x) => x.type).join(',');
          })
          .with(
            { value: P.array(P.union({ type: 'a' }, { type: 'b' })) },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    value: (
                      | { type: 'a'; n: number }
                      | { type: 'b'; s: string }
                    )[];
                  }
                >
              >;
              return x.value.map((x) => x.type).join(',');
            }
          )
          .with({ value: P.array(P.any) }, () => 'other')
          .exhaustive();
      };

      expect(
        f({
          value: [
            { type: 'b', s: 'str' },
            { type: 'a', n: 2 },
          ],
        })
      ).toEqual('b,a');
      expect(
        f({
          value: [
            { type: 'a', n: 2 },
            { type: 'c', b: true },
          ],
        })
      ).toEqual('other');
    });

    it('Composing P.union and P.array should work on union of arrays', () => {
      type Input = {
        value:
          | { type: 'a'; n: number }[]
          | { type: 'b'; s: string }[]
          | { type: 'c'; b: boolean }[];
      };

      const f = (input: Input) => {
        return match(input)
          .with({ value: P.array({ type: P.union('a', 'b') }) }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                {
                  value:
                    | { type: 'a'; n: number }[]
                    | { type: 'b'; s: string }[];
                }
              >
            >;
            return x.value[0].type;
          })
          .with(
            { value: P.array(P.union({ type: 'a' }, { type: 'b' })) },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    value:
                      | { type: 'a'; n: number }[]
                      | { type: 'b'; s: string }[];
                  }
                >
              >;
              return x.value[0].type;
            }
          )
          .with({ value: P.array(P.any) }, () => 'other')
          .exhaustive();
      };

      expect(
        f({
          value: [
            { type: 'b', s: 'str' },
            { type: 'b', s: '2' },
          ],
        })
      ).toEqual('b');
      expect(
        f({
          value: [
            { type: 'a', n: 2 },
            { type: 'a', n: 3 },
          ],
        })
      ).toEqual('a');
    });

    it('Composing P.union and P.array should work on union of objects containing arrays', () => {
      type Input =
        | {
            value: { type: 'a'; n: number }[];
          }
        | {
            value: { type: 'b'; s: string }[];
          }
        | {
            value: { type: 'c'; b: boolean }[];
          };

      const errorF = (input: Input) =>
        match(input)
          .with({ value: P.array({ type: P.union('a', 'b', 'c') }) }, (x) => {})
          .exhaustive();

      const f = (input: Input) => {
        return match(input)
          .with(
            { value: P.array(P.union({ type: 'a' }, { type: 'b' })) },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  | {
                      value: {
                        type: 'a';
                        n: number;
                      }[];
                    }
                  | {
                      value: {
                        type: 'b';
                        s: string;
                      }[];
                    }
                >
              >;
              return x.value[0].type;
            }
          )
          .with(
            {
              value: P.array({ type: 'c' }),
            },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    value: { type: 'c'; b: boolean }[];
                  }
                >
              >;
              return x.value[0].type;
            }
          )
          .exhaustive();
      };

      expect(
        f({
          value: [
            { type: 'b', s: 'str' },
            { type: 'b', s: '2' },
          ],
        })
      ).toEqual('b');
      expect(
        f({
          value: [
            { type: 'a', n: 2 },
            { type: 'a', n: 3 },
          ],
        })
      ).toEqual('a');
    });

    it('P.optional should work with unions and intersections', () => {
      type Input = {
        value?:
          | { type: 'a'; n: number }
          | { type: 'b'; s: string }
          | { type: 'c'; b: boolean };
      };
      const f = (input: Input) => {
        return match(input)
          .with(
            { value: P.optional(P.union({ type: 'a' }, { type: 'b' })) },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  {
                    value?:
                      | { type: 'a'; n: number }
                      | { type: 'b'; s: string }
                      | undefined;
                  }
                >
              >;
              return 'maybe a or b';
            }
          )
          .with({ value: { type: 'c' } }, (x) => {
            type t = Expect<
              Equal<typeof x, { value: { type: 'c'; b: boolean } }>
            >;
            return 'c';
          })
          .exhaustive();
      };

      expect(f({ value: { type: 'a', n: 20 } })).toEqual('maybe a or b');
      expect(f({ value: { type: 'b', s: 'str' } })).toEqual('maybe a or b');
      expect(f({})).toEqual('maybe a or b');
      expect(f({ value: { type: 'c', b: true } })).toEqual('c');
    });
  });

  it('unknown input', () => {
    match<unknown>({})
      .with(
        // It would be nice if as const wasn't necessary with unknown inputs
        { a: P.optional(P.union('hello' as const, 'bonjour' as const)) },
        (x) => {
          type t = Expect<
            Equal<typeof x, { a?: 'hello' | 'bonjour' | undefined }>
          >;
          return 'ok';
        }
      )
      .otherwise(() => 'ko');
  });

  it('Inference should work at the top level', () => {
    class A {
      constructor(public foo: 'bar' | 'baz') {}
    }

    class B {
      constructor(public str: string) {}
    }

    const f = (input: A | B) =>
      match(input)
        .with(
          P.intersection(P.instanceOf(A), { foo: 'bar' }),
          // prop: A & { foo: 'bar' }
          (prop) => {
            type t = Expect<Equal<typeof prop, A & { foo: 'bar' }>>;
            return 'branch 1';
          }
        )
        .with(
          P.intersection(P.instanceOf(A), { foo: 'baz' }),
          // prop: A & { foo: 'baz' }
          (prop) => {
            type t = Expect<Equal<typeof prop, A & { foo: 'baz' }>>;
            return 'branch 2';
          }
        )
        .with(
          P.instanceOf(B),
          // prop: B
          (prop) => {
            type t = Expect<Equal<typeof prop, B>>;
            return 'branch 3';
          }
        )
        .exhaustive();
  });
});

}


// ----- source: tests/invert-pattern.test.ts
{

describe('InvertPattern', () => {
  describe('variadic tuples', () => {
    it('[a, ...b[]]', () => {
      type pattern1 = [
        'Hello',
        ...Matcher<any, GuardP<unknown, number>, 'array'>[]
      ];
      type inverted1 = InvertPattern<pattern1, unknown>;
      //    ^?
      type test1 = Expect<Equal<inverted1, ['Hello', ...number[]]>>;

      type pattern2 = [
        GuardP<unknown, unknown>,
        ...Matcher<unknown, unknown, 'array'>[]
      ];
      type inverted2 = InvertPattern<pattern2, unknown>;
      //    ^?
      type test2 = Expect<Equal<inverted2, [unknown, ...unknown[]]>>;

      type pattern3 = [
        GuardP<unknown, string>,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[]
      ];
      type inverted3 = InvertPattern<pattern3, unknown>;
      //    ^?
      type test3 = Expect<Equal<inverted3, [string, ...number[]]>>;

      type pattern6 = {
        key: readonly [
          GuardP<unknown, string>,
          ...ArrayP<unknown, GuardP<unknown, string>>[]
        ];
      };
      type input6 = unknown;
      type inverted6 = InvertPattern<pattern6, input6>;
      //   ^?
      type test6 = Expect<Equal<inverted6, { key: [string, ...string[]] }>>;
    });

    it('[a, b, ...c[]]', () => {
      type pattern1 = [
        'Hello',
        7,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[]
      ];
      type inverted1 = InvertPattern<pattern1, unknown>;
      //    ^?
      type test1 = Expect<Equal<inverted1, ['Hello', 7, ...number[]]>>;

      type pattern2 = [
        GuardP<unknown, unknown>,
        GuardP<unknown, unknown>,
        ...Matcher<unknown, unknown, 'array'>[]
      ];
      type inverted2 = InvertPattern<pattern2, unknown>;
      //    ^?
      type test2 = Expect<Equal<inverted2, [unknown, unknown, ...unknown[]]>>;

      type pattern3 = [
        GuardP<unknown, string>,
        GuardP<unknown, boolean>,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[]
      ];
      type inverted3 = InvertPattern<pattern3, unknown>;
      //    ^?
      type test3 = Expect<Equal<inverted3, [string, boolean, ...number[]]>>;
    });
    it('[...a[], b]', () => {
      type pattern1 = [
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        'Hello'
      ];
      type inverted1 = InvertPattern<pattern1, unknown>;
      //    ^?
      type test1 = Expect<Equal<inverted1, [...number[], 'Hello']>>;

      type pattern2 = [
        ...Matcher<unknown, unknown, 'array'>[],
        GuardP<unknown, unknown>
      ];
      type inverted2 = InvertPattern<pattern2, unknown>;
      //    ^?
      type test2 = Expect<Equal<inverted2, [...unknown[], unknown]>>;

      type pattern3 = [
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        GuardP<unknown, string>
      ];
      type inverted3 = InvertPattern<pattern3, unknown>;
      //    ^?
      type test3 = Expect<Equal<inverted3, [...number[], string]>>;
    });
    it('[...a[], b, c]', () => {
      type pattern1 = [
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        'Hello',
        7
      ];
      type inverted1 = InvertPattern<pattern1, unknown>;
      //    ^?
      type test1 = Expect<Equal<inverted1, [...number[], 'Hello', 7]>>;

      type pattern2 = [
        ...Matcher<unknown, unknown, 'array'>[],
        GuardP<unknown, unknown>,
        GuardP<unknown, unknown>
      ];
      type inverted2 = InvertPattern<pattern2, unknown>;
      //    ^?
      type test2 = Expect<Equal<inverted2, [...unknown[], unknown, unknown]>>;

      type pattern3 = [
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        GuardP<unknown, string>,
        GuardP<unknown, boolean>
      ];
      type inverted3 = InvertPattern<pattern3, unknown>;
      //    ^?
      type test3 = Expect<Equal<inverted3, [...number[], string, boolean]>>;
    });
    it('[a, ...b[], c]', () => {
      type pattern1 = [
        7,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        'Hello'
      ];
      type inverted1 = InvertPattern<pattern1, unknown>;
      //    ^?
      type test1 = Expect<Equal<inverted1, [7, ...number[], 'Hello']>>;

      type pattern2 = [
        GuardP<unknown, unknown>,
        ...Matcher<unknown, unknown, 'array'>[],
        GuardP<unknown, unknown>
      ];
      type inverted2 = InvertPattern<pattern2, unknown>;
      //    ^?
      type test2 = Expect<Equal<inverted2, [unknown, ...unknown[], unknown]>>;

      type pattern3 = [
        GuardP<unknown, string>,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        GuardP<unknown, boolean>
      ];
      type inverted3 = InvertPattern<pattern3, unknown>;
      //    ^?
      type test3 = Expect<Equal<inverted3, [string, ...number[], boolean]>>;
    });

    it('[a, b, ...c[], d, e]', () => {
      type pattern1 = [
        7,
        8,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        'Hello',
        'Bonjour'
      ];
      type inverted1 = InvertPattern<pattern1, undefined>;
      //    ^?
      type test1 = Expect<
        Equal<inverted1, [7, 8, ...number[], 'Hello', 'Bonjour']>
      >;

      type pattern2 = [
        GuardP<unknown, unknown>,
        GuardP<unknown, unknown>,
        ...Matcher<unknown, unknown, 'array'>[],
        GuardP<unknown, unknown>,
        GuardP<unknown, unknown>
      ];
      type inverted2 = InvertPattern<pattern2, undefined>;
      //    ^?
      type test2 = Expect<
        Equal<inverted2, [unknown, unknown, ...unknown[], unknown, unknown]>
      >;

      type pattern3 = [
        GuardP<unknown, string>,
        GuardP<unknown, number>,
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        GuardP<unknown, boolean>,
        GuardP<unknown, symbol>
      ];
      type inverted3 = InvertPattern<pattern3, undefined>;
      //    ^?
      type test3 = Expect<
        Equal<inverted3, [string, number, ...number[], boolean, symbol]>
      >;
    });
  });
});

describe('InvertPatternForExclude', () => {
  it('should correctly invert type guards', () => {
    type cases = [
      Expect<
        Equal<
          InvertPatternForExclude<
            {
              x: Matcher<1 | 2 | 3, 3>;
            },
            { x: 1 | 2 | 3 }
          >,
          Readonly<{ x: 3 }>
        >
      >,
      Expect<
        Equal<
          InvertPatternForExclude<
            {
              x: Matcher<3, 3>;
            },
            { x: 1 } | { x: 2 } | { x: 3 }
          >,
          Readonly<{ x: 3 } | { x: 3 } | { x: 3 }>
        >
      >
    ];
  });

  it('should work with objects', () => {
    type res1 = InvertPatternForExclude<
      { a: Matcher<unknown, string> },
      { a: string; b: number } | [1, 2]
    >;
    type test1 = Expect<Equal<res1, Readonly<{ a: string }>>>;
  });

  describe('Tuples', () => {
    it('should work with tuples', () => {
      type res1 = InvertPatternForExclude<
        [1, 2],
        { a: string; b: number } | [1, 2]
      >;
      type test1 = Expect<Equal<res1, [1, 2]>>;
    });

    it('should return readonly tuples if the input tuple is readonly, not otherwise', () => {
      type res1 = InvertPatternForExclude<
        [[[1, 2]]],
        { a: string } | readonly [[readonly [1, 2]]]
      >;
      type test1 = Expect<Equal<res1, readonly [[readonly [1, 2]]]>>;
    });
  });

  describe('optional', () => {
    type OptionalPattern<a> = Matcher<unknown, a, 'optional'>;

    it('an optional pattern in an object should be considered an optional key', () => {
      type input = { key?: 'a' | 'b' };
      type pattern = { key: OptionalPattern<'a'> };
      type inverted = InvertPatternForExclude<pattern, input>;

      type cases = [
        Expect<
          Equal<
            inverted,
            Readonly<{
              key?: 'a' | undefined;
            }>
          >
        >
      ];
    });
    it('the inverted value should be the intersection of all the inverted patterns', () => {
      type x = InvertPatternForExclude<
        { type2: 'c'; data: OptionalPattern<'f'> },
        { type: 'a' | 'b'; type2: 'c' | 'd'; data?: 'f' | 'g' }
      >;
      type cases = [
        Expect<Equal<x, Readonly<{ type2: 'c'; data?: 'f' | undefined }>>>
      ];
    });

    it('an optional pattern in an object should be considered an optional key', () => {
      type input = { key?: 'a' | 'b' };
      type pattern = { key: OptionalPattern<'a'> };
      type inverted = InvertPatternForExclude<pattern, input>;

      type cases = [
        Expect<
          Equal<
            inverted,
            Readonly<{
              key?: 'a' | undefined;
            }>
          >
        >
      ];
    });
  });

  describe('variadic tuples', () => {
    it('[a, ...b[]]', () => {
      type pattern1 = ['Hello', ...Matcher<any, GuardP<unknown, 2>, 'array'>[]];
      type input1 = { a: string; b: number } | [string, ...number[]];
      type inverted1 = InvertPatternForExclude<pattern1, input1>;
      type test1 = Expect<Equal<inverted1, ['Hello', ...2[]]>>;

      type pattern2 = ['Hello', ...Matcher<any, GuardP<unknown, 2>, 'array'>[]];
      type input2 = [string, ...number[]];
      type inverted2 = InvertPatternForExclude<pattern2, input2>;
      type test2 = Expect<Equal<inverted2, ['Hello', ...2[]]>>;

      type pattern3 = [...Matcher<any, GuardP<unknown, 2>, 'array'>[]];
      type input3 = [...number[]];
      type inverted3 = InvertPatternForExclude<pattern3, input3>;
      type test3 = Expect<Equal<inverted3, [...2[]]>>;

      type pattern4 = readonly [
        GuardP<unknown, unknown>,
        ...ArrayP<unknown, unknown>[]
      ];
      type input4 = [string | number, ...(string | number)[]];
      type inverted4 = InvertPatternForExclude<pattern4, input4>;
      //    ^?
      type test4 = Expect<Equal<inverted4, [unknown, ...(string | number)[]]>>;

      type pattern5 = ArrayP<unknown, unknown>;
      type input5 = (string | number)[];
      type inverted5 = InvertPatternForExclude<pattern5, input5>;
      type test5 = Expect<Equal<inverted5, (string | number)[]>>;
    });

    it('[a, b, ...c[]]', () => {
      type pattern1 = [
        'Hello',
        10,
        ...Matcher<any, GuardP<unknown, 2>, 'array'>[]
      ];
      type input1 = { a: string; b: number } | [string, number, ...number[]];
      type inverted1 = InvertPatternForExclude<pattern1, input1>;
      type test1 = Expect<Equal<inverted1, ['Hello', 10, ...2[]]>>;
    });
    it('[...a[], b]', () => {
      type pattern1 = [
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        'Hello'
      ];
      type input1 = { a: string; b: number } | [...number[], string];
      type inverted1 = InvertPatternForExclude<pattern1, input1>;
      type test1 = Expect<Equal<inverted1, [...number[], 'Hello']>>;
    });
    it('[...a[], b, c]', () => {
      type pattern1 = [
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        'Hello',
        true
      ];
      type input1 = { a: string; b: number } | [...number[], string, boolean];
      type inverted1 = InvertPatternForExclude<pattern1, input1>;
      type test1 = Expect<Equal<inverted1, [...number[], 'Hello', true]>>;
    });
    it('[a, ...b[], c]', () => {
      type pattern1 = [
        'Hello',
        ...Matcher<any, GuardP<unknown, number>, 'array'>[],
        true
      ];
      type input1 = { a: string; b: number } | [string, ...number[], boolean];
      type inverted1 = InvertPatternForExclude<pattern1, input1>;
      type test1 = Expect<Equal<inverted1, ['Hello', ...number[], true]>>;
    });
  });
});

describe('issue #44', () => {
  it('if the pattern contains unknown keys, inverted this pattern should keep them', () => {
    type input = { sex: 'a' | 'b'; age: 'c' | 'd' };
    type pattern = Readonly<{ sex: 'a'; unknownKey: 'c' }>;
    type inverted = InvertPatternForExclude<pattern, input>;

    type cases = [Expect<Equal<inverted, pattern>>];
  });
});

describe('it should return never if the input pattern is Pattern<input>', () => {
  it('InvertPattern', () => {
    type input = { sex: 'a' | 'b'; age: 'c' | 'd' };
    type pattern = Pattern<input>;
    type inverted = InvertPattern<pattern, input>;
    //    ^?
    type test1 = Expect<Equal<inverted, never>>;
  });

  it('InvertPatternForExclude', () => {
    type input = { sex: 'a' | 'b'; age: 'c' | 'd' };
    type pattern = Pattern<input>;
    type inverted = InvertPatternForExclude<pattern, input>;
    //    ^?
    type test1 = Expect<Equal<inverted, never>>;
  });
});

}


// ----- source: tests/is-matching.test.ts
{

describe('isMatching', () => {
  it('should generate a type guard function from a pattern if given a single argument', () => {
    const something: unknown = {
      title: 'Hello',
      author: { name: 'Gabriel', age: 27 },
    };

    const isBlogPost = isMatching({
      title: P.string,
      author: { name: P.string, age: P.number },
    });

    if (isBlogPost(something)) {
      type t = Expect<
        Equal<
          typeof something,
          { title: string; author: { name: string; age: number } }
        >
      >;
      expect(true).toBe(true);
    } else {
      throw new Error(
        'isMatching should have returned true but it returned false'
      );
    }
  });

  it('should act as a type guard function if given a two arguments', () => {
    const something: unknown = {
      title: 'Hello',
      author: { name: 'Gabriel', age: 27 },
    };

    if (
      isMatching(
        {
          title: P.string,
          author: { name: P.string, age: P.number },
        },
        something
      )
    ) {
      type t = Expect<
        Equal<
          typeof something,
          { title: string; author: { name: string; age: number } }
        >
      >;
      expect(true).toBe(true);
    } else {
      throw new Error(
        'isMatching should have returned true but it returned false'
      );
    }
  });

  it('should work with object patterns', () => {
    const value: unknown = { foo: true };
    expect(isMatching({ foo: true }, value)).toEqual(true);
    expect(isMatching({ foo: 'true' }, value)).toEqual(false);
  });

  it('should work with array patterns', () => {
    const value: unknown = [1, 2, 3];
    expect(isMatching(P.array(P.number), value)).toEqual(true);
    expect(isMatching(P.array(P.string), value)).toEqual(false);
  });

  it('should work with variadic patterns', () => {
    const value: unknown = [1, 2, 3];
    expect(isMatching([1, ...P.array(P.number)], value)).toEqual(true);
    expect(isMatching([2, ...P.array(P.number)], value)).toEqual(false);
  });

  it('should work with primitive patterns', () => {
    const value: unknown = 1;
    expect(isMatching(P.number, value)).toEqual(true);
    expect(isMatching(P.boolean, value)).toEqual(false);
  });

  it('should work with literal patterns', () => {
    const value: unknown = 1;
    expect(isMatching(1, value)).toEqual(true);
    expect(isMatching('oops', value)).toEqual(false);
  });

  it('should work with union and intersection patterns', () => {
    const value: unknown = { foo: true };
    expect(isMatching(P.union({ foo: true }, { bar: false }), value)).toEqual(
      true
    );

    expect(isMatching(P.union({ foo: false }, { bar: false }), value)).toEqual(
      false
    );
  });

  type Pizza = { type: 'pizza'; topping: string };
  type Sandwich = { type: 'sandwich'; condiments: string[] };
  type Food = Pizza | Sandwich;

  it('type inference should be precise without `as const`', () => {
    const food = { type: 'pizza', topping: 'cheese' } as Food;

    const isPizza = isMatching({ type: 'pizza' });

    if (isPizza(food)) {
      type t = Expect<Equal<typeof food, Pizza>>;
    } else {
      throw new Error('Expected food to match the pizza pattern!');
    }

    if (isMatching({ type: 'pizza' }, food)) {
      type t = Expect<Equal<typeof food, Pizza>>;
    } else {
      throw new Error('Expected food to match the pizza pattern!');
    }
  });

  it('should reject invalid pattern when two parameters are passed', () => {
    const food = { type: 'pizza', topping: 'cheese' } as Food;

    isMatching(
      // @ts-expect-error
      {
        type: 'oops',
      },
      food
    );
  });

  it('should allow patterns targetting one member of a union type', () => {
    const food = { type: 'pizza', topping: 'cheese' } as Food;
    expect(isMatching({ topping: 'cheese' }, food)).toBe(true);

    if (isMatching({ topping: 'cheese' }, food)) {
      type t = Expect<
        Equal<typeof food, Pizza & { topping: 'cheese'; type: 'pizza' }>
      >;
    }
  });

  it('should allow targetting unknown properties', () => {
    const food = { type: 'pizza', topping: 'cheese' } as Food;

    expect(isMatching({ unknownProp: P.instanceOf(Error) }, food)).toBe(false);

    if (isMatching({ unknownProp: P.instanceOf(Error) }, food)) {
      type t = Expect<Equal<typeof food, Food & { unknownProp: Error }>>;
    }
  });

  it('should correctly narrow undiscriminated unions of objects.', () => {
    type Input = { someProperty: string[] } | { this: 'is a string' };
    const input = { someProperty: ['hello'] } satisfies Input as Input;

    if (isMatching({ someProperty: P.array() }, input)) {
      expect(input.someProperty).toEqual(['hello']);
      type t = Expect<Equal<typeof input.someProperty, string[]>>;
    } else {
      throw new Error('pattern should match');
    }
  });
});

}


// ----- source: tests/large-exhaustive.test.ts
{

describe('large exhaustive', () => {
  // prettier-ignore
  type LargeObject<T> = Compute<{
    a1: T; b1: T; c1: T; d1: T; e1: T; f1: T; g1: T; h1: T; i1: T; j1: T; k1: T; l1: T; m1: T; n1: T; o1: T; p1: T; q1: T; r1: T; s1: T; t1: T; u1: T; v1: T; w1: T; x1: T; y1: T; z1: T;
    a2: T; b2: T; c2: T; d2: T; e2: T; f2: T; g2: T; h2: T; i2: T; j2: T; k2: T; l2: T; m2: T; n2: T; o2: T; p2: T; q2: T; r2: T; s2: T; t2: T; u2: T; v2: T; w2: T; x2: T; y2: T; z2: T;
    a3: T; b3: T; c3: T; d3: T; e3: T; f3: T; g3: T; h3: T; i3: T; j3: T; k3: T; l3: T; m3: T; n3: T; o3: T; p3: T; q3: T; r3: T; s3: T; t3: T; u3: T; v3: T; w3: T; x3: T; y3: T; z3: T;
}>;

  it('large objects', () => {
    expect(
      match<LargeObject<number> | null>(null)
        .with(
          // prettier-ignore
          {
            a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0, j1: 0, k1: 0, l1: 0, m1: 0, n1: 0, o1: 0, p1: 0, q1: 0, r1: 0, s1: 0, t1: 0, u1: 0, v1: 0, w1: 0, x1: 0, y1: 0, z1: 0,
            a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0, j2: 0, k2: 0, l2: 0, m2: 0, n2: 0, o2: 0, p2: 0, q2: 0, r2: 0, s2: 0, t2: 0, u2: 0, v2: 0, w2: 0, x2: 0, y2: 0, z2: 0,
            a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0, j3: 0, k3: 0, l3: 0, m3: 0, n3: 0, o3: 0, p3: 0, q3: 0, r3: 0, s3: 0, t3: 0, u3: 0, v3: 0, w3: 0, x3: 0, y3: 0, z3: 0,
          },
          (x) => 'match'
        )
        .with(null, () => 'Null')
        .with(
          // prettier-ignore
          {
            a1: P.number, b1: P.number, c1: P.number, d1: P.number, e1: P.number, f1: P.number, g1: P.number, h1: P.number, i1: P.number, j1: P.number, k1: P.number, l1: P.number, m1: P.number, n1: P.number, o1: P.number, p1: P.number, q1: P.number, r1: P.number, s1: P.number, t1: P.number, u1: P.number, v1: P.number, w1: P.number, x1: P.number, y1: P.number, z1: P.number,
            a2: P.number, b2: P.number, c2: P.number, d2: P.number, e2: P.number, f2: P.number, g2: P.number, h2: P.number, i2: P.number, j2: P.number, k2: P.number, l2: P.number, m2: P.number, n2: P.number, o2: P.number, p2: P.number, q2: P.number, r2: P.number, s2: P.number, t2: P.number, u2: P.number, v2: P.number, w2: P.number, x2: P.number, y2: P.number, z2: P.number,
            a3: P.number, b3: P.number, c3: P.number, d3: P.number, e3: P.number, f3: P.number, g3: P.number, h3: P.number, i3: P.number, j3: P.number, k3: P.number, l3: P.number, m3: P.number, n3: P.number, o3: P.number, p3: P.number, q3: P.number, r3: P.number, s3: P.number, t3: P.number, u3: P.number, v3: P.number, w3: P.number, x3: P.number, y3: P.number, z3: P.number,
          },
          () => 'nope'
        )
        .exhaustive()
    ).toBe('Null');
  });

  it('large tuple', () => {
    expect(
      match<
        | [
            LargeObject<number>,
            LargeObject<number>,
            LargeObject<number>,
            LargeObject<number>,
            LargeObject<number>
          ]
        | null
      >(null)
        .with(
          // prettier-ignore
          [
            { 
              a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0, j1: 0, k1: 0, l1: 0, m1: 0, n1: 0, o1: 0, p1: 0, q1: 0, r1: 0, s1: 0, t1: 0, u1: 0, v1: 0, w1: 0, x1: 0, y1: 0, z1: 0,
              a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0, j2: 0, k2: 0, l2: 0, m2: 0, n2: 0, o2: 0, p2: 0, q2: 0, r2: 0, s2: 0, t2: 0, u2: 0, v2: 0, w2: 0, x2: 0, y2: 0, z2: 0,
              a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0, j3: 0, k3: 0, l3: 0, m3: 0, n3: 0, o3: 0, p3: 0, q3: 0, r3: 0, s3: 0, t3: 0, u3: 0, v3: 0, w3: 0, x3: 0, y3: 0, z3: 0,
            },
            { 
              a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0, j1: 0, k1: 0, l1: 0, m1: 0, n1: 0, o1: 0, p1: 0, q1: 0, r1: 0, s1: 0, t1: 0, u1: 0, v1: 0, w1: 0, x1: 0, y1: 0, z1: 0,
              a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0, j2: 0, k2: 0, l2: 0, m2: 0, n2: 0, o2: 0, p2: 0, q2: 0, r2: 0, s2: 0, t2: 0, u2: 0, v2: 0, w2: 0, x2: 0, y2: 0, z2: 0,
              a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0, j3: 0, k3: 0, l3: 0, m3: 0, n3: 0, o3: 0, p3: 0, q3: 0, r3: 0, s3: 0, t3: 0, u3: 0, v3: 0, w3: 0, x3: 0, y3: 0, z3: 0,
            },
            { 
              a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0, j1: 0, k1: 0, l1: 0, m1: 0, n1: 0, o1: 0, p1: 0, q1: 0, r1: 0, s1: 0, t1: 0, u1: 0, v1: 0, w1: 0, x1: 0, y1: 0, z1: 0,
              a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0, j2: 0, k2: 0, l2: 0, m2: 0, n2: 0, o2: 0, p2: 0, q2: 0, r2: 0, s2: 0, t2: 0, u2: 0, v2: 0, w2: 0, x2: 0, y2: 0, z2: 0,
              a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0, j3: 0, k3: 0, l3: 0, m3: 0, n3: 0, o3: 0, p3: 0, q3: 0, r3: 0, s3: 0, t3: 0, u3: 0, v3: 0, w3: 0, x3: 0, y3: 0, z3: 0,
            },
            {
              a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0, j1: 0, k1: 0, l1: 0, m1: 0, n1: 0, o1: 0, p1: 0, q1: 0, r1: 0, s1: 0, t1: 0, u1: 0, v1: 0, w1: 0, x1: 0, y1: 0, z1: 0,
              a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0, j2: 0, k2: 0, l2: 0, m2: 0, n2: 0, o2: 0, p2: 0, q2: 0, r2: 0, s2: 0, t2: 0, u2: 0, v2: 0, w2: 0, x2: 0, y2: 0, z2: 0,
              a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0, j3: 0, k3: 0, l3: 0, m3: 0, n3: 0, o3: 0, p3: 0, q3: 0, r3: 0, s3: 0, t3: 0, u3: 0, v3: 0, w3: 0, x3: 0, y3: 0, z3: 0,
            },
            { 
              a1: 0, b1: 0, c1: 0, d1: 0, e1: 0, f1: 0, g1: 0, h1: 0, i1: 0, j1: 0, k1: 0, l1: 0, m1: 0, n1: 0, o1: 0, p1: 0, q1: 0, r1: 0, s1: 0, t1: 0, u1: 0, v1: 0, w1: 0, x1: 0, y1: 0, z1: 0,
              a2: 0, b2: 0, c2: 0, d2: 0, e2: 0, f2: 0, g2: 0, h2: 0, i2: 0, j2: 0, k2: 0, l2: 0, m2: 0, n2: 0, o2: 0, p2: 0, q2: 0, r2: 0, s2: 0, t2: 0, u2: 0, v2: 0, w2: 0, x2: 0, y2: 0, z2: 0,
              a3: 0, b3: 0, c3: 0, d3: 0, e3: 0, f3: 0, g3: 0, h3: 0, i3: 0, j3: 0, k3: 0, l3: 0, m3: 0, n3: 0, o3: 0, p3: 0, q3: 0, r3: 0, s3: 0, t3: 0, u3: 0, v3: 0, w3: 0, x3: 0, y3: 0, z3: 0,
            }
          ],
          (x) => {
            type test1 = Expect<Not<Equal<typeof x, never>>>;
            type test2 = Expect<Not<Equal<typeof x, unknown>>>;
            type test3 = Expect<Not<Equal<typeof x, any>>>;
            return 'match';
          }
        )
        .with(null, () => 'Null')
        .with(
          // prettier-ignore
          [
            { 
              a1: P.number, b1: P.number, c1: P.number, d1: P.number, e1: P.number, f1: P.number, g1: P.number, h1: P.number, i1: P.number, j1: P.number, k1: P.number, l1: P.number, m1: P.number, n1: P.number, o1: P.number, p1: P.number, q1: P.number, r1: P.number, s1: P.number, t1: P.number, u1: P.number, v1: P.number, w1: P.number, x1: P.number, y1: P.number, z1: P.number,
              a2: P.number, b2: P.number, c2: P.number, d2: P.number, e2: P.number, f2: P.number, g2: P.number, h2: P.number, i2: P.number, j2: P.number, k2: P.number, l2: P.number, m2: P.number, n2: P.number, o2: P.number, p2: P.number, q2: P.number, r2: P.number, s2: P.number, t2: P.number, u2: P.number, v2: P.number, w2: P.number, x2: P.number, y2: P.number, z2: P.number,
              a3: P.number, b3: P.number, c3: P.number, d3: P.number, e3: P.number, f3: P.number, g3: P.number, h3: P.number, i3: P.number, j3: P.number, k3: P.number, l3: P.number, m3: P.number, n3: P.number, o3: P.number, p3: P.number, q3: P.number, r3: P.number, s3: P.number, t3: P.number, u3: P.number, v3: P.number, w3: P.number, x3: P.number, y3: P.number, z3: P.number,
            },
            { 
              a1: P.number, b1: P.number, c1: P.number, d1: P.number, e1: P.number, f1: P.number, g1: P.number, h1: P.number, i1: P.number, j1: P.number, k1: P.number, l1: P.number, m1: P.number, n1: P.number, o1: P.number, p1: P.number, q1: P.number, r1: P.number, s1: P.number, t1: P.number, u1: P.number, v1: P.number, w1: P.number, x1: P.number, y1: P.number, z1: P.number,
              a2: P.number, b2: P.number, c2: P.number, d2: P.number, e2: P.number, f2: P.number, g2: P.number, h2: P.number, i2: P.number, j2: P.number, k2: P.number, l2: P.number, m2: P.number, n2: P.number, o2: P.number, p2: P.number, q2: P.number, r2: P.number, s2: P.number, t2: P.number, u2: P.number, v2: P.number, w2: P.number, x2: P.number, y2: P.number, z2: P.number,
              a3: P.number, b3: P.number, c3: P.number, d3: P.number, e3: P.number, f3: P.number, g3: P.number, h3: P.number, i3: P.number, j3: P.number, k3: P.number, l3: P.number, m3: P.number, n3: P.number, o3: P.number, p3: P.number, q3: P.number, r3: P.number, s3: P.number, t3: P.number, u3: P.number, v3: P.number, w3: P.number, x3: P.number, y3: P.number, z3: P.number,
            },
            { 
              a1: P.number, b1: P.number, c1: P.number, d1: P.number, e1: P.number, f1: P.number, g1: P.number, h1: P.number, i1: P.number, j1: P.number, k1: P.number, l1: P.number, m1: P.number, n1: P.number, o1: P.number, p1: P.number, q1: P.number, r1: P.number, s1: P.number, t1: P.number, u1: P.number, v1: P.number, w1: P.number, x1: P.number, y1: P.number, z1: P.number,
              a2: P.number, b2: P.number, c2: P.number, d2: P.number, e2: P.number, f2: P.number, g2: P.number, h2: P.number, i2: P.number, j2: P.number, k2: P.number, l2: P.number, m2: P.number, n2: P.number, o2: P.number, p2: P.number, q2: P.number, r2: P.number, s2: P.number, t2: P.number, u2: P.number, v2: P.number, w2: P.number, x2: P.number, y2: P.number, z2: P.number,
              a3: P.number, b3: P.number, c3: P.number, d3: P.number, e3: P.number, f3: P.number, g3: P.number, h3: P.number, i3: P.number, j3: P.number, k3: P.number, l3: P.number, m3: P.number, n3: P.number, o3: P.number, p3: P.number, q3: P.number, r3: P.number, s3: P.number, t3: P.number, u3: P.number, v3: P.number, w3: P.number, x3: P.number, y3: P.number, z3: P.number,
            },
            {
              a1: P.number, b1: P.number, c1: P.number, d1: P.number, e1: P.number, f1: P.number, g1: P.number, h1: P.number, i1: P.number, j1: P.number, k1: P.number, l1: P.number, m1: P.number, n1: P.number, o1: P.number, p1: P.number, q1: P.number, r1: P.number, s1: P.number, t1: P.number, u1: P.number, v1: P.number, w1: P.number, x1: P.number, y1: P.number, z1: P.number,
              a2: P.number, b2: P.number, c2: P.number, d2: P.number, e2: P.number, f2: P.number, g2: P.number, h2: P.number, i2: P.number, j2: P.number, k2: P.number, l2: P.number, m2: P.number, n2: P.number, o2: P.number, p2: P.number, q2: P.number, r2: P.number, s2: P.number, t2: P.number, u2: P.number, v2: P.number, w2: P.number, x2: P.number, y2: P.number, z2: P.number,
              a3: P.number, b3: P.number, c3: P.number, d3: P.number, e3: P.number, f3: P.number, g3: P.number, h3: P.number, i3: P.number, j3: P.number, k3: P.number, l3: P.number, m3: P.number, n3: P.number, o3: P.number, p3: P.number, q3: P.number, r3: P.number, s3: P.number, t3: P.number, u3: P.number, v3: P.number, w3: P.number, x3: P.number, y3: P.number, z3: P.number,
            },
            { 
              a1: P.number, b1: P.number, c1: P.number, d1: P.number, e1: P.number, f1: P.number, g1: P.number, h1: P.number, i1: P.number, j1: P.number, k1: P.number, l1: P.number, m1: P.number, n1: P.number, o1: P.number, p1: P.number, q1: P.number, r1: P.number, s1: P.number, t1: P.number, u1: P.number, v1: P.number, w1: P.number, x1: P.number, y1: P.number, z1: P.number,
              a2: P.number, b2: P.number, c2: P.number, d2: P.number, e2: P.number, f2: P.number, g2: P.number, h2: P.number, i2: P.number, j2: P.number, k2: P.number, l2: P.number, m2: P.number, n2: P.number, o2: P.number, p2: P.number, q2: P.number, r2: P.number, s2: P.number, t2: P.number, u2: P.number, v2: P.number, w2: P.number, x2: P.number, y2: P.number, z2: P.number,
              a3: P.number, b3: P.number, c3: P.number, d3: P.number, e3: P.number, f3: P.number, g3: P.number, h3: P.number, i3: P.number, j3: P.number, k3: P.number, l3: P.number, m3: P.number, n3: P.number, o3: P.number, p3: P.number, q3: P.number, r3: P.number, s3: P.number, t3: P.number, u3: P.number, v3: P.number, w3: P.number, x3: P.number, y3: P.number, z3: P.number,
            }
          ],
          () => 'nope'
        )
        .exhaustive()
    ).toBe('Null');
  });

  // prettier-ignore
  type DeepObject = {
    1: { 2: { 3: { 4: {
      a: number; b: number; c: number; d: number; e: number; f: number; g: number; h: number; i: number; j: number; k: number; l: number; m: number; n: number; o: number; p: number; q: number; r: number; s: number; t: number; u: number; v: number; w: number; x: number; y: number; z: number;
    } } } }
  };

  it('deep objects', () => {
    expect(
      match<DeepObject | null>(null)
        .with(
          // prettier-ignore
          { 
            1: { 2: { 3: { 4: {
              a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
            } } } }
          },
          (x) => 'match'
        )
        .with(null, () => 'Null')
        .with(
          // prettier-ignore
          {
            1: { 2: { 3: { 4: {
              a: P.number, b: P.number, c: P.number, d: P.number, e: P.number, f: P.number, g: P.number, h: P.number, i: P.number, j: P.number, k: P.number, l: P.number, m: P.number, n: P.number, o: P.number, p: P.number, q: P.number, r: P.number, s: P.number, t: P.number, u: P.number, v: P.number, w: P.number, x: P.number, y: P.number, z: P.number, 
            } } } }
          },
          () => 'nope'
        )
        .exhaustive()
    ).toBe('Null');
  });

  it('Input with a large distributed cardinality', () => {
    type States = 'idle' | 'loading' | 'success' | 'error' | 'partial_result';

    const eventStatus = 'success' as States;
    const dataStatus = 'loading' as States;
    const backgroundStatus = 'loading' as States;
    const replaySelectorsStatus = 'idle' as States;

    const input = {
      eventStatus,
      dataStatus,
      backgroundStatus,
      replaySelectorsStatus,
    } as const;

    type input = typeof input;

    const res = match(input)
      .returnType<
        | { status: 'idle' }
        | { status: 'loading' }
        | { status: 'success' }
        | { status: 'error'; error: unknown }
      >()
      .with(
        { eventStatus: P.union('loading', 'partial_result') },
        { dataStatus: P.union('loading', 'partial_result') },
        { backgroundStatus: P.union('loading', 'partial_result') },
        { replaySelectorsStatus: P.union('loading', 'partial_result') },
        () => ({ status: 'loading' })
      )
      .with(
        {
          eventStatus: 'success',
          dataStatus: 'success',
          backgroundStatus: 'success',
          replaySelectorsStatus: 'success',
        },
        () => ({ status: 'success' })
      )
      .with(
        { eventStatus: 'idle' },
        { dataStatus: 'idle' },
        { backgroundStatus: 'idle' },
        { replaySelectorsStatus: 'idle' },
        () => ({ status: 'idle' as const })
      )
      .with({ replaySelectorsStatus: 'error' }, () => ({
        status: 'error',
        error: new Error('Oops 0'),
      }))
      .with({ eventStatus: 'error' }, () => ({
        status: 'error',
        error: new Error('Oops 1'),
      }))
      .with({ dataStatus: 'error' }, () => ({
        status: 'error',
        error: new Error('Oops 2'),
      }))
      .with({ backgroundStatus: 'error' }, () => ({
        status: 'error',
        error: new Error('Oops 3'),
      }))
      .exhaustive();
  });
});

}


// ----- source: tests/lists.test.ts
{

describe('List ([a])', () => {
  it('should match list patterns', () => {
    let httpResult = {
      id: 20,
      title: 'hellooo',
    };
    const res = match<any, Option<Blog[]>>([httpResult])
      .with([], (x) => {
        type t = Expect<Equal<typeof x, []>>;
        return { kind: 'some', value: [{ id: 0, title: 'LOlol' }] };
      })
      .with(P.array({ id: P.number, title: P.string }), (blogs) => {
        type t = Expect<Equal<typeof blogs, { id: number; title: string }[]>>;
        return {
          kind: 'some',
          value: blogs,
        };
      })
      .with(20, (x) => {
        type t = Expect<Equal<typeof x, 20>>;
        return { kind: 'none' };
      })
      .otherwise(() => ({ kind: 'none' }));

    expect(res).toEqual({ kind: 'some', value: [httpResult] });
  });

  it('should work with generics', () => {
    const reverse = <T>(xs: T[]): T[] => {
      return match<T[], T[]>(xs)
        .with([], () => [])
        .with(P._, ([x, ...xs]) => [...reverse(xs), x])
        .run();
    };

    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('issue #148: P.array should support readonly arrays as its input', () => {
    type Input = readonly {
      readonly title: string;
      readonly content: string;
    }[];

    const input: Input = [
      { title: 'Hello world!', content: 'This is a very interesting content' },
      { title: 'Bonjour!', content: 'This is a very interesting content too' },
    ];

    const output = match<Input, string>(input)
      .with(
        P.array({ title: P.string, content: P.string }),
        (posts) => 'a list of posts!'
      )
      .otherwise(() => 'something else');
  });

  it('type narrowing should work on nested arrays', () => {
    const fn = (input: { queries?: { q?: string[]; a: number }[] }) =>
      match(input).with(
        {
          queries: P.array({ q: P.array(P.string) }),
        },
        (x) => {
          type t = Expect<
            Equal<typeof x, { queries: { a: number; q: string[] }[] }>
          >;
          return x.queries[0].q[0];
        }
      );
  });
});

}


// ----- source: tests/maps.test.ts
{

describe('Map', () => {
  it('should match Map patterns', () => {
    const usersMap = new Map([
      ['a', { name: 'alice' }],
      ['b', { name: 'bob' }],
    ]);

    const userPattern = { name: P.string };

    const res = match<Map<string, { name: string }>>(usersMap)
      .with(P.map(P.union('b', 'a'), userPattern), (map) => ({
        name: map.get('b')!.name + ' ' + map.get('a')!.name,
      }))
      .with(P.map('b', userPattern), (map) => map.get('b')!)
      .with(P._, () => ({ name: 'unknown' }))
      .run();

    type t = Expect<Equal<typeof res, { name: string }>>;

    expect(res).toEqual({ name: 'bob alice' });
  });

  it("should match any map if P.map isn't given any arguments", () => {
    const usersMap = new Map([
      ['a', { name: 'alice' }],
      ['b', { name: 'bob' }],
    ]);

    const res = match<Map<string, { name: string }>>(usersMap)
      .with(P.map(), () => true)
      .exhaustive();
    type t = Expect<Equal<typeof res, boolean>>;
    expect(res).toEqual(true);
  });
});

}


// ----- source: tests/matcher-protocol.test.ts
{

describe('matcher protocol', () => {
  type SomeValue<T> = T extends Some<infer V> ? V : never;

  interface SomeNarrowFn extends P.unstable_Fn {
    output: Some<SomeValue<this['input']>>;
  }

  class Some<const T> {
    constructor(public value: T) {}

    static [P.matcher](): P.unstable_Matcher<SomeNarrowFn> {
      return {
        match: (input) => ({
          matched: input instanceof Some,
        }),
      };
    }

    [P.matcher](): P.unstable_Matcher<
      Some<T extends P.Pattern<unknown> ? P.infer<T> : T>
    > {
      return {
        match: (input) => {
          return {
            matched:
              input instanceof Some &&
              isMatching<any, any>(this.value, input.value),
          };
        },
      };
    }
  }

  class None {
    coucou: number;
    constructor() {
      this.coucou = 1;
    }
    static [P.matcher](): P.unstable_Matcher<None> {
      return {
        match: (input) => {
          return { matched: input instanceof None };
        },
      };
    }
  }
  type Option<T> = Some<T> | None;

  it('should support taking a sub pattern', () => {
    const res = match<{ option: Option<number | string> }>({
      option: new Some(12),
    })
      .with({ option: new Some(7) }, (value) => {
        type t = Expect<Equal<typeof value, { option: Some<7> }>>;
        return value.option.value;
      })
      .with({ option: new Some(12) }, (value) => {
        type t = Expect<Equal<typeof value, { option: Some<12> }>>;
        return value.option.value;
      })
      .with({ option: None }, () => '')
      .with({ option: Some }, () => '')
      .exhaustive();

    expect(res).toBe(12);

    match<Option<number | string>>(new Some(12)).with(
      new Some(P.number),
      (some) => {
        type t = Expect<Equal<typeof some, Some<number>>>;
      }
    );
  });

  it('should support nesting', () => {
    const res = match<{ option: Option<number | string> }>({
      option: new Some(12),
    })
      .with({ option: Some }, (x) => {
        type t = Expect<Equal<typeof x, { option: Some<number | string> }>>;
        return `Some ${x.option.value}`;
      })
      .with({ option: None }, (x) => {
        type t = Expect<Equal<typeof x, { option: None }>>;
        return 'None';
      })
      .exhaustive();

    expect(res).toBe(`Some 12`);
  });

  it('it should work without nesting too', () => {
    expect(
      match<Option<number | string>>(new Some(12))
        .with(new Some(10), (some) => {
          type t = Expect<Equal<typeof some, Some<10>>>;
          return `10`;
        })
        .with(new Some(12), (some) => `12`)
        .with(new Some(P.any), (some) => `any`)
        .with(None, () => 0)
        .exhaustive()
    ).toBe('12');

    match<Option<number | string>>(new Some(12)).with(
      new Some(P.number),
      (some) => {
        type t = Expect<Equal<typeof some, Some<number>>>;
      }
    );

    match<Option<number | string>>(new Some(12))
      .with(Some, (some) => {
        type t = Expect<Equal<typeof some, Some<number | string>>>;
      })
      .with(None, (none) => {
        type t = Expect<Equal<typeof none, None>>;
      })
      .exhaustive();
  });
});

}


// ----- source: tests/multiple-patterns.test.ts
{

describe('Multiple patterns', () => {
  it('should match if one of the patterns matches', () => {
    const testFn = (input: Option<number>) =>
      match(input)
        .with(
          { kind: 'some', value: 2 as const },
          { kind: 'some', value: 3 as const },
          { kind: 'some', value: 4 as const },
          (x) => {
            type t = Expect<
              Equal<
                typeof x,
                | { kind: 'some'; value: 2 }
                | { kind: 'some'; value: 3 }
                | { kind: 'some'; value: 4 }
              >
            >;
            return true;
          }
        )
        .with({ kind: 'none' }, { kind: 'some' }, (x) => {
          type t = Expect<
            Equal<typeof x, { kind: 'some'; value: number } | { kind: 'none' }>
          >;
          return false;
        })
        .run();

    const cases = [
      { input: { kind: 'some', value: 3 }, expected: true },
      { input: { kind: 'some', value: 2 }, expected: true },
      { input: { kind: 'some', value: 4 }, expected: true },
      { input: { kind: 'some', value: 5 }, expected: false },
      { input: { kind: 'some', value: -5 }, expected: false },
    ] as const;

    cases.forEach(({ input, expected }) => {
      expect(testFn(input)).toBe(expected);
    });
  });

  it('exhaustive patterns should match if one of the patterns matches', () => {
    const testFn = (input: Option<number>) =>
      match(input)
        .with(
          { kind: 'some', value: 2 as const },
          { kind: 'some', value: 3 as const },
          { kind: 'some', value: 4 as const },
          (x) => {
            type t = Expect<
              Equal<
                typeof x,
                | { kind: 'some'; value: 2 }
                | { kind: 'some'; value: 3 }
                | { kind: 'some'; value: 4 }
              >
            >;
            return true;
          }
        )
        .with({ kind: 'none' }, { kind: 'some' }, (x) => {
          type t = Expect<
            Equal<typeof x, { kind: 'some'; value: number } | { kind: 'none' }>
          >;
          return false;
        })
        .exhaustive();

    const cases = [
      { input: { kind: 'some', value: 3 }, expected: true },
      { input: { kind: 'some', value: 2 }, expected: true },
      { input: { kind: 'some', value: 4 }, expected: true },
      { input: { kind: 'some', value: 5 }, expected: false },
      { input: { kind: 'some', value: -5 }, expected: false },
    ] as const;

    cases.forEach(({ input, expected }) => {
      expect(testFn(input)).toBe(expected);
    });
  });

  it("no patterns shouldn't typecheck", () => {
    const input = { kind: 'none' } as Option<number>;
    match(input)
      // @ts-expect-error: Argument of type '() => false' is not assignable to parameter of type 'ExhaustivePattern<Option<number>>'
      .with(() => false);
  });

  it('should work with literal types', () => {
    type Country = 'France' | 'Germany' | 'Spain' | 'USA';

    match<Country>('France')
      .with('France', 'Germany', 'Spain', () => 'Europe')
      .with('USA', () => 'America')
      .exhaustive();

    match<Country>('Germany')
      .with('Germany', 'Spain', () => 'Europe')
      .with('USA', () => 'America')
      // @ts-expect-error: 'France' is missing
      .exhaustive();
  });

  it('should work with nullables', () => {
    match<null | undefined>(null)
      .with(null, undefined, (x) => 'Nullable')
      .exhaustive();
  });

  it('should work with objects', () => {
    match<{ a: string; b: number } | [1, 2]>({ a: '', b: 2 })
      .with({ a: P.string }, (x) => 'obj')
      .with([1, 2], (x) => 'tuple')
      .exhaustive();

    match<{ a: string; b: number } | [1, 2]>({ a: '', b: 2 })
      .with({ a: P.string }, [1, 2], (x) => 'obj')
      .exhaustive();
  });

  it('should work with all types of input', () => {
    type Input =
      | null
      | undefined
      | number
      | string
      | boolean
      | { a: string; b: number }
      | [boolean, number]
      | Map<string, { x: number }>
      | Set<number>;

    const nonExhaustive = (input: Input) =>
      match<Input>(input)
        .with(null, undefined, (x) => {
          type t = Expect<Equal<typeof x, null | undefined>>;
          return 'Nullable';
        })
        .with(P.boolean, P.number, P.string, (x) => {
          type t = Expect<Equal<typeof x, boolean | number | string>>;
          return 'primitive';
        })
        .with(
          { a: P.string },
          [true, 2],
          P.map('key', P._),
          P.set(P.number),
          (x) => {
            type t = Expect<
              Equal<
                typeof x,
                | { a: string; b: number }
                | [true, 2]
                | Map<'key', { x: number }>
                | Set<number>
              >
            >;

            return 'Object';
          }
        )
        .with([false, 2], (x) => {
          type t = Expect<Equal<typeof x, [false, 2]>>;
          return '[false, 2]';
        })
        .with([false, P.number], (x) => {
          type t = Expect<Equal<typeof x, [false, number]>>;
          return '[false, number]';
        })
        .with([true, P.number], (x) => {
          type t = Expect<Equal<typeof x, [true, number]>>;
          return '[true, number]';
        })
        .run();

    const exhaustive = (input: Input) =>
      match<Input>(input)
        .with(null, undefined, (x) => 'Nullable')
        .with(P.boolean, P.number, P.string, (x) => 'primitive')
        .with(
          { a: P.string },
          [true, 2],
          P.map(P.string, P._),
          P.set(P.number),
          (x) => 'Object'
        )
        .with([false, 2], (x) => '[false, 2]')
        .with([false, P.number], (x) => '[false, number]')
        .with([true, P.number], (x) => '[true, number]')
        .exhaustive();

    const cases: { input: Input; expected: string }[] = [
      { input: null, expected: 'Nullable' },
      { input: undefined, expected: 'Nullable' },
      { input: true, expected: 'primitive' },
      { input: 2, expected: 'primitive' },
      { input: 'string', expected: 'primitive' },
      { input: { a: 'hello', b: 2 }, expected: 'Object' },
      { input: [true, 2], expected: 'Object' },
      { input: new Map([['key', { x: 2 }]]), expected: 'Object' },
      { input: new Set([2]), expected: 'Object' },
      { input: [false, 2], expected: '[false, 2]' },
      { input: [false, 3], expected: '[false, number]' },
    ];

    cases.forEach(({ input, expected }) => {
      expect(nonExhaustive(input)).toEqual(expected);
      expect(exhaustive(input)).toEqual(expected);
    });
  });

  it("when 2 returned values don't match, the error should be at the second returned value", () => {
    const f = (input: { t: 'a'; x: any } | { t: 'b' }) =>
      match<typeof input, string>(input)
        .with({ t: 'a', x: 'hello' }, { t: 'a' }, (x) => 'ok')
        // @ts-expect-error
        .with({ t: 'b' }, (x) => 2)
        .run();
  });

  it('issue #74: inference must work on every pattern in the list', () => {
    match<{ a: number[] }>({ a: [1, 2, 3, 4] })
      .with(
        {
          a: P.when((arr) => {
            type t = Expect<Equal<typeof arr, number[]>>;
            return arr.length === 4;
          }),
        },
        {
          a: P.when((arr) => {
            type t = Expect<Equal<typeof arr, number[]>>;
            return arr.length === 4;
          }),
        },
        {
          a: P.when((arr) => {
            type t = Expect<Equal<typeof arr, number[]>>;
            return arr.length === 4;
          }),
        },
        ({ a }) => {}
      )
      .with({ a: P.array(P.number) }, () => {})
      .exhaustive();
  });
});

}


// ----- source: tests/narrow.test.ts
{

describe('P.narrow', () => {
  it('should correctly narrow the input type', () => {
    type Input = ['a' | 'b' | 'c', 'a' | 'b' | 'c'];
    const Pattern = ['a', P.union('a', 'b')] as const;

    type Narrowed = P.narrow<Input, typeof Pattern>;
    //     ^?
    type test = Expect<Equal<Narrowed, ['a', 'a' | 'b']>>;
  });
});

describe('.narrow() method', () => {
  it('should excluded values from deeply nested union types.', () => {
    const fn = (input: { prop?: string }) =>
      match(input)
        .with({ prop: P.nullish.optional() }, () => false)
        .narrow()
        .otherwise(({ prop }) => {
          type test = Expect<Equal<typeof prop, string>>;
          return true;
        });
  });

  const fn2 = (input: { prop?: 1 | 2 | 3 }) =>
    match(input)
      .with({ prop: P.nullish.optional() }, () => false)
      .with({ prop: 2 }, () => false)
      .narrow()
      .otherwise(({ prop }) => {
        type test = Expect<Equal<typeof prop, 1 | 3>>;
        return true;
      });
});

}


// ----- source: tests/nesting.test.ts
{

describe('Nesting', () => {
  describe('deeply nested objects', () => {
    it('should work with 4 levels of object nesting', () => {
      type Post = {
        type: 'post';
        id: number;
        content: { body: string; video: Video };
      };
      type Video = { type: 'video'; id: number; content: { src: string } };

      const res = match<Post>({
        type: 'post',
        id: 2,
        content: {
          body: 'yo',
          video: { type: 'video', content: { src: '' }, id: 2 },
        },
      })
        .with(
          { type: 'post', content: { video: { id: 2, content: { src: '' } } } },
          (x) => {
            type t = Expect<
              Equal<
                typeof x,
                {
                  id: number;
                  type: 'post';
                  content: {
                    body: string;
                    video: {
                      type: 'video';
                      id: 2;
                      content: {
                        src: '';
                      };
                    };
                  };
                }
              >
            >;
            return 1;
          }
        )
        .with(P.any, () => 1)
        .exhaustive();

      type t = Expect<Equal<typeof res, number>>;

      expect(res).toEqual(1);
    });
  });
  describe('objects', () => {
    it('it should work on 2 level', () => {
      expect(
        match({ one: { two: '2', foo: 2, bar: true } })
          .with({ one: { foo: P.any, bar: P.any } }, (x) => x.one.bar)
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 3 level', () => {
      expect(
        match({ one: { two: { three: '2', foo: 2, bar: true } } })
          .with(
            { one: { two: { foo: P.any, bar: P.any } } },
            (x) => x.one.two.bar
          )
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 4 level', () => {
      expect(
        match({ one: { two: { three: { four: '2', foo: 2, bar: true } } } })
          .with(
            { one: { two: { three: { foo: P.any, bar: P.any } } } },
            (x) => x.one.two.three.bar
          )
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 5 level', () => {
      expect(
        match({
          one: { two: { three: { four: { five: '2', foo: 2, bar: true } } } },
        })
          .with(
            { one: { two: { three: { four: { foo: P.any, bar: P.any } } } } },
            (x) => x.one.two.three.four.bar
          )
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 17 level', () => {
      expect(
        match({
          // prettier-ignore
          a: { a: { a: { a: { a: { a: { a: { a: { a: {a: { a: { a: { a: { a: { a: { a: { a: { a: { a: {
            foo: 2,
            bar: true,
          }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, },
        })
          .with(
            {
              // prettier-ignore
              a: { a: { a: { a: { a: { a: { a: { a: { a: {a: { a: { a: { a: { a: { a: { a: { a: { a: { a: {
                foo: P.any,
                bar: P.select('bar'),
              }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, }, },
            },
            (_, x) => x.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.bar
          )
          .exhaustive()
      ).toEqual(true);
    });
  });

  describe('array', () => {
    it('it should work on 2 levels', () => {
      expect(
        match([{ two: '2', foo: 2, bar: true }])
          .with([{ foo: P.any, bar: P.select('bar') }], ({ bar }) => bar)
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 3 levels', () => {
      expect(
        match([[{ two: '2', foo: 2, bar: true }]])
          .with([[{ foo: P.any, bar: P.select('bar') }]], ({ bar }) => bar)
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 4 levels', () => {
      expect(
        match([[[{ two: '2', foo: 2, bar: true }]]])
          .with([[[{ foo: P.any, bar: P.select('bar') }]]], ({ bar }) => bar)
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 5 levels', () => {
      expect(
        match([[[[{ two: '2', foo: 2, bar: true }]]]])
          .with([[[[{ foo: P.any, bar: P.any }]]]], ([[[[{ bar }]]]]) => bar)
          .exhaustive()
      ).toEqual(true);
    });

    it('it should work on 17 levels', () => {
      expect(
        match([
          [[[[[[[[[[[[[[[[[{ two: '2', foo: 2, bar: true }]]]]]]]]]]]]]]]]],
        ] as const)
          .with(
            // prettier-ignore
            [[[[[[[[[[[[[[[[[[{ foo: P.any, bar: P.select('bar') }]]]]]]]]]]]]]]]]]],
            ({ bar }) => bar
          )
          .exhaustive()
      ).toEqual(true);
    });
  });
});

}


// ----- source: tests/not.test.ts
{

describe('not', () => {
  it('should work at the top level', () => {
    const get = (x: unknown): string =>
      match(x)
        .with(P.not(P.number), (x) => {
          type t = Expect<Equal<typeof x, unknown>>;
          return 'not a number';
        })
        .with(P.not(P.string), (x) => {
          type t = Expect<Equal<typeof x, unknown>>;
          return 'not a string';
        })
        .run();

    expect(get(20)).toEqual('not a string');
    expect(get('hello')).toEqual('not a number');
  });

  it('should work in a nested structure', () => {
    type DS = { x: string | number; y: string | number };
    const get = (x: DS) =>
      match(x)
        .with({ y: P.number, x: P.not(P.string) }, (x) => {
          type t = Expect<Equal<typeof x, { x: number; y: number }>>;
          return 'yes';
        })
        .with(P.any, () => 'no')
        .run();

    expect(get({ x: 2, y: 2 })).toEqual('yes');
    expect(get({ y: 2, x: 'hello' })).toEqual('no');
  });

  it('should discriminate union types correctly', () => {
    const one = 'one';
    const two = 'two';

    const get = (x: 'one' | 'two') =>
      match(x)
        .with(P.not(one), (x) => {
          type t = Expect<Equal<typeof x, 'two'>>;
          return 'not 1';
        })
        .with('one', (x) => {
          type t = Expect<Equal<typeof x, 'one'>>;
          return 'not 2';
        })
        .exhaustive();

    expect(get('two')).toEqual('not 1');
    expect(get('one')).toEqual('not 2');
  });

  it('should discriminate union types contained in objects correctly', () => {
    const one = 'one';
    const two = 'two';

    const get = (x: 'one' | 'two') =>
      match({ key: x })
        .with({ key: P.not(one) }, (x) => {
          type t = Expect<Equal<typeof x, { key: 'two' }>>;
          return 'not 1';
        })
        .with({ key: P.not(two) }, (x) => {
          type t = Expect<Equal<typeof x, { key: 'one' }>>;
          return 'not 2';
        })
        .run();

    expect(get('two')).toEqual('not 1');
    expect(get('one')).toEqual('not 2');
  });

  it('should discriminate union types correctly', () => {
    type Input =
      | {
          type: 'success';
        }
      | { type: 'error' };

    const get = (x: Input) =>
      match(x)
        .with({ type: P.not('success') }, (x) => {
          type t = Expect<Equal<typeof x, { type: 'error' }>>;
          return 'error';
        })
        .with({ type: 'success' }, (x) => {
          type t = Expect<Equal<typeof x, { type: 'success' }>>;
          return 'success';
        })
        .exhaustive();

    expect(get({ type: 'error' })).toEqual('error');
    expect(get({ type: 'success' })).toEqual('success');
  });

  it('should correctly invert the type of a Matcher', () => {
    const nullable = P.when(
      (x: unknown): x is null | undefined => x === null || x === undefined
    );

    expect(
      match<{ str: string } | null>({ str: 'hello' })
        .with(P.not(nullable), ({ str }) => str)
        .with(nullable, () => '')
        .exhaustive()
    ).toBe('hello');

    const untypedNullable = P.when(
      (x): boolean => x === null || x === undefined
    );

    expect(
      match<{ str: string }>({ str: 'hello' })
        .with(P.not(untypedNullable), ({ str }) => str)
        // @ts-expect-error
        .exhaustive()
    ).toBe('hello');
  });

  it('should correctly exclude unit types with the unit wildcard', () => {
    expect(
      match<{ str: string | null | undefined }>({ str: 'hello' })
        .with({ str: P.not(P.nullish) }, ({ str }) => {
          type t = Expect<Equal<typeof str, string>>;

          return str;
        })
        .with({ str: P.nullish }, ({ str }) => {
          type t = Expect<Equal<typeof str, null | undefined>>;

          return null;
        })
        .exhaustive()
    ).toBe('hello');
  });

  it("shouldn't change a the type if its any or unknown", () => {
    expect(
      match<{ str: any }>({ str: 'hello' })
        .with({ str: P.not(P.nullish) }, (x) => {
          type t = Expect<Equal<typeof x, { str: any }>>;
          return 'hello';
        })
        .otherwise(() => 'no')
    ).toBe('hello');
  });

  it('should successfully exclude cases ', () => {
    const f = (
      optionalNumber: Option<{
        coords: { x: 'left' | 'right'; y: 'top' | 'bottom' };
      }>
    ) =>
      match(optionalNumber)
        .with(
          {
            type: 'some',
            value: {
              coords: P.not({ x: 'left' }),
            },
          },
          (x) => {
            type t = Expect<
              Equal<
                (typeof x)['value']['coords'],
                {
                  y: 'top' | 'bottom';
                  x: 'right';
                }
              >
            >;

            return 'ok';
          }
        )
        .otherwise(() => 'not ok');
  });

  it('should consider the expression exhaustive if the sub pattern matches something that will never match', () => {
    expect(
      match<{ str: string }>({ str: 'hello' })
        .with(P.not(P.number), ({ str }) => str)
        .exhaustive()
    ).toBe('hello');

    expect(() =>
      match<number>(1)
        .with(P.not(P.number), (n) => n)
        // @ts-expect-error
        .exhaustive()
    ).toThrow();
  });

  it('Doc example', () => {
    type Input =
      | string
      | number
      | boolean
      | { key: string }
      | string[]
      | [number, number];

    const notMatch = (value: Input) =>
      match(value)
        .with(P.not(P.string), (value) => `value is NOT a string: ${value}`)
        .with(P.not(P.number), (value) => `value is NOT a number: ${value}`)
        .with(P.not(P.boolean), (value) => `value is NOT a boolean: ${value}`)
        .exhaustive();

    const inputs: { input: Input; expected: string }[] = [
      { input: 'Hello', expected: 'value is NOT a number: Hello' },
      { input: 20, expected: 'value is NOT a string: 20' },
      { input: true, expected: 'value is NOT a string: true' },
      {
        input: { key: 'value' },
        expected: 'value is NOT a string: [object Object]',
      },
      {
        input: ['bonjour', 'hola'],
        expected: 'value is NOT a string: bonjour,hola',
      },
      { input: [1, 2], expected: 'value is NOT a string: 1,2' },
    ];

    inputs.forEach(({ input, expected }) =>
      expect(notMatch(input)).toEqual(expected)
    );
  });

  it("issue #138 — P.not on literals shouln't exclude the whole primitive type.", () => {
    type Input =
      | { type: 'user'; name: string }
      | { type: 'image'; src: string }
      | { type: 'video'; seconds: number };

    let input = { type: 'user', name: 'Gabriel' } as unknown as Input;

    match(input)
      .with(
        { type: 'video', seconds: P.not(10) },
        () => 'not video of 10 seconds.'
      )
      // This should work
      .with({ type: 'video', seconds: 10 }, () => 'video of 10 seconds.')
      .otherwise(() => 'something else');
  });

  it("shouldn't consider unexhaustive patterns exhaustive", () => {
    const f = (input: { type: 'video'; seconds: number }) =>
      match(input)
        .with(
          // not 10, but still can be any number.
          { type: 'video', seconds: P.not(10) },
          () => 'not video of 10 seconds.'
        )
        // @ts-expect-error
        .exhaustive();
  });

  it('exhaustive should work when P.not is followed by the anti-pattern', () => {
    match<number>(1)
      .with(P.not(P.number), () => 'not 2')
      .with(P.number, () => '2')
      .exhaustive();

    match<1 | 2>(1)
      .with(P.not(2), () => '1')
      .with(2, () => '2')
      .exhaustive();

    match<'a' | 'b' | 'c'>('a')
      .with(P.not('a'), () => '1')
      .with('a', () => '2')
      .exhaustive();

    match<number>(1)
      .with(P.not(2), () => 'not 2')
      .with(2, () => '2')
      // FIXME: Technically, this pattern is exhaustive but I don't see a way to make sure it is
      // without negated types (https://github.com/microsoft/TypeScript/pull/29317).
      // @ts-expect-error
      .exhaustive();
  });
});

}


// ----- source: tests/numbers.test.ts
{

describe('Numbers', () => {
  it('Should match exact numbers', () => {
    const res = match<number>(1)
      .with(1, (v) => {
        type t = Expect<Equal<typeof v, 1>>;
        return v * 2;
      })
      .with(2, (v) => {
        type t = Expect<Equal<typeof v, 2>>;
        return v * v;
      })
      .otherwise(() => -1);

    type t = Expect<Equal<typeof res, number>>;

    expect(res).toEqual(2);
  });

  it('P.number should match NaN', () => {
    const val: number | null = NaN;
    const res = match(val)
      .with(P.nullish, () => 'bad')
      .with(1, () => 'bad')
      .with(P.number, () => 'good')
      .exhaustive();

    expect(res).toEqual('good');
  });

  it('NaN should match NaN specially', () => {
    const val: number | null = NaN;
    const res = match(val)
      .with(P.nullish, () => 'bad')
      .with(1, () => 'bad')
      .with(NaN, () => 'good')
      .with(P.number, () => 'bad')
      .exhaustive();

    expect(res).toEqual('good');
  });

  it("when matching only NaN, the expression shouldn't be exhaustive", () => {
    const f = (val: number) =>
      match(val)
        .with(NaN, () => 'NaN')
        // @ts-expect-error
        .exhaustive();

    const f2 = (val: number) =>
      match(val)
        .with(NaN, () => 'NaN')
        .with(P.number, () => 'number')
        .exhaustive();
  });

  describe('chainable', () => {
    it(`P.number.between(1, 10)`, () => {
      const f = (input: string | number) =>
        match(input)
          .with(P.number.between(0, 10), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'between 0 and 10';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number>>;
            return 'something else';
          });

      expect(f(5)).toBe('between 0 and 10');
      expect(f(0)).toBe('between 0 and 10');
      expect(f(10)).toBe('between 0 and 10');
      expect(f('gabriel')).toBe('something else');
    });

    it(`P.number.lt(..)`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.lt(10), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('yes');
      expect(f(12)).toBe('no');
      expect(f(10n)).toBe('no');
    });
    it(`P.number.gt(..)`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.gt(10), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('no');
      expect(f(10)).toBe('no');
      expect(f(12)).toBe('yes');
    });
    it(`P.number.gte(..)`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.gte(10), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('no');
      expect(f(10)).toBe('yes');
      expect(f(12)).toBe('yes');
    });
    it(`P.number.lte(..)`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.lte(10), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('yes');
      expect(f(10)).toBe('yes');
      expect(f(12)).toBe('no');
    });
    it(`P.number.int(..)`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.int(), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('yes');
      expect(f(10.123)).toBe('no');
      expect(f(-Infinity)).toBe('no');
    });
    it(`P.number.finite()`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.finite(), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('yes');
      expect(f(10.123)).toBe('yes');
      expect(f(-Infinity)).toBe('no');
    });
    it(`P.number.positive()`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.positive(), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('yes');
      expect(f(10.123)).toBe('yes');
      expect(f(-10.123)).toBe('no');
      expect(f(-Infinity)).toBe('no');
    });
    it(`P.number.negative()`, () => {
      const f = (input: string | number | bigint) =>
        match(input)
          .with(P.number.negative(), (value) => {
            type t = Expect<Equal<typeof value, number>>;
            return 'yes';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number | bigint>>;
            return 'no';
          });

      expect(f(5)).toBe('no');
      expect(f(10.123)).toBe('no');
      expect(f(-10.123)).toBe('yes');
      expect(f(-Infinity)).toBe('yes');
    });
  });
});

}


// ----- source: tests/objects.test.ts
{

describe('Objects', () => {
  describe('symbols', () => {
    const symbolA = Symbol('symbol-a');
    const symbolB = Symbol('symbol-b');
    const symbolC = Symbol('symbol-c');
    type Input = { [symbolA]: { [symbolB]: 'foo' | 'bar' } };

    it('should work with symbols', () => {
      const fn1 = (obj: Input) => {
        if (isMatching({ [symbolA]: { [symbolB]: 'foo' } }, obj)) {
          const value = obj[symbolA][symbolB];
          type t = Expect<Equal<typeof value, 'foo'>>;
        } else {
          throw new Error('Expected obj to match the foo pattern!');
        }
      };

      const fn2 = (obj: Input) => {
        if (isMatching({ [symbolA]: { [symbolB]: 'bar' } }, obj)) {
          const value = obj[symbolA][symbolB];
          type t = Expect<Equal<typeof value, 'bar'>>;
          throw new Error('Expected obj to not match the bar pattern!');
        }
      };

      fn1({
        [symbolA]: { [symbolB]: 'foo' },
      });

      fn2({
        [symbolA]: { [symbolB]: 'foo' },
      });
    });

    it('narrowing inference should work', () => {
      const fn1 = (input: Input) => {
        return match(input)
          .with({ [symbolA]: P.select() }, (sel) => {
            type t = Expect<Equal<typeof sel, { [symbolB]: 'foo' | 'bar' }>>;
            return sel;
          })
          .exhaustive();
      };

      expect(fn1({ [symbolA]: { [symbolB]: 'bar' } })).toEqual({
        [symbolB]: 'bar',
      });

      const fn2 = (input: Input | { [symbolC]: string }) => {
        return match(input)
          .with({ [symbolA]: P.any }, (sel) => {
            type t = Expect<Equal<typeof sel, Input>>;
            return sel;
          })
          .with({ [symbolC]: P.select() }, (x) => x)
          .exhaustive();
      };

      expect(fn2({ [symbolC]: 'Hey' })).toEqual('Hey');
    });

    it('exhaustiveness checking should work', () => {
      const fn1 = (input: Input | { [symbolC]: string }) => {
        return match(input)
          .with({ [symbolA]: P.any }, (sel) => {
            type t = Expect<Equal<typeof sel, Input>>;
            return sel;
          })
          .with({ [symbolC]: P.any }, () => '2')
          .exhaustive();
      };

      const fn2 = (input: Input | { [symbolC]: string }) => {
        return (
          match(input)
            .with({ [symbolA]: P.any }, (sel) => {
              type t = Expect<Equal<typeof sel, Input>>;
              return sel;
            })
            // @ts-expect-error
            .exhaustive()
        );
      };
    });
  });
});

describe('Records ({})', () => {
  it('Should match records', () => {
    type Vector1 = { x: number };
    type Vector2 = { x: number; y: number };
    type Vector3 = {
      x: number;
      y: number;
      z: number;
    };
    type Vector = Vector1 | Vector2 | Vector3;

    const vector: Vector = { x: 1 };

    expect(
      match<Vector, string>(vector)
        .with({ x: 1, y: 1, z: 1 }, (x) => {
          type t = Expect<Equal<typeof x, { x: 1; y: 1; z: 1 }>>;
          return 'vector3';
        })
        .with({ x: 2, y: 1 }, (x) => {
          type t = Expect<
            Equal<typeof x, { x: 2; y: 1 } | { z: number; x: 2; y: 1 }>
          >;
          return 'vector2';
        })
        .with({ x: 1 }, (x) => {
          type t = Expect<
            Equal<
              typeof x,
              { x: 1 } | { x: 1; y: number } | { x: 1; y: number; z: number }
            >
          >;
          return 'vector1';
        })
        .otherwise(() => 'no match')
    ).toEqual('vector1');
  });
});

}


// ----- source: tests/optional-props.test.ts
{

describe('optional properties', () => {
  it('matching on optional properties should work', () => {
    type Post = {
      type: 'post';
      id?: number;
      body: string;
    };

    const res = match<Post>({
      type: 'post',
      id: 2,
      body: 'az',
    })
      .with({ type: 'post', id: 2 as const }, (x) => {
        type t = Expect<Equal<typeof x, { type: 'post'; id: 2; body: string }>>;
        return 100;
      })
      .with({ type: 'post', id: P.number }, (x) => {
        type t = Expect<
          Equal<typeof x, { type: 'post'; id: number; body: string }>
        >;
        return 10;
      })
      .with({ type: 'post' }, (x) => {
        type t = Expect<Equal<typeof x, Post>>;
        // id is still nullable
        x.id = undefined;
        return 1;
      })
      .run();

    expect(res).toEqual(100);
  });

  it('should correctly narrow the input type when the input is assignable to the pattern type', () => {
    type Foo =
      | { type: 'test'; id?: string }
      | { type: 'test2'; id?: string; otherProp: string }
      | { type: 'test3'; id?: string; otherProp?: string };

    const f = (foo: Foo) =>
      match(foo)
        .with({ type: 'test', id: P.not(undefined) }, ({ id }) => {
          type t = Expect<Equal<typeof id, string>>;
          return 0;
        })

        .with({ type: 'test' }, ({ id }) => {
          type t = Expect<Equal<typeof id, string | undefined>>;
          return 1;
        })

        .with({ type: 'test2' }, ({ id }) => {
          type t = Expect<Equal<typeof id, string | undefined>>;
          return 2;
        })
        .with({ type: 'test3' }, ({ id }) => {
          type t = Expect<Equal<typeof id, string | undefined>>;
          return 3;
        })
        .exhaustive();

    expect(f({ type: 'test', id: '1' })).toEqual(0);
    expect(f({ type: 'test' })).toEqual(1);
    expect(f({ type: 'test2', otherProp: '' })).toEqual(2);
    expect(f({ type: 'test3' })).toEqual(3);
  });

  it('issue #142: When pattern matching on an optional property, other optional properties should remain on the object', () => {
    enum SomeEnum {
      Foo = 'Foo',
      Bar = 'Bar',
    }

    type SomeObject = {
      a?: SomeEnum;
      b?: string;
      c?: boolean;
    };

    const input = {
      a: SomeEnum.Foo,
      b: 'not important',
    } as SomeObject;

    const result = match(input)
      .with({ a: SomeEnum.Foo }, (value) => {
        type t = Expect<
          Equal<
            typeof value,
            {
              a: SomeEnum.Foo;
              b?: string | undefined;
              c?: boolean | undefined;
            }
          >
        >;
        return `Foo: ${value.b}`;
      })
      .with({ a: SomeEnum.Bar }, (value) => `Bar: ${value.b}`)
      .with({ a: P.optional(undefined) }, (value) => `<undefined>: ${value.b}`)
      .exhaustive();

    expect(result).toEqual(`Foo: not important`);
  });
});

}


// ----- source: tests/optional.test.ts
{

describe('optional', () => {
  it('should match even if the sub pattern is undefined', () => {
    type Input = { a?: 'cool' } | { b: 'lol' };

    const f = (input: Input) =>
      match(input)
        .with({ b: 'lol' }, (x) => {
          return false;
        })
        .with({ a: P.optional('cool') }, (x) => {
          type t = Expect<Equal<typeof x, { a?: 'cool' | undefined }>>;
          return true;
        })
        .exhaustive();

    expect(f({})).toBe(true);
    expect(f({ a: 'cool' })).toBe(true);
    expect(f({ b: 'lol' })).toBe(false);
  });

  it('should support a nested pattern', () => {
    type Input = { a?: { name: string; age: number } } | { b: '' };

    const f = (input: Input) =>
      match<Input>(input)
        .with({ a: P.optional({ name: 'Hello' }) }, (x) => {
          type t = Expect<
            Equal<typeof x, { a?: { name: 'Hello'; age: number } }>
          >;
          return true;
        })
        .with({ b: P.string }, (x) => {
          return false;
        })
        .with({ a: { name: P.string } }, () => false)
        .exhaustive();

    // Not Hello
    expect(f({ a: { name: 'Bonjour', age: 20 } })).toBe(false);
    expect(f({ a: { name: 'Hello', age: 20 } })).toBe(true);
    expect(f({})).toBe(true);
  });

  it('should support anonymous select', () => {
    type Input =
      | { type: 'a'; a?: { name: string; age: number } }
      | { type: 'b'; b?: 'test' };

    const input = { type: 'b' } as Input;

    match(input).with(
      { type: 'a', a: P.optional({ name: P.select() }) },
      (x) => {
        type t = Expect<Equal<typeof x, string | undefined>>;
        return x;
      }
    );

    match(input).with({ type: 'a', a: P.select().optional() }, (x) => {
      type t = Expect<
        Equal<typeof x, { name: string; age: number } | undefined>
      >;
      return x;
    });

    match(input).with(
      { type: 'b', b: P.select(P.optional(P.union('test'))) },
      (x) => {
        type t = Expect<Equal<typeof x, 'test' | undefined>>;
        return x;
      }
    );

    match(input).with({ a: P.not(undefined) }, (x) => {
      type t = Expect<
        Equal<
          typeof x,
          {
            type: 'a';
            a: {
              name: string;
              age: number;
            };
          }
        >
      >;
      return '1';
    });

    const f = (input: Input) =>
      match(input)
        .with({ type: 'a', a: P.optional({ name: P.select() }) }, (x) => {
          type t = Expect<Equal<typeof x, string | undefined>>;
          return x;
        })
        .with({ type: 'b', b: P.optional(P.select(P.union('test'))) }, (x) => {
          type t = Expect<Equal<typeof x, 'test' | undefined>>;
          return x;
        })
        .exhaustive();

    expect(f({ type: 'a' })).toBe(undefined);
    expect(f({ type: 'b', b: 'test' })).toBe('test');
  });

  it('should support named select', () => {
    type Input = { a?: { name: string; age: number } } | { b: 'b' };

    expect(
      match<Input>({})
        .with(
          {
            a: P.optional({ name: P.select('name'), age: P.select('age') }),
          },
          ({ name, age }) => {
            type t1 = Expect<Equal<typeof name, string | undefined>>;
            type t2 = Expect<Equal<typeof age, number | undefined>>;
            return name;
          }
        )
        .with({ b: 'b' }, (x) => {
          return '1';
        })
        .exhaustive()
    ).toBe(undefined);
  });

  it('should support named select', () => {
    type Input =
      | {
          type: 'a';
          data?: { type: 'img'; src: string } | { type: 'text'; p: string };
        }
      | {
          type: 'b';
          data?: { type: 'video'; src: number } | { type: 'gif'; p: string };
        };

    expect(
      match<Input>({ type: 'a', data: { type: 'text', p: 'paragraph' } })
        .with(
          {
            type: 'a',
            data: P.optional({ type: 'img' }),
          },
          (x) => {
            type t = Expect<
              Equal<
                typeof x,
                { type: 'a'; data?: { type: 'img'; src: string } | undefined }
              >
            >;

            return x;
          }
        )
        .with(
          {
            type: 'a',
            data: P.optional({ type: 'text', p: P.select('p') }),
          },
          (x) => {
            type t = Expect<Equal<typeof x, { p: string | undefined }>>;
            return x.p;
          }
        )
        .with(
          {
            type: 'b',
            data: P.optional({ type: 'video', src: P.select('src') }),
          },
          ({ src }) => {
            type t = Expect<Equal<typeof src, number | undefined>>;
            return src;
          }
        )
        .with(
          {
            type: 'b',
            data: P.optional({ type: 'gif', p: P.select('p') }),
          },
          ({ p }) => {
            type t = Expect<Equal<typeof p, string | undefined>>;
            return p;
          }
        )
        .exhaustive()
    ).toBe('paragraph');
  });

  it('should support list patterns', () => {
    type Input = { maybeList?: { text: string }[] };

    const f = (input: Input) =>
      match(input)
        .with({ maybeList: P.optional(P.array({ text: P.select() })) }, (x) => {
          type t = Expect<Equal<typeof x, string[] | undefined>>;
          return x;
        })
        .exhaustive();

    expect(f({})).toBe(undefined);
    expect(f({ maybeList: [{ text: 'Hello' }, { text: 'Bonjour' }] })).toEqual([
      'Hello',
      'Bonjour',
    ]);
  });
});

}


// ----- source: tests/otherwise.test.ts
{

describe('otherwise', () => {
  it('should pass matched value to otherwise', () => {
    const result = match<number>(42)
      .with(51, (d) => d)
      .otherwise((d) => d);
    expect(result).toBe(42);
  });
});

}


// ----- source: tests/output-type.test.ts
{

describe('output type', () => {
  describe('exhaustive', () => {
    it('should return a single type if they are all compatible', () => {
      const f = (input: number) =>
        match(input)
          .with(1, () => 'ok')
          .with(2, () => 'test')
          .with(P._, () => 'hello')
          .exhaustive();

      type o1 = Expect<Equal<ReturnType<typeof f>, string>>;

      const f2 = (input: number) =>
        match(input)
          .with(1, () => ({ x: 'ok' }))
          .with(2, () => ({ x: 'test' }))
          .with(P._, () => ({ x: 'hello' }))
          .exhaustive();

      type o2 = Expect<Equal<ReturnType<typeof f2>, { x: string }>>;

      const f3 = (input: number) =>
        match(input)
          .with(1, () => [1, 2, null])
          .with(3, () => [1, 2])
          .with(P._, () => [null, null])
          .exhaustive();

      type o3 = Expect<Equal<ReturnType<typeof f3>, (number | null)[]>>;
    });

    it('if the current inferred output is assignable to the new output, just pick the broader one', () => {
      const f1 = (input: number) =>
        match(input)
          .with(1, () => [1, 2])
          .with(P._, () => [1, 2, null])
          .exhaustive();

      type o1 = Expect<Equal<ReturnType<typeof f1>, (number | null)[]>>;
    });

    it('It should still be possible specify a precise output type', () => {
      const f1 = (input: number) =>
        match<number, State>(input)
          .with(P._, () => ({ status: 'idle' }))
          // @ts-expect-error
          .with(1, () => [1, 2])
          // @ts-expect-error
          .with(P._, () => [1, 2, null])
          .exhaustive();

      type o1 = Expect<Equal<ReturnType<typeof f1>, State>>;
    });
  });

  describe('run', () => {
    it('should return a single type if they are all compatible', () => {
      const f = (input: number) =>
        match(input)
          .with(1, () => 'ok')
          .with(2, () => 'test')
          .with(P._, () => 'hello')
          .run();

      type o1 = Expect<Equal<ReturnType<typeof f>, string>>;

      const f2 = (input: number) =>
        match(input)
          .with(1, () => ({ x: 'ok' }))
          .with(2, () => ({ x: 'test' }))
          .with(P._, () => ({ x: 'hello' }))
          .run();

      type o2 = Expect<Equal<ReturnType<typeof f2>, { x: string }>>;

      const f3 = (input: number) =>
        match(input)
          .with(1, () => [1, 2, null])
          .with(3, () => [1, 2])
          .with(P._, () => [null, null])
          .run();

      type o3 = Expect<Equal<ReturnType<typeof f3>, (number | null)[]>>;
    });

    it('if the current inferred output is assignable to the new output, just pick the broader one', () => {
      const f1 = (input: number) =>
        match(input)
          .with(1, () => [1, 2])
          .with(P._, () => [1, 2, null])
          .run();

      type o1 = Expect<Equal<ReturnType<typeof f1>, (number | null)[]>>;
    });

    it('It should still be possible specify a precise output type', () => {
      const f1 = (input: number) =>
        match<number, State>(input)
          .with(P._, () => ({ status: 'idle' }))
          // @ts-expect-error
          .with(1, () => [1, 2])
          // @ts-expect-error
          .with(P._, () => [1, 2, null])
          .run();

      type o1 = Expect<Equal<ReturnType<typeof f1>, State>>;
    });
  });

  describe('otherwise', () => {
    it('should return a single type if they are all compatible', () => {
      const f = (input: number) =>
        match(input)
          .with(1, () => 'ok')
          .with(2, () => 'test')
          .with(P._, () => 'hello')
          .otherwise(() => '');

      type o1 = Expect<Equal<ReturnType<typeof f>, string>>;

      const f2 = (input: number) =>
        match(input)
          .with(1, () => ({ x: 'ok' }))
          .with(2, () => ({ x: 'test' }))
          .with(P._, () => ({ x: 'hello' }))
          .otherwise(() => ({ x: '' }));

      type o2 = Expect<Equal<ReturnType<typeof f2>, { x: string }>>;

      const f3 = (input: number) =>
        match(input)
          .with(1, () => [1, 2, null])
          .with(3, () => [1, 2])
          .with(P._, () => [null, null])
          .otherwise(() => [0]);

      type o3 = Expect<Equal<ReturnType<typeof f3>, (number | null)[]>>;
    });

    it('if the current inferred output is assignable to the new output, just pick the broader one', () => {
      const f1 = (input: number) =>
        match(input)
          .with(1, () => [1, 2])
          .with(P._, () => [1, 2, null])
          .otherwise(() => [0]);

      type o1 = Expect<Equal<ReturnType<typeof f1>, (number | null)[]>>;
    });

    it('It should still be possible specify a precise output type', () => {
      const f1 = (input: number) =>
        match<number, State>(input)
          .with(P._, () => ({ status: 'idle' }))
          // @ts-expect-error
          .with(1, () => [1, 2])
          // @ts-expect-error
          .with(P._, () => [1, 2, null])
          .otherwise(() => ({ status: 'idle' }));

      type o1 = Expect<Equal<ReturnType<typeof f1>, State>>;
    });
  });
});

}


// ----- source: tests/pattern.test.ts
{

type ExtendsPattern<a, p extends P.Pattern<a>> = true;

describe('Pattern', () => {
  it("shouldn't allow invalid patterns", () => {
    type cases = [
      ExtendsPattern<
        { type: 'a'; x: { y: string } } | { type: 'b' },
        { type: 'a'; x: { y: Matcher<unknown, string> } }
      >
    ];
  });

  it('Should return a single object pattern when the input is a union of objects', () => {
    type res1 = P.Pattern<{ kind: 'some'; value: number } | { kind: 'none' }>;

    type test1 = Expect<
      Equal<
        res1,
        | Matcher<
            { kind: 'some'; value: number } | { kind: 'none' },
            unknown,
            any,
            any,
            unknown
          >
        | {
            readonly kind?: P.Pattern<'some' | 'none'>;
            readonly value?: P.Pattern<number>;
          }
      >
    >;
  });

  it('Should return a single object pattern when the input is a union of objects and other types', () => {
    type t = P.Pattern<
      { kind: 'some'; value: number } | { kind: 'none' } | string
    >;

    type t1 = Expect<
      Equal<
        P.Pattern<{ kind: 'some'; value: number } | { kind: 'none' } | string>,
        | Matcher<
            string | { kind: 'some'; value: number } | { kind: 'none' },
            unknown,
            any,
            any,
            unknown
          >
        | {
            readonly kind?: P.Pattern<'some' | 'none'>;
            readonly value?: P.Pattern<number>;
          }
        | string
      >
    >;

    type t2 = Expect<
      Equal<
        P.Pattern<{ a?: { name: string; age: number } } | { b: '' }>,
        | Matcher<
            { a?: { name: string; age: number } } | { b: '' },
            unknown,
            any,
            any,
            unknown
          >
        | {
            readonly a?: P.Pattern<{ name: string; age: number }>;
            readonly b?: P.Pattern<''>;
          }
      >
    >;
    type t3 = Expect<
      Equal<
        P.Pattern<{ name: string; age: number } | undefined>,
        | Matcher<
            { name: string; age: number } | undefined,
            unknown,
            any,
            any,
            unknown
          >
        | {
            readonly name?: P.Pattern<string>;
            readonly age?: P.Pattern<number>;
          }
        | undefined
      >
    >;

    type res4 = P.Pattern<{ name: string; age: number } | [type: 'Hello']>;

    type t4 = Expect<
      Equal<
        res4,
        | Matcher<
            { name: string; age: number } | [type: 'Hello'],
            unknown,
            any,
            any,
            unknown
          >
        | {
            readonly name?: P.Pattern<string>;
            readonly age?: P.Pattern<number>;
          }
        | readonly [type: P.Pattern<'Hello'>]
      >
    >;
  });
});

}


// ----- source: tests/primitive-values.test.ts
{

describe('Primitive values', () => {
  it('patterns can be any literal value', () => {
    const x = 2 as unknown;

    expect(
      match(x)
        .with(true, (x) => {
          type t = Expect<Equal<typeof x, true>>;
          return 'true';
        })
        .with(false, (x) => {
          type t = Expect<Equal<typeof x, false>>;
          return 'false';
        })
        .with(null, (x) => {
          type t = Expect<Equal<typeof x, null>>;
          return 'null';
        })
        .with(undefined, (x) => {
          type t = Expect<Equal<typeof x, undefined>>;
          return 'undefined';
        })
        .with(Symbol.for('Hello'), (x) => {
          type t = Expect<Equal<typeof x, symbol>>;
          return 'Symbol';
        })
        .with('hello', (x) => {
          type t = Expect<Equal<typeof x, 'hello'>>;
          return 'hello';
        })
        .with(1, (x) => {
          type t = Expect<Equal<typeof x, 1>>;
          return '1';
        })
        .with(BigInt(2000), (x) => {
          type t = Expect<Equal<typeof x, bigint>>;
          return 'BigInt(2000)';
        })
        .with(2, (x) => {
          type t = Expect<Equal<typeof x, 2>>;
          return '2';
        })
        .otherwise(() => '?')
    ).toEqual('2');
  });

  it('primitive patterns should correctly narrow the value', () => {
    const f = (x: unknown) =>
      match(x)
        .with(P.boolean, (x) => {
          type t = Expect<Equal<typeof x, boolean>>;
          return 'boolean';
        })
        .with(P.nullish, (x) => {
          type t = Expect<Equal<typeof x, null | undefined>>;
          return 'nullish';
        })
        .with(P.symbol, (x) => {
          type t = Expect<Equal<typeof x, symbol>>;
          return 'symbol';
        })
        .with(P.string, (x) => {
          type t = Expect<Equal<typeof x, string>>;
          return 'string';
        })
        .with(P.number, (x) => {
          type t = Expect<Equal<typeof x, number>>;
          return 'number';
        })
        .with(P.bigint, (x) => {
          type t = Expect<Equal<typeof x, bigint>>;
          return 'bigint';
        })
        .otherwise(() => '?');

    expect(f(true)).toEqual('boolean');
    expect(f(null)).toEqual('nullish');
    expect(f(Symbol('hello'))).toEqual('symbol');
    expect(f('hello')).toEqual('string');
    expect(f(20)).toEqual('number');
    expect(f(BigInt(100))).toEqual('bigint');
  });
});

}


// ----- source: tests/readonly.test.ts
{

describe('readonly', () => {
  describe('exhaustive', () => {
    it('tuples', () => {
      const f = (input: readonly ['a' | 'b', 'c' | 'd']) =>
        match(input)
          .with(['a', 'c'], (x) => {
            type t = Expect<Equal<typeof x, readonly ['a', 'c']>>;
            return 'ok';
          })
          .with(['a', 'd'], (x) => {
            type t = Expect<Equal<typeof x, readonly ['a', 'd']>>;
            return 'ok';
          })
          .with(['b', 'c'], (x) => {
            type t = Expect<Equal<typeof x, readonly ['b', 'c']>>;
            return 'ok';
          })
          .with(['b', 'd'], (x) => {
            type t = Expect<Equal<typeof x, readonly ['b', 'd']>>;
            return 'ok';
          })
          .exhaustive();
    });

    it('objects', () => {
      const f = (
        input: Readonly<{ t: 'a'; x: number }> | Readonly<{ t: 'b'; x: string }>
      ) =>
        match(input)
          .with({ t: 'a' }, (x) => {
            type t = Expect<Equal<typeof x, Readonly<{ t: 'a'; x: number }>>>;
            return 'ok';
          })
          .with({ t: 'b' }, (x) => {
            type t = Expect<Equal<typeof x, Readonly<{ t: 'b'; x: string }>>>;
            return 'ok';
          })
          .exhaustive();
    });

    it('mixed', () => {
      const f = (
        input:
          | Readonly<{ t: 'a'; x: readonly [number, string, 2] }>
          | Readonly<{ t: 'b'; x: string }>
      ) =>
        match(input)
          .with({ t: 'a', x: [2, 'hello', 2] }, (x) => {
            type t = Expect<Equal<typeof x, { t: 'a'; x: [2, 'hello', 2] }>>;
            return 'ok';
          })
          .with({ t: 'a', x: [2, 'hello', 2] as const }, (x) => {
            type t = Expect<Equal<typeof x, { t: 'a'; x: [2, 'hello', 2] }>>;
            return 'ok';
          })
          .with({ t: 'a' }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                Readonly<{ t: 'a'; x: readonly [number, string, 2] }>
              >
            >;
            return 'ok';
          })
          .with({ t: 'b' }, (x) => {
            type t = Expect<Equal<typeof x, Readonly<{ t: 'b'; x: string }>>>;
            return 'ok';
          })
          .exhaustive();
    });

    it('must support exhaustive matching on readonly arrays', () => {
      const sum = (xs: readonly number[]): number =>
        match(xs)
          .with([], (x) => {
            type t = Expect<Equal<typeof x, readonly []>>;
            return 0;
          })
          .with([P._, ...P.array()], ([x, ...xs]) => x + sum(xs))
          .exhaustive();
    });
  });
});

}


// ----- source: tests/real-world.test.ts
{

describe('real world example of a complex input type', () => {
  const f = (def: Definition) =>
    match(def)
      .with(
        {
          viz: 'timeseries',
          requests: P.array({
            queries: P.array(
              P.union({ data_source: 'metrics', query: P.select() }, P.any)
            ),
          }),
        },
        (metricQueries) => {
          type t = Expect<
            Equal<typeof metricQueries, (string | undefined)[][]>
          >;
          return [`timeseries with metrics queries:`, metricQueries];
        }
      )
      .with(
        {
          requests: [{ sql_query: P.select() }],
          viz: 'wildcard',
          specification: {
            type: 'vega',
          },
        },
        (q) => {
          type t = Expect<Equal<typeof q, string>>;

          return 'vega wildcard with sql_query: ' + q;
        }
      )
      .with(
        {
          requests: P.array(
            P.intersection(
              P.union(
                { response_format: 'timeseries' },
                { response_format: 'scalar' }
              ),
              {
                queries: P.array({ data_source: P.union('metrics', 'events') }),
              }
            )
          ),
        },
        (x) => {
          const format = x.requests[0]?.response_format;
          const dataSource = x.requests[0]?.queries[0]?.data_source;
          type t = Expect<Equal<typeof format, 'timeseries' | 'scalar'>>;
          type t2 = Expect<Equal<typeof dataSource, 'metrics' | 'events'>>;

          return [format, dataSource];
        }
      )
      .with(
        {
          viz: P.union('timeseries', 'query_table'),
          requests: [
            {
              // This works
              queries: P.array({ data_source: P.union('metrics', 'events') }),
              response_format: P.union('timeseries', 'scalar'),
            },
          ],
        },
        (x) => {}
      )
      .with(
        {
          viz: P.union('timeseries', 'query_table'),
          requests: P.array({
            response_format: P.union('timeseries', 'scalar'),
          }),
        },
        () => 'formulas requests'
      )
      .with(
        {
          requests: P.array({ response_format: 'scalar' }),
        },
        () => 'formulas requests'
      )
      .with(
        {
          requests: P.array({ response_format: 'timeseries' }),
        },
        () => 'formulas requests'
      )
      .with(
        {
          requests: [{ response_format: P.union('timeseries', 'scalar') }],
        },
        () => 'formulas requests'
      )
      .with(
        { style: P.optional({ palette_flip: true }) },
        (withPalette) => withPalette.viz
      )
      .with(
        { requests: P.array({ sql_query: P.select() }) },
        (queries) => queries
      )
      .with(
        { viz: 'geomap', requests: P.array({ response_format: P.select() }) },
        (scalars) => scalars
      )
      .with(
        {
          viz: P.union(
            'geomap',
            'timeseries',
            'heatmap',
            'scatterplot',
            'query_table'
          ),
        },
        () => ''
      )
      .with(
        { viz: 'servicemap' },
        { viz: 'distribution' },
        { viz: 'treemap' },
        { viz: 'toplist' },
        () => ''
      )
      .exhaustive();

  it('should return the correct output', () => {
    expect(
      f({
        viz: 'wildcard',
        requests: [
          {
            sql_query: 'SELECT *',
            request_type: 'sql',
            response_format: 'scalar',
          },
        ],
        specification: {
          type: 'vega',
          contents: { something: 'cool' },
        },
      })
    ).toBe('vega wildcard with sql_query: SELECT *');

    expect(
      f({
        viz: 'wildcard',
        requests: [
          {
            sql_query: 'SELECT *',
            request_type: 'sql',
            response_format: 'scalar',
          },
        ],
        specification: {
          type: 'vega',
          contents: { something: 'cool' },
        },
      })
    ).toBe('vega wildcard with sql_query: SELECT *');

    expect(
      f({
        viz: 'timeseries',
        requests: [
          {
            response_format: 'timeseries',
            queries: [
              {
                name: 'a',
                data_source: 'metrics',
                query: 'a',
              },
              {
                name: 'b',
                data_source: 'metrics',
                query: 'b',
              },
              {
                name: 'c',
                data_source: 'logs',
                compute: { aggregation: 'avg' },
              },
            ],
          },
          {
            response_format: 'timeseries',
            queries: [
              {
                name: 'd',
                data_source: 'metrics',
                query: 'd',
              },
            ],
          },
        ],
      })
    ).toEqual([
      'timeseries with metrics queries:',
      [['a', 'b', undefined], ['d']],
    ]);
  });
});

}


// ----- source: tests/record.test.ts
{

describe('P.record', () => {
  it('should match any object when called with P.unknown', () => {
    const input = { a: 1, b: 2 };

    const result = match(input)
      .with(P.record(P.unknown), () => 'matched object')
      .otherwise(() => 'no match');

    expect(result).toEqual('matched object');
  });

  it('should match empty objects', () => {
    const input = {};

    const result = match(input)
      .with(P.record(P.string, P.number), () => 'matched')
      .otherwise(() => 'no match');

    expect(result).toEqual('matched');
  });

  it('should match Record<string, number> patterns', () => {
    const userScores = {
      alice: 100,
      bob: 85,
      charlie: 92,
    };

    const result = match<Record<string, number>>(userScores)
      .with(P.record(P.string, P.number), (scores) => {
        return 'all string keys with number values';
      })
      .otherwise(() => 'no match');

    expect(result).toEqual('all string keys with number values');
  });

  it('should not match objects with incorrect key types', () => {
    const mixedKeys: Record<string | number, string> = {
      alice: 'developer',
      [Symbol.for('answer')]: 'answer',
    };

    const result = match(mixedKeys)
      .with(P.record(P.string, P.string), () => 'string keys only')
      .with(P.record(P.union(P.string, P.symbol), P.string), () => 'mixed keys')
      .otherwise(() => 'no match');

    expect(result).toEqual('mixed keys');
  });

  it('should not match objects with incorrect value types', () => {
    const mixedValues = {
      a: 'string',
      b: 42,
      c: true,
    };

    const result = match(mixedValues)
      .with(P.record(P.string, P.string), () => 'string values only')
      .with(
        P.record(P.string, P.union(P.string, P.number, P.boolean)),
        () => 'mixed values'
      )
      .otherwise(() => 'no match');

    expect(result).toEqual('mixed values');
  });

  it('should work with complex value patterns', () => {
    const userProfiles: unknown = {
      alice: { name: 'Alice', age: 25, active: true },
      bob: { name: 'Bob', age: 30, active: false },
    };

    const result = match(userProfiles)
      .with(
        P.record(P.string, {
          name: P.string,
          age: P.number,
          active: P.boolean,
        }),
        (profiles) => {
          type t = Expect<
            Equal<
              typeof profiles,
              Record<string, { name: string; age: number; active: boolean }>
            >
          >;
          return 'user profiles';
        }
      )
      .otherwise(() => 'no match');

    expect(result).toEqual('user profiles');
  });

  it('should support basic selection patterns', () => {
    const data = {
      user1: { name: 'Alice' },
      user2: { name: 'Bob' },
    };

    const result = match<Record<string, { name: string }>>(data)
      .with(P.record(P.string, { name: P.string }), (records) => {
        type t = Expect<
          Equal<typeof records, Record<string, { name: string }>>
        >;
        return 'matched user records';
      })
      .otherwise(() => 'no match');

    expect(result).toEqual('matched user records');
  });

  it('should not match null', () => {
    const result = match(null)
      .with(P.record(P.string, P.number), () => 'matched')
      .otherwise(() => 'no match');

    expect(result).toEqual('no match');
  });

  it('should not match arrays', () => {
    const result = match(['a', 'b'])
      .with(P.record(P.string, P.string), () => 'matched')
      .otherwise(() => 'no match');

    expect(result).toEqual('no match');
  });

  it('should not match primitives', () => {
    const result = match('string')
      .with(P.record(P.string, P.string), () => 'matched')
      .otherwise(() => 'no match');

    expect(result).toEqual('no match');
  });

  it('should not match objects with incorrect value types', () => {
    const result = match({ a: 1, b: 2 })
      .with(P.record(P.union(1, 2), P.number), () => 'matched')
      .otherwise(() => 'no match');

    expect(result).toEqual('no match');

    const result2 = match({ a: 1, b: 2 })
      .with(P.record(P.number, P.number), () => 'matched')
      .otherwise(() => 'no match');

    expect(result2).toEqual('no match');
  });

  it('should work with P.record().optional()', () => {
    type Data = {
      records?: Record<string, number>;
    };

    const data1: Data = { records: { a: 1, b: 2 } };
    const data2: Data = {};

    const matchResult = (input: Data) =>
      match(input)
        .with({ records: P.record(P.string, P.number).optional() }, (x) => {
          type t = Expect<Equal<typeof x, Data>>;
          return 'has records';
        })
        .otherwise(() => 'no records');

    expect(matchResult(data1)).toEqual('has records');
    expect(matchResult(data2)).toEqual('has records');
  });

  it('should work with numeric keys', () => {
    const numericRecord: Record<number, string> = {
      1: 'one',
      2: 'two',
      3: 'three',
    };

    const result = match(numericRecord)
      .with(P.record(P.number, P.string), (value) => {
        type t = Expect<Equal<typeof value, Record<number, string>>>;
        return 'numeric keys';
      })
      .otherwise(() => 'no match');

    expect(result).toEqual('numeric keys');
  });

  it('should throw error when given only one argument', () => {
    expect(() => {
      // Create a matcher that expects key and value but only gets key
      const result = match({ a: 1 }).with(P.record(P.unknown), (value) => {
        type t = Expect<Equal<typeof value, { readonly a: 1 }>>;
        return 'matched';
      });
      return result;
    }).toBeDefined(); // Just check this doesn't crash the compilation
  });

  it('should work with chaining methods', () => {
    type OptionalRecord = {
      data?: Record<string, number>;
    };

    const input1: OptionalRecord = { data: { a: 1, b: 2 } };
    const input2: OptionalRecord = {};

    const matchResult = (input: OptionalRecord) =>
      match(input)
        .with(
          { data: P.record(P.string, P.union(1, 2)).optional() },
          (value) => {
            type t = Expect<
              Equal<typeof value, { data?: Record<string, 1 | 2> }>
            >;
            return 'has data';
          }
        )
        .otherwise(() => 'no data');

    expect(matchResult(input1)).toEqual('has data');
    expect(matchResult(input2)).toEqual('has data');
  });

  it('should handle complex nested patterns', () => {
    const nestedData: unknown = {
      users: {
        alice: { profile: { name: 'Alice', age: 25 }, active: true },
        bob: { profile: { name: 'Bob', age: 30 }, active: false },
      },
    };

    const result = match(nestedData)
      .with(
        {
          users: P.record(P.string, {
            profile: { name: P.string, age: P.number },
            active: P.boolean,
          }),
        },
        (value) => {
          type t = Expect<
            Equal<
              typeof value,
              {
                users: Record<
                  string,
                  { profile: { name: string; age: number }; active: boolean }
                >;
              }
            >
          >;
          return 'complex nested match';
        }
      )
      .otherwise(() => 'no match');

    expect(result).toEqual('complex nested match');
  });

  it('should support symbol keys', () => {
    const f = (input: unknown) =>
      match(input)
        .with(P.record(P.symbol, P.number), (value) => {
          type t = Expect<Equal<typeof value, Record<symbol, number>>>;
          return 'matched';
        })
        .otherwise(() => 'no match');

    expect(f({ a: 1, b: 2 })).toEqual('no match');
    expect(f({ [Symbol('a')]: 1, [Symbol('b')]: 2 })).toEqual('matched');
  });

  it('should be chainable', () => {
    type Input = { key?: Record<string, number> };
    const input: Input = { key: { a: 1, b: 2 } };
    const result = match(input)
      .with(
        { key: P.record(P.string, P.number).optional().select() },
        (value) => {
          type t = Expect<
            Equal<typeof value, Record<string, number> | undefined>
          >;
          return 'matched';
        }
      )
      .otherwise(() => 'no match');

    expect(result).toEqual('matched');
  });

  describe('numeric keys', () => {
    it('should match numeric keys', () => {
      const input: unknown = { 1: 'one', 2: 'two', 3: 'three' };
      const result = match(input)
        .with(P.record(P.number, P.string), (value) => {
          type t = Expect<Equal<typeof value, Record<number, string>>>;
          return 'matched';
        })
        .otherwise(() => 'no match');
      expect(result).toEqual('matched');
    });

    it('should match with number literals', () => {
      const input: unknown = { 1: 'one' };
      const result = match(input)
        .with(P.record(1, P.string), (value) => {
          type t = Expect<Equal<typeof value, Record<1, string>>>;
          return 'matched';
        })
        .otherwise(() => 'no match');
      expect(result).toEqual('matched');
    });

    it('should match with unions of number literals', () => {
      const input: unknown = { 1: 'one', 2: 'two' };
      const result = match(input)
        .with(P.record(P.union(1, 2), P.string), (value) => {
          type t = Expect<Equal<typeof value, Record<1 | 2, string>>>;
          return 'matched';
        })
        .otherwise(() => 'no match');
      expect(result).toEqual('matched');
    });

    it('P.string should also match numeric keys', () => {
      const input: unknown = { 1: 'one', 2: 'two' };
      const result = match(input)
        .with(P.record(P.string, P.string), (value) => {
          type t = Expect<Equal<typeof value, Record<string, string>>>;
          return 'matched';
        })
        .otherwise(() => 'no match');
      expect(result).toEqual('matched');
    });
  });

  describe('select', () => {
    it('should select all keys as an array when select is used in the key position', () => {
      const input: unknown = { a: 1, b: 2 };
      const result = match(input)
        .with(P.record(P.string.select(), P.number), (value) => {
          type t = Expect<Equal<typeof value, string[]>>;
          return value;
        })
        .otherwise(() => 'no match');

      expect(result).toEqual(['a', 'b']);
    });

    it('should select all values as an array when select is used in the value position', () => {
      const input: unknown = { a: 1, b: 2 };
      const result = match(input)
        .with(P.record(P.string, P.number.select()), (value) => {
          type t = Expect<Equal<typeof value, number[]>>;
          return value;
        })
        .otherwise(() => 'no match');

      expect(result).toEqual([1, 2]);
    });

    it('should select arrays when select() is nested inside the record value pattern', () => {
      const input: unknown = {
        a: { name: { first: 'John', last: 'Doe' } },
        b: { name: { first: 'Jane', last: 'Doe' } },
      };
      const result = match(input)
        .with(
          P.record(P.string, { name: { first: P.string.select() } }),
          (value) => {
            type t = Expect<Equal<typeof value, string[]>>;
            return value;
          }
        )
        .otherwise(() => 'no match');

      expect(result).toEqual(['John', 'Jane']);
    });
  });

  describe('type inference', () => {
    it("shouldn't accept key patterns that aren't PropertyKey", () => {
      const input: unknown = { a: 1, b: 2 };
      const result = match(input)
        // @ts-expect-error 👇 error should be here
        .with(P.record({}, P.number), (value) => {})
        // FIXME: P.array(), etc are accepted, but shouldn't.
        .with(P.record(P.array(), P.number), (value) => {})
        .otherwise(() => 'no match');

      expect(result).toEqual('no match');
    });

    it('should infer the correct type', () => {
      const input: unknown = { a: 1, b: 2 };

      match(input)
        .with(P.record(P.string, P.union(1, 2)), (value) => {
          type t = Expect<Equal<typeof value, Record<string, 1 | 2>>>;
          return 'matched';
        })
        // or pattern
        .with(P.record(P.string, P.union(1, 2)).or(123), (value) => {
          type t = Expect<Equal<typeof value, Record<string, 1 | 2> | 123>>;
          return 'matched';
        })
        // and pattern
        .with(P.record(P.string, P.union(1, 2)).and({ a: 1 }), (value) => {
          type t = Expect<
            Equal<typeof value, Record<string, 1 | 2> & { a: 1 }>
          >;
          return 'matched';
        })
        // key pattern
        .with(P.record(P.number, P.number), (value) => {
          type t = Expect<Equal<typeof value, Record<number, number>>>;
          return 'matched';
        })
        .with(P.record(P.union(1, 2, 3), P.number), (value) => {
          type t = Expect<Equal<typeof value, Record<1 | 2 | 3, number>>>;
          return 'matched';
        })
        // select a key
        .with(P.record(P.number.select(), P.number), (value) => {
          type t = Expect<Equal<typeof value, number[]>>;
          return 'matched';
        })
        // select a value
        .with(P.record(P.number, P.number.select()), (value) => {
          type t = Expect<Equal<typeof value, number[]>>;
          return 'matched';
        })
        // nested records
        .with(P.record(P.number, P.record(P.string, P.number)), (value) => {
          type t = Expect<
            Equal<typeof value, Record<number, Record<string, number>>>
          >;
          return 'matched';
        })
        // nested records with select
        .with(
          P.record(P.number, P.record(P.string, P.number.select())),
          (value) => {
            type t = Expect<Equal<typeof value, number[][]>>;
            return 'matched';
          }
        )
        // optional modifier
        .with(P.record(P.number, P.number).optional(), (value) => {
          type t = Expect<
            Equal<typeof value, Record<number, number> | undefined>
          >;
          return 'matched';
        })
        // arrays of records
        .with(P.array(P.record(P.string, P.number)), (value) => {
          type t = Expect<Equal<typeof value, Record<string, number>[]>>;
          return 'matched';
        })
        // records of arrays
        .with(P.record(P.string, P.array(P.number)), (value) => {
          type t = Expect<Equal<typeof value, Record<string, number[]>>>;
          return 'matched';
        })
        // tuple containing records
        .with([P.record(P.string, P.number), P.number], (value) => {
          type t = Expect<
            Equal<typeof value, [Record<string, number>, number]>
          >;
          return 'matched';
        })
        .otherwise(() => 'no match');
    });

    it("shouldn't allow incorrect value types", () => {
      const input: Record<string, { name: string; age?: number }> = {
        a: { name: 'John' },
        b: { name: 'Jane' },
      };
      const result = match(input)
        // if the pattern is correct, it should accept it
        .with(
          P.record(P.string, {
            age: P.number,
          }),
          (value) => {
            return 'matched';
          }
        )
        .with(
          P.record(P.string, {
            // @ts-expect-error
            firstName: P.string,
          }),
          (value) => {
            return 'matched';
          }
        )

        .otherwise(() => 'no match');

      expect(result).toEqual('no match');
    });

    it("shouldn't allow incorrect key types", () => {
      const input: Record<number, number> = {
        1: 1,
        2: 2,
      };

      const result = match(input)
        // @ts-expect-error
        .with(P.record('1', P.number), (value) => {
          return 'matched';
        })
        .otherwise(() => 'no match');
    });

    it('should exclude the correct types for exhaustive checking', () => {
      // Test that P.record correctly excludes matched record types from exhaustive checking
      type Input =
        | { type: 'config'; data: Record<string, string> }
        | { type: 'scores'; data: Record<string, number> }
        | { type: 'flags'; data: Record<string, boolean> }
        | { type: 'mixed'; data: Record<string, string | number> };

      const input = { type: 'config', data: { theme: 'dark' } } as Input;

      // Should not be exhaustive - missing other cases
      match(input)
        .with({ data: P.record(P.string, P.string) }, () => 'config')
        // @ts-expect-error - not exhaustive, missing other cases
        .exhaustive();

      // Should not be exhaustive - missing 'flags' case
      match(input)
        .with({ data: P.record(P.string, P.string) }, () => 'config')
        .with({ data: P.record(P.string, P.number) }, () => 'scores')
        .with(
          { data: P.record(P.string, P.union(P.string, P.number)) },
          () => 'mixed'
        )
        // @ts-expect-error - not exhaustive, missing 'flags' case
        .exhaustive();

      // Should be exhaustive - all cases covered
      match(input)
        .with({ data: P.record(P.string, P.string) }, () => 'config')
        .with({ data: P.record(P.string, P.number) }, () => 'scores')
        .with({ data: P.record(P.string, P.boolean) }, () => 'flags')
        .with(
          { data: P.record(P.string, P.union(P.string, P.number)) },
          () => 'mixed'
        )
        .exhaustive();

      // Test with more complex record patterns using union keys
      type ComplexInput =
        | { kind: 'stringKeys'; data: Record<string, number> }
        | { kind: 'numericKeys'; data: Record<number, string> }
        | { kind: 'mixedKeys'; data: Record<string | number, boolean> };

      const complexInput = {
        kind: 'stringKeys',
        data: { a: 1, b: 2 },
      } as ComplexInput;

      match(complexInput)
        .with({ data: P.record(P.string, P.number) }, () => 'stringKeys')
        .with({ data: P.record(P.number, P.string) }, () => 'numericKeys')
        .with(
          { data: P.record(P.union(P.string, P.number), P.boolean) },
          () => 'mixedKeys'
        )
        .exhaustive();
    });
  });
});

}


// ----- source: tests/return-type.test.ts
{

describe('returnType', () => {
  it('should only be allowed directly after match(...)', () => {
    const f = (input: unknown) =>
      match(input)
        .returnType<string>() // allowed
        .with(undefined, () => 'undefined')
        .with(P.string, () => 'string')
        .otherwise(() => 'unknown');

    const f2 = (input: unknown) =>
      match(input)
        .with(undefined, () => 'undefined')
        // @ts-expect-error: not allowed
        .returnType<string>()
        .with(P.string, () => 'string')
        .otherwise(() => 'unknown');

    const f3 = (input: unknown) =>
      match(input)
        .with(undefined, () => 'undefined')
        .with(P.string, () => 'string')
        // @ts-expect-error: not allowed
        .returnType<string>()
        .otherwise(() => 'unknown');
  });

  it('should restrict the return type to a specific type', () => {
    const f = (input: string | undefined): string =>
      match(input)
        .returnType<string>()
        // @ts-expect-error
        .with(undefined, () => undefined)
        .with(P.string, () => 'string')
        // @ts-expect-error
        .otherwise(() => true);
  });

  it('type errors should be well placed', () => {
    match<null>(null)
      .returnType<{ type: 'ok'; value: 'a' | 'b' }>()
      .with(null, () => ({
        type: 'ok',
        // @ts-expect-error
        value: 'oops',
      }))
      .exhaustive();
  });
});

}


// ----- source: tests/select.test.ts
{

describe('select', () => {
  it('should work with tuples', () => {
    expect(
      match<[string, number], number>(['get', 2])
        .with(['get', P.select('y')], ({ y }) => {
          type t = Expect<Equal<typeof y, number>>;
          return y;
        })
        .run()
    ).toEqual(2);
  });

  it('should work with array', () => {
    expect(
      match<string[], string[]>(['you', 'hello'])
        .with([P.select('first')], ({ first }, xs) => {
          type t = Expect<Equal<typeof xs, [string]>>;
          type t2 = Expect<Equal<typeof first, string>>;
          return [first];
        })
        .with(P.array(P.select('texts')), ({ texts }, xs) => {
          type t = Expect<Equal<typeof xs, string[]>>;
          type t2 = Expect<Equal<typeof texts, string[]>>;
          return texts;
        })
        .run()
    ).toEqual(['you', 'hello']);

    expect(
      match<{ text: string }[], string[]>([{ text: 'you' }, { text: 'hello' }])
        .with(P.array({ text: P.select('texts') }), ({ texts }, xs) => {
          type t = Expect<Equal<typeof xs, { text: string }[]>>;
          type t2 = Expect<Equal<typeof texts, string[]>>;
          return texts;
        })
        .run()
    ).toEqual(['you', 'hello']);

    expect(
      match<{ text: { content: string } }[], string[]>([
        { text: { content: 'you' } },
        { text: { content: 'hello' } },
      ])
        .with(
          P.array({ text: { content: P.select('texts') } }),
          ({ texts }, xs) => {
            type t = Expect<Equal<typeof texts, string[]>>;
            return texts;
          }
        )
        .run()
    ).toEqual(['you', 'hello']);
  });

  it('should work with objects', () => {
    expect(
      match<State & { other: number }, string>({
        status: 'success',
        data: 'some data',
        other: 20,
      })
        .with(
          {
            status: 'success',
            data: P.select('data'),
            other: P.select('other'),
          },
          ({ data, other }) => {
            type t = Expect<Equal<typeof data, string>>;
            type t2 = Expect<Equal<typeof other, number>>;
            return data + other.toString();
          }
        )
        .run()
    ).toEqual('some data20');
  });

  it('should work with primitive types', () => {
    expect(
      match<string, string>('hello')
        .with(P.select('x'), ({ x }) => {
          type t = Expect<Equal<typeof x, string>>;
          return x;
        })
        .run()
    ).toEqual('hello');
  });

  it('should work with complex structures', () => {
    const initState: State = {
      status: 'idle',
    };

    const reducer = (state: State, event: Event): State =>
      match<[State, Event], State>([state, event])
        .with(
          [
            { status: 'loading' },
            {
              type: 'success',
              data: P.select('data'),
              requestTime: P.select('time'),
            },
          ],
          ({ data, time }) => {
            type t = Expect<Equal<typeof time, number | undefined>>;

            return {
              status: 'success',
              data,
            };
          }
        )
        .with(
          [{ status: 'loading' }, { type: 'success', data: P.select('data') }],
          ({ data }) => ({
            status: 'success',
            data,
          })
        )
        .with(
          [{ status: 'loading' }, { type: 'error', error: P.select('error') }],
          ({ error }) => ({
            status: 'error',
            error,
          })
        )
        .with([{ status: 'loading' }, { type: 'cancel' }], () => initState)
        .with([{ status: P.not('loading') }, { type: 'fetch' }], () => ({
          status: 'loading',
        }))
        .with([P.select('state'), P.select('event')], ({ state, event }) => {
          type t = Expect<Equal<typeof state, State>>;
          type t2 = Expect<Equal<typeof event, Event>>;
          return state;
        })
        .run();

    expect(reducer(initState, { type: 'cancel' })).toEqual(initState);

    expect(reducer(initState, { type: 'fetch' })).toEqual({
      status: 'loading',
    });

    expect(
      reducer({ status: 'loading' }, { type: 'success', data: 'yo' })
    ).toEqual({
      status: 'success',
      data: 'yo',
    });

    expect(reducer({ status: 'loading' }, { type: 'cancel' })).toEqual({
      status: 'idle',
    });
  });

  it('should support nesting of several arrays', () => {
    type Input = [{ name: string }, { post: { title: string }[] }][];
    expect(
      match<Input>([
        [
          { name: 'Gabriel' },
          { post: [{ title: 'Hello World' }, { title: "what's up" }] },
        ],
        [{ name: 'Alice' }, { post: [{ title: 'Hola' }, { title: 'coucou' }] }],
      ])
        .with([], (x) => {
          type t = Expect<Equal<typeof x, []>>;
          return 'empty';
        })
        .with(
          P.array([
            { name: P.select('names') },
            { post: P.array({ title: P.select('titles') }) },
          ]),
          ({ names, titles }) => {
            type t = Expect<Equal<typeof names, string[]>>;
            type t2 = Expect<Equal<typeof titles, string[][]>>;

            return (
              names.join(' and ') +
              ' have written ' +
              titles.map((t) => t.map((t) => `"${t}"`).join(', ')).join(', ')
            );
          }
        )
        .exhaustive()
    ).toEqual(
      `Gabriel and Alice have written "Hello World", "what's up", "Hola", "coucou"`
    );
  });

  it('Anonymous selections should support nesting of several arrays', () => {
    type Input = [{ name: string }, { post: { title: string }[] }][];
    expect(
      match<Input>([
        [
          { name: 'Gabriel' },
          { post: [{ title: 'Hello World' }, { title: "what's up" }] },
        ],
        [{ name: 'Alice' }, { post: [{ title: 'Hola' }, { title: 'coucou' }] }],
      ])
        .with([], (x) => {
          type t = Expect<Equal<typeof x, []>>;
          return 'empty';
        })
        .with(
          P.array([{ name: P.any }, { post: P.array({ title: P.select() }) }]),
          (titles) => {
            type t1 = Expect<Equal<typeof titles, string[][]>>;
            return titles
              .map((t) => t.map((t) => `"${t}"`).join(', '))
              .join(', ');
          }
        )
        .exhaustive()
    ).toEqual(`"Hello World", "what's up", "Hola", "coucou"`);
  });

  it('should infer the selection to an error when using several anonymous selection', () => {
    match({ type: 'point', x: 2, y: 3 })
      .with({ type: 'point', x: P.select(), y: P.select() }, (x) => {
        type t = Expect<Equal<typeof x, SeveralAnonymousSelectError>>;
        return 'ok';
      })
      .run();
  });

  it('should infer the selection to an error when using mixed named and unnamed selections', () => {
    match({ type: 'point', x: 2, y: 3 })
      .with({ type: 'point', x: P.select(), y: P.select('y') }, (x) => {
        type t = Expect<Equal<typeof x, MixedNamedAndAnonymousSelectError>>;
        return 'ok';
      })
      .run();
  });

  describe('P.select with subpattern', () => {
    type Input =
      | {
          type: 'a';
          value:
            | { type: 'img'; src: string }
            | { type: 'text'; content: string; length: number };
        }
      | {
          type: 'b';
          value:
            | { type: 'user'; username: string }
            | { type: 'org'; orgId: number };
        };

    it('should support only selecting if the value matches a subpattern', () => {
      const f = (input: Input) =>
        match(input)
          .with({ type: 'a', value: P.select({ type: 'img' }) }, (x) => {
            type t = Expect<Equal<typeof x, { type: 'img'; src: string }>>;
            return x.src;
          })
          .with(
            { type: 'a', value: P.select('text', { type: 'text' }) },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  { text: { type: 'text'; content: string; length: number } }
                >
              >;
              return x.text.content;
            }
          )
          .with({ type: 'b', value: P.select({ type: 'user' }) }, (x) => {
            type t = Expect<
              Equal<typeof x, { type: 'user'; username: string }>
            >;
            return x.username;
          })
          .with({ type: 'b', value: P.select('org', { type: 'org' }) }, (x) => {
            type t = Expect<
              Equal<typeof x, { org: { type: 'org'; orgId: number } }>
            >;
            return x.org.orgId;
          })
          .exhaustive();

      expect(f({ type: 'a', value: { type: 'img', src: 'Hello' } })).toEqual(
        'Hello'
      );

      expect(
        f({
          type: 'a',
          value: { type: 'text', length: 2, content: 'some text' },
        })
      ).toEqual('some text');

      expect(
        f({ type: 'b', value: { type: 'user', username: 'Gabriel' } })
      ).toEqual('Gabriel');

      expect(
        f({
          type: 'b',
          value: { type: 'org', orgId: 2 },
        })
      ).toEqual(2);
    });

    it('should be possible to nest named selections', () => {
      const f = (input: Input) =>
        match(input)
          .with(
            {
              type: 'a',
              value: P.select('text', {
                type: 'text',
                content: P.select('content'),
                length: P.select('length'),
              }),
            },
            ({ text, content, length }) => {
              type t1 = Expect<
                Equal<
                  typeof text,
                  { type: 'text'; content: string; length: number }
                >
              >;
              type t2 = Expect<Equal<typeof content, string>>;
              type t3 = Expect<Equal<typeof length, number>>;
              return [text, length, content];
            }
          )
          .otherwise(() => null);

      expect(
        f({ type: 'a', value: { type: 'text', length: 2, content: 'yo' } })
      ).toEqual([{ type: 'text', length: 2, content: 'yo' }, 2, 'yo']);

      expect(f({ type: 'a', value: { type: 'img', src: 'yo' } })).toEqual(null);
    });

    it('should work with union subpatterns', () => {
      type Input = {
        value:
          | { type: 'a'; v: string }
          | { type: 'b'; v: number }
          | { type: 'c'; v: boolean };
      };

      // select directly followed by union
      const f = (input: Input) =>
        match(input)
          .with(
            { value: P.select(P.union({ type: 'a' }, { type: 'b' })) },
            (x) => {
              type t = Expect<
                Equal<
                  typeof x,
                  { type: 'a'; v: string } | { type: 'b'; v: number }
                >
              >;

              return x.v;
            }
          )
          .with({ value: { type: 'c' } }, () => 'c')
          .exhaustive();

      // select with an object that's a union by union
      const f2 = (input: Input) =>
        match(input)
          .with({ value: P.select({ type: P.union('a', 'b') }) }, (x) => {
            type t = Expect<
              Equal<
                typeof x,
                { type: 'a'; v: string } | { type: 'b'; v: number }
              >
            >;

            return x.v;
          })
          .with({ value: { type: 'c' } }, () => 'c')
          .exhaustive();

      expect(f({ value: { type: 'a', v: 'hello' } })).toEqual('hello');
      expect(f2({ value: { type: 'a', v: 'hello' } })).toEqual('hello');

      expect(f({ value: { type: 'b', v: 10 } })).toEqual(10);
      expect(f2({ value: { type: 'b', v: 10 } })).toEqual(10);

      expect(f({ value: { type: 'c', v: true } })).toEqual('c');
      expect(f2({ value: { type: 'c', v: true } })).toEqual('c');
    });

    it('Should work with unions without discriminants', () => {
      type Input =
        | { type: 'a'; value: string }
        | { type: 'b'; value: number }
        | {
            type: 'c';
            value:
              | { type: 'd'; value: boolean }
              | { type: 'e'; value: string[] }
              | { type: 'f'; value: number[] };
          };

      const f = (input: Input) =>
        match(input)
          .with({ type: P.union('a', 'b') }, (x) => {
            return 'branch 1';
          })
          .with(
            {
              type: 'c',
              value: { value: P.select(P.union(P.boolean, P.array(P.string))) },
            },
            (x) => {
              type t = Expect<Equal<typeof x, boolean | string[]>>;
              return 'branch 2';
            }
          )
          .with({ type: 'c', value: { type: 'f' } }, () => 'branch 3')
          .exhaustive();
    });
  });

  it('Issue #95: P.select() on empty arrays should return an empty array', () => {
    const res = match<{ a: string[]; b: string[] }>({ a: [], b: ['text'] })
      .with(
        { a: P.array(P.select('a')), b: P.array(P.select('b')) },
        ({ a, b }) => {
          type t = Expect<Equal<typeof a, string[]>>;
          type t2 = Expect<Equal<typeof b, string[]>>;
          return { a, b };
        }
      )
      .otherwise(() => null);

    expect(res).toEqual({ a: [], b: ['text'] });

    // Should work with deeply nested selections as well
    const res2 = match<{ a: { prop: number }[] }>({ a: [] })
      .with({ a: P.array({ prop: P.select('a') }) }, ({ a }) => {
        type t = Expect<Equal<typeof a, number[]>>;
        return { a };
      })
      .otherwise(() => null);

    expect(res2).toEqual({ a: [] });

    // P.select of arrays shouldn't be affected
    const res3 = match<{ a: { prop: number }[] }>({ a: [] })
      .with({ a: P.select(P.array({ prop: P._ })) }, (a) => {
        type t = Expect<Equal<typeof a, { prop: number }[]>>;
        return { a };
      })
      .otherwise(() => null);

    expect(res3).toEqual({ a: [] });
  });

  it('should work with variadic tuples', () => {
    const fn = (input: string[]) =>
      match(input)
        .with(
          [P.string, 'some', 'cli', 'cmd', P.select(), ...P.array()],
          (arg) => {
            type t = Expect<Equal<typeof arg, string>>;
            return arg;
          }
        )
        .otherwise(() => '2');

    expect(fn(['some cli cmd param', 'some', 'cli', 'cmd', 'param'])).toEqual(
      'param'
    );
    expect(
      fn(['some cli cmd param --flag', 'some', 'cli', 'cmd', 'param', '--flag'])
    ).toEqual('param');
  });
});

}


// ----- source: tests/sets.test.ts
{

describe('Set', () => {
  it('should match Set patterns', () => {
    const containsGabAndYo = (set: Set<string | number>) =>
      match<Set<string | number>, [boolean, boolean]>(set)
        .with(P.set('gab'), (x) => {
          type t = Expect<Equal<typeof x, Set<'gab'>>>;
          return [true, false];
        })
        .with(P.set('yo'), (x) => {
          type t = Expect<Equal<typeof x, Set<'yo'>>>;
          return [false, true];
        })
        .with(P.set(P.union('gab', 'yo')), (x) => {
          type t = Expect<Equal<typeof x, Set<'gab' | 'yo'>>>;
          return [true, true];
        })
        .with(P._, (x) => {
          type t = Expect<Equal<typeof x, Set<string | number>>>;
          return [false, false];
        })
        .run();

    expect(containsGabAndYo(new Set(['gab', 'yo']))).toEqual([true, true]);
    expect(containsGabAndYo(new Set(['gab']))).toEqual([true, false]);
    expect(containsGabAndYo(new Set(['yo']))).toEqual([false, true]);
    expect(containsGabAndYo(new Set(['hello']))).toEqual([false, false]);
    expect(containsGabAndYo(new Set([2]))).toEqual([false, false]);
  });

  it("should match any set if P.set isn't given any arguments", () => {
    const someSet = new Set([1, 2, 3]);

    const res = match(someSet)
      .with(P.set(), () => true)
      .exhaustive();

    type t = Expect<Equal<typeof res, boolean>>;

    expect(res).toEqual(true);
  });
});

}


// ----- source: tests/strings.test.ts
{

describe('Strings', () => {
  it(`P.string.includes('str')`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.includes('!!'), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'includes !!';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'something else';
        });

    expect(f('hello!!')).toBe('includes !!');
    expect(f('nope')).toBe('something else');
  });

  describe('startsWith', () => {
    it(`P.string.startsWith('str')`, () => {
      const f = (input: string | number) =>
        match(input)
          .with(P.string.startsWith('hello '), (value) => {
            type t = Expect<Equal<typeof value, `hello ${string}`>>;
            return 'starts with hello';
          })
          .otherwise((value) => {
            type t = Expect<Equal<typeof value, string | number>>;
            return 'something else';
          });

      expect(f('hello gabriel')).toBe('starts with hello');
      expect(f('gabriel')).toBe('something else');
    });

    type FileFrom2022 = `2022-${number}-${number}`;
    type FileFrom2023 = `2023-${number}-${number}`;

    it('should narrow template literal types', () => {
      const get = (x: FileFrom2022 | FileFrom2023): string =>
        match(x)
          .with(P.string.startsWith('2022-'), (x) => {
            type t = Expect<Equal<typeof x, FileFrom2022>>;
            return 'file from 2022';
          })
          .with(P.string.startsWith('2023-'), (x) => {
            type t = Expect<Equal<typeof x, FileFrom2023>>;
            return 'file from 2023';
          })
          .exhaustive();

      expect(get('2022-04-01')).toEqual('file from 2022');
      expect(get('2023-04-01')).toEqual('file from 2023');
    });

    it('should work as a nested pattern', () => {
      type Input = { value: FileFrom2022 | FileFrom2023 };

      const input: Input = { value: '2023-04-01' };

      const output = match<Input>(input)
        .with({ value: P.string.startsWith('2022-') }, (a) => {
          type t = Expect<Equal<typeof a, { value: FileFrom2022 }>>;
          return 'nested file from 2022';
        })
        .with({ value: P.string.startsWith('2023-') }, (b) => {
          type t = Expect<Equal<typeof b, { value: FileFrom2023 }>>;
          return 'nested file from 2023';
        })
        .exhaustive();

      expect(output).toEqual('nested file from 2023');
    });
  });

  it(`P.string.endsWith('str')`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.endsWith('!!'), (value) => {
          type t = Expect<Equal<typeof value, `${string}!!`>>;
          return 'ends with !!';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'something else';
        });

    expect(f('hello!!')).toBe('ends with !!');
    expect(f('nope')).toBe('something else');
  });

  it(`P.string.minLength(..)`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.minLength(2), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'no';
        });

    expect(f('aa')).toBe('yes');
    expect(f('aaa')).toBe('yes');
    expect(f('a')).toBe('no');
  });

  it(`P.string.length(..)`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.length(2), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'no';
        });

    expect(f('aa')).toBe('yes');
    expect(f('bb')).toBe('yes');
    expect(f('aaa')).toBe('no');
    expect(f('a')).toBe('no');

    const f2 = (input: string | number) =>
      match(input)
        .with(P.string.length(2), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'yes';
        })
        // @ts-expect-error matching on specific length isn't exhaustive.
        .exhaustive();
  });

  it(`P.string.maxLength(..)`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.maxLength(10), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'yes';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'no';
        });

    expect(f('aaa')).toBe('yes');
    expect(f('aaaaaaaaaa')).toBe('yes');
    expect(f('aaaaaaaaaaa')).toBe('no');
  });

  it(`P.string.regex('^[a-z]+$')`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.regex('^[a-z]+$'), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'single word';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'something else';
        });

    expect(f('hello')).toBe('single word');
    expect(f('a b c')).toBe('something else');
  });

  it(`P.string.regex(/[a-z]+/)`, () => {
    const f = (input: string | number) =>
      match(input)
        .with(P.string.regex(/^https?:\/\//), (value) => {
          type t = Expect<Equal<typeof value, string>>;
          return 'url';
        })
        .otherwise((value) => {
          type t = Expect<Equal<typeof value, string | number>>;
          return 'something else';
        });

    expect(f('https://type-level-typescript.com')).toBe('url');
    expect(f('a b c')).toBe('something else');
  });
});

}


// ----- source: tests/tuples.test.ts
{

describe('tuple ([a, b])', () => {
  it('should match tuple patterns', () => {
    const sum = (xs: number[]): number =>
      match(xs)
        .with([], () => 0)
        .with([P.number, P.number], ([x, y]) => x + y)
        .with([P.number, P.number, P.number], ([x, y, z]) => x + y + z)
        .with(
          [P.number, P.number, P.number, P.number],
          ([x, y, z, w]) => x + y + z + w
        )
        .run();

    expect(sum([2, 3, 2, 4])).toEqual(11);
  });

  it('should discriminate correctly union of tuples', () => {
    type Input =
      | ['+', number, number]
      | ['*', number, number]
      | ['-', number]
      | ['++', number];

    const res = match<Input, number>(['-', 2])
      .with(['+', P.number, P.number], (value) => {
        type t = Expect<Equal<typeof value, ['+', number, number]>>;
        const [, x, y] = value;
        return x + y;
      })
      .with(['*', P.number, P.number], (value) => {
        type t = Expect<Equal<typeof value, ['*', number, number]>>;
        const [, x, y] = value;
        return x * y;
      })
      .with(['-', P.number], (value) => {
        type t = Expect<Equal<typeof value, ['-', number]>>;
        const [, x] = value;
        return -x;
      })
      .with(['++', P.number], ([, x]) => x + 1)
      .exhaustive();

    const res2 = match<Input, number>(['-', 2])
      .with(['+', P._, P._], (value) => {
        type t = Expect<Equal<typeof value, ['+', number, number]>>;
        const [, x, y] = value;
        return x + y;
      })
      .with(['*', P._, P._], (value) => {
        type t = Expect<Equal<typeof value, ['*', number, number]>>;
        const [, x, y] = value;
        return x * y;
      })
      .with(['-', P._], (value) => {
        type t = Expect<Equal<typeof value, ['-', number]>>;
        const [, x] = value;
        return -x;
      })
      .run();

    expect(res).toEqual(-2);
    expect(res2).toEqual(-2);
  });

  describe('should match heterogenous tuple patterns', () => {
    const tuples: { tuple: [string, number]; expected: string }[] = [
      { tuple: ['coucou', 20], expected: 'number match' },
      { tuple: ['hello', 20], expected: 'perfect match' },
      { tuple: ['hello', 21], expected: 'string match' },
      { tuple: ['azeaze', 17], expected: 'not matching' },
    ];

    tuples.forEach(({ tuple, expected }) => {
      it(`should work with ${tuple}`, () => {
        expect(
          match<[string, number], string>(tuple)
            .with(['hello', 20], (x) => {
              type t = Expect<Equal<typeof x, ['hello', 20]>>;
              return `perfect match`;
            })
            .with(['hello', P._], (x) => {
              type t = Expect<Equal<typeof x, ['hello', number]>>;
              return `string match`;
            })
            .with([P._, 20], (x) => {
              type t = Expect<Equal<typeof x, [string, 20]>>;
              return `number match`;
            })
            .with([P.string, P.number], (x) => {
              type t = Expect<Equal<typeof x, [string, number]>>;
              return `not matching`;
            })
            .exhaustive()
        ).toEqual(expected);
      });
    });
  });

  it('should work with tuple of records', () => {
    const initState: State = {
      status: 'idle',
    };

    const reducer = (state: State, event: Event): State =>
      match<[State, Event], State>([state, event])
        .with([P.any, { type: 'fetch' }], (x) => {
          type t = Expect<Equal<typeof x, [State, { type: 'fetch' }]>>;

          return {
            status: 'loading',
          };
        })

        .with([{ status: 'loading' }, { type: 'success' }], (x) => {
          type t = Expect<
            Equal<
              typeof x,
              [
                { status: 'loading' },
                { type: 'success'; data: string; requestTime?: number }
              ]
            >
          >;

          return {
            status: 'success',
            data: x[1].data,
          };
        })

        .with([{ status: 'loading' }, { type: 'error' }], (x) => {
          type t = Expect<
            Equal<
              typeof x,
              [{ status: 'loading' }, { type: 'error'; error: Error }]
            >
          >;

          return {
            status: 'error',
            error: x[1].error,
          };
        })

        .with([{ status: 'loading' }, { type: 'cancel' }], (x) => {
          type t = Expect<
            Equal<typeof x, [{ status: 'loading' }, { type: 'cancel' }]>
          >;

          return initState;
        })

        .otherwise(() => state);

    expect(reducer(initState, { type: 'fetch' })).toEqual({
      status: 'loading',
    });

    expect(
      reducer({ status: 'loading' }, { type: 'success', data: 'yo' })
    ).toEqual({
      status: 'success',
      data: 'yo',
    });

    expect(reducer({ status: 'loading' }, { type: 'cancel' })).toEqual({
      status: 'idle',
    });
  });

  it('should work with as const', () => {
    type State = { type: 'a' } | { type: 'b' };
    type Event = { type: 'c' } | { type: 'd' };
    const state = { type: 'a' } as State;
    const event = { type: 'c' } as Event;

    const output = match([state, event])
      .with([{ type: 'a' }, { type: 'c' }], () => 'a + c')
      .otherwise(() => 'no');

    expect(output).toEqual('a + c');
  });

  it('should work with nested tuples', () => {
    type State = {};
    type Msg = [type: 'Login'] | [type: 'UrlChange', url: string];

    function update(state: State, msg: Msg) {
      return match<[State, Msg], string>([state, msg])
        .with([P.any, ['Login']], () => 'ok')
        .with([P.any, ['UrlChange', P.select()]], () => 'not ok')
        .exhaustive();
    }
  });
});

}


// ----- source: tests/type-error.test.ts
{

type Country = 'France' | 'Germany' | 'Spain' | 'USA';

describe('type errors', () => {
  it("if the inferred pattern type is any, it shouldn't say that the type instanciation is too deep.", () => {
    const f = (n: number) => {
      return (
        match(n)
          .with(P.array(P.number), (s) => {
            return 'big number';
          })
          // @ts-expect-error: this isn't a list
          .exhaustive()
      );
    };

    match<Country>('France')
      // @ts-expect-error: 'Spai' instead of 'Spain'
      .with('France', 'Germany', 'Spai', (x) => 'Europe')
      // @ts-expect-error
      .exhaustive();

    match<Country>('Germany')
      .with('Germany', 'Spain', () => 'Europe')
      // @ts-expect-error: 'US' instead of 'USA'
      .with('US', (x) => 'America')
      // @ts-expect-error
      .exhaustive();
  });

  it("If the pattern's wrong, the inferred selection must be the input type", () => {
    match<Country>('Germany')
      .with('Germany', 'Spain', () => 'Europe')
      // @ts-expect-error: 'US' instead of 'USA'
      .with('US', (x) => {
        type t = Expect<Equal<typeof x, 'France' | 'USA'>>;
        return 'America';
      })
      // @ts-expect-error
      .exhaustive();
  });

  it("Patterns shouldn't accept values which will never match", () => {
    const f1 = (input: Option<{ x: number }>) =>
      match<Option<{ x: number }>>(input)
        .with({ kind: 'some', value: { x: 2 } }, () => '2')
        // @ts-expect-error, value.x should be a number
        .with({ value: { x: '' } }, () => '2')
        .with({ kind: 'none' }, () => '')
        .with({ kind: 'some' }, () => '')
        .exhaustive();

    const f2 = (input: Option<number>) =>
      match(input)
        // @ts-expect-error: value is a number
        .with({ kind: 'some', value: 'string' }, () => '')
        .with({ kind: 'none' }, () => '')
        .with({ kind: 'some' }, () => '')
        .exhaustive();
  });

  it("shouldn't allow when guards with an invalid input", () => {
    const startsWith = (start: string) => (value: string) =>
      value.startsWith(start);

    const equals =
      <T>(n: T) =>
      (n2: T) =>
        n === n2;

    const f = (optionalNumber: Option<number>) =>
      match(optionalNumber)
        .with(
          {
            kind: 'some',
            // @ts-expect-error: string isn't assigable to number
            value: P.when(startsWith('hello')),
          },
          () => 'fizz'
        )
        .with(
          {
            kind: 'some',
            // @ts-expect-error: string isn't assigable to number
            value: P.when((x: string) => x),
          },
          () => 'fizz'
        )
        .with(
          {
            kind: 'some',
            value: P.when((x: number) => x),
          },
          () => 'fizz'
        )
        .with(
          {
            kind: 'some',
            value: P.when(equals(2)),
          },
          () => 'fizz'
        )
        .with(
          {
            kind: 'some',
            // @ts-expect-error: string isn't assigable to number
            value: P.when(equals('yo')),
          },
          () => 'fizz'
        )
        .with({ kind: 'none' }, () => 'nope')
        // @ts-expect-error
        .exhaustive();
  });

  it("if a pattern is any, the outer expression shouldn't throw a type error", () => {
    const anyVar = null as any;

    const input = { a: 'a' };

    match(input)
      .with({ a: anyVar }, (x) => {
        type t = Expect<Equal<typeof x, typeof input>>;
        return 'Ok';
      })
      .otherwise(() => 'ko');
  });

  it('type errors should be well placed', () => {
    match<{
      a: 1;
      b: 'hello' | 'bonjour';
      c: { d: [number, number, boolean] };
      e: unknown;
    } | null>(null)
      .with(
        {
          // @ts-expect-error
          b: 'oops',
        },
        () => 'result'
      )
      .with(
        {
          c: {
            d: [
              1, 2,
              // @ts-expect-error: number instead of boolean
              3,
            ],
          },
        },
        () => 'x'
      )
      .with({ e: 1 }, () => 'bas')
      .with({ b: 'hello' }, ({ a }) => 'result')
      .with({ b: 'bonjour' }, ({ a }) => 'result')
      .with(null, () => 'result')
      .exhaustive();
  });
});

}


// ----- source: tests/type-is-matching.test.ts
{

describe('IsMatching', () => {
  describe('should return true if the pattern matches the input,  false otherwise', () => {
    it('Literals', () => {
      type cases = [
        Expect<Equal<IsMatching<'c' | 'd', 'c'>, true>>,
        Expect<Equal<IsMatching<'c' | 'd', 'a'>, false>>,
        Expect<Equal<IsMatching<'c' | 'd', unknown>, true>>,

        Expect<Equal<IsMatching<1 | 2, 1>, true>>,
        Expect<Equal<IsMatching<1 | 2, 3>, false>>,
        Expect<Equal<IsMatching<1 | 2, unknown>, true>>,

        Expect<Equal<IsMatching<1 | 'a', 1>, true>>,
        Expect<Equal<IsMatching<1 | 'a', 'a'>, true>>,
        Expect<Equal<IsMatching<1 | 'a', 2>, false>>,
        Expect<Equal<IsMatching<1 | 'a', 'b'>, false>>,
        Expect<Equal<IsMatching<1 | 'a', unknown>, true>>
      ];
    });

    describe('Primitives', () => {
      it('if there is an overlap in either direction, it should match', () => {
        type res1 = IsMatching<3, number>;
        type test1 = Expect<Equal<res1, true>>;

        type res2 = IsMatching<number, 3>;
        type test2 = Expect<Equal<res2, true>>;

        type res3 = IsMatching<'hello', string>;
        type test3 = Expect<Equal<res3, true>>;

        type res4 = IsMatching<string, 'hello'>;
        type test4 = Expect<Equal<res4, true>>;
      });

      it('if there is NO overlap, it should not match', () => {
        type res1 = IsMatching<3, string>;
        type test1 = Expect<Equal<res1, false>>;

        type res3 = IsMatching<'hello', number>;
        type test3 = Expect<Equal<res3, false>>;
      });

      it('should support unions of primitives', () => {
        type res1 = IsMatching<string | number, string>;
        type test1 = Expect<Equal<res1, true>>;

        type res2 = IsMatching<string | number, boolean>;
        type test2 = Expect<Equal<res2, false>>;

        type res3 = IsMatching<string | number, unknown>;
        type test3 = Expect<Equal<res3, true>>;

        // if there is an overlap, it matches
        type res4 = IsMatching<string, number | string>;
        type test4 = Expect<Equal<res4, true>>;
      });
    });

    it('Object', () => {
      type cases = [
        Expect<Equal<IsMatching<{}, {}>, true>>,
        Expect<
          Equal<
            IsMatching<{ type: 'a'; color: 'yellow' | 'green' }, { type: 'a' }>,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<{ type: 'a'; color: 'yellow' | 'green' }, { type: 'b' }>,
            false
          >
        >,
        Expect<
          Equal<
            IsMatching<
              { type: 'a'; value: { type: 'c'; value: { type: 'd' } } } | 12,
              { type: 'a' }
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              { type: 'a'; value: { type: 'c'; value: { type: 'd' } } } | 12,
              12
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              | {
                  type: 'a';
                  value:
                    | { type: 'c'; value: { type: 'd' } | 2 }
                    | { type: 'e'; value: { type: 'f' } | 3 };
                }
              | 12,
              { type: 'a'; value: { type: 'c' } }
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              | {
                  type: 'a';
                  value:
                    | { type: 'c'; value: { type: 'd' } | 2 }
                    | { type: 'e'; value: { type: 'f' } | 3 };
                }
              | 12,
              { type: 'a'; value: { type: 'c'; value: 2 } }
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              {
                type: 'a';
                value:
                  | { type: 'c'; value: { type: 'd' } | 2 }
                  | { type: 'e'; value: { type: 'f' } | 3 };
              },
              { type: 'a'; value: { type: 'c'; value: 3 } }
            >,
            false //  value: 3 isn't compatible with type: 'c'
          >
        >,
        Expect<
          Equal<
            IsMatching<12, { type: 'a'; value: { type: 'c'; value: 3 } }>,
            false
          >
        >,
        Expect<
          Equal<
            IsMatching<
              | { type: 'c'; value: { type: 'd' } | 2 }
              | { type: 'e'; value: { type: 'f' } | 3 },
              { type: 'c'; value: 3 }
            >,
            false
          >
        >,
        Expect<
          Equal<
            IsMatching<
              | { type: 'c'; value: { type: 'd' } | 2 }
              | { type: 'e'; value: { type: 'f' } | 3 },
              { type: 'c' }
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              | { type: 'c'; value: { type: 'd' } | 2 }
              | { type: 'e'; value: { type: 'f' } | 3 },
              { value: 3 }
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              { type: 'c'; value: { type: 'd' } | 2 },
              { type: 'c'; value: 3 }
            >,
            false
          >
        >,
        Expect<
          Equal<
            IsMatching<
              Option<{ type: 'a' } | { type: 'b' }>,
              { kind: 'some'; value: { type: 'a' } }
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              Option<{ type: 'a' } | { type: 'b' }>,
              { kind: 'some'; value: { type: 'c' } }
            >,
            false
          >
        >,
        // the empty object matches everything except null | undefined
        // just like the `{}` type.
        Expect<Equal<IsMatching<{ type: 'a' }, {}>, true>>,
        Expect<Equal<IsMatching<{}, { type: 'a' }>, false>>
      ];
    });

    it('Tuples', () => {
      type State = {};
      type Msg = [type: 'Login'] | [type: 'UrlChange', url: string];

      type res1 = IsMatching<[State, Msg], [unknown, ['Login', unknown]]>;
      type test1 = Expect<Equal<res1, false>>;

      type res2 = IsMatching<['a'], []>;
      type test2 = Expect<Equal<res2, false>>;

      type cases = [
        Expect<Equal<IsMatching<['a', 'c' | 'd'], ['a', 'd']>, true>>,
        Expect<Equal<IsMatching<['a', 'c' | 'd'], ['a', unknown]>, true>>,
        Expect<Equal<IsMatching<['a', 'c' | 'd'], ['a', 'f']>, false>>,
        Expect<Equal<IsMatching<['a', 'c' | 'd'], ['b', 'c']>, false>>,
        Expect<Equal<IsMatching<['a', 'c' | 'd', 'd'], ['b', 'c']>, false>>,
        Expect<Equal<IsMatching<[], []>, true>>,
        Expect<Equal<IsMatching<['a'], ['a', 'b', 'c']>, false>>,
        Expect<Equal<IsMatching<[], ['a', 'b', 'c']>, false>>,
        Expect<
          Equal<
            IsMatching<
              [Option<{ type: 'a' } | { type: 'b' }>, 'c' | 'd'],
              [{ kind: 'some'; value: { type: 'a' } }, unknown]
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<[State, Msg], [unknown, ['UrlChange', unknown]]>,
            true
          >
        >,
        Expect<Equal<IsMatching<[State, Msg], [unknown, ['Login']]>, true>>
      ];
    });

    it('Lists', () => {
      type cases = [
        Expect<Equal<IsMatching<('a' | 'b')[], 'a'[]>, true>>,
        Expect<Equal<IsMatching<('a' | 'b')[], 'b'[]>, true>>,
        Expect<Equal<IsMatching<('a' | 'b')[], 'c'[]>, false>>,
        Expect<Equal<IsMatching<{ x: ['a' | 'b'] }[], { x: ['a'] }[]>, true>>,
        Expect<Equal<IsMatching<{ x: ['a' | 'b'] }[], { x: ['c'] }[]>, false>>
      ];
    });

    it('Variadics', () => {
      type res1 = IsMatching<('a' | 'b')[], [unknown, ...unknown[]]>;
      type test1 = Expect<Equal<res1, true>>;

      type res2 = IsMatching<[number], [unknown, ...unknown[]]>;
      type test2 = Expect<Equal<res2, true>>;

      type res3 = IsMatching<[number, number], [unknown, ...unknown[]]>;
      type test3 = Expect<Equal<res3, true>>;

      type res4 = IsMatching<[], [unknown, ...unknown[]]>;
      type test4 = Expect<Equal<res4, false>>;

      type res5 = IsMatching<[], [...unknown[], unknown]>;
      type test5 = Expect<Equal<res5, false>>;

      type res6 = IsMatching<[1, 2], [...unknown[], unknown]>;
      type test6 = Expect<Equal<res6, true>>;

      type res7 = IsMatching<[1, 2], [1, ...unknown[], 2]>;
      type test7 = Expect<Equal<res7, true>>;

      type res8 = IsMatching<[1, 3, 2], [1, ...unknown[], 2]>;
      type test8 = Expect<Equal<res8, true>>;

      type res9 = IsMatching<[1, 3, 2], [1, ...string[], 2]>;
      type test9 = Expect<Equal<res9, false>>;

      type res10 = IsMatching<[1, 3, 2], [1, ...number[], 2]>;
      type test10 = Expect<Equal<res10, true>>;
    });

    it('Sets', () => {
      type cases = [
        Expect<Equal<IsMatching<Set<'a' | 'b'>, Set<'a'>>, true>>,
        Expect<Equal<IsMatching<Set<'a' | 'b'>, Set<'b'>>, true>>,
        Expect<Equal<IsMatching<Set<'a' | 'b'>, Set<'c'>>, false>>,
        Expect<
          Equal<IsMatching<Set<{ x: ['a' | 'b'] }>, Set<{ x: ['a'] }>>, true>
        >,
        Expect<
          Equal<IsMatching<Set<{ x: ['a' | 'b'] }>, Set<{ x: ['c'] }>>, false>
        >
      ];
    });

    it('Maps', () => {
      type cases = [
        Expect<
          Equal<IsMatching<Map<string, 'a' | 'b'>, Map<string, 'a'>>, true>
        >,
        Expect<
          Equal<IsMatching<Map<'hello', 'a' | 'b'>, Map<'hello', 'b'>>, true>
        >,
        Expect<
          Equal<IsMatching<Map<string, 'a' | 'b'>, Map<string, 'c'>>, false>
        >,
        Expect<
          Equal<IsMatching<Map<'hello', 'a' | 'b'>, Map<string, 'a'>>, false>
        >,
        Expect<
          Equal<
            IsMatching<
              Map<string, { x: ['a' | 'b'] }>,
              Map<string, { x: ['a'] }>
            >,
            true
          >
        >,
        Expect<
          Equal<
            IsMatching<
              Map<string, { x: ['a' | 'b'] }>,
              Map<string, { x: ['c'] }>
            >,
            false
          >
        >
      ];
    });

    it('pattern is a union types', () => {
      type cases = [
        Expect<Equal<IsMatching<'d', 'd' | 'e'>, true>>,
        Expect<Equal<IsMatching<'f', 'd' | 'e'>, false>>,
        Expect<
          Equal<
            IsMatching<
              | { type: 'd'; value: boolean }
              | { type: 'e'; value: string[] }
              | { type: 'f'; value: number[] },
              {
                type: 'd' | 'e';
              }
            >,
            true
          >
        >
      ];
    });
  });
});

}


// ----- source: tests/types.test.ts
{

describe('types', () => {
  type Input = [State, Event];

  it('wildcard patterns should typecheck', () => {
    let pattern: P.Pattern<Input>;
    pattern = P._;
    pattern = [P._, P._];
    pattern = [{ status: 'success', data: '' }, P._];
    pattern = [{ status: 'success', data: P.string }, P._];
    pattern = [{ status: 'success', data: P._ }, P._];
    pattern = [{ status: 'error', error: P.instanceOf(Error) }, P._];
    pattern = [{ status: 'idle' }, P._];
    pattern = [P._, { type: 'fetch' }];
    pattern = [P._, { type: P._ }];
    pattern = [{ status: 'idle' }, { type: 'fetch' }];
    pattern = [{ status: P._ }, { type: P._ }];
  });

  it('guard patterns should typecheck', () => {
    const pattern1: P.Pattern<Input> = P.when(() => true);
    const pattern2: P.Pattern<Input> = P.when((x) => {
      type t = Expect<Equal<typeof x, Input>>;
      return true;
    });

    const pattern3: P.Pattern<Input> = [
      P.when((state) => {
        type t = Expect<Equal<typeof state, State>>;
        return !!state;
      }),
      P.when((event) => {
        type t = Expect<Equal<typeof event, Event>>;
        return !!event;
      }),
    ];

    const pattern3_1: P.Pattern<Input> = [
      P._,
      { type: P.when((t: Event['type']) => true) },
    ];

    const pattern4: P.Pattern<Input> = [
      {
        status: 'success',
        data: P.when((d) => {
          type t = Expect<Equal<typeof d, string>>;
          return true;
        }),
      },
      P._,
    ];

    const pattern4_1: P.Pattern<Input> = [{ status: 'error', data: '' }, P._];

    const pattern5: P.Pattern<Input> = [
      P._,
      { type: P.when((t: Event['type']) => true) },
    ];

    const isFetch = (type: string): type is 'fetch' => type === 'fetch';

    const pattern6: P.Pattern<Input> = [P._, { type: P.when(isFetch) }];

    const pattern7: P.Pattern<{ x: string }> = {
      x: P.when((x) => {
        type t = Expect<Equal<typeof x, string>>;
        return true;
      }),
    };

    const pattern8: P.Pattern<[{ x: string }]> = [
      {
        x: P.when((x) => {
          type t = Expect<Equal<typeof x, string>>;
          return true;
        }),
      },
    ];

    const pattern9: P.Pattern<[{ x: string }, { y: number }]> = [
      {
        x: P.when((x) => {
          type t = Expect<Equal<typeof x, string>>;
          return true;
        }),
      },
      {
        y: P.when((y) => {
          type t = Expect<Equal<typeof y, number>>;
          return true;
        }),
      },
    ];

    const pattern10: P.Pattern<string | number> = P.when((x) => {
      type t = Expect<Equal<typeof x, string | number>>;
      return true;
    });
  });

  it('should infer values correctly in handler', () => {
    type Input = { type: string; hello?: { yo: number } } | string;

    match<Input>({ type: 'hello' }).with(P.string, (x) => {
      type t = Expect<Equal<typeof x, string>>;
      return 'ok';
    });

    const res = match<Input>({ type: 'hello' }).with(P.string, (x) => {
      type t = Expect<Equal<typeof x, string>>;
      return 'ok';
    });

    match<Input>({ type: 'hello' }).with(
      P.when((x) => true),
      (x) => {
        type t = Expect<Equal<typeof x, Input>>;
        return 'ok';
      }
    );

    match<Input>({ type: 'hello' }).with(
      P.when((x) => {
        type t = Expect<Equal<typeof x, Input>>;
        return true;
      }),
      (x) => {
        type t = Expect<Equal<typeof x, Input>>;
        return 'ok';
      }
    );
    match<Input>({ type: 'hello' }).with(P.not('hello' as const), (x) => {
      type t = Expect<Equal<typeof x, Input>>;
      return 'ok';
    });
    match<Input>({ type: 'hello' }).with(P.not(P.string), (x) => {
      type t = Expect<
        Equal<
          typeof x,
          {
            type: string;
            hello?: {
              yo: number;
            };
          }
        >
      >;
      return 'ok';
    });
    match<Input>({ type: 'hello' })
      .with(P.not(P.when((x) => true)), (x) => {
        type t = Expect<Equal<typeof x, Input>>;
        return 'ok';
      })
      .with({ type: P._ }, (x) => {
        type t = Expect<
          Equal<
            typeof x,
            {
              type: string;
              hello?: {
                yo: number;
              };
            }
          >
        >;
        return 'ok';
      });
    match<Input>({ type: 'hello' }).with({ type: P.string }, (x) => {
      type t = Expect<
        Equal<typeof x, { type: string; hello?: { yo: number } | undefined }>
      >;
      return 'ok';
    });
    match<Input>({ type: 'hello' }).with({ type: P.when((x) => true) }, (x) => {
      type t = Expect<
        Equal<typeof x, { type: string; hello?: { yo: number } | undefined }>
      >;
      return 'ok';
    });
    match<Input>({ type: 'hello' }).with(
      { type: P.not('hello' as 'hello') },
      (x) => {
        type t = Expect<
          Equal<
            typeof x,
            {
              type: string;
              hello?: { yo: number } | undefined;
            }
          >
        >;
        return 'ok';
      }
    );

    match<Input>({ type: 'hello' }).with({ type: P.not(P.string) }, (x) => {
      type t = Expect<Equal<typeof x, Input>>;
      return 'ok';
    });
    match<Input>({ type: 'hello' }).with(
      { type: P.not(P.when((x) => true)) },
      (x) => {
        type t = Expect<Equal<typeof x, Input>>;
        return 'ok';
      }
    );
    match<Input>({ type: 'hello' }).with(
      P.not({ type: P.when((x) => true) }),
      (x) => {
        type t = Expect<Equal<typeof x, string>>;
        return 'ok';
      }
    );
    match<Input>({ type: 'hello' }).with(P.not({ type: P.string }), (x) => {
      type t = Expect<Equal<typeof x, string>>;
      return 'ok';
    });
    match<Input>({ type: 'hello' }).with(P._, (x) => {
      type t = Expect<Equal<typeof x, Input>>;
      return 'ok';
    });
  });

  it('a union of object or primitive should be matched with a correct type inference', () => {
    type Input =
      | string
      | number
      | boolean
      | { type: string | number }
      | string[]
      | [number, number];

    match<Input>({ type: 'hello' })
      .with(P.string, (x) => {
        type t = Expect<Equal<typeof x, string>>;
        return 'ok';
      })
      .with(P.number, (x) => {
        type t = Expect<Equal<typeof x, number>>;
        return 'ok';
      })
      .with(P.boolean, (x) => {
        type t = Expect<Equal<typeof x, boolean>>;
        return 'ok';
      })
      .with({ type: P.string }, (x) => {
        type t = Expect<Equal<typeof x, { type: string }>>;
        return 'ok';
      })
      .with({ type: P._ }, (x) => {
        type t = Expect<Equal<typeof x, { type: string | number }>>;
        return 'ok';
      })
      .with([P.string], (x) => {
        type t = Expect<Equal<typeof x, [string]>>;
        return 'ok';
      })
      .with([P.number, P.number], (x) => {
        type t = Expect<Equal<typeof x, [number, number]>>;
        return 'ok';
      })
      .run();
  });

  describe('Unknown Input', () => {
    const users: unknown = [{ name: 'Gabriel', postCount: 20 }];

    const typedUsers = match(users)
      .with([{ name: P.string, postCount: P.number }], (users) => users)
      .otherwise(() => []);

    // type of `typedUsers` is { name: string, postCount: number }[]

    expect(
      typedUsers
        .map((user) => `<p>${user.name} has ${user.postCount} posts.</p>`)
        .join('')
    ).toEqual(`<p>Gabriel has 20 posts.</p>`);
  });

  it("should enforce all branches return the right typeP. when it's set", () => {
    match<number, number>(2)
      //  @ts-expect-error
      .with(2, () => 'string')
      //  @ts-expect-error
      .otherwise(() => '?');
  });

  it('issue #73: should enforce the handler as the right type', () => {
    const f = (x: number) => x.toLocaleString();
    const g = (x: string) => x.toUpperCase();
    expect(() =>
      match(false)
        // @ts-expect-error
        .with(true, f)
        // @ts-expect-error
        .with(false, g)
        // @ts-expect-error
        .with(true, (n: string) => '')
        .exhaustive()
    ).toThrow();
  });
});

describe('type narrowing inheritence', () => {
  describe('on a discriminated union type, once a case is handled it should be excluded from the input type', () => {
    it('union of literals', () => {
      const f = (input: 'a' | 'b') =>
        match(input)
          .with('a', () => 'a handled')
          // @ts-expect-error duplicates shouldn't be permitted
          .with('a', () => 'duplicated')
          .with('b', () => 'b handled')
          .exhaustive();

      const f2 = (input: 'a' | 'b' | 2 | 1) =>
        match(input)
          .with('a', () => 'a handled')
          .with('b', () => 'b handled')
          .with(1, () => '1 handled')
          // @ts-expect-error duplicates shouldn't be permitted
          .with(1, () => 'duplicated')
          .with(2, () => '2 handled')
          .exhaustive();
    });

    it('union of objects', () => {
      type Input = { type: 'a'; data: string } | { type: 'b'; data: number };

      const f = (input: Input) =>
        match(input)
          .with({ type: 'a' }, () => 'a handled')
          .with(
            {
              // @ts-expect-error duplicates shouldn't be permitted
              type: 'a',
            },
            () => 'duplicated'
          )
          .with({ type: 'b' }, () => 'b handled')
          .exhaustive();
    });

    it('should error after P.any', () => {
      type Input = { type: 'a'; data: string } | { type: 'b'; data: number };

      const f = (input: Input) =>
        match(input)
          .with(P.any, () => 'a handled')
          // @ts-expect-error
          .with({ type: 'a' }, () => 'duplicated')
          .exhaustive();
    });

    it("shouldn't exclude in case of primitive type", () => {
      const width = 100;
      const height = 200;
      const size = 10;
      let canShowInlineLegend = true as boolean;

      match<boolean>(true)
        .with(size >= 100 && width > height * 2.25, () => 'table')
        .with(size >= 100 && height > width * 1.5, () => 'table')
        .with(canShowInlineLegend, () => 'inline')
        .otherwise(() => 'none');
    });
  });

  it('should correctly instantiate the input type on every pattern creator functions', () => {
    match<'a' | 'b'>('a').with(
      P.when((x) => {
        type test = Expect<Equal<typeof x, 'a' | 'b'>>;
        return true;
      }),
      () => 'a'
    );

    match<'a' | 'b'>('a').with(
      // @ts-expect-error
      P.union('somethingwrong'),
      () => 'a'
    );

    match<{ type: 'a' } | { type: 'b' }>({ type: 'a' }).with(
      // @ts-expect-error
      P.intersection('asd'),
      () => 'a'
    );

    match<{ type: 'a' } | { type: 'b' }>({ type: 'a' }).with(
      // @ts-expect-error
      P.intersection('asd'),
      () => 'a'
    );

    match<{ type: 'a' } | { type: 'b' }>({ type: 'a' }).with(
      P.intersection({
        // @ts-expect-error
        type: P.union('oops'),
      }),
      () => 'a'
    );

    match<{ type: 'a' } | { type: 'b' }>({ type: 'a' }).with(
      // @ts-expect-error
      P.optional('asd'),
      () => 'a'
    );

    match<{ type: 'a' } | { type: 'b' }>({ type: 'a' }).with(
      P.optional({
        // @ts-expect-error
        type: P.union('oops'),
      }),
      () => 'a'
    );
  });
});

}


// ----- source: tests/unions.test.ts
{

describe('Unions (a | b)', () => {
  it('should match discriminated unions', () => {
    const val: Option<string> = {
      kind: 'some',
      value: 'hello',
    };

    const res = match(val as Option<string>)
      .with({ kind: 'some' }, (o) => {
        type t = Expect<Equal<typeof o, { kind: 'some'; value: string }>>;
        return o.value;
      })
      .with({ kind: 'none' }, () => 'no value')
      .exhaustive();

    type t = Expect<Equal<typeof res, string>>;

    expect(res).toEqual('hello');
  });

  it('should discriminate union types correctly 2', () => {
    type Post = {
      type: 'post';
      id: number;
      content: { body: string };
    };
    type Video = { type: 'video'; id: number; content: { src: string } };
    type Image = { type: 'image'; id: number; content: { src: number } };

    type Input = Post | Video | Image;

    const res = match<Input>({
      type: 'post',
      id: 2,
      content: { body: 'yo' },
    })
      .with({ type: 'post', id: 7 }, (x) => {
        type t = Expect<
          Equal<
            typeof x,
            {
              content: {
                body: string;
              };
              type: 'post';
              id: 7;
            }
          >
        >;
        return 1;
      })
      .with({ type: 'post', content: P._ }, (x) => {
        type t = Expect<Equal<typeof x, Post>>;
        return 1;
      })
      .with({ type: 'video', content: { src: P.string } }, (x) => {
        type t = Expect<Equal<typeof x, Video>>;
        return 2;
      })
      .with({ type: 'image' }, (x) => {
        type t = Expect<Equal<typeof x, Image>>;
        return 3;
      })
      .exhaustive();

    expect(res).toEqual(1);
  });

  it('should discriminate union types correctly 3', () => {
    type Text = { type: 'text'; content: string };
    type Img = { type: 'img'; src: string };
    type Video = { type: 'video'; src: string };
    type Story = {
      type: 'story';
      likes: number;
      views: number;
      author: string;
      src: string;
    };
    type Data = Text | Img | Video | Story;

    type Ok<T> = { type: 'ok'; data: T };
    type ResError<T> = { type: 'error'; error: T };

    type Result<TError, TOk> = Ok<TOk> | ResError<TError>;

    const result = {
      type: 'ok',
      data: { type: 'img', src: 'hello.com' },
    } as Result<Error, Data>;

    const ouput = match(result)
      .with({ type: 'ok', data: { type: 'text' } }, (res) => {
        type t = Expect<Equal<typeof res, Ok<Text>>>;
        return `<p>${res.data.content}</p>`;
      })
      .with({ type: 'ok', data: { type: 'img' } }, (res) => {
        type t = Expect<Equal<typeof res, Ok<Img>>>;
        return `<img src="${res.data.src}" />`;
      })
      .with({ type: 'ok', data: { type: 'story', likes: 10 } }, (res) => {
        type t = Expect<
          Equal<
            typeof res,
            {
              type: 'ok';
              data: {
                author: string;
                src: string;
                views: number;
                type: 'story';
                likes: 10;
              };
            }
          >
        >;
        return `<div>story with ${res.data.likes} likes</div>`;
      })
      .with({ type: 'error' }, (res) => {
        type t = Expect<Equal<typeof res, ResError<Error>>>;
        return '<p>Oups! An error occured</p>';
      })
      .otherwise(() => '<p>everything else</p>');

    expect(ouput).toEqual('<img src="hello.com" />');
  });

  it('Issue #41 — should be possible to pattern match on error objects', () => {
    type ServerError = Error & {
      response: Response;
      result: Record<string, any>;
      statusCode: number;
    };

    type ServerParseError = Error & {
      response: Response;
      statusCode: number;
      bodyText: string;
    };

    type Input = Error | ServerError | ServerParseError | undefined;

    const networkError = new Error() as Input;

    const message = match(networkError)
      .with(
        { statusCode: 401, name: P.string, message: P.string },
        (x) => 'Not Authenticated'
      )
      .with(
        { statusCode: 403, name: '', message: '' },
        (x) => 'Permission Denied'
      )
      .otherwise(() => 'Network Error');

    expect(message).toBe('Network Error');
  });
});

}


// ----- source: tests/variadic-tuples.test.ts
{

describe('variadic tuples ([a, ...b[]])', () => {
  describe('runtime', () => {
    describe('match', () => {
      it('[any ...any] pattern should match any non-empty array', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([P.any, ...P.array()], () => 'non empty')
            .otherwise(() => 'empty');

        expect(f([])).toBe('empty');
        expect(f([1])).toBe('non empty');
        expect(f([1, 2])).toBe('non empty');
        expect(f([1, 2, 3])).toBe('non empty');
        expect(f(['1', '2', '3', '4'])).toBe('non empty');
      });

      it('[...any, any] pattern should match any non-empty array', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([...P.array(), P.any], () => 'non empty')
            .otherwise(() => 'empty');

        expect(f([])).toBe('empty');
        expect(f([1])).toBe('non empty');
        expect(f([1, 2])).toBe('non empty');
        expect(f([1, 2, 3])).toBe('non empty');
        expect(f(['1', '2', '3', '4'])).toBe('non empty');
      });

      it('[any, ...any, any] patterns should match arrays with at least 2 elements', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([P.any, ...P.array(), P.any], () => '>= 2')
            .otherwise(() => '< 2');

        expect(f([1])).toBe('< 2');
        expect(f([1, 2])).toBe('>= 2');
        expect(f([1, 2, 3])).toBe('>= 2');
        expect(f(['1', '2', '3', '4'])).toBe('>= 2');
      });

      it('[number, ...string[]]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([P.number, ...P.array(P.string)], () => 'match')
            .otherwise(() => "doesn't match");

        expect(f([1])).toBe('match');
        expect(f([1, 2])).toBe("doesn't match");
        expect(f([1, 2, 3])).toBe("doesn't match");
        expect(f([1, '2'])).toBe('match');
        expect(f([1, '2', '3', '4'])).toBe('match');
      });

      it('[number, ...any, string]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([P.number, ...P.array(), P.string], () => 'match')
            .otherwise(() => "doesn't match");

        expect(f([1])).toBe("doesn't match");
        expect(f([1, 2])).toBe("doesn't match");
        expect(f([1, '2'])).toBe('match');
        expect(f([1, 2, 3, '4'])).toBe('match');
        expect(f([1, '1', '2', '3', '4'])).toBe('match');
      });

      it('[1, 2, 3, ...number[]]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([1, 2, 3, ...P.array(P.number)], () => 'match')
            .otherwise(() => "doesn't match");

        expect(f([1, 2, 3])).toBe('match');
        expect(f([1, 2, 3, 4, 5, 6])).toBe('match');
        expect(f([1])).toBe("doesn't match");
        expect(f([1, 2])).toBe("doesn't match");
        expect(f([1, 3, 2])).toBe("doesn't match");
        expect(f([1, 2, 3, 4, '5'])).toBe("doesn't match");
        expect(f([1, 2, 3, '4', 5])).toBe("doesn't match");
        expect(f([1, 2, 3, 4, '5', 6])).toBe("doesn't match");
      });

      it('[...number[], 1, 2, 3]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([...P.array(P.number), 1, 2, 3], () => 'match')
            .otherwise(() => "doesn't match");

        expect(f([1, 2, 3])).toBe('match');
        expect(f([4, 5, 6, 1, 2, 3])).toBe('match');
        expect(f([1])).toBe("doesn't match");
        expect(f([1, 2])).toBe("doesn't match");
        expect(f([1, 3, 2])).toBe("doesn't match");
        expect(f([1, 2, 3, 4, 5])).toBe("doesn't match");
        expect(f(['4', 5, 1, 2, 3])).toBe("doesn't match");
        expect(f([4, '5', 1, 2, 3])).toBe("doesn't match");
        expect(f([4, '5', 6, 1, 2, 3])).toBe("doesn't match");
      });

      it('[number, number ...boolean[], string, symbol]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with(
              [P.number, P.number, ...P.array(P.boolean), P.string, P.symbol],
              () => 'match'
            )
            .otherwise(() => "doesn't match");

        expect(f([1, 2, true, 'hello', 'yo'])).toBe("doesn't match");
        //                              ^ ❌
        expect(f([1, 2, true, 3, Symbol('yo')])).toBe("doesn't match");
        //                    ^ ❌
        expect(f([1, 2, 'true', 'str', Symbol('yo')])).toBe("doesn't match");
        //                ^ ❌
        expect(f([1, '2', true, 'str', Symbol('yo')])).toBe("doesn't match");
        //            ^ ❌
        expect(f(['1', 2, true, 'str', Symbol('yo')])).toBe("doesn't match");
        //         ^ ❌
        expect(f([1, 2, true, 'str', Symbol('yo')])).toBe('match');
        //       ^ ✅
        expect(f([1, 2, true, false, true, 'str', Symbol('yo')])).toBe('match');
        //       ^ ✅

        expect(f([1, 2, true, 'false', true, 'str', Symbol('yo')])).toBe(
          //                    ^ ❌
          "doesn't match"
        );
      });
    });

    describe('select', () => {
      it('[1, sel, 2, ...number[]]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with(
              [1, P.select(P.number), 2, ...P.array(P.number)],
              (sel) => sel
            )
            .otherwise(() => 'no');

        expect(f([1, 42, 2, 3])).toEqual(42);
      });

      it('[1, 2, ...sel(number)[]]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([1, 2, ...P.array(P.select(P.number))], (sel) => sel)
            .otherwise(() => 'no');

        expect(f([1, 2, 3, 4])).toEqual([3, 4]);
      });

      it('[...sel(number)[], 1, 2]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with([...P.array(P.select(P.number)), 1, 2], (sel) => sel)
            .otherwise(() => 'no');

        expect(f([3, 4, 1, 2])).toEqual([3, 4]);
      });

      it('[sel(a), ...sel(b), sel(c)]', () => {
        const f = (xs: unknown[]) =>
          match(xs)
            .with(
              [
                P.select('a', P.number),
                ...P.array(P.select('b', P.number)),
                P.select('c', P.string),
              ],
              (sel) => sel
            )
            .otherwise(() => 'no');

        expect(f([42, 1, 2, 3, '!'])).toEqual({ a: 42, b: [1, 2, 3], c: '!' });
      });
    });
  });

  describe('types', () => {
    it('unknown input', () => {
      const xs: unknown[] = [1, 2, 3, 'a', 'b', 'c'];

      match(xs)
        .with([P.any, ...P.array()], (xs) => {
          type t = Expect<Equal<typeof xs, [unknown, ...unknown[]]>>;
          return [];
        })
        .otherwise(() => {
          return [];
        });

      match(xs)
        .with([...P.array(), 7], (xs) => {
          type t = Expect<Equal<typeof xs, [...unknown[], number]>>;
          return [];
        })
        .otherwise(() => {
          return [];
        });

      match(xs)
        .with([42, ...P.array(P.number)], (xs) => {
          type t = Expect<Equal<typeof xs, [42, ...number[]]>>;
          return [];
        })
        .otherwise(() => {
          return [];
        });

      match(xs)
        .with([42, ...P.array(P.number), '!' as const], (xs) => {
          type t = Expect<Equal<typeof xs, [42, ...number[], '!']>>;
          return [];
        })
        .otherwise(() => {
          return [];
        });

      match(xs)
        .with([1, 2, ...P.array(P.number)], (xs) => {
          type t = Expect<Equal<typeof xs, [1, 2, ...number[]]>>;
          return [];
        })
        .otherwise(() => {
          return [];
        });

      match(xs)
        .with([...P.array(P.string), 'a', 'b'], (xs) => {
          type t = Expect<Equal<typeof xs, [...string[], 'a', 'b']>>;
          return [];
        })
        .otherwise(() => {
          return [];
        });
    });

    it('known input', () => {
      const xs: (string | number)[] = [1, 2, 3, 'a', 'b', 'c'];

      match(xs)
        .with([P.any, ...P.array()], (xs) => {
          type t = Expect<
            Equal<typeof xs, [string | number, ...(string | number)[]]>
          >;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([...P.array(), 7], (xs) => {
          type t = Expect<Equal<typeof xs, [...(string | number)[], 7]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([42, ...P.array(P.number)], (xs) => {
          type t = Expect<Equal<typeof xs, [42, ...number[]]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([42, ...P.array(P.number), 7], (xs) => {
          type t = Expect<Equal<typeof xs, [42, ...number[], 7]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with(
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...P.array(P.number), 7],
          (xs) => {
            type t = Expect<
              Equal<typeof xs, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...number[], 7]>
            >;
            return [];
          }
        )
        .otherwise(() => []);

      match(xs)
        .with([...P.array(P.number), 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (xs) => {
          type t = Expect<
            Equal<typeof xs, [...number[], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>
          >;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with(
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            ...P.array(P.number),
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
          ],
          (xs) => {
            type t = Expect<
              Equal<
                typeof xs,
                [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  ...number[],
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10
                ]
              >
            >;
            return [];
          }
        )
        .otherwise(() => []);

      match(xs)
        .with([1, 2, ...P.array(P.number)], (xs) => {
          type t = Expect<Equal<typeof xs, [1, 2, ...number[]]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([...P.array(P.string), 'a', 'b'], (xs) => {
          type t = Expect<Equal<typeof xs, [...string[], 'a', 'b']>>;
          return [];
        })
        .otherwise(() => []);
    });

    it('select', () => {
      const xs: (string | number)[] = [1, 2, 3, 'a', 'b', 'c'];

      match(xs)
        .with([P.select(), ...P.array()], (xs) => {
          type t = Expect<Equal<typeof xs, string | number>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([...P.array(P.select()), 7], (xs) => {
          type t = Expect<Equal<typeof xs, (string | number)[]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([42, ...P.array(P.select(P.number))], (xs) => {
          type t = Expect<Equal<typeof xs, number[]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with(
          [P.select('head', 42), ...P.array(P.select('tail', P.number))],
          (xs) => {
            type t = Expect<Equal<typeof xs, { tail: number[]; head: 42 }>>;
            return [];
          }
        )
        .otherwise(() => []);

      match(xs)
        .with([1, 2, ...P.array(P.select(P.number))], (xs) => {
          type t = Expect<Equal<typeof xs, number[]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs).with(
        [
          P.select('a', 1),
          P.select('b', 2),
          ...P.array(P.select('c', P.number)),
        ],
        (xs) => {
          type t = Expect<Equal<typeof xs, { c: number[]; a: 1; b: 2 }>>;
          return [];
        }
      );
      match(xs)
        .with([1, P.select(2), ...P.array(P.number)], (xs) => {
          type t = Expect<Equal<typeof xs, 2>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([...P.array(P.select(P.string)), 'a'], (xs) => {
          type t = Expect<Equal<typeof xs, string[]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs).with(
        [...P.array(P.select('inits', P.string)), P.select('last', 'a')],
        (xs) => {
          type t = Expect<Equal<typeof xs, { inits: string[]; last: 'a' }>>;
          return [];
        }
      );
      match(xs)
        .with([...P.array(P.string), P.select()], (xs) => {
          type t = Expect<Equal<typeof xs, string | number>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([...P.array(P.select(P.string)), 'a', 'b'], (xs) => {
          type t = Expect<Equal<typeof xs, string[]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with([...P.array(P.string), P.select(2), 'b'], (xs) => {
          type t = Expect<Equal<typeof xs, 2>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with(
          [
            ...P.array(P.select('a', P.string)),
            P.select('b', 2),
            P.select('c', 'b'),
          ],
          (xs) => {
            type t = Expect<Equal<typeof xs, { a: string[]; b: 2; c: 'b' }>>;
            return [];
          }
        )
        .otherwise(() => []);

      match(xs)
        .with([42, ...P.array(P.select(P.number)), '!'], (xs) => {
          type t = Expect<Equal<typeof xs, number[]>>;
          return [];
        })
        .otherwise(() => []);

      match(xs)
        .with(
          [
            P.select('a', 42),
            ...P.array(P.number.select('b')),
            P.select('c', '!'),
          ],
          (xs) => {
            type t = Expect<Equal<typeof xs, { b: number[]; a: 42; c: '!' }>>;
            return [];
          }
        )
        .otherwise(() => []);
    });
  });

  describe('exhaustiveness checking', () => {
    it('1 catch-all wildcards', () => {
      const xs: (string | number)[] = [1, 2, 3, 'a', 'b', 'c'];

      const throws = () =>
        match([])
          .with([P.any, ...P.array()], (xs) => {
            return 'branch 1' as const;
          })
          // @ts-expect-error: empty list case missing
          .exhaustive();

      expect(() => throws()).toThrow();

      const res = match(xs)
        .with([P.any, ...P.array()], (xs) => {
          return 'branch 1' as const;
        })
        .with([], (xs) => {
          return 'branch 2' as const;
        })
        .exhaustive();

      type t = Expect<Equal<typeof res, 'branch 1' | 'branch 2'>>;

      expect(res).toBe('branch 1');
    });

    it('2 catch-all wildcards', () => {
      const xs: (string | number)[] = [1, 2, 3, 'a', 'b', 'c'];

      match(xs)
        .with([P.any, P.any, ...P.array()], (xs) => {
          return 'branch 1' as const;
        })
        // @ts-expect-error: empty list case missing
        .exhaustive();

      match(xs)
        .with([P.any, P.any, ...P.array()], (xs) => {
          return 'branch 1' as const;
        })
        .with([P.any, ...P.array()], (xs) => {
          return 'branch 2' as const;
        })
        // @ts-expect-error: empty list case missing
        .exhaustive();

      const res = match(xs)
        .with([P.any, P.any, ...P.array()], (xs) => {
          return 'branch 1' as const;
        })
        .with([P.any, ...P.array()], (xs) => {
          return 'branch 2' as const;
        })
        .with([], (xs) => {
          return 'branch 3' as const;
        })
        .exhaustive();

      type t = Expect<Equal<typeof res, 'branch 1' | 'branch 2' | 'branch 3'>>;

      expect(res).toBe('branch 1');
    });
  });

  describe('select', () => {
    it('selection should work on the variadic part', () => {
      const fn = (input: (number | string)[]) =>
        match(input)
          .with([1, 2, ...P.array(P.number).select()], (rest) => {
            type t = Expect<Equal<typeof rest, number[]>>;
            return ['branch 1', ...rest];
          })
          .with([1, 2, ...P.array(P.number).select(), 'end'], (rest) => {
            type t = Expect<Equal<typeof rest, number[]>>;
            return ['branch 2', ...rest];
          })
          .with(P.array(P.number.or(P.string)), (rest) => {
            type t = Expect<Equal<typeof rest, (number | string)[]>>;
            return 'otherwise';
          })
          .exhaustive();

      expect(fn([1, 2, 3])).toEqual(['branch 1', 3]);
      expect(fn([1, 2, 3, 4])).toEqual(['branch 1', 3, 4]);
      expect(fn([1, 2, 23, 123, 'end'])).toEqual(['branch 2', 23, 123]);
      expect(fn(['1', 2, 3, 4])).toEqual('otherwise');
    });

    it('variadic and array patterns should be threated differently', () => {
      const fn = (input: (number | number[] | string)[]) =>
        match(input)
          .with([1, 2, ...P.array(P.number).select()], (rest) => {
            type t = Expect<Equal<typeof rest, number[]>>;
            return ['variadic 1', ...rest];
          })
          .with([1, 2, ...P.array(P.number).select(), 'end'], (rest) => {
            type t = Expect<Equal<typeof rest, number[]>>;
            return ['variadic 2', ...rest];
          })
          .with([1, 2, P.array(P.number).select()], (rest) => {
            type t = Expect<Equal<typeof rest, number[]>>;
            return ['array 1', ...rest];
          })
          .with([1, 2, P.array(P.number).select(), 'end'], (rest) => {
            type t = Expect<Equal<typeof rest, number[]>>;
            return ['array 2', ...rest];
          })
          .with(P.array(P.number.or(P.string).or(P.array())), (rest) => {
            type t = Expect<Equal<typeof rest, (number | number[] | string)[]>>;
            return 'otherwise';
          })
          .exhaustive();

      expect(fn([1, 2, 3])).toEqual(['variadic 1', 3]);
      expect(fn([1, 2, 3, 4])).toEqual(['variadic 1', 3, 4]);
      expect(fn([1, 2, 23, 123, 'end'])).toEqual(['variadic 2', 23, 123]);
      expect(fn([1, 2, [3, 4]])).toEqual(['array 1', 3, 4]);
      expect(fn([1, 2, [23, 123], 'end'])).toEqual(['array 2', 23, 123]);
      expect(fn(['1', 2, 3, 4])).toEqual('otherwise');
    });
  });
});

}


// ----- source: tests/when.test.ts
{

describe('when', () => {
  it('should work for simple cases', () => {
    const values = [
      { value: 1, expected: false },
      { value: -2, expected: false },
      { value: 3, expected: false },
      { value: 100, expected: false },
      { value: 20, expected: true },
      { value: 39, expected: true },
    ];

    values.forEach(({ value, expected }) => {
      expect(
        match(value)
          .with(
            P.when((x) => x > 10 && x < 50),
            () => true
          )
          .otherwise(() => false)
      ).toEqual(expected);
    });
  });

  it('should narrow down the value type based on type guard', () => {
    let n = 20;
    const res = match(n)
      .with(
        P.when((x): x is 13 => x === 13),
        (x) => {
          type t = Expect<Equal<typeof x, 13>>;
          return true;
        }
      )
      .otherwise(() => false);

    type t = Expect<Equal<typeof res, boolean>>;
  });

  it('should be able to correcly narrow a generic types', () => {
    const map = <A, B>(option: Option<A>, mapper: (value: A) => B): Option<B> =>
      match<Option<A>, Option<B>>(option)
        .when(
          (option): option is { kind: 'some'; value: A } =>
            option.kind === 'some',
          (option) => ({
            kind: 'some',
            value: mapper(option.value),
          })
        )
        .when(
          (option): option is { kind: 'none' } => option.kind === 'none',
          (option) => option
        )
        .run();

    const input = { kind: 'some' as const, value: 20 };
    const expectedOutput = { kind: 'some' as const, value: `number is 20` };

    const res = map(input, (x) => `number is ${x}`);

    type t = Expect<Equal<typeof res, Option<string>>>;

    expect(res).toEqual(expectedOutput);
  });

  it('should correctly infer the input type, even when used in another function pattern', () => {
    const f = (x: { a: number[] }) =>
      match(x)
        .with(
          {
            a: P.array(
              P.when((x) => {
                type t = Expect<Equal<typeof x, number>>;
                return true;
              })
            ),
          },
          () => 'true'
        )
        .otherwise(() => 'false');
  });

  it('should accept other values  than booleans in output', () => {
    const f = (x: { a: number[] }) =>
      match(x)
        .with(
          {
            a: P.when(() => {
              return 'anything truthy';
            }),
          },
          () => 'true'
        )
        .otherwise(() => 'false');

    expect(f({ a: [] })).toEqual('true');
  });

  describe('`with` with `when` clauses', () => {
    it('should work for simple cases', () => {
      const values: { value: State; expected: boolean }[] = [
        { value: { status: 'success', data: 'yo' }, expected: false },
        { value: { status: 'success', data: 'coucou' }, expected: true },
        { value: { status: 'idle' }, expected: false },
        { value: { status: 'loading' }, expected: false },
      ];

      values.forEach(({ value, expected }) => {
        expect(
          match(value)
            .with(
              { status: 'success' },
              (x) => x.data.length > 3,
              (x) => {
                type t = Expect<
                  Equal<typeof x, { status: 'success'; data: string }>
                >;
                return true;
              }
            )
            .with(
              { status: 'success', data: P.select('data') },
              (x) => x.data.length > 3 && x.data.length < 10,
              (x) => {
                type t = Expect<Equal<typeof x, { data: string }>>;
                return true;
              }
            )
            .with(
              { status: 'success', data: P.select('data') },
              (x) =>
                x.data.length > 3 && x.data.length < 10 && x.data.length % 2,
              (x) => {
                type t = Expect<Equal<typeof x, { data: string }>>;
                return true;
              }
            )
            .otherwise(() => false)
        ).toEqual(expected);
      });
    });

    it('type should be refined in each guard clause', () => {
      const values: { value: number | string; expected: string }[] = [
        { value: -1, expected: 'x: number' },
        { value: 2, expected: '2' },
        { value: 5, expected: '2 < x < 10' },
        { value: 100, expected: 'x: number' },
        { value: '100', expected: '2 < x.length < 10' },
        { value: 'Gabriel Vergnaud', expected: 'x: string' },
      ];

      values.forEach(({ value, expected }) => {
        const res = match(value)
          .with(
            P.any,
            (x): x is 2 => x === 2,
            (x) => {
              type t = Expect<Equal<typeof x, 2>>;
              return '2';
            }
          )
          .with(
            P.string,
            (x) => x.length > 2 && x.length < 10,
            () => '2 < x.length < 10'
          )
          .with(
            P.number,
            (x) => x > 2 && x < 10,
            () => '2 < x < 10'
          )
          .with(
            P.any,
            (x): x is number => typeof x === 'number',
            (x) => {
              type t = Expect<Equal<typeof x, number>>;
              return 'x: number';
            }
          )
          .with(P.string, () => 'x: string')
          .exhaustive();

        expect(res).toEqual(expected);
      });
    });
  });

  it('should narrow the type of the input based on the pattern', () => {
    type Option<T> = { type: 'some'; value: T } | { type: 'none' };

    const optionalFizzBuzz = (
      optionalNumber: Option<{
        opt?: 'x' | 'y';
        list: {
          test: 'a' | 'b';
          sublist: ('z' | 'w')[];
          prop: string;
          maybe?: string | number;
        }[];
        coords: { x: 'left' | 'right'; y: 'top' | 'bottom' };
      }>
    ) =>
      match(optionalNumber)
        .with(
          {
            type: 'some',
            value: {
              list: P.array({
                test: 'a',
                sublist: ['w'],
                maybe: P.string.optional(),
                prop: P.when((x) => {
                  type t = Expect<Equal<typeof x, string>>;
                  return true;
                }),
              }),
              opt: P.optional('x'),
            },
          },
          (x) => {
            type t = Expect<
              Equal<
                typeof x,
                {
                  type: 'some';
                  value: {
                    opt?: 'x' | undefined;
                    list: {
                      test: 'a';
                      sublist: ['w'];
                      prop: string;
                      maybe?: string | undefined;
                    }[];
                    coords: {
                      x: 'left' | 'right';
                      y: 'top' | 'bottom';
                    };
                  };
                }
              >
            >;
            return 'ok';
          }
        )
        .with(
          {
            type: 'some',
            value: {
              coords: P.not({ x: 'left' }),
            },
          },
          (x) => {
            type t = Expect<
              Equal<
                (typeof x)['value']['coords'],
                {
                  y: 'top' | 'bottom';
                  x: 'right';
                }
              >
            >;

            return 'ok';
          }
        )
        .with(
          {
            type: 'some',
            value: {
              list: P.array({ test: 'a', prop: P.select() }),
            },
          },
          (x) => {
            type t = Expect<Equal<typeof x, string[]>>;
          }
        )
        .with({ type: 'none' }, () => null)
        .with({ type: 'some' }, () => 'ok')
        .exhaustive();
  });

  it('should narrow the type of the input based on the pattern', () => {
    const optionalFizzBuzz = (optionalNumber: Option<number>) =>
      match(optionalNumber)
        // You can add up to 3 guard functions after your
        // pattern. They must all return true for the
        // handler to be executed.
        .with(
          { kind: 'some' },
          // `someNumber` is inferred to be a { kind: "some"; value: number }
          // based on the pattern provided as first argument.
          (someNumber) =>
            someNumber.value % 5 === 0 && someNumber.value % 3 === 0,
          () => 'fizzbuzz'
        )
        .with(
          {
            kind: 'some',
          },
          // you can also use destructuring
          ({ value }) => value % 5 === 0,
          () => 'buzz'
        )

        // Or you can use a `when` pattern, to apply your guard to
        // a subset of your input.
        .with(
          {
            kind: 'some',
            value: Pattern.when((value) => value % 3 === 0),
          },
          () => 'fizz'
        )
        // for all other numbers, just convert them to a string.
        .with({ kind: 'some' }, ({ value }) => value.toString())
        // if it's a none, return "nope"
        .with({ kind: 'none' }, () => 'nope')
        .exhaustive();
  });

  it('should be possible to hard code type parameters to P.when', () => {
    const regex = <input>(expr: RegExp) =>
      P.when<
        input | string, // input
        string, // narrowed value
        never // types excluded
      >((x): x is string => typeof x === 'string' && expr.test(x));

    type Input = string | { prop: string | number };

    expect(
      match<Input>('Hello')
        .with(regex(/^H/), () => true)
        .with({ prop: regex(/^H/) }, (x) => {
          type t = Expect<Equal<typeof x, { prop: string }>>;
          return true;
        })
        // @ts-expect-error
        .exhaustive()
    ).toBe(true);
  });

  it('should be possible to do some manipulations on the input type', () => {
    const notString = <input>() =>
      P.when<
        input | string, // input
        Exclude<input, string>, // narrowed value
        never // types excluded
      >((x): x is Exclude<input, string> => typeof x !== 'string');

    type Input = { prop: string | number };

    expect(
      match<Input>({ prop: 20 })
        .with({ prop: notString() }, (x) => {
          type t = Expect<Equal<typeof x, { prop: number }>>;
          return true;
        })
        // @ts-expect-error
        .exhaustive()
    ).toBe(true);
  });

  it('issue #153: P.when should preserve undefined.', () => {
    type Data = { digit: number };

    type Input = {
      data: Data | undefined;
    };

    const input: Input = { data: undefined };

    const result = match(input)
      .with(
        {
          data: P.when((data) => {
            type t = Expect<Equal<typeof data, Data | undefined>>;
            return data ? data.digit > 5 : 0;
          }),
        },
        () => 'digit is more than 5'
      )
      .otherwise(() => 'digit is less than 5');

    expect(result).toBe('digit is less than 5');
  });
});

}


// ----- source: tests/wildcards.test.ts
{

describe('wildcards', () => {
  it('should match String wildcards', () => {
    const res = match<string | number | boolean | null | undefined>('')
      .with(NaN, () => '')
      .with(P.string, (x) => {
        type t = Expect<Equal<typeof x, string>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(true);
  });

  it('should match Number wildcards', () => {
    const res = match<string | number | boolean | null | undefined>(2)
      .with(P.number, (x) => {
        type t = Expect<Equal<typeof x, number>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(true);
  });

  it('should match Boolean wildcards', () => {
    const res = match<string | number | boolean | null | undefined>(true)
      .with(P.boolean, (x) => {
        type t = Expect<Equal<typeof x, boolean>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(true);
  });

  it('should match nullish wildcard', () => {
    const res = match<string | number | boolean | null | undefined>(null)
      .with(P.nullish, (x) => {
        type t = Expect<Equal<typeof x, null | undefined>>;
        return true;
      })
      .otherwise(() => false);

    const res2 = match<string | number | boolean | null | undefined>(undefined)
      .with(P.nullish, (x) => {
        type t = Expect<Equal<typeof x, null | undefined>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(true);
    expect(res2).toEqual(true);
  });

  describe('P.nonNullable', () => {
    it('should narrow primitive types correctly', () => {
      type Input = string | number | boolean | null | undefined;
      const res = match<Input>(false)
        .with(P.nonNullable, (x) => {
          type t = Expect<Equal<typeof x, string | number | boolean>>;
          return true;
        })
        .otherwise(() => false);

      const res2 = match<0 | 1 | 2 | null>(0)
        .with(P.nonNullable, (x) => {
          type t = Expect<Equal<typeof x, 0 | 1 | 2>>;
          return true;
        })
        .with(null, () => false)
        .exhaustive();

      expect(res).toEqual(true);
      expect(res2).toEqual(true);
    });

    it('should narrow object types correctly', () => {
      type Input =
        | {
            __typename: 'ValidationRejection';
            fields: string[];
          }
        | {
            __typename: 'ValidationRejection';
          };

      const pattern = {
        __typename: 'ValidationRejection',
        fields: P.nonNullable,
      } as const;
      type X = InvertPattern<typeof pattern, Input>;
      type Y = ExtractPreciseValue<Input, X>;

      const fn = (data: Input) =>
        match(data)
          .with(
            { __typename: 'ValidationRejection', fields: P.nonNullable },
            ({ fields }) => {
              type t = Expect<Equal<typeof fields, string[]>>;
              return 'matched';
            }
          )
          .otherwise(() => 'did not match');

      expect(fn({ __typename: 'ValidationRejection' })).toBe('did not match');
      expect(fn({ __typename: 'ValidationRejection', fields: [] })).toBe(
        'matched'
      );
    });

    it('combined with exhaustive, it should consider all values except null and undefined to be handled', () => {
      const fn1 = (input: string | number | null | undefined) =>
        match(input)
          .with(P.nonNullable, (x) => {
            type t = Expect<Equal<typeof x, string | number>>;
          })
          .with(P.nullish, () => {})
          // should type-check
          .exhaustive();

      const fn2 = (input: { nested: string | number | null | undefined }) =>
        match(input)
          .with({ nested: P.nonNullable }, (x) => {
            type t = Expect<Equal<typeof x, { nested: string | number }>>;
          })
          .with({ nested: P.nullish }, (x) => {
            type t = Expect<Equal<typeof x, { nested: null | undefined }>>;
          })
          // should type-check
          .exhaustive();
    });
  });

  it('should match String, Number and Boolean wildcards', () => {
    // Will be { id: number, title: string } | { errorMessage: string }
    let httpResult = {
      id: 20,
      title: 'hellooo',
    }; /* API logic. */

    const res = match<any, Blog | Error>(httpResult)
      .with({ id: P.number, title: P.string }, (r) => ({
        id: r.id,
        title: r.title,
      }))
      .with({ errorMessage: P.string }, (r) => new Error(r.errorMessage))
      .otherwise(() => new Error('Client parse error'));

    expect(res).toEqual({
      id: 20,
      title: 'hellooo',
    });
  });

  it('should infer correctly negated String wildcards', () => {
    const res = match<string | number | boolean>('')
      .with(P.not(P.string), (x) => {
        type t = Expect<Equal<typeof x, number | boolean>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(false);
  });

  it('should infer correctly negated Number wildcards', () => {
    const res = match<string | number | boolean>(2)
      .with(P.not(P.number), (x) => {
        type t = Expect<Equal<typeof x, string | boolean>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(false);
  });

  it('should infer correctly negated Boolean wildcards', () => {
    const res = match<string | number | boolean>(true)
      .with(P.not(P.boolean), (x) => {
        type t = Expect<Equal<typeof x, string | number>>;
        return true;
      })
      .otherwise(() => false);

    expect(res).toEqual(false);
  });

  it("when used as an object property pattern, it shouldn't match if the key isn't defined on the object.", () => {
    type Id = { teamId: number } | { storeId: number };

    const selectedId: Id = { teamId: 1 };

    const res = match<Id>(selectedId)
      .with({ storeId: P._ }, () => 'storeId')
      .with({ teamId: P._ }, () => 'teamId')
      .exhaustive();

    expect(res).toEqual('teamId');
  });

  describe('catch all', () => {
    const allValueTypes = [
      undefined,
      null,
      Symbol(2),
      2,
      'string',
      true,
      () => {},
      {},
      [],
      new Map(),
      new Set(),
    ];

    allValueTypes.forEach((value) => {
      it(`should match ${typeof value} values`, () => {
        expect(
          match(value)
            .with(P._, () => 'yes')
            .exhaustive()
        ).toEqual('yes');
      });
    });
  });
});

}
