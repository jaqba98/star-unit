const { test, expect } = require("@star-unit/js");

test("should pass when value is greater than the expected", () => {
  const getNumber = () => 10;
  const expectedValue = 5;

  expect(getNumber).toBeGreaterThan(expectedValue);
});

test("should fail when value is not greater than the expected", () => {
  const getNumber = () => 3;
  const expectedValue = 5;

  expect(getNumber).toBeGreaterThan(expectedValue);
});

test("should pass when value is equal to the expected", () => {
  const getNumber = () => 5;
  const expectedValue = 5;

  expect(getNumber).toBeGreaterThan(expectedValue);
});

test("should pass when value is greater than a negative number", () => {
  const getNumber = () => -3;
  const expectedValue = -5;

  expect(getNumber).toBeGreaterThan(expectedValue);
});

test("should fail when value is less than a negative number", () => {
  const getNumber = () => -6;
  const expectedValue = -5;

  expect(getNumber).toBeGreaterThan(expectedValue);
});
