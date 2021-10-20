# Use OWASP's crAPI to evaluate Levo's security testing capabilities

You can read more about crAPI [here][crAPI]. Follow instructions below to launch and security test crAPI's APIs.

### A. Install crAPI
1. Install the crAPI demo application by following instructions [here][install-crapi].
2. Download and save crAPIs OpenAPI specification (OAS) [here][crap-openapi].
3. Verify crAPI is running by logging in, using one of the user credentials provided [here][crapi-credentials].

### B. Import crAPI APIs into Levo SaaS
1. Login into the Levo SaaS portal
2. Click on `API Catalog` in the side panel and proceed to import crAPIs OAS.
3. In the import dialog name this API catalog as `My crAPI`, and complete the import.

### C. Create a security test plan for crAPI's APIs
1. Click on `Test Plans` in the side panel and proceed to create a `New Test Plan`
2. In the `New Test Plan` dialog name the plan as `My crAPI Test Plan`. Pick `My crAPI` as the asset for this test plan.
3. Proceed to generate the test plan.
4. You will now have a test plan called `My crAPI Test Plan` in the `Ready to Configure` state.

### D. Configure your test plan
Just like developers run tests using JUnit, XUnit, & PyTest `fixtures`, Levo's test plans use fixtures to drive tests. The fixtures provide seed data required for the proper execution of the tests.

Here you will learn how to provide a fixture for one test case, which tests for a serious security vulnerability called [IDOR][idor].

1. In the test plan, click on the endpoint test suite `GET /workshop/api/mechanic/mechanic_report`. This opens the test suite page.

2. Now click on `Insecure Direct Object Reference (IDOR) Test` to open up the specific test case.

3. The `Parameters` table will show `report_id`, `victim credentials`, and `attacker credentials` as a required parameters that needs binding.

4. In the `parameters.py` code module, edit the auto generated template fixtures, and provide appropriate seed values shown here:

   | User Fixture         | UserID Attribute Value | Password Attribute Value |
    | -------------------- | ---------------------- | ------------------------ |
    | victim credentials   | victim.one@example.com | Victim1One               |
    | attacker credentials | hacker@darkweb.com     | Hack3r$$$                |
    
     
    
    | Fixture Name | Return Value | Comments                                                     |
    | ------------ | ------------ | ------------------------------------------------------------ |
    | `report_id`  | 1            | Report ID `1` is owned by `victim` and has PII data. Access by users other than `victim` is a serious authorization security flaw! |
    
5. Hit save to commit your changes. You have successfully completed configuration of this test case.
6. Now copy (to clipboard) your test plan's `LRN (Levo Resource Name)` from the test plan list page
7. Next step is to run this test plan against crAPI.

### E. Execute the test plan against crAPI
Execute the following in the shell where you installed Levo CLI:

```
# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if crAPI is running on your local machine.
# Modify the TARGET_URL value below if crAPI is running elsewhere.
export TARGET_URL="http://host.docker.internal:8888"

export TEST_PLAN_LRN="<LRN value copied to your clipboard in previous steps>"

# Execute security tests against crAPI 
levo test --plan-lrn $TEST_PLAN_LRN --target-url $TARGET_URL
```

### F. View the test results in the `Test Runs` page
1. In the Levo SaaS console side panel, click on `Test Runs` and navigate to your most recent test run results
2. You will notice that Levo has found failed test cases and an IDOR vulnerability. Navigate to the IDOR test case status, and review the summary and the logs.

### G. (Optionally) Verify results using crAPI's Hackpad
Inside crAPI, use the top level menu to navigate to Hackpad. Follow instructions in the Hackpad to verify if the IDOR finding reported by Levo is a true positive.

## Congratulations! You are done.


[crAPI]: https://github.com/levoai/demo-apps/blob/main/crAPI/README.md
[install-crapi]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md
[crapi-credentials]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info
[crap-openapi]: https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/openapi.json
[idor]: https://github.com/levoai/docs/blob/main/issues/vulnerabilities/IDOR/IDOR.md