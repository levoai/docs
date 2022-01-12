---
sidebar_position: 3
---

# Security test my App - Part III

## Install Levo CLI & Login
Levo CLI is the test runner that will execute the test plan against your running instance of crAPI.

Follow the instructions [here][levo-cli] to install Levo CLI and authenticate it with Levo SaaS.

Skip this step if you have already completed it.

## Execute the test plan against you live API endpoints

Now we will use the Levo CLI to execute the test plan.

### Prerequisites
- Ensure you copied the `LRN (Levo Resource Name)` to the clipboard in the previous step
- Ensure you downloaded the `environment.yml` file from the test plan to your desktop
- Ensure the `environment.yml` file is in the same directory from which you launch Levo CLI

Execute the following in the shell where you installed Levo CLI:

```
# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if your API is running on your local machine.

levo test --plan-lrn <LRN value copied to clipboard > --target-url <your live API's base URL> --env-file environment.yml
```

## View the test results in the `Test Runs` page
In the Levo SaaS console side panel, click on `Test Runs` and navigate to your most recent test run results

## Congratulations! You are done.


[levo-cli]: ../../levo-cli/levo-cli-intro.md

