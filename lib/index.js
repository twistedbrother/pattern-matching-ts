"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const when = (condition) => {
    return (execution) => {
        return {
            condition,
            execution
        };
    };
};
exports.when = when;
const match = (value) => (...patterns) => (defaultExecute) => {
    const filteredPatterns = patterns.filter((pattern) => pattern.condition(value));
    return filteredPatterns.length >= 1
        ? filteredPatterns[0].execution(value)
        : !!defaultExecute
            ? defaultExecute(value)
            : throwError();
};
exports.match = match;
const throwError = () => {
    throw new Error("Error: No pattern matched. Please use a wildcard pattern.");
};
