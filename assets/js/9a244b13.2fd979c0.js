"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7509],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8245:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Test Plan Types",p={unversionedId:"concepts/test-plans/test-plan-types",id:"concepts/test-plans/test-plan-types",title:"Test Plan Types",description:"At a high level test plans come in two flavors:",source:"@site/docs/concepts/test-plans/test-plan-types.md",sourceDirName:"concepts/test-plans",slug:"/concepts/test-plans/test-plan-types",permalink:"/concepts/test-plans/test-plan-types",editUrl:"https://github.com/levoai/docs/edit/main/docs/concepts/test-plans/test-plan-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Test Plans",permalink:"/concepts/test-plans/"},next:{title:"Environment.yml file",permalink:"/concepts/test-plans/env-yml"}},u={},c=[{value:"Zero Configuration vs. Data Driven",id:"zero-configuration-vs-data-driven",level:2},{value:"Zero Configuration",id:"zero-configuration",level:2},{value:"Data Driven",id:"data-driven",level:2}],d={toc:c};function f(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-plan-types"},"Test Plan Types"),(0,i.kt)("p",null,"At a high level test plans come in two flavors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Zero Configuration (zero conf)"),(0,i.kt)("li",{parentName:"ol"},"Data Driven ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2394).Z,width:"570",height:"190"})),(0,i.kt)("h2",{id:"zero-configuration-vs-data-driven"},"Zero Configuration vs. Data Driven"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"},"Zero Configuration"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Data Driven"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Time to Value")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Instant"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Requires One Time Configuration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Test Category Coverage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reduced"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Comprehensive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Efficacy of Test Results")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Moderate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Superior")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Horizontal Authorization Abuse Coverage (BOLA / IDOR)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Vertical Authorization Abuse Coverage (Privilege Escalation)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Coverage for API Methods (GET, POST, etc.)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"All Methods"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("ul",null,(0,i.kt)("li",null,"All Methods.")," ",(0,i.kt)("li",null,"PUT, POST, PATCH, & DELETE require additional configuration to support stateful operations on resources.")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Primary Use Case")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rapid Assessments"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deep / Comprehensive Assessments")))),(0,i.kt)("h2",{id:"zero-configuration"},"Zero Configuration"),(0,i.kt)("p",null,"Zero Configuration test plans are instantly runnable, and only require specifying user authentication information."),(0,i.kt)("p",null,"These test plans use type information specified in the API schema to autogenerate data for various parameters required by the API."),(0,i.kt)("p",null,"For example is a string field in a POST body is of format type ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", the test plan will autogenerate syntactically valid email addresses."),(0,i.kt)("p",null,"However there is no guarantee that the generated values are truly valid for the API endpoint being tested (the values may not exist in the backend database, etc.). Since parameter data is autogenerated, these test plans provide less security test coverage, and lower efficacy that Data Driven test plans."),(0,i.kt)("p",null,"For example, APIs often return ",(0,i.kt)("inlineCode",{parentName:"p"},"404 Not Found")," in lieu of ",(0,i.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"403 Forbidden")," during authentication/authorization failures. This is prevent hackers from enumerating resources."),(0,i.kt)("p",null,"Zero Configuration test plans cannot truly distinguish between an authentication/authorization failure and the absence of the requested resource in the API's backend database."),(0,i.kt)("p",null,"This results in lower efficacy and reduced test coverage (results might have false negatives)."),(0,i.kt)("h2",{id:"data-driven"},"Data Driven"),(0,i.kt)("p",null,"As the name suggests, parameter data for APIs is end user supplied via ",(0,i.kt)("a",{parentName:"p",href:"/concepts/test-plans/fixtures/test-fixtures"},"fixtures"),"."),(0,i.kt)("p",null,"By configuring parameter data, end users have complete control of what data is send when making API calls. "),(0,i.kt)("p",null,"This dramatically increases efficacy of test results and test coverage, as the test plans can clearly distinguish between, authentication/authorization failures and the absence of the requested resource."))}f.isMDXComponent=!0},2394:function(e,t,n){t.Z=n.p+"assets/images/test-plan-types-a82e7bad200eebdd51fc183ec334c64b.svg"}}]);