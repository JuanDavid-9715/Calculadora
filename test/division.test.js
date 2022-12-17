let expect = require("chai").expect;
let division = require("../js/division");

describe("Operacion divicion", function () {
    describe("test 1", () => {
        it("return 1", () => {
            let numberA = "10";
            let numberB = "10";
            let symbol = "/";

            const result = division.division(numberA, numberB, symbol);

            expect(result).to.equal("1");
        });
    });

    describe("test 2", () => {
        it("return 1", () => {
            let numberA = "500";
            let numberB = "500";
            let symbol = "/";

            const result = division.division(numberA, numberB, symbol);

            expect(result).to.equal("1");
        });
    });

    describe("test 3", () => {
        it("return 0.666", () => {
            let numberA = "2000";
            let numberB = "3000";
            let symbol = "/";

            const result = division.division(numberA, numberB, symbol);

            expect(result).to.equal("0.666");
        });
    });

    describe("test 4", () => {
        it("return 10,666", () => {
            let numberA = "1920";
            let numberB = "180";
            let symbol = "/";

            const result = division.division(numberA, numberB, symbol);

            expect(result).to.equal("10,666");
        });
    });
});
