const { describe, test, expect } = require("@star-unit/js");

describe("custom group", () => {
  test("should be even").params([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).create((param) => {
    expect(param).custom((param) => param % 2 === 0);
  });
  test("should be odd").params([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).create((param) => {
    expect(param).not.custom((param) => param % 2 === 0);
  });
});
