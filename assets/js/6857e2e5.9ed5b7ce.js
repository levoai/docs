"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),v=o,y=d["".concat(l,".").concat(v)]||d[v]||c[v]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:6},l="Execute Test Plan",u={unversionedId:"test-your-app/test-app-security/data-driven/execute-test-plan",id:"test-your-app/test-app-security/data-driven/execute-test-plan",title:"Execute Test Plan",description:"1. Copy the test plan's Levo Resource Name (LRN)",source:"@site/docs/test-your-app/test-app-security/data-driven/execute-test-plan.md",sourceDirName:"test-your-app/test-app-security/data-driven",slug:"/test-your-app/test-app-security/data-driven/execute-test-plan",permalink:"/test-your-app/test-app-security/data-driven/execute-test-plan",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/test-your-app/test-app-security/data-driven/execute-test-plan.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Configure `environment.yml`",permalink:"/test-your-app/test-app-security/data-driven/configure-env-yml"},next:{title:"Zero Conf Security Tests",permalink:"/test-your-app/test-app-security/zero-conf/"}},p={},c=[{value:"1. Copy the test plan&#39;s Levo Resource Name (LRN)",id:"1-copy-the-test-plans-levo-resource-name-lrn",level:2},{value:"2. Install Levo CLI &amp; Login",id:"2-install-levo-cli--login",level:2},{value:"3. Execute the test plan against you live API endpoints",id:"3-execute-the-test-plan-against-you-live-api-endpoints",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"4. View the test results in the <code>Test Runs</code> page",id:"4-view-the-test-results-in-the-test-runs-page",level:2},{value:"Congratulations! You are done.",id:"congratulations-you-are-done",level:2}],d={toc:c};function v(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execute-test-plan"},"Execute Test Plan"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1920).Z,width:"207",height:"40"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2998).Z,width:"1075",height:"405"})),(0,a.kt)("h2",{id:"1-copy-the-test-plans-levo-resource-name-lrn"},"1. Copy the test plan's Levo Resource Name (LRN)"),(0,a.kt)("p",null,"From the test plans screen ",(0,a.kt)("strong",{parentName:"p"},"copy")," the LRN (Levo Resource Name) of your test plan to the clipboard."),(0,a.kt)("h2",{id:"2-install-levo-cli--login"},"2. Install Levo CLI & Login"),(0,a.kt)("p",null,"Skip this step if you have already completed it."),(0,a.kt)("p",null,"Levo CLI is the test runner that will execute the test plan against your running instance of crAPI."),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/levo-cli/levo-cli-intro"},"here")," to install Levo CLI and authenticate it with Levo SaaS."),(0,a.kt)("h2",{id:"3-execute-the-test-plan-against-you-live-api-endpoints"},"3. Execute the test plan against you live API endpoints"),(0,a.kt)("p",null,"Now we will use the Levo CLI to execute the test plan."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure you copied the ",(0,a.kt)("inlineCode",{parentName:"li"},"LRN (Levo Resource Name)")," to the clipboard in the previous step."),(0,a.kt)("li",{parentName:"ul"},"Ensure you downloaded the ",(0,a.kt)("inlineCode",{parentName:"li"},"environment.yml")," file (",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"if present")),") from the test plan to your desktop."),(0,a.kt)("li",{parentName:"ul"},"Ensure the ",(0,a.kt)("inlineCode",{parentName:"li"},"environment.yml")," file (",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"if present")),") is in the same directory from which you launch Levo CLI. You may need to copy the file to the directory from where you launch the CLI.")),(0,a.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if your API is running on your local machine.\n\nlevo test --test-plan <LRN value copied to clipboard > --target-url <your live API's base URL> --env-file environment.yml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": If your test plan does not have an ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.yml")," file associated with it, please do not specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"--env-file")," option above."),(0,a.kt)("h2",{id:"4-view-the-test-results-in-the-test-runs-page"},"4. View the test results in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Test Runs")," page"),(0,a.kt)("p",null,"In the Levo SaaS console side panel, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runs")," and navigate to your most recent test run results"),(0,a.kt)("h2",{id:"congratulations-you-are-done"},"Congratulations! You are done."))}v.isMDXComponent=!0},2998:function(e,t,n){t.Z=n.p+"assets/images/data-driven-flow-5-e30dc93c4b8a4237a38b925fc6ef064d.svg"},1920:function(e,t,n){t.Z=n.p+"assets/images/data-driven-test-plan-2bac0366423c95594a969719901fed4e.svg"}}]);