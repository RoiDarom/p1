

let currentExpression = "";

function toggleMemory() {
    memoryVisible = !memoryVisible;
    updateMemoryDisplay();
}

function updateMemoryDisplay() {
    const memoryDisplay = document.getElementById('memoryDisplay');
    memoryDisplay.textContent = memoryVisible ? memoryContent : "";
}

function appendConstant(value) {
    currentExpression += value;
    updateDisplay();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateDisplay();
}

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendParenthesis(parenthesis) {
    currentExpression += parenthesis;
    updateDisplay();
}

function appendDecimal() {
    currentExpression += '.';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function clearLastCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}

function sqrt() {
    currentExpression = `Math.sqrt(${currentExpression})`;
    calculateResult();
}

function power() {
    currentExpression += '^';
    updateDisplay();
}

function tenPower() {
    currentExpression = `Math.pow(10, ${currentExpression})`;
    calculateResult();
}

function factorial() {
    currentExpression = `factorial(${currentExpression})`;
    calculateResult();
}

function reciprocal() {
    currentExpression = `1/(${currentExpression})`;
    calculateResult();
}

function absolute() {
    currentExpression = `Math.abs(${currentExpression})`;
    calculateResult();
}

function exponential() {
    currentExpression = `Math.exp(${currentExpression})`;
    calculateResult();
}

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

