const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('tests for sum', () => {
  it ('zero arguments', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', 1, 0), 1);
    assert.strictEqual(calculateNumber('SUM', 0, 2), 2);
  });
  it ('floats are rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 2.4), 4);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
    assert.strictEqual(calculateNumber('SUM', 3, 2.7), 6);
  });
  it ('keeps integers intact', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
  });
});

describe('tests for subtract', () => {
  it ('zero arguments', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 0), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 2), -2);
  });
  it ('floats are rounded', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 1.5), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 2.7), 0);
  });
  it ('keeps integers intact', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 1), 1);
  });
});

describe('tests for divide', () => {
    it ('zero arguments', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 2), 0);
    });
    it ('floats are rounded', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.5), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 2), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 2, 3.7), 0.5);
    });
    it ('keeps integers intact', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 1), 2);
    });
  });