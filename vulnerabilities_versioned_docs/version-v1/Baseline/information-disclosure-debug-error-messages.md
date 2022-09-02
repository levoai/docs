
# Information Disclosure - Debug Error Messages
![Debug Error Messages](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returns a response that contains standard error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. 

Revealing standard error/debug information, allows attackers to deduce the type of the API server. This in turn enables attackers to try exploiting the server for known/unpatched vulnerabilities.

## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [Testing for Improper Error Handling](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/01-Testing_For_Improper_Error_Handling)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the presence of standard error/debug messages that reveal the type of the API server.

### What is the solution?
Disable debugging messages before promoting to production.


