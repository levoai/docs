---
sidebar_position: 1
title: Install PCAP Sensor on Docker | Levo.ai Documentation
---

import version from '@site/src/version.json';
import CodeBlock from '@theme/CodeBlock';

# Sensor via Docker

## Install via Docker

### Prerequisites
-   Docker Engine version  `18.03.0`  and above
-   Admin (or  `sudo`) privileges on the Docker host

### Start the sensor

<CodeBlock language="bash">
{`
sudo docker run --net=host --rm -it levoai/pcap-sensor:${version.pcap_sensor_version} \
./bin/init apidump \
--satellite-url "your satellite url (http(s)://hostname|IP:port)" \
--levo-env "your application environment (staging, production etc.)" \
--levoai-org-id "your levo org id"
`}
</CodeBlock>
Specify additional flags in the command
```bash
--trace-export-interval	"trace export interval in seconds (default 10)"
--rate-limit "number of traces per minute"
--filter "pcap filter string, eg. port 8080 and (not port 8081)"
--host-allow "host allow regex"
--path-allow "path allow regex"
--host-exclusions "host exclude regex"
--path-exclusions "path exclude regex"
```

### Configuring sensor as per memory and CPU resource limits

- For normal/average case use the default config
- For strict resources, start the sensor with below options
```bash
--rate-limit 100
--trace-export-interval 1
--max-http-length 1000000
--stream-timeout-seconds 2
```
