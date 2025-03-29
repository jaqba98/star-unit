const TestsStore = require('../store/tests.store');

class TestCore {
    constructor(name, fn) {
        TestsStore.tests.push({ name, fn });
    }
}

module.exports = TestCore;
