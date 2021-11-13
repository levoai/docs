"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[403],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},p="Configure Your Test Plan",s={unversionedId:"onboarding/crapi/configure-test-plan",id:"onboarding/crapi/configure-test-plan",isDocsHomePage:!1,title:"Configure Your Test Plan",description:"Just like developers run tests using JUnit, XUnit, & PyTest fixtures, Levo's test plans use fixtures to drive tests. The fixtures provide seed data required for the proper execution of the tests.",source:"@site/docs/onboarding/crapi/configure-test-plan.md",sourceDirName:"onboarding/crapi",slug:"/onboarding/crapi/configure-test-plan",permalink:"/onboarding/crapi/configure-test-plan",editUrl:"https://github.com/levoai/docs/edit/main/docs/onboarding/crapi/configure-test-plan.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install, Import, Generate",permalink:"/onboarding/crapi/install-import-generate"},next:{title:"Execute Plan & View Results",permalink:"/onboarding/crapi/execute-plan-view-results"}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-your-test-plan"},"Configure Your Test Plan"),(0,i.kt)("p",null,"Just like developers run tests using JUnit, XUnit, & PyTest ",(0,i.kt)("inlineCode",{parentName:"p"},"fixtures"),", Levo's test plans use fixtures to drive tests. The fixtures provide seed data required for the proper execution of the tests."),(0,i.kt)("p",null,"Here you will learn how to provide a fixture for one test case, which tests for a serious security vulnerability called ","[IDOR][idor]","."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the test plan, click on the endpoint test suite ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /workshop/api/mechanic/mechanic_report"),". This opens the test suite page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Insecure Direct Object Reference (IDOR) Test")," to open up the specific test case.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters")," table will show ",(0,i.kt)("inlineCode",{parentName:"p"},"report_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"victim credentials"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"attacker credentials")," as a required parameters that needs binding.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters.py")," code module, edit the auto generated template fixtures, and provide appropriate seed values shown here:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fixture Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Text"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"victim credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"userID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:victim.one@example.com"},"victim.one@example.com")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"victim credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"Victim1One"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attacker credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"userID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:hacker@darkweb.com"},"hacker@darkweb.com")),(0,i.kt)("td",{parentName:"tr",align:null},"Hack3r$$$")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attacker credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"Hack3r$$$"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"report_id"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixture Return Value"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Report ID ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," is owned by ",(0,i.kt)("inlineCode",{parentName:"td"},"victim")," and has PII data. Access by users other than ",(0,i.kt)("inlineCode",{parentName:"td"},"victim")," is a serious authorization security flaw!"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hit save to commit your changes. You have successfully completed configuration of this test case.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now copy (to clipboard) your test plan's ",(0,i.kt)("inlineCode",{parentName:"p"},"LRN (Levo Resource Name)")," from the test plan list page")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next step is to run this test plan against ",(0,i.kt)("inlineCode",{parentName:"p"},"crAPI"),"."))))}d.isMDXComponent=!0}}]);