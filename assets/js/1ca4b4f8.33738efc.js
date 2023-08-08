"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Install Sensor",u={unversionedId:"api-observability/install-guide/install-sensor/install-sensor",id:"api-observability/install-guide/install-sensor/install-sensor",title:"Install Sensor",description:"Depending on your environment, you may choose to install a different Levo sensor to suit your needs.",source:"@site/docs/api-observability/install-guide/install-sensor/install-sensor.md",sourceDirName:"api-observability/install-guide/install-sensor",slug:"/api-observability/install-guide/install-sensor/",permalink:"/api-observability/install-guide/install-sensor/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/install-sensor/install-sensor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install Satellite",permalink:"/api-observability/install-guide/install-satellite"},next:{title:"Install eBPF Sensor",permalink:"/api-observability/install-guide/install-sensor/ebpf-sensor"}},p={},c=[{value:"eBPF Sensor (Recommended)",id:"ebpf-sensor-recommended",level:2},{value:"pcap Sensor",id:"pcap-sensor",level:2},{value:"AWS Traffic Mirroring",id:"aws-traffic-mirroring",level:2},{value:"Teaser",id:"teaser",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-sensor"},"Install Sensor"),(0,a.kt)("p",null,"Depending on your environment, you may choose to install a different Levo sensor to suit your needs."),(0,a.kt)("h2",{id:"ebpf-sensor-recommended"},"eBPF Sensor (Recommended)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have access to the node / VM / machine where your application workloads are running"),(0,a.kt)("li",{parentName:"ul"},"You want to instrument internal applications which do not have public APIs")),(0,a.kt)("p",null,"Read more about the ",(0,a.kt)("a",{parentName:"p",href:"/api-observability/concepts#ebpf-sensor"},"eBPF Sensor here"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/ebpf-sensor"},(0,a.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,a.kt)("h2",{id:"pcap-sensor"},"pcap Sensor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your application workloads are deployed on a Serverless compute architecture (like AWS Fargate)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/pcap-sensor"},(0,a.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,a.kt)("h2",{id:"aws-traffic-mirroring"},"AWS Traffic Mirroring"),(0,a.kt)("p",null,"Use this if you want to use traffic mirroring to instrument your application workloads."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-satellite#install-in-aws-using-levo-satellite-ami"},(0,a.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"teaser"},"Teaser"),(0,a.kt)("p",null,"If you want a quick glimpse of Levo's API Observability without a full installation, check out the ",(0,a.kt)("a",{parentName:"p",href:"/api-observability/quickstart/"},"Teaser page"),"."))}d.isMDXComponent=!0}}]);