---
sidebar_position: 2
---


# Import API Specifications
![](../../../assets/zero-conf-flow-1.svg)

Levo will very soon have capabilities to auto generate OpenAPI specifications from live traffic.
Until then Levo requires OpenAPI specifications for security test generation.

> If you don't have OpenAPI specifications, but still want to test your APIs, please email us at `support@levo.ai`.
We can work with you to find alternative means to generate OpenAPI specifications using HAR files etc.

## 1. Import your APIs into Levo SaaS

1. Login into the Levo SaaS portal.

2. Click on `API Catalog` in the side panel and proceed to import you App's API specifications.

3. Select the catalog type as `Application`, and pick a suitable name for this catalog.

4. Complete the import, and verify if the API endpoints are visible in the catalog.

## 2. Upload a metadata.yml file to enable authorization bypass (RBAC) tests
If you are trying Levo for the first time, we recommend you skip this step and proceed to the next step.

If you have role based access controls (RBAC) for your APIs, and you wish to validate the proper configuration and functioning of the said controls, you will need to construct a metadata.yml file and upload it to the catalog created in the previous step.

You can read more about authorization bypass tests and the metadata.yml file [here](../../../concepts/api-catalog/metadata-yml.md).

Please construct an appropriate metadata.yml for your API endpoints and upload it via the `Metadata` tab for your API catalog in the Levo SaaS UI.

