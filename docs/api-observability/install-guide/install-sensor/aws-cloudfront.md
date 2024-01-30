---
sidebar_position: 5
---

# AWS CloudFront

Lambda@Edge functions to ingest traffic from AWS CloudFront distributions.

## Installation

### Pre-requisites
- Install the AWS CLI (version 2) by following the [AWS docs](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- You have sufficient permissions on AWS to create and deploy Lambda@Edge functions.
- The Satellite has been successfully set up and is reachable (via HTTPS) from the worker.

### Creating the Lambda Functions using the AWS CLI

- Obtain your organization's ID from https://app.levo.ai/settings/organizations or by
clicking on your profile picture in Levo's dashboard, and navigating to `User Settings -> Organizations`.
- Run the `install.sh` script in the repository.

```shell
git clone https://github.com/levoai/aws-cloudfront-lambda
cd aws-cloudfront-lambda
LEVO_ORG_ID=<value> ./install.sh
```

### Associating the Lambdas with a CloudFront Distribution
1. Go to the [AWS CloudFront Console](https://us-east-1.console.aws.amazon.com/cloudfront/v4/home#/distributions) and select your distribution.
1. Click on the "Behaviors" tab, then click on the "Create Behaviour" button.
1. Configure the behaviour and ensure that the following properties are set:
   - Path pattern: Use `*` to send all JSON payloads to Levo, or use a more specific API pattern
   - Origin and origin groups: The origin for which the traffic should be sent
   - Allowed HTTP methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
   - Cache policy: Set this to any policy as per your requirements
   - *Function Associations*
      - `Origin request`:
         - Function type: `Lambda@Edge`
         - Function ARN: Paste the "Request Handler ARN" value printed by the `install.sh` script
         - Include body: `Yes`
      - `Origin response`:
         - Function type: `Lambda@Edge`
         - Function ARN: Paste the "Response Handler ARN" value printed by the `install.sh` script
1. Click on the "Create behaviour" button to save the configuration.

That's all!
Within a few minutes, you should start seeing API catalogs in your Levo dashboard.
