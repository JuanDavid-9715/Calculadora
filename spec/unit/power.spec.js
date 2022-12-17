let powers = require("../../js/powers");

describe("Operacion resta", function () {
    it("test 1 return 10000000000", () => {
        let numberA = "10";
        let numberB = "10";
        let symbol = "^";

        const result = powers.powers(numberA, numberB, symbol);

        expect(result).toEqual("10000000000");
    });

    it("test 2 return 250.000", () => {
        let numberA = "500";
        let numberB = "2";
        let symbol = "^";

        const result = powers.powers(numberA, numberB, symbol);

        expect(result).toEqual("250000");
    });

    it("test 3 return 8000000000", () => {
        let numberA = "2000";
        let numberB = "3";
        let symbol = "^";

        const result = powers.powers(numberA, numberB, symbol);

        expect(result).toEqual("8000000000");
    });

    it("test 4 return 10,666", () => {
        let numberA = "1";
        let numberB = "1";
        let symbol = "^";

        const result = powers.powers(numberA, numberB, symbol);

        expect(result).toEqual("1");
    });
});
