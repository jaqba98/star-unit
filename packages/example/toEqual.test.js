const { test, expect } = require("@star-unit/js");

test("should pass for equal values", () => {
  const getObject = () => ({ a: 1, b: 2 });
  const expectedObject = { a: 1, b: 2 };

  expect(getObject).toEqual(expectedObject);
});

test("should fail for unequal values", () => {
  const getObject = () => ({ a: 1, b: 2 });
  const expectedObject = { a: 1, b: 3 };

  expect(getObject).toEqual(expectedObject);
});

test("should pass for equal arrays", () => {
  const getArray = () => [1, 2, 3];
  const expectedArray = [1, 2, 3];

  expect(getArray).toEqual(expectedArray);
});

test("should fail for unequal arrays", () => {
  const getArray = () => [1, 2, 3];
  const expectedArray = [3, 2, 1];

  expect(getArray).toEqual(expectedArray);
});

test("should pass for equal primitive values", () => {
  const getNumber = () => 5;
  const expectedNumber = 5;

  expect(getNumber).toEqual(expectedNumber);
});

test("should fail for unequal primitive values", () => {
  const getNumber = () => 5;
  const expectedNumber = 10;

  expect(getNumber).toEqual(expectedNumber);
});
