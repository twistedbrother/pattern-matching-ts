declare type Condition<TValue> = (value: TValue) => boolean;
declare type Execution<TValue, TResult> = (value: TValue) => TResult;
declare type Pattern<TValue, TResult> = {
    condition: Condition<TValue>;
    execution: Execution<TValue, TResult>;
};
declare const when: <TValue, TResult>(condition: Condition<TValue>) => (execution: Execution<TValue, TResult>) => {
    condition: Condition<TValue>;
    execution: Execution<TValue, TResult>;
};
declare const match: <TValue, TResult>(value: TValue) => (...patterns: Pattern<TValue, TResult>[]) => (defaultExecute?: Execution<TValue, TResult> | undefined) => {};
export { Condition, Execution, Pattern, when, match };
