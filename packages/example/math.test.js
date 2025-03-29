const { expect, test } = require("../star-unit/js/index");
const { add, multiply } = require('./math');

test('add works', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiply works', () => {
    expect(multiply(4, 5)).toBe(20);
});
