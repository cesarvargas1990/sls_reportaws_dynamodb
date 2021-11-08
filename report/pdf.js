const sls = require('serverless-http')
const AWS = require('aws-sdk')
const ReportTable = process.env.REPORT_TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { Parser } = require('json2csv');
module.exports.csv = (event, context, callback) => {
    const params = {
        TableName: ReportTable
    };

    dynamoDb.scan(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the report.',
            });
            return;
        }

        const fields = [
            {
                label : 'Name',
                value: `name`,
            },
            {
                label : 'Alias',
                value: `alias`,
            },
            {
                label : 'Species',
                value: `species`,
            },
            {
                label : 'Company Name',
                value: `company.name`,
            },
            {
                label : 'Company Team',
                value: `company.team`,
            }
        ];
        const opts = { fields, delimiter: '\;' ,quote: ''};
        const parser = new Parser(opts);
        const csv = parser.parse(result.Items);

        const response = {
            statusCode: 200,
            headers: {"content-type": "text/csv"},
            body: csv
            
        };
        callback(null, response);
    });
};