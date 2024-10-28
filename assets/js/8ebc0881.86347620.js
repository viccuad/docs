"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[52125],{90828:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=t(85893),s=t(11151);const n={sidebar_label:"Swift",sidebar_position:50,title:"Swift",description:"Kubewarden policies with Swift",keywords:["kubewarden","kubernetes","writing policies","swift"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","swift"],"doc-persona":["kubewarden-policy-developer"]},r=void 0,a={id:"tutorials/writing-policies/swift",title:"Swift",description:"Kubewarden policies with Swift",source:"@site/versioned_docs/version-1.13/tutorials/writing-policies/swift.md",sourceDirName:"tutorials/writing-policies",slug:"/tutorials/writing-policies/swift",permalink:"/1.13/tutorials/writing-policies/swift",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.13/tutorials/writing-policies/swift.md",tags:[],version:"1.13",lastUpdatedAt:1730105841e3,sidebarPosition:50,frontMatter:{sidebar_label:"Swift",sidebar_position:50,title:"Swift",description:"Kubewarden policies with Swift",keywords:["kubewarden","kubernetes","writing policies","swift"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","swift"],"doc-persona":["kubewarden-policy-developer"]},sidebar:"docs",previous:{title:"C#",permalink:"/1.13/tutorials/writing-policies/dotnet"},next:{title:"Typescript",permalink:"/1.13/tutorials/writing-policies/typescript"}},c={},l=[{value:"Current State",id:"current-state",level:2},{value:"More examples",id:"more-examples",level:2}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/swift"})}),"\n",(0,o.jsxs)(i.p,{children:["As stated on the ",(0,o.jsx)(i.a,{href:"https://swift.org/",children:"official website"}),":"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"Swift is a general-purpose programming language that\u2019s approachable for newcomers and powerful for experts.\nIt is fast, modern, safe, and a joy to write."}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["The swift compiler doesn't yet have WebAssembly support, however the\n",(0,o.jsx)(i.a,{href:"https://swiftwasm.org/",children:"SwiftWasm"})," project provides a patched compiler with this\ncapability."]}),"\n",(0,o.jsx)(i.p,{children:"The SwiftWasm team is working to merge these changes into the Swift project.\nIn the meantime, you can use the tool chain provided by the SwiftWasm project to build Kubewarden policies."}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"You don't need an Apple system to write or run Swift code. Everything\ncan be done also on a Linux machine or on Windows (by using Docker for Windows)."})}),"\n",(0,o.jsx)(i.h2,{id:"current-state",children:"Current State"}),"\n",(0,o.jsx)(i.p,{children:"Policy authors can use the following resources:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/policy-sdk-swift",children:"Kubewarden Swift SDK"}),": this provides a set of ",(0,o.jsx)(i.code,{children:"struct"}),"s and functions that simplify the process of writing policies."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/swift-policy-template",children:"Kubewarden Swift template project"}),": use this template to scaffold a Swift-based policy.\nThe template comes with a working policy and a set of GitHub Actions to automate its lifecycle."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"There are no severe limitations with Swift, only some minor issues:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["It's critical to perform some post-build optimizations before using the\npolicy ",(0,o.jsx)(i.em,{children:'"in production"'}),":","\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["Strip the Wasm module via ",(0,o.jsx)(i.code,{children:"wasm-strip"})," to reduce its size"]}),"\n",(0,o.jsxs)(i.li,{children:["Optimize the Wasm module via ",(0,o.jsx)(i.code,{children:"wasm-opt"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"The GitHub Action provided by the template repository already takes care of that."}),"\n",(0,o.jsx)(i.h2,{id:"more-examples",children:"More examples"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/pod-runtime-class-policy/tree/swift-implementation",children:"This GitHub repository branch"}),"\nhas a Kubewarden Policy written in Swift."]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>r});var o=t(67294);const s={},n=o.createContext(s);function r(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);