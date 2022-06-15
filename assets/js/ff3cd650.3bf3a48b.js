"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9301],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="API A2 - Broken Authentication",c={unversionedId:"OWASP-API-10/A2-BUA",id:"OWASP-API-10/A2-BUA",title:"API A2 - Broken Authentication",description:"BOLA",source:"@site/vulnerabilities/OWASP-API-10/A2-BUA.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A2-BUA",permalink:"/vulnerabilities/next/OWASP-API-10/A2-BUA",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API A1 - Broken Object Level Authorization",permalink:"/vulnerabilities/next/OWASP-API-10/A1-BOLA"},next:{title:"API A3 - Excessive Data Exposure",permalink:"/vulnerabilities/next/OWASP-API-10/A3-Excessive-Data-Exposure"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"What are specific examples?",id:"what-are-specific-examples",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What is the solution?",id:"what-is-the-solution",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-a2---broken-authentication"},"API A2 - Broken Authentication"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BOLA",src:n(7034).Z,width:"696",height:"351"})),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"Authentication mechanisms are often implemented incorrectly, allowing attackers to compromise authentication tokens, or to exploit implementation flaws to assume other user\u2019s identities."),(0,r.kt)("p",null,"Compromising a system\u2019s ability to identify the client/user, compromises API security overall."),(0,r.kt)("h2",{id:"what-are-specific-examples"},"What are specific examples?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Weak authentication that does not follow industry best practices."),(0,r.kt)("li",{parentName:"ul"},"Weak API keys that are not rotated."),(0,r.kt)("li",{parentName:"ul"},"Passwords that are weak, plain text, encrypted but poorly hashed, shared, or default passwords."),(0,r.kt)("li",{parentName:"ul"},"Authentication susceptible to brute force attacks and credential stuffing."),(0,r.kt)("li",{parentName:"ul"},"Credentials and keys included in URLs."),(0,r.kt)("li",{parentName:"ul"},"Lack of access token validation (including JWT validation)."),(0,r.kt)("li",{parentName:"ul"},"Unsigned or weakly signed non-expiring JWTs."),(0,r.kt)("li",{parentName:"ul"},"Unprotected APIs that are considered \u201cinternal\u201d.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A2"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"},"Authentication Cheat Sheet")),(0,r.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,r.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only for API endpoints that require authentication.")),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"The endpoint is subjected to a battery of authentication related tests, that probe for common weaknesses."),(0,r.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maintain a clear inventory of your API endpoints."),(0,r.kt)("li",{parentName:"ul"},"Clearly itemize APIs that require authentication and those that don't."),(0,r.kt)("li",{parentName:"ul"},"Use industry standard libraries for authentication, token generation, and password storage. Do not build your own."),(0,r.kt)("li",{parentName:"ul"},"Use multi-factor authentication (MFA)."),(0,r.kt)("li",{parentName:"ul"},"Use short-lived access tokens."),(0,r.kt)("li",{parentName:"ul"},"Use stricter rate-limiting for authentication, and implement lockout policies and weak password checks."),(0,r.kt)("li",{parentName:"ul"},"Continuously validate that your authentication mechanisms are working in pre-production and production.")))}h.isMDXComponent=!0},7034:function(e,t,n){t.Z=n.p+"assets/images/A2-BUA-020bd122a91cf0bdc53aee5de2674dd5.svg"}}]);