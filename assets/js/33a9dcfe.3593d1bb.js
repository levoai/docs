"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1643],{3905:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return l}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},h=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,h=u(t,["components","mdxType","originalType","parentName"]),f=c(n),l=o,d=f["".concat(s,".").concat(l)]||f[l]||p[l]||r;return n?i.createElement(d,a(a({ref:e},h),{},{components:n})):i.createElement(d,a({ref:e},h))}));function l(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=f;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5750:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],u={sidebar_position:0},s="Providing Authentication / Authorization for Tests",c={unversionedId:"tasks/authentication/authn-authz",id:"tasks/authentication/authn-authz",title:"Providing Authentication / Authorization for Tests",description:"Most API endpoints require some form of user/client authentication, and authorization. Effective security testing requires providing valid authentication credentials to Levo's autogenerated Test Plans.",source:"@site/docs/tasks/authentication/authn-authz.md",sourceDirName:"tasks/authentication",slug:"/tasks/authentication/authn-authz",permalink:"/tasks/authentication/authn-authz",editUrl:"https://github.com/levoai/docs/edit/main/docs/tasks/authentication/authn-authz.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Common Tasks",permalink:"/tasks/"},next:{title:"Providing Authentication for Tests",permalink:"/tasks/authentication/authn"}},h={},p=[{value:"Providing Authentication Information",id:"providing-authentication-information",level:3},{value:"Supported Authentication Methods",id:"supported-authentication-methods",level:3},{value:"Providing Authorization Information for Authorization Abuse Tests",id:"providing-authorization-information-for-authorization-abuse-tests",level:3}],f={toc:p};function l(t){var e=t.components,n=(0,o.Z)(t,a);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"providing-authentication--authorization-for-tests"},"Providing Authentication / Authorization for Tests"),(0,r.kt)("p",null,"Most API endpoints require some form of user/client authentication, and authorization. Effective security testing requires providing valid authentication credentials to Levo's autogenerated Test Plans."),(0,r.kt)("p",null,"Below sections cover the provisioning of authentication and authorization information for test plans."),(0,r.kt)("h3",{id:"providing-authentication-information"},(0,r.kt)("a",{parentName:"h3",href:"/tasks/authentication/authn"},"Providing Authentication Information")),(0,r.kt)("h3",{id:"supported-authentication-methods"},(0,r.kt)("a",{parentName:"h3",href:"/tasks/authentication/supported-auth-methods"},"Supported Authentication Methods")),(0,r.kt)("h3",{id:"providing-authorization-information-for-authorization-abuse-tests"},(0,r.kt)("a",{parentName:"h3",href:"/tasks/authentication/authz"},"Providing Authorization Information for Authorization Abuse Tests")))}l.isMDXComponent=!0}}]);