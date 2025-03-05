"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[78628],{30047:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"reference/monitor-mode","title":"Monitor mode","description":"The Kubewarden monitor mode and how to activate it.","source":"@site/docs/reference/monitor-mode.md","sourceDirName":"reference","slug":"/reference/monitor-mode","permalink":"/next/reference/monitor-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/reference/monitor-mode.md","tags":[],"version":"current","lastUpdatedAt":1741176318000,"sidebarPosition":50,"frontMatter":{"sidebar_label":"Monitor mode","sidebar_position":50,"title":"Monitor mode","description":"The Kubewarden monitor mode and how to activate it.","keywords":["kubernetes","kubewarden","monitor mode"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","monitor-mode"]},"sidebar":"docs","previous":{"title":"Metrics Reference","permalink":"/next/reference/metrics-reference"},"next":{"title":"Policy communication specification","permalink":"/next/reference/spec/intro-spec"}}');var t=n(74848),r=n(28453);const c={sidebar_label:"Monitor mode",sidebar_position:50,title:"Monitor mode",description:"The Kubewarden monitor mode and how to activate it.",keywords:["kubernetes","kubewarden","monitor mode"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-integrator"],"doc-type":["reference"],"doc-topic":["operator-manual","monitor-mode"]},s=void 0,d={},a=[{value:"Changing policy mode",id:"changing-policy-mode",level:2},{value:"A note on mutating policies",id:"a-note-on-mutating-policies",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/monitor-mode"})}),"\n",(0,t.jsxs)(o.p,{children:["When defining a policy, you can choose between two modes, specified in its\n",(0,t.jsx)(o.a,{href:"CRDs#admissionpolicyspec",children:(0,t.jsx)(o.code,{children:"spec.mode"})}),". You deploy a policy in ",(0,t.jsx)(o.code,{children:"mode: protect"}),"\nby default. The policy then accepts, rejects or mutates requests."]}),"\n",(0,t.jsx)(o.p,{children:"One can choose to deploy a policy in monitor mode. In monitor mode:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"The policy accepts all requests, as if the policy wasn't installed."}),"\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.code,{children:"policy-server"})," traces the policy normally. If a request gets rejected or\na policy proposes a mutation then the trace contains the details."]}),"\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.code,{children:"policy-server"})," metrics get updated normally, with the mode included in\nthe metric baggage. Therefore, it's easy to filter policies by mode\nand focus on those deployed using ",(0,t.jsx)(o.code,{children:"monitor"})," mode."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"mode"})," is an attribute included in the ",(0,t.jsx)(o.code,{children:"ClusterAdmissionPolicy"})," and\n",(0,t.jsx)(o.code,{children:"AdmissionPolicy"})," resources. There are two values that the ",(0,t.jsx)(o.code,{children:"mode"})," attribute can\nassume: ",(0,t.jsx)(o.code,{children:"monitor"})," and ",(0,t.jsx)(o.code,{children:"protect"}),". The ",(0,t.jsx)(o.code,{children:"mode"})," defaults to ",(0,t.jsx)(o.code,{children:"protect"})," if omitted."]}),"\n",(0,t.jsxs)(o.p,{children:["To create a policy in ",(0,t.jsx)(o.code,{children:"monitor mode"})," you need to include the statement ",(0,t.jsx)(o.code,{children:"mode: monitor"})," in the specification of the resource. For example, in the\n",(0,t.jsx)(o.code,{children:"spec"})," section (marked \u2780), of this ",(0,t.jsx)(o.code,{children:"ClusterAdmissionPolicy"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-capabilities\nspec:\n  mode: monitor # \u2780\n  policyServer: reserved-instance-for-tenant-a\n  module: registry://ghcr.io/kubewarden/policies/psp-capabilities:v0.1.3\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    allowed_capabilities:\n    - CHOWN\n    required_drop_capabilities:\n    - NET_ADMIN\n'})}),"\n",(0,t.jsxs)(o.p,{children:["\u2780 The ",(0,t.jsx)(o.code,{children:"mode: monitor"})," attribute in the ",(0,t.jsx)(o.code,{children:"spec"})," section."]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(o.h2,{id:"changing-policy-mode",children:"Changing policy mode"}),"\n",(0,t.jsxs)(o.p,{children:["For security purposes, a user with ",(0,t.jsx)(o.code,{children:"UPDATE"})," permissions on policy resources can\nmake the policy more restrictive. This means that you can change the ",(0,t.jsx)(o.code,{children:"mode"})," of\nan existing ",(0,t.jsx)(o.code,{children:"ClusterAdmissionPolicy"})," or ",(0,t.jsx)(o.code,{children:"AdmissionPolicy"})," from ",(0,t.jsx)(o.code,{children:"monitor"})," to\n",(0,t.jsx)(o.code,{children:"protect"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["However, you can't change the ",(0,t.jsx)(o.code,{children:"mode"})," of an existing ",(0,t.jsx)(o.code,{children:"ClusterAdmissionPolicy"})," or\n",(0,t.jsx)(o.code,{children:"AdmissionPolicy"})," from ",(0,t.jsx)(o.code,{children:"protect"})," to ",(0,t.jsx)(o.code,{children:"monitor"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["So, to change the ",(0,t.jsx)(o.code,{children:"mode"})," of a policy from ",(0,t.jsx)(o.code,{children:"protect"})," to ",(0,t.jsx)(o.code,{children:"monitor"}),", you need to\ndelete the policy and re-create it in ",(0,t.jsx)(o.code,{children:"monitor"})," mode. Switching a policy from\n",(0,t.jsx)(o.code,{children:"protect"})," to ",(0,t.jsx)(o.code,{children:"monitor"})," is the same as deleting the policy so this approach\nassumes that the user has policy delete permissions."]}),"\n",(0,t.jsx)(o.h2,{id:"a-note-on-mutating-policies",children:"A note on mutating policies"}),"\n",(0,t.jsxs)(o.p,{children:["Mutating policies in ",(0,t.jsx)(o.code,{children:"monitor"})," mode won't perform a mutation on the resource.\nIn ",(0,t.jsx)(o.code,{children:"monitor"})," mode policies log what their action would have been. They also log\nthe mutation patch they would have produced in ",(0,t.jsx)(o.code,{children:"protect"})," mode."]}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsxs)(o.p,{children:["When a mutating policy is in ",(0,t.jsx)(o.code,{children:"monitor"})," mode, later policies evaluate an\nunchanged, and so different resource, than when the mutating policy is in\n",(0,t.jsx)(o.code,{children:"protect"})," mode."]})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>s});var i=n(96540);const t={},r=i.createContext(t);function c(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);