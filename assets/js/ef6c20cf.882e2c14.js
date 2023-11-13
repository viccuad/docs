"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Distributing policies",title:"Distributing policies",description:"A description of how Kubewarden policies are distributed from OCI-compliant repositories.",keywords:["oci","kubewarden","policy","wasm","webassembly"]},o=void 0,l={unversionedId:"distributing-policies",id:"distributing-policies",title:"Distributing policies",description:"A description of how Kubewarden policies are distributed from OCI-compliant repositories.",source:"@site/docs/distributing-policies.md",sourceDirName:".",slug:"/distributing-policies",permalink:"/next/distributing-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies.md",tags:[],version:"current",lastUpdatedAt:1699878380,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{sidebar_label:"Distributing policies",title:"Distributing policies",description:"A description of how Kubewarden policies are distributed from OCI-compliant repositories.",keywords:["oci","kubewarden","policy","wasm","webassembly"]},sidebar:"docs",previous:{title:"Mutating policies",permalink:"/next/tasksDir/mutating-policies"},next:{title:"Context aware policies",permalink:"/next/explanations/context-aware-policies"}},s={},c=[{value:"Annotating the policy",id:"annotating-the-policy",level:2},{value:"Pushing the policy",id:"pushing-the-policy",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kubewarden policies are WebAssembly (Wasm) binaries that are evaluated by the Kubewarden Policy Server."),(0,a.kt)("p",null,"The Kubewarden policy server can load policies from these sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local filesystem"),(0,a.kt)("li",{parentName:"ul"},"HTTP(s) server"),(0,a.kt)("li",{parentName:"ul"},"OCI-compliant registries:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/distribution/distribution"},"Distribution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ghcr.io"},"GitHub container registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/container-registry/"},"Azure container registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ecr/"},"Amazon ECR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/artifact-registry/"},"Google container registry"))))),(0,a.kt)("p",null,"We think distributing Kubewarden policies via a regular OCI-compliant registry is the best choice.\nContainer registries are a mandatory requirement for any Kubernetes cluster.\nHaving a single place to store, and secure, all the artifacts required by a cluster is beneficial."),(0,a.kt)("h1",{id:"pushing-policies-to-an-oci-compliant-registry"},"Pushing policies to an OCI-compliant registry"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/image-spec"},"OCI image format"),"\nspecification allows you to store any binary blob inside a regular OCI-compliant container registry."),(0,a.kt)("p",null,"The target OCI-compliant registry ",(0,a.kt)("strong",{parentName:"p"},"must support artifacts")," to successfully push a Kubewarden Policy to it."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl"},(0,a.kt)("inlineCode",{parentName:"a"},"kwctl"))," CLI to push a Kubewarden Policy to an OCI-compliant registry."),(0,a.kt)("h2",{id:"annotating-the-policy"},"Annotating the policy"),(0,a.kt)("p",null,"You also annotate a policy with ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl"),".\nThe process of annotating a Kubewarden policy is done by adding Wasm custom sections to the policy binary.\nThis means that the policy metadata is packaged with the policy itself."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl annotate")," command requires two inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the Kubewarden policy to annotate, a local file in the filesystem.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the annotations file, a file containing a YAML description of the policy metadata.\nThis file is usually located root project folder of your policy."))),(0,a.kt)("p",null,"For example, we save this file as ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.yml")," in the current\ndirectory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n- apiGroups: ["*"]\n  apiVersions: ["*"]\n  resources: ["*"]\n  operations: ["*"]\nmutating: false\nannotations:\n  io.kubewarden.policy.title: palindromify\n  io.kubewarden.policy.description: Allows you to reject palindrome names in resources and namespace names, or to only accept palindrome names\n  io.kubewarden.policy.author: Name Surname <name.surname@example.com>\n  io.kubewarden.policy.url: https://github.com/<org>/palindromify\n  io.kubewarden.policy.source: https://github.com/<org>/palindromify\n  io.kubewarden.policy.license: Apache-2.0\n  io.kubewarden.policy.usage: |\n    This is markdown text and as such allows you to define a free form usage text.\n\n    This policy allows you to reject requests if:\n    - The name of the resource is a palindrome name.\n    - The namespace name where this resource is created has a palindrome name.\n\n    This policy accepts the following settings:\n\n    - `invert_behavior`: bool that inverts the policy behavior. If enabled, only palindrome names will be accepted.\n')),(0,a.kt)("p",null,"Now, let's annotate the policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kwctl annotate policy.wasm \\\n    --metadata-path metadata.yml \\\n    --output-path annotated-policy.wasm\n")),(0,a.kt)("p",null,"The annotation process performs some optimizations on the policy, so often the annotated policy is smaller than the original.\nThis depends considerably on the toolchain that was used to produce the original Wasm object."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Use ",(0,a.kt)("code",null,"kwctl inspect")," to check your policy"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kwctl inspect annotated-policy.wasm\n2023-08-24T12:06:27.986401Z  INFO sigstore::cosign::client_builder: Rekor public key not provided. Rekor integration disabled\n2023-08-24T12:06:27.986449Z  INFO sigstore::cosign::client_builder: No Fulcio cert has been provided. Fulcio integration disabled\nDetails\ntitle:                    palindromify\ndescription:              Allows you to reject palindrome names in resources and namespace names, or to only accept palindrome names\nauthor:                   Name Surname <name.surname@example.com>\nurl:                      https://github.com/<org>/palindromify\nsource:                   https://github.com/<org>/palindromify\nlicense:                  Apache-2.0\nmutating:                 false\nbackground audit support: true\ncontext aware:            false\nexecution mode:           kubewarden-wapc\nprotocol version:         1\n\nAnnotations\nio.kubewarden.kwctl       1.7.0-rc2\n\nRules\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n- apiGroups:\n  - '*'\n  apiVersions:\n  - '*'\n  resources:\n  - '*'\n  operations:\n  - '*'\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nUsage\nThis is markdown text and as such allows you to define a free form usage text.\n\nThis policy allows you to reject requests if:\n\n\u2022 The name of the resource is a palindrome name.\n\u2022 The namespace name where this resource is created has a palindrome name.\n\nThis policy accepts the following settings:\n\n\u2022 invert_behavior: bool that inverts the policy behavior. If enabled, only palindrome names will be accepted.\n\nCannot determine if the policy has been signed. There was an error while attempting to fetch its signatures from the remote registry: invalid uri\n")))),(0,a.kt)("h2",{id:"pushing-the-policy"},"Pushing the policy"),(0,a.kt)("p",null,"You can push an annotated policy like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kwctl push annotated-policy.wasm \\\n     <oci-registry>/kubewarden-policies/palindromify-policy:v0.0.1\n")),(0,a.kt)("p",null,"It is discouraged to push unannotated policies.\nThe policy server uses the metadata provided by annotations to correctly execute a policy.\nBy default, ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl push")," will refuse to push such a policy to an OCI registry.\nIf you need an unannotated policy, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," flag of ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl push"),"."),(0,a.kt)("p",null,"The policy can then be referenced from the Kubewarden Policy Server or ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," as\n",(0,a.kt)("inlineCode",{parentName:"p"},"registry://<oci-registry>/kubewarden-policies/palindromify-policy:v0.0.1"),"."))}m.isMDXComponent=!0}}]);