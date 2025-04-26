const { describe, test } = require("@star-unit/js");

describe("a", () => {
  describe("b", () => {
    describe("c", () => {
      describe("d", () => {});
      describe("e", () => {});
    });
    describe("f", () => {});
    describe("g", () => {
      describe("h", () => {
        test("should pass", () => {});
      });
      describe("i", () => {});
    });
    describe("j", () => {});
  });
  describe("k", () => {});
});
