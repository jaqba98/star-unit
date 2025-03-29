import { test, expect } from './minitest';
import { add, multiply } from './math';

test('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiplies numbers correctly', () => {
    expect(multiply(4, 5)).toBe(20);
});

test('fails on wrong result', () => {
    expect(add(1, 1)).toBe(3);
});
