"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[587],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5110:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],p={sidebar_position:2},s="Import API Specifications",l={unversionedId:"guides/security-testing/test-your-app/test-app-security/data-driven/import-apis",id:"guides/security-testing/test-your-app/test-app-security/data-driven/import-apis",title:"Import API Specifications",description:"Levo requires OpenAPI specifications for security test generation. If you already have OpenAPI specifications, you can simply import them into the API Catalog.",source:"@site/docs/guides/security-testing/test-your-app/test-app-security/data-driven/import-apis.md",sourceDirName:"guides/security-testing/test-your-app/test-app-security/data-driven",slug:"/guides/security-testing/test-your-app/test-app-security/data-driven/import-apis",permalink:"/guides/security-testing/test-your-app/test-app-security/data-driven/import-apis",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/test-your-app/test-app-security/data-driven/import-apis.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Driven Security Tests",permalink:"/guides/security-testing/test-your-app/test-app-security/data-driven/"},next:{title:"Auto Generate Test Plan",permalink:"/guides/security-testing/test-your-app/test-app-security/data-driven/generate-test-plan"}},u={},c=[{value:"1. Import your APIs into Levo SaaS",id:"1-import-your-apis-into-levo-saas",level:2},{value:"2. Upload a metadata.yml file to enable authorization bypass (RBAC) tests",id:"2-upload-a-metadatayml-file-to-enable-authorization-bypass-rbac-tests",level:2}],d={toc:c};function m(e){var t=e.components,p=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-api-specifications"},"Import API Specifications"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1920).Z,width:"207",height:"40"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5912).Z,width:"1075",height:"405"})),(0,r.kt)("p",null,"Levo requires OpenAPI specifications for security test generation. If you already have OpenAPI specifications, you can simply import them into the API Catalog."),(0,r.kt)("p",null,"Otherwise OpenAPI specifications can be generated via one of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auto-generate OpenAPI from live traffic via Levo's ",(0,r.kt)("a",{parentName:"li",href:"/guides/api-observability"},"API Observability")," solution"),(0,r.kt)("li",{parentName:"ul"},"If you have Postman Collections, use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/levoai/postman-to-openapi"},"postman-to-openapi")," to generate OpenAPI from your collections"),(0,r.kt)("li",{parentName:"ul"},"If you have HAR files, you can contact ",(0,r.kt)("inlineCode",{parentName:"li"},"support@levo.ai")," to have them converted to OpenAPI specifications")),(0,r.kt)("h2",{id:"1-import-your-apis-into-levo-saas"},"1. Import your APIs into Levo SaaS"),(0,r.kt)("p",null,"If you are using an auto-generated ",(0,r.kt)("inlineCode",{parentName:"p"},"API Catalog"),", pick your ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," from the catalog and go to the next step."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login into the Levo SaaS portal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"API Catalog")," in the side panel and proceed to import you App's API specifications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the catalog type as ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),", and pick a suitable name for this catalog.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the import, and verify if the API endpoints are visible in the catalog."))),(0,r.kt)("h2",{id:"2-upload-a-metadatayml-file-to-enable-authorization-bypass-rbac-tests"},"2. Upload a metadata.yml file to enable authorization bypass (RBAC) tests"),(0,r.kt)("p",null,"If you are trying Levo for the first time, we recommend you skip this step and proceed to the next step."),(0,r.kt)("p",null,"If you have role based access controls (RBAC) for your APIs, and you wish to validate the proper configuration and functioning of the said controls, you will need to construct a metadata.yml file and upload it to the catalog created in the previous step."),(0,r.kt)("p",null,"You can read more about authorization bypass tests and the metadata.yml file ",(0,r.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/metadata-yml"},"here"),"."),(0,r.kt)("p",null,"Please construct an appropriate metadata.yml for your API endpoints and upload it via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," tab for your API catalog in the Levo SaaS UI."))}m.isMDXComponent=!0},5912:function(e,t,a){t.Z=a.p+"assets/images/data-driven-flow-1-72d6802b251db48f71bf2269ca0c5012.svg"},1920:function(e,t,a){t.Z=a.p+"assets/images/data-driven-test-plan-2bac0366423c95594a969719901fed4e.svg"}}]);