"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[785],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4184:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:4},s="Zero Conf Security Tests - Part 4",u={unversionedId:"test-your-app/test-app-security/zero-conf/zero-conf-4",id:"test-your-app/test-app-security/zero-conf/zero-conf-4",isDocsHomePage:!1,title:"Zero Conf Security Tests - Part 4",description:"7. Install Levo CLI & Login",source:"@site/docs/test-your-app/test-app-security/zero-conf/zero-conf-4.md",sourceDirName:"test-your-app/test-app-security/zero-conf",slug:"/test-your-app/test-app-security/zero-conf/zero-conf-4",permalink:"/test-your-app/test-app-security/zero-conf/zero-conf-4",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-your-app/test-app-security/zero-conf/zero-conf-4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Zero Conf Security Tests - Part 3",permalink:"/test-your-app/test-app-security/zero-conf/zero-conf-3"},next:{title:"Sample Applications For Evaluating Levo",permalink:"/test-sample-app/levo-sample-applications"}},c=[{value:"7. Install Levo CLI &amp; Login",id:"7-install-levo-cli--login",children:[],level:2},{value:"8. Execute the test plan against you live API endpoints",id:"8-execute-the-test-plan-against-you-live-api-endpoints",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"9. View the test results in the <code>Test Runs</code> page",id:"9-view-the-test-results-in-the-test-runs-page",children:[],level:2},{value:"Congratulations! You are done.",id:"congratulations-you-are-done",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zero-conf-security-tests---part-4"},"Zero Conf Security Tests - Part 4"),(0,i.kt)("h2",{id:"7-install-levo-cli--login"},"7. Install Levo CLI & Login"),(0,i.kt)("p",null,"Levo CLI is the test runner that will execute the test plan against your running instance of crAPI."),(0,i.kt)("p",null,"Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"/levo-cli/levo-cli-intro"},"here")," to install Levo CLI and authenticate it with Levo SaaS."),(0,i.kt)("p",null,"Skip this step if you have already completed it."),(0,i.kt)("h2",{id:"8-execute-the-test-plan-against-you-live-api-endpoints"},"8. Execute the test plan against you live API endpoints"),(0,i.kt)("p",null,"Now we will use the Levo CLI to execute the test plan."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure you copied the ",(0,i.kt)("inlineCode",{parentName:"li"},"LRN (Levo Resource Name)")," to the clipboard in the previous step."),(0,i.kt)("li",{parentName:"ul"},"Ensure you downloaded the ",(0,i.kt)("inlineCode",{parentName:"li"},"environment.yml")," file from the test plan to your desktop."),(0,i.kt)("li",{parentName:"ul"},"Ensure the ",(0,i.kt)("inlineCode",{parentName:"li"},"environment.yml")," file is in the same directory from which you launch Levo CLI. You may need to copy the file to the directory from where you launch the CLI.")),(0,i.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if your API is running on your local machine.\n\nlevo test --plan-lrn <LRN value copied to clipboard > --target-url <your live API's base URL> --env-file environment.yml\n")),(0,i.kt)("h2",{id:"9-view-the-test-results-in-the-test-runs-page"},"9. View the test results in the ",(0,i.kt)("inlineCode",{parentName:"h2"},"Test Runs")," page"),(0,i.kt)("p",null,"In the Levo SaaS console side panel, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Runs")," and navigate to your most recent test run results"),(0,i.kt)("h2",{id:"congratulations-you-are-done"},"Congratulations! You are done."))}d.isMDXComponent=!0}}]);