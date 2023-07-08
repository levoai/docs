---
sidebar_position: 7
---

# Other Installation options

## AWS Traffic Mirroring

### i. Prerequisites
- Satellite has been successfully installed with traffic mirroring listener.
- You have noted down the Satellite's Elastic Network Interface (target ENI) id.
- You have noted down the Source Elastic Network Interface (source ENI) id, usually the Load Balancer ENI.
- The Satellite is reachable from the source where you are mirroring traffic from.
- [Setup Levo CLI with AWS credentials](../../security-contract-testing/levo-cli/levo-cli-intro)

### ii. Creating mirroring session using Levo CLI

In order to create the traffic mirroring in aws you have to run:

```bash
levo mirror create
```

The CLI will ask for some inputs. First it will ask for the Elastic Network Interface resource id of the source instance from which you want to mirror the traffic.

```bash
? What is the source Network Interface resource id? [your-source-eni-for-traffic-mirroring]
Getting source mirroring details...
```

Then CLI will as for the Elastic Network Interface resource id of the target satellite instance you want to mirror the traffic to.

```bash
? What is the target Network Interface resource id? [eni-for-satellite-running-traffic-listener]
Getting source mirroring details...
Initializing traffic mirroring... creating traffic mirroring filter if necessary.
Looking for an existing traffic mirror target...
Looking for eni-*********** in us-west-2
```

Then it will ask you to name the traffic mirroring session so you can identify it.

```bash
? How do you want to name the mirroring session? [your-mirroring-session-name]
Creating traffic mirroring session...
```

Done. Now traffic should be mirrored from your source network interface into the Levo satellite.

### ii. Listing mirroring session using Levo CLI

```bash
foo@bar:~$ levo mirror list
my-mirroring-session-1
my-mirroring-session-2
my-mirroring-session-3
```

### iii. Delete a mirroring session using Levo CLI

```bash
foo@bar:~$ levo delete my-mirroring-session-1
Sesion successfully deleted!
```