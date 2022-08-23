
# In Page Banner Information Leak
![Page Banner Info Leak](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use.

For example, a common 404 response from the API/server looks like the example below.

```
HTTP/1.1 404 Not Found
Date: Sat, 04 Nov 2006 15:26:48 GMT
Server: Apache/2.2.3 (Unix) mod_ssl/2.2.3 OpenSSL/0.9.7g
Content-Length: 310
Connection: close
Content-Type: text/html; charset=iso-8859-1
...
<title>404 Not Found</title>
...
<address>Apache/2.2.3 (Unix) mod_ssl/2.2.3 OpenSSL/0.9.7g at <host target> Port 80</address>
...
```

Revealing the type, version, and module information of the API server, enables attackers to try exploiting the server for known/unpatched vulnerabilities.

## References
[OWASP API TOP-10 A7](https://owasp.org/www-project-api-security/)  
[Testing for Error Handling]( https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for information disclosure as shown in the example above.

### What is the solution?
Configure the API server to prevent such information leaks. For example: Under Tomcat this is done via the 'server' directive and implementation of custom error pages. Under Apache this is done via the 'ServerSignature' and 'ServerTokens' directives.


