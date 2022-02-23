---
sidebar_position: 1
---

# Security Vulnerability Guide

This section lists important vulnerabilities applicable to modern API driven applications.

### OWASP API Top 10

| Rank  | Vulnerability                               | CWE                                        |
| ----- | ------------------------------------------- | ---------------                            |
| A1    | [Broken Object Level Authorization][BOLA]   | [639][BOLA-CWE]                            |
| A2    | [Broken Authentication][BUA]                | [287][BUA-CWE]                             |
| A5    | [Broken Function Level Authorization][BFLA] | [1220][BFLA-CWE]                           |
| A8    | [Injection][INJECTION]                      | [89][SQLi-CWE], [77][CMDi-CWE]             |
|       |                                             |                                            |

### OWASP Web Top 10

| Rank  | Vulnerability                               | CWE                                        |
| ----- | ------------------------------------------- | ---------------                            |
| A10   | [Server Side Request Forgery][SSRF]         | [918][SSRF-CWE]                            |
|       |                                             |                                            |



### Miscellaneous

This section lists issues related to API security and resilience, but which cannot be purely categorized as security vulnerabilities.

| Issue                                                   | CWE                                                       |
| -----------------------------------------------------   | ----------------------------------------------------------|
| [API Schema Non Conformance][SC]                        | [1215][CWE-1215], [393][CWE-393]                          |
| [Unexpected 5XX Server Errors][SC-5XX]                  | [600][CWE-600]                                            |
| [Undocumented Response Codes][SC-CODES]                 | [394][CWE-394]                                            |
| [Inadequate Response Headers][SC-HDRS]                  | [838][CWE-838]                                            |
| [Incorrect Response Content Types][SC-CONT]             | [838][CWE-838]                                            |
| [Incorrect Response Body][SC-BODY]                      | [838][CWE-838]                                            |





[BOLA]: ./OWASP-API-10/A1-BOLA.md
[BOLA-CWE]: https://cwe.mitre.org/data/definitions/639.html

[BUA]: ./OWASP-API-10/A2-BUA.md
[BUA-CWE]: https://cwe.mitre.org/data/definitions/287.html

[BFLA]: ./OWASP-API-10/A5-BFLA.md
[BFLA-CWE]: https://cwe.mitre.org/data/definitions/1220.html

[SSRF]: ./OWASP-WEB-10/A10-SSRF.md
[SSRF-CWE]: https://cwe.mitre.org/data/definitions/918.html

[INJECTION]: ./OWASP-API-10/A8-Injection.md
[CMDi-CWE]: https://cwe.mitre.org/data/definitions/77.html
[SQLi-CWE]: https://cwe.mitre.org/data/definitions/89.html


[SC]: ./Miscellaneous/schema-conformance.md
[SC-CODES]: ./Miscellaneous/schema-conformance.md#status-code-conformance-test
[SC-HDRS]: ./Miscellaneous/schema-conformance.md#response-headers-schema-conformance-test
[SC-CONT]: ./Miscellaneous/schema-conformance.md#content-type-schema-conformance-test
[SC-BODY]: ./Miscellaneous/schema-conformance.md#response-schema-conformance-test
[SC-5XX]: ./Miscellaneous/schema-conformance.md#unexpected-server-error-schema-conformance-test


[CWE-1215]: https://cwe.mitre.org/data/definitions/1215.html
[CWE-393]: https://cwe.mitre.org/data/definitions/393.html
[CWE-600]: https://cwe.mitre.org/data/definitions/600.html
[CWE-394]: https://cwe.mitre.org/data/definitions/394.html
[CWE-838]: https://cwe.mitre.org/data/definitions/838.html

