"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,k=h["".concat(l,".").concat(p)]||h[p]||u[p]||n;return a?o.createElement(k,i(i({ref:t},d),{},{components:a})):o.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_label:"Threat Model",title:""},i="Threat Model",s={unversionedId:"security/threat-model",id:"version-1.7/security/threat-model",title:"",description:"The Kubernetes SIG Security team has",source:"@site/versioned_docs/version-1.7/security/threat-model.md",sourceDirName:"security",slug:"/security/threat-model",permalink:"/1.7/security/threat-model",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/security/threat-model.md",tags:[],version:"1.7",lastUpdatedAt:1699006582,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{sidebar_label:"Threat Model",title:""},sidebar:"docs",previous:{title:"OCI registry support",permalink:"/1.7/distributing-policies/oci-registries-support"},next:{title:"Metrics Reference Documentation",permalink:"/1.7/operator-manual/telemetry/metrics/reference"}},l={},c=[{value:"Threat 1 - Attacker floods webhook with traffic preventing its operation",id:"threat-1---attacker-floods-webhook-with-traffic-preventing-its-operation",level:2},{value:"Threat 2 - Attacker passes workloads which require complex  processing causing timeouts",id:"threat-2---attacker-passes-workloads-which-require-complex--processing-causing-timeouts",level:2},{value:"Threat 3 - Attacker exploits misconfiguration of webhook to bypass",id:"threat-3---attacker-exploits-misconfiguration-of-webhook-to-bypass",level:2},{value:"Threat 4 - Attacker has rights to delete or modify the k8s webhook  object",id:"threat-4---attacker-has-rights-to-delete-or-modify-the-k8s-webhook--object",level:2},{value:"Threat 5 - Attacker gets access to valid credentials for the webhook",id:"threat-5---attacker-gets-access-to-valid-credentials-for-the-webhook",level:2},{value:"Threat  6 - Attacker gains access to a cluster admin credential",id:"threat--6---attacker-gains-access-to-a-cluster-admin-credential",level:2},{value:"Threat 7 - Attacker sniffs traffic on the container network",id:"threat-7---attacker-sniffs-traffic-on-the-container-network",level:2},{value:"Threat 8 - Attacker carries out a MITM attack on the webhook",id:"threat-8---attacker-carries-out-a-mitm-attack-on-the-webhook",level:2},{value:"Threat 9 - Attacker steals traffic from the webhook via spoofing",id:"threat-9---attacker-steals-traffic-from-the-webhook-via-spoofing",level:2},{value:"Threat 10 - Abusing a mutation rule to create a privileged container",id:"threat-10---abusing-a-mutation-rule-to-create-a-privileged-container",level:2},{value:"Threat 11 - Attacker deploys workloads to namespaces that are  exempt from admission control",id:"threat-11---attacker-deploys-workloads-to-namespaces-that-are--exempt-from-admission-control",level:2},{value:"Threat 12 - Block rule can be bypassed due to missing match (e.g.  missing initcontainers)",id:"threat-12---block-rule-can-be-bypassed-due-to-missing-match-eg--missing-initcontainers",level:2},{value:"Threat 13 - Attacker exploits bad string matching on a blocklist to  bypass rules",id:"threat-13---attacker-exploits-bad-string-matching-on-a-blocklist-to--bypass-rules",level:2},{value:"Threat 14 - Attacker uses new/old features of the Kubernetes API  which have no rules",id:"threat-14---attacker-uses-newold-features-of-the-kubernetes-api--which-have-no-rules",level:2},{value:"Threat 15 - Attacker deploys privileged container to node running  Webhook controller",id:"threat-15---attacker-deploys-privileged-container-to-node-running--webhook-controller",level:2},{value:"Threat 16 - Attacker mounts a privileged node hostpath allowing  modification of Webhook controller configuration",id:"threat-16---attacker-mounts-a-privileged-node-hostpath-allowing--modification-of-webhook-controller-configuration",level:2},{value:"Threat 17 - Attacker has privileged SSH access to cluster node  running admission webhook",id:"threat-17---attacker-has-privileged-ssh-access-to-cluster-node--running-admission-webhook",level:2},{value:"Threat 18 - Attacker uses policies to send confidential data from  admission requests to external systems",id:"threat-18---attacker-uses-policies-to-send-confidential-data-from--admission-requests-to-external-systems",level:2},{value:"Threat Kubewarden 1 - Bootstrapping of trust for admission controller",id:"threat-kubewarden-1---bootstrapping-of-trust-for-admission-controller",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"threat-model"},"Threat Model"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/tree/master/sig-security"},"Kubernetes SIG Security team")," has\ndefined an Admission Control Threat Model. The Kubewarden team has evaluated\nKubewarden against this threat model, and strives to provide secure defaults\nthat cover it. Still, it is recommended for Kubewarden administrators to read\nand understand the threat model, and use it to devise their own thread model as\nneeded."),(0,r.kt)("p",null,"If more details about each threat is needed, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/sig-security/tree/main/sig-security-docs/papers/admission-control"},"original document published by SIG Security"),"."),(0,r.kt)("h2",{id:"threat-1---attacker-floods-webhook-with-traffic-preventing-its-operation"},"Threat 1 - Attacker floods webhook with traffic preventing its operation"),(0,r.kt)("p",null,"An attacker who has access to the Webhook endpoint, at the network level, could\nsend large quantities of traffic, causing an effective denial of service to the\nadmission controller."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation")),(0,r.kt)("p",null,"Webhook fails closed. In other words, if the webhook does not respond in time,\nfor any reason, the API server should reject the request.\nKubewarden default behavior already does that."),(0,r.kt)("h2",{id:"threat-2---attacker-passes-workloads-which-require-complex--processing-causing-timeouts"},"Threat 2 - Attacker passes workloads which require complex  processing causing timeouts"),(0,r.kt)("p",null,"An attacker, who can access the admission controller at a network level, passes\nrequests to the admission controller requiring complex processing and causing\ntimeouts as the admission controller utilizes compute power to process the workloads"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nWebhook fail closed and authenticate callers. Kubewarden default behaviour\nalready does that."),(0,r.kt)("h2",{id:"threat-3---attacker-exploits-misconfiguration-of-webhook-to-bypass"},"Threat 3 - Attacker exploits misconfiguration of webhook to bypass"),(0,r.kt)("p",null,"An attacker, who has rights to create workloads in the cluster, is able to exploit\na misconfiguration to bypass the intended security control."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nRegular reviews of webhook configuration can help catch issues."),(0,r.kt)("h2",{id:"threat-4---attacker-has-rights-to-delete-or-modify-the-k8s-webhook--object"},"Threat 4 - Attacker has rights to delete or modify the k8s webhook  object"),(0,r.kt)("p",null,"An attacker who has Kubernetes API access, has sufficient privileges to delete\nthe webhook object in the cluster."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nRBAC rights are strictly controlled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nMost of RBAC isn't within the scope of the current discussion.\nHowever, the following will be provided in due course for helping Kubewarden\nusers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directions around minimum RBAC to be implemented."),(0,r.kt)("li",{parentName:"ul"},"Provision & documentation of a policy that detects and could potentially block RBAC changes.")),(0,r.kt)("h2",{id:"threat-5---attacker-gets-access-to-valid-credentials-for-the-webhook"},"Threat 5 - Attacker gets access to valid credentials for the webhook"),(0,r.kt)("p",null,"An attacker gains access to valid client credentials for the admission controller webhook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nWebhook fails closed."),(0,r.kt)("p",null,"Kubewarden default behaviour is failed closed. Thus, it covers this."),(0,r.kt)("p",null,"(Failing closed means that if, for any reason, Kubewarden stops responding or\ncrashes, the API server will reject the request by default, even if the request\nwould be accepted by Kubewarden in normal situations)"),(0,r.kt)("h2",{id:"threat--6---attacker-gains-access-to-a-cluster-admin-credential"},"Threat  6 - Attacker gains access to a cluster admin credential"),(0,r.kt)("p",null,"An attacker gains access to a cluster-admin level credential in the kubernetes cluster."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nN/A"),(0,r.kt)("h2",{id:"threat-7---attacker-sniffs-traffic-on-the-container-network"},"Threat 7 - Attacker sniffs traffic on the container network"),(0,r.kt)("p",null,"An attacker who has access to the container network is able to sniff traffic\nbetween the API  server and the admission controller webhook."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nSince the webhook uses TLS encryption for all traffic, Kubewarden is safe."),(0,r.kt)("h2",{id:"threat-8---attacker-carries-out-a-mitm-attack-on-the-webhook"},"Threat 8 - Attacker carries out a MITM attack on the webhook"),(0,r.kt)("p",null,"An attacker on the container network, who has access to the NET_RAW capability\ncan attempt to use MITM tooling to intercept traffic between the API server\nand admission controller webhook."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nWebhook mTLS authentication is used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nImplement mutual TLS authentication.\nAdditionally, it would be possible to add a policy within the recommended\npolicies section in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-defaults")," which drops the ",(0,r.kt)("inlineCode",{parentName:"p"},"NET_RAW"),"\ncapability."),(0,r.kt)("h2",{id:"threat-9---attacker-steals-traffic-from-the-webhook-via-spoofing"},"Threat 9 - Attacker steals traffic from the webhook via spoofing"),(0,r.kt)("p",null,"An attacker is able to redirect traffic from the API server which is intended\nfor the admission controller webhook by spoofing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nWebhook mTLS authentication is used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nKubewarden should implement mutual TLS authentication"),(0,r.kt)("h2",{id:"threat-10---abusing-a-mutation-rule-to-create-a-privileged-container"},"Threat 10 - Abusing a mutation rule to create a privileged container"),(0,r.kt)("p",null,"An attacker is able to cause a mutating admission controller to modify a workload,\nsuch that it allows for privileged container creation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nAll rules are reviewed and tested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nThe Kubewarden team may come up with some tests to cover the review of these rules in the future.\nIn addition to the above, any change of rules during policies deployment must be carefully reviewed."),(0,r.kt)("h2",{id:"threat-11---attacker-deploys-workloads-to-namespaces-that-are--exempt-from-admission-control"},"Threat 11 - Attacker deploys workloads to namespaces that are  exempt from admission control"),(0,r.kt)("p",null,"An attacker is able to deploy workloads to Kubernetes namespaces that are exempt\nfrom the admission controller configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nRBAC rights are strictly controlled"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nMost of the RBAC is out of scope with respect to this decision. However, the Kubewarden team aims to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Warn users via our docs and ",(0,r.kt)("em",{parentName:"li"},"suggest")," some minimum RBAC to be used."),(0,r.kt)("li",{parentName:"ul"},"Provide a policy which detects RBAC changes and ",(0,r.kt)("strong",{parentName:"li"},"maybe")," block them.")),(0,r.kt)("h2",{id:"threat-12---block-rule-can-be-bypassed-due-to-missing-match-eg--missing-initcontainers"},"Threat 12 - Block rule can be bypassed due to missing match (e.g.  missing initcontainers)"),(0,r.kt)("p",null,"An attacker created a workload manifest which uses a feature of the Kubernetes\nAPI which is not covered by the admission controller"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nAll rules are reviewed and tested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nIntroduce tests to cover this rule.\nAs always, carefully review PRs changing the rules in the policies deployment."),(0,r.kt)("h2",{id:"threat-13---attacker-exploits-bad-string-matching-on-a-blocklist-to--bypass-rules"},"Threat 13 - Attacker exploits bad string matching on a blocklist to  bypass rules"),(0,r.kt)("p",null,"An attacker, who has rights to create workloads, bypasses a rule by exploiting\nbad string matching."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nAll rules are reviewed and tested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nIntroduce tests to cover this rule.\nAs always, carefully review PRs changing the rules in the policies deployment."),(0,r.kt)("h2",{id:"threat-14---attacker-uses-newold-features-of-the-kubernetes-api--which-have-no-rules"},"Threat 14 - Attacker uses new/old features of the Kubernetes API  which have no rules"),(0,r.kt)("p",null,"An attacker, with rights to create workloads, uses new features of the Kubernetes\nAPI (for example, a changed API version) to bypass a rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nAll rules are reviewed and tested."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nIntroduce tests to cover this rule.\nCreate a configuration to reject requests where the API version not\ncover by the policy by default. Kubewarden should warn policy developers to cover all the\nsupported API version in their tests and reject all others."),(0,r.kt)("h2",{id:"threat-15---attacker-deploys-privileged-container-to-node-running--webhook-controller"},"Threat 15 - Attacker deploys privileged container to node running  Webhook controller"),(0,r.kt)("p",null,"An attacker, who has rights to deploy privileged containers to the cluster, creates\na privileged container on the cluster node where the admission controller webhook operates."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nAdmission controller uses restrictive policies to prevent privileged workloads."),(0,r.kt)("h2",{id:"threat-16---attacker-mounts-a-privileged-node-hostpath-allowing--modification-of-webhook-controller-configuration"},"Threat 16 - Attacker mounts a privileged node hostpath allowing  modification of Webhook controller configuration"),(0,r.kt)("p",null,"An attacker, who has rights to deploy hostPath volumes with workloads, creates a\nvolume that allows for access to the admission controller pod\u2019s files."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nAdmission controller uses restrictive policies to prevent privileged  workloads"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To do"),"\nAdd a recommended policy in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-default")," Helm chart to prevent this."),(0,r.kt)("h2",{id:"threat-17---attacker-has-privileged-ssh-access-to-cluster-node--running-admission-webhook"},"Threat 17 - Attacker has privileged SSH access to cluster node  running admission webhook"),(0,r.kt)("p",null,"An attacker is able to log into cluster nodes as a privileged user via SSH."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nN/A"),(0,r.kt)("h2",{id:"threat-18---attacker-uses-policies-to-send-confidential-data-from--admission-requests-to-external-systems"},"Threat 18 - Attacker uses policies to send confidential data from  admission requests to external systems"),(0,r.kt)("p",null,"An attacker is able to configure a policy that listens to admission requests and\nsends sensitive data to an external system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mitigation"),"\nStrictly control external access for webhook"),(0,r.kt)("p",null,"Kubewarden policies run in a restrictive environment. They do not have network access."),(0,r.kt)("h2",{id:"threat-kubewarden-1---bootstrapping-of-trust-for-admission-controller"},"Threat Kubewarden 1 - Bootstrapping of trust for admission controller"),(0,r.kt)("p",null,"Assuming a trusted but fresh Kubernetes cluster, an attacker is able to compromise the Kubewarden stack\nbefore any of the policies securing it are deployed and enforced. For example, by using unsigned and\nmalicious images for kubewarden-controller, policy-server, or any of the Kubewarden dependencies\n(cert-manager) or optional dependencies (grafana, prometheus, etc.), or by compromising\nthe Helm charts payload."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Mitigation ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kubewarden provides a Software Bill Of Materials, which lists all images needed. This aids with Zero-Trust.\nThe Kubernetes Administrator must verify the Kubewarden images, its dependencies' images, and charts\nout of the Kubernetes cluster, in a trusted environment. This can be done with ",(0,r.kt)("inlineCode",{parentName:"li"},"cosign"),", for example.\nIncidentally, this is part of the implementation needed for air-gapped installations."),(0,r.kt)("li",{parentName:"ol"},"Use signed Helm charts, and verified digests instead of tags for Kubewarden images in those Helm charts.\nThis doesn't secure dependencies though.")))}u.isMDXComponent=!0}}]);