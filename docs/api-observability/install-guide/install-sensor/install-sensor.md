---
sidebar_position: 1
---

# Install Sensor

Depending on your environment, you may choose to install a different Levo sensor to suit your needs.

## eBPF Sensor (Recommended)
- You have access to the node / VM / machine where your application workloads are running
- You want to instrument internal applications which do not have public APIs

Read more about the [eBPF Sensor here](/api-observability/concepts.md#ebpf-sensor).

[**Click here for the installation instructions**](/api-observability/install-guide/install-sensor/ebpf-sensor.md).

## pcap Sensor
- Your application workloads are deployed on a Serverless compute architecture (like AWS Fargate)

[**Click here for the installation instructions**](/api-observability/install-guide/install-sensor/pcap-sensor.md).

## AWS Traffic Mirroring
Use this if you want to use traffic mirroring to instrument your application workloads.

[**Click here for the installation instructions**](/api-observability/install-guide/other-installation-options.md).

---

## Teaser

If you want a quick glimpse of Levo's API Observability without a full installation, check out the [Teaser page](/api-observability/quickstart/quickstart.md).

