"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7727],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||s;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,keywords:["API Security Testing","API Security Test Plan"]},c="Test Plans",p={unversionedId:"security-contract-testing/concepts/test-plans/test-plans",id:"security-contract-testing/concepts/test-plans/test-plans",title:"Test Plans",description:"Autogenerated Test Plans are tailor-made for each API (and it's associated endpoints).",source:"@site/docs/security-contract-testing/concepts/test-plans/test-plans.md",sourceDirName:"security-contract-testing/concepts/test-plans",slug:"/security-contract-testing/concepts/test-plans/",permalink:"/security-contract-testing/concepts/test-plans/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-contract-testing/concepts/test-plans/test-plans.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["API Security Testing","API Security Test Plan"]},sidebar:"tutorialSidebar",previous:{title:"Metadata.yml file",permalink:"/security-contract-testing/concepts/api-catalog/metadata-yml"},next:{title:"Test Plan Types",permalink:"/security-contract-testing/concepts/test-plans/test-plan-types"}},l={},u=[],f={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-plans"},"Test Plans"),(0,s.kt)("p",null,"Autogenerated ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Plans")," are tailor-made for each API (and it's associated endpoints)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"API Security Test Plan",src:n(8502).Z,width:"681",height:"551"})),(0,s.kt)("p",null,"Test Plans can be generated for APIs present in either the ",(0,s.kt)("inlineCode",{parentName:"p"},"Application")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Service")," (API Catalog) groupings."),(0,s.kt)("p",null,"A Test Plan is structured as show below.\n",(0,s.kt)("img",{src:n(738).Z,width:"710",height:"328"})),(0,s.kt)("p",null,"A Test plan is comprised of ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Suites"),". A Test Suite is focussed on a single API endpoint, and comprises of a set of ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Cases"),"."),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"Test Case")," has a singular objective, and tests the specific API endpoint for a specific vulnerability. For example, test the API endpoint for a ",(0,s.kt)("a",{parentName:"p",href:"/vulnerabilities/v1/OWASP-WEB-10/A10-SSRF"},"SSRF")," vulnerability, or an authorization bypass vulnerability."))}d.isMDXComponent=!0},738:function(e,t,n){t.Z=n.p+"assets/images/test-plan-structure-1-52ca397a42b4d62ea47c219f83f142bf.svg"},8502:function(e,t,n){t.Z=n.p+"assets/images/test-plans-40af2d303361c99ec297c98018dfd786.svg"}}]);