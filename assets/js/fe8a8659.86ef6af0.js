"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2879],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3233:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),s=["components"],i={sidebar_position:2},c="Sensor via Docker",l={unversionedId:"install-traffic-capture-sensors/pcap-sensor/sensor-docker",id:"install-traffic-capture-sensors/pcap-sensor/sensor-docker",title:"Sensor via Docker",description:"Install via Docker",source:"@site/docs/install-traffic-capture-sensors/pcap-sensor/sensor-docker.md",sourceDirName:"install-traffic-capture-sensors/pcap-sensor",slug:"/install-traffic-capture-sensors/pcap-sensor/sensor-docker",permalink:"/install-traffic-capture-sensors/pcap-sensor/sensor-docker",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/pcap-sensor/sensor-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sensor on Fargate",permalink:"/install-traffic-capture-sensors/pcap-sensor/sensor-fargate"},next:{title:"Sensor on Kubernetes",permalink:"/install-traffic-capture-sensors/pcap-sensor/sensor-kubernetes"}},p={},u=[{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Prerequisites",id:"prerequisites",level:3}],f={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sensor-via-docker"},"Sensor via Docker"),(0,a.kt)("h2",{id:"install-via-docker"},"Install via Docker"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker Engine version  ",(0,a.kt)("inlineCode",{parentName:"li"},"18.03.0"),"  and above"),(0,a.kt)("li",{parentName:"ul"},"Admin (or  ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo"),") privileges on the Docker host")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run --net=host --rm -it levoai/pcap-sensor:0.0.20 \\\n./bin/init apidump \\\n--satellite-url "your satellite url (http(s)://hostname|IP:port)" \\\n--levo-env "your application environment (staging, production etc.)" \\\n--levoai-org-id "your levo org id"\n')),(0,a.kt)("p",null,"Specify additional flags in the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'--trace-export-interval "trace export interval in seconds (default 10)"\n--rate-limit "number of traces per minute"\n--filter "pcap filter string, eg. port 8080 and (not port 8081)"\n--host-allow "host allow regex"\n--path-allow "path allow regex"\n--host-exclusions "host exclude regex"\n--path-exclusions "path exclude regex"\n')))}d.isMDXComponent=!0}}]);