"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[379],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Install, Import, Generate",s={unversionedId:"test-sample-app/crapi/install-import-generate",id:"test-sample-app/crapi/install-import-generate",isDocsHomePage:!1,title:"Install, Import, Generate",description:"Install crAPI",source:"@site/docs/test-sample-app/crapi/install-import-generate.md",sourceDirName:"test-sample-app/crapi",slug:"/test-sample-app/crapi/install-import-generate",permalink:"/test-sample-app/crapi/install-import-generate",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-sample-app/crapi/install-import-generate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sample Applications For Evaluating Levo",permalink:"/test-sample-app/levo-sample-applications"},next:{title:"Configure Your Test Plan",permalink:"/test-sample-app/crapi/configure-test-plan"}},c=[{value:"Install crAPI",id:"install-crapi",children:[],level:2},{value:"Import crAPI APIs into Levo SaaS",id:"import-crapi-apis-into-levo-saas",children:[],level:2},{value:"Generate a security test plan for crAPI&#39;s APIs",id:"generate-a-security-test-plan-for-crapis-apis",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-import-generate"},"Install, Import, Generate"),(0,i.kt)("h2",{id:"install-crapi"},"Install crAPI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the crAPI demo application by following instructions ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Download and save crAPIs OpenAPI specification (OAS) ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/openapi.json"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Verify crAPI is running by logging in, using one of the user credentials provided ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info"},"here"),".")),(0,i.kt)("h2",{id:"import-crapi-apis-into-levo-saas"},"Import crAPI APIs into Levo SaaS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login into the Levo SaaS portal."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"API Catalog")," in the side panel and proceed to import crAPIs OAS."),(0,i.kt)("li",{parentName:"ol"},"In the import dialog name this API catalog as ",(0,i.kt)("inlineCode",{parentName:"li"},"My crAPI"),", and complete the import.")),(0,i.kt)("h2",{id:"generate-a-security-test-plan-for-crapis-apis"},"Generate a security test plan for crAPI's APIs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Test Plans")," in the side panel and proceed to create a ",(0,i.kt)("inlineCode",{parentName:"li"},"New Test Plan"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"New Test Plan")," dialog name the plan as ",(0,i.kt)("inlineCode",{parentName:"li"},"My crAPI Test Plan"),". Pick ",(0,i.kt)("inlineCode",{parentName:"li"},"My crAPI")," as the asset for this test plan."),(0,i.kt)("li",{parentName:"ol"},"Proceed to generate the test plan."),(0,i.kt)("li",{parentName:"ol"},"You will now have a test plan called ",(0,i.kt)("inlineCode",{parentName:"li"},"My crAPI Test Plan")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ready to Configure")," state.")))}u.isMDXComponent=!0}}]);