"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[37382],{65749:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"howtos/raw-policies","title":"Raw policies","description":"Kubewarden support for \'raw\' policies.","source":"@site/versioned_docs/version-1.13/howtos/raw-policies.md","sourceDirName":"howtos","slug":"/howtos/raw-policies","permalink":"/1.13/howtos/raw-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.13/howtos/raw-policies.md","tags":[],"version":"1.13","lastUpdatedAt":1739965119000,"sidebarPosition":60,"frontMatter":{"sidebar_label":"Raw policies","sidebar_position":60,"title":"Raw policies","description":"Kubewarden support for \'raw\' policies.","keywords":["kubewarden","kubernetes","support","raw policies"],"doc-persona":["kubewarden-distributor","kubewarden-integrator","kubewarden-operator","kubewarden-policy-developer"],"doc-type":["howto"],"doc-topic":["kubewarden","kubernetes","raw-policies"]},"sidebar":"docs","previous":{"title":"Custom Certificate Authorities","permalink":"/1.13/howtos/custom-certificate-authorities"},"next":{"title":"Audit Scanner","permalink":"/1.13/howtos/audit-scanner"}}');var t=i(74848),o=i(28453);const s={sidebar_label:"Raw policies",sidebar_position:60,title:"Raw policies",description:"Kubewarden support for 'raw' policies.",keywords:["kubewarden","kubernetes","support","raw policies"],"doc-persona":["kubewarden-distributor","kubewarden-integrator","kubewarden-operator","kubewarden-policy-developer"],"doc-type":["howto"],"doc-topic":["kubewarden","kubernetes","raw-policies"]},a=void 0,l={},c=[{value:"Running the policy server outside Kubernetes",id:"running-the-policy-server-outside-kubernetes",level:2},{value:"Running a Policy Server inside Kubernetes without the Kubewarden controller",id:"running-a-policy-server-inside-kubernetes-without-the-kubewarden-controller",level:2},{value:"Using the validate_raw endpoint",id:"using-the-validate_raw-endpoint",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Writing raw policies",id:"writing-raw-policies",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/raw-policies"})}),"\n",(0,t.jsxs)(n.p,{children:["From ",(0,t.jsx)(n.code,{children:"v1.9.0"})," onwards, Kubewarden supports the ability to write and execute policies\noutside a Kubernetes cluster, as a generic policy evaluation engine.\nThe Policy Server exposes the ",(0,t.jsx)(n.code,{children:"/validate_raw"})," endpoint that can be used to validate\narbitrary JSON documents against a Kubewarden policy."]}),"\n",(0,t.jsx)(n.p,{children:"For this guide, we will use the following raw policies:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/raw-validation-policy",children:"raw-validation-policy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/raw-mutation-policy",children:"raw-mutation-policy"})}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Please ensure that the policy author has marked the policy as ",(0,t.jsx)(n.code,{children:"policyType: raw"})," in the metadata.\nYou can inspect the metadata by using ",(0,t.jsx)(n.code,{children:"kwctl"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kwctl inpect ghcr.io/kubewarden/tests/raw-mutation-policy:v0.1.0\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-policy-server-outside-kubernetes",children:"Running the policy server outside Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"The Policy Server can be run outside Kubernetes as a standalone container."}),"\n",(0,t.jsxs)(n.p,{children:["First, create a ",(0,t.jsx)(n.code,{children:"policies.yml"})," file with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"raw-validation:\n  url: ghcr.io/kubewarden/tests/raw-validation-policy:v0.1.0\n  settings:\n    validUsers:\n      - alice\n      - bob\n    validActions:\n      - read\n      - write\n    validResources:\n      - orders\n      - products\n\nraw-mutation:\n  url: ghcr.io/kubewarden/tests/raw-mutation-policy:v0.1.0\n  allowedToMutate: true\n  settings:\n    forbiddenResources:\n      - privateResource\n      - secretResource\n    defaultResource: publicResource\n"})}),"\n",(0,t.jsx)(n.p,{children:"To start the policy server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Create a docker volume to store the policies\ndocker volume create --driver local \\\n                --opt type=tmpfs \\\n                --opt device=tmpfs \\\n                --opt o=ui=65533 \\\n                policy-store\n\n# Start the policy server\ndocker run --rm -it \\\n    -p 3000:3000 \\\n    -v $(pwd)/policies.yml:/policies.yml \\\n    -v policy-store:/registry \\\n    ghcr.io/kubewarden/policy-server:1.9.0 \\\n    --ignore-kubernetes-connection-failure=true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["NOTE: the flag ",(0,t.jsx)(n.code,{children:"--ignore-kubernetes-connection-failure=true"})," is required to start the policy server without Kubernetes.\nHowever, it is possible to start the Policy Server with/inside Kubernetes and use the raw validation endpoint.\nRaw policies can access context-aware",(0,t.jsx)(n.a,{href:"/1.13/explanations/context-aware-policies",children:" capabilities"})," like standard policies."]}),"\n",(0,t.jsx)(n.h2,{id:"running-a-policy-server-inside-kubernetes-without-the-kubewarden-controller",children:"Running a Policy Server inside Kubernetes without the Kubewarden controller"}),"\n",(0,t.jsx)(n.p,{children:"It's not possible to use a Policy Server instance managed by the Kubewarden controller to host raw policies.\nThe controller will not allow the user to change the Policy Server ConfigMap to add a raw policy,\nsince it will try to reconcile it reverting the changes.\nBecause of that, a dedicated Policy Server has to be started."}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"policy-server.yaml"})," file with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: policy-server-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: policy-server\n  template:\n    metadata:\n      labels:\n        app: policy-server\n    spec:\n      containers:\n        - name: policy-server\n          image: ghcr.io/kubewarden/policy-server:v1.9.0\n          ports:\n            - containerPort: 3000\n          volumeMounts:\n            - name: policy-store\n              mountPath: /registry\n            - name: policies-config\n              mountPath: /policies.yml\n              subPath: policies.yml\n      volumes:\n        - name: policy-store\n          emptyDir: {}\n        - name: policies-config\n          configMap:\n            name: policies-configmap\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: policy-server-service\nspec:\n  selector:\n    app: policy-server\n  ports:\n    - protocol: TCP\n      port: 3000\n      targetPort: 3000\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: policies-configmap\ndata:\n  policies.yml: |\n    raw-validation:\n      url: ghcr.io/kubewarden/tests/raw-validation-policy:v0.1.0\n      settings: \n        validUsers:\n          - alice\n          - bob\n        validActions:\n          - read\n          - write\n        validResources:\n          - orders\n          - products\n    raw-mutation:\n      url: ghcr.io/kubewarden/tests/raw-mutation-policy:v0.1.0\n      allowedToMutate: true\n      settings:\n        forbiddenResources:\n          - privateResource\n          - secretResource\n        defaultResource: publicResource\n"})}),"\n",(0,t.jsx)(n.p,{children:"Apply the configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f policy-server.yaml\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The Policy Server instance deployed will have access to Kubernetes resources that could be leveraged by context aware policies.\nThe access level to the Kubernetes resources is determined by the Service Account used to run the Policy Server workload."}),(0,t.jsxs)(n.p,{children:["In the previous example, no Service Account is defined inside of the Deployment specification; hence the ",(0,t.jsx)(n.code,{children:"default"})," Service Account is going to be used."]})]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-validate_raw-endpoint",children:"Using the validate_raw endpoint"}),"\n",(0,t.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,t.jsxs)(n.p,{children:["The raw validation endpoint is exposed at ",(0,t.jsx)(n.code,{children:"/validate_raw"})," and accepts ",(0,t.jsx)(n.code,{children:"POST"})," requests.\nSince we have deployed a service, we can set a port-forward to access it with\n",(0,t.jsx)(n.code,{children:"kubectl port-forward service/policy-server-service 3000:3000 -n default"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's try to validate a JSON document against the ",(0,t.jsx)(n.code,{children:"raw-validation"})," policy:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  http://localhost:3000/validate_raw/raw-validation \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "customers"\n  }\n}\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The request will be not accepted, since ",(0,t.jsx)(n.code,{children:"alice"})," has not been granted access to the ",(0,t.jsx)(n.code,{children:"customers"})," resource:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "response": {\n    "uid": "",\n    "allowed": false,\n    "auditAnnotations": null,\n    "warnings": null\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Let's try again with a valid resource:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  http://localhost:3000/validate_raw/raw-validation \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "orders"\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"This time, the request will be accepted:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "response": {\n    "uid": "",\n    "allowed": true,\n    "auditAnnotations": null,\n    "warnings": null\n  }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"uid"})," field is provided in the request payload, it will be returned as part of the response."]})}),"\n",(0,t.jsx)(n.h3,{id:"mutation",children:"Mutation"}),"\n",(0,t.jsxs)(n.p,{children:["Now, let's try to mutate a JSON document against the ",(0,t.jsx)(n.code,{children:"raw-mutation"})," policy:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n  http://localhost:3000/validate_raw/raw-mutation \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "privateResource"\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"The request will be mutated and the response will contain a JSONPatch:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "response": {\n    "uid": "",\n    "allowed": true,\n    "patchType": "JSONPatch",\n    "patch": "W3sib3AiOiJyZXBsYWNlIiwicGF0aCI6Ii9yZXNvdXJjZSIsInZhbHVlIjoicHVibGljUmVzb3VyY2UifV0=",\n    "auditAnnotations": null,\n    "warnings": null\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"writing-raw-policies",children:"Writing raw policies"}),"\n",(0,t.jsx)(n.p,{children:"Similarly to policies that validate Kubernetes resources, raw policies are written in WebAssembly using Kubewarden SDKs.\nIf you are interested in writing raw policies, please refer to language-specific documentation for more information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/1.13/tutorials/writing-policies/go/raw-policies",children:"Go"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/1.13/tutorials/writing-policies/rust/raw-policies",children:"Rust"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/1.13/tutorials/writing-policies/rego/open-policy-agent/raw-policies",children:"OPA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/1.13/tutorials/writing-policies/wasi/raw-policies",children:"WASI"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);