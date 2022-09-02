
# Java Serialization Detected
![Java Serialization Detected](../assets/baseline/baseline-vuln.svg)

## What is it?
Java Serialization seems to be in use. If the serialized data is not correctly validated, an attacker can send a specially crafted object that leads to dangerous “Remote Code Execution”. A magic sequence identifying JSO has been detected (Base64: rO0AB, Raw: 0xac, 0xed, 0x00, 0x05).

## References
- [CWE-502](https://cwe.mitre.org/data/definitions/502.html)
- [Oracle Advisory On Deserialization](https://www.oracle.com/java/technologies/javase/seccodeguide.html#8)  


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
API requests and responses are analyzed for the presence of Java Serialization Objects (based on magic sequences that indicate the presence of JSOs).

### What is the solution?
Deserialization of untrusted data is inherently dangerous and should be avoided. APIs should always validate the serialized data thoroughly before consumption.


