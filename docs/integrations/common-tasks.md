---
sidebar_position: 6
title: Common Integration Tasks | Levo.ai Documentation
---

# Common Tasks
- [Generating CLI Authorization Keys](#generating-cli-authorization-keys)
- [Accessing Organization IDs](#accessing-organization-ids)

---

## Generating CLI Authorization Keys
The Levo CLI is packaged within CI/CD plugins embedded in quality gates to run security and resilience tests. 

The CLI uses an authorization key to access Levo.ai. Follow instructions below to generate a key.

1. [Login to Levo.ai](https://app.levo.ai/login)
2. Click on your **user profile**.
3. Select **User Settings** from the menu.
4. Navigate to **Keys** on the left-hand side navigation panel.
5. Click on **Get CLI Authorization Key**.
6. Copy and save your authorization key for use in your preferred CI/CD plugin.

:::info
If you are an India-based customer, [Login to the India portal](https://app.india-1.levo.ai/login) to access Levo.ai.
:::

---

## Accessing Organization IDs
Levo allows signed-in users to belong to multiple organizations, each with a unique organization ID. These IDs are often required for 3rd-party integrations such as CI/CD plugins. Follow these steps to retrieve the ID for a specific organization:

![Fetch ORG ID](../assets/levo-org-id.png)

1. [Login to Levo.ai](https://app.levo.ai/login)
2. Click on your **user profile**.
3. Select **User Settings** from the menu.
4. Navigate to **Organizations** on the left-hand side navigation panel.
5. Copy and save the ID of the desired organization for your integration needs.

This ID can now be used in third-party integrations like CI/CD plugins.

---

### Need Help?
For further assistance, please reach out to [Levo.ai Support](mailto:support@levo.ai).
