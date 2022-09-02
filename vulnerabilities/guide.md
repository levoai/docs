---
sidebar_position: 0
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



### Baseline

*Baseline Security Controls* are a minimum set of foundational controls that APIs should implement. These are based on security best practices.

This section lists vulnerabilities arising due to the violation of these security controls. A number of these issues are applicable to [OWASP API A7][REF-OWASP-API-A7].


| Issue                                                   | CWE / Reference                                                 |
| -----------------------------------------------------   | ----------------------------------------------------------|
| [In Page Banner Information Leak][BL-IN_PAGE_BANNER_INFORMATION_LEAK] | [Testing for Error Codes][REF-ERROR-DISCLOSURE] |
| [Information Disclosure - Debug Error Messages][BL-DEBUG-MSGS]| [CWE-200][CWE-200]|
| [Information Disclosure - Sensitive Information in URL][BL-URL-PII]| [CWE-200][CWE-200]|
| [Information Disclosure - Sensitive Information in HTTP Referrer Header][BL-PII-REF-HDR]| [CWE-200][CWE-200]|
| [Application Error Disclosure][BL-APP-ERR-DISCLOSURE]| [CWE-200][CWE-200]|
| [X-Powered-By Information Leak][BL-SERVER_LEAKS_INFORMATION_VIA_X_POWERED_BY] | [CWE-200][CWE-200] |
| [Information Leak Via 'Server' HTTP Response Header][BL-SERVER-HDR]| [CWE-200][CWE-200]|
| [Private IP Disclosure In Response][BL-PRIV-IP-DISCLOSURE]| [CWE-200][CWE-200]|
| [PII Disclosure In Response][BL-PII-DISCLOSURE]| [CWE-359][CWE-359]|
| [Hash Disclosure In Response][BL-HASH-DISCLOSURE]| [CWE-200][CWE-200]|
| [Cross-Domain (CORS) Misconfiguration (Passive)][BL-CORS-PASSIVE]| [CWE-264][CWE-264]|
| [Sub Optimal Cache Control Directives][BL-RE_EXAMINE_CACHE_CONTROL_DIRECTIVES]| [CWE-525][CWE-525] |
| [Content Retrieved from Cache][BL-CACHE-RETRIEVE]| [CWE-525][CWE-525]|
| [Missing Strict-Transport-Security Header][BL-HSTS]| [Strict Transport Security Cheat Sheet][REF-HSTS]|
| [Missing Content-Type Header][BL-CONTENT-TYPE]| [CWE-345][CWE-345]|
| [Missing X-Content-Type-Options Header][BL-X-CONTENT-TYPE]| [CWE-693][CWE-693]|
| [Cookie Set Without HttpOnly Flag][BL-COOKIE-NO-HTTP-ONLY] | [CWE-1004][CWE-1004]|
| [Cookie Without Secure Flag][BL-COOKIE-NO-SECURE] | [CWE-614][CWE-614]|
| [Cookie Poisoning Via Query/Body Parameters][BL-COOKIE-POISON]| [CWE-20][CWE-20]|
| [Session ID in URL Via Rewrite][BL-SESS-ID-URL] | [CWE-200][CWE-200]|
| [Suboptimal Anti-clickjacking Headers][BL-ANTI-CLICKJACK]| [CWE-1021][CWE-1021]|
| [Open/Unrestricted URL Redirect Via URL Query Parameter][BL-OPEN-REDIRECT]| [CWE-601][CWE-601]|
| [Weak Authentication Method][BL-WEAK-AUTH]| [CWE-326][CWE-326]|
| [Java Serialization Detected][BL-JAVA-SERIALIZATION]| [CWE-502][CWE-502]|





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


