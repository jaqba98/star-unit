const { describe } = require("@star-unit/js");

describe("a", () => {
  describe("b", () => {
    describe("c", () => {
      describe("d", () => {});
      describe("e", () => {});
    });
    describe("f", () => {});
    describe("g", () => {
      describe("h", () => {});
      describe("i", () => {});
    });
    describe("j", () => {});
  });
  describe("k", () => {});
});
