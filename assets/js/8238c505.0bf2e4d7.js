"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6637],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||r;return t?i.createElement(d,a(a({ref:n},c),{},{components:t})):i.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1262:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(7294),o=t(2389);function r(e){var n=e.children,t=e.fallback;return(0,o.Z)()?i.createElement(i.Fragment,null,null==n?void 0:n()):null!=t?t:null}},6509:function(e,n,t){t.r(n),t.d(n,{ConfigurationValues:function(){return d},SensorConfigFile:function(){return m},assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var i=t(3117),o=t(102),r=(t(7294),t(3905)),a=t(1262),l=["components"],s={sidebar_position:2},u="Manage Sensor Configuration",c={unversionedId:"beta/api-observability/common-tasks/sensor/sensor-configuration",id:"beta/api-observability/common-tasks/sensor/sensor-configuration",title:"Manage Sensor Configuration",description:"The Sensor comes pre-configured with appropriate defaults to capture API Traffic (HTTP) from your applications.",source:"@site/docs/beta/api-observability/common-tasks/sensor/sensor-configuration.mdx",sourceDirName:"beta/api-observability/common-tasks/sensor",slug:"/beta/api-observability/common-tasks/sensor/sensor-configuration",permalink:"/beta/api-observability/common-tasks/sensor/sensor-configuration",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/beta/api-observability/common-tasks/sensor/sensor-configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sensor Lifecycle Management",permalink:"/beta/api-observability/common-tasks/sensor/sensor-mgmt"},next:{title:"API Traffic Capture Filters",permalink:"/beta/api-observability/common-tasks/sensor/filter-traffic"}},p={},f=[{value:"Configuration File Format",id:"configuration-file-format",level:2},{value:"Factory Settings",id:"factory-settings",level:2},{value:"Default Application Name",id:"default-application-name",level:2},{value:"Process &amp; IP Filters",id:"process--ip-filters",level:2},{value:"Applying Configuration Settings",id:"applying-configuration-settings",level:2},{value:"Running on Kubernetes",id:"running-on-kubernetes",level:3},{value:"Running via Docker",id:"running-via-docker",level:3},{value:"Running on Linux Host",id:"running-on-linux-host",level:3}];function m(){return(0,r.kt)(a.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,r.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/sensor/config.yml",download:!0}," YAML configuration file")}))}function d(){return(0,r.kt)(a.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,r.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/sensor/config-values.yml",download:!0}," Configuration Values")}))}var g={toc:f,SensorConfigFile:m,ConfigurationValues:d};function h(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-sensor-configuration"},"Manage Sensor Configuration"),(0,r.kt)("p",null,"The Sensor comes pre-configured with appropriate defaults to capture API Traffic (HTTP) from your applications."),(0,r.kt)("p",null,"The Sensor can be customized via a ",(0,r.kt)(m,{mdxType:"SensorConfigFile"}),". Examples of customization include, a) granular filtering of API traffic being captured, b) enabling debugging, c) performance tuning, etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration-file-format"},"Configuration File Format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#factory-settings"},"Factory Settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-application-name"},"Default Application Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#process--ip-filters"},"Process & IP Filters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#applying-configuration-settings"},"Applying Configuration Settings"))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"configuration-file-format"},"Configuration File Format"),(0,r.kt)("p",null,"The YAML configuration file (shown below) has four major sections: 1) Factory Settings, 2) Default Application Name, 3) Process Filters, & 4) IP Filters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"##############################################################################################\n# eBPF Sensor Configuration Settings (YAML Format)\n# Copyright: Levo Inc, 2022\n##############################################################################################\n\n# --------------------------------------------------------------------------------------------\n# Factory Settings: DO NOT MODIFY\n# --------------------------------------------------------------------------------------------\n\n# --------------------------------------------------------------------------------------------\n\n# --------------------------------------------------------------------------------------------\n# Default Application Name:\n#\n# Auto discovered API endpoints and their OpenAPI specifications are show in the API Catalog\n# grouped under this application name. The application name helps segregate and group API\n# endpoints from different environments.\n# --------------------------------------------------------------------------------------------\n#\ndefault-service-name: my-api-application\n# --------------------------------------------------------------------------------------------\n\n\n# --------------------------------------------------------------------------------------------\n# Process Filters: process command names/IDs to monitor & capture API traffic.\n# --------------------------------------------------------------------------------------------\n## Restrict API traffic capture to specific processes identified by their command names below\nmonitored-commands:\n#  - <process command name. Example: nginx>\n#  - <process command name. Example: python3>\n\n## Restrict API traffic capture to specific processes identified by their PIDs below\nmonitored-pids:\n- <pid. Example: 123>\n- <pid. Example: 45>\n# --------------------------------------------------------------------------------------------\n\n\n# --------------------------------------------------------------------------------------------\n# IP Filters: IP/Port/Network address based granular filtering of API traffic.\n# --------------------------------------------------------------------------------------------\ndefault-policy: <accept|drop> # Specifies default behavior which can be overridden by 'entries' below\n  entries: # Specific 'entries' can override the default policy\n    - policy: <accept|drop>\n      <host-ports|peer-ports|host-network|peer-network>: <appropriate value>\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"factory-settings"},"Factory Settings"),(0,r.kt)("p",null,"These settings control logging, debugging, and performance tuning functions. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"DO NOT"))," modify these settings, unless specifically asked by Levo Support. "),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"default-application-name"},"Default Application Name"),(0,r.kt)("p",null,"Auto discovered API endpoints and their OpenAPI specifications are show in the ",(0,r.kt)("a",{parentName:"p",href:"/concepts/api-catalog/"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system. "),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"process--ip-filters"},"Process & IP Filters"),(0,r.kt)("p",null,"These settings allow granular control over what API traffic is captured by the Sensor. Please see detailed section on ",(0,r.kt)("a",{parentName:"p",href:"/beta/api-observability/common-tasks/sensor/filter-traffic"},"API Traffic Capture Filters"),". "),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"applying-configuration-settings"},"Applying Configuration Settings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-on-kubernetes"},"Running on Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-via-docker"},"Running via Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-on-linux-host"},"Running on Linux Host"))),(0,r.kt)("h3",{id:"running-on-kubernetes"},"Running on Kubernetes"),(0,r.kt)("p",null,"Configuration is specified via a ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/values_files/"},"Helm Values")," file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify the default ",(0,r.kt)(d,{mdxType:"ConfigurationValues"})," file to suit your requirements."),(0,r.kt)("li",{parentName:"ul"},"Save the configuration values file to your current working directory."),(0,r.kt)("li",{parentName:"ul"},"Note down the Satellite's ",(0,r.kt)("inlineCode",{parentName:"li"},"host:port")," address information."),(0,r.kt)("li",{parentName:"ul"},"Apply the new configuration by executing the below command from the directory where you saved the ",(0,r.kt)("inlineCode",{parentName:"li"},"config-values.yml"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install\n# If Sensor is installed on same cluster as Satellite, use 'levoai-collector.levoai:4317'\n#\n# Specify the 'Application Name' chosen earlier in the config-values.yml file.\n#\nhelm upgrade levoai-sensor levoai/levoai-ebpf-sensor \\\n  --install \\\n  --namespace levoai \\\n  --create-namespace \\\n  --set sensor.otel.grpcEndpoint=<hostname|IP:port> \\\n  --values config-values.yml\n")),(0,r.kt)("p",null,"You may also specify specific configuration values using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm --set"),". For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \\\n  --install \\\n  --namespace levoai \\\n  --create-namespace \\\n  --set sensor.config.default-service-name="my-test-app-k8s-c101" \\\n  --set "sensor.config.monitored-commands={python3,java}"\n')),(0,r.kt)("p",null,"Please check the Sensor logs to ensure that the specified configuration values do not have any syntax errors, and the Sensor is running with the applied configuration."),(0,r.kt)("h3",{id:"running-via-docker"},"Running via Docker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify the default ",(0,r.kt)(m,{mdxType:"SensorConfigFile"})," to suit your requirements."),(0,r.kt)("li",{parentName:"ul"},"Save the configuration file to your current working directory."),(0,r.kt)("li",{parentName:"ul"},"Shutdown/Uninstall the Sensor if running."),(0,r.kt)("li",{parentName:"ul"},"Note down the Satellite's ",(0,r.kt)("inlineCode",{parentName:"li"},"host:port")," address information."),(0,r.kt)("li",{parentName:"ul"},"Reinstall the Sensor by executing the below command from the directory where you saved ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," is mounted into the Sensor container as read only.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install\nsudo docker run --restart unless-stopped \\\n  -e OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<hostname|IP:port> \\\n  -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc \\\n  -v $PWD/config.yml:/etc/levo/sensor/config.yaml:ro \\\n  --privileged --detach \\\n  levoai/ebpf_sensor:latest --default-service-name <'Application Name' chosen earlier>\n")),(0,r.kt)("p",null,"Please check the Sensor logs to ensure the configuration file does not have any syntax errors, and the Sensor is running with the applied configuration."),(0,r.kt)("h3",{id:"running-on-linux-host"},"Running on Linux Host"),(0,r.kt)("p",null,"Make your modifications to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml")," and save the file. The settings should take effect immediately."),(0,r.kt)("p",null,"Please check the Sensor logs to ensure the configuration file does not have any syntax errors, and the Sensor is running with the applied configuration."))}h.isMDXComponent=!0}}]);