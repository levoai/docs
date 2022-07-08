"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2967],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return d}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(i),d=n,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return i?r.createElement(b,o(o({ref:t},p),{},{components:i})):r.createElement(b,o({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8002:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=i(3117),n=i(102),a=(i(7294),i(3905)),o=["components"],l={sidebar_position:1},s="Install Guide",c={unversionedId:"beta/api-observability/install-guide/install-guide",id:"beta/api-observability/install-guide/install-guide",title:"Install Guide",description:"This guide provides comprehensive instructions for installing the Satellite, and Sensor on a supported platform of your choice (Kubernetes, Docker, or Linux Virtual Machine).",source:"@site/docs/beta/api-observability/install-guide/install-guide.md",sourceDirName:"beta/api-observability/install-guide",slug:"/beta/api-observability/install-guide/",permalink:"/beta/api-observability/install-guide/",editUrl:"https://github.com/levoai/docs/edit/main/docs/beta/api-observability/install-guide/install-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart - Mac OSX / Windows",permalink:"/beta/api-observability/quickstart/quickstart-laptop"},next:{title:"Compatibility Check",permalink:"/beta/api-observability/install-guide/os-compat-check"}},p={},u=[{value:"1. Signup for a forever free account on Levo.ai",id:"1-signup-for-a-forever-free-account-on-levoai",level:3},{value:"2. OS Platform Compatibility Check",id:"2-os-platform-compatibility-check",level:3},{value:"3. Install Satellite",id:"3-install-satellite",level:3},{value:"4. Install Sensor",id:"4-install-sensor",level:3},{value:"5. Generate Traffic for Your Application",id:"5-generate-traffic-for-your-application",level:3},{value:"6. View Auto-discovered OpenAPI Specifications",id:"6-view-auto-discovered-openapi-specifications",level:3}],f={toc:u};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-guide"},"Install Guide"),(0,a.kt)("p",null,"This guide provides ",(0,a.kt)("em",{parentName:"p"},"comprehensive instructions")," for installing the Satellite, and Sensor on a supported platform of your choice (Kubernetes, Docker, or Linux Virtual Machine)."),(0,a.kt)("p",null,"Platform specific instructions are described in the steps below."),(0,a.kt)("p",null,"Your estimated completion time is ",(0,a.kt)("em",{parentName:"p"},"10 minutes"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install Steps",src:i(8181).Z,width:"965",height:"384"})),(0,a.kt)("h3",{id:"1-signup-for-a-forever-free-account-on-levoai"},"1. ",(0,a.kt)("a",{parentName:"h3",href:"https://levo.ai/levo-signup/"},"Signup")," for a forever free account on Levo.ai"),(0,a.kt)("h3",{id:"2-os-platform-compatibility-check"},"2. ",(0,a.kt)("a",{parentName:"h3",href:"/beta/api-observability/install-guide/os-compat-check"},"OS Platform Compatibility Check")),(0,a.kt)("h3",{id:"3-install-satellite"},"3. ",(0,a.kt)("a",{parentName:"h3",href:"/beta/api-observability/install-guide/install-satellite"},"Install Satellite")),(0,a.kt)("h3",{id:"4-install-sensor"},"4. ",(0,a.kt)("a",{parentName:"h3",href:"/beta/api-observability/install-guide/install-sensor"},"Install Sensor")),(0,a.kt)("h3",{id:"5-generate-traffic-for-your-application"},"5. ",(0,a.kt)("a",{parentName:"h3",href:"/beta/api-observability/install-guide/generate-traffic"},"Generate Traffic for Your Application")),(0,a.kt)("h3",{id:"6-view-auto-discovered-openapi-specifications"},"6. ",(0,a.kt)("a",{parentName:"h3",href:"/beta/api-observability/install-guide/view-api-catalog"},"View Auto-discovered OpenAPI Specifications")))}d.isMDXComponent=!0},8181:function(e,t,i){t.Z=i.p+"assets/images/api-observability-install-008a41043d5e5db3277e4a289b0831b0.svg"}}]);