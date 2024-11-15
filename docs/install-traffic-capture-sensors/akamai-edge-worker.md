---
sidebar_position: 8
description: Deploy Levo.ai PCAP sensor on Cloudflare Worker. Follow our detailed guide to set up and configure for enhanced API traffic capture and analysis.
---

# Akamai Edge Worker

## Prerequisites
- **Akamai DNS Configuration:** Your website’s DNS is managed through Akamai.
- **Permissions:** You have the necessary permissions on Akamai to create and configure edge workers to your akamai property.
- **Levo Satellite Setup:** The Satellite has been successfully set up and is accessible via HTTPS from the EdgeWorker. Ensure that Domain of the Satellite URL is served by the Akamai platform. Please refer to the [Satellite Installation](/install-satellite) for more information.
- **Organization ID:** Obtain your Organization ID from Levo dashboard. Please refer to [Accessing Organization ID](/integrations/common-tasks.md#accessing-organization-ids)

## Deploying the Edge Worker

### Using the CLI

Follow the steps below to deploy the edge worker to your account.

- Ensure you have installed Akamai CLI, Edge Workers CLI and authentication credentials. Please follow these instructions [Setup Akamai CLI and Install Edge Workers](#setup-akamai-cli-and-edge-workers).
- Ensure you have edge worker created. Please follow [Create Edge Worker ID](#create-edge-worker-id).

#### Setup Edge Worker
- Clone the edge worker repository `git clone https://github.com/levoai/akamai-worker.git`.
- Navigate into the repo `cd akamai-worker`.
- Copy `.env.example` to `.env`
- Configure environment variables:
    - `AKAMAI_WORKER_ID`
    - `AKAMAI_WORKER_NETWORK`
    - `AKAMAI_WORKER_VERSION_INCREMENT` (optional)

> Note: `\src\bundle.json` contains bundle metadata.

- Execute `yarn worker:version:prepare` command to increment version and prepare dist.

- Execute `yarn worker:version:deploy` command to upload and activate bundle.


That's it! The edge worker has been set up. Now, let's add this EdgeWorker behavior to your Akamai property.

#### Adding EdgeWorker Behavior to Akamai Property
- Navigate to Akamai control center and click on **CDN** > **Properties** from left hamburger menu.
- Click on the property you want to add the EdgeWorker behavior to.
- Click **Edit New Version** button.
- Under **Property Variables** section, click **+ Variables** to configure below values.
  - `LEVO_SATELLITE_URL` - The URL of the Satellite where the traffic will be sent.
  - `LEVO_ORG_ID` - Your organization ID.
  - `LEVO_ENV` - The desired environment name in which you wish to see you applications on the Levo Dashboard. Optional, default is `staging`.
  - `LEVO_SERVICE_NAME` - The name of the service you are monitoring. Optional.
  - **Note:** These variables are already prefixed by **PMUSER_** as you can see in the section. 
- Under **Property Configuration Settings** > **Rules** > **Behaviors** > **EdgeWorkers** choose **On** and select the Edge Worker ID.
- Click **Save** and under Activate tab click **Activate** button to apply on Staging and/or Production accordingly.


#### Setup Akamai CLI and Edge Workers
- Ensure you have [Akamai CLI](https://techdocs.akamai.com/edgeworkers/docs/akamai-cli) installed.
  - On Windows you may need to add `akamai.exe` location to `Path` environment variable
- Install edge workers using `akamai install edgeworkers`.
- Ensure you have required authentication credentials like access token and client secret for your account. These can be found on Akamai **Identity & Access Management** page. 
- For more details please refer to docs [Akamai Setup Authentication Credentials](https://techdocs.akamai.com/developer/docs/set-up-authentication-credentials).

#### Create Edge Worker ID
- Navigate to Akamai control center and click on **CDN** > **EdgeWorkers** from left hamburger menu.
- Click on **Create EdgeWorker ID** button.
- Fill in the required fields like name for EdgeWorker ID, Resource Tier and other details before clicking on Create button.
- For more details please refer to docs [Create Akamai Edge Worker ID](https://techdocs.akamai.com/edgeworkers/docs/create-an-edgeworker-id).


