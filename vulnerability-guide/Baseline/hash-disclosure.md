
# Hash Disclosure In Response
![Hash Disclosure In Response](../assets/baseline/baseline-vuln.svg)

## What is it?
The response contains one or more hash values that could represent *secrets* and/or *passwords*.

## References
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)
- [Examples of Hashed Secrets](https://openwall.info/wiki/john/sample-hashes) 


## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints when the **Baseline** security category is enabled in test plans.

### How does it work?
Responses from the API server are analyzed for the presence of common hash values (MD5 Crypt, SHA-256 Crypt, SHA-512, SHA-384, Mac OSX salted SHA-1, NTLM, BCrypt, Kerberos AFS DES, OpenBSD Blowfish, etc), that could potentially represent secrets and/or passwords.

### What is the solution?
Verify if hashes present in the response pertain to secrets. If secrets are being sent as hashes, ensure it is justified by a legitimate business requirement.


