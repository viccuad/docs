"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[59682],{56866:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"howtos/policies","title":"Configuring policies","description":"Dependency matrix of Kubewarden.","source":"@site/versioned_docs/version-1.11/howtos/policies.md","sourceDirName":"howtos","slug":"/howtos/policies","permalink":"/1.11/howtos/policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.11/howtos/policies.md","tags":[],"version":"1.11","lastUpdatedAt":1733418314000,"sidebarPosition":90,"frontMatter":{"sidebar_label":"Configuring policies","sidebar_position":90,"title":"Configuring policies","description":"Dependency matrix of Kubewarden.","keywords":["policies","ClusterAdmissionPolicies","AdmissionPolicies","configuration","namespaces"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policies"]},"sidebar":"docs","previous":{"title":"Using private registries","permalink":"/1.11/howtos/policy-servers/private-registry"},"next":{"title":"Requirements","permalink":"/1.11/howtos/airgap/requirements"}}');var o=n(74848),r=n(28453);const t={sidebar_label:"Configuring policies",sidebar_position:90,title:"Configuring policies",description:"Dependency matrix of Kubewarden.",keywords:["policies","ClusterAdmissionPolicies","AdmissionPolicies","configuration","namespaces"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policies"]},a=void 0,c={},p=[{value:"Skipping namespaces for a specific policy",id:"skipping-namespaces-for-a-specific-policy",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/policies"})}),"\n",(0,o.jsx)(s.h2,{id:"skipping-namespaces-for-a-specific-policy",children:"Skipping namespaces for a specific policy"}),"\n",(0,o.jsxs)(s.p,{children:["By default, policies apply to all Namespaces that the ",(0,o.jsx)(s.code,{children:"PolicyServer"})," is configured for.\nIf you want a policy to target only specific namespaces, you can deploy several ",(0,o.jsx)(s.code,{children:"AdmissionPolicies"})," in each Namespace."]}),"\n",(0,o.jsxs)(s.p,{children:["Another option is to configure ",(0,o.jsx)(s.code,{children:"ClusterAdmissionPolicies"})," by setting their\n",(0,o.jsx)(s.code,{children:"spec.namespaceSelector"})," (see ",(0,o.jsx)(s.a,{href:"../reference/CRDs#clusteradmissionpolicy",children:"CRD docs"}),"). The\n",(0,o.jsx)(s.code,{children:"spec.namespaceSelector"})," decides whether to run the policy on an object, based\non whether the namespace for that object matches the selector."]}),"\n",(0,o.jsxs)(s.p,{children:["For example, here is a policy that only targets the ",(0,o.jsx)(s.code,{children:"kube-system"})," and ",(0,o.jsx)(s.code,{children:"my-namespace"})," Namespaces:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:'---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psa-enforcer-privileged-namespaces\nspec:\n  module: registry://ghcr.io/kubewarden/policies/psa-label-enforcer:v0.1.1\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["namespaces"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  namespaceSelector:\n    matchExpressions:\n      - key: "kubernetes.io/metadata.name"\n        operator: In\n        values: [kube-system, my-namespace]\n  settings:\n    modes:\n      enforce: "privileged"\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Here is a policy that targets all the Namespaces besides the ",(0,o.jsx)(s.code,{children:"kube-system"})," and ",(0,o.jsx)(s.code,{children:"my-namespace"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:'---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psa-enforcer-default-mode\nspec:\n  module: registry://ghcr.io/kubewarden/policies/psa-label-enforcer:v0.1.1\n  rules:\n    - apiGroups: [""]\n      apiVersions: ["v1"]\n      resources: ["namespaces"]\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  namespaceSelector:\n    matchExpressions:\n      - key: "kubernetes.io/metadata.name"\n        operator: NotIn\n        values: [kube-system, my-namespace]\n  settings:\n    modes:\n      enforce: "restricted"\n'})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);