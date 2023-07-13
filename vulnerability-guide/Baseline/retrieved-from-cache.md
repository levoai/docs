
# Content Retrieved from Cache
![Content Retrieved from Cache](../assets/baseline/baseline-vuln.svg)

## What is it?
The content was retrieved from a shared cache such as a CDN or Proxy Server, due the presence of HTTP response headers such as 'X-Cache', 'X-Cache-Lookup', 'Age', etc. 

If the response contains sensitive data (PII, PSI, PHI, etc.), this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use. 

## References
- [Testing for Browser Cache Weaknesses](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/04-Authentication_Testing/06-Testing_for_Browser_Cache_Weaknesses)     
- [CWE-525](https://cwe.mitre.org/data/definitions/525.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

## How does it work?
Responses sent by the API server are analyzed for the presence of HTTP headers (e.g. 'X-Cache', 'X-Cache-Lookup', 'Age', etc.) that indicate that the response content in being served from a CDN or Proxy-Cache. 

### What is the solution?
Validate that the response does not contain sensitive data (PII, PSI, PHI, etc.). If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:
- Cache-Control: no-cache, no-store, must-revalidate, private
- Pragma: no-cache Expires: 0

The above configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.


