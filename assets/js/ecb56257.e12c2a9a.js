"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7181],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8880:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=t(3117),i=t(102),s=(t(7294),t(3905)),a=["components"],o={},l="Information Disclosure - Debug Error Messages",u={unversionedId:"Baseline/information-disclosure-debug-error-messages",id:"version-v1/Baseline/information-disclosure-debug-error-messages",title:"Information Disclosure - Debug Error Messages",description:"Debug Error Messages",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/information-disclosure-debug-error-messages.md",sourceDirName:"Baseline",slug:"/Baseline/information-disclosure-debug-error-messages",permalink:"/vulnerabilities/v1/Baseline/information-disclosure-debug-error-messages",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"In Page Banner Information Leak",permalink:"/vulnerabilities/v1/Baseline/in-page-banner-information-leak"},next:{title:"Information Disclosure - Sensitive Information in HTTP Referrer Header",permalink:"/vulnerabilities/v1/Baseline/information-disclosure-sensitive-information-in-http-referrer-header"}},c={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],f={toc:p};function d(e){var r=e.components,o=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},f,o,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"information-disclosure---debug-error-messages"},"Information Disclosure - Debug Error Messages"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Debug Error Messages",src:t(815).Z,width:"858",height:"1216"})),(0,s.kt)("h2",{id:"what-is-it"},"What is it?"),(0,s.kt)("p",null,"The API endpoint or server returns a response that contains standard error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. "),(0,s.kt)("p",null,"Revealing standard error/debug information, allows attackers to deduce the type of the API server. This in turn enables attackers to try exploiting the server for known/unpatched vulnerabilities."),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/200.html"},"CWE-200")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/01-Testing_For_Improper_Error_Handling"},"Testing for Improper Error Handling")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md"},"OWASP API TOP-10 A7"))),(0,s.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,s.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,s.kt)("p",null,"This is applicable for all API endpoints when the ",(0,s.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,s.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,s.kt)("p",null,"Responses sent by the API server are analyzed for the presence of standard error/debug messages that reveal the type of the API server."),(0,s.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,s.kt)("p",null,"Disable debugging messages before promoting to production."))}d.isMDXComponent=!0},815:function(e,r,t){r.Z=t.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);