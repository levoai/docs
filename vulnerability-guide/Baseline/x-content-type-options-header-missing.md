
# Missing X-Content-Type-Options Header
![Missing X-Content-Type-Options Header](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returned a response without the X-Content-Type-Options header being set correctly.

The Anti-MIME-Sniffing header X-Content-Type-Options was not set to ’nosniff’. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

## References
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)
- [What does this header do?](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [OWASP Security Headers](https://owasp.org/www-community/Security_Headers)
- [CWE-693](https://cwe.mitre.org/data/definitions/693.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the missing or incorrectly set X-Content-Type-Options header.

### What is the solution?
Ensure that the API server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all responses. If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the API server to not perform MIME-sniffing.


