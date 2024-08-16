"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[590],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5,title:"Secure Your APIs: Implement Robust Vertical AuthZ Testing"},u="Providing Authorization Information for `Vertical Authorization Abuse` Test Cases",l={unversionedId:"guides/security-testing/common-tasks/authn-authz/vertical-authz",id:"guides/security-testing/common-tasks/authn-authz/vertical-authz",title:"Secure Your APIs: Implement Robust Vertical AuthZ Testing",description:"Testing for Vertical Authorization Abuse, requires credentials for additional users, and their associated role information.",source:"@site/docs/guides/security-testing/common-tasks/authn-authz/vertical-authz.md",sourceDirName:"guides/security-testing/common-tasks/authn-authz",slug:"/guides/security-testing/common-tasks/authn-authz/vertical-authz",permalink:"/guides/security-testing/common-tasks/authn-authz/vertical-authz",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/common-tasks/authn-authz/vertical-authz.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Secure Your APIs: Implement Robust Vertical AuthZ Testing"},sidebar:"tutorialSidebar",previous:{title:"Stop Unauthorized Access: Secure APIs with Horizontal AuthZ",permalink:"/guides/security-testing/common-tasks/authn-authz/horizontal-authz"},next:{title:"Prevent Data Leaks & Access Issues: Test Both AuthZ Types",permalink:"/guides/security-testing/common-tasks/authn-authz/horizontal-n-vertical-authz"}},c={},p=[],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"providing-authorization-information-for-vertical-authorization-abuse-test-cases"},"Providing Authorization Information for ",(0,i.kt)("inlineCode",{parentName:"h1"},"Vertical Authorization Abuse")," Test Cases"),(0,i.kt)("p",null,"Testing for ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Vertical"},(0,i.kt)("inlineCode",{parentName:"a"},"Vertical Authorization Abuse")),", requires credentials for additional users, and their associated role information."),(0,i.kt)("p",null,"User ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," information for API endpoints is provided in the API catalog via the ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/metadata-yml"},"metadata.yml file"),". The metadata file specifies the various roles used by the API, and specific roles that apply to specific API endpoints."),(0,i.kt)("p",null,"While the metadata file is used to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," information, the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file requires the provisioning of one or more users per role (as specified in the metadata file), and their respective authentication credentials."),(0,i.kt)("p",null,"For example if the metadata file has specified two roles (",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_USER"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN"),"), the autogenerated ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file will have the below structure (assuming the default Bearer AuthN mechanism is being used)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"# Environment file that contains users, roles and their Authentication\n# mechanisms that will be used by the API endpoints.\niam:\n  users:\n  # List all the users, their roles, username and password,\n  # if required, in this section.\n  # The default flag should be true if this user should be used\n  # as the default user for that role. If there are no roles,\n  # only one user should have default: True.\n  - name: user_1\n    default: true # Default user for `ROLE_USER`\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n    roles:\n        - ROLE_USER\n  - name: user_2\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n    roles:\n        - ROLE_ADMIN\n")),(0,i.kt)("p",null,"If using an authentication mechanism other than Bearer AuthN, please modify the auto generated YAML appropriately."))}d.isMDXComponent=!0}}]);