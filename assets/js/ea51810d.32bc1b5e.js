"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[233],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},u="Supported Authentication Methods",l={unversionedId:"tasks/authentication/supported-auth-methods",id:"tasks/authentication/supported-auth-methods",isDocsHomePage:!1,title:"Supported Authentication Methods",description:"The default authentication mechanism is Bearer Authentication, and the environment.yml file is auto-generated to use this method.",source:"@site/docs/tasks/authentication/supported-auth-methods.md",sourceDirName:"tasks/authentication",slug:"/tasks/authentication/supported-auth-methods",permalink:"/tasks/authentication/supported-auth-methods",editUrl:"https://github.com/levoai/docs/edit/main/docs/tasks/authentication/supported-auth-methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Providing Authentication for Tests",permalink:"/tasks/authentication/authn"},next:{title:"Providing Authorization Information for Authorization Abuse Tests",permalink:"/tasks/authentication/authz"}},c=[{value:"Bearer Tokens",id:"bearer-tokens",children:[],level:2},{value:"Login API / form based login (aka http_call)",id:"login-api--form-based-login-aka-http_call",children:[],level:2},{value:"Basic authentication",id:"basic-authentication",children:[],level:2},{value:"Cookie based authentication",id:"cookie-based-authentication",children:[],level:2},{value:"OAuth",id:"oauth",children:[],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supported-authentication-methods"},"Supported Authentication Methods"),(0,i.kt)("p",null,"The default authentication mechanism is ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Authentication"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file is auto-generated to use this method."),(0,i.kt)("p",null,"You can customize the authentication method to suit your needs."),(0,i.kt)("p",null,"Below are various authentication methods supported by levo, and the corresponding structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file, to properly activate the authentication method."),(0,i.kt)("p",null,"Please customize the auto generated ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file accordingly."),(0,i.kt)("h2",{id:"bearer-tokens"},"Bearer Tokens"),(0,i.kt)("p",null,"The default authentication mechanism is ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Authentication"),". You are required to provide\nvalid ",(0,i.kt)("inlineCode",{parentName:"p"},"bearer tokens")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"user_1")," in the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  users:\n  - name: user_1\n    default: true # This user's credentials will be used for all authentication\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n")),(0,i.kt)("h2",{id:"login-api--form-based-login-aka-http_call"},"Login API / form based login (aka http_call)"),(0,i.kt)("p",null,"If you use an API (or HTTP JSON forms) to acquire a authentication token (bearer token) in exchange for user\ncredentials, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"http_call")," method."),(0,i.kt)("p",null,"This method requires you to provide the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The login URL"),(0,i.kt)("li",{parentName:"ul"},"The key names for both the username and password values that are sent in the login request's POST (JSON) body."),(0,i.kt)("li",{parentName:"ul"},"The location in the login URL's JSON response, where the authentication token is present."),(0,i.kt)("li",{parentName:"ul"},"The username and base64 encoded password values for the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_1")," used in security tests.")),(0,i.kt)("p",null,"Below is the syntax to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"http_call")," based login."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  authenticators: # This section specifies how to extract an authentication token\n    - name: my_authenticator\n      type: http_call # Uses a POST request\n      login_url: /identity/api/auth/login # URL for POST request\n      username_key: <JSON key for username> # Key in POST request's JSON body that specifies the user value\n      password_key: <JSON key for password> # Key in POST request's JSON body that specifies the password value\n      session_credential_extractors: # This section specifies how to extract a token in the POST response\n        - name: access_token\n          type: bearer_token\n          location: <header | body> # Specifies the location to extract the token. Header or Body.\n          path: <JSON path expression> # In case the location is `body`, aJSON path expression to token in the response body\n  users: # This section specifies actual user information the test plan will use\n    - name: user_1\n      default: true # This user's credentials will be used to access all API endpoints requiring AuthN\n      username: <user_id>\n      password_base64: <base64 password> # Passwords need to be base64 encoded\n      authenticator: my_authenticator\n")),(0,i.kt)("h2",{id:"basic-authentication"},"Basic authentication"),(0,i.kt)("p",null,"Coming soon ..."),(0,i.kt)("h2",{id:"cookie-based-authentication"},"Cookie based authentication"),(0,i.kt)("p",null,"Coming soon ..."),(0,i.kt)("h2",{id:"oauth"},"OAuth"),(0,i.kt)("p",null,"Coming soon ..."))}h.isMDXComponent=!0}}]);