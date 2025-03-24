"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[78395],{13998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"tutorials/writing-policies/go/scaffold","title":"Creating a new validation policy","description":"Creating a new validation policy for Kubewarden using Go.","source":"@site/versioned_docs/version-1.22/tutorials/writing-policies/go/02-scaffold.md","sourceDirName":"tutorials/writing-policies/go","slug":"/tutorials/writing-policies/go/scaffold","permalink":"/tutorials/writing-policies/go/scaffold","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.22/tutorials/writing-policies/go/02-scaffold.md","tags":[],"version":"1.22","lastUpdatedAt":1742841510000,"sidebarPosition":16,"frontMatter":{"sidebar_label":"New validation policy","sidebar_position":16,"title":"Creating a new validation policy","description":"Creating a new validation policy for Kubewarden using Go.","keywords":["kubewarden","kubernetes","writing policies in Go","new validation policy"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","go","creating a new validation policy"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"Writing policies in Go","permalink":"/tutorials/writing-policies/go/intro-go"},"next":{"title":"Defining policy settings","permalink":"/tutorials/writing-policies/go/policy-settings"}}');var o=t(74848),s=t(28453);const a={sidebar_label:"New validation policy",sidebar_position:16,title:"Creating a new validation policy",description:"Creating a new validation policy for Kubewarden using Go.",keywords:["kubewarden","kubernetes","writing policies in Go","new validation policy"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","go","creating a new validation policy"],"doc-persona":["kubewarden-policy-developer"]},l=void 0,c={},r=[{value:"Scaffolding new policy project",id:"scaffolding-new-policy-project",level:2},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:t,Head:i}=n;return t||u("Details",!0),i||u("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/go/scaffold"})}),"\n",(0,o.jsx)(n.p,{children:"This tutorial covers creating a policy that validates the labels of Pod objects."}),"\n",(0,o.jsx)(n.p,{children:"The policy is to reject all Pods that use one or more labels on the deny-list.\nThe policy also validates certain labels using a regular expression provided by the user."}),"\n",(0,o.jsx)(n.p,{children:"To summarize, the policy settings should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'# List of labels that cannot be used\ndenied_labels:\n- foo\n- bar\n\n# Labels that are validated with user-defined regular expressions\nconstrained_labels:\n  priority: "[123]"\n  cost-center: "^cc-\\d+"\n'})}),"\n",(0,o.jsx)(n.p,{children:"The policy rejects the creation of this Pod:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    foo: hello world\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,o.jsx)(n.p,{children:"It also rejects the creation of this Pod:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    cost-center: cc-marketing\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can use the policy's settings to force using a label specification, regardless of content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'constrained_labels:\n  mandatory-label: ".*" # <- this label must be present, we don\'t care about its value\n'})}),"\n",(0,o.jsx)(n.h2,{id:"scaffolding-new-policy-project",children:"Scaffolding new policy project"}),"\n",(0,o.jsxs)(n.p,{children:["You can create a new policy project using the\n",(0,o.jsx)(n.a,{href:"https://github.com/kubewarden/go-policy-template",children:"template repository"}),'.\nSelect the "Use this template" green button near the top of the page\nand follow GitHub\'s wizard.']}),"\n",(0,o.jsxs)(n.p,{children:["Clone the repository locally and set the ",(0,o.jsx)(n.code,{children:"module"})," directive in the ",(0,o.jsx)(n.code,{children:"go.mod"})," file to look like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"module <path to your repository>\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["A real policy would use a repository path, like ",(0,o.jsx)(n.code,{children:"github.com/kubewarden/go-policy-template"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(n.p,{children:["Provided the necessary tools are in place a ",(0,o.jsx)(n.code,{children:"make test"})," command uses Docker to pull a TinyGo compiler image using it to build and test the policy template."]}),"\n",(0,o.jsxs)(n.p,{children:["The default ",(0,o.jsx)(n.code,{children:"make"})," command builds the ",(0,o.jsx)(n.code,{children:"policy.wasm"})," target. Then ",(0,o.jsx)(n.code,{children:"make test"})," runs the defined Go tests.\nThe command ",(0,o.jsx)(n.code,{children:"make e2e-tests"})," runs tests using ",(0,o.jsx)(n.a,{href:"https://github.com/bats-core/bats-core",children:"bats"})," within a Kubewarden cluster.\nAfter cloning the ",(0,o.jsx)(n.code,{children:"go-policy-template"}),", running these commands checks you have the tools in place for the tutorial."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:["Output from the ",(0,o.jsx)(n.code,{children:"make"})," commands"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'make test\ndocker run \\\n        --rm \\\n        -e GOFLAGS="-buildvcs=false" \\\n        -v /home/jhk/projects/suse/tmp/go-kw-demo:/src \\\n        -w /src tinygo/tinygo:0.30.0 \\\n        tinygo build -o policy.wasm -target=wasi -no-debug .\nUnable to find image \'tinygo/tinygo:0.30.0\' locally\n0.30.0: Pulling from tinygo/tinygo\n9aaefb8797c4: Pull complete\n24ab7ca26e01: Pull complete\nca4ea8be6361: Pull complete\n50380d0859d2: Pull complete\n4f4fb700ef54: Pull complete\nea0ddd497f04: Pull complete\n01ba28116afb: Pull complete\nDigest: sha256:5cbf5e50aec3a00fcff8bb4ae070a07eea8198187a97b21dff6d873d2274ce7a\nStatus: Downloaded newer image for tinygo/tinygo:0.30.0\ngo test -v\n=== RUN   TestParsingSettingsWithNoValueProvided\n--- PASS: TestParsingSettingsWithNoValueProvided (0.00s)\n=== RUN   TestIsNameDenied\n--- PASS: TestIsNameDenied (0.00s)\n=== RUN   TestEmptySettingsLeadsToApproval\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n--- PASS: TestEmptySettingsLeadsToApproval (0.00s)\n=== RUN   TestApproval\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n--- PASS: TestApproval (0.00s)\n=== RUN   TestApproveFixture\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\n--- PASS: TestApproveFixture (0.00s)\n=== RUN   TestRejectionBecauseNameIsDenied\nNATIVE: |{"level":"debug","message":"validating pod object","name":"test-pod","namespace":"default"}\n|\nNATIVE: |{"level":"info","message":"rejecting pod object","name":"test-pod","denied_names":"foo,test-pod"}\n|\n--- PASS: TestRejectionBecauseNameIsDenied (0.00s)\nPASS\nok      github.com/kubewarden/go-policy-template        0.004s\n'})}),(0,o.jsx)(n.p,{children:"and"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"make e2e-tests\nbats e2e.bats\ne2e.bats\n \u2713 reject because name is on deny list\n \u2713 accept because name is not on the deny list\n \u2713 accept because the deny list is empty\n\n3 tests, 0 failures\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);