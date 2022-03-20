---
sidebar_position: 4
---

# Zero Conf Security Tests - Part 4

## 7. Install Levo CLI & Login
Levo CLI is the test runner that will execute the test plan against your running instance of crAPI.

Follow the instructions [here][levo-cli] to install Levo CLI and authenticate it with Levo SaaS.

Skip this step if you have already completed it.

## 8. Execute the test plan against you live API endpoints

Now we will use the Levo CLI to execute the test plan.

### Prerequisites
- Ensure you copied the `LRN (Levo Resource Name)` to the clipboard in the previous step.
- Ensure you downloaded the `environment.yml` file from the test plan to your desktop.
- Ensure the `environment.yml` file is in the same directory from which you launch Levo CLI. You may need to copy the file to the directory from where you launch the CLI.

Execute the following in the shell where you installed Levo CLI:

```
# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if your API is running on your local machine.

levo test --plan-lrn <LRN value copied to clipboard > --target-url <your live API's base URL> --env-file environment.yml
```

## 9. View the test results in the `Test Runs` page
In the Levo SaaS console side panel, click on `Test Runs` and navigate to your most recent test run results

## Congratulations! You are done.



[levo-cli]: ../../../levo-cli/levo-cli-intro.md
