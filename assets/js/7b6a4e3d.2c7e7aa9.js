"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[68081],{16538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(85893),a=r(11151);const i={sidebar_label:"Tracing",title:"Tracing",description:"Tracing for Kubewarden.",keywords:["kubewarden","kubernetes","tracing"],"doc-type":["explanation","tutorial"],"doc-topic":["operator-manual","ui-extension","tracing"],"doc-persona":["default"]},o=void 0,s={id:"operator-manual/ui-extension/tracing",title:"Tracing",description:"Tracing for Kubewarden.",source:"@site/versioned_docs/version-1.10/operator-manual/ui-extension/03-tracing.md",sourceDirName:"operator-manual/ui-extension",slug:"/operator-manual/ui-extension/tracing",permalink:"/1.10/operator-manual/ui-extension/tracing",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/operator-manual/ui-extension/03-tracing.md",tags:[],version:"1.10",lastUpdatedAt:17313334e5,sidebarPosition:3,frontMatter:{sidebar_label:"Tracing",title:"Tracing",description:"Tracing for Kubewarden.",keywords:["kubewarden","kubernetes","tracing"],"doc-type":["explanation","tutorial"],"doc-topic":["operator-manual","ui-extension","tracing"],"doc-persona":["default"]},sidebar:"docs",previous:{title:"Monitoring",permalink:"/1.10/operator-manual/ui-extension/metrics"},next:{title:"Requirements",permalink:"/1.10/operator-manual/airgap/requirements"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Jaeger",id:"install-jaeger",level:2},{value:"Update <code>rancher-kubewarden-controller</code> with Jaeger endpoint",id:"update-rancher-kubewarden-controller-with-jaeger-endpoint",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Tracing allows collection of fine grained details about policy evaluations.\nIt's a useful tool for debugging issues in your Kubewarden deployment and policies."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"})," is used to receive, store and visualize trace events."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Policy tracing logs"})}),"\n",(0,t.jsx)(n.img,{alt:"UI Policy Tracing Logs",src:r(11506).Z+"",width:"1075",height:"1061"})]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Cert-Manager and OpenTelemetry are required.\nFollow ",(0,t.jsx)(n.a,{href:"/1.10/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry",children:"these instructions"})," to install Cert Manager and the OpenTelemetry Operator."]}),"\n",(0,t.jsx)(n.h2,{id:"install-jaeger",children:"Install Jaeger"}),"\n",(0,t.jsxs)(n.p,{children:["Apply the installation steps from the ",(0,t.jsx)(n.a,{href:"/1.10/operator-manual/telemetry/tracing/quickstart#install-jaeger",children:"tracing quickstart"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Once all the resources are created by the Jaeger operator, there is a\nService under ",(0,t.jsx)(n.code,{children:"my-open-telemetry-collector.jaeger.svc.cluster.local"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The Jaeger Query UI is reachable at the following address:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"https://<CLUSTER_IP>/api/v1/namespaces/jaeger/services/http:my-open-telemetry-query:16686/proxy/search\n"})}),"\n",(0,t.jsx)(n.p,{children:"This endpoint may be unique depending on your configuration.\nYou can find the endpoint listed for your Jaeger resource under the Services page."}),"\n",(0,t.jsxs)(n.h3,{id:"update-rancher-kubewarden-controller-with-jaeger-endpoint",children:["Update ",(0,t.jsx)(n.code,{children:"rancher-kubewarden-controller"})," with Jaeger endpoint"]}),"\n",(0,t.jsxs)(n.p,{children:["You'll need to edit the ",(0,t.jsx)(n.code,{children:"rancher-kubewarden-controller"}),' resource to add the Jaeger endpoint "my-open-telemetry-collector.jaeger.svc.cluster.local:4317".']}),"\n",(0,t.jsx)(n.p,{children:"For instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'telemetry:\n  tracing:\n    enabled: True\n    jaeger:\n      endpoint: "my-open-telemetry-collector.jaeger.svc.cluster.local:4317"\n      tls:\n        insecure: true\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"my-open-telemetry-collector"})," is the service we installed under the ",(0,t.jsx)(n.code,{children:"jaeger"})," namespace."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"For simplicity, we're not going to encrypt the communication between the\nOpenTelemetry collector and the Jaeger endpoint."}),(0,t.jsxs)(n.p,{children:["This is ",(0,t.jsx)(n.strong,{children:"not meant to be a production deployment"}),".\nWe recommend\nyou read Jaeger's ",(0,t.jsx)(n.a,{href:"https://www.jaegertracing.io/docs/latest/operator/",children:"official documentation"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"You should now be able to view any failed requests for policies tied to a specific Policy Server or the detail view for any given policy.\nYou can get a more in-depth view of the traces by using the Jaeger UI."})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11506:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/ui_policy_tracing-8ed4d8fe989286a671f867e04131aedc.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);