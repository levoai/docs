
# Information Leak Via 'X-Powered-By' HTTP Response Header
![X-Powered-By Info Leak](../assets/baseline/baseline-vuln.svg)

## What is it?
The API/server is leaking information via one or more “X-Powered-By” HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your API is reliant upon and the vulnerabilities such components may be subject to.

Below is an example where the type of the API server, and the framework version is revealed by the 'X-Powered-By' header.

```
HTTP/1.1 200 OK
Date: Sat, 04 Nov 2006 15:26:48 GMT
Content-Length: 310
Content-Type: application/json
Server: Microsoft-IIS/7.5
X-Powered-By: ASP.NET; X-AspNet-Version=4.0.30319
{
...
}
```

Revealing the type, version, and module information of the API server, enables attackers to try exploiting the server for known/unpatched vulnerabilities.

## References
[OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  
[Don't Reveal Too Much Information](https://www.troyhunt.com/shhh-dont-let-your-response-headers/)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for information disclosure as shown in the example above.

### What is the solution?
Ensure that your API/server, load balancer, etc. is configured to suppress 'X-Powered-By' headers.


