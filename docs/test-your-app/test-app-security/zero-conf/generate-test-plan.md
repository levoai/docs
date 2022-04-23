---
sidebar_position: 3
---


# Auto Generate Test Plan
![](../../../assets/zero-conf-flow-2.svg)


## 1. Generate a security test plan for your APIs

1. Click on `Test Plans` in the side panel and proceed to create a test plan by clicking `New Test Plan`.

2. Pick `Zero Config` as the type of test plan to generate 

3. In the `New Test Plan` dialog pick a suitable name for the plan. 

4. Pick the previously imported API catalog as the API asset for this test plan.

5. Proceed to generate the test plan. The generated test plan will have coverage for several security vulnerabilities.
    > Zero Config Test Plans do not support horizontal authorization bypass ([BOLA][bola]) tests. If you skipped providing RBAC association info via the metadata.yml file, no tests for vertical authorization bypass ([BFLA][bfla]) will be generated.

6. Your new test plan will be in the `Config Complete` state, and is immediately runnable. Please proceed to the next step.


[bola]: /vulnerabilities/v1/OWASP-API-10/A1-BOLA
[bfla]: /vulnerabilities/v1/OWASP-API-10/A5-BFLA



