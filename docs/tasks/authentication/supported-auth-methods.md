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
If you use an API (or HTTP JSON forms) to acquire a authentication token (bearer token) in exchange for user credentials, you can use the `http_call` method.

This method requires you to provide the following:
- The login URL
- The HTTP method to use when fetching the URL. Only `POST` & `GET` supported. If unspecified will use `POST`.
- The key names for both the username and password values that are sent in the login request's POST (JSON) body.
- The location in the login URL's JSON response, where the authentication token is present.
- The username and base64 encoded password values for the `user_1` used in security tests.

Below is the syntax to enable `http_call` based login.

```YAML
iam:
  #
  #
  # This section specifies how to extract an authentication token
  authenticators:
    - name:  <your friendly name for this authenticator. E.g. my_authenticator>
      type: http_call # Makes a HTTP request using the specified method
      method: <POST | GET> # Defaults to POST if unspecified
      login_url: <Enter URL value. E.g. /identity/api/auth/login> # URL for HTTP request
      username_key: <JSON key for username> # Key in HTTP request's JSON body that specifies the user value
      password_key: <JSON key for password> # Key in HTTP request's JSON body that specifies the password value
      #
      #
      # This section specifies how to extract a token in the HTTP response
      session_credential_extractors:
        - name: access_token
          type: bearer_token
          location: <header | body> # Specifies the location to extract the token. Header or Body.
          path: <JSON path expression> # In case the location is `body`, a JSON path expression to the token in the response body
  #
  #
  # This section specifies actual user information the test plan will use
  users:
    - name: user_1
      default: true # This user's credentials will be used to access all API endpoints requiring AuthN
      username: <user_id>
      password_base64: <base64 password> # Passwords need to be base64 encoded
      authenticator: <friendly name of the authenticator specified above. E.g. my_authenticator>
```

## Basic Authentication
Below are format examples for `Basic Authentication` with and without `role` information.

### Basic Authentication (no roles)
```YAML
iam:
  authenticators:
    - name: <your friendly name for this authenticator>
      type: basic_auth # Use Basic Authentication for API calls
  users:
    # This section defines users and their respective credentials
    # The credentials will be used in the Basic Authentication scheme
    - name: user_1
      username: <username for an actual user in your API's backend>
      password_base64: <password for the specified user> # Passwords need to be base64 encoded
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above>
```

### Basic Authentication (with roles)
```YAML
iam:
  authenticators:
    - name: <your friendly name for this authenticator>
      type: basic_auth # Use Basic Authentication for API calls
  users:
    # This section defines users and their respective credentials
    # The credentials will be used in the Basic Authentication scheme
    #
    # `user_1` with role ROLE_USER
    - name: user_1
      default: true # Default user for `ROLE_USER`
      username: <username for an actual user in your API's backend>
      password_base64: <password for the specified user> # Passwords need to be base64 encoded
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above>
      roles:
        - ROLE_USER
    #
    # `user_2` with role ROLE_USER
    - name: user_2
      username: <username for an actual user in your API's backend>
      password_base64: <password for the specified user> # Passwords need to be base64 encoded
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above>
      roles:
        - ROLE_USER
    #
    # `admin_1` with role ROLE_ADMIN
    - name: admin_1
      default: true # Default user for `ROLE_ADMIN`
      username: <username for an actual user in your API's backend>
      password_base64: <password for the specified user> # Passwords need to be base64 encoded
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above>
      roles:
        - ROLE_ADMIN
    #
    # `admin_2` with role ROLE_ADMIN
    - name: admin_2
      username: <username for an actual user in your API's backend>
      password_base64: <password for the specified user> # Passwords need to be base64 encoded
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above>
      roles:
        - ROLE_ADMIN
```

## API key based authentication
The OpenAPI specification file (in the API catalog), specifies if the API uses API keys for authentication, and the exact location of the API key (query parameter, header, etc).

The environment.yml file provides specific values for the API key and can be specific for each user. Below is the format when using API keys.

```YAML
iam:
  authenticators:
    - name: <your friendly name for this authenticator>
      type: api_key # Use API key authentication for API calls
  users:
    # This section defines users and their respective API keys
    - name: user_1
      api_keys:
      - name: <friendly name for your API key for user_1>
        value: <your api key value>
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above>
```
If you using roles, the format is similar to the Basic Authentication example. You just need to use API key instead of username and password.

## Cookie based authentication
Below examples are applicable, when cookies are being used for user authentication.

### Use existing cookie values
Below example is applicable, when the cookie values are known *a priori*.

```YAML
iam:
  users:
  - name: user_1
    default: true # This user's credentials will be used for all authentication
    cookies:
    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive
      value: <Enter the cookie value>
```

### Extract cookie via API call (aka http_call)
If you use an API (or HTTP JSON forms) to acquire a authentication cookie in exchange for user credentials, you can use the `http_call` method.

