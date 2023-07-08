---
sidebar_position: 3
---

# Associating RBAC Information Using Pattern Matching (Glob)

## What problem does this solve?
Some applications contain a numerous API endpoints and associated RBAC roles/scopes.

This feature supports rapid, and efficient mapping of roles/scopes with numerous API endpoints at scale.

The feature uses a technique called Globbing, which is described below.

## What is Globbing?
The term "globbing", also referred to as "glob matching" or "URL path expansion", is a programming concept that describes the process of using wildcards, referred to as "glob patterns" or "globs", for URL paths or other similar sets of strings.

You can read more about it [here][GLOB].

## What are some use cases?

Consider a scenario where your application has numerous API endpoints, and three roles (shown below) for RBAC.

| RBAC Role Name | Role Description                 |
| -------------- | -------------------------------- |
| ROLE_USER      | A consumer of the application    |
| ROLE_MECHANIC  | Skilled at working with machines |
| ROLE_ADMIN     | Administrator. Oversees everything |

Below are example use cases, and the corresponding `metadata.yml` file structure.

### 1. Allow `ROLE_USER` access to all POST endpoints   

```YAML
roles:
# This section captures the set of roles that are available to be associated with your API endpoints
  - role: ROLE_USER
    description: "A consumer of the application."
  - role: ROLE_MECHANIC
    description: "Skilled at working with machines."
  - role: ROLE_ADMIN
    description: "Administrator. Oversees everything."

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
  #
  endpoint_groups:
  # This section allows Method and URL path based mapping between endpoints and roles
  #
  # This specifies that ROLE_USER should have access to all POST endpoints
    - methods:
        - "POST"
      roles:
        - ROLE_USER
```

### 2. Allow `ROLE_MECHANIC` & `ROLE_ADMIN` access to GET endpoints beginning with `/workshop/`

For example the API endpoints under consideration could be:
- GET /workshop/shop
- GET /workshop/shop/products
- GET /workshop/mechanic
- GET /workshop/mechanic/service_requests

```YAML
roles:
# This section captures the set of roles that are available to be associated with your API endpoints
  - role: ROLE_USER
    description: "A consumer of the application."
  - role: ROLE_MECHANIC
    description: "Skilled at working with machines."
  - role: ROLE_ADMIN
    description: "Administrator. Oversees everything."

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
  #
  endpoint_groups:
  # This section allows Method and URL path based mapping between endpoints and roles
  #
  # This specifies that ROLE_MECHANIC & ROLE_ADMIN should have access to all GET endpoints beginning with /workshop/
    - methods:
        - "GET"
      patterns:
      # This describes the URI path to match as a glob string. This can be a list of URI paths.
        - "/workshop/**"
      roles:
        - ROLE_MECHANIC
        - ROLE_ADMIN
```

### 3. Allow `ROLE_MECHANIC` & `ROLE_ADMIN` access to GET endpoints with URI pattern `/workshop/<URI path segment>`

For example the API endpoints under consideration could be:
- GET /workshop/shop
- GET /workshop/mechanic

However the below API is not under consideration as it has more than one path segments:
- GET /workshop/mechanic/service_requests

```YAML
roles:
# This section captures the set of roles that are available to be associated with your API endpoints
  - role: ROLE_USER
    description: "A consumer of the application."
  - role: ROLE_MECHANIC
    description: "Skilled at working with machines."
  - role: ROLE_ADMIN
    description: "Administrator. Oversees everything."

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
  #
  endpoint_groups:
  # This section allows Method and URL path based mapping between endpoints and roles
  #
  # This specifies that ROLE_MECHANIC & ROLE_ADMIN should have access to all GET endpoints with URI pattern `/workshop/<path segment>`
    - methods:
        - "GET"
      patterns:
      # This describes the URI path to match as a glob string. This can be a list of URI paths.
        - "/workshop/*"
      roles:
        - ROLE_MECHANIC
        - ROLE_ADMIN
```

## FAQs

### What happens when an endpoint is part of a group and also is listed explicitly under the endpoints section?
In such case the explicit listing will take precedence over the group pattern matching. Please see example below.

```YAML
roles:
# This section captures the set of roles that are available to be associated with your API endpoints
  - role: ROLE_USER
    description: "A consumer of the application."
  - role: ROLE_MECHANIC
    description: "Skilled at working with machines."
  - role: ROLE_ADMIN
    description: "Administrator. Oversees everything."

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
  #
  endpoint_groups:
  # This section allows Method and URL path based mapping between endpoints and roles
  #
  # This specifies that ROLE_MECHANIC & ROLE_ADMIN should have access to all GET endpoints with URI pattern `/workshop/<path segment>`
    - methods:
        - "GET"
      patterns:
      # This describes the URI path to match as a glob string. This can be a list of URI paths.
        - "/workshop/*"
      roles:
        - ROLE_MECHANIC
        - ROLE_ADMIN
#
endpoints:
    # This section defines API endpoint specific overrides
    #
    - endpoint: GET /workshop/list
      roles:
      # This overrides the mapping specified in the `endpoint_groups` section above
        - ROLE_ADMIN # `/workshop/list` should only be accessed by ROLE_ADMIN
      default_role: ROLE_ADMIN # override the default role for this endpoint
    #
```

### What methods are supported in the `endpoint_groups`?
All RESTful Methods are supported. In case no method is specified, the glob string will be matched against all RESTful methods.

### What happens when the `patterns` list is absent?
In case the `patterns` list is absent, all endpoints matching the specified `methods` will be matched.

### What matching operators are allowed for the `patterns` glob string?

#### Segments and Separators (/)
The separator is always the `/` character. A segment is everything that comes between the two separators. This includes path parameters.

Example:

`/workshop/api`

Here `workshop` and `api` are the segments and `/` is the separator.

#### Single Asterisk (*)
Single Asterisk (*) matches zero or more characters within one segment. It is used for globbing the URI path within one URI path segment.

Example:

The glob `/workshop/api/shop/*` will match endpoints such as:

`/workshop/api/shop/return_qr_code` 

but not endpoints like:

`/workshop/api/shop/orders/all` or `/workshop/api/shop/orders/{order_id}`

#### Double Asterisk (**)
Double Asterisk (**) matches zero or more characters across multiple URI path segments.

Example:

The glob `/workshop/api/shop/**` will match the endpoints such as:

`/workshop/api/shop/return_qr_code`
`/workshop/api/shop/orders/all`
`/workshop/api/shop/orders/{order_id}`

#### Question Mark(?)
Question mark(?) matches a single character within one URI path segment. When some URIs differ just one character, you can use the `?`.

Example:

Glob string `/community/api/v?/coupon/*` will match:

`/community/api/v2/coupon/new-coupon`
`/community/api/v2/coupon/validate-coupon`
`/community/api/v1/coupon/validate-coupon`




[GLOB]: https://github.com/begin/globbing#what-is-globbing




