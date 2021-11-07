const sls = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const AWS = require('aws-sdk')
const app = express()
app.use(bodyParser.json({ strict: false }));
const UserTable = process.env.REPORT_TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient()

console.log('-------------env', process.env)
console.log({ UserTable })
app.post('/report', async (req, res) => {
    const { body } = req
    const { id, name } = body
    const params = {
        TableName: UserTable,
        Item: {
            id: id,
            name: name
        }
    }
    await dynamoDb.put(params, (err) => {
        if (err) {
            console.log(err);
        }
        return res.json({ id, name });
    });
})

module.exports.server = sls(app)