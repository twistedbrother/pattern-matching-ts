type Condition<TValue> = (value: TValue) => boolean;

type Execution<TValue, TResult> = (value: TValue) => TResult;

type Pattern<TValue, TResult> = {
  condition: Condition<TValue>;
  execution: Execution<TValue, TResult>;
};

const when = <TValue, TResult>(
  condition: Condition<TValue>,
  execution: Execution<TValue, TResult>
) => {
  return {
    condition,
    execution
  };
};

const match = <TValue, TResult>(value: TValue) => (
  ...patterns: Array<Pattern<TValue, TResult>>
) => (defaultExecute: Execution<TValue, TResult>) => {
  const filteredPatterns = patterns.filter(
    (pattern: Pattern<TValue, TResult>) => pattern.condition(value)
  );

  return filteredPatterns.length >= 1
    ? filteredPatterns[0].execution(value)
    : defaultExecute(value);
};

export { Condition, Execution, Pattern, when, match };
