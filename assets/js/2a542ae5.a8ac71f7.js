"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[941],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6622:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],p={sidebar_position:2},s="CrAPI Sample App - Part 1",l={unversionedId:"guides/security-testing/test-sample-app/crapi/crapi-part-1",id:"guides/security-testing/test-sample-app/crapi/crapi-part-1",title:"CrAPI Sample App - Part 1",description:"1. Install crAPI",source:"@site/docs/guides/security-testing/test-sample-app/crapi/crapi-part-1.md",sourceDirName:"guides/security-testing/test-sample-app/crapi",slug:"/guides/security-testing/test-sample-app/crapi/crapi-part-1",permalink:"/guides/security-testing/test-sample-app/crapi/crapi-part-1",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/test-sample-app/crapi/crapi-part-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Evaluate Levo using the sample application `crAPI`",permalink:"/guides/security-testing/test-sample-app/crapi/"},next:{title:"CrAPI Sample App - Part 2",permalink:"/guides/security-testing/test-sample-app/crapi/crapi-part-2"}},c={},d=[{value:"1. Install crAPI",id:"1-install-crapi",level:2},{value:"2. Import crAPI APIs into Levo SaaS",id:"2-import-crapi-apis-into-levo-saas",level:2},{value:"3. Upload a metadata.yml file to enable authorization bypass (RBAC) tests",id:"3-upload-a-metadatayml-file-to-enable-authorization-bypass-rbac-tests",level:2},{value:"4. Generate a security test plan for crAPI&#39;s APIs",id:"4-generate-a-security-test-plan-for-crapis-apis",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crapi-sample-app---part-1"},"CrAPI Sample App - Part 1"),(0,i.kt)("h2",{id:"1-install-crapi"},"1. Install crAPI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the crAPI demo application by following instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/quick-start.md"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/levoai/demo-apps/main/crAPI/api-specs/demo%20scenarios/onboarding-scenarios.json"},"Download")," and save crAPIs OpenAPI specification (OAS).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify crAPI is running by logging in, using one of the user credentials provided ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/levoai/demo-apps/blob/main/crAPI/docs/user-asset-info.md#user-info"},"here"),"."))),(0,i.kt)("h2",{id:"2-import-crapi-apis-into-levo-saas"},"2. Import crAPI APIs into Levo SaaS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login into the Levo SaaS portal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"API Catalog")," in the side panel and proceed to import crAPIs OAS (saved in step above).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the import dialog name this API catalog as ",(0,i.kt)("inlineCode",{parentName:"p"},"My crAPI"),", and complete the import."))),(0,i.kt)("h2",{id:"3-upload-a-metadatayml-file-to-enable-authorization-bypass-rbac-tests"},"3. Upload a metadata.yml file to enable authorization bypass (RBAC) tests"),(0,i.kt)("p",null,"crAPI's APIs have role based access controls (RBAC). If want to validate the proper configuration and functioning of the said controls, you will need to construct a metadata.yml file and upload it to the catalog created in the previous step."),(0,i.kt)("p",null,"You can read more about authorization bypass tests and the metadata.yml file ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/api-catalog/metadata-yml"},"here"),"."),(0,i.kt)("p",null,"For your convenience, the appropriate metadata.yml for crAPI is shown below. Please upload this to catalog via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Metadata")," tab in the catalog UI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"# metadata.yml file for crAPI that describes RBAC for API endpoints\n#\nroles:\n# This section captures the set of roles that are available to be associated with the API endpoints\n  - role: ROLE_USER\n    description: This role provides specific entitlements for regular users\n  - role: ROLE_MECHANIC\n    description: This role provides specific entitlements for mechanics\n  - role: ROLE_ADMIN\n    description: This role provides specific entitlements for administrators\n#\napi:\n# This section defines actual associations between API endpoints and roles at the global level\n# This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_MECHANIC\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  endpoints:\n    # This section defines API endpoint specific overrides\n    #\n    - endpoint: GET /identity/api/v1/admin/users/find\n      roles:\n        - ROLE_ADMIN\n      default_role: ROLE_ADMIN\n    - endpoint: GET /identity/api/v2/vehicle/{vehicleId}/location\n      roles:\n        - ROLE_ADMIN\n        - ROLE_USER\n      default_role: ROLE_USER\n    - endpoint: GET /workshop/api/mechanic/mechanic_report\n      roles:\n        - ROLE_ADMIN\n        - ROLE_USER\n      default_role: ROLE_USER\n    - endpoint: GET /workshop/api/merchant/contact_mechanic\n      roles:\n        - ROLE_ADMIN\n        - ROLE_USER\n      default_role: ROLE_USER\n    - endpoint: GET /workshop/api/shop/orders/{order_id}\n      roles:\n        - ROLE_USER\n")),(0,i.kt)("h2",{id:"4-generate-a-security-test-plan-for-crapis-apis"},"4. Generate a security test plan for crAPI's APIs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Plans")," in the side panel and proceed to create a test plan by clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"New Test Plan"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pick ",(0,i.kt)("inlineCode",{parentName:"p"},"Data Driven")," as the type of test plan to generate.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"New Test Plan")," dialog name the plan as ",(0,i.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan"),". Pick ",(0,i.kt)("inlineCode",{parentName:"p"},"My crAPI")," as the API asset for this test plan.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the check box named ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Auto-populate API parameters for this test plan")),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This uses examples in the OpenAPI specification file to auto populate ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/test-plans/fixtures/test-fixtures"},"test fixtures/API parameters")," that are required in the generated test plan.\nThe example values are used in making API requests during test execution."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Proceed to generate the test plan.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will now have a test plan called ",(0,i.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Config Complete")," state.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Copy")," the LRN (Levo Resource Name) of ",(0,i.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan")," to the clipboard.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the test plan ",(0,i.kt)("inlineCode",{parentName:"p"},"My crAPI Test Plan"),", navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," section,\nand download this file to your desktop. You can read more about the purpose of the file ",(0,i.kt)("a",{parentName:"p",href:"/guides/security-testing/concepts/test-plans/env-yml"},"here"),"."))))}m.isMDXComponent=!0}}]);