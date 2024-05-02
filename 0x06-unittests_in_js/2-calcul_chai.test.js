const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('tests for sum', () => {
  it ('zero arguments', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    expect(calculateNumber('SUM', 0, 2)).to.equal(2);
  });
  it ('floats are rounded', () => {
    expect(calculateNumber('SUM', 1.5, 2.4), 4).to.equal(4);
    expect(calculateNumber('SUM', 1.5, 3), 5).to.equal(5);
    expect(calculateNumber('SUM', 3, 2.7), 6).to.equal(6);
  });
  it ('keeps integers intact', () => {
    expect(calculateNumber('SUM', 1, 2), 3).to.equal(3);
  });
});

describe('tests for subtract', () => {
  it ('zero arguments', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 0, 2)).to.equal(-2);
  });
  it ('floats are rounded', () => {
    expect(calculateNumber('SUBTRACT', 2.4, 1.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 3, 2.7)).to.equal(0);
  });
  it ('keeps integers intact', () => {
    expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
  });
});

describe('tests for divide', () => {
    it ('zero arguments', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 2)).to.equal(0);
    });
    it ('floats are rounded', () => {
      expect(calculateNumber('DIVIDE', 2.4, 1.5)).to.equal(1);
      expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 2, 3.7)).to.equal(0.5);
    });
    it ('keeps integers intact', () => {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
    });
  });