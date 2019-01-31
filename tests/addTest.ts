import { add } from "../src/add";

describe("Add", () => {
    it("Add", () => {
        // Arrange
        const expected = 3;

        // Act
        const actual = add(1, 2);

        // Assert
        expect(expected).toEqual(actual);
    });
})