---
sidebar_position: 2
---

# Satellite-Sensor FAQs
![FAQs](../assets/FAQs.svg)

## Table of Contents

- [Getting Help](satellite-sensor-faqs.md#getting-help)
- [Sensor](satellite-sensor-faqs.md#sensor)
- [Satellite](satellite-sensor-faqs.md#satellite)
- [API Catalog](satellite-sensor-faqs.md#api-catalog)

------------------------------------------------------------------------------

## Getting Help
Please contact [Support](mailto:support@levo.ai) for assistance with installation, product questions, roadmap, etc.

Please provide as much details as possible in your support request.

------------------------------------------------------------------------------

## Sensor

### What OS platforms are supported?
Please see [OS Platforms](/guides/general/supported-platforms.md#what-os-platforms-are-supported).

### What Kubernetes platforms are supported?
Please see [K8s Platforms](/guides/general/supported-platforms.md#what-kubernetes-platforms-are-supported).

### Is Docker Desktop or minikube on Mac OSX, supported?
Support for Docker Desktop, Docker Desktop based Kubernetes, and minikube on MacOS is on the roadmap.

Developers can evaluate `API Observability` on their macOS Laptops, via a proxy based Sensor. Please refer to [Quickstart for macOS/Windows](/quickstart/quickstart-mitm.md).

### Is Windows OS supported?
Microsoft is currently building support for [eBPF in Windows](https://github.com/microsoft/ebpf-for-windows). Windows support will be added subsequent to the completion of that effort.

Developers can evaluate `API Observability` on their Windows Laptops, via a proxy based Sensor. Please refer to [Quickstart for macOS/Windows](/quickstart/quickstart-mitm.md).

### Is there a script that can assess if my OS platform is compatible?
Yes. Please see [install guide](/guides/install-guide).

### How do I install the Sensor?
Please see [install guide](/guides/install-guide).

### What kind of API traffic is discovered?
Currently REST APIs only. Support for gRPC, and GraphQL are on the roadmap.

### What is an API Trace?
An API Trace is the representation of an API invocation, generated from captured traffic. It contains the full HTTP request & response, including the request URL, request headers, request body, response code, response headers, and response body.

### Can APIs running over TLS (HTTPs) be discovered?
Yes, for applications that use [OpenSSL](https://www.openssl.org/). Support for [Java TLS](https://www.ateam-oracle.com/post/transport-level-security-tls-and-java), and [Boring SSL](https://boringssl.googlesource.com/boringssl/) are on the roadmap.

### Are REST APIs over [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) supported?
Currently only REST APIs over HTTP/1.x are supported. Vast majority of REST APIs still use HTTP/1.x. Support for HTTP/2 is on the roadmap.

### Does the sensor need special privileges?
Yes, like all other vendor solutions in the market that use eBPF. The sensor requires root privileges to capture all API traffic and associated metadata.

### Will the sensor impact my application workloads?
The sensor is passive and *not* inline with your application. It uses [eBPF probes](https://epbf.io) to make passive copies of API traffic (HTTP), similar to [network traffic mirroring](https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html). The Sensor will not impact your application's function or performance unlike other inline solutions (sidecar proxies, in-app agents, and SDKs).

### What is the CPU impact of the sensor?
Less than 5%, as the sensor can sample API traffic.

### Can API traffic be sampled?
Yes. API traffic can be sampled in high traffic environments to optimize CPU consumption of the Sensor. Unlike vendors building API security solutions that are anomaly based (where every single API call has to be captured), Levo can aggressively sample API traffic. Sampled API traffic is used to discover API endpoints and their underlying schema.

### Can API traffic be filtered?
Yes. Please see [Filtering API Traffic](/install-traffic-capture-sensors/ebpf-sensor/common-tasks/filter-traffic.md).

### Can I consume captured API Traces from the sensor?
Yes. The Sensor exports captured API Traces in industry standard [OpenTelemetry](https://opentelemetry.io/docs/concepts/what-is-opentelemetry/) format. These traces can be visualized using tools like [Jaeger](https://www.jaegertracing.io/), etc.

### What is BPF Type Format Info (BTF)?
Levo's eBPF sensor uses [probes](https://ebpf.io/what-is-ebpf/#hook-overview) to copy API data from socket system calls. [BTF](https://www.kernel.org/doc/html/latest/bpf/btf.html) provides syscall function symbol information, that is used by the Sensor to attach probes.

### Do Linux distributions ship with pre-built BTF info?
Most modern Linux distributions contain pre-built BTF info. If BTF is missing for your specific version of Linux, Levo Support can build a Sensor that contains a custom BTF for your version of Linux.

------------------------------------------------------------------------------

## Satellite

### I don't care about data privacy in pre-production. Can Levo host the Satellite for me?
Yes, Levo certainly can host the Satellite for you. Please contact [Support](mailto:support@levo.ai) for assistance.

### Can multiple Sensors send API Traces to the same Satellite?
Yes. Multiple sensors from different hosts/clusters can be configured to send API Traces to the same Satellite.

### Can the Satellite be deployed in a different host/cluster?
Yes. Please see [Install Satellite](/install-satellite).

### How does the Satellite detect sensitive data in API Traffic?
The Satellite has a pre-trained ML model that is used to detect sensitive data such as PII, PSI, etc.

### Can the Satellite be upgraded?
Levo provides updated Docker images for the Satellite. You can upgrade the Satellite at your own convenience, to take advantage of new features, and/or bug fixes.

### What is the resource consumption of the Satellite?
It depends on your traffic patterns. This is usually not a concern, as the Satellite can be run on a dedicated host/cluster and will not contend with your production workloads.

------------------------------------------------------------------------------

## API Catalog

### What OpenAPI Specification version for the auto discovered APIs?
Version 3.0.x