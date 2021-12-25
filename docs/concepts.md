---
sidebar_position: 5
---

# Key Concepts
Levo is purpose built for modern development teams, and developers.

Below are a few key concepts that should be pretty intuitive for developers and AppSec teams.

## API Catalog
Levo autogenerates security and resilience tests for APIs based on schema definitions for API endpoints.

These schemas can either be auto discovered (by observing runtime traffic) or imported into Levo.

The API Catalog is a store and directory for the aforementioned schemas. 

![](./assets/api-catalog-structure-1.png)
![](./assets/api-catalog-structure-2.png)

The catalog is comprised of `Applications`, and `Services`. An `Application` is a logical grouping of a set of API endpoints.

An `Application` can contain one or more `Services`, where a `Service` is another logical grouping of a set of API endpoints.

This type of organization is very common in Microservices Architecture (MSA).

## Test Plans
Autogenerated `Test Plans` are tailormade for each API (and it's associated endpoints).

![](./assets/test-plans.png)

Test Plans can be generated for APIs present in either the `Application` or `Service` (API Catalog) groupings.

A Test Plan is structured as show below.
![](./assets/test-plan-structure-1.png)

A Test plan is comprised of `Test Suites`. A Test Suite is focussed on a single API endpoint, and comprises of a set of `Test Cases`.

A `Test Case` has a singular objective, and tests the specific API endpoint for a specific vulnerability. For example, the test the API endpoint for a [SSRF](./assets/SSRF.svg) vulnerability, or an authorization bypass vulnerability.

#### Test Fixtures & Parameters

[Software test fixtures][fixtures] initialize test functions. They provide a fixed baseline so that tests execute reliably and produce consistent, repeatable, results.

Initialization may setup services, state, or provide seed values to (mandatory & optional) API input parameters, so that the API invocation succeeds.

For example, effective testing of the API endpoint `GET /ride_receipts/{receipt_id}`, might require a 
known and valid value for the `{receipt_id}` parameter, which is present in the receipts database.

Without this known seed value, the test that exercises this API endpoint might not get a proper response from the API endpoint.

Fixtures allow providing this seed value for the `{receipt_id}` parameter. [JUnit Fixtures][junit], and [PyTest Fixtures][pytest] are pretty commonly used by modern development teams.

Levo provides fixtures for configuring seed values for various API endpoint parameters. These fixtures are available at the `Test Case` level, `Test Suite` level, and `Test Plan` level as shown below.

Fixtures at the `Test Suite` level will automatically apply to all `Test Cases` within that `Test Suite`. Fixtures ate the `Test Plan` level will apply to all `Test Suites`.

![](./assets/fixtures.png)

## CLI - Test Runner
![](./assets/cli-test-runner.svg)

The CLI is the component that executes the autogenerated Test Plans. The CLI can be run on a developer's laptop or integrated into CI/CD environments.

Levo provides pre-packaged runner/actions integrations for several popular CI/CD products.

## Test Run Reports
![](./assets/test-run-reports.png)

The execution results of the Test Plans are reported to Levo SaaS by the CLI. The CLI also provides a summary of execution results in the console. This summary is also available in the CI/CD logs (when integrated with CI/CD).



[fixtures]: https://en.wikipedia.org/wiki/Test_fixture#Software
[junit]: https://github.com/junit-team/junit4/wiki/Test-fixtures
[pytest]: https://docs.pytest.org/en/6.2.x/fixture.html