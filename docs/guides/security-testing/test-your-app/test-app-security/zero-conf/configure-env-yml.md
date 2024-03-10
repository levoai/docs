---
sidebar_position: 4
---

# Configure `environment.yml`
![](../../../../../assets/zero-conf-test-plan.svg)

![](../../../../../assets/zero-conf-flow-3.svg)

***Note: If your test plan does not have a `environment.yml` file associated with it you can skip this step.***

Each auto generated test plan *may* have a `environment.yml` file associated with it, which provides critical authentication/authorization information for your APIs.

You can read more about this file [here][env-file]. 

You will need to configure this file with appropriate authentication/authorization information prior to executing the test plan.

## 1. Download the `environment.yml` file
Open your test plan, navigate to the `environment.yml` section, and download this file to your desktop.

## 2. Configure the `environment.yml` file
Follow the instructions [here][configure-authn] to configure appropriate user credentials/roles required to effectively test your live API endpoints.


[env-file]: /guides/security-testing/concepts/test-plans/env-yml.md
[configure-authn]: /security-testing/tasks/authentication/authn-authz.md
