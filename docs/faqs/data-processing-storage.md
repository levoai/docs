---
sidebar_position: 3
---

# Data Processing & Storage - FAQ

## Is my data accessible by anyone outside my organization?
Your data belongs ONLY to you, and is ONLY accessible by members of your organization.

Employee's of Levo DO NOT have access to your data.

## What kind of customer data does Levo process and store?

There are two distinct workflows where customer data is processed and stored.

Levo does not process or store PII or PSI data of any kind. Any exceptions will be specifically called out in the workflow descriptions below.

### 1. API Catalog & Schema
Levo's API Catalog can be populated either via auto discovery or via manual import of OpenAPI Schemas. 

In either case no actual customer data, including PII/PSI data is ingested or stored. Only API metadata is ingested and stored.

The below diagram describes the two methods of populating the API Catalog.

![](../assets/api-catalog-population.svg)

#### Manually Imported APIs
In this case OpenAPI specifications are imported by the customer and stored in Levo's API Catalog.

This data is ONLY accessible by members of your organization.

As a best practice, please ensure that your OpenAPI specifications do not contain secrets, tokens, or PSI/PII data.

#### Auto Discovered APIs
Levo can auto discover all your APIs and their schema in your live environments (using an eBPF Sensor).

Even though the eBPF Sensor captures real API traffic (that could potentially have PII/PSI data), the Satellite anonymises all the API traces, and only sends API metadata to Levo SaaS.

The below diagram shows how PII/PSI data from the raw API trace is anonymized and sent to Levo SaaS as API metadata.

![](../assets/trace-anonymization.svg)

### 2. API Security Testing
![](../assets/testing-workflow-data-handling.svg)

This workflow has 4 distinct phases.

- The Test Runner (CLI) pulls Test Plans from Levo SaaS. Test Plans have NO real customer data, and only have information on API endpoints (metadata specified in the API catalog).

- Any user credentials or tokens required to test API endpoints stays within the customer premises, and are supplied locally to the CLI. This information is NEVER transmitted to Levo SaaS.

- The CLI executes the test plan against your API endpoints (similar to integration tests), and sends the results to Levo SaaS. 

    Any authentication/authorization tokens are stripped from the test results before transmission to Levo SaaS.
    Test results may contain the detailed HTTP request/response of the API endpoint being tested. 

    Even though test results are ONLY accessible by members of your organization, it is good practice to ensure, the API endpoints being tested DO NOT return `real` PII/PSI data.

- Test results are viewed from Levo SaaS. Test results do not contain any authentication/authorization tokens, and are ONLY accessible by members of your organization.

    Employee's of Levo, cannot access your test results or other data.

## Does Levo store authentication tokens or secrets?
Levo does not ingest or store authentication credentials, tokens or other secrets. All of this remains within your premises. Please see section above for more details.

## Is TLS used for all data transmissions?
Yes, TLS is used wherever there is data in motion.

## Does Levo SaaS require inbound network connectivity to my datacenter/VPC?
NO. Levo's CLI runs within your datacenter/VPC, and makes outbound network connections to Levo SaaS.