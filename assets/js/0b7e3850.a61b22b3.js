"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8041],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:3,description:"Install Levo.ai PCAP sensor on AWS Fargate. Follow our detailed guide for setup, configuration, and robust API traffic capture and analysis."},s="Sensor on AWS Fargate",u={unversionedId:"install-traffic-capture-sensors/sensor-fargate",id:"install-traffic-capture-sensors/sensor-fargate",title:"Sensor on AWS Fargate",description:"Install Levo.ai PCAP sensor on AWS Fargate. Follow our detailed guide for setup, configuration, and robust API traffic capture and analysis.",source:"@site/docs/install-traffic-capture-sensors/sensor-fargate.md",sourceDirName:"install-traffic-capture-sensors",slug:"/install-traffic-capture-sensors/sensor-fargate",permalink:"/install-traffic-capture-sensors/sensor-fargate",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/sensor-fargate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Install Levo.ai PCAP sensor on AWS Fargate. Follow our detailed guide for setup, configuration, and robust API traffic capture and analysis."},sidebar:"tutorialSidebar",previous:{title:"Install Levo.ai's IIS Module on Windows | Levo.ai Documentation",permalink:"/install-traffic-capture-sensors/iis-agent/"},next:{title:"Sensor on MacOS",permalink:"/install-traffic-capture-sensors/sensor-on-macos"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install using Terraform",id:"install-using-terraform",level:2},{value:"Install using JSON",id:"install-using-json",level:2},{value:"Configuring sensor memory and CPU resource limits",id:"configuring-sensor-memory-and-cpu-resource-limits",level:3},{value:"Filtering out traffic",id:"filtering-out-traffic",level:3},{value:"AWS Permissions needed",id:"aws-permissions-needed",level:2}],d={toc:c};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sensor-on-aws-fargate"},"Sensor on AWS Fargate"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AWS profile access key and secret access key saved at path  ~/.aws/credentials file"),(0,i.kt)("li",{parentName:"ul"},"The profile should have all the required permissions as listed ",(0,i.kt)("a",{parentName:"li",href:"#aws-permissions"},"here"))),(0,i.kt)("h2",{id:"install-using-terraform"},"Install using Terraform"),(0,i.kt)("p",null,"The pcap Sensor can be installed as a sidecar on an existing AWS task using a terraform script"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("a",{target:"_blank",href:n(3930).Z},"Terraform script")),(0,i.kt)("li",{parentName:"ul"},"Run the following commands",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terraform init")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terraform plan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terraform apply")))),(0,i.kt)("li",{parentName:"ul"},"Enter values for all the prompts, which include ",(0,i.kt)("inlineCode",{parentName:"li"},"aws-region"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"task-name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"satellite-url"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"levo-env"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"org-id")," etc."),(0,i.kt)("li",{parentName:"ul"},"Or edit the variables in the terraform script and add the required values as default."),(0,i.kt)("li",{parentName:"ul"},"The script will create a new revision of the task-definition with the pcap-sensor as side-car"),(0,i.kt)("li",{parentName:"ul"},"To configure CPU and memory given to the container, update ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu_percentage_limit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"memory_percentage_limit")," variables in the terraform script.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: The default values are set to 5% CPU and memory of the total given to the task.")),(0,i.kt)("h2",{id:"install-using-json"},"Install using JSON"),(0,i.kt)("p",null,"The pcap Sensor can be installed as a sidecar on an existing AWS task by adding to its task definition via the AWS Console."),(0,i.kt)("p",null,"The steps to add the sensor to your task are as follows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Task Definitions"),(0,i.kt)("li",{parentName:"ul"},"Select the required task definition"),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create revision with JSON")),(0,i.kt)("li",{parentName:"ul"},"Add the given JSON object under ContainerDefinitions"),(0,i.kt)("li",{parentName:"ul"},"Replace the values for satellite-url, levo-env and levoai-org-id in entrypoint."),(0,i.kt)("li",{parentName:"ul"},"Replace the values for Environment and LogConfiguration as per your requirement."),(0,i.kt)("li",{parentName:"ul"},"Set the cpu limit as number of CPU Units (",(0,i.kt)("em",{parentName:"li"},"Note: 1 core = 1024 CPU Units"),")"),(0,i.kt)("li",{parentName:"ul"},"Set the memory limit in ",(0,i.kt)("inlineCode",{parentName:"li"},"Mib")," (",(0,i.kt)("em",{parentName:"li"},"Note: memory should not exceed the Task memory limit"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "levo-pcap-sensor",\n    "image": "levoai/pcap-sensor:0.2.0",\n    "cpu": 512,\n    "memory": 512,\n    "portMappings": [],\n    "essential": false,\n    "entryPoint": [\n        "./bin/init",\n        "apidump",\n        "--satellite-url",\n        "< INSERT SATELLITE URL (http(s)://hostname|IP:port) >",\n        "--levo-env",\n        "<INSERT APPLICATION ENVIRONMENT (staging, production etc.)>",\n        "--levoai-org-id",\n        "< INSERT LEVO ORG ID >",\n        "--rate-limit",\n        "<INSERT NUMBER OF TRACES PER MINUTE>"\n    ],\n    "environment": [\n        {\n            "name": "LEVO_AWS_REGION",\n            "value": "< INSERT AWS REGION (us-west-2) >"\n        }\n    ],\n    "mountPoints": [],\n    "volumesFrom": [],\n    "logConfiguration": {\n        "logDriver": "awslogs",\n        "options": {\n            "awslogs-group": "< INSERT LOGS IDENTIFIER (/ecs/your-application-pcap) >",\n            "awslogs-create-group": "true",\n            "awslogs-region": "< INSERT AWS REGION (us-west-2) >",\n            "awslogs-stream-prefix": "ecs-pcap"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Specify additional flags in the entrypoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--trace-export-interval     # default 10s\n--rate-limit                # number of traces per minute\n--filter                    # eg. port 8080 and (not port 8081)\n--host-allow                # regex for allowed hosts\n--path-allow                # regex for allowed paths\n--host-exclusions           # regex for excluded hosts\n--path-exclusions           # regex for excluded paths\n")),(0,i.kt)("h3",{id:"configuring-sensor-memory-and-cpu-resource-limits"},"Configuring sensor memory and CPU resource limits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For normal/average case use the above JSON"),(0,i.kt)("li",{parentName:"ul"},"For strict resources, use the ",(0,i.kt)("a",{target:"_blank",href:n(1841).Z},"Low resource JSON file"))),(0,i.kt)("h3",{id:"filtering-out-traffic"},"Filtering out traffic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you need to ignore the traffic from other side-cars in the AWS task, you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"--filter"),' command to ignore the traffic on the non-essential container ports\neg. `--filter "not port 8888"')),(0,i.kt)("a",{id:"aws-permissions"}),(0,i.kt)("h2",{id:"aws-permissions-needed"},"AWS Permissions needed"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("strong",{parentName:"p"},"AmazonECS_FullAccess")," policy to get access to all the necessary permissions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Resource"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ec2:DescribeRegions"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Find the list of AWS regions you have enabled. (If not present, defaults to a precompiled list.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:ListClusters"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Find the available ECS clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:DescribeClusters"),(0,i.kt)("td",{parentName:"tr",align:null},", or restricted to account like ",(0,i.kt)("inlineCode",{parentName:"td"},"arn:aws:ecs:::cluster/*")),(0,i.kt)("td",{parentName:"tr",align:null},"Look up the names of the available ECS clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:ListTaskDefinitionFamilies"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Find the available task definitions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:DescribeTaskDefinition"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Read the existing task definition in order to copy it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:RegisterTaskDefinition"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Write a new version of the task definition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:ListServices"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"Find the available services.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:DescribeServices"),(0,i.kt)("td",{parentName:"tr",align:null},"*, or restricted to your account, or restricted to the cluster you selected"),(0,i.kt)("td",{parentName:"tr",align:null},"Identify which services are using the task definition you selected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:UpdateService"),(0,i.kt)("td",{parentName:"tr",align:null},"*, or restricted to your account, or restricted to the cluster you selected"),(0,i.kt)("td",{parentName:"tr",align:null},"Update and restart the service using the new task definition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ecs:TagResource"),(0,i.kt)("td",{parentName:"tr",align:null},"*, or restricted to your account, or restricted to the cluster you selected"),(0,i.kt)("td",{parentName:"tr",align:null},"Mark the service as having been updated by Levoai.")))))}m.isMDXComponent=!0},1841:function(e,t,n){t.Z=n.p+"assets/files/low_resource-a93f3b18de973d33fd95e771f572e1a5.json"},3930:function(e,t,n){t.Z=n.p+"assets/files/main-054ff6f7c8adaa9476d3011572d785c0.tf"}}]);