const create = require('../report/create');
var expect = require('expect');

describe('create tests', function () {
    it('create is object', function () {
        expect(typeof create).toBe('object');
    });
    it('create user', function () {
        const body = {
            name: 'Cesar',
            alias: 'Vargas',
            species: 'ALien',
            company: {
                name: 'SoftTest',
                team: 'Daredevils'
            }
        }
        const response = create.create(
            { body: JSON.stringify(body) }
            , () => { console.log("context") }
            , () => { console.log("callback") });

        expect(response).toBe();
    });
});