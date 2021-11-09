const csv = require('../report/csv');
var expect = require('expect');

describe('csv tests', function () {

    it('csv is object', function () {
        expect(typeof csv).toBe('object');
    });

    it('csv get', function () {

        const response = csv.csv(
            () => { }
            , () => { console.log("context") }
            , () => { console.log("callback") });

        expect(response).toBe();
    });
});