"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[59121],{22682:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=o(85893),t=o(11151);const r={sidebar_label:"Monitor Mode",title:""},s="Monitor mode",d={id:"operator-manual/monitor-mode",title:"",description:"When a policy is deployed on the cluster, it will start accepting,",source:"@site/versioned_docs/version-1.8/operator-manual/monitor-mode.md",sourceDirName:"operator-manual",slug:"/operator-manual/monitor-mode",permalink:"/1.8/operator-manual/monitor-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/monitor-mode.md",tags:[],version:"1.8",lastUpdatedAt:1729864393e3,frontMatter:{sidebar_label:"Monitor Mode",title:""},sidebar:"docs",previous:{title:"Installation",permalink:"/1.8/operator-manual/airgap/install"},next:{title:"Rancher Fleet",permalink:"/1.8/operator-manual/Rancher-Fleet"}},c={},l=[{value:"Transitioning policy mode",id:"transitioning-policy-mode",level:2},{value:"A note on mutating policies",id:"a-note-on-mutating-policies",level:2}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"monitor-mode",children:"Monitor mode"})}),"\n",(0,i.jsx)(n.p,{children:"When a policy is deployed on the cluster, it will start accepting,\nrejecting or mutating requests. It's a binary operation, either the\npolicy is taking decisions on operations it targets, or it's not\ninstalled at all."}),"\n",(0,i.jsxs)(n.p,{children:["In order to let users deploy a policy to a cluster, without\nletting it take final decisions, the ",(0,i.jsx)(n.code,{children:"monitor"})," mode has been included."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"monitor"})," mode is a way to deploy policies to the cluster in a way\nthat:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"All requests that go through the policy will be accepted, as if the\npolicy didn't exist."}),"\n",(0,i.jsxs)(n.li,{children:["The policy result is traced in the ",(0,i.jsx)(n.code,{children:"policy-server"}),"\nnormally. Details are included on whether the request would have\nbeen rejected, or if a mutation would have been proposed by the\npolicy."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"policy-server"})," metrics are updated normally, with the mode\nincluded in the metric baggage. Therefore, it's easy to filter policies by\nmode, and focus on the ones deployed via ",(0,i.jsx)(n.code,{children:"monitor"})," mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mode"})," is an attribute included in the ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," and ",(0,i.jsx)(n.code,{children:"AdmissionPolicy"}),"\nresources. There are two values that the ",(0,i.jsx)(n.code,{children:"mode"})," attribute can assume: ",(0,i.jsx)(n.code,{children:"monitor"})," and ",(0,i.jsx)(n.code,{children:"protect"}),". If the\n",(0,i.jsx)(n.code,{children:"mode"})," is omitted, it will default to ",(0,i.jsx)(n.code,{children:"protect"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to create a policy in monitor mode, all you need to do is to\ninclude the mode as part of the spec of the resource. For example, in a ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-capabilities\nspec:\n  mode: monitor\n  policyServer: reserved-instance-for-tenant-a\n  module: registry://ghcr.io/kubewarden/policies/psp-capabilities:v0.1.3\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n    - UPDATE\n  mutating: true\n  settings:\n    allowed_capabilities:\n    - CHOWN\n    required_drop_capabilities:\n    - NET_ADMIN\n'})}),"\n",(0,i.jsx)(n.h2,{id:"transitioning-policy-mode",children:"Transitioning policy mode"}),"\n",(0,i.jsx)(n.p,{children:"It's worth noting that certain attributes can be updated on policies\nonce they have been deployed."}),"\n",(0,i.jsx)(n.p,{children:"For security purposes, a user with UPDATE permissions on policy\nresources can make the policy more restrictive, so that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Transitioning the ",(0,i.jsx)(n.code,{children:"mode"})," of an existing ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," or\n",(0,i.jsx)(n.code,{children:"AdmissionPolicy"})," from ",(0,i.jsx)(n.code,{children:"monitor"})," to ",(0,i.jsx)(n.code,{children:"protect"})," is allowed."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Transitioning the ",(0,i.jsx)(n.code,{children:"mode"})," of an existing ",(0,i.jsx)(n.code,{children:"ClusterAdmissionPolicy"})," or\n",(0,i.jsx)(n.code,{children:"AdmissionPolicy"})," from ",(0,i.jsx)(n.code,{children:"protect"})," to ",(0,i.jsx)(n.code,{children:"monitor"})," is ",(0,i.jsx)(n.strong,{children:"disallowed"}),".\nThis is because the policy would be effectively disabled during\nthe time that it would have been in ",(0,i.jsx)(n.code,{children:"monitor"})," mode, until it was\nrestored back to ",(0,i.jsx)(n.code,{children:"protect"})," mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Hence, in order to change the ",(0,i.jsx)(n.code,{children:"mode"})," of a policy from\n",(0,i.jsx)(n.code,{children:"protect"})," to ",(0,i.jsx)(n.code,{children:"monitor"}),", it is required to delete the\npolicy and recreate it in ",(0,i.jsx)(n.code,{children:"monitor"})," mode. This\nensures that the user has permissions to remove policies."]}),"\n",(0,i.jsx)(n.h2,{id:"a-note-on-mutating-policies",children:"A note on mutating policies"}),"\n",(0,i.jsxs)(n.p,{children:["Mutating policies in ",(0,i.jsx)(n.code,{children:"monitor"})," mode are ",(0,i.jsx)(n.strong,{children:"not"})," going to produce a\nmutation on the resource, since on ",(0,i.jsx)(n.code,{children:"monitor"})," mode they are exclusively\ngoing to log what their answer would have been, including the patch\nthat they would have produced had they been in ",(0,i.jsx)(n.code,{children:"protect"})," mode."]}),"\n",(0,i.jsxs)(n.p,{children:["It's important to take this into account, given that when a mutating\npolicy is in ",(0,i.jsx)(n.code,{children:"monitor"})," mode, subsequent policies will evaluate a\n",(0,i.jsx)(n.em,{children:"slightly"})," different resource than they would have once the mutating policy\nis in ",(0,i.jsx)(n.code,{children:"protect"})," mode. This is because the mutation that it produces has not\nhappened due to the policy being in ",(0,i.jsx)(n.code,{children:"monitor"})," mode."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var i=o(67294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);