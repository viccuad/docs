"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_label:"Policy authors",title:"Testing for policy authors",description:"An introduction to testing Kubewarden policies for policy authors.",keywords:["kubewarden","policy testing","policy author","rust","go","assemblyscript","development environment"]},a=void 0,s={unversionedId:"testing-policies/policy-authors",id:"version-1.7/testing-policies/policy-authors",title:"Testing for policy authors",description:"An introduction to testing Kubewarden policies for policy authors.",source:"@site/versioned_docs/version-1.7/testing-policies/02-policy-authors.md",sourceDirName:"testing-policies",slug:"/testing-policies/policy-authors",permalink:"/1.7/testing-policies/policy-authors",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/testing-policies/02-policy-authors.md",tags:[],version:"1.7",lastUpdatedAt:1699878380,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Policy authors",title:"Testing for policy authors",description:"An introduction to testing Kubewarden policies for policy authors.",keywords:["kubewarden","policy testing","policy author","rust","go","assemblyscript","development environment"]},sidebar:"docs",previous:{title:"Policy testing",permalink:"/1.7/testing-policies/intro"},next:{title:"Cluster operators",permalink:"/1.7/testing-policies/cluster-operators"}},l={},p=[{value:"End-to-end tests",id:"end-to-end-tests",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubewarden policies are regular programs compiled as WebAssembly (Wasm).\nAs with any kind of program, good test coverage is important."),(0,o.kt)("p",null,"Policy authors can use their favorite development environments. You can use familiar tools, and testing frameworks to verify development."),(0,o.kt)("p",null,"These two Kubewarden policies provide an example written in ",(0,o.kt)("a",{parentName:"p",href:"/1.7/writing-policies/rust/intro-rust"},"Rust")," and ",(0,o.kt)("a",{parentName:"p",href:"/1.7/writing-policies/go/intro-go"},"Go"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/psp-apparmor"},"psp-apparmor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/ingress-policy"},"ingress-policy"))),(0,o.kt)("p",null,"They both have test suites using standard testing for their development environments."),(0,o.kt)("p",null,"The policies use GitHub Actions for their CI pipelines."),(0,o.kt)("h2",{id:"end-to-end-tests"},"End-to-end tests"),(0,o.kt)("p",null,"You can also write tests that execute against the Wasm binary containing your policy.\nThis can be done without having to deploy a Kubernetes cluster by using these tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bats-core/bats-core"},"bats"),": is used to write tests and automate their execution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/kwctl"},"kwctl"),": Kubewarden's default CLI tool that helps you with policy-related operations; pull, inspect, annotate, push, and run.")),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl run")," the following input is needed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wasm binary file reference of the policy to be run.\nThe Kubewarden policy can be loaded from the local filesystem (",(0,o.kt)("inlineCode",{parentName:"li"},"file://"),"), an HTTP(s) server (",(0,o.kt)("inlineCode",{parentName:"li"},"https://"),"), or an OCI registry (",(0,o.kt)("inlineCode",{parentName:"li"},"registry://"),")."),(0,o.kt)("li",{parentName:"ol"},"The admission request object to be tested.\nYou provide it via the ",(0,o.kt)("inlineCode",{parentName:"li"},"--request-path")," argument.\nOr you can provide it on ",(0,o.kt)("inlineCode",{parentName:"li"},"stdin")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"--request-path")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"-"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide policy settings for run time as an inline JSON via ",(0,o.kt)("inlineCode",{parentName:"li"},"--settings-json")," flag.\nOr a JSON, or a YAML file loaded from the filesystem via ",(0,o.kt)("inlineCode",{parentName:"li"},"--settings-path"),".")),(0,o.kt)("p",null,"After the test ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," prints the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object to standard output."),(0,o.kt)("p",null,"This is how you use ",(0,o.kt)("inlineCode",{parentName:"p"},"kwctl")," to test the Wasm binary of ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress-policy")," linked to above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl https://raw.githubusercontent.com/kubewarden/ingress-policy/v0.1.8/test_data/ingress-wildcard.json 2> /dev/null | \\\n    kwctl run \\\n        --settings-json \'{"allowPorts": [80], "denyPorts": [3000]}\' \\\n        --request-path - \\\n        registry://ghcr.io/kubewarden/policies/ingress:v0.1.8 | jq\n')),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"bats")," you can write a test that runs this command and looks for the expected outputs:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"A ",(0,o.kt)("code",null,"bats")," test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'@test "all is good" {\n  run kwctl run \\\n    --request-path test_data/ingress-wildcard.json \\\n    --settings-json \'{"allowPorts": [80], "denyPorts": [3000]}\' \\\n    ingress-policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # settings validation passed\n  [[ "$output" == *"valid: true"* ]]\n\n  # request accepted\n  [[ "$output" == *"allowed: true"* ]]\n}\n'))),(0,o.kt)("p",null,"You can put the code in a file, ",(0,o.kt)("inlineCode",{parentName:"p"},"e2e.bats"),", for example, and then invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"bats")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ bats e2e.bats\n \u2713 all is good\n\n1 tests, 0 failures\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/1.7/writing-policies/go/e2e-tests"},"This")," section of the documentation has more about writing end-to-end tests of your policies."))}d.isMDXComponent=!0}}]);