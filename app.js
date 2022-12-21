// Variables
let displayMath;
let displayResult;

let operatorA = "";
let operatorB = "";
let operation = "";

function calculator() {
    //Variables
    displayMath = document.getElementById("displayMath");
    displayResult = document.getElementById("displayResult");

    let num0 = document.getElementById("num0");
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let num3 = document.getElementById("num3");
    let num4 = document.getElementById("num4");
    let num5 = document.getElementById("num5");
    let num6 = document.getElementById("num6");
    let num7 = document.getElementById("num7");
    let num8 = document.getElementById("num8");
    let num9 = document.getElementById("num9");
    let decimal = document.getElementById("point");

    let deleteAll = document.getElementById("deleteAll");
    let deleteLast = document.getElementById("deleteLast");
    let root = document.getElementById("root");
    let power = document.getElementById("power");
    let module = document.getElementById("module");
    let division = document.getElementById("division");
    let multiplication = document.getElementById("multiplication");
    let subtraction = document.getElementById("subtraction");
    let addition = document.getElementById("addition");
    let equal = document.getElementById("equal");

    //Events onClick
    num0.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "0"
        );
    };
    num1.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "1"
        );
    };
    num2.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "2"
        );
    };
    num3.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "3"
        );
    };
    num4.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "4"
        );
    };
    num5.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "5"
        );
    };
    num6.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "6"
        );
    };
    num7.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "7"
        );
    };
    num8.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "8"
        );
    };
    num9.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "9"
        );
    };
    decimal.onclick = function (e) {
        displayMath.textContent = addNumber(
            displayMath.textContent,
            operation,
            "."
        );
    };
    deleteAll.onclick = function (e) {
        displayMath.textContent = "|";
        displayResult.textContent = "0";
        reset();
    };
    deleteLast.onclick = function (e) {
        displayMath.textContent = deleteOne(displayMath.textContent);
    };
    root.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "r"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "r";
    };
    power.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "^"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "^";
    };
    module.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "%"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "%";
    };
    division.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "/"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "/";
    };
    multiplication.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "x"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "x";
    };
    subtraction.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "-"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "-";
    };
    addition.onclick = function (e) {
        reset();
        let [messageOperator, message] = addOperator(
            displayMath.textContent,
            displayResult.textContent,
            "+"
        );
        displayMath.textContent = messageOperator;
        operatorA = message;
        operation = "+";
    };
    equal.onclick = function (e) {
        operatorB = "";
        let text = displayMath.textContent.slice(0, -1);

        for (let i = 0; i < text.length; i++) {
            operatorB = operatorB + text[i];

            if (operatorA + " " + operation + " " == operatorB) {
                operatorB = "";
            }
        }
        console.log("operadorA: " + operatorA);
        console.log("operadorB: " + operatorB);
        console.log("funcion: " + operation);
        displayResult.textContent = solve(operatorA, operatorB, operation);
    };
}

function reset() {
    operatorA = "";
    operatorB = "";
    operation = "";
}
