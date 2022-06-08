---
sidebar_position: 2
---

# Filter API Traffic Capture

The Sensor allows capturing API (HTTP) traffic based on filter (include/exclude) criteria. These filters are specified in a configuration file. Please refer to [Sensor Management](./sensor-mgmt.md) for details on the configuring Sensor properties.

## Default Excluded Ports
The Sensor excludes capturing traffic from the below ports (TCP & UDP) by default.

If your API Traffic (HTTP) uses one of these ports, please see section below on how the port can bed included for capture. 

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

## Excluding Ports
TBD

## Including Ports
TBD

## Excluding IP Addresses
TBD

## Including IP Addresses
TBD
