# Execute Plan / View Results

## Execute the test plan against crAPI
Execute the following in the shell where you installed Levo CLI:

```
# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if crAPI is running on your local machine.
# Modify the TARGET_URL value below if crAPI is running elsewhere.
export TARGET_URL="http://host.docker.internal:8888"

export TEST_PLAN_LRN="<LRN value copied to your clipboard in previous steps>"

# Execute security tests against crAPI 
levo test --plan-lrn $TEST_PLAN_LRN --target-url $TARGET_URL
```

## View the test results in the `Test Runs` page
1. In the Levo SaaS console side panel, click on `Test Runs` and navigate to your most recent test run results
2. You will notice that Levo has found failed test cases and an IDOR vulnerability. Navigate to the IDOR test case status, and review the summary and the logs.

## Verify results using crAPI's Hackpad (Optional)
Inside `crAPI`, use the top level menu to navigate to `Hackpad`. Follow instructions in the `Hackpad` to verify if the IDOR finding reported by Levo is a true positive.

## Congratulations! You are done.