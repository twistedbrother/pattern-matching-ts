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

export { Condition, Execution, Pattern, when };
