"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:7},s="Log Parser",p={unversionedId:"api-observability/install-guide/install-sensor/log-parser",id:"api-observability/install-guide/install-sensor/log-parser",title:"Log Parser",description:"Access Logs Based Instrumentation",source:"@site/docs/api-observability/install-guide/install-sensor/log-parser.md",sourceDirName:"api-observability/install-guide/install-sensor",slug:"/api-observability/install-guide/install-sensor/log-parser",permalink:"/api-observability/install-guide/install-sensor/log-parser",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/install-sensor/log-parser.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Azure API Management",permalink:"/api-observability/install-guide/install-sensor/azure-api-management"},next:{title:"Quickstart",permalink:"/api-observability/quickstart/"}},u={},c=[{value:"Access Logs Based Instrumentation",id:"access-logs-based-instrumentation",level:2},{value:"i. Pre-requisites",id:"i-pre-requisites",level:3},{value:"ii. Pick an <code>Application Name</code>",id:"ii-pick-an-application-name",level:2},{value:"iii. Follow instructions for your platform",id:"iii-follow-instructions-for-your-platform",level:2},{value:"Install on Linux host via Docker",id:"install-on-linux-host-via-docker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install Log Parser",id:"1-install-log-parser",level:3},{value:"NOTE:",id:"note",level:4},{value:"2. Verify connectivity with Satellite",id:"2-verify-connectivity-with-satellite",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log-parser"},"Log Parser"),(0,a.kt)("h2",{id:"access-logs-based-instrumentation"},"Access Logs Based Instrumentation"),(0,a.kt)("h3",{id:"i-pre-requisites"},"i. Pre-requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Satellite has been successfully installed."),(0,a.kt)("li",{parentName:"ul"},"You have noted down the Satellite's ",(0,a.kt)("inlineCode",{parentName:"li"},"hostname:port")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ip-address:port")," information."),(0,a.kt)("li",{parentName:"ul"},"The Satellite is reachable (via HTTP/s) from the location where you are going to install the log-parser.")),(0,a.kt)("h2",{id:"ii-pick-an-application-name"},"ii. Pick an ",(0,a.kt)("inlineCode",{parentName:"h2"},"Application Name")),(0,a.kt)("p",null,"Auto discovered API endpoints and their OpenAPI specifications are show in the ",(0,a.kt)("a",{parentName:"p",href:"/security-contract-testing/concepts/api-catalog/"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system."),(0,a.kt)("p",null,"Pick a descriptive name which will be used in the subsequent step below. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"my-test-app"),"."),(0,a.kt)("h2",{id:"iii-follow-instructions-for-your-platform"},"iii. Follow instructions for your platform"),(0,a.kt)("p",null,"Follow instructions for your specific platform/method below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#install-on-linux-host-via-docker"},"Install on Linux host via Docker"))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"install-on-linux-host-via-docker"},"Install on Linux host via Docker"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,a.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above")),(0,a.kt)("h3",{id:"1-install-log-parser"},"1. Install Log Parser"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are installing the Satellite and Log Parser on the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"same"))," Linux host, please do ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOT"))," use ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," as the hostname below. Use the Linux host's ",(0,a.kt)("inlineCode",{parentName:"p"},"IP address"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"domain name")," instead. This is required as the Log Parser runs inside a Docker container, and ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," resolves to the Log Parser container's IP address, instead of the Linux host.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace '<SATELLITE_URL>' with the values you noted down from the Satellite install\n#\n# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'\n# Environment Name is optional. If not specified, it defaults to 'staging'\n# \ndocker run --rm -d --name=log-parser \\\n  -v ./logs:/mnt/levo/logs \\\n  -e LEVO_SATELLITE_URL=<LEVO_SATELLITE_URL> \\\n  -e LEVOAI_ORG_ID=<LEVOAI_ORG_ID> \\\n  -e APP_NAME=<APP_NAME> \\\n  -e ENV_NAME=<ENV_NAME> \\\n  levoai/log-parser \n")),(0,a.kt)("h4",{id:"note"},"NOTE:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The default address for the satellite in Docker-based Log Parser installations is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://satellite.levo.ai"),"."),(0,a.kt)("li",{parentName:"ul"},"In case of levo hosted satellite, it is necessary that you must also specify an organization ID (",(0,a.kt)("inlineCode",{parentName:"li"},"LEVOAI_ORG_ID"),")."),(0,a.kt)("li",{parentName:"ul"},"If you wish, you may also host the Satellite yourself and specify the address of the satellite to direct the Log Parser's data to it.")),(0,a.kt)("h3",{id:"2-verify-connectivity-with-satellite"},"2. Verify connectivity with Satellite"),(0,a.kt)("p",null,"Execute the following command to check for connectivity health:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual container name for log-parser below\ndocker logs log-parser | grep "starting fluentd"\n')),(0,a.kt)("p",null,"If connectivity is healthy, you should see output similar to below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'2024-02-22 01:27:06 +0000 [info]: starting fluentd-1.16.3 pid=7 ruby="3.2.2"\n2024-02-22 01:27:06 +0000 [info]: #0 starting fluentd worker pid=16 ppid=7 worker=0\n2024-02-22 01:27:06.831947051 +0000 fluent.info: {"pid":16,"ppid":7,"worker":0,"message":"starting fluentd worker pid=16 ppid=7 worker=0"}\n')),(0,a.kt)("p",null,"Please proceed to the next step, if there are no errors."),(0,a.kt)("br",null),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);