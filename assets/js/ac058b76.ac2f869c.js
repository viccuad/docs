"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[24854],{75222:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(85893),s=t(11151);const o={sidebar_label:"Host capabilities specification",title:"Host capabilities specification",description:"Host capabilities specification.",keywords:["kubewarden","kubernetes","policy specification","host capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","introduction"]},a=void 0,c={id:"reference/spec/host-capabilities/intro-host-capabilities",title:"Host capabilities specification",description:"Host capabilities specification.",source:"@site/docs/reference/spec/host-capabilities/01-intro-host-capabilities.md",sourceDirName:"reference/spec/host-capabilities",slug:"/reference/spec/host-capabilities/intro-host-capabilities",permalink:"/next/reference/spec/host-capabilities/intro-host-capabilities",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/reference/spec/host-capabilities/01-intro-host-capabilities.md",tags:[],version:"current",lastUpdatedAt:171292607e4,sidebarPosition:1,frontMatter:{sidebar_label:"Host capabilities specification",title:"Host capabilities specification",description:"Host capabilities specification.",keywords:["kubewarden","kubernetes","policy specification","host capabilities"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["reference"],"doc-topic":["writing-policies","specification","host-capabilities","introduction"]},sidebar:"docs",previous:{title:"Context aware policies",permalink:"/next/reference/spec/context-aware-policies"},next:{title:"Signature verifier policies",permalink:"/next/reference/spec/host-capabilities/signature-verifier-policies"}},r={},l=[];function p(e){const i={a:"a",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/reference/spec/host-capabilities/intro-host-capabilities"})}),"\n",(0,n.jsxs)(i.p,{children:["During evaluation, Kubewarden policies can access extra capabilities offered by the host environment.\nThis mechanism uses an approach similar to traditional\n",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Remote_procedure_call",children:"RPC"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"This is what happens when a request is issued by a Kubewarden policy:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Kubewarden policy:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Invokes the capability offered by the host environment."}),"\n",(0,n.jsx)(i.li,{children:"The invocation is a blocking operation,\nhence the policy code will wait until the host provides an answer."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Host environment:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A capability invocation is received."}),"\n",(0,n.jsx)(i.li,{children:"The host performs the operation."}),"\n",(0,n.jsx)(i.li,{children:"The host provides an answer to the policy, which could be either a success or a failure."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Kubewarden policy:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The code receives the answer from the host and resumes execution."}),"\n",(0,n.jsx)(i.li,{children:"The host response is handled accordingly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The host capabilities feature is implemented using\n",(0,n.jsx)(i.a,{href:"https://wapc.io/",children:"waPC"}),".\nEach capability uses these details:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"waPC function name: The name of the capability exposed by the host."}),"\n",(0,n.jsx)(i.li,{children:"Input payload: The body of the request made by the policy.\nThis is always encoded in JSON format."}),"\n",(0,n.jsx)(i.li,{children:"Output payload: The body of the response coming from the host. This is always encoded in JSON format."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"When something goes wrong, the host replies with an error.\nThis is done using the error type of the programming language used by the policy.\nThe error is a UTF-8 string that holds an explanation message."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>a});var n=t(67294);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);