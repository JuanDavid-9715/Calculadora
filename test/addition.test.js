let expect = require("chai").expect;
let addition = require("../js/addition");

describe("Operacion suma", function () {
    describe("test 1", () => {
        it("return 20", () => {
            let numberA = "10";
            let numberB = "10";

            const result = addition.addition(numberA, numberB);

            expect(result).to.equal("20");
        });
    });

    describe("test 2", () => {
        it("return 1000", () => {
            let numberA = "500";
            let numberB = "500";

            const result = addition.addition(numberA, numberB);

            expect(result).to.equal("1000");
        });
    });

    describe("test 3", () => {
        it("return 5000", () => {
            let numberA = "2000";
            let numberB = "3000";

            const result = addition.addition(numberA, numberB);

            expect(result).to.equal("5000");
        });
    });

    describe("test 4", () => {
        it("return 2100", () => {
            let numberA = "180";
            let numberB = "1920";

            const result = addition.addition(numberA, numberB);

            expect(result).to.equal("2100");
        });
    });
});
