---
sidebar_position: 3
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
