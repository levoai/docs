"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9856],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8067:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Associating RBAC Information with APIs",p={unversionedId:"tasks/api-rbac/api-rbac",id:"tasks/api-rbac/api-rbac",title:"Associating RBAC Information with APIs",description:"APIs specified in the API Catalog can be associated with RBAC information using the metadata.yml file.",source:"@site/docs/tasks/api-rbac/api-rbac.md",sourceDirName:"tasks/api-rbac",slug:"/tasks/api-rbac/",permalink:"/tasks/api-rbac/",editUrl:"https://github.com/levoai/docs/edit/main/docs/tasks/api-rbac/api-rbac.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Providing Authorization Information for Test Plans - `Horizontal & Vertical Authorization Abuse` Test Cases",permalink:"/tasks/authentication/horizontal-n-vertical-authz"},next:{title:"Providing RBAC Information for APIs",permalink:"/tasks/api-rbac/api-rbac-tasks"}},d={},c=[{value:"What is the structure of the <code>metadata.yml</code> file?",id:"what-is-the-structure-of-the-metadatayml-file",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"associating-rbac-information-with-apis"},"Associating RBAC Information with APIs"),(0,i.kt)("p",null,"APIs specified in the API Catalog can be associated with ",(0,i.kt)("inlineCode",{parentName:"p"},"RBAC")," information using the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yml")," file.\nThe association is made by importing a properly constructed ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yml")," into the specific API Catalog (Application or Service)."),(0,i.kt)("p",null,"Please refer to the API Catalog screens in the UI to import a ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yml")," file."),(0,i.kt)("h2",{id:"what-is-the-structure-of-the-metadatayml-file"},"What is the structure of the ",(0,i.kt)("inlineCode",{parentName:"h2"},"metadata.yml")," file?"),(0,i.kt)("p",null,"Consider a scenario where you have the API endpoints mentioned below, and have implemented role based access controls (RBAC) for your APIs."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"GET /"))," ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"GET /identity/api/v1/admin/users/find"))," ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"GET /identity/api/v2/vehicle/{vehicleId}/location"))," ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"GET /workshop/api/shop/orders/{order_id}"))," ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Say, that there are two roles: ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_USER")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN")," associated with your API endpoints. These roles provide certain entitlements (capability to access specific API operations after authentication) to regular users and administrators."),(0,i.kt)("p",null,"The table below represents the RBAC entitlements:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API Endpoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Roles Allowed to Access Endpoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET /"),(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_USER, ROLE_ADMIN"),(0,i.kt)("td",{parentName:"tr",align:null},"Available to all roles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET /identity/api/v1/admin/users/find"),(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_ADMIN"),(0,i.kt)("td",{parentName:"tr",align:null},"Endpoint has elevated privileges")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET /identity/api/v2/vehicle/{vehicleId}/location"),(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_USER"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A for Admins")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET /workshop/api/shop/orders/{order_id}"),(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_USER"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A for Admins")))),(0,i.kt)("p",null,"For the above scenario, YAML file (shown below), provides a mapping between the API endpoints and their associated roles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"# This is an example metadata.yml file\n#\nroles:\n  # This section captures the set of roles that are available to be associated with your API endpoints\n  - role: ROLE_USER\n    description: USER role that provides certain entitlements for regular users\n  - role: ROLE_ADMIN\n    description: ADMIN role that provides elevated privileges/entitlements for administrator\n#\n#\napi:\n  # This section defines actual associations between API endpoints and roles at the global level\n  # This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  #\n  #\n  endpoints:\n    # This section defines API endpoint specific overrides\n    #\n    - endpoint: GET /identity/api/v1/admin/users/find\n      roles:\n        - ROLE_ADMIN # `admin/users/find` should only be accessed by ROLE_ADMIN\n      default_role: ROLE_ADMIN # override the default role for this endpoint\n    #\n    - endpoint: GET /identity/api/v2/vehicle/{vehicleId}/location\n      roles:\n        - ROLE_USER # `/vehicle/{vehicleId}/location` should only be accessed by ROLE_USER\n        # No need to override the default_role here, as it is already ROLE_USER\n    #\n    - endpoint: GET /workshop/api/shop/orders/{order_id}\n      roles:\n        - ROLE_USER # `/shop/orders/{order_id}` should only be accessed by ROLE_USER\n        # No need to override the default_role here, as it is already ROLE_USER \n")),(0,i.kt)("p",null,"If you have many API endpoints and have complex requirements for associating RBAC information, the next section will help simplify the association, via the usage of pattern matching ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/begin/globbing#what-is-globbing"},"glob"),", etc."))}m.isMDXComponent=!0}}]);