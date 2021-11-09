const edit = require('../report/edit');
var expect = require('expect');

describe('edit tests', function () {
    it('edit is object', function () {
        expect(typeof edit).toBe('object');
    });
    it('edit report', function () {
        const body = {
            name: 'Cesar',
            alias: 'Vargas',
            species: 'ALien',
            company: {
                name: 'SoftTest',
                team: 'Daredevils'
            }
        }

        const response = edit.edit(

            { pathParameters: "TT8HCklKNXnKsAqvp9W1J8zvSEQem1o__rF3x3cy", body: JSON.stringify(body) }
            , () => { console.log("context") }
            , () => { console.log("callback") });

        expect(response).toBe();
    });
});