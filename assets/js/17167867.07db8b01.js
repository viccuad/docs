"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[86702],{61409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"writing-policies/metadata","title":"Policy metadata","description":"The Kubewarden metadata file, metadata.yaml, serves as a vital configuration","source":"@site/versioned_docs/version-1.7/writing-policies/metadata.md","sourceDirName":"writing-policies","slug":"/writing-policies/metadata","permalink":"/1.7/writing-policies/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/metadata.md","tags":[],"version":"1.7","lastUpdatedAt":1742897255000,"frontMatter":{"sidebar_label":"Policy metadata","title":"Policy metadata"},"sidebar":"docs","previous":{"title":"WASI","permalink":"/1.7/writing-policies/wasi"},"next":{"title":"Policy testing","permalink":"/1.7/testing-policies/intro"}}');var a=n(74848),o=n(28453);const s={sidebar_label:"Policy metadata",title:"Policy metadata"},r="Policy metadata",c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"policy-metadata",children:"Policy metadata"})}),"\n",(0,a.jsxs)(t.p,{children:["The Kubewarden metadata file, ",(0,a.jsx)(t.code,{children:"metadata.yaml"}),", serves as a vital configuration\nfile that contains important information and settings related to the policies\nused within Kubewarden. This documentation provides an overview of the\npurpose and usage of the metadata file."]}),"\n",(0,a.jsxs)(t.p,{children:["The policy ",(0,a.jsx)(t.code,{children:"metadata.yaml"})," file contains defaults for the policy, in addition\nto metadata such as author and description, set by the policy author.  The file\nis used by the ",(0,a.jsx)(t.code,{children:"kwctl annonate"})," command to, as the name suggests, annotates the\n",(0,a.jsx)(t.code,{children:".wasm"})," file containing the policy. Therefore, all the relevant information required to run\nthe policy will be available. More information about how to annotate the policy\ncan be found in the ",(0,a.jsx)(t.a,{href:"/1.7/distributing-policies",children:"Distributing Policies"})," guide."]}),"\n",(0,a.jsxs)(t.p,{children:["When policy users want to use a policy, they generate a YAML manifest using\n",(0,a.jsx)(t.code,{children:"kwctl scaffold"}),". This command reads the policy metadata embedded in the\nshipped Wasm module, performs sanity checks, and returns a YAML manifest that\nthe author can use as-is or adapt to their needs."]}),"\n",(0,a.jsxs)(t.p,{children:["As a policy author, you can adapt the ",(0,a.jsx)(t.code,{children:"metadata.yaml"})," file provided during the\nscaffolding of your policy."]}),"\n",(0,a.jsxs)(t.p,{children:["See the following example of a ",(0,a.jsx)(t.code,{children:"metadata.yaml"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'rules:\n- apiGroups: [""]\n  apiVersions: ["v1"]\n  resources: ["pods"]\n  operations: ["CREATE"]\nmutating: false\ncontextAwareResources: []\nexecutionMode: kubewarden-wapc\nbackgroundAudit: true\nannotations:\n  # artifacthub specific:\n  io.artifacthub.displayName: Policy Name\n  io.artifacthub.resources: Pod\n  io.artifacthub.keywords: pod, cool policy, kubewarden\n  io.kubewarden.policy.ociUrl: ghcr.io/myorg/my-policy\n  # kubewarden specific:\n  io.kubewarden.policy.title: My policy\n  io.kubewarden.policy.description: Short description\n  io.kubewarden.policy.author: myself\n  io.kubewarden.policy.url: https://github.com/yourorg/my-policy\n  io.kubewarden.policy.source: https://github.com/yourorg/my-policy\n  io.kubewarden.policy.license: Apache-2.0\n  # The next two annotations are used in the policy report generated by the\n  # Audit scanner. Severity indicates policy check result criticality and\n  # Category indicates policy category. See more here at docs.kubewarden.io\n  io.kubewarden.policy.severity: medium\n  io.kubewarden.policy.category: Resource validation\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. Enabling Background Audit Checks:"})}),"\n",(0,a.jsxs)(t.p,{children:["The metadata file includes a flag, ",(0,a.jsx)(t.code,{children:"backgroundAudit"}),",  that enables the\nbackground audit checks for a specific policy. By default, this flag is set to\n",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["There are some policies that, due to the way they work or to the type\nof events they are interested about, should have this field set to ",(0,a.jsx)(t.code,{children:"false"}),".\nMore information can be found inside of the\n",(0,a.jsx)(t.a,{href:"../explanations/audit-scanner/limitations",children:"audit scanner documentation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. Defining Kubernetes Resources policies can access:"})}),"\n",(0,a.jsxs)(t.p,{children:["Within the metadata file, using the ",(0,a.jsx)(t.code,{children:"contextAwareResources"})," field, users can\ndefine which Kubernetes resources the policy is allowed to access. For example,\nif the policy need access to ",(0,a.jsx)(t.code,{children:"Namespace"})," resource. The policy author can define\nthe ",(0,a.jsx)(t.code,{children:"contextAwareResources"})," as:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"[...]\ncontextAwareResources:\n  - apiVersion: v1 kind: Namespace\n[...]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"3. Specifying Policy Type: Mutating or Non-Mutating:"})}),"\n",(0,a.jsxs)(t.p,{children:["The metadata file contains a flag, ",(0,a.jsx)(t.code,{children:"mutating"}),",  that allows users to designate\na policy as either mutating or non-mutating. A mutating\npolicy modifies the incoming requests or the resources being managed. A\nnon-mutating one observes and enforces restrictions without making any\nchanges. This distinction is crucial in determining how policies interact with\nthe Kubernetes resources and their impact on the cluster."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"4. Defining Resource Type Targets:"})}),"\n",(0,a.jsxs)(t.p,{children:["The metadata file provides users with the ability to define the rules within\nthe ",(0,a.jsx)(t.code,{children:"rules"})," field, which determine the resource types to which the policy\napplies. This feature empowers users to exercise precise control over policy\nenforcement, guaranteeing that policies are exclusively applied to the intended\nresource types. With this fine-grained control, users can ensure that policies\nare targeted accurately, aligning with their specific requirements and avoiding\nany unintended application to unrelated resource types."]}),"\n",(0,a.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);