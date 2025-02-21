"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8879],{3905:function(e,t,l){l.d(t,{Zo:function(){return u},kt:function(){return m}});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(l),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return l?a.createElement(h,i(i({ref:t},u),{},{components:l})):a.createElement(h,i({ref:t},u))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,i=new Array(o);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var c=2;c<o;c++)i[c]=l[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},1262:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),n=l(2389);function o(e){var t=e.children,l=e.fallback;return(0,n.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):null!=l?l:null}},5162:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(7294),n=l(4334),o="tabItem_Ymn6";function i(e){var t=e.children,l=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:l},t)}},5488:function(e,t,l){l.d(t,{Z:function(){return m}});var a=l(3117),n=l(7294),o=l(4334),i=l(2389),r=l(7392),s=l(7094),c=l(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,l,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,v=e.className,g=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,r.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(l=g.find((function(e){return e.props.default})))?void 0:l.props.value)?t:g[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,S=N.setTabGroupChoices,E=(0,n.useState)(y),C=E[0],T=E[1],L=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=w[k];null!=I&&I!==C&&f.some((function(e){return e.value===I}))&&T(I)}var O=function(e){var t=e.currentTarget,l=L.indexOf(t),a=f[l].value;a!==C&&(D(t),T(a),null!=k&&S(k,String(a)))},x=function(e){var t,l=null;switch(e.key){case"ArrowRight":var a,n=L.indexOf(e.currentTarget)+1;l=null!=(a=L[n])?a:L[0];break;case"ArrowLeft":var o,i=L.indexOf(e.currentTarget)-1;l=null!=(o=L[i])?o:L[L.length-1]}null==(t=l)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},f.map((function(e){var t=e.value,l=e.label,i=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return L.push(e)},onKeyDown:x,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=l?l:t)}))),i?(0,n.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},3054:function(e,t,l){l.r(t),l.d(t,{DownloadDockerComposeLink:function(){return k},DownloadShellScriptLink:function(){return v},assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var a=l(3117),n=l(102),o=(l(7294),l(3905)),i=l(1262),r=l(5488),s=l(5162),c=["components"],u={sidebar_position:2,description:"Set up Levo.ai Satellite on Docker. Follow our detailed guide for installation and deployment to enhance API security in Docker environments."},p="Satellite via Docker",d={unversionedId:"install-satellite/satellite-docker",id:"install-satellite/satellite-docker",title:"Satellite via Docker",description:"Set up Levo.ai Satellite on Docker. Follow our detailed guide for installation and deployment to enhance API security in Docker environments.",source:"@site/docs/install-satellite/satellite-docker.mdx",sourceDirName:"install-satellite",slug:"/install-satellite/satellite-docker",permalink:"/install-satellite/satellite-docker",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-satellite/satellite-docker.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Set up Levo.ai Satellite on Docker. Follow our detailed guide for installation and deployment to enhance API security in Docker environments."},sidebar:"tutorialSidebar",previous:{title:"Satellite on Kubernetes",permalink:"/install-satellite/satellite-kubernetes"},next:{title:"Satellite AMI on AWS EC2",permalink:"/install-satellite/satellite-ami-aws-ec2"}},m={},h=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Download Docker Compose file",id:"1-download-docker-compose-file",level:3},{value:"2. Install Satellite",id:"2-install-satellite",level:3},{value:"3. Verify connectivity with Levo.ai",id:"3-verify-connectivity-with-levoai",level:3},{value:"a. Check Satellite health",id:"a-check-satellite-health",level:4},{value:"b. Check connectivity",id:"b-check-connectivity",level:4},{value:"4. Note down <code>Host:Port</code> information",id:"4-note-down-hostport-information",level:3},{value:"Satellite Lifecycle Management",id:"satellite-lifecycle-management",level:2},{value:"Upgrade the Satellite",id:"upgrade-the-satellite",level:3},{value:"Uninstall the Satellite",id:"uninstall-the-satellite",level:3},{value:"List Satellite&#39;s containers",id:"list-satellites-containers",level:3},{value:"Get logs of a specific container",id:"get-logs-of-a-specific-container",level:3},{value:"Tail logs of a specific container",id:"tail-logs-of-a-specific-container",level:3},{value:"Get logs for last 1 minute",id:"get-logs-for-last-1-minute",level:3},{value:"1. Download Shell Script File",id:"1-download-shell-script-file",level:3},{value:"2. Install Satellite",id:"2-install-satellite-1",level:3},{value:"a. Start Levo Satellite",id:"a-start-levo-satellite",level:4},{value:"b. Stop the Levo Satellite",id:"b-stop-the-levo-satellite",level:4},{value:"c. Restart the Levo Satellite",id:"c-restart-the-levo-satellite",level:4},{value:"d. Upgrade the Levo Satellite",id:"d-upgrade-the-levo-satellite",level:4},{value:"e. Share Satellite logs with Levo Support",id:"e-share-satellite-logs-with-levo-support",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Change the <code>minimum number of URLs</code> that the satellite needs to observe to detect an API endpoint.",id:"change-the-minimum-number-of-urls-that-the-satellite-needs-to-observe-to-detect-an-api-endpoint",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Tagger Errors",id:"tagger-errors",level:3},{value:"Authentication Errors",id:"authentication-errors",level:3},{value:"Connectivity Errors",id:"connectivity-errors",level:3},{value:"Enable Debug Logging",id:"enable-debug-logging",level:3},{value:"Need Help?",id:"need-help",level:3}];function k(){return(0,o.kt)(i.Z,{fallback:(0,o.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,o.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/satellite/docker-compose.yml",download:!0}," Download")}))}function v(){return(0,o.kt)(i.Z,{fallback:(0,o.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,o.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/satellite/levo_satellite.sh",download:!0}," levo_satellite.sh")}))}var g={toc:h,DownloadDockerComposeLink:k,DownloadShellScriptLink:v};function f(e){var t=e.components,l=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"satellite-via-docker"},"Satellite via Docker"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,o.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above"),(0,o.kt)("li",{parentName:"ul"},"Admin privileges on the Docker host"),(0,o.kt)("li",{parentName:"ul"},"'docker-compose' installed, if 'docker compose' is not supported on your OS"),(0,o.kt)("li",{parentName:"ul"},"At least 4 CPUs"),(0,o.kt)("li",{parentName:"ul"},"At least 8 GB RAM")),(0,o.kt)(r.Z,{defaultValue:"docker",values:[{label:"Install using Docker compose",value:"docker"},{label:"Install using Shell Script",value:"sh"}],groupId:"env",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("h3",{id:"1-download-docker-compose-file"},"1. Download Docker Compose file"),(0,o.kt)("p",null,"Levo provides pre-built Docker images for the Satellite that can be installed via Docker Compose."),(0,o.kt)(k,{mdxType:"DownloadDockerComposeLink"})," the Docker Compose file to your desktop.",(0,o.kt)("p",null),(0,o.kt)("h3",{id:"2-install-satellite"},"2. Install Satellite"),(0,o.kt)("p",null,"Execute the following from the directory where the Docker Compose file was downloaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY='Authorization Key'\ndocker compose pull && docker compose up -d\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Depending on the region you are installing in, you may need to set a different Levo base URL for the satellite."),(0,o.kt)("p",{parentName:"admonition"},"For example, if the satellite will be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"app.india-1.levo.ai"),", the installation command will be:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY='Authorization Key'\nexport LEVOAI_BASE_URL='https://api.india-1.levo.ai'\ndocker compose pull && docker compose up -d\n"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose ...")," complains with ",(0,o.kt)("em",{parentName:"p"},"\"docker: 'compose' is not a docker command.\""),", you have can try ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"docker-compose"))," instead.")),(0,o.kt)("h3",{id:"3-verify-connectivity-with-levoai"},"3. Verify connectivity with Levo.ai"),(0,o.kt)("h4",{id:"a-check-satellite-health"},"a. Check Satellite health"),(0,o.kt)("p",null,"The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger."),(0,o.kt)("p",null,"Wait a couple of minutes after the installation, and check the health of the components by executing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -f name=levoai\n")),(0,o.kt)("p",null,"If the Satellite is healthy, you should see output similar to below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                     COMMAND                  CREATED             STATUS                  PORTS                                                                                                                                    NAMES\n2b32cd6b9ced   levoai/collector:stable   "/usr/local/bin/levo\u2026"   10 seconds ago      Up 8 seconds            0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector\n06f3c597cad0   levoai/satellite:stable   "gunicorn --capture-\u2026"   10 seconds ago      Up 9 seconds            0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite\n89026034c567   levoai/satellite:stable   "python -OO /opt/lev\u2026"   10 seconds ago      Up Less than a second                                                                                                                                            levoai-tagger\nf74524d02fbd   bitnami/rabbitmq:3.10     "/opt/bitnami/script\u2026"   10 seconds ago      Up 9 seconds            5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq\n')),(0,o.kt)("h4",{id:"b-check-connectivity"},"b. Check connectivity"),(0,o.kt)("p",null,"Execute the following to check for connectivity health:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker logs levoai-tagger | grep "Ready to process; waiting for messages."\n')),(0,o.kt)("p",null,"If connectivity is healthy, you will see output similar to below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}\n')),(0,o.kt)("h3",{id:"4-note-down-hostport-information"},"4. Note down ",(0,o.kt)("inlineCode",{parentName:"h3"},"Host:Port")," information"),(0,o.kt)("p",null,"The Collector now runs in a container, and is reachable on the host via port 4317 (on all the host's network interfaces)."),(0,o.kt)("p",null,"Please note down either the host's IP address or domain name. The Sensor will be configured to communicate with the Collector at <Host's IP|Domain-Name>:4317."),(0,o.kt)("p",null,"Please proceed to ",(0,o.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors"},"install traffic capture sensors"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"satellite-lifecycle-management"},"Satellite Lifecycle Management"),(0,o.kt)("h3",{id:"upgrade-the-satellite"},"Upgrade the Satellite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to directory where you have the Docker Compose file."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-install-satellite"},"Reinstall")," the Satellite. The install always ",(0,o.kt)("em",{parentName:"li"},"pulls")," the latest Docker images for the Satellite.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If the re-installation fails, please ",(0,o.kt)("a",{parentName:"p",href:"#uninstall-the-satellite"},"Uninstall")," the Satellite and then reinstall.")),(0,o.kt)("h3",{id:"uninstall-the-satellite"},"Uninstall the Satellite"),(0,o.kt)("p",null,"Ensure you are in the same directory where you downloaded the ",(0,o.kt)(k,{mdxType:"DownloadDockerComposeLink"}),"."),(0,o.kt)("p",null,"Execute the below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down --remove-orphans -v\n")),(0,o.kt)("h3",{id:"list-satellites-containers"},"List Satellite's containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps | grep -E 'levoai/collector|bitnami/rabbitmq|levoai/satellite|levoai/tagger'\n")),(0,o.kt)("h3",{id:"get-logs-of-a-specific-container"},"Get logs of a specific container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs <container id>\n")),(0,o.kt)("h3",{id:"tail-logs-of-a-specific-container"},"Tail logs of a specific container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container id>\n")),(0,o.kt)("h3",{id:"get-logs-for-last-1-minute"},"Get logs for last 1 minute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs <container id> --since 1m\n"))),(0,o.kt)(s.Z,{value:"sh",mdxType:"TabItem"},(0,o.kt)("h3",{id:"1-download-shell-script-file"},"1. Download Shell Script File"),(0,o.kt)("p",null,"Levo provides Shell Script file for the Satellite that can be installed via Docker."),(0,o.kt)("p",null,"Download ",(0,o.kt)(v,{mdxType:"DownloadShellScriptLink"})," script file to your desktop."),(0,o.kt)("h3",{id:"2-install-satellite-1"},"2. Install Satellite"),(0,o.kt)("p",null,"Permissions: Ensure the script has executable permissions."),(0,o.kt)("p",null,"Otherwise, run the following command to add executable permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x ./levo_satellite.sh\n")),(0,o.kt)("p",null,"Set the following environment variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY='Authorization Key'\nexport LEVOAI_ORG_ID='Org ID'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Depending on the region you are installing in, you may need to set a different Levo base URL for the satellite."),(0,o.kt)("p",{parentName:"admonition"},"For example, if the satellite will be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"app.india-1.levo.ai"),", the installation command will be:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_BASE_URL='https://api.india-1.levo.ai'\n"))),(0,o.kt)("h4",{id:"a-start-levo-satellite"},"a. Start Levo Satellite"),(0,o.kt)("p",null,"Execute following command to start Levo satellite."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./levo_satellite.sh start\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are running the script with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),", ensure that the environment variables are also set with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),". Otherwise, the script will not have access to these variables."),(0,o.kt)("p",{parentName:"admonition"},"Alternatively, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-E")," flag with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," to preserve the user-defined environment variables, like this:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -E ./levo_satellite.sh start\n")),(0,o.kt)("p",{parentName:"admonition"},"This ensures the script can access the required environment variables without explicitly redefining them under sudo.")),(0,o.kt)("h4",{id:"b-stop-the-levo-satellite"},"b. Stop the Levo Satellite"),(0,o.kt)("p",null,"Execute following command to stop or uninstall Levo satellite components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./levo_satellite.sh stop\n")),(0,o.kt)("h4",{id:"c-restart-the-levo-satellite"},"c. Restart the Levo Satellite"),(0,o.kt)("p",null,"To restart the Levo satellite components, execute the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./levo_satellite.sh restart\n")),(0,o.kt)("h4",{id:"d-upgrade-the-levo-satellite"},"d. Upgrade the Levo Satellite"),(0,o.kt)("p",null,"Execute the following command to upgrade the existing satellite setup."),(0,o.kt)("p",null,"Running this command will download the latest docker compose file and restarts all the satellite components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./levo_satellite.sh upgrade\n")),(0,o.kt)("h4",{id:"e-share-satellite-logs-with-levo-support"},"e. Share Satellite logs with Levo Support"),(0,o.kt)("p",null,"Execute the following command to collect logs from all Satellite components. This will create an archive as /tmp/levoai",(0,o.kt)("em",{parentName:"p"},"satellite_logs"),"%date-time%.tar.gz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./levo_satellite.sh get-logs\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"change-the-minimum-number-of-urls-that-the-satellite-needs-to-observe-to-detect-an-api-endpoint"},"Change the ",(0,o.kt)("inlineCode",{parentName:"h3"},"minimum number of URLs")," that the satellite needs to observe to detect an API endpoint."),(0,o.kt)("p",null,"To detect an API endpoint, Satellite waits for at least '10' URLs to match that endpoint URL pattern.\nThis number may cause delays in detecting API endpoints when there is not enough load."),(0,o.kt)("p",null,"If you want to change this number to suit your environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to Levo's dashboard."),(0,o.kt)("li",{parentName:"ul"},"Click settings from the left navigation bar."),(0,o.kt)("li",{parentName:"ul"},"Under the API Discovery tab, update ",(0,o.kt)("inlineCode",{parentName:"li"},"Min. URLs per Pattern")," to the desired number and wait for at least 5 mins for satellite to pick up the change.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"tagger-errors"},"Tagger Errors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Tagger")," component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state."),(0,o.kt)("p",null,"Please see sample output below from ",(0,o.kt)("inlineCode",{parentName:"p"},'docker ps | grep -E "levoai/collector|levoai/satellite|bitnami/rabbitmq"'),", that shows the Tagger (2nd line item) in an errored state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'65fe40867c70   levoai/collector:stable   "/usr/local/bin/levo\u2026"   5 minutes ago   Up 5 minutes                    0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector\n45d6c4cccb28   levoai/satellite:stable   "python -OO /opt/lev\u2026"   5 minutes ago   Restarting (1) 55 seconds ago                                                                                                                                            levoai-tagger\n721b5431369a   levoai/satellite:stable   "gunicorn --capture-\u2026"   5 minutes ago   Up 5 minutes                    0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite\na00dc710d4af   bitnami/rabbitmq:3.10     "/opt/bitnami/script\u2026"   5 minutes ago   Up 5 minutes                    5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq\n')),(0,o.kt)("p",null,"Below are common error scenarios:"),(0,o.kt)("h3",{id:"authentication-errors"},"Authentication Errors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Tagger")," component authenticates with Levo.ai using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". If Tagger is unable to authenticate, it will error out."),(0,o.kt)("p",null,"Check for authentication errors in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker logs levoai-tagger | grep "Exception: Failed to refresh access token"\n')),(0,o.kt)("p",null,"If there are exception messages, you have an incorrect or stale ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". Please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,o.kt)("h3",{id:"connectivity-errors"},"Connectivity Errors"),(0,o.kt)("p",null,"Check for connectivity errors in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\ndocker logs levoai-tagger | grep "ConnectionRefusedError: [Errno 111] Connection refused"\n')),(0,o.kt)("p",null,"If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries."),(0,o.kt)("h3",{id:"enable-debug-logging"},"Enable Debug Logging"),(0,o.kt)("p",null,"Set the following environment variable to enable debug logging for the Satellite components and then reinstall the satellite or restart the containers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_LOG_LEVEL='DEBUG'\n")),(0,o.kt)("p",null,"This will enable detailed debugging logs for all satellite components, including Tagger, Collector, Ion, and Satellite."),(0,o.kt)("p",null,"Some various log levels that can be set are ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),". The default log level is ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"need-help"},"Need Help?"),(0,o.kt)("p",null,"For further assistance, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"Levo.ai Support"),"."))}f.isMDXComponent=!0}}]);