"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[94556],{67088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"reference/spec/context-aware-policies","title":"Context aware policies","description":"Context aware policies.","source":"@site/versioned_docs/version-1.20/reference/spec/05-context-aware-policies.md","sourceDirName":"reference/spec","slug":"/reference/spec/context-aware-policies","permalink":"/1.20/reference/spec/context-aware-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/reference/spec/05-context-aware-policies.md","tags":[],"version":"1.20","lastUpdatedAt":1741176318000,"sidebarPosition":5,"frontMatter":{"sidebar_label":"Context aware policies","title":"Context aware policies","description":"Context aware policies.","keywords":["kubewarden","kubernetes","policy specification","context aware policies"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","context-aware-policies"]},"sidebar":"docs","previous":{"title":"Mutating policies","permalink":"/1.20/reference/spec/mutating-policies"},"next":{"title":"Host capabilities specification","permalink":"/1.20/reference/spec/host-capabilities/intro-host-capabilities"}}');var i=n(74848),r=n(28453);const o={sidebar_label:"Context aware policies",title:"Context aware policies",description:"Context aware policies.",keywords:["kubewarden","kubernetes","policy specification","context aware policies"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","context-aware-policies"]},c=void 0,a={},l=[{value:"Support matrix",id:"support-matrix",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Listing multiple resources",id:"listing-multiple-resources",level:3},{value:"Fetching a specific resource",id:"fetching-a-specific-resource",level:3},{value:"ClusterAdmissionPolicies",id:"clusteradmissionpolicies",level:2},{value:"Testing context aware policies locally",id:"testing-context-aware-policies-locally",level:3},{value:"Language SDKs",id:"language-sdks",level:2},{value:"Rust",id:"rust",level:3},{value:"Go",id:"go",level:3},{value:"Rego policies",id:"rego-policies",level:2},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Open Policy Agent",id:"open-policy-agent",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/context-aware-policies"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"policy-server"})," has the capability to expose cluster information to\npolicies,\nso that they can take decisions based on other existing resources,\nand not only based on the details provided by the admission request."]}),"\n",(0,i.jsx)(t.p,{children:"The retrieval of Kubernetes resources is performed by the Policy Server hosting the policy.\nAccess to Kubernetes is regulated by RBAC rules applied to the Service Account used by the Policy Server."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"default"})," Policy Server deployed by Kubewarden helm charts has access to the following Kubernetes resources:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Namespaces"}),"\n",(0,i.jsx)(t.li,{children:"Services"}),"\n",(0,i.jsx)(t.li,{children:"Ingresses"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"The policy server performs caching of the results obtained from the Kubernetes API server to reduce the amount of load on this core part of Kubernetes.\nThat means some information might be stale or missing."})}),"\n",(0,i.jsx)(t.h2,{id:"support-matrix",children:"Support matrix"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Policy type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Support"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Traditional programming languages"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rego"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{children:"Since Kubewarden 1.9 release"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"WASI"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,i.jsx)(t.td,{children:"Since Kubewarden 1.10.0 release, only for Go SDK"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"constraints",children:"Constraints"}),"\n",(0,i.jsx)(t.p,{children:"Kubewarden's priority is to reduce the number of queries done against the Kubernetes API server. Because of that two constraints have to be\nconsidered:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Memory usage: data fetched from Kubernetes is cached in memory by the Policy Server process. The more data is fetched, the more memory is going\nto be consumed by the Policy Server Pods."}),"\n",(0,i.jsx)(t.li,{children:"Consistency: the cache kept by Policy Server could contain stale data. New resources might be missing, deleted resources might still be\navailable and changed ones could have old data. This could affect policy evaluation."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"listing-multiple-resources",children:"Listing multiple resources"}),"\n",(0,i.jsxs)(t.p,{children:['Kubewarden policies can fetch multiple resources at the same time. For example, they can make a query like\n"get all the Pods defined inside of the ',(0,i.jsx)(t.code,{children:"default"})," namespace that have the label ",(0,i.jsx)(t.code,{children:"color"})," set to ",(0,i.jsx)(t.code,{children:"green"}),'".']}),"\n",(0,i.jsxs)(t.p,{children:["When such a query is done, the Policy Server fetches all the resources matching the user criteria. Resources are fetched in batches to reduce the\nload on the Kubernetes API server.\nBefore storing the resources in memory, the ",(0,i.jsx)(t.code,{children:"managedFields"})," attribute of each resource is dropped to reduce the amount of memory consumed.\nThis attribute is not useful for policies and takes a significant amount of memory."]}),"\n",(0,i.jsxs)(t.p,{children:["The Policy Server then creates a ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/using-api/api-concepts/#efficient-detection-of-changes",children:"Kubernetes watch"})," to keep\nthe cached list of objects updated.\nThe Policy Server doesn't control the speed at which the Kubernetes API Server sends notifications about resource changes. This depends on different external\nfactors, like the number of watches created against the Kubernetes API server and its load."]}),"\n",(0,i.jsx)(t.p,{children:"Finally, the current code suffers from the following limitation. Given these two queries:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"kubectl get pods -n default"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"kubectl get pods -n default -l color=green"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Policy Server will create two watches and will duplicate all the Pods of the second query.\nWe will work to remove this limitation in future releases of Kubewarden."}),"\n",(0,i.jsx)(t.h3,{id:"fetching-a-specific-resource",children:"Fetching a specific resource"}),"\n",(0,i.jsxs)(t.p,{children:['Kubewarden policies can get a specific resource defined inside of the cluster. For example, they can make a query like\n"get the Pod named ',(0,i.jsx)(t.code,{children:"psql-0"})," defined inside of the ",(0,i.jsx)(t.code,{children:"db"}),' namespace".']}),"\n",(0,i.jsx)(t.p,{children:"By default this query fetches the object and stores it inside of an in-memory cache. The cache entry is wiped after 5 seconds.\nDuring this time window, the cached data is served to policies."}),"\n",(0,i.jsx)(t.p,{children:"The policy author can also decide to make a direct query, one that skips the cache entirely. In this way, fresh data is always\nserved. This however can cause more load on the Kubernetes API server (depending on how frequently the policy is triggered)\nand introduces more latency when evaluating an admission request."}),"\n",(0,i.jsx)(t.p,{children:"The direct/cached query behavior can be configured on a per-query level by the policy author using the Kubewarden SDKs."}),"\n",(0,i.jsx)(t.h2,{id:"clusteradmissionpolicies",children:"ClusterAdmissionPolicies"}),"\n",(0,i.jsxs)(t.p,{children:["ClusterAdmissionPolicies have the field\n",(0,i.jsx)(t.a,{href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/ClusterAdmissionPolicy/v1#spec-contextAwareResources",children:"spec.contextAwareResources"}),".\nThis field provides a list a ",(0,i.jsx)(t.code,{children:"GroupVersionKind"}),' resources that the policy needs to access.\nThis allows policy writers to ship the "permissions" that the policy needs together with the policy.\nMoreover, this allows policy operators to review the "permissions" needed by the policy at deployment time.']}),"\n",(0,i.jsx)(t.h3,{id:"testing-context-aware-policies-locally",children:"Testing context aware policies locally"}),"\n",(0,i.jsxs)(t.p,{children:["As well as running policies in a cluster for end-to-end tests,\nyou can use the ",(0,i.jsx)(t.code,{children:"kwctl"})," CLI utility to run policies and mock requests against the cluster."]}),"\n",(0,i.jsxs)(t.p,{children:["For this, ",(0,i.jsx)(t.code,{children:"kwctl run"})," can first record all the interactions with the cluster into a file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --record-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,i.jsxs)(t.p,{children:["which creates the following ",(0,i.jsx)(t.code,{children:"replay-session.yml"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'# replay-session.yml\n---\n- type: Exchange\n  request: |\n    !KubernetesGetResource\n    api_version: /v1\n    kind: Pod\n    name: p-testing\n    namespace: local\n    disable_cache: true\n  response:\n    type: Success\n    payload: \'{"apiVersion":"","kind":"Pod", <snipped> }\'\n'})}),"\n",(0,i.jsx)(t.p,{children:"With the replay session,\nyou can now simulate the cluster interactions without the need of a cluster,\nwhich is ideal for CI and end-to-end tests:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --replay-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n"})}),"\n",(0,i.jsx)(t.h2,{id:"language-sdks",children:"Language SDKs"}),"\n",(0,i.jsx)(t.p,{children:"Language SDK's that support cluster context at the moment expose functions that allow policies to retrieve the current state of the cluster."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you want more information about the waPC function used by the SDKs, check the ",(0,i.jsx)(t.a,{href:"/1.20/reference/spec/host-capabilities/kubernetes",children:"Kubernetes capabilities"})," reference documentation."]})}),"\n",(0,i.jsx)(t.h3,{id:"rust",children:"Rust"}),"\n",(0,i.jsxs)(t.p,{children:["See the functions exposing this functionality at the ",(0,i.jsx)(t.a,{href:"https://docs.rs/kubewarden-policy-sdk/0.8.7/kubewarden_policy_sdk",children:"Rust SDK reference docs"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"go",children:"Go"}),"\n",(0,i.jsxs)(t.p,{children:["See the functions exposing this functionality at the ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go",children:"Go SDK reference docs"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"rego-policies",children:"Rego policies"}),"\n",(0,i.jsx)(t.h3,{id:"gatekeeper",children:"Gatekeeper"}),"\n",(0,i.jsxs)(t.p,{children:["The context aware information is exposed under the ",(0,i.jsx)(t.code,{children:"data.inventory"})," key, like Gatekeeper does."]}),"\n",(0,i.jsxs)(t.p,{children:["The inventory is populated with the resources the policy has been granted access to via the ",(0,i.jsx)(t.code,{children:"spec.contextAwareResources"})," field."]}),"\n",(0,i.jsx)(t.h3,{id:"open-policy-agent",children:"Open Policy Agent"}),"\n",(0,i.jsxs)(t.p,{children:["The context aware information is exposed under the ",(0,i.jsx)(t.code,{children:"data.kubernetes"})," key,\nlike\n",(0,i.jsx)(t.a,{href:"https://github.com/open-policy-agent/kube-mgmt",children:(0,i.jsx)(t.code,{children:"kube-mgmt"})}),"\ndoes by default."]}),"\n",(0,i.jsxs)(t.p,{children:["The inventory is populated with the resources the policy has been granted access to via the ",(0,i.jsx)(t.code,{children:"spec.contextAwareResources"})," field."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);