---
title: "API Security: Prevent Leaks via HTTP Referrer Headers"
---

# Information Disclosure - Sensitive Information in HTTP Referrer Header
![Information Disclosure - Referrer Header](../assets/baseline/baseline-vuln.svg)

## What is it?
The HTTP 'Referrer' header may have leaked a potentially sensitive parameter to another domain. This can violate PCI and most organizational compliance policies.  

Examples of sensitive information in the 'Referrer' header are parameters with keys like 'user', 'username', 'pass', 'password', 'pwd', 'token', 'ticket', 'session' 'jsessionid', 'sessionid', etc.

## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Requests sent to the API server are analyzed for the presence of sensitive information in the 'Referrer' header.

### What is the solution?
Do not pass sensitive information in URIs that are utilized as a referrer.


