
# PII Disclosure In Response
![PII Disclosure In Response](../assets/baseline/baseline-vuln.svg)

## What is it?
The response contains Personally Identifiable Information (PII), such as credit card numbers, social security numbers (SSN), and similar sensitive data.

## References
- [CWE-359](https://cwe.mitre.org/data/definitions/359.html)
- [OWASP Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)  


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses from the API server are analyzed for the presence of sensitive information (PII).

### What is the solution?
Verify if PII present in the response is justified by a legitimate business requirement. Ensure that the amount of PII being disclosed in the response is limited to serve the specific use case of the API endpoint.


