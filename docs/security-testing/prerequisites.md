---
sidebar_position: 1
---

# Prerequisites for Security Testing

## Target Service URL

A running service is needed since Levo constructs both victim and attacker payloads and executes them against a running service. 

This service/URL should be publicly reachable when launching tests from the dashboard.

If there are any firewall, VPN, or other restrictions in accessing the URL from outside, Levo CLI can be used to launch tests from within the allowed network. 

Typically, if a CURL or Postman call to the target service returns a 2xx response, Levo can execute security tests.

## Authenticated Endpoints

A valid token or API Key or username/password combination is required to get a 2xx response from authenticated endpoints. 
This requires a one-time configuration in the dashboard to launch or schedule multiple tests. 

Unauthenticated endpoints can be run against a target without any configuration.

### Valid API endpoint parameters

Parameters for API endpoints can be configured (one-time) in the dashboard. 

Levo can also build parameters/payload banks for users with a one-time configuration.

### User resolution

If the target service has a way to resolve users, Levo can use this to build a payload bank per configured user.

This means that each request can be mapped to a user using some unique identifier (email, username, etc.) in the request or even using HTTP calls.

Levo can then use these users' payload banks to fill valid API parameter values for various Security Tests.

This is an automatic process, and Levo will keep refreshing this payload bank and use the latest parameters as required.

## Unauthenticated Endpoints

For unauthenticated endpoints, Levo will fill parameters using random API traces and proceed to executing security tests.
