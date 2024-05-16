"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=a(n),d=o,g=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],c={sidebar_position:6},u="CLI - Test Runner",a={unversionedId:"guides/security-testing/concepts/test-runner",id:"guides/security-testing/concepts/test-runner",title:"CLI - Test Runner",description:"The CLI is the component that executes the autogenerated Test Plans.",source:"@site/docs/guides/security-testing/concepts/test-runner.md",sourceDirName:"guides/security-testing/concepts",slug:"/guides/security-testing/concepts/test-runner",permalink:"/guides/security-testing/concepts/test-runner",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/concepts/test-runner.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Configuring Test Fixtures",permalink:"/guides/security-testing/concepts/test-plans/fixtures/configure-fixtures"},next:{title:"Test Run Reports",permalink:"/guides/security-testing/concepts/test-run-reports"}},p={},l=[],f={toc:l};function d(e){var t=e.components,c=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cli---test-runner"},"CLI - Test Runner"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7063).Z,width:"1105",height:"529"})),(0,i.kt)("p",null,"The CLI is the component that executes the autogenerated Test Plans."),(0,i.kt)("p",null,"The CLI is is packaged as a Docker container, and can be run on a developer's laptop or integrated into CI/CD environments."),(0,i.kt)("p",null,"Levo provides pre-packaged runner/actions integrations for several popular CI/CD products."))}d.isMDXComponent=!0},7063:function(e,t,n){t.Z=n.p+"assets/images/cli-test-runner-83c5bfdd25929551186ca9a40e923001.svg"}}]);