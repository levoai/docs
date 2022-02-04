---
sidebar_position: 2
---

# API Schema / Contract Non-Conformance
![Schema Conformance](../assets/Miscellaneous/schema-conformance.svg)

## What is it?
API endpoints have a defined schema (aka contract), that is often described in [**OpenAPI Specification**][1] format. The contract allows clients of the API endpoint to interact with it, without knowledge of the underlying implementation. Schema / Contract conformance testing ensures that said contract matches the actual implementation of the API endpoint. [Contract testing][contract-driven-testing] is a critical tool to detect breaking changes before they are deployed to production!

## References
[API Contract Testing](https://docs.pact.io/)  
[API Schema Validation](https://github.com/schemathesis/schemathesis/blob/master/README.rst)  
[Contract Driven Testing][contract-driven-testing]

## How does it work?
The API endpoints are exercised by sending specially crafted (fuzzed) payloads that violate the defined schema on purpose. If the API implementation is robust, the API will reject the request or gracefully fail.

For example, when dealing with string fields, if the defined maximum string length is 50 chars, the crafted payload could have a string length that exceeds 50 chars. If an integer field specifies positive ranges, the crafted payload could have negative values to test for proper input validation.

These tests will work on both authenticated and unauthenticated API endpoints.

## Test case FAQs
### What are the type of schema conformance tests?

#### Status Code Conformance Test
    This test checks to see if the API implementation returns any undocumented response status codes.

Please refer to [CWE-394: Unexpected Status Code or Return Value][CWE-394], for additional information.

#### Response Headers Schema Conformance Test
    This test checks to see if the API implementation returns all the `required` response headers documented in the schema.

Please refer to [CWE-838: Inappropriate Encoding for Output Context][CWE-838], for additional information.

#### Content Type Schema Conformance Test
    This test checks to see if the API implementation returns the appropriate `content types` documented in the schema.

Please refer to [CWE-838: Inappropriate Encoding for Output Context][CWE-838], for additional information.

#### Response Schema Conformance Test
    This test checks to see if the response body returned by API implementation conforms to the JSON structure documented in the schema.

Please refer to [CWE-838: Inappropriate Encoding for Output Context][CWE-838], for additional information.

#### Unexpected Server Error Schema Conformance Test
    This test checks to see if `5XX Server Error` response codes are returned by the API implementation. `5XX` errors are unexpected errors.

Please refer to [CWE-600: Uncaught Exception in Servlet][CWE:600], for additional information.


## What is the solution?
* Document all expected response codes in the API schema.
* Only document all the `required` headers in the response section of the schema.
* Document all expected `content-type` that is returned in the response section of the schema.
* Document (in the schema) all expected JSON structures that are returned by the API implementation in the response body.
* In case of `Unexpected Server Error`, the test case summary will indicate the specified `input parameter` value/ranges that caused the error. Use this hint to fix the implementation such that it either rejects the request or fails gracefully.

[1]: https://swagger.io/specification/
[contract-driven-testing]: https://www.ibm.com/garage/method/practices/code/contract-driven-testing/

[CWE-1215]: https://cwe.mitre.org/data/definitions/1215.html
[CWE:600]: https://cwe.mitre.org/data/definitions/600.html
[CWE-394]: https://cwe.mitre.org/data/definitions/394.html
[CWE-838]: https://cwe.mitre.org/data/definitions/838.html
