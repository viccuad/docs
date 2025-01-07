"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[49547],{38736:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"howtos/vap-migration","title":"ValidatingAdmissionPolicy migration","description":"Discusses how to migrate from Kubernetes VAP policies to Kubewarden.","source":"@site/versioned_docs/version-1.19/howtos/vap-migration.md","sourceDirName":"howtos","slug":"/howtos/vap-migration","permalink":"/1.19/howtos/vap-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.19/howtos/vap-migration.md","tags":[],"version":"1.19","lastUpdatedAt":1736249381000,"sidebarPosition":35,"frontMatter":{"sidebar_label":"ValidatingAdmissionPolicy migration","sidebar_position":35,"title":"ValidatingAdmissionPolicy migration","description":"Discusses how to migrate from Kubernetes VAP policies to Kubewarden.","keywords":["kubewarden","kubernetes","cel","vap","validatingadmissionpolicy"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["vap-migration"]},"sidebar":"docs","previous":{"title":"Pod Security Admission","permalink":"/1.19/howtos/pod-security-admission-with-kubewarden"},"next":{"title":"Policy Groups","permalink":"/1.19/howtos/policy-groups"}}');var o=n(74848),a=n(28453);const t={sidebar_label:"ValidatingAdmissionPolicy migration",sidebar_position:35,title:"ValidatingAdmissionPolicy migration",description:"Discusses how to migrate from Kubernetes VAP policies to Kubewarden.",keywords:["kubewarden","kubernetes","cel","vap","validatingadmissionpolicy"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["vap-migration"]},r=void 0,c={},l=[{value:"Migration steps",id:"migration-steps",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:n,Head:s}=i;return n||m("Details",!0),s||m("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/vap-migration"})}),"\n",(0,o.jsxs)(i.p,{children:["Starting from Kubernetes v1.26, the ",(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/",children:"ValidatingAdmissionPolicy"}),"\nprovides a way to write custom admission policies in Kubernetes. The policies are\nwritten with the ",(0,o.jsx)(i.a,{href:"https://cel.dev/",children:"Common Expression Language (CEL)"}),", extended with\nsome ",(0,o.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/using-api/cel/",children:"Kubernetes-specific extensions"}),".\nValidatingAdmissionPolicy reached stability in Kubernetes v1.30."]}),"\n",(0,o.jsxs)(i.p,{children:["Kubewarden provides a CEL policy that is capable of running Kubernetes VAP policies without any modifications.\nYou can read more about the CEL policy in ",(0,o.jsx)(i.a,{href:"/1.19/tutorials/writing-policies/CEL/intro-cel",children:"this section"})," of Kubewarden's documentation.\n",(0,o.jsx)(i.a,{href:"../tutorials/writing-policies/CEL/intro-cel#benefits-of-kubewardens-cel-policy-in-comparison-with-validatingadmissionpolicies",children:"This paragraph"}),"\nexplains the benefits of running VAP policies using Kubewarden."]}),"\n",(0,o.jsxs)(i.p,{children:["This howto explains how the ",(0,o.jsx)(i.code,{children:"kwctl"})," tool can be used to migrate a VAP policy to Kubewarden."]}),"\n",(0,o.jsx)(i.h2,{id:"migration-steps",children:"Migration steps"}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["You must use ",(0,o.jsx)(i.code,{children:"kwctl"})," version 1.14.0 or later to follow this guide."]})}),"\n",(0,o.jsxs)(i.p,{children:["Given a file containing this YAML definition of a ",(0,o.jsx)(i.code,{children:"ValidatingAdmissionPolicy"}),":"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(i.code,{children:"ValidatingAdmissionPolicy"})," definition"]}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",metastring:'title="vap.yml"',children:'apiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingAdmissionPolicy\nmetadata:\n  name: "force-liveness-probe"\nspec:\n  failurePolicy: Fail\n  variables:\n    - name: containers_without_liveness_probe\n      expression: |\n        object.spec.template.spec.containers.filter(c, !has(c.livenessProbe)).map(c, c.name)\n  matchConstraints:\n    resourceRules:\n      - apiGroups: ["apps"]\n        apiVersions: ["v1"]\n        operations: ["CREATE", "UPDATE"]\n        resources: ["deployments"]\n  validations:\n    - expression: |\n        size(variables.containers_without_liveness_probe) == 0\n      messageExpression: |\n        \'These containers are missing a liveness probe: \' + variables.containers_without_liveness_probe.join(\' \')\n      reason: Invalid\n'})})]}),"\n",(0,o.jsxs)(i.p,{children:["And a file containing the ",(0,o.jsx)(i.code,{children:"ValidatingAdmissionPolicyBinding"})," resource:"]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(i.code,{children:"ValidatingAdmissionPolicyBinding"})," definition"]}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-yaml",metastring:'title="vap-binding.yml"',children:'apiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingAdmissionPolicyBinding\nmetadata:\n  name: "kw-scaffold-demo"\nspec:\n  policyName: "force-liveness-probe"\n  validationActions: [Deny]\n  matchResources:\n    namespaceSelector:\n      matchLabels:\n        docs.kubewarden.io/vap-migration: enabled\n'})})]}),"\n",(0,o.jsx)(i.p,{children:"You can migrate the policy to Kubewarden by following these steps:"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(i.code,{children:"kwctl"})," command for policy migration"]}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-shell",children:"$ kwctl scaffold vap \\\n    -p vap.yml \\\n    -b vap-binding.yml\n"})})]}),"\n",(0,o.jsx)(i.p,{children:"The command produces output similar to this:"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Output from the migration"}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-shell",children:"2024-06-24T16:00:16.516062Z  WARN kwctl::scaffold: Using the 'latest' version of the CEL policy could lead to unexpected behavior. It is recommended to use a specific version to avoid breaking changes.\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: kw-scaffold-demo\nspec:\n  module: ghcr.io/kubewarden/policies/cel-policy:latest\n  settings:\n    variables:\n    - expression: |\n        object.spec.template.spec.containers.filter(c, !has(c.livenessProbe)).map(c, c.name)\n      name: containers_without_liveness_probe\n    validations:\n    - expression: |\n        size(variables.containers_without_liveness_probe) == 0\n      messageExpression: |\n        'These containers are missing a liveness probe: ' + variables.containers_without_liveness_probe.join(' ')\n      reason: Invalid\n  rules:\n  - apiGroups:\n    - apps\n    apiVersions:\n    - v1\n    resources:\n    - deployments\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: false\n  failurePolicy: Fail\n  namespaceSelector:\n    matchLabels:\n      docs.kubewarden.io/vap-migration: enabled\n"})}),(0,o.jsxs)(i.admonition,{type:"note",children:[(0,o.jsxs)(i.p,{children:["The command warns the user about the usage of the ",(0,o.jsx)(i.code,{children:"latest"})," version of the CEL policy.\nIt is recommended to use a specific version to avoid breaking changes."]}),(0,o.jsxs)(i.p,{children:["This can be done using the ",(0,o.jsx)(i.code,{children:"--cel-policy"})," flag, like this:"]}),(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-shell",children:"$ kwctl scaffold vap \\\n    --cel-policy ghcr.io/kubewarden/policies/cel-policy:v1.0.1 \\\n    -p vap.yml \\\n    -b vap-binding.yml\n"})})]})]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>r});var s=n(96540);const o={},a=s.createContext(o);function t(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);