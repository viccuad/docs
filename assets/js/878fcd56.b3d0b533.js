"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[21662],{57013:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=t(85893),c=t(11151);const i={sidebar_label:"Metrics Reference",sidebar_position:30,title:"Metrics reference",description:"Metrics reference documentation for Kubewarden.",keywords:["kubewarden","kubernetes","metrics","reference"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","telemetry","metrics","reference"]},s=void 0,d={id:"reference/metrics-reference",title:"Metrics reference",description:"Metrics reference documentation for Kubewarden.",source:"@site/versioned_docs/version-1.11/reference/metrics-reference.md",sourceDirName:"reference",slug:"/reference/metrics-reference",permalink:"/1.11/reference/metrics-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/reference/metrics-reference.md",tags:[],version:"1.11",lastUpdatedAt:1730105841e3,sidebarPosition:30,frontMatter:{sidebar_label:"Metrics Reference",sidebar_position:30,title:"Metrics reference",description:"Metrics reference documentation for Kubewarden.",keywords:["kubewarden","kubernetes","metrics","reference"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","telemetry","metrics","reference"]},sidebar:"docs",previous:{title:"Upgrade path",permalink:"/1.11/reference/upgrade-path"},next:{title:"Monitor mode",permalink:"/1.11/reference/monitor-mode"}},o={},a=[{value:"Policy Server",id:"policy-server",level:2},{value:"Metrics",id:"metrics",level:3},{value:"<code>kubewarden_policy_evaluations_total</code>",id:"kubewarden_policy_evaluations_total",level:4},{value:"Baggage",id:"baggage",level:5}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/metrics-reference"})}),"\n",(0,n.jsx)(r.p,{children:"Kubewarden exposes relevant platform metrics allowing cluster administrators and\npolicy developers to identify patterns and potential issues."}),"\n",(0,n.jsx)(r.h2,{id:"policy-server",children:"Policy Server"}),"\n",(0,n.jsx)(r.p,{children:"The Policy Server component initializes and runs policies.\nWhen receiving requests from the Kubernetes API server,\nit forwards the request to the policy,\nreturning the response provided by the policy to the Kubernetes API server."}),"\n",(0,n.jsx)(r.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://opentelemetry.io/docs/concepts/signals/baggage/",children:"Baggage"}),"\nkey-value attributes are added to the metric to provide additional information."]})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"kubewarden_policy_evaluations_total"})}),(0,n.jsx)(r.td,{children:"Counter"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"#kubewarden_policy_evaluations_total",children:"Baggage"})})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"kubewarden_policy_evaluations_total",children:(0,n.jsx)(r.code,{children:"kubewarden_policy_evaluations_total"})}),"\n",(0,n.jsx)(r.h5,{id:"baggage",children:"Baggage"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Label"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"policy_name"})}),(0,n.jsx)(r.td,{children:"Name of the policy"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_name"})}),(0,n.jsx)(r.td,{children:"Name of the evaluated resource"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_kind"})}),(0,n.jsx)(r.td,{children:"Kind of the evaluated resource"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_namespace"})}),(0,n.jsx)(r.td,{children:"Namespace of the evaluated resource. Not present if the resource is cluster scoped."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resource_request_operation"})}),(0,n.jsxs)(r.td,{children:["Operation type: ",(0,n.jsx)(r.code,{children:"CREATE"}),", ",(0,n.jsx)(r.code,{children:"UPDATE"}),", ",(0,n.jsx)(r.code,{children:"DELETE"}),", ",(0,n.jsx)(r.code,{children:"PATCH"}),", ",(0,n.jsx)(r.code,{children:"WATCH"}),"..."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"accepted"})}),(0,n.jsx)(r.td,{children:"Whether the request was accepted or not"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"mutated"})}),(0,n.jsx)(r.td,{children:"Whether the request was mutated or not"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error_code"})}),(0,n.jsx)(r.td,{children:"Error code returned by the policy in case of rejection, if any. Not present if the policy didn't provide one."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>s});var n=t(67294);const c={},i=n.createContext(c);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);