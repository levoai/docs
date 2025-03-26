"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6153],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(3117),a=n(102),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:4,title:"Install Levo.ai's IIS Module on Windows | Levo.ai Documentation"},s="Levoai IIS Module",u={unversionedId:"install-traffic-capture-sensors/iis-agent/iis-agent",id:"install-traffic-capture-sensors/iis-agent/iis-agent",title:"Install Levo.ai's IIS Module on Windows | Levo.ai Documentation",description:"This guide walks you through installing and configuring Levo.ai's IIS Module to capture HTTP/HTTPS traffic on Windows IIS servers.",source:"@site/docs/install-traffic-capture-sensors/iis-agent/iis-agent.md",sourceDirName:"install-traffic-capture-sensors/iis-agent",slug:"/install-traffic-capture-sensors/iis-agent/",permalink:"/install-traffic-capture-sensors/iis-agent/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/iis-agent/iis-agent.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Install Levo.ai's IIS Module on Windows | Levo.ai Documentation"},sidebar:"tutorialSidebar",previous:{title:"PCAP Sensor via YUM Package",permalink:"/install-traffic-capture-sensors/pcap-sensor/pcap-sensor-yum-package"},next:{title:"Sensor on AWS Fargate",permalink:"/install-traffic-capture-sensors/sensor-fargate"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"1. Download &amp; Prepare",id:"1-download--prepare",level:3},{value:"2. Configure the Module",id:"2-configure-the-module",level:3},{value:"3. Deploy",id:"3-deploy",level:3},{value:"4. Verify Installation",id:"4-verify-installation",level:3},{value:"Data Flow",id:"data-flow",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Logs Location",id:"logs-location",level:3},{value:"Uninstallation",id:"uninstallation",level:2},{value:"Support",id:"support",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"levoai-iis-module"},"Levoai IIS Module"),(0,i.kt)("p",null,"This guide walks you through installing and configuring Levo.ai's IIS Module to capture HTTP/HTTPS traffic on Windows IIS servers."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Levoai IIS Module captures HTTP/HTTPS traffic from your IIS web servers and sends it to Levo's Satellite service for API discovery and analysis."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows Server with IIS 8.0+"),(0,i.kt)("li",{parentName:"ul"},"Administrator privileges on the Windows server"),(0,i.kt)("li",{parentName:"ul"},"PowerShell 5.0+")),(0,i.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,i.kt)("h3",{id:"1-download--prepare"},"1. Download & Prepare"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the ",(0,i.kt)("inlineCode",{parentName:"li"},"Levoai-IIS-Module.zip")," file from our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/levoai/downloads/tree/main/IIS"},"downloads portal")),(0,i.kt)("li",{parentName:"ol"},"Extract the contents to a directory (recommended: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\Levo\\IISModule\\"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Important"),": Schedule a maintenance window as installation requires an IIS restart")),(0,i.kt)("h3",{id:"2-configure-the-module"},"2. Configure the Module"),(0,i.kt)("p",null,"Before installing the module, modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file to match your specific setup:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," file in a text editor"),(0,i.kt)("li",{parentName:"ol"},"Update the following fields:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "satellite-url": "https://collector.levo.ai",\n    "levo-env": "production",\n    "levoai-org-id": "your-org-id-here"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"satellite-url"),": Replace with your actual Levoai Satellite URL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"levo-env"),": Replace with your environment name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"levoai-org-id"),": Replace with your Levo organization ID")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": If you're running the Satellite service in your own premises, point the satellite URL to that service.")),(0,i.kt)("h3",{id:"3-deploy"},"3. Deploy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open PowerShell as Administrator"),(0,i.kt)("li",{parentName:"ol"},"Navigate to the directory containing the extracted Levoai IIS Module files"),(0,i.kt)("li",{parentName:"ol"},"Execute the installation script:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},".\\DeployLevoaiIIS.ps1\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important"),": This will cause temporary downtime for all IIS websites since IIS is being restarted. It is recommended to do this during a scheduled maintenance window.")),(0,i.kt)("h3",{id:"4-verify-installation"},"4. Verify Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open IIS Manager"),(0,i.kt)("li",{parentName:"ol"},"Navigate to Modules"),(0,i.kt)("li",{parentName:"ol"},'Confirm that "LevoaiIISModule" is listed among the modules'),(0,i.kt)("li",{parentName:"ol"},"Log into the Levoai Portal, go to API Inventory, and verify that traffic appears")),(0,i.kt)("h2",{id:"data-flow"},"Data Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The IIS Module captures HTTP/HTTPS traffic from your IIS web servers"),(0,i.kt)("li",{parentName:"ol"},"Captured data is sent to the configured Levoai satellite service"),(0,i.kt)("li",{parentName:"ol"},"Access the API documentation, sensitive data flows, and API catalog in the Levo.ai portal")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"common-issues"},"Common Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Module Not Loading"),": Check Event Viewer and IIS Manager for error messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No Data in Portal"),": Verify ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," settings and network connectivity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance Issues"),": Contact Levoai support for assistance")),(0,i.kt)("h3",{id:"logs-location"},"Logs Location"),(0,i.kt)("p",null,"The module logs are stored in the installation directory under the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," folder by default."),(0,i.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,i.kt)("p",null,"To uninstall the module, run the following commands in PowerShell (as Administrator):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'Import-Module WebAdministration\nRemove-WebGlobalModule -Name "LevoaiIISModule"\nClear-WebConfiguration -PSPath "MACHINE/WEBROOT/APPHOST" -Filter "system.webServer/modules/add[@name=\'LevoaiIISModule\']"\niisreset\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Uninstallation requires an IIS restart, which will cause temporary downtime for all IIS websites.")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"For additional support or assistance, please ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@levo.ai"},"contact")," Levo.ai technical support."))}m.isMDXComponent=!0}}]);