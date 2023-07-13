
# Cookie Set Without HttpOnly Flag
![Cookie Set Without HttpOnly Flag](../assets/baseline/baseline-vuln.svg)

## What is it?
A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript.

If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.

## References
- [CWE-1004](https://cwe.mitre.org/data/definitions/1004.html)
- [Testing for Cookies](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the 'Set-Cookie' header without the 'HttpOnly' flag.

### What is the solution?
Ensure that the HttpOnly flag is set for all cookies.


