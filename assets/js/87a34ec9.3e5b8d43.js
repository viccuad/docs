"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[217],{35552:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"operator-manual/telemetry/metrics/quickstart","title":"","description":"This section describes how to enable metrics reporting on the Policy Server.","source":"@site/versioned_docs/version-1.9/operator-manual/telemetry/metrics/01-quickstart.md","sourceDirName":"operator-manual/telemetry/metrics","slug":"/operator-manual/telemetry/metrics/quickstart","permalink":"/1.9/operator-manual/telemetry/metrics/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/operator-manual/telemetry/metrics/01-quickstart.md","tags":[],"version":"1.9","lastUpdatedAt":1741176318000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Metrics Quickstart","title":""},"sidebar":"docs","previous":{"title":"Open Telemetry Quickstart","permalink":"/1.9/operator-manual/telemetry/opentelemetry/quickstart"},"next":{"title":"Tracing Quickstart","permalink":"/1.9/operator-manual/telemetry/tracing/quickstart"}}');var s=a(74848),t=a(28453);const o={sidebar_label:"Metrics Quickstart",title:""},i="Metrics",c={},l=[{value:"Install Prometheus",id:"install-prometheus",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:2},{value:"Accessing Prometheus",id:"accessing-prometheus",level:2},{value:"Accessing Grafana",id:"accessing-grafana",level:2},{value:"Using Kubewarden Grafana dashboard",id:"using-kubewarden-grafana-dashboard",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"metrics",children:"Metrics"})}),"\n",(0,s.jsx)(n.p,{children:"This section describes how to enable metrics reporting on the Policy Server."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Before continuing, make sure you completed the previous\n",(0,s.jsx)(n.a,{href:"/1.9/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry",children:"OpenTelemetry"})," section of this book. It\nis required for this section to work correctly."]})}),"\n",(0,s.jsxs)(n.p,{children:["We are going to use ",(0,s.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," to scrape metrics exposed by the Policy\nServer."]}),"\n",(0,s.jsx)(n.h2,{id:"install-prometheus",children:"Install Prometheus"}),"\n",(0,s.jsxs)(n.p,{children:["We will use the ",(0,s.jsx)(n.a,{href:"https://github.com/prometheus-operator/prometheus-operator",children:"Prometheus Operator"}),",\nthat allows us to intuitively define Prometheus' Targets."]}),"\n",(0,s.jsx)(n.p,{children:"There are many ways to install and set up Prometheus. For ease of deployment, we will use the\nPrometheus community Helm chart."}),"\n",(0,s.jsx)(n.p,{children:"Let's add the helm repository from the Prometheus Community:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's install the\n",(0,s.jsx)(n.a,{href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack",children:(0,s.jsx)(n.code,{children:"kube-prometheus-stack"})}),"\nchart. This chart contains a collection of Kubernetes manifests, Grafana dashboards, and Prometheus\nrules."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's create a ",(0,s.jsx)(n.code,{children:"kube-prometheus-stack-values.yaml"})," file to configure the ",(0,s.jsx)(n.code,{children:"kube-prometheus-stack"}),"\nHelm chart values with the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"prometheus:\n  additionalServiceMonitors:\n    - name: kubewarden\n      selector:\n        matchLabels:\n          app: kubewarden-policy-server-default\n      namespaceSelector:\n        matchNames:\n          - kubewarden\n      endpoints:\n        - port: metrics\n          interval: 10s\n    - name: kubewarden-controller\n      selector:\n        matchLabels:\n          app.kubernetes.io/name: kubewarden-controller\n      namespaceSelector:\n        matchNames:\n          - kubewarden\n      endpoints:\n        - port: metrics\n          interval: 10s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"prometheus-operator"})," deployed as part of this Helm chart defines the concept of ",(0,s.jsx)(n.a,{href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md#servicemonitor",children:"Service\nMonitors"}),",\nused to declaratively define which services should be monitored by Prometheus."]}),"\n",(0,s.jsxs)(n.p,{children:["In our case, we are adding a Service monitor targeting the ",(0,s.jsx)(n.code,{children:"kubewarden"})," namespace, for services that\nmatch labels ",(0,s.jsx)(n.code,{children:"app=kubewarden-policy-server-default"})," and ",(0,s.jsx)(n.code,{children:"app.kubernetes.io/name: kubewarden-controller"}),".\nThis way, the Prometheus Operator is able to inspect which Kubernetes Endpoints are tied to services matching this conditions.\nThe operator will then take care of generating a valid configuration file for Prometheus, and reloading it\nautomatically after updating its configuration file."]}),"\n",(0,s.jsx)(n.p,{children:"Install the Prometheus stack Helm Chart :"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["At time of writing the latest chart version is ",(0,s.jsx)(n.code,{children:"51.5.3"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm install --wait --create-namespace \\\n  --namespace prometheus \\\n  --version 51.5.3 \\\n  --values kube-prometheus-stack-values.yaml \\\n  prometheus prometheus-community/kube-prometheus-stack\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-kubewarden",children:"Install Kubewarden"}),"\n",(0,s.jsx)(n.p,{children:"We can now install Kubewarden in the recommended way with Helm charts."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"cert-manager is a requirement of Kubewarden, and OpenTelemetry is required for this\nfeature, but we've already installed them in a previous section of this book."})}),"\n",(0,s.jsx)(n.p,{children:"As a first step, we have to add the Helm repository that contains Kubewarden:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm repo add kubewarden https://charts.kubewarden.io\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we have to install the Custom Resource Definitions (CRDs) defined by\nKubewarden:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm install --wait \\\n  --namespace kubewarden --create-namespace \\\n  kubewarden-crds kubewarden/kubewarden-crds\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we can deploy the rest of the Kubewarden stack. The official helm\nchart will create a PolicyServer named ",(0,s.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Let's configure the values of the Helm Chart so that we have metrics enabled\nin Kubewarden. Write the ",(0,s.jsx)(n.code,{children:"kubewarden-values.yaml"})," file with the following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"telemetry:\n  metrics:\n    enabled: True\n    port: 8080\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's install the helm charts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"helm install --wait \\\n  --namespace kubewarden \\\n  --values kubewarden-values.yaml \\\n  kubewarden-controller kubewarden/kubewarden-controller\n\nhelm install --wait \\\n  --namespace kubewarden \\\n  --create-namespace \\\n  kubewarden-defaults kubewarden/kubewarden-defaults \\\n  --set recommendedPolicies.enabled=True \\\n  --set recommendedPolicies.defaultPolicyMode=monitor\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This leads to the creation of the ",(0,s.jsx)(n.code,{children:"default"})," instance of ",(0,s.jsx)(n.code,{children:"PolicyServer"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl get policyservers.policies.kubewarden.io\nNAME      AGE\ndefault   3m7s\n"})}),"\n",(0,s.jsx)(n.p,{children:"By default, this policy server will have metrics enabled."}),"\n",(0,s.jsx)(n.h2,{id:"accessing-prometheus",children:"Accessing Prometheus"}),"\n",(0,s.jsx)(n.p,{children:"Prometheus exposes a very simple UI that we can use to inspect metrics exposed by different\ncomponents within our Kubernetes cluster."}),"\n",(0,s.jsx)(n.p,{children:"We can forward the Prometheus port so we can easily access it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl port-forward -n prometheus --address 0.0.0.0 svc/prometheus-operated 9090\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, we can visit prometheus through port ",(0,s.jsx)(n.code,{children:"9090"})," and perform a query, for example:\n",(0,s.jsx)(n.code,{children:"kubewarden_policy_evaluations_total"}),". We will see that the number of evaluations will grow over\ntime as we produce more requests that go through the policy."]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-grafana",children:"Accessing Grafana"}),"\n",(0,s.jsx)(n.p,{children:"We can forward the Grafana service so we can easily access it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl port-forward -n prometheus --address 0.0.0.0 svc/prometheus-grafana 8080:80\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can now login with the default username ",(0,s.jsx)(n.code,{children:"admin"})," and password ",(0,s.jsx)(n.code,{children:"prom-operator"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"using-kubewarden-grafana-dashboard",children:"Using Kubewarden Grafana dashboard"}),"\n",(0,s.jsxs)(n.p,{children:["The Kubewarden developers made available a Grafana dashboard with some basic metrics\nthat give an overview about how Kubewarden behaves inside of cluster. This dashboard\nis available in the Kubewarden repository in a ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/kubewarden/policy-server/v1.9.0/kubewarden-dashboard.json",children:"JSON file"}),"\nor in the ",(0,s.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/15314",children:"Grafana website"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To import the dashboard into your environment, you can download the JSON file\nfrom the Grafana website or from the repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"curl https://raw.githubusercontent.com/kubewarden/policy-server/main/kubewarden-dashboard.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have the file in your machine you should access the Grafana dashboard and\n",(0,s.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard",children:"import it"}),".\nVisit ",(0,s.jsx)(n.code,{children:"/dashboard/import"})," in the Grafana dashboard and follow these steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the JSON file contents and paste them into the ",(0,s.jsx)(n.code,{children:"Import via panel json"})," box in the Grafana UI"]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.code,{children:"Load"})," button"]}),"\n",(0,s.jsxs)(n.li,{children:["Choosing ",(0,s.jsx)(n.code,{children:"Prometheus"})," as the source"]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.code,{children:"Import"})," button"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Another option is import it directly from the Grafana.com website. For this:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the dashboard ID from the ",(0,s.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/15314",children:"dashboard page"}),","]}),"\n",(0,s.jsxs)(n.li,{children:["Paste it in the ",(0,s.jsx)(n.code,{children:"Import via grafana.com"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.code,{children:"load"})," button."]}),"\n",(0,s.jsx)(n.li,{children:"After importing the dashboard, define the Prometheus data source to use and finish\nthe import process."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You should be able to see the dashboard similar to this:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Dashboard 1",src:a(20286).A+"",width:"1915",height:"709"}),"\n",(0,s.jsx)(n.img,{alt:"Dashboard 2",src:a(6037).A+"",width:"1907",height:"949"}),"\n",(0,s.jsx)(n.img,{alt:"Dashboard 3",src:a(70124).A+"",width:"1948",height:"696"}),"\n",(0,s.jsx)(n.img,{alt:"Dashboard 4",src:a(30019).A+"",width:"1903",height:"943"})]}),"\n",(0,s.jsx)(n.p,{children:"The Grafana dashboard has panes showing the state of all\nthe policies managed by Kubewarden. Plus it has policy-specific panels."}),"\n",(0,s.jsxs)(n.p,{children:["Policy detailed metrics can be obtained by changing the value of the ",(0,s.jsx)(n.code,{children:"policy_name"}),"\nvariable to match the name of the desired policy."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},20286:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/grafana_dashboard_1-8a188ecd24d7a863db4206818994da6f.png"},6037:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/grafana_dashboard_2-92f2648a385b4d32d7fad3f3d916bf51.png"},70124:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/grafana_dashboard_3-ac5d2921a8599fc4b0c204fe8d196f87.png"},30019:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/grafana_dashboard_4-a99c566a2d6dcd35d940b622b5f86137.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var r=a(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);