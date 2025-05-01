const { describe, test, expect } = require("@star-unit/js");

describe("custom group", () => {
  test("should be equal 5").params([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).create((param) => {
    expect(param).toBe(5);
  });
});
