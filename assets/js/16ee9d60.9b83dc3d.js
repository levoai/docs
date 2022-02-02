"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[117],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3989:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=a(7462),n=a(3366),p=(a(7294),a(3905)),i=["components"],o={sidebar_position:2},l="CrAPI Sample App - Part I",s={unversionedId:"test-sample-app/crapi/crapi-part-1",id:"test-sample-app/crapi/crapi-part-1",isDocsHomePage:!1,title:"CrAPI Sample App - Part I",description:"Install crAPI",source:"@site/docs/test-sample-app/crapi/crapi-part-1.md",sourceDirName:"test-sample-app/crapi",slug:"/test-sample-app/crapi/crapi-part-1",permalink:"/test-sample-app/crapi/crapi-part-1",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-sample-app/crapi/crapi-part-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Evaluate Levo using the sample application `crAPI`",permalink:"/test-sample-app/crapi/crapi"},next:{title:"CrAPI Sample App - Part II",permalink:"/test-sample-app/crapi/crapi-part-2"}},c=[{value:"Install crAPI",id:"install-crapi",children:[],level:2},{value:"Import crAPI APIs into Levo SaaS",id:"import-crapi-apis-into-levo-saas",children:[],level:2},{value:"Generate a security test plan for crAPI&#39;s APIs",id:"generate-a-security-test-plan-for-crapis-apis",children:[],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"crapi-sample-app---part-i"},"CrAPI Sample App - Part I"),(0,p.kt)("h2",{id:"install-crapi"},"Install crAPI"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Install the crAPI demo application by following instructions ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md"},"here"),".")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/demo%20scenarios/onboarding-scenarios.json"},"Download")," and save crAPIs OpenAPI specification (OAS).")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Verify crAPI is running by logging in, using one of the user credentials provided ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info"},"here"),"."))),(0,p.kt)("h2",{id:"import-crapi-apis-into-levo-saas"},"Import crAPI APIs into Levo SaaS"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Login into the Levo SaaS portal.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Click on ",(0,p.kt)("inlineCode",{parentName:"p"},"API Catalog")," in the side panel and proceed to import crAPIs OAS (saved in step above).")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"In the import dialog name this API catalog as ",(0,p.kt)("inlineCode",{parentName:"p"},"My crAPI"),", and complete the import."))),(0,p.kt)("h2",{id:"generate-a-security-test-plan-for-crapis-apis"},"Generate a security test plan for crAPI's APIs"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Click on ",(0,p.kt)("inlineCode",{parentName:"p"},"Test Plans")," in the side panel and proceed to create a test plan by clicking ",(0,p.kt)("inlineCode",{parentName:"p"},"New Test Plan"),".")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"In the ",(0,p.kt)("inlineCode",{parentName:"p"},"New Test Plan")," dialog name the plan as ",(0,p.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan"),". Pick ",(0,p.kt)("inlineCode",{parentName:"p"},"My crAPI")," as the API asset for this test plan.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Check the check box named ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"Auto-populate API parameters for this test plan")),"."),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"This uses examples in the OpenAPI specification file to auto populate ",(0,p.kt)("a",{parentName:"p",href:"/concepts/fixtures/test-fixtures"},"test fixtures/API parameters")," that are required in the generated test plan.\nThe example values are used in making API requests during test execution."))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Proceed to generate the test plan.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"You will now have a test plan called ",(0,p.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan")," in the ",(0,p.kt)("inlineCode",{parentName:"p"},"Config Complete")," state.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Copy")," the LRN (Levo Resource Name) of ",(0,p.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan")," to the clipboard.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Open the test plan ",(0,p.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan"),", navigate to the ",(0,p.kt)("inlineCode",{parentName:"p"},"environment.yml")," section,\nand download this file to your desktop. You can read more about the purpose of the file ",(0,p.kt)("a",{parentName:"p",href:"/concepts/authentication/authn-authz"},"here"),"."))))}u.isMDXComponent=!0}}]);