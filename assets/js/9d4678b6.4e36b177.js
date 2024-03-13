"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6325],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return h}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],r={sidebar_position:2},l="Associating RBAC Information Using Pattern Matching (Glob)",p={unversionedId:"security-testing/common-tasks/api-rbac/api-rbac-glob",id:"security-testing/common-tasks/api-rbac/api-rbac-glob",title:"Associating RBAC Information Using Pattern Matching (Glob)",description:"What problem does this solve?",source:"@site/docs/security-testing/common-tasks/api-rbac/api-rbac-glob.md",sourceDirName:"security-testing/common-tasks/api-rbac",slug:"/security-testing/common-tasks/api-rbac/api-rbac-glob",permalink:"/security-testing/common-tasks/api-rbac/api-rbac-glob",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/security-testing/common-tasks/api-rbac/api-rbac-glob.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Associating RBAC Information with APIs",permalink:"/security-testing/common-tasks/api-rbac/api-rbac-apis"},next:{title:"Running Test Plans via Levo CLI",permalink:"/security-testing/common-tasks/running-test-plans/"}},d={},h=[{value:"What problem does this solve?",id:"what-problem-does-this-solve",level:2},{value:"What is Globbing?",id:"what-is-globbing",level:2},{value:"What are some use cases?",id:"what-are-some-use-cases",level:2},{value:"1. Allow <code>ROLE_USER</code> access to all POST endpoints",id:"1-allow-role_user-access-to-all-post-endpoints",level:3},{value:"2. Allow <code>ROLE_MECHANIC</code> &amp; <code>ROLE_ADMIN</code> access to GET endpoints beginning with <code>/workshop/</code>",id:"2-allow-role_mechanic--role_admin-access-to-get-endpoints-beginning-with-workshop",level:3},{value:"3. Allow <code>ROLE_MECHANIC</code> &amp; <code>ROLE_ADMIN</code> access to GET endpoints with URI pattern <code>/workshop/&lt;URI path segment&gt;</code>",id:"3-allow-role_mechanic--role_admin-access-to-get-endpoints-with-uri-pattern-workshopuri-path-segment",level:3},{value:"FAQs",id:"faqs",level:2},{value:"What happens when an endpoint is part of a group and also is listed explicitly under the endpoints section?",id:"what-happens-when-an-endpoint-is-part-of-a-group-and-also-is-listed-explicitly-under-the-endpoints-section",level:3},{value:"What methods are supported in the <code>endpoint_groups</code>?",id:"what-methods-are-supported-in-the-endpoint_groups",level:3},{value:"What happens when the <code>patterns</code> list is absent?",id:"what-happens-when-the-patterns-list-is-absent",level:3},{value:"What matching operators are allowed for the <code>patterns</code> glob string?",id:"what-matching-operators-are-allowed-for-the-patterns-glob-string",level:3},{value:"Segments and Separators (/)",id:"segments-and-separators-",level:4},{value:"Single Asterisk (*)",id:"single-asterisk-",level:4},{value:"Double Asterisk (**)",id:"double-asterisk-",level:4},{value:"Question Mark(?)",id:"question-mark",level:4}],c={toc:h};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"associating-rbac-information-using-pattern-matching-glob"},"Associating RBAC Information Using Pattern Matching (Glob)"),(0,i.kt)("h2",{id:"what-problem-does-this-solve"},"What problem does this solve?"),(0,i.kt)("p",null,"Some applications contain a numerous API endpoints and associated RBAC roles/scopes."),(0,i.kt)("p",null,"This feature supports rapid, and efficient mapping of roles/scopes with numerous API endpoints at scale."),(0,i.kt)("p",null,"The feature uses a technique called Globbing, which is described below."),(0,i.kt)("h2",{id:"what-is-globbing"},"What is Globbing?"),(0,i.kt)("p",null,'The term "globbing", also referred to as "glob matching" or "URL path expansion", is a programming concept that describes the process of using wildcards, referred to as "glob patterns" or "globs", for URL paths or other similar sets of strings.'),(0,i.kt)("p",null,"You can read more about it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/begin/globbing#what-is-globbing"},"here"),"."),(0,i.kt)("h2",{id:"what-are-some-use-cases"},"What are some use cases?"),(0,i.kt)("p",null,"Consider a scenario where your application has numerous API endpoints, and three roles (shown below) for RBAC."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"RBAC Role Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Role Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_USER"),(0,i.kt)("td",{parentName:"tr",align:null},"A consumer of the application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_MECHANIC"),(0,i.kt)("td",{parentName:"tr",align:null},"Skilled at working with machines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ROLE_ADMIN"),(0,i.kt)("td",{parentName:"tr",align:null},"Administrator. Oversees everything")))),(0,i.kt)("p",null,"Below are example use cases, and the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yml")," file structure."),(0,i.kt)("h3",{id:"1-allow-role_user-access-to-all-post-endpoints"},"1. Allow ",(0,i.kt)("inlineCode",{parentName:"h3"},"ROLE_USER")," access to all POST endpoints"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'roles:\n# This section captures the set of roles that are available to be associated with your API endpoints\n  - role: ROLE_USER\n    description: "A consumer of the application."\n  - role: ROLE_MECHANIC\n    description: "Skilled at working with machines."\n  - role: ROLE_ADMIN\n    description: "Administrator. Oversees everything."\n\napi:\n# This section defines actual associations between API endpoints and roles at the global level\n# This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_MECHANIC\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  #\n  endpoint_groups:\n  # This section allows Method and URL path based mapping between endpoints and roles\n  #\n  # This specifies that ROLE_USER should have access to all POST endpoints\n    - methods:\n        - "POST"\n      roles:\n        - ROLE_USER\n')),(0,i.kt)("h3",{id:"2-allow-role_mechanic--role_admin-access-to-get-endpoints-beginning-with-workshop"},"2. Allow ",(0,i.kt)("inlineCode",{parentName:"h3"},"ROLE_MECHANIC")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"ROLE_ADMIN")," access to GET endpoints beginning with ",(0,i.kt)("inlineCode",{parentName:"h3"},"/workshop/")),(0,i.kt)("p",null,"For example the API endpoints under consideration could be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET /workshop/shop"),(0,i.kt)("li",{parentName:"ul"},"GET /workshop/shop/products"),(0,i.kt)("li",{parentName:"ul"},"GET /workshop/mechanic"),(0,i.kt)("li",{parentName:"ul"},"GET /workshop/mechanic/service_requests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'roles:\n# This section captures the set of roles that are available to be associated with your API endpoints\n  - role: ROLE_USER\n    description: "A consumer of the application."\n  - role: ROLE_MECHANIC\n    description: "Skilled at working with machines."\n  - role: ROLE_ADMIN\n    description: "Administrator. Oversees everything."\n\napi:\n# This section defines actual associations between API endpoints and roles at the global level\n# This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_MECHANIC\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  #\n  endpoint_groups:\n  # This section allows Method and URL path based mapping between endpoints and roles\n  #\n  # This specifies that ROLE_MECHANIC & ROLE_ADMIN should have access to all GET endpoints beginning with /workshop/\n    - methods:\n        - "GET"\n      patterns:\n      # This describes the URI path to match as a glob string. This can be a list of URI paths.\n        - "/workshop/**"\n      roles:\n        - ROLE_MECHANIC\n        - ROLE_ADMIN\n')),(0,i.kt)("h3",{id:"3-allow-role_mechanic--role_admin-access-to-get-endpoints-with-uri-pattern-workshopuri-path-segment"},"3. Allow ",(0,i.kt)("inlineCode",{parentName:"h3"},"ROLE_MECHANIC")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"ROLE_ADMIN")," access to GET endpoints with URI pattern ",(0,i.kt)("inlineCode",{parentName:"h3"},"/workshop/<URI path segment>")),(0,i.kt)("p",null,"For example the API endpoints under consideration could be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET /workshop/shop"),(0,i.kt)("li",{parentName:"ul"},"GET /workshop/mechanic")),(0,i.kt)("p",null,"However the below API is not under consideration as it has more than one path segments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET /workshop/mechanic/service_requests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'roles:\n# This section captures the set of roles that are available to be associated with your API endpoints\n  - role: ROLE_USER\n    description: "A consumer of the application."\n  - role: ROLE_MECHANIC\n    description: "Skilled at working with machines."\n  - role: ROLE_ADMIN\n    description: "Administrator. Oversees everything."\n\napi:\n# This section defines actual associations between API endpoints and roles at the global level\n# This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_MECHANIC\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  #\n  endpoint_groups:\n  # This section allows Method and URL path based mapping between endpoints and roles\n  #\n  # This specifies that ROLE_MECHANIC & ROLE_ADMIN should have access to all GET endpoints with URI pattern `/workshop/<path segment>`\n    - methods:\n        - "GET"\n      patterns:\n      # This describes the URI path to match as a glob string. This can be a list of URI paths.\n        - "/workshop/*"\n      roles:\n        - ROLE_MECHANIC\n        - ROLE_ADMIN\n')),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("h3",{id:"what-happens-when-an-endpoint-is-part-of-a-group-and-also-is-listed-explicitly-under-the-endpoints-section"},"What happens when an endpoint is part of a group and also is listed explicitly under the endpoints section?"),(0,i.kt)("p",null,"In such case the explicit listing will take precedence over the group pattern matching. Please see example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'roles:\n# This section captures the set of roles that are available to be associated with your API endpoints\n  - role: ROLE_USER\n    description: "A consumer of the application."\n  - role: ROLE_MECHANIC\n    description: "Skilled at working with machines."\n  - role: ROLE_ADMIN\n    description: "Administrator. Oversees everything."\n\napi:\n# This section defines actual associations between API endpoints and roles at the global level\n# This can be overridden at the individual API endpoint level\n  roles:\n    - ROLE_USER\n    - ROLE_MECHANIC\n    - ROLE_ADMIN\n  # The default role (and an associated user) that should be used to access all endpoints\n  # This can be overridden at the individual API endpoint level\n  default_role: ROLE_USER\n  #\n  endpoint_groups:\n  # This section allows Method and URL path based mapping between endpoints and roles\n  #\n  # This specifies that ROLE_MECHANIC & ROLE_ADMIN should have access to all GET endpoints with URI pattern `/workshop/<path segment>`\n    - methods:\n        - "GET"\n      patterns:\n      # This describes the URI path to match as a glob string. This can be a list of URI paths.\n        - "/workshop/*"\n      roles:\n        - ROLE_MECHANIC\n        - ROLE_ADMIN\n#\nendpoints:\n    # This section defines API endpoint specific overrides\n    #\n    - endpoint: GET /workshop/list\n      roles:\n      # This overrides the mapping specified in the `endpoint_groups` section above\n        - ROLE_ADMIN # `/workshop/list` should only be accessed by ROLE_ADMIN\n      default_role: ROLE_ADMIN # override the default role for this endpoint\n    #\n')),(0,i.kt)("h3",{id:"what-methods-are-supported-in-the-endpoint_groups"},"What methods are supported in the ",(0,i.kt)("inlineCode",{parentName:"h3"},"endpoint_groups"),"?"),(0,i.kt)("p",null,"All RESTful Methods are supported. In case no method is specified, the glob string will be matched against all RESTful methods."),(0,i.kt)("h3",{id:"what-happens-when-the-patterns-list-is-absent"},"What happens when the ",(0,i.kt)("inlineCode",{parentName:"h3"},"patterns")," list is absent?"),(0,i.kt)("p",null,"In case the ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," list is absent, all endpoints matching the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"methods")," will be matched."),(0,i.kt)("h3",{id:"what-matching-operators-are-allowed-for-the-patterns-glob-string"},"What matching operators are allowed for the ",(0,i.kt)("inlineCode",{parentName:"h3"},"patterns")," glob string?"),(0,i.kt)("h4",{id:"segments-and-separators-"},"Segments and Separators (/)"),(0,i.kt)("p",null,"The separator is always the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," character. A segment is everything that comes between the two separators. This includes path parameters."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api")),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"workshop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," are the segments and ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," is the separator."),(0,i.kt)("h4",{id:"single-asterisk-"},"Single Asterisk (*)"),(0,i.kt)("p",null,"Single Asterisk (*) matches zero or more characters within one segment. It is used for globbing the URI path within one URI path segment."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The glob ",(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/*")," will match endpoints such as:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/return_qr_code")," "),(0,i.kt)("p",null,"but not endpoints like:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/orders/all")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/orders/{order_id}")),(0,i.kt)("h4",{id:"double-asterisk-"},"Double Asterisk (**)"),(0,i.kt)("p",null,"Double Asterisk (**) matches zero or more characters across multiple URI path segments."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The glob ",(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/**")," will match the endpoints such as:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/return_qr_code"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/orders/all"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/workshop/api/shop/orders/{order_id}")),(0,i.kt)("h4",{id:"question-mark"},"Question Mark(?)"),(0,i.kt)("p",null,"Question mark(?) matches a single character within one URI path segment. When some URIs differ just one character, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"Glob string ",(0,i.kt)("inlineCode",{parentName:"p"},"/community/api/v?/coupon/*")," will match:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/community/api/v2/coupon/new-coupon"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/community/api/v2/coupon/validate-coupon"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/community/api/v1/coupon/validate-coupon")))}u.isMDXComponent=!0}}]);