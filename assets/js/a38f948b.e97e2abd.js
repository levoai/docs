"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9811],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?i.createElement(f,o(o({ref:t},u),{},{components:r})):i.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3990:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=r(3117),a=r(102),n=(r(7294),r(3905)),o=["components"],s={sidebar_position:4,title:"API A4 - Rate Limits & Resource Controls | Levo.ai"},l="API A4 - Lack of Resources and Rate Limits",c={unversionedId:"OWASP-API-10/A4-Rate-Limits",id:"version-v1/OWASP-API-10/A4-Rate-Limits",title:"API A4 - Rate Limits & Resource Controls | Levo.ai",description:"RATE-LIMITS",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-API-10/A4-Rate-Limits.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A4-Rate-Limits",permalink:"/vulnerabilities/v1/OWASP-API-10/A4-Rate-Limits",draft:!1,tags:[],version:"v1",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"API A4 - Rate Limits & Resource Controls | Levo.ai"},sidebar:"version-v1/tutorialSidebar",previous:{title:"API A3 - Excessive Data Exposure",permalink:"/vulnerabilities/v1/OWASP-API-10/A3-Excessive-Data-Exposure"},next:{title:"API A5 - Broken Function Level Authorization | Levo.ai",permalink:"/vulnerabilities/v1/OWASP-API-10/A5-BFLA"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"What are specific examples?",id:"what-are-specific-examples",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-a4---lack-of-resources-and-rate-limits"},"API A4 - Lack of Resources and Rate Limits"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RATE-LIMITS",src:r(2118).Z,width:"609",height:"300"})),(0,n.kt)("h2",{id:"what-is-it"},"What is it?"),(0,n.kt)("p",null,"APIs need to restrict the size and/or the number of resources that can be requested by the client/user."),(0,n.kt)("p",null,"Lack of such controls lead to Denial of Service (DoS), degraded performance, and authentication flaws like brute force."),(0,n.kt)("h2",{id:"what-are-specific-examples"},"What are specific examples?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attackers overload the API by sending more requests than it can handle, causing degraded performance or complete Denial of Service."),(0,n.kt)("li",{parentName:"ul"},"The size of the requests or the size/value of certain fields in them, leads to degraded performance or complete Denial of Service. For example, API endpoints that accept an unrestricted page size, as a query parameter."),(0,n.kt)("li",{parentName:"ul"},"\u201cZip bombs\u201d, archive files that have been designed so that unpacking them takes excessive amount of resources and overloads the API.")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A4"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/architecture/rate-limiting-strategies-techniques"},"Rate Limiting - Best Practices")),(0,n.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,n.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Applicable to all API endpoints.")),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The endpoint is accessed at increasingly high frequencies to test for the absence of rate limit controls."),(0,n.kt)("li",{parentName:"ul"},"Based on the structure of the endpoint, certain strategic fields (e.g. page key, limit key, etc.) are set to large values, attempting to cause degraded performance or complete Denial of Service.")),(0,n.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define proper rate limiting for all endpoints by using industry standard frameworks."),(0,n.kt)("li",{parentName:"ul"},"Limit payload sizes."),(0,n.kt)("li",{parentName:"ul"},"Limit maximum values for strategic query fields like ",(0,n.kt)("inlineCode",{parentName:"li"},"page size"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"limit"),", etc."),(0,n.kt)("li",{parentName:"ul"},"Tailor the rate limiting to be match what API methods, clients, or addresses need or should be allowed to get."),(0,n.kt)("li",{parentName:"ul"},"Add checks on compression ratios."),(0,n.kt)("li",{parentName:"ul"},"Define limits for container resources.")))}m.isMDXComponent=!0},2118:function(e,t,r){t.Z=r.p+"assets/images/A4-Rate-Limits-e2e36656e2904e1c6b3ad6c0fa4e91f1.svg"}}]);