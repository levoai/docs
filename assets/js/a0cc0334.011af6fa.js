"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[525],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2673:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:5},u="Supported Platforms",p={unversionedId:"guides/general/supported-platforms",id:"guides/general/supported-platforms",title:"Supported Platforms",description:"What OS platforms are supported?",source:"@site/docs/guides/general/supported-platforms.md",sourceDirName:"guides/general",slug:"/guides/general/supported-platforms",permalink:"/guides/general/supported-platforms",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/general/supported-platforms.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Use a Private Docker Registry for Kubernetes Installations",permalink:"/guides/general/private-registry"},next:{title:"JUnit Format Test Results",permalink:"/guides/miscellaneous/junit-format-results"}},l={},m=[{value:"What OS platforms are supported?",id:"what-os-platforms-are-supported",level:2},{value:"What Kubernetes platforms are supported?",id:"what-kubernetes-platforms-are-supported",level:2},{value:"What is the minimum Kubernetes version supported?",id:"what-is-the-minimum-kubernetes-version-supported",level:2}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("h2",{id:"what-os-platforms-are-supported"},"What OS platforms are supported?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x86-64 Processors only."),(0,o.kt)("li",{parentName:"ul"},"Linux running on bare metal, virtual machine, and container formats."),(0,o.kt)("li",{parentName:"ul"},"Linux Kernel versions 4.14 and above."),(0,o.kt)("li",{parentName:"ul"},"Debian, Fedora, OpenSUSE, and Amazon Linux based distributions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"macOS & Windows Laptops are supported via a proxy based Sensor. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/quickstart/quickstart-mitm"},"Quickstart for macOS/Windows"),".")),(0,o.kt)("h2",{id:"what-kubernetes-platforms-are-supported"},"What Kubernetes platforms are supported?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},"minikube on Linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/#overview"},"AKS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE (Debian Nodes Only. No Container-Optimized OS)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks/"},"EKS"))),(0,o.kt)("p",null,"Support for Docker Desktop, Docker Desktop based Kubernetes, and minikube on MacOS is on the roadmap."),(0,o.kt)("h2",{id:"what-is-the-minimum-kubernetes-version-supported"},"What is the minimum Kubernetes version supported?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum Kubernetes version: ",(0,o.kt)("inlineCode",{parentName:"li"},"1.18.0"),"."),(0,o.kt)("li",{parentName:"ul"},"Kubernetes Node's Linux Kernel version >= ",(0,o.kt)("inlineCode",{parentName:"li"},"4.14"),".")))}d.isMDXComponent=!0}}]);