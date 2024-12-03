"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6274],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(2389);function i(e){var t=e.children,a=e.fallback;return(0,l.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}},2237:function(e,t,a){a.r(t),a.d(t,{Download:function(){return m},assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(3117),l=a(102),i=(a(7294),a(3905)),r=a(1262),o=["components"],s={sidebar_position:0},p="Install Log Parsing Sensors",u={unversionedId:"install-log-parsing-sensors/install-log-parsing-sensors",id:"install-log-parsing-sensors/install-log-parsing-sensors",title:"Install Log Parsing Sensors",description:"Access Logs Based Instrumentation",source:"@site/docs/install-log-parsing-sensors/install-log-parsing-sensors.mdx",sourceDirName:"install-log-parsing-sensors",slug:"/install-log-parsing-sensors/",permalink:"/install-log-parsing-sensors/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-log-parsing-sensors/install-log-parsing-sensors.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Configuration",permalink:"/install-traffic-capture-sensors/common-tasks/k8s-helm-values"},next:{title:"Install Code Analysis Tools",permalink:"/install-code-analysis-tools"}},c={},d=[{value:"Access Logs Based Instrumentation",id:"access-logs-based-instrumentation",level:2},{value:"i. Pre-requisites",id:"i-pre-requisites",level:3},{value:"Approaches",id:"approaches",level:3},{value:"Approach 1",id:"approach-1",level:2},{value:"Follow instructions for your platform",id:"follow-instructions-for-your-platform",level:3},{value:"Install on Linux host via Docker",id:"install-on-linux-host-via-docker-approach-1",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Installation",id:"installation",level:4},{value:"2. Verify connectivity with Satellite",id:"2-verify-connectivity-with-satellite",level:4},{value:"Approach 2",id:"approach-2",level:2},{value:"Install on Linux host via Docker",id:"install-on-linux-host-via-docker",level:3},{value:"1. Prerequisites",id:"1-prerequisites",level:4},{value:"2. Installation steps",id:"2-installation-steps",level:4},{value:"3. Verify the installation",id:"3-verify-the-installation",level:4},{value:"4. Uninstallation steps",id:"4-uninstallation-steps",level:4},{value:"Install on Kubernetes via Helm",id:"install-on-kubernetes-via-helm",level:3},{value:"1. Prerequisites",id:"1-prerequisites-1",level:4},{value:"2. Add levoai Helm repo",id:"2-add-levoai-helm-repo",level:4},{value:"3. Installation steps",id:"3-installation-steps",level:4},{value:"4. Verify the installation",id:"4-verify-the-installation",level:4},{value:"5. Uninstallation steps",id:"5-uninstallation-steps",level:4},{value:"Need Help?",id:"need-help",level:3}];function m(){return(0,i.kt)(r.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,i.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/log-parser/log-parser.tar.gz",download:!0}," Download")}))}var h={toc:d,Download:m};function k(e){var t=e.components,a=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-log-parsing-sensors"},"Install Log Parsing Sensors"),(0,i.kt)("h2",{id:"access-logs-based-instrumentation"},"Access Logs Based Instrumentation"),(0,i.kt)("h3",{id:"i-pre-requisites"},"i. Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Satellite has been successfully installed."),(0,i.kt)("li",{parentName:"ul"},"You have noted down the Satellite's ",(0,i.kt)("inlineCode",{parentName:"li"},"hostname:port")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"ip-address:port")," information."),(0,i.kt)("li",{parentName:"ul"},"The Satellite is reachable (via HTTP/s) from the location where you are going to install the log-parser.")),(0,i.kt)("h3",{id:"approaches"},"Approaches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For below log formats proceed with ",(0,i.kt)("a",{parentName:"p",href:"#approach-1"},"Approach 1"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Nginx"),(0,i.kt)("li",{parentName:"ul"},"Apache"),(0,i.kt)("li",{parentName:"ul"},"Azure API Gateway"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For below log formats proceed with ",(0,i.kt)("a",{parentName:"p",href:"#approach-2"},"Approach 2"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CEF ")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: For instrumenting ",(0,i.kt)("a",{parentName:"p",href:"https://www.imperva.com/products/web-application-firewall-waf/"},"Imperva WAF - Incapsula")," logs that are stored on Amazon S3 Bucket, please proceed with ",(0,i.kt)("a",{parentName:"p",href:"#approach-2"},"Approach 2"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach-1"},"Approach 1"),(0,i.kt)("h3",{id:"follow-instructions-for-your-platform"},"Follow instructions for your platform"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-on-linux-host-via-docker-approach-1"},"Install on Linux host via Docker"))),(0,i.kt)("h3",{id:"install-on-linux-host-via-docker-approach-1"},"Install on Linux host via Docker"),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,i.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above"),(0,i.kt)("li",{parentName:"ul"},"Pick an ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Name"),"\nAuto discovered API endpoints and their OpenAPI specifications are shown in the ",(0,i.kt)("a",{parentName:"li",href:"/guides/security-testing/concepts/api-catalog"},"API Catalog"),", grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system.",(0,i.kt)("br",null)," Pick a descriptive name which will be used in the subsequent step below. For example: `my-test-app`.")),(0,i.kt)("h4",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace '<SATELLITE_URL>' with the values you noted down from the Satellite install\n#\n# Specify below the 'APP_NAME'. Do not quote the 'APP_NAME'.\n# Environment Name is optional. If not specified, it defaults to 'staging'\n# \ndocker run --rm -d --name=log-parser \\\n  -v ./logs:/mnt/levo/logs \\\n  -e LEVO_SATELLITE_URL=<LEVO_SATELLITE_URL> \\\n  -e LEVOAI_ORG_ID=<LEVOAI_ORG_ID> \\\n  -e APP_NAME=<APP_NAME> \\\n  -e ENV_NAME=<ENV_NAME> \\\n  levoai/log-parser \n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The default address for the satellite in Docker-based Log Parser installations is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://satellite.levo.ai"),"."),(0,i.kt)("li",{parentName:"ul"},"In case of levo hosted satellite, it is necessary that you must also specify an organization ID (",(0,i.kt)("inlineCode",{parentName:"li"},"LEVOAI_ORG_ID"),")."),(0,i.kt)("li",{parentName:"ul"},"If you wish, you may also host the Satellite yourself and specify the address of the satellite to direct the Log Parser's data to it."))),(0,i.kt)("h4",{id:"2-verify-connectivity-with-satellite"},"2. Verify connectivity with Satellite"),(0,i.kt)("p",null,"Execute the following command to check for connectivity health:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Please specify the actual container name for log-parser below\ndocker logs log-parser | grep "starting fluentd"\n')),(0,i.kt)("p",null,"If connectivity is healthy, you should see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'2024-02-22 01:27:06 +0000 [info]: starting fluentd-1.16.3 pid=7 ruby="3.2.2"\n2024-02-22 01:27:06 +0000 [info]: #0 starting fluentd worker pid=16 ppid=7 worker=0\n2024-02-22 01:27:06.831947051 +0000 fluent.info: {"pid":16,"ppid":7,"worker":0,"message":"starting fluentd worker pid=16 ppid=7 worker=0"}\n')),(0,i.kt)("p",null,"Please proceed to the next step, if there are no errors."),(0,i.kt)("h2",{id:"approach-2"},"Approach 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-on-linux-host-via-docker"},"Install on Linux host via Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-on-kubernetes-via-helm"},"Install on Kubernetes via Helm"))),(0,i.kt)("h3",{id:"install-on-linux-host-via-docker"},"Install on Linux host via Docker"),(0,i.kt)("h4",{id:"1-prerequisites"},"1. Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,i.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above.")),(0,i.kt)("h4",{id:"2-installation-steps"},"2. Installation steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(m,{mdxType:"Download"})," the docker-compose and configuration files."),(0,i.kt)("li",{parentName:"ul"},"Run below command to install log-parser containers filebeat and logstash.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,i.kt)("h4",{id:"3-verify-the-installation"},"3. Verify the installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify the installation by checking the logs of the containers.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -f name=levoai\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View the logs of the container by running below command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f levoai-logstash\ndocker logs -f levoai-filebeat\n")),(0,i.kt)("h4",{id:"4-uninstallation-steps"},"4. Uninstallation steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clean up the containers by running below command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\ndocker volume rm log-parser_filebeat-data log-parser_logstash-queue && rm -rf filebeat/data/ && rm -rf logstash/data/\n")),(0,i.kt)("h3",{id:"install-on-kubernetes-via-helm"},"Install on Kubernetes via Helm"),(0,i.kt)("h4",{id:"1-prerequisites-1"},"1. Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes version >= ",(0,i.kt)("inlineCode",{parentName:"li"},"v1.18.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm v3")," installed and working."),(0,i.kt)("li",{parentName:"ul"},"The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," access to the cluster, with ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," permissions."),(0,i.kt)("li",{parentName:"ul"},"At least 4 CPUs"),(0,i.kt)("li",{parentName:"ul"},"At least 8 GB RAM")),(0,i.kt)("h4",{id:"2-add-levoai-helm-repo"},"2. Add levoai Helm repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add levoai https://charts.levo.ai && helm repo update levoai\n")),(0,i.kt)("h4",{id:"3-installation-steps"},"3. Installation steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create secret for ",(0,i.kt)("inlineCode",{parentName:"li"},"aws-credentials")," with your AWS credentials which has access to the S3 bucket.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f aws-credentials.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' # aws-credentials.yaml\n apiVersion: v1\n kind: Secret\n metadata:\n   name: aws-credentials\n   labels:\n     app: levoai-filebeat\n     app.kubernetes.io/name: aws-credentials-secret\n type: Opaque\n data:\n   aws-bucket-arn: <Your AWS Bucket ARN like "arn:aws:s3:::<bucket-name>">\n   aws-access-key-id: <Your Access Key ID>\n   aws-secret-access-key: <Your Secret Access Key>\n   aws-default-region: <Your Region like "us-west-2">\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the below command to install the log-parser containers in ",(0,i.kt)("inlineCode",{parentName:"li"},"levoai")," namespace.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install -n levoai --create-namespace levoai-log-parser levoai/levoai-log-parser --set global.levoaiOrgId=<your-org-id>\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default this will send all the logs to satellite running in the same namespace.\nIf you want to send logs to a different satellite, you can specify the satellite URL using ",(0,i.kt)("inlineCode",{parentName:"p"},"--set global.levoaiSatelliteUrl=<your-satellite-url>"),". ",(0,i.kt)("br",null),"\nIn case of levo hosted satellite, use satellite url as ",(0,i.kt)("inlineCode",{parentName:"p"},"https://collector.levo.ai"),".")),(0,i.kt)("h4",{id:"4-verify-the-installation"},"4. Verify the installation"),(0,i.kt)("p",null,"Check the status of the pods by running below command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n levoai\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"levoai-log-parser")," helm is healthy, you should see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                               READY   STATUS    RESTARTS   AGE\nlevoai-filebeat-6bbf84d957-c44kh   1/1     Running   0          104s\nlevoai-logstash-77775d78c-q7cgm    1/1     Running   0          104s\n")),(0,i.kt)("p",null,"Check the status of the services by running below command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get services -n levoai\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"levoai-logstash")," service is healthy, you should see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                       TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                                          AGE\nlevoai-logstash            ClusterIP   10.0.81.244    <none>        5044/TCP                                         120s\n")),(0,i.kt)("h4",{id:"5-uninstallation-steps"},"5. Uninstallation steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the below command to uninstall the services.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall levoai-log-parser\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete secret aws-credentials -n levoai\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"need-help"},"Need Help?"),(0,i.kt)("p",null,"For further assistance, please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"Levo.ai Support"),"."))}k.isMDXComponent=!0}}]);