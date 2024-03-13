"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2773],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="CI/CD Integrations",p={unversionedId:"integrations/cicd-plugins",id:"integrations/cicd-plugins",title:"CI/CD Integrations",description:"Embed Levo in CI/CD Quality Gates",source:"@site/docs/integrations/cicd-plugins.md",sourceDirName:"integrations",slug:"/integrations/cicd-plugins",permalink:"/integrations/cicd-plugins",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/integrations/cicd-plugins.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/integrations/"},next:{title:"JUnit Format Test Results",permalink:"/integrations/junit-format-results"}},u={},c=[{value:"Jenkins",id:"jenkins",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Running Levo Test Plans Via Freestyle Projects (Jobs)",id:"running-levo-test-plans-via-freestyle-projects-jobs",level:3},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Execute Test Plans Via Actions",id:"execute-test-plans-via-actions",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Action Configuration",id:"action-configuration",level:4},{value:"Job Outputs",id:"job-outputs",level:4},{value:"Execute Standalone Schema Conformance Tests (aka Contract Tests) Via Actions",id:"execute-standalone-schema-conformance-tests-aka-contract-tests-via-actions",level:3},{value:"Prerequisites",id:"prerequisites-2",level:4},{value:"Action Configuration",id:"action-configuration-1",level:4},{value:"Job Outputs",id:"job-outputs-1",level:4},{value:"Others",id:"others",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd-integrations"},"CI/CD Integrations"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Embed Levo in CI/CD Quality Gates",src:n(3353).Z,width:"1897",height:"1193"})),(0,r.kt)("p",null,"You can embed Levo\u2019s contract & security tests in various stages of your software delivery pipeline via CI/CD ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates?view=azure-devops"},"Quality Gates"),"."),(0,r.kt)("p",null,"While Levo can be embedded in any CI/CD product (via the CLI), below are first class integrations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#jenkins"},"Jenkins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#github-actions"},"GitHub Actions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#others"},"Other CI/CD Products"),(0,r.kt)("br",null))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"jenkins"},"Jenkins"),(0,r.kt)("p",null,"Levo's security/contract tests can be embedded in Jenkins quality gates via Levo's ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/levo/"},"Jenkins plugin"),"."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Forever Free Account on Levo.ai"),(0,r.kt)("li",{parentName:"ul"},"A runnable Levo ",(0,r.kt)("a",{parentName:"li",href:"/security-contract-testing/concepts/test-plans/"},"Test Plan")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Levo CLI Authorization Key"),". Refer to instructions ",(0,r.kt)("a",{parentName:"li",href:"/integrations/common-tasks#generating-cli-authorization-keys"},"here"))),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Below are the installation options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/managing/plugins/#from-the-web-ui"},"Using the GUI"),": From your Jenkins dashboard navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins > Manage Plugins")," and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Available")," tab. Locate the plugin by searching for levo, and install it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/plugin-installation-manager-tool"},"CLI tool"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jenkins-plugin-cli --plugins levo:33.vc34b_8f81dc9a\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/managing/plugins/#advanced-installation"},"direct upload"),". Download one of the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/levo/#releases"},"releases")," and upload it to your Jenkins instance"))),(0,r.kt)("h3",{id:"running-levo-test-plans-via-freestyle-projects-jobs"},"Running Levo Test Plans Via Freestyle Projects (Jobs)"),(0,r.kt)("p",null,"Follow the steps below to create a build job, that executes a Levo Test Plan against your build target."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Freestyle project")," and name it appropriately")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"General"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Build Triggers"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Build Environment")," sections based on your preferences")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"Levo Test Plan")," build step to ",(0,r.kt)("inlineCode",{parentName:"p"},"Build Steps")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Jenkins Build Step",src:n(8172).Z,width:"3558",height:"2054"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the build step as shown below:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Levo Build Step Config",src:n(2669).Z,width:"3072",height:"1732"})),(0,r.kt)("p",{parentName:"li"},"i. ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Plan")),(0,r.kt)("p",{parentName:"li"},"Copy the LRN of your Levo Test Plan (from the Levo console), and paste it in the Test Plan section. The LRN uniquely identifies the Test Plan to execute."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"LRN",src:n(4768).Z,width:"3560",height:"1094"})),(0,r.kt)("p",{parentName:"li"},"ii. ",(0,r.kt)("inlineCode",{parentName:"p"},"Target")),(0,r.kt)("p",{parentName:"li"},"Specify the API target that needs to be tested here. This is usually the base URL of your API."),(0,r.kt)("p",{parentName:"li"},"iii. ",(0,r.kt)("inlineCode",{parentName:"p"},"Extra CLI Arguments")," (optional)"),(0,r.kt)("p",{parentName:"li"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/security-contract-testing/levo-cli/levo-cli-command-reference"},"CLI Command Reference"),". Specify any optional arguments based on your preferences here."),(0,r.kt)("p",{parentName:"li"},"iv. ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate JUnit Reports")),(0,r.kt)("p",{parentName:"li"},"If you would to generate build results (Test Plan execution results) in standard ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/developer-for-zos/14.1.0?topic=formats-junit-xml-format"},"JUnit format"),", check the box titled ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate JUnit Reports"),"."),(0,r.kt)("p",{parentName:"li"},"v. ",(0,r.kt)("inlineCode",{parentName:"p"},"Levo Credentials")),(0,r.kt)("p",{parentName:"li"},"You will need to specify the ",(0,r.kt)("em",{parentName:"p"},"Levo CLI Authorization Key")," here. The Jenkins ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/credentials/"},"Credentials Provider Plugin")," is utilized to securely store the API key."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Jenkins Credentials",src:n(9161).Z,width:"1652",height:"847"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Click on the "Add" button next to the credentials dropdown'),(0,r.kt)("li",{parentName:"ul"},"Select your domain"),(0,r.kt)("li",{parentName:"ul"},'Select "Levo CLI Credentials" for Kind'),(0,r.kt)("li",{parentName:"ul"},"Select your ",(0,r.kt)("inlineCode",{parentName:"li"},"Scope")," based on your preferences"),(0,r.kt)("li",{parentName:"ul"},"Enter your ",(0,r.kt)("em",{parentName:"li"},"Organization ID")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Organization Id")," text box. Refer to ",(0,r.kt)("a",{parentName:"li",href:"/integrations/common-tasks#accessing-organization-ids"},"Accessing Organization IDs")," for instructions on fetching your ID"),(0,r.kt)("li",{parentName:"ul"},"Enter your CLI authorization key in the ",(0,r.kt)("inlineCode",{parentName:"li"},"CLI Authorization Key")," textbox. Refer to ",(0,r.kt)("a",{parentName:"li",href:"/integrations/common-tasks#generating-cli-authorization-keys"},"Generating CLI Authorization Keys")," for instructions on fetching your key"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add")," to save the credentials"),(0,r.kt)("li",{parentName:"ul"},"Finally select the credential you just added")),(0,r.kt)("p",{parentName:"li"},"vi. ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment Secret Text")),(0,r.kt)("p",{parentName:"li"},"If you are using an ",(0,r.kt)("a",{parentName:"p",href:"../security-contract-testing/test-your-app/test-app-security/data-driven/configure-env-yml"},"environment file")," to define authentication details, you add those details as a secret file here."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Environment File for Jenkins",src:n(9037).Z,width:"1652",height:"741"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Click on the "Add" button next to the ',(0,r.kt)("em",{parentName:"li"},"Environment Secret Text")," dropdown"),(0,r.kt)("li",{parentName:"ul"},"Select your domain"),(0,r.kt)("li",{parentName:"ul"},'Select "Secret file" for Kind'),(0,r.kt)("li",{parentName:"ul"},"Select your ",(0,r.kt)("inlineCode",{parentName:"li"},"Scope")," based on your preferences"),(0,r.kt)("li",{parentName:"ul"},"Import your ",(0,r.kt)("inlineCode",{parentName:"li"},"environment.yml")," file using the file chooser dialog"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add")," to save the environment.yml as a secret file"),(0,r.kt)("li",{parentName:"ul"},"Now select the secret file you just added"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally configure ",(0,r.kt)("inlineCode",{parentName:"p"},"Post-build Actions"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Save/Apply")," your ",(0,r.kt)("inlineCode",{parentName:"p"},"Freestyle Project")," configuration. You are done!"))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("p",null,"Levo's security/contract tests can be embedded in quality gates via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions"),"."),(0,r.kt)("p",null,"Below are examples of embedding Levo's autogenerated tests in GitHub CI/CD via pre-built actions. You have two choices."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execute-test-plans-via-actions"},"Execute Test Plans")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execute-standalone-schema-conformance-tests-aka-contract-tests-via-actions"},"Execute Standalone Contract Tests"))),(0,r.kt)("h3",{id:"execute-test-plans-via-actions"},"Execute Test Plans Via Actions"),(0,r.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Forever Free Account on Levo.ai"),(0,r.kt)("li",{parentName:"ul"},"A runnable Levo ",(0,r.kt)("a",{parentName:"li",href:"../security-contract-testing/concepts/test-plans"},"Test Plan"))),(0,r.kt)("h4",{id:"action-configuration"},"Action Configuration"),(0,r.kt)("p",null,"The pre-built action for executing ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Plans")," requires the following configuration settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"authorization-key")," : Specify your CLI authorization key here. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/integrations/common-tasks#generating-cli-authorization-keys"},"Generating CLI Authorization Keys")," for instructions on fetching your key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"organization-id")," : Specify your ",(0,r.kt)("em",{parentName:"p"},"Organization ID")," here. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/integrations/common-tasks#accessing-organization-ids"},"Accessing Organization IDs")," for instructions on fetching your ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"target")," : The base URL of the Application/API under test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"plan")," : Specify the LRN of your Levo Test Plan (from the Levo console) here. The LRN uniquely identifies the Test Plan to execute"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"LRN",src:n(4768).Z,width:"3560",height:"1094"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"base64_env")," : This is an ",(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," setting."),(0,r.kt)("p",{parentName:"li"},"  If you are using an ",(0,r.kt)("a",{parentName:"p",href:"../security-contract-testing/test-your-app/test-app-security/data-driven/configure-env-yml"},"environment file")," to define authentication details, you add the contents of the file here in BASE64 encoded format.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"report")," : This is an ",(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," setting."),(0,r.kt)("p",{parentName:"li"},"  This setting controls the reporting of test results to the Levo Cloud. If you do not want to send test results to the Levo Cloud, set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cli_extra_args")," : This is an ",(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," setting."),(0,r.kt)("p",{parentName:"li"},"  Use this setting to pass extra CLI arguments like headers or the verbosity level. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\\\\u02dd")," to escape quotes."),(0,r.kt)("p",{parentName:"li"},"  E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'cli_extra_args: "-H \\\\\\"Authorization: Bearer 1234\\\\\\" --verbosity INFO"')))),(0,r.kt)("p",null,"Here is a sample ",(0,r.kt)("em",{parentName:"p"},"Test Plan Action")," with its configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"- uses: levoai/actions/test-plan@v1-beta\n  with:\n    # Authorization key required to execute the Levo CLI. Please refer to https://app.levo.ai/settings/keys to get your authorization key.\n    authorization-key: <'Specify your CLI authorization key here'>\n\n    # The ID of your organization in Levo dashboard. Please refer to https://app.levo.ai/settings/organization to get your organization id.\n    organization-id: <'Specify your organization ID here'>\n\n    # The base URL of the Application/API under test.\n    target: <'Specify the target base URL here'>\n\n    # Test plan LRN. You can get this value from the test plan section in the Levo SaaS console.\n    plan: <'Specify your Test Plan's LRN here'>\n\n    # [OPTIONAL] Base64 encoded environment file content.\n    base64_env: <'The contents of your environment file as a BASE64 encoded string here'>\n\n    # [OPTIONAL] If you do not want to report the result of this execution to the Levo cloud, set this value to false. Default: true.\n    report: <true|false>\n\n    # [OPTIONAL] Use this option to pass extra CLI arguments like headers or verbosity.\n    # Please use \\\\\\\u02dd to escape quotes.\n    # E.g. cli_extra_args: \"-H \\\\\\\"Authorization: Bearer 1234\\\\\\\" --verbosity INFO\"\n    cli_extra_args: <\"Specify any extra arguments here\">\n")),(0,r.kt)("h4",{id:"job-outputs"},"Job Outputs"),(0,r.kt)("p",null,"This pre-built ",(0,r.kt)("em",{parentName:"p"},"Action")," produces the below ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs"},"Outputs"),", which can be referenced by downstream Actions/Jobs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"outputs:\n  success:\n    description: '# of successful test cases'\n  failed:\n    description: '# of failed test cases'\n  skipped:\n    description: '# of skipped test cases'\n")),(0,r.kt)("h3",{id:"execute-standalone-schema-conformance-tests-aka-contract-tests-via-actions"},"Execute Standalone Schema Conformance Tests (aka Contract Tests) Via Actions"),(0,r.kt)("h4",{id:"prerequisites-2"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Forever Free Account on Levo.ai")),(0,r.kt)("h4",{id:"action-configuration-1"},"Action Configuration"),(0,r.kt)("p",null,"The pre-built action for executing standalone ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema Conformance Tests")," requires the following configuration settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"authorization-key")," : Specify your CLI authorization key here. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/integrations/common-tasks#generating-cli-authorization-keys"},"Generating CLI Authorization Keys")," for instructions on fetching your key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"organization-id")," : Specify your ",(0,r.kt)("em",{parentName:"p"},"Organization ID")," here. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/integrations/common-tasks#accessing-organization-ids"},"Accessing Organization IDs")," for instructions on fetching your ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"schema")," : The URL or file path of the (under test) API's OpenAPI schema (YAML or JSON format)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"target")," : The base URL of the Application/API under test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"report")," : This is an ",(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," setting."),(0,r.kt)("p",{parentName:"li"},"  This setting controls the reporting of test results to the Levo Cloud. If you do not want to send test results to the Levo Cloud, set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cli_extra_args")," : This is an ",(0,r.kt)("strong",{parentName:"p"},"OPTIONAL")," setting."),(0,r.kt)("p",{parentName:"li"},"  Use this setting to pass extra CLI arguments like headers or the verbosity level. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\\\\u02dd")," to escape quotes."),(0,r.kt)("p",{parentName:"li"},"  E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'cli_extra_args: "-H \\\\\\"Authorization: Bearer 1234\\\\\\" --verbosity INFO"')))),(0,r.kt)("p",null,"Here is a sample ",(0,r.kt)("em",{parentName:"p"},"Schema Conformance Test Action")," with its configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"- uses: levoai/actions/schema-conformance@v1-beta\n  with:\n    # Authorization key required to execute the Levo CLI. Please refer to https://app.levo.ai/settings/keys to get your authorization key.\n    authorization-key: <'Specify your CLI authorization key here'>\n\n    # The ID of your organization in the Levo dashboard. Please refer to https://app.levo.ai/settings/organization to get your organization id.\n    organization-id: <'Specify your organization ID here'>\n\n    # The URL or file path of the API's OpenAPI schema.\n    schema: '<URL of schema|File path of schema>'\n\n    # The base URL of the Application/API under test.\n    target: '<Specify the target base URL here>'\n\n    # [OPTIONAL] If you do not want to report the result of this execution to the Levo cloud, set this value to false. Default: true.\n    report: <true|false>\n\n    # [OPTIONAL] Use this option to pass extra CLI arguments like headers or verbosity.\n    # Please use \\\\\\\u02dd to escape quotes.\n    # E.g. cli_extra_args: \"-H \\\\\\\"Authorization: Bearer 1234\\\\\\\" --verbosity INFO\"\n    cli_extra_args: <\"Specify any extra arguments here\">\n")),(0,r.kt)("h4",{id:"job-outputs-1"},"Job Outputs"),(0,r.kt)("p",null,"This pre-built ",(0,r.kt)("em",{parentName:"p"},"Action")," produces the below ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs"},"Outputs"),", which can be referenced by downstream Actions/Jobs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"outputs:\n  success:\n    description: '# of successful test cases'\n  failed:\n    description: '# of failed test cases'\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"others"},"Others"),(0,r.kt)("p",null,"Need support for a CI/CD vendor that is not listed above?"),(0,r.kt)("p",null,"Levo's autogenerated tests can be embedded in any CI/CD product by simply wrapping the Levo CLI in a shell script that is invoked by your CI/CD vendor's job hooks."),(0,r.kt)("p",null,"Contact ",(0,r.kt)("inlineCode",{parentName:"p"},"support@levo.ai")," for more information."),(0,r.kt)("br",null),(0,r.kt)("hr",null))}d.isMDXComponent=!0},9037:function(e,t,n){t.Z=n.p+"assets/images/add-env-file-to-jenkins-secret-41d210cfd5ea027ecf30f18f69952dbc.png"},9161:function(e,t,n){t.Z=n.p+"assets/images/add-jenkins-cli-auth-key-2a1c3f45e4b965cd018b7e4d572d768e.png"},8172:function(e,t,n){t.Z=n.p+"assets/images/jenkins-build-step-03ad59ffec8355ecb1f1207661d8cc0a.png"},2669:function(e,t,n){t.Z=n.p+"assets/images/jenkins-levo-test-plan-build-step-939231aca0d437788d5b3898c83ba5d2.png"},3353:function(e,t,n){t.Z=n.p+"assets/images/levo-quality-gates-9f482c3c4ddab5b3185f183cf88848da.svg"},4768:function(e,t,n){t.Z=n.p+"assets/images/test-plan-lrn-469d9ba90b4bc5b726e6de6a847413c2.png"}}]);