---
sidebar_position: 1
---

# Test Runner

Levo provides you with the ability to run security tests on your Application endpoints.

With Levo you can run security tests
- on Cloud
- on Premises


To run security tests we need three things
- A target service URL which should be reachable
- Valid configuration for authenticated endpoints
- Valid API endpoint parameters


If the target service is publicly reachable, tests can be run directly from Levo Cloud

But if you want to test some internal services which are not publicly reachable, you can use the **testrunner**.

The testrunner can be installed in your premise.

Once you start security tests from the UI, the testrunner will pull those tests and execute them in your premise.
This way if you want to test internal APIs, you can install our testrunner service.
<br></br>

## Installation

You can install the testrunner
- [via helm in Kubernetes environment](#install-testrunner-via-helm-on-kubernetes)
- [via docker](#install-testrunner-via-docker)

### Prerequisites
- You will need an authorization token and the organization-id for which you want to run security tests
- Either helm or docker installed based on the installation process.
<br></br>

### Install testrunner via helm on Kubernetes

To get the authorization token and organization-id, follow instructions [here](#get-authorization-token-and-orgnaization-id)


- Add Levo Helm repo

```bash
helm repo add levoai https://levoai.github.io/helm-charts/
```

- Run following command to install testrunner helm chart

```bash
helm install \
--set key="auth-key" \
--set orgId="organization id" \
--set levoBaseUrl="https://api.levo.ai" \
testrunner levoai/testrunner
```

:::info

Depending on the region your apps are in, you may need to set a different Levo base URL for the satellite.

For example, if the CLI will be used with `app.india-1.levo.ai`, use the following alias:

```bash
helm install \
--set key="auth-key" \
--set orgId="organization id" \
--set levoBaseUrl="https://api.india-1.levo.ai" \
testrunner levoai/testrunner
```
:::

<br></br>

### Install testrunner via Docker

To get the authorization token and organization-id, follow instructions [here](#get-authorization-token-and-orgnaization-id)

If you have docker running on your machine, you can start the testrunner with a simple `docker run` command

```bash
mkdir -p $HOME/.config/configstore
 
alias levo='docker run --rm \
    --add-host=host.docker.internal:`ip route|awk '\''/docker0/ { print $9 }'\''` \
    --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore \
    -v $HOME/.aws:/home/levo/.aws \
    -v $PWD:/home/levo/work:rw \
    -e LOCAL_USER_ID=$(id -u) \
    -e LOCAL_GROUP_ID=$(id -g) \
    -e LEVO_BASE_URL=https://api.levo.ai \
    -e TERM=xterm-256color \
    -ti levoai/levo:stable'

levo start --key "auth-key" --organization "orgId"
```
:::info

Depending on the region your apps are in, you may need to set a different Levo base URL for the satellite.

For example, if the CLI will be used with `app.india-1.levo.ai`, use the following alias:

```bash
alias levo='docker run --rm \
    --add-host=host.docker.internal:`ip route|awk '\''/docker0/ { print $9 }'\''` \
    --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore \
    -v $HOME/.aws:/home/levo/.aws \
    -v $PWD:/home/levo/work:rw \
    -e LOCAL_USER_ID=$(id -u) \
    -e LOCAL_GROUP_ID=$(id -g) \
    -e LEVO_BASE_URL=https://api.india-1.levo.ai \
    -e TERM=xterm-256color \
    -ti levoai/levo:stable'
```

:::
<br></br>

### Get Authorization token and Orgnaization ID

[Login](https://app.levo.ai/login) to  Levo.ai

To get the authorization token
- Click on User Settings
- Click on Keys on the left navigation panel
- Click on Get CLI Authorization Key

To get the Organization ID
- Click on User Settings
- Click on Organizations on the left navigation panel
- Click on Copy for whichever organization you want to run tests for






