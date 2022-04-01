"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5192],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),f=n,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],p={sidebar_position:1},s="Data Driven Security Tests - Part 1",l={unversionedId:"test-your-app/test-app-security/data-driven/data-driven-1",id:"test-your-app/test-app-security/data-driven/data-driven-1",isDocsHomePage:!1,title:"Data Driven Security Tests - Part 1",description:"Levo will very soon have capabilities to auto generate OpenAPI specifications from live traffic.",source:"@site/docs/test-your-app/test-app-security/data-driven/data-driven-1.md",sourceDirName:"test-your-app/test-app-security/data-driven",slug:"/test-your-app/test-app-security/data-driven/data-driven-1",permalink:"/test-your-app/test-app-security/data-driven/data-driven-1",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-your-app/test-app-security/data-driven/data-driven-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automatically test APIs for security vulnerabilities",permalink:"/test-your-app/test-app-security/choices"},next:{title:"Data Driven Security Tests - Part 2",permalink:"/test-your-app/test-app-security/data-driven/data-driven-2"}},c=[{value:"1. Import your APIs into Levo SaaS",id:"1-import-your-apis-into-levo-saas",children:[],level:2},{value:"2. Upload a metadata.yml file to enable authorization bypass (RBAC) tests",id:"2-upload-a-metadatayml-file-to-enable-authorization-bypass-rbac-tests",children:[],level:2}],u={toc:c};function d(e){var t=e.components,p=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-driven-security-tests---part-1"},"Data Driven Security Tests - Part 1"),(0,o.kt)("p",null,"Levo will very soon have capabilities to auto generate OpenAPI specifications from live traffic.\nUntil then Levo requires OpenAPI specifications for security test generation."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you don't have OpenAPI specifications, but still want to test your APIs, please email us at ",(0,o.kt)("inlineCode",{parentName:"p"},"support@levo.ai"),".\nWe can work with you to find alternative means to generate OpenAPI specifications using HAR files etc.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(536).Z})),(0,o.kt)("h2",{id:"1-import-your-apis-into-levo-saas"},"1. Import your APIs into Levo SaaS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into the Levo SaaS portal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"API Catalog")," in the side panel and proceed to import you App's API specifications.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the catalog type as ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),", and pick a suitable name for this catalog.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the import, and verify if the API endpoints are visible in the catalog."))),(0,o.kt)("h2",{id:"2-upload-a-metadatayml-file-to-enable-authorization-bypass-rbac-tests"},"2. Upload a metadata.yml file to enable authorization bypass (RBAC) tests"),(0,o.kt)("p",null,"If you are trying Levo for the first time, we recommend you skip this step and proceed to the next step."),(0,o.kt)("p",null,"If you have role based access controls (RBAC) for your APIs, and you wish to validate the proper configuration and functioning of the said controls, you will need to construct a metadata.yml file and upload it to the catalog created in the previous step."),(0,o.kt)("p",null,"You can read more about authorization bypass tests and the metadata.yml file ",(0,o.kt)("a",{parentName:"p",href:"/concepts/api-catalog/metadata-yml"},"here"),"."),(0,o.kt)("p",null,"Please construct an appropriate metadata.yml for your API endpoints and upload it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata")," tab for your API catalog in the Levo SaaS UI."))}d.isMDXComponent=!0},536:function(e,t,a){t.Z=a.p+"assets/images/test-my-apis-flow-chart-f0f52ff84d82c021d97b351648606050.png"}}]);