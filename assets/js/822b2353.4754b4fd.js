"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5201],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},c="Configuring Test Fixtures",u={unversionedId:"security-contract-testing/concepts/test-plans/fixtures/configure-fixtures",id:"security-contract-testing/concepts/test-plans/fixtures/configure-fixtures",title:"Configuring Test Fixtures",description:"Test Case Level Fixtures",source:"@site/docs/security-contract-testing/concepts/test-plans/fixtures/configure-fixtures.md",sourceDirName:"security-contract-testing/concepts/test-plans/fixtures",slug:"/security-contract-testing/concepts/test-plans/fixtures/configure-fixtures",permalink:"/security-contract-testing/concepts/test-plans/fixtures/configure-fixtures",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-contract-testing/concepts/test-plans/fixtures/configure-fixtures.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Test Fixtures for API Parameters",permalink:"/security-contract-testing/concepts/test-plans/fixtures/test-fixtures"},next:{title:"CLI - Test Runner",permalink:"/security-contract-testing/concepts/test-runner"}},l={},p=[{value:"Test Case Level Fixtures",id:"test-case-level-fixtures",level:2},{value:"Steps to Configure Fixture",id:"steps-to-configure-fixture",level:3},{value:"You are done!",id:"you-are-done",level:4}],f={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-test-fixtures"},"Configuring Test Fixtures"),(0,a.kt)("h2",{id:"test-case-level-fixtures"},"Test Case Level Fixtures"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2779).Z,width:"1261",height:"726"})),(0,a.kt)("p",null,"Above is an example of a test case for the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /identity/api/v2/vehicle/{vehicleId}/location"),"."),(0,a.kt)("p",null,"This endpoint requires a valid value for path parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"{vehicleId}")," for successful invocation. This requirement\nis shown in the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Parameters"))," table in the test case. ",(0,a.kt)("inlineCode",{parentName:"p"},"Not Bound")," indicates that a valid value is required to execute\nthis test case."),(0,a.kt)("p",null,"Levo autogenerates fixtures for these required API parameters. These autogenerated fixtures are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters.py")," code block of the test case (see below)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6124).Z,width:"1268",height:"580"})),(0,a.kt)("p",null,"Here is a zoom in view of the autogenerated (commented-out) fixture for ",(0,a.kt)("inlineCode",{parentName:"p"},"vehicleId"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#@levo.fixture(name="vehicleId", location="path")\n#def vehicleid():\n#    return "Enter Your Value Here."\n#\n')),(0,a.kt)("h3",{id:"steps-to-configure-fixture"},"Steps to Configure Fixture"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Block select the fixture code in the editor, and use ",(0,a.kt)("inlineCode",{parentName:"li"},"CMD + /")," to uncomment the fixture code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@levo.fixture(name="vehicleId", location="path")\ndef vehicleid():\n    return "Enter Your Value Here."\n\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Now enter a value for the ",(0,a.kt)("inlineCode",{parentName:"li"},"vehicleId")," that is valid for your live API endpoint that you want to test.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@levo.fixture(name="vehicleId", location="path")\ndef vehicleid():\n    return "649acfac-10ea-43b3-907f-752e86eff2b6"\n')),(0,a.kt)("p",null,"In the above example ",(0,a.kt)("inlineCode",{parentName:"p"},"649acfac-10ea-43b3-907f-752e86eff2b6")," is the value that will be used for ",(0,a.kt)("inlineCode",{parentName:"p"},"vehicleId"),",\nwhen executing this test case against a live API target."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Remember to save the changes you made.")),(0,a.kt)("h4",{id:"you-are-done"},"You are done!"))}d.isMDXComponent=!0},6124:function(e,t,n){t.Z=n.p+"assets/images/test-case-api-param-fixture-7effbad51009a66dea7200bbf04b4d93.png"},2779:function(e,t,n){t.Z=n.p+"assets/images/test-case-unbound-api-param-dc31aac98086d3d0639de0a3c07196d0.png"}}]);