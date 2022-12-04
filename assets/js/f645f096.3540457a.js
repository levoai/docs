"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[308],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},c="Environment.yml file",l={unversionedId:"security-contract-testing/concepts/test-plans/env-yml",id:"security-contract-testing/concepts/test-plans/env-yml",title:"Environment.yml file",description:"Most API endpoints require some form of user/client authentication. In addition, API endpoints may also enforce granular authorization controls on users/clients using role based access control (RBAC) mechanisms.",source:"@site/docs/security-contract-testing/concepts/test-plans/env-yml.md",sourceDirName:"security-contract-testing/concepts/test-plans",slug:"/security-contract-testing/concepts/test-plans/env-yml",permalink:"/security-contract-testing/concepts/test-plans/env-yml",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-contract-testing/concepts/test-plans/env-yml.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Test Plan Types",permalink:"/security-contract-testing/concepts/test-plans/test-plan-types"},next:{title:"Test Fixtures for API Parameters",permalink:"/security-contract-testing/concepts/test-plans/fixtures/test-fixtures"}},u={},p=[{value:"How do I use <code>environment.yml</code> file?",id:"how-do-i-use-environmentyml-file",level:2},{value:"Are my <code>secrets</code> sent to Levo SaaS?",id:"are-my-secrets-sent-to-levo-saas",level:2},{value:"Tell me more",id:"tell-me-more",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environmentyml-file"},"Environment.yml file"),(0,i.kt)("p",null,"Most API endpoints require some form of user/client authentication. In addition, API endpoints may also enforce granular authorization controls on users/clients using role based access control (RBAC) mechanisms."),(0,i.kt)("p",null,"Effective security testing requires providing valid users and their respective authentication credentials to Levo's autogenerated Test Plans."),(0,i.kt)("p",null,"This information can be provided in a secure, and structured manner via an ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file."),(0,i.kt)("h2",{id:"how-do-i-use-environmentyml-file"},"How do I use ",(0,i.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file is autogenerated per ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Plan"),", and needs to be completed with appropriate user/authentication information, prior to the execution of the Test Plan."),(0,i.kt)("p",null,"The completed file is provided as an argument to the CLI. The CLI uses the credentials to access the target APIs and evaluate their security posture."),(0,i.kt)("h2",{id:"are-my-secrets-sent-to-levo-saas"},"Are my ",(0,i.kt)("inlineCode",{parentName:"h2"},"secrets")," sent to Levo SaaS?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file contains ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets")," and is ",(0,i.kt)("strong",{parentName:"p"},"never")," sent to, or stored in Levo SaaS. This file is solely consumed by the CLI, and Levo SaaS does not have access to your secrets."),(0,i.kt)("p",null,"Please treat this file securely, and take all precautions necessary for handling secrets."),(0,i.kt)("h2",{id:"tell-me-more"},"Tell me more"),(0,i.kt)("p",null,"You can find more information on providing authentication/authorization information for tests ",(0,i.kt)("a",{parentName:"p",href:"/security-contract-testing/tasks/authentication/authn-authz"},"here")))}d.isMDXComponent=!0}}]);