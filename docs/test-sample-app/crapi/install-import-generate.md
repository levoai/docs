---
sidebar_position: 2
---

# Install, Import, Generate

## Install crAPI
1. Install the crAPI demo application by following instructions [here][install-crapi].
2. Download and save crAPIs OpenAPI specification (OAS) [here][crapi-openapi-spec].
3. Verify crAPI is running by logging in, using one of the user credentials provided [here][crapi-credentials].

## Import crAPI APIs into Levo SaaS
1. Login into the Levo SaaS portal.
1. Click on `API Catalog` in the side panel and proceed to import crAPIs OAS.
1. In the import dialog name this API catalog as `My crAPI`, and complete the import.

## Generate a security test plan for crAPI's APIs
1. Click on `Test Plans` in the side panel and proceed to create a `New Test Plan`.
1. In the `New Test Plan` dialog name the plan as `My crAPI Test Plan`. Pick `My crAPI` as the asset for this test plan.
1. Proceed to generate the test plan.
1. You will now have a test plan called `My crAPI Test Plan` in the `Ready to Configure` state.

[install-crapi]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md
[crapi-openapi-spec]: https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/openapi.json
[crapi-credentials]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info
