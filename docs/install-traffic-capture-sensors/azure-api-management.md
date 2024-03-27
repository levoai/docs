---
sidebar_position: 7
---

# Azure API Management

## Policy-based Instrumentation

### Pre-requisites
- You have sufficient permissions on Azure to configure API Management policies.
- The Satellite has been successfully set up and is reachable (via HTTPS) from the resource group.

### Installation
To instrument your Azure API Management endpoints, the following steps are required:
1. Configuring named values
2. Adding the instrumentation policy

#### Configuring Named Values

Follow the steps in the official Azure docs to [add named values to your API Management instance](https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-properties?tabs=azure-portal#add-a-plain-or-secret-value-to-api-management).

The following named values must be configured:

| Name | Description |
| ---- | ----------- |
| `LevoOrgId` | Your organization's ID. <br/> Obtain your organization's ID from https://app.levo.ai/settings/organizations or by clicking on your profile picture in Levo's dashboard, and navigating to `User Settings -> Organizations`. |
| `LevoTracesEndpoint` | The URL to which traces should be sent, e.g. `https://collector.levo.ai`. |
| `LevoEnv` | The environment in which the apps will show up in Levo's dashboard, e.g. `production` or `staging`. |

#### Adding the Policy

Follow the steps in the official Azure docs to [add a policy to your API Management instance](https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-properties?tabs=azure-portal#add-a-plain-or-secret-value-to-api-management).

Copy the contents of the `policy.xml` file in the [levoai/azure-apim-policy](https://github.com/levoai/azure-apim-policy) repository on GitHub and paste it into the policy editor.

Ensure that the policy is added at the [API Scope](https://learn.microsoft.com/en-us/azure/api-management/set-edit-policies?tabs=editor#api-scope).

## Logs-based Instrumentation

You may also use Azure API Management Logs to instrument your APIs.
Visit the [Log Parser](/install-log-parsing-sensors) page for more details.
