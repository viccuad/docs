"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[11892],{18583:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"howtos/policies","title":"Configuring policies","description":"Dependency matrix of Kubewarden.","source":"@site/versioned_docs/version-1.17/howtos/policies.md","sourceDirName":"howtos","slug":"/howtos/policies","permalink":"/1.17/howtos/policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/howtos/policies.md","tags":[],"version":"1.17","lastUpdatedAt":1733417920000,"sidebarPosition":90,"frontMatter":{"sidebar_label":"Configuring policies","sidebar_position":90,"title":"Configuring policies","description":"Dependency matrix of Kubewarden.","keywords":["policies","ClusterAdmissionPolicies","AdmissionPolicies","configuration","namespaces"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policies"]},"sidebar":"docs","previous":{"title":"Production deployments","permalink":"/1.17/howtos/policy-servers/production-deployments"},"next":{"title":"Requirements","permalink":"/1.17/howtos/airgap/requirements"}}');var i=s(74848),r=s(28453);const t={sidebar_label:"Configuring policies",sidebar_position:90,title:"Configuring policies",description:"Dependency matrix of Kubewarden.",keywords:["policies","ClusterAdmissionPolicies","AdmissionPolicies","configuration","namespaces"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policies"]},a=void 0,c={},p=[{value:"Skipping namespaces for a specific policy",id:"skipping-namespaces-for-a-specific-policy",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/policies"})}),"\n",(0,i.jsx)(n.h2,{id:"skipping-namespaces-for-a-specific-policy",children:"Skipping namespaces for a specific policy"}),"\n",(0,i.jsxs)(n.p,{children:["By default, policies apply to all Namespaces that the ",(0,i.jsx)(n.code,{children:"PolicyServer"})," is configured for.\nIf you want a policy to target only specific namespaces, you can deploy several ",(0,i.jsx)(n.code,{children:"AdmissionPolicies"})," in each Namespace."]}),"\n",(0,i.jsxs)(n.p,{children:["Another option is to configure ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicies"})," by setting their\n",(0,i.jsx)(n.code,{children:"spec.namespaceSelector"})," (see ",(0,i.jsx)(n.a,{href:"../reference/CRDs#clusteradmissionpolicy",children:"CRD docs"}),"). The\n",(0,i.jsx)(n.code,{children:"spec.namespaceSelector"})," decides whether to run the policy on an object, based\non whether the namespace for that object matches the selector."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, here is a policy that only targets the ",(0,i.jsx)(n.code,{children:"kube-system"})," and ",(0,i.jsx)(n.code,{children:"my-namespace"})," Namespaces:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psa-enforcer-privileged-namespaces\nspec:\n  module: registry://ghcr.io/kubewarden/policies/psa-label-enforcer:v0.1.1\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["namespaces"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  namespaceSelector:\n    matchExpressions:\n      - key: "kubernetes.io/metadata.name"\n        operator: In\n        values: [kube-system, my-namespace]\n  settings:\n    modes:\n      enforce: "privileged"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here is a policy that targets all the Namespaces besides the ",(0,i.jsx)(n.code,{children:"kube-system"})," and ",(0,i.jsx)(n.code,{children:"my-namespace"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psa-enforcer-default-mode\nspec:\n  module: registry://ghcr.io/kubewarden/policies/psa-label-enforcer:v0.1.1\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["namespaces"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  namespaceSelector:\n    matchExpressions:\n      - key: "kubernetes.io/metadata.name"\n        operator: NotIn\n        values: [kube-system, my-namespace]\n  settings:\n    modes:\n      enforce: "restricted"\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var o=s(96540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);