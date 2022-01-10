"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[458],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l="Execute Plan & View Results",u={unversionedId:"test-sample-app/crapi/execute-plan-view-results",id:"test-sample-app/crapi/execute-plan-view-results",isDocsHomePage:!1,title:"Execute Plan & View Results",description:"Execute the test plan against crAPI",source:"@site/docs/test-sample-app/crapi/execute-plan-view-results.md",sourceDirName:"test-sample-app/crapi",slug:"/test-sample-app/crapi/execute-plan-view-results",permalink:"/test-sample-app/crapi/execute-plan-view-results",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-sample-app/crapi/execute-plan-view-results.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configure Your Test Plan",permalink:"/test-sample-app/crapi/configure-test-plan"},next:{title:"FAQs",permalink:"/faqs"}},c=[{value:"Execute the test plan against crAPI",id:"execute-the-test-plan-against-crapi",children:[],level:2},{value:"View the test results in the <code>Test Runs</code> page",id:"view-the-test-results-in-the-test-runs-page",children:[],level:2},{value:"Verify results using crAPI&#39;s Hackpad (Optional)",id:"verify-results-using-crapis-hackpad-optional",children:[],level:2},{value:"Congratulations! You are done.",id:"congratulations-you-are-done",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"execute-plan--view-results"},"Execute Plan & View Results"),(0,i.kt)("h2",{id:"execute-the-test-plan-against-crapi"},"Execute the test plan against crAPI"),(0,i.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if crAPI is running on your local machine.\n# Modify the TARGET_URL value below if crAPI is running elsewhere.\nexport TARGET_URL="http://host.docker.internal:8888"\n\nexport TEST_PLAN_LRN="<LRN value copied to your clipboard in previous steps>"\n\n# Execute security tests against crAPI \nlevo test --plan-lrn $TEST_PLAN_LRN --target-url $TARGET_URL\n')),(0,i.kt)("h2",{id:"view-the-test-results-in-the-test-runs-page"},"View the test results in the ",(0,i.kt)("inlineCode",{parentName:"h2"},"Test Runs")," page"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Levo SaaS console side panel, click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Test Runs")," and navigate to your most recent test run results"),(0,i.kt)("li",{parentName:"ol"},"You will notice that Levo has found failed test cases and an IDOR vulnerability. Navigate to the IDOR test case status, and review the summary and the logs.")),(0,i.kt)("h2",{id:"verify-results-using-crapis-hackpad-optional"},"Verify results using crAPI's Hackpad (Optional)"),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"crAPI"),", use the top level menu to navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Hackpad"),". Follow instructions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hackpad")," to verify if the IDOR finding reported by Levo is a true positive."),(0,i.kt)("h2",{id:"congratulations-you-are-done"},"Congratulations! You are done."))}d.isMDXComponent=!0}}]);