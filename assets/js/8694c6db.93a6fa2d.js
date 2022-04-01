"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[787],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:9},l="API A9 - Improper Asset Management",p={unversionedId:"OWASP-API-10/A9-Improper-Asset-Management",id:"version-v1/OWASP-API-10/A9-Improper-Asset-Management",isDocsHomePage:!1,title:"API A9 - Improper Asset Management",description:"ASSET-MGMT",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-API-10/A9-Improper-Asset-Management.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A9-Improper-Asset-Management",permalink:"/vulnerabilities/v1/OWASP-API-10/A9-Improper-Asset-Management",tags:[],version:"v1",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"version-v1/tutorialSidebar",previous:{title:"API A8 - Injection",permalink:"/vulnerabilities/v1/OWASP-API-10/A8-Injection"},next:{title:"API A10 - Insufficient Logging & Monitoring",permalink:"/vulnerabilities/v1/OWASP-API-10/A10-Insufficient-Logging"}},c=[{value:"What is it?",id:"what-is-it",children:[],level:2},{value:"What are specific examples?",id:"what-are-specific-examples",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Test case FAQs",id:"test-case-faqs",children:[{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",children:[],level:3}],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"What is the solution?",id:"what-is-the-solution",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-a9---improper-asset-management"},"API A9 - Improper Asset Management"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ASSET-MGMT",src:n(2157).Z})),(0,i.kt)("h2",{id:"what-is-it"},"What is it?"),(0,i.kt)("p",null,"Attackers find non-production, and/or older versions of the API (for example, staging, testing, beta, or earlier versions) that are not as well protected as the production API, and use those to launch their attacks."),(0,i.kt)("h2",{id:"what-are-specific-examples"},"What are specific examples?"),(0,i.kt)("p",null,"In the diagram above v2 of ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v2/admin/userlist")," only allows properly authenticated ",(0,i.kt)("inlineCode",{parentName:"p"},"admins")," to access the API endpoint."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," version does not check if the user calling the API endpoint is actually an ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", allowing any user to retrieve details on all users in the application."),(0,i.kt)("p",null,"This is a serious privilege escalation vulnerability as details of all users including sensitive data about them is exposed."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A9"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa9-improper-assets-management.md"},"Improper Asset Management - Cheat Sheet")),(0,i.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,i.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Applicable to all API endpoints.")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the API endpoint under test, multiple version routes (/v1/, /v2/), are automatically probed and accessed without the proper authentication credentials. The test case will raise appropriate alerts if these routes respond positively.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Similarly the presence of an admin route (/admin/) is probed, and accessed without the proper authentication credentials. Appropriate alerts are raised, if the route responds positively.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Route word lists are all used to probe for the presence of commonly used administrative routes. Appropriate alerts are raised, if the route responds positively."))),(0,i.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep an up-to-date inventory all API hosts."),(0,i.kt)("li",{parentName:"ul"},"Limit access to API endpoints that should not be public."),(0,i.kt)("li",{parentName:"ul"},"Limit access to production data, and segregate access to production and non-production data."),(0,i.kt)("li",{parentName:"ul"},"Properly retire old versions of APIs or backport security fixes to them."),(0,i.kt)("li",{parentName:"ul"},"Implement strict authentication, redirects, and CORS checks for all API endpoints.")))}d.isMDXComponent=!0},2157:function(e,t,n){t.Z=n.p+"assets/images/A9-Improper-Asset-Management-940342f6451671e1c61702c8534a3c41.svg"}}]);