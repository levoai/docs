"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9312],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,b=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3333:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:5},l="Generate Application Traffic",c={unversionedId:"api-observability/install-guide/generate-traffic",id:"api-observability/install-guide/generate-traffic",title:"Generate Application Traffic",description:"The Sensor picks up API traffic that is HTTP\\1.x based, on the instrumented host. There has to be some consistent load on your API endpoints for them to be auto discovered and documented.",source:"@site/docs/api-observability/install-guide/generate-traffic.md",sourceDirName:"api-observability/install-guide",slug:"/api-observability/install-guide/generate-traffic",permalink:"/api-observability/install-guide/generate-traffic",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/generate-traffic.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Install Sensor",permalink:"/api-observability/install-guide/install-sensor"},next:{title:"View API Catalog",permalink:"/api-observability/install-guide/view-api-catalog"}},p={},u=[{value:"Verify API Traffic Capture",id:"verify-api-traffic-capture",level:2}],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generate-application-traffic"},"Generate Application Traffic"),(0,a.kt)("p",null,"The Sensor picks up API traffic that is HTTP\\1.x based, on the instrumented host. There has to be some consistent load on your API endpoints for them to be auto discovered and documented."),(0,a.kt)("p",null,"Please ensure you exercise your API endpoints several times using tools like ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),", ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl"),", etc. Alternatively use a load generator script that consistently exercises your API endpoints."),(0,a.kt)("p",null,"API endpoints that are TLS based should be picked up by the Sensor, albeit with some caveats. Please see ",(0,a.kt)("a",{parentName:"p",href:"/api-observability/faqs"},"FAQs")," for more information. "),(0,a.kt)("h2",{id:"verify-api-traffic-capture"},"Verify API Traffic Capture"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/api-observability/common-tasks/satellite/satellite-mgmt"},"platform specific instructions"),", for accessing logs of Satellite's ",(0,a.kt)("inlineCode",{parentName:"p"},"Collector")," sub-component."),(0,a.kt)("p",null,"If API Traffic is correctly being processed, you will see log entries similar to below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'2022-06-10T17:04:56.494Z    INFO    loggingexporter/logging_exporter.go:43  TracesExporter  {"#spans": 20}\n')))}d.isMDXComponent=!0}}]);