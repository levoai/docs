---
sidebar_position: 2
---

# CrAPI Sample App - Part 1

## 1. Install crAPI
1. Install the crAPI demo application by following instructions [here][install-crapi].

2. [Download][crapi-openapi-spec] and save crAPIs OpenAPI specification (OAS).

3. Verify crAPI is running by logging in, using one of the user credentials provided [here][crapi-credentials].

## 2. Import crAPI APIs into Levo SaaS
1. Login into the Levo SaaS portal.

2. Click on `API Catalog` in the side panel and proceed to import crAPIs OAS (saved in step above).

3. In the import dialog name this API catalog as `My crAPI`, and complete the import.

## 3. Upload a metadata.yml file to enable authorization bypass (RBAC) tests
crAPI's APIs have role based access controls (RBAC). If want to validate the proper configuration and functioning of the said controls, you will need to construct a metadata.yml file and upload it to the catalog created in the previous step.

You can read more about authorization bypass tests and the metadata.yml file [here](../../../guides/security-testing-concepts/api-catalog/metadata-yml.md).

For your convenience, the appropriate metadata.yml for crAPI is shown below. Please upload this to catalog via the `Metadata` tab in the catalog UI.

```YAML
# metadata.yml file for crAPI that describes RBAC for API endpoints
#
roles:
# This section captures the set of roles that are available to be associated with the API endpoints
  - role: ROLE_USER
    description: This role provides specific entitlements for regular users
  - role: ROLE_MECHANIC
    description: This role provides specific entitlements for mechanics
  - role: ROLE_ADMIN
    description: This role provides specific entitlements for administrators
#
api:
# This section defines actual associations between API endpoints and roles at the global level
# This can be overridden at the individual API endpoint level
  roles:
    - ROLE_USER
    - ROLE_MECHANIC
    - ROLE_ADMIN
  # The default role (and an associated user) that should be used to access all endpoints
  # This can be overridden at the individual API endpoint level
  default_role: ROLE_USER
  endpoints:
    # This section defines API endpoint specific overrides
    #
    - endpoint: GET /identity/api/v1/admin/users/find
      roles:
        - ROLE_ADMIN
      default_role: ROLE_ADMIN
    - endpoint: GET /identity/api/v2/vehicle/{vehicleId}/location
      roles:
        - ROLE_ADMIN
        - ROLE_USER
      default_role: ROLE_USER
    - endpoint: GET /workshop/api/mechanic/mechanic_report
      roles:
        - ROLE_ADMIN
        - ROLE_USER
      default_role: ROLE_USER
    - endpoint: GET /workshop/api/merchant/contact_mechanic
      roles:
        - ROLE_ADMIN
        - ROLE_USER
      default_role: ROLE_USER
    - endpoint: GET /workshop/api/shop/orders/{order_id}
      roles:
        - ROLE_USER
```

## 4. Generate a security test plan for crAPI's APIs
1. Click on `Test Plans` in the side panel and proceed to create a test plan by clicking `New Test Plan`.

2. Pick `Data Driven` as the type of test plan to generate.

3. In the `New Test Plan` dialog name the plan as `My crAPI Test Plan`. Pick `My crAPI` as the API asset for this test plan.

4. Check the check box named **`Auto-populate API parameters for this test plan`**.

    > This uses examples in the OpenAPI specification file to auto populate [test fixtures/API parameters][fixtures] that are required in the generated test plan.
    The example values are used in making API requests during test execution.

5. Proceed to generate the test plan.

6. You will now have a test plan called `My crAPI Test Plan` in the `Config Complete` state.

7. **Copy** the LRN (Levo Resource Name) of `My crAPI Test Plan` to the clipboard.

8. Open the test plan `My crAPI Test Plan`, navigate to the `environment.yml` section, 
and download this file to your desktop. You can read more about the purpose of the file [here][env-file].

[install-crapi]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md
[crapi-openapi-spec]: https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/demo%20scenarios/onboarding-scenarios.json
[crapi-credentials]: https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info
[fixtures]: ../../../guides/security-testing-concepts/test-plans/fixtures/test-fixtures.md
[env-file]: ../../../guides/security-testing-concepts/test-plans/env-yml.md
