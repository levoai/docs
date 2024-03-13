"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2397],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return h}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],r={sidebar_position:2},u="Supported Authentication Methods",l={unversionedId:"security-testing/common-tasks/authn-authz/supported-auth-methods",id:"security-testing/common-tasks/authn-authz/supported-auth-methods",title:"Supported Authentication Methods",description:"The default authentication mechanism is Bearer Authentication, and the environment.yml file is auto-generated to use this method.",source:"@site/docs/security-testing/common-tasks/authn-authz/supported-auth-methods.md",sourceDirName:"security-testing/common-tasks/authn-authz",slug:"/security-testing/common-tasks/authn-authz/supported-auth-methods",permalink:"/security-testing/common-tasks/authn-authz/supported-auth-methods",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-testing/common-tasks/authn-authz/supported-auth-methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Providing Authentication for Tests",permalink:"/security-testing/common-tasks/authn-authz/authn"},next:{title:"Providing Authorization Information for Authorization Abuse Tests",permalink:"/security-testing/common-tasks/authn-authz/authz"}},c={},h=[{value:"Bearer Tokens",id:"bearer-tokens",level:2},{value:"Login API / form based login (aka http_call)",id:"login-api--form-based-login-aka-http_call",level:2},{value:"Basic Authentication",id:"basic-authentication",level:2},{value:"Basic Authentication (no roles)",id:"basic-authentication-no-roles",level:3},{value:"Basic Authentication (with roles)",id:"basic-authentication-with-roles",level:3},{value:"API key based authentication",id:"api-key-based-authentication",level:2},{value:"Cookie based authentication",id:"cookie-based-authentication",level:2},{value:"Use existing cookie values",id:"use-existing-cookie-values",level:3},{value:"Extract cookie via API call (aka http_call)",id:"extract-cookie-via-api-call-aka-http_call",level:3},{value:"Use existing cookie values (usage with roles)",id:"use-existing-cookie-values-usage-with-roles",level:3},{value:"Extract cookie via API call (usage with roles)",id:"extract-cookie-via-api-call-usage-with-roles",level:3},{value:"OAuth",id:"oauth",level:2},{value:"Password Grant",id:"password-grant",level:3},{value:"Client Credentials Grant",id:"client-credentials-grant",level:3}],p={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported-authentication-methods"},"Supported Authentication Methods"),(0,i.kt)("p",null,"The default authentication mechanism is ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Authentication"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file is auto-generated to use this method."),(0,i.kt)("p",null,"You can customize the authentication method to suit your needs."),(0,i.kt)("p",null,"Below are various authentication methods supported by levo, and the corresponding structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file, to properly activate the authentication method."),(0,i.kt)("p",null,"Please customize the auto generated ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file accordingly."),(0,i.kt)("h2",{id:"bearer-tokens"},"Bearer Tokens"),(0,i.kt)("p",null,"The default authentication mechanism is ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Authentication"),". You are required to provide\nvalid ",(0,i.kt)("inlineCode",{parentName:"p"},"bearer tokens")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"user_1")," in the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  users:\n  - name: user_1\n    default: true # This user's credentials will be used for all authn-authz\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n")),(0,i.kt)("h2",{id:"login-api--form-based-login-aka-http_call"},"Login API / form based login (aka http_call)"),(0,i.kt)("p",null,"If you use an API (or HTTP JSON forms) to acquire a authentication token (bearer token) in exchange for user credentials, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"http_call")," method."),(0,i.kt)("p",null,"This method requires you to provide the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The login URL"),(0,i.kt)("li",{parentName:"ul"},"The HTTP method to use when fetching the URL. Only ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," supported. If unspecified will use ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),"."),(0,i.kt)("li",{parentName:"ul"},"The key names for both the username and password values that are sent in the login request's POST (JSON) body."),(0,i.kt)("li",{parentName:"ul"},"The location in the login URL's JSON response, where the authentication token is present."),(0,i.kt)("li",{parentName:"ul"},"The username and base64 encoded password values for the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_1")," used in security tests.")),(0,i.kt)("p",null,"Below is the syntax to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"http_call")," based login."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  #\n  #\n  # This section specifies how to extract an authn-authz token\n  authenticators:\n    - name:  <your friendly name for this authenticator. E.g. my_authenticator>\n      type: http_call # Makes a HTTP request using the specified method\n      method: <POST | GET> # Defaults to POST if unspecified\n      login_url: <Enter URL value. E.g. /identity/api/auth/login> # URL for HTTP request\n      username_key: <JSON key for username> # Key in HTTP request's JSON body that specifies the user value\n      password_key: <JSON key for password> # Key in HTTP request's JSON body that specifies the password value\n      #\n      #\n      # This section specifies how to extract a token in the HTTP response\n      session_credential_extractors:\n        - name: access_token\n          type: bearer_token\n          location: <header | body> # Specifies the location to extract the token. Header or Body.\n          path: <JSON path expression> # In case the location is `body`, a JSON path expression to the token in the response body\n  #\n  #\n  # This section specifies actual user information the test plan will use\n  users:\n    - name: user_1\n      default: true # This user's credentials will be used to access all API endpoints requiring AuthN\n      username: <user_id>\n      password_base64: <base64 password> # Passwords need to be base64 encoded\n      authenticator: <friendly name of the authenticator specified above. E.g. my_authenticator>\n")),(0,i.kt)("h2",{id:"basic-authentication"},"Basic Authentication"),(0,i.kt)("p",null,"Below are format examples for ",(0,i.kt)("inlineCode",{parentName:"p"},"Basic Authentication")," with and without ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," information."),(0,i.kt)("h3",{id:"basic-authentication-no-roles"},"Basic Authentication (no roles)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators:\n    - name: <your friendly name for this authenticator>\n      type: basic_auth # Use Basic Authentication for API calls\n  users:\n    # This section defines users and their respective credentials\n    # The credentials will be used in the Basic Authentication scheme\n    - name: user_1\n      username: <username for an actual user in your API's backend>\n      password_base64: <password for the specified user> # Passwords need to be base64 encoded\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above>\n")),(0,i.kt)("h3",{id:"basic-authentication-with-roles"},"Basic Authentication (with roles)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators:\n    - name: <your friendly name for this authenticator>\n      type: basic_auth # Use Basic Authentication for API calls\n  users:\n    # This section defines users and their respective credentials\n    # The credentials will be used in the Basic Authentication scheme\n    #\n    # `user_1` with role ROLE_USER\n    - name: user_1\n      default: true # Default user for `ROLE_USER`\n      username: <username for an actual user in your API's backend>\n      password_base64: <password for the specified user> # Passwords need to be base64 encoded\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above>\n      roles:\n        - ROLE_USER\n    #\n    # `user_2` with role ROLE_USER\n    - name: user_2\n      username: <username for an actual user in your API's backend>\n      password_base64: <password for the specified user> # Passwords need to be base64 encoded\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above>\n      roles:\n        - ROLE_USER\n    #\n    # `admin_1` with role ROLE_ADMIN\n    - name: admin_1\n      default: true # Default user for `ROLE_ADMIN`\n      username: <username for an actual user in your API's backend>\n      password_base64: <password for the specified user> # Passwords need to be base64 encoded\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above>\n      roles:\n        - ROLE_ADMIN\n    #\n    # `admin_2` with role ROLE_ADMIN\n    - name: admin_2\n      username: <username for an actual user in your API's backend>\n      password_base64: <password for the specified user> # Passwords need to be base64 encoded\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above>\n      roles:\n        - ROLE_ADMIN\n")),(0,i.kt)("h2",{id:"api-key-based-authentication"},"API key based authentication"),(0,i.kt)("p",null,"The OpenAPI specification file (in the API catalog), specifies if the API uses API keys for authentication, and the exact location of the API key (query parameter, header, etc)."),(0,i.kt)("p",null,"The environment.yml file provides specific values for the API key and can be specific for each user. Below is the format when using API keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators:\n    - name: <your friendly name for this authenticator>\n      type: api_key # Use API key authn-authz for API calls\n  users:\n    # This section defines users and their respective API keys\n    - name: user_1\n      api_keys:\n      - name: <friendly name for your API key for user_1>\n        value: <your api key value>\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above>\n")),(0,i.kt)("p",null,"If you using roles, the format is similar to the Basic Authentication example. You just need to use API key instead of username and password."),(0,i.kt)("h2",{id:"cookie-based-authentication"},"Cookie based authentication"),(0,i.kt)("p",null,"Below examples are applicable, when cookies are being used for user authentication."),(0,i.kt)("h3",{id:"use-existing-cookie-values"},"Use existing cookie values"),(0,i.kt)("p",null,"Below example is applicable, when the cookie values are known ",(0,i.kt)("em",{parentName:"p"},"a priori"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  users:\n  - name: user_1\n    default: true # This user's credentials will be used for all authn-authz\n    cookies:\n    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive\n      value: <Enter the cookie value>\n")),(0,i.kt)("h3",{id:"extract-cookie-via-api-call-aka-http_call"},"Extract cookie via API call (aka http_call)"),(0,i.kt)("p",null,"If you use an API (or HTTP JSON forms) to acquire a authentication cookie in exchange for user credentials, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"http_call")," method."),(0,i.kt)("p",null,"This method requires you to provide the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The HTTP URL of the API endpoint that returns the authentication cookie."),(0,i.kt)("li",{parentName:"ul"},"The HTTP method to use when fetching the URL. Only ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," supported. If unspecified will use ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),"."),(0,i.kt)("li",{parentName:"ul"},"The name/location of the username field that is sent in the login request's (JSON) body. This needs to be a JSON path expression."),(0,i.kt)("li",{parentName:"ul"},"The name/location of the password field that is sent in the login request's (JSON) body. This needs to be a JSON path expression."),(0,i.kt)("li",{parentName:"ul"},"The name of the cookie header in the JSON response, where the cookie is present."),(0,i.kt)("li",{parentName:"ul"},"The username and base64 encoded password values for the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_1")," used in security tests.")),(0,i.kt)("p",null,"Below is the syntax to extract cookies using a ",(0,i.kt)("inlineCode",{parentName:"p"},"http_call"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'iam:\n  authenticators:\n    - name: <your friendly name for this authenticator. E.g. my_auth_cookie_extractor>\n      type: http_call\n      method: <POST | GET> # Defaults to POST if unspecified\n      login_url: <Enter URL value. E.g. /login> # URL for HTTP request\n      request_params:\n        - name: username\n          value: <JSON path expression. E.g. $$.user.username> #JSON path of username field.\n        - name: password\n          value: <JSON path expression. E.g. $$.user.password> #JSON path of password field\n      #\n      # JSON path expressions in the example shown above is representative of the\n      # below JSON\n      # {\n      #   "user": {\n      #             "username":"<value>",\n      #             "password":"<value>"\n      #           }\n      # }\n      #\n      #\n      # This section specifies how to extract the cookie from the HTTP response\n      session_credential_extractors:\n        - name: <your friendly name for this cookie extractor. E.g. my-cookies>\n          type: cookies # Use cookie based authn-authz \n          location: headers # Location of the cookie is in the response headers\n          header_name: Set-Cookie # Case sensitive name of the header. All cookies in the Set-Cookie header are extracted\n  #\n  #\n  # This section specifies actual user information the test plan will use\n  users:\n    - name: user_1\n      default: true # This user\'s credentials will be used to access all API endpoints requiring AuthN\n      username: <user_id> # Specify the actual user id\n      password_base64: <base64 password> # Specify the user\'s base64 encoded password.\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>\n')),(0,i.kt)("h3",{id:"use-existing-cookie-values-usage-with-roles"},"Use existing cookie values (usage with roles)"),(0,i.kt)("p",null,"Below example is applicable when you are running tests that involve multiple users belonging to different roles. "),(0,i.kt)("p",null,"There are two roles and three users in the below example, that require cookie values to be specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  users:\n  # This section defines users and their respective cookie based credentials\n  #\n  # `admin_1` with role ROLE_ADMIN\n  - name: admin_1\n    default: true # Default user for `ROLE_ADMIN`\n    roles:\n    - ROLE_ADMIN\n    # Use the below cookie header for authn-authz\n    cookies:\n    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive\n      value: <Enter the cookie value>\n  #\n  # `user_1` with role ROLE_USER\n  - name: user_1\n    default: true # Default user for `ROLE_USER`\n    roles:\n    - ROLE_USER\n    cookies:\n    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive\n      value: <Enter the cookie value>\n  #\n  # `user_2` with role ROLE_USER\n  - name: user_2\n    roles:\n    - ROLE_USER\n    cookies:\n    - name: <Enter exact cookie name. E.g. JSESSIONID> # Cookie is case sensitive\n      value: <Enter the cookie value>\n")),(0,i.kt)("h3",{id:"extract-cookie-via-api-call-usage-with-roles"},"Extract cookie via API call (usage with roles)"),(0,i.kt)("p",null,"Below example is applicable when you are running tests that involve multiple users belonging to different roles, and you want to extract authentication cookies for them"),(0,i.kt)("p",null,"There are two roles and three users in the below example, that require cookie values to be extracted using the http_call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators:\n    - name: <your friendly name for this authenticator. E.g. my_auth_cookie_extractor>\n      type: http_call\n      method: <POST | GET> # Defaults to POST if unspecified\n      login_url: <Enter URL value. E.g. /login> # URL for HTTP request\n      request_params:\n        - name: username\n          value: <JSON path expression. E.g. $$.user.username> #JSON path of username field.\n        - name: password\n          value: <JSON path expression. E.g. $$.user.password> #JSON path of password field\n      #\n      # This section specifies how to extract the cookie from the HTTP response\n      session_credential_extractors:\n        - name: <your friendly name for this cookie extractor. E.g. my-cookies>\n          type: cookies # Use cookie based authn-authz \n          location: headers # Location of the cookie is in the response headers\n          header_name: Set-Cookie # Case sensitive name of the header. All cookies in the Set-Cookie header are extracted.\n  #\n  #\n  # This section specifies actual user information the test plan will use\n  users:\n    # `admin_1` with role ROLE_ADMIN\n    - name: admin_1\n      default: true # Default user for `ROLE_ADMIN`\n      username: <user_id> # Specify the actual user id\n      password_base64: <base64 password> # Specify the user's base64 encoded password.\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>\n    #\n    # `user_1` with role ROLE_USER\n    - name: user_1\n      default: true # Default user for `ROLE_USER`\n      username: <user_id> # Specify the actual user id\n      password_base64: <base64 password> # Specify the user's base64 encoded password.\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>\n    #\n    # `user_2` with role ROLE_USER\n    - name: user_2\n      username: <user_id> # Specify the actual user id\n      password_base64: <base64 password> # Specify the user's base64 encoded password.\n      # Below defines which authn-authz mechanism to use\n      authenticator: <friendly name of the authenticator specified above. E.g. my_auth_cookie_extractor>\n")),(0,i.kt)("h2",{id:"oauth"},"OAuth"),(0,i.kt)("p",null,"Below methods describe how ",(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/access-tokens/"},"access tokens")," can be extracted using the OAuth protocol."),(0,i.kt)("h3",{id:"password-grant"},"Password Grant"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/access-tokens/password-grant/"},"Password grant")," enables Levo's Test Plans to exchange the user\u2019s username and password for an access token."),(0,i.kt)("p",null,"This method requires you to provide the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The URL of the token generation API endpoint"),(0,i.kt)("li",{parentName:"ul"},"The URL of the refresh token generation API endpoint (optional)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"username")," of the user, for whom the token is being generated"),(0,i.kt)("li",{parentName:"ul"},"The base64 encoded ",(0,i.kt)("em",{parentName:"li"},"password")," of the user, for whom the token is being generated"),(0,i.kt)("li",{parentName:"ul"},"A list of ",(0,i.kt)("em",{parentName:"li"},"scopes")," for the user (optional)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Client ID"),", if it is required by your OAuth server (optional)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Client Secret"),", if it is required by your OAuth server (optional)")),(0,i.kt)("p",null,"Below is the syntax to enable ",(0,i.kt)("em",{parentName:"p"},"Password Grant"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators:\n    - name: <Friendly name for this authenticator. E.g. oauth_2>\n      type: oauth2 # Use OAuth protocol\n      grant_type: password\n      token_url: <Enter the URL for the token generation endpoint. E.g. https://my-oauth/oauth/access_token>\n      method: POST\n      client_id: <Enter your client ID. E.g. 23lkjlekfjlskd90> # Optional field\n      client_secret: <Enter your client secret. E.g. UYT9239FRE> # Optional field\n      #\n      # This section specifies how to extract the access token from the HTTP response\n      session_credential_extractors:\n        - name: access-token\n          type: bearer_token\n          location: body\n          path: $$.access_token # JSON path expression to the location of the access token in the response. Do not modify unless different from OAuth defaults\n  #\n  #\n  # This section specifies actual user information the test plan will use\n  users:\n    - name: user_1\n      default: true # This user's credentials will be used for all authn-authz\n      username: <Enter the username for whom you want to extract the access token>\n      password_base64: <base64 password> # Passwords need to be base64 encoded\n      scopes: # Optional field with a list of scopes\n      #  E.g. - api.read\n      #  E.g. - api.write\n      authenticator: <friendly name of the authenticator specified above. E.g. oauth_2>\n")),(0,i.kt)("p",null,"If using roles, please follow the ",(0,i.kt)("a",{parentName:"p",href:"#extract-cookie-via-api-call-usage-with-roles"},"cookie extractor with roles")," example above, and modify appropriately."),(0,i.kt)("h3",{id:"client-credentials-grant"},"Client Credentials Grant"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/"},"Client Credentials Grant")," is used for service-to-service API authentication. Use this method when testing internal APIs that do not require end-user authentication, but require service-to-service authentication."),(0,i.kt)("p",null,"This method requires you to provide the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The URL of the token generation API endpoint"),(0,i.kt)("li",{parentName:"ul"},"The URL of the refresh token generation API endpoint (optional)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Client ID"),", if it is required by your OAuth server"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Client Secret"),", if it is required by your OAuth server"),(0,i.kt)("li",{parentName:"ul"},"A list of ",(0,i.kt)("em",{parentName:"li"},"scopes")," for the user (optional)")),(0,i.kt)("p",null,"Below is the syntax to enable ",(0,i.kt)("em",{parentName:"p"},"Client Credentials Grant"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators:\n    - name: <Friendly name for this authenticator. E.g. oauth_2>\n      type: oauth2 # Use OAuth protocol\n      token_url: <Enter the URL for the token generation endpoint. E.g. https://my-oauth/oauth/access_token>\n      grant_type: client_credential\n      method: POST\n      client_id: <Enter your client ID. E.g. 23lkjlekfjlskd90>\n      client_secret: <Enter your client secret. E.g. UYT9239FRE>\n      #\n      # This section specifies how to extract the access token from the HTTP response\n      session_credential_extractors:\n        - name: access-token\n          type: bearer_token\n          location: body\n          path: $$.access_token # JSON path expression to the location of the access token in the response. Do not modify unless different from OAuth defaults\n  #\n  #\n  # This section specifies actual user information the test plan will use\n  users:\n    - name: user_1\n      default: true # This user's credentials will be used for all authn-authz\n      scopes: # Optional field with a list of scopes\n      #  E.g. - api.read\n      #  E.g. - api.write\n      authenticator: <friendly name of the authenticator specified above. E.g. oauth_2>\n")),(0,i.kt)("p",null,"If using roles, please follow the ",(0,i.kt)("a",{parentName:"p",href:"#extract-cookie-via-api-call-usage-with-roles"},"cookie extractor with roles")," example above, and modify appropriately."))}d.isMDXComponent=!0}}]);