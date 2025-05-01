const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");
const { ToEqualMatcher } = require("../matchers/to-equal.matcher");
const {
  ToBeGreaterThanMatcher,
} = require("../matchers/to-be-greater-than.matcher");
const { ToBeLessThanMatcher } = require("../matchers/to-be-less-than.matcher");
const { ToBeNullMatcher } = require("../matchers/to-be-null.matcher");
const { ToBeTruthyMatcher } = require("../matchers/to-be-truthy.matcher");

class BaseModifier {
  constructor(run, actual) {
    this.run = run;
    this.actual = actual;
    this.toBeMatcher = new ToBeMatcher();
    this.toThrowMatcher = new ToThrowMatcher();
    this.toEqualMatcher = new ToEqualMatcher();
    this.toBeGreaterThanMatcher = new ToBeGreaterThanMatcher();
    this.toBeLessThanMatcher = new ToBeLessThanMatcher();
    this.toBeNullMatcher = new ToBeNullMatcher();
    this.toBeTruthyMatcher = new ToBeTruthyMatcher();
  }

  toBe(expect) {
    this.run(expect, this.toBeMatcher.run, "toBe");
  }

  toThrow(expect) {
    this.run(expect, this.toThrowMatcher.run, "toThrow");
  }

  toEqual(expect) {
    this.run(expect, this.toEqualMatcher.run, "toEqual");
  }

  toBeGreaterThan(expect) {
    this.run(expect, this.toBeGreaterThanMatcher.run, "toBeGreaterThan");
  }

  toBeLessThan(expect) {
    this.run(expect, this.toBeLessThanMatcher.run, "toBeLessThan");
  }

  toBeNull() {
    this.run(null, this.toBeNullMatcher.run, "toBeNull");
  }

  toBeTruthy() {
    this.run(true, this.toBeTruthyMatcher.run, "toBeTruthy");
  }

  custom(callback) {
    this.run(undefined, callback, "toBeTruthy");
  }
}

module.exports = { BaseModifier };
