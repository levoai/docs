# Web A6 - Log4J Remote Code Execution
![LOG4J](../../assets/Web-Top-10/A6/A6-Log4J-RCE.svg)

## What is it?
This vulnerability arises due to high level reasons listed [here][WEB-A6].

Log4J is a widely used java based logging library. It has a known vulnerability that allows an attacker to download malicious code into the Log4J component, which leads to remote code execution.

The exact steps of this attack is described in the diagram above.

## References
[CWE-117: Improper Output Neutralization for Logs](https://cwe.mitre.org/data/definitions/117.html)

[Log4J Security Vulnerbilities](https://logging.apache.org/log4j/2.x/security.html)

## Test case FAQs
### When is this test case applicable?
Applies to all API endpoints that consume user supplied input.


## How does it work?
The input parameter(s) within the API endpoint, are injected with malicious strings (Log4J injection strings. See diagram above).

This malicious string refers to a remote server controlled by Levo. This remote server is called the `remote responder`.

If this malicious string is logged via a vulnerable Log4J library, the library is tricked into contacting the remote responder controlled by Levo. 

Levo's remote responder provides confirmation that the attack launched by the test case was successful.

## What is the solution?
* Upgrade all Log4J libraries to the latest version that has all security patches for this vulnerability.

* Whitelist outbound traffic from your services to only legitimate destinations (URLs).


[WEB-A6]: ./A6-index.md