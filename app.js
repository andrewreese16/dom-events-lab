// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetDisplay = false;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const displayEl = document.querySelector(".display");
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  if (!event.target.classList.contains("button")) return;

  if (event.target.classList.contains("number")) {
    appendNumber(event.target.textContent);
    updateDisplay();
  } else if (event.target.classList.contains("operator")) {
    setOperation(event.target.textContent);
  } else if (event.target.classList.contains("equals")) {
    evaluate();
    updateDisplay();
  }
});

/*-------------------------------- Functions --------------------------------*/
function updateDisplay() {
  displayEl.textContent = firstOperand;
}

function appendNumber(number) {
  if (shouldResetDisplay) {
    firstOperand = "";
    shouldResetDisplay = false;
  }
  firstOperand += number;
}

function setOperation(operation) {
  if (operation === "C") {
    clearCalculator();
    return;
  }
  if (currentOperation !== null) evaluate();
  currentOperation = operation;
  secondOperand = firstOperand;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetDisplay) return;
  if (currentOperation === "/" && firstOperand === "0") {
    alert("Cannot divide by zero!");
    return;
  }
  let result;
  switch (currentOperation) {
    case "+":
      result = parseFloat(secondOperand) + parseFloat(firstOperand);
      break;
    case "-":
      result = parseFloat(secondOperand) - parseFloat(firstOperand);
      break;
    case "*":
      result = parseFloat(secondOperand) * parseFloat(firstOperand);
      break;
    case "/":
      result = parseFloat(secondOperand) / parseFloat(firstOperand);
      break;
  }
  firstOperand = result.toString();
  currentOperation = null;
}

function clearCalculator() {
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
  shouldResetDisplay = false;
  updateDisplay();
}
