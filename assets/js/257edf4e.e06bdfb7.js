"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3395],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Associating RBAC Information with APIs",p={unversionedId:"guides/security-testing/common-tasks/api-rbac/api-rbac-apis",id:"guides/security-testing/common-tasks/api-rbac/api-rbac-apis",title:"Associating RBAC Information with APIs",description:"APIs specified in the API Catalog can be associated with RBAC information using the metadata.yml file.",source:"@site/docs/guides/security-testing/common-tasks/api-rbac/api-rbac-apis.md",sourceDirName:"guides/security-testing/common-tasks/api-rbac",slug:"/guides/security-testing/common-tasks/api-rbac/api-rbac-apis",permalink:"/guides/security-testing/common-tasks/api-rbac/api-rbac-apis",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/security-testing/common-tasks/api-rbac/api-rbac-apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Providing RBAC Information for APIs",permalink:"/guides/security-testing/common-tasks/api-rbac/"},next:{title:"Associating RBAC Information Using Pattern Matching (Glob)",permalink:"/guides/security-testing/common-tasks/api-rbac/api-rbac-glob"}},d={},c=[{value:"What is the structure of the <code>metadata.yml</code> file?",id:"what-is-the-structure-of-the-metadatayml-file",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"associating-rbac-information-with-apis"},"Associating RBAC Information with APIs"),(0,r.kt)("p",null,"APIs specified in the API Catalog can be associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"RBAC")," information using the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.yml")," file.\nThe association is made by importing a properly constructed ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.yml")," into the specific API Catalog (Application or Service)."),(0,r.kt)("p",null,"Please refer to the API Catalog screens in the UI to import a ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.yml")," file."),(0,r.kt)("h2",{id:"what-is-the-structure-of-the-metadatayml-file"},"What is the structure of the ",(0,r.kt)("inlineCode",{parentName:"h2"},"metadata.yml")," file?"),(0,r.kt)("p",null,"Consider a scenario where you have the API endpoints mentioned below, and have implemented role based access controls (RBAC) for your APIs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"GET /"))," ",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"GET /identity/api/v1/admin/users/find"))," ",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"GET /identity/api/v2/vehicle/{vehicleId}/location"))," ",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"GET /workshop/api/shop/orders/{order_id}"))," ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Say, that there are two roles: ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_USER")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN")," associated with your API endpoints. These roles provide certain entitlements (capability to access specific API operations after authentication) to regular users and administrators."),(0,r.kt)("p",null,"The table below represents the RBAC entitlements:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Roles Allowed to Access Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /"),(0,r.kt)("td",{parentName:"tr",align:null},"ROLE_USER, ROLE_ADMIN"),(0,r.kt)("td",{parentName:"tr",align:null},"Available to all roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /identity/api/v1/admin/users/find"),(0,r.kt)("td",{parentName:"tr",align:null},"ROLE_ADMIN"),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint has elevated privileges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /identity/api/v2/vehicle/{vehicleId}/location"),(0,r.kt)("td",{parentName:"tr",align:null},"ROLE_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A for Admins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /workshop/api/shop/orders/{order_id}"),(0,r.kt)("td",{parentName:"tr",align:null},"ROLE_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A for Admins")))),(0,r.kt)("p",null,"For the above scenario, YAML file (shown below), provides a mapping between the API endpoints and their associated roles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"# This is an example metadata.yml file\n#\nroles:\n  # This section captures the set of roles that are available to be associated with your API endpoints\n  - role: ROLE_USER\n    description: USER role that provides certain entitlements for regular users\n  - role: ROLE_ADMIN\n    description: ADMIN role that provides elevated privileges/entitlements for administrator\n#\n#\napi:\n  # This section defines actual associations between API endpoints and roles at the global level\n  # This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  #\n  #\n  endpoints:\n    # This section defines API endpoint specific overrides\n    #\n    - endpoint: GET /identity/api/v1/admin/users/find\n      roles:\n        - ROLE_ADMIN # `admin/users/find` should only be accessed by ROLE_ADMIN\n      default_role: ROLE_ADMIN # override the default role for this endpoint\n    #\n    - endpoint: GET /identity/api/v2/vehicle/{vehicleId}/location\n      roles:\n        - ROLE_USER # `/vehicle/{vehicleId}/location` should only be accessed by ROLE_USER\n        # No need to override the default_role here, as it is already ROLE_USER\n    #\n    - endpoint: GET /workshop/api/shop/orders/{order_id}\n      roles:\n        - ROLE_USER # `/shop/orders/{order_id}` should only be accessed by ROLE_USER\n        # No need to override the default_role here, as it is already ROLE_USER \n")),(0,r.kt)("p",null,"If you have many API endpoints and have complex requirements for associating RBAC information, the next section will help simplify the association, via the usage of pattern matching ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/begin/globbing#what-is-globbing"},"glob"),", etc."))}m.isMDXComponent=!0}}]);