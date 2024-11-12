"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[296],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:0},i="Install Traffic Capture Sensors",u={unversionedId:"install-traffic-capture-sensors/install-traffic-capture-sensors",id:"install-traffic-capture-sensors/install-traffic-capture-sensors",title:"Install Traffic Capture Sensors",description:"Depending on your environment, you may choose to install a different Levo sensor to suit your needs.",source:"@site/docs/install-traffic-capture-sensors/install-traffic-capture-sensors.md",sourceDirName:"install-traffic-capture-sensors",slug:"/install-traffic-capture-sensors/",permalink:"/install-traffic-capture-sensors/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/install-traffic-capture-sensors.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Satellite on Windows VM",permalink:"/install-satellite/satellite-windows"},next:{title:"Install eBPF Sensor",permalink:"/install-traffic-capture-sensors/ebpf-sensor/"}},c={},p=[{value:"eBPF Sensor (Recommended)",id:"ebpf-sensor-recommended",level:2},{value:"PCAP Sensor",id:"pcap-sensor",level:2},{value:"AWS Fargate Sensor",id:"aws-fargate-sensor",level:2},{value:"Windows Sensor",id:"windows-sensor",level:2},{value:"AWS Traffic Mirroring",id:"aws-traffic-mirroring",level:2},{value:"Cloudflare Worker",id:"cloudflare-worker",level:2},{value:"AWS CloudFront Lambda@Edge",id:"aws-cloudfront-lambdaedge",level:2},{value:"AWS API Gateway",id:"aws-api-gateway",level:2},{value:"Azure API Management Policy",id:"azure-api-management-policy",level:2},{value:"Quickstart",id:"quickstart",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-traffic-capture-sensors"},"Install Traffic Capture Sensors"),(0,o.kt)("p",null,"Depending on your environment, you may choose to install a different Levo sensor to suit your needs."),(0,o.kt)("h2",{id:"ebpf-sensor-recommended"},"eBPF Sensor (Recommended)"),(0,o.kt)("p",null,"You should install the ",(0,o.kt)("a",{parentName:"p",href:"/guides/key-concepts#ebpf-sensor"},"eBPF sensor")," if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have access to the node / VM / machine where your application workloads are running"),(0,o.kt)("li",{parentName:"ul"},"In addition to your publicly exposed services, you want to instrument internal applications which do not have public API endpoints")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/ebpf-sensor"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"pcap-sensor"},"PCAP Sensor"),(0,o.kt)("p",null,"You should install the pcap sensor if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your application workloads are deployed on a Serverless compute architecture (like AWS Fargate)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/pcap-sensor"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"aws-fargate-sensor"},"AWS Fargate Sensor"),(0,o.kt)("p",null,"To install AWS Fargate sensor:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:")),"  You need to have the satellite installed to configure the sensor to point to it. If you haven't done it already, head over to ",(0,o.kt)("a",{parentName:"p",href:"/install-satellite"},"Install Satellite "),"\nMake sure the satellite is able to listen on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9999"),"\nEdit Inbound Rules to accept port ",(0,o.kt)("inlineCode",{parentName:"p"},"9999")," in case the satellite is running on an AWS instance.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/sensor-fargate"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"windows-sensor"},"Windows Sensor"),(0,o.kt)("p",null,"You should install the windows sensor if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your application workloads are deployed on a windows Servers compute architecture.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/windows-sensor"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"aws-traffic-mirroring"},"AWS Traffic Mirroring"),(0,o.kt)("p",null,"Use this if you want to use traffic mirroring to instrument your application workloads."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/aws-traffic-mirroring"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"cloudflare-worker"},"Cloudflare Worker"),(0,o.kt)("p",null,"You may install Levo's Cloudflare Worker if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are using Cloudflare for DNS, and you have ",(0,o.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/"},"proxying")," enabled.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/cloudflare-worker"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"aws-cloudfront-lambdaedge"},"AWS CloudFront Lambda@Edge"),(0,o.kt)("p",null,"You may install Levo's CloudFront Lambda@Edge functions if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are using CloudFront as a CDN for your API endpoints.")),(0,o.kt)("p",null,"Note that CloudFront does not provide access to the API endpoint response bodies."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/aws-cloudfront"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"aws-api-gateway"},"AWS API Gateway"),(0,o.kt)("p",null,"You may instrument your AWS API Gateway endpoints with CloudWatch Logs."),(0,o.kt)("p",null,"However, CloudWatch only provides endpoints access logs and API endpoint request and response bodies will not be available."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/aws-api-gateway"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("h2",{id:"azure-api-management-policy"},"Azure API Management Policy"),(0,o.kt)("p",null,"You should install Levo's Azure API Management policy if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your API endpoints are managed by Azure API Management.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/azure-api-management"},(0,o.kt)("strong",{parentName:"a"},"Click here for the installation instructions")),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"If you want a quick glimpse of Levo's API Observability without a full installation, check out the ",(0,o.kt)("a",{parentName:"p",href:"/quickstart"},"Quickstart page"),"."))}d.isMDXComponent=!0}}]);