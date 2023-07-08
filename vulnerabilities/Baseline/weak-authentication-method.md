
# Weak Authentication Method
![Weak Authentication Method](../assets/baseline/baseline-vuln.svg)

## What is it?
The API is using HTTP basic or digest authentication over an unsecured (plain text) connection. The credentials can be read and then reused by someone with access to the network.

## References
- [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md) 
- [CWE-326](https://cwe.mitre.org/data/definitions/326.html)


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Requests sent for the API are analyzed for the presence of HTTP basic or digest authentication over plain text (non TLS) connections.

### What is the solution?
Protect the connection using HTTPS or use a stronger authentication mechanism such as `Bearer` authentication.


