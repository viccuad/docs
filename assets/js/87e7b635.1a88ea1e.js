"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[32596],{47093:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"glossary","title":"Glossary","description":"Kubewarden glossary","source":"@site/versioned_docs/version-1.20/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/1.20/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/glossary.md","tags":[],"version":"1.20","lastUpdatedAt":1742897255000,"sidebarPosition":90,"frontMatter":{"sidebar_label":"Glossary","sidebar_position":90,"title":"Glossary","description":"Kubewarden glossary","keywords":["kubewarden","glossary"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["glossary"]},"sidebar":"docs","previous":{"title":"Security disclosure","permalink":"/1.20/disclosure"}}');var n=i(74848),r=i(28453);const t={sidebar_label:"Glossary",sidebar_position:90,title:"Glossary",description:"Kubewarden glossary",keywords:["kubewarden","glossary"],"doc-persona":["kubewarden-all"],"doc-type":["explanation"],"doc-topic":["glossary"]},l=void 0,a={},d=[{value:"A",id:"a",level:2},{value:"AdmissionPolicy",id:"admissionpolicy",level:3},{value:"C",id:"c",level:2},{value:"ClusterAdmissionPolicy",id:"clusteradmissionpolicy",level:3},{value:"ClusterPolicyReport",id:"clusterpolicyreport",level:3},{value:"K",id:"k",level:2},{value:"kwctl",id:"kwctl",level:3},{value:"M",id:"m",level:2},{value:"MutatingWebhookConfiguration",id:"mutatingwebhookconfiguration",level:3},{value:"P",id:"p",level:2},{value:"PolicyReport",id:"policyreport",level:3},{value:"PolicyServer",id:"policy-server",level:3},{value:"V",id:"v",level:2},{value:"ValidatingWebhookConfiguration",id:"validatingwebhookconfiguration",level:3},{value:"W",id:"w",level:2},{value:"waPC",id:"wapc",level:3},{value:"WASI",id:"wasi",level:3},{value:"Wasm",id:"wasm",level:3},{value:"Wasmtime",id:"wasmtime",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components},{Head:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/glossary"})}),"\n",(0,n.jsx)(s.h2,{id:"a",children:"A"}),"\n",(0,n.jsx)(s.h3,{id:"admissionpolicy",children:"AdmissionPolicy"}),"\n",(0,n.jsx)(s.p,{children:"A namespace-wide resource. The policy processes only those requests targeting\nthe namespace in which the AdmissionPolicy is defined."}),"\n",(0,n.jsx)(s.h2,{id:"c",children:"C"}),"\n",(0,n.jsx)(s.h3,{id:"clusteradmissionpolicy",children:"ClusterAdmissionPolicy"}),"\n",(0,n.jsxs)(s.p,{children:["An ",(0,n.jsx)(s.a,{href:"#admissionpolicy",children:"AdmissionPolicy"})," which targets cluster-wide resources."]}),"\n",(0,n.jsx)(s.h3,{id:"clusterpolicyreport",children:"ClusterPolicyReport"}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.a,{href:"#policyreport",children:"PolicyReport"})," and a ClusterPolicyReport store results of\npolicy scans. Which one is used, depends on the scope of the resource."]}),"\n",(0,n.jsx)(s.h2,{id:"k",children:"K"}),"\n",(0,n.jsx)(s.h3,{id:"kwctl",children:"kwctl"}),"\n",(0,n.jsx)(s.p,{children:"A CLI tool to generate and test Kubernetes YAML files for policy deployment."}),"\n",(0,n.jsx)(s.h2,{id:"m",children:"M"}),"\n",(0,n.jsx)(s.h3,{id:"mutatingwebhookconfiguration",children:"MutatingWebhookConfiguration"}),"\n",(0,n.jsxs)(s.p,{children:["A\n",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#what-are-admission-webhooks",children:"Kubernetes resource"}),"\ncreated by the Kubewarden controller to let Kubernetes know where to send an ",(0,n.jsx)(s.code,{children:"AdmissionReview"}),".\nIn other words,\nthis is how a Kubewarden controller informs Kubernetes where to find a resource mutating policy."]}),"\n",(0,n.jsx)(s.h2,{id:"p",children:"P"}),"\n",(0,n.jsx)(s.h3,{id:"policyreport",children:"PolicyReport"}),"\n",(0,n.jsxs)(s.p,{children:["A PolicyReport and a ",(0,n.jsx)(s.a,{href:"#clusterpolicyreport",children:"ClusterPolicyReport"})," store results of\npolicy scans. Which one is used depends on the scope of the resource."]}),"\n",(0,n.jsx)(s.h3,{id:"policy-server",children:"PolicyServer"}),"\n",(0,n.jsx)(s.p,{children:"A PolicyServer validates incoming requests by executing Kubewarden policies against requests."}),"\n",(0,n.jsx)(s.h2,{id:"v",children:"V"}),"\n",(0,n.jsx)(s.h3,{id:"validatingwebhookconfiguration",children:"ValidatingWebhookConfiguration"}),"\n",(0,n.jsxs)(s.p,{children:["A\n",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#what-are-admission-webhooks",children:"Kubernetes resource"}),"\ncreated by the Kubewarden controller to let Kubernetes know where to send a ",(0,n.jsx)(s.code,{children:"AdmissionReview"}),".\nIn other words, this is how Kubewarden informs Kubernetes where to find a resource validating policy."]}),"\n",(0,n.jsx)(s.h2,{id:"w",children:"W"}),"\n",(0,n.jsx)(s.h3,{id:"wapc",children:"waPC"}),"\n",(0,n.jsxs)(s.p,{children:["WebAssembly Procedure Calls. ",(0,n.jsx)(s.a,{href:"https://wapc.io",children:"https://wapc.io"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"wasi",children:"WASI"}),"\n",(0,n.jsxs)(s.p,{children:["WebAssembly System Interface. ",(0,n.jsx)(s.a,{href:"https://wasi.dev",children:"https://wasi.dev"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"wasm",children:"Wasm"}),"\n",(0,n.jsxs)(s.p,{children:["A binary instruction format for a stack-based virtual machine. Designed for web\ndeployment. ",(0,n.jsx)(s.a,{href:"https://webassemly.org",children:"https://webassemly.org"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"wasmtime",children:"Wasmtime"}),"\n",(0,n.jsxs)(s.p,{children:["A runtime for WebAssembly. ",(0,n.jsx)(s.a,{href:"https://wasmtime.dev",children:"https://wasmtime.dev"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>l});var o=i(96540);const n={},r=o.createContext(n);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);