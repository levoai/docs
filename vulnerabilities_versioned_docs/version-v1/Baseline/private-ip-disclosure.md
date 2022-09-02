
# Private IP Disclosure In Response
![Private IP Disclosure](../assets/baseline/baseline-vuln.svg)

## What is it?
A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.

## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [Internal IP Disclosure - Hacker News](https://thehackernews.com/2012/12/google-paypal-facebook-internal-ip.html)  


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses from the API server are analyzed for the presence of private IP information.

### What is the solution?
Verify if private IPs present in the response are justified by a legitimate business requirement. Remove unnecessary private IP information present in responses.


