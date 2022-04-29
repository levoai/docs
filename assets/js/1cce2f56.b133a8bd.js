"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[253],{3905:function(e,t,M){M.d(t,{Zo:function(){return o},kt:function(){return u}});var N=M(7294);function i(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}function n(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(e);t&&(N=N.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,N)}return M}function a(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?n(Object(M),!0).forEach((function(t){i(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):n(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}function c(e,t){if(null==e)return{};var M,N,i=function(e,t){if(null==e)return{};var M,N,i={},n=Object.keys(e);for(N=0;N<n.length;N++)M=n[N],t.indexOf(M)>=0||(i[M]=e[M]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(N=0;N<n.length;N++)M=n[N],t.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(i[M]=e[M])}return i}var r=N.createContext({}),I=function(e){var t=N.useContext(r),M=t;return e&&(M="function"==typeof e?e(t):a(a({},t),e)),M},o=function(e){var t=I(e.components);return N.createElement(r.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return N.createElement(N.Fragment,{},t)}},g=N.forwardRef((function(e,t){var M=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),g=I(M),u=i,D=g["".concat(r,".").concat(u)]||g[u]||j[u]||n;return M?N.createElement(D,a(a({ref:t},o),{},{components:M})):N.createElement(D,a({ref:t},o))}));function u(e,t){var M=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=M.length,a=new Array(n);a[0]=g;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var I=2;I<n;I++)a[I]=M[I];return N.createElement.apply(null,a)}return N.createElement.apply(null,M)}g.displayName="MDXCreateElement"},7137:function(e,t,M){M.r(t),M.d(t,{assets:function(){return o},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return c},metadata:function(){return I},toc:function(){return j}});var N=M(3117),i=M(102),n=(M(7294),M(3905)),a=["components"],c={sidebar_position:2},r="API Schema / Contract Non-Conformance",I={unversionedId:"Miscellaneous/schema-conformance",id:"version-v1/Miscellaneous/schema-conformance",title:"API Schema / Contract Non-Conformance",description:"Schema Conformance",source:"@site/vulnerabilities_versioned_docs/version-v1/Miscellaneous/schema-conformance.md",sourceDirName:"Miscellaneous",slug:"/Miscellaneous/schema-conformance",permalink:"/vulnerabilities/v1/Miscellaneous/schema-conformance",tags:[],version:"v1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-v1/tutorialSidebar",previous:{title:"Web A10 - Server Side Request Forgery",permalink:"/vulnerabilities/v1/OWASP-WEB-10/A10-SSRF"}},o={},j=[{value:"What is it?",id:"what-is-it",level:2},{value:"References",id:"references",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Test case FAQs",id:"test-case-faqs",level:2},{value:"What are the type of schema conformance tests?",id:"what-are-the-type-of-schema-conformance-tests",level:3},{value:"Status Code Conformance Test",id:"status-code-conformance-test",level:4},{value:"Response Headers Schema Conformance Test",id:"response-headers-schema-conformance-test",level:4},{value:"Content Type Schema Conformance Test",id:"content-type-schema-conformance-test",level:4},{value:"Response Schema Conformance Test",id:"response-schema-conformance-test",level:4},{value:"Unexpected Server Error Schema Conformance Test",id:"unexpected-server-error-schema-conformance-test",level:4},{value:"What is the solution?",id:"what-is-the-solution",level:2}],g={toc:j};function u(e){var t=e.components,c=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,N.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-schema--contract-non-conformance"},"API Schema / Contract Non-Conformance"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Schema Conformance",src:M(5526).Z,width:"657",height:"380"})),(0,n.kt)("h2",{id:"what-is-it"},"What is it?"),(0,n.kt)("p",null,"API endpoints have a defined schema (aka contract), that is often described in ",(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},(0,n.kt)("strong",{parentName:"a"},"OpenAPI Specification"))," format. The contract allows clients of the API endpoint to interact with it, without knowledge of the underlying implementation. Schema / Contract conformance testing ensures that said contract matches the actual implementation of the API endpoint. ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/contract-driven-testing/"},"Contract testing")," is a critical tool to detect breaking changes before they are deployed to production!"),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.pact.io/"},"API Contract Testing"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/schemathesis/schemathesis/blob/master/README.rst"},"API Schema Validation"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/contract-driven-testing/"},"Contract Driven Testing")),(0,n.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"The API endpoints are exercised by sending specially crafted (fuzzed) payloads that violate the defined schema on purpose. If the API implementation is robust, the API will reject the request or gracefully fail."),(0,n.kt)("p",null,"For example, when dealing with string fields, if the defined maximum string length is 50 chars, the crafted payload could have a string length that exceeds 50 chars. If an integer field specifies positive ranges, the crafted payload could have negative values to test for proper input validation."),(0,n.kt)("p",null,"These tests will work on both authenticated and unauthenticated API endpoints."),(0,n.kt)("h2",{id:"test-case-faqs"},"Test case FAQs"),(0,n.kt)("h3",{id:"what-are-the-type-of-schema-conformance-tests"},"What are the type of schema conformance tests?"),(0,n.kt)("h4",{id:"status-code-conformance-test"},"Status Code Conformance Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"This test checks to see if the API implementation returns any undocumented response status codes.\n")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/394.html"},"CWE-394: Unexpected Status Code or Return Value"),", for additional information."),(0,n.kt)("h4",{id:"response-headers-schema-conformance-test"},"Response Headers Schema Conformance Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"This test checks to see if the API implementation returns all the `required` response headers documented in the schema.\n")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/838.html"},"CWE-838: Inappropriate Encoding for Output Context"),", for additional information."),(0,n.kt)("h4",{id:"content-type-schema-conformance-test"},"Content Type Schema Conformance Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"This test checks to see if the API implementation returns the appropriate `content types` documented in the schema.\n")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/838.html"},"CWE-838: Inappropriate Encoding for Output Context"),", for additional information."),(0,n.kt)("h4",{id:"response-schema-conformance-test"},"Response Schema Conformance Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"This test checks to see if the response body returned by API implementation conforms to the JSON structure documented in the schema.\n")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/838.html"},"CWE-838: Inappropriate Encoding for Output Context"),", for additional information."),(0,n.kt)("h4",{id:"unexpected-server-error-schema-conformance-test"},"Unexpected Server Error Schema Conformance Test"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"This test checks to see if `5XX Server Error` response codes are returned by the API implementation. `5XX` errors are unexpected errors.\n")),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/600.html"},"CWE-600: Uncaught Exception in Servlet"),", for additional information."),(0,n.kt)("h2",{id:"what-is-the-solution"},"What is the solution?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Document all expected response codes in the API schema."),(0,n.kt)("li",{parentName:"ul"},"Only document all the ",(0,n.kt)("inlineCode",{parentName:"li"},"required")," headers in the response section of the schema."),(0,n.kt)("li",{parentName:"ul"},"Document all expected ",(0,n.kt)("inlineCode",{parentName:"li"},"content-type")," that is returned in the response section of the schema."),(0,n.kt)("li",{parentName:"ul"},"Document (in the schema) all expected JSON structures that are returned by the API implementation in the response body."),(0,n.kt)("li",{parentName:"ul"},"In case of ",(0,n.kt)("inlineCode",{parentName:"li"},"Unexpected Server Error"),", the test case summary will indicate the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"input parameter")," value/ranges that caused the error. Use this hint to fix the implementation such that it either rejects the request or fails gracefully.")))}u.isMDXComponent=!0},5526:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjU3IiBoZWlnaHQ9IjM4MCIgdmlld0JveD0iMCAwIDY1NyAzODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMuNSIgeT0iMy41IiB3aWR0aD0iMjQ1IiBoZWlnaHQ9IjMxNyIgcng9IjYuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzVFNkM4NCIgc3Ryb2tlLXdpZHRoPSI3Ii8+CjxyZWN0IHg9IjM1NS41IiB5PSIzLjUiIHdpZHRoPSIyNDUiIGhlaWdodD0iMzE3IiByeD0iNi41IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjNUU2Qzg0IiBzdHJva2Utd2lkdGg9IjciLz4KPHBhdGggZD0iTTM2LjI4MjMgNjkuODQ2OVY2NS42NTU1QzMzLjE2ODMgNjUuNjU1NSAzMi41Mzc2IDY0LjQ1OTkgMzIuNTM3NiA2MS45MjRWNTguMDg3NEMzMi41Mzc2IDU2LjA2MzkgMzEuNjcwNSA1NC4yNTA3IDI3Ljg2MDEgNTMuNDc1NVY1Mi45NDk5QzMxLjY3MDUgNTIuMTc0NyAzMi41Mzc2IDUwLjM2MTUgMzIuNTM3NiA0OC4zNTEyVjQ0LjUxNDZDMzIuNTM3NiA0MS45NjU2IDMzLjE2ODMgNDAuNzY5OSAzNi4yODIzIDQwLjc2OTlWMzYuNTkxNkMzMC45NzQxIDM2LjU5MTYgMjcuMTc2OCAzNy40NzE5IDI3LjE3NjggNDMuOTQ5NlY0Ni44NTMzQzI3LjE3NjggNDkuNTQ2OSAyNi4xNjUxIDUwLjY5IDIzLjE0MzEgNTAuNjlWNTUuNzM1NEMyNi4xNjUxIDU1LjczNTQgMjcuMTc2OCA1Ni44Nzg2IDI3LjE3NjggNTkuNTcyMVY2Mi40ODlDMjcuMTc2OCA2OC45NjY2IDMwLjk3NDEgNjkuODQ2OSAzNi4yODIzIDY5Ljg0NjlaIiBmaWxsPSIjMThDODdEIi8+CjxwYXRoIGQ9Ik0zODguMjgyIDY5Ljg0NjlWNjUuNjU1NUMzODUuMTY4IDY1LjY1NTUgMzg0LjUzOCA2NC40NTk5IDM4NC41MzggNjEuOTI0VjU4LjA4NzRDMzg0LjUzOCA1Ni4wNjM5IDM4My42NyA1NC4yNTA3IDM3OS44NiA1My40NzU1VjUyLjk0OTlDMzgzLjY3IDUyLjE3NDcgMzg0LjUzOCA1MC4zNjE1IDM4NC41MzggNDguMzUxMlY0NC41MTQ2QzM4NC41MzggNDEuOTY1NiAzODUuMTY4IDQwLjc2OTkgMzg4LjI4MiA0MC43Njk5VjM2LjU5MTZDMzgyLjk3NCAzNi41OTE2IDM3OS4xNzcgMzcuNDcxOSAzNzkuMTc3IDQzLjk0OTZWNDYuODUzM0MzNzkuMTc3IDQ5LjU0NjkgMzc4LjE2NSA1MC42OSAzNzUuMTQzIDUwLjY5VjU1LjczNTRDMzc4LjE2NSA1NS43MzU0IDM3OS4xNzcgNTYuODc4NiAzNzkuMTc3IDU5LjU3MjFWNjIuNDg5QzM3OS4xNzcgNjguOTY2NiAzODIuOTc0IDY5Ljg0NjkgMzg4LjI4MiA2OS44NDY5WiIgZmlsbD0iIzE4Qzg3RCIvPgo8cGF0aCBkPSJNMjMuNzE3NyAyOTMuODQ3VjI4OS42NTZDMjYuODMxNyAyODkuNjU2IDI3LjQ2MjQgMjg4LjQ2IDI3LjQ2MjQgMjg1LjkyNFYyODIuMDg3QzI3LjQ2MjQgMjgwLjA2NCAyOC4zMjk1IDI3OC4yNTEgMzIuMTM5OSAyNzcuNDc1VjI3Ni45NUMyOC4zMjk1IDI3Ni4xNzUgMjcuNDYyNCAyNzQuMzYyIDI3LjQ2MjQgMjcyLjM1MVYyNjguNTE1QzI3LjQ2MjQgMjY1Ljk2NiAyNi44MzE3IDI2NC43NyAyMy43MTc3IDI2NC43N1YyNjAuNTkyQzI5LjAyNTkgMjYwLjU5MiAzMi44MjMyIDI2MS40NzIgMzIuODIzMiAyNjcuOTVWMjcwLjg1M0MzMi44MjMyIDI3My41NDcgMzMuODM0OSAyNzQuNjkgMzYuODU2OSAyNzQuNjlWMjc5LjczNUMzMy44MzQ5IDI3OS43MzUgMzIuODIzMiAyODAuODc5IDMyLjgyMzIgMjgzLjU3MlYyODYuNDg5QzMyLjgyMzIgMjkyLjk2NyAyOS4wMjU5IDI5My44NDcgMjMuNzE3NyAyOTMuODQ3WiIgZmlsbD0iIzE4Qzg3RCIvPgo8cGF0aCBkPSJNMzc1LjcxOCAyOTMuODQ3VjI4OS42NTZDMzc4LjgzMiAyODkuNjU2IDM3OS40NjIgMjg4LjQ2IDM3OS40NjIgMjg1LjkyNFYyODIuMDg3QzM3OS40NjIgMjgwLjA2NCAzODAuMzMgMjc4LjI1MSAzODQuMTQgMjc3LjQ3NVYyNzYuOTVDMzgwLjMzIDI3Ni4xNzUgMzc5LjQ2MiAyNzQuMzYyIDM3OS40NjIgMjcyLjM1MVYyNjguNTE1QzM3OS40NjIgMjY1Ljk2NiAzNzguODMyIDI2NC43NyAzNzUuNzE4IDI2NC43N1YyNjAuNTkyQzM4MS4wMjYgMjYwLjU5MiAzODQuODIzIDI2MS40NzIgMzg0LjgyMyAyNjcuOTVWMjcwLjg1M0MzODQuODIzIDI3My41NDcgMzg1LjgzNSAyNzQuNjkgMzg4Ljg1NyAyNzQuNjlWMjc5LjczNUMzODUuODM1IDI3OS43MzUgMzg0LjgyMyAyODAuODc5IDM4NC44MjMgMjgzLjU3MlYyODYuNDg5QzM4NC44MjMgMjkyLjk2NyAzODEuMDI2IDI5My44NDcgMzc1LjcxOCAyOTMuODQ3WiIgZmlsbD0iIzE4Qzg3RCIvPgo8cGF0aCBkPSJNMjMuNzE3NyAxODEuODQ3VjE3Ny42NTZDMjYuODMxNyAxNzcuNjU2IDI3LjQ2MjQgMTc2LjQ2IDI3LjQ2MjQgMTczLjkyNFYxNzAuMDg3QzI3LjQ2MjQgMTY4LjA2NCAyOC4zMjk1IDE2Ni4yNTEgMzIuMTM5OSAxNjUuNDc1VjE2NC45NUMyOC4zMjk1IDE2NC4xNzUgMjcuNDYyNCAxNjIuMzYyIDI3LjQ2MjQgMTYwLjM1MVYxNTYuNTE1QzI3LjQ2MjQgMTUzLjk2NiAyNi44MzE3IDE1Mi43NyAyMy43MTc3IDE1Mi43N1YxNDguNTkyQzI5LjAyNTkgMTQ4LjU5MiAzMi44MjMyIDE0OS40NzIgMzIuODIzMiAxNTUuOTVWMTU4Ljg1M0MzMi44MjMyIDE2MS41NDcgMzMuODM0OSAxNjIuNjkgMzYuODU2OSAxNjIuNjlWMTY3LjczNUMzMy44MzQ5IDE2Ny43MzUgMzIuODIzMiAxNjguODc5IDMyLjgyMzIgMTcxLjU3MlYxNzQuNDg5QzMyLjgyMzIgMTgwLjk2NyAyOS4wMjU5IDE4MS44NDcgMjMuNzE3NyAxODEuODQ3WiIgZmlsbD0iIzE4Qzg3RCIvPgo8cGF0aCBkPSJNMzc1LjcxOCAxODEuODQ3VjE3Ny42NTZDMzc4LjgzMiAxNzcuNjU2IDM3OS40NjIgMTc2LjQ2IDM3OS40NjIgMTczLjkyNFYxNzAuMDg3QzM3OS40NjIgMTY4LjA2NCAzODAuMzMgMTY2LjI1MSAzODQuMTQgMTY1LjQ3NVYxNjQuOTVDMzgwLjMzIDE2NC4xNzUgMzc5LjQ2MiAxNjIuMzYyIDM3OS40NjIgMTYwLjM1MVYxNTYuNTE1QzM3OS40NjIgMTUzLjk2NiAzNzguODMyIDE1Mi43NyAzNzUuNzE4IDE1Mi43N1YxNDguNTkyQzM4MS4wMjYgMTQ4LjU5MiAzODQuODIzIDE0OS40NzIgMzg0LjgyMyAxNTUuOTVWMTU4Ljg1M0MzODQuODIzIDE2MS41NDcgMzg1LjgzNSAxNjIuNjkgMzg4Ljg1NyAxNjIuNjlWMTY3LjczNUMzODUuODM1IDE2Ny43MzUgMzg0LjgyMyAxNjguODc5IDM4NC44MjMgMTcxLjU3MlYxNzQuNDg5QzM4NC44MjMgMTgwLjk2NyAzODEuMDI2IDE4MS44NDcgMzc1LjcxOCAxODEuODQ3WiIgZmlsbD0iIzE4Qzg3RCIvPgo8cGF0aCBkPSJNNjIuMjgyMyAxODEuODQ3VjE3Ny42NTZDNTkuMTY4MyAxNzcuNjU2IDU4LjUzNzYgMTc2LjQ2IDU4LjUzNzYgMTczLjkyNFYxNzAuMDg3QzU4LjUzNzYgMTY4LjA2NCA1Ny42NzA1IDE2Ni4yNTEgNTMuODYwMSAxNjUuNDc1VjE2NC45NUM1Ny42NzA1IDE2NC4xNzUgNTguNTM3NiAxNjIuMzYyIDU4LjUzNzYgMTYwLjM1MVYxNTYuNTE1QzU4LjUzNzYgMTUzLjk2NiA1OS4xNjgzIDE1Mi43NyA2Mi4yODIzIDE1Mi43N1YxNDguNTkyQzU2Ljk3NDEgMTQ4LjU5MiA1My4xNzY4IDE0OS40NzIgNTMuMTc2OCAxNTUuOTVWMTU4Ljg1M0M1My4xNzY4IDE2MS41NDcgNTIuMTY1MSAxNjIuNjkgNDkuMTQzMSAxNjIuNjlWMTY3LjczNUM1Mi4xNjUxIDE2Ny43MzUgNTMuMTc2OCAxNjguODc5IDUzLjE3NjggMTcxLjU3MlYxNzQuNDg5QzUzLjE3NjggMTgwLjk2NyA1Ni45NzQxIDE4MS44NDcgNjIuMjgyMyAxODEuODQ3WiIgZmlsbD0iIzE4Qzg3RCIvPgo8cGF0aCBkPSJNNDE0LjI4MiAxODEuODQ3VjE3Ny42NTZDNDExLjE2OCAxNzcuNjU2IDQxMC41MzggMTc2LjQ2IDQxMC41MzggMTczLjkyNFYxNzAuMDg3QzQxMC41MzggMTY4LjA2NCA0MDkuNjcgMTY2LjI1MSA0MDUuODYgMTY1LjQ3NVYxNjQuOTVDNDA5LjY3IDE2NC4xNzUgNDEwLjUzOCAxNjIuMzYyIDQxMC41MzggMTYwLjM1MVYxNTYuNTE1QzQxMC41MzggMTUzLjk2NiA0MTEuMTY4IDE1Mi43NyA0MTQuMjgyIDE1Mi43N1YxNDguNTkyQzQwOC45NzQgMTQ4LjU5MiA0MDUuMTc3IDE0OS40NzIgNDA1LjE3NyAxNTUuOTVWMTU4Ljg1M0M0MDUuMTc3IDE2MS41NDcgNDA0LjE2NSAxNjIuNjkgNDAxLjE0MyAxNjIuNjlWMTY3LjczNUM0MDQuMTY1IDE2Ny43MzUgNDA1LjE3NyAxNjguODc5IDQwNS4xNzcgMTcxLjU3MlYxNzQuNDg5QzQwNS4xNzcgMTgwLjk2NyA0MDguOTc0IDE4MS44NDcgNDE0LjI4MiAxODEuODQ3WiIgZmlsbD0iIzE4Qzg3RCIvPgo8Y2lyY2xlIGN4PSIyNTIiIGN5PSIzMjciIHI9IjUyIiBmaWxsPSIjNUU2Qzg0Ii8+CjxjaXJjbGUgY3g9IjYwNCIgY3k9IjMyNyIgcj0iNDgiIGZpbGw9IndoaXRlIiBzdHJva2U9IiM1RTZDODQiIHN0cm9rZS13aWR0aD0iOCIvPgo8Y2lyY2xlIGN4PSIyNTIiIGN5PSIzMjciIHI9IjQ0IiBmaWxsPSIjRkM1ODQyIi8+CjxwYXRoIGQ9Ik02MDQgMjgzQzU3OS43MTIgMjgzIDU2MCAzMDIuNzEyIDU2MCAzMjdDNTYwIDM1MS4yODggNTc5LjcxMiAzNzEgNjA0IDM3MUM2MjguMjg4IDM3MSA2NDggMzUxLjI4OCA2NDggMzI3QzY0OCAzMDIuNzEyIDYyOC4yODggMjgzIDYwNCAyODNaTTU5Ny40IDM0NC42TDU4MiAzMjdMNTg4LjIwNCAzMjAuNzk2TDU5Ny40IDMzMi4xNDhMNjIxLjk5NiAzMTAuMTQ4TDYyOC4yIDMxNi4zOTZMNTk3LjQgMzQ0LjZaIiBmaWxsPSIjMThDODdEIi8+CjxwYXRoIGQ9Ik0yNDggMzM5SDI1NkMyNTcuMTA1IDMzOSAyNTggMzM5Ljg5NSAyNTggMzQxVjM0OUMyNTggMzUwLjEwNSAyNTcuMTA1IDM1MSAyNTYgMzUxSDI0OEMyNDYuODk1IDM1MSAyNDYgMzUwLjEwNSAyNDYgMzQ5VjM0MUMyNDYgMzM5Ljg5NSAyNDYuODk1IDMzOSAyNDggMzM5WiIgZmlsbD0iI0Y0RjVGNyIvPgo8cGF0aCBkPSJNMjQ2IDMwM0gyNThMMjU3LjA3NyAzMjkuODhIMjQ2LjkyM0wyNDYgMzAzWiIgZmlsbD0iI0Y0RjVGNyIvPgo8cGF0aCBkPSJNNzcgNzFIMTkyIiBzdHJva2U9IiMxOEM4N0QiIHN0cm9rZS13aWR0aD0iMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDI5IDcxSDU0NCIgc3Ryb2tlPSIjMThDODdEIiBzdHJva2Utd2lkdGg9IjExIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTc3IDIwMkgxOTIiIHN0cm9rZT0iIzE4Qzg3RCIgc3Ryb2tlLXdpZHRoPSIxMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00MjkgMjAySDU0NCIgc3Ryb2tlPSIjMThDODdEIiBzdHJva2Utd2lkdGg9IjExIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTc3IDk1SDE5MiIgc3Ryb2tlPSIjMThDODdEIiBzdHJva2Utd2lkdGg9IjExIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQyOSA5NUg1NDQiIHN0cm9rZT0iIzE4Qzg3RCIgc3Ryb2tlLXdpZHRoPSIxMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03NyAyMjZIMTkyIiBzdHJva2U9IiNGQzU4NDIiIHN0cm9rZS13aWR0aD0iMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDI5IDIyNkg1NDQiIHN0cm9rZT0iIzE4Qzg3RCIgc3Ryb2tlLXdpZHRoPSIxMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03NyAxMTlIMTkyIiBzdHJva2U9IiMxOEM4N0QiIHN0cm9rZS13aWR0aD0iMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDI5IDExOUg1NDQiIHN0cm9rZT0iIzE4Qzg3RCIgc3Ryb2tlLXdpZHRoPSIxMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05NyAyNTBIMjEyIiBzdHJva2U9IiNGQzU4NDIiIHN0cm9rZS13aWR0aD0iMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDQ5IDI1MEg1NjQiIHN0cm9rZT0iIzE4Qzg3RCIgc3Ryb2tlLXdpZHRoPSIxMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="}}]);