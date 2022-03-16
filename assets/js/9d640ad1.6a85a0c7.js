"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Providing Authentication for Tests",u={unversionedId:"concepts/authentication/authn-authz",id:"concepts/authentication/authn-authz",isDocsHomePage:!1,title:"Providing Authentication for Tests",description:"Levo's autogenerated Test Plans, evaluate API vulnerabilities related to Horizontal Authorization Abuse, and Vertical Authorization Abuse.",source:"@site/docs/concepts/authentication/authn-authz.md",sourceDirName:"concepts/authentication",slug:"/concepts/authentication/authn-authz",permalink:"/concepts/authentication/authn-authz",editUrl:"https://github.com/levoai/docs/edit/main/docs/concepts/authentication/authn-authz.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CLI - Test Runner",permalink:"/concepts/test-runner"},next:{title:"Supported Authentication Methods",permalink:"/concepts/authentication/supported-auth-methods"}},c=[{value:"How do I use <code>environment.yaml</code> file?",id:"how-do-i-use-environmentyaml-file",children:[],level:2},{value:"Are my <code>secrets</code> sent to Levo SaaS?",id:"are-my-secrets-sent-to-levo-saas",children:[],level:2},{value:"What is the structure of this autogenerated file?",id:"what-is-the-structure-of-this-autogenerated-file",children:[{value:"The API being tested has <em><code>no</code></em> granular role or scope information",id:"the-api-being-tested-has-no-granular-role-or-scope-information",children:[],level:3},{value:"The API being tested has granular role or scope information",id:"the-api-being-tested-has-granular-role-or-scope-information",children:[],level:3},{value:"Does Levo support other authentication methods?",id:"does-levo-support-other-authentication-methods",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"providing-authentication-for-tests"},"Providing Authentication for Tests"),(0,o.kt)("p",null,"Levo's autogenerated Test Plans, evaluate API vulnerabilities related to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal"},(0,o.kt)("inlineCode",{parentName:"a"},"Horizontal Authorization Abuse")),", and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Vertical"},(0,o.kt)("inlineCode",{parentName:"a"},"Vertical Authorization Abuse")),"."),(0,o.kt)("p",null,"In order to effectively access and test APIs for these vulnerabilities, Levo requires user ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," information."),(0,o.kt)("p",null,"This information can be provided in a secure, and structured manner via an ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.yaml")," file."),(0,o.kt)("h2",{id:"how-do-i-use-environmentyaml-file"},"How do I use ",(0,o.kt)("inlineCode",{parentName:"h2"},"environment.yaml")," file?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.yaml")," file is autogenerated per ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Plan"),", and needs to be completed with appropriate authentication/role information, prior to the execution of the Test Plan."),(0,o.kt)("p",null,"The completed file is provided as an argument to the CLI. The CLI uses the credentials to access the target APIs and evaluate their authentication and authorization posture."),(0,o.kt)("h2",{id:"are-my-secrets-sent-to-levo-saas"},"Are my ",(0,o.kt)("inlineCode",{parentName:"h2"},"secrets")," sent to Levo SaaS?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.yaml")," file contains ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets")," and is ",(0,o.kt)("strong",{parentName:"p"},"never")," sent to, or stored in Levo SaaS. This file is solely consumed by the CLI, and Levo SaaS does not have access to your secrets."),(0,o.kt)("p",null,"Please treat this file securely, and take all precautions necessary for handling secrets."),(0,o.kt)("h2",{id:"what-is-the-structure-of-this-autogenerated-file"},"What is the structure of this autogenerated file?"),(0,o.kt)("p",null,"Based on the nature of your APIs, the file may require credentials for more than one user (especially if your APIs have a lot of roles/scopes)."),(0,o.kt)("h3",{id:"the-api-being-tested-has-no-granular-role-or-scope-information"},"The API being tested has ",(0,o.kt)("em",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"em"},"no"))," granular role or scope information"),(0,o.kt)("p",null,"If the API endpoints you are testing have no role or scope information (used for granular authorization), then autogenerated file will have the below structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"iam:\n  users:\n  - name: user_1\n    default: true\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n  - name: user_2\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n")),(0,o.kt)("p",null,"The default authentication mechanism used by Levo is ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Authentication"),". You are required to provide\nvalid ",(0,o.kt)("inlineCode",{parentName:"p"},"bearer tokens")," for two users above (",(0,o.kt)("inlineCode",{parentName:"p"},"user_1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_2"),")."),(0,o.kt)("p",null,"If you are wondering why bearer tokens for two users are required, ",(0,o.kt)("inlineCode",{parentName:"p"},"user_1")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," user, that is used in most of the API testing."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"user_2")," specifies credentials for another user (at the same role level as ",(0,o.kt)("inlineCode",{parentName:"p"},"user_1"),"), and is used in ",(0,o.kt)("a",{parentName:"p",href:"/vulnerabilities/v1/OWASP-API-10/A1-BOLA"},(0,o.kt)("inlineCode",{parentName:"a"},"horizontal privilege escalation"))," tests."),(0,o.kt)("h3",{id:"the-api-being-tested-has-granular-role-or-scope-information"},"The API being tested has granular role or scope information"),(0,o.kt)("p",null,"This capability is currently not available and is coming soon"),(0,o.kt)("h3",{id:"does-levo-support-other-authentication-methods"},"Does Levo support other authentication methods?"),(0,o.kt)("p",null,"The next section describes support for various standard and custom authentication methods."))}d.isMDXComponent=!0}}]);