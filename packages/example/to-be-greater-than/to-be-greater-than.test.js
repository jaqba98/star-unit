const { test, expect, describe } = require("@star-unit/js");

describe("to-be-greater-than", () => {
  test("should pass when value is greater than the expected").create(() => {
    const getNumber = () => 10;
    const expectedValue = 5;

    expect(getNumber).toBeGreaterThan(expectedValue);
  });

  test("should pass when value is greater than a negative number").create(() => {
    const getNumber = () => -3;
    const expectedValue = -5;

    expect(getNumber).toBeGreaterThan(expectedValue);
  });
});
