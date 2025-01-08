---
title: "Prevent Unauthorized Access: Address API CORS Issues"
---

# Cross-Domain (CORS) Misconfiguration (Passive)
![Cross-Domain Misconfiguration (Passive)](../assets/baseline/baseline-vuln.svg)

## What is it?
The API is misconfigured with a sub optimal and/or overly permissive Cross-Origin Resource Sharing (CORS) policy.

Prior to HTML5, Web browsers enforced the Same Origin Policy which ensures that in order for JavaScript to access the contents of a Web page, both the JavaScript and the Web page must originate from the same domain. Without the Same Origin Policy, a malicious website could serve up JavaScript that loads sensitive information from other websites using a client's credentials, culls through it, and communicates it back to the attacker.

HTML5 makes it possible for JavaScript to access data across domains if a new HTTP header called `Access-Control-Allow-Origin` is defined. With this header, an API server defines which other domains are allowed to access its domain using cross-origin requests. 

A sub optimal and/or overly permissive CORS policy can can lead to spoofing, data theft, relay, and other attacks.

## References
- [Deep Dive Into CORS](https://ieftimov.com/posts/deep-dive-cors-history-how-it-works-best-practices/)
- [CORS Misconfiguration](https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration)
- [OWASP API TOP-10 A7](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md) 
- [CWE-264](https://cwe.mitre.org/data/definitions/264.html)


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the sub optimal configuration of CORS policy, based on the values of 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials', and 'Access-Control-Allow-Methods' HTTP response headers.

### What is the solution?
Configure the 'Access-Control-Allow-Origin' HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner. Follow best practices outlined [here](https://ieftimov.com/posts/deep-dive-cors-history-how-it-works-best-practices/#some-best-practices).


