---
description: Continuous API Security Assurance. Observe, detect, protect, early!
sidebar_position: 1
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Welcome to Levo!

Levo comprises of two components, a Sensor which runs alongside your application workloads, and a Satellite.
The Sensor captures live traffic from your environment and sends it to the Satellite for processing.

Installation is as simple as running a few simple commands, for example a local installation is as simple as:

#### Satellite's Installation

<Tabs
  defaultValue="k8s"
  values={[
      { label: 'Kubernetes', value: 'k8s', },
      { label: 'Local', value: 'local', },
  ]}
  groupId="env"
>
<TabItem value="k8s">

```bash
helm upgrade --install -n levoai --create-namespace \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  levoai-satellite levoai/levoai-satellite
```


</TabItem>
<TabItem value="local">

```bash
(export LEVOAI_AUTH_KEY=< "Authorization Key" >; docker compose pull && docker compose up -d)
```

</TabItem>
</Tabs>

#### Sensor's Installation

<Tabs
  defaultValue="k8s"
  values={[
      { label: 'Kubernetes', value: 'k8s', },
      { label: 'Local', value: 'local', },
  ]}
  groupId="env"
>
<TabItem value="k8s">

```bash
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install --namespace levoai --create-namespace \
  --set sensor.config.default-service-name=<'Enter Application Name of Your Choice'> \
  --set sensor.config.collector-endpoint=levoai-collector.levoai:4317
  --set sensor.config.env=<'Application environment'>
```

</TabItem>
<TabItem value="local">

```bash
sudo docker run --net=host --rm -it levoai/pcap-sensor:0.0.20 ./bin/init apidump \
--satellite-url "your satellite url (http(s)://hostname|IP:port)" \
--levo-env "your application environment (staging, production etc.)" \
--levoai-org-id "your levo org id"
```

</TabItem>
</Tabs>
<br/>

> ##### Download the [docker-compose](./api-observability/install-guide/install-satellite#1-download-docker-compose-file). Get the [Authorization Key](./api-observability/install-guide/install-satellite.mdx/#2-copy-authorization-key-from-levoai). Get a [levo org id](./api-observability/install-guide/install-satellite#prerequisites-3).

<br/>

-----------------------------------

<br/>

> **_We support multiple other environments and offer various ways to integrate our product quickly in your setup. Check below to find what suits your environment the most._**

### [Click Here To Install Satellite](/api-observability/install-guide/install-satellite)

### [Click Here To Install Sensor](/api-observability/install-guide/install-sensor)


Levo can host the Satellite for you (reach out to [`support@levo.ai`](mailto:support@levo.ai)), or you can host it yourself.