"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7411],{3905:function(M,N,t){t.d(N,{Zo:function(){return T},kt:function(){return z}});var i=t(7294);function u(M,N,t){return N in M?Object.defineProperty(M,N,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[N]=t,M}function D(M,N){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);N&&(i=i.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),t.push.apply(t,i)}return t}function e(M){for(var N=1;N<arguments.length;N++){var t=null!=arguments[N]?arguments[N]:{};N%2?D(Object(t),!0).forEach((function(N){u(M,N,t[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(t,N))}))}return M}function r(M,N){if(null==M)return{};var t,i,u=function(M,N){if(null==M)return{};var t,i,u={},D=Object.keys(M);for(i=0;i<D.length;i++)t=D[i],N.indexOf(t)>=0||(u[t]=M[t]);return u}(M,N);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(i=0;i<D.length;i++)t=D[i],N.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(u[t]=M[t])}return u}var I=i.createContext({}),j=function(M){var N=i.useContext(I),t=N;return M&&(t="function"==typeof M?M(N):e(e({},N),M)),t},T=function(M){var N=j(M.components);return i.createElement(I.Provider,{value:N},M.children)},g={inlineCode:"code",wrapper:function(M){var N=M.children;return i.createElement(i.Fragment,{},N)}},c=i.forwardRef((function(M,N){var t=M.components,u=M.mdxType,D=M.originalType,I=M.parentName,T=r(M,["components","mdxType","originalType","parentName"]),c=j(t),z=u,a=c["".concat(I,".").concat(z)]||c[z]||g[z]||D;return t?i.createElement(a,e(e({ref:N},T),{},{components:t})):i.createElement(a,e({ref:N},T))}));function z(M,N){var t=arguments,u=N&&N.mdxType;if("string"==typeof M||u){var D=t.length,e=new Array(D);e[0]=c;var r={};for(var I in N)hasOwnProperty.call(N,I)&&(r[I]=N[I]);r.originalType=M,r.mdxType="string"==typeof M?M:u,e[1]=r;for(var j=2;j<D;j++)e[j]=t[j];return i.createElement.apply(null,e)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4095:function(M,N,t){t.r(N),t.d(N,{assets:function(){return T},contentTitle:function(){return I},default:function(){return z},frontMatter:function(){return r},metadata:function(){return j},toc:function(){return g}});var i=t(3117),u=t(102),D=(t(7294),t(3905)),e=["components"],r={sidebar_position:1},I="Quickstart",j={unversionedId:"api-observability/quickstart/quickstart",id:"api-observability/quickstart/quickstart",title:"Quickstart",description:"Evaluate Levo's API Observability in Action with your favourite tools.",source:"@site/docs/api-observability/quickstart/quickstart.md",sourceDirName:"api-observability/quickstart",slug:"/api-observability/quickstart/",permalink:"/api-observability/quickstart/",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/api-observability/quickstart/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Log Parser",permalink:"/api-observability/install-guide/install-sensor/log-parser"},next:{title:"Quickstart with Minikube",permalink:"/api-observability/quickstart/quickstart-minikube"}},T={},g=[{value:"Quickstart with Minikube",id:"quickstart-with-minikube",level:2},{value:"Quickstart with Burp",id:"quickstart-with-burp",level:2},{value:"Quickstart with OWASP ZAP",id:"quickstart-with-owasp-zap",level:2},{value:"Quickstart with MITM proxy in Docker",id:"quickstart-with-mitm-proxy-in-docker",level:2}],c={toc:g};function z(M){var N=M.components,r=(0,u.Z)(M,e);return(0,D.kt)("wrapper",(0,i.Z)({},c,r,{components:N,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"quickstart"},"Quickstart"),(0,D.kt)("p",null,"Evaluate Levo's API Observability in Action with your favourite tools."),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Quickstart for API Observability",src:t(8185).Z,width:"304",height:"286"})),(0,D.kt)("h2",{id:"quickstart-with-minikube"},(0,D.kt)("a",{parentName:"h2",href:"/api-observability/quickstart/quickstart-minikube"},"Quickstart with Minikube")),(0,D.kt)("h2",{id:"quickstart-with-burp"},(0,D.kt)("a",{parentName:"h2",href:"/api-observability/quickstart/quickstart-burp-plugin"},"Quickstart with Burp")),(0,D.kt)("h2",{id:"quickstart-with-owasp-zap"},(0,D.kt)("a",{parentName:"h2",href:"/api-observability/quickstart/quickstart-zap-addon"},"Quickstart with OWASP ZAP")),(0,D.kt)("h2",{id:"quickstart-with-mitm-proxy-in-docker"},(0,D.kt)("a",{parentName:"h2",href:"/api-observability/quickstart/quickstart-mitm"},"Quickstart with MITM proxy in Docker")),(0,D.kt)("br",null),(0,D.kt)("blockquote",null,(0,D.kt)("p",{parentName:"blockquote"},"If you are looking for comprehensive install instructions (for all supported platforms), please refer to the ",(0,D.kt)("a",{parentName:"p",href:"/api-observability/install-guide/"},"Install Guide"),".")))}z.isMDXComponent=!0},8185:function(M,N){N.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA0IiBoZWlnaHQ9IjI4NiIgdmlld0JveD0iMCAwIDMwNCAyODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjE3NSIgY3k9IjE0MyIgcj0iOTMiIGZpbGw9IiNGNUY5RkYiLz4KPHBhdGggZD0iTTE3NC43NTMgNDcuNjg2M0MxMzkuMTUzIDQ3LjY4NjMgMTA4LjAwNSA2Ny4wMTAzIDkxLjM0MjggOTUuNjczN0g1OS44NjczQzU4LjE3MjMgOTUuNjczNyA1Ni43OTgyIDk3LjA0MTcgNTYuNzk4MiA5OC43Mjg0QzU2Ljc5ODIgMTAwLjQxNyA1OC4xNzIzIDEwMS43ODkgNTkuODY3MyAxMDEuNzg5SDg4LjA3NzlDODQuNDQ1MSAxMDkuMjI0IDgxLjc1ODUgMTE3LjE5MyA4MC4xNjAzIDEyNS41NDRIMzguMjEwNUMzNi41MTU0IDEyNS41NDQgMzUuMTM3MiAxMjYuOTEyIDM1LjEzNzIgMTI4LjYwM0MzNS4xMzcyIDEzMC4yOTIgMzYuNTEzNCAxMzEuNjYyIDM4LjIxMDUgMTMxLjY2Mkg3OS4xODkyQzc4LjcwMTcgMTM1LjU1NCA3OC40NDg3IDEzOS41MTggNzguNDQ4NyAxNDMuNTM4Qzc4LjQ0ODcgMTQ3LjU2MyA3OC43MDE3IDE1MS41MjMgNzkuMTg5MiAxNTUuNDE5SDY1LjE1MTlDNjMuNDUyNyAxNTUuNDE5IDYyLjA3ODYgMTU2Ljc4MSA2Mi4wNzg2IDE1OC40NjhDNjIuMDc4NiAxNjAuMTU2IDYzLjQ1MjcgMTYxLjUyNiA2NS4xNTE5IDE2MS41MjZIODAuMTYwM0M4MS43NTg2IDE2OS44NzYgODQuNDQ1MSAxNzcuODQ3IDg4LjA3NzkgMTg1LjI4MUg1Ni4xNzI2QzU0LjQ3NzYgMTg1LjI4MSA1My4wOTk0IDE4Ni42NDkgNTMuMDk5NCAxODguMzQyQzUzLjA5OTQgMTkwLjAyOSA1NC40NzU2IDE5MS4zOTEgNTYuMTcyNiAxOTEuMzkxSDkxLjM0MjNDMTA4LjAwNyAyMjAuMDU2IDEzOS4xNTUgMjM5LjM3OCAxNzQuNzU3IDIzOS4zNzhDMjI3Ljg1NiAyMzkuMzcyIDI3MS4wNTkgMTk2LjM4MiAyNzEuMDU5IDE0My41M0MyNzEuMDU5IDkwLjY4NDUgMjI3Ljg1NiA0Ny42ODY3IDE3NC43NTIgNDcuNjg2N0wxNzQuNzUzIDQ3LjY4NjNaTTE3NC43NTMgMjMzLjI2NEMxMjUuMDM4IDIzMy4yNjQgODQuNTkxNyAxOTMuMDEzIDg0LjU5MTcgMTQzLjUyOUM4NC41OTE3IDk0LjA1MjggMTI1LjAzOCA1My44MDAyIDE3NC43NTMgNTMuODAwMkMyMjQuNDcgNTMuODAwMiAyNjQuOTE0IDk0LjA1NDkgMjY0LjkxNCAxNDMuNTI5QzI2NC45MTQgMTkzLjAxNSAyMjQuNDcyIDIzMy4yNjQgMTc0Ljc1MyAyMzMuMjY0WiIgZmlsbD0iIzVFNkM4NCIgc3Ryb2tlPSIjNUU2Qzg0IiBzdHJva2Utd2lkdGg9IjAuNiIvPgo8cGF0aCBkPSJNMTc0Ljc0OSA2OC40NDQzQzEzMy4xNTEgNjguNDQ0MyA5OS4zMDEzIDEwMi4xMjkgOTkuMzAxMyAxNDMuNTI5Qzk5LjMwMTMgMTg0LjkzNSAxMzMuMTQ3IDIxOC42MTggMTc0Ljc0OSAyMTguNjE4QzIxNi4zNTEgMjE4LjYxOCAyNTAuMjAyIDE4NC45MzcgMjUwLjIwMiAxNDMuNTI5QzI1MC4yMDIgMTAyLjEyNCAyMTYuMzUzIDY4LjQ0NDMgMTc0Ljc0OSA2OC40NDQzWk0xNzQuNzQ5IDIxMi41MDlDMTM2LjUzNSAyMTIuNTA5IDEwNS40NDcgMTgxLjU2OSAxMDUuNDQ3IDE0My41MzRDMTA1LjQ0NyAxMDUuNTAyIDEzNi41MzUgNzQuNTU4MyAxNzQuNzQ5IDc0LjU1ODNDMjEyLjk2NyA3NC41NTgzIDI0NC4wNTYgMTA1LjUwMyAyNDQuMDU2IDE0My41MzRDMjQ0LjA1NiAxODEuNTY3IDIxMi45NjggMjEyLjUwOSAxNzQuNzQ5IDIxMi41MDlaIiBmaWxsPSIjNUU2Qzg0IiBzdHJva2U9IiM1RTZDODQiIHN0cm9rZS13aWR0aD0iMC42Ii8+CjxwYXRoIGQ9Ik0yMDIuNDc0IDE1Ny4wNThMMTg5LjI1NCAxNDkuNzI0QzE5MC4wNzcgMTQ3LjgyMSAxOTAuNTMzIDE0NS43MzEgMTkwLjUzMyAxNDMuNTNDMTkwLjUzMyAxMzguODMgMTg4LjQzOSAxMzQuNjAzIDE4NS4xNCAxMzEuNzIzTDE5Ni4zNjcgMTA3LjA2OUMxOTcuMDY5IDEwNS41MzIgMTk2LjM4OCAxMDMuNzE4IDE5NC44MzUgMTAzLjAyM0MxOTMuMjkyIDEwMi4zMjcgMTkxLjQ2OSAxMDMuMDA4IDE5MC43NzQgMTA0LjU0NUwxNzkuNzk1IDEyOC42NTRDMTc4LjIwOSAxMjguMTIzIDE3Ni41MTggMTI3LjgzMSAxNzQuNzU3IDEyNy44MzFDMTY2LjA1OCAxMjcuODMxIDE1OC45NzggMTM0Ljg3MiAxNTguOTc4IDE0My41M0MxNTguOTc4IDE1Mi4xOSAxNjYuMDU2IDE1OS4yMzQgMTc0Ljc1NyAxNTkuMjM0QzE3OS4wMjggMTU5LjIzNCAxODIuOTA4IDE1Ny41MzIgMTg1Ljc1NSAxNTQuNzc0TDE5OS40ODUgMTYyLjM5MUMxOTkuOTYzIDE2Mi42NTkgMjAwLjQ3NyAxNjIuNzg0IDIwMC45ODcgMTYyLjc4NEMyMDIuMDU3IDE2Mi43ODQgMjAzLjEwOCAxNjIuMjE4IDIwMy42NjggMTYxLjIxNUMyMDQuNDkgMTU5Ljc0IDIwMy45NTggMTU3Ljg3NiAyMDIuNDc0IDE1Ny4wNTdWMTU3LjA1OFpNMTc0Ljc1MyAxNTMuMTI1QzE2OS40NDIgMTUzLjEyNSAxNjUuMTE2IDE0OC44MjEgMTY1LjExNiAxNDMuNTNDMTY1LjExNiAxMzguMjQ2IDE2OS40NDIgMTMzLjk0MiAxNzQuNzUzIDEzMy45NDJDMTgwLjA3MSAxMzMuOTQyIDE4NC4zOTYgMTM4LjI0NiAxODQuMzk2IDE0My41M0MxODQuMzkyIDE0OC44MjEgMTgwLjA3IDE1My4xMjUgMTc0Ljc1MyAxNTMuMTI1WiIgZmlsbD0iIzVFNkM4NCIgc3Ryb2tlPSIjNUU2Qzg0IiBzdHJva2Utd2lkdGg9IjAuNiIvPgo8cGF0aCBkPSJNMTc0Ljc1NCA5MC44MDQ1QzE3Ni40NDkgOTAuODA0NSAxNzcuODI3IDg5LjQzNjUgMTc3LjgyNyA4Ny43NTE3VjgyLjQwNTZDMTc3LjgyNyA4MC43MTg4IDE3Ni40NTEgNzkuMzUwOCAxNzQuNzU0IDc5LjM1MDhDMTczLjA2MSA3OS4zNTA4IDE3MS42ODcgODAuNzE4OCAxNzEuNjg3IDgyLjQwNTZWODcuNzUxN0MxNzEuNjg3IDg5LjQzNjUgMTczLjA2MSA5MC44MDQ1IDE3NC43NTQgOTAuODA0NVoiIGZpbGw9IiM1RTZDODQiIHN0cm9rZT0iIzVFNkM4NCIgc3Ryb2tlLXdpZHRoPSIwLjYiLz4KPHBhdGggZD0iTTE3NC43NTQgMTk2LjI1NEMxNzMuMDYxIDE5Ni4yNTQgMTcxLjY4NyAxOTcuNjIgMTcxLjY4NyAxOTkuMzA3VjIwNC42NTFDMTcxLjY4NyAyMDYuMzQgMTczLjA2MSAyMDcuNzEgMTc0Ljc1NCAyMDcuNzFDMTc2LjQ0OSAyMDcuNzEgMTc3LjgyNyAyMDYuMzQyIDE3Ny44MjcgMjA0LjY1MVYxOTkuMzA3QzE3Ny44MjcgMTk3LjYyIDE3Ni40NDkgMTk2LjI1NCAxNzQuNzU0IDE5Ni4yNTRaIiBmaWxsPSIjNUU2Qzg0IiBzdHJva2U9IiM1RTZDODQiIHN0cm9rZS13aWR0aD0iMC42Ii8+CjxwYXRoIGQ9Ik0yMzYuMTcgMTQwLjQ3NEgyMzAuODA0QzIyOS4xMDkgMTQwLjQ3NCAyMjcuNzMgMTQxLjg0IDIyNy43MyAxNDMuNTI5QzIyNy43MyAxNDUuMjE4IDIyOS4xMDcgMTQ2LjU4OCAyMzAuODA0IDE0Ni41ODhIMjM2LjE3QzIzNy44NjUgMTQ2LjU4OCAyMzkuMjQgMTQ1LjIyIDIzOS4yNCAxNDMuNTI5QzIzOS4yNCAxNDEuODQyIDIzNy44NjUgMTQwLjQ3NCAyMzYuMTcgMTQwLjQ3NFYxNDAuNDc0WiIgZmlsbD0iIzVFNkM4NCIgc3Ryb2tlPSIjNUU2Qzg0IiBzdHJva2Utd2lkdGg9IjAuNiIvPgo8cGF0aCBkPSJNMTE4LjcwOSAxNDAuNDc0SDExMy4zMzhDMTExLjY0MyAxNDAuNDc0IDExMC4yNjUgMTQxLjg0IDExMC4yNjUgMTQzLjUyOUMxMTAuMjY1IDE0NS4yMTggMTExLjY0MSAxNDYuNTg4IDExMy4zMzggMTQ2LjU4OEgxMTguNzA5QzEyMC40MDIgMTQ2LjU4OCAxMjEuNzc4IDE0NS4yMiAxMjEuNzc4IDE0My41MjlDMTIxLjc4IDE0MS44NDIgMTIwLjQwNiAxNDAuNDc0IDExOC43MDkgMTQwLjQ3NFoiIGZpbGw9IiM1RTZDODQiIHN0cm9rZT0iIzVFNkM4NCIgc3Ryb2tlLXdpZHRoPSIwLjYiLz4KPHBhdGggZD0iTTU1LjAxMjcgMTU4LjQ1OUM1NS4wMTI3IDE1Ni43NzIgNTMuNjM4NiAxNTUuNDEgNTEuOTQzNiAxNTUuNDFINDUuMDc1QzQzLjM3OTkgMTU1LjQxIDQyLjAwNTkgMTU2Ljc3MiA0Mi4wMDU5IDE1OC40NTlDNDIuMDA1OSAxNjAuMTQ4IDQzLjM4IDE2MS41MTggNDUuMDc1IDE2MS41MThINTEuOTQzNkM1My42Mzg2IDE2MS41MiA1NS4wMTI3IDE2MC4xNTIgNTUuMDEyNyAxNTguNDU5WiIgZmlsbD0iIzVFNkM4NCIgc3Ryb2tlPSIjNUU2Qzg0IiBzdHJva2Utd2lkdGg9IjAuNiIvPgo8L3N2Zz4K"}}]);