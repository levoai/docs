"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[211],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1150:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:6},c="FAQs",u={unversionedId:"faqs",id:"faqs",isDocsHomePage:!1,title:"FAQs",description:"Why do you need Levo?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/faqs",editUrl:"https://github.com/levoai/docs/edit/main/docs/faqs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Broken Object Level Authorization (aka IDOR)",permalink:"/issues/vulnerabilities/IDOR"}},l=[{value:"Why do you need Levo?",id:"why-do-you-need-levo",children:[],level:4},{value:"How is Levo different from other Application Security Testing tools?",id:"how-is-levo-different-from-other-application-security-testing-tools",children:[],level:4},{value:"What CI/CD environments are supported?",id:"what-cicd-environments-are-supported",children:[],level:4}],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faqs"},"FAQs"),(0,i.kt)("h4",{id:"why-do-you-need-levo"},"Why do you need Levo?"),(0,i.kt)("p",null,"Automated security testing of microservices, which uncovers sophisticated ",(0,i.kt)("a",{parentName:"p",href:"https://www.hackerone.com/company-news/rise-idor"},"business logic")," and access control-based attacks, is a significant gap today. Continuous Security Assurance from Levo.ai provides fully automated and effortless (runtime) security testing for Microservices in CI/CD."),(0,i.kt)("h4",{id:"how-is-levo-different-from-other-application-security-testing-tools"},"How is Levo different from other Application Security Testing tools?"),(0,i.kt)("p",null,"Modern attacks target ",(0,i.kt)("a",{parentName:"p",href:"https://www.hackerone.com/company-news/rise-idor"},"business logic flaws")," that arise from sub-optimal authentication and authorization across API endpoints."),(0,i.kt)("p",null,"AST tools like ",(0,i.kt)("a",{parentName:"p",href:"https://www.synopsys.com/glossary/what-is-software-composition-analysis.html"},"SCA")," & ",(0,i.kt)("a",{parentName:"p",href:"https://www.microfocus.com/en-us/what-is/sast"},"SAST")," statically analyze source code for security defects, but are unaware of authentication & authorization flaws."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.microfocus.com/en-us/what-is/dast"},"DAST")," tools focus on the runtime but lack adoption due to the significant manual heavy lifting required. Moreover, they are ",(0,i.kt)("a",{parentName:"p",href:"https://engineeringblog.yelp.com/2020/01/automated-idor-discovery-through-stateful-swagger-fuzzing.html"},"\u201cbusiness logic blind\u201d")," as they are unable to uncover sophisticated business logic and access control violation attacks."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://snyk.io/learn/application-security/iast-interactive-application-security-testing/"},"IAST")," tools require comprehensive unit test coverage written by developers, and are also \u201cbusiness logic blind\u201d."),(0,i.kt)("p",null,"Levo is the only purpose-built security solution for APIs & microservices that provides comprehensive detection of both business logic , and OWASP Top 10 vulnerabilities."),(0,i.kt)("h4",{id:"what-cicd-environments-are-supported"},"What CI/CD environments are supported?"),(0,i.kt)("p",null,"Levo supports all popular CI/CD environments."))}f.isMDXComponent=!0}}]);