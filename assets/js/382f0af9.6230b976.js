"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4810],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],o={},l="Missing 'Content-Type' Header",p={unversionedId:"Baseline/content-type-header-missing",id:"version-v1/Baseline/content-type-header-missing",title:"Missing 'Content-Type' Header",description:"Missing Content-Type Header",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/content-type-header-missing.md",sourceDirName:"Baseline",slug:"/Baseline/content-type-header-missing",permalink:"/vulnerabilities/v1/Baseline/content-type-header-missing",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Application Error Disclosure",permalink:"/vulnerabilities/v1/Baseline/application-error-disclosure"},next:{title:"Cookie Set Without HttpOnly Flag",permalink:"/vulnerabilities/v1/Baseline/cookie-no-httponly-flag"}},c={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],d={toc:u};function f(e){var t=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"missing-content-type-header"},"Missing 'Content-Type' Header"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Missing Content-Type Header",src:n(815).Z,width:"858",height:"1216"})),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"The API endpoint or server returned a response without the Content-Type header being set."),(0,a.kt)("p",null,"API responses are typically of type 'application/json'. "),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md"},"OWASP API TOP-10 A7"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-mvc-set-json-content-type"},"Setting JSON Content Type In Spring MVC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tutorialsteacher.com/webapi/request-response-data-formats-in-web-api"},"Web API Request/Response Data Formats")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/345.html"},"CWE-345"))),(0,a.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,a.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,a.kt)("p",null,"This is applicable for all API endpoints when the ",(0,a.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"Responses sent by the API server are analyzed for the missing Content-Type header."),(0,a.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,a.kt)("p",null,"Ensure each API endpoint is setting the specific and appropriate Content-Type value for the content being delivered."))}f.isMDXComponent=!0},815:function(e,t,n){t.Z=n.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);