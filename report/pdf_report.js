const sls = require('serverless-http')
const AWS = require('aws-sdk')
const ReportTable = process.env.REPORT_TABLE
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const PDFDocument = require("pdfkit-table");

module.exports.pdf_report = async (event) => {
    return new Promise(resolve => {
        const doc = new PDFDocument()
        const params = {
            TableName: ReportTable
        };
        dynamoDb.scan(params, (error, result) => {
            let arrayData = [];
            result.Items.forEach(item => {
                arrayData.push([item.name, item.alias, item.species, item.company.name, item.company.team])
            })
            const table = {
                title: "Report",
                headers: ['Name', 'Alias', 'Species', 'Company Name', 'Company Team'],
                rows:
                    arrayData,

            };
            doc.table(table, {
                width: 500,
            });
            const buffers = []
            doc.on("data", buffers.push.bind(buffers))
            doc.on("end", () => {
                const pdf = Buffer.concat(buffers)
                const response = {
                    statusCode: 200,
                    headers: {
                        "Content-Type": "application/pdf",
                    },
                    body: pdf.toString("base64"),
                    isBase64Encoded: true,
                }
                resolve(response);
            })
            doc.end()
        });
    });
}