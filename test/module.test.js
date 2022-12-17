let expect = require("chai").expect;

describe("Operacion modulo", function () {
    describe("test 1", () => {
        it("return 0", () => {
            let numberA = "10";
            let numberB = "10";

            const result = module.module(numberA, numberB);

            expect(result).to.equal("0");
        });
    });

    describe("test 2", () => {
        it("return 250.000", () => {
            let numberA = "500";
            let numberB = "2";

            const result = module.module(numberA, numberB);

            expect(result).to.equal("0");
        });
    });

    describe("test 3", () => {
        it("return 2", () => {
            let numberA = "2000";
            let numberB = "3";

            const result = module.module(numberA, numberB);

            expect(result).to.equal("2");
        });
    });

    describe("test 4", () => {
        it("return 120", () => {
            let numberA = "1920";
            let numberB = "180";

            const result = module.module(numberA, numberB);

            expect(result).to.equal("120");
        });
    });
});
