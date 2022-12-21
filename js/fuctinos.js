function deleteOne(message) {
    let text = "";

    if (message != "|") {
        switch (message[message.length - 2]) {
            case "(":
                break;
            case " ":
                text = message.slice(0, -4);
                break;
            default:
                text = message.slice(0, -2);
        }
        text = text + "|";
    } else text = message;

    return text;
}

function addNumber(message, operator, number) {
    let text = "";

    if (operator == "r") text = message.slice(0, -2) + number + " |";
    else text = message.slice(0, -1) + number + "|";

    return text;
}

function addOperator(messageMath, messageResult, operator) {
    let text = "";
    let textOperator = "";

    text = messageMath.slice(0, -1);

    if (messageResult == "0") {
        if (text.slice(-1) == " ") {
            if (operator == "r") {
                let textOnOperator = text.slice(0, -3);
                textOperator = `sqrt(${textOnOperator} |`;
            } else {
                if (text.slice(0, 1) == "s") {
                    let textOnOperator = text.slice(5, -3);
                    textOperator = textOnOperator + " " + operator + " |";
                } else {
                    let textOnOperator = text.slice(0, -3);
                    textOperator = textOnOperator + " " + operator + " |";
                }
            }
        } else {
            if (operator == "r") textOperator = `sqrt(${text} |`;
            else if (operator == "-") textOperator = "-|";
            else textOperator = text + " " + operator + " |";
        }
    } else {
        if (text.slice(-1) == " ") {
            if (operator == "r") textOperator = `sqrt(${messageResult} |`;
            else {
                textOperator = messageResult + " " + operator + " |";
                text = messageResult;
            }
        } else {
            if (operator == "r") textOperator = `sqrt(${messageResult} |`;
            else {
                textOperator = messageResult + " " + operator + " |";
                text = messageResult;
            }
        }
    }

    return [textOperator, text];
}

function solve(messageOperatorA, messageOperadorB, messageOperator) {
    let result = 0;
    if (messageOperadorB == "") {
        messageOperadorB = "0";
    }

    switch (messageOperator) {
        case "+":
            result = addition(messageOperatorA, messageOperadorB);
            break;
        case "-":
            result = subtraction(messageOperatorA, messageOperadorB);
            break;
        case "x":
            result = multiplication(messageOperatorA, messageOperadorB);
            break;
        case "/":
            result = division(messageOperatorA, messageOperadorB);
            break;
        case "%":
            result = module(messageOperatorA, messageOperadorB);
            break;
        case "^":
            result = powers(messageOperatorA, messageOperadorB);
            break;
        case "r":
            let textRoot = messageOperadorB.slice(5);
            result = root(textRoot);
            break;
        default:
            result = parseFloat(messageOperadorB);
    }

    return result;
}
