const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");
const { ToEqualMatcher } = require("../matchers/to-equal.matcher");
const { ToBeGreaterThanMatcher } = require("../matchers/to-be-greater-than.matcher");
const { ToBeLessThanMatcher } = require("../matchers/to-be-less-than.matcher");
const { ToBeNullMatcher } = require("../matchers/to-be-null.matcher");
const { ToBeTruthyMatcher } = require("../matchers/to-be-truthy.matcher");
const { ExpectsStore } = require("../store/expects.store");

class DefaultModifier {
  #actual;
  #toBeMatcher;
  #toThrowMatcher;
  #toEqualMatcher;
  #toBeGreaterThanMatcher;
  #toBeLessThanMatcher;
  #toBeNullMatcher;
  #toBeTruthyMatcher;

  constructor(actual) {
    this.#actual = actual;
    this.#toBeMatcher = new ToBeMatcher();
    this.#toThrowMatcher = new ToThrowMatcher();
    this.#toEqualMatcher = new ToEqualMatcher();
    this.#toBeGreaterThanMatcher = new ToBeGreaterThanMatcher();
    this.#toBeLessThanMatcher = new ToBeLessThanMatcher();
    this.#toBeNullMatcher = new ToBeNullMatcher();
    this.#toBeTruthyMatcher = new ToBeTruthyMatcher();
  }

  toBe(expect) {
    this.#run(expect, this.#toBeMatcher, 'toBe');
  }

  toThrow(expect) {
    this.#run(expect, this.#toThrowMatcher, 'toThrow');
  }

  toEqual(expect) {
    this.#run(expect, this.#toEqualMatcher, 'toEqual');
  }

  toBeGreaterThan(expect) {
    this.#run(expect, this.#toBeGreaterThanMatcher, 'toBeGreaterThan');
  }

  toBeLessThan(expect) {
    this.#run(expect, this.#toBeLessThanMatcher, 'toBeLessThan');
  }

  toBeNull() {
    this.#run(null, this.#toBeNullMatcher, 'toBeNull');
  }

  toBeTruthy() {
    this.#run(true, this.#toBeTruthyMatcher, 'toBeTruthy');
  }

  #run(expect, fn, matcher) {
    const success = fn.run(this.#actual, expect);
    ExpectsStore.save(success, this.#actual, matcher, expect);
  }
}

module.exports = { DefaultModifier };
