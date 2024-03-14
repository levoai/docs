"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9618],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||c[m]||i;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8303:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),s=["components"],o={sidebar_position:0},l="Install eBPF Sensor",p={unversionedId:"install-traffic-capture-sensors/ebpf-sensor/ebpf-sensor",id:"install-traffic-capture-sensors/ebpf-sensor/ebpf-sensor",title:"Install eBPF Sensor",description:"i. Prerequisites",source:"@site/docs/install-traffic-capture-sensors/ebpf-sensor/ebpf-sensor.mdx",sourceDirName:"install-traffic-capture-sensors/ebpf-sensor",slug:"/install-traffic-capture-sensors/ebpf-sensor/",permalink:"/install-traffic-capture-sensors/ebpf-sensor/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/ebpf-sensor/ebpf-sensor.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Install Traffic Capture Sensors",permalink:"/install-traffic-capture-sensors/"},next:{title:"Sensor on Kubernetes",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-kubernetes"}},u={},c=[{value:"i. Prerequisites",id:"i-prerequisites",level:2},{value:"ii. Pick an <code>Application Name</code>",id:"ii-pick-an-application-name",level:2},{value:"iii. Follow instructions for your platform",id:"iii-follow-instructions-for-your-platform",level:2},{value:"Sensor Lifecycle Management",id:"sensor-lifecycle-management",level:2},{value:"Uninstall Sensor",id:"uninstall-sensor",level:3},{value:"Get Sensor Logs",id:"get-sensor-logs",level:3},{value:"Upgrade Sensor",id:"upgrade-sensor",level:3},{value:"Manage Sensor Configuration",id:"manage-sensor-configuration",level:3}],f={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-ebpf-sensor"},"Install eBPF Sensor"),(0,i.kt)("h2",{id:"i-prerequisites"},"i. Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compatibility script (from step 1) indicates the Linux host (that you want to instrument) is compatible."),(0,i.kt)("li",{parentName:"ul"},"Satellite has been successfully installed."),(0,i.kt)("li",{parentName:"ul"},"You have noted down the Satellite's ",(0,i.kt)("inlineCode",{parentName:"li"},"hostname:port")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"ip-address:port")," information."),(0,i.kt)("li",{parentName:"ul"},"The Satellite is reachable (via HTTP/s) from the location where you are going to install the Sensor.")),(0,i.kt)("h2",{id:"ii-pick-an-application-name"},"ii. Pick an ",(0,i.kt)("inlineCode",{parentName:"h2"},"Application Name")),(0,i.kt)("p",null,"Auto discovered API endpoints and their OpenAPI specifications are show in the ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system."),(0,i.kt)("p",null,"Pick a descriptive name which will be used in the subsequent step below. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"my-test-app"),"."),(0,i.kt)("h2",{id:"iii-follow-instructions-for-your-platform"},"iii. Follow instructions for your platform"),(0,i.kt)("p",null,"Follow instructions for your specific platform/method below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/install-traffic-capture-sensors/ebpf-sensor/sensor-kubernetes"},"Install on Kubernetes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/install-traffic-capture-sensors/ebpf-sensor/sensor-aws-ecs-terraform"},"Install on AWS ECS using Terraform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/install-traffic-capture-sensors/ebpf-sensor/sensor-docker"},"Install on Linux host via Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package"},"Install on Debian based Linux Distributions via ",(0,i.kt)("inlineCode",{parentName:"a"},"apt"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/install-traffic-capture-sensors/ebpf-sensor/sensor-yum-package"},"Install on RPM based Linux Distributions via ",(0,i.kt)("inlineCode",{parentName:"a"},"yum")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sensor-lifecycle-management"},"Sensor Lifecycle Management"),(0,i.kt)("h3",{id:"uninstall-sensor"},"Uninstall Sensor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall levoai-sensor -n levoai\n")),(0,i.kt)("h3",{id:"get-sensor-logs"},"Get Sensor Logs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n levoai\n\nkubectl logs -n levoai <pod name>\n")),(0,i.kt)("h3",{id:"upgrade-sensor"},"Upgrade Sensor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uninstall Sensor"),(0,i.kt)("li",{parentName:"ul"},"Reinstall Sensor")),(0,i.kt)("h3",{id:"manage-sensor-configuration"},"Manage Sensor Configuration"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/common-tasks/sensor-configuration"},"Sensor Configuration"),", and ",(0,i.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/common-tasks/sensor-configuration#running-on-kubernetes"},"Applying Configuration Changes"),"."))}m.isMDXComponent=!0}}]);