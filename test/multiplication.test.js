let expect = require("chai").expect;
let multiplication = require("../js/multiplication");

describe("Operacion multiplicacion", function () {
    describe("test 1", () => {
        it("return 100", () => {
            let numberA = "10";
            let numberB = "10";
            let symbol = "x";

            const result = multiplication.multiplication(
                numberA,
                numberB,
                symbol
            );

            expect(result).to.equal("100");
        });
    });

    describe("test 2", () => {
        it("return 250000", () => {
            let numberA = "500";
            let numberB = "500";
            let symbol = "x";

            const result = multiplication.multiplication(
                numberA,
                numberB,
                symbol
            );

            expect(result).to.equal("250000");
        });
    });

    describe("test 3", () => {
        it("return 6000000", () => {
            let numberA = "2000";
            let numberB = "3000";
            let symbol = "x";

            const result = multiplication.multiplication(
                numberA,
                numberB,
                symbol
            );

            expect(result).to.equal("6000000");
        });
    });

    describe("test 4", () => {
        it("return 345600", () => {
            let numberA = "1920";
            let numberB = "180";
            let symbol = "x";

            const result = multiplication.multiplication(
                numberA,
                numberB,
                symbol
            );

            expect(result).to.equal("345600");
        });
    });
});
