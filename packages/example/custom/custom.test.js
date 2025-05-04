const { describe, test, expect } = require("@star-unit/js");

describe("custom group", () => {
  test("should be even").params([2, 4, 6, 8, 10]).create((param) => {
    expect(param).custom((param) => param % 2 === 0);
  });
  test("should be odd").params([1, 3, 5, 7, 9]).create((param) => {
    expect(param).not.custom((param) => param % 2 === 0);
  });
});
