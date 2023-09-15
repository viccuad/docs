"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7116],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"Common tasks",title:"Common tasks",description:"Description of some common tasks undertaken after installing Kubewarden. Provides examples of these tasks using kwctl",keywords:["kubewarden","kubernetes","kwctl","policy","policyserver","clusteradmissionpolicy","admissionpolicy"]},l=void 0,o={unversionedId:"tasks",id:"tasks",title:"Common tasks",description:"Description of some common tasks undertaken after installing Kubewarden. Provides examples of these tasks using kwctl",source:"@site/docs/tasks.md",sourceDirName:".",slug:"/tasks",permalink:"/tasks",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/tasks.md",tags:[],version:"current",lastUpdatedAt:1694791075,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{sidebar_label:"Common tasks",title:"Common tasks",description:"Description of some common tasks undertaken after installing Kubewarden. Provides examples of these tasks using kwctl",keywords:["kubewarden","kubernetes","kwctl","policy","policyserver","clusteradmissionpolicy","admissionpolicy"]},sidebar:"docs",previous:{title:"Quick start",permalink:"/quick-start"},next:{title:"Writing Policies",permalink:"/writing-policies/"}},s={},p=[{value:"Test Policies",id:"test-policies",level:2},{value:"Artifact hub",id:"artifact-hub",level:3},{value:"<code>kwctl</code> CLI tool",id:"kwctl-cli-tool",level:3},{value:"Use cases",id:"use-cases",level:4},{value:"Installation",id:"installation",level:4},{value:"Usage",id:"usage",level:4},{value:"Enforce Policies",id:"enforce-policies",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This describes tasks that can be performed after you ",(0,i.kt)("a",{parentName:"p",href:"/quick-start#install"},"install Kubewarden")," in your Kubernetes cluster."),(0,i.kt)("p",null,"Each task can be done separately; they are shown here in a logical ordering."),(0,i.kt)("h2",{id:"test-policies"},"Test Policies"),(0,i.kt)("p",null,"Kubewarden has two tools to help you find policies and test them locally:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/search?kind=13&sort=relevance&page=1"},"Artifact Hub")," using their package filter for Kubewarden policies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/kwctl"},(0,i.kt)("inlineCode",{parentName:"a"},"kwctl"))," CLI tool")),(0,i.kt)("h3",{id:"artifact-hub"},"Artifact hub"),(0,i.kt)("p",null,"Artifact hub hosts policies contributed by the community. For example, you can find substitutes to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/"},"deprecated Kubernetes Pod Security Policies"),", created by the Kubewarden developers."),(0,i.kt)("p",null,"As shown in the screenshot below, once you find a policy of interest, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Install")," button and use ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," to fetch the policy for your cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Artifact Hub",src:a(814).Z,width:"1910",height:"1049"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Previously, Kubewarden policies could be found at the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.kubewarden.io"},"Kubewarden Policy Hub"),". This has been ",(0,i.kt)("a",{parentName:"p",href:"https://www.kubewarden.io/blog/2022/07/artifact-hub-supports-kubewarden/"},"retired"),". Policies are now available from ",(0,i.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?kind=13&sort=relevance&page=1"},"https://artifacthub.io"),".")),(0,i.kt)("h3",{id:"kwctl-cli-tool"},(0,i.kt)("inlineCode",{parentName:"h3"},"kwctl")," CLI tool"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," is our CLI tool for policy authors and the cluster administrators to test policies before they are applied to the Kubernetes cluster."),(0,i.kt)("p",null,"This tool has a similar interface to the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," CLI tool."),(0,i.kt)("h4",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," to help in these scenarios:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As a policy author")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"End-to-end testing of your policy"),": Test your policy against crafted Kubernetes requests and ensure your policy behaves as you expect. You can even test context-aware policies that require access to a running cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Embed metadata in your Wasm module"),": the binary contains annotations of the permissions it needs to be executed. You can inspect and modify these annotations with ",(0,i.kt)("inlineCode",{parentName:"li"},"kwctl"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Publish policies to OCI registries"),": The binary is a fully compliant OCI object and can be stored in OCI registries.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As a cluster administrator")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Inspect remote policies"),": Given a policy in an OCI registry or in an HTTP server, show all static information about the policy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Dry-run of a policy in your cluster"),": Test the policy against crafted Kubernetes requests and ensure the policy behaves as you expect given the input data you provide. You can even test context-aware policies that require access to a running cluster, also in a dry-run mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Generate initial ",(0,i.kt)("inlineCode",{parentName:"em"},"ClusterAdmissionPolicy")," scaffolding for your policy"),": Generate a ",(0,i.kt)("inlineCode",{parentName:"li"},"YAML")," file with all the required settings, which can be applied to your Kubernetes cluster using ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),".")),(0,i.kt)("h4",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," binaries for the stable releases are available from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/releases"},"GitHub repository"),".  To build ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," from the GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl"},"repo"),", you will need a ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," development environment."),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can list all the ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," options and sub-commands by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kwctl --help\nkwctl 0.2.5\nKubewarden Developers <kubewarden@suse.de>\nTool to manage Kubewarden policies\n\nUSAGE:\n    kwctl [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help       Print help information\n    -v               Increase verbosity\n    -V, --version    Print version information\n\nSUBCOMMANDS:\n    annotate       Add Kubewarden metadata to a WebAssembly module\n    completions    Generate shell completions\n    digest         Fetch the digest of its OCI manifest\n    help           Print this message or the help of the given subcommand(s)\n    inspect        Inspect Kubewarden policy\n    policies       Lists all downloaded policies\n    pull           Pulls a Kubewarden policy from a given URI\n    push           Pushes a Kubewarden policy to an OCI registry\n    rm             Removes a Kubewarden policy from the store\n    run            Runs a Kubewarden policy from a given URI\n    scaffold       Scaffold a Kubernetes resource or configuration file\n    verify         Verify a Kubewarden policy from a given URI using Sigstore\n")),(0,i.kt)("p",null,"Here are a few command usage examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"List the policies"),": lists all the policies stored in the local ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," registry"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Command: ",(0,i.kt)("inlineCode",{parentName:"li"},"kwctl policies")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Obtain the policy"),": download and store the policy inside the local ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," store"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl pull <policy URI>")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kwctl pull registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n\n$ kwctl policies\n+--------------------------------------------------------------+----------+---------------+--------------+----------+\n| Policy                                                       | Mutating | Context aware | SHA-256      | Size     |\n+--------------------------------------------------------------+----------+---------------+--------------+----------+\n| registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9 | no       | no            | 59e34f482b40 | 21.86 kB |\n+--------------------------------------------------------------+----------+---------------+--------------+----------+\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Understand how the policy works"),": inspect the policy metadata"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl inspect <policy URI>")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'  $ kwctl inspect registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n  Details\n  title:              pod-privileged\n  description:        Limit the ability to create privileged containers\n  author:             Flavio Castelli\n  url:                https://github.com/kubewarden/pod-privileged-policy\n  source:             https://github.com/kubewarden/pod-privileged-policy\n  license:            Apache-2.0\n  mutating:           false\n  context aware:      false\n  execution mode:     kubewarden-wapc\n  protocol version:   1\n\n  Annotations\n  io.kubewarden.kwctl 0.1.9\n\n  Rules\n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  ---\n  - apiGroups:\n      - ""\n    apiVersions:\n      - v1\n    resources:\n      - pods\n    operations:\n      - CREATE\n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n  Usage\n  This policy doesn\'t have a configuration. Once enforced, it will reject\n  the creation of Pods that have at least a privileged container defined.\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Evaluate the policy"),": Assess the policy and, if available, find the right configuration values to match your requirements."),(0,i.kt)("p",{parentName:"li"},"You will need some familiarity with the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes REST APIs"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},'kwctl run -r <"Kubernetes Admission request" file path> -s <"JSON document" file path> <policy URI>'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scenario 1:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request to be evaluated: Create a pod with no 'privileged' container"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kwctl run registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9 -r unprivileged-pod-request.json\n{"uid":"C6E115F4-A789-49F8-B0C9-7F84C5961FDE","allowed":true,"status":{"message":""}}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Equivalent command with the policy binary downloaded:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'`$ kwctl run file://$PWD/pod-privileged-policy.wasm -r unprivileged-pod-request.json\n{"uid":"C6E115F4-A789-49F8-B0C9-7F84C5961FDE","allowed":true,"status":{"message":""}}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Result: The policy allows the request")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scenario 2:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request to be evaluated: Create a pod with at least one 'privileged' container")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kwctl run registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9 -r privileged-pod-request.json\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Equivalent command with the policy binary downloaded: ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl run file://$PWD/pod-privileged-policy.wasm -r privileged-pod-request.json"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Output:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"uid":"8EE6AF8C-C8C8-45B0-9A86-CB52A70EC50D","allowed":false,"status":{"message":"User \'kubernetes-admin\' cannot schedule privileged containers"}}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Result: The policy denies the request"))),(0,i.kt)("p",{parentName:"li"},"For some more complex examples, see the blog post ",(0,i.kt)("a",{parentName:"p",href:"https://www.kubewarden.io/blog/2021/06/kwctl-intro-for-kubernetes-administrators/"},"Introducing ",(0,i.kt)("inlineCode",{parentName:"a"},"kwctl")," to Kubernetes Administrators"),"."))))),(0,i.kt)("h2",{id:"enforce-policies"},"Enforce Policies"),(0,i.kt)("p",null,"You enforce a policy by defining a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," and then deploy it to your cluster using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," helps generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," from the policy you want to enforce."),(0,i.kt)("p",null,"After you have generated the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," and applied it to your cluster, you can follow the steps described in the ",(0,i.kt)("a",{parentName:"p",href:"/quick-start#example-enforce-your-first-policy"},"Quick Start")," below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," from the policy ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest")," and save it to a file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},'kwctl scaffold manifest -t ClusterAdmissionPolicy <policy URI> > <"policy name".yaml>')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kwctl scaffold manifest -t ClusterAdmissionPolicy registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9\n---\napiVersion: policies.kubewarden.io/v1alpha2\nkind: ClusterAdmissionPolicy\nmetadata:\n  name: privileged-pods\nspec:\n  module: "registry://ghcr.io/kubewarden/policies/pod-privileged:v0.1.9"\n  settings: {}\n  rules:\n    - apiGroups:\n        - ""\n      apiVersions:\n        - v1\n      resources:\n        - pods\n      operations:\n        - CREATE\n  mutating: false\n')))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"generated-policy"),".\nYou might want to edit it before you deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy"),".\nThe name in the immediately previous example has been set to ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged-pods"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," to your Kubernetes cluster"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},'kubectl apply -f <"policy name".yaml>')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f pod-privileged-policy.yaml\nclusteradmissionpolicy.policies.kubewarden.io/privileged-pods created\n")))))),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is deployed, all requests sent to your cluster will be evaluated by the policy if they're within the policy scope."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/writing-policies/"},"Writing Policies")," explains how to write policies in different languages and generate WebAssembly binaries, so they can be used by Kubewarden.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/distributing-policies/"},"Distributing Policies")," explains how to publish policies to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/distribution-spec/blob/main/spec.md"},"OCI registries"),"."))))}d.isMDXComponent=!0},814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tasks-artifact-hub-26e1d32653c28150f62c745fafa80f9d.png"}}]);