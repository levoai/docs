"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8879],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1262:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(2389);function l(e){var t=e.children,n=e.fallback;return(0,o.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):null!=n?n:null}},3054:function(e,t,n){n.r(t),n.d(t,{DownloadDockerComposeLink:function(){return m},assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=n(102),l=(n(7294),n(3905)),i=n(1262),r=["components"],s={sidebar_position:2,description:"Set up Levo.ai Satellite on Docker. Follow our detailed guide for installation and deployment to enhance API security in Docker environments."},c="Satellite via Docker",p={unversionedId:"install-satellite/satellite-docker",id:"install-satellite/satellite-docker",title:"Satellite via Docker",description:"Set up Levo.ai Satellite on Docker. Follow our detailed guide for installation and deployment to enhance API security in Docker environments.",source:"@site/docs/install-satellite/satellite-docker.mdx",sourceDirName:"install-satellite",slug:"/install-satellite/satellite-docker",permalink:"/install-satellite/satellite-docker",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-satellite/satellite-docker.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Set up Levo.ai Satellite on Docker. Follow our detailed guide for installation and deployment to enhance API security in Docker environments."},sidebar:"tutorialSidebar",previous:{title:"Satellite on Kubernetes",permalink:"/install-satellite/satellite-kubernetes"},next:{title:"Satellite AMI on AWS EC2",permalink:"/install-satellite/satellite-ami-aws-ec2"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Download Docker Compose file",id:"1-download-docker-compose-file",level:3},{value:"2. Install Satellite",id:"2-install-satellite",level:3},{value:"3. Verify connectivity with Levo.ai",id:"3-verify-connectivity-with-levoai",level:3},{value:"a. Check Satellite health",id:"a-check-satellite-health",level:4},{value:"b. Check connectivity",id:"b-check-connectivity",level:4},{value:"4. Note down <code>Host:Port</code> information",id:"4-note-down-hostport-information",level:3},{value:"Satellite Lifecycle Management",id:"satellite-lifecycle-management",level:2},{value:"Uninstall the Satellite",id:"uninstall-the-satellite",level:3},{value:"Upgrade the Satellite",id:"upgrade-the-satellite",level:3},{value:"Change the <code>minimum number of URLs</code> that the satellite needs to observe to detect an API endpoint.",id:"change-the-minimum-number-of-urls-that-the-satellite-needs-to-observe-to-detect-an-api-endpoint",level:3},{value:"List Satellite&#39;s containers",id:"list-satellites-containers",level:3},{value:"Get logs of a specific container",id:"get-logs-of-a-specific-container",level:3},{value:"Tail logs of a specific container",id:"tail-logs-of-a-specific-container",level:3},{value:"Get logs for last 1 minute",id:"get-logs-for-last-1-minute",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Tagger Errors",id:"tagger-errors",level:3},{value:"Authentication Errors",id:"authentication-errors",level:3},{value:"Connectivity Errors",id:"connectivity-errors",level:3}];function m(){return(0,l.kt)(i.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,l.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/satellite/docker-compose.yml",download:!0}," Download")}))}var h={toc:d,DownloadDockerComposeLink:m};function k(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"satellite-via-docker"},"Satellite via Docker"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,l.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above"),(0,l.kt)("li",{parentName:"ul"},"Admin privileges on the Docker host"),(0,l.kt)("li",{parentName:"ul"},"'docker-compose' installed, if 'docker compose' is not supported on your OS"),(0,l.kt)("li",{parentName:"ul"},"At least 4 CPUs"),(0,l.kt)("li",{parentName:"ul"},"At least 8 GB RAM")),(0,l.kt)("h3",{id:"1-download-docker-compose-file"},"1. Download Docker Compose file"),(0,l.kt)("p",null,"Levo provides pre-built Docker images for the Satellite that can be installed via Docker Compose."),(0,l.kt)(m,{mdxType:"DownloadDockerComposeLink"})," the Docker Compose file to your desktop.",(0,l.kt)("h3",{id:"2-install-satellite"},"2. Install Satellite"),(0,l.kt)("p",null,"Execute the following from the directory where the Docker Compose file was downloaded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY='Authorization Key'\ndocker compose pull && docker compose up -d\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Depending on the region you are installing in, you may need to set a different Levo base URL for the satellite."),(0,l.kt)("p",{parentName:"admonition"},"For example, if the satellite will be used with ",(0,l.kt)("inlineCode",{parentName:"p"},"app.india-1.levo.ai"),", the installation command will be:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY='Authorization Key'\nexport LEVOAI_BASE_URL='https://api.india-1.levo.ai'\ndocker compose pull && docker compose up -d\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"docker compose ...")," complains with ",(0,l.kt)("em",{parentName:"p"},"\"docker: 'compose' is not a docker command.\""),", you have can try ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"docker-compose"))," instead.")),(0,l.kt)("h3",{id:"3-verify-connectivity-with-levoai"},"3. Verify connectivity with Levo.ai"),(0,l.kt)("h4",{id:"a-check-satellite-health"},"a. Check Satellite health"),(0,l.kt)("p",null,"The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger."),(0,l.kt)("p",null,"Wait couple of minutes after the install, and check the health of the components by executing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -f name=levoai\n")),(0,l.kt)("p",null,"If the Satellite is healthy, you should see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                     COMMAND                  CREATED             STATUS                  PORTS                                                                                                                                    NAMES\n2b32cd6b9ced   levoai/collector:stable   "/usr/local/bin/levo\u2026"   10 seconds ago      Up 8 seconds            0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector\n06f3c597cad0   levoai/satellite:stable   "gunicorn --capture-\u2026"   10 seconds ago      Up 9 seconds            0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite\n89026034c567   levoai/satellite:stable   "python -OO /opt/lev\u2026"   10 seconds ago      Up Less than a second                                                                                                                                            levoai-tagger\nf74524d02fbd   bitnami/rabbitmq:3.10     "/opt/bitnami/script\u2026"   10 seconds ago      Up 9 seconds            5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq\n')),(0,l.kt)("h4",{id:"b-check-connectivity"},"b. Check connectivity"),(0,l.kt)("p",null,"Execute the following to check for connectivity health:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'docker logs levoai-tagger | grep "Ready to process; waiting for messages."\n')),(0,l.kt)("p",null,"If connectivity is healthy, you will see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}\n')),(0,l.kt)("h3",{id:"4-note-down-hostport-information"},"4. Note down ",(0,l.kt)("inlineCode",{parentName:"h3"},"Host:Port")," information"),(0,l.kt)("p",null,"The Collector now runs in a container, and is reachable on the host via port 4317 (on all the host's network interfaces)."),(0,l.kt)("p",null,"Please note down the either the host's IP address or domain name. The Sensor will be configured to communicate with the Collector at <Host's IP|Domain-Name>:4317."),(0,l.kt)("p",null,"Please proceed to ",(0,l.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors"},"install traffic capture sensors"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"satellite-lifecycle-management"},"Satellite Lifecycle Management"),(0,l.kt)("h3",{id:"uninstall-the-satellite"},"Uninstall the Satellite"),(0,l.kt)("p",null,"Ensure you are in the same directory where you downloaded the ",(0,l.kt)(m,{mdxType:"DownloadDockerComposeLink"}),"."),(0,l.kt)("p",null,"Execute the below command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down --remove-orphans -v\n")),(0,l.kt)("h3",{id:"upgrade-the-satellite"},"Upgrade the Satellite"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#uninstall-the-satellite"},"Uninstall")," the Satellite"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-install-satellite"},"Reinstall")," the Satellite. The install always ",(0,l.kt)("em",{parentName:"li"},"pulls")," the latest Docker images for the Satellite.")),(0,l.kt)("h3",{id:"change-the-minimum-number-of-urls-that-the-satellite-needs-to-observe-to-detect-an-api-endpoint"},"Change the ",(0,l.kt)("inlineCode",{parentName:"h3"},"minimum number of URLs")," that the satellite needs to observe to detect an API endpoint."),(0,l.kt)("p",null,"To detect an API endpoint, Satellite waits for at least '10' URLs to match that endpoint URL pattern.\nThis number may cause delays in detecting API endpoints when there is not enough load."),(0,l.kt)("p",null,"If you want to change this number to suit your environment:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"export the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"LEVOAI_MIN_URLS_PER_PATTERN")," - for example :\n",(0,l.kt)("inlineCode",{parentName:"p"},"export LEVOAI_MIN_URLS_PER_PATTERN=3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Reinstall the Satellite to pickup the new configuration"))),(0,l.kt)("h3",{id:"list-satellites-containers"},"List Satellite's containers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps | grep -E 'levoai/collector|bitnami/rabbitmq|levoai/satellite|levoai/tagger'\n")),(0,l.kt)("h3",{id:"get-logs-of-a-specific-container"},"Get logs of a specific container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs <container id>\n")),(0,l.kt)("h3",{id:"tail-logs-of-a-specific-container"},"Tail logs of a specific container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container id>\n")),(0,l.kt)("h3",{id:"get-logs-for-last-1-minute"},"Get logs for last 1 minute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs <container id> --since 1m\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"tagger-errors"},"Tagger Errors"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tagger")," component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state."),(0,l.kt)("p",null,"Please see sample output below from ",(0,l.kt)("inlineCode",{parentName:"p"},'docker ps | grep -E "levoai/collector|levoai/satellite|bitnami/rabbitmq"'),", that shows the Tagger (2nd line item) in an errored state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'65fe40867c70   levoai/collector:stable   "/usr/local/bin/levo\u2026"   5 minutes ago   Up 5 minutes                    0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector\n45d6c4cccb28   levoai/satellite:stable   "python -OO /opt/lev\u2026"   5 minutes ago   Restarting (1) 55 seconds ago                                                                                                                                            levoai-tagger\n721b5431369a   levoai/satellite:stable   "gunicorn --capture-\u2026"   5 minutes ago   Up 5 minutes                    0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite\na00dc710d4af   bitnami/rabbitmq:3.10     "/opt/bitnami/script\u2026"   5 minutes ago   Up 5 minutes                    5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq\n')),(0,l.kt)("p",null,"Below are common error scenarios:"),(0,l.kt)("h3",{id:"authentication-errors"},"Authentication Errors"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tagger")," component authenticates with Levo.ai using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". If Tagger is unable to authenticate, it will error out."),(0,l.kt)("p",null,"Check for authentication errors in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'docker logs levoai-tagger | grep "Exception: Failed to refresh access token"\n')),(0,l.kt)("p",null,"If there are exception messages, you have an incorrect or stale ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". Please contact ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,l.kt)("h3",{id:"connectivity-errors"},"Connectivity Errors"),(0,l.kt)("p",null,"Check for connectivity errors in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\ndocker logs levoai-tagger | grep "ConnectionRefusedError: [Errno 111] Connection refused"\n')),(0,l.kt)("p",null,"If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries. Please contact ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."))}k.isMDXComponent=!0}}]);