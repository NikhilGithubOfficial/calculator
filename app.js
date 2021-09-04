let firstOperand = null
let secondOperand = null
let currentOperation = null
let resetScreen = false

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-Operator');
const deleteButton = document.getElementById('deletebtn');
const clearButton = document.getElementById('clearbtn');
const equalsButton = document.getElementById('equalsbtn');
const displayScreen = document.getElementById('screen');

clearButton.addEventListener('click' , clear);
deleteButton.addEventListener('click' , deleteNum);
equalsButton.addEventListener('click' , evaluate);

function clear() {
    displayScreen.textContent('0');
    secondOperand = '';
    firstOperand = '';
    currOperation = null;
}

function appendNumber(num) {
    if(displayScreen.textContent === '0' || resetScreen) reset();
    displayScreen.textContent += num; 
}

function reset() {
    displayScreen.textContent = '';
    resetScreen = false;
}

function deleteNum() {
    displayScreen.textContent = displayScreen.textContent.toString().slice(0,-1);
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = displayScreen.textContent
    currentOperation = operator
    resetScreen = true
}
  
function evaluate() {
    if (currentOperation === null || resetScreen) return
    if (currentOperation === '/' && displayScreen.textContent === '0') {
        alert("ERROR : Division by 0 not allowed")
        return
    }
    secondOperand = displayScreen.textContent
    displayScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b){
    return a / b;
}

function operate(operator , a , b){
    a = Number(a)
    b = Number(b)
    if(operator == "+") return add(a , b);
    if(operator == "-") return subtract(a , b);
    if(operator == "*") return multiply(a , b);
    if(operator == "/") {
        if(b == 0) return null;
        else return divide(a , b);
    }
    return null;
}