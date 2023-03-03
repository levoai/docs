"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5261],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],s={},l="Cookie Poisoning Via Query/Body Parameters",c={unversionedId:"Baseline/cookie-poisoning",id:"version-v1/Baseline/cookie-poisoning",title:"Cookie Poisoning Via Query/Body Parameters",description:"Cookie Poisoning",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/cookie-poisoning.md",sourceDirName:"Baseline",slug:"/Baseline/cookie-poisoning",permalink:"/vulnerabilities/v1/Baseline/cookie-poisoning",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Cookie Set Without HttpOnly Flag",permalink:"/vulnerabilities/v1/Baseline/cookie-no-httponly-flag"},next:{title:"Cookie Without Secure Flag",permalink:"/vulnerabilities/v1/Baseline/cookie-without-secure-flag"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],h={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cookie-poisoning-via-querybody-parameters"},"Cookie Poisoning Via Query/Body Parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cookie Poisoning",src:n(815).Z,width:"858",height:"1216"})),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"Cookie Poisoning is a vulnerability caused when client provided parameters (query, and body parameters) are used by the API server to set cookie values."),(0,r.kt)("p",null,"For example, Bob is using an online shopping website, but is unable to afford the final checkout price of $100. Upon viewing all the cookies contained within his browser, Bob realizes that there is a cookie with a key named ",(0,r.kt)("inlineCode",{parentName:"p"},"checkout_price")," which was being sent to the server for each transaction that was made."),(0,r.kt)("p",null,"He notices that the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkout_price")," cookie is being set by a URL query parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_total"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /transact?transaction_total={dollar_amount}")," API call."),(0,r.kt)("p",null,"Bob decides to manipulate the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkout_price")," cookie, by calling the API with ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /transact?transaction_total=-100"),".\nThis results in his final checkout price of $0.00/."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cs.brown.edu/courses/csci1660/wiki/attacks/Cookie-Poisoning/"},"Cookie Poisoning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md"},"API A8 - Injection"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/20.html"},"CWE-20"))),(0,r.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,r.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,r.kt)("p",null,"This is applicable for all API endpoints that allow cookie names/values to be controlled by user input, and when the ",(0,r.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,r.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"User input provided for HTTP query/body parameters are compared to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Set-Coookie")," values returned by the API endpoint. A potential vulnerability is raised, if either the cookie name or value matches the user supplied input, "),(0,r.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,r.kt)("p",null,"Do not allow user input to control cookie names and values."))}d.isMDXComponent=!0},815:function(e,t,n){t.Z=n.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);