"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[6840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_label:"Policy metadata",title:"Policy metadata"},o="Policy metadata",s={unversionedId:"writing-policies/metadata",id:"version-1.7/writing-policies/metadata",title:"Policy metadata",description:"The Kubewarden metadata file, metadata.yaml, serves as a vital configuration",source:"@site/versioned_docs/version-1.7/writing-policies/metadata.md",sourceDirName:"writing-policies",slug:"/writing-policies/metadata",permalink:"/1.7/writing-policies/metadata",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/metadata.md",tags:[],version:"1.7",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{sidebar_label:"Policy metadata",title:"Policy metadata"},sidebar:"docs",previous:{title:"WASI",permalink:"/1.7/writing-policies/wasi"},next:{title:"Policy testing",permalink:"/1.7/testing-policies/intro"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"policy-metadata"},"Policy metadata"),(0,i.kt)("p",null,"The Kubewarden metadata file, ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yaml"),", serves as a vital configuration\nfile that contains important information and settings related to the policies\nused within Kubewarden. This documentation provides an overview of the\npurpose and usage of the metadata file."),(0,i.kt)("p",null,"The policy ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yaml")," file contains defaults for the policy, in addition\nto metadata such as author and description, set by the policy author.  The file\nis used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl annonate")," command to, as the name suggests, annotates the\n",(0,i.kt)("inlineCode",{parentName:"p"},".wasm")," file containing the policy. Therefore, all the relevant information required to run\nthe policy will be available. More information about how to annotate the policy\ncan be found in the ",(0,i.kt)("a",{parentName:"p",href:"/1.7/distributing-policies"},"Distributing Policies")," guide."),(0,i.kt)("p",null,"When policy users want to use a policy, they generate a YAML manifest using\n",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl scaffold"),". This command reads the policy metadata embedded in the\nshipped Wasm module, performs sanity checks, and returns a YAML manifest that\nthe author can use as-is or adapt to their needs."),(0,i.kt)("p",null,"As a policy author, you can adapt the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yaml")," file provided during the\nscaffolding of your policy."),(0,i.kt)("p",null,"See the following example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n- apiGroups: [""]\n  apiVersions: ["v1"]\n  resources: ["pods"]\n  operations: ["CREATE"]\nmutating: false\ncontextAwareResources: []\nexecutionMode: kubewarden-wapc\nbackgroundAudit: true\nannotations:\n  # artifacthub specific:\n  io.artifacthub.displayName: Policy Name\n  io.artifacthub.resources: Pod\n  io.artifacthub.keywords: pod, cool policy, kubewarden\n  io.kubewarden.policy.ociUrl: ghcr.io/myorg/my-policy\n  # kubewarden specific:\n  io.kubewarden.policy.title: My policy\n  io.kubewarden.policy.description: Short description\n  io.kubewarden.policy.author: myself\n  io.kubewarden.policy.url: https://github.com/yourorg/my-policy\n  io.kubewarden.policy.source: https://github.com/yourorg/my-policy\n  io.kubewarden.policy.license: Apache-2.0\n  # The next two annotations are used in the policy report generated by the\n  # Audit scanner. Severity indicates policy check result criticality and\n  # Category indicates policy category. See more here at docs.kubewarden.io\n  io.kubewarden.policy.severity: medium\n  io.kubewarden.policy.category: Resource validation\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Enabling Background Audit Checks:")),(0,i.kt)("p",null,"The metadata file includes a flag, ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundAudit"),",  that enables the\nbackground audit checks for a specific policy. By default, this flag is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"There are some policies that, due to the way they work or to the type\nof events they are interested about, should have this field set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".\nMore information can be found inside of the\n",(0,i.kt)("a",{parentName:"p",href:"../explanations/audit-scanner#limitations"},"audit scanner documentation"),",\nrespectively under the limitations section."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Defining Kubernetes Resources policies can access:")),(0,i.kt)("p",null,"Within the metadata file, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"contextAwareResources")," field, users can\ndefine which Kubernetes resources the policy is allowed to access. For example,\nif the policy need access to ",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace")," resource. The policy author can define\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"contextAwareResources")," as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\ncontextAwareResources:\n  - apiVersion: v1 kind: Namespace\n[...]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Specifying Policy Type: Mutating or Non-Mutating:")),(0,i.kt)("p",null,"The metadata file contains a flag, ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating"),",  that allows users to designate\na policy as either mutating or non-mutating. A mutating\npolicy modifies the incoming requests or the resources being managed. A\nnon-mutating one observes and enforces restrictions without making any\nchanges. This distinction is crucial in determining how policies interact with\nthe Kubernetes resources and their impact on the cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4. Defining Resource Type Targets:")),(0,i.kt)("p",null,"The metadata file provides users with the ability to define the rules within\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," field, which determine the resource types to which the policy\napplies. This feature empowers users to exercise precise control over policy\nenforcement, guaranteeing that policies are exclusively applied to the intended\nresource types. With this fine-grained control, users can ensure that policies\nare targeted accurately, aligning with their specific requirements and avoiding\nany unintended application to unrelated resource types."),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);