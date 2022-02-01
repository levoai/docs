# OWASP Web A10 - Server Side Request Forgery
![SSRF](../../assets/SSRF.svg)

## What is it?
Server-side request forgery (also known as SSRF) is a security vulnerability that allows an attacker to induce the server-side application to make HTTP requests to an arbitrary domain of the attacker's choosing.

In a typical SSRF attack, the attacker might cause the server to make a connection to internal-only services within the organization's infrastructure. In other cases, they may be able to force the server to connect to arbitrary external systems, potentially leaking sensitive data such as authorization credentials.

## References
[MITRE CWE-918](https://cwe.mitre.org/data/definitions/918.html)  
[OWASP Top 10 - A10](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)   
[OWASP - SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

## Test case FAQs
### When is this test case applicable?
* API endpoints that take client-supplied input specifying URLs, files, or other API endpoints


## How does it work?
1. The parameter(s) within the API endpoint, which take URLs (or files, or other API endpoints) as input, are injected with malicious data. The malicious data is typically a URL, that references an internal resource that should not be exposed externally (e.g. AWS instance meta data).
2. If the API endpoint returns the internal resource, the API is deemed vulnerable to SSRF.

## What is the solution?
* Sanitize all client-supplied input by creating a list of trusted URLs (lists of hosts or a regex). Use a whitelist approach to limit what URLs (or files, or other API endpoints) can be specified as inputs.
* Restrict supported protocols in your web application. Disable any unused URL schemas. For example ftp://, dict://, file://, gopher://, etc.
* With microservice architectures, communication between all internal services should be authenticated.
* AWS: IMDSv2 is an additional defense mechanism for AWS that mitigates some instances of SSRF if you are using a cloud environment. Migrate to IMDSv2 and disable old IMDSv1. Check out the AWS [documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html) for more details.