---
sidebar_position: 2
description: "Understand OWASP API Security Top 10 - A2: BUA with Levo.ai. Learn about Broken User Authentication vulnerabilities and how to mitigate them."

---

# API A2 - Broken Authentication
![BOLA](../assets/API-Top-10/A2-BUA.svg)

## What is it?
Authentication mechanisms are often implemented incorrectly, allowing attackers to compromise authentication tokens, or to exploit implementation flaws to assume other user’s identities.

Compromising a system’s ability to identify the client/user, compromises API security overall.

## What are specific examples?
 - Weak authentication that does not follow industry best practices.
 - Weak API keys that are not rotated.
 - Passwords that are weak, plain text, encrypted but poorly hashed, shared, or default passwords.
 - Authentication susceptible to brute force attacks and credential stuffing.
 - Credentials and keys included in URLs.
 - Lack of access token validation (including JWT validation).
 - Unsigned or weakly signed non-expiring JWTs.
 - Unprotected APIs that are considered “internal”.

## References
[OWASP API TOP-10 A2](https://owasp.org/www-project-api-security/)  
[Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## Test case FAQs

### When is this test case applicable?
* Only for API endpoints that require authentication.

### How does it work?
The endpoint is subjected to a battery of authentication related tests, that probe for common weaknesses.


### What is the solution?
- Maintain a clear inventory of your API endpoints.
- Clearly itemize APIs that require authentication and those that don't.
- Use industry standard libraries for authentication, token generation, and password storage. Do not build your own.
- Use multi-factor authentication (MFA).
- Use short-lived access tokens.
- Use stricter rate-limiting for authentication, and implement lockout policies and weak password checks.
- Continuously validate that your authentication mechanisms are working in pre-production and production.



