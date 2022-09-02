---
sidebar_position: 4
---

# API A4 - Lack of Resources and Rate Limits
![RATE-LIMITS](../assets/API-Top-10/A4-Rate-Limits.svg)

## What is it?
APIs need to restrict the size and/or the number of resources that can be requested by the client/user.

Lack of such controls lead to Denial of Service (DoS), degraded performance, and authentication flaws like brute force.

## What are specific examples?
 - Attackers overload the API by sending more requests than it can handle, causing degraded performance or complete Denial of Service.
 - The size of the requests or the size/value of certain fields in them, leads to degraded performance or complete Denial of Service. For example, API endpoints that accept an unrestricted page size, as a query parameter.
 - “Zip bombs”, archive files that have been designed so that unpacking them takes excessive amount of resources and overloads the API.

## References
[OWASP API TOP-10 A4](https://owasp.org/www-project-api-security/)  
[Rate Limiting - Best Practices](https://cloud.google.com/architecture/rate-limiting-strategies-techniques)

## Test case FAQs

### When is this test case applicable?
* Applicable to all API endpoints.

### How does it work?
- The endpoint is accessed at increasingly high frequencies to test for the absence of rate limit controls.
- Based on the structure of the endpoint, certain strategic fields (e.g. page key, limit key, etc.) are set to large values, attempting to cause degraded performance or complete Denial of Service.


### What is the solution?
- Define proper rate limiting for all endpoints by using industry standard frameworks.
- Limit payload sizes.
- Limit maximum values for strategic query fields like `page size`, `limit`, etc.
- Tailor the rate limiting to be match what API methods, clients, or addresses need or should be allowed to get.
- Add checks on compression ratios.
- Define limits for container resources.



