"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[743],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||l;return a?i.createElement(m,o(o({ref:t},p),{},{components:a})):i.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1262:function(e,t,a){a.d(t,{Z:function(){return l}});var i=a(7294),n=a(2389);function l(e){var t=e.children,a=e.fallback;return(0,n.Z)()?i.createElement(i.Fragment,null,t()):null!=a?a:null}},3983:function(e,t,a){a.r(t),a.d(t,{CurlScript:function(){return d},DownloadLink:function(){return m},assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var i=a(3117),n=a(102),l=(a(7294),a(3905)),o=a(1262),r=["components"],s={sidebar_position:2},c="Quickstart - Kubernetes",p={unversionedId:"beta/api-observability/quickstart/quickstart-k8s",id:"beta/api-observability/quickstart/quickstart-k8s",title:"Quickstart - Kubernetes",description:"Quickstart instructions for installing the Satellite, and Sensor on the same Kubernetes cluster via Helm Charts.",source:"@site/docs/beta/api-observability/quickstart/quickstart-k8s.md",sourceDirName:"beta/api-observability/quickstart",slug:"/beta/api-observability/quickstart/quickstart-k8s",permalink:"/beta/api-observability/quickstart/quickstart-k8s",editUrl:"https://github.com/levoai/docs/edit/main/docs/beta/api-observability/quickstart/quickstart-k8s.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/beta/api-observability/quickstart/"},next:{title:"Quickstart - Mac OSX / Windows",permalink:"/beta/api-observability/quickstart/quickstart-laptop"}},u={},h=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. <code>Sensor - Kubernetes Node</code> Compatibility Check",id:"2-sensor---kubernetes-node-compatibility-check",level:2},{value:"Host is compatible!",id:"host-is-compatible",level:3},{value:"Host is <em>NOT</em> compatible",id:"host-is-not-compatible",level:3},{value:"3. Install Satellite",id:"3-install-satellite",level:2},{value:"a. Copy <code>Authorization Key</code> from Levo.ai",id:"a-copy-authorization-key-from-levoai",level:3},{value:"b. Setup environment variables",id:"b-setup-environment-variables",level:3},{value:"c. Install levoai Helm repo",id:"c-install-levoai-helm-repo",level:3},{value:"d. Create <code>levoai</code> namespace &amp; install Satellite",id:"d-create-levoai-namespace--install-satellite",level:3},{value:"e. Verify connectivity with Levo.ai",id:"e-verify-connectivity-with-levoai",level:3},{value:"i. Check Satellite health",id:"i-check-satellite-health",level:4},{value:"ii. Check connectivity",id:"ii-check-connectivity",level:4},{value:"4. Install Sensor",id:"4-install-sensor",level:2},{value:"a. Pick an <code>Application Name</code>",id:"a-pick-an-application-name",level:3},{value:"b. Install levoai Helm repo",id:"b-install-levoai-helm-repo",level:3},{value:"c. Create <code>levoai</code> namespace &amp; install Sensor",id:"c-create-levoai-namespace--install-sensor",level:3},{value:"d. Verify connectivity with Satellite",id:"d-verify-connectivity-with-satellite",level:3},{value:"i. Check Sensor health",id:"i-check-sensor-health",level:4},{value:"ii. Check connectivity",id:"ii-check-connectivity-1",level:4},{value:"5. Generate Application Traffic",id:"5-generate-application-traffic",level:2},{value:"Verify API Traffic Capture",id:"verify-api-traffic-capture",level:3},{value:"6. View Auto-discovered OpenAPI Specifications",id:"6-view-auto-discovered-openapi-specifications",level:2}];function d(){return(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,l.kt)("pre",null,(0,l.kt)("code",null,"curl -s ",window.location.protocol+"//"+window.location.host+"/artifacts/sensor/check-compatibility.sh"," | bash"))}))}function m(){return(0,l.kt)(o.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,l.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/sensor/check-compatibility.sh"}," here ")}))}var k={toc:h,CurlScript:d,DownloadLink:m};function v(e){var t=e.components,o=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quickstart---kubernetes"},"Quickstart - Kubernetes"),(0,l.kt)("p",null,"Quickstart instructions for installing the Satellite, and Sensor on the same Kubernetes cluster via Helm Charts."),(0,l.kt)("p",null,"Your estimated completion time is ",(0,l.kt)("em",{parentName:"p"},"10 minutes"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Install Steps",src:a(8181).Z,width:"965",height:"384"})),(0,l.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A supported Kubernetes platform. See ",(0,l.kt)("a",{parentName:"li",href:"/beta/api-observability/supported-platforms"},"Platforms"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm v3")," installed and working."),(0,l.kt)("li",{parentName:"ul"},"The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl")," access to the cluster, with ",(0,l.kt)("inlineCode",{parentName:"li"},"cluster-admin")," permissions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://levo.ai/levo-signup/"},(0,l.kt)("inlineCode",{parentName:"a"},"Forever Free Account"))," on Levo.ai. ")),(0,l.kt)("h2",{id:"2-sensor---kubernetes-node-compatibility-check"},"2. ",(0,l.kt)("inlineCode",{parentName:"h2"},"Sensor - Kubernetes Node")," Compatibility Check"),(0,l.kt)("p",null,"Levo provides a simple bash script that ",(0,l.kt)("em",{parentName:"p"},"checks")," your Kubernetes Node (Linux Host) for compatibility with the Sensor."),(0,l.kt)("p",null,"Execute the following, directly on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Kubernetes Node")," you want to instrument:"),(0,l.kt)(d,{mdxType:"CurlScript"}),(0,l.kt)("p",null,"If you want to ",(0,l.kt)("strong",{parentName:"p"},"audit")," the script prior to running, you can download it ",(0,l.kt)(m,{mdxType:"DownloadLink"}),"."),(0,l.kt)("h3",{id:"host-is-compatible"},"Host is compatible!"),(0,l.kt)("p",null,"If your host is compatible with the Sensor (as reported by the script), you can proceed with the installation."),(0,l.kt)("h3",{id:"host-is-not-compatible"},"Host is ",(0,l.kt)("em",{parentName:"h3"},"NOT")," compatible"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Levo can provide a custom build of the Sensor that is compatible with your system.")),(0,l.kt)("p",null,"If the host is not compatible, it is very likely due missing ",(0,l.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/bpf/btf.html"},"BTF")," info. BTF provides the Sensor with essential type information required to instrument the host. Most modern Linux distributions come prepackaged with BTF."),(0,l.kt)("p",null,"please contact ",(0,l.kt)("inlineCode",{parentName:"p"},"support@levo.ai")," with the diagnostic information provided by the script. We will provide a compatible Sensor promptly."),(0,l.kt)("h2",{id:"3-install-satellite"},"3. Install Satellite"),(0,l.kt)("h3",{id:"a-copy-authorization-key-from-levoai"},"a. Copy ",(0,l.kt)("inlineCode",{parentName:"h3"},"Authorization Key")," from Levo.ai"),(0,l.kt)("p",null,"The Satellite uses an authorization key to access Levo.ai. Follow instructions below to copy the key."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://app.levo.ai/login"},"Login")," to Levo.ai."),(0,l.kt)("li",{parentName:"ul"},"Click on your user profile."),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"User Settings")),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Keys")," on the left navigation panel"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Get Satellite Authorization Key")),(0,l.kt)("li",{parentName:"ul"},"Now copy your authorization key. This key is required in a subsequent step below.")),(0,l.kt)("h3",{id:"b-setup-environment-variables"},"b. Setup environment variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier> \n")),(0,l.kt)("h3",{id:"c-install-levoai-helm-repo"},"c. Install levoai Helm repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add levoai https://charts.levo.ai && helm repo update\n")),(0,l.kt)("h3",{id:"d-create-levoai-namespace--install-satellite"},"d. Create ",(0,l.kt)("inlineCode",{parentName:"h3"},"levoai")," namespace & install Satellite"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -n levoai --create-namespace \\\n  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \\\n  levoai-satellite levoai/levoai-satellite\n")),(0,l.kt)("h3",{id:"e-verify-connectivity-with-levoai"},"e. Verify connectivity with Levo.ai"),(0,l.kt)("h4",{id:"i-check-satellite-health"},"i. Check Satellite health"),(0,l.kt)("p",null,"The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger."),(0,l.kt)("p",null,"Wait couple of minutes after the install, and check the health of the components by executing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n levoai get pods\n")),(0,l.kt)("p",null,"If the Satellite is healthy, you should see output similar to below. Don't worry about the restarts of the levoai-tagger pod."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                READY   STATUS    RESTARTS      AGE\nlevoai-collector-848fb4fff9-gv8g9   1/1     Running   0             4m8s\nlevoai-rabbitmq-0                   1/1     Running   0             4m8s\nlevoai-satellite-54956ccb89-5s4h2   1/1     Running   0             4m8s\nlevoai-tagger-799db4d9cc-89jm8      1/1     Running   3 (4m8s ago)  4m8s\n")),(0,l.kt)("h4",{id:"ii-check-connectivity"},"ii. Check connectivity"),(0,l.kt)("p",null,"Execute the following to check for connectivity health:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual pod name for levoai-tagger below\nkubectl -n levoai logs <levoai-tagger pod name> | grep "Ready to process; waiting for messages."\n')),(0,l.kt)("p",null,"If connectivity is healthy, you will see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please contact ",(0,l.kt)("inlineCode",{parentName:"strong"},"support@levo.ai")," if you notice health/connectivity related errors.")),(0,l.kt)("h2",{id:"4-install-sensor"},"4. Install Sensor"),(0,l.kt)("h3",{id:"a-pick-an-application-name"},"a. Pick an ",(0,l.kt)("inlineCode",{parentName:"h3"},"Application Name")),(0,l.kt)("p",null,"Auto discovered API endpoints and their OpenAPI specifications are show in the ",(0,l.kt)("a",{parentName:"p",href:"/concepts/api-catalog/"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different Kubernetes clusters, similar to how file folders work in an operating system."),(0,l.kt)("p",null,"Pick a descriptive name which will be used in the subsequent step below. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"my-test-app-k8s-c101"),"."),(0,l.kt)("h3",{id:"b-install-levoai-helm-repo"},"b. Install levoai Helm repo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add levoai https://charts.levo.ai && helm repo update\n")),(0,l.kt)("h3",{id:"c-create-levoai-namespace--install-sensor"},"c. Create ",(0,l.kt)("inlineCode",{parentName:"h3"},"levoai")," namespace & install Sensor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'\n# Example: sensor.args={--default-service-name,my-test-app-k8s-c101}\n#\nhelm upgrade --install -n levoai --create-namespace \\\n  --set \"sensor.args={--default-service-name,<'Application Name' chosen earlier>}\" \\\n  levoai-sensor levoai/levoai-ebpf-sensor \n")),(0,l.kt)("h3",{id:"d-verify-connectivity-with-satellite"},"d. Verify connectivity with Satellite"),(0,l.kt)("h4",{id:"i-check-sensor-health"},"i. Check Sensor health"),(0,l.kt)("p",null,"Check the health of the Sensor by executing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n levoai get pods | grep levoai-sensor\n")),(0,l.kt)("p",null,"If the Sensor is healthy, you should see output similar to below. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"levoai-sensor-747fb4aaa9-gv8g9   1/1     Running   0             1m8s\n")),(0,l.kt)("h4",{id:"ii-check-connectivity-1"},"ii. Check connectivity"),(0,l.kt)("p",null,"Execute the following to check for connectivity health:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual pod name for levoai-sensor below\nkubectl -n levoai logs <levoai-sensor pod name> | grep "Initial connection with Collector"\n')),(0,l.kt)("p",null,"If connectivity is healthy, you should see output similar to below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2022/06/13 21:15:40 729071  INFO [ebpf_sensor.cpp->main:120]    Initial connection with Collector was successful.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Please contact ",(0,l.kt)("inlineCode",{parentName:"strong"},"support@levo.ai")," if you notice health/connectivity related errors.")),(0,l.kt)("p",null,"Please proceed to the next step, if there are no errors."),(0,l.kt)("h2",{id:"5-generate-application-traffic"},"5. Generate Application Traffic"),(0,l.kt)("p",null,"The Sensor picks up API traffic that is HTTP\\1.x based, on the instrumented host. There has to be some consistent load on your API endpoints for them to be auto discovered and documented."),(0,l.kt)("p",null,"Please ensure you exercise your API endpoints several times using tools like ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),", ",(0,l.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl"),", etc. Alternatively use a load generator script that consistently exercises your API endpoints."),(0,l.kt)("p",null,"API endpoints that are TLS based should be picked up by the Sensor, albeit with some caveats. Please see ",(0,l.kt)("a",{parentName:"p",href:"/beta/api-observability/faqs"},"FAQs")," for more information. "),(0,l.kt)("h3",{id:"verify-api-traffic-capture"},"Verify API Traffic Capture"),(0,l.kt)("p",null,"Check the logs of Satellite's ",(0,l.kt)("inlineCode",{parentName:"p"},"Collector")," sub-component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual pod name for levoai-collector below\nkubectl -n levoai logs <levoai-collector pod name> | grep "TracesExporter"\n')),(0,l.kt)("p",null,"If API Traffic is correctly being processed, you will see log entries similar to below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'2022-06-10T17:04:56.494Z    INFO    loggingexporter/logging_exporter.go:43  TracesExporter  {"#spans": 20}\n')),(0,l.kt)("h2",{id:"6-view-auto-discovered-openapi-specifications"},"6. View Auto-discovered OpenAPI Specifications"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/concepts/api-catalog/"},"API Catalog")," in Levo.ai should be auto populated in a matter of minutes (after your API endpoints are being exercised consistently)."),(0,l.kt)("p",null,"The API Catalog will contain your auto discovered API endpoints and their OpenAPI schemas, all grouped under the ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Name")," you chose earlier."),(0,l.kt)("p",null,"Congratulations! You have successfully auto discovered and auto documented API endpoints in your application."))}v.isMDXComponent=!0},8181:function(e,t,a){t.Z=a.p+"assets/images/api-observability-install-008a41043d5e5db3277e4a289b0831b0.svg"}}]);