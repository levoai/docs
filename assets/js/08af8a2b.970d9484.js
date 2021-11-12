"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[507],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(o),m=r,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},9817:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],c={sidebar_position:2},s="How do I use Levo?",l={unversionedId:"using-levo",id:"using-levo",isDocsHomePage:!1,title:"How do I use Levo?",description:"Below are high level steps:",source:"@site/docs/using-levo.md",sourceDirName:".",slug:"/using-levo",permalink:"/docs/using-levo",editUrl:"https://github.com/levoai/docs/edit/main/docs/using-levo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to Levo!",permalink:"/docs/"},next:{title:"Levo CLI for Linux",permalink:"/docs/levo-cli/levo-cli-for-linux"}},u=[{value:"Setup Levo CLI &amp; signup on Levo.ai",id:"setup-levo-cli--signup-on-levoai",children:[],level:2},{value:"Pick your use case &amp; follow instructions",id:"pick-your-use-case--follow-instructions",children:[],level:2},{value:"Use case 1: Automatically test APIs for schema conformance",id:"use-case-1-automatically-test-apis-for-schema-conformance",children:[{value:"I want to use a demo app for the conformance testing",id:"i-want-to-use-a-demo-app-for-the-conformance-testing",children:[],level:3},{value:"I want to my own app for the conformance testing",id:"i-want-to-my-own-app-for-the-conformance-testing",children:[],level:3}],level:2},{value:"Use case 2: Automatically test APIs for security vulnerabilities",id:"use-case-2-automatically-test-apis-for-security-vulnerabilities",children:[{value:"I want to use a demo app for the security testing",id:"i-want-to-use-a-demo-app-for-the-security-testing",children:[],level:3},{value:"I want to my own app for the security testing",id:"i-want-to-my-own-app-for-the-security-testing",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-do-i-use-levo"},"How do I use Levo?"),(0,i.kt)("p",null,"Below are high level steps:"),(0,i.kt)("h2",{id:"setup-levo-cli--signup-on-levoai"},"Setup Levo CLI & signup on Levo.ai"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/levo-cli/levo-cli-for-mac-os"},"Levo CLI for Mac OS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/levo-cli/levo-cli-for-linux"},"Levo CLI for Linux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/levo-cli/levo-cli-for-windows"},"Levo CLI for Windows"))),(0,i.kt)("h2",{id:"pick-your-use-case--follow-instructions"},"Pick your use case & follow instructions"),(0,i.kt)("h2",{id:"use-case-1-automatically-test-apis-for-schema-conformance"},"Use case 1: Automatically test APIs for schema conformance"),(0,i.kt)("h3",{id:"i-want-to-use-a-demo-app-for-the-conformance-testing"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/levoai/demo-apps/blob/main/MalSchema/README.rst"},"I want to use a demo app for the conformance testing")),(0,i.kt)("h3",{id:"i-want-to-my-own-app-for-the-conformance-testing"},(0,i.kt)("a",{parentName:"h3",href:"/docs/onboarding/crapi/configure-test-plan"},"I want to my own app for the conformance testing")),(0,i.kt)("h2",{id:"use-case-2-automatically-test-apis-for-security-vulnerabilities"},"Use case 2: Automatically test APIs for security vulnerabilities"),(0,i.kt)("h3",{id:"i-want-to-use-a-demo-app-for-the-security-testing"},(0,i.kt)("a",{parentName:"h3",href:"/docs/onboarding/crapi/crapi"},"I want to use a demo app for the security testing")),(0,i.kt)("h3",{id:"i-want-to-my-own-app-for-the-security-testing"},(0,i.kt)("a",{parentName:"h3",href:"/docs/onboarding/test-app-security"},"I want to my own app for the security testing")))}f.isMDXComponent=!0}}]);