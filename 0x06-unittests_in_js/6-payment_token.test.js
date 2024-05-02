const getPaymentTokenFromAPI = require("./6-payment_token");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", () => {
    it("Async testing with done callback", (done) => {
	getPaymentTokenFromAPI(true)
	    .then((data) => {
		expect(data).to.have.property('data');
		done();
	    });
    });
});