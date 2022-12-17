let expect = require("chai").expect;
let subtraction = require("../js/subtraction");

describe("Operacion resta", function () {
    describe("test 1", () => {
        it("return 0", () => {
            let numberA = "10";
            let numberB = "10";
            let symbol = "-";

            const result = subtraction.subtraction(numberA, numberB, symbol);

            expect(result).to.equal("0");
        });
    });

    describe("test 2", () => {
        it("return 0", () => {
            let numberA = "500";
            let numberB = "500";
            let symbol = "-";

            const result = subtraction.subtraction(numberA, numberB, symbol);

            expect(result).to.equal("0");
        });
    });

    describe("test 3", () => {
        it("return 1000", () => {
            let numberA = "2000";
            let numberB = "3000";
            let symbol = "-";

            const result = subtraction.subtraction(numberA, numberB, symbol);

            expect(result).to.equal("-1000");
        });
    });

    describe("test 4", () => {
        it("return 1740", () => {
            let numberA = "1920";
            let numberB = "180";
            let symbol = "-";

            const result = subtraction.subtraction(numberA, numberB, symbol);

            expect(result).to.equal("1740");
        });
    });
});
