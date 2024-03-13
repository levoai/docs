"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3796],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,y=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},s="Configure `environment.yml`",u={unversionedId:"security-contract-testing/test-your-app/test-app-security/zero-conf/configure-env-yml",id:"security-contract-testing/test-your-app/test-app-security/zero-conf/configure-env-yml",title:"Configure `environment.yml`",description:"Note: If your test plan does not have a environment.yml file associated with it you can skip this step.",source:"@site/docs/security-contract-testing/test-your-app/test-app-security/zero-conf/configure-env-yml.md",sourceDirName:"security-contract-testing/test-your-app/test-app-security/zero-conf",slug:"/security-contract-testing/test-your-app/test-app-security/zero-conf/configure-env-yml",permalink:"/security-contract-testing/test-your-app/test-app-security/zero-conf/configure-env-yml",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-contract-testing/test-your-app/test-app-security/zero-conf/configure-env-yml.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Auto Generate Test Plan",permalink:"/security-contract-testing/test-your-app/test-app-security/zero-conf/generate-test-plan"},next:{title:"Execute Test Plan",permalink:"/security-contract-testing/test-your-app/test-app-security/zero-conf/execute-test-plan"}},l={},p=[{value:"1. Download the <code>environment.yml</code> file",id:"1-download-the-environmentyml-file",level:2},{value:"2. Configure the <code>environment.yml</code> file",id:"2-configure-the-environmentyml-file",level:2}],f={toc:p};function m(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-environmentyml"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h1"},"environment.yml")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1759).Z,width:"264",height:"40"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3590).Z,width:"816",height:"405"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note: If your test plan does not have a ",(0,i.kt)("inlineCode",{parentName:"em"},"environment.yml")," file associated with it you can skip this step."))),(0,i.kt)("p",null,"Each auto generated test plan ",(0,i.kt)("em",{parentName:"p"},"may")," have a ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file associated with it, which provides critical authentication/authorization information for your APIs."),(0,i.kt)("p",null,"You can read more about this file ",(0,i.kt)("a",{parentName:"p",href:"/security-contract-testing/concepts/test-plans/env-yml"},"here"),". "),(0,i.kt)("p",null,"You will need to configure this file with appropriate authentication/authorization information prior to executing the test plan."),(0,i.kt)("h2",{id:"1-download-the-environmentyml-file"},"1. Download the ",(0,i.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file"),(0,i.kt)("p",null,"Open your test plan, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," section, and download this file to your desktop."),(0,i.kt)("h2",{id:"2-configure-the-environmentyml-file"},"2. Configure the ",(0,i.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file"),(0,i.kt)("p",null,"Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"/security-contract-testing/tasks/authentication/authn-authz"},"here")," to configure appropriate user credentials/roles required to effectively test your live API endpoints."))}m.isMDXComponent=!0},3590:function(e,t,n){t.Z=n.p+"assets/images/zero-conf-flow-3-835ea40ce4323b5d898493747825da2a.svg"},1759:function(e,t,n){t.Z=n.p+"assets/images/zero-conf-test-plan-df7ab360d724ecded8d6d7866706a24f.svg"}}]);