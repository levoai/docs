---
sidebar_position: 2
---

# CrAPI Sample App - Part I

## Install crAPI
1. Install the crAPI demo application by following instructions [here][install-crapi].

2. [Download][crapi-openapi-spec] and save crAPIs OpenAPI specification (OAS).

3. Verify crAPI is running by logging in, using one of the user credentials provided [here][crapi-credentials].

## Import crAPI APIs into Levo SaaS
1. Login into the Levo SaaS portal.

2. Click on `API Catalog` in the side panel and proceed to import crAPIs OAS (saved in step above).

3. In the import dialog name this API catalog as `My crAPI`, and complete the import.

## Generate a security test plan for crAPI's APIs
1. Click on `Test Plans` in the side panel and proceed to create a test plan by clicking `New Test Plan`.

2. In the `New Test Plan` dialog name the plan as `My crAPI Test Plan`. Pick `My crAPI` as the API asset for this test plan.

3. Check the check box named **`Auto-populate API parameters for this test plan`**.

    > This uses examples in the OpenAPI specification file to auto populate [test fixtures/API parameters][fixtures] that are required in the generated test plan.
    The example values are used in making API requests during test execution.

4. Proceed to generate the test plan.

5. You will now have a test plan called `My crAPI Test Plan` in the `Config Complete` state.

6. **Copy** the LRN (Levo Resource Name) of `My crAPI Test Plan` to the clipboard.

7. Open the test plan `My crAPI Test Plan`, navigate to the `environment.yml` section, 
and download this file to your desktop. You can read more about the purpose of the file [here][env-file].

[install-crapi]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md
[crapi-openapi-spec]: https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/demo%20scenarios/onboarding-scenarios.json
[crapi-credentials]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info
[fixtures]: ../../concepts/fixtures/test-fixtures.md
[env-file]: ../../concepts/authentication/authn-authz.md
