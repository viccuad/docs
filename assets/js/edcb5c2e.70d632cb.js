"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[29885],{61177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(85893),o=r(11151);const i={},a="Monitoring",l={id:"operator-manual/ui-extension/metrics",title:"Monitoring",description:"Rancher has a Cluster Tool for Monitoring that leverages Grafana and Prometheus. You can utilize this tool and integrate it with Kubewarden to view overall metrics for a Policy Server or metrics pertaining to a given policy.",source:"@site/versioned_docs/version-1.7/operator-manual/ui-extension/metrics.md",sourceDirName:"operator-manual/ui-extension",slug:"/operator-manual/ui-extension/metrics",permalink:"/1.7/operator-manual/ui-extension/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/operator-manual/ui-extension/metrics.md",tags:[],version:"1.7",lastUpdatedAt:1712927064e3,frontMatter:{},sidebar:"docs",previous:{title:"Quickstart",permalink:"/1.7/operator-manual/ui-extension/install"},next:{title:"Tracing",permalink:"/1.7/operator-manual/ui-extension/tracing"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2},{value:"1. Within the cluster explorer click on <code>Cluster Tools</code> in the side navigation",id:"1-within-the-cluster-explorer-click-on-cluster-tools-in-the-side-navigation",level:3},{value:"2. Enable telemetry for your <code>rancher-kubewarden-controller</code> resource",id:"2-enable-telemetry-for-your-rancher-kubewarden-controller-resource",level:3},{value:"3. Add the ConfigMap for Policies and Policy Server",id:"3-add-the-configmap-for-policies-and-policy-server",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"monitoring",children:"Monitoring"}),"\n",(0,t.jsx)(n.p,{children:"Rancher has a Cluster Tool for Monitoring that leverages Grafana and Prometheus. You can utilize this tool and integrate it with Kubewarden to view overall metrics for a Policy Server or metrics pertaining to a given policy."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Issues with Rancher Manager ",(0,t.jsx)(n.code,{children:"v2.7.1"})," can cause issues with the Metrics dashboard view. Version ",(0,t.jsx)(n.code,{children:"v2.7.2"})," or greater is recommended."]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You will need a cluster with at least 4 cores to install the Monitoring tool."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Cert-Manager and OpenTelemetry are required.\nFollow ",(0,t.jsx)(n.a,{href:"/1.7/operator-manual/telemetry/opentelemetry/quickstart#install-opentelemetry",children:"these instructions"})," to install Cert Manager and the OpenTelemetry Operator."]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(n.h3,{id:"1-within-the-cluster-explorer-click-on-cluster-tools-in-the-side-navigation",children:["1. Within the cluster explorer click on ",(0,t.jsx)(n.code,{children:"Cluster Tools"})," in the side navigation"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Install"})," the Monitoring tool"]}),"\n",(0,t.jsx)(n.li,{children:"Edit the YAML to include a Service Monitor for Kubewarden"}),"\n",(0,t.jsx)(n.li,{children:"You need to specify the correct namespace where you installed Kubewarden"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Adapted from ",(0,t.jsx)(n.a,{href:"/1.7/operator-manual/telemetry/metrics/quickstart",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"prometheus:\n  additionalPodMonitors: []\n  additionalRulesForClusterRole: []\n  additionalServiceMonitors:\n    - name: kubewarden\n      selector:\n        matchLabels:\n          app: kubewarden-policy-server-default\n      namespaceSelector:\n        matchNames:\n          - cattle-kubewarden-system\n      endpoints:\n        - port: metrics\n          interval: 10s\n  annotations: {}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"2-enable-telemetry-for-your-rancher-kubewarden-controller-resource",children:["2. Enable telemetry for your ",(0,t.jsx)(n.code,{children:"rancher-kubewarden-controller"})," resource"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Navigate to Apps & Marketplace -> Installed Apps"}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.code,{children:"Edit/Upgrade"})," action for your ",(0,t.jsx)(n.code,{children:"rancher-kubewarden-controller"})," resource"]}),"\n",(0,t.jsxs)(n.li,{children:["Edit the YAML for ",(0,t.jsx)(n.code,{children:"telemetry"})," to be ",(0,t.jsx)(n.code,{children:'enabled: "true"'})," and ensure the metrics port is correct"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"telemetry:\n  enabled: True\n  metrics:\n    port: 8080\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You may need to redeploy your Monitoring resources for the new ConfigMap to be loaded. You can easily do this from Workloads -> Deployments. Select all the resources in the ",(0,t.jsx)(n.code,{children:"cattle-monitoring-system"})," namespace and click on the ",(0,t.jsx)(n.code,{children:"Redeploy"})," action."]})}),"\n",(0,t.jsx)(n.h3,{id:"3-add-the-configmap-for-policies-and-policy-server",children:"3. Add the ConfigMap for Policies and Policy Server"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This method is suited for air gapped installations"})}),"\n",(0,t.jsx)(n.p,{children:"The dashboards are unique between Policy Server and Policies, thus will need to be created separately."}),"\n",(0,t.jsx)(n.p,{children:"Within the detail view for a Policy Server or a specific Policy:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Navigate to the "Metrics" tab'}),"\n",(0,t.jsx)(n.li,{children:"Follow the prompt to create the ConfigMap"}),"\n",(0,t.jsx)(n.li,{children:"Reload the page to update the Grafana view (Grafana may be slow to acknowledge the new dashboard)"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"You should be able to view the metrics for a Policy Server or any given Policy on the detail page for each respective resource. You can also view the Kubewarden dashboards within the Grafana UI or the events from the Prometheus UI."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(67294);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);