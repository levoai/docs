"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[680],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Using your own app to evaluate Levo's schema conformance testing",p={unversionedId:"test-your-app/test-app-schema-conformance",id:"test-your-app/test-app-schema-conformance",isDocsHomePage:!1,title:"Using your own app to evaluate Levo's schema conformance testing",description:"Ensure your target application is running and note down its URL.",source:"@site/docs/test-your-app/test-app-schema-conformance.md",sourceDirName:"test-your-app",slug:"/test-your-app/test-app-schema-conformance",permalink:"/test-your-app/test-app-schema-conformance",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-your-app/test-app-schema-conformance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How do I use Levo with my own applications?",permalink:"/test-your-app/testing-your-own-apps"},next:{title:"Security test my App - Part I",permalink:"/test-your-app/test-app-security/test-app-security-1"}},l=[{value:"I use a live URL for my OpenAPI v3 specifications",id:"i-use-a-live-url-for-my-openapi-v3-specifications",children:[],level:2},{value:"I use a local JSON or YAML file my OpenAPI v3 specifications",id:"i-use-a-local-json-or-yaml-file-my-openapi-v3-specifications",children:[],level:2}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-your-own-app-to-evaluate-levos-schema-conformance-testing"},"Using your own app to evaluate Levo's schema conformance testing"),(0,a.kt)("p",null,"Ensure your target application is running and note down its URL."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," for targets on your local machine."),(0,a.kt)("h2",{id:"i-use-a-live-url-for-my-openapi-v3-specifications"},"I use a live URL for my OpenAPI v3 specifications"),(0,a.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export SCHEMA_URL="<your live schema\'s URL>"\nexport TARGET_URL="<your live target\'s URL>"\n\n# Run all schema conformance tests for all my API operations\nlevo test-conformance --schema $SCHEMA_URL --target-url $TARGET_URL\n\n# Provide custom headers (e.g. Authorization if required)\nlevo test-conformance --schema $SCHEMA_URL --target-url $TARGET_URL -H "Authorization: Bearer <token>"\n\n')),(0,a.kt)("p",null,"Now you can view the test results in the ",(0,a.kt)("a",{parentName:"p",href:"https://levo.ai"},"https://levo.ai")," SaaS console's ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runs")," page."),(0,a.kt)("h2",{id:"i-use-a-local-json-or-yaml-file-my-openapi-v3-specifications"},"I use a local JSON or YAML file my OpenAPI v3 specifications"),(0,a.kt)("p",null,"Levo CLI can accept schemas (OASv3, Swagger, etc.) as a file rather than a live URL. The Levo CLI container, mounts the user's HOME directory (on the host), as readonly directory inside the container."),(0,a.kt)("p",null,"Execute the following in the shell where you installed Levo CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export SCHEMA_FILE="<your schema file\'s absolute path from the $HOME directory>"\nexport TARGET_URL="<your live target\'s URL>"\n\n# Run all schema conformance tests for all my API operations\nlevo test-conformance --schema $SCHEMA_FILE --target-url $TARGET_URL\n\n# Provide custom headers (e.g. Authorization if required)\nlevo test-conformance --schema $SCHEMA_FILE --target-url $TARGET_URL -H "Authorization: Bearer <token>"\n\n')),(0,a.kt)("p",null,"Now you can view the test results in the ",(0,a.kt)("a",{parentName:"p",href:"https://levo.ai"},"https://levo.ai")," SaaS console's ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Runs")," page."))}m.isMDXComponent=!0}}]);