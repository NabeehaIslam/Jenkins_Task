// calculator.test.js

const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Functions', () => {
  
  test('add(a, b) should return the sum of two numbers', () => {
    expect(add(3, 2)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('subtract(a, b) should return the difference of two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
  });

  test('multiply(a, b) should return the product of two numbers', () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(-3, 2)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test('divide(a, b) should return the quotient of two numbers', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(-6, 2)).toBe(-3);
  });

  test('divide(a, b) should throw an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });
});
