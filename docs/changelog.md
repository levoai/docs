---
sidebar_position: 13
---

# Changelog

Updates to Levo's Platform, CLI, eBPF Sensor, Satellite and other offerings.

---


### Text4Shell Detection
*October 25, 2022*

Levo now supports detecting the Text4Shell ([CVE-2022-42889](https://nvd.nist.gov/vuln/detail/CVE-2022-42889)) vulnerability.
New test plans created with the RCE category enabled will contain this attack for supported endpoints.
The attack makes use of out-of-band payloads and relies on Levo's self-hosted instance of [Interactsh](https://github.com/projectdiscovery/interactsh) to detect a successful exploit.