const assert = require('assert');
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('gives same result as when Utils.calculateNumber is used', () => {
    const spiedFunction = sinon.spy(console, 'log');
    const stubbedFunction = sinon.stub(Utils, "calculateNumber").returns(10);
    
    
    sendPaymentRequestToApi(100, 20);

    assert(spiedFunction.withArgs("The total is: 10").calledOnce);
    assert(stubbedFunction.withArgs("SUM", 100, 20).calledOnce);
  });
});