---
sidebar_position: 2
---

# Supported Authentication Methods

The default authentication mechanism is [Bearer Authentication][bearer-auth], and the `environment.yml` file is auto-generated to use this method.

You can customize the authentication method to suit your needs.

Below are various authentication methods supported by levo, and the corresponding structure of the `environment.yml` file, to properly activate the authentication method.

Please customize the auto generated `environment.yml` file accordingly.

## Bearer Tokens
The default authentication mechanism is [Bearer Authentication][bearer-auth]. You are required to provide
valid `bearer tokens` for `user_1` in the example below.

```YAML
iam:
  users:
  - name: user_1
    default: true # This user's credentials will be used for all authentication
    bearer_tokens:
    - name: bearerAuth
      value: <Enter the bearer token>
```

## Login API / form based login (aka http_call)
If you use an API (or HTTP JSON forms) to acquire a authentication token (bearer token) in exchange for user
credentials, you can use the `http_call` method.

This method requires you to provide the following:
- The login URL
- The key names for both the username and password values that are sent in the login request's POST (JSON) body.
- The location in the login URL's JSON response, where the authentication token is present.
- The username and base64 encoded password values for the `user_1` used in security tests.

Below is the syntax to enable `http_call` based login.

```YAML
iam:
  authenticators: # This section specifies how to extract an authentication token
    - name: my_authenticator
      type: http_call # Uses a POST request
      login_url: /identity/api/auth/login # URL for POST request
      username_key: <JSON key for username> # Key in POST request's JSON body that specifies the user value
      password_key: <JSON key for password> # Key in POST request's JSON body that specifies the password value
      session_credential_extractors: # This section specifies how to extract a token in the POST response
        - name: access_token
          type: bearer_token
          location: <header | body> # Specifies the location to extract the token. Header or Body.
          path: <JSON path expression> # In case the location is `body`, aJSON path expression to token in the response body
  users: # This section specifies actual user information the test plan will use
    - name: user_1
      default: true # This user's credentials will be used to access all API endpoints requiring AuthN
      username: <user_id>
      password_base64: <base64 password> # Passwords need to be base64 encoded
      authenticator: my_authenticator
```

## Basic authentication
Coming soon ...

## Cookie based authentication
Coming soon ...

## OAuth
Coming soon ...



[bearer-auth]: https://swagger.io/docs/specification/authentication/bearer-authentication/

