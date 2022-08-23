
# Information Disclosure - Suspicious Comments
![Suspicious Comments](../assets/baseline/baseline-vuln.svg)

## What is it?
The API endpoint or server returned a response that appears to contain suspicious comments which may help an attacker.

**TBD**

TODO
FIXME
BUG
BUGS
XXX
QUERY
DB
ADMIN
ADMINISTRATOR
USER
USERNAME
SELECT
WHERE
FROM
LATER


## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [OWASP API TOP-10 A7](https://owasp.org/www-project-api-security/)  

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses sent by the API server are analyzed for the presence of comments that could help an attacker glean information leading to an exploit.

### What is the solution?
Remove all comments that return information that may help an attacker, and fix any underlying problems they refer to.


