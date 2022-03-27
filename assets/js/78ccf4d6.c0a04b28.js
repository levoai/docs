"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7505],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},u="Providing Authentication for Tests",l={unversionedId:"tasks/authentication/authn",id:"tasks/authentication/authn",title:"Providing Authentication for Tests",description:"Most API endpoints require some form of user/client authentication. Effective security testing requires providing valid authentication credentials to Levo's autogenerated Test Plans.",source:"@site/docs/tasks/authentication/authn.md",sourceDirName:"tasks/authentication",slug:"/tasks/authentication/authn",permalink:"/tasks/authentication/authn",editUrl:"https://github.com/levoai/docs/edit/main/docs/tasks/authentication/authn.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Providing Authentication / Authorization for Tests",permalink:"/tasks/authentication/authn-authz"},next:{title:"Supported Authentication Methods",permalink:"/tasks/authentication/supported-auth-methods"}},c={},p=[{value:"How do I use <code>environment.yaml</code> file?",id:"how-do-i-use-environmentyaml-file",level:2},{value:"Are my <code>secrets</code> sent to Levo SaaS?",id:"are-my-secrets-sent-to-levo-saas",level:2},{value:"What is the structure of this autogenerated file?",id:"what-is-the-structure-of-this-autogenerated-file",level:2},{value:"Does Levo support other authentication methods?",id:"does-levo-support-other-authentication-methods",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"providing-authentication-for-tests"},"Providing Authentication for Tests"),(0,a.kt)("p",null,"Most API endpoints require some form of user/client authentication. Effective security testing requires providing valid authentication credentials to Levo's autogenerated Test Plans."),(0,a.kt)("p",null,"This information can be provided in a secure, and structured manner via an ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.yaml")," file."),(0,a.kt)("h2",{id:"how-do-i-use-environmentyaml-file"},"How do I use ",(0,a.kt)("inlineCode",{parentName:"h2"},"environment.yaml")," file?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.yaml")," file is autogenerated per ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Plan"),", and needs to be completed with appropriate authentication information, prior to the execution of the Test Plan."),(0,a.kt)("p",null,"The completed file is provided as an argument to the CLI. The CLI uses the credentials to access the target APIs and evaluate their security posture."),(0,a.kt)("h2",{id:"are-my-secrets-sent-to-levo-saas"},"Are my ",(0,a.kt)("inlineCode",{parentName:"h2"},"secrets")," sent to Levo SaaS?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.yaml")," file contains ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," and is ",(0,a.kt)("strong",{parentName:"p"},"never")," sent to, or stored in Levo SaaS. This file is solely consumed by the CLI, and Levo SaaS does not have access to your secrets."),(0,a.kt)("p",null,"Please treat this file securely, and take all precautions necessary for handling secrets."),(0,a.kt)("h2",{id:"what-is-the-structure-of-this-autogenerated-file"},"What is the structure of this autogenerated file?"),(0,a.kt)("p",null,"This section covers authentication for standard security tests. For test plans that involve ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal"},(0,a.kt)("inlineCode",{parentName:"a"},"Horizontal Authorization Abuse")),", and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Vertical"},(0,a.kt)("inlineCode",{parentName:"a"},"Vertical Authorization Abuse"))," test cases, please refer to the ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Providing Authorization Info"),"][./tbd]"," section."),(0,a.kt)("p",null,"If the API endpoints you are testing have no role/scope information (used for granular authorization), and/or not susceptible to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal"},(0,a.kt)("inlineCode",{parentName:"a"},"Horizontal Authorization Abuse")),", then autogenerated file will have the below structure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"# Environment file that contains users, roles and their Authentication\n# mechanisms that will be used by the API endpoints.\niam:\n  users:\n  - name: user_1\n    default: true # This user's credentials will be used to access all API endpoints requiring AuthN\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n")),(0,a.kt)("p",null,"The default authentication mechanism used by Levo is ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Authentication"),". You are required to provide\nvalid ",(0,a.kt)("inlineCode",{parentName:"p"},"bearer tokens")," for the user above (",(0,a.kt)("inlineCode",{parentName:"p"},"user_1"),")."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default: true")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"user_1")," specifies that this user's credentials will be used to access all API endpoints that require authentication."),(0,a.kt)("h3",{id:"does-levo-support-other-authentication-methods"},"Does Levo support other authentication methods?"),(0,a.kt)("p",null,"The next section describes support for various standard and custom authentication methods."))}h.isMDXComponent=!0}}]);