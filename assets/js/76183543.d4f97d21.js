"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8727],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="How does Levo work?",c={unversionedId:"how-it-works",id:"how-it-works",title:"How does Levo work?",description:"Observe",source:"@site/docs/how-it-works.md",sourceDirName:".",slug:"/how-it-works",permalink:"/how-it-works",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/how-it-works.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What value does Levo provide?",permalink:"/top-benefits"},next:{title:"Quickstart",permalink:"/quickstart"}},p={},u=[{value:"Observe",id:"observe",level:2},{value:"Model",id:"model",level:2},{value:"Generate",id:"generate",level:2},{value:"Execute",id:"execute",level:2},{value:"Actionable Insights",id:"actionable-insights",level:2}],d={toc:u};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-does-levo-work"},"How does Levo work?"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5698).Z,width:"2000",height:"1125"})),(0,a.kt)("h2",{id:"observe"},"Observe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"You cannot protect what you cannot see!")," Visibility of APIs is fundamental for API Management, Governance, and Security."),(0,a.kt)("p",null,"Levo provides frictionless API Observability via a no-code and agentless approach. Conventional instrumentation techniques are very intrusive, and require DevOPs teams to add runtime agents, SDKs, or sidecar proxies to their running applications/services. This causes unnecessary friction between DevOPs and SecOps teams."),(0,a.kt)("p",null,"Levo uses an ",(0,a.kt)("a",{parentName:"p",href:"https://ebpf.io/"},"eBPF")," sensor to passively, and transparently capture all API traffic in pre-production and production environments. The eBPF sensor is ",(0,a.kt)("em",{parentName:"p"},"not")," inline with application traffic, and will not impact the performance of the applications being instrumented."),(0,a.kt)("p",null,"Further, unlike API anomaly detection solutions that cannot sample API traffic, Levo can sample traffic aggressively, leading to optimized resource consumption by the eBPF sensor."),(0,a.kt)("p",null,"The captured API traffic is anonymized (only API metadata/schema is extracted), and then sent to Levo SaaS. Levo SaaS only consumes API schema, and does not ingest any of your actual API data."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"observe")," phase is optional, if you already have OpenAPI specifications for your APIs. Levo can simply import your OpenAPI and Swagger files."),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)("p",null,"API metadata consumed from your runtime environments is used to build a behavior model of your APIs."),(0,a.kt)("p",null,"The Model comprises of a comprehensive API catalog. The API Catalog is the auto discovered, and auto documented ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI Specification")," of all the API endpoints present in your runtime environments."),(0,a.kt)("p",null,"The API Catalog provides continuous visibility to enable proper API Management & Governance."),(0,a.kt)("h2",{id:"generate"},"Generate"),(0,a.kt)("p",null,"The model generates tailored security test plans for all your auto discovered API endpoints. The test plans are analogous to ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/collection/"},"Postman Collections"),"."),(0,a.kt)("p",null,"The test plans provide comprehensive coverage for business logic, authentication/authorization, and OWASP Top 10 vulnerabilities that are specific to APIs."),(0,a.kt)("h2",{id:"execute"},"Execute"),(0,a.kt)("p",null,"The test plans execute in CI/CD ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates?view=azure-devops"},"gates")," via Levo's ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runner"),", similar to how DevOPs teams run functional tests (unit, integration, etc.)."),(0,a.kt)("p",null,"Levo provides Test Runner plugins for popular CI/CD vendors. The Test Runner is packaged as a Docker image."),(0,a.kt)("p",null,"Results from the test plan execution are emitted to both CI/CD logs and Levo SaaS."),(0,a.kt)("h2",{id:"actionable-insights"},"Actionable Insights"),(0,a.kt)("p",null,"Levo provides high fidelity, low noise, and jargon free (vulnerability) findings that are targeted for direct consumption by development teams."),(0,a.kt)("p",null,"Findings have detailed API traffic logs that aid in better comprehension, and problem reproduction."),(0,a.kt)("p",null,"Levo provides contextual remediation help for development teams to address issues via self service."))}f.isMDXComponent=!0},5698:function(e,t,n){t.Z=n.p+"assets/images/how-it-works-413de4846284d371effaeb48f35282e3.jpg"}}]);