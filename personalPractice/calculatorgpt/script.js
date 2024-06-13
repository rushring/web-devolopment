let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result;
    operator = '';
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber;
}
