"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6800],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return y}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(t),y=i,m=g["".concat(l,".").concat(y)]||g[y]||p[y]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1188:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],s={sidebar_position:2},l="Use a Private Docker Registry for Kubernetes Installations",u={unversionedId:"guides/general/private-registry",id:"guides/general/private-registry",title:"Use a Private Docker Registry for Kubernetes Installations",description:"To use private images while installing Levo's services in your environment, you need to follow 3 steps:",source:"@site/docs/guides/general/private-registry.md",sourceDirName:"guides/general",slug:"/guides/general/private-registry",permalink:"/guides/general/private-registry",draft:!1,editUrl:"https://github.com/levoai/docs/edit/main/docs/guides/general/private-registry.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Compatibility Check",permalink:"/guides/general/os-compat-check"},next:{title:"Supported Platforms",permalink:"/guides/general/supported-platforms"}},c={},p=[{value:"Copy Levo&#39;s public Docker images into your registry",id:"copy-levos-public-docker-images-into-your-registry",level:2},{value:"Create a secret in your Kubernetes cluster with the credentials to access your private registry",id:"create-a-secret-in-your-kubernetes-cluster-with-the-credentials-to-access-your-private-registry",level:2},{value:"Specify a values file to the Levo Helm chart to use your private registry",id:"specify-a-values-file-to-the-levo-helm-chart-to-use-your-private-registry",level:2},{value:"eBPF Sensor",id:"ebpf-sensor",level:3},{value:"Satellite",id:"satellite",level:3}],g={toc:p};function y(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-a-private-docker-registry-for-kubernetes-installations"},"Use a Private Docker Registry for Kubernetes Installations"),(0,o.kt)("p",null,"To use private images while installing Levo's services in your environment, you need to follow 3 steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy Levo's public Docker images into your registry."),(0,o.kt)("li",{parentName:"ol"},"Create a secret in your Kubernetes cluster with the credentials to access your private registry."),(0,o.kt)("li",{parentName:"ol"},"Specify a values file to the Levo Helm chart to use your private registry.")),(0,o.kt)("h2",{id:"copy-levos-public-docker-images-into-your-registry"},"Copy Levo's public Docker images into your registry"),(0,o.kt)("p",null,"An example bash script to do this for AWS ECR has been provided below. Please modify this script to suit your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\n\n# Dependencies: yq, helm, awscli, docker\n\nset -e\ntrap "exit" INT\n\nregion="us-west-2"\nregistry="your.registry"\n\nhelm repo add levoai https://charts.levo.ai || true\nhelm repo update\nimages=($(helm template levoai/levoai-satellite | yq -N \'..|.image? | select(.)\' | sort -u))\nimages+=($(helm template levoai/levoai-ebpf-sensor | yq -N \'..|.image? | select(.)\' | sort -u))\n\nfor image in "${images[@]}"; do\n  echo "Pushing $image to $registry"\n  docker pull "$image"\n  image_name=levoai/${image##*/}\n  repo_name=${image_name%:*}\n  aws ecr describe-repositories --repository-names $repo_name --region $region || aws ecr create-repository --repository-name $repo_name --region $region\n  docker tag "$image" "$registry/$image_name"\n  docker push "$registry/$image_name"\ndone\n')),(0,o.kt)("h2",{id:"create-a-secret-in-your-kubernetes-cluster-with-the-credentials-to-access-your-private-registry"},"Create a secret in your Kubernetes cluster with the credentials to access your private registry"),(0,o.kt)("p",null,"Adapt the following command for your private registry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret docker-registry ecr-auth --docker-server=your.registry --docker-username=AWS --docker-password=$(aws ecr get-login-password --region us-west-2)\n")),(0,o.kt)("h2",{id:"specify-a-values-file-to-the-levo-helm-chart-to-use-your-private-registry"},"Specify a values file to the Levo Helm chart to use your private registry"),(0,o.kt)("h3",{id:"ebpf-sensor"},"eBPF Sensor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sensor:\n  imageRepo: your.registry/levoai/ebpf_sensor\n  imageTag: 0.30.1\n")),(0,o.kt)("h3",{id:"satellite"},"Satellite"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  levoai_config_override:\n    onprem-api:\n      org-id: <id>\n      refresh-token: \n  busyboxImage: your.registry/levoai/busybox\n\nlevoai-collector:\n  image: your.registry/levoai/collector\n  imageTag: 0.17.2\n  imagePullSecrets:\n    - name: ecr-auth\n\nlevoai-ion:\n  image:\n    repository: your.registry/levoai/ion\n    tag: 0.6.0\n  imagePullSecrets: \n    - name: ecr-auth\n\nrabbitmq:\n  metrics:\n    enabled: true\n  image:\n    registry: your.registry\n    repository: levoai/rabbitmq\n    tag: 3.12.8-debian-11-r1\n    pullSecrets:\n      - ecr-auth\n\nsatellite:\n  image:\n    repository: your.registry/levoai/satellite\n    tag: 0.2.462\n  imagePullSecrets: \n    - name: ecr-auth\n\ntagger:\n  image:\n    repository: your.registry/levoai/satellite\n    tag: 0.2.462\n  imagePullSecrets: \n    - name: ecr-auth\n")))}y.isMDXComponent=!0}}]);