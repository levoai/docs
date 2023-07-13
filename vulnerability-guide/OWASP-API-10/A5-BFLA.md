---
sidebar_position: 5
---

# API A5 - Broken Function Level Authorization
![BFLA](../assets/API-Top-10/A5-BFLA.svg)

## What is it?
Authorization is the process where requests to access a particular resource should be granted or denied. Authorization determines which functionality and data the logged in user (or Principal) may access.

Vertical access control mechanisms restrict access to sensitive functions based on the types of users.

With vertical access controls, different types of users have access to different application functions. For example, an administrator might be able to modify or delete any user's account, while an ordinary user has no access to these actions.

`Broken Function Level Authorization` is a manifestation of suboptimal vertical access control rules.

## References
[OWASP API TOP-10 A5](https://owasp.org/www-project-api-security/)

[Vertical Authorization Abuse][vertical-priv-abuse]


## Test case FAQs

### When is this test case applicable?
Only for API endpoints that require authentication, and which have either a) role definitions, or b) [OIDC scope][scopes] definitions (scopes defined in JWT).

### How does it work?

#### Prerequisites
- Roles or scope sets are defined as part of the API catalog, via either [OIDC scope][scopes] definitions in the OpenAPI specification, or via the environment file.
- If using roles, the environment file should specify the which roles are allowed to access each API endpoint defined in the catalog
- For every role or scope set defined, authentication details for a corresponding user must be provided, via the environment file.
- Optional definition of fixtures that describe specific resources that belong to each user. Definition of these fixtures improves the coverage level of tests (deeper test coverage achieved with fixture data).
- Optional definition of other input parameters for the API endpoint, to be configured via fixtures (deeper test coverage achieved with fixture data).

#### Test sequence for roles
1. Each allowed role for an API endpoint gets a dedicated test case.
2. The API endpoint is first accessed with a user belonging to the allowed role. If this access fails, the test case execution is aborted as a failure.
3. For each disallowed role for the API endpoint under test, a user belonging to the disallowed role is used to access the API endpoint. If the any of the access attempts succeed, the test case results in a failure.
If none of the access attempts succeed, the test case results in a pass.

#### Test sequence for scopes
Scope based testing is coming soon.

### Success/Failure indications
The test case relies on the API endpoint's response status code to determine success or failure of the access attempt. Usually `403 Forbidden` or `401 Unauthorized` indicates access failure.
But in some cases the API might choose to return `404 Not Found` or other codes to indicate failure.

If the endpoint returns failure codes other than `403` or `401`, it might be hard to identify a real failure from a resource not found issue. For example, when the endpoint returns `404 Not Found`,
we cannot differentiate if this is due to lack of authorization or if the requested resource is actually not found.

If fixture definitions that clearly define valid resources (that belong to the users provided in the environment file), were provided, the test case can clearly distinguish between the condition mentioned
above.

### What is the solution?
- Deny all access by default.
- Only allow operations to users belonging to the appropriate role(s) or possessing the appropriate scope(s).


[vertical-priv-abuse]: https://en.wikipedia.org/wiki/Privilege_escalation#Vertical
[scopes]: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes