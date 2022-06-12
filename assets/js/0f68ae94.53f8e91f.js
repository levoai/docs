"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3387],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,b=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9954:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Troubleshooting",c={unversionedId:"beta/api-observability/common-tasks/satellite/troubleshoot",id:"beta/api-observability/common-tasks/satellite/troubleshoot",title:"Troubleshooting",description:"Running on Kubernetes",source:"@site/docs/beta/api-observability/common-tasks/satellite/troubleshoot.md",sourceDirName:"beta/api-observability/common-tasks/satellite",slug:"/beta/api-observability/common-tasks/satellite/troubleshoot",permalink:"/beta/api-observability/common-tasks/satellite/troubleshoot",editUrl:"https://github.com/levoai/docs/edit/main/docs/beta/api-observability/common-tasks/satellite/troubleshoot.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Satellite Lifecycle Management",permalink:"/beta/api-observability/common-tasks/satellite/satellite-mgmt"},next:{title:"Supported Platforms",permalink:"/beta/api-observability/supported-platforms"}},p={},u=[{value:"Tagger Errors",id:"tagger-errors",level:2},{value:"Authentication Errors",id:"authentication-errors",level:3},{value:"Connectivity Errors",id:"connectivity-errors",level:3},{value:"Tagger Errors",id:"tagger-errors-1",level:2},{value:"Authentication Errors",id:"authentication-errors-1",level:3},{value:"Connectivity Errors",id:"connectivity-errors-1",level:3}],m={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/satellite/troubleshoot#kubernetes-based"},"Running on Kubernetes"),"\n",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/satellite/troubleshoot#docker-compose-based"},"Running via Docker Compose")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"kubernetes-based"},"Kubernetes Based"),(0,a.kt)("h2",{id:"tagger-errors"},"Tagger Errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state."),(0,a.kt)("p",null,"Please see sample output below from ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", that shows the Tagger in an errored state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                READY   STATUS    RESTARTS      AGE\nlevoai-collector-848fb4fff9-gv8g9   1/1     Running   0             64s\nlevoai-rabbitmq-0                   0/1     Running   0             64s\nlevoai-satellite-54956ccb89-5s4h2   1/1     Running   0             64s\nlevoai-tagger-799db4d9cc-89jm8      0/1     Error     1 (14s ago)   64s\n")),(0,a.kt)("p",null,"Below are common error scenarios:"),(0,a.kt)("h3",{id:"authentication-errors"},"Authentication Errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," component authenticates with Levo.ai using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". If Tagger is unable to authenticate, it will error out."),(0,a.kt)("p",null,"Check for authentication errors in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\nkubectl -n levoai logs <levoai-tagger-pod-id> | grep "Exception: Failed to refresh access token"\n')),(0,a.kt)("p",null,"If there are exception messages, you have an incorrect or stale ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". Please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,a.kt)("h3",{id:"connectivity-errors"},"Connectivity Errors"),(0,a.kt)("p",null,"Check for connectivity errors in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\nkubectl -n levoai logs <levoai-tagger-pod-id> | grep "ConnectionRefusedError: [Errno 111] Connection refused"\n')),(0,a.kt)("p",null,"If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries. Please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"docker-compose-based"},"Docker Compose Based"),(0,a.kt)("h2",{id:"tagger-errors-1"},"Tagger Errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state."),(0,a.kt)("p",null,"Please see sample output below from ",(0,a.kt)("inlineCode",{parentName:"p"},'docker ps | grep -E "levoai/collector|levoai/satellite|bitnami/rabbitmq"'),", that shows the Tagger (2nd line item) in an errored state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'65fe40867c70   levoai/collector:stable   "/usr/local/bin/levo\u2026"   5 minutes ago   Up 5 minutes                    0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector\n45d6c4cccb28   levoai/satellite:stable   "python -OO /opt/lev\u2026"   5 minutes ago   Restarting (1) 55 seconds ago                                                                                                                                            levoai-tagger\n721b5431369a   levoai/satellite:stable   "gunicorn --capture-\u2026"   5 minutes ago   Up 5 minutes                    0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite\na00dc710d4af   bitnami/rabbitmq:3.10     "/opt/bitnami/script\u2026"   5 minutes ago   Up 5 minutes                    5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq\n')),(0,a.kt)("p",null,"Below are common error scenarios:"),(0,a.kt)("h3",{id:"authentication-errors-1"},"Authentication Errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," component authenticates with Levo.ai using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". If Tagger is unable to authenticate, it will error out."),(0,a.kt)("p",null,"Check for authentication errors in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker logs levoai-tagger | grep "Exception: Failed to refresh access token"\n')),(0,a.kt)("p",null,"If there are exception messages, you have an incorrect or stale ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". Please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,a.kt)("h3",{id:"connectivity-errors-1"},"Connectivity Errors"),(0,a.kt)("p",null,"Check for connectivity errors in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\ndocker logs levoai-tagger | grep "ConnectionRefusedError: [Errno 111] Connection refused"\n')),(0,a.kt)("p",null,"If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries. Please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."))}g.isMDXComponent=!0}}]);