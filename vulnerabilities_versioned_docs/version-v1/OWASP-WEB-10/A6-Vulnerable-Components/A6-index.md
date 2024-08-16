---
sidebar_position: 1
title: "API Security | Addressing OWASP A6 Vulnerabilities"
---

# Web A6 - Vulnerable and Outdated Components

A software component is part of an application that extends the functionality of the application, such as a module, or software package. Component-based vulnerabilities occur when a software component is unsupported, out of date, or vulnerable to a known exploit.

You may inadvertently use vulnerable software components in production environments, posing a threat to the API's of the application. For example, an organization may download and use a software component, such as Log4J, and fail to regularly update or patch the component as flaws are discovered.

Since many software components run with the same privileges as the application itself, any vulnerabilities or flaws in the component can result in a threat to the APIs comprising the application.

Using components with known vulnerabilities makes your APIs susceptible to attacks that target any part of the application stack. For example, the following attack types are a few that may target known component vulnerabilities:

- Code injection
- Command injection
- Remote Code Execution

Below are known, critical vulnerabilities applicable to API based applications:

| Vulnerability                               | CWE                                        |
| ------------------------------------------- | ---------------                            |
| [Log4J - Remote Code Execution][LOG4J-RCE]   | [117][CWE-117]                            |

[LOG4J-RCE]: ./A6-Log4J-RCE.md
[CWE-117]: https://cwe.mitre.org/data/definitions/117.html