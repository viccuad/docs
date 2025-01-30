"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[73675],{21683:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"writing-policies/rego/open-policy-agent/build-and-run","title":"","description":"In the previous section we have written our Rego policy. The structure","source":"@site/versioned_docs/version-1.9/writing-policies/rego/open-policy-agent/03-build-and-run.md","sourceDirName":"writing-policies/rego/open-policy-agent","slug":"/writing-policies/rego/open-policy-agent/build-and-run","permalink":"/1.9/writing-policies/rego/open-policy-agent/build-and-run","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rego/open-policy-agent/03-build-and-run.md","tags":[],"version":"1.9","lastUpdatedAt":1738241890000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Build and Run","title":""},"sidebar":"docs","previous":{"title":"Create a New Policy","permalink":"/1.9/writing-policies/rego/open-policy-agent/create-policy"},"next":{"title":"Distribute","permalink":"/1.9/writing-policies/rego/open-policy-agent/distribute"}}');var r=i(74848),s=i(28453);const l={sidebar_label:"Build and Run",title:""},o="Build and run",c={},d=[{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"build-and-run",children:"Build and run"})}),"\n",(0,r.jsx)(n.p,{children:"In the previous section we have written our Rego policy. The structure\nlooks as the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u2514\u2500\u2500 request.rego\n\n1 directory, 4 files\n"})}),"\n",(0,r.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,r.jsx)(n.p,{children:"We have our policy, now let's go ahead and build it. We do:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ opa build -t wasm -e policy/main policy.rego request.rego\n"})}),"\n",(0,r.jsx)(n.p,{children:"What this does is build the rego policy, with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"target"}),": ",(0,r.jsx)(n.code,{children:"wasm"}),". We want  to build the policy for the ",(0,r.jsx)(n.code,{children:"wasm"})," target."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"entrypoint"}),": ",(0,r.jsx)(n.code,{children:"policy/main"}),". The entry point is the ",(0,r.jsx)(n.code,{children:"main"})," rule\ninside the ",(0,r.jsx)(n.code,{children:"policy"})," package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"policy.rego"}),": build and include the ",(0,r.jsx)(n.code,{children:"policy.rego"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request.rego"}),": build and include the ",(0,r.jsx)(n.code,{children:"request.rego"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After the build is complete, ",(0,r.jsx)(n.code,{children:"opa build"})," will have generated a\n",(0,r.jsx)(n.code,{children:"bundle.tar.gz"})," file. You can extract it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ tar -xf bundle.tar.gz /policy.wasm\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now the tree looks like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:".\n\u251c\u2500\u2500 bundle.tar.gz\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u251c\u2500\u2500 policy.wasm\n\u2514\u2500\u2500 request.rego\n\n1 directory, 6 file\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We have our precious ",(0,r.jsx)(n.code,{children:"policy.wasm"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ file policy.wasm\npolicy.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now it's time to execute it! Let's go on."}),"\n",(0,r.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,r.jsxs)(n.p,{children:["We are going to use ",(0,r.jsx)(n.code,{children:"kwctl"})," in order to run the policy:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ kwctl run -e opa --request-path data/other-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This request is accepted by the policy, since this is the request\npointing to the ",(0,r.jsx)(n.code,{children:"other"})," namespace."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"execution-mode"}),": ",(0,r.jsx)(n.code,{children:"opa"}),". Rego policies can be targeting Open Policy\nAgent or Gatekeeper: we must tell ",(0,r.jsx)(n.code,{children:"kwctl"})," what kind of policy we are\nrunning."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"request-path"}),": the location of the recorded request ",(0,r.jsx)(n.code,{children:"kwctl"})," will\nsend to the policy to evaluate."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Now let's try to evaluate the request that creates the pod inside the\n",(0,r.jsx)(n.code,{children:"default"})," namespace:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ kwctl run -e opa --request-path data/default-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "it is forbidden to use the default namespace"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this case, the policy is rejecting the request, and giving a reason\nback to the API server that will be returned to the user or API consumer."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);