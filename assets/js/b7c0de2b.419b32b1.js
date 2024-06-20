"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6588],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1262:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(2389);function l(e){var t=e.children,n=e.fallback;return(0,r.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):null!=n?n:null}},3858:function(e,t,n){n.r(t),n.d(t,{DownloadMainTF:function(){return m},assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(1262),o=["components"],s={id:"install-api-portal",title:"Install API Portal",sidebar_label:"Install API Portal",sidebar_position:7},p=void 0,u={unversionedId:"install-api-portal",id:"install-api-portal",title:"Install API Portal",description:"Levo's API Portal is a powerful tool for API documentation and insight generation. Here's how it helps developers:",source:"@site/docs/install-api-portal.mdx",sourceDirName:".",slug:"/install-api-portal",permalink:"/install-api-portal",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-api-portal.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"install-api-portal",title:"Install API Portal",sidebar_label:"Install API Portal",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Install Code Analysis Tools",permalink:"/install-code-analysis-tools"},next:{title:"Running Tests from Catalog",permalink:"/security-testing/catalog-tests"}},c={},d=[{value:"Empower Developers:",id:"empower-developers",level:3},{value:"Improve Customer Experience:",id:"improve-customer-experience",level:3},{value:"Installation",id:"installation",level:2},{value:"Docker Installation",id:"docker-installation",level:3},{value:"Pre-requisites",id:"pre-requisites",level:4},{value:"Installation Steps",id:"installation-steps",level:4},{value:"Install via Helm Chart",id:"install-via-helm-chart",level:3},{value:"Pre-requisites",id:"pre-requisites-1",level:4},{value:"Installation Steps",id:"installation-steps-1",level:4},{value:"Creating a Task Definition in your AWS Account using Terraform.",id:"creating-a-task-definition-in-your-aws-account-using-terraform",level:3}];function m(){return(0,l.kt)(i.Z,{fallback:(0,l.kt)("div",null,"Loading..."),mdxType:"BrowserOnly"},(function(){return(0,l.kt)("a",{href:window.location.protocol+"//"+window.location.host+"/artifacts/apiportal/main.tf",download:!0}," main.tf ")}))}var v={toc:d,DownloadMainTF:m};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Levo's API Portal")," is a powerful tool for API documentation and insight generation. Here's how it helps developers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Clear API Documentation:")," It offers clean, interactive documentation that helps developers understand APIs quickly and effectively."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Interactive API Explorer:")," With it's interactive API explorer, developers can explore APIs, and understand the request and responses associated with them."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Versioning and Change Management:")," The API-Portal simplifies versioning and change management processes, ensuring developers always have access to the latest API documentation and updates.")),(0,l.kt)("p",null,"By leveraging Levo's API Portal, developers can gain deep insights into their APIs and provide exceptional documentation experiences for their users."),(0,l.kt)("h3",{id:"empower-developers"},"Empower Developers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Centralized access:")," Streamline API discovery and exploration with a single source for all your APIs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Comprehensive documentation:")," Auto-generated documentation directly from the OpenAPI Schema, providing clear and consistent information about every API endpoint, parameter, and response."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Search and filter:")," Easily find relevant APIs based on keywords, tags, or categories, saving developers time and effort.")),(0,l.kt)("h3",{id:"improve-customer-experience"},"Improve Customer Experience:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Self-service portal:")," Empower developers to independently find and integrate with your APIs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Reduced onboarding time:")," Get developers started quickly with comprehensive resources and support."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Increased developer satisfaction:")," Improve developer experience and foster a thriving API community."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Enhanced communication:")," Facilitate clear communication between you and your API users.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"docker-installation"},"Docker Installation"),(0,l.kt)("h4",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker Engine version ",(0,l.kt)("inlineCode",{parentName:"li"},"18.03.0")," and above."),(0,l.kt)("li",{parentName:"ul"},"Get the refresh token from the Levo App User Profile page.")),(0,l.kt)("h4",{id:"installation-steps"},"Installation Steps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the following command to install the API Portal Docker container.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --name=levoai-api-portal \\\n-e REFRESH_TOKEN='<REFRESH_TOKEN>' -e APP_NAME='<APP_NAME>' \\\n-e ENV_NAME='<ENV_NAME>' -e LEVO_ORG_ID='<LEVO_ORG_ID>' \\\n-p 8000:80 levoai/api-portal:latest\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," to view the API docs.")),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ENV_NAME")," environment value is ",(0,l.kt)("inlineCode",{parentName:"li"},"staging"),"."),(0,l.kt)("li",{parentName:"ul"},"If user is part of multiple orgs, you would have to add ",(0,l.kt)("inlineCode",{parentName:"li"},"-e LEVO_ORG_ID='<LEVO_ORG_ID>'")," otherwise optional."),(0,l.kt)("li",{parentName:"ul"},"If you are running for an app from Levo's India Saas instance, add this environment variable ",(0,l.kt)("inlineCode",{parentName:"li"},"-e LEVO_BASE_URL='https://api.india-1.levo.ai'"),".")),(0,l.kt)("h3",{id:"install-via-helm-chart"},"Install via Helm Chart"),(0,l.kt)("h4",{id:"pre-requisites-1"},"Pre-requisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the refresh token from the Levo App User Profile page.")),(0,l.kt)("h4",{id:"installation-steps-1"},"Installation Steps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Levo Helm repo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add levoai https://levoai.github.io/helm-charts/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run following command to install the API Portal Helm Chart")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm install levoai-api-portal levoai/levoai-api-portal \\\n--set levoAuthKey="your_auth_key" \\\n--set levoAppName="your_app_name" \\\n--set levoEnvName="your_env_name" \\\n--set levoOrgId="your_org_id"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Port forward and navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," to view the API docs.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward services/levoai-api-portal 8000:80\n")),(0,l.kt)("h3",{id:"creating-a-task-definition-in-your-aws-account-using-terraform"},"Creating a Task Definition in your AWS Account using Terraform."),(0,l.kt)("p",null,"Download the ",(0,l.kt)(m,{mdxType:"DownloadMainTF"})," file."),(0,l.kt)("p",null,"Run the following command in the same directory - "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,l.kt)("p",null,"Enter the Refresh Token, Env Name and App Name as prompted to create a task definition for Levo's API-Portal in your AWS account."))}f.isMDXComponent=!0}}]);