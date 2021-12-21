"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[409],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9822:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},s="Levo CLI for Linux",c={unversionedId:"levo-cli/levo-cli-for-linux",id:"levo-cli/levo-cli-for-linux",isDocsHomePage:!1,title:"Levo CLI for Linux",description:"Prerequisites",source:"@site/docs/levo-cli/levo-cli-for-linux.md",sourceDirName:"levo-cli",slug:"/levo-cli/levo-cli-for-linux",permalink:"/levo-cli/levo-cli-for-linux",editUrl:"https://github.com/levoai/docs/edit/main/docs/levo-cli/levo-cli-for-linux.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Levo CLI for Mac OS",permalink:"/levo-cli/levo-cli-for-mac-os"},next:{title:"Levo CLI for Windows",permalink:"/levo-cli/levo-cli-for-windows"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"levo-cli-for-linux"},"Levo CLI for Linux"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use of Levo CLI requires Docker (min version: 18.03.0)"),(0,i.kt)("li",{parentName:"ul"},"Linux version that supports Docker"),(0,i.kt)("li",{parentName:"ul"},"Ensure that you are able to launch and use Docker containers, and network connectivity works")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instructions to Setup Levo CLI")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a terminal (bash) window and type the following commands to setup an alias:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.config/configstore\n\nexport DOCKERHOST=$(ifconfig | awk '/docker0/{getline; print}' | awk '{ print $2 }')\n\xa0\nalias levo=\"sudo docker run --rm --add-host=host.docker.internal:$DOCKERHOST --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore -v $PWD:/home/levo/work:rw -e LOCAL_USER_ID=$(id -u) -e LOCAL_GROUP_ID=$(id -g) -e TERM=xterm-256color -ti levoai/levo:stable\"\xa0\n")),(0,i.kt)("p",null,"Use of sudo with Docker may be optional for your installation."),(0,i.kt)("p",null,"The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, etc.). Please refer to the shell documentation.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now signup and create an account on ",(0,i.kt)("a",{parentName:"li",href:"https://Levo.ai"},"Levo.ai")," via the CLI:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"levo login\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upgrade Instructions")),(0,i.kt)("p",null,"Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"stable"),". While you can pick the specific version of the image you want, it is recommend that you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," image."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:stable\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker pull levoai/levo:<x.x.x>\n\nalias levo="sudo docker run --rm --add-host=host.docker.internal:$DOCKERHOST -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>"\xa0\n')),(0,i.kt)("p",null,"If you update the alias, please remember to persist it in the shell's profile."))}f.isMDXComponent=!0}}]);