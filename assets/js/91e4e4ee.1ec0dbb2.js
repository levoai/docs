"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9451],{3905:function(e,r,i){i.d(r,{Zo:function(){return u},kt:function(){return m}});var t=i(7294);function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function o(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?o(Object(i),!0).forEach((function(r){n(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function s(e,r){if(null==e)return{};var i,t,n=function(e,r){if(null==e)return{};var i,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],r.indexOf(i)>=0||(n[i]=e[i]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),i=r;return e&&(i="function"==typeof e?e(r):a(a({},r),e)),i},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(i),m=n,p=g["".concat(l,".").concat(m)]||g[m]||f[m]||o;return i?t.createElement(p,a(a({ref:r},u),{},{components:i})):t.createElement(p,a({ref:r},u))}));function m(e,r){var i=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},2121:function(e,r,i){i.r(r),i.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var t=i(3117),n=i(102),o=(i(7294),i(3905)),a=["components"],s={},l="AWS Traffic Mirroring",c={unversionedId:"api-observability/install-guide/install-sensor/aws-traffic-mirroring",id:"api-observability/install-guide/install-sensor/aws-traffic-mirroring",title:"AWS Traffic Mirroring",description:"i. Prerequisites",source:"@site/docs/api-observability/install-guide/install-sensor/aws-traffic-mirroring.md",sourceDirName:"api-observability/install-guide/install-sensor",slug:"/api-observability/install-guide/install-sensor/aws-traffic-mirroring",permalink:"/api-observability/install-guide/install-sensor/aws-traffic-mirroring",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/install-sensor/aws-traffic-mirroring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install PCAP Sensor",permalink:"/api-observability/install-guide/install-sensor/pcap-sensor"},next:{title:"Cloudflare Worker",permalink:"/api-observability/install-guide/install-sensor/cloudflare-worker"}},u={},f=[{value:"i. Prerequisites",id:"i-prerequisites",level:3},{value:"ii. Creating mirroring session using Levo CLI",id:"ii-creating-mirroring-session-using-levo-cli",level:3},{value:"ii. Listing mirroring session using Levo CLI",id:"ii-listing-mirroring-session-using-levo-cli",level:3},{value:"iii. Delete a mirroring session using Levo CLI",id:"iii-delete-a-mirroring-session-using-levo-cli",level:3}],g={toc:f};function m(e){var r=e.components,i=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},g,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-traffic-mirroring"},"AWS Traffic Mirroring"),(0,o.kt)("h3",{id:"i-prerequisites"},"i. Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Satellite has been successfully installed with traffic mirroring listener."),(0,o.kt)("li",{parentName:"ul"},"You have noted down the Satellite's Elastic Network Interface (target ENI) id."),(0,o.kt)("li",{parentName:"ul"},"You have noted down the Source Elastic Network Interface (source ENI) id, usually the Load Balancer ENI."),(0,o.kt)("li",{parentName:"ul"},"The Satellite is reachable from the source where you are mirroring traffic from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/security-contract-testing/levo-cli/levo-cli-intro"},"Setup Levo CLI with AWS credentials"))),(0,o.kt)("h3",{id:"ii-creating-mirroring-session-using-levo-cli"},"ii. Creating mirroring session using Levo CLI"),(0,o.kt)("p",null,"In order to create the traffic mirroring in aws you have to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"levo mirror create\n")),(0,o.kt)("p",null,"The CLI will ask for some inputs. First it will ask for the Elastic Network Interface resource id of the source instance from which you want to mirror the traffic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? What is the source Network Interface resource id? [your-source-eni-for-traffic-mirroring]\nGetting source mirroring details...\n")),(0,o.kt)("p",null,"Then CLI will as for the Elastic Network Interface resource id of the target satellite instance you want to mirror the traffic to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? What is the target Network Interface resource id? [eni-for-satellite-running-traffic-listener]\nGetting source mirroring details...\nInitializing traffic mirroring... creating traffic mirroring filter if necessary.\nLooking for an existing traffic mirror target...\nLooking for eni-*********** in us-west-2\n")),(0,o.kt)("p",null,"Then it will ask you to name the traffic mirroring session so you can identify it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? How do you want to name the mirroring session? [your-mirroring-session-name]\nCreating traffic mirroring session...\n")),(0,o.kt)("p",null,"Done. Now traffic should be mirrored from your source network interface into the Levo satellite."),(0,o.kt)("h3",{id:"ii-listing-mirroring-session-using-levo-cli"},"ii. Listing mirroring session using Levo CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foo@bar:~$ levo mirror list\nmy-mirroring-session-1\nmy-mirroring-session-2\nmy-mirroring-session-3\n")),(0,o.kt)("h3",{id:"iii-delete-a-mirroring-session-using-levo-cli"},"iii. Delete a mirroring session using Levo CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foo@bar:~$ levo delete my-mirroring-session-1\nSesion successfully deleted!\n")))}m.isMDXComponent=!0}}]);