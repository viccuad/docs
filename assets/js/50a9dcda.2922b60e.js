"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8504],{39961:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"howtos/psp-migration","title":"PodSecurityPolicy migration","description":"Discusses PSP migration to Kubewarden policies after Kubernetes v1.25.","source":"@site/versioned_docs/version-1.13/howtos/psp-migration.md","sourceDirName":"howtos","slug":"/howtos/psp-migration","permalink":"/1.13/howtos/psp-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.13/howtos/psp-migration.md","tags":[],"version":"1.13","lastUpdatedAt":1736237605000,"sidebarPosition":20,"frontMatter":{"sidebar_label":"PSP migration","sidebar_position":20,"title":"PodSecurityPolicy migration","description":"Discusses PSP migration to Kubewarden policies after Kubernetes v1.25.","keywords":["kubewarden","kubernetes","appvia","psp","pod security policy"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["pod-security-policy-migration"]},"sidebar":"docs","previous":{"title":"Common tasks","permalink":"/1.13/howtos/tasks"},"next":{"title":"Pod Security Admission","permalink":"/1.13/howtos/pod-security-admission-with-kubewarden"}}');var r=s(74848),o=s(28453);const t={sidebar_label:"PSP migration",sidebar_position:20,title:"PodSecurityPolicy migration",description:"Discusses PSP migration to Kubewarden policies after Kubernetes v1.25.",keywords:["kubewarden","kubernetes","appvia","psp","pod security policy"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["pod-security-policy-migration"]},a=void 0,l={},c=[{value:"Kubewarden replacements for PSP",id:"kubewarden-replacements-for-psp",level:2},{value:"Blocking container privilege escalation",id:"blocking-container-privilege-escalation",level:3},{value:"User and group configuration",id:"user-and-group-configuration",level:3},{value:"Privileged container configuration",id:"privileged-container-configuration",level:3},{value:"Host namespace configuration",id:"host-namespace-configuration",level:3},{value:"Mapping Kuberwarden policies to PSP fields",id:"mapping-kuberwarden-policies-to-psp-fields",level:2},{value:"PSP migration script",id:"psp-migration-script",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:s,Head:i}=n;return s||u("Details",!0),i||u("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/psp-migration"})}),"\n",(0,r.jsxs)(n.p,{children:["For Kubernetes \u2265 v1.25.\n",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/",children:"PodSecurityPolicy"}),"\n(PSP) is removed. Now you can use Kubewarden for admission control on your\nKubernetes clusters."]}),"\n",(0,r.jsxs)(n.p,{children:["Kubewarden has separate policies to achieve the same goal as a monolithic PSP\nconfiguration. Each Kubewarden policy definition functions as a different\nconfiguration section in the specification of a PSP. The mapping of PSP\nconfiguration fields to their respective Kubewarden policies is in the ",(0,r.jsx)(n.a,{href:"#mapping-kuberwarden-policies-to-psp-fields",children:"mapping\ntable"})," below."]}),"\n",(0,r.jsx)(n.p,{children:"With Kubewarden, operators have granular control of policy configuration in\ntheir clusters."}),"\n",(0,r.jsxs)(n.p,{children:["With a Kubewarden instance, you can deploy policies to replace the\n",(0,r.jsx)(n.code,{children:"PodSecurityPolicy"})," object. We consider these rules in this example:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a PSP disabling privileged escalation"}),"\n",(0,r.jsx)(n.li,{children:"privileged containers"}),"\n",(0,r.jsx)(n.li,{children:"blocking pods running as root"}),"\n",(0,r.jsx)(n.li,{children:"forcing a particular user group"}),"\n",(0,r.jsx)(n.li,{children:"blocking host namespaces"}),"\n",(0,r.jsx)(n.li,{children:"allowing a pod to use only port 443"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The YAML definition of this PSP is:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"PSP YAML definition"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted\nspec:\n  allowPrivilegeEscalation: false\n  runAsUser:\n    rule: MustRunAsNonRoot\n  supplementalGroups:\n    rule: MustRunAs\n    ranges:\n      - min: 1000\n        max: 65535\n  privileged: false\n  hostNetwork: false\n  hostIPC: false\n  hostPID: false\n  hostPorts:\n    - min: 443\n      max: 443\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"kubewarden-replacements-for-psp",children:"Kubewarden replacements for PSP"}),"\n",(0,r.jsx)(n.p,{children:"Now we will create Kubewarden policies to achieve the same goal.\nYou enforce each rule with a separate Kubewarden policy.\nSo, in this example, you need a separate policy for the enforcement of each of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"privileged escalation"}),"\n",(0,r.jsx)(n.li,{children:"user and group configuration"}),"\n",(0,r.jsx)(n.li,{children:"host namespaces"}),"\n",(0,r.jsx)(n.li,{children:"privileged container configuration."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"blocking-container-privilege-escalation",children:"Blocking container privilege escalation"}),"\n",(0,r.jsx)(n.p,{children:"You can deploy a policy as shown below:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("code",{children:"kubectl"})," command for policy deployment"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-allow-privilege-escalation\nspec:\n  module: ghcr.io/kubewarden/policies/allow-privilege-escalation-psp:v0.2.6\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    default_allow_privilege_escalation: false\nEOF\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["In that command, we have specified ",(0,r.jsx)(n.code,{children:"default_allow_privilege_escalation"})," to be\n",(0,r.jsx)(n.code,{children:"false"}),". This policy restricts pods that try to run with more privileges than\nthe parent container."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Output from ",(0,r.jsx)("code",{children:"kubectl"})," that attempts to raise privilege"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      allowPrivilegeEscalation: true\n  - name: sidecar\n    image: sidecar\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-allow-privilege-escalation.kubewarden.admission" denied the request: one of the containers has privilege escalation enabled\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"user-and-group-configuration",children:"User and group configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Now, to enforce the user and group configuration, you can use the\n",(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/user-group-psp-policy",children:"user-group-psp policy"})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("code",{children:"kubectl"})," command to use ",(0,r.jsx)("code",{children:"user-group-psp-policy"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-user-group\nspec:\n  module: ghcr.io/kubewarden/policies/user-group-psp:v0.4.9\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: true\n  settings:\n    run_as_user:\n      rule: MustRunAsNonRoot\n    supplemental_groups:\n      rule: MustRunAs\n      ranges:\n        - min: 1000\n          max: 65535\nEOF\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["You should configure the policy with ",(0,r.jsx)(n.code,{children:"mutation: true"}),". It's required because\nthe policy will add\n",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups",children:"supplementalGroups"}),"\nwhen the user does not define them."]}),"\n",(0,r.jsx)(n.p,{children:"So, now users cannot deploy pods running as root:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Example output where ",(0,r.jsx)("code",{children:"runAsNonRoot: false"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      runAsNonRoot: false\n      runAsUser: 0\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-user-group-fb836.kubewarden.admission" denied the request: RunAsNonRoot should be set to true\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Example output where ",(0,r.jsx)("code",{children:"runAsUser: 0"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      runAsNonRoot: true\n      runAsUser: 0\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-user-group-fb836.kubewarden.admission" denied the request: Invalid user ID: cannot run container with root ID (0)\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["This example below shows the addition of a ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups",children:"supplemental\ngroup"}),",\ndespite it not being defined by us."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Example addition of a supplemental group"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\nEOF\npod/nginx created\n$ kubectl get pods -o json nginx | jq ".spec.securityContext"\n{\n  "supplementalGroups": [\n    10000\n  ]\n}\n\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"privileged-container-configuration",children:"Privileged container configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You need to replace the older PSP configuration that blocks privileged\ncontainers. It's necessary to deploy the ",(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/pod-privileged-policy",children:"pod-privileged\npolicy"}),". This policy does\nnot need any settings. Once running, it will block privileged pods."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Applying the ",(0,r.jsx)("code",{children:"pod-privileged-policy"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-privileged\nspec:\n  module: ghcr.io/kubewarden/policies/pod-privileged:v0.2.7\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings: null\nEOF\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"To test the policy, we can try running a pod with privileged configuration enabled:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Pod run with privileged configuration enabled"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n    securityContext:\n      privileged: true\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-privileged.kubewarden.admission" denied the request: Privileged container is not allowed\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"host-namespace-configuration",children:"Host namespace configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To finish the PSP migration exercise, you need to disable host namespace\nsharing. For that, we shall be using the ",(0,r.jsxs)(n.a,{href:"https://github.com/kubewarden/host-namespaces-psp-policy",children:[(0,r.jsx)(n.code,{children:"host-namespace-psp"}),"\npolicy"]}),". It allows\nthe cluster administrator to block IPC, PID, and network namespaces\nindividually. It also sets the ports that the pods can be open on, on the host\nIP."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Disabling namespace sharing and setting ports"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-hostnamespaces\nspec:\n  module: ghcr.io/kubewarden/policies/host-namespaces-psp:v0.1.6\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    allow_host_ipc: false\n    allow_host_pid: false\n    allow_host_ports:\n      - min: 443\n        max: 443\n    allow_host_network: false\nEOF\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"We can validate the policy.\nThe pod should not be able to share host namespaces:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Blocking namespace example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  hostIPC: true\n  hostNetwork: false\n  hostPID: false\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\n\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod has IPC enabled, but this is not allowed\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  hostIPC: false\n  hostNetwork: true\n  hostPID: false\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod has host network enabled, but this is not allowed\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  hostIPC: false\n  hostNetwork: false\n  hostPID: true\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod has host PID enabled, but this is not allowed\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["In this last example, the pod should only be able to expose port 443.\nIf other ports are configured in ",(0,r.jsx)(n.code,{children:"hostPorts"})," then an error should happen."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Attempting to use port 80 in ",(0,r.jsx)("code",{children:"hostPorts"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl apply -f - <<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n    ports:\n      - containerPort: 80\n        hostPort: 80\n  - name: sleeping-sidecar\n    image: alpine\n    command: ["sleep", "1h"]\nEOF\nError from server: error when creating "STDIN": admission webhook "clusterwide-psp-hostnamespaces.kubewarden.admission" denied the request: Pod is using unallowed host ports in containers\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"mapping-kuberwarden-policies-to-psp-fields",children:"Mapping Kuberwarden policies to PSP fields"}),"\n",(0,r.jsx)(n.p,{children:"This table maps PSP configuration fields to corresponding Kubewarden policies."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"PSP field"}),(0,r.jsx)(n.th,{children:"Kubewarden equivalent policy"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged",children:"privileged"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/pod-privileged-policy",children:"pod-privileged-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces",children:"hostPID"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/host-namespaces-psp-policy",children:"host-namespaces-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces",children:"hostIPC"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/host-namespaces-psp-policy",children:"host-namespaces-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces",children:"hostNetwork"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/host-namespaces-psp-policy",children:"host-namespaces-psp-polic"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces",children:"hostPorts"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/host-namespaces-psp-policy",children:"host-namespaces-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems",children:"volumes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/volumes-psp-policy",children:"volumes-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems",children:"allowedHostPaths"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/hostpaths-psp-policy",children:"hostpaths-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems",children:"readOnlyRootFilesystem"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/readonly-root-filesystem-psp-policy",children:"readonly-root-filesystem-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems",children:"fsgroup"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/allowed-fsgroups-psp-policy",children:"allowed-fsgroups-psp-policy "})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#flexvolume-drivers",children:"allowedFlexVolumes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/flexvolume-drivers-psp-policy",children:"flexvolume-drivers-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups",children:"runAsUser"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/user-group-psp-policy",children:"user-group-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups",children:"runAsGroup"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/user-group-psp-policy",children:"user-group-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups",children:"supplementalGroups"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/user-group-psp-policy",children:"user-group-psp-policy "})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation",children:"allowPrivilegeEscalation"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/allow-privilege-escalation-psp-policy",children:"allow-privilege-escalation-psp-policy "})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#privilege-escalation",children:"defaultAllowPrivilegeEscalation"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/allow-privilege-escalation-psp-policy",children:"allow-privilege-escalation-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#capabilities",children:"allowedCapabilities"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/capabilities-psp-policy",children:"capabilities-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#capabilities",children:"defaultAddCapabilities"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/capabilities-psp-policy",children:"capabilities-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#capabilities",children:"requiredDropCapabilities"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/capabilities-psp-policy",children:"capabilities-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#selinux",children:"seLinux"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/selinux-psp-policy",children:"selinux-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#allowedprocmounttypes",children:"allowedProcMountTypes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/allowed-proc-mount-types-psp-policy",children:"allowed-proc-mount-types-psp-policy"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor",children:"apparmor"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/apparmor-psp-policy",children:"apparmor-psp-policy "})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor",children:"seccomp"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/seccomp-psp-policy",children:"seccomp-psp-policy "})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor",children:"forbiddenSysctls"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/sysctl-psp-policy",children:"sysctl-psp-policy "})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/#apparmor",children:"allowedUnsafeSysctls"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/sysctl-psp-policy",children:"sysctl-psp-policy "})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"psp-migration-script",children:"PSP migration script"}),"\n",(0,r.jsxs)(n.p,{children:["The Kubewarden team has developed a script for PSP migration. It uses the\nmigration tool from ",(0,r.jsx)(n.a,{href:"https://github.com/appvia/psp-migration",children:"AppVia"}),". The\nAppVia tool reads a PSP YAML configuration. It then generates the corresponding\npolicies. It does this for Kubewarden and other policy engines."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"The AppVia migration tool is out of control of the Kuberwarden maintainers.\nThis means that it's possible it generates out-of-date Kubewarden policies. Use\nwith caution. We need a pull request for AppVia for which work is ongoing.\nContact us for more information if you need to."})}),"\n",(0,r.jsxs)(n.p,{children:["The script is available in the Kubewarden\n",(0,r.jsx)(n.a,{href:"https://github.com/kubewarden/utils/blob/main/scripts/psp-to-kubewarden",children:"utils"}),"\nrepository. It downloads the AppVia migration tool into the working directory\nto use. It processes the PSPs defined in the ",(0,r.jsx)(n.code,{children:"kubectl"})," default context. Then it\nprints the Kuberwarden policies definitions on the standard output. Users can\nredirect the content to a file or to ",(0,r.jsx)(n.code,{children:"kubectl"})," directly."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This script only works in Linux x86_64 machines."})}),"\n",(0,r.jsx)(n.p,{children:"Let's take a look at an example. In a cluster with the PSP:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"blocking access to host namespaces"}),"\n",(0,r.jsx)(n.li,{children:"blocking privileged containers"}),"\n",(0,r.jsx)(n.li,{children:"not allowing privilege escalation"}),"\n",(0,r.jsx)(n.li,{children:"dropping container capabilities"}),"\n",(0,r.jsx)(n.li,{children:"listing the allowed volume types"}),"\n",(0,r.jsx)(n.li,{children:"defining the allowed users and groups to be used"}),"\n",(0,r.jsx)(n.li,{children:"controlling the supplemental group applied to volumes"}),"\n",(0,r.jsx)(n.li,{children:"forcing containers to run in a read-only root filesystem"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following YAML could be used."}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"The PSP configuration"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted\nspec:\n  hostNetwork: false\n  hostIPC: false\n  hostPID: false\n  hostPorts:\n    - min: 80\n      max: 8080\n  privileged: false\n  # Required to prevent escalations to root.\n  allowPrivilegeEscalation: false\n  requiredDropCapabilities:\n    - ALL\n  # Allow core volume types.\n  volumes:\n    - "configMap"\n    - "emptyDir"\n    - "projected"\n    - "secret"\n    - "downwardAPI"\n    # Assume that ephemeral CSI drivers & persistentVolumes set up by the cluster admin are safe to use.\n    - "csi"\n    - "persistentVolumeClaim"\n    - "ephemeral"\n  runAsUser:\n    # Require the container to run without root privileges.\n    rule: "MustRunAsNonRoot"\n  seLinux:\n    # This policy assumes the nodes are using AppArmor rather than SELinux.\n    rule: "RunAsAny"\n  supplementalGroups:\n    rule: "MustRunAs"\n    ranges:\n      # Forbid adding the root group.\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: "MustRunAs"\n    ranges:\n      # Forbid adding the root group.\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: true\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"Kubewarden policies can be applied directly to a cluster using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ./psp-to-kubewarden | kubectl apply -f -\nWarning: policy/v1beta1 PodSecurityPolicy is deprecated in v1.21+, unavailable in v1.25+\nWarning: policy/v1beta1 PodSecurityPolicy is deprecated in v1.21+, unavailable in v1.25+\nclusteradmissionpolicy.policies.kubewarden.io/psp-privileged-82bf2 created\nclusteradmissionpolicy.policies.kubewarden.io/psp-readonlyrootfilesystem-b4a55 created\nclusteradmissionpolicy.policies.kubewarden.io/psp-hostnamespaces-a25a2 created\nclusteradmissionpolicy.policies.kubewarden.io/psp-volumes-cee05 created\nclusteradmissionpolicy.policies.kubewarden.io/psp-capabilities-34d8e created\nclusteradmissionpolicy.policies.kubewarden.io/psp-usergroup-878b0 created\nclusteradmissionpolicy.policies.kubewarden.io/psp-fsgroup-3b08e created\nclusteradmissionpolicy.policies.kubewarden.io/psp-defaultallowprivilegeescalation-b7e87 created\n"})}),"\n",(0,r.jsx)(n.p,{children:"If users want to inspect the policies before applying, it's possible to redirect the content to a file or review it directly in the console"}),"\n",(0,r.jsx)(n.p,{children:"To store the generated policies and view them:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("code",{children:(0,r.jsx)(n.p,{children:"$ ./psp-to-kubewarden > policies.yaml && cat policies.yaml"})})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ ./psp-to-kubewarden > policies.yaml\n$ cat policies.yaml\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-privileged-eebb9\nspec:\n  module: registry://ghcr.io/kubewarden/policies/pod-privileged:v0.2.7\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings: null\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-readonlyrootfilesystem-34d7c\nspec:\n  module: registry://ghcr.io/kubewarden/policies/readonly-root-filesystem-psp:v0.1.6\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings: null\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-hostnamespaces-41314\nspec:\n  module: registry://ghcr.io/kubewarden/policies/host-namespaces-psp:v0.1.6\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    allow_host_ipc: false\n    allow_host_pid: false\n    allow_host_ports:\n      - max: 8080\n        min: 80\n    allow_host_network: false\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-volumes-2fd34\nspec:\n  module: registry://ghcr.io/kubewarden/policies/volumes-psp:v0.1.11\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    allowedTypes:\n      - configMap\n      - emptyDir\n      - projected\n      - secret\n      - downwardAPI\n      - csi\n      - persistentVolumeClaim\n      - ephemeral\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-capabilities-340fe\nspec:\n  module: registry://ghcr.io/kubewarden/policies/capabilities-psp:v0.1.13\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    allowed_capabilities: []\n    required_drop_capabilities:\n      - ALL\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-usergroup-19f7a\nspec:\n  module: registry://ghcr.io/kubewarden/policies/user-group-psp:v0.4.9\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    run_as_user:\n      rule: MustRunAsNonRoot\n    supplemental_groups:\n      ranges:\n        - max: 65535\n          min: 1\n      rule: MustRunAs\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-fsgroup-52337\nspec:\n  module: registry://ghcr.io/kubewarden/policies/allowed-fsgroups-psp:v0.1.10\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    ranges:\n      - max: 65535\n        min: 1\n    rule: MustRunAs\n\n---\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: psp-defaultallowprivilegeescalation-6f11b\nspec:\n  module: registry://ghcr.io/kubewarden/policies/allow-privilege-escalation-psp:v0.2.6\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n        - UPDATE\n  mutating: false\n  settings:\n    default_allow_privilege_escalation: false\n\n'})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The policy names are generated by the PSP migration tool.\nYou may want to change the name to something more meaningful."})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);