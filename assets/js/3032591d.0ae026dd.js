"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[76448],{67660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"reference/dependency-matrix","title":"Dependency matrix","description":"Dependency matrix of Kubewarden.","source":"@site/versioned_docs/version-1.18/reference/dependency-matrix.md","sourceDirName":"reference","slug":"/reference/dependency-matrix","permalink":"/1.18/reference/dependency-matrix","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.18/reference/dependency-matrix.md","tags":[],"version":"1.18","lastUpdatedAt":1741176355000,"sidebarPosition":10,"frontMatter":{"sidebar_label":"Dependency matrix","sidebar_position":10,"title":"Dependency matrix","description":"Dependency matrix of Kubewarden.","keywords":["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-all"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},"sidebar":"docs","previous":{"title":"Custom Resources Definitions (CRD)","permalink":"/1.18/reference/CRDs"},"next":{"title":"Upgrade path","permalink":"/1.18/reference/upgrade-path"}}');var d=t(74848),s=t(28453);const c={sidebar_label:"Dependency matrix",sidebar_position:10,title:"Dependency matrix",description:"Dependency matrix of Kubewarden.",keywords:["dependency","dependencies","CRD","charts","matrix"],"doc-persona":["kubewarden-all"],"doc-type":["reference"],"doc-topic":["operator-manual","dependencies"]},i=void 0,l={},a=[{value:"Opentelemetry, metrics and tracing dependencies",id:"opentelemetry-metrics-and-tracing-dependencies",level:2},{value:"Optional dependencies",id:"optional-dependencies",level:2},{value:"Rancher",id:"rancher",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{children:(0,d.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/dependency-matrix"})}),"\n",(0,d.jsx)(n.p,{children:"This page lists the dependencies of Kubewarden, with their relevant\nversion constraints. Versions outside of the provided ranges may work but are\nnot tested."}),"\n",(0,d.jsx)(n.h2,{id:"opentelemetry-metrics-and-tracing-dependencies",children:"Opentelemetry, metrics and tracing dependencies"}),"\n",(0,d.jsxs)(n.p,{children:["At the time of writing, the ",(0,d.jsx)(n.a,{href:"https://opentelemetry.io",children:"Opentelemetry"})," stack\nkeeps improving. Still, is not yet stable, and unannounced\nbackwards-incompatible changes still happen. Kubewarden devs do their best to\ntrack Opentelemetry stack changes and adjust to them. Kubewarden is tested against a known working\nrange of Opentelemetry, metrics and tracing stack."]}),"\n",(0,d.jsx)(n.h2,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,d.jsx)(n.p,{children:"Needed for specific features."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Chart dependency"}),(0,d.jsxs)(n.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(n.code,{children:"appVersion"})]}),(0,d.jsxs)(n.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(n.code,{children:"version"})]}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"open-telemetry/opentelemetry-operator"})," chart"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)(n.code,{children:">= 0.98"})}),(0,d.jsxs)(n.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(n.code,{children:"0.56.0"})]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"OTLM"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"prometheus-community/kube-prometheus-stack"})," chart"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)(n.code,{children:">= v0.69"})}),(0,d.jsxs)(n.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(n.code,{children:"51.5.3"})]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Metrics"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"jaegertracing/jaeger-operator"})," chart"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)(n.code,{children:">= 1.49 < 2"})}),(0,d.jsxs)(n.td,{style:{textAlign:"center"},children:["Example: ",(0,d.jsx)(n.code,{children:"2.49.0"})]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Tracing"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"kyverno/policy-reporter"})," chart"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)(n.code,{children:">= 2 < 3"})}),(0,d.jsxs)(n.td,{style:{textAlign:"center"},children:["In ",(0,d.jsx)(n.code,{children:"kubewarden-controller"})," chart as subchart"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Policy Reports UI"})]})]})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"CRD dependency"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Version"}),(0,d.jsxs)(n.th,{style:{textAlign:"center"},children:["Helm chart ",(0,d.jsx)(n.code,{children:"version"})]}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Feature"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"policyreports.wgpolicyk8s.io"})," CRDs"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)(n.code,{children:"v1alpha1"})}),(0,d.jsxs)(n.td,{style:{textAlign:"center"},children:["In ",(0,d.jsx)(n.code,{children:"kubewarden-defaults"})," chart or manually installed"]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"Audit Scanner"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"rancher",children:"Rancher"}),"\n",(0,d.jsx)(n.p,{children:"For downstream consumers such as Rancher, Kubewarden is tested against the\nmonitoring and tracing Helm charts provided in the Rancher charts repository."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(96540);const d={},s=r.createContext(d);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);