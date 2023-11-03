"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Audit Scanner Installation",title:"Audit Scanner Installation"},i="Audit Scanner installation",l={unversionedId:"howtos/audit-scanner",id:"version-1.7/howtos/audit-scanner",title:"Audit Scanner Installation",description:'Beginning with version v1.7.0, Kubewarden has a new feature called "Audit Scanner".',source:"@site/versioned_docs/version-1.7/howtos/audit-scanner.md",sourceDirName:"howtos",slug:"/howtos/audit-scanner",permalink:"/1.7/howtos/audit-scanner",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/howtos/audit-scanner.md",tags:[],version:"1.7",lastUpdatedAt:1699006582,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{sidebar_label:"Audit Scanner Installation",title:"Audit Scanner Installation"},sidebar:"docs",previous:{title:"Installation",permalink:"/1.7/operator-manual/airgap/install"},next:{title:"Architecture",permalink:"/1.7/architecture"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Optional: Installation of Policy Reporter UI",id:"optional-installation-of-policy-reporter-ui",level:2},{value:"Ingress",id:"ingress",level:4},{value:"Port-forwarding",id:"port-forwarding",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audit-scanner-installation"},"Audit Scanner installation"),(0,r.kt)("p",null,"Beginning with version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.7.0"),', Kubewarden has a new feature called "Audit Scanner".\nA new component, called "audit-scanner", constantly checks the resources declared in the\ncluster, flagging the ones that do not adhere with the deployed Kubewarden policies.'),(0,r.kt)("p",null,"Policies evolve over the time: new ones are deployed and the existing ones can be\nupdated, both in terms of version and configuration settings.\nThis can lead to situations where resources already inside of the cluster\nare no longer compliant."),(0,r.kt)("p",null,"The audit scanner feature provides Kubernetes administrators\nwith a tool to consistently verify the compliance state of their clusters."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The audit scanner component is available since Kubewarden ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.7.0"),". Therefore,\nmake sure you are installing the Helm chart with app version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.7.0")," or\nhigher."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-crds")," Helm chart. The chart install the needed\n",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyReport")," CRDs by default."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install kubewarden-crds kubewarden/kubewarden-crds\n")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To store the results of policy reports, you need to have the PolicyReport\nCustom Resource Definitions (CRDs) available. If the necessary\nPolicyReport CRDs are already in the cluster, you cannot install them\nusing the kubewarden-crds chart. In such case, you can disable the\ninstallation of PolicyReport CRDs by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"installPolicyReportCRDs")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the chart. This means that the Kubewarden stack will not manage\nthose CRDs, and the responsibility will be with the administrator."),(0,r.kt)("p",{parentName:"admonition"},"See more info about the CRDs at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/wg-policy-prototypes"},"policy work group\nrepository")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," Helm chart."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install kubewarden-controller kubewarden/kubewarden-controller\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The audit scanner is enabled by default. If you want to disable it, set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"auditScanner.enable=false"),".")),(0,r.kt)("p",{parentName:"li"},"For more information about the installation of Kubewarden see the ",(0,r.kt)("a",{parentName:"p",href:"/1.7/quick-start"},"Quick Start guide")))),(0,r.kt)("p",null,"By default, the Audit Scanner is implemented as a\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs"},"Cronjob"),"\nthat will be triggered every 60 minutes. You can adjust this and other audit\nscanner settings by changing the kubewarden-controller chart\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/helm-charts/blob/main/charts/kubewarden-controller/values.yaml"},"values.yaml"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../explanations/audit-scanner"},"here")," more information about the Audit\nScanner."),(0,r.kt)("h2",{id:"optional-installation-of-policy-reporter-ui"},"Optional: Installation of Policy Reporter UI"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart comes with a subchart of the ",(0,r.kt)("a",{parentName:"p",href:"https://kyverno.github.io/policy-reporter"},"Policy Reporter"),".\nIt is disabled by default, and can be enabled by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"auditScanner.policyReporter=true"),".\nThe values of the Policy Reporter subchart are exposed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"policyReporter")," key of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," values."),(0,r.kt)("p",null,"This will install only part of the Policy Reporter upstream chart, the UI, which provides a visualization\nof the PolicyReports and ClusterPolicyReports in cluster.\nSee ",(0,r.kt)("a",{parentName:"p",href:"../explanations/audit-scanner"},"here")," more information about the Policy Reporter UI."),(0,r.kt)("p",null,"By default, the Policy Reporter UI is only exposed as a ClusterIP service with\nname ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller-ui")," in the namespace where the\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," chart was installed."),(0,r.kt)("h4",{id:"ingress"},"Ingress"),(0,r.kt)("p",null,"Users can provide their own Ingress configuration, or enable an Ingress via the subchart configuration (see the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress"),"\nconfig of the UI subchart\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kyverno/policy-reporter/blob/policy-reporter-2.19.4/charts/policy-reporter/charts/ui/values.yaml#L172-L189"},"here"),")."),(0,r.kt)("p",null,"See this example of an Ingress configuration via the subchart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'auditScanner:\n  policyReporter: true\npolicy-reporter: # subchart values settings\n  ingress:\n    enabled: true\n    hosts:\n      - host: "*.local"\n        paths:\n          - path: /ui\n            pathType: Exact\n')),(0,r.kt)("h4",{id:"port-forwarding"},"Port-forwarding"),(0,r.kt)("p",null,"For a quick look or debugging, one can setup a port-forwarding to the service with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl port-forward service/kubewarden-controller-ui 8082:8080 -n kubewarden\n")),(0,r.kt)("p",null,"Which will make the Policy Reporter UI available at http://localhost:8082."))}d.isMDXComponent=!0}}]);