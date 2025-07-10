# Authentication & Authorization

#### Basic Authentication Used (`basic_auth.py`)
- **CWE**: 319 - Cleartext Transmission of Sensitive Information
- **Severity**: MEDIUM
- **Description**: Detects the use of HTTP Basic Authentication, which transmits credentials in cleartext
- **References**:
    - [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
    - [RFC 7617 - HTTP Basic Authentication](https://datatracker.ietf.org/doc/html/rfc7617)
    - [NIST 800-63B Digital Identity Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)
    - [OWASP API Security Top 10 2023](https://owasp.org/www-project-api-security/)

#### NTLMv1 Authentication Used (`ntlm_auth.py`)
- **CWE**: 319 - Cleartext Transmission of Sensitive Information
- **Severity**: MEDIUM
- **Description**: Detects the use of NTLMv1 authentication, which is considered insecure
- **References**:
    - [CWE-319 Definition](https://cwe.mitre.org/data/definitions/319.html)
    - [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
    - [Microsoft NTLM Authentication Level](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/network-security-lan-manager-authentication-level)
    - [OWASP Top 10 2017 A2 - Broken Authentication](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication)

### JWT Security

#### JWT Disclosure (`jwt_disclosure.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: MEDIUM
- **Description**: Detects JWT tokens being disclosed in API responses
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [Auth0 JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
    - [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)

#### JWT Payload Information Disclosure (`jwt_info_disclosure.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: MEDIUM
- **Description**: Detects sensitive information stored in JWT payloads
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [Auth0 JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
    - [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
    - [RFC 7519 - JWT](https://tools.ietf.org/html/rfc7519)

#### JWT Audience Claim Missing (`jwt_missing_aud.py`)
- **CWE**: 287 - Improper Authentication
- **Severity**: MEDIUM
- **Description**: Detects JWT tokens missing the 'aud' (audience) claim
- **References**:
    - [CWE-287 Definition](https://cwe.mitre.org/data/definitions/287.html)
    - [RFC 7519 Section 4.1.3](https://tools.ietf.org/html/rfc7519#section-4.1.3)
    - [Auth0 JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
    - [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
    - [OWASP API Security](https://owasp.org/www-project-api-security/)

#### JWT Expiration Time Claim Rules (`jwt_missing_exp.py`)
- **CWE**: 613 - Insufficient Session Expiration
- **Severity**: MEDIUM
- **Description**: Detects JWT tokens with missing or inappropriate expiration claims
- **References**:
    - [CWE-613 Definition](https://cwe.mitre.org/data/definitions/613.html)
    - [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
    - [Auth0 JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
    - [OWASP API Security](https://owasp.org/www-project-api-security/)

#### Non Expiring JWT (`non_expiring_jwt.py`)
- **CWE**: 613 - Insufficient Session Expiration
- **Severity**: MEDIUM
- **Description**: Detects JWT tokens that do not have an expiration claim
- **References**:
    - [CWE-613 Definition](https://cwe.mitre.org/data/definitions/613.html)
    - [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
    - [Auth0 JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
    - [OWASP API Security](https://owasp.org/www-project-api-security/)

### Cookie Security

#### Missing HTTPOnly Flag from Session Cookie (`cookie_httponly_missing.py`)
- **CWE**: 1004 - Sensitive Cookie Without 'HttpOnly' Flag
- **Severity**: MEDIUM
- **Description**: Detects cookies missing the HttpOnly flag, which can be accessed via JavaScript
- **References**:
    - [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
    - [RFC 6265 - HTTP State Management](https://datatracker.ietf.org/doc/html/rfc6265)
    - [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
    - [MDN Set-Cookie Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

#### Cookie Secure Missing (`cookie_secure_missing.py`)
- **CWE**: 614 - Sensitive Cookie in HTTPS Session Without 'Secure' Attribute
- **Severity**: MEDIUM
- **Description**: Detects cookies missing the Secure flag in HTTPS sessions
- **References**:
    - [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
    - [RFC 6265 - HTTP State Management](https://datatracker.ietf.org/doc/html/rfc6265)
    - [OWASP Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
    - [Cookie Security Best Practices](https://web.dev/samesite-cookies-explained/)

#### Cookie Path Root (`cookie_path_root_found.py`)
- **CWE**: 16 - Configuration
- **Severity**: LOW
- **Description**: Detects cookies with path set to root, which may be too permissive
- **References**:
    - [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
    - [RFC 6265 - HTTP State Management](https://datatracker.ietf.org/doc/html/rfc6265)
    - [Cookie Security Best Practices](https://web.dev/samesite-cookies-explained/)
    - [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)

#### BIG-IP Cookie Detected (`big_ip_cookie_detected.py`)
- **CWE**: 200 - Information Exposure
- **Severity**: LOW
- **Description**: Detects BIG-IP load balancer cookies that may reveal infrastructure information
- **References**:
    - [F5 BIG-IP Security Guide](https://support.f5.com/csp/knowledge-center/software/BIG-IP?module=BIG-IP%20AFM)
    - [OWASP Information Disclosure Prevention](https://owasp.org/www-community/Improper_Error_Handling)
    - [Load Balancer Security Best Practices](https://www.nginx.com/blog/load-balancing-security-best-practices/)

### Information Disclosure

#### Email Address Disclosure (`email_address_disclosure.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects email addresses being disclosed in API responses
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)
    - [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)

#### Private IP Disclosed (`private_ip_disclosed.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects private IP addresses being disclosed in API responses
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)
    - [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
    - [RFC 1918 - Private Address Space](https://tools.ietf.org/html/rfc1918)

#### Sensitive Information in GET Request (`sensitive_information_get.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: MEDIUM
- **Description**: Detects sensitive information being transmitted in GET request parameters
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
    - [OWASP Information Exposure Through Query Strings](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url)
    - [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

#### API Key Disclosure (`api_key_disclosure.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: HIGH
- **Description**: Detects various API keys and secrets being exposed in responses
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Information Exposure Prevention](https://owasp.org/www-community/Improper_Error_Handling)
    - [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)

### Error Message Disclosure

#### DB Error Message Disclosure (`error_disclosure_db.py`)
- **CWE**: 209 - Generation of Error Message Containing Sensitive Information
- **Severity**: MEDIUM
- **Description**: Detects database error messages that may reveal sensitive information
- **References**:
    - [CWE-209 Definition](https://cwe.mitre.org/data/definitions/209.html)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)
    - [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Code Review Guide - SQL Injection](https://owasp.org/www-project-code-review-guide/en/reviews/java/sql-injection/)

#### Java Error Message Disclosure (`error_disclosure_java.py`)
- **CWE**: 209 - Generation of Error Message Containing Sensitive Information
- **Severity**: MEDIUM
- **Description**: Detects Java error messages that may reveal sensitive information
- **References**:
    - [CWE-209 Definition](https://cwe.mitre.org/data/definitions/209.html)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)
    - [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)

#### PHP Error Message Disclosure (`error_disclosure_php.py`)
- **CWE**: 209 - Generation of Error Message Containing Sensitive Information
- **Severity**: MEDIUM
- **Description**: Detects PHP error messages that may reveal sensitive information
- **References**:
    - [CWE-209 Definition](https://cwe.mitre.org/data/definitions/209.html)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)
    - [OWASP Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)

### Infrastructure Information

#### AWS CloudFront Service Detected (`cloudfront_detected.py`)
- **CWE**: 200 - Information Exposure
- **Severity**: LOW
- **Description**: Detects AWS CloudFront usage which may reveal infrastructure information
- **References**:
    - [AWS CloudFront Security Best Practices](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/security-best-practices.html)
    - [OWASP Information Disclosure Prevention](https://owasp.org/www-community/Improper_Error_Handling)
    - [CDN Security Guidelines](https://www.cloudflare.com/learning/security/what-is-web-application-security/)

#### AWS S3 Storage Usage Detected (`s3_storage_detected.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects AWS S3 storage usage which may reveal infrastructure information
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [AWS S3 Security Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)

#### Google Storage Usage Detected (`google_storage_detected.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects Google Cloud Storage usage which may reveal infrastructure information
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [Google Cloud Storage Security](https://cloud.google.com/storage/docs/security)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)

#### Firebase URL Disclosure (`firebase_url_disclosure.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects Firebase URLs being disclosed in API responses
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [Firebase Configuration Files](https://firebase.google.com/docs/projects/learn-more#config-files)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)

#### OpenSSL Usage Detected (`openssl_detected.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects OpenSSL version information being disclosed in server headers
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OpenSSL Vulnerabilities](https://www.openssl.org/news/vulnerabilities.html)
    - [OWASP Information Exposure Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Information_Exposure_Cheat_Sheet.html)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)

#### Web Server Fingerprinting (`web_server_fingerprinting.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: LOW
- **Description**: Detects web server fingerprinting via the Server header
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Information Exposure Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Information_Exposure_Cheat_Sheet.html)
    - [OWASP Information Exposure Through Error Messages](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_error_messages)

### Transport Security

#### Insecure Endpoint (`insecure_endpoint.py`)
- **CWE**: 319 - Cleartext Transmission of Sensitive Information
- **Severity**: MEDIUM
- **Description**: Detects endpoints that use HTTP instead of HTTPS
- **References**:
    - [CWE-319 Definition](https://cwe.mitre.org/data/definitions/319.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [OWASP Transport Layer Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)
    - [MDN HTTP Strict Transport Security](https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security)

#### Mixed Content Detected (`mixed_content_detected.py`)
- **CWE**: 311 - Missing Encryption of Sensitive Data
- **Severity**: MEDIUM
- **Description**: Detects mixed content (HTTP resources on HTTPS pages)
- **References**:
    - [CWE-311 Definition](https://cwe.mitre.org/data/definitions/311.html)
    - [OWASP Top 10 2017 A3 - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)
    - [MDN Mixed Content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
    - [OWASP Transport Layer Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)

### Security Headers

#### Missing Security HTTP Header (`missing_http_headers.py`)
- **CWE**: 693 - Protection Mechanism Failure
- **Severity**: LOW
- **Description**: Detects missing security HTTP headers
- **References**:
    - [CWE-693 Definition](https://cwe.mitre.org/data/definitions/693.html)
    - [OWASP Top 10 2017 A6 - Security Misconfiguration](https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration)
    - [OWASP HTTP Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
    - [MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

#### Misconfigured CORS Header (`misconfigured_cors_header.py`)
- **CWE**: 942 - Permissive Cross-domain Policy with Untrusted Domains
- **Severity**: LOW
- **Description**: Detects misconfigured CORS headers that allow unauthorized cross-origin access
- **References**:
    - [CWE-942 Definition](https://cwe.mitre.org/data/definitions/942.html)
    - [OWASP CORS Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CORS_Cheat_Sheet.html)
    - [MDN CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    - [PortSwigger CORS](https://portswigger.net/web-security/cors)

### API Security

#### GraphQL Introspection Enabled (`graphql_introspection_enabled.py`)
- **CWE**: 200 - Exposure of Sensitive Information to an Unauthorized Actor
- **Severity**: MEDIUM
- **Description**: Detects when GraphQL introspection is enabled, exposing the entire schema
- **References**:
    - [CWE-200 Definition](https://cwe.mitre.org/data/definitions/200.html)
    - [OWASP GraphQL Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html)
    - [Apollo Server Security - Introspection](https://www.apollographql.com/docs/apollo-server/security/introspection/)
    - [HackerOne GraphQL Introspection Misconfiguration](https://www.hackerone.com/blog/GraphQL-Introspection-Misconfiguration)
