---
sidebar_position: 1
---

# Security Vulnerability Guide

This section lists important vulnerabilities applicable to modern API driven applications.

### OWASP API Top 10

| Rank  | Vulnerability                               | CWE                                        |
| ----- | ------------------------------------------- | ---------------                            |
| A1    | [Broken Object Level Authorization][BOLA]   | [639][BOLA-CWE]                            |
| A2    | [Broken Authentication][BUA]                | [425][BUA-CWE], [287][BUA-CWE-2]           |
| A3    | [Excessive Data Exposure][EXPOSURE]         | [213][EXPOSURE-CWE]                        |
| A4    | [Lack of Resources and Rate Limits][RATES]  | [770][RATES-CWE]                           |
| A5    | [Broken Function Level Authorization][BFLA] | [1220][BFLA-CWE]                           |
| A6    | [Mass Assignment][MASS-ASSIGN]              | [915][MASS-ASSIGN-CWE]                     |
| A7    | [Security Misconfiguration][MISCONFIG]      | [1349][MISCONFIG-CWE]                      |
| A8    | [Injection][INJECTION]                      | [89][SQLi-CWE], [77][CMDi-CWE]             |
| A9    | [Improper Asset Management][ASSETS]         | [1059][ASSETS-CWE]                         |
| A10   | [Insufficient Logging & Monitoring][NOLOG]  | [778][NOLOG-CWE]                           |


### OWASP Web Top 10

| Rank  | Vulnerability                               | CWE                                        |
| ----- | ------------------------------------------- | ---------------                            |
| A10   | [Server Side Request Forgery][SSRF]         | [918][SSRF-CWE]                            |



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
[BUA-CWE]: https://cwe.mitre.org/data/definitions/425.html
[BUA-CWE-2]: https://cwe.mitre.org/data/definitions/287.html

[EXPOSURE]: ./OWASP-API-10/A3-Excessive-Data-Exposure.md
[EXPOSURE-CWE]: https://cwe.mitre.org/data/definitions/213.html

[RATES]: ./OWASP-API-10/A4-Rate-Limits.md
[RATES-CWE]: https://cwe.mitre.org/data/definitions/770.html

[BFLA]: ./OWASP-API-10/A5-BFLA.md
[BFLA-CWE]: https://cwe.mitre.org/data/definitions/1220.html

[MASS-ASSIGN]: ./OWASP-API-10/A6-Mass-Assignment.md
[MASS-ASSIGN-CWE]: https://cwe.mitre.org/data/definitions/915.html

[MISCONFIG]: ./OWASP-API-10/A7-Security-Misconfiguration.md
[MISCONFIG-CWE]: https://cwe.mitre.org/data/definitions/1349.html

[SSRF]: ./OWASP-WEB-10/A10-SSRF.md
[SSRF-CWE]: https://cwe.mitre.org/data/definitions/918.html

[INJECTION]: ./OWASP-API-10/A8-Injection.md
[CMDi-CWE]: https://cwe.mitre.org/data/definitions/77.html
[SQLi-CWE]: https://cwe.mitre.org/data/definitions/89.html

[ASSETS]: ./OWASP-API-10/A9-Improper-Asset-Management.md
[ASSETS-CWE]: https://cwe.mitre.org/data/definitions/1059.html

[NOLOG]: ./OWASP-API-10/A10-Insufficient-Logging.md
[NOLOG-CWE]: https://cwe.mitre.org/data/definitions/778.html


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

