"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1571],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1816:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="API A2 - Broken Authentication",c={unversionedId:"OWASP-API-10/A2-BUA",id:"version-v1/OWASP-API-10/A2-BUA",isDocsHomePage:!1,title:"API A2 - Broken Authentication",description:"BOLA",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-API-10/A2-BUA.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A2-BUA",permalink:"/vulnerabilities/v1/OWASP-API-10/A2-BUA",tags:[],version:"v1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-v1/tutorialSidebar",previous:{title:"API A1 - Broken Object Level Authorization",permalink:"/vulnerabilities/v1/OWASP-API-10/A1-BOLA"},next:{title:"API A3 - Excessive Data Exposure",permalink:"/vulnerabilities/v1/OWASP-API-10/A3-Excessive-Data-Exposure"}},u=[{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"What are specific examples?",id:"what-are-specific-examples",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Test case FAQs",id:"test-case-faqs",children:[{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",children:[],level:3}],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"What is the solution?",id:"what-is-the-solution",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-a2---broken-authentication"},"API A2 - Broken Authentication"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BOLA",src:n(8932).Z})),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Authentication mechanisms are often implemented incorrectly, allowing attackers to compromise authentication tokens, or to exploit implementation flaws to assume other user\u2019s identities."),(0,a.kt)("p",null,"Compromising a system\u2019s ability to identify the client/user, compromises API security overall."),(0,a.kt)("h2",{id:"what-are-specific-examples"},"What are specific examples?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Weak authentication that does not follow industry best practices."),(0,a.kt)("li",{parentName:"ul"},"Weak API keys that are not rotated."),(0,a.kt)("li",{parentName:"ul"},"Passwords that are weak, plain text, encrypted but poorly hashed, shared, or default passwords."),(0,a.kt)("li",{parentName:"ul"},"Authentication susceptible to brute force attacks and credential stuffing."),(0,a.kt)("li",{parentName:"ul"},"Credentials and keys included in URLs."),(0,a.kt)("li",{parentName:"ul"},"Lack of access token validation (including JWT validation)."),(0,a.kt)("li",{parentName:"ul"},"Unsigned or weakly signed non-expiring JWTs."),(0,a.kt)("li",{parentName:"ul"},"Unprotected APIs that are considered \u201cinternal\u201d.")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A2"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"},"Authentication Cheat Sheet")),(0,a.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,a.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only for API endpoints that require authentication.")),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"The endpoint is subjected to a battery of authentication related tests, that probe for common weaknesses."),(0,a.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maintain a clear inventory of your API endpoints."),(0,a.kt)("li",{parentName:"ul"},"Clearly itemize APIs that require authentication and those that don't."),(0,a.kt)("li",{parentName:"ul"},"Use industry standard libraries for authentication, token generation, and password storage. Do not build your own."),(0,a.kt)("li",{parentName:"ul"},"Use multi-factor authentication (MFA)."),(0,a.kt)("li",{parentName:"ul"},"Use short-lived access tokens."),(0,a.kt)("li",{parentName:"ul"},"Use stricter rate-limiting for authentication, and implement lockout policies and weak password checks."),(0,a.kt)("li",{parentName:"ul"},"Continuously validate that your authentication mechanisms are working in pre-production and production.")))}d.isMDXComponent=!0},8932:function(e,t,n){t.Z=n.p+"assets/images/A2-BUA-020bd122a91cf0bdc53aee5de2674dd5.svg"}}]);