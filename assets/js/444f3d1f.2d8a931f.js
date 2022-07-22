"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8582],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4112:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={},l="Web A10 - Server Side Request Forgery",c={unversionedId:"OWASP-WEB-10/A10-SSRF",id:"version-v1/OWASP-WEB-10/A10-SSRF",title:"Web A10 - Server Side Request Forgery",description:"SSRF",source:"@site/vulnerabilities_versioned_docs/version-v1/OWASP-WEB-10/A10-SSRF.md",sourceDirName:"OWASP-WEB-10",slug:"/OWASP-WEB-10/A10-SSRF",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A10-SSRF",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Web A6 - Log4J Remote Code Execution",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A6-Vulnerable-Components/A6-Log4J-RCE"},next:{title:"API Schema / Contract Non-Conformance",permalink:"/vulnerabilities/v1/Miscellaneous/schema-conformance"}},u={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What is the solution?",id:"what-is-the-solution",level:2}],h={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web-a10---server-side-request-forgery"},"Web A10 - Server Side Request Forgery"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SSRF",src:r(2699).Z,width:"915",height:"351"})),(0,i.kt)("h2",{id:"what-is-it"},"What is it?"),(0,i.kt)("p",null,"Server-side request forgery (also known as SSRF) is a security vulnerability that allows an attacker to induce the server-side application to make HTTP requests to an arbitrary domain of the attacker's choosing."),(0,i.kt)("p",null,"In a typical SSRF attack, the attacker might cause the server to make a connection to internal-only services within the organization's infrastructure. In other cases, they may be able to force the server to connect to arbitrary external systems, potentially leaking sensitive data such as authorization credentials."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/918.html"},"MITRE CWE-918"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/"},"OWASP Top 10 - A10"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html"},"OWASP - SSRF Prevention Cheat Sheet")),(0,i.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,i.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API endpoints that take client-supplied input specifying URLs, files, or other API endpoints")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The parameter(s) within the API endpoint, which take URLs (or files, or other API endpoints) as input, are injected with malicious data. The malicious data is typically a URL, that references an internal resource that should not be exposed externally (e.g. AWS instance meta data)."),(0,i.kt)("li",{parentName:"ol"},"If the API endpoint returns the internal resource, the API is deemed vulnerable to SSRF.")),(0,i.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sanitize all client-supplied input by creating a list of trusted URLs (lists of hosts or a regex). Use a whitelist approach to limit what URLs (or files, or other API endpoints) can be specified as inputs."),(0,i.kt)("li",{parentName:"ul"},"Restrict supported protocols in your web application. Disable any unused URL schemas. For example ftp://, dict://, file://, gopher://, etc."),(0,i.kt)("li",{parentName:"ul"},"With microservice architectures, communication between all internal services should be authenticated."),(0,i.kt)("li",{parentName:"ul"},"AWS: IMDSv2 is an additional defense mechanism for AWS that mitigates some instances of SSRF if you are using a cloud environment. Migrate to IMDSv2 and disable old IMDSv1. Check out the AWS ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html"},"documentation")," for more details.")))}d.isMDXComponent=!0},2699:function(e,t,r){t.Z=r.p+"assets/images/A10-SSRF-e4c157a92f98601945b634f57ecd6292.svg"}}]);