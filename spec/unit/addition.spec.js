let addition = require("../../js/addition");

describe("Operacion suma", function () {
    it("test 1 return 20", () => {
        let numberA = "10";
        let numberB = "10";

        const result = addition.addition(numberA, numberB);

        expect(result).toEqual("20");
    });

    it("test 2 return 1000", () => {
        let numberA = "500";
        let numberB = "500";

        const result = addition.addition(numberA, numberB);

        expect(result).toEqual("1000");
    });

    it("test 3 return 5000", () => {
        let numberA = "2000";
        let numberB = "3000";

        const result = addition.addition(numberA, numberB);

        expect(result).toEqual("5000");
    });

    it("test 4 return 2100", () => {
        let numberA = "180";
        let numberB = "1920";

        const result = addition.addition(numberA, numberB);

        expect(result).toEqual("2100");
    });
});
