"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4279],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(r),d=i,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5289:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(3117),i=r(102),s=(r(7294),r(3905)),a=["components"],o={},c="Missing Strict-Transport-Security Header",l={unversionedId:"Baseline/strict-transport-security-header",id:"version-v1/Baseline/strict-transport-security-header",title:"Missing Strict-Transport-Security Header",description:"Missing HSTS",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/strict-transport-security-header.md",sourceDirName:"Baseline",slug:"/Baseline/strict-transport-security-header",permalink:"/vulnerabilities/v1/Baseline/strict-transport-security-header",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Session ID in URL (Via URL Rewrite)",permalink:"/vulnerabilities/v1/Baseline/session-id-in-url-rewrite"},next:{title:"Weak Authentication Method",permalink:"/vulnerabilities/v1/Baseline/weak-authentication-method"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],h={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"missing-strict-transport-security-header"},"Missing Strict-Transport-Security Header"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Missing HSTS",src:r(815).Z,width:"858",height:"1216"})),(0,s.kt)("h2",{id:"what-is-it"},"What is it?"),(0,s.kt)("p",null,"HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a API/server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL)."),(0,s.kt)("p",null,"HSTS is an IETF standards track protocol and is specified in ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6797"},"RFC 6797"),"."),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md"},"OWASP API TOP-10 A7"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html"},"HSTS Cheat Sheet")),(0,s.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,s.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,s.kt)("p",null,"This is applicable for all API endpoints when the ",(0,s.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,s.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,s.kt)("p",null,"Responses sent by the API server are analyzed for missing HSTS header."),(0,s.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,s.kt)("p",null,"Ensure that your API/server, load balancer, etc. is configured to enforce Strict-Transport-Security."))}d.isMDXComponent=!0},815:function(e,t,r){t.Z=r.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);