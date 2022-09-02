"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7775],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],s={},l="Cookie Without Secure Flag",c={unversionedId:"Baseline/cookie-without-secure-flag",id:"version-v1/Baseline/cookie-without-secure-flag",title:"Cookie Without Secure Flag",description:"Cookie Without Secure Flag",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/cookie-without-secure-flag.md",sourceDirName:"Baseline",slug:"/Baseline/cookie-without-secure-flag",permalink:"/vulnerabilities/v1/Baseline/cookie-without-secure-flag",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Cookie Poisoning Via Query/Body Parameters",permalink:"/vulnerabilities/v1/Baseline/cookie-poisoning"},next:{title:"Cross-Domain (CORS) Misconfiguration (Passive)",permalink:"/vulnerabilities/v1/Baseline/cross-domain-misconfiguration-passive"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],f={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cookie-without-secure-flag"},"Cookie Without Secure Flag"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cookie Without Secure Flag",src:n(815).Z,width:"858",height:"1216"})),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"The API endpoint or server is setting a cookie without the secure flag, which means that the cookie can be accessed via unencrypted connections."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/614.html"},"CWE-614")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes"},"Testing for Cookies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md"},"OWASP API TOP-10 A7"),"  ")),(0,o.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,o.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,o.kt)("p",null,"This is applicable for all API endpoints when the ",(0,o.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Responses sent by the API server are analyzed for the 'Set-Cookie' header without the 'Secure' flag."),(0,o.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,o.kt)("p",null,"Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information."))}h.isMDXComponent=!0},815:function(e,t,n){t.Z=n.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);