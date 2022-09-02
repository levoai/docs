
# Suboptimal Anti-clickjacking Headers
![Suboptimal Anti-clickjacking Headers](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returned a response with suboptimal anti-clickjacking headers.

The following distinct issues are covered under this category:

### 1. Missing Anti-clickjacking Header

#### Summary
The response does not include either a Content-Security-Policy header with ‘frame-ancestors’ directive or a X-Frame-Options header to protect against ‘ClickJacking’ attacks.

#### Solution
Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all responses returned by your API. 

[OWASP](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-frame-options) recommends that API responses set the 'X-Frame-Options' header to 'DENY'.

### 2. Multiple X-Frame-Options Header Entries In Response

#### Summary
Multiple X-Frame-Options (XFO) headers were found in the response. A response with multiple XFO header entries may not be predictably processed by all user-agents.

#### Solution
Ensure only a single X-Frame-Options header is present in the response.

### 3. X-Frame-Options Setting Malformed

#### Summary
An X-Frame-Options header was present in the response but the value was not correctly set.

#### Solution
Ensure a valid setting is used on all responses returned by your API server. [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html#x-frame-options) recommends that API responses set the 'X-Frame-Options' header to 'DENY'.


## References
- [What is Clickjacking?](https://en.wikipedia.org/wiki/Clickjacking)
- [Testing for Clickjacking](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/11-Client-side_Testing/09-Testing_for_Clickjacking)
- [X-Frame-Options Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [OWASP API TOP-10 A7](https://owasp.org/www-project-api-security/)  
- [CWE-1021](https://cwe.mitre.org/data/definitions/1021.html)


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for suboptimal/missing 'X-Frame-Options' headers.

### What is the solution?
Please refer to the solutions for the specific issues listed above: [Missing Anti-clickjacking Header](#1-missing-anti-clickjacking-header), [Multiple X-Frame-Options Header Entries In Response](#2-multiple-x-frame-options-header-entries-in-response), [X-Frame-Options Setting Malformed](#3-x-frame-options-setting-malformed).


