
# Cookie Without Secure Flag
![Cookie Without Secure Flag](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server is setting a cookie without the secure flag, which means that the cookie can be accessed via unencrypted connections.


## References
- [CWE-614](https://cwe.mitre.org/data/definitions/614.html)
- [Testing for Cookies](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the 'Set-Cookie' header without the 'Secure' flag.

### What is the solution?
Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.


