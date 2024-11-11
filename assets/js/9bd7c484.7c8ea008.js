"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[16349],{29187:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=o(85893),t=o(11151);const s={sidebar_label:"Policy Reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",keywords:["kubewarden","kubernetes","audit scanner"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["explanations","audit-scanner","policy-reports"]},i=void 0,a={id:"explanations/audit-scanner/policy-reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",source:"@site/versioned_docs/version-1.16/explanations/audit-scanner/policy-reports.md",sourceDirName:"explanations/audit-scanner",slug:"/explanations/audit-scanner/policy-reports",permalink:"/1.16/explanations/audit-scanner/policy-reports",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/explanations/audit-scanner/policy-reports.md",tags:[],version:"1.16",lastUpdatedAt:1731328546e3,frontMatter:{sidebar_label:"Policy Reports",title:"Audit Scanner - Policy Reports",description:"The policy reports that the Audit Scanner produces.",keywords:["kubewarden","kubernetes","audit scanner"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["explanations","audit-scanner","policy-reports"]},sidebar:"docs",previous:{title:"Limitations",permalink:"/1.16/explanations/audit-scanner/limitations"},next:{title:"Architecture",permalink:"/1.16/explanations/architecture"}},c={},l=[{value:"Querying the reports",id:"querying-the-reports",level:2},{value:"PolicyReport example",id:"policyreport-example",level:2},{value:"ClusterPolicyReport example",id:"clusterpolicyreport-example",level:2},{value:"Policy Reporter UI",id:"policy-reporter-ui",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/explanations/audit-scanner/policy-reports"})}),"\n",(0,r.jsxs)(n.p,{children:["When using the Kubewarden Audit Scanner, the results of the policy scans are stored using the\n",(0,r.jsx)(n.a,{href:"https://htmlpreview.github.io/?https://github.com/kubernetes-sigs/wg-policy-prototypes/blob/045372e558b896695b2daae92e8c7a04d4d40282/policy-report/docs/index.html",children:"PolicyReport"}),"\nCustom Resource."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["The PolicyReport CRDs are under development in the ",(0,r.jsx)(n.code,{children:"wg-policy"})," Kubernetes group.\nTherefore, this documentation will become out of date if a new version of the CRDs is released."]}),(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.code,{children:"wg-policy"})," group\n",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/wg-policy-prototypes",children:"repository"}),"\nfor more information about the CRDs."]})]}),"\n",(0,r.jsx)(n.p,{children:"These CRDs offer a structured way to store and manage the audit results."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PolicyReport"})," and ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"})," are used to store the results of the policy scans performed by the audit scanner.\nThe audit scanner will create a ",(0,r.jsx)(n.code,{children:"PolicyReport"})," or a ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"})," for each resource scanned, depending on the scope of the resource.\n",(0,r.jsx)(n.code,{children:"PolicyReport"})," objects are available in the namespace where the resource is located, while ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"})," objects are available in the cluster scope."]}),"\n",(0,r.jsx)(n.p,{children:"The audit results generated by the scanner include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the policy that was evaluated"}),"\n",(0,r.jsx)(n.li,{children:"the resource being scanned"}),"\n",(0,r.jsx)(n.li,{children:"the result of the evaluation (pass, fail, or skip)"}),"\n",(0,r.jsx)(n.li,{children:"a timestamp indicating when the evaluation took place."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can also define severity and category annotations for your policies."}),"\n",(0,r.jsxs)(n.p,{children:["Operators can query the reports by using ",(0,r.jsx)(n.code,{children:"kubectl"}),".\nThey can also use the optional UI provided by the\n",(0,r.jsx)(n.a,{href:"https://kyverno.github.io/policy-reporter",children:"policy-reporter"}),"\nopen-source project for monitoring and observability of the PolicyReport CRDs."]}),"\n",(0,r.jsx)(n.h2,{id:"querying-the-reports",children:"Querying the reports"}),"\n",(0,r.jsx)(n.p,{children:"Using the kubectl command line tool, it is possible to query the results of the scan:"}),"\n",(0,r.jsx)(n.p,{children:"List the reports in the default namespace:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"$ kubectl get polr -o wide\n\nNAME                                   KIND         NAME                        PASS   FAIL   WARN   ERROR   SKIP   AGE\n009805e4-6e16-4b70-80c9-cb33b6734c82   Deployment   deployment1                 5      1      0      0       0      1h\n011e8ca7-40d5-4e76-8c89-6f820e24f895   Deployment   deployment2                 2      4      0      0       0      1h\n02c28ab7-e332-47a2-9cc2-fe0fad5cd9ad   Pod          pod1                        10     0      0      0       0      1h\n04937b2b-e68b-47d5-909d-d0ae75527f07   Pod          pod2                        9      1      0      0       0      1h\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"List the cluster-wide reports:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"$ kubectl get cpolr -o wide\n\nNAME                                   KIND        NAME                 PASS   FAIL   WARN   ERROR   SKIP   AGE\n261c9492-deec-4a09-8aa9-cd464bb4b8d1   Namespace   namespace1           3      1     0       0       0      1h\n35ca342f-685b-4162-a342-8d7a52a61749   Namespace   namespace2           0      4     0       0       0      1h\n3a8f8a88-338b-4905-b9e4-f13397a0d7b5   Namespace   namespace3           4      0     0       0       0      15h\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get the details of a specific PolicyReport:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"$ kubectl get polr 009805e4-6e16-4b70-80c9-cb33b6734c82 -o yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get the details of a specific ClusterPolicyReport:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"$ kubectl get cpolr 261c9492-deec-4a09-8aa9-cd464bb4b8d1 -o yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"policyreport-example",children:"PolicyReport example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example shows a ",(0,r.jsx)(n.code,{children:"PolicyReport"})," for the ",(0,r.jsx)(n.code,{children:"Deployment"})," resource ",(0,r.jsx)(n.code,{children:"deployment1"})," in the ",(0,r.jsx)(n.code,{children:"default"})," namespace.\nThe report indicates that the ",(0,r.jsx)(n.code,{children:"Pod"})," failed the ",(0,r.jsx)(n.code,{children:"safe-labels"})," AdmissionPolicy."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: wgpolicyk8s.io/v1beta1\nkind: PolicyReport\nmetadata:\n  creationTimestamp: "2024-02-29T06:55:37Z"\n  generation: 6\n  labels:\n    app.kubernetes.io/managed-by: kubewarden\n    kubewarden.io/policyreport-version: v2\n  name: 009805e4-6e16-4b70-80c9-cb33b6734c82\n  namespace: default\n  ownerReferences:\n    - apiVersion: apps/v1\n      kind: Deployment\n      name: deployment1\n      uid: 009805e4-6e16-4b70-80c9-cb33b6734c82\n  resourceVersion: "2685996"\n  uid: c5a88847-d678-4733-8120-1b83fd6330cb\nresults:\n  - category: Resource validation\n    message: "The following mandatory labels are missing: cost-center"\n    policy: namespaced-default-safe-labels\n    properties:\n      policy-resource-version: "2684810"\n      policy-uid: 826dd4ef-9db5-408e-9482-455f278bf9bf\n      policy-name: "safe-labels"\n      policy-namespace: "default"\n      validating: "true"\n    resourceSelector: {}\n    result: fail\n    scored: true\n    severity: low\n    source: kubewarden\n    timestamp:\n      nanos: 0\n      seconds: 1709294251\nscope:\n  apiVersion: apps/v1\n  kind: Deployment\n  name: deployment1\n  namespace: default\n  resourceVersion: "3"\n  uid: 009805e4-6e16-4b70-80c9-cb33b6734c82\nsummary:\n  error: 0\n  fail: 1\n  pass: 0\n  skip: 0\n  warn: 0\n'})}),"\n",(0,r.jsx)(n.h2,{id:"clusterpolicyreport-example",children:"ClusterPolicyReport example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example shows a ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"})," for the ",(0,r.jsx)(n.code,{children:"Namespace"})," resource ",(0,r.jsx)(n.code,{children:"default"}),".\nThe report indicates that the resource has failed the ",(0,r.jsx)(n.code,{children:"safe-annotations"})," ClusterAdmissionPolicy validation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: wgpolicyk8s.io/v1beta1\nkind: ClusterPolicyReport\nmetadata:\n  creationTimestamp: "2024-02-28T14:44:37Z"\n  generation: 3\n  labels:\n    app.kubernetes.io/managed-by: kubewarden\n    kubewarden.io/policyreport-version: v2\n  name: 261c9492-deec-4a09-8aa9-cd464bb4b8d1\n  ownerReferences:\n    - apiVersion: v1\n      kind: Namespace\n      name: default\n      uid: 261c9492-deec-4a09-8aa9-cd464bb4b8d1\n  resourceVersion: "2403034"\n  uid: 20a3d00e-e955-4f21-a887-317d40f3f052\nresults:\n  - category: Resource validation\n    message: "The following mandatory annotations are not allowed: owner"\n    policy: clusterwide-safe-annotations\n    properties:\n      policy-resource-version: "2396437"\n      policy-uid: 46780d6e-e51a-4d65-8572-a6af01380aa7\n      policy-name: "safe-annotations"\n      validating: "true"\n    resourceSelector: {}\n    result: fail\n    scored: true\n    severity: low\n    source: kubewarden\n    timestamp:\n      nanos: 0\n      seconds: 1709294251\nscope:\n  apiVersion: v1\n  kind: Namespace\n  name: default\n  resourceVersion: "37"\n  uid: 261c9492-deec-4a09-8aa9-cd464bb4b8d1\nsummary:\n  error: 0\n  fail: 1\n  pass: 0\n  skip: 0\n  warn: 0\n'})}),"\n",(0,r.jsx)(n.h2,{id:"policy-reporter-ui",children:"Policy Reporter UI"}),"\n",(0,r.jsxs)(n.p,{children:["The Policy Reporter is shipped as a subchart of ",(0,r.jsx)(n.code,{children:"kubewarden-controller"}),".\nRefer to the ",(0,r.jsx)(n.a,{href:"../../howtos/audit-scanner",children:"Audit Scanner Installation"}),"\npage for more information."]}),"\n",(0,r.jsxs)(n.p,{children:["The Policy Reporter UI provides a dashboard showing all violations\nfrom ",(0,r.jsx)(n.code,{children:"PolicyReports"})," and the ",(0,r.jsx)(n.code,{children:"ClusterPolicyReport"}),".\nThis is shown below."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Policy Reporter dashboard example",src:o(72264).Z+"",width:"2543",height:"1327"})}),"\n",(0,r.jsx)(n.p,{children:"As shown below,\nit also provides a tab for PolicyReports, and a tab for ClusterPolicyReports, with expanded information."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Policy Reporter PolicyReports example",src:o(84754).Z+"",width:"1920",height:"1858"})}),"\n",(0,r.jsxs)(n.p,{children:["Other features of Policy Reporter include forwarding of results to different clients\n(like Grafana Loki, Elasticsearch, chat applications),\nmetrics endpoints, and so on.\nSee the ",(0,r.jsx)(n.a,{href:"https://kyverno.github.io/policy-reporter",children:"policy-reporter's community docs"}),"\nfor more information."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},72264:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/policy-reporter_dashboard-0af5059c4248e2759e0b61e48bdd2cff.png"},84754:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/policy-reporter_policyreports-d21235dcb3f5dd2d4731703f79239d9b.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var r=o(67294);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);