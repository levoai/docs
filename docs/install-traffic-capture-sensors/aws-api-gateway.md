---
sidebar_position: 6
---

# AWS API Gateway

## Logs-based Instrumentation

### Tailing Logs with CloudWatch

You may use CloudWatch Logs to instrument your AWS API Gateway endpoints.

The following script has been provided as an example to help you configure logging for your API Gateway endpoints.

[Levo's Log Parser](/install-log-parsing-sensors) can be configured to parse the logs and send them to Levo.

```bash
#!/usr/bin/env bash

log_group_name=levo/api-gateway-logs

aws logs create-log-group --log-group-name $log_group_name
aws logs put-retention-policy --log-group-name $log_group_name --retention-in-days 7

log_group_arn=$(aws logs describe-log-groups --log-group-name-prefix $log_group_name --query 'logGroups[0].arn' --output text)

aws apigatewayv2 update-stage --api-id 'your-apigateway-api-id' --stage-name '$default' --access-log-settings "DestinationArn=$log_group_arn,"'Format="{\"host\":\"$context.domainName\",\"method\":\"$context.httpMethod\",\"path\":\"$context.path\",\"agent\":\"$context.identity.userAgent\",\"code\":\"$context.status\",\"requestId\":\"$context.requestId\",\"ip\":\"$context.identity.sourceIp\",\"requestTime\":\"$context.requestTime\",\"routeKey\":\"$context.routeKey\",\"protocol\":\"$context.protocol\",\"responseLength\":\"$context.responseLength\"}"'

aws logs tail --follow $log_group_name
```

### Streaming Logs with CloudWatch and Amazon Data Firehose

You may also use Amazon Data Firehose to stream live access logs to Levo's satellite.

1. Configure a CloudWatch log group for APIs in API Gateway (using the above example script)
1. Create a Firehose stream to send incoming events to a publicly accessible satellite endpoint
1. Connect the CloudWatch log group to the Firehose stream

Please contact `support@levo.ai` if you are interested in this setup.

## CloudFront Lambda@Edge Instrumentation

You may configure AWS CloudFront with your API Gateway endpoints as the origin, and use Lambda@Edge functions to intercept and capture traffic.

Please visit the following links for more information

- [Setting up API Gateway with a CloudFront distribution](https://repost.aws/knowledge-center/api-gateway-cloudfront-distribution)
- [Setting up Levo's CloudFront Lambda@Edge Functions](/install-traffic-capture-sensors/aws-cloudfront)
