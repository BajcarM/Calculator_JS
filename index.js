// const numberBtn = document.getElementById("number-btn");
// const operationBtn = document.getElementById("operation-btn");
const inputNumber = document.getElementById("input-number");
const results = document.getElementById("results");

let inputString = "0";
let compArray = [];
let decimalPoint = false;
let emptyInput = true;
let emptyResult = true;
renderResults();

function renderResults() {
  let resultsText = "";
  for (i = 0; i < compArray.length; i++) {
    resultsText += compArray[i] + " ";
  }
  results.innerHTML = resultsText;
  inputNumber.innerHTML = inputString;
}

function numBtn(number) {
  if (emptyInput === true && number === 0) {
    inputString = "0";
  } else if (emptyInput === false) {
    inputString += number;
  } else if (
    (emptyResult === true || compArray.length == 2) &&
    emptyInput === true
  ) {
    inputString = "";
    inputString += number;
    emptyInput = false;
  } else if (compArray.length == 1 && emptyInput === true) {
    clearEverything();
    inputString = "";
    inputString += number;
    emptyInput = false;
  }
  //   } else if (emptyResult === true && emptyInput === false) {
  //     inputString += number;
  //   } else if (compArray.length == 2 && emptyInput === true) {
  //     inputString = "";
  //     inputString += number;
  //     emptyInput = false;

  renderResults();
}

function opeBtn(sign) {
  if (sign === "decimal-point" && decimalPoint === false) {
    inputString += ".";
    decimalPoint = true;
    emptyInput = false;
  } else if (
    sign === "equal" &&
    emptyInput === false &&
    emptyResult === false
  ) {
    equals(compArray[0], Number(inputString), compArray[1]);
  } else if (sign === "C") {
    clear();
  } else if (sign === "CE") {
    clearEverything();
  } else if (sign === "+" || sign === "-" || sign === "×" || sign === "÷") {
    operator(sign);
  }

  renderResults();
}

function equals(num1, num2, sign) {
  let compResult = 0;
  if (sign === "+") {
    compResult = num1 + num2;
  } else if (sign === "-") {
    compResult = num1 - num2;
  } else if (sign === "×") {
    compResult = num1 * num2;
  } else if (sign === "÷") {
    compResult = num1 / num2;
  }
  compArray = [];
  inputString = "0";
  compArray[0] = compResult;
  decimalPoint = false;
  emptyInput = true;
  emptyResult = false;
}

function clear() {
  inputString = "0";
  decimalPoint = false;
  emptyInput = true;
}

function clearEverything() {
  inputString = "0";
  decimalPoint = false;
  emptyInput = true;
  compArray = [];
  emptyResult = true;
}

function operator(sign) {
  if (emptyResult) {
    compArray[0] = Number(inputString);
    compArray[1] = sign;
    emptyResult = false;
    inputString = "0";
    emptyInput = true;
    decimalPoint = false;
  } else if (emptyResult === false && emptyInput === true) {
    compArray[1] = sign;
  } else if (emptyResult === false && emptyInput === false) {
    equals(compArray[0], Number(inputString), compArray[1]);
    compArray[1] = sign;
  }
}
