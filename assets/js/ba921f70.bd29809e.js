"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9791],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:6},l="Providing Authorization Information for Test Plans - `Horizontal & Vertical Authorization Abuse` Test Cases",u={unversionedId:"tasks/authentication/horizontal-n-vertical-authz",id:"tasks/authentication/horizontal-n-vertical-authz",title:"Providing Authorization Information for Test Plans - `Horizontal & Vertical Authorization Abuse` Test Cases",description:"Often you will want to test APIs for both Horizontal Authorization Abuse, and Vertical Authorization Abuse, in a single test plan.",source:"@site/docs/tasks/authentication/horizontal-n-vertical-authz.md",sourceDirName:"tasks/authentication",slug:"/tasks/authentication/horizontal-n-vertical-authz",permalink:"/tasks/authentication/horizontal-n-vertical-authz",editUrl:"https://github.com/levoai/docs/edit/main/docs/tasks/authentication/horizontal-n-vertical-authz.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Providing Authorization Information for `Vertical Authorization Abuse` Test Cases",permalink:"/tasks/authentication/vertical-authz"},next:{title:"Associating RBAC Information with APIs",permalink:"/tasks/api-rbac/"}},c={},h=[],p={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"providing-authorization-information-for-test-plans---horizontal--vertical-authorization-abuse-test-cases"},"Providing Authorization Information for Test Plans - ",(0,i.kt)("inlineCode",{parentName:"h1"},"Horizontal & Vertical Authorization Abuse")," Test Cases"),(0,i.kt)("p",null,"Often you will want to test APIs for both ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Horizontal"},(0,i.kt)("inlineCode",{parentName:"a"},"Horizontal Authorization Abuse")),", and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Privilege_escalation#Vertical"},(0,i.kt)("inlineCode",{parentName:"a"},"Vertical Authorization Abuse")),", in a single test plan."),(0,i.kt)("p",null,"This requires credentials for additional users, and their associated role information."),(0,i.kt)("p",null,"User ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," information for API endpoints is provided in the API catalog via the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/api-catalog/metadata-yml"},"metadata.yml file"),". The metadata file specifies the various roles used by the API, and specific roles that apply to specific API endpoints."),(0,i.kt)("p",null,"While the metadata file is used to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," information, the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file requires the provisioning of one or more users per role (as specified in the metadata file), and their respective authentication credentials."),(0,i.kt)("p",null,"For example if the metadata file has specified two roles (",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_USER"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN"),"), the autogenerated ",(0,i.kt)("inlineCode",{parentName:"p"},"environment.yml")," file will have the below structure (assuming the default Bearer AuthN mechanism is being used)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"# Environment file that contains users, roles and their Authentication\n# mechanisms that will be used by the API endpoints.\niam:\n  users:\n  - name: user_1\n    # Default user for `ROLE_USER` that is used in general, unless overridden by a specific test case.\n    # This user is the primary user (victim) in horizontal authZ abuse test cases involving `ROLE_USER`.\n    default: true\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n    roles:\n        - ROLE_USER\n  - name: user_2\n  # This additional user at role `ROLE_USER` is used in horizontal authZ abuse test cases.\n  # This user is the secondary user (attacker) in horizontal authZ abuse test cases.\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n      roles:\n        - ROLE_USER\n  - name: user_3\n    # Default user for `ROLE_ADMIN` that is used in general, unless overridden by a specific test case.\n    # This user is the primary user (victim) in horizontal authZ abuse test cases involving `ROLE_ADMIN`.\n    default: true \n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n    roles:\n        - ROLE_ADMIN\n  - name: user_4\n    # This additional user at role `ROLE_ADMIN` is used in horizontal authZ abuse test cases.\n    # This user is the secondary user (attacker) in horizontal authZ abuse test cases involving `ROLE_ADMIN`.\n    bearer_tokens:\n    - name: bearerAuth\n      value: <Enter the bearer token>\n    roles:\n        - ROLE_ADMIN\n")),(0,i.kt)("p",null,"Since the test plan has test cases for both horizontal and vertical authZ abuse, we have to provide credentials for 4 users. Two users for ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_USER"),", two users for ",(0,i.kt)("inlineCode",{parentName:"p"},"ROLE_ADMIN"),". The two users at each role level will be used for the horizontal authorization abuse test cases (Victim user and Attacker user)."),(0,i.kt)("p",null,"If using an authentication mechanism other than Bearer AuthN, please modify the auto generated YAML appropriately."))}d.isMDXComponent=!0}}]);