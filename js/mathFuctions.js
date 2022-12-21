function addition(numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA + numB;

    return result.toString();
}

function subtraction(numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA - numB;

    return result.toString();
}

function multiplication(numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA * numB;

    return result.toString();
}

function division(numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA / numB;

    return result.toString();
}

function module(numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA % numB;

    return result.toString();
}

function powers(numberA, numberB) {
    let numA = parseInt(numberA);
    let numB = parseInt(numberB);

    const result = numA ** numB;

    return result.toString();
}

function root(numberA) {
    let numA = parseInt(numberA);

    const result = Math.sqrt(numA);

    return result.toString();
}
