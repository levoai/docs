---
title: "Prevent Session Hijacking: Stop Cookie Poisoning Attacks"
---


# Cookie Poisoning Via Query/Body Parameters
![Cookie Poisoning](../assets/baseline/baseline-vuln.svg)

## What is it?
Cookie Poisoning is a vulnerability caused when client provided parameters (query, and body parameters) are used by the API server to set cookie values.

For example, Bob is using an online shopping website, but is unable to afford the final checkout price of $100. Upon viewing all the cookies contained within his browser, Bob realizes that there is a cookie with a key named `checkout_price` which was being sent to the server for each transaction that was made.

He notices that the value of the `checkout_price` cookie is being set by a URL query parameter named `transaction_total`, in the `POST /transact?transaction_total={dollar_amount}` API call.

Bob decides to manipulate the `checkout_price` cookie, by calling the API with `POST /transact?transaction_total=-100`.
This results in his final checkout price of $0.00/.


## References
- [Cookie Poisoning](https://cs.brown.edu/courses/csci1660/wiki/attacks/Cookie-Poisoning/)
- [API A8 - Injection](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md)  
- [CWE-20](https://cwe.mitre.org/data/definitions/20.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints that allow cookie names/values to be controlled by user input, and when the **Baseline** security category is enabled in test plans.

### How does it work?
User input provided for HTTP query/body parameters are compared to the `Set-Coookie` values returned by the API endpoint. A potential vulnerability is raised, if either the cookie name or value matches the user supplied input, 

### What is the solution?
Do not allow user input to control cookie names and values.


