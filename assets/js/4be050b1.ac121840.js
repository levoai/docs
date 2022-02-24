"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5646],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:6},l="API A6 - Mass Assignment",c={unversionedId:"OWASP-API-10/A6-Mass-Assignment",id:"OWASP-API-10/A6-Mass-Assignment",isDocsHomePage:!1,title:"API A6 - Mass Assignment",description:"MASS-ASSIGN",source:"@site/vulnerabilities/OWASP-API-10/A6-Mass-Assignment.md",sourceDirName:"OWASP-API-10",slug:"/OWASP-API-10/A6-Mass-Assignment",permalink:"/vulnerabilities/next/OWASP-API-10/A6-Mass-Assignment",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"API A5 - Broken Function Level Authorization",permalink:"/vulnerabilities/next/OWASP-API-10/A5-BFLA"},next:{title:"API A8 - Injection",permalink:"/vulnerabilities/next/OWASP-API-10/A8-Injection"}},u=[{value:"What is it?",id:"what-is-it",children:[{value:"Alternative Names",id:"alternative-names",children:[],level:3}],level:2},{value:"What are specific examples?",id:"what-are-specific-examples",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Test case FAQs",id:"test-case-faqs",children:[{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",children:[],level:3}],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"What is the solution?",id:"what-is-the-solution",children:[],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-a6---mass-assignment"},"API A6 - Mass Assignment"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MASS-ASSIGN",src:n(6313).Z})),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"Modern software frameworks allow developers to automatically bind API request parameters into application code's variables or objects to reduce development effort."),(0,r.kt)("p",null,"Attackers can sometimes use this methodology to add new parameters that the developer never intended."),(0,r.kt)("p",null,"This can cause the unintended creation of new variables/objects and/or the modification of existing variables/objects in the application code."),(0,r.kt)("p",null,"The outcome of the above actions could be unintended privilege escalation or abuse of the underlying business logic of the API, which profits the attacker. "),(0,r.kt)("p",null,"This is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mass Assignment")," vulnerability."),(0,r.kt)("h3",{id:"alternative-names"},"Alternative Names"),(0,r.kt)("p",null,"Depending on the language/framework in question, this vulnerability can have several alternative names:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mass Assignment: Ruby on Rails, NodeJS."),(0,r.kt)("li",{parentName:"ul"},"Autobinding: Spring MVC, ASP NET MVC."),(0,r.kt)("li",{parentName:"ul"},"Object injection: PHP.")),(0,r.kt)("h2",{id:"what-are-specific-examples"},"What are specific examples?"),(0,r.kt)("p",null,"In the diagram above, the attacker sends the same discount code multiple times as a JSON array, leading to a 100% discount, and paying $0 for his purchases."),(0,r.kt)("p",null,"This was clearly not the intent of the API developer. "),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"OWASP API TOP-10 A6"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html"},"Mass Assignment - Cheat Sheet")),(0,r.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,r.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applicable to all API endpoints that accept query and/or body parameters.")),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For query and body parameters expected in the API endpoint's request, additional (extraneous) parameters are added iteratively, before making the request."),(0,r.kt)("li",{parentName:"ul"},"Primitive, array, and dictionary JSON elements are subject to this treatment."),(0,r.kt)("li",{parentName:"ul"},"If the API endpoint is robust, it should reject these malicious requests outright."),(0,r.kt)("li",{parentName:"ul"},"Vulnerable API endpoints will serve a normal successful response, or a variant of the normal successful response, or fail in unexpected ways (exceptions, etc.)")),(0,r.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not automatically bind all incoming parameter data to internal variables/objects."),(0,r.kt)("li",{parentName:"ul"},"Based on the business context of the API endpoint, explicitly define what incoming parameters should be automatically bound."),(0,r.kt)("li",{parentName:"ul"},"If certain internal variables/objects of the API endpoint are readonly, annotate them as readonly in the framework's auto bind."),(0,r.kt)("li",{parentName:"ul"},"Precisely define the schemas, types, and patterns you will accept in requests at design time and enforce them at runtime.")))}d.isMDXComponent=!0},6313:function(e,t,n){t.Z=n.p+"assets/images/A6-Mass-Assignment-fd7a5b6566c6a5561ff0b7839ba8ce43.svg"}}]);