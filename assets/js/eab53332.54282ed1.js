"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8794],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},820:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},u="How do I run a Zero Configuration Test Plan?",l={unversionedId:"guides/security-testing/common-tasks/running-test-plans/run-zero-conf-test-plan",id:"guides/security-testing/common-tasks/running-test-plans/run-zero-conf-test-plan",title:"How do I run a Zero Configuration Test Plan?",description:"Below are the high level steps for running a previously generated Zero Configuration Test Plan.",source:"@site/docs/guides/security-testing/common-tasks/running-test-plans/run-zero-conf-test-plan.md",sourceDirName:"guides/security-testing/common-tasks/running-test-plans",slug:"/guides/security-testing/common-tasks/running-test-plans/run-zero-conf-test-plan",permalink:"/guides/security-testing/common-tasks/running-test-plans/run-zero-conf-test-plan",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/common-tasks/running-test-plans/run-zero-conf-test-plan.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Running Test Plans via Levo CLI",permalink:"/guides/security-testing/common-tasks/running-test-plans/"},next:{title:"How do I run a Data Driven Test Plan?",permalink:"/guides/security-testing/common-tasks/running-test-plans/run-data-driven-test-plan"}},c={},p=[{value:"1. Download &amp; Configure <code>environment.yml</code>",id:"1-download--configure-environmentyml",level:3},{value:"2. Execute Test Plan via CLI",id:"2-execute-test-plan-via-cli",level:3},{value:"3. View Test Results",id:"3-view-test-results",level:3}],d={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-do-i-run-a-zero-configuration-test-plan"},"How do I run a Zero Configuration Test Plan?"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8377).Z,width:"264",height:"40"})),(0,i.kt)("p",null,"Below are the high level steps for running a previously generated Zero Configuration Test Plan."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5775).Z,width:"816",height:"207"})),(0,i.kt)("h3",{id:"1-download--configure-environmentyml"},"1. Download & Configure ",(0,i.kt)("inlineCode",{parentName:"h3"},"environment.yml")),(0,i.kt)("p",null,"Your test plan ",(0,i.kt)("inlineCode",{parentName:"p"},"may")," have an auto generated ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," associated with it."),(0,i.kt)("p",null,"If it was auto generated follow the steps outlined ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/test-your-app/test-app-security/zero-conf/configure-env-yml"},"here"),", to download and configure it appropriately."),(0,i.kt)("h3",{id:"2-execute-test-plan-via-cli"},"2. Execute Test Plan via CLI"),(0,i.kt)("p",null,"Follow instructions ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/test-your-app/test-app-security/zero-conf/execute-test-plan"},"here")," to execute the Test Plan via the CLI (Test Runner)."),(0,i.kt)("h3",{id:"3-view-test-results"},"3. View Test Results"),(0,i.kt)("p",null,"In the Levo SaaS console side panel, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Runs")," and navigate to your most recent test run results."))}f.isMDXComponent=!0},5775:function(e,t,n){t.Z=n.p+"assets/images/task-run-zero-conf-test-plan-cef6bfe1c22ddf6e9b756f66f1f5482e.svg"},8377:function(e,t,n){t.Z=n.p+"assets/images/zero-conf-test-plan-df7ab360d724ecded8d6d7866706a24f.svg"}}]);