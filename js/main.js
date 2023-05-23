
function add (firstNum, secondNum) {
    return firstNum + secondNum
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum
}

function divide (firstNum, secondNum) {
    return firstNum / secondNum
}

// A calculator operation will consist of a number, an operator, and another number.
// For example, 3 + 5. Create three variables for each of the parts of a calculator 
// operation.
// Create a variable for the first number, the operator, and the second  number. 
// You’ll use these variables to update your display later.
let firstNum = 3
let secondNum = 5
let operator = ''

// Create a new function operate that takes an operator and 2 numbers and then calls
// one of the above functions on the numbers.
function operate (operator, firstNum, secondNum) {
    if (operator === '+') return add(firstNum, secondNum)
    if (operator === '-') return subtract(firstNum, secondNum)
    if (operator === '*') return multiply(firstNum, secondNum)
    if (operator === '/') return divide(firstNum, secondNum)
}
