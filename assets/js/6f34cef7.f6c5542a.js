"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[711],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s="Using your own app to evaluate Levo's schema conformance testing",l={unversionedId:"onboarding/test-app-schema-conformance",id:"onboarding/test-app-schema-conformance",isDocsHomePage:!1,title:"Using your own app to evaluate Levo's schema conformance testing",description:"Ensure your target application is running and note down its URL.",source:"@site/docs/onboarding/test-app-schema-conformance.md",sourceDirName:"onboarding",slug:"/onboarding/test-app-schema-conformance",permalink:"/docs/onboarding/test-app-schema-conformance",editUrl:"https://github.com/levoai/docs/edit/main/docs/onboarding/test-app-schema-conformance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Execute Plan & View Results",permalink:"/docs/onboarding/crapi/execute-plan-view-results"},next:{title:"Use my own App to evaluate Levo's security testing capabilities",permalink:"/docs/onboarding/test-app-security"}},p=[{value:"I use a live URL for my OpenAPI v3 specifications",id:"i-use-a-live-url-for-my-openapi-v3-specifications",children:[],level:2},{value:"I use a local JSON or YAML file my OpenAPI v3 specifications",id:"i-use-a-local-json-or-yaml-file-my-openapi-v3-specifications",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-your-own-app-to-evaluate-levos-schema-conformance-testing"},"Using your own app to evaluate Levo's schema conformance testing"),(0,a.kt)("p",null,"Ensure your target application is running and note down its URL."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," for targets on your local machine."),(0,a.kt)("h2",{id:"i-use-a-live-url-for-my-openapi-v3-specifications"},"I use a live URL for my OpenAPI v3 specifications"),(0,a.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export SCHEMA_URL="<your live schema\'s URL>"\nexport TARGET_URL="<your live target\'s URL>"\n\n# Run all schema conformance tests for all my API operations\nlevo test-conformance --schema $SCHEMA_URL --target-url $TARGET_URL\n\n# Provide custom headers (e.g. Authorization if required)\nlevo test-conformance --schema $SCHEMA_URL --target-url $TARGET_URL -H "Authorization: Bearer <token>"\n\n')),(0,a.kt)("p",null,"Now you can view the test results in the ",(0,a.kt)("a",{parentName:"p",href:"https://levo.ai"},"https://levo.ai")," SaaS console's ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runs")," page."),(0,a.kt)("h2",{id:"i-use-a-local-json-or-yaml-file-my-openapi-v3-specifications"},"I use a local JSON or YAML file my OpenAPI v3 specifications"),(0,a.kt)("p",null,"Levo CLI can accept schemas (OASv3, Swagger, etc.) as a file rather than a live URL. The Levo CLI container, mounts the user's HOME directory (on the host), as readonly directory inside the container."),(0,a.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export SCHEMA_FILE="<your schema file\'s absolute path from the $HOME directory>"\nexport TARGET_URL="<your live target\'s URL>"\n\n# Run all schema conformance tests for all my API operations\nlevo test-conformance --schema $SCHEMA_FILE --target-url $TARGET_URL\n\n# Provide custom headers (e.g. Authorization if required)\nlevo test-conformance --schema $SCHEMA_FILE --target-url $TARGET_URL -H "Authorization: Bearer <token>"\n\n')),(0,a.kt)("p",null,"Now you can view the test results in the ",(0,a.kt)("a",{parentName:"p",href:"https://levo.ai"},"https://levo.ai")," SaaS console's ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runs")," page."))}m.isMDXComponent=!0}}]);