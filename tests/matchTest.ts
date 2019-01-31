import {
    Condition,
    Execution,
    Pattern,
    when
} from "../src/match";

describe("Patter matching tests", () => {
    it("Should return a pattern when combining a condition and an execution", () => {
        // Arrange
        const condition: Condition<number> = (x: number) => true;
        const execution: Execution<number, string> = (x: number) => x.toString(); 

        const expected = {
            condition,
            execution,
        }

        // Act
        const actual= when(condition, execution);

        // Assert
        expect(expected).toEqual(actual);
    });
});