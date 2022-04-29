"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8857],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4e3:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},l="How do I run a Zero Configuration Test Plan?",u={unversionedId:"tasks/running-test-plans/run-zero-conf-test-plan",id:"tasks/running-test-plans/run-zero-conf-test-plan",isDocsHomePage:!1,title:"How do I run a Zero Configuration Test Plan?",description:"Below are the high level steps for running a previously generated Zero Configuration Test Plan.",source:"@site/docs/tasks/running-test-plans/run-zero-conf-test-plan.md",sourceDirName:"tasks/running-test-plans",slug:"/tasks/running-test-plans/run-zero-conf-test-plan",permalink:"/tasks/running-test-plans/run-zero-conf-test-plan",editUrl:"https://github.com/levoai/docs/edit/main/docs/tasks/running-test-plans/run-zero-conf-test-plan.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Running Test Plans via Levo CLI",permalink:"/tasks/running-test-plans/running-test-plans"},next:{title:"How do I run a Data Driven Test Plan?",permalink:"/tasks/running-test-plans/run-data-driven-test-plan"}},c=[{value:"1. Download &amp; Configure <code>environment.yml</code>",id:"1-download--configure-environmentyml",children:[],level:3},{value:"2. Execute Test Plan via CLI",id:"2-execute-test-plan-via-cli",children:[],level:3},{value:"3. View Test Results",id:"3-view-test-results",children:[],level:3}],p={toc:c};function f(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-do-i-run-a-zero-configuration-test-plan"},"How do I run a Zero Configuration Test Plan?"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2625).Z})),(0,a.kt)("p",null,"Below are the high level steps for running a previously generated Zero Configuration Test Plan."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8248).Z})),(0,a.kt)("h3",{id:"1-download--configure-environmentyml"},"1. Download & Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"environment.yml")),(0,a.kt)("p",null,"Your test plan ",(0,a.kt)("inlineCode",{parentName:"p"},"may")," have an auto generated ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.yml")," associated with it."),(0,a.kt)("p",null,"If it was auto generated follow the steps outlined ",(0,a.kt)("a",{parentName:"p",href:"/test-your-app/test-app-security/zero-conf/configure-env-yml"},"here"),", to download and configure it appropriately."),(0,a.kt)("h3",{id:"2-execute-test-plan-via-cli"},"2. Execute Test Plan via CLI"),(0,a.kt)("p",null,"Follow instructions ",(0,a.kt)("a",{parentName:"p",href:"/test-your-app/test-app-security/zero-conf/execute-test-plan"},"here")," to execute the Test Plan via the CLI (Test Runner)."),(0,a.kt)("h3",{id:"3-view-test-results"},"3. View Test Results"),(0,a.kt)("p",null,"In the Levo SaaS console side panel, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runs")," and navigate to your most recent test run results."))}f.isMDXComponent=!0},8248:function(e,n,t){n.Z=t.p+"assets/images/task-run-zero-conf-test-plan-cef6bfe1c22ddf6e9b756f66f1f5482e.svg"},2625:function(e,n,t){n.Z=t.p+"assets/images/zero-conf-test-plan-df7ab360d724ecded8d6d7866706a24f.svg"}}]);