"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4783],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5071:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:8},l="API A8 - Injection",c={unversionedId:"OWASP-API-10/A8-Injection",id:"version-v1/OWASP-API-10/A8-Injection",isDocsHomePage:!1,title:"API A8 - Injection",description:"A8",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-API-10/A8-Injection.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A8-Injection",permalink:"/vulnerabilities/v1/OWASP-API-10/A8-Injection",tags:[],version:"v1",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"version-v1/tutorialSidebar",previous:{title:"API A5 - Broken Function Level Authorization",permalink:"/vulnerabilities/v1/OWASP-API-10/A5-BFLA"},next:{title:"Web A10 - Server Side Request Forgery",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A10-SSRF"}},u=[{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"What are the common types of injection for APIs?",id:"what-are-the-common-types-of-injection-for-apis",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Test case FAQs",id:"test-case-faqs",children:[{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",children:[],level:3}],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"What is the solution?",id:"what-is-the-solution",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-a8---injection"},"API A8 - Injection"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A8",src:n(8565).Z})),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Attackers construct API calls that include SQL, NoSQL, OS, or other commands, that the API or the backend behind it blindly executes. Essentially this vulnerability arises from passing unsanitized user input directly to database queries or OS command interpreters."),(0,a.kt)("h2",{id:"what-are-the-common-types-of-injection-for-apis"},"What are the common types of injection for APIs?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sql/relational-databases/security/sql-injection?view=sql-server-ver15"},"SQL Injection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nullsweep.com/a-nosql-injection-primer-with-mongo/"},"NoSQL Injection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/Command_Injection"},"OS Command Injection"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/77.html"},"Command Injection - CWE 77")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/89.html"},"SQL Injection - CWE 89")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://capec.mitre.org/data/definitions/676.html"},"NoSQL Injection - CAPEC 676"))),(0,a.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,a.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,a.kt)("p",null,"Applies to all API endpoints that consume user supplied input"),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"The input parameter(s) within the API endpoint, are injected with malicious data (injection strings). The malicious data tries to trick the API's backend query interpreter, to execute unauthorized commands, which cause leakage of sensitive data, or even a complete denial of service."),(0,a.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Strictly define all API input data, such as schemas, types, and string patterns, and enforce them at runtime."),(0,a.kt)("li",{parentName:"ul"},"Validate, filter, and sanitize all incoming data."),(0,a.kt)("li",{parentName:"ul"},"Define, limit, and enforce API outputs to prevent data leaks.")))}d.isMDXComponent=!0},8565:function(e,t,n){t.Z=n.p+"assets/images/A8-Injection-6a867f5bf0b7cf5dbf2bf9be48ee9dde.svg"}}]);