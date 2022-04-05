"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4734],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],a={sidebar_position:5},l="API A5 - Broken Function Level Authorization",c={unversionedId:"OWASP-API-10/A5-BFLA",id:"OWASP-API-10/A5-BFLA",isDocsHomePage:!1,title:"API A5 - Broken Function Level Authorization",description:"BFLA",source:"@site/vulnerabilities/OWASP-API-10/A5-BFLA.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A5-BFLA",permalink:"/vulnerabilities/next/OWASP-API-10/A5-BFLA",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"API A4 - Lack of Resources and Rate Limits",permalink:"/vulnerabilities/next/OWASP-API-10/A4-Rate-Limits"},next:{title:"API A6 - Mass Assignment",permalink:"/vulnerabilities/next/OWASP-API-10/A6-Mass-Assignment"}},u=[{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Test case FAQs",id:"test-case-faqs",children:[{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",children:[],level:3},{value:"How does it work?",id:"how-does-it-work",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"Test sequence for roles",id:"test-sequence-for-roles",children:[],level:4},{value:"Test sequence for scopes",id:"test-sequence-for-scopes",children:[],level:4}],level:3},{value:"Success/Failure indications",id:"successfailure-indications",children:[],level:3},{value:"What is the solution?",id:"what-is-the-solution",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-a5---broken-function-level-authorization"},"API A5 - Broken Function Level Authorization"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BFLA",src:n(6822).Z})),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"Authorization is the process where requests to access a particular resource should be granted or denied. Authorization determines which functionality and data the logged in user (or Principal) may access."),(0,o.kt)("p",null,"Vertical access control mechanisms restrict access to sensitive functions based on the types of users."),(0,o.kt)("p",null,"With vertical access controls, different types of users have access to different application functions. For example, an administrator might be able to modify or delete any user's account, while an ordinary user has no access to these actions."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Broken Function Level Authorization")," is a manifestation of suboptimal vertical access control rules."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Vertical"},"Vertical Authorization Abuse")),(0,o.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,o.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,o.kt)("p",null,"Only for API endpoints that require authentication, and which have either a) role definitions, or b) ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scope")," definitions (scopes defined in JWT)."),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Roles or scope sets are defined as part of the API catalog, via either ",(0,o.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scope")," definitions in the OpenAPI specification, or via the environment file."),(0,o.kt)("li",{parentName:"ul"},"If using roles, the environment file should specify the which roles are allowed to access each API endpoint defined in the catalog"),(0,o.kt)("li",{parentName:"ul"},"For every role or scope set defined, authentication details for a corresponding user must be provided, via the environment file."),(0,o.kt)("li",{parentName:"ul"},"Optional definition of fixtures that describe specific resources that belong to each user. Definition of these fixtures improves the coverage level of tests (deeper test coverage achieved with fixture data)."),(0,o.kt)("li",{parentName:"ul"},"Optional definition of other input parameters for the API endpoint, to be configured via fixtures (deeper test coverage achieved with fixture data).")),(0,o.kt)("h4",{id:"test-sequence-for-roles"},"Test sequence for roles"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each allowed role for an API endpoint gets a dedicated test case."),(0,o.kt)("li",{parentName:"ol"},"The API endpoint is first accessed with a user belonging to the allowed role. If this access fails, the test case execution is aborted as a failure."),(0,o.kt)("li",{parentName:"ol"},"For each disallowed role for the API endpoint under test, a user belonging to the disallowed role is used to access the API endpoint. If the any of the access attempts succeed, the test case results in a failure.\nIf none of the access attempts succeed, the test case results in a pass.")),(0,o.kt)("h4",{id:"test-sequence-for-scopes"},"Test sequence for scopes"),(0,o.kt)("p",null,"Scope based testing is coming soon."),(0,o.kt)("h3",{id:"successfailure-indications"},"Success/Failure indications"),(0,o.kt)("p",null,"The test case relies on the API endpoint's response status code to determine success or failure of the access attempt. Usually ",(0,o.kt)("inlineCode",{parentName:"p"},"403 Forbidden")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," indicates access failure.\nBut in some cases the API might choose to return ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found")," or other codes to indicate failure."),(0,o.kt)("p",null,"If the endpoint returns failure codes other than ",(0,o.kt)("inlineCode",{parentName:"p"},"403")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"401"),", it might be hard to identify a real failure from a resource not found issue. For example, when the endpoint returns ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found"),",\nwe cannot differentiate if this is due to lack of authorization or if the requested resource is actually not found."),(0,o.kt)("p",null,"If fixture definitions that clearly define valid resources (that belong to the users provided in the environment file), were provided, the test case can clearly distinguish between the condition mentioned\nabove."),(0,o.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deny all access by default."),(0,o.kt)("li",{parentName:"ul"},"Only allow operations to users belonging to the appropriate role(s) or possessing the appropriate scope(s).")))}d.isMDXComponent=!0},6822:function(e,t,n){t.Z=n.p+"assets/images/A5-BFLA-fc616047295da1ac7c41413f028f641a.svg"}}]);