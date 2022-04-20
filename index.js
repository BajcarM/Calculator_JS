class Calculator {
  static inputNumber = document.getElementById("input-number");
  static results = document.getElementById("results");

  static inputString = "0";
  static compArray = [];

  static renderResults() {
    let resultsText = "";
    for (let i = 0; i < this.compArray.length; i++) {
      resultsText += this.compArray[i] + " ";
    }
    results.innerHTML = resultsText;
    this.inputNumber.innerHTML = this.inputString;
  }

  static numBtn(number) {
    if (this.inputString !== "0") {
      this.inputString += number;
    } else if (this.compArray.length < 1 || this.compArray.length === 2) {
      this.inputString = "" + number;
    } else if (this.compArray.length === 1) {
      this.clearEverything();
      this.inputString = "" + number;
    }
    this.renderResults();
  }

  static handlerDecimalPoint() {
    if (this.inputString.indexOf(".") >= 0) {
      return;
    }
    this.inputString += ".";
    this.renderResults();
  }

  static calculate(num1, num2, sign) {
    if (sign === "+") {
      return num1 + num2;
    } else if (sign === "-") {
      return num1 - num2;
    } else if (sign === "×") {
      return num1 * num2;
    } else if (sign === "÷") {
      return num1 / num2;
    }
  }

  static equals() {
    if (this.inputString === "0" || this.compArray.length < 1) {
      return;
    }
    let sup = this.calculate(
      this.compArray[0],
      Number(this.inputString),
      this.compArray[1]
    );
    this.clearEverything();
    this.compArray[0] = sup;
    this.renderResults();
  }

  static clearInput() {
    this.inputString = "0";
    this.renderResults();
  }

  static clearEverything() {
    this.compArray = [];
    this.clearInput();
  }

  static operator(sign) {
    if (this.compArray.length < 1) {
      this.compArray[0] = Number(this.inputString);
      this.clearInput();
    } else if (this.inputString !== "0") {
      this.equals();
    }
    this.compArray[1] = sign;
    this.renderResults();
  }
}
Calculator.renderResults();
