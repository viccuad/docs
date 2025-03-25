"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2381],{76957:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"howtos/custom-certificate-authorities","title":"Custom certificate authorities","description":"Using custom certificate authorities with Kubewarden.","source":"@site/versioned_docs/version-1.17/howtos/custom-certificate-authorities.md","sourceDirName":"howtos","slug":"/howtos/custom-certificate-authorities","permalink":"/1.17/howtos/custom-certificate-authorities","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/howtos/custom-certificate-authorities.md","tags":[],"version":"1.17","lastUpdatedAt":1742898405000,"sidebarPosition":50,"frontMatter":{"sidebar_label":"Custom Certificate Authorities","sidebar_position":50,"title":"Custom certificate authorities","description":"Using custom certificate authorities with Kubewarden.","keywords":["kubewarden","kubernetes","custom certificate authorities"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["distributing-policies","custom-certificate-authorities"]},"sidebar":"docs","previous":{"title":"Secure supply chain","permalink":"/1.17/howtos/secure-supply-chain"},"next":{"title":"Raw policies","permalink":"/1.17/howtos/raw-policies"}}');var o=i(74848),r=i(28453);const n={sidebar_label:"Custom Certificate Authorities",sidebar_position:50,title:"Custom certificate authorities",description:"Using custom certificate authorities with Kubewarden.",keywords:["kubewarden","kubernetes","custom certificate authorities"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["distributing-policies","custom-certificate-authorities"]},c=void 0,a={},u=[{value:"The <code>sources.yaml</code> file",id:"the-sourcesyaml-file",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/custom-certificate-authorities"})}),"\n",(0,o.jsxs)(t.p,{children:["With both of ",(0,o.jsx)(t.code,{children:"kwctl"})," and ",(0,o.jsx)(t.code,{children:"policy-server"}),"\nyou can pull policies from Open Container Initiative (OCI) registries and HTTP servers.\nYou can only push policies to OCI registries.\nBy default, HTTPS is used with host TLS verification for this."]}),"\n",(0,o.jsxs)(t.p,{children:["The system's certificate authority (CA) store is used to\nvalidate the trusted chain of certificates from the OCI registry.\nIn a standard Kubewarden installation, the ",(0,o.jsx)(t.code,{children:"policy-server"})," uses the\nCA store shipped with its Linux container.\nOn the client side, ",(0,o.jsx)(t.code,{children:"kwctl"})," uses your operating system CA store."]}),"\n",(0,o.jsxs)(t.p,{children:["If you are using the\n",(0,o.jsx)(t.a,{href:"https://github.com/kubewarden/kubewarden-controller",children:"Kubewarden Controller"}),",\nyou can configure the PolicyServer via its\n",(0,o.jsxs)(t.a,{href:"/1.17/howtos/policy-servers/custom-cas",children:[(0,o.jsx)(t.code,{children:"spec"})," fields"]}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The default behavior of ",(0,o.jsx)(t.code,{children:"kwctl"})," and ",(0,o.jsx)(t.code,{children:"policy-server"})," enforces HTTPS with trusted certificates matching the system CA store.\nYou can interact with registries using untrusted certificates or even without TLS, by using the ",(0,o.jsx)(t.code,{children:"insecure_sources"})," setting.\nClearly, it's not for production environments."]})}),"\n",(0,o.jsxs)(t.h2,{id:"the-sourcesyaml-file",children:["The ",(0,o.jsx)(t.code,{children:"sources.yaml"})," file"]}),"\n",(0,o.jsxs)(t.p,{children:["You can tune the push-pull behavior of ",(0,o.jsx)(t.code,{children:"kwctl"})," and ",(0,o.jsx)(t.code,{children:"policy-server"})," using the ",(0,o.jsx)(t.code,{children:"sources.yaml"})," file."]}),"\n",(0,o.jsxs)(t.p,{children:["For reference details, check the ",(0,o.jsx)(t.a,{href:"/1.17/reference/sources_yaml",children:(0,o.jsx)(t.code,{children:"sources.yaml"})})," reference."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>c});var s=i(96540);const o={},r=s.createContext(o);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);