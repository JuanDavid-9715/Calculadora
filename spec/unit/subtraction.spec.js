let subtraction = require("../../js/subtraction");

describe("Operacion resta", function () {
    it("test 1 return 0", () => {
        let numberA = "10";
        let numberB = "10";
        let symbol = "-";

        const result = subtraction.subtraction(numberA, numberB, symbol);

        expect(result).toEqual("0");
    });

    it("test 2 return 0", () => {
        let numberA = "500";
        let numberB = "500";
        let symbol = "-";

        const result = subtraction.subtraction(numberA, numberB, symbol);

        expect(result).toEqual("0");
    });

    it("test 3 return 1000", () => {
        let numberA = "2000";
        let numberB = "3000";
        let symbol = "-";

        const result = subtraction.subtraction(numberA, numberB, symbol);

        expect(result).toEqual("-1000");
    });

    it("test 4 return 1740", () => {
        let numberA = "1920";
        let numberB = "180";
        let symbol = "-";

        const result = subtraction.subtraction(numberA, numberB, symbol);

        expect(result).toEqual("1740");
    });
});
