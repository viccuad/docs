"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[33502],{31684:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});const c=JSON.parse('{"id":"writing-policies/spec/host-capabilities/crypto","title":"Cryptographic capabilities","description":"Cryptographic capabilities.","source":"@site/versioned_docs/version-1.10/writing-policies/spec/host-capabilities/05-crypto.md","sourceDirName":"writing-policies/spec/host-capabilities","slug":"/writing-policies/spec/host-capabilities/crypto","permalink":"/1.10/writing-policies/spec/host-capabilities/crypto","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/writing-policies/spec/host-capabilities/05-crypto.md","tags":[],"version":"1.10","lastUpdatedAt":1742898405000,"sidebarPosition":5,"frontMatter":{"sidebar_label":"Cryptographic capabilities","title":"Cryptographic capabilities","description":"Cryptographic capabilities.","keywords":["kubewarden","kubernetes","policy specification","cryptographic capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","cryptographic-capabilities"]},"sidebar":"docs","previous":{"title":"Network capabilities","permalink":"/1.10/writing-policies/spec/host-capabilities/net"},"next":{"title":"Kubernetes capabilities","permalink":"/1.10/writing-policies/spec/host-capabilities/kubernetes"}}');var n=t(74848),r=t(28453);const s={sidebar_label:"Cryptographic capabilities",title:"Cryptographic capabilities",description:"Cryptographic capabilities.",keywords:["kubewarden","kubernetes","policy specification","cryptographic capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","specification","host-capabilities","cryptographic-capabilities"]},a=void 0,o={},p=[{value:"WaPC protocol contract",id:"wapc-protocol-contract",level:2}];function l(e){const i={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Because of Wasm constraints at the time of writing, some cryptographic libraries\ncannot be compiled to Wasm. In the meantime, Kubewarden policies needing those\ncan instead perform these callbacks to evaluate the cryptographic functions\nhost-side, receive the result, and continue with their logic."}),"\n",(0,n.jsx)(i.h2,{id:"wapc-protocol-contract",children:"WaPC protocol contract"}),"\n",(0,n.jsx)(i.p,{children:"In case you are implementing your own language SDK, these are the functions\nperforming cryptographic checks exposed by the host:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:" waPC function name "}),(0,n.jsx)("th",{children:" Input payload "}),(0,n.jsx)("th",{children:" Output payload "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"v1/is_certificate_trusted"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:'# Certificate:\n{\n  # **mandatory**: Which encoding is used by the certificate\n  # Either the string "Pem" or "Der".\n  "encoding": string,\n  # Actual certificate\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM/DER encoded\n  # certificate string.\n  "data": [byte(int), ..., byte(int)]\n}\n\n{\n  # **mandatory**: PEM-encoded certificate to verify\n  "cert": Certificate,\n  # optional:\n  "cert_chain": [\n      # list of certs, ordered by trust\n      # usage (intermediates first, root last)\n      # If empty or missing, certificate is assumed\n      # trusted\n      Certificate,\n      ...\n      Certificate,\n    ],\n  # RFC 3339 time format string, to check expiration\n  # against.\n  # If missing, certificate is assumed never expired\n  "not_after": string\n}\n'})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-hcl",children:'{\n   # true if certificate verified:\n   "trusted": boolean,\n   # empty if trusted == true:\n   "reason": string\n}\n'})})})]})]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var c=t(96540);const n={},r=c.createContext(n);function s(e){const i=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),c.createElement(r.Provider,{value:i},e.children)}}}]);