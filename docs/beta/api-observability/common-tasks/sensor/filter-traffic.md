---
sidebar_position: 3
---

# API Traffic Capture Filters

The Sensor allows capturing API (HTTP) traffic based on filter (include/exclude) criteria. These filters are specified in a configuration file. Please refer to [Sensor Configuration](./sensor-configuration.mdx) for high level structure of the file.

- [Default Excluded Ports](#default-excluded-ports)
- [Configure IP Filters](#configure-ip-filters)
    - [Exclude All Traffic](#exclude-all-traffic)
    - [Exclude Specific Ports/Port Ranges](#exclude-specific-portsport-ranges)
    - [Include Specific Ports/Port Ranges](#include-specific-portsport-ranges)
    - [Exclude Specific IP Addresses](#exclude-specific-ip-addresses)
    - [Include Specific IP Addresses](#include-specific-ip-addresses)
    - [Exclude IP Subnets](#exclude-ip-subnets)
    - [Include IP Subnets](#include-ip-subnets)
    - [Capture Traffic for Specific Processes](#capture-traffic-for-specific-processes)

<br/>

-------------------------------------------------------------

## Default Excluded Ports
The Sensor excludes capturing traffic from the below ports (TCP & UDP) by default.

If your API Traffic (HTTP) uses one of these ports, please see section below on how the port can be included for capture. 

| Standard Protocol | Port  |
| :-                | :-    |
| DNS               | 53    |
| etcd              | 2379-2380 |
| Kafka             | 9092-9093 |
| mongodb           | 27017-27019, 28017   |
| SQL Server        | 135, 4022, 1433-1434  |
| MySQL             | 3306, 33060-33062     |
| Postgress         | 5432-5433 |
| RabbitMQ          | 5671-5672, 15672-15675, 25672, 35672-35682, 61613-61614 |
| Redis             | 6379  |
| ZooKeeper         | 2181, 3888, 3888  |

<br/>

-------------------------------------------------------------

## Configure IP Filters
The below sections describe common filtering scenarios with examples. In all cases the examples show the relevant snippet of the configuration file. Adapt these examples to the [Helm Values config file](../../../../../static/artifacts/sensor/config-values.yml), if running on Kubernetes.

### Exclude All Traffic

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Default policy is to drop all traffic
```

### Exclude Specific Ports/Port Ranges

#### Exclude Specific Host Ports/Port Ranges
Host Port is the server listening port, where client/peer connections are accepted.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Default policy is to capture all traffic
  entries: # Specific 'entries' can override the default policy
    ### Host Ports ###
    # Host Port is the server listening port, where client connections are accepted
    - policy: drop
      host-ports: 53 # DNS
    - policy: drop
      host-ports: 2379-2380 # etcd
```

#### Exclude Specific Peer Ports/Port Ranges
Peer Port is a client port used in communication with the server listening port.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Default policy is to capture all traffic
  entries: # Specific 'entries' can override the default policy
### Peer Ports ###
    # Peer Port is the client port used in communication with the server listening port
    - policy: drop
      peer-ports: 9000
    - policy: drop
      peer-ports: 25000-29000 
```

### Include Specific Ports/Port Ranges

#### Include Specific Host Ports/Port Ranges
Host Port is the server listening port, where client/peer connections are accepted.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Drop all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    ### Host Ports ###
    # Host Port is the server listening port, where client connections are accepted
    - policy: accept
      host-ports: 9000
    - policy: accept
      host-ports: 23000-28000
```

#### Include Specific Peer Ports/Port Ranges
Peer Port is a client port used in communication with the server listening port.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Drop all traffic except ones below
  entries: # Specific 'entries' can override the default policy
### Peer Ports ###
    # Peer Port is the client port used in communication with the server listening port
    - policy: accept
      peer-ports: 9000
    - policy: accept
      peer-ports: 25000-29000 
```

### Exclude Specific IP Addresses

#### Exclude Specific HOST IP Addresses

Host implies the binding IP addresses of the Server servicing the API endpoints.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Accept all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - host-network: 10.98.76.53 # Drop all traffic to/from 10.98.76.53
      policy: drop
    - host-network: 10.99.76.53 # Drop all traffic to/from 10.99.76.53
      policy: drop
```

#### Exclude Specific Peer IP Addresses

Peer implies the IP addresses of clients connecting to the Server/Host servicing the API endpoints.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Accept all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - peer-network: 10.98.76.53 # Drop all traffic to/from 10.98.76.53
      policy: drop
    - peer-network: 10.99.76.53 # Drop all traffic to/from 10.99.76.53
      policy: drop
```

### Include Specific IP Addresses

#### Include Specific HOST IP Addresses

Host implies the binding IP addresses of the Server servicing the API endpoints.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Drop all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - host-network: 10.98.76.53 # Accept all traffic to/from 10.98.76.53
      policy: accept
    - host-network: 10.99.76.53 # Accept all traffic to/from 10.99.76.53
      policy: accept
```

#### Exclude Specific Peer IP Addresses

Peer implies the IP addresses of clients connecting to the Server/Host servicing the API endpoints.

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Drop all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - peer-network: 10.98.76.53 # Drop all traffic to/from 10.98.76.53
      policy: accept
    - peer-network: 10.99.76.53 # Drop all traffic to/from 10.99.76.53
      policy: accept
```

### Exclude IP Subnets
Entire classes of subnets can be excluded using either the CIDR or prefix notations.
The examples below are for `host-network` subnets. The same technique is applicable for `peer-network` subnets.

#### Exclude IP Subnets - CIDR Notation

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Accept all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - host-network: 1.2.3.4/255.255.255.252 # Drop all from/to this host CIDR block
      policy: drop
```

#### Exclude IP Subnets - Prefix Notation

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Accept all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - host-network: 1.2.3.4/30 # Drop all from/to this host subnet block
      policy: drop
```

### Include IP Subnets
Entire classes of subnets can be included using either the CIDR or prefix notations.
The examples below are for `host-network` subnets. The same technique is applicable for `peer-network` subnets.

#### Include IP Subnets - CIDR Notation

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Drop all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - host-network: 1.2.3.4/255.255.255.252 # Accept all to/from this host CIDR block
      policy: accept
```

#### Include IP Subnets - Prefix Notation

```yaml
# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: drop # Drop all traffic except ones below
  entries: # Specific 'entries' can override the default policy
    - host-network: 1.2.3.4/30 # Accept all to/from this host subnet block
      policy: accept
```

### Capture Traffic for Specific Processes
Traffic can be captured ONLY for specific processes, by specifying either their command name or PID.

#### Capture Traffic by Command Name
```yaml
# --------------------------------------------------------------------------------------------
# Process Filters: process command names/IDs to monitor & capture API traffic.
# --------------------------------------------------------------------------------------------
# Uncomment and modify appropriately to limit capture to specific process names or IDs.
# Both monitored-commands and monitored-pids support list of names & IDs respectively.
# NOTE: monitored-commands and monitored-pids settings are mutually exclusive

# Capture traffic from/to nginx & python3
monitored-commands:
  - nginx
  - python3

# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Default policy is to capture all traffic
```

#### Capture Traffic by PID
```yaml
# --------------------------------------------------------------------------------------------
# Process Filters: process command names/IDs to monitor & capture API traffic.
# --------------------------------------------------------------------------------------------
# Uncomment and modify appropriately to limit capture to specific process names or IDs.
# Both monitored-commands and monitored-pids support list of names & IDs respectively.
# NOTE: monitored-commands and monitored-pids settings are mutually exclusive

# Capture traffic from/to PIDs 123 & 45.
monitored-pids:
  - 123
  - 45

# --------------------------------------------------------------------------------------------
# IP Filters: IP/Port/Network address based granular filtering of API traffic.
# --------------------------------------------------------------------------------------------
# IP Filters enable granular capture of API traffic based on various criteria.
# Default values ignore traffic from standard ports that normally do not care HTTP traffic.
# Refer to documentation on how these can be customized to suit your environment.
ip-filter-list:
  default-policy: accept # Default policy is to capture all traffic
```
