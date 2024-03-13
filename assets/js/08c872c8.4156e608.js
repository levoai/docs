"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6857],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=l,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(2389);function i(e){var t=e.children,a=e.fallback;return(0,l.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(4334),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),l=a(7294),i=a(4334),o=a(2389),r=a(7392),s=a(7094),c=a(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,v=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,r.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,S=(0,l.useState)(y),C=S[0],E=S[1],O=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=N[f];null!=A&&A!==C&&g.some((function(e){return e.value===A}))&&E(A)}var x=function(e){var t=e.currentTarget,a=O.indexOf(t),n=g[a].value;n!==C&&(I(t),E(n),null!=f&&T(f,String(n)))},M=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=O.indexOf(e.currentTarget)+1;a=null!=(n=O[l])?n:O[0];break;case"ArrowLeft":var i,o=O.indexOf(e.currentTarget)-1;a=null!=(i=O[o])?i:O[O.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:M,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},1527:function(e,t,a){a.r(t),a.d(t,{DownloadAMIMainTF:function(){return f},assets:function(){return h},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(3117),l=a(102),i=(a(7294),a(3905)),o=a(1262),r=a(5488),s=a(5162),c=["components"],u={sidebar_position:3},p="Satellite AMI on AWS EC2",d={unversionedId:"install-satellite/satellite-ami-aws-ec2",id:"install-satellite/satellite-ami-aws-ec2",title:"Satellite AMI on AWS EC2",description:"<Tabs",source:"@site/docs/install-satellite/satellite-ami-aws-ec2.mdx",sourceDirName:"install-satellite",slug:"/install-satellite/satellite-ami-aws-ec2",permalink:"/install-satellite/satellite-ami-aws-ec2",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-satellite/satellite-ami-aws-ec2.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Satellite via Docker",permalink:"/install-satellite/satellite-docker"},next:{title:"Satellite on AWS EKS",permalink:"/install-satellite/satellite-aws-eks"}},h={},m=[{value:"1. Open the EC2 Launch Wizard and select the Levo Satellite AMI",id:"1-open-the-ec2-launch-wizard-and-select-the-levo-satellite-ami",level:3},{value:"2. EC2 Configuration",id:"2-ec2-configuration",level:3},{value:"3. Add User Metadata to the EC2 instance",id:"3-add-user-metadata-to-the-ec2-instance",level:3},{value:"1. Download the Terraform script",id:"1-download-the-terraform-script",level:3},{value:"2. Run the Terraform Script",id:"2-run-the-terraform-script",level:3},{value:"3. TF Script Configuration",id:"3-tf-script-configuration",level:3},{value:"Traffic Mirroring",id:"traffic-mirroring",level:4},{value:"4. Launch the EC2 instance",id:"4-launch-the-ec2-instance",level:3},{value:"5. Verify the Satellite services",id:"5-verify-the-satellite-services",level:3},{value:"6. Verify connectivity with Levo.ai",id:"6-verify-connectivity-with-levoai",level:3},{value:"a. Check Satellite health",id:"a-check-satellite-health",level:4},{value:"b. Check connectivity",id:"b-check-connectivity",level:4},{value:"7. Note down <code>Host:Port</code> information",id:"7-note-down-hostport-information",level:3}];function f(){return(0,i.kt)(o.Z,{fallback:(0,i.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,i.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/satellite/ami/main.tf",download:!0}," main.tf ")}))}var v={toc:m,DownloadAMIMainTF:f};function k(e){var t=e.components,a=(0,l.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"satellite-ami-on-aws-ec2"},"Satellite AMI on AWS EC2"),(0,i.kt)(r.Z,{defaultValue:"console",values:[{label:"AWS Console",value:"console"},{label:"Terraform",value:"tf"}],groupId:"env",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"console",mdxType:"TabItem"},(0,i.kt)("h3",{id:"1-open-the-ec2-launch-wizard-and-select-the-levo-satellite-ami"},"1. Open the EC2 Launch Wizard and select the Levo Satellite AMI"),(0,i.kt)("p",null,"Levo provides pre-built AMIs for Satellite. You can launch an EC2 instance using the AMI in the AWS region you wish to install the satellite in."),(0,i.kt)("ul",null,(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=us-west-1#LaunchInstances:ami=ami-0080f67c406a8e836;instanceType=c6a.xlarge"},"us-west-1 (N. California)")," "),(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=us-west-2#LaunchInstances:ami=ami-09cc59369bf39272b;instanceType=c6a.xlarge"},"us-west-2 (Oregon)")," "),(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=us-east-1#LaunchInstances:ami=ami-03cf724298d12783b;instanceType=c6a.xlarge"},"us-east-1 (N. Virginia)")," "),(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=us-east-2#LaunchInstances:ami=ami-04df19b9035976a79;instanceType=c6a.xlarge"},"us-east-2 (Ohio)")," "),(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=ap-south-1#LaunchInstances:ami=ami-03effa71398878b37;instanceType=c6a.xlarge"},"ap-south-1 (Mumbai)")," "),(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=ap-southeast-1#LaunchInstances:ami=ami-006844540d965f519;instanceType=c6a.xlarge"},"ap-southeast-1 (Singapore)")," "),(0,i.kt)("li",null," ",(0,i.kt)("a",{href:"https://us-west-2.console.aws.amazon.com/ec2/home?region=eu-west-2#LaunchInstances:ami=ami-0e0418c44c42c3b56;instanceType=c6a.xlarge"},"eu-west-2 (London)")," ")),(0,i.kt)("h3",{id:"2-ec2-configuration"},"2. EC2 Configuration"),(0,i.kt)("p",null,"Pick the following appropriately for your instance. Make sure that this instance is reachable from the eBPF sensors running in your VPC."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Instance Name & tags"),(0,i.kt)("li",{parentName:"ol"},"Key pair"),(0,i.kt)("li",{parentName:"ol"},"The security group")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure to add rules to allow https traffic."),(0,i.kt)("li",{parentName:"ul"},"Allow UDP port 4789 if you are using traffic mirroring.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Disk storage. Choose at least 40GB")),(0,i.kt)("h3",{id:"3-add-user-metadata-to-the-ec2-instance"},"3. Add User Metadata to the EC2 instance"),(0,i.kt)("p",null,"Under Advanced details > User Data, add the following (pick the appropriate value of ",(0,i.kt)("inlineCode",{parentName:"p"},"levo_auth_key"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\necho \"LEVOAI_AUTH_KEY='Authorization Key'\" > /opt/levoai/.levoenv\nsudo /opt/levoai/levo_satellite.sh start >> satellite-start.log 2>&1\n# Uncomment the following line to enable the traffic mirroring listener\n# sudo /opt/levoai/levo_traffic_listener.sh start >> traffic-listener-start.log 2>&1\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Depending on the region you are installing in, you may need to set a different Levo base URL for the satellite."),(0,i.kt)("p",{parentName:"admonition"},"For example, if the satellite will be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"app.india-1.levo.ai"),", add the following line to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/levoai/.levoenv")," file as well."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"LEVOAI_BASE_URL='https://api.india-1.levo.ai'\" > /opt/levoai/.levoenv\n")))),(0,i.kt)(s.Z,{value:"tf",mdxType:"TabItem"},(0,i.kt)("h3",{id:"1-download-the-terraform-script"},"1. Download the Terraform script"),(0,i.kt)("p",null,"Download the ",(0,i.kt)(f,{mdxType:"DownloadAMIMainTF"})," file."),(0,i.kt)("h3",{id:"2-run-the-terraform-script"},"2. Run the Terraform Script"),(0,i.kt)("p",null,"Run the following command in the same directory -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,i.kt)("h3",{id:"3-tf-script-configuration"},"3. TF Script Configuration"),(0,i.kt)("p",null,"Enter the AWS Region and Satellite Refresh Token as prompted to create a task definition in your AWS account."))),(0,i.kt)("h4",{id:"traffic-mirroring"},"Traffic Mirroring"),(0,i.kt)("p",null,"In order to use traffic mirroring setup uncomment the last line of the user data script.\nCheck ",(0,i.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors/aws-traffic-mirroring"},"AWS Traffic Mirroring")," for configuring traffic mirroring using Levo CLI."),(0,i.kt)("h3",{id:"4-launch-the-ec2-instance"},"4. Launch the EC2 instance"),(0,i.kt)("p",null,"Satellite services should start automatically once the EC2 instance is initialized"),(0,i.kt)("h3",{id:"5-verify-the-satellite-services"},"5. Verify the Satellite services"),(0,i.kt)("p",null,"To check logs, debug and manage the Satellite services, you can SSH into the VM and use the following commands."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stop the Satellite: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo /opt/levo/levo_satellite.sh stop")),(0,i.kt)("li",{parentName:"ol"},"Start the Satellite: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo /opt/levo/levo_satellite.sh start")),(0,i.kt)("li",{parentName:"ol"},"Upgrade the Satellite: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo /opt/levo/levo_satellite.sh upgrade")),(0,i.kt)("li",{parentName:"ol"},"Check the services: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo docker ps"))),(0,i.kt)("h3",{id:"6-verify-connectivity-with-levoai"},"6. Verify connectivity with Levo.ai"),(0,i.kt)("h4",{id:"a-check-satellite-health"},"a. Check Satellite health"),(0,i.kt)("p",null,"The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger."),(0,i.kt)("p",null,"Wait couple of minutes after the install, and check the health of the components by executing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker ps -f name=levoai\n")),(0,i.kt)("p",null,"If the Satellite is healthy, you should see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                     COMMAND                  CREATED             STATUS                  PORTS                                                                                                                                    NAMES\n2b32cd6b9ced   levoai/collector:stable   "/usr/local/bin/levo\u2026"   10 seconds ago      Up 8 seconds            0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector\n06f3c597cad0   levoai/satellite:stable   "gunicorn --capture-\u2026"   10 seconds ago      Up 9 seconds            0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite\n89026034c567   levoai/satellite:stable   "python -OO /opt/lev\u2026"   10 seconds ago      Up Less than a second                                                                                                                                            levoai-tagger\nf74524d02fbd   bitnami/rabbitmq:3.10     "/opt/bitnami/script\u2026"   10 seconds ago      Up 9 seconds            5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq\n')),(0,i.kt)("h4",{id:"b-check-connectivity"},"b. Check connectivity"),(0,i.kt)("p",null,"Execute the following to check for connectivity health:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker logs levoai-tagger  2>&1 | grep "Ready to process; waiting for messages."\n')),(0,i.kt)("p",null,"If connectivity is healthy, you will see output similar to below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}\n')),(0,i.kt)("h3",{id:"7-note-down-hostport-information"},"7. Note down ",(0,i.kt)("inlineCode",{parentName:"h3"},"Host:Port")," information"),(0,i.kt)("p",null,"The Collector now runs in a container, and is reachable on the host via port 4317 (on all the host's network interfaces)."),(0,i.kt)("p",null,"Please note down the either the host's IP address or domain name. The Sensor will be configured to communicate with the Collector at <Host's IP|Domain-Name>:4317."),(0,i.kt)("p",null,"Please proceed to ",(0,i.kt)("a",{parentName:"p",href:"/install-traffic-capture-sensors"},"install Traffic Capture Sensors"),"."),(0,i.kt)("br",null))}k.isMDXComponent=!0}}]);