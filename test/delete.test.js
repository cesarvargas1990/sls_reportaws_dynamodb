const del = require('../report/delete');
var expect = require('expect');

describe('delete tests', function () {

    it('delete is object', function () {
        expect(typeof del).toBe('object');
    });

    it('delete report', function () {
        const response = del.delete(
            { pathParameters: "TT8HCklKNXnKsAqvp9W1J8zvSEQem1o__rF3x3cy" }
            , () => { console.log("context") }
            , () => { console.log("callback") });

        expect(response).toBe();
    });

});