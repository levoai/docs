"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8111],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(v,l(l({ref:t},u),{},{components:n})):o.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:7},c="Upgrading Levo CLI",s={unversionedId:"levo-cli/levo-cli-upgrade-instructions",id:"levo-cli/levo-cli-upgrade-instructions",title:"Upgrading Levo CLI",description:"Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags latest & stable. While you can pick the specific version of the image you want, it is recommend that you use the stable image.",source:"@site/docs/levo-cli/levo-cli-upgrade-instructions.md",sourceDirName:"levo-cli",slug:"/levo-cli/levo-cli-upgrade-instructions",permalink:"/levo-cli/levo-cli-upgrade-instructions",editUrl:"https://github.com/levoai/docs/edit/main/docs/levo-cli/levo-cli-upgrade-instructions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Levo CLI Command Reference",permalink:"/levo-cli/levo-cli-command-reference"},next:{title:"FAQs",permalink:"/faqs"}},u={},p=[{value:"Mac OS",id:"mac-os",level:3},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-levo-cli"},"Upgrading Levo CLI"),(0,a.kt)("p",null,"Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"stable"),". While you can pick the specific version of the image you want, it is recommend that you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," image."),(0,a.kt)("p",null,"Follow instructions below for your platform. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: if you update the ",(0,a.kt)("inlineCode",{parentName:"p"},"levo")," alias, please remember to persist it in the shell's profile.")),(0,a.kt)("h3",{id:"mac-os"},"Mac OS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:<x.x.x>\n\nalias levo='docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>'\n")),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:<x.x.x>\n\nalias levo='docker run --rm --add-host=host.docker.internal:`ip route|awk '\\''/docker0/ { print $9 }'\\''` -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>'\n")),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"docker pull levoai/levo:<x.x.x>\n\nFunction Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x> $args}\n")))}d.isMDXComponent=!0}}]);