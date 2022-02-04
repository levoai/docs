"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1473],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Test Plans",p={unversionedId:"concepts/test-plans",id:"concepts/test-plans",isDocsHomePage:!1,title:"Test Plans",description:"Autogenerated Test Plans are tailor-made for each API (and it's associated endpoints).",source:"@site/docs/concepts/test-plans.md",sourceDirName:"concepts",slug:"/concepts/test-plans",permalink:"/concepts/test-plans",editUrl:"https://github.com/levoai/docs/edit/main/docs/concepts/test-plans.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"API Catalog",permalink:"/concepts/api-catalog"},next:{title:"Test Fixtures for API Parameters",permalink:"/concepts/fixtures/test-fixtures"}},l=[],u={toc:l};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-plans"},"Test Plans"),(0,o.kt)("p",null,"Autogenerated ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Plans")," are tailor-made for each API (and it's associated endpoints)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3384).Z})),(0,o.kt)("p",null,"Test Plans can be generated for APIs present in either the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," (API Catalog) groupings."),(0,o.kt)("p",null,"A Test Plan is structured as show below.\n",(0,o.kt)("img",{src:n(6651).Z})),(0,o.kt)("p",null,"A Test plan is comprised of ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Suites"),". A Test Suite is focussed on a single API endpoint, and comprises of a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Cases"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Case")," has a singular objective, and tests the specific API endpoint for a specific vulnerability. For example, test the API endpoint for a ",(0,o.kt)("a",{parentName:"p",href:"/vulnerabilities/v1/OWASP-WEB-10/A10-SSRF"},"SSRF")," vulnerability, or an authorization bypass vulnerability."))}f.isMDXComponent=!0},6651:function(e,t,n){t.Z=n.p+"assets/images/test-plan-structure-1-cd9364d2f1ec78ddfda647b29b3116b6.png"},3384:function(e,t,n){t.Z=n.p+"assets/images/test-plans-54903b38946e87f1892a8445cccf1e3b.png"}}]);