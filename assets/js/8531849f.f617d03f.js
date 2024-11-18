"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5721],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:0,keywords:["API Security","eBPF","API Observability"],description:"Understand key concepts in Levo.ai's API observability. Learn about sensors, satellites, and API catalog creation for effective API management and security."},l="Key Concepts",c={unversionedId:"guides/key-concepts",id:"guides/key-concepts",title:"Key Concepts",description:"Understand key concepts in Levo.ai's API observability. Learn about sensors, satellites, and API catalog creation for effective API management and security.",source:"@site/docs/guides/key-concepts.md",sourceDirName:"guides",slug:"/guides/key-concepts",permalink:"/guides/key-concepts",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/key-concepts.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,keywords:["API Security","eBPF","API Observability"],description:"Understand key concepts in Levo.ai's API observability. Learn about sensors, satellites, and API catalog creation for effective API management and security."},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/guides/"},next:{title:"Frictionless API Observability",permalink:"/guides/api-observability"}},p={},u=[{value:"eBPF Sensor",id:"ebpf-sensor",level:2},{value:"Satellite",id:"satellite",level:2},{value:"Your Data Stays with You!",id:"your-data-stays-with-you",level:3},{value:"API Catalog",id:"api-catalog",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-concepts"},"Key Concepts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API Observability",src:n(4592).Z,width:"853",height:"465"})),(0,o.kt)("p",null,"API Observability involves three components - a) Sensor, b) Satellite, and c) API Catalog."),(0,o.kt)("h2",{id:"ebpf-sensor"},"eBPF Sensor"),(0,o.kt)("p",null,"The sensor is a userspace process, that uses ",(0,o.kt)("a",{parentName:"p",href:"https://ebpf.io"},"Extended Berkeley Packet Filters (eBPF)")," to passively capture API traffic (full HTTP payloads) from Linux workloads. The sensor works on bare metal, virtual machine, and container formats."),(0,o.kt)("p",null,"eBPF is used by all the modern observability & security vendors, including ",(0,o.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/product/network-monitoring/network-performance-monitoring/"},"DATADOG"),", ",(0,o.kt)("a",{parentName:"p",href:"https://newrelic.com/platform/kubernetes-pixie"},"new relic"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.paloaltonetworks.com/prisma/cloud"},"paloalto networks"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.aquasec.com/products/tracee/"},"aqua"),", ",(0,o.kt)("a",{parentName:"p",href:"https://sysdig.com/"},"sysdig"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cilium.io/"},"Cilium"),", etc."),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html"},"network traffic mirroring")," the sensor works at the Linux host level."),(0,o.kt)("p",null,"The sensor does not require any modifications to your application workloads. Absolutely no SDKs, no code changes, no configuration changes, no sidecars, and no runtime agents."),(0,o.kt)("p",null,"The sensor is not ",(0,o.kt)("em",{parentName:"p"},"inline")," with the application workloads and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"will not"))," impact the workload. API traffic can be aggressively sampled in high traffic environments, to limit CPU consumption by the sensor. "),(0,o.kt)("p",null,"The sensor can be run in both production and pre-production environments. Captured API Traces (HTTP traffic) is sent to the Satellite component, for data anonymization, schema generation, and sensitive data detection/annotation."),(0,o.kt)("h2",{id:"satellite"},"Satellite"),(0,o.kt)("p",null,"The Satellite runs within the customer premises or VPC, and can be run alongside application workloads, or in a separate host."),(0,o.kt)("p",null,"It uses sampled API traffic (API Traces) from the Sensor to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Auto discover API endpoints"),(0,o.kt)("li",{parentName:"ol"},"Derive (OpenAPI) schema for the discovered API endpoints"),(0,o.kt)("li",{parentName:"ol"},"Detect sensitive data (PII, PSI, etc.) present in API data"),(0,o.kt)("li",{parentName:"ol"},"Annotate the derived schema with sensitive data types"),(0,o.kt)("li",{parentName:"ol"},"Send the API schema to Levo SaaS for API Catalog building")),(0,o.kt)("h3",{id:"your-data-stays-with-you"},"Your Data Stays with You!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Privacy Preserving",src:n(9586).Z,width:"1735",height:"775"})),(0,o.kt)("p",null,"Privacy preserving technology ensures your API data stays with you."),(0,o.kt)("p",null,"Typical API observability solutions, will ingest all your API data into their SaaS, and put the burden of redacting sensitive customer data on you."),(0,o.kt)("p",null,"Levo\u2019s privacy preserving technology, does not ingest any of your API data into SaaS. Levo discovers and documents your APIs using only data type inferences performed in the Satellite."),(0,o.kt)("h2",{id:"api-catalog"},"API Catalog"),(0,o.kt)("p",null,"Levo SaaS aggregates data received from the Satellite to create an ",(0,o.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/"},"API Catalog"),"."),(0,o.kt)("p",null,"The API Catalog is the source of truth to answer the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What APIs do I have in my environment?"),(0,o.kt)("li",{parentName:"ul"},"Which APIs are exposed externally?"),(0,o.kt)("li",{parentName:"ul"},"What is the schema for my APIs?"),(0,o.kt)("li",{parentName:"ul"},"Which APIs process sensitive data (PII, PSI, etc.)?"),(0,o.kt)("li",{parentName:"ul"},"Which users, via which roles/scopes are accessing, which API endpoints?"),(0,o.kt)("li",{parentName:"ul"},"Are my API schema's drifting?")),(0,o.kt)("p",null,"The API Catalog also serves as the primary input for Levo's API ",(0,o.kt)("a",{parentName:"p",href:"https://docs.levo.ai/test-your-app/test-app-security/choices"},"security")," & ",(0,o.kt)("a",{parentName:"p",href:"https://docs.levo.ai/test-your-app/test-app-schema-conformance"},"contract")," testing features."))}m.isMDXComponent=!0},4592:function(e,t,n){t.Z=n.p+"assets/images/api-obs-catalog-cb86cdf976a0d6a7de2a06938846f9e5.svg"},9586:function(e,t,n){t.Z=n.p+"assets/images/api-trace-anonymization-40e014cb77ac5724d036cdbcb83ae57a.svg"}}]);