"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4405],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5228:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:5},s="Common Tasks",c={unversionedId:"integrations/common-tasks",id:"integrations/common-tasks",title:"Common Tasks",description:"- Generating CLI Authorization Keys",source:"@site/docs/integrations/common-tasks.md",sourceDirName:"integrations",slug:"/integrations/common-tasks",permalink:"/integrations/common-tasks",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/integrations/common-tasks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Direct API Integrations",permalink:"/integrations/api-integrations"},next:{title:"FAQs",permalink:"/faqs/"}},u={},p=[{value:"Generating CLI Authorization Keys",id:"generating-cli-authorization-keys",level:2},{value:"Accessing Organization IDs",id:"accessing-organization-ids",level:2}],m={toc:p};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-tasks"},"Common Tasks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#generating-cli-authorization-keys"},"Generating CLI Authorization Keys")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#accessing-organization-ids"},"Accessing Organization IDs"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"generating-cli-authorization-keys"},"Generating CLI Authorization Keys"),(0,a.kt)("p",null,"The Levo CLI is packaged within CI/CD plugins that are embedded in quality gates, that run security/resilience tests. "),(0,a.kt)("p",null,"The CLI uses an authorization key to access Levo.ai. Follow instructions below to generate a key."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.levo.ai/login"},"Login")," to Levo.ai"),(0,a.kt)("li",{parentName:"ul"},"Click on your user profile"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"User Settings")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Keys")," on the left navigation panel"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Get CLI Authorization Key")),(0,a.kt)("li",{parentName:"ul"},"Now copy & save your authorization key, to be used in the CI/CD plugin of your choice")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"accessing-organization-ids"},"Accessing Organization IDs"),(0,a.kt)("p",null,"Levo allows signed-in users to belong to more than one ",(0,a.kt)("em",{parentName:"p"},"organization"),". Each organization has a unique ID. Below are instructions on fetching the ID for a specific organization."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fetch ORG ID",src:n(8736).Z,width:"3472",height:"1244"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.levo.ai/login"},"Login")," to Levo.ai"),(0,a.kt)("li",{parentName:"ul"},"Click on your user profile"),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"User Settings")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Organizations")," on the left navigation panel"),(0,a.kt)("li",{parentName:"ul"},"Now copy & save the ID for the Organization of your preference"),(0,a.kt)("li",{parentName:"ul"},"This ID will be used within 3rd party integrations like CI/CD plugins, etc.")))}g.isMDXComponent=!0},8736:function(e,t,n){t.Z=n.p+"assets/images/levo-org-id-351d0a9a7434b14ccb82bbceb6409e3c.png"}}]);