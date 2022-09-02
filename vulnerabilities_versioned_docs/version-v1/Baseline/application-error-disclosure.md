
# Application Error Disclosure
![Application Error Disclosure](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returns an error/warning message that may disclose sensitive information like the location of the (code) file that produced the unhandled exception. This information can be used to launch further attacks against the API.

For example, a `500 exception` response from the API/server looks like the example below.

```
HTTP/1.1 500 Internal Server Error
Date: Sat, 04 Nov 2006 15:26:48 GMT
Server: Python Flask
Content-Type: text/plain
...
INFO:root:General exception noted.
Traceback (most recent call last):
  File "C:\Test\test.py", line 8, in <module>
    myfunction()
NameError: name 'myfunction' is not defined
...
```

## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  
- [Testing for Improper Error Handling](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/01-Testing_For_Improper_Error_Handling)


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for information disclosure as shown in the example above.

### What is the solution?
Review the source code of this API endpoint. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the API client, while logging the details on the API server side and not exposing them to the user.
