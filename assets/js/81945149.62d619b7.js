"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[908],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,v=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},s="Levo CLI for Mac OS",c={unversionedId:"levo-cli/levo-cli-for-mac-os",id:"levo-cli/levo-cli-for-mac-os",isDocsHomePage:!1,title:"Levo CLI for Mac OS",description:"Prerequisites",source:"@site/docs/levo-cli/levo-cli-for-mac-os.md",sourceDirName:"levo-cli",slug:"/levo-cli/levo-cli-for-mac-os",permalink:"/levo-cli/levo-cli-for-mac-os",editUrl:"https://github.com/levoai/docs/edit/main/docs/levo-cli/levo-cli-for-mac-os.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Levo CLI (aka Test Runner)",permalink:"/levo-cli/levo-cli-intro"},next:{title:"Levo CLI for Linux",permalink:"/levo-cli/levo-cli-for-linux"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"levo-cli-for-mac-os"},"Levo CLI for Mac OS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use of Levo CLI requires Docker (min version: 18.03.0)"),(0,a.kt)("li",{parentName:"ul"},"OSX version that supports Docker"),(0,a.kt)("li",{parentName:"ul"},"Ensure that you are able to launch and use Docker containers, and network connectivity works")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions to Setup Levo CLI")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open a terminal (zsh) window and type the following commands to setup an alias:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\xa0alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:stable"\n')),(0,a.kt)("p",null,"Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, .zshrc, etc.). Please refer to the shell documentation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now signup and create an account on ",(0,a.kt)("a",{parentName:"li",href:"https://Levo.ai"},"Levo.ai")," via the CLI:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"levo login\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Upgrade Instructions")),(0,a.kt)("p",null,"Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"stable"),". While you can pick the specific version of the image you want, it is recommend that you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," image."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get the latest stable image type the following in a terminal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull levoai/levo:stable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To select a specific version of the image and update the alias (where x.x.x is the version):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker pull levoai/levo:<x.x.x>\n\nalias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME/:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:<x.x.x>"\n')),(0,a.kt)("p",null,"If you update the alias, please remember to persist it in the shell's profile."))}m.isMDXComponent=!0}}]);