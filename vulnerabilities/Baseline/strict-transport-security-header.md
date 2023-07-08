
# Missing Strict-Transport-Security Header
![Missing HSTS](../assets/baseline/baseline-vuln.svg)

## What is it?
HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a API/server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL).

HSTS is an IETF standards track protocol and is specified in [RFC 6797](https://www.rfc-editor.org/rfc/rfc6797).

## References
[OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  
[HSTS Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for missing HSTS header.

### What is the solution?
Ensure that your API/server, load balancer, etc. is configured to enforce Strict-Transport-Security.


