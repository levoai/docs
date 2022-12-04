"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5941],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),s=["components"],a={},l="Missing X-Content-Type-Options Header",p={unversionedId:"Baseline/x-content-type-options-header-missing",id:"version-v1/Baseline/x-content-type-options-header-missing",title:"Missing X-Content-Type-Options Header",description:"Missing X-Content-Type-Options Header",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/x-content-type-options-header-missing.md",sourceDirName:"Baseline",slug:"/Baseline/x-content-type-options-header-missing",permalink:"/vulnerabilities/v1/Baseline/x-content-type-options-header-missing",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Weak Authentication Method",permalink:"/vulnerabilities/v1/Baseline/weak-authentication-method"}},c={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],d={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"missing-x-content-type-options-header"},"Missing X-Content-Type-Options Header"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Missing X-Content-Type-Options Header",src:n(815).Z,width:"858",height:"1216"})),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"The API endpoint or server returned a response without the X-Content-Type-Options header being set correctly."),(0,o.kt)("p",null,"The Anti-MIME-Sniffing header X-Content-Type-Options was not set to \u2019nosniff\u2019. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md"},"OWASP API TOP-10 A7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"},"What does this header do?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/Security_Headers"},"OWASP Security Headers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/693.html"},"CWE-693"))),(0,o.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,o.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,o.kt)("p",null,"This is applicable for all API endpoints when the ",(0,o.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Responses sent by the API server are analyzed for the missing or incorrectly set X-Content-Type-Options header."),(0,o.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,o.kt)("p",null,"Ensure that the API server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all responses. If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the API server to not perform MIME-sniffing."))}h.isMDXComponent=!0},815:function(e,t,n){t.Z=n.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);