"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8466],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?l.createElement(h,o(o({ref:t},p),{},{components:a})):l.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4905:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var l=a(3117),n=a(102),i=(a(7294),a(3905)),o=["components"],r={sidebar_position:1},s="Satellite on Kubernetes",c={unversionedId:"install-satellite/satellite-kubernetes",id:"install-satellite/satellite-kubernetes",title:"Satellite on Kubernetes",description:"Prerequisites",source:"@site/docs/install-satellite/satellite-kubernetes.md",sourceDirName:"install-satellite",slug:"/install-satellite/satellite-kubernetes",permalink:"/install-satellite/satellite-kubernetes",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-satellite/satellite-kubernetes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install Satellite",permalink:"/install-satellite/"},next:{title:"Satellite via Docker",permalink:"/install-satellite/satellite-docker"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Setup environment variables",id:"1-setup-environment-variables",level:3},{value:"2. Install levoai Helm repo",id:"2-install-levoai-helm-repo",level:3},{value:"3. Create <code>levoai</code> namespace &amp; install Satellite",id:"3-create-levoai-namespace--install-satellite",level:3},{value:"If locating Satellite on the same cluster alongside Sensor",id:"if-locating-satellite-on-the-same-cluster-alongside-sensor",level:4},{value:"If locating Satellite on a dedicated cluster",id:"if-locating-satellite-on-a-dedicated-cluster",level:4},{value:"4. Verify connectivity with Levo.ai",id:"4-verify-connectivity-with-levoai",level:3},{value:"a. Check Satellite health",id:"a-check-satellite-health",level:4},{value:"b. Check connectivity",id:"b-check-connectivity",level:4},{value:"5. Note down <code>Host:Port</code> information",id:"5-note-down-hostport-information",level:3},{value:"If locating Satellite on the same cluster alongside Sensor",id:"if-locating-satellite-on-the-same-cluster-alongside-sensor-1",level:4},{value:"If locating Satellite on a dedicated cluster",id:"if-locating-satellite-on-a-dedicated-cluster-1",level:4},{value:"Upgrade Satellite",id:"upgrade-satellite",level:3},{value:"Uninstall Satellite",id:"uninstall-satellite",level:3},{value:"Change the <code>Authorization Key</code> used to communicate with Levo.ai",id:"change-the-authorization-key-used-to-communicate-with-levoai",level:3},{value:"Change the <code>minimum number of URLs</code> that the satellite needs to observe to detect an API endpoint.",id:"change-the-minimum-number-of-urls-that-the-satellite-needs-to-observe-to-detect-an-api-endpoint",level:3},{value:"List Satellite&#39;s pods",id:"list-satellites-pods",level:3},{value:"Tail logs of a specific pod",id:"tail-logs-of-a-specific-pod",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Tagger Errors",id:"tagger-errors",level:3},{value:"Authentication Errors",id:"authentication-errors",level:3},{value:"Connectivity Errors",id:"connectivity-errors",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"satellite-on-kubernetes"},"Satellite on Kubernetes"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes version >= ",(0,i.kt)("inlineCode",{parentName:"li"},"v1.18.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm v3")," installed and working."),(0,i.kt)("li",{parentName:"ul"},"The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," access to the cluster, with ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," permissions."),(0,i.kt)("li",{parentName:"ul"},"At least 4 CPUs"),(0,i.kt)("li",{parentName:"ul"},"At least 8 GB RAM")),(0,i.kt)("h3",{id:"1-setup-environment-variables"},"1. Setup environment variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export LEVOAI_AUTH_KEY=<'Authorization Key'>\n")),(0,i.kt)("h3",{id:"2-install-levoai-helm-repo"},"2. Install levoai Helm repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add levoai https://charts.levo.ai && helm repo update\n")),(0,i.kt)("h3",{id:"3-create-levoai-namespace--install-satellite"},"3. Create ",(0,i.kt)("inlineCode",{parentName:"h3"},"levoai")," namespace & install Satellite"),(0,i.kt)("h4",{id:"if-locating-satellite-on-the-same-cluster-alongside-sensor"},"If locating Satellite on the same cluster alongside Sensor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install -n levoai --create-namespace \\\n  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \\\n  levoai-satellite levoai/levoai-satellite\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Depending on the region you are installing in, you may need to set a different Levo base URL for the satellite."),(0,i.kt)("p",{parentName:"admonition"},"For example, if the satellite will be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"app.india-1.levo.ai"),", the installation command will be:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm upgrade --install -n levoai --create-namespace \\\n  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \\\n  --set global.levoai_config_override.onprem-api.url="https://api.india-1.levo.ai" \\\n  levoai-satellite levoai/levoai-satellite\n'))),(0,i.kt)("h4",{id:"if-locating-satellite-on-a-dedicated-cluster"},"If locating Satellite on a dedicated cluster"),(0,i.kt)("p",null,"You will need to expose the Satellite via either a ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort"),", such that is is reachable by Sensors running in other clusters. Please modify the below command appropriately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Please modify this command template and choose either 'LoadBalancer' or 'NodePort', prior to execution\nhelm upgrade --install -n levoai --create-namespace \\\n    --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \\\n    --set levoai-collector.service.type=<LoadBalancer | NodePort> \\\n    # --set global.levoai_config_override.onprem-api.url=\"https://api.india-1.levo.ai\" \\\n    levoai-satellite levoai/levoai-satellite\n")),(0,i.kt)("h3",{id:"4-verify-connectivity-with-levoai"},"4. Verify connectivity with Levo.ai"),(0,i.kt)("h4",{id:"a-check-satellite-health"},"a. Check Satellite health"),(0,i.kt)("p",null,"The Satellite is comprised of five sub components 1) levoai-collector, 2) levoai-ion, 3) levoai-rabbitmq, 4)levoai-satellite, and 5) levoai-tagger."),(0,i.kt)("p",null,"Wait couple of minutes after the install, and check the health of the components by executing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n levoai get pods\n")),(0,i.kt)("p",null,"If the Satellite is healthy, you should see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                READY   STATUS    RESTARTS   AGE\nlevoai-collector-5b54df8dd6-55hq9   1/1     Running   0          5m0s\nlevoai-ion-669c9c4fbc-vsmmr         1/1     Running   0          5m0s\nlevoai-rabbitmq-0                   1/1     Running   0          5m0s\nlevoai-satellite-8688b67c65-xppbn   1/1     Running   0          5m0s\nlevoai-tagger-7bbf565b47-b572w      1/1     Running   0          5m0s\n")),(0,i.kt)("h4",{id:"b-check-connectivity"},"b. Check connectivity"),(0,i.kt)("p",null,"Execute the following to check for connectivity health:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual pod name for levoai-tagger below\nkubectl -n levoai logs <levoai-tagger pod name> | grep "Ready to process; waiting for messages."\n')),(0,i.kt)("p",null,"If connectivity is healthy, you will see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please contact ",(0,i.kt)("inlineCode",{parentName:"strong"},"support@levo.ai")," if you notice health/connectivity related errors.")),(0,i.kt)("h3",{id:"5-note-down-hostport-information"},"5. Note down ",(0,i.kt)("inlineCode",{parentName:"h3"},"Host:Port")," information"),(0,i.kt)("h4",{id:"if-locating-satellite-on-the-same-cluster-alongside-sensor-1"},"If locating Satellite on the same cluster alongside Sensor"),(0,i.kt)("p",null,"The Collector can now be reached by the Sensors running in the same cluster at ",(0,i.kt)("inlineCode",{parentName:"p"},"levoai-collector.levoai:4317"),". Please note this, as it will be required to configure the Sensor."),(0,i.kt)("h4",{id:"if-locating-satellite-on-a-dedicated-cluster-1"},"If locating Satellite on a dedicated cluster"),(0,i.kt)("p",null,"Run the below command and note the ",(0,i.kt)("inlineCode",{parentName:"p"},"external")," address/port of the the Collector service. This will be required to configure the Sensor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service levoai-collector -n levoai\n")),(0,i.kt)("p",null,"Please proceed to ",(0,i.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors"},"install Traffic Capture Sensors"),"."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"upgrade-satellite"},"Upgrade Satellite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Setup environment variables\nexport LEVOAI_AUTH_KEY=<'Authorization Key' from the original installation> \n\n# Update helm repo and upgrade installation\nhelm repo update\n\nhelm upgrade -n levoai \\\n  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \\\n  levoai-satellite levoai/levoai-satellite\n")),(0,i.kt)("h3",{id:"uninstall-satellite"},"Uninstall Satellite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall levoai-satellite -n levoai\n")),(0,i.kt)("p",null,"After running the above command, wait until all Satellite pods have been terminated, and then run the following command to delete the rabbitmq PersistentVolumeClaim. Deleting the PVC also deletes the corresponding PersistentVolume."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pvc data-levoai-rabbitmq-0 -n levoai\n")),(0,i.kt)("p",null,"In case the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl delete pvc")," command gets stuck, run the following command before deleting the PVC again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl patch pvc data-levoai-rabbitmq-0 -p \'{"metadata":{"finalizers":null}}\' -n levoai\n')),(0,i.kt)("h3",{id:"change-the-authorization-key-used-to-communicate-with-levoai"},"Change the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Authorization Key")," used to communicate with Levo.ai"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uninstall the Satellite."),(0,i.kt)("li",{parentName:"ul"},"Reinstall the Satellite with the new ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization Key"),".")),(0,i.kt)("h3",{id:"change-the-minimum-number-of-urls-that-the-satellite-needs-to-observe-to-detect-an-api-endpoint"},"Change the ",(0,i.kt)("inlineCode",{parentName:"h3"},"minimum number of URLs")," that the satellite needs to observe to detect an API endpoint."),(0,i.kt)("p",null,"To detect an API endpoint, Satellite waits for at least '10' URLs to match that endpoint URL pattern.\nThis number may cause delays in detecting API endpoints when there is not enough load."),(0,i.kt)("p",null,"If you want to change this number to suit your environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Export an environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"LEVOAI_MIN_URLS_PER_PATTERN"),", and"),(0,i.kt)("li",{parentName:"ul"},"Restart the Satellite with 'min_urls_required_per_pattern' helm config override option")),(0,i.kt)("p",null,"For example, to set this to 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Setup environment variables\nexport LEVOAI_AUTH_KEY=<'Authorization Key' from the original installation>\nexport LEVOAI_MIN_URLS_PER_PATTERN=3\n\n# Update helm repo and upgrade installation\nhelm repo update\n\nhelm upgrade -n levoai \\\n  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \\\n  --set global.levoai_config_override.min_urls_required_per_pattern=$LEVOAI_MIN_URLS_PER_PATTERN \\\n  levoai-satellite levoai/levoai-satellite\n")),(0,i.kt)("h3",{id:"list-satellites-pods"},"List Satellite's pods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n levoai get pods | grep -E '^levoai-collector|^levoai-rabbitmq|^levoai-satellite|^levoai-tagger'\n")),(0,i.kt)("h3",{id:"tail-logs-of-a-specific-pod"},"Tail logs of a specific pod"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n levoai logs -f <pod name>\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"tagger-errors"},"Tagger Errors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tagger")," component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state."),(0,i.kt)("p",null,"Please see sample output below from ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),", that shows the Tagger in an errored state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                READY   STATUS    RESTARTS      AGE\nlevoai-collector-848fb4fff9-gv8g9   1/1     Running   0             64s\nlevoai-rabbitmq-0                   0/1     Running   0             64s\nlevoai-satellite-54956ccb89-5s4h2   1/1     Running   0             64s\nlevoai-tagger-799db4d9cc-89jm8      0/1     Error     1 (14s ago)   64s\n")),(0,i.kt)("p",null,"Below are common error scenarios:"),(0,i.kt)("h3",{id:"authentication-errors"},"Authentication Errors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tagger")," component authenticates with Levo.ai using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". If Tagger is unable to authenticate, it will error out."),(0,i.kt)("p",null,"Check for authentication errors in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\nkubectl -n levoai logs <levoai-tagger-pod-id> | grep "Exception: Failed to refresh access token"\n')),(0,i.kt)("p",null,"If there are exception messages, you have an incorrect or stale ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization Key"),". Please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,i.kt)("h3",{id:"connectivity-errors"},"Connectivity Errors"),(0,i.kt)("p",null,"Check for connectivity errors in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tagger")," logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\nkubectl -n levoai logs <levoai-tagger-pod-id> | grep "ConnectionRefusedError: [Errno 111] Connection refused"\n')),(0,i.kt)("p",null,"If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries. Please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"support@levo.ai")," for further assistance."),(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);