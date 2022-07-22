"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8471],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={},s="Web A6 - Log4J Remote Code Execution",u={unversionedId:"OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE",id:"OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE",title:"Web A6 - Log4J Remote Code Execution",description:"LOG4J",source:"@site/vulnerabilities/OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE.md",sourceDirName:"OWASP-WEB-10/A6-Vulnerable-Components",slug:"/OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE",permalink:"/vulnerabilities/next/OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web A6 - Vulnerable and Outdated Components",permalink:"/vulnerabilities/next/OWASP-WEB-10/A6-Vulnerable-Components/A6-index"},next:{title:"Web A10 - Server Side Request Forgery",permalink:"/vulnerabilities/next/OWASP-WEB-10/A10-SSRF"}},c={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What is the solution?",id:"what-is-the-solution",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-a6---log4j-remote-code-execution"},"Web A6 - Log4J Remote Code Execution"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LOG4J",src:n(8731).Z,width:"890",height:"705"})),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"This vulnerability arises due to high level reasons listed ",(0,o.kt)("a",{parentName:"p",href:"/vulnerabilities/next/OWASP-WEB-10/A6-Vulnerable-Components/A6-index"},"here"),"."),(0,o.kt)("p",null,"Log4J is a widely used java based logging library. It has a known vulnerability that allows an attacker to download malicious code into the Log4J component, which leads to remote code execution."),(0,o.kt)("p",null,"The exact steps of this attack is described in the diagram above."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/117.html"},"CWE-117: Improper Output Neutralization for Logs")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/security.html"},"Log4J Security Vulnerbilities")),(0,o.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,o.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,o.kt)("p",null,"Applies to all API endpoints that consume user supplied input."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The input parameter(s) within the API endpoint, are injected with malicious strings (Log4J injection strings. See diagram above)."),(0,o.kt)("p",null,"This malicious string refers to a remote server controlled by Levo. This remote server is called the ",(0,o.kt)("inlineCode",{parentName:"p"},"remote responder"),"."),(0,o.kt)("p",null,"If this malicious string is logged via a vulnerable Log4J library, the library is tricked into contacting the remote responder controlled by Levo. "),(0,o.kt)("p",null,"Levo's remote responder provides confirmation that the attack launched by the test case was successful."),(0,o.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upgrade all Log4J libraries to the latest version that has all security patches for this vulnerability.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Whitelist outbound traffic from your services to only legitimate destinations (URLs)."))))}h.isMDXComponent=!0},8731:function(e,t,n){t.Z=n.p+"assets/images/A6-Log4J-RCE-9e48f2e59504f56a84f3a65c18ddf74a.svg"}}]);