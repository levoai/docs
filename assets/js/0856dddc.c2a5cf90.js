"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3806],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1262:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(2389);function r(e){var t=e.children,n=e.fallback;return(0,o.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):null!=n?n:null}},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(4334),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),o=n(7294),r=n(4334),l=n(2389),i=n(7392),s=n(7094),p=n(2466),c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,k=e.values,h=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,I=(0,o.useState)(g),S=I[0],P=I[1],A=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=N[h];null!=x&&x!==S&&y.some((function(e){return e.value===x}))&&P(x)}var O=function(e){var t=e.currentTarget,n=A.indexOf(t),a=y[n].value;a!==S&&(C(t),P(a),null!=h&&T(h,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=A.indexOf(e.currentTarget)+1;n=null!=(a=A[o])?a:A[0];break;case"ArrowLeft":var r,l=A.indexOf(e.currentTarget)-1;n=null!=(r=A[l])?r:A[A.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return A.push(e)},onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},9311:function(e,t,n){n.r(t),n.d(t,{CurlScript:function(){return h},DownloadLink:function(){return f},assets:function(){return m},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return k}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=n(5488),i=n(5162),s=n(1262),p=["components"],c={sidebar_position:7,keywords:["API Security","eBPF","macOS","Windows","API Observability"]},u="Quickstart with MITM proxy",d={unversionedId:"quickstart/quickstart-mitm",id:"quickstart/quickstart-mitm",title:"Quickstart with MITM proxy",description:"Quickstart instructions for evaluating API Observability on Laptops/Desktops running Mac OSX or Windows.",source:"@site/docs/quickstart/quickstart-mitm.md",sourceDirName:"quickstart",slug:"/quickstart/quickstart-mitm",permalink:"/quickstart/quickstart-mitm",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/quickstart/quickstart-mitm.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,keywords:["API Security","eBPF","macOS","Windows","API Observability"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart with OWASP ZAP",permalink:"/quickstart/quickstart-zap-addon"},next:{title:"Install Satellite",permalink:"/install-satellite/"}},m={},k=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Setup Test <em>API Service</em>",id:"2-setup-test-api-service",level:2},{value:"3. Copy <code>Authorization Key</code> from Levo.ai",id:"3-copy-authorization-key-from-levoai",level:2},{value:"4. Pick an <code>Application Name</code>",id:"4-pick-an-application-name",level:2},{value:"5. Download - Docker Compose file",id:"5-download---docker-compose-file",level:2},{value:"6. Install Sensor Package via Docker Compose",id:"6-install-sensor-package-via-docker-compose",level:2},{value:"7. Verify Connectivity with Levo.ai",id:"7-verify-connectivity-with-levoai",level:2},{value:"a. Check Satellite Health",id:"a-check-satellite-health",level:4},{value:"b. Check Connectivity",id:"b-check-connectivity",level:4},{value:"8. Generate Application Traffic",id:"8-generate-application-traffic",level:2},{value:"a. Point Your <em>API Client</em> to the Sensor",id:"a-point-your-api-client-to-the-sensor",level:3},{value:"b. Generate Traffic",id:"b-generate-traffic",level:3},{value:"c. Verify API Traffic Capture",id:"c-verify-api-traffic-capture",level:3},{value:"9. View Auto-discovered OpenAPI Specifications",id:"9-view-auto-discovered-openapi-specifications",level:2},{value:"Common Tasks",id:"common-tasks",level:2},{value:"Shutdown Sensor",id:"shutdown-sensor",level:3},{value:"Change Sensor Listen Port",id:"change-sensor-listen-port",level:3}];function h(e){var t="curl";return e.curlCmd&&(t=e.curlCmd),(0,r.kt)(s.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,r.kt)("pre",null,(0,r.kt)("code",null,t," -s -o proxy-docker-compose.yml ",window.location.protocol+"//"+window.location.host+"/artifacts/satellite/proxy-docker-compose.yml"))}))}function f(){return(0,r.kt)(s.Z,{fallback:(0,r.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,r.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/satellite/proxy-docker-compose.yml"}," here ")}))}var v={toc:k,CurlScript:h,DownloadLink:f};function y(e){var t=e.components,s=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart-with-mitm-proxy"},"Quickstart with MITM proxy"),(0,r.kt)("p",null,"Quickstart instructions for evaluating ",(0,r.kt)("em",{parentName:"p"},"API Observability")," on Laptops/Desktops running ",(0,r.kt)("strong",{parentName:"p"},"Mac OSX")," or ",(0,r.kt)("strong",{parentName:"p"},"Windows"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Levo Sensor Package for OSX/Windows",src:n(1710).Z,width:"853",height:"468"})),(0,r.kt)("p",null,"Since Mac OSX and Windows do not support ",(0,r.kt)("a",{parentName:"p",href:"https://ebpf.io"},"eBPF"),", Levo provides a Sensor package (Docker based install), to enable quick evaluation on these platforms. This Sensor package gets visibility into your API traffic, by ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/"},"reverse proxying"))," traffic between your ",(0,r.kt)("em",{parentName:"p"},"API Client")," and ",(0,r.kt)("em",{parentName:"p"},"API Server"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your estimated completion time is ",(0,r.kt)("em",{parentName:"strong"},"10 minutes"),".")),(0,r.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",null," Docker Engine version `18.03.0` and above "),(0,r.kt)("li",null," Admin (or `sudo`) privileges on the Docker host "),(0,r.kt)("li",null," ",(0,r.kt)("a",{href:"https://levo.ai/levo-signup/"},"Forever Free Account on Levo.ai")," "),(0,r.kt)("li",null," Command line terminal with Bash or Bash compatible shell "))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",null," Docker Engine version `18.03.0` and above "),(0,r.kt)("li",null," Admin privileges on the Docker host "),(0,r.kt)("li",null," ",(0,r.kt)("a",{href:"https://levo.ai/levo-signup/"},"Forever Free Account on Levo.ai")," "),(0,r.kt)("li",null," Docker containers MUST be allowed to connect to the internet. Please check Firewall settings "),(0,r.kt)("li",null," PowerShell terminal ")))),(0,r.kt)("h2",{id:"2-setup-test-api-service"},"2. Setup Test ",(0,r.kt)("em",{parentName:"h2"},"API Service")),(0,r.kt)("p",null,"API Observability auto discovers APIs and generates OpenAPI specifications for all API endpoints, by observing API traffic between your ",(0,r.kt)("em",{parentName:"p"},"API Client")," and ",(0,r.kt)("em",{parentName:"p"},"API Server"),"."),(0,r.kt)("p",null,"If you do not have a test ",(0,r.kt)("em",{parentName:"p"},"API Service"),"/",(0,r.kt)("em",{parentName:"p"},"Application"),", you can use the ",(0,r.kt)("a",{parentName:"p",href:"/guides/demo-application"},"sample application")," provided by Levo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a. Note down the base URL for your test ",(0,r.kt)("em",{parentName:"p"},"API Server"),"/",(0,r.kt)("em",{parentName:"p"},"Service"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For example, if you are running the sample application (crAPI) on your laptop, the base URL would be ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8888"),". If your local test ",(0,r.kt)("em",{parentName:"p"},"API Server")," uses HTTPs the base URL for example, would be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost/"),".")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Since the Sensor package runs in a container, addresses like ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", etc., that refer to the Docker host, must be translated to ones, that can be resolved correctly to point to the Docker host inside the container. Please specify ",(0,r.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," in the base URL.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"In essence, if your base URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:<port>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:<port>"),", you will need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"http://host.docker.internal:<port>")," instead below."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"b. Export your ",(0,r.kt)("em",{parentName:"p"},"API Server"),"/",(0,r.kt)("em",{parentName:"p"},"Service")," URL in your terminal."),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"export SERVICE_ADDRESS=<http://host:port/base-path>"))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'$env:SERVICE_ADDRESS="<http://host:port/base-path>"')))))),(0,r.kt)("h2",{id:"3-copy-authorization-key-from-levoai"},"3. Copy ",(0,r.kt)("inlineCode",{parentName:"h2"},"Authorization Key")," from Levo.ai"),(0,r.kt)("p",null,"The Sensor package uses an authorization key to access Levo.ai. Follow instructions below to copy & export the key."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.levo.ai/login"},"Login")," to Levo.ai."),(0,r.kt)("li",{parentName:"ul"},"Click on your user profile."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"User Settings")),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Keys")," on the left navigation panel"),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Get Satellite Authorization Key")),(0,r.kt)("li",{parentName:"ul"},"Now copy your authorization key."),(0,r.kt)("li",{parentName:"ul"},"Export the copied ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization Key")," in your terminal.")),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"export LEVOAI_AUTH_KEY=<'Authorization Key' copied above>"))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"$env:LEVOAI_AUTH_KEY=\"<'Authorization Key' copied above>\"")))),(0,r.kt)("h2",{id:"4-pick-an-application-name"},"4. Pick an ",(0,r.kt)("inlineCode",{parentName:"h2"},"Application Name")),(0,r.kt)("p",null,"Auto discovered API endpoints and their OpenAPI specifications are show in the ",(0,r.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different API servers, similar to how file folders work in an operating system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a. Pick a descriptive name which will be used in the subsequent step below. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"my-test-api-server"),"."),(0,r.kt)("li",{parentName:"ul"},"b. Export the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application Name")," in your terminal.")),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"export LEVOAI_SERVICE_NAME=<'Application Name' chosen above>"))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"$env:LEVOAI_SERVICE_NAME=\"<'Application Name' chosen above>\"")))),(0,r.kt)("h2",{id:"5-download---docker-compose-file"},"5. Download - Docker Compose file"),(0,r.kt)("p",null,"Execute the following in your terminal:"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"CurlScript"})),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)(h,{curlCmd:"curl.exe",mdxType:"CurlScript"}))),(0,r.kt)("p",null,"If prefer to download the Docker Compose file via your browser, you can download it ",(0,r.kt)(f,{mdxType:"DownloadLink"}),"."),(0,r.kt)("h2",{id:"6-install-sensor-package-via-docker-compose"},"6. Install Sensor Package via Docker Compose"),(0,r.kt)("p",null,"Execute the following in your terminal (where you previously downloaded the Docker Compose file):"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"docker compose -f proxy-docker-compose.yml pull && docker compose -f proxy-docker-compose.yml up -d"))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"docker compose -f .\\proxy-docker-compose.yml pull")),(0,r.kt)("pre",null,(0,r.kt)("code",null,"docker compose -f .\\proxy-docker-compose.yml up -d\xa0\xa0")))),(0,r.kt)("h2",{id:"7-verify-connectivity-with-levoai"},"7. Verify Connectivity with Levo.ai"),(0,r.kt)("p",null,"The Sensor package contains both the (proxy based) Sensor and Satellite. Follow steps below to check the Satellite health and connectivity to Levo.ai."),(0,r.kt)("h4",{id:"a-check-satellite-health"},"a. Check Satellite Health"),(0,r.kt)("p",null,"The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger."),(0,r.kt)("p",null,"Wait couple of minutes after the install, and check the health of the components by executing the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -f name=levoai\n")),(0,r.kt)("p",null,"If the Satellite is healthy, you should see output similar to below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                        COMMAND                  CREATED          STATUS                    PORTS                                                                                                         NAMES\n5a54d8efe672   levoai/proxy:latest          "docker-entrypoint.s\u2026"   50 seconds ago   Up 37 seconds              0.0.0.0:8081->8081/tcp, 0.0.0.0:9080->8080/tcp                                                                              levoai-proxy\n8767c62db6cb   levoai/satellite:latest      "python -OO /opt/lev\u2026"   50 seconds ago   Up 37 seconds                                                                                                                           levoai-tagger\ndcb187e00ff2   levoai/satellite:latest      "gunicorn --capture-\u2026"   50 seconds ago   Up 37 seconds             0.0.0.0:9999->9999/tcp                                                                                        levoai-satellite\n169ceecf0263   rabbitmq:3.10.5-management   "docker-entrypoint.s\u2026"   50 seconds ago   Up 49 seconds (healthy)   4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 15671/tcp, 15691-15692/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp   levoai-rabbitmq\n')),(0,r.kt)("h4",{id:"b-check-connectivity"},"b. Check Connectivity"),(0,r.kt)("p",null,"Execute the following to check for connectivity health:"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'docker logs levoai-tagger 2>&1 | grep "Ready to process; waiting for messages."\xa0'))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'docker logs levoai-tagger 2>&1 | sls "Ready to process; waiting for messages."\xa0')))),(0,r.kt)("br",null),(0,r.kt)("p",null,"If connectivity is ",(0,r.kt)("strong",{parentName:"p"},"healthy"),", you will see output similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"level": "info", "time": "2022-06-07 08:07:22,439",\n"line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", \n"module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", \n"message": "Ready to process; waiting for messages."}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please contact ",(0,r.kt)("inlineCode",{parentName:"strong"},"support@levo.ai")," if you notice health/connectivity related errors.")),(0,r.kt)("h2",{id:"8-generate-application-traffic"},"8. Generate Application Traffic"),(0,r.kt)("p",null,"The Sensor picks up API traffic that is HTTP\\1.x based. There has to be some consistent load on your API endpoints for them to be auto discovered and documented."),(0,r.kt)("h3",{id:"a-point-your-api-client-to-the-sensor"},"a. Point Your ",(0,r.kt)("em",{parentName:"h3"},"API Client")," to the Sensor"),(0,r.kt)("p",null,"The Sensor acts as a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/"},"reverse proxy"))," for your ",(0,r.kt)("em",{parentName:"p"},"API Server"),". You will need to point your ",(0,r.kt)("em",{parentName:"p"},"API Client")," to the Sensor. The Sensor will proxy the traffic to your test ",(0,r.kt)("em",{parentName:"p"},"API Server"),"/",(0,r.kt)("em",{parentName:"p"},"Service"),"."),(0,r.kt)("p",null,"The Sensor listens on ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9080"},"http://127.0.0.1:9080"),". Please point your API Client (Web Browser, ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),", ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl"),", etc.) to this address (instead of the ",(0,r.kt)("em",{parentName:"p"},"API Server's")," address)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your ",(0,r.kt)("em",{parentName:"p"},"API Server")," uses HTTP/s (TLS), the Sensor will use HTTP/s when proxying traffic to it. However your ",(0,r.kt)("em",{parentName:"p"},"API Client")," will need to use ",(0,r.kt)("strong",{parentName:"p"},"HTTP")," when talking to the Sensor.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," (or equivalent in Windows) to resolve the IP address of your ",(0,r.kt)("em",{parentName:"p"},"API Server"),", please edit the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," entry to point to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (IP address of the Sensor).")),(0,r.kt)("h3",{id:"b-generate-traffic"},"b. Generate Traffic"),(0,r.kt)("p",null,"Please ensure you exercise your API endpoints several times using using your ",(0,r.kt)("em",{parentName:"p"},"API Client"),". Use a load generator to generate consistent traffic, if necessary."),(0,r.kt)("h3",{id:"c-verify-api-traffic-capture"},"c. Verify API Traffic Capture"),(0,r.kt)("p",null,"Check the logs of Satellite's ",(0,r.kt)("inlineCode",{parentName:"p"},"Tagger")," sub-component."),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'docker logs levoai-tagger 2>&1 | grep "Consuming the span"\xa0'))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'docker logs levoai-tagger 2>&1 | sls "Consuming the span"\xa0')))),(0,r.kt)("p",null,"If API Traffic is correctly being processed, you will see a lot of log entries containing the term ",(0,r.kt)("inlineCode",{parentName:"p"},"Consuming the span"),"."),(0,r.kt)("h2",{id:"9-view-auto-discovered-openapi-specifications"},"9. View Auto-discovered OpenAPI Specifications"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/"},"API Catalog")," in Levo.ai should be auto populated in a matter of minutes (after your API endpoints are being exercised consistently)."),(0,r.kt)("p",null,"The API Catalog will contain your auto discovered API endpoints and their OpenAPI schemas, all grouped under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Name")," you chose earlier."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations! You have successfully auto discovered and auto documented API endpoints in your application.")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"common-tasks"},"Common Tasks"),(0,r.kt)("h3",{id:"shutdown-sensor"},"Shutdown Sensor"),(0,r.kt)("p",null,"Execute the following in the directory where you downloaded the Docker Compose file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f proxy-docker-compose.yml down\n")),(0,r.kt)("h3",{id:"change-sensor-listen-port"},"Change Sensor Listen Port"),(0,r.kt)("p",null,"The Sensor by default listens on TCP port 9080 (interface address 127.0.0.1). If this conflicts with a port being used by another application, you can change it by following the instructions below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/quickstart/quickstart-mitm#shutdown-sensor"},"Shutdown")," the Sensor (if running)"),(0,r.kt)("li",{parentName:"ul"},"Export your desired port in your terminal",(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",label:"Mac OSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"export LEVOAI_PROXY_PORT=<Your desired port number>"))),(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'$env:LEVOAI_PROXY_PORT="<Your desired port number>"'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/quickstart/quickstart-mitm#6-install-sensor-package-via-docker-compose"},"Start")," the Sensor")))}y.isMDXComponent=!0},1710:function(e,t,n){t.Z=n.p+"assets/images/api-observability-laptops-242c94c9f051eb166201fd9ecc0bf721.svg"}}]);