This method requires you to provide the following:
- The HTTP URL of the API endpoint that returns the authentication cookie.
- The HTTP method to use when fetching the URL. Only `POST` & `GET` supported. If unspecified will use `POST`.
- The name/location of the username field that is sent in the login request's (JSON) body. This needs to be a JSON path expression.
- The name/location of the password field that is sent in the login request's (JSON) body. This needs to be a JSON path expression.
- The name of the cookie header in the JSON response, where the cookie is present.
- The username and base64 encoded password values for the `user_1` used in security tests.

Below is the syntax to extract cookies using a `http_call`.
```YAML
iam:
  authenticators:
    - name: <your friendly name for this authenticator. E.g. my_auth_cookie_extractor>
      type: http_call
      method: <POST | GET> # Defaults to POST if unspecified
      login_url: <Enter URL value. E.g. /login> # URL for HTTP request
      request_params:
        - name: username
          value: <JSON path expression. E.g. $$.user.username> #JSON path of username field.
        - name: password
          value: <JSON path expression. E.g. $$.user.password> #JSON path of password field
      #
      # JSON path expressions in the example shown above is representative of the
      # below JSON
      # {
      #   "user": {
      #             "username":"<value>",
      #             "password":"<value>"
      #           }
      # }
      #
      #
      # This section specifies how to extract the cookie from the HTTP response
      session_credential_extractors:
        - name: <your friendly name for this cookie extractor. E.g. my-cookies>
          type: cookies # Use cookie based authentication 
          location: headers # Location of the cookie is in the response headers
          header_name: Set-Cookie # Case sensitive name of the header. All cookies in the Set-Cookie header are extracted
  #
  #
  # This section specifies actual user information the test plan will use
  users:
    - name: user_1
      default: true # This user's credentials will be used to access all API endpoints requiring AuthN
      username: <user_id> # Specify the actual user id
      password_base64: <base64 password> # Specify the user's base64 encoded password.
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>
```

### Use existing cookie values (usage with roles)
Below example is applicable when you are running tests that involve multiple users belonging to different roles. 

There are two roles and three users in the below example, that require cookie values to be specified.

```YAML
iam:
  users:
  # This section defines users and their respective cookie based credentials
  #
  # `admin_1` with role ROLE_ADMIN
  - name: admin_1
    default: true # Default user for `ROLE_ADMIN`
    roles:
    - ROLE_ADMIN
    # Use the below cookie header for authentication
    cookies:
    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive
      value: <Enter the cookie value>
  #
  # `user_1` with role ROLE_USER
  - name: user_1
    default: true # Default user for `ROLE_USER`
    roles:
    - ROLE_USER
    cookies:
    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive
      value: <Enter the cookie value>
  #
  # `user_2` with role ROLE_USER
  - name: user_2
    roles:
    - ROLE_USER
    cookies:
    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive
      value: <Enter the cookie value>
```

### Extract cookie via API call (usage with roles)
Below example is applicable when you are running tests that involve multiple users belonging to different roles, and you want to extract authentication cookies for them

There are two roles and three users in the below example, that require cookie values to be extracted using the http_call.

```YAML
iam:
  authenticators:
    - name: <your friendly name for this authenticator. E.g. my_auth_cookie_extractor>
      type: http_call
      method: <POST | GET> # Defaults to POST if unspecified
      login_url: <Enter URL value. E.g. /login> # URL for HTTP request
      request_params:
        - name: username
          value: <JSON path expression. E.g. $$.user.username> #JSON path of username field.
        - name: password
          value: <JSON path expression. E.g. $$.user.password> #JSON path of password field
      #
      # This section specifies how to extract the cookie from the HTTP response
      session_credential_extractors:
        - name: <your friendly name for this cookie extractor. E.g. my-cookies>
          type: cookies # Use cookie based authentication 
          location: headers # Location of the cookie is in the response headers
          header_name: Set-Cookie # Case sensitive name of the header. All cookies in the Set-Cookie header are extracted.
  #
  #
  # This section specifies actual user information the test plan will use
  users:
    # `admin_1` with role ROLE_ADMIN
    - name: admin_1
      default: true # Default user for `ROLE_ADMIN`
      username: <user_id> # Specify the actual user id
      password_base64: <base64 password> # Specify the user's base64 encoded password.
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>
    #
    # `user_1` with role ROLE_USER
    - name: user_1
      default: true # Default user for `ROLE_USER`
      username: <user_id> # Specify the actual user id
      password_base64: <base64 password> # Specify the user's base64 encoded password.
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>
    #
    # `user_2` with role ROLE_USER
    - name: user_2
      username: <user_id> # Specify the actual user id
      password_base64: <base64 password> # Specify the user's base64 encoded password.
      # Below defines which authentication mechanism to use
      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>
```


## OAuth
Coming soon ...



[bearer-auth]: https://swagger.io/docs/specification/authentication/bearer-authentication/

