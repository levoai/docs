
# Missing 'Content-Type' Header
![Page Banner Info Leak](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returned a response without the Content-Type header being set.

API responses are typically of type 'application/json'. 

## References
- [OWASP API TOP-10 A7](https://owasp.org/www-project-api-security/)  
- [Setting JSON Content Type In Spring MVC](https://www.baeldung.com/spring-mvc-set-json-content-type)
- [Web API Request/Response Data Formats](https://www.tutorialsteacher.com/webapi/request-response-data-formats-in-web-api)
- [CWE-345](https://cwe.mitre.org/data/definitions/345.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the missing Content-Type header.

### What is the solution?
Ensure each API endpoint is setting the specific and appropriate content-type value for the content being delivered.


