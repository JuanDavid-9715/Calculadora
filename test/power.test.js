let expect = require("chai").expect;
let powers = require("../js/powers");

describe("Operacion a la potencia", function () {
    describe("test 1", () => {
        it("return 10000000000", () => {
            let numberA = "10";
            let numberB = "10";
            let symbol = "^";

            const result = powers.powers(numberA, numberB, symbol);

            expect(result).to.equal("10000000000");
        });
    });

    describe("test 2", () => {
        it("return 250.000", () => {
            let numberA = "500";
            let numberB = "2";
            let symbol = "^";

            const result = powers.powers(numberA, numberB, symbol);

            expect(result).to.equal("250.000");
        });
    });

    describe("test 3", () => {
        it("return 8000000000", () => {
            let numberA = "2000";
            let numberB = "3";
            let symbol = "^";

            const result = powers.powers(numberA, numberB, symbol);

            expect(result).to.equal("8000000000");
        });
    });

    describe("test 4", () => {
        it("return 10,666", () => {
            let numberA = "1";
            let numberB = "1";
            let symbol = "^";

            const result = powers.powers(numberA, numberB, symbol);

            expect(result).to.equal("1");
        });
    });
});
