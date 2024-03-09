---
sidebar_position: 2
keywords: [API Authorization, Roles, Scopes]
---

# Metadata.yml file

## What is it?

Often API endpoints enforce granular authorization controls on users/clients using role based access control (RBAC) mechanisms. Effective security testing involves evaluating the proper configuration and functioning of these RBAC controls.

Currently there is no industry standard way to express RBAC information in OpenAPI specifications.

The `metadata.yml` allows associating RBAC information with API endpoints present in Levo's API Catalog.

Associating RBAC information with API endpoints in the API catalog is completely optional. However, if testing authorization controls is desired, then providing RBAC information via the `metadata.yml` file is mandatory.

## Are there other uses for this file?
RESTful APIs operate on resources, and provide `CRUD` operations on those resources. Effective security also requires evaluating the proper functioning of state transitions that happen across these `CRUD` operations.

The `metadata.yml` also allows grouping API endpoints for specific resources, so that Levo can auto generate tests that evaluate the consistency of state changing `CRUD` operation sequences.

## How do I provide RBAC information for my API endpoints?
You can get detailed information [here](../../../../security-testing/tasks/api-rbac/api-rbac-tasks.md)