
# Open/Unrestricted URL Redirect Via URL Query Parameter
![Open URL Redirect](../assets/baseline/baseline-vuln.svg)

## What is it?
An open redirect vulnerability occurs when an API endpoint allows a user to control a redirect or forward to another URL. If the API does not validate untrusted user input, an attacker could supply a URL that redirects an unsuspecting victim from a legitimate domain to an attacker’s phishing site.

Attackers exploit open redirects to add credibility to their phishing attacks. Most users see the legitimate, trusted domain, but do not notice the redirection to the phishing site.

Although this vulnerability doesn’t always directly impact the legitimate application, the company's reputation can be negatively impacted.

For example, `www.myapi.com/login?redirect_url=/profile` is an endpoint that uses a redirect query parameter to redirect the browser to the user's profile page, after a successful login.

Attacker could you use this capability to lure users to a phishing page that closely resembles the look & feel of `www.myapi.com`, and then manipulate the user to provide credentials etc., leading to a full account takeover.

## References
- [What is Open Redirect?](https://learn.snyk.io/lessons/open-redirect/javascript/)  
- [Testing for Client-side URL Redirect](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/11-Client-side_Testing/04-Testing_for_Client-side_URL_Redirect)
- [CWE-601](https://cwe.mitre.org/data/definitions/601.html)

## Test case FAQs
### When is this test case applicable?
This is applicable for all API endpoints that accept URLs as query parameters, and when the **Baseline** security category is enabled in test plans.

### How does it work?
A request is made to the API endpoint with a *bogus* URL in the query parameter, whose domain does not match the API's domain. If the API endpoint is deemed vulnerable to `Open Redirects`, if it returns a redirect response (301, 302, 307 HTTP response codes) directed to the bogus URL. 

### What is the solution?
To avoid the open redirect vulnerability, query parameters containing URLs must be validated (by the API endpoint) before sending 302 HTTP code (redirect) to the client. Implement safe redirect functionality that only redirects to relative URI's, or a list of trusted domains.


