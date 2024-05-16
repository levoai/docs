"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2330],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:5},u="Configure `environment.yml`",p={unversionedId:"guides/security-testing/test-your-app/test-app-security/data-driven/configure-env-yml",id:"guides/security-testing/test-your-app/test-app-security/data-driven/configure-env-yml",title:"Configure `environment.yml`",description:"Note: If your test plan does not have a environment.yml file associated with it you can skip this step, and proceed to the next.",source:"@site/docs/guides/security-testing/test-your-app/test-app-security/data-driven/configure-env-yml.md",sourceDirName:"guides/security-testing/test-your-app/test-app-security/data-driven",slug:"/guides/security-testing/test-your-app/test-app-security/data-driven/configure-env-yml",permalink:"/guides/security-testing/test-your-app/test-app-security/data-driven/configure-env-yml",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/test-your-app/test-app-security/data-driven/configure-env-yml.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Configure Test Plan Fixtures",permalink:"/guides/security-testing/test-your-app/test-app-security/data-driven/configure-plan-fixtures"},next:{title:"Execute Test Plan",permalink:"/guides/security-testing/test-your-app/test-app-security/data-driven/execute-test-plan"}},c={},l=[{value:"1. Download the <code>environment.yml</code> file",id:"1-download-the-environmentyml-file",level:2},{value:"2. Configure the <code>environment.yml</code> file",id:"2-configure-the-environmentyml-file",level:2}],d={toc:l};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-environmentyml"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h1"},"environment.yml")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1920).Z,width:"207",height:"40"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3644).Z,width:"1075",height:"405"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note: If your test plan does not have a ",(0,o.kt)("inlineCode",{parentName:"em"},"environment.yml")," file associated with it you can skip this step, and proceed to the next."))),(0,o.kt)("p",null,"Each auto generated test plan ",(0,o.kt)("em",{parentName:"p"},"may")," have a ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.yml")," file associated with it, which provides critical authentication/authorization information for your APIs."),(0,o.kt)("p",null,"You can read more about this file ",(0,o.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/test-plans/env-yml"},"here"),". "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You will need to configure this file with appropriate authentication/authorization information prior to executing the test plan.")),(0,o.kt)("h2",{id:"1-download-the-environmentyml-file"},"1. Download the ",(0,o.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file"),(0,o.kt)("p",null,"In your test plan, navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.yml")," section, and download this file to your desktop."),(0,o.kt)("h2",{id:"2-configure-the-environmentyml-file"},"2. Configure the ",(0,o.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file"),(0,o.kt)("p",null,"Follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"/guides/security-testing/common-tasks/authn-authz"},"here")," to configure appropriate user credentials/roles required to effectively test your live API endpoints."))}m.isMDXComponent=!0},3644:function(e,t,n){t.Z=n.p+"assets/images/data-driven-flow-4-d46d1b53ef4b7278489b448031d31e3e.svg"},1920:function(e,t,n){t.Z=n.p+"assets/images/data-driven-test-plan-2bac0366423c95594a969719901fed4e.svg"}}]);