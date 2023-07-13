
# Information Leak Via 'Server' HTTP Response Header
![Server Header Info Leak](../assets/baseline/baseline-vuln.svg)

## What is it?
The API/server is leaking information via the “Server” HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your API is reliant upon and the vulnerabilities such components may be subject to.

Below is an example where the type of the API server, and the framework version is revealed by the 'Server' header.

```
HTTP/1.1 200 OK
Date: Thu, 12 Jun 2014 14:15:01 GMT
Server: Apache/2.2.21 (Win32) PHP/5.4.7
Content-Length:226
Connection: close
{
...
}
```

Revealing the type, version, and module information of the API server, enables attackers to try exploiting the server for known/unpatched vulnerabilities.

## References
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  
- [Don't Reveal Too Much Information](https://www.troyhunt.com/shhh-dont-let-your-response-headers/)
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for information disclosure as shown in the example above.

### What is the solution?
Ensure that your API/server, load balancer, etc. is configured to suppress version info in 'Server' headers.


