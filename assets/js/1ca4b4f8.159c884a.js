"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},s="Install Sensor",u={unversionedId:"api-observability/install-guide/install-sensor/install-sensor",id:"api-observability/install-guide/install-sensor/install-sensor",title:"Install Sensor",description:"Depending on your environment, you may choose to install a different Levo sensor to suit your needs.",source:"@site/docs/api-observability/install-guide/install-sensor/install-sensor.md",sourceDirName:"api-observability/install-guide/install-sensor",slug:"/api-observability/install-guide/install-sensor/",permalink:"/api-observability/install-guide/install-sensor/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/install-sensor/install-sensor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install Satellite",permalink:"/api-observability/install-guide/install-satellite"},next:{title:"Install eBPF Sensor",permalink:"/api-observability/install-guide/install-sensor/ebpf-sensor"}},p={},c=[{value:"eBPF Sensor (Recommended)",id:"ebpf-sensor-recommended",level:2},{value:"PCAP Sensor",id:"pcap-sensor",level:2},{value:"AWS Traffic Mirroring",id:"aws-traffic-mirroring",level:2},{value:"Cloudflare Worker",id:"cloudflare-worker",level:2},{value:"AWS CloudFront Lambda@Edge",id:"aws-cloudfront-lambdaedge",level:2},{value:"Azure API Management Policy",id:"azure-api-management-policy",level:2},{value:"Quickstart",id:"quickstart",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-sensor"},"Install Sensor"),(0,i.kt)("p",null,"Depending on your environment, you may choose to install a different Levo sensor to suit your needs."),(0,i.kt)("h2",{id:"ebpf-sensor-recommended"},"eBPF Sensor (Recommended)"),(0,i.kt)("p",null,"You should install the ",(0,i.kt)("a",{parentName:"p",href:"/api-observability/concepts#ebpf-sensor"},"eBPF sensor")," if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have access to the node / VM / machine where your application workloads are running"),(0,i.kt)("li",{parentName:"ul"},"In addition to your publicly exposed services, you want to instrument internal applications which do not have public API endpoints")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/ebpf-sensor"},(0,i.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,i.kt)("h2",{id:"pcap-sensor"},"PCAP Sensor"),(0,i.kt)("p",null,"You should install the pcap sensor if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your application workloads are deployed on a Serverless compute architecture (like AWS Fargate)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/pcap-sensor"},(0,i.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,i.kt)("h2",{id:"aws-traffic-mirroring"},"AWS Traffic Mirroring"),(0,i.kt)("p",null,"Use this if you want to use traffic mirroring to instrument your application workloads."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/aws-traffic-mirroring"},(0,i.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,i.kt)("h2",{id:"cloudflare-worker"},"Cloudflare Worker"),(0,i.kt)("p",null,"You may install Levo's Cloudflare Worker if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You are using Cloudflare for DNS, and you have ",(0,i.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/"},"proxying")," enabled.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/cloudflare-worker"},(0,i.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,i.kt)("h2",{id:"aws-cloudfront-lambdaedge"},"AWS CloudFront Lambda@Edge"),(0,i.kt)("p",null,"You may install Levo's CloudFront Lambda@Edge functions if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You are using CloudFront as a CDN for your API endpoints.")),(0,i.kt)("p",null,"Note that CloudFront does not provide access to the API endpoint response bodies."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/aws-cloudfront"},(0,i.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,i.kt)("h2",{id:"azure-api-management-policy"},"Azure API Management Policy"),(0,i.kt)("p",null,"You should install Levo's Azure API Management policy if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your API endpoints are managed by Azure API Management.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-observability/install-guide/install-sensor/azure-api-management"},(0,i.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"If you want a quick glimpse of Levo's API Observability without a full installation, check out the ",(0,i.kt)("a",{parentName:"p",href:"/api-observability/quickstart/"},"Quickstart page"),"."))}f.isMDXComponent=!0}}]);