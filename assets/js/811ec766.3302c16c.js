"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[41878],{56204:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"howtos/security-hardening/security-hardening","title":"Security hardening","description":"Harden the Kubewarden installation","source":"@site/docs/howtos/security-hardening/security-hardening.md","sourceDirName":"howtos/security-hardening","slug":"/howtos/security-hardening/","permalink":"/next/howtos/security-hardening/","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/docs/howtos/security-hardening/security-hardening.md","tags":[],"version":"current","lastUpdatedAt":1742841510000,"sidebarPosition":50,"frontMatter":{"sidebar_label":"Security hardening","sidebar_position":50,"title":"Security hardening","description":"Harden the Kubewarden installation","keywords":["kubewarden","kubernetes","security"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","security"]},"sidebar":"docs","previous":{"title":"ArgoCD Installation","permalink":"/next/howtos/argocd-installation"},"next":{"title":"Secure supply chain","permalink":"/next/howtos/security-hardening/secure-supply-chain"}}');var s=n(74848),i=n(28453);const a={sidebar_label:"Security hardening",sidebar_position:50,title:"Security hardening",description:"Harden the Kubewarden installation",keywords:["kubewarden","kubernetes","security"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","security"]},o=void 0,c={},d=[{value:"<code>kubewarden-defaults</code> Helm chart",id:"kubewarden-defaults-helm-chart",level:3},{value:"Verifying Kubewarden artifacts",id:"verifying-kubewarden-artifacts",level:3},{value:"RBAC",id:"rbac",level:3},{value:"Per-policy permissions",id:"per-policy-permissions",level:3},{value:"Workload coverage",id:"workload-coverage",level:3},{value:"SecurityContexts",id:"securitycontexts",level:3}];function l(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Kubewarden strives to be secure with little configuration.\nIn this section and its subpages you can find hardening tips (with their\ntrade-offs) to secure Kubewarden itself."}),"\n",(0,s.jsxs)(r.p,{children:["Please refer to our ",(0,s.jsx)(r.a,{href:"../reference/threat-model",children:"threat model"})," for more information."]}),"\n",(0,s.jsxs)(r.h3,{id:"kubewarden-defaults-helm-chart",children:[(0,s.jsx)(r.code,{children:"kubewarden-defaults"})," Helm chart"]}),"\n",(0,s.jsxs)(r.p,{children:["Operators can obtain a secure deployment by installing all the\nKubewarden Helm charts. It's recommended to install the\n",(0,s.jsx)(r.code,{children:"kubewarden-defaults"})," Helm chart and enable its recommended policies with:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"helm install --wait -n kubewarden kubewarden-defaults kubewarden/kubewarden-defaults \\\n  --set recommendedPolicies.enabled=True \\\n  --set recommendedPolicies.defaultPolicyMode=protect\n"})}),"\n",(0,s.jsx)(r.p,{children:"This provides a default PolicyServer and default policies, in protect mode, to\nensure the Kubewarden stack is safe from other workloads."}),"\n",(0,s.jsx)(r.h3,{id:"verifying-kubewarden-artifacts",children:"Verifying Kubewarden artifacts"}),"\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"../tutorials/verifying-kubewarden",children:"Verifying Kubewarden"})," tutorial."]}),"\n",(0,s.jsx)(r.h3,{id:"rbac",children:"RBAC"}),"\n",(0,s.jsxs)(r.p,{children:["Kubewarden describes RBAC configurations in different\n",(0,s.jsx)(r.em,{children:"Explanations"})," sections. Users can fine-tune the needed permissions for the\n",(0,s.jsx)(r.a,{href:"../explanations/audit-scanner#permissions-and-serviceaccounts",children:"Audit Scanner"}),"\nfeature, as well as ",(0,s.jsx)(r.a,{href:"../explanations/context-aware-policies",children:"per Policy Server"}),"\nService Account for the context-aware feature."]}),"\n",(0,s.jsx)(r.p,{children:"The view all Roles:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-console",children:"kubectl get clusterroles,roles -A | grep kubewarden\n"})}),"\n",(0,s.jsx)(r.h3,{id:"per-policy-permissions",children:"Per-policy permissions"}),"\n",(0,s.jsxs)(r.p,{children:["For context-aware policies, operators specify fine-grained permissions per\npolicy under its ",(0,s.jsx)(r.code,{children:"spec.contectAwareResources"}),", and those work in conjuction\nwith the Service Account configured for the Policy Server where the policy\nruns."]}),"\n",(0,s.jsx)(r.h3,{id:"workload-coverage",children:"Workload coverage"}),"\n",(0,s.jsx)(r.p,{children:"By default, Kubewarden excludes specific Namespaces from Kubewarden coverage. This is\ndone to simplify first-time use and interoperability with other workloads."}),"\n",(0,s.jsxs)(r.p,{children:["Security-conscious operators can tune these Namespaces list via the\n",(0,s.jsx)(r.code,{children:".global.skipNamespaces"})," value for both the ",(0,s.jsx)(r.code,{children:"kubewarden-controller"})," and\n",(0,s.jsx)(r.code,{children:"kubewarden-defaults"})," Helm charts."]}),"\n",(0,s.jsx)(r.h3,{id:"securitycontexts",children:"SecurityContexts"}),"\n",(0,s.jsxs)(r.p,{children:["Starting from 1.23, Kubewarden's stack is able to run in a Namespace\nwhere the ",(0,s.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",children:"restricted\nPod Security Standards"}),"\nare enforced, with current Pod hardening best practices."]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"kubewarden-controller"})," Helm chart configures the SecurityContexts and\nexposes them in its ",(0,s.jsx)(r.code,{children:"values.yaml"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"kubewarden-defaults"})," Helm chart allows for configuing the default Policy\nServer ",(0,s.jsx)(r.code,{children:".spec.securityContexts"})," under ",(0,s.jsx)(r.code,{children:".Values.policyServer.securityContexts"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For Policy Servers managed by operators, you can configure them via their\n",(0,s.jsx)(r.a,{href:"https://docs.kubewarden.io/reference/CRDs#policyserversecurity",children:(0,s.jsx)(r.code,{children:"spec.securityContexts"})}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);