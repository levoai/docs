"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,b=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5019:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},c="View API Catalog",p={unversionedId:"beta/api-observability/install-guide/view-api-catalog",id:"beta/api-observability/install-guide/view-api-catalog",title:"View API Catalog",description:"The API Catalog in Levo.ai should be auto populated in a matter of minutes (after your API endpoints are being exercised consistently).",source:"@site/docs/beta/api-observability/install-guide/view-api-catalog.md",sourceDirName:"beta/api-observability/install-guide",slug:"/beta/api-observability/install-guide/view-api-catalog",permalink:"/beta/api-observability/install-guide/view-api-catalog",editUrl:"https://github.com/levoai/docs/edit/main/docs/beta/api-observability/install-guide/view-api-catalog.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Generate Application Traffic",permalink:"/beta/api-observability/install-guide/generate-traffic"},next:{title:"Demo Application",permalink:"/beta/api-observability/sample-app"}},u={},s=[],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"view-api-catalog"},"View API Catalog"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/concepts/api-catalog/"},"API Catalog")," in Levo.ai should be auto populated in a matter of minutes (after your API endpoints are being exercised consistently)."),(0,i.kt)("p",null,"The API Catalog will contain your auto discovered API endpoints and their OpenAPI schemas, all grouped under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Application Name")," you chose earlier."),(0,i.kt)("p",null,"Congratulations! You have successfully auto discovered and auto documented API endpoints in your application."))}f.isMDXComponent=!0}}]);