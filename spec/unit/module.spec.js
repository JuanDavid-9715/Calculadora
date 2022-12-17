describe("Operacion resta", function () {
    it("test 1 return 0", () => {
        let numberA = "10";
        let numberB = "10";

        const result = module.module(numberA, numberB);

        expect(result).toEqual("0");
    });

    it("test 2 return 250.000", () => {
        let numberA = "500";
        let numberB = "2";

        const result = module.module(numberA, numberB);

        expect(result).toEqual("0");
    });

    it("test 3 return 2", () => {
        let numberA = "2000";
        let numberB = "3";

        const result = module.module(numberA, numberB);

        expect(result).toEqual("2");
    });

    it("test 4 return 120", () => {
        let numberA = "1920";
        let numberB = "180";

        const result = module.module(numberA, numberB);

        expect(result).toEqual("120");
    });
});
