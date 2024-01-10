"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8390],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4129:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],p={sidebar_position:5},l="Demo Application",c={unversionedId:"api-observability/quickstart/sample-app",id:"api-observability/quickstart/sample-app",title:"Demo Application",description:"crAPI is an API driven sample application, that can be used to evaluate API Observability.",source:"@site/docs/api-observability/quickstart/sample-app.md",sourceDirName:"api-observability/quickstart",slug:"/api-observability/quickstart/sample-app",permalink:"/api-observability/quickstart/sample-app",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/quickstart/sample-app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quickstart with MITM proxy in Docker",permalink:"/api-observability/quickstart/quickstart-mitm"},next:{title:"Common Tasks",permalink:"/api-observability/common-tasks/"}},s={},u=[],m={toc:u};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"demo-application"},"Demo Application"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"crAPI")," is an API driven sample application, that can be used to evaluate API Observability."),(0,i.kt)("p",null,"You can read more about ",(0,i.kt)("em",{parentName:"p"},"crAPI")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/README.md"},"here"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First follow instructions in the ",(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/"},"Install Guide")," to install the Satellite, and Sensor components successfully.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now install the crAPI demo application by following instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate traffic for crAPI by browsing its web UI for at least five minutes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the API Catalog in the Levo web console to see auto discovered OpenAPI specifications for crAPI. The specifications will be grouped under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Application Name")," you specified when installing the Sensor."))),(0,i.kt)("p",null,"Congratulations! You are done."))}b.isMDXComponent=!0}}]);