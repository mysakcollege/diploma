const sum = require('./index');

test('adds 5 + 10 equals 15', () => {
    expect(sum(5, 10)).toBe(15);
})

test('adds 3 + 2 not equals 6', () => {
    expect(sum(3, 2)).not.toBe(6);
})