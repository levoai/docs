"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4606],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:6},s="Levo CLI Command Reference",c={unversionedId:"levo-cli/levo-cli-command-reference",id:"levo-cli/levo-cli-command-reference",isDocsHomePage:!1,title:"Levo CLI Command Reference",description:"help",source:"@site/docs/levo-cli/levo-cli-command-reference.md",sourceDirName:"levo-cli",slug:"/levo-cli/levo-cli-command-reference",permalink:"/levo-cli/levo-cli-command-reference",editUrl:"https://github.com/levoai/docs/edit/main/docs/levo-cli/levo-cli-command-reference.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Levo CLI for Windows",permalink:"/levo-cli/levo-cli-for-windows"},next:{title:"Upgrading Levo CLI",permalink:"/levo-cli/levo-cli-upgrade-instructions"}},p=[{value:"help",id:"help",children:[],level:2},{value:"version",id:"version",children:[],level:2},{value:"login",id:"login",children:[],level:2},{value:"test-conformance",id:"test-conformance",children:[{value:"Usage Examples",id:"usage-examples",children:[],level:5}],level:2},{value:"test",id:"test",children:[{value:"Usage Examples",id:"usage-examples-1",children:[],level:5}],level:2},{value:"test-plan",id:"test-plan",children:[{value:"run",id:"run",children:[],level:3},{value:"export-env",id:"export-env",children:[{value:"Usage Examples",id:"usage-examples-2",children:[],level:5}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"levo-cli-command-reference"},"Levo CLI Command Reference"),(0,r.kt)("h2",{id:"help"},"help"),(0,r.kt)("p",null,"Show help message for the CLI,"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo --help")),(0,r.kt)("h2",{id:"version"},"version"),(0,r.kt)("p",null,"Show the current version of the CLI."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo --version")),(0,r.kt)("h2",{id:"login"},"login"),(0,r.kt)("p",null,"Login (authenticate) to Levo SaaS."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo login")),(0,r.kt)("p",null,"The login command might ask you click on a autogenerated (single use) URL that authenticates your CLI. You can either CTRL-click this URL, or copy and paste this URL into the browser."),(0,r.kt)("p",null,"If you are already signed up for Levo, this URL just authenticates the CLI. Otherwise you will need to signup for a account on Levo. Levo has forever free accounts which require no credit cards."),(0,r.kt)("p",null,"The login command stores authentication tokens in the $HOME/.config/configstore/levo.json file. This file is only accessible by the user who owns the $HOME directory. Treat this file as do with any secrets."),(0,r.kt)("h2",{id:"test-conformance"},"test-conformance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo test-conformance [options] <arguments>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Perform schema conformance tests against API endpoints specified in the target-url.\n\nOptions:\n  --schema TEXT                   --schema must specify a valid URL or file\n                                  path (accessible from the CLI container)\n                                  that points to an Open API / Swagger\n                                  specification.  [required]\n  --target-url TEXT               --target-url must specify a valid URL\n                                  pointing to a live host that implements the\n                                  endpoints specified by --schema.  [required]\n  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS\n                                  portal.\n  -H, --header TEXT               Custom header that will be used in all\n                                  requests to the target server. Example: -H\n                                  \"Authorization: Bearer 123\" .\n  --show-errors-tracebacks        Show full tracebacks for internal errors.\n                                  [default: False]\n  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]\n                                  Accept all of the Python's log level values:\n                                  CRITICAL, ERROR, WARNING, INFO, DEBUG, and\n                                  NOTSET (all case insensitive).\n  -h, --help                      Show this message and exit.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Levo CLI runs as a Docker container and by default mounts the current working directory on the host file system as read/write. If specifying a schema file as an argument, please provide a path that is accessible by the CLI container.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," as arguments of the ",(0,r.kt)("inlineCode",{parentName:"p"},"--target-url"),", as these will not resolve correctly within the CLI container. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," instead.")),(0,r.kt)("h5",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo test-conformance --target-url http://host.docker.internal:9000/ --schema ./malschema.json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo test-conformance --target-url http://host.docker.internal:9000/ --schema http://host.docker.internal:9000/api/openapi.json")),(0,r.kt)("h2",{id:"test"},"test"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo test [options] <arguments>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Execute a test plan against the specified target-url.\n\nOptions:\n  --target-url TEXT               --target-url must specify a valid URL\n                                  pointing to a live host that implements the\n                                  endpoints that are present in the test plan.\n                                  [required]\n  --disable-reporting-to-saas     Do not send test reports to Levo\'s SaaS\n                                  portal.\n  --test-plan TEXT                --test-plan must specify a valid Levo\n                                  Resource Name (LRN) or a path to a Levo Test\n                                  Plan folder (accessible from the CLI\n                                  container).  [required]\n  -H, --header TEXT               Custom header that will be used in all\n                                  requests to the target server. Example: -H\n                                  "Authorization: Bearer 123" .\n  --show-errors-tracebacks        Show full tracebacks for internal errors.\n                                  [default: False]\n  --env-file TEXT                 Path to YAML file with environment\n                                  definitions (AuthN/AuthZ info, etc.). This\n                                  file must be accessible from the CLI\n                                  container.\n  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]\n  -h, --help                      Show this message and exit.\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Levo CLI runs as a Docker container and by default mounts the current working directory on the host file system as read/write. If specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Plan")," folder as an argument, please provide a path that is accessible by the CLI container.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," as arguments of the ",(0,r.kt)("inlineCode",{parentName:"p"},"--target-url"),", as these will not resolve correctly within the CLI container. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," instead.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authentication credentials and user role information might be required by some ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Plans")," for proper execution. This is to be provided using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--env-file")," option. Please refer to details on ",(0,r.kt)("a",{parentName:"p",href:"/concepts/authentication/authn-authz"},"the Environment YAML file"),".")),(0,r.kt)("h5",{id:"usage-examples-1"},"Usage Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using a local test plan folder\n",(0,r.kt)("inlineCode",{parentName:"p"},"levo test --target-url host.docker.internal:8888 --test-plan ./my-test-plan-folder --env-file ./environment.yml"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using a LRN (Levo Resource Name) for a test plan located in Levo SaaS\n",(0,r.kt)("inlineCode",{parentName:"p"},"levo test --target-url host.docker.internal:8888 --test-plan demo:app/Demo_crAPI:tp/Demo_crAPI --env-file ./environment.yml")))),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"demo:app/Demo_crAPI:tp/Demo_crAPI")," is the LRN for a test plan located in Levo SaaS."),(0,r.kt)("h2",{id:"test-plan"},"test-plan"),(0,r.kt)("p",null,"Test Plan management sub commands."),(0,r.kt)("h3",{id:"run"},"run"),(0,r.kt)("p",null,"This is an alias of the ",(0,r.kt)("inlineCode",{parentName:"p"},"levo test")," command."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo test-plan run [options] <arguments>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Run a test plan against the specified target-url.\n\nOptions:\n  --target-url TEXT               --target-url must specify a valid URL\n                                  pointing to a live host that implements the\n                                  endpoints that are present in the test plan.\n                                  [required]\n  --disable-reporting-to-saas     Do not send test reports to Levo\'s SaaS\n                                  portal.\n  --test-plan TEXT                --test-plan must specify a valid Levo\n                                  Resource Name (LRN) or a path to a Levo Test\n                                  Plan folder (accessible from the CLI\n                                  container).  [required]\n  -H, --header TEXT               Custom header that will be used in all\n                                  requests to the target server. Example: -H\n                                  "Authorization: Bearer 123" .\n  --show-errors-tracebacks        Show full tracebacks for internal errors.\n                                  [default: False]\n  --env-file TEXT                 Path to YAML file with environment\n                                  definitions (AuthN/AuthZ info, etc.). This\n                                  file must be accessible from the CLI\n                                  container.\n  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]\n  -h, --help                      Show this message and exit.\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This command is a functional equivalent of the ",(0,r.kt)("inlineCode",{parentName:"p"},"levo test")," command. Please see constraints and examples outlined for that command.")),(0,r.kt)("h3",{id:"export-env"},"export-env"),(0,r.kt)("p",null,"The environment file is used to specify authentication credentials, and optional role(s)\ninformation (for authorization tests). Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/concepts/authentication/authn-authz"},"Authentication"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"levo test-plan export-env [OPTIONS] <arguments>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Export the environment file of a test plan from Levo SaaS to the local file system.\n\nOptions:\n  --lrn TEXT                      The LRN of the test plan, whose environment\n                                  file you want to export.  [required]\n  --local-dir TEXT                Path to a local directory where the\n                                  environment file is to be exported. The\n                                  local directory must be accessible from the\n                                  CLI container. If not specified, the test\n                                  plan is exported to the current working\n                                  directory.\n  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]\n                                  Accept all of the Python's log level values:\n                                  CRITICAL, ERROR, WARNING, INFO, DEBUG, and\n                                  NOTSET (all case insensitive).\n  -h, --help                      Show this message and exit.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Levo CLI runs as a Docker container and by default mounts the current working directory on the host file system as read/write.")),(0,r.kt)("h5",{id:"usage-examples-2"},"Usage Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'levo test-plan export-env --lrn "acme-gizmo-org:ws/buchi:app/Demo_crAPI:tp/Demo_crAPI" --local-dir ./')))}d.isMDXComponent=!0}}]);