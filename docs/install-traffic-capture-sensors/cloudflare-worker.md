---
sidebar_position: 4
description: Deploy Levo.ai PCAP sensor on Cloudflare Worker. Follow our detailed guide to set up and configure for enhanced API traffic capture and analysis.
---

# Cloudflare Worker

## Prerequisites
- You are using Cloudflare for DNS, and you have [proxying](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/) enabled.
- You have sufficient permissions on Cloudflare to create workers and configure worker routes for your website.
- The Satellite has been successfully set up and is reachable (via HTTPS) from the worker.

## Deploying the Worker

### Using the CLI

Follow the steps below to deploy the worker to your account.  
You can obtain your organization's ID from https://app.levo.ai/settings/organizations or by
clicking on your profile picture in Levo's dashboard, and navigating to `User Settings -> Organizations`.

```shell
# Clone the worker repository
git clone https://github.com/levoai/cf-worker.git
# cd into the repository
cd cf-worker
# Install all dependencies
yarn
# Authenticate with Cloudflare
npx wrangler login
# Deploy the worker
npx wrangler deploy
# Add your organization ID as a secret
echo <VALUE> | npx wrangler secret put LEVO_ORG_ID
```

That's it! The worker has been added to your Cloudflare account.

:::info
You must also add `LEVO_SATELLITE_URL` as an environment variable for the worker if you are hosting the Satellite yourself.

Check the [repository's README](https://github.com/levoai/cf-worker/blob/main/README.md) for a list of all supported variables.
:::

## Configuring Websites to use the Worker

Follow the instructions in the [Cloudflare Docs](https://developers.cloudflare.com/workers/configuration/routing/routes/#set-up-a-route).

:::caution
When adding a worker route, ensure that the failure mode is set to "Fail open" to allow requests to bypass the worker in case of unexpected errors
or if the [daily request limit](https://developers.cloudflare.com/workers/platform/limits/#daily-request) runs out.
:::

<img
  src={require('../assets/cf-worker-route.png').default}
  alt="Adding a Cloudflare Worker route"
  style={{ display: 'block', margin: 'auto', paddingTop: '24px'}}
/>
