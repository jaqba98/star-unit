const { describe, test, expect } = require("@star-unit/js");

describe("params group", () => {
  test("should be less than 5").params([1, 2, 3, 4]).create((param) => {
    expect(param).toBeLessThan(5);
  });

  test("should be greater than 5").params([6, 7, 8, 9, 10]).create((param) => {
    expect(param).toBeGreaterThan(5);
  });
});
