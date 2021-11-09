const all = require('../report/all');
var expect = require('expect');

describe('all tests', function () {
    it('all is object', function () {
        expect(typeof all).toBe('object');
    });

    it('all get', function () {

        const response = all.all(
            () => { }
            , () => { console.log("context") }
            , () => { console.log("callback") });

        expect(response).toBe();
    });

});
