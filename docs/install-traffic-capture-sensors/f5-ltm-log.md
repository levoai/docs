---
sidebar_position: 9
description: Learn how to capture and analyze traffic from F5's LTM.
---

# BIG-IP LTM

## iRule-based Instrumentation

### Pre-requisites
- You have sufficient permissions to add iRule to the Virtual Servers.
- The Satellite has been successfully set up and is reachable from the BIG-IP LTM.

### Installation
To instrument your APIs from the LTM Virtual Servers, you need to:
1. Download and configure the iRule script
2. Add the iRule to the VirtualServers you want to instrument

#### Download and configure iRule Script

- Download the [iRule script](../../static/artifacts/scripts/levo-irule.tcl)

- Locate `collector_host_ip` and `collector_host_port` inside the script, and set them to appropriate values.
Note that the virtual server should be able to reach to this IP.

### Add the iRule to the VirtualServers you want to instrument

- In the BIG-IP Dashboard, go to, `Local Traffic > iRules > iRule List`
- Click on `Create` and paste the downloaded iRule inside the Definition. Give the script a name and click on `Finished`
- Next, go to,  `Local Traffic > Virtual Servers > Virtual Server List` 
- Click on the virtual server which you want to instrument.
- Under the `Resources` section, locate iRules. Click on Manage
- Move the Levo's iRule script to `Enabled` section. Click on `Finished`.

The iRule script will start instrumenting and send the traces to Levo's Collector.
