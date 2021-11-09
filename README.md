# REPORT AWS - NODE JS - DYNAMODB 
For the project was used [NodeJs Serverless Stack](https://www.serverless.com/framework/docs/providers/aws/examples/hello-world/node).
In site serverless view the installation instructions for serverless
## Previous Steps
- Have a aws account(free)
- Install or have an aws cli
- Install or have an node js environment
## View Documentation 
View the file `manual.pdf` located in `documentation` folder
## Import Postman collection
Import the file `report.postman_collection.json` located in `documentation` folder in postman 
## Commands for installation
### `aws configure`
Configure your aws credentials
### `npm install`
Execute the command in the root folder of the project for install the node packages located in `package.json` file
### `sls deploy`
Deploy serverless stack to AWS cloud.
### `sls test`
Execute jests tests
## Configure postman endpoint
- take the url part of the endpoint similar to the following:
https://xxxxx.execute-api.us-east-1.amazonaws.com
- copy the endpoint string before `/dev/report` then set the variable `awsReportEndPoint` in postman 
- copy the endpoint string before  `/pdf_report` then set the variable `awsPdfReportEndPoint` in postman
## Services endpoints
Consume in postman any of the following services:
- Create Report
- Update Report
- Delete Report by Id
- Get Report by Id
- Get All Reports
- Generate CSV Report
- Generate PDF Report