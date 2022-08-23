
# Session ID in URL (Via URL Rewrite)
![Session ID in URL Rewrite](../assets/baseline/baseline-vuln.svg)

## What is it?
Many users disable cookies as a security precaution in their browsers. In such cases, APIs that use cookies as the authentication mechanism, resort to embedding the session ID as a query parameter in the URL.

This is done by rewriting the original API URL with a new URL that has the session ID as a query parameter.

This is insecure as URLs can be cached, logged, and are generally visible in the browser. So any URL that has a secret (session ID) is likely to leak the secret, and lead to account takeover, etc.


## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [Testing for Exposed Session Variables](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/04-Testing_for_Exposed_Session_Variables)
- [OWASP API TOP-10 A7](https://owasp.org/www-project-api-security/)  


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for redirects to rewritten URLs that have session IDs embedded as query parameters.

### What is the solution?
Use bearer token based authentication for APIs. Alternatively use cookies instead of session IDs in the URL. 


