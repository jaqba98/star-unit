const { test, expect } = require("@star-unit/js");
const { add, subtract, multiply, divide } = require("./calculator");

test("should return correct result when using add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(4, 8)).toBe(12);
  expect(add(-2, 5)).toBe(3);
});

test("should return correct result when using subtract", () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 15)).toBe(-5);
  expect(subtract(-3, -6)).toBe(3);
});

test("should return correct result when using multiply", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-4, 5)).toBe(-20);
  expect(multiply(0, 100)).toBe(0);
});

test("should return correct result when using divide", () => {
  expect(divide(6, 2)).toBe(3);
  expect(divide(9, -3)).toBe(-3);
  expect(divide(7, 1)).toBe(7);
});

// test("should throw an error when using divide with zero", () => {
//   expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
// });
