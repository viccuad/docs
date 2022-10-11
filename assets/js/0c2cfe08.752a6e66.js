"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1941],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Open Telemetry Quickstart",title:""},s="OpenTelemetry",p={unversionedId:"operator-manual/telemetry/opentelemetry/quickstart",id:"operator-manual/telemetry/opentelemetry/quickstart",title:"",description:"OpenTelemetry is a Cloud Native Computing Foundation framework for",source:"@site/docs/operator-manual/telemetry/opentelemetry/01-quickstart.md",sourceDirName:"operator-manual/telemetry/opentelemetry",slug:"/operator-manual/telemetry/opentelemetry/quickstart",permalink:"/operator-manual/telemetry/opentelemetry/quickstart",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/telemetry/opentelemetry/01-quickstart.md",tags:[],version:"current",lastUpdatedAt:1665482672,formattedLastUpdatedAt:"Oct 11, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Open Telemetry Quickstart",title:""},sidebar:"docs",previous:{title:"Using private registries",permalink:"/operator-manual/policy-servers/private-registry"},next:{title:"Metrics Quickstart",permalink:"/operator-manual/telemetry/metrics/quickstart"}},c={},u=[{value:"Setting up a Kubernetes cluster",id:"setting-up-a-kubernetes-cluster",level:2},{value:"Install OpenTelemetry",id:"install-opentelemetry",level:2},{value:"OpenTelemetry integration",id:"opentelemetry-integration",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opentelemetry"},"OpenTelemetry"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," is a Cloud Native Computing Foundation framework for\nobservability. It enables your microservices to provide metrics, logs and traces."),(0,o.kt)("p",null,"Kubewarden's components are instrumented with the OpenTelemetry SDK, reporting data to an\nOpenTelemetry collector -- called the agent."),(0,o.kt)("p",null,"By following this documentation, we will integrate OpenTelemetry using the following architecture:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each Pod of the Kubewarden stack will have a OpenTelemetry sidecar."),(0,o.kt)("li",{parentName:"ul"},"The sidecar receives tracing and monitoring information from the Kubewarden component via the OpenTelemetry Protocol (OTLP)"),(0,o.kt)("li",{parentName:"ul"},"The OpenTelemetry collector will:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Send the trace events to a central Jaeger instance"),(0,o.kt)("li",{parentName:"ul"},"Expose Prometheus metrics on a specific port")))),(0,o.kt)("p",null,"For more information about the other deployment modes, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/"},"OpenTelemetry official\ndocumentation"),"."),(0,o.kt)("p",null,"Let's first deploy OpenTelemetry in a Kubernetes cluster, so we can reuse it in the next sections\nthat will address specifically tracing and metrics."),(0,o.kt)("h2",{id:"setting-up-a-kubernetes-cluster"},"Setting up a Kubernetes cluster"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section gives step-by-step instructions to create a\nKubernetes cluster with an ingress controller enabled."),(0,o.kt)("p",{parentName:"blockquote"},"Feel free to skip this section if you already have a Kubernetes\ncluster where you can define Ingress resources.")),(0,o.kt)("p",null,"We are going to create a testing Kubernetes cluster using ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"minikube"),"."),(0,o.kt)("p",null,"minikube has many backends, in this case we will use the\n",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/drivers/kvm2/"},"kvm2")," driver\nwhich relies on libvirt."),(0,o.kt)("p",null,"Assuming ",(0,o.kt)("inlineCode",{parentName:"p"},"libvirtd")," is properly running on your machine, issue the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"minikube start --driver=kvm2\n")),(0,o.kt)("p",null,"The command will produce an output similar to the following one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ minikube start --driver=kvm2\n\ud83d\ude04  minikube v1.23.2 on Opensuse-Leap 15.3\n\u2728  Using the kvm2 driver based on user configuration\n\ud83d\udc4d  Starting control plane node minikube in cluster minikube\n\ud83d\udd25  Creating kvm2 VM (CPUs=2, Memory=6000MB, Disk=20000MB) ...\n\ud83d\udc33  Preparing Kubernetes v1.22.2 on Docker 20.10.8 ...\n    \u25aa Generating certificates and keys ...\n    \u25aa Booting up control plane ...\n    \u25aa Configuring RBAC rules ...\n\ud83d\udd0e  Verifying Kubernetes components...\n    \u25aa Using image gcr.io/k8s-minikube/storage-provisioner:v5\n\ud83c\udf1f  Enabled addons: storage-provisioner, default-storageclass\n\ud83c\udfc4  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default\n')),(0,o.kt)("p",null,"Now we have to enable the Ingress addon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"minikube addons enable ingress\n")),(0,o.kt)("p",null,"This will produce an output similar to the following one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ minikube addons enable ingress\n    \u25aa Using image k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.0\n    \u25aa Using image k8s.gcr.io/ingress-nginx/controller:v1.0.0-beta.3\n    \u25aa Using image k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.0\n\ud83d\udd0e  Verifying ingress addon...\n\ud83c\udf1f  The 'ingress' addon is enabled\n")),(0,o.kt)("h2",{id:"install-opentelemetry"},"Install OpenTelemetry"),(0,o.kt)("p",null,"We are going to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-operator"},"OpenTelemetry Operator"),"\nto manage the automatic injection of the OpenTelemetry Collector sidecar\ninside of the PolicyServer pod."),(0,o.kt)("p",null,"The OpenTelemetry Operator requires ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},"cert-manager"),"\nto be installed inside of the cluster."),(0,o.kt)("p",null,"At the time of writing, only specific versions of OpenTelemetry are compatible\nwith Cert Manager, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-operator#opentelemetry-operator-vs-kubernetes-vs-cert-manager"},"see the compat chart"),"."),(0,o.kt)("p",null,"We will install the latest cert-manager Helm chart (",(0,o.kt)("inlineCode",{parentName:"p"},"v1.9.1")," at time of writing):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jetstack https://charts.jetstack.io\n\nhelm install --wait \\\n    --namespace cert-manager \\\n    --create-namespace \\\n    --set installCRDs=true \\\n    cert-manager jetstack/cert-manager\n")),(0,o.kt)("p",null,"Once cert-manager is up and running, the OpenTelemetry operator Helm chart (",(0,o.kt)("inlineCode",{parentName:"p"},"0.13.0")," at time of writing) can be installed in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts\n\nhelm install --wait \\\n  --namespace open-telemetry \\\n  --create-namespace \\\n  my-opentelemetry-operator open-telemetry/opentelemetry-operator\n")),(0,o.kt)("h2",{id:"opentelemetry-integration"},"OpenTelemetry integration"),(0,o.kt)("p",null,"We can now move to the next chapters to enable application metrics (via Prometheus\nintegration) and application tracing (via Jaeger integration)."))}d.isMDXComponent=!0}}]);