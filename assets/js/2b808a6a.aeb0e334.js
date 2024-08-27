"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[29177],{14427:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(85893),i=t(11151);const s={sidebar_label:"Certificate Rotation",sidebar_position:10,title:"Policy Server certificate rotation issue",description:"How-to work around Policy Server certificate expiry issue",keywords:["kubewarden","kubernetes","policy server certificates"],"doc-persona":["kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["howto","workarounds","policy server certificates"]},n=void 0,a={id:"howtos/workarounds/policy-server-certificate-expiry",title:"Policy Server certificate rotation issue",description:"How-to work around Policy Server certificate expiry issue",source:"@site/versioned_docs/version-1.14/howtos/workarounds/policy-server-certificate-expiry.md",sourceDirName:"howtos/workarounds",slug:"/howtos/workarounds/policy-server-certificate-expiry",permalink:"/1.14/howtos/workarounds/policy-server-certificate-expiry",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.14/howtos/workarounds/policy-server-certificate-expiry.md",tags:[],version:"1.14",lastUpdatedAt:172475042e4,sidebarPosition:10,frontMatter:{sidebar_label:"Certificate Rotation",sidebar_position:10,title:"Policy Server certificate rotation issue",description:"How-to work around Policy Server certificate expiry issue",keywords:["kubewarden","kubernetes","policy server certificates"],"doc-persona":["kubewarden-operator","kubewarden-distributor","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["howto","workarounds","policy server certificates"]},sidebar:"docs",previous:{title:"Common tasks",permalink:"/1.14/howtos/tasks"},next:{title:"PSP migration",permalink:"/1.14/howtos/psp-migration"}},c={},d=[];function u(e){const r={p:"p",...(0,i.a)(),...e.components},{Head:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/howtos/policy-server-certificate-expiry"})}),"\n",(0,o.jsx)(r.p,{children:"During the release process for v1.14, a bug related to the policy server certificate rotation was discovered.\nThe Root CA is configured to expire in 10 years, but each policy-server certificate secret has a one-year expiry.\nHowever, the controller is currently unable to renew them automatically."}),"\n",(0,o.jsx)(r.p,{children:"In the v1.14 release, we have ensured that policy-server secrets are created with a 10-year expiry."}),"\n",(0,o.jsx)(r.p,{children:"For future releases we'll implement an automated renewal process."}),"\n",(0,o.jsx)(r.p,{children:"Until then, users can manually delete the expired certificate secret (policy-server-default) and trigger a controller reconciliation.\nYou do this by adding, removing, or updating a policy or by adjusting the number of replicas of a PolicyServer."})]})}function l(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>n});var o=t(67294);const i={},s=o.createContext(i);function n(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);