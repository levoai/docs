---
sidebar_position: 1
---


# Security test my App - Part I
Soon Levo will very soon have capabilities to auto generate OpenAPI specifications from live traffic.
Until then Levo requires OpenAPI specifications for security test generation.

> If you don't have OpenAPI specifications, but still want to test your APIs, please email us at `support@levo.ai`.
We can work with you to find alternative means to generate OpenAPI specifications using HAR files etc.

![](../../assets/test-my-apis-flow-chart.png)

## Import your APIs into Levo SaaS

1. Login into the Levo SaaS portal.

2. Click on `API Catalog` in the side panel and proceed to import you App's API specifications.

3. Select the catalog type as `Application`, and pick a suitable name for this catalog.

4. Complete the import, and verify if the API endpoints are visible in the catalog.

## Generate a security test plan for your APIs

1. Click on `Test Plans` in the side panel and proceed to create a test plan by clicking `New Test Plan`.

2. In the `New Test Plan` dialog pick a suitable name for the plan. 

3. Pick the previously imported API catalog as the API asset for this test plan.

4. If your API specification has [example values][example-values], and these example values will work with your live API endpoints,
then check the check box named **`Auto-populate API parameters for this test plan`**.

    > This uses examples in the OpenAPI specification file to auto populate [test fixtures/API parameters][fixtures] that are required in the generated test plan.
    The example values are used in making API requests during test execution.

5. Proceed to generate the test plan. The generated test plan will have coverage for several security vulnerabilities.

6. Depending on if you used `Auto-populate API parameters for this test plan`, in the previous step, and how comprehensive
the provided examples are, your newly generated test plan with either be in the `Config Complete` or `Config in Progress` states.

7. If your test plan is in the `Config Complete` state, it is immediately runnable, and you can proceed [here][download-env-step].

8. If your test plan is in the `Config in Progress` state, you will need to configure values for API parameters using [test fixtures][fixtures].
The next section describes the processing of configuring API parameter values via fixtures.


[example-values]: https://swagger.io/docs/specification/adding-examples/
[fixtures]: ../../concepts/fixtures/test-fixtures.md
[download-env-step]: ./test-app-security-2#download-the-environmentyml-file