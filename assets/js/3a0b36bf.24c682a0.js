"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3328],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:1},l="Test Fixtures for API Parameters",p={unversionedId:"security-contract-testing/concepts/test-plans/fixtures/test-fixtures",id:"security-contract-testing/concepts/test-plans/fixtures/test-fixtures",title:"Test Fixtures for API Parameters",description:"What are test fixtures?",source:"@site/docs/security-contract-testing/concepts/test-plans/fixtures/test-fixtures.md",sourceDirName:"security-contract-testing/concepts/test-plans/fixtures",slug:"/security-contract-testing/concepts/test-plans/fixtures/test-fixtures",permalink:"/security-contract-testing/concepts/test-plans/fixtures/test-fixtures",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-contract-testing/concepts/test-plans/fixtures/test-fixtures.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Environment.yml file",permalink:"/security-contract-testing/concepts/test-plans/env-yml"},next:{title:"Configuring Test Fixtures",permalink:"/security-contract-testing/concepts/test-plans/fixtures/configure-fixtures"}},u={},c=[{value:"What are test fixtures?",id:"what-are-test-fixtures",level:2},{value:"Levo&#39;s Test Fixtures",id:"levos-test-fixtures",level:2},{value:"Test Fixture Format",id:"test-fixture-format",level:2},{value:"Auto Generation of Fixtures",id:"auto-generation-of-fixtures",level:2}],f={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-fixtures-for-api-parameters"},"Test Fixtures for API Parameters"),(0,a.kt)("h2",{id:"what-are-test-fixtures"},"What are test fixtures?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test_fixture#Software"},"Software test fixtures")," initialize test functions. They provide a fixed baseline so that tests execute reliably and produce consistent, repeatable, results."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/junit-team/junit4/wiki/Test-fixtures"},"JUnit Fixtures"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/6.2.x/fixture.html"},"PyTest Fixtures")," are pretty commonly used by modern development teams."),(0,a.kt)("p",null,"Initialization may setup services, state, or provide seed values to (mandatory & optional) API input parameters, so that the API invocation succeeds."),(0,a.kt)("p",null,"For example, effective testing of the API endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /ride_receipts/{receipt_id}"),", might require a\nknown and valid value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"{receipt_id}")," parameter, which is present in the receipts database."),(0,a.kt)("p",null,"Without this known seed value, the test that exercises this API endpoint might not get a proper response from the API endpoint. Fixtures allow providing this seed value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"{receipt_id}")," parameter."),(0,a.kt)("h2",{id:"levos-test-fixtures"},"Levo's Test Fixtures"),(0,a.kt)("p",null,"Levo provides fixtures for configuring seed values for various API endpoint parameters. These fixtures are available at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Case")," level, ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Suite")," level, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Plan")," level as shown below."),(0,a.kt)("p",null,"Fixtures at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Suite")," level will automatically apply to all ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Cases")," within that ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Suite"),". Fixtures ate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Plan")," level will apply to all ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Suites"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5392).Z,width:"817",height:"190"})),(0,a.kt)("h2",{id:"test-fixture-format"},"Test Fixture Format"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6411).Z,width:"3058",height:"1712"})),(0,a.kt)("p",null,"Above is an example of an API endpoint that has ",(0,a.kt)("inlineCode",{parentName:"p"},"{vehicleId}")," as a path parameter. This endpoint checks if the vehicle specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"{vehicleId}")," is present in it's database."),(0,a.kt)("p",null,"If the specified vehicle is present, it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")," and the vehicle details. If not present it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"404 Not Found")," and an appropriate error message."),(0,a.kt)("p",null,"In order to effectively test this endpoint for various security vulnerabilities, we need to know the ID of at least one legitimate vehicle present in the API server's database. Using random values for ",(0,a.kt)("inlineCode",{parentName:"p"},"{vehicleId}")," will not exercise all code paths within the endpoint's implementation, largely resulting in 404 responses."),(0,a.kt)("p",null,"Below is an example of a test fixture that allows specifying a legitimate ",(0,a.kt)("inlineCode",{parentName:"p"},"{vehicleId}")," value to be used when testing the endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@levo.fixture(name="vehicleId", location="path")\ndef vehicleid():\n    return "649acfac-10ea-43b3-907f-752e86eff2b6"\n')),(0,a.kt)("p",null,"While the example above returns a hardcoded value, the fixture could be coded to perform a database lookup, or make an API call to get the appropriate value."),(0,a.kt)("h2",{id:"auto-generation-of-fixtures"},"Auto Generation of Fixtures"),(0,a.kt)("p",null,"Levo auto generates test fixtures for various mandatory API parameters, and configures them with example values provided in the OpenAPI schema. Skeleton fixtures are generated in cases where example values are not available."),(0,a.kt)("p",null,"You can always modify and customize the auto generated fixtures to suit specific needs."))}d.isMDXComponent=!0},5392:function(e,t,n){t.Z=n.p+"assets/images/fixtures-1bd1f576592f3457047858b6c0d67494.svg"},6411:function(e,t,n){t.Z=n.p+"assets/images/get-vehicle-id-ep-2f2eb0080564b00e5aadaf069e3bc967.png"}}]);