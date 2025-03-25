"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[74579],{2353:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"operator-manual/airgap/install","title":"","description":"This guide will show you how to install Kubewarden in air-gapped environments. In an air-gapped installation of Kubewarden,","source":"@site/versioned_docs/version-1.8/operator-manual/airgap/02-install.md","sourceDirName":"operator-manual/airgap","slug":"/operator-manual/airgap/install","permalink":"/1.8/operator-manual/airgap/install","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/operator-manual/airgap/02-install.md","tags":[],"version":"1.8","lastUpdatedAt":1742898405000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Installation","title":""},"sidebar":"docs","previous":{"title":"Requirements","permalink":"/1.8/operator-manual/airgap/requirements"},"next":{"title":"Audit Scanner Installation","permalink":"/1.8/howtos/audit-scanner"}}');var t=i(74848),a=i(28453);const s={sidebar_label:"Installation",title:""},l="Air gap installation",o={},c=[{value:"Save container images in your workstation",id:"save-container-images-in-your-workstation",level:2},{value:"Save policies in your workstation",id:"save-policies-in-your-workstation",level:2},{value:"Helm charts",id:"helm-charts",level:2},{value:"Populate private registry",id:"populate-private-registry",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"air-gap-installation",children:"Air gap installation"})}),"\n",(0,t.jsx)(n.p,{children:"This guide will show you how to install Kubewarden in air-gapped environments. In an air-gapped installation of Kubewarden,\nyou will need a private OCI registry accessible by your Kubernetes cluster. Kubewarden Policies\nare WebAssembly modules; therefore, they can be stored inside an OCI-compliant registry as OCI artifacts.\nYou need to add Kubewarden's images and policies to this OCI registry. Let's see how to do that."}),"\n",(0,t.jsx)(n.h2,{id:"save-container-images-in-your-workstation",children:"Save container images in your workstation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download ",(0,t.jsx)(n.code,{children:"kubewarden-images.txt"})," from the Kubewarden ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/helm-charts/releases/",children:"release page"}),". Alternatively, the ",(0,t.jsx)(n.code,{children:"imagelist.txt"})," and ",(0,t.jsx)(n.code,{children:"policylist.txt"})," files are shipped inside the helm charts containing the used container images and policy wasm modules, respectively."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Optionally, you can verify the signatures of the ",(0,t.jsx)(n.a,{href:"../../security/verifying-kubewarden#helm-charts",children:"helm charts"})," and ",(0,t.jsx)(n.a,{href:"../../security/verifying-kubewarden#container-images",children:"container images"})]})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"cert-manager"})," if it is not available in your private registry."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm pull jetstack/cert-manager\nhelm template ./cert-manager-<Version>.tgz | \\\n  awk '$1 ~ /image:/ {print $2}' | sed s/\\\"//g >> ./kubewarden-images.txt\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Download ",(0,t.jsx)(n.code,{children:"kubewarden-save-images.sh"})," and ",(0,t.jsx)(n.code,{children:"kubewarden-load-images.sh"})," from the ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/utils",children:"utils repository"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Save Kubewarden container images into a .tar.gz file:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./kubewarden-save-images.sh \\\n  --image-list ./kubewarden-images.txt \\\n  --images kubewarden-images.tar.gz\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes.\nWhen the process completes, your current directory will output a tarball named ",(0,t.jsx)(n.code,{children:"kubewarden-images.tar.gz"}),". It will be present in the same directory where you executed the command."]}),"\n",(0,t.jsx)(n.h2,{id:"save-policies-in-your-workstation",children:"Save policies in your workstation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Add all the policies you want to use in a ",(0,t.jsx)(n.code,{children:"policies.txt"})," file. A file with a list of the default policies can be found in the Kubewarden defaults ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/helm-charts/releases/",children:"release page"})]}),"\n",(0,t.jsxs)(n.li,{children:["Download ",(0,t.jsx)(n.code,{children:"kubewarden-save-policies.sh"})," and ",(0,t.jsx)(n.code,{children:"kubewarden-load-policies.sh"})," from the ",(0,t.jsx)(n.a,{href:"https://github.com/kubewarden/kwctl/tree/main/scripts",children:"kwctl repository"})]}),"\n",(0,t.jsx)(n.li,{children:"Save policies into a .tar.gz file:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./kubewarden-save-policies.sh --policies-list policies.txt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["kwctl downloads all the policies and stores them as ",(0,t.jsx)(n.code,{children:"kubewarden-policies.tar.gz"})," archive."]}),"\n",(0,t.jsx)(n.h2,{id:"helm-charts",children:"Helm charts"}),"\n",(0,t.jsx)(n.p,{children:"You need to download the following helm charts in your workstation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm pull kubewarden/kubewarden-crds\nhelm pull kubewarden/kubewarden-controller\nhelm pull kubewarden/kubewarden-defaults\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.code,{children:"cert-manager"})," if it is not installed in the air gap cluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm pull jetstack/cert-manager\n"})}),"\n",(0,t.jsx)(n.h2,{id:"populate-private-registry",children:"Populate private registry"}),"\n",(0,t.jsxs)(n.p,{children:["Move ",(0,t.jsx)(n.code,{children:"kubewarden-policies.tar.gz"}),", ",(0,t.jsx)(n.code,{children:"kubewarden-images.tar.gz"}),", ",(0,t.jsx)(n.code,{children:"kubewarden-load-images.sh"}),", ",(0,t.jsx)(n.code,{children:"kubewarden-load-policies.sh"})," and ",(0,t.jsx)(n.code,{children:"policies.txt"}),"\nto the air gap environment."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Load Kubewarden images into the private registry. Docker client must be authenticated against the local registry"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./kubewarden-load-images.sh \\\n  --image-list ./kubewarden-images.txt \\\n  --images kubewarden-images.tar.gz \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Load Kubewarden policies into the private registry. Kwctl must be authenticated against the local registry (",(0,t.jsx)(n.code,{children:"kwctl"})," uses the same mechanism to authenticate as ",(0,t.jsx)(n.code,{children:"docker"}),", a ",(0,t.jsx)(n.code,{children:"~/.docker/config.json"})," file)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./kubewarden-load-policies.sh \\\n  --policies-list policies.txt \\\n  --policies kubewarden-policies.tar.gz \\\n  --registry <REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --sources-path sources.yml\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sources.yaml"})," file is needed by kwctl to connect to registries that fall into these categories:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authentication is required"}),"\n",(0,t.jsx)(n.li,{children:"Self signed certificate is being used"}),"\n",(0,t.jsx)(n.li,{children:"No TLS termination is done"}),"\n"]}),(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/1.8/distributing-policies/custom-certificate-authorities",children:"the section on custom certificate authorities"})," in our documentation to learn more about configuring the ",(0,t.jsx)(n.code,{children:"sources.yaml"})," file"]})]}),"\n",(0,t.jsx)(n.h2,{id:"install-kubewarden",children:"Install Kubewarden"}),"\n",(0,t.jsx)(n.p,{children:"Let's install Kubewarden now that we have everything we need in our private registry. The only difference with a normal\nKubewarden installation is that we need to change the registry in the container images and policies to our private registry."}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"cert-manager"})," if it is not already installed in the air gap cluster:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install --create-namespace cert-manager ./cert-manager-<Version>.tgz \\\n    -n kubewarden \\\n    --set installCRDs=true \\\n    --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-controller \\\n    --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-webhook \\\n    --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-cainjector \\\n    --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/jetstack/cert-manager-ctl\n"})}),"\n",(0,t.jsx)(n.p,{children:"Let's install the Kubewarden stack:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install --wait -n kubewarden \\\n  kubewarden-crds kubewarden-crds.tgz\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install --wait -n kubewarden \\\n  kubewarden-controller kubewarden-controller.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["If you want to use the Policy Reported subchart available in the\n",(0,t.jsx)(n.code,{children:"kubewarden-controller"})," chart you need to define other values specific for the\nsubchart in an air-gapped environment. See an example below:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"helm install --wait -n kubewarden kubewarden-controller kubewarden-controller.tgz \\\n\t--set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n\t--set auditScanner.policyReporter=true \\\n\t--set policy-reporter.image.registry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n\t--set policy-reporter.ui.image.registry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n\t--set policy-reporter.image.repository=kyverno/policy-reporter \\\n\t--set policy-reporter.ui.image.repository=kyverno/policy-reporter-ui\n"})}),(0,t.jsxs)(n.p,{children:["Note that is necessary to define ",(0,t.jsx)(n.code,{children:"auditScanner.policyReporter"})," to enable the\nsubchart and 4 more additional values to configure the registry and repository\nwhere the Policy Reporter images are stored. For more information about the\npolicy report subchart values take a look in ",(0,t.jsx)(n.a,{href:"https://github.com/kyverno/policy-reporter/tree/policy-reporter-2.19.4/charts/policy-reporter",children:"chart\nrepository"}),"."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install --wait -n kubewarden \\\n  kubewarden-defaults kubewarden-defaults.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["To download the recommended policies installed by the ",(0,t.jsx)(n.code,{children:"kubewarden-defaults"})," Helm\nChart from a registry other than ",(0,t.jsx)(n.code,{children:"global.cattle.systemDefaultRegistry"}),", you can\nutilize the ",(0,t.jsx)(n.code,{children:"recommendedPolicies.defaultPoliciesRegistry"})," configuration. This\nconfiguration allows users to specify a registry dedicated to pulling the OCI\nartifacts of the policies. It is particularly useful when their container image\nrepository does not support OCI artifacts."]}),(0,t.jsx)(n.p,{children:"To install and wait for the installation to complete, use the following command:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"helm install --wait -n kubewarden \\\n  kubewarden-defaults kubewarden-defaults.tgz \\\n  --set global.cattle.systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --set recommendedPolicies.defaultPoliciesRegistry=<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"recommendedPolicies.defaultPoliciesRegistry"})," configuration is not set,\nthe ",(0,t.jsx)(n.code,{children:"global.cattle.systemDefaultRegistry"})," will be used as the default registry."]})]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, we need to configure Policy Server to fetch policies from our private registry. See the ",(0,t.jsx)(n.a,{href:"../policy-servers/private-registry",children:"using private registry"})," section of the docs."]}),"\n",(0,t.jsx)(n.p,{children:"Now we can create Kubewarden policies in our cluster! Policies must be available in your private registry."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'kubectl apply -f - <<EOF\napiVersion: policies.kubewarden.io/v1\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: registry://<REGISTRY.YOURDOMAIN.COM:PORT>/kubewarden/policies/pod-privileged:v0.2.2\n  rules:\n  - apiGroups: [""]\n    apiVersions: ["v1"]\n    resources: ["pods"]\n    operations:\n    - CREATE\n  mutating: false\nEOF\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PolicyServer"})," resources must use the image available in your private registry. For example:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apiVersion: policies.kubewarden.io/v1\nkind: PolicyServer\nmetadata:\n  name: reserved-instance-for-tenant-a\nspec:\n  image: <REGISTRY.YOURDOMAIN.COM:PORT>/kubewarden/policy-server:v1.3.0\n  replicas: 2\n  serviceAccountName: sa\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);