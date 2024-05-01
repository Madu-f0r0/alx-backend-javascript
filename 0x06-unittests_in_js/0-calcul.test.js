const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('both args are rounded', () => {
    const sum = calculateNumber(3, 4);
    assert.strictEqual(sum, 7);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(0, 3);
    assert.strictEqual(sum, 3);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(3, 0);
    assert.strictEqual(sum, 3);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(0, 0);
    assert.strictEqual(sum, 0);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(-1, 0);
    assert.strictEqual(sum, -1);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(0, -2);
    assert.strictEqual(sum, -2);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(-1, 2);
    assert.strictEqual(sum, 1);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(-1, -2);
    assert.strictEqual(sum, -3);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(1, 2.4);
    assert.strictEqual(sum, 3);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(1.5, 2.4);
    assert.strictEqual(sum, 4);
  });
  it('both args are rounded', () => {
    const sum = calculateNumber(-1.5, -2.4);
    assert.strictEqual(sum, -3);
  });
});