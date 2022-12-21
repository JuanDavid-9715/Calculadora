const addition = function (numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA + numB;

    return result.toString();
};

const subtraction = function (numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA - numB;

    return result.toString();
};

const multiplication = function (numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA * numB;

    return result.toString();
};

const division = function (numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA / numB;

    return result.toString();
};

const module = function (numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA % numB;

    return result.toString();
};

const powers = function (numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA ** numB;

    return result.toString();
};

const root = function (numberA) {
    let numA = parseInt(numberA);

    const result = Math.sqrt(numA);

    return result.toString();
};
