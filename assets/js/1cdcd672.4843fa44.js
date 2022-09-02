"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4998],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},u="Web A6 - Vulnerable and Outdated Components",p={unversionedId:"OWASP-WEB-10/A6-Vulnerable-Components/A6-index",id:"version-v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-index",title:"Web A6 - Vulnerable and Outdated Components",description:"A software component is part of an application that extends the functionality of the application, such as a module, or software package. Component-based vulnerabilities occur when a software component is unsupported, out of date, or vulnerable to a known exploit.",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-index.md",sourceDirName:"OWASP-WEB-10/A6-Vulnerable-Components",slug:"/OWASP-WEB-10/A6-Vulnerable-Components/A6-index",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-index",draft:!1,tags:[],version:"v1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-v1/tutorialSidebar",previous:{title:"API A10 - Insufficient Logging & Monitoring",permalink:"/vulnerabilities/v1/OWASP-API-10/A10-Insufficient-Logging"},next:{title:"Web A6 - Log4J Remote Code Execution",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE"}},s={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-a6---vulnerable-and-outdated-components"},"Web A6 - Vulnerable and Outdated Components"),(0,a.kt)("p",null,"A software component is part of an application that extends the functionality of the application, such as a module, or software package. Component-based vulnerabilities occur when a software component is unsupported, out of date, or vulnerable to a known exploit."),(0,a.kt)("p",null,"You may inadvertently use vulnerable software components in production environments, posing a threat to the API's of the application. For example, an organization may download and use a software component, such as Log4J, and fail to regularly update or patch the component as flaws are discovered."),(0,a.kt)("p",null,"Since many software components run with the same privileges as the application itself, any vulnerabilities or flaws in the component can result in a threat to the APIs comprising the application."),(0,a.kt)("p",null,"Using components with known vulnerabilities makes your APIs susceptible to attacks that target any part of the application stack. For example, the following attack types are a few that may target known component vulnerabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code injection"),(0,a.kt)("li",{parentName:"ul"},"Command injection"),(0,a.kt)("li",{parentName:"ul"},"Remote Code Execution")),(0,a.kt)("p",null,"Below are known, critical vulnerabilities applicable to API based applications:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Vulnerability"),(0,a.kt)("th",{parentName:"tr",align:null},"CWE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/vulnerabilities/v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE"},"Log4J - Remote Code Execution")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://cwe.mitre.org/data/definitions/117.html"},"117"))))))}d.isMDXComponent=!0}}]);