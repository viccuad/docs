"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[54008],{83755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(85893),o=i(11151);const s={sidebar_label:"Distributing policies",title:"Distributing policies",description:"A description of how Kubewarden policies are distributed from OCI-compliant repositories.",keywords:["oci","kubewarden","policy","wasm","webassembly"]},r="Pushing policies to an OCI-compliant registry",a={id:"distributing-policies",title:"Distributing policies",description:"A description of how Kubewarden policies are distributed from OCI-compliant repositories.",source:"@site/versioned_docs/version-1.7/distributing-policies.md",sourceDirName:".",slug:"/distributing-policies",permalink:"/1.7/distributing-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/distributing-policies.md",tags:[],version:"1.7",lastUpdatedAt:1712927064e3,frontMatter:{sidebar_label:"Distributing policies",title:"Distributing policies",description:"A description of how Kubewarden policies are distributed from OCI-compliant repositories.",keywords:["oci","kubewarden","policy","wasm","webassembly"]},sidebar:"docs",previous:{title:"Mutating policies",permalink:"/1.7/tasksDir/mutating-policies"},next:{title:"Context aware policies",permalink:"/1.7/explanations/context-aware-policies"}},c={},l=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Kubewarden policies are WebAssembly (Wasm) binaries that are evaluated by the Kubewarden Policy Server."}),"\n",(0,t.jsx)(n.p,{children:"The Kubewarden policy server can load policies from these sources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local filesystem"}),"\n",(0,t.jsx)(n.li,{children:"HTTP(s) server"}),"\n",(0,t.jsxs)(n.li,{children:["OCI-compliant registries:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/distribution/distribution",children:"Distribution"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ghcr.io",children:"GitHub container registry"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/container-registry/",children:"Azure container registry"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"Amazon ECR"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cloud.google.com/artifact-registry/",children:"Google container registry"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We think distributing Kubewarden policies via a regular OCI-compliant registry is the best choice.\nContainer registries are a mandatory requirement for any Kubernetes cluster.\nHaving a single place to store, and secure, all the artifacts required by a cluster is beneficial."}),"\n",(0,t.jsx)(n.h1,{id:"pushing-policies-to-an-oci-compliant-registry",children:"Pushing policies to an OCI-compliant registry"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/opencontainers/image-spec",children:"OCI image format"}),"\nspecification allows you to store any binary blob inside a regular OCI-compliant container registry."]}),"\n",(0,t.jsxs)(n.p,{children:["The target OCI-compliant registry ",(0,t.jsx)(n.strong,{children:"must support artifacts"})," to successfully push a Kubewarden Policy to it."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl",children:(0,t.jsx)(n.code,{children:"kwctl"})})," CLI to push a Kubewarden Policy to an OCI-compliant registry."]}),"\n",(0,t.jsx)(n.h2,{id:"annotating-the-policy",children:"Annotating the policy"}),"\n",(0,t.jsxs)(n.p,{children:["You also annotate a policy with ",(0,t.jsx)(n.code,{children:"kwctl"}),".\nThe process of annotating a Kubewarden policy is done by adding Wasm custom sections to the policy binary.\nThis means that the policy metadata is packaged with the policy itself."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"kwctl annotate"})," command requires two inputs:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"the Kubewarden policy to annotate, a local file in the filesystem."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"the annotations file, a file containing a YAML description of the policy metadata.\nThis file is usually located root project folder of your policy."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, we save this file as ",(0,t.jsx)(n.code,{children:"metadata.yml"})," in the current\ndirectory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'rules:\n- apiGroups: ["*"]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["*"]\nmutating: false\nannotations:\n  io.kubewarden.policy.title: palindromify\n  io.kubewarden.policy.description: Allows you to reject palindrome names in resources and namespace names, or to only accept palindrome names\n  io.kubewarden.policy.author: Name Surname <name.surname@example.com>\n  io.kubewarden.policy.url: https://github.com/<org>/palindromify\n  io.kubewarden.policy.source: https://github.com/<org>/palindromify\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n    This is markdown text and as such allows you to define a free form usage text.\n\n    This policy allows you to reject requests if:\n    - The name of the resource is a palindrome name.\n    - The namespace name where this resource is created has a palindrome name.\n\n    This policy accepts the following settings:\n\n    - `invert_behavior`: bool that inverts the policy behavior. If enabled, only palindrome names will be accepted.\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now, let's annotate the policy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kwctl annotate policy.wasm \\\n    --metadata-path metadata.yml \\\n    --output-path annotated-policy.wasm\n"})}),"\n",(0,t.jsx)(n.p,{children:"The annotation process performs some optimizations on the policy, so often the annotated policy is smaller than the original.\nThis depends considerably on the toolchain that was used to produce the original Wasm object."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(i,{children:[(0,t.jsxs)("summary",{children:["Use ",(0,t.jsx)("code",{children:"kwctl inspect"})," to check your policy"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kwctl inspect annotated-policy.wasm\n2023-08-24T12:06:27.986401Z  INFO sigstore::cosign::client_builder: Rekor public key not provided. Rekor integration disabled\n2023-08-24T12:06:27.986449Z  INFO sigstore::cosign::client_builder: No Fulcio cert has been provided. Fulcio integration disabled\nDetails\ntitle:                    palindromify\ndescription:              Allows you to reject palindrome names in resources and namespace names, or to only accept palindrome names\nauthor:                   Name Surname <name.surname@example.com>\nurl:                      https://github.com/<org>/palindromify\nsource:                   https://github.com/<org>/palindromify\nlicense:                  Apache-2.0\nmutating:                 false\nbackground audit support: true\ncontext aware:            false\nexecution mode:           kubewarden-wapc\nprotocol version:         1\n\nAnnotations\nio.kubewarden.kwctl       1.7.0-rc2\n\nRules\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n- apiGroups:\n  - '*'\n  apiVersions:\n  - '*'\n  resources:\n  - '*'\n  operations:\n  - '*'\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nUsage\nThis is markdown text and as such allows you to define a free form usage text.\n\nThis policy allows you to reject requests if:\n\n\u2022 The name of the resource is a palindrome name.\n\u2022 The namespace name where this resource is created has a palindrome name.\n\nThis policy accepts the following settings:\n\n\u2022 invert_behavior: bool that inverts the policy behavior. If enabled, only palindrome names will be accepted.\n\nCannot determine if the policy has been signed. There was an error while attempting to fetch its signatures from the remote registry: invalid uri\n"})})]})}),"\n",(0,t.jsx)(n.h2,{id:"pushing-the-policy",children:"Pushing the policy"}),"\n",(0,t.jsx)(n.p,{children:"You can push an annotated policy like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kwctl push annotated-policy.wasm \\\n     <oci-registry>/kubewarden-policies/palindromify-policy:v0.0.1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It is discouraged to push unannotated policies.\nThe policy server uses the metadata provided by annotations to correctly execute a policy.\nBy default, ",(0,t.jsx)(n.code,{children:"kwctl push"})," will refuse to push such a policy to an OCI registry.\nIf you need an unannotated policy, use the ",(0,t.jsx)(n.code,{children:"--force"})," flag of ",(0,t.jsx)(n.code,{children:"kwctl push"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The policy can then be referenced from the Kubewarden Policy Server or ",(0,t.jsx)(n.code,{children:"kwctl"})," as\n",(0,t.jsx)(n.code,{children:"registry://<oci-registry>/kubewarden-policies/palindromify-policy:v0.0.1"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);