let squareRoot = require("../../js/root");

describe("Operacion resta", function () {
    it("test 1 return 3", () => {
        let numberA = "9";
        let symbol = "r";

        const result = squareRoot.root(numberA, numberB, symbol);

        expect(result).toEqual("3");
    });

    it("test 2 return 25", () => {
        let numberA = "625";
        let symbol = "r";

        const result = squareRoot.root(numberA, numberB, symbol);

        expect(result).toEqual("25");
    });

    it("test 3 return 100", () => {
        let numberA = "10000";
        let symbol = "r";

        const result = squareRoot.root(numberA, numberB, symbol);

        expect(result).toEqual("100");
    });

    it("test 4 return 95", () => {
        let numberA = "9025";
        let symbol = "r";

        const result = squareRoot.root(numberA, numberB, symbol);

        expect(result).toEqual("95");
    });
});
