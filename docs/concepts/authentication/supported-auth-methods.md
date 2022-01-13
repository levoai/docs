---
sidebar_position: 2
---

# Supported Authentication Methods

The default authentication mechanism is [Bearer Authentication][bearer-auth], and the `environment.yml` file is auto-generated to use this method.

You can customize the authentication method to suit your needs.

Below are various authentication methods supported by levo, and the corresponding structure of the `environment.yml` file,
to properly activate the authentication method.

Please customize the auto generated `environment.yml` file accordingly.

## Bearer Tokens
The default authentication mechanism is [Bearer Authentication][bearer-auth]. You are required to provide
valid `bearer tokens` for `user_1` in the example below.

```YAML
iam:
  users:
  - name: user_1
    default: true
    bearer_tokens:
    - name: bearerAuth
      value: <Enter the bearer token>
```

## Login API / form based login (aka http_call)
If you use an API (or HTTP JSON forms) to acquire a authentication token (bearer token) in exchange for user
credentials, you can use the `http_call` method.

This method requires you to provide the following:
- The login URL
- The key names for both the username and password values that are sent in the login request
- The location in the login URL's response where the authentication token is present.
- The username and password values for the `user_1` used in security tests.

Below is the syntax to enable `http_call` based login.

```YAML
iam:
  authenticator:
  - name: bearerAuth
    type: http_call
    login_url: <The identity endpoint to generate token>
    username_key: <The key to be used to send username in request body>
    password_key: <The key to be used to send password in request body>
    session_credential_extractors:
    - name: http_call_based_extractor
      type: bearer_token
      location: '<Enter the location secret can be extracted from. Valid values: header/body>'
      path: <The path of the secret value in case of location=body>
      header_name: <The header name which contains the token in case location=header>
  users:
  - name: user_1
    username: <Enter the username>
    password: <Enter the password>
    default: true
    authenticator_name: bearerAuth
```

## Basic authentication
Coming soon ...

## Cookie based authentication
Coming soon ...

## OAuth
Coming soon ...



[bearer-auth]: https://swagger.io/docs/specification/authentication/bearer-authentication/

