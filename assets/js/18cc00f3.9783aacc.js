"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,y=f["".concat(p,".").concat(m)]||f[m]||c[m]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},p="Security test my App - Part II",l={unversionedId:"test-your-app/test-app-security/test-app-security-2",id:"test-your-app/test-app-security/test-app-security-2",isDocsHomePage:!1,title:"Security test my App - Part II",description:"Configure your 'Config in Progress` test plan",source:"@site/docs/test-your-app/test-app-security/test-app-security-2.md",sourceDirName:"test-your-app/test-app-security",slug:"/test-your-app/test-app-security/test-app-security-2",permalink:"/test-your-app/test-app-security/test-app-security-2",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-your-app/test-app-security/test-app-security-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Security test my App - Part I",permalink:"/test-your-app/test-app-security/test-app-security-1"},next:{title:"Security test my App - Part III",permalink:"/test-your-app/test-app-security/test-app-security-3"}},u=[{value:"Configure your &#39;Config in Progress` test plan",id:"configure-your-config-in-progress-test-plan",children:[],level:2},{value:"Download the <code>environment.yml</code> file",id:"download-the-environmentyml-file",children:[],level:2},{value:"Configure the <code>environment.yml</code> file",id:"configure-the-environmentyml-file",children:[],level:2},{value:"Copy the test plan&#39;s Levo Resource Name (LRN)",id:"copy-the-test-plans-levo-resource-name-lrn",children:[{value:"The next section describes running your test plan using the Levo CLI.",id:"the-next-section-describes-running-your-test-plan-using-the-levo-cli",children:[],level:4}],level:2}],c={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security-test-my-app---part-ii"},"Security test my App - Part II"),(0,o.kt)("h2",{id:"configure-your-config-in-progress-test-plan"},"Configure your 'Config in Progress` test plan"),(0,o.kt)("p",null,"Levo uses ",(0,o.kt)("a",{parentName:"p",href:"/concepts/fixtures/test-fixtures"},"test fixtures")," to provide proper values to API parameters prior to sending test traffic to the live API endpoints."),(0,o.kt)("p",null,"This test plan requires configuration of these test fixtures prior to execution. Proper configuration of the test plan will make it runnable."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the test plan and navigate to the test cases that require configuration (test cases are under test suites). Check the test case documentation for\nspecific parameters that need configuration. Uncomment the auto-generated fixtures and follow this ",(0,o.kt)("a",{parentName:"p",href:"/concepts/fixtures/configure-fixtures"},"example"),", to configure values that are appropriate for your live API target.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Continue this process until either the test plan's state changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"Config Complete"),", or you have enough test cases/suites that are runnable.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remember to ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," your changes to the test plan."))),(0,o.kt)("h2",{id:"download-the-environmentyml-file"},"Download the ",(0,o.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file"),(0,o.kt)("p",null,"Levo generates test cases that check for ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal"},"Horizontal Privilege Abuse"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Vertical"},"Vertical Privilege Abuse")," in your APIs.\nIn order to effectively access and test APIs for these vulnerabilities, Levo requires user ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," (authorization) information."),(0,o.kt)("p",null,"Each auto generated test plan has a ",(0,o.kt)("inlineCode",{parentName:"p"},"environment.yml")," file associated with it, which provides critical authentication/authorization information.\nYou can read more about this file ",(0,o.kt)("a",{parentName:"p",href:"/concepts/authentication/authn-authz"},"here"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," In your test plan, navigate to the ",(0,o.kt)("inlineCode",{parentName:"strong"},"environment.yml")," section, and download this file to your desktop. ")),(0,o.kt)("h2",{id:"configure-the-environmentyml-file"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"h2"},"environment.yml")," file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the instructions ",(0,o.kt)("a",{parentName:"li",href:"/concepts/authentication/supported-auth-methods"},"here")," to configure appropriate user credentials/roles required to effectively test your live API endpoints."),(0,o.kt)("li",{parentName:"ol"},"Save your changes")),(0,o.kt)("h2",{id:"copy-the-test-plans-levo-resource-name-lrn"},"Copy the test plan's Levo Resource Name (LRN)"),(0,o.kt)("p",null,"From the test plans screen ",(0,o.kt)("strong",{parentName:"p"},"copy")," the LRN (Levo Resource Name) of your test plan to the clipboard."),(0,o.kt)("h4",{id:"the-next-section-describes-running-your-test-plan-using-the-levo-cli"},"The next section describes running your test plan using the Levo CLI."))}f.isMDXComponent=!0}}]);