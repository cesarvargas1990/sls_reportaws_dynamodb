const sls = require('serverless-http')
const AWS = require('aws-sdk')
const ReportTable = process.env.REPORT_TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.all = (event, context, callback) => {
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

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Items),
        };
        callback(null, response);
    });
};