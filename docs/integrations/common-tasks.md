---
sidebar_position: 6
title: Common Integration Tasks | Levo.ai Documentation
---

# Common Tasks
- [Generating CLI Authorization Keys](#generating-cli-authorization-keys)
- [Accessing Organization IDs](#accessing-organization-ids)

-----------------------------------
## Generating CLI Authorization Keys
The Levo CLI is packaged within CI/CD plugins that are embedded in quality gates, that run security/resilience tests. 

The CLI uses an authorization key to access Levo.ai. Follow instructions below to generate a key.

- [Login](https://app.levo.ai/login) to Levo.ai
- Click on your user profile
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
- Click on `Get CLI Authorization Key`
- Now copy & save your authorization key, to be used in the CI/CD plugin of your choice

-----------------------------------
## Accessing Organization IDs
Levo allows signed-in users to belong to more than one *organization*. Each organization has a unique ID. Below are instructions on fetching the ID for a specific organization.

![Fetch ORG ID](../assets/levo-org-id.png)

- [Login](https://app.levo.ai/login) to Levo.ai
- Click on your user profile
- Click on `User Settings`
- Click on `Organizations` on the left navigation panel
- Now copy & save the ID for the Organization of your preference
- This ID will be used within 3rd party integrations like CI/CD plugins, etc.