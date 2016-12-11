class Calculator {
  constructor(op1, op2) {
    this.op1 = op1;
    this.op2 = op2;
  }
  add() {
    return this.op1 + this.op2;
  }
  sub() {
    return this.op1 - this.op2;
  }
  mul() {
    return this.op1 * this.op2;
  }
  div() {
    return this.op1 / this.op2;
  }
}

export default Calculator;
