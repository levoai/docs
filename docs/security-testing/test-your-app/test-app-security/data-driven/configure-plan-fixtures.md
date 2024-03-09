---
sidebar_position: 4
---

# Configure Test Plan Fixtures
![](../../../../assets/data-driven-test-plan.svg)

![](../../../../assets/data-driven-flow-3.svg)


## 1. Configure your `Config in Progress` test plan
Levo uses [test fixtures][fixtures] to provide proper values to API parameters prior to sending test traffic to the live API endpoints.

This test plan requires configuration of these test fixtures prior to execution. Proper configuration of the test plan will make it runnable.

1. Open the test plan and navigate to the test cases that require configuration (test cases are under test suites). Check the test case documentation for specific parameters that need configuration. Uncomment the auto-generated fixtures and follow this [example][fixture-example], to configure values that are appropriate for your live API target.

2. Continue this process until either the test plan's state changes to `Config Complete`, or you have enough test cases/suites that are runnable.

3. Remember to `save` your changes to the test plan.


[example-values]: https://swagger.io/docs/specification/adding-examples/
[fixtures]: ../../../../guides/security-testing-concepts/test-plans/fixtures/test-fixtures.md
[fixture-example]: ../../../../guides/security-testing-concepts/test-plans/fixtures/configure-fixtures.md
