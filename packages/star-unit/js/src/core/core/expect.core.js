const ToBeMatcher = require('../matchers/to-be.matcher');

class ExpectCore {
    #received;
    #toBeMatcher;

    constructor(received) {
        this.#received = received;
        this.#toBeMatcher = new ToBeMatcher();
    }

    toBe(expected) {
        return this.#toBeMatcher.toBe(this.#received, expected);
    }
}

module.exports = ExpectCore;
