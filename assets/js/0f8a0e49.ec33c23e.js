"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[572],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),s=["components"],l={sidebar_position:1},i="Sensor Lifecycle Management",u={unversionedId:"beta/api-observability/common-tasks/sensor/sensor-mgmt",id:"beta/api-observability/common-tasks/sensor/sensor-mgmt",title:"Sensor Lifecycle Management",description:"- Installed on Kubernetes",source:"@site/docs/beta/api-observability/common-tasks/sensor/sensor-mgmt.md",sourceDirName:"beta/api-observability/common-tasks/sensor",slug:"/beta/api-observability/common-tasks/sensor/sensor-mgmt",permalink:"/beta/api-observability/common-tasks/sensor/sensor-mgmt",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/beta/api-observability/common-tasks/sensor/sensor-mgmt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Common Tasks",permalink:"/beta/api-observability/common-tasks/"},next:{title:"Manage Sensor Configuration",permalink:"/beta/api-observability/common-tasks/sensor/sensor-configuration"}},p={},c=[{value:"Installed on Kubernetes",id:"installed-on-kubernetes",level:2},{value:"Uninstall Sensor",id:"uninstall-sensor",level:3},{value:"Get Sensor Logs",id:"get-sensor-logs",level:3},{value:"Upgrade Sensor",id:"upgrade-sensor",level:3},{value:"Manage Sensor Configuration",id:"manage-sensor-configuration",level:3},{value:"Installed via Docker",id:"installed-via-docker",level:2},{value:"Uninstall Sensor",id:"uninstall-sensor-1",level:3},{value:"Get Sensor Logs",id:"get-sensor-logs-1",level:3},{value:"Upgrade Sensor",id:"upgrade-sensor-1",level:3},{value:"Manage Sensor Configuration",id:"manage-sensor-configuration-1",level:3},{value:"Installed on Linux Host",id:"installed-on-linux-host",level:2},{value:"Configure Satellite Address (<code>host:port</code> information)",id:"configure-satellite-address-hostport-information",level:3},{value:"Start Sensor",id:"start-sensor",level:3},{value:"Get Sensor Status",id:"get-sensor-status",level:3},{value:"Stop Sensor",id:"stop-sensor",level:3},{value:"Check Sensor Logs",id:"check-sensor-logs",level:3},{value:"Show Sensor Config",id:"show-sensor-config",level:3},{value:"Uninstall Sensor",id:"uninstall-sensor-2",level:3},{value:"Manage Sensor Configuration",id:"manage-sensor-configuration-2",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sensor-lifecycle-management"},"Sensor Lifecycle Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installed-on-kubernetes"},"Installed on Kubernetes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installed-via-docker"},"Installed via Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installed-on-linux-host"},"Installed on Linux Host"))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"installed-on-kubernetes"},"Installed on Kubernetes"),(0,a.kt)("h3",{id:"uninstall-sensor"},"Uninstall Sensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall levoai-sensor -n levoai\n")),(0,a.kt)("h3",{id:"get-sensor-logs"},"Get Sensor Logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n levoai\n\nkubectl logs -n levoai <pod name>\n")),(0,a.kt)("h3",{id:"upgrade-sensor"},"Upgrade Sensor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uninstall Sensor"),(0,a.kt)("li",{parentName:"ul"},"Reinstall Sensor")),(0,a.kt)("h3",{id:"manage-sensor-configuration"},"Manage Sensor Configuration"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/sensor-configuration"},"Sensor Configuration"),", and ",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/sensor-configuration#running-on-kubernetes"},"Applying Configuration Changes"),"."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"installed-via-docker"},"Installed via Docker"),(0,a.kt)("h3",{id:"uninstall-sensor-1"},"Uninstall Sensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Get the container id of the Sensor\ndocker ps | grep "levoai/ebpf_sensor"\n\n# Remove the Sensor\ndocker rm -f <container id from docker ps step above>\n')),(0,a.kt)("h3",{id:"get-sensor-logs-1"},"Get Sensor Logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Get the container id of the Sensor\ndocker ps | grep "levoai/ebpf_sensor"\n\nsudo docker logs <container id from docker ps step above>\n')),(0,a.kt)("h3",{id:"upgrade-sensor-1"},"Upgrade Sensor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uninstall Sensor"),(0,a.kt)("li",{parentName:"ul"},"Pull new Sensor image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/ebpf_sensor:latest\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reinstall Sensor")),(0,a.kt)("h3",{id:"manage-sensor-configuration-1"},"Manage Sensor Configuration"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/sensor-configuration"},"Sensor Configuration"),", and ",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/sensor-configuration#running-via-docker"},"Applying Configuration Changes"),"."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"installed-on-linux-host"},"Installed on Linux Host"),(0,a.kt)("h3",{id:"configure-satellite-address-hostport-information"},"Configure Satellite Address (",(0,a.kt)("inlineCode",{parentName:"h3"},"host:port")," information)"),(0,a.kt)("p",null,"Satellite address is configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/default/levo-ebpf-sensor"),". Default port for Satellite is ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# The Satellite address is configured in '/etc/default/levo-ebpf-sensor'.\n# Edit '/etc/default/levo-ebpf-sensor', and set 'OTEL_EXPORTER_OTLP_TRACES_ENDPOINT' to\n# 'host:port' address of the Satellite, as shown below.\n\nOTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<host|IP:port>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A Sensor ",(0,a.kt)("em",{parentName:"strong"},"restart")," is required for this to take effect.")),(0,a.kt)("h3",{id:"start-sensor"},"Start Sensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Note: The default config file is located at: '/etc/levo/sensor/config.yaml'\nsudo systemctl start levo-ebpf-sensor\n")),(0,a.kt)("h3",{id:"get-sensor-status"},"Get Sensor Status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status levo-ebpf-sensor\n")),(0,a.kt)("h3",{id:"stop-sensor"},"Stop Sensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop levo-ebpf-sensor\n")),(0,a.kt)("h3",{id:"check-sensor-logs"},"Check Sensor Logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u levo-ebpf-sensor.service -b -f --since \"15min ago\"\n\n# If journalctl isn't providing logs, you can alternatively:\nsudo cat syslog | grep 'levo-ebpf-sensor'\n")),(0,a.kt)("h3",{id:"show-sensor-config"},"Show Sensor Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/levo/sensor/config.yaml\n")),(0,a.kt)("h3",{id:"uninstall-sensor-2"},"Uninstall Sensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo\xa0apt remove -purge levo-ebpf-sensor\nsudo apt clean\n")),(0,a.kt)("h3",{id:"manage-sensor-configuration-2"},"Manage Sensor Configuration"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/sensor-configuration"},"Sensor Configuration"),", and ",(0,a.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/sensor-configuration#running-on-linux-host"},"Applying Configuration Changes"),"."))}m.isMDXComponent=!0}}]);