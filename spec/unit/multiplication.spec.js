let multiplication = require("../../js/multiplication");

describe("Operacion resta", function () {
    it("test 1 return 100", () => {
        let numberA = "10";
        let numberB = "10";
        let symbol = "x";

        const result = multiplication.multiplication(numberA, numberB, symbol);

        expect(result).toEqual("100");
    });

    it("test 2 return 250000", () => {
        let numberA = "500";
        let numberB = "500";
        let symbol = "x";

        const result = multiplication.multiplication(numberA, numberB, symbol);

        expect(result).toEqual("250000");
    });

    it("test 3 return 6000000", () => {
        let numberA = "2000";
        let numberB = "3000";
        let symbol = "x";

        const result = multiplication.multiplication(numberA, numberB, symbol);

        expect(result).toEqual("6000000");
    });

    it("test 4 return 345600", () => {
        let numberA = "1920";
        let numberB = "180";
        let symbol = "x";

        const result = multiplication.multiplication(numberA, numberB, symbol);

        expect(result).toEqual("345600");
    });
});
