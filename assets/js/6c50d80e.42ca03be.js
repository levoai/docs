"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3299],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=l(n),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5219:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},u="JUnit Format Test Results",l={unversionedId:"guides/miscellaneous/junit-format-results",id:"guides/miscellaneous/junit-format-results",title:"JUnit Format Test Results",description:"JUnit XML format is a really popular industry format that is used for test result reporting.",source:"@site/docs/guides/miscellaneous/junit-format-results.md",sourceDirName:"guides/miscellaneous",slug:"/guides/miscellaneous/junit-format-results",permalink:"/guides/miscellaneous/junit-format-results",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/miscellaneous/junit-format-results.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Supported Platforms",permalink:"/guides/general/supported-platforms"},next:{title:"Direct API Integrations",permalink:"/guides/miscellaneous/api-integrations"}},c={},p=[],m={toc:p};function f(t){var e=t.components,s=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"junit-format-test-results"},"JUnit Format Test Results"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/developer-for-zos/14.1.0?topic=formats-junit-xml-format"},"JUnit XML format")," is a really popular industry format that is used for test result reporting."),(0,a.kt)("p",null,"Levo CLI can produce JUnit/XUnit format output for all test results (security/schema conformance). Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/security-testing/test-laptop/levo-cli-command-reference"},"CLI Command Reference")," for more details on command line switches (",(0,a.kt)("inlineCode",{parentName:"p"},"--export-junit-xml"),") that activate this output."),(0,a.kt)("p",null,"There are many tools in the industry that consume this format, and produce HTML, and PDF reports of test results. A few examples are ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/junit/"},"Jenkins JUnit Plugin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/xunit/"},"Jenkins XUnit Plugin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/inorton/junit2html"},"junit2html"),", ",(0,a.kt)("a",{parentName:"p",href:"https://ant.apache.org/manual/Tasks/junitreport.html"},"Ant JUnitReport"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukejpreston/xunit-viewer"},"xunit-viewer"),", etc."),(0,a.kt)("p",null,"Below are some examples of JUnit format test results rendered in Jenkins via the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/junit/"},"JUnit plugin"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JUnit Build Summary",src:n(7349).Z,width:"1902",height:"796"}),"\n",(0,a.kt)("img",{alt:"JUnit Build Results",src:n(6474).Z,width:"1368",height:"1244"}),"\n",(0,a.kt)("img",{alt:"JUnit Build Detail-1",src:n(7972).Z,width:"1370",height:"1348"}),"\n",(0,a.kt)("img",{alt:"JUnit Build Detail-2",src:n(4023).Z,width:"1348",height:"908"})))}f.isMDXComponent=!0},7972:function(t,e,n){e.Z=n.p+"assets/images/jenkins-build-junit-format-detail-1-f7524e2298e90a775c38e69d17b1cfaa.png"},4023:function(t,e,n){e.Z=n.p+"assets/images/jenkins-build-junit-format-detail-2-52db704390cfc9f1c434035734012130.png"},6474:function(t,e,n){e.Z=n.p+"assets/images/jenkins-build-junit-format-results-b53f856f25428d1869e537cf6fa9bfeb.png"},7349:function(t,e,n){e.Z=n.p+"assets/images/jenkins-build-junit-format-summary-0277213d4298e889153c471e21cf9e22.png"}}]);