"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1944],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),g=r,d=f["".concat(l,".").concat(g)]||f[g]||p[g]||o;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:10},l="API A10 - Insufficient Logging & Monitoring",c={unversionedId:"OWASP-API-10/A10-Insufficient-Logging",id:"version-v1/OWASP-API-10/A10-Insufficient-Logging",title:"API A10 - Insufficient Logging & Monitoring",description:"POOR-LOGGING",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-API-10/A10-Insufficient-Logging.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A10-Insufficient-Logging",permalink:"/vulnerabilities/v1/OWASP-API-10/A10-Insufficient-Logging",draft:!1,tags:[],version:"v1",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-v1/tutorialSidebar",previous:{title:"API A9 - Improper Asset Management",permalink:"/vulnerabilities/v1/OWASP-API-10/A9-Improper-Asset-Management"},next:{title:"Web A6 - Vulnerable and Outdated Components",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-index"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"What are specific examples?",id:"what-are-specific-examples",level:2},{value:"References",id:"references",level:2},{value:"What is the solution?",id:"what-is-the-solution",level:2}],f={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-a10---insufficient-logging--monitoring"},"API A10 - Insufficient Logging & Monitoring"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"POOR-LOGGING",src:n(9291).Z,width:"711",height:"282"})),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"Observability into who is using the API and how they are using it is the foundation of any security program."),(0,o.kt)("p",null,"API observability provides audit and forensics capabilities among other benefits, like performance/SLA monitoring."),(0,o.kt)("p",null,"Lack of logging with sufficient detail, severely impairs securing APIs."),(0,o.kt)("h2",{id:"what-are-specific-examples"},"What are specific examples?"),(0,o.kt)("p",null,"The access keys of an administrative API were leaked on a public repository. The repository owner was notified by email about the potential leak, but took more than 48 hours to act upon the incident."),(0,o.kt)("p",null,"Due to insufficient logging, the company was not able to assess what data was potentially accessed by specific malicious actors."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A10"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OWASP/ASVS/blob/master/4.0/en/0x15-V7-Error-Logging.md"},"Logging - Cheat Sheet")),(0,o.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,o.kt)("p",null,"Use Levo's no-code, and zero-config eBPF sensor, to automatically enable deep logging for all APIs and services. "),(0,o.kt)("p",null,"Levo captures the full request/response of APIs, without having to install SDKs, or sidecar proxies."))}g.isMDXComponent=!0},9291:function(e,t,n){t.Z=n.p+"assets/images/A10-Insufficient-Logging-Monitoring-ae5d189f1dcd41da46c8d18727f5f9e2.svg"}}]);