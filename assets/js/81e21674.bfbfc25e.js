"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8677],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:3},l="CrAPI Sample App - Part 2",p={unversionedId:"guides/security-testing/test-sample-app/crapi/crapi-part-2",id:"guides/security-testing/test-sample-app/crapi/crapi-part-2",title:"CrAPI Sample App - Part 2",description:"The test plan created was auto configured as you selected Auto-populate API parameters for this test plan in the previous step.",source:"@site/docs/guides/security-testing/test-sample-app/crapi/crapi-part-2.md",sourceDirName:"guides/security-testing/test-sample-app/crapi",slug:"/guides/security-testing/test-sample-app/crapi/crapi-part-2",permalink:"/guides/security-testing/test-sample-app/crapi/crapi-part-2",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/test-sample-app/crapi/crapi-part-2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CrAPI Sample App - Part 1",permalink:"/guides/security-testing/test-sample-app/crapi/crapi-part-1"},next:{title:"API Security Testing: DIY Guide for Your Apps",permalink:"/guides/security-testing/test-your-app/testing-your-own-apps"}},u={},c=[{value:"5. Install Levo CLI &amp; Login",id:"5-install-levo-cli--login",level:2},{value:"6. Execute the test plan against crAPI",id:"6-execute-the-test-plan-against-crapi",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"View the test results in the <code>Test Runs</code> page",id:"view-the-test-results-in-the-test-runs-page",level:2},{value:"Verify results using crAPI&#39;s Hackpad (Optional)",id:"verify-results-using-crapis-hackpad-optional",level:2},{value:"Congratulations! You are done.",id:"congratulations-you-are-done",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crapi-sample-app---part-2"},"CrAPI Sample App - Part 2"),(0,a.kt)("p",null,"The test plan created was auto configured as you selected ",(0,a.kt)("inlineCode",{parentName:"p"},"Auto-populate API parameters for this test plan")," in the previous step."),(0,a.kt)("p",null,"Just like developers run tests using JUnit, & PyTest ",(0,a.kt)("inlineCode",{parentName:"p"},"fixtures"),", Levo's test plans use ",(0,a.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/test-plans/fixtures/test-fixtures"},"fixtures")," to drive tests. The fixtures provide seed values for API parameters required for the proper execution of the tests."),(0,a.kt)("p",null,"Levo used examples in the OpenAPI specification to auto populate these fixtures."),(0,a.kt)("h2",{id:"5-install-levo-cli--login"},"5. Install Levo CLI & Login"),(0,a.kt)("p",null,"Levo CLI is the test runner that will execute the test plan against your running instance of crAPI."),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/security-testing/test-laptop"},"here")," to install Levo CLI and authenticate it with Levo SaaS."),(0,a.kt)("p",null,"Skip this step if you have already completed it."),(0,a.kt)("h2",{id:"6-execute-the-test-plan-against-crapi"},"6. Execute the test plan against crAPI"),(0,a.kt)("p",null,"Now we will use the Levo CLI to execute the test plan."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure you copied the ",(0,a.kt)("inlineCode",{parentName:"li"},"LRN (Levo Resource Name)")," to the clipboard in the previous step."),(0,a.kt)("li",{parentName:"ul"},"Ensure you downloaded the ",(0,a.kt)("inlineCode",{parentName:"li"},"environment.yml")," file from the test plan to your desktop."),(0,a.kt)("li",{parentName:"ul"},"Ensure the ",(0,a.kt)("inlineCode",{parentName:"li"},"environment.yml")," file is in the same directory from which you launch Levo CLI. You may need to copy the file to the directory from where you launch the CLI.")),(0,a.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Use `host.docker.internal` instead of `localhost` or `127.0.0.1` if crAPI is running on your local machine.\n# Modify the --target-url value below if crAPI is running elsewhere.\n\nexport TEST_PLAN_LRN="<LRN value copied to your clipboard in previous steps>"\n\n# Execute security tests against crAPI \nlevo test --test-plan $TEST_PLAN_LRN --target-url http://host.docker.internal:8888 --env-file environment.yml\n')),(0,a.kt)("h2",{id:"view-the-test-results-in-the-test-runs-page"},"View the test results in the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Test Runs")," page"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Levo SaaS console side panel, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Test Runs")," and navigate to your most recent test run results"),(0,a.kt)("li",{parentName:"ol"},"You will notice that Levo has found failed test cases and an ",(0,a.kt)("a",{parentName:"li",href:"/vulnerabilities/v1/OWASP-API-10/A1-BOLA"},"Broken Object Level Authorization")," vulnerability. Navigate to the BOLA test case status, and review the summary and the logs.")),(0,a.kt)("h2",{id:"verify-results-using-crapis-hackpad-optional"},"Verify results using crAPI's Hackpad (Optional)"),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"crAPI"),", use the top level menu to navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Hackpad"),". Follow instructions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hackpad")," to verify if the IDOR finding reported by Levo is a true positive."),(0,a.kt)("h2",{id:"congratulations-you-are-done"},"Congratulations! You are done."))}f.isMDXComponent=!0}}]);