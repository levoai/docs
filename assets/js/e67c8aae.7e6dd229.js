"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9857],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,keywords:["API Authorization","Roles","Scopes"]},c="Metadata.yml file",l={unversionedId:"guides/security-testing/concepts/api-catalog/metadata-yml",id:"guides/security-testing/concepts/api-catalog/metadata-yml",title:"Metadata.yml file",description:"What is it?",source:"@site/docs/guides/security-testing/concepts/api-catalog/metadata-yml.md",sourceDirName:"guides/security-testing/concepts/api-catalog",slug:"/guides/security-testing/concepts/api-catalog/metadata-yml",permalink:"/guides/security-testing/concepts/api-catalog/metadata-yml",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/concepts/api-catalog/metadata-yml.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["API Authorization","Roles","Scopes"]},sidebar:"tutorialSidebar",previous:{title:"API Catalog",permalink:"/guides/security-testing/concepts/api-catalog/"},next:{title:"Test Plans",permalink:"/guides/security-testing/concepts/test-plans/"}},p={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"Are there other uses for this file?",id:"are-there-other-uses-for-this-file",level:2},{value:"How do I provide RBAC information for my API endpoints?",id:"how-do-i-provide-rbac-information-for-my-api-endpoints",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadatayml-file"},"Metadata.yml file"),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"Often API endpoints enforce granular authorization controls on users/clients using role based access control (RBAC) mechanisms. Effective security testing involves evaluating the proper configuration and functioning of these RBAC controls."),(0,o.kt)("p",null,"Currently there is no industry standard way to express RBAC information in OpenAPI specifications."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.yml")," allows associating RBAC information with API endpoints present in Levo's API Catalog."),(0,o.kt)("p",null,"Associating RBAC information with API endpoints in the API catalog is completely optional. However, if testing authorization controls is desired, then providing RBAC information via the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.yml")," file is mandatory."),(0,o.kt)("h2",{id:"are-there-other-uses-for-this-file"},"Are there other uses for this file?"),(0,o.kt)("p",null,"RESTful APIs operate on resources, and provide ",(0,o.kt)("inlineCode",{parentName:"p"},"CRUD")," operations on those resources. Effective security also requires evaluating the proper functioning of state transitions that happen across these ",(0,o.kt)("inlineCode",{parentName:"p"},"CRUD")," operations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.yml")," also allows grouping API endpoints for specific resources, so that Levo can auto generate tests that evaluate the consistency of state changing ",(0,o.kt)("inlineCode",{parentName:"p"},"CRUD")," operation sequences."),(0,o.kt)("h2",{id:"how-do-i-provide-rbac-information-for-my-api-endpoints"},"How do I provide RBAC information for my API endpoints?"),(0,o.kt)("p",null,"You can get detailed information ",(0,o.kt)("a",{parentName:"p",href:"/guides/security-testing/common-tasks/api-rbac"},"here")))}f.isMDXComponent=!0}}]);