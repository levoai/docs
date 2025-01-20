---	
description: Install Levo.ai PCAP Sensor with our guide. Follow detailed instructions for setting up and configuring traffic capture sensors across multiple platforms.	
---	

# Install PCAP Sensor

## Prerequisites
- Refer [pcap-filter-guide](https://www.tcpdump.org/manpages/pcap-filter.7.html) to apply filters.

> **_NOTE:_**  You need to have the satellite installed to configure the sensor to point to it. If you haven't done it already, head over to [Install Satellite ](/install-satellite)
Make sure the satellite is able to listen on port `9999`. 
> Edit Inbound Rules to accept port `9999` in case the satellite is running on an AWS instance.

## Follow instructions for your platform

 - [Install via Docker](/install-traffic-capture-sensors/pcap-sensor/sensor-docker)
 - [Install on Kuberenetes](/install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes)
 - [Install on VMs with YUM Package](/install-traffic-capture-sensors/pcap-sensor/pcap-sensor-yum-package)