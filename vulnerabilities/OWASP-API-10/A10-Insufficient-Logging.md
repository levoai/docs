---
sidebar_position: 10
---

# API A10 - Insufficient Logging & Monitoring
![POOR-LOGGING](../assets/API-Top-10/A10-Insufficient-Logging.svg)

## What is it?
Observability into who is using the API and how they are using it is the foundation of any security program.

API observability provides audit and forensics capabilities among other benefits, like performance/SLA monitoring.

Lack of logging with sufficient detail, severely impairs securing APIs.

## What are specific examples?
The access keys of an administrative API were leaked on a public repository. The repository owner was notified by email about the potential leak, but took more than 48 hours to act upon the incident.

Due to insufficient logging, the company was not able to assess what data was potentially accessed by specific malicious actors.

## References
[OWASP API TOP-10 A10](https://owasp.org/www-project-api-security/)  
[Logging - Cheat Sheet](https://github.com/OWASP/ASVS/blob/master/4.0/en/0x15-V7-Error-Logging.md)


## What is the solution?
Use Levo's no-code, and zero-config eBPF sensor, to automatically enable deep logging for all APIs and services. 

Levo captures the full request/response of APIs, without having to install SDKs, or sidecar proxies.
