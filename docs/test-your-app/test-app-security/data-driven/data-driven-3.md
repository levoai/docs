---
sidebar_position: 3
---

# Data Driven Security Tests - Part 3

## 4. Configure your 'Config in Progress` test plan
Levo uses [test fixtures][fixtures] to provide proper values to API parameters prior to sending test traffic to the live API endpoints.

This test plan requires configuration of these test fixtures prior to execution. Proper configuration of the test plan will make it runnable.

1. Open the test plan and navigate to the test cases that require configuration (test cases are under test suites). Check the test case documentation for specific parameters that need configuration. Uncomment the auto-generated fixtures and follow this [example][fixture-example], to configure values that are appropriate for your live API target.

2. Continue this process until either the test plan's state changes to `Config Complete`, or you have enough test cases/suites that are runnable.

3. Remember to `save` your changes to the test plan.

## 5. Download the `environment.yml` file
Each auto generated test plan has a `environment.yml` file associated with it, which provides critical authentication/authorization information.
You can read more about this file [here][env-file]. 

** In your test plan, navigate to the `environment.yml` section, and download this file to your desktop. **

## 6. Configure the `environment.yml` file
Follow the instructions [here][configure-authn] to configure appropriate user credentials/roles required to effectively test your live API endpoints.

## 7. Copy the test plan's Levo Resource Name (LRN)
From the test plans screen **copy** the LRN (Levo Resource Name) of your test plan to the clipboard.


[example-values]: https://swagger.io/docs/specification/adding-examples/
[fixtures]: ../../../concepts/test-plans/fixtures/test-fixtures.md
[fixture-example]: ../../../concepts/test-plans/fixtures/configure-fixtures.md

[env-file]: ../../../concepts/test-plans/env-yml.md
[configure-authn]: ../../../tasks/authentication/authn-authz.md