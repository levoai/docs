---
sidebar_position: 0
---

# Install Traffic Capture Sensors

Depending on your environment, you may choose to install a different Levo sensor to suit your needs.

## eBPF Sensor (Recommended)
You should install the [eBPF sensor](/guides/key-concepts#ebpf-sensor) if:

- You have access to the node / VM / machine where your application workloads are running
- In addition to your publicly exposed services, you want to instrument internal applications which do not have public API endpoints

[**Click here for the installation instructions**](/install-traffic-capture-sensors/ebpf-sensor).

## PCAP Sensor
You should install the pcap sensor if:

- Your application workloads are deployed on a Serverless compute architecture (like AWS Fargate)

[**Click here for the installation instructions**](/install-traffic-capture-sensors/pcap-sensor).

## AWS Fargate Sensor
To install AWS Fargate sensor:

> **_NOTE:_**  You need to have the satellite installed to configure the sensor to point to it. If you haven't done it already, head over to [Install Satellite ](/install-satellite)
Make sure the satellite is able to listen on port `9999`
Edit Inbound Rules to accept port `9999` in case the satellite is running on an AWS instance.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/sensor-fargate).

## Windows Sensor
You should install the windows sensor if:

- Your application workloads are deployed on a windows Servers compute architecture.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/windows-sensor).

## AWS Traffic Mirroring
Use this if you want to use traffic mirroring to instrument your application workloads.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/aws-traffic-mirroring).

## Cloudflare Worker
You may install Levo's Cloudflare Worker if:

- You are using Cloudflare for DNS, and you have [proxying](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/) enabled.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/cloudflare-worker).

## AWS CloudFront Lambda@Edge
You may install Levo's CloudFront Lambda@Edge functions if:

- You are using CloudFront as a CDN for your API endpoints.

Note that CloudFront does not provide access to the API endpoint response bodies.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/aws-cloudfront).

## AWS API Gateway

You may instrument your AWS API Gateway endpoints with CloudWatch Logs.

However, CloudWatch only provides endpoints access logs and API endpoint request and response bodies will not be available.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/aws-api-gateway).

## Azure API Management Policy
You should install Levo's Azure API Management policy if:

- Your API endpoints are managed by Azure API Management.

[**Click here for the installation instructions**](/install-traffic-capture-sensors/azure-api-management).

---

## Quickstart

If you want a quick glimpse of Levo's API Observability without a full installation, check out the [Quickstart page](/quickstart).
