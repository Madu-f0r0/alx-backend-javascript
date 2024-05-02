const assert = require('assert');
const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('gives same result as when Utils.calculateNumber is used', () => {
    const spiedFunction = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spiedFunction.calledOnce);
    spiedFunction.restore();
  });
});