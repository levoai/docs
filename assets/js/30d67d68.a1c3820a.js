"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1934],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,g=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3111:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(3117),r=t(102),s=(t(7294),t(3905)),o=["components"],l={sidebar_position:4},i="Sensor via APT Package",c={unversionedId:"install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package",id:"install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package",title:"Sensor via APT Package",description:"Install on Debian based Linux via apt",source:"@site/docs/install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package.md",sourceDirName:"install-traffic-capture-sensors/ebpf-sensor",slug:"/install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/ebpf-sensor/sensor-apt-package.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Install eBPF Sensor on Docker | Levo.ai Documentation",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-docker"},next:{title:"Sensor via YUM Package",permalink:"/install-traffic-capture-sensors/ebpf-sensor/sensor-yum-package"}},p={},u=[{value:"Install on Debian based Linux via <code>apt</code>",id:"install-on-debian-based-linux-via-apt",level:2},{value:"1. Install <code>curl</code> and <code>gnupg</code>",id:"1-install-curl-and-gnupg",level:3},{value:"2. Configure Linux host to access <code>Levo apt repo</code>",id:"2-configure-linux-host-to-access-levo-apt-repo",level:3},{value:"3. Download/install Sensor artifacts",id:"3-downloadinstall-sensor-artifacts",level:3},{value:"4. Start the Sensor",id:"4-start-the-sensor",level:3},{value:"Sensor Lifecycle Management",id:"sensor-lifecycle-management",level:2},{value:"Configure Satellite Address (<code>host:port</code> information)",id:"configure-satellite-address-hostport-information",level:3},{value:"Configure sensor environment",id:"configure-sensor-environment",level:3},{value:"Start Sensor",id:"start-sensor",level:3},{value:"Get Sensor Status",id:"get-sensor-status",level:3},{value:"Stop Sensor",id:"stop-sensor",level:3},{value:"Check Sensor Logs",id:"check-sensor-logs",level:3},{value:"Show Sensor Config",id:"show-sensor-config",level:3},{value:"Uninstall Sensor",id:"uninstall-sensor",level:3},{value:"Manage Sensor Configuration",id:"manage-sensor-configuration",level:3}],d={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sensor-via-apt-package"},"Sensor via APT Package"),(0,s.kt)("h2",{id:"install-on-debian-based-linux-via-apt"},"Install on Debian based Linux via ",(0,s.kt)("inlineCode",{parentName:"h2"},"apt")),(0,s.kt)("h3",{id:"1-install-curl-and-gnupg"},"1. Install ",(0,s.kt)("inlineCode",{parentName:"h3"},"curl")," and ",(0,s.kt)("inlineCode",{parentName:"h3"},"gnupg")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install gnupg\n\nsudo apt install curl\n")),(0,s.kt)("h3",{id:"2-configure-linux-host-to-access-levo-apt-repo"},"2. Configure Linux host to access ",(0,s.kt)("inlineCode",{parentName:"h3"},"Levo apt repo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://us-apt.pkg.dev/doc/repo-signing-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/us-apt-repo-signing-key.gpg\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'echo \\\n"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/us-apt-repo-signing-key.gpg] \\\n https://us-apt.pkg.dev/projects/levoai apt-levo main" \\\n| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,s.kt)("h3",{id:"3-downloadinstall-sensor-artifacts"},"3. Download/install Sensor artifacts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install levo-ebpf-sensor=0.42.1\n")),(0,s.kt)("h3",{id:"4-start-the-sensor"},"4. Start the Sensor"),(0,s.kt)("p",null,"Please take a look at the ",(0,s.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/ebpf-sensor/sensor-systemd-service"},"Running the Sensor as a Systemd Service")," section for further instructions."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"sensor-lifecycle-management"},"Sensor Lifecycle Management"),(0,s.kt)("h3",{id:"configure-satellite-address-hostport-information"},"Configure Satellite Address (",(0,s.kt)("inlineCode",{parentName:"h3"},"host:port")," information)"),(0,s.kt)("p",null,"The Satellite address is configured in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml"),". The default ",(0,s.kt)("inlineCode",{parentName:"p"},"host:port")," for Satellite is ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:4317"),"."),(0,s.kt)("p",null,"Edit ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/levo/sensor/config.yaml"),", and set ",(0,s.kt)("inlineCode",{parentName:"p"},"satellite-url")," (under Satellite Settings) to the desired ",(0,s.kt)("inlineCode",{parentName:"p"},"host:port")," value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"...\n# --------------------------------------------------------------------------------------------\n# Satellite Settings:\n# --------------------------------------------------------------------------------------------\n# host:port for the collector service receiving the sensor's API traces.\n# mention the scheme http/https if you decide not to use gRPC for sensor satellite communication\nsatellite-url: <set to desired host:port value>\n# --------------------------------------------------------------------------------------------\n...\n")),(0,s.kt)("h3",{id:"configure-sensor-environment"},"Configure sensor environment"),(0,s.kt)("p",null,"The eBPF sensor environment is configured in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/default/levo-ebpf-sensor"),". The default env value is ",(0,s.kt)("inlineCode",{parentName:"p"},"staging")),(0,s.kt)("p",null,"Edit ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/default/levo-ebpf-sensor"),", and set ",(0,s.kt)("inlineCode",{parentName:"p"},"LEVO_ENV")," to the desired env value (eg. ",(0,s.kt)("inlineCode",{parentName:"p"},"prod"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"qa"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Environment Variables for levo-ebpf-sensor.service\nMALLOC_CONF="background_thread:true,narenas:1,tcache:false,dirty_decay_ms:0,muzzy_decay_ms:0,abort_conf:true"\nLEVO_ENV="staging"\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A Sensor ",(0,s.kt)("em",{parentName:"strong"},"restart")," is required for this to take effect.")),(0,s.kt)("h3",{id:"start-sensor"},"Start Sensor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Note: The default config file is located at: '/etc/levo/sensor/config.yaml'\nsudo systemctl start levo-ebpf-sensor\n")),(0,s.kt)("h3",{id:"get-sensor-status"},"Get Sensor Status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status levo-ebpf-sensor\n")),(0,s.kt)("h3",{id:"stop-sensor"},"Stop Sensor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop levo-ebpf-sensor\n")),(0,s.kt)("h3",{id:"check-sensor-logs"},"Check Sensor Logs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u levo-ebpf-sensor.service -b -f --since \"15min ago\"\n\n# If journalctl isn't providing logs, you can alternatively:\nsudo cat syslog | grep 'levo-ebpf-sensor'\n")),(0,s.kt)("h3",{id:"show-sensor-config"},"Show Sensor Config"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/levo/sensor/config.yaml\n")),(0,s.kt)("h3",{id:"uninstall-sensor"},"Uninstall Sensor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo\xa0apt remove --purge levo-ebpf-sensor\nsudo apt clean\n")),(0,s.kt)("h3",{id:"manage-sensor-configuration"},"Manage Sensor Configuration"),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/common-tasks/sensor-configuration"},"Sensor Configuration"),", and ",(0,s.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/common-tasks/sensor-configuration#running-on-linux-host"},"Applying Configuration Changes"),"."))}f.isMDXComponent=!0}}]);