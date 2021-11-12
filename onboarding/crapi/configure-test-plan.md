# Configure Your Test Plan

Just like developers run tests using JUnit, XUnit, & PyTest `fixtures`, Levo's test plans use fixtures to drive tests. The fixtures provide seed data required for the proper execution of the tests.

Here you will learn how to provide a fixture for one test case, which tests for a serious security vulnerability called [IDOR][idor].

1. In the test plan, click on the endpoint test suite `GET /workshop/api/mechanic/mechanic_report`. This opens the test suite page.
1. Now click on `Insecure Direct Object Reference (IDOR) Test` to open up the specific test case.
1. The `Parameters` table will show `report_id`, `victim credentials`, and `attacker credentials` as a required parameters that needs binding.
1. In the `parameters.py` code module, edit the auto generated template fixtures, and provide appropriate seed values shown here:

    | Fixture Name         | Attribute Name | Text                   | Comments  |
    | -------------------- | -------------- | ---------------------- | --------- |
    | victim credentials   | userID         | victim.one@example.com |           |
    | victim credentials   | password       | Victim1One             |           |
    | attacker credentials | userID         | hacker@darkweb.com     | Hack3r$$$ |
    | attacker credentials | password       | Hack3r$$$              |           |
    |report_id|Fixture Return Value|1|Report ID `1` is owned by `victim` and has PII data. Access by users other than `victim` is a serious authorization security flaw!|
    
1. Hit save to commit your changes. You have successfully completed configuration of this test case.
1. Now copy (to clipboard) your test plan's `LRN (Levo Resource Name)` from the test plan list page
1. Next step is to run this test plan against `crAPI`.
