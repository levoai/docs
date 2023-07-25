---
sidebar_position: 2
keywords: [API Security, eBPF, API Observability]
---

# Frictionless API Observability

## Take Control of API Sprawl & Mitigate API Risk

![API Sprawl](@site/static/img/api/api-proliferation.svg)

Rapid proliferation of APIs is making comprehensive API Observability a mission critical requirement.

## Levo Supercharges API Observability Via eBPF

### Instant Observability with Zero Friction

![API Observability](@site/static/img/api/api-observability.svg)

Levo’s agent-less & codeless instrumentation provides API observability throughout the API development lifecycle, via a revolutionary technology called eBPF.

Below are top benefits of Levo’s API observability solution:

- Instant observability for your APIs – north-south, east-west, shadow, legacy, rogue, partner, authenticated, unauthenticated, and more
- Agent-less. Does not require code or configuration changes, or SDK additions to your applications
- Installation involves a single Helm Chart for Kubernetes, or a single Docker command for other environments
- Completely passive, and not inline with the application
- No impact to the application’s latency.
- No impact to daily operational workflows (deployment, debugging, upgrading, etc.)
- Eliminates friction between Developers, Operations, and Security, that is common with conventional tools
- Full TLS / SSL visibility for all applications and services. TLS observability does not require sharing of private keys
- Track sensitive data flows (PII, PSI, PHI, etc.) in your APIs
- Instant observability into user roles, and scopes (CIAM). Answer questions like:
    - Who are my users?
    - What are the role entitlements for these users?
    - What specific API endpoints and JSON objects are being accessed via the role entitlements?
    
    ![](@site/static/img/api/api-auth-access-patterns.svg)

### Your API Data Stays with You
Typical vendors providing API observability, will ingest all your API data into their SaaS, and put the burden of redacting sensitive customer data on you.

![Privacy Preserving](@site/static/img/api/api-trace-anonymization.svg)

Levo’s **Privacy Preserving** technology, does not ingest any of your API data into SaaS. Levo discovers and documents your APIs using only data type inferences performed in the Satellite component (that runs within your VPC/premises).

### Auto Document APIs with Sensitive Data Annotations
Auto discover and auto generate OpenAPI specifications for all your APIs.

![Auto Discovered APIs in API Catalog](@site/static/img/api/example-api-catalog.png)

OpenAPI specifications are annotated with sensitive data types (PII, PSI, PHI, etc).

![Auto Generated OpenAPI Specification](@site/static/img/api/example-api-schema.png)
