---
sidebar_position: 3
---

# Zero Conf Security Tests - Part 3

## 4. Download the `environment.yml` file
Each auto generated test plan has a `environment.yml` file associated with it, which provides critical authentication/authorization information. You can read more about this file [here][env-file]. 

** Open your test plan, navigate to the `environment.yml` section, and download this file to your desktop. **

## 5. Configure the `environment.yml` file
Follow the instructions [here][configure-authn] to configure appropriate user credentials/roles required to effectively test your live API endpoints.

## 6. Copy the test plan's Levo Resource Name (LRN)
From the test plans screen **copy** the LRN (Levo Resource Name) of your test plan to the clipboard.



[env-file]: ../../../concepts/test-plans/env-yml.md
[configure-authn]: ../../../tasks/authentication/authn-authz.md
