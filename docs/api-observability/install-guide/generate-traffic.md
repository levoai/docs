---
sidebar_position: 5
---

# Generate Application Traffic

The Sensor picks up API traffic that is HTTP\1.x based, on the instrumented host. There has to be some consistent load on your API endpoints for them to be auto discovered and documented.

Please ensure you exercise your API endpoints several times using tools like [Postman](https://www.postman.com/), [curl](https://curl.se/), etc. Alternatively use a load generator script that consistently exercises your API endpoints.

API endpoints that are TLS based should be picked up by the Sensor, albeit with some caveats. Please see [FAQs](../faqs.md) for more information. 

## Verify API Traffic Capture
Refer to [platform specific instructions](../common-tasks/satellite/satellite-mgmt.mdx), for accessing logs of Satellite's `Collector` sub-component.

If API Traffic is correctly being processed, you will see log entries similar to below:

```bash
2022-06-10T17:04:56.494Z	INFO	loggingexporter/logging_exporter.go:43	TracesExporter	{"#spans": 20}
```