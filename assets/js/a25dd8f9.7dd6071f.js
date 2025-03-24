"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[55058],{41517:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"howtos/airgap/install","title":"Air gap installation","description":"Air gap installation for Kubewarden.","source":"@site/versioned_docs/version-1.21/howtos/airgap/02-install.md","sourceDirName":"howtos/airgap","slug":"/howtos/airgap/install","permalink":"/1.21/howtos/airgap/install","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.21/howtos/airgap/02-install.md","tags":[],"version":"1.21","lastUpdatedAt":1742841510000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Installation","title":"Air gap installation","description":"Air gap installation for Kubewarden.","keywords":["kubewarden","kubernetes","air gap installation"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","airgap","installation"]},"sidebar":"docs","previous":{"title":"Requirements","permalink":"/1.21/howtos/airgap/requirements"},"next":{"title":"Quickstart","permalink":"/1.21/howtos/ui-extension/install"}}');var s=i(74848),t=i(28453);const a={sidebar_label:"Installation",title:"Air gap installation",description:"Air gap installation for Kubewarden.",keywords:["kubewarden","kubernetes","air gap installation"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","airgap","installation"]},l=void 0,o={},c=[{value:"Save container images in your workstation",id:"save-container-images-in-your-workstation",level:2},{value:"Save policies in your workstation",id:"save-policies-in-your-workstation",level:2},{value:"Helm charts",id:"helm-charts",level:2},{value:"Populate private registry",id:"populate-private-registry",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/airgap/install"})}),"\n",(0,s.jsxs)(n.p,{children:["This guide shows you how to install Kubewarden in air-gapped environments.\nFor an air-gapped installation of Kubewarden,\nyou need a private Open Container Initiative (OCI) registry accessible by your Kubernetes cluster.\nKubewarden Policies are WebAssembly modules,\ntherefore you can store them in an OCI-compliant registry as OCI artifacts.\nYou need to add Kubewarden's images and policies to this OCI registry. You can\nsee a list of Kubewarden artifacts in the ",(0,s.jsx)(n.a,{href:"/1.21/reference/artifacts",children:"Artifacts reference"})," page.\nThe following sections describe the process."]}),"\n",(0,s.jsx)(n.h2,{id:"save-container-images-in-your-workstation",children:"Save container images in your workstation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download ",(0,s.jsx)(n.code,{children:"kubewarden-images.txt"})," from the Kubewarden\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/helm-charts/releases/",children:"release page"}),".\nAlternatively, the ",(0,s.jsx)(n.code,{children:"imagelist.txt"})," and ",(0,s.jsx)(n.code,{children:"policylist.txt"})," files are shipped inside the helm charts containing the used container images and policy Wasm modules, respectively."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Optionally, you can verify the signatures of the\n",(0,s.jsx)(n.a,{href:"/1.21/tutorials/verifying-kubewarden#helm-charts",children:"helm charts"})," and\n",(0,s.jsx)(n.a,{href:"/1.21/tutorials/verifying-kubewarden#container-images",children:"container images"})]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download ",(0,s.jsx)(n.code,{children:"kubewarden-save-images.sh"})," and ",(0,s.jsx)(n.code,{children:"kubewarden-load-images.sh"})," from the\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/utils",children:"utilities repository"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save Kubewarden container images into a ",(0,s.jsx)(n.code,{children:".tar.gz"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./kubewarden-save-images.sh \\\n  --image-list ./kubewarden-images.txt \\\n  --images kubewarden-images.tar.gz\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Docker begins pulling the images used for an air gap install.\nBe patient.\nThis process takes a few minutes.\nWhen complete, your current directory, where you ran the command, has a tarball, ",(0,s.jsx)(n.code,{children:"kubewarden-images.tar.gz"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"save-policies-in-your-workstation",children:"Save policies in your workstation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add all the policies you want to use in a ",(0,s.jsx)(n.code,{children:"policies.txt"})," file.\nA file with a list of default policies is in the Kubewarden defaults\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/helm-charts/releases/",children:"release page"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download ",(0,s.jsx)(n.code,{children:"kubewarden-save-policies.sh"})," and ",(0,s.jsx)(n.code,{children:"kubewarden-load-policies.sh"})," from the\n",(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/tree/main/scripts",children:"kwctl repository"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save policies into a ",(0,s.jsx)(n.code,{children:".tar.gz"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./kubewarden-save-policies.sh --policies-list policies.txt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The policies are downloaded by ",(0,s.jsx)(n.code,{children:"kwctl"})," and stored in the ",(0,s.jsx)(n.code,{children:"kubewarden-policies.tar.gz"})," archive."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"helm-charts",children:"Helm charts"}),"\n",(0,s.jsx)(n.p,{children:"You need to download the following helm charts to your workstation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm pull kubewarden/kubewarden-crds\nhelm pull kubewarden/kubewarden-controller\nhelm pull kubewarden/kubewarden-defaults\n"})}),"\n",(0,s.jsx)(n.h2,{id:"populate-private-registry",children:"Populate private registry"}),"\n",(0,s.jsx)(n.p,{children:"Move these files to the air gap environment:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubewarden-policies.tar.gz"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubewarden-images.tar.gz"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubewarden-load-images.sh"}),","]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubewarden-load-policies.sh"})," and"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"policies.txt"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Load Kubewarden images into the private registry.\nThe Docker client must be authenticated against the local registry."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./kubewarden-load-images.sh \\\n  --image-list ./kubewarden-images.txt \\\n  --images kubewarden-images.tar.gz \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Load Kubewarden policies into the private registry.\nKwctl must be authenticated against the local registry\n(",(0,s.jsx)(n.code,{children:"kwctl"})," uses the same mechanism to authenticate as ",(0,s.jsx)(n.code,{children:"docker"}),", a ",(0,s.jsx)(n.code,{children:"~/.docker/config.json"})," file)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./kubewarden-load-policies.sh \\\n  --policies-list policies.txt \\\n  --policies kubewarden-policies.tar.gz \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --sources-path sources.yml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sources.yaml"})," file is needed by kwctl to connect to registries in these categories:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Authentication is required"}),"\n",(0,s.jsx)(n.li,{children:"Self signed certificate is being used"}),"\n",(0,s.jsx)(n.li,{children:"No TLS termination is done"}),"\n"]}),(0,s.jsxs)(n.p,{children:["Please refer to\n",(0,s.jsx)(n.a,{href:"/1.21/howtos/custom-certificate-authorities",children:"the section on custom certificate authorities"}),"\nin the documentation to learn about configuring the ",(0,s.jsx)(n.code,{children:"sources.yaml"})," file"]})]}),"\n",(0,s.jsx)(n.h2,{id:"install-kubewarden",children:"Install Kubewarden"}),"\n",(0,s.jsx)(n.p,{children:"Now that your private registry has everything required you can install\nKubewarden. The only difference to a standard Kubewarden installation is that\nyou need to change the registry in the container images and policies to be the\nprivate registry."}),"\n",(0,s.jsx)(n.p,{children:"Install the Kubewarden stack:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm install --wait -n kubewarden \\\n  kubewarden-crds kubewarden-crds.tgz\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm install --wait -n kubewarden \\\n  kubewarden-controller kubewarden-controller.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["To use the Policy Reported sub-chart available in the\n",(0,s.jsx)(n.code,{children:"kubewarden-controller"})," chart you need to define other values specific for the\nsub-chart in an air-gapped environment.\nSee an example below:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm install --wait -n kubewarden kubewarden-controller kubewarden-controller.tgz \\\n    --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n    --set auditScanner.policyReporter=true \\\n    --set policy-reporter.image.registry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n    --set policy-reporter.ui.image.registry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n    --set policy-reporter.image.repository=kyverno/policy-reporter \\\n    --set policy-reporter.ui.image.repository=kyverno/policy-reporter-ui\n"})}),(0,s.jsxs)(n.p,{children:["It's necessary to define ",(0,s.jsx)(n.code,{children:"auditScanner.policyReporter"})," to enable the sub-chart and 4 more values,\nto configure the registry and repository where the Policy Reporter images are stored.\nFor more information about the policy report sub-chart values see\n",(0,s.jsx)(n.a,{href:"https://github.com/kyverno/policy-reporter/tree/policy-reporter-2.19.4/charts/policy-reporter",children:"chart repository"}),"."]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"helm install --wait -n kubewarden \\\n  kubewarden-defaults kubewarden-defaults.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["To download the recommended policies installed by the ",(0,s.jsx)(n.code,{children:"kubewarden-defaults"})," Helm Chart from a registry other than ",(0,s.jsx)(n.code,{children:"global.cattle.systemDefaultRegistry"}),",\nyou can use the ",(0,s.jsx)(n.code,{children:"recommendedPolicies.defaultPoliciesRegistry"})," configuration.\nThis configuration lets users specify a registry dedicated to pulling the OCI artifacts of the policies.\nIt's particularly useful when their container image repository doesn't support OCI artifacts."]}),(0,s.jsx)(n.p,{children:"To install, and wait for the installation to complete, use the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm install --wait -n kubewarden \\\n  kubewarden-defaults kubewarden-defaults.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --set recommendedPolicies.defaultPoliciesRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"recommendedPolicies.defaultPoliciesRegistry"})," configuration isn't set,\nthe ",(0,s.jsx)(n.code,{children:"global.cattle.systemDefaultRegistry"})," is used as the default registry."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, you need to configure Policy Server to fetch policies from your private registry.\nSee the ",(0,s.jsx)(n.a,{href:"../policy-servers/private-registry",children:"using private registry"})," section of the documentation."]}),"\n",(0,s.jsx)(n.p,{children:"Now you can create Kubewarden policies in your cluster.\nPolicies must be available in your private registry."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: registry://<REGISTRY.YOURDOMAIN.COM:PORT>/kubewarden/policies/pod-privileged:v0.2.2\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n  mutating: false\nEOF\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PolicyServer"})," resources must use the image available in your private registry.\nFor example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: reserved-instance-for-tenant-a\nspec:\n  image: <REGISTRY.YOURDOMAIN.COM:PORT>/kubewarden/policy-server:v1.3.0\n  replicas: 2\n  serviceAccountName: sa\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);