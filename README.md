# REPORT AWS - NODE JS - DYNAMODB 
For the project was used [NodeJs Serverless Stack](https://www.serverless.com/framework/docs/providers/aws/examples/hello-world/node).
In site serverless view the installation instructions for serverless
## Previous Steps
- Clone this report
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
### `npm test`
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
## Run integration test in postman
Press right click on the collection in postman, in the menu that is displayed select run collection
then click on the button run report, this will launch the execution of the integration tests
## Run integration test in console with newman
Run the next command
replace the vars `awsPdfReportEndPoint` and `awsReportEndPoint` with the endpoint url
### `newman run documentation/report.postman_collection.json --global-var "awsPdfReportEndPoint=https://xxxx.execute-api.us-east-1.amazonaws.com" --global-var "awsReportEndPoint=https://xxxxx.execute-api.us-east-1.amazonaws.com"`   

