---
sidebar_position: 6
---

# Execute Test Plan
![](../../../../assets/data-driven-test-plan.svg)

![](../../../../assets/data-driven-flow-5.svg)

## 1. Copy the test plan's Levo Resource Name (LRN)
From the test plans screen **copy** the LRN (Levo Resource Name) of your test plan to the clipboard.

## 2. Install Levo CLI & Login
Skip this step if you have already completed it.

Levo CLI is the test runner that will execute the test plan against your running instance of crAPI.

Follow the instructions [here][levo-cli] to install Levo CLI and authenticate it with Levo SaaS.

## 3. Execute the test plan against you live API endpoints

Now we will use the Levo CLI to execute the test plan.

### Prerequisites
- Ensure you copied the `LRN (Levo Resource Name)` to the clipboard in the previous step.
- Ensure you downloaded the `environment.yml` file (***if present***) from the test plan to your desktop.
- Ensure the `environment.yml` file (***if present***) is in the same directory from which you launch Levo CLI. You may need to copy the file to the directory from where you launch the CLI.

Execute the following in the shell where you installed Levo CLI:

```
# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if your API is running on your local machine.

levo test --test-plan <LRN value copied to clipboard > --target-url <your live API's base URL> --env-file environment.yml
```
**Note**: If your test plan does not have an `environment.yml` file associated with it, please do not specify the `--env-file` option above.

## 4. View the test results in the `Test Runs` page
In the Levo SaaS console side panel, click on `Test Runs` and navigate to your most recent test run results

## Congratulations! You are done.


[levo-cli]: ../../../levo-cli/levo-cli-intro.md

