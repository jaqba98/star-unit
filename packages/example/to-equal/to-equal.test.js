const { test, expect, describe } = require("@star-unit/js");

describe("to-equal", () => {
  test("should pass for equal values").create(() => {
    const getObject = () => ({ a: 1, b: 2 });
    const expectedObject = { a: 1, b: 2 };

    expect(getObject).toEqual(expectedObject);
  });

  test("should fail for unequal values").create(() => {
    const getObject = () => ({ a: 1, b: 2 });
    const expectedObject = { a: 1, b: 3 };

    expect(getObject).toEqual(expectedObject);
  });

  test("should pass for equal arrays").create(() => {
    const getArray = () => [1, 2, 3];
    const expectedArray = [1, 2, 3];

    expect(getArray).toEqual(expectedArray);
  });

  test("should fail for unequal arrays").create(() => {
    const getArray = () => [1, 2, 3];
    const expectedArray = [3, 2, 1];

    expect(getArray).toEqual(expectedArray);
  });

  test("should pass for equal primitive values").create(() => {
    const getNumber = () => 5;
    const expectedNumber = 5;

    expect(getNumber).toEqual(expectedNumber);
  });

  test("should fail for unequal primitive values").create(() => {
    const getNumber = () => 5;
    const expectedNumber = 10;

    expect(getNumber).not.toEqual(expectedNumber);
    expect(getNumber).not.toEqual(expectedNumber);
  });
});
