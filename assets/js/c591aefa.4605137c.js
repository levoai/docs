"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8770],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),s=(n(7294),n(3905)),a=["components"],o={},l="PII Disclosure In Response",c={unversionedId:"Baseline/pii-disclosure",id:"Baseline/pii-disclosure",title:"PII Disclosure In Response",description:"PII Disclosure In Response",source:"@site/vulnerabilities/Baseline/pii-disclosure.md",sourceDirName:"Baseline",slug:"/Baseline/pii-disclosure",permalink:"/vulnerabilities/next/Baseline/pii-disclosure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open/Unrestricted URL Redirect Via URL Query Parameter",permalink:"/vulnerabilities/next/Baseline/open-redirect"},next:{title:"Private IP Disclosure In Response",permalink:"/vulnerabilities/next/Baseline/private-ip-disclosure"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],f={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pii-disclosure-in-response"},"PII Disclosure In Response"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"PII Disclosure In Response",src:n(5570).Z,width:"858",height:"1216"})),(0,s.kt)("h2",{id:"what-is-it"},"What is it?"),(0,s.kt)("p",null,"The response contains Personally Identifiable Information (PII), such as credit card numbers, social security numbers (SSN), and similar sensitive data."),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/359.html"},"CWE-359")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://owasp.org/Top10/A04_2021-Insecure_Design/"},"OWASP Insecure Design"),"  ")),(0,s.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,s.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,s.kt)("p",null,"This is applicable for all API endpoints when the ",(0,s.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,s.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,s.kt)("p",null,"Responses from the API server are analyzed for the presence of sensitive information (PII)."),(0,s.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,s.kt)("p",null,"Verify if PII present in the response is justified by a legitimate business requirement. Ensure that the amount of PII being disclosed in the response is limited to serve the specific use case of the API endpoint."))}d.isMDXComponent=!0},5570:function(e,t,n){t.Z=n.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);