
# Sub Optimal Cache Control Directives
![Sub Optimal Cache Control Directives](../assets/baseline/baseline-vuln.svg)

## What is it?
The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content. For static assets like css, js, or image files this might be intended, however, the resources should be reviewed to ensure that no sensitive content will be cached.

## References
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)  
- [Content Caching](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching)    
- [Cache Control Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)  
- [CWE-525](https://cwe.mitre.org/data/definitions/525.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

## How does it work?
Responses sent by the API server are analyzed for sub optimal or missing cache control headers.

### What is the solution?
For secure content, ensure the cache-control HTTP header is set with 'no-cache, no-store, must-revalidate'. If an asset should be cached consider setting the directives 'public, max-age, immutable'.


