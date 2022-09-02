"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1005],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3924:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],s={},l="In Page Banner Information Leak",c={unversionedId:"Baseline/in-page-banner-information-leak",id:"version-v1/Baseline/in-page-banner-information-leak",title:"In Page Banner Information Leak",description:"Page Banner Info Leak",source:"@site/vulnerabilities_versioned_docs/version-v1/Baseline/in-page-banner-information-leak.md",sourceDirName:"Baseline",slug:"/Baseline/in-page-banner-information-leak",permalink:"/vulnerabilities/v1/Baseline/in-page-banner-information-leak",draft:!1,tags:[],version:"v1",frontMatter:{},sidebar:"version-v1/tutorialSidebar",previous:{title:"Information Leak Via 'Server' HTTP Response Header",permalink:"/vulnerabilities/v1/Baseline/http-server-response-header"},next:{title:"Information Disclosure - Debug Error Messages",permalink:"/vulnerabilities/v1/Baseline/information-disclosure-debug-error-messages"}},p={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"When is this test case applicable?",id:"when-is-this-test-case-applicable",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What is the solution?",id:"what-is-the-solution",level:3}],f={toc:u};function d(e){var n=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"in-page-banner-information-leak"},"In Page Banner Information Leak"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Page Banner Info Leak",src:t(815).Z,width:"858",height:"1216"})),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"The API endpoint or server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use."),(0,a.kt)("p",null,"For example, a common 404 response from the API/server looks like the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 404 Not Found\nDate: Sat, 04 Nov 2006 15:26:48 GMT\nServer: Apache/2.2.3 (Unix) mod_ssl/2.2.3 OpenSSL/0.9.7g\nContent-Length: 310\nConnection: close\nContent-Type: text/html; charset=iso-8859-1\n...\n<title>404 Not Found</title>\n...\n<address>Apache/2.2.3 (Unix) mod_ssl/2.2.3 OpenSSL/0.9.7g at <host target> Port 80</address>\n...\n")),(0,a.kt)("p",null,"Revealing the type, version, and module information of the API server, enables attackers to try exploiting the server for known/unpatched vulnerabilities."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md"},"OWASP API TOP-10 A7"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/"},"Testing for Error Handling")),(0,a.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,a.kt)("h3",{id:"when-is-this-test-case-applicable"},"When is this test case applicable?"),(0,a.kt)("p",null,"This is applicable for all API endpoints when the ",(0,a.kt)("strong",{parentName:"p"},"Baseline")," security category is enabled in test plans."),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"Responses sent by the API server are analyzed for information disclosure as shown in the example above."),(0,a.kt)("h3",{id:"what-is-the-solution"},"What is the solution?"),(0,a.kt)("p",null,"Configure the API server to prevent such information leaks. For example: Under Tomcat this is done via the 'server' directive and implementation of custom error pages. Under Apache this is done via the 'ServerSignature' and 'ServerTokens' directives."))}d.isMDXComponent=!0},815:function(e,n,t){n.Z=t.p+"assets/images/baseline-vuln-920667aff679114e195da29f965e4d4e.svg"}}]);