"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7542],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),o=["components"],r={sidebar_position:4},s="Install Sensor",p={unversionedId:"api-observability/install-guide/install-sensor",id:"api-observability/install-guide/install-sensor",title:"Install Sensor",description:"i. Prerequisites",source:"@site/docs/api-observability/install-guide/install-sensor.md",sourceDirName:"api-observability/install-guide",slug:"/api-observability/install-guide/install-sensor",permalink:"/api-observability/install-guide/install-sensor",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/install-sensor.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Install Satellite",permalink:"/api-observability/install-guide/install-satellite"},next:{title:"Generate Application Traffic",permalink:"/api-observability/install-guide/generate-traffic"}},c={},u=[{value:"i. Prerequisites",id:"i-prerequisites",level:2},{value:"ii. Pick an <code>Application Name</code>",id:"ii-pick-an-application-name",level:2},{value:"iii. Follow instructions for your platform",id:"iii-follow-instructions-for-your-platform",level:2},{value:"Install on Kubernetes",id:"install-on-kubernetes",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install levoai Helm repo",id:"1-install-levoai-helm-repo",level:3},{value:"2. Create <code>levoai</code> namespace &amp; install Sensor",id:"2-create-levoai-namespace--install-sensor",level:3},{value:"3. Verify connectivity with Satellite",id:"3-verify-connectivity-with-satellite",level:3},{value:"i. Check Sensor health",id:"i-check-sensor-health",level:4},{value:"ii. Check connectivity",id:"ii-check-connectivity",level:4},{value:"Install on Linux host via Docker",id:"install-on-linux-host-via-docker",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"1. Install Sensor",id:"1-install-sensor",level:3},{value:"2. Verify connectivity with Satellite",id:"2-verify-connectivity-with-satellite",level:3},{value:"Install on Debian based Linux via <code>apt</code>",id:"install-on-debian-based-linux-via-apt",level:2},{value:"1. Install <code>curl</code> and <code>gnupg</code>",id:"1-install-curl-and-gnupg",level:3},{value:"2. Configure Linux host to access <code>Google Artifact Registry</code> and <code>Levo apt repo</code>",id:"2-configure-linux-host-to-access-google-artifact-registry-and-levo-apt-repo",level:3},{value:"3. Download/install sensor artifacts",id:"3-downloadinstall-sensor-artifacts",level:3},{value:"4. Configure Satellite Address",id:"4-configure-satellite-address",level:3},{value:"5. Configure Application Name",id:"5-configure-application-name",level:3},{value:"6. Start the Sensor",id:"6-start-the-sensor",level:3},{value:"7. Verify connectivity with Satellite",id:"7-verify-connectivity-with-satellite",level:3},{value:"Connection Success",id:"connection-success",level:4},{value:"Connection Failures",id:"connection-failures",level:4},{value:"8. Sensor&#39;s resource limits",id:"8-sensors-resource-limits",level:3},{value:"#1. Open the config file <code>/usr/lib/systemd/system/levo-ebpf-sensor.service</code> and modify <code>CPUQuota</code> and <code>MemoryMax</code>",id:"1-open-the-config-file-usrlibsystemdsystemlevo-ebpf-sensorservice-and-modify-cpuquota-and-memorymax",level:4},{value:"#2. Reload the config",id:"2-reload-the-config",level:4},{value:"#3. Restart the sensor",id:"3-restart-the-sensor",level:4}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-sensor"},"Install Sensor"),(0,l.kt)("h2",{id:"i-prerequisites"},"i. Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compatibility script (from step 1) indicates the Linux host (that you want to instrument) is compatible."),(0,l.kt)("li",{parentName:"ul"},"Satellite has been successfully installed."),(0,l.kt)("li",{parentName:"ul"},"You have noted down the Satellite's ",(0,l.kt)("inlineCode",{parentName:"li"},"hostname:port")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ip-address:port")," information."),(0,l.kt)("li",{parentName:"ul"},"The Satellite is reachable (via HTTP/s) from the location where you are going to install the Sensor.")),(0,l.kt)("h2",{id:"ii-pick-an-application-name"},"ii. Pick an ",(0,l.kt)("inlineCode",{parentName:"h2"},"Application Name")),(0,l.kt)("p",null,"Auto discovered API endpoints and their OpenAPI specifications are show in the ",(0,l.kt)("a",{parentName:"p",href:"/security-contract-testing/concepts/api-catalog/"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system."),(0,l.kt)("p",null,"Pick a descriptive name which will be used in the subsequent step below. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"my-test-app"),"."),(0,l.kt)("h2",{id:"iii-follow-instructions-for-your-platform"},"iii. Follow instructions for your platform"),(0,l.kt)("p",null,"Follow instructions for your specific platform/method below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-observability/install-guide/install-sensor#install-on-kubernetes"},"Install on Kubernetes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-observability/install-guide/install-sensor#install-on-linux-host-via-docker"},"Install on Linux host via Docker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api-observability/install-guide/install-sensor#install-on-debian-based-linux-via-apt"},"Install on Debian based Linux via ",(0,l.kt)("inlineCode",{parentName:"a"},"apt")))),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-on-kubernetes"},"Install on Kubernetes"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes version >= v1.18.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm v3")," installed and working."),(0,l.kt)("li",{parentName:"ul"},"The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," access to the cluster, with ",(0,l.kt)("inlineCode",{parentName:"li"},"cluster-admin")," permissions.")),(0,l.kt)("h3",{id:"1-install-levoai-helm-repo"},"1. Install levoai Helm repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add levoai https://charts.levo.ai && helm repo update\n")),(0,l.kt)("h3",{id:"2-create-levoai-namespace--install-sensor"},"2. Create ",(0,l.kt)("inlineCode",{parentName:"h3"},"levoai")," namespace & install Sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install\n# If Sensor is installed on same cluster as Satellite, use 'levoai-collector.levoai:4317'\n#\n# Specify below the 'Application Name' chosen earlier.\n#\nhelm upgrade levoai-sensor levoai/levoai-ebpf-sensor \\\n  --install \\\n  --namespace levoai \\\n  --create-namespace \\\n  --set sensor.config.default-service-name=<'Application Name' chosen earlier> \\\n  --set sensor.config.collector-traces-endpoint=<hostname|IP:port>\n")),(0,l.kt)("h3",{id:"3-verify-connectivity-with-satellite"},"3. Verify connectivity with Satellite"),(0,l.kt)("h4",{id:"i-check-sensor-health"},"i. Check Sensor health"),(0,l.kt)("p",null,"Check the health of the Sensor by executing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n levoai get pods | grep levoai-sensor\n")),(0,l.kt)("p",null,"If the Sensor is healthy, you should see output similar to below. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"levoai-sensor-747fb4aaa9-gv8g9   1/1     Running   0             1m8s\n")),(0,l.kt)("h4",{id:"ii-check-connectivity"},"ii. Check connectivity"),(0,l.kt)("p",null,"Execute the following command to check for connectivity health:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual pod name for levoai-sensor below\nkubectl -n levoai logs <levoai-sensor pod name> | grep "Initial connection with Collector"\n')),(0,l.kt)("p",null,"If connectivity is healthy, you should see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2022/06/13 21:15:40 729071  INFO [ebpf_sensor.cpp->main:120]    Initial connection with Collector was successful.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please contact ",(0,l.kt)("inlineCode",{parentName:"strong"},"support@levo.ai")," if you notice health/connectivity related errors.")),(0,l.kt)("p",null,"Please proceed to the next step, if there are no errors."),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-on-linux-host-via-docker"},"Install on Linux host via Docker"),(0,l.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,l.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above"),(0,l.kt)("li",{parentName:"ul"},"Admin (or ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo"),") privileges on the Docker host")),(0,l.kt)("h3",{id:"1-install-sensor"},"1. Install Sensor"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you are installing the Satellite and Sensor on the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"same"))," Linux host, please do ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"NOT"))," use ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," as the hostname below. Use the Linux host's ",(0,l.kt)("inlineCode",{parentName:"p"},"IP address"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"domain name")," instead. This is required as the Sensor runs inside a Docker container, and ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," resolves to the Sensor container's IP address, instead of the Linux host.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install\n#\n# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'\n#\nsudo docker run --restart unless-stopped \\\n  -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc \\\n  --privileged --detach levoai/ebpf_sensor:latest \\\n  --host-proc-path /host/proc/ \\\n  --collector-traces-endpoint <hostname|IP:port> \\\n  --default-service-name <'Application Name' chosen earlier>\n")),(0,l.kt)("h3",{id:"2-verify-connectivity-with-satellite"},"2. Verify connectivity with Satellite"),(0,l.kt)("p",null,"Execute the following command to check for connectivity health:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual container name for levoai-sensor below\ndocker logs <levoai-sensor container name> | grep "Initial connection with Collector"\n')),(0,l.kt)("p",null,"If connectivity is healthy, you should see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2022/06/13 21:15:40 729071  INFO [ebpf_sensor.cpp->main:120]    Initial connection with Collector was successful.\n")),(0,l.kt)("p",null,"Please proceed to the next step, if there are no errors."),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"install-on-debian-based-linux-via-apt"},"Install on Debian based Linux via ",(0,l.kt)("inlineCode",{parentName:"h2"},"apt")),(0,l.kt)("h3",{id:"1-install-curl-and-gnupg"},"1. Install ",(0,l.kt)("inlineCode",{parentName:"h3"},"curl")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"gnupg")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install gnupg\n\nsudo apt install curl\n")),(0,l.kt)("h3",{id:"2-configure-linux-host-to-access-google-artifact-registry-and-levo-apt-repo"},"2. Configure Linux host to access ",(0,l.kt)("inlineCode",{parentName:"h3"},"Google Artifact Registry")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"Levo apt repo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://us-apt.pkg.dev/doc/repo-signing-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/us-apt-repo-signing-key.gpg\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/gcloud-packages-key.gpg\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo \\\n"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/gcloud-packages-key.gpg] \\\n https://packages.cloud.google.com/apt apt-transport-artifact-registry-stable main" \\\n| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo \\\n"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/us-apt-repo-signing-key.gpg] \\\n https://us-apt.pkg.dev/projects/levoai apt-levo main" \\\n| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,l.kt)("h3",{id:"3-downloadinstall-sensor-artifacts"},"3. Download/install sensor artifacts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install apt-transport-artifact-registry\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install levo-ebpf-sensor\n")),(0,l.kt)("h3",{id:"4-configure-satellite-address"},"4. Configure Satellite Address"),(0,l.kt)("p",null,"The Satellite address is configured in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml"),". The default ",(0,l.kt)("inlineCode",{parentName:"p"},"host:port")," for Satellite is ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:4317"),"."),(0,l.kt)("p",null,"Edit ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml"),", and set ",(0,l.kt)("inlineCode",{parentName:"p"},"collector-traces-endpoint")," (under Satellite Settings) to the ",(0,l.kt)("inlineCode",{parentName:"p"},"host:port")," address, noted down from the Satellite install."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"...\n# --------------------------------------------------------------------------------------------\n# Satellite Settings:\n# --------------------------------------------------------------------------------------------\n# host:port for the collector service receiving the sensor's API traces.\ncollector-traces-endpoint: <set to host:port value noted from the Satellite install>\n# --------------------------------------------------------------------------------------------\n...\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": If you change the Satellite address later, you have to restart the Sensor, since it's not a hot property."),(0,l.kt)("h3",{id:"5-configure-application-name"},"5. Configure Application Name"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Name")," is configured in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml"),"."),(0,l.kt)("p",null,"Edit ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml"),", and set ",(0,l.kt)("inlineCode",{parentName:"p"},"default-service-name")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Name")," chosen earlier."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# --------------------------------------------------------------------------------------------\n# Default Application Name:\n#\n# Auto discovered API endpoints and their OpenAPI specifications are show in the API Catalog\n# grouped under this application name. The application name helps segregate and group API\n# endpoints from different environments.\n# --------------------------------------------------------------------------------------------\n#\ndefault-service-name: <'Application Name' chosen earlier>\n# --------------------------------------------------------------------------------------------\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": If you change the ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Name")," later, you have to restart the Sensor, since it's not a hot property."),(0,l.kt)("h3",{id:"6-start-the-sensor"},"6. Start the Sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start levo-ebpf-sensor\n")),(0,l.kt)("h3",{id:"7-verify-connectivity-with-satellite"},"7. Verify connectivity with Satellite"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u levo-ebpf-sensor.service -b -f\n\n# If 'journalctl' isn't tailing logs, use syslog:\nsudo cat /var/log/syslog | grep 'levo-ebpf-sensor'\n")),(0,l.kt)("h4",{id:"connection-success"},"Connection Success"),(0,l.kt)("p",null,"If connectivity is healthy, you should see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2022/06/13 21:15:40 729071  INFO [ebpf_sensor.cpp->main:120]    Initial connection with Collector was successful.\n")),(0,l.kt)("h4",{id:"connection-failures"},"Connection Failures"),(0,l.kt)("p",null,"If the Sensor is unable to connect with the Satellite, you will notice log entries similar to the one below. Please contact ",(0,l.kt)("inlineCode",{parentName:"p"},"support@levo.ai")," for assistance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Initial connection with Collector failed. However, the sensor will keep attempting to send future traces.\n\n[OTLP TRACE GRPC Exporter] Export() failed: failed to connect to all addresses\n")),(0,l.kt)("p",null,"Please proceed to the next step, if there are no errors."),(0,l.kt)("h3",{id:"8-sensors-resource-limits"},"8. Sensor's resource limits"),(0,l.kt)("p",null,"By default, sensor is restricted to use up to 50% of CPU and 2GB memory."),(0,l.kt)("p",null,"If you ever need to change these limits, you need to modify ",(0,l.kt)("inlineCode",{parentName:"p"},"CPUQuota")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"MemoryMax")," in the below systemd config file under ",(0,l.kt)("inlineCode",{parentName:"p"},"[Service]")," section:"),(0,l.kt)("h4",{id:"1-open-the-config-file-usrlibsystemdsystemlevo-ebpf-sensorservice-and-modify-cpuquota-and-memorymax"},"#1. Open the config file ",(0,l.kt)("inlineCode",{parentName:"h4"},"/usr/lib/systemd/system/levo-ebpf-sensor.service")," and modify ",(0,l.kt)("inlineCode",{parentName:"h4"},"CPUQuota")," and ",(0,l.kt)("inlineCode",{parentName:"h4"},"MemoryMax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo vi /usr/lib/systemd/system/levo-ebpf-sensor.service\n")),(0,l.kt)("p",null,"For example,"),(0,l.kt)("p",null,"If you want to limit sensor's CPU usage to 75% of CPU, then set ",(0,l.kt)("inlineCode",{parentName:"p"},"CPUQuota=75%"),"."),(0,l.kt)("p",null,"If you want to limit sensor's memory usage to 3GB, then set ",(0,l.kt)("inlineCode",{parentName:"p"},"MemoryMax=3G")," "),(0,l.kt)("h4",{id:"2-reload-the-config"},"#2. Reload the config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"systemctl daemon-reload\n")),(0,l.kt)("h4",{id:"3-restart-the-sensor"},"#3. Restart the sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo systemctl restart levo-ebpf-sensor\n")))}h.isMDXComponent=!0}}]);