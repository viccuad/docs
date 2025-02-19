"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[96621],{47352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"howtos/ui-extension/install","title":"Rancher UI extension quickstart","description":"UI extension quickstart for Kubewarden.","source":"@site/versioned_docs/version-1.19/howtos/ui-extension/01-install.md","sourceDirName":"howtos/ui-extension","slug":"/howtos/ui-extension/install","permalink":"/1.19/howtos/ui-extension/install","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.19/howtos/ui-extension/01-install.md","tags":[],"version":"1.19","lastUpdatedAt":1739965119000,"sidebarPosition":1,"frontMatter":{"sidebar_label":"Quickstart","title":"Rancher UI extension quickstart","description":"UI extension quickstart for Kubewarden.","keywords":["kubewarden","kubernetes","rancher ui extension"],"doc-type":["howto"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-topic":["operator-manual","ui-extension","installation"]},"sidebar":"docs","previous":{"title":"Installation","permalink":"/1.19/howtos/airgap/install"},"next":{"title":"Monitoring","permalink":"/1.19/howtos/ui-extension/metrics"}}');var s=t(74848),a=t(28453);const r={sidebar_label:"Quickstart",title:"Rancher UI extension quickstart",description:"UI extension quickstart for Kubewarden.",keywords:["kubewarden","kubernetes","rancher ui extension"],"doc-type":["howto"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-topic":["operator-manual","ui-extension","installation"]},o=void 0,l={},c=[{value:"Install Kubewarden UI Extension",id:"install-kubewarden-ui-extension",level:2},{value:"Install Kubewarden",id:"install-kubewarden",level:3},{value:"Post-Installation",id:"post-installation",level:2},{value:"Enabling the default Policy Server and policies",id:"enabling-the-default-policy-server-and-policies",level:3},{value:"Creating policies",id:"creating-policies",level:3},{value:"Additional features",id:"additional-features",level:3},{value:"Airgap installation",id:"airgap-installation",level:2},{value:"Installation steps",id:"installation-steps",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/ui-extension/install"})}),"\n",(0,s.jsxs)(n.p,{children:["This section describes installing the Kubewarden UI as an extension of\n",(0,s.jsx)(n.a,{href:"https://github.com/rancher/rancher",children:"Rancher Manager"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You need a running instance of Rancher Manager ",(0,s.jsx)(n.code,{children:"v2.7.0"})," or greater."]})}),"\n",(0,s.jsx)(n.h2,{id:"install-kubewarden-ui-extension",children:"Install Kubewarden UI Extension"}),"\n",(0,s.jsx)(n.p,{children:"The Kubewarden UI is installed as a global extension,\nhowever,\nthe Kubewarden controller is installed through the Rancher UI as a cluster scoped resource."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For air-gapped installations, follow ",(0,s.jsx)(n.a,{href:"/1.19/howtos/airgap/install",children:"these steps"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:'Within the Extensions page,\nselect the "Enable" button and choose the option to add the Rancher Extensions Repository.\nWhen enabled, the "Kubewarden" extension item appears automatically.\nSelect this item to install the extension.\nOnce installed, you can install Kubewarden into the required cluster.'}),"\n",(0,s.jsx)(n.h3,{id:"install-kubewarden",children:"Install Kubewarden"}),"\n",(0,s.jsx)(n.p,{children:"Following the previous steps, within your cluster a new item appears in the side-menu for Kubewarden.\nThis dashboard page guides you through the installation process, completing the prerequisites."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'During the "App Install" step of the installation wizard,\nthe "Install Kubewarden" button may remain grayed out.\nIf this happens, refresh the page and navigate back to this step.'})}),"\n",(0,s.jsx)(n.h2,{id:"post-installation",children:"Post-Installation"}),"\n",(0,s.jsx)(n.p,{children:"After completing the installation the dashboard page and side menu now contain new items,\nnamely Policy Servers, Cluster Admission Policies, and Admission Policies.\nFrom here you can create Policy Servers and Policies to control behavior within your cluster."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Dashboard view"})}),"\n",(0,s.jsx)(n.img,{alt:"UI Dashboard",src:t(76448).A+"",width:"1296",height:"872"})]}),"\n",(0,s.jsx)(n.h3,{id:"enabling-the-default-policy-server-and-policies",children:"Enabling the default Policy Server and policies"}),"\n",(0,s.jsxs)(n.p,{children:['Within the dashboard page you can select the "Install Chart" button to install the\n',(0,s.jsx)(n.a,{href:"https://github.com/kubewarden/helm-charts/tree/main/charts/kubewarden-defaults",children:(0,s.jsx)(n.code,{children:"kubewarden-defaults"})}),"\nHelm chart,\nwhich includes the default Policy Server and a few curated policies."]}),"\n",(0,s.jsx)(n.p,{children:"After installing the chart, you can view the default Policy Server details with the related policies in a sortable table."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Policy Server detail view"})}),"\n",(0,s.jsx)(n.img,{alt:"UI PolicyServer Detail",src:t(96453).A+"",width:"1297",height:"872"})]}),"\n",(0,s.jsx)(n.h3,{id:"creating-policies",children:"Creating policies"}),"\n",(0,s.jsx)(n.p,{children:'When creating policies, you will initially be given a "Custom Policy" option from the Policy Grid.\nProvide the required information for your policy\'s Name, Module, and Rules.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Creating a custom policy"})}),"\n",(0,s.jsx)(n.img,{alt:"UI Policy Whitelist",src:t(37448).A+"",width:"1064",height:"621"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to use policies from ",(0,s.jsx)(n.a,{href:"https://artifacthub.io/packages/search?kind=13",children:"ArtifactHub"}),",\nyou will need to add ",(0,s.jsx)(n.code,{children:"artifacthub.io"})," to the ",(0,s.jsx)(n.code,{children:"management.cattle.io.settings/whitelist-domain"}),' setting.\nThis allows your Rancher instance to retrieve package information from ArtifactHub.\nUse the "Add ArtifactHub To Whitelist" button to automatically add the domain,\nthe Policy Grid will refresh with the fetched policies.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ArtifactHub whitelist banner"})}),"\n",(0,s.jsx)(n.img,{alt:"UI Policy Whitelist",src:t(53694).A+"",width:"1064",height:"547"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Policy Grid"})}),"\n",(0,s.jsx)(n.img,{alt:"UI Policy Create",src:t(40377).A+"",width:"1044",height:"770"})]}),"\n",(0,s.jsx)(n.h3,{id:"additional-features",children:"Additional features"}),"\n",(0,s.jsxs)(n.p,{children:["Follow the instructions to include ",(0,s.jsx)(n.a,{href:"/1.19/howtos/ui-extension/metrics",children:"Monitoring"})," or ",(0,s.jsx)(n.a,{href:"/1.19/howtos/ui-extension/tracing",children:"Tracing"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"airgap-installation",children:"Airgap installation"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["This requires Rancher Manager version ",(0,s.jsx)(n.code,{children:"v2.8.0"})," or greater."]})}),"\n",(0,s.jsxs)(n.p,{children:["As Kubewarden is a Rancher Official Extension,\nthe Rancher team provides a mechanism to automatically generate an Extension Catalog Image.\nThis is added to the ",(0,s.jsx)(n.code,{children:"rancher-images.txt"})," file when\n",(0,s.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#1-find-the-required-assets-for-your-rancher-version",children:"installing Rancher Manager"}),"\nfor air-gapped instances."]}),"\n",(0,s.jsx)(n.p,{children:"Once this image has been mirrored to a registry accessible to your air-gapped cluster,\nyou can import the image within the Rancher UI.\nThis creates a local Helm repository with the Kubewarden UI chart for installation."}),"\n",(0,s.jsx)(n.h3,{id:"installation-steps",children:"Installation steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets",children:"Create"}),"\na registry secret within the ",(0,s.jsx)(n.code,{children:"cattle-ui-plugin-system"})," namespace.\nEnter the domain of the image address in the ",(0,s.jsx)(n.strong,{children:"Registry Domain Name"})," field."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate back to the ",(0,s.jsx)(n.strong,{children:"Extensions"})," page\n(for example, ",(0,s.jsx)(n.code,{children:"https://cluster-ip/dashboard/c/local/uiplugins"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the top right, select ",(0,s.jsx)(n.strong,{children:"Manage Extension Catalogs"}),".\n",(0,s.jsx)(n.img,{alt:"Manage Catalogs",src:t(15318).A+"",width:"1073",height:"378"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Import Extension Catalog"})," button.\n",(0,s.jsx)(n.img,{alt:"Import Catalogs",src:t(96941).A+"",width:"1073",height:"378"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter the image address in the ",(0,s.jsx)(n.strong,{children:"Catalog Image Reference"})," field."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the secret you just created from the ",(0,s.jsx)(n.strong,{children:"Pull Secrets"})," drop-down menu.\n",(0,s.jsx)(n.img,{alt:"Enter Catalog Info",src:t(56996).A+"",width:"1073",height:"686"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Load"}),". The extension will now be ",(0,s.jsx)(n.strong,{children:"Pending"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Return to the ",(0,s.jsx)(n.strong,{children:"Extensions"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Available"})," tab,\nand click the ",(0,s.jsx)(n.strong,{children:"Reload"})," button to make sure that the list of extensions is up to date.\n",(0,s.jsx)(n.img,{alt:"Install Kubewarden",src:t(38651).A+"",width:"1072",height:"415"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the Kubewarden extension you just added, and select the ",(0,s.jsx)(n.strong,{children:"Install"})," button."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},15318:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_airgap_01-d2d985fb2d021f60e51235c3e55f3cf0.png"},96941:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_airgap_02-2f84bdc1364088548a92710a9a8dc0dc.png"},56996:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_airgap_03-5b0f099f8c3ebe39464b851759a1b2bf.png"},38651:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_airgap_04-e7cee3594dfe929b482c5299294d9f42.png"},76448:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_dashboard-489129d9a23bc2ee68a6599f2b718efc.png"},40377:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_policy_create-101744e29dec0f22f4aab58f9fe17eb4.png"},37448:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_policy_custom-8317c1b00a8abce560225581cfb2756f.png"},53694:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_policy_whitelist-66c6307489b7636e59bbbc5348d29d35.png"},96453:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ui_policyserver_detail-c8fed6f264fd351f7ca84a0041239bd6.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);