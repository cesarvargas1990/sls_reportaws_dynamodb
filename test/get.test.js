const get = require('../report/get');
var expect = require('expect');

describe('get tests', function () {
    it('get is object', function () {
        expect(typeof get).toBe('object');
    });

    it('get report', function () {
        const response = get.get(
            { pathParameters: "TT8HCklKNXnKsAqvp9W1J8zvSEQem1o__rF3x3cy" }
            , () => { console.log("context") }
            , () => { console.log("callback") });

        expect(response).toBe();
    });
});