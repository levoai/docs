"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[250],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1262:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(2389);function a(e){var t=e.children,n=e.fallback;return(0,o.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=n?n:null}},5909:function(e,t,n){n.r(t),n.d(t,{DownloadMainTF:function(){return d},assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=n(1262),s=["components"],l={sidebar_position:2},c="Sensor on AWS ECS using Terraform",u={unversionedId:"install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform",id:"install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform",title:"Sensor on AWS ECS using Terraform",description:"Install on AWS ECS using Terraform",source:"@site/docs/install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform.mdx",sourceDirName:"install-traffic-capture-sensors/ebpf-sensor",slug:"/install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install eBPF Sensor on Kubernetes | Levo.ai Documentation",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-kubernetes"},next:{title:"Install eBPF Sensor on Docker | Levo.ai Documentation",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-docker"}},p={},f=[{value:"Install on AWS ECS using Terraform",id:"install-on-aws-ecs-using-terraform",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Creating a Task Definition",id:"1-creating-a-task-definition",level:3},{value:"2. Run the Sensor",id:"2-run-the-sensor",level:3},{value:"3. Verify connectivity with Satellite",id:"3-verify-connectivity-with-satellite",level:3},{value:"i. Check Sensor health",id:"i-check-sensor-health",level:4},{value:"ii. Check connectivity",id:"ii-check-connectivity",level:4}];function d(){return(0,a.kt)(i.Z,{fallback:(0,a.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,a.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/sensor/main.tf",download:!0}," main.tf")}))}var h={toc:f,DownloadMainTF:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sensor-on-aws-ecs-using-terraform"},"Sensor on AWS ECS using Terraform"),(0,a.kt)("h2",{id:"install-on-aws-ecs-using-terraform"},"Install on AWS ECS using Terraform"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access to AWS ECS."),(0,a.kt)("li",{parentName:"ul"},"Terraform CLI installed.")),(0,a.kt)("h3",{id:"1-creating-a-task-definition"},"1. Creating a Task Definition"),(0,a.kt)("p",null,"Download the ",(0,a.kt)(d,{mdxType:"DownloadMainTF"})," file."),(0,a.kt)("p",null,"Run the following command in the same directory -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,a.kt)("p",null,"Enter the Collector URL as prompted to create a task definition in your AWS account."),(0,a.kt)("h3",{id:"2-run-the-sensor"},"2. Run the Sensor"),(0,a.kt)("p",null,"Now that we have created a task definition, we will start our satellite up as a service in an ECS cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the levo-satellite task definition, and click on the latest revision."),(0,a.kt)("li",{parentName:"ul"},"Head over to ",(0,a.kt)("inlineCode",{parentName:"li"},"deploy")," and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Service"),"."),(0,a.kt)("li",{parentName:"ul"},"Choose the cluster you want to deploy the satellite."),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Compute Options")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"Launch Type")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"FARGATE"),". If you have requirements for your EC2 nodes, refer to our ",(0,a.kt)("a",{parentName:"li",href:"/install-traffic-capture-sensors/pcap-sensor"},"pcap-sensor"),"."),(0,a.kt)("li",{parentName:"ul"},"Leave the other configurations on default settings, and start the service.")),(0,a.kt)("h3",{id:"3-verify-connectivity-with-satellite"},"3. Verify connectivity with Satellite"),(0,a.kt)("h4",{id:"i-check-sensor-health"},"i. Check Sensor health"),(0,a.kt)("p",null,"Check the health of the Sensor by checking the task health in the AWS ECS console."),(0,a.kt)("p",null,"If the Sensor is healthy, you should see the task running similar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Running")," status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"status\nRunning\n")),(0,a.kt)("h4",{id:"ii-check-connectivity"},"ii. Check connectivity"),(0,a.kt)("p",null,"Head over to the logs for the sensor's task and you should see output similar to below if the connectivity is healthy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022/06/13 21:15:40 729071  INFO [ebpf_sensor.cpp->main:120]    Initial connection with Collector was successful.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please contact ",(0,a.kt)("inlineCode",{parentName:"strong"},"support@levo.ai")," if you notice health/connectivity related errors.")),(0,a.kt)("p",null,"Please proceed to the next step, if there are no errors."))}m.isMDXComponent=!0}}]);