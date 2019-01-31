import {
    Condition,
    Execution,
    Pattern,
    when,
    match
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
        expect(actual).toEqual(expected);
    });

    it("Should return a result when a pattern is matching", () => {
        // Arrange
        const expected = 42;

        // Act
        const actual = match(1337)(
            when(
                (v) => v === 42, 
                (v) => 1337
            ),
            when(
                (v) => v === 1337, 
                (v) => 42
            )
        )(_ => _);

        // Assert
        expect(actual).toEqual(expected);
    });

    it("Should return a default result when no patterns are matching", () => {
        // Arrange
        const expected = 9;

        // Act
        const actual = match(1)(
            when(
                (v) => v === 42, 
                (v) => 1337
            ),
            when(
                (v) => v === 1337, 
                (v) => 42)
        )( _ => 9);

        // Assert
        expect(actual).toEqual(expected);
    });
});