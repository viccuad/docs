"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[78418],{99787:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"writing-policies/spec/host-capabilities/crypto","title":"","description":"Because of Wasm constraints at the time of writing, some cryptographic libraries","source":"@site/versioned_docs/version-1.8/writing-policies/spec/host-capabilities/05-crypto.md","sourceDirName":"writing-policies/spec/host-capabilities","slug":"/writing-policies/spec/host-capabilities/crypto","permalink":"/1.8/writing-policies/spec/host-capabilities/crypto","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/spec/host-capabilities/05-crypto.md","tags":[],"version":"1.8","lastUpdatedAt":1741176318000,"sidebarPosition":5,"frontMatter":{"sidebar_label":"Cryptographic Capabilities","title":""},"sidebar":"docs","previous":{"title":"Network Capabilities","permalink":"/1.8/writing-policies/spec/host-capabilities/net"},"next":{"title":"Kubernetes Capabilities","permalink":"/1.8/writing-policies/spec/host-capabilities/kubernetes"}}');var r=i(74848),s=i(28453);const c={sidebar_label:"Cryptographic Capabilities",title:""},a="Cryptographic capabilities",o={},p=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"cryptographic-capabilities",children:"Cryptographic capabilities"})}),"\n",(0,r.jsx)(t.p,{children:"Because of Wasm constraints at the time of writing, some cryptographic libraries\ncannot be compiled to Wasm. In the meantime, Kubewarden policies needing those\ncan instead perform these callbacks to evaluate the cryptographic functions\nhost-side, receive the result, and continue with their logic."}),"\n",(0,r.jsx)(t.h1,{id:"wapc-protocol-contract",children:"WaPC protocol contract"}),"\n",(0,r.jsx)(t.p,{children:"In case you are implementing your own language SDK, these are the functions\nperforming cryptographic checks exposed by the host:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:" waPC function name "}),(0,r.jsx)("th",{children:" Input payload "}),(0,r.jsx)("th",{children:" Output payload "})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"v1/is_certificate_trusted"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-hcl",children:'# Certificate:\n{\n  # **mandatory**: Which encoding is used by the certificate\n  # Either the string "Pem" or "Der".\n  "encoding": string,\n  # Actual certificate\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM/DER encoded\n  # certificate string.\n  "data": [byte(int), ..., byte(int)]\n}\n\n{\n  # **mandatory**: PEM-encoded certificate to verify\n  "cert": Certificate,\n  # optional:\n  "cert_chain": [\n      # list of certs, ordered by trust\n      # usage (intermediates first, root last)\n      # If empty or missing, certificate is assumed\n      # trusted\n      Certificate,\n      ...\n      Certificate,\n    ],\n  # RFC 3339 time format string, to check expiration\n  # against.\n  # If missing, certificate is assumed never expired\n  "not_after": string\n}\n'})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-hcl",children:'{\n   # true if certificate verified:\n   "trusted": boolean,\n   # empty if trusted == true:\n   "reason": string\n}\n'})})})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);