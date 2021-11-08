const sls = require('serverless-http')
const AWS = require('aws-sdk')
const ReportTable = process.env.REPORT_TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.edit = (event, context, callback) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: ReportTable,
        Key: {
          id: event.pathParameters.id
        },
        UpdateExpression: "SET #nameUser = :nameUser, alias = :alias, species = :species, company = :company",
        ExpressionAttributeValues: {
          ":nameUser": data.name || null,
          ":alias": data.alias || null,
          ":species": data.species || null,
          ":company": data.company || null,
        },
        ExpressionAttributeNames: {
          "#nameUser": "name"
        },
        ReturnValues: "ALL_NEW",
      };

    dynamoDb.update(params, (error, result) => {
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
            body: JSON.stringify(result.Attributes),
        };
        callback(null, response);
    });
};