"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[340],{3905:function(M,t,e){e.d(t,{Zo:function(){return y},kt:function(){return w}});var N=e(7294);function L(M,t,e){return t in M?Object.defineProperty(M,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[t]=e,M}function j(M,t){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);t&&(N=N.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),e.push.apply(e,N)}return e}function u(M){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?j(Object(e),!0).forEach((function(t){L(M,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(e,t))}))}return M}function o(M,t){if(null==M)return{};var e,N,L=function(M,t){if(null==M)return{};var e,N,L={},j=Object.keys(M);for(N=0;N<j.length;N++)e=j[N],t.indexOf(e)>=0||(L[e]=M[e]);return L}(M,t);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);for(N=0;N<j.length;N++)e=j[N],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(L[e]=M[e])}return L}var i=N.createContext({}),s=function(M){var t=N.useContext(i),e=t;return M&&(e="function"==typeof M?M(t):u(u({},t),M)),e},y=function(M){var t=s(M.components);return N.createElement(i.Provider,{value:t},M.children)},D={inlineCode:"code",wrapper:function(M){var t=M.children;return N.createElement(N.Fragment,{},t)}},n=N.forwardRef((function(M,t){var e=M.components,L=M.mdxType,j=M.originalType,i=M.parentName,y=o(M,["components","mdxType","originalType","parentName"]),n=s(e),w=L,a=n["".concat(i,".").concat(w)]||n[w]||D[w]||j;return e?N.createElement(a,u(u({ref:t},y),{},{components:e})):N.createElement(a,u({ref:t},y))}));function w(M,t){var e=arguments,L=t&&t.mdxType;if("string"==typeof M||L){var j=e.length,u=new Array(j);u[0]=n;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=M,o.mdxType="string"==typeof M?M:L,u[1]=o;for(var s=2;s<j;s++)u[s]=e[s];return N.createElement.apply(null,u)}return N.createElement.apply(null,e)}n.displayName="MDXCreateElement"},7794:function(M,t,e){e.r(t),e.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return y},default:function(){return n}});var N=e(7462),L=e(3366),j=(e(7294),e(3905)),u=["components"],o={sidebar_position:1},i="How do I use Levo with my own applications?",s={unversionedId:"test-your-app/testing-your-own-apps",id:"test-your-app/testing-your-own-apps",isDocsHomePage:!1,title:"How do I use Levo with my own applications?",description:"First review the Concepts section. Then follow these steps:",source:"@site/docs/test-your-app/testing-your-own-apps.md",sourceDirName:"test-your-app",slug:"/test-your-app/testing-your-own-apps",permalink:"/test-your-app/testing-your-own-apps",editUrl:"https://github.com/levoai/docs/edit/main/docs/test-your-app/testing-your-own-apps.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Run Reports",permalink:"/concepts/test-run-reports"},next:{title:"Using your own app to evaluate Levo's schema conformance testing",permalink:"/test-your-app/test-app-schema-conformance"}},y=[{value:"Setup Levo CLI &amp; sign up on Levo.ai",id:"setup-levo-cli--sign-up-on-levoai",children:[],level:4},{value:"Pick your use case &amp; follow instructions",id:"pick-your-use-case--follow-instructions",children:[{value:"<code>Don&#39;t have an application you can evaluate Levo with?</code>",id:"dont-have-an-application-you-can-evaluate-levo-with",children:[{value:"No worries. You have two options:",id:"no-worries-you-have-two-options",children:[],level:6},{value:"- Try Levo&#39;s OnBoarding, where a fully hosted sample app is available for you to evaluate Levo with.",id:"--try-levos-onboarding-where-a-fully-hosted-sample-app-is-available-for-you-to-evaluate-levo-with",children:[],level:6},{value:"- Or download the sample app, and follow these instructions.",id:"--or-download-the-sample-app-and-follow-these-instructions",children:[],level:6}],level:5}],level:4}],D={toc:y};function n(M){var t=M.components,o=(0,L.Z)(M,u);return(0,j.kt)("wrapper",(0,N.Z)({},D,o,{components:t,mdxType:"MDXLayout"}),(0,j.kt)("h1",{id:"how-do-i-use-levo-with-my-own-applications"},"How do I use Levo with my own applications?"),(0,j.kt)("p",null,(0,j.kt)("img",{src:e(9431).Z})),(0,j.kt)("p",null,"First review the ",(0,j.kt)("a",{parentName:"p",href:"/concepts/concepts"},"Concepts")," section. Then follow these steps:"),(0,j.kt)("h4",{id:"setup-levo-cli--sign-up-on-levoai"},"Setup Levo CLI & sign up on Levo.ai"),(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},(0,j.kt)("a",{parentName:"li",href:"/levo-cli/levo-cli-for-mac-os"},"Levo CLI for Mac OS")),(0,j.kt)("li",{parentName:"ul"},(0,j.kt)("a",{parentName:"li",href:"/levo-cli/levo-cli-for-linux"},"Levo CLI for Linux")),(0,j.kt)("li",{parentName:"ul"},(0,j.kt)("a",{parentName:"li",href:"/levo-cli/levo-cli-for-windows"},"Levo CLI for Windows"))),(0,j.kt)("h4",{id:"pick-your-use-case--follow-instructions"},"Pick your use case & follow instructions"),(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},(0,j.kt)("p",{parentName:"li"},(0,j.kt)("a",{parentName:"p",href:"/test-your-app/test-app-schema-conformance"},"Automatically test APIs for schema conformance"))),(0,j.kt)("li",{parentName:"ul"},(0,j.kt)("p",{parentName:"li"},(0,j.kt)("a",{parentName:"p",href:"/test-your-app/test-app-security/test-app-security-1"},"Automatically test APIs for security vulnerabilities")))),(0,j.kt)("hr",null),(0,j.kt)("h5",{id:"dont-have-an-application-you-can-evaluate-levo-with"},(0,j.kt)("inlineCode",{parentName:"h5"},"Don't have an application you can evaluate Levo with?")),(0,j.kt)("h6",{id:"no-worries-you-have-two-options"},"No worries. You have two options:"),(0,j.kt)("h6",{id:"--try-levos-onboarding-where-a-fully-hosted-sample-app-is-available-for-you-to-evaluate-levo-with"},"- Try Levo's ",(0,j.kt)("a",{parentName:"h6",href:"/trying-levo"},"OnBoarding"),", where a fully hosted sample app is available for you to evaluate Levo with."),(0,j.kt)("h6",{id:"--or-download-the-sample-app-and-follow-these-instructions"},"- Or download the sample app, and follow ",(0,j.kt)("a",{parentName:"h6",href:"/test-sample-app/levo-sample-applications"},"these")," instructions."))}n.isMDXComponent=!0},9431:function(M,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExIDUxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExIDUxMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ5Mi4xNjgsMzA5LjU3OWwtMTcuNjI2LTEwLjE3N2MyLjk2LTE0LjcyMyw0LjQ1OC0yOS40NjYsNC40NTgtNDMuOTAyYzAtMTQuNjQ2LTEuNDc0LTI5LjQwMy00LjM4NC00My45NDZsMTcuNTUyLTEwLjEzNA0KCQljNS40MzYtMy4xMzgsOS4zMjUtOC4yMDYsMTAuOTQ5LTE0LjI2OXMwLjc5MS0xMi4zOTYtMi4zNDgtMTcuODMybC00OC04My4xMzljLTMuMTM5LTUuNDM2LTguMjA2LTkuMzI1LTE0LjI2OS0xMC45NDkNCgkJYy02LjA2NC0xLjYyNC0xMi4zOTYtMC43OTEtMTcuODMzLDIuMzQ4bC0xNy41NjYsMTAuMTQyQzM4MC45MTIsNjguMiwzNTQuNzk4LDUzLjA5MiwzMjcsNDMuNjkyVjIzLjUNCgkJQzMyNywxMC41NDIsMzE2LjQ1OCwwLDMwMy41LDBoLTk2QzE5NC41NDIsMCwxODQsMTAuNTQyLDE4NCwyMy41djIwLjE5M2MtMjcuNjUsOS4zNjItNTMuNzI4LDI0LjQ5LTc1Ljk5OSw0NC4wODhMOTAuMzMyLDc3LjU3OQ0KCQljLTUuNDM3LTMuMTM5LTExLjc3LTMuOTczLTE3LjgzMy0yLjM0OGMtNi4wNjMsMS42MjUtMTEuMTMsNS41MTMtMTQuMjY5LDEwLjk0OWwtNDgsODMuMTM5DQoJCWMtMy4xMzksNS40MzYtMy45NzIsMTEuNzY5LTIuMzQ4LDE3LjgzMnM1LjUxMywxMS4xMzEsMTAuOTQ5LDE0LjI2OWwxNy42MjYsMTAuMTc3QzMzLjQ5OSwyMjYuMzIsMzIsMjQxLjA2MywzMiwyNTUuNQ0KCQljMCwxNC42NDQsMS40NzQsMjkuNDAxLDQuMzg0LDQzLjk0NWwtMTcuNTUyLDEwLjEzNGMtMTEuMjIyLDYuNDc5LTE1LjA4LDIwLjg3OS04LjYwMiwzMi4xMDJsNDgsODMuMTM5DQoJCWM2LjQ3OSwxMS4yMjEsMjAuODc5LDE1LjA4LDMyLjEwMiw4LjYwMWwxNy41NjUtMTAuMTQyYzIyLjE5LDE5LjUyMSw0OC4zMDMsMzQuNjI5LDc2LjEwMyw0NC4wM1Y0ODcuNQ0KCQljMCwxMi45NTgsMTAuNTQyLDIzLjUsMjMuNSwyMy41aDk2YzEyLjk1OCwwLDIzLjUtMTAuNTQyLDIzLjUtMjMuNXYtMjAuMTkzYzI3LjY1MS05LjM2Miw1My43MjktMjQuNDksNzYtNDQuMDg3bDE3LjY2OCwxMC4yMDENCgkJYzExLjIyMSw2LjQ3OSwyNS42MjMsMi42MiwzMi4xMDItOC42MDFsNDgtODMuMTM5QzUwNy4yNDgsMzMwLjQ1OCw1MDMuMzksMzE2LjA1OCw0OTIuMTY4LDMwOS41Nzl6IE00ODcuNzc5LDMzNC4xODFsLTQ4LDgzLjEzOA0KCQljLTIuMzQzLDQuMDYtNy41NTIsNS40NTUtMTEuNjExLDMuMTExbC0yMi4zOTItMTIuOTI4Yy0yLjg0NS0xLjY0My02LjQzLTEuMjQyLTguODQyLDAuOTg5DQoJCWMtMjIuODkzLDIxLjE3My01MC40MzcsMzcuMTQ4LTc5LjY1Myw0Ni4xOTljLTMuMTQsMC45NzMtNS4yODEsMy44NzctNS4yODEsNy4xNjRWNDg3LjVjMCw0LjY4Ny0zLjgxMyw4LjUtOC41LDguNWgtOTYNCgkJYy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41di0yNS42NDVjMC0zLjI4Ny0yLjE0MS02LjE5MS01LjI4LTcuMTY0Yy0yOS4zOTYtOS4xMDctNTYuOTc0LTI1LjA2Mi03OS43NTUtNDYuMTM5DQoJCWMtMS40MjEtMS4zMTUtMy4yNS0xLjk5NS01LjA5NS0xLjk5NWMtMS4yODYsMC0yLjU3OSwwLjMzLTMuNzQ4LDEuMDA1TDgyLjgzMiw0MjAuNDNjLTQuMDYsMi4zNDMtOS4yNjgsMC45NDgtMTEuNjExLTMuMTExDQoJCWwtNDgtODMuMTM4Yy0yLjM0My00LjA1OS0wLjk0Ny05LjI2OCwzLjExMS0xMS42MTJsMjIuMjcyLTEyLjg1OWMyLjg0NC0xLjY0Miw0LjI4OS00Ljk0MiwzLjU2Ni04LjE0Ng0KCQlDNDguNzM5LDI4Ni4zNTcsNDcsMjcwLjg1OCw0NywyNTUuNWMwLTE1LjEsMS43NjUtMzAuNTg0LDUuMjQ3LTQ2LjAyMmMwLjcyMi0zLjIwMy0wLjcyMy02LjUwNC0zLjU2Ni04LjE0NUwyNi4zMzIsMTg4LjQzDQoJCWMtMS45NjYtMS4xMzUtMy4zNzItMi45NjgtMy45Ni01LjE2MWMtMC41ODctMi4xOTMtMC4yODYtNC40ODQsMC44NDktNi40NWw0OC04My4xMzljMS4xMzUtMS45NjYsMi45NjgtMy4zNzMsNS4xNjItMy45Ng0KCQljMi4xOTItMC41ODgsNC40ODQtMC4yODYsNi40NSwwLjg0OWwyMi4zOTIsMTIuOTI4YzIuODQ2LDEuNjQ0LDYuNDMsMS4yNDIsOC44NDItMC45ODljMjIuODk0LTIxLjE3Myw1MC40MzctMzcuMTQ4LDc5LjY1My00Ni4xOTkNCgkJYzMuMTQtMC45NzMsNS4yODEtMy44NzcsNS4yODEtNy4xNjRWMjMuNWMwLTQuNjg3LDMuODEzLTguNSw4LjUtOC41aDk2YzQuNjg3LDAsOC41LDMuODEzLDguNSw4LjV2MjUuNjQ1DQoJCWMwLDMuMjg3LDIuMTQxLDYuMTkxLDUuMjgsNy4xNjRjMjkuMzk1LDkuMTA2LDU2Ljk3MywyNS4wNjEsNzkuNzU1LDQ2LjEzOWMyLjQxMiwyLjIzMiw1Ljk5NywyLjYzMyw4Ljg0MywwLjk5bDIyLjI5LTEyLjg2OQ0KCQljMS45NjctMS4xMzUsNC4yNTgtMS40MzcsNi40NS0wLjg0OWMyLjE5MywwLjU4OCw0LjAyNiwxLjk5NCw1LjE2MiwzLjk2bDQ4LDgzLjEzOWMxLjEzNSwxLjk2NiwxLjQzNyw0LjI1NywwLjg0OSw2LjQ1DQoJCWMtMC41ODgsMi4xOTMtMS45OTQsNC4wMjYtMy45Niw1LjE2MWwtMjIuMjcyLDEyLjg1OWMtMi44NDQsMS42NDItNC4yODksNC45NDMtMy41NjYsOC4xNDZjMy40MzEsMTUuMjA2LDUuMTcsMzAuNzA0LDUuMTcsNDYuMDY1DQoJCWMwLDE1LjEtMS43NjUsMzAuNTg0LTUuMjQ3LDQ2LjAyMWMtMC43MjIsMy4yMDMsMC43MjMsNi41MDMsMy41NjYsOC4xNDVsMjIuMzQ5LDEyLjkwMw0KCQlDNDg4LjcyNywzMjQuOTEzLDQ5MC4xMjMsMzMwLjEyMiw0ODcuNzc5LDMzNC4xODF6Ii8+DQoJPHBhdGggZD0iTTI1NS41LDEwNEMxNzEuOTYyLDEwNCwxMDQsMTcxLjk2MywxMDQsMjU1LjVTMTcxLjk2Miw0MDcsMjU1LjUsNDA3UzQwNywzMzkuMDM3LDQwNywyNTUuNVMzMzkuMDM4LDEwNCwyNTUuNSwxMDR6DQoJCSBNMjU1LjUsMzkyQzE4MC4yMzQsMzkyLDExOSwzMzAuNzY2LDExOSwyNTUuNVMxODAuMjM0LDExOSwyNTUuNSwxMTlTMzkyLDE4MC4yMzQsMzkyLDI1NS41UzMzMC43NjYsMzkyLDI1NS41LDM5MnoiLz4NCgk8cGF0aCBkPSJNMjgzLjUsMjE2aC0yOGMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXY2NGMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1OCw3LjUtNy41VjI3MWgyMC41DQoJCWMxNS4xNjQsMCwyNy41LTEyLjMzNiwyNy41LTI3LjVTMjk4LjY2NCwyMTYsMjgzLjUsMjE2eiBNMjgzLjUsMjU2SDI2M3YtMjVoMjAuNWM2Ljg5MywwLDEyLjUsNS42MDcsMTIuNSwxMi41DQoJCVMyOTAuMzkzLDI1NiwyODMuNSwyNTZ6Ii8+DQoJPHBhdGggZD0iTTIxNC41MjIsMjIwLjg2N2MtMS4wOTgtMi45MjctMy44OTYtNC44NjctNy4wMjItNC44NjdoLThjLTMuMTI2LDAtNS45MjUsMS45MzktNy4wMjIsNC44NjdsLTI0LDY0DQoJCWMtMS40NTUsMy44NzgsMC41MTEsOC4yMDEsNC4zODksOS42NTZjMy44NzgsMS40NTUsOC4yMDEtMC41MTEsOS42NTYtNC4zODlMMTg2LjY5NywyNzloMzMuNjA1bDQuMTc1LDExLjEzMw0KCQljMS4xMjksMy4wMTEsMy45ODcsNC44NjksNy4wMjMsNC44NjljMC44NzUsMCwxLjc2NS0wLjE1NCwyLjYzMi0wLjQ3OWMzLjg3OC0xLjQ1NCw1Ljg0NC01Ljc3OCw0LjM4OS05LjY1NkwyMTQuNTIyLDIyMC44Njd6DQoJCSBNMTkyLjMyMiwyNjRsMTEuMTc4LTI5LjgwN0wyMTQuNjc4LDI2NEgxOTIuMzIyeiIvPg0KCTxwYXRoIGQ9Ik0zMjcuNSwyMTZjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjV2NjRjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTgsNy41LTcuNXYtNjQNCgkJQzMzNSwyMTkuMzU4LDMzMS42NDIsMjE2LDMyNy41LDIxNnoiLz4NCgk8cGF0aCBkPSJNMzA5LjE1Miw4Ny4zYzUuMjA1LDEuNjU5LDEwLjM5NCwzLjU4NiwxNS40MjEsNS43MjZjMC45NTgsMC40MDgsMS45NTQsMC42MDEsMi45MzQsMC42MDFjMi45MTYsMCw1LjY5LTEuNzEyLDYuOTA0LTQuNTY0DQoJCWMxLjYyMi0zLjgxMS0wLjE1Mi04LjIxNi0zLjk2My05LjgzOGMtNS40NTgtMi4zMjMtMTEuMDktNC40MTUtMTYuNzQyLTYuMjE2Yy0zLjk0NS0xLjI1OC04LjE2NSwwLjkyMi05LjQyMyw0Ljg2OA0KCQlDMzAzLjAyNiw4MS44MjMsMzA1LjIwNiw4Ni4wNDIsMzA5LjE1Miw4Ny4zeiIvPg0KCTxwYXRoIGQ9Ik0xMDAuNDUsMzM5LjkwNGMtMS45ODQtMy42MzYtNi41NDEtNC45NzYtMTAuMTc2LTIuOTkyYy0zLjYzNiwxLjk4NC00Ljk3Niw2LjU0LTIuOTkyLDEwLjE3Ng0KCQljMy4xMTIsNS43MDQsNi41NTcsMTEuMzE1LDEwLjIzOSwxNi42NzdjMS40NTQsMi4xMTcsMy44MDEsMy4yNTUsNi4xODksMy4yNTVjMS40NjMsMCwyLjk0MS0wLjQyNyw0LjIzOS0xLjMxOA0KCQljMy40MTUtMi4zNDUsNC4yODItNy4wMTQsMS45MzctMTAuNDI4QzEwNi40OTMsMzUwLjMzMiwxMDMuMzE4LDM0NS4xNjEsMTAwLjQ1LDMzOS45MDR6Ii8+DQoJPHBhdGggZD0iTTI0MC4xNCw0MzEuMzQxYy00MC4xODktMy40NjMtNzguMzM3LTIwLjg3OS0xMDcuNDE2LTQ5LjA0MWMtMi45NzYtMi44ODItNy43MjQtMi44MDUtMTAuNjA1LDAuMTcNCgkJYy0yLjg4MSwyLjk3Ni0yLjgwNiw3LjcyNCwwLjE3LDEwLjYwNWMzMS41NSwzMC41NTUsNzIuOTQ3LDQ5LjQ1MiwxMTYuNTYzLDUzLjIxYzAuMjE5LDAuMDE5LDAuNDM2LDAuMDI4LDAuNjUyLDAuMDI4DQoJCWMzLjg1MSwwLDcuMTI3LTIuOTQ5LDcuNDY0LTYuODU2QzI0Ny4zMjMsNDM1LjMzMSwyNDQuMjY2LDQzMS42OTcsMjQwLjE0LDQzMS4zNDF6Ii8+DQoJPHBhdGggZD0iTTM2My40MjUsOTcuMjg3Yy0zLjQyLTIuMzM3LTguMDg3LTEuNDU5LTEwLjQyNCwxLjk2Yy0yLjMzNywzLjQyLTEuNDU5LDguMDg3LDEuOTYsMTAuNDI0DQoJCWMzNC44NDQsMjMuODEzLDYwLjA0OSw1OS4yNDgsNzAuOTcyLDk5Ljc3NmMwLjkwMiwzLjM0NiwzLjkzLDUuNTUsNy4yMzcsNS41NWMwLjY0NiwwLDEuMzAzLTAuMDg0LDEuOTU2LTAuMjYNCgkJYzQtMS4wNzgsNi4zNjgtNS4xOTQsNS4yOS05LjE5M0M0MjguNTY0LDE2MS41NjQsNDAxLjIyMSwxMjMuMTE4LDM2My40MjUsOTcuMjg3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="}}]);