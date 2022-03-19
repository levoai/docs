---
sidebar_position: 2
---

# Association RBAC Information with APIs

APIs specified in the API Catalog can be associated with `RBAC` information using the `metadata.yml` file.
The association is made by importing a properly constructed `metadata.yml` into the specific API Catalog (Application or Service).

Please refer to the API Catalog screens in the UI to import a `metadata.yml` file.

## What is the structure of the `metadata.yml` file?

Consider a scenario where you have the API endpoints mentioned below, and have implemented role based access controls (RBAC) for your APIs.

*`GET /`* <br></br>
*`GET /identity/api/v1/admin/users/find`* <br></br>
*`GET /identity/api/v2/vehicle/{vehicleId}/location`* <br></br>
*`GET /workshop/api/shop/orders/{order_id}`* <br></br>

Say, that there are two roles: `ROLE_USER` and `ROLE_ADMIN` associated with your API endpoints. These roles provide certain entitlements (capability to access specific API operations after authentication) to regular users and administrators.

The table below represents the RBAC entitlements:

| API Endpoint                                      | Roles Allowed to Access Endpoint | Comments                         |
| ------------------------------------------------- | -------------------------------- | -------------------------------- |
| GET /                                             | ROLE_USER, ROLE_ADMIN            | Available to all roles           |
| GET /identity/api/v1/admin/users/find             | ROLE_ADMIN                       | Endpoint has elevated privileges |
| GET /identity/api/v2/vehicle/{vehicleId}/location | ROLE_USER                        | N/A for Admins                   |
| GET /workshop/api/shop/orders/{order_id}          | ROLE_USER                        | N/A for Admins                   |

For the above scenario, YAML file (shown below), provides a mapping between the API endpoints and their associated roles.

```YAML
# This is an example metadata.yml file
#
roles:
  # This section captures the set of roles that are available to be associated with your API endpoints
  - role: ROLE_USER
    description: USER role that provides certain entitlements for regular users
  - role: ROLE_ADMIN
    description: ADMIN role that provides elevated privileges/entitlements for administrator
#
#
api:
  # This section defines actual associations between API endpoints and roles at the global level
  # This can be overridden at the individual API endpoint level
  roles:
    - ROLE_USER
    - ROLE_ADMIN
  # The default role (and an associated user) that should be used to access all endpoints
  # This can be overridden at the individual API endpoint level
  default_role: ROLE_USER
  #
  #
  endpoints:
    # This section defines API endpoint specific overrides
    #
    - endpoint: GET /identity/api/v1/admin/users/find
      roles:
        - ROLE_ADMIN # `admin/users/find` should only be accessed by ROLE_ADMIN
      default_role: ROLE_ADMIN # override the default role for this endpoint
    #
    - endpoint: GET /identity/api/v2/vehicle/{vehicleId}/location
      roles:
        - ROLE_USER # `/vehicle/{vehicleId}/location` should only be accessed by ROLE_USER
        # No need to override the default_role here, as it is already ROLE_USER
    #
    - endpoint: GET /workshop/api/shop/orders/{order_id}
      roles:
        - ROLE_USER # `/shop/orders/{order_id}` should only be accessed by ROLE_USER
        # No need to override the default_role here, as it is already ROLE_USER 
```

If you have many API endpoints and have complex requirements for associating RBAC information, the next section will help simplify the association, via the usage of regular expressions, etc.