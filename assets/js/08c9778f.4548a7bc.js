"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9433],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2430:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:2,title:"Install PCAP Sensor on Kubernetes | Levo.ai Documentation"},l="Sensor on Kubernetes",c={unversionedId:"install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes",id:"install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes",title:"Install PCAP Sensor on Kubernetes | Levo.ai Documentation",description:"Install on Kubernetes as daemonset",source:"@site/docs/install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes.md",sourceDirName:"install-traffic-capture-sensors/pcap-sensor",slug:"/install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes",permalink:"/install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Install PCAP Sensor on Kubernetes | Levo.ai Documentation"},sidebar:"tutorialSidebar",previous:{title:"Install PCAP Sensor on Docker | Levo.ai Documentation",permalink:"/install-traffic-capture-sensors/pcap-sensor/sensor-docker"},next:{title:"PCAP Sensor via YUM Package",permalink:"/install-traffic-capture-sensors/pcap-sensor/pcap-sensor-yum-package"}},p={},u=[{value:"Install on Kubernetes as daemonset",id:"install-on-kubernetes-as-daemonset",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Add levoai helm repo",id:"1-add-levoai-helm-repo",level:3},{value:"2. Create levoai namespace and install pcap-sensor",id:"2-create-levoai-namespace-and-install-pcap-sensor",level:3}],f={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sensor-on-kubernetes"},"Sensor on Kubernetes"),(0,o.kt)("h2",{id:"install-on-kubernetes-as-daemonset"},"Install on Kubernetes as daemonset"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes version >= v1.18.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm v3"),"  installed and working."),(0,o.kt)("li",{parentName:"ul"},"The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"),"  access to the cluster, with  ",(0,o.kt)("inlineCode",{parentName:"li"},"cluster-admin"),"  permissions.")),(0,o.kt)("h3",{id:"1-add-levoai-helm-repo"},"1. Add levoai helm repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add levoai https://charts.levo.ai && helm repo update levoai\n")),(0,o.kt)("h3",{id:"2-create-levoai-namespace-and-install-pcap-sensor"},"2. Create levoai namespace and install pcap-sensor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install\n# If Sensor is installed on same cluster as Satellite, use 'http://levoai-satellite:9999'\n# Specify below the 'Application Name' chosen earlier.\n#\nhelm upgrade levoai-pcap-sensor levoai/levoai-pcap-sensor \\\n  --install \\\n  --namespace levoai \\\n  --create-namespace \\\n  --set sensor.config.levoaiOrgId=\"your Levo Org ID\" \\\n  --set sensor.config.satelliteUrl=\"http(s)://hostname|IP:port\"\n  --set sensor.confg.levoEnv=\"your application environment (staging, production etc.)\"\n")),(0,o.kt)("p",null,"Set additional configs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sensor.config.traceExportInterval="trace export interval in seconds (default 10)"\nsensor.config.rateLimit="rate limit number in traces/min (default 1000)"\nsensor.config.fitler="pcap filter string, eg. port 8080 and (not port 8081)"\nsensor.config.hostAllow="host allow regex"\nsensor.config.pathAllow="path allow regex"\nsensor.config.hostExclusions="host exclusion regex"\nsensor.config.pathExclusions="path exclusion regex"\n')))}d.isMDXComponent=!0}}]);