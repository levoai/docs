---
sidebar_position: 2
keywords: [API Security, eBPF, Kubernetes, API Observability]
---

# Quickstart - Kubernetes

Quickstart instructions for installing the Satellite, and Sensor on the same Kubernetes cluster via Helm Charts.

Your estimated completion time is *10 minutes*.

![Install Steps](../../../assets/api-observability-install.svg)


## 1. Prerequisites
- A supported Kubernetes platform. See [Platforms](../supported-platforms.md).
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.
- [`Forever Free Account`](https://levo.ai/levo-signup/) on Levo.ai. 

## 2. `Sensor - Kubernetes Node` Compatibility Check

Levo provides a simple bash script that *checks* your Kubernetes Node (Linux Host) for compatibility with the Sensor.

Execute the following, directly on the `Kubernetes Node` you want to instrument:

import BrowserOnly from '@docusaurus/BrowserOnly';

export function CurlScript() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <pre>
          <code>
              curl -s {window.location.protocol + '//' + window.location.host + '/artifacts/sensor/check-compatibility.sh'} | bash
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
        <a href={window.location.protocol + '//' + window.location.host + '/artifacts/sensor/check-compatibility.sh'}> here </a>
      )}
    </BrowserOnly>
  );
}

<CurlScript/>

If you want to **audit** the script prior to running, you can download it <DownloadLink/>.

### Host is compatible!

If your host is compatible with the Sensor (as reported by the script), you can proceed with the installation.

### Host is *NOT* compatible

**Levo can provide a custom build of the Sensor that is compatible with your system.**

If the host is not compatible, it is very likely due missing [BTF](https://www.kernel.org/doc/html/latest/bpf/btf.html) info. BTF provides the Sensor with essential type information required to instrument the host. Most modern Linux distributions come prepackaged with BTF.

please contact `support@levo.ai` with the diagnostic information provided by the script. We will provide a compatible Sensor promptly.

## 3. Install Satellite

### a. Copy `Authorization Key` from Levo.ai
The Satellite uses an authorization key to access Levo.ai. Follow instructions below to copy the key.
- [Login](https://app.levo.ai/login) to Levo.ai.
- Click on your user profile.
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
- Click on `Get Satellite Authorization Key`
- Now copy your authorization key. This key is required in a subsequent step below.

### b. Setup environment variables

```bash
export LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier> 
```

### c. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### d. Create `levoai` namespace & install Satellite

```bash
helm install -n levoai --create-namespace \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  levoai-satellite levoai/levoai-satellite
```

### e. Verify connectivity with Levo.ai

#### i. Check Satellite health

The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger.

Wait couple of minutes after the install, and check the health of the components by executing the following:

```bash
kubectl -n levoai get pods
```                              
If the Satellite is healthy, you should see output similar to below. Don't worry about the restarts of the levoai-tagger pod.

```bash
NAME                                READY   STATUS    RESTARTS      AGE
levoai-collector-848fb4fff9-gv8g9   1/1     Running   0             4m8s
levoai-rabbitmq-0                   1/1     Running   0             4m8s
levoai-satellite-54956ccb89-5s4h2   1/1     Running   0             4m8s
levoai-tagger-799db4d9cc-89jm8      1/1     Running   3 (4m8s ago)  4m8s
```

#### ii. Check connectivity
Execute the following to check for connectivity health:

```bash
# Please specify the actual pod name for levoai-tagger below
kubectl -n levoai logs <levoai-tagger pod name> | grep "Ready to process; waiting for messages."
```
If connectivity is healthy, you will see output similar to below.

```bash
{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**

## 4. Install Sensor

### a. Pick an `Application Name`
Auto discovered API endpoints and their OpenAPI specifications are show in the [API Catalog](../../../concepts/api-catalog/api-catalog.md), grouped under an application name. The application name helps segregate and group API endpoints from different Kubernetes clusters, similar to how file folders work in an operating system.

Pick a descriptive name which will be used in the subsequent step below. For example: `my-test-app-k8s-c101`.

### b. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### c. Create `levoai` namespace & install Sensor
```bash
# Specify below the 'Application Name' chosen earlier.
#
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.default-service-name=<'Application Name' chosen earlier>
```

### d. Verify connectivity with Satellite

#### i. Check Sensor health

Check the health of the Sensor by executing the following:

```bash
kubectl -n levoai get pods | grep levoai-sensor
```                              
If the Sensor is healthy, you should see output similar to below. 

```bash
levoai-sensor-747fb4aaa9-gv8g9   1/1     Running   0             1m8s
```
#### ii. Check connectivity

Execute the following to check for connectivity health:

```bash
# Please specify the actual pod name for levoai-sensor below
kubectl -n levoai logs <levoai-sensor pod name> | grep "Initial connection with Collector"
```
If connectivity is healthy, you should see output similar to below.

```bash
2022/06/13 21:15:40 729071	INFO [ebpf_sensor.cpp->main:120]	Initial connection with Collector was successful.
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**

Please proceed to the next step, if there are no errors.

## 5. Generate Application Traffic

The Sensor picks up API traffic that is HTTP\1.x based, on the instrumented host. There has to be some consistent load on your API endpoints for them to be auto discovered and documented.

Please ensure you exercise your API endpoints several times using tools like [Postman](https://www.postman.com/), [curl](https://curl.se/), etc. Alternatively use a load generator script that consistently exercises your API endpoints.

API endpoints that are TLS based should be picked up by the Sensor, albeit with some caveats. Please see [FAQs](../faqs.md) for more information. 

### Verify API Traffic Capture
Check the logs of Satellite's `Collector` sub-component.

```bash
# Please specify the actual pod name for levoai-collector below
kubectl -n levoai logs <levoai-collector pod name> | grep "TracesExporter"
```

If API Traffic is correctly being processed, you will see log entries similar to below:

```bash
2022-06-10T17:04:56.494Z	INFO	loggingexporter/logging_exporter.go:43	TracesExporter	{"#spans": 20}
```

## 6. View Auto-discovered OpenAPI Specifications
The [API Catalog](../../../concepts/api-catalog/api-catalog.md) in Levo.ai should be auto populated in a matter of minutes (after your API endpoints are being exercised consistently).

The API Catalog will contain your auto discovered API endpoints and their OpenAPI schemas, all grouped under the `Application Name` you chose earlier.

Congratulations! You have successfully auto discovered and auto documented API endpoints in your application.

