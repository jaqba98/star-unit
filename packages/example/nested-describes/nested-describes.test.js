const { describe, test, expect } = require("@star-unit/js");

describe("a", () => {
  describe("b", () => {
    describe("c", () => {
      describe("d", () => {});
      describe("e", () => {});
    });
    describe("f", () => {});
    describe("g", () => {
      describe("h", () => {
        test("should pass", () => {
          expect(() => true).toBe(true);
        });
      });
      describe("i", () => {});
    });
    describe("j", () => {});
  });
  describe("k", () => {});
});
