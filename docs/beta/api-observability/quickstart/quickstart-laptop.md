---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart - Mac OSX / Windows

Quickstart instructions for evaluating *API Observability* on Laptops/Desktops running **Mac OSX** or **Windows**.

**Your estimated completion time is *10 minutes*.**

Since Mac OSX and Windows do not support [eBPF](https://ebpf.io), Levo provides a Sensor package (Docker based install), to enable quick evaluation on these platforms. This Sensor package gets visibility into your API traffic, by proxying traffic between your *API Client* and *API Server*.

![Levo Sensor Package for OSX/Windows](../../../assets/api-observability.svg)


## 1. Prerequisites
<Tabs groupId="operating-systems">
  <TabItem value="mac" label="Mac OSX">
    <ul>
      <li> Docker version `18.03.0` and above </li>
      <li> Admin (or `sudo`) privileges on the Docker host </li>
      <li> <a href="https://levo.ai/levo-signup/">Forever Free Account on Levo.ai</a> </li>
      <li> Command line terminal with Bash or Bash compatible shell </li>
    </ul>
  </TabItem>
  <TabItem value="win" label="Windows">
    <ul>
      <li> Docker version `18.03.0` and above </li>
      <li> Admin privileges on the Docker host </li>
      <li> <a href="https://levo.ai/levo-signup/">Forever Free Account on Levo.ai</a> </li>
      <li> PowerShell terminal </li>
    </ul>
  </TabItem>
</Tabs>



## 2. Setup Test *API Service*

API Observability auto discovers APIs and generates OpenAPI specifications for all API endpoints, by observing API traffic between your *API Client* and *API Server*.

If you do not have a test *API Service*/*Application*, you can use the [sample application](../sample-app.md) provided by Levo.

- a. Note down the base URL for your test *API Server*/*Service*.
> For example, if you are running the sample application (crAPI) on your laptop, the base URL would be `http://localhost:8888`. If your test *API Server* uses HTTPs the base URL for example, would be `https://localhost/`.

- b. Export your *API Server*/*Service* URL in your terminal.
<Tabs groupId="operating-systems">
  <TabItem value="mac" label="Mac OSX">
    <pre>
      <code>
        export SERVICE_ADDRESS=&lt;base URL noted above&gt;
      </code>
    </pre>
  </TabItem>
  <TabItem value="win" label="Windows">
    <pre>
      <code>
        $env:SERVICE_ADDRESS="&lt;base URL noted above&gt;"
      </code>
    </pre>
  </TabItem>
</Tabs>



## 3. Copy `Authorization Key` from Levo.ai
The Sensor package uses an authorization key to access Levo.ai. Follow instructions below to copy & export the key.
- [Login](https://app.levo.ai/login) to Levo.ai.
- Click on your user profile.
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
- Click on `Get Satellite Authorization Key`
- Now copy your authorization key.
- Export the copied `Authorization Key` in your terminal.

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="Mac OSX">
    <pre>
      <code>
        export LEVOAI_AUTH_KEY=&lt;'Authorization Key' copied above&gt;
      </code>
    </pre>
  </TabItem>
  <TabItem value="win" label="Windows">
    <pre>
      <code>
        $env:LEVOAI_AUTH_KEY="&lt;'Authorization Key' copied above&gt;"
      </code>
    </pre>
  </TabItem>
</Tabs>



## 4. Pick an `Application Name`
Auto discovered API endpoints and their OpenAPI specifications are show in the [API Catalog](../../../concepts/api-catalog/api-catalog.md), grouped under an application name. The application name helps segregate and group API endpoints from different API servers, similar to how file folders work in an operating system.

- a. Pick a descriptive name which will be used in the subsequent step below. For example: `my-test-api-server`.
- b. Export the `Application Name` in your terminal.

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="Mac OSX">
    <pre>
      <code>
        export LEVOAI_SERVICE_NAME=&lt;'Application Name' chosen above&gt;
      </code>
    </pre>
  </TabItem>
  <TabItem value="win" label="Windows">
    <pre>
      <code>
        $env:LEVOAI_SERVICE_NAME="&lt;'Application Name' chosen above&gt;"
      </code>
    </pre>
  </TabItem>
</Tabs>


## 5. Download - Docker Compose file

Execute the following in your terminal:

import BrowserOnly from '@docusaurus/BrowserOnly';

export function CurlScript() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <pre>
          <code>
              curl -s -o proxy-docker-compose.yml {window.location.protocol + '//' + window.location.host + '/artifacts/satellite/proxy-docker-compose.yml'}
          </code>
        </pre>
      )}
    </BrowserOnly>
  );
}

export function DownloadLink() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <a href={window.location.protocol + '//' + window.location.host + '/artifacts/satellite/proxy-docker-compose.yml'}> here </a>
      )}
    </BrowserOnly>
  );
}

<CurlScript/>

If prefer to download the Docker Compose file via your browser, you can download it <DownloadLink/>.



## 6. Install Sensor Package via Docker Compose
Execute the following in your terminal (where you previously downloaded the Docker Compose file):

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="Mac OSX">
    <pre>
      <code>
        docker compose -f proxy-docker-compose.yml pull &amp;&amp; docker compose -f proxy-docker-compose.yml up -d
      </code>
    </pre>
  </TabItem>
  <TabItem value="win" label="Windows">
    <pre>
      <code>
        docker compose -f .\proxy-docker-compose.yml pull
      </code>
    </pre>
    <pre>
      <code>
        docker compose -f .\proxy-docker-compose.yml up -d  
      </code>
    </pre>
  </TabItem>
</Tabs>



## 7. Verify Connectivity with Levo.ai

The Sensor package contains both the (proxy based) Sensor and Satellite. Follow steps below to check the Satellite health and connectivity to Levo.ai.

#### a. Check Satellite Health

The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger.

Wait couple of minutes after the install, and check the health of the components by executing the following:

```bash
docker ps -f name=levoai
```

If the Satellite is healthy, you should see output similar to below.

```bash
CONTAINER ID   IMAGE                     COMMAND                  CREATED             STATUS                  PORTS                                                                                                                                    NAMES
2b32cd6b9ced   levoai/collector:stable   "/usr/local/bin/levo…"   10 seconds ago      Up 8 seconds            0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector
06f3c597cad0   levoai/satellite:stable   "gunicorn --capture-…"   10 seconds ago      Up 9 seconds            0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite
89026034c567   levoai/satellite:stable   "python -OO /opt/lev…"   10 seconds ago      Up Less than a second                                                                                                                                            levoai-tagger
f74524d02fbd   bitnami/rabbitmq:3.10     "/opt/bitnami/script…"   10 seconds ago      Up 9 seconds            5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq
```

#### b. Check Connectivity
Execute the following to check for connectivity health:

```bash
docker logs levoai-tagger | grep "Ready to process; waiting for messages." 
```
If connectivity is healthy, you will see output similar to below.

```bash
{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**



## 8. Generate Application Traffic

The Sensor picks up API traffic that is HTTP\1.x based. There has to be some consistent load on your API endpoints for them to be auto discovered and documented.

### a. Point Your *API Client* to the Sensor's Proxy

You will need to point your *API Client* to the Sensor's Proxy. The Sensor will proxy the traffic to your test *API Server*/*Service*.

The Sensor's proxy listens on `http://127.0.0.1:8080`. Please point your API Client (Web Browser, [Postman](https://www.postman.com/), [curl](https://curl.se/), etc.) to this address.

### b. Generate Traffic

Please ensure you exercise your API endpoints several times using using your *API Client*.

### c. Verify API Traffic Capture
Check the logs of Satellite's `Collector` sub-component.

```bash
# Please specify the actual pod name for levoai-collector below
docker logs levoai-collector | grep "TracesExporter"
```

If API Traffic is correctly being processed, you will see log entries similar to below:

```bash
2022-06-10T17:04:56.494Z	INFO	loggingexporter/logging_exporter.go:43	TracesExporter	{"#spans": 20}
```



## 9. View Auto-discovered OpenAPI Specifications
The [API Catalog](../../../concepts/api-catalog/api-catalog.md) in Levo.ai should be auto populated in a matter of minutes (after your API endpoints are being exercised consistently).

The API Catalog will contain your auto discovered API endpoints and their OpenAPI schemas, all grouped under the `Application Name` you chose earlier.

Congratulations! You have successfully auto discovered and auto documented API endpoints in your application.

