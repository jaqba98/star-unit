const { test, expect } = require("@star-unit/js");
const { sum } = require("./sum");

test("should return correct sum of two numbers part 1", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(4, 8)).toBe(12);
  expect(sum(-2, 5)).toBe(3);
});

test("should return correct sum of two numbers part 2", () => {
  expect(sum(6, -3)).toBe(3);
  expect(sum(10, 20)).toBe(30);
  expect(sum(-5, 5)).toBe(0);
});
