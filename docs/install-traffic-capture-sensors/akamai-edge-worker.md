---
sidebar_position: 8
description: Learn how to deploy Levo.ai Akamai Edge Worker with our step-by-step guide to enhance API traffic capture and analysis.
---

# Akamai Edge Worker

Deploying the Levo.ai Akamai Edge Worker enables advanced API traffic capture and analysis, ensuring seamless integration with your Akamai-powered setup. This guide walks you through the prerequisites, deployment, and configuration of the Edge Worker.

---

## Prerequisites

Before deploying the Edge Worker, ensure the following requirements are met:

- **Akamai DNS Configuration:** Your website’s DNS must be managed through Akamai.
- **Permissions:** Ensure you have sufficient permissions on Akamai to create and configure edge workers for your property.
- **Levo Satellite Setup:** 
  - Confirm that the Levo Satellite is set up and is accessible via HTTPS from the EdgeWorker.
  - Ensure that the Satellite's domain is served through Akamai platform by configuring an A record or a CNAME in Akamai's DNS settings.
  - Refer to the [Satellite Installation Guide](/install-satellite) for levo.ai satellite setup instructions and [Manage DNS Records](https://techdocs.akamai.com/cloud-computing/docs/manage-dns-records) for DNS configuration in Akamai.
- **Organization ID:** Obtain your Organization ID from Levo dashboard. Refer to [Accessing Organization ID](/integrations/common-tasks.md#accessing-organization-ids) for details.

## Deploying the Edge Worker

### Using the CLI

Follow the steps below to deploy the EdgeWorker using the CLI.

#### 1. Setup Akamai CLI and Edge Workers
- **Install Akamai CLI**:
  - Ensure you have installed [Akamai CLI](https://techdocs.akamai.com/edgeworkers/docs/akamai-cli).
    - On Windows you may need to add `akamai.exe` location to `Path` environment variable.
- **Install EdgeWorker CLI**:
  - Run this command to install the EdgeWorkers CLI `akamai install edgeworkers`.
- **Set Up Authentication**:
  - Ensure you have required authentication credentials (e.g., access token and client secret), available on Akamai's **Identity & Access Management** page.
  - For detailed instructions, refer to [Akamai Setup Authentication Credentials](https://techdocs.akamai.com/developer/docs/set-up-authentication-credentials).

#### 2. Create Edge Worker ID
- Navigate to **CDN** > **EdgeWorkers** in the Akamai control center.
- Click **Create EdgeWorker ID** and fill in the required details:
  - Name for EdgeWorker ID
  - Resource Tier
  - other details before 
- Click **Create**.
- For more details, refer to [Create Akamai Edge Worker ID](https://techdocs.akamai.com/edgeworkers/docs/create-an-edgeworker-id).

#### 3. Setup EdgeWorker
- Clone the EdgeWorker repository `git clone https://github.com/levoai/akamai-worker.git`.
- Navigate into the repository `cd akamai-worker`.
- Copy the example environment file `cp .env.example .env`
- Configure the following environment variables in the .env file:
    - `AKAMAI_WORKER_ID`
    - `AKAMAI_WORKER_NETWORK`
    - `AKAMAI_WORKER_VERSION_INCREMENT` (optional)
- Prepare the EdgeWorker for deployment `yarn worker:version:prepare` which increments version.
- Deploy and activate the EdgeWorker `yarn worker:version:deploy` which uploads and activates the code bundle.

> Note: `\src\bundle.json` contains bundle metadata.

#### 4. Adding EdgeWorker Behavior to Your Akamai Property
- Login int to Akamai control center.
- Navigate to **CDN** > **Properties** from left-hand menu.
- Select the property you want to configure and click **Edit New Version**.
- Under **Property Variables**, add following variables.
  - `LEVO_SATELLITE_URL` - The URL of the Satellite where the traffic will be sent.
  - `LEVO_ORG_ID` - Your organization ID.
  - `LEVO_ENV` - The desired environment name. Optional, default is `staging`.
  - `LEVO_SERVICE_NAME` - The name of the service you are monitoring. Optional.
  >   **Note:** These variables are prefixed with **PMUSER_** in this section. 
- Under **Property Configuration Settings**, go to > **Rules** > **Behaviors**, and:
  - Enable **EdgeWorkers** behavior.
  - Select the appropriate EdgeWorker ID.
- Save your changes and activate the property for Staging and/or Production.

---

**That's it!**

Your EdgeWorker is now deployed and integrated with your Akamai property. Monitor and analyse your API traffic using the Levo.ai platform. For further support, feel free to reach out to the [Support](mailto:support@levo.ai).

