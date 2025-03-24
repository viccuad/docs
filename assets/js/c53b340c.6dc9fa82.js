"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[73206],{4516:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"reference/spec/settings","title":"Policy settings","description":"Policy settings.","source":"@site/versioned_docs/version-1.16/reference/spec/02-settings.md","sourceDirName":"reference/spec","slug":"/reference/spec/settings","permalink":"/1.16/reference/spec/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/reference/spec/02-settings.md","tags":[],"version":"1.16","lastUpdatedAt":1742841510000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Policy settings","title":"Policy settings","description":"Policy settings.","keywords":["kubewarden","kubernetes","policy specification","policy settings"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","settings"]},"sidebar":"docs","previous":{"title":"Policy communication specification","permalink":"/1.16/reference/spec/intro-spec"},"next":{"title":"Validating policies","permalink":"/1.16/reference/spec/validating-policies"}}');var s=n(74848),o=n(28453);const r={sidebar_label:"Policy settings",title:"Policy settings",description:"Policy settings.",keywords:["kubewarden","kubernetes","policy specification","policy settings"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","settings"]},c=void 0,a={},d=[{value:"Settings validation",id:"settings-validation",level:2},{value:"Example",id:"example",level:2},{value:"Recap",id:"recap",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/settings"})}),"\n",(0,s.jsx)(i.p,{children:"Policy behavior is not rigid,\nit can be configured by providing configuration details to the policy at runtime.\nThe policy author has the freedom to define the structure of policy settings."}),"\n",(0,s.jsx)(i.p,{children:"Kubewarden takes care of serializing the policy settings into JSON and provides them to the policy each time it is invoked."}),"\n",(0,s.jsx)(i.h2,{id:"settings-validation",children:"Settings validation"}),"\n",(0,s.jsx)(i.p,{children:"Policies should validate the settings a user provides to ensure correctness."}),"\n",(0,s.jsxs)(i.p,{children:["Each policy registers a waPC function called ",(0,s.jsx)(i.code,{children:"validate_settings"})," that validates the policy settings."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"validate_settings"})," function receives as input a JSON representation of the settings provided by the user.\nThis function validates them and returns as a response a ",(0,s.jsx)(i.code,{children:"SettingsValidationResponse"})," object."]}),"\n",(0,s.jsxs)(i.p,{children:["The structure of the ",(0,s.jsx)(i.code,{children:"SettingsValidationResponse"})," object is:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'{\n  # mandatory\n  "valid": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["If the user provided settings are ",(0,s.jsx)(i.code,{children:"valid"}),", the contents of ",(0,s.jsx)(i.code,{children:"message"})," are ignored.\nOtherwise, the contents of ",(0,s.jsx)(i.code,{children:"message"})," are shown to the user."]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["Kubewarden's\n",(0,s.jsx)(i.a,{href:"https://github.com/chimera-kube/policy-server",children:"policy-server"}),"\nvalidates all the policy settings provided by users at start time.\nThe policy-server exits immediately with an error if at least one of its policies received wrong configuration parameters."]})}),"\n",(0,s.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(i.p,{children:["Let's take as an example the\n",(0,s.jsx)(i.a,{href:"https://github.com/kubewarden/psp-capabilities",children:"psp-capabilities"}),"\npolicy which has the following configuration format:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"allowed_capabilities:\n- CHOWN\n\nrequired_drop_capabilities:\n- NET_ADMIN\n\ndefault_add_capabilities:\n- KILL\n"})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"validate_settings"})," function receives as input the following JSON\ndocument:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "allowed_capabilities": [\n    "CHOWN"\n  ],\n  "required_drop_capabilities": [\n    "NET_ADMIN"\n  ],\n  "default_add_capabilities": [\n    "KILL"\n  ]\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"recap",children:"Recap"}),"\n",(0,s.jsxs)(i.p,{children:["Each policy must register a waPC function, ",(0,s.jsx)(i.code,{children:"validate_settings"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);