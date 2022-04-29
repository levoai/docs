"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5908],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(r),v=o,m=f["".concat(c,".").concat(v)]||f[v]||p[v]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4845:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),l=["components"],a={sidebar_position:2},c="Levo CLI for Mac OS",s={unversionedId:"levo-cli/levo-cli-for-mac-os",id:"levo-cli/levo-cli-for-mac-os",title:"Levo CLI for Mac OS",description:"Prerequisites",source:"@site/docs/levo-cli/levo-cli-for-mac-os.md",sourceDirName:"levo-cli",slug:"/levo-cli/levo-cli-for-mac-os",permalink:"/levo-cli/levo-cli-for-mac-os",editUrl:"https://github.com/levoai/docs/edit/main/docs/levo-cli/levo-cli-for-mac-os.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Levo CLI (aka Test Runner)",permalink:"/levo-cli/levo-cli-intro"},next:{title:"Levo CLI for Linux",permalink:"/levo-cli/levo-cli-for-linux"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Instructions to Setup Levo CLI",id:"instructions-to-setup-levo-cli",level:3},{value:"Notes",id:"notes",level:3},{value:"Upgrade Instructions",id:"upgrade-instructions",level:3}],f={toc:p};function v(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"levo-cli-for-mac-os"},"Levo CLI for Mac OS"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use of Levo CLI requires Docker (min version: 18.03.0)"),(0,i.kt)("li",{parentName:"ul"},"OSX version that supports Docker"),(0,i.kt)("li",{parentName:"ul"},"Ensure that you are able to launch and use Docker containers, and network connectivity works")),(0,i.kt)("h3",{id:"instructions-to-setup-levo-cli"},"Instructions to Setup Levo CLI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a terminal (zsh) window and type the following commands to setup an alias:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\xa0alias levo='docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:stable'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now signup and create an account on ",(0,i.kt)("a",{parentName:"li",href:"https://Levo.ai"},"Levo.ai")," via the CLI:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"levo login\n")),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, .zshrc, etc.). Please refer to the shell documentation.")),(0,i.kt)("h3",{id:"upgrade-instructions"},(0,i.kt)("a",{parentName:"h3",href:"/levo-cli/levo-cli-upgrade-instructions#mac-os"},"Upgrade Instructions")))}v.isMDXComponent=!0}}]);