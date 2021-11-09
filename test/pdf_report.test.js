const pdf_report = require('../report/pdf_report');
var expect = require('expect');

describe('pdf_report tests', function () {

    it('pdf_report is object', function () {
        expect(typeof pdf_report).toBe('object');
    });

    it('pdf download mock', () => {
        pdf_report.pdf_report().then(result => {
            assert.equal(result, 'pdfObjectBase64')
        })
    })

});