[CWE-20]: https://cwe.mitre.org/data/definitions/20.html
[CWE-200]: https://cwe.mitre.org/data/definitions/200.html
[CWE-264]: https://cwe.mitre.org/data/definitions/264.html
[CWE-326]: https://cwe.mitre.org/data/definitions/326.html
[CWE-345]: https://cwe.mitre.org/data/definitions/345.html
[CWE-359]: https://cwe.mitre.org/data/definitions/359.html
[CWE-393]: https://cwe.mitre.org/data/definitions/393.html
[CWE-394]: https://cwe.mitre.org/data/definitions/394.html
[CWE-502]: https://cwe.mitre.org/data/definitions/502.html
[CWE-525]: https://cwe.mitre.org/data/definitions/525.html
[CWE-600]: https://cwe.mitre.org/data/definitions/600.html
[CWE-601]: https://cwe.mitre.org/data/definitions/601.html
[CWE-614]: https://cwe.mitre.org/data/definitions/614.html
[CWE-693]: https://cwe.mitre.org/data/definitions/693.html
[CWE-838]: https://cwe.mitre.org/data/definitions/838.html
[CWE-1004]: https://cwe.mitre.org/data/definitions/1004.html
[CWE-1021]: https://cwe.mitre.org/data/definitions/1021.html
[CWE-1215]: https://cwe.mitre.org/data/definitions/1215.html
[CWE-1275]: https://cwe.mitre.org/data/definitions/1275.html


[BL-IN_PAGE_BANNER_INFORMATION_LEAK]: ./Baseline/in-page-banner-information-leak.md
[BL-SERVER_LEAKS_INFORMATION_VIA_X_POWERED_BY]: ./Baseline/server-leaks-information-via-x-powered-by-http-response-header-field-s.md
[BL-RE_EXAMINE_CACHE_CONTROL_DIRECTIVES]: ./Baseline/re-examine-cache-control-directives.md
[BL-HSTS]: ./Baseline/strict-transport-security-header.md
[BL-CONTENT-TYPE]: ./Baseline/content-type-header-missing.md
[BL-X-CONTENT-TYPE]: ./Baseline/x-content-type-options-header-missing.md
[BL-APP-ERR-DISCLOSURE]: ./Baseline/application-error-disclosure.md
[BL-COOKIE-NO-HTTP-ONLY]: ./Baseline/cookie-no-httponly-flag.md
[BL-COOKIE-NO-SECURE]: ./Baseline/cookie-without-secure-flag.md
[BL-COOKIE-POISON]: ./Baseline/cookie-poisoning.md
[BL-SESS-ID-URL]: ./Baseline/session-id-in-url-rewrite.md
[BL-DEBUG-MSGS]: ./Baseline/information-disclosure-debug-error-messages.md
[BL-URL-PII]: ./Baseline/information-disclosure-sensitive-information-in-url.md
[BL-PII-REF-HDR]: ./Baseline/information-disclosure-sensitive-information-in-http-referrer-header.md
[BL-PRIV-IP-DISCLOSURE]: ./Baseline/private-ip-disclosure.md
[BL-OPEN-REDIRECT]: ./Baseline/open-redirect.md
[BL-SERVER-HDR]: ./Baseline/http-server-response-header.md
[BL-CACHE-RETRIEVE]: ./Baseline/retrieved-from-cache.md
[BL-PII-DISCLOSURE]: ./Baseline/pii-disclosure.md
[BL-HASH-DISCLOSURE]: ./Baseline/hash-disclosure.md
[BL-CORS-PASSIVE]: ./Baseline/cross-domain-misconfiguration-passive.md
[BL-ANTI-CLICKJACK]: ./Baseline/anti-clickjacking-header.md
[BL-WEAK-AUTH]: ./Baseline/weak-authentication-method.md
[BL-JAVA-SERIALIZATION]: ./Baseline/java-serialization-object.md


[REF-OWASP-API-A7]: ./OWASP-API-10/A7-Security-Misconfiguration
[REF-ERROR-DISCLOSURE]: https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/01-Testing_for_Error_Code 
[REF-HSTS]: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html