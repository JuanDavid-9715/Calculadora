let division = require("../../js/division");

describe("Operacion resta", function () {
    it("test 1 return 1", () => {
        let numberA = "10";
        let numberB = "10";
        let symbol = "/";

        const result = division.division(numberA, numberB, symbol);

        expect(result).toEqual("1");
    });

    it("test 2 return 1", () => {
        let numberA = "500";
        let numberB = "500";
        let symbol = "/";

        const result = division.division(numberA, numberB, symbol);

        expect(result).toEqual("1");
    });

    it("test 3 return 0.6666666666666666", () => {
        let numberA = "2000";
        let numberB = "3000";
        let symbol = "/";

        const result = division.division(numberA, numberB, symbol);

        expect(result).toEqual("0.6666666666666666");
    });

    it("test 4 return 10.666666666666666", () => {
        let numberA = "1920";
        let numberB = "180";
        let symbol = "/";

        const result = division.division(numberA, numberB, symbol);

        expect(result).toEqual("10.666666666666666");
    });
});
