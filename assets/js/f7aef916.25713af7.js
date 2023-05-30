"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6340],{3905:function(e,i,r){r.d(i,{Zo:function(){return u},kt:function(){return g}});var t=r(7294);function n(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function o(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?o(Object(r),!0).forEach((function(i){n(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function s(e,i){if(null==e)return{};var r,t,n=function(e,i){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],i.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var i=t.useContext(l),r=i;return e&&(r="function"==typeof e?e(i):a(a({},i),e)),r},u=function(e){var i=c(e.components);return t.createElement(l.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},p=t.forwardRef((function(e,i){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,m=p["".concat(l,".").concat(g)]||p[g]||f[g]||o;return r?t.createElement(m,a(a({ref:i},u),{},{components:r})):t.createElement(m,a({ref:i},u))}));function g(e,i){var r=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4598:function(e,i,r){r.r(i),r.d(i,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var t=r(3117),n=r(102),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:7},l="Other Installation options",c={unversionedId:"api-observability/install-guide/other-installation-options",id:"api-observability/install-guide/other-installation-options",title:"Other Installation options",description:"AWS Traffic Mirroring",source:"@site/docs/api-observability/install-guide/other-installation-options.md",sourceDirName:"api-observability/install-guide",slug:"/api-observability/install-guide/other-installation-options",permalink:"/api-observability/install-guide/other-installation-options",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/install-guide/other-installation-options.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"View API Catalog",permalink:"/api-observability/install-guide/view-api-catalog"},next:{title:"Install pcap-sensor",permalink:"/api-observability/install-guide/install-pcap-sensor"}},u={},f=[{value:"AWS Traffic Mirroring",id:"aws-traffic-mirroring",level:2},{value:"i. Prerequisites",id:"i-prerequisites",level:3},{value:"ii. Creating mirroring session using Levo CLI",id:"ii-creating-mirroring-session-using-levo-cli",level:3},{value:"ii. Listing mirroring session using Levo CLI",id:"ii-listing-mirroring-session-using-levo-cli",level:3},{value:"iii. Delete a mirroring session using Levo CLI",id:"iii-delete-a-mirroring-session-using-levo-cli",level:3}],p={toc:f};function g(e){var i=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"other-installation-options"},"Other Installation options"),(0,o.kt)("h2",{id:"aws-traffic-mirroring"},"AWS Traffic Mirroring"),(0,o.kt)("h3",{id:"i-prerequisites"},"i. Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Satellite has been successfully installed with traffic mirroring listener."),(0,o.kt)("li",{parentName:"ul"},"You have noted down the Satellite's Elastic Network Interface (target ENI) id."),(0,o.kt)("li",{parentName:"ul"},"You have noted down the Source Elastic Network Interface (source ENI) id, usually the Load Balancer ENI."),(0,o.kt)("li",{parentName:"ul"},"The Satellite is reachable from the source where you are mirroring traffic from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../security-contract-testing/levo-cli/levo-cli-intro"},"Setup Levo CLI with AWS credentials"))),(0,o.kt)("h3",{id:"ii-creating-mirroring-session-using-levo-cli"},"ii. Creating mirroring session using Levo CLI"),(0,o.kt)("p",null,"In order to create the traffic mirroring in aws you have to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"levo mirror create\n")),(0,o.kt)("p",null,"The CLI will ask for some inputs. First it will ask for the Elastic Network Interface resource id of the source instance from which you want to mirror the traffic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? What is the source Network Interface resource id? [your-source-eni-for-traffic-mirroring]\nGetting source mirroring details...\n")),(0,o.kt)("p",null,"Then CLI will as for the Elastic Network Interface resource id of the target satellite instance you want to mirror the traffic to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? What is the target Network Interface resource id? [eni-for-satellite-running-traffic-listener]\nGetting source mirroring details...\nInitializing traffic mirroring... creating traffic mirroring filter if necessary.\nLooking for an existing traffic mirror target...\nLooking for eni-*********** in us-west-2\n")),(0,o.kt)("p",null,"Then it will ask you to name the traffic mirroring session so you can identify it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? How do you want to name the mirroring session? [your-mirroring-session-name]\nCreating traffic mirroring session...\n")),(0,o.kt)("p",null,"Done. Now traffic should be mirrored from your source network interface into the Levo satellite."),(0,o.kt)("h3",{id:"ii-listing-mirroring-session-using-levo-cli"},"ii. Listing mirroring session using Levo CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foo@bar:~$ levo mirror list\nmy-mirroring-session-1\nmy-mirroring-session-2\nmy-mirroring-session-3\n")),(0,o.kt)("h3",{id:"iii-delete-a-mirroring-session-using-levo-cli"},"iii. Delete a mirroring session using Levo CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foo@bar:~$ levo delete my-mirroring-session-1\nSesion successfully deleted!\n")))}g.isMDXComponent=!0}}]);