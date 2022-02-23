"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5269],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8465:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},p="Security Vulnerability Guide",s={unversionedId:"guide",id:"version-v1/guide",isDocsHomePage:!1,title:"Security Vulnerability Guide",description:"This section lists important vulnerabilities applicable to modern API driven applications.",source:"@site/vulnerabilities_versioned_docs/version-v1/guide.md",sourceDirName:".",slug:"/guide",permalink:"/vulnerabilities/v1/guide",tags:[],version:"v1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-v1/tutorialSidebar",next:{title:"API A1 - Broken Object Level Authorization",permalink:"/vulnerabilities/v1/OWASP-API-10/A1-BOLA"}},m=[{value:"OWASP API Top 10",id:"owasp-api-top-10",children:[],level:3},{value:"OWASP Web Top 10",id:"owasp-web-top-10",children:[],level:3},{value:"Miscellaneous",id:"miscellaneous",children:[],level:3}],d={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-vulnerability-guide"},"Security Vulnerability Guide"),(0,i.kt)("p",null,"This section lists important vulnerabilities applicable to modern API driven applications."),(0,i.kt)("h3",{id:"owasp-api-top-10"},"OWASP API Top 10"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rank"),(0,i.kt)("th",{parentName:"tr",align:null},"Vulnerability"),(0,i.kt)("th",{parentName:"tr",align:null},"CWE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-API-10/A1-BOLA"},"Broken Object Level Authorization")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/639.html"},"639"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-API-10/A2-BUA"},"Broken Authentication")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/287.html"},"287"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-API-10/A4-Rate-Limits"},"Lack of Resources and Rate Limits")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/770.html"},"770"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-API-10/A5-BFLA"},"Broken Function Level Authorization")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/1220.html"},"1220"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A8"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-API-10/A8-Injection"},"Injection")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/89.html"},"89"),", ",(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/77.html"},"77"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"owasp-web-top-10"},"OWASP Web Top 10"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rank"),(0,i.kt)("th",{parentName:"tr",align:null},"Vulnerability"),(0,i.kt)("th",{parentName:"tr",align:null},"CWE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A10"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-WEB-10/A10-SSRF"},"Server Side Request Forgery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/918.html"},"918"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"This section lists issues related to API security and resilience, but which cannot be purely categorized as security vulnerabilities."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Issue"),(0,i.kt)("th",{parentName:"tr",align:null},"CWE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/Miscellaneous/schema-conformance"},"API Schema Non Conformance")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/1215.html"},"1215"),", ",(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/393.html"},"393"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/Miscellaneous/schema-conformance#unexpected-server-error-schema-conformance-test"},"Unexpected 5XX Server Errors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/600.html"},"600"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/Miscellaneous/schema-conformance#status-code-conformance-test"},"Undocumented Response Codes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/394.html"},"394"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/Miscellaneous/schema-conformance#response-headers-schema-conformance-test"},"Inadequate Response Headers")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/838.html"},"838"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/Miscellaneous/schema-conformance#content-type-schema-conformance-test"},"Incorrect Response Content Types")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/838.html"},"838"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/Miscellaneous/schema-conformance#response-schema-conformance-test"},"Incorrect Response Body")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/838.html"},"838"))))))}u.isMDXComponent=!0}}]);