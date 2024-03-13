"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1091],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},792:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:5},s="AWS CloudFront",u={unversionedId:"install-traffic-capture-sensors/aws-cloudfront",id:"install-traffic-capture-sensors/aws-cloudfront",title:"AWS CloudFront",description:"Lambda@Edge functions to ingest traffic from AWS CloudFront distributions.",source:"@site/docs/install-traffic-capture-sensors/aws-cloudfront.md",sourceDirName:"install-traffic-capture-sensors",slug:"/install-traffic-capture-sensors/aws-cloudfront",permalink:"/install-traffic-capture-sensors/aws-cloudfront",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/install-traffic-capture-sensors/aws-cloudfront.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"AWS Traffic Mirroring",permalink:"/install-traffic-capture-sensors/aws-traffic-mirroring"},next:{title:"Sensor on MacOS",permalink:"/install-traffic-capture-sensors/sensor-on-macos"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Creating the Lambda Functions using the AWS CLI",id:"creating-the-lambda-functions-using-the-aws-cli",level:3},{value:"Associating the Lambdas with a CloudFront Distribution",id:"associating-the-lambdas-with-a-cloudfront-distribution",level:3}],d={toc:p};function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-cloudfront"},"AWS CloudFront"),(0,i.kt)("p",null,"Lambda@Edge functions to ingest traffic from AWS CloudFront distributions."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the AWS CLI (version 2) by following the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS docs"),"."),(0,i.kt)("li",{parentName:"ul"},"You have sufficient permissions on AWS to create and deploy Lambda@Edge functions."),(0,i.kt)("li",{parentName:"ul"},"The Satellite has been successfully set up and is reachable (via HTTPS) from the worker.")),(0,i.kt)("h3",{id:"creating-the-lambda-functions-using-the-aws-cli"},"Creating the Lambda Functions using the AWS CLI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtain your organization's ID from ",(0,i.kt)("a",{parentName:"li",href:"https://app.levo.ai/settings/organizations"},"https://app.levo.ai/settings/organizations")," or by\nclicking on your profile picture in Levo's dashboard, and navigating to ",(0,i.kt)("inlineCode",{parentName:"li"},"User Settings -> Organizations"),"."),(0,i.kt)("li",{parentName:"ul"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"install.sh")," script in the repository.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/levoai/aws-cloudfront-lambda\ncd aws-cloudfront-lambda\nLEVO_ORG_ID=<value> ./install.sh\n")),(0,i.kt)("h3",{id:"associating-the-lambdas-with-a-cloudfront-distribution"},"Associating the Lambdas with a CloudFront Distribution"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://us-east-1.console.aws.amazon.com/cloudfront/v4/home#/distributions"},"AWS CloudFront Console")," and select your distribution."),(0,i.kt)("li",{parentName:"ol"},'Click on the "Behaviors" tab, then click on the "Create Behaviour" button.'),(0,i.kt)("li",{parentName:"ol"},"Configure the behaviour and ensure that the following properties are set:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Path pattern: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," to send all JSON payloads to Levo, or use a more specific API pattern"),(0,i.kt)("li",{parentName:"ul"},"Origin and origin groups: The origin for which the traffic should be sent"),(0,i.kt)("li",{parentName:"ul"},"Allowed HTTP methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE"),(0,i.kt)("li",{parentName:"ul"},"Cache policy: Set this to any policy as per your requirements"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Function Associations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Origin request"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Function type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Lambda@Edge")),(0,i.kt)("li",{parentName:"ul"},'Function ARN: Paste the "Request Handler ARN" value printed by the ',(0,i.kt)("inlineCode",{parentName:"li"},"install.sh")," script"),(0,i.kt)("li",{parentName:"ul"},"Include body: ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Origin response"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Function type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Lambda@Edge")),(0,i.kt)("li",{parentName:"ul"},'Function ARN: Paste the "Response Handler ARN" value printed by the ',(0,i.kt)("inlineCode",{parentName:"li"},"install.sh")," script"))))))),(0,i.kt)("li",{parentName:"ol"},'Click on the "Create behaviour" button to save the configuration.')),(0,i.kt)("p",null,"That's all!\nWithin a few minutes, you should start seeing API catalogs in your Levo dashboard."))}f.isMDXComponent=!0}}]);