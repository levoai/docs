"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6047:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],s={},l="Open/Unrestricted URL Redirect Via URL Query Parameter",c={unversionedId:"Baseline/open-redirect",id:"Baseline/open-redirect",title:"Open/Unrestricted URL Redirect Via URL Query Parameter",description:"Open URL Redirect",source:"@site/vulnerabilities/Baseline/open-redirect.md",sourceDirName:"Baseline",slug:"/Baseline/open-redirect",permalink:"/vulnerabilities/next/Baseline/open-redirect",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Serialization Detected",permalink:"/vulnerabilities/next/Baseline/java-serialization-object"},next:{title:"PII Disclosure In Response",permalink:"/vulnerabilities/next/Baseline/pii-disclosure"}},p={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],d={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openunrestricted-url-redirect-via-url-query-parameter"},"Open/Unrestricted URL Redirect Via URL Query Parameter"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open URL Redirect",src:r(5570).Z,width:"858",height:"1216"})),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"An open redirect vulnerability occurs when an API endpoint allows a user to control a redirect or forward to another URL. If the API does not validate untrusted user input, an attacker could supply a URL that redirects an unsuspecting victim from a legitimate domain to an attacker\u2019s phishing site."),(0,a.kt)("p",null,"Attackers exploit open redirects to add credibility to their phishing attacks. Most users see the legitimate, trusted domain, but do not notice the redirection to the phishing site."),(0,a.kt)("p",null,"Although this vulnerability doesn\u2019t always directly impact the legitimate application, the company's reputation can be negatively impacted."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"www.myapi.com/login?redirect_url=/profile")," is an endpoint that uses a redirect query parameter to redirect the browser to the user's profile page, after a successful login."),(0,a.kt)("p",null,"Attacker could you use this capability to lure users to a phishing page that closely resembles the look & feel of ",(0,a.kt)("inlineCode",{parentName:"p"},"www.myapi.com"),", and then manipulate the user to provide credentials etc., leading to a full account takeover."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.snyk.io/lessons/open-redirect/javascript/"},"What is Open Redirect?"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/11-Client-side_Testing/04-Testing_for_Client-side_URL_Redirect"},"Testing for Client-side URL Redirect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cwe.mitre.org/data/definitions/601.html"},"CWE-601"))),(0,a.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,a.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,a.kt)("p",null,"This is applicable for all API endpoints that accept URLs as query parameters, and when the ",(0,a.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"A request is made to the API endpoint with a ",(0,a.kt)("em",{parentName:"p"},"bogus")," URL in the query parameter, whose domain does not match the API's domain. If the API endpoint is deemed vulnerable to ",(0,a.kt)("inlineCode",{parentName:"p"},"Open Redirects"),", if it returns a redirect response (301, 302, 307 HTTP response codes) directed to the bogus URL. "),(0,a.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,a.kt)("p",null,"To avoid the open redirect vulnerability, query parameters containing URLs must be validated (by the API endpoint) before sending 302 HTTP code (redirect) to the client. Implement safe redirect functionality that only redirects to relative URI's, or a list of trusted domains."))}h.isMDXComponent=!0},5570:function(e,t,r){t.Z=r.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);