import Calculator from '../../src/Calculator';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator(5, 2);
    const sum = calculator.add();
    expect(sum).toBe(7);
  });

  it('should substract two numbers', () => {
    const calculator = new Calculator(5, 2);
    const sub = calculator.sub();
    expect(sub).toBe(3);
  });
});
