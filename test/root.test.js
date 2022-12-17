let expect = require("chai").expect;
let squareRoot = require("../js/root");

describe("Operacion raiz", function () {
    describe("test 1", () => {
        it("return 3", () => {
            let numberA = "9";
            let symbol = "r";

            const result = squareRoot.root(numberA, symbol);

            expect(result).to.equal("3");
        });
    });
    describe("test 2", () => {
        it("return 25", () => {
            let numberA = "625";
            let symbol = "r";

            const result = squareRoot.root(numberA, symbol);

            expect(result).to.equal("25");
        });
    });

    describe("test 3", () => {
        it("return 100", () => {
            let numberA = "10000";
            let symbol = "r";

            const result = squareRoot.root(numberA, symbol);

            expect(result).to.equal("100");
        });
    });

    describe("test 4", () => {
        it("return 95", () => {
            let numberA = "9025";
            let symbol = "r";

            const result = squareRoot.root(numberA, symbol);

            expect(result).to.equal("95");
        });
    });
});
