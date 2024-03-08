---
sidebar_position: 3
---

# CrAPI Sample App - Part 2

The test plan created was auto configured as you selected `Auto-populate API parameters for this test plan` in the previous step.

Just like developers run tests using JUnit, & PyTest `fixtures`, Levo's test plans use [fixtures][fixtures] to drive tests. The fixtures provide seed values for API parameters required for the proper execution of the tests.

Levo used examples in the OpenAPI specification to auto populate these fixtures.

## 5. Install Levo CLI & Login
Levo CLI is the test runner that will execute the test plan against your running instance of crAPI.

Follow the instructions [here][levo-cli] to install Levo CLI and authenticate it with Levo SaaS.

Skip this step if you have already completed it.

## 6. Execute the test plan against crAPI

Now we will use the Levo CLI to execute the test plan.

### Prerequisites
- Ensure you copied the `LRN (Levo Resource Name)` to the clipboard in the previous step.
- Ensure you downloaded the `environment.yml` file from the test plan to your desktop.
- Ensure the `environment.yml` file is in the same directory from which you launch Levo CLI. You may need to copy the file to the directory from where you launch the CLI.

Execute the following in the shell where you installed Levo CLI:

```
# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if crAPI is running on your local machine.
# Modify the --target-url value below if crAPI is running elsewhere.

export TEST_PLAN_LRN="<LRN value copied to your clipboard in previous steps>"

# Execute security tests against crAPI 
levo test --test-plan $TEST_PLAN_LRN --target-url http://host.docker.internal:8888 --env-file environment.yml
```

## View the test results in the `Test Runs` page
1. In the Levo SaaS console side panel, click on `Test Runs` and navigate to your most recent test run results
2. You will notice that Levo has found failed test cases and an [Broken Object Level Authorization][BOLA] vulnerability. Navigate to the BOLA test case status, and review the summary and the logs.

## Verify results using crAPI's Hackpad (Optional)
Inside `crAPI`, use the top level menu to navigate to `Hackpad`. Follow instructions in the `Hackpad` to verify if the IDOR finding reported by Levo is a true positive.

## Congratulations! You are done.


[fixtures]: ../../concepts/test-plans/fixtures/test-fixtures.md
[levo-cli]: ../../levo-cli/levo-cli-intro.md
[BOLA]: /vulnerabilities/v1/OWASP-API-10/A1-BOLA