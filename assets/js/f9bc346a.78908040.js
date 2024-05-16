"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9194],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},s="Upgrading Levo CLI",c={unversionedId:"security-testing/test-laptop/levo-cli-upgrade-instructions",id:"security-testing/test-laptop/levo-cli-upgrade-instructions",title:"Upgrading Levo CLI",description:"Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags latest & stable. While you can pick the specific version of the image you want, it is recommend that you use the stable image.",source:"@site/docs/security-testing/test-laptop/levo-cli-upgrade-instructions.md",sourceDirName:"security-testing/test-laptop",slug:"/security-testing/test-laptop/levo-cli-upgrade-instructions",permalink:"/security-testing/test-laptop/levo-cli-upgrade-instructions",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-testing/test-laptop/levo-cli-upgrade-instructions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Test on Windows",permalink:"/security-testing/test-laptop/test-windows"},next:{title:"Levo CLI Command Reference",permalink:"/security-testing/test-laptop/levo-cli-command-reference"}},u={},p=[{value:"Mac OS",id:"mac-os",level:3},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-levo-cli"},"Upgrading Levo CLI"),(0,a.kt)("p",null,"Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"stable"),". While you can pick the specific version of the image you want, it is recommend that you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," image."),(0,a.kt)("p",null,"Follow instructions below for your platform. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: if you update the ",(0,a.kt)("inlineCode",{parentName:"p"},"levo")," alias, please remember to persist it in the shell's profile.")),(0,a.kt)("h3",{id:"mac-os"},"Mac OS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:<x.x.x>\n\nalias levo='docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME/.aws:/home/levo/.aws -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>'\n")),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:<x.x.x>\n\nalias levo='docker run --rm --add-host=host.docker.internal:`ip route|awk '\\''/docker0/ { print $9 }'\\''` -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME/.aws:/home/levo/.aws -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>'\n")),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"docker pull levoai/levo:<x.x.x>\n\nFunction Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x> $args}\n")))}d.isMDXComponent=!0}}]);