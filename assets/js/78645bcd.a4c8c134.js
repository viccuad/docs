"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[36424],{703:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/writing-policies/go/intro-go","title":"Writing policies in Go","description":"A tutorial introduction to writing policies in Go.","source":"@site/versioned_docs/version-1.17/tutorials/writing-policies/go/01-intro-go.md","sourceDirName":"tutorials/writing-policies/go","slug":"/tutorials/writing-policies/go/intro-go","permalink":"/1.17/tutorials/writing-policies/go/intro-go","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/tutorials/writing-policies/go/01-intro-go.md","tags":[],"version":"1.17","lastUpdatedAt":1742911377000,"sidebarPosition":8,"frontMatter":{"sidebar_label":"Writing policies in Go","sidebar_position":8,"title":"Writing policies in Go","description":"A tutorial introduction to writing policies in Go.","keywords":["kubewarden","kubernetes","writing policies in Go"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","go","introduction"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"Raw policies","permalink":"/1.17/tutorials/writing-policies/rust/raw-policies"},"next":{"title":"New validation policy","permalink":"/1.17/tutorials/writing-policies/go/scaffold"}}');var o=n(74848),s=n(28453);const r={sidebar_label:"Writing policies in Go",sidebar_position:8,title:"Writing policies in Go",description:"A tutorial introduction to writing policies in Go.",keywords:["kubewarden","kubernetes","writing policies in Go"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","go","introduction"],"doc-persona":["kubewarden-policy-developer"]},a=void 0,l={},c=[{value:"TinyGo limitations",id:"tinygo-limitations",level:2},{value:"Tooling",id:"tooling",level:2},{value:"Getting TinyGo dependencies",id:"getting-tinygo-dependencies",level:2},{value:"Tutorial prerequisites",id:"tutorial-prerequisites",level:2}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/go/intro-go"})}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"Go's support for WebAssembly is fast evolving.\nThis page was last revised in December 2023."})}),"\n",(0,o.jsx)(i.p,{children:"The official Go compiler can produce WebAssembly binaries, for execution outside a browser, since v1.21."}),"\n",(0,o.jsxs)(i.p,{children:["There's another Go compiler that can build WebAssembly binaries usable by Kubewarden.\nThis compiler project is ",(0,o.jsx)(i.a,{href:"https://tinygo.org/",children:"TinyGo"}),":"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"TinyGo brings the Go programming language to embedded systems and to the modern web by creating a new compiler based on LLVM."}),"\n",(0,o.jsxs)(i.p,{children:["You can compile and run TinyGo programs on over 94 different microcontroller boards such as the BBC micro",":bit"," and the Arduino Uno."]}),"\n",(0,o.jsx)(i.p,{children:"TinyGo can also produce WebAssembly (Wasm) code which is very compact in size.\nYou can compile programs for web browsers,\nas well as for server and edge computing environments that support the WebAssembly System Interface (WASI) family of interfaces."}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"The Kubewarden project currently suggests using TinyGo for two reasons:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"binaries are smaller"}),"\n",(0,o.jsxs)(i.li,{children:["support for ",(0,o.jsx)(i.a,{href:"https://wapc.io",children:"waPC"})," by the ability to export functions to the runtime"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"tinygo-limitations",children:"TinyGo limitations"}),"\n",(0,o.jsxs)(i.p,{children:["TinyGo doesn't yet support all the Go features,\nsee the TinyGo language support ",(0,o.jsx)(i.a,{href:"https://tinygo.org/lang-support/",children:"page"}),"\nto see the current project status.\nCurrently, its largest limitation is the lack of a fully supported ",(0,o.jsx)(i.code,{children:"reflect"})," package.\nThis means that official Kubernetes Go API types (e.g.: ",(0,o.jsx)(i.code,{children:"k8s.io/api/core/v1"}),") don't compile."]}),"\n",(0,o.jsx)(i.p,{children:"Kubewarden policies need to process JSON data such as policy settings and the request received by Kubernetes."}),"\n",(0,o.jsx)(i.p,{children:"Despite TinyGo's current limitations, it's still easy to write Kubewarden validation policies with it."}),"\n",(0,o.jsx)(i.h2,{id:"tooling",children:"Tooling"}),"\n",(0,o.jsxs)(i.p,{children:["Writing Kubewarden policies requires a version of TinyGo greater than ",(0,o.jsx)(i.code,{children:"v0.28.1"}),".\nHowever, use the latest version, for the best results."]}),"\n",(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsx)(i.p,{children:"Using older versions of TinyGo results in runtime errors due to the limited support for Go reflection."})}),"\n",(0,o.jsx)(i.p,{children:"These Go libraries are useful when writing a Kubewarden policy:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/policy-sdk-go",children:"Kubewarden Go SDK"}),":\nProvides structures and functions reducing the amount of code necessary.\nIt also provides test helpers."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/k8s-objects",children:"Kubernetes Go types"}),":\nThe ",(0,o.jsx)(i.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/staging/src/k8s.io",children:"official Kubernetes Go Types"}),"\ncan't be used with TinyGo.\nThis module provides all the Kubernetes Types in a TinyGo-friendly way."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/tidwall/gjson",children:"gjson"}),":\nThis provides a query language for quick navigation of JSON documents and data retrieval.\nThis library doesn't use the ",(0,o.jsx)(i.code,{children:"encoding/json"})," package provided by Go's ",(0,o.jsx)(i.code,{children:"stdlib"}),", hence it's usable with TinyGo."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/deckarep/golang-set",children:"mapset"}),":\nProvides a Go implementation of the\n",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"Set"}),"\ndata structure.\nThis library reduces the amount of code to write as operations such as\nSet ",(0,o.jsx)(i.code,{children:"union"}),", ",(0,o.jsx)(i.code,{children:"intersection"}),", ",(0,o.jsx)(i.code,{children:"difference"})," are common operation in Kubewarden policies."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Lastly, the Kubewarden project provides a\n",(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/go-policy-template",children:"template Go policy project"}),"\nyou can use to create Kubewarden Go policies."]}),"\n",(0,o.jsx)(i.h2,{id:"getting-tinygo-dependencies",children:"Getting TinyGo dependencies"}),"\n",(0,o.jsxs)(i.p,{children:["The easiest way to get TinyGo is by using the upstream container images.\nOfficial releases are\n",(0,o.jsx)(i.a,{href:"https://hub.docker.com/r/tinygo/tinygo",children:"here"}),",\nwhile builds from the development branch are automatically pushed\n",(0,o.jsx)(i.a,{href:"https://hub.docker.com/r/tinygo/tinygo-dev",children:"here"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["If needed, try TinyGo's\n",(0,o.jsx)(i.a,{href:"https://tinygo.org/getting-started/",children:"getting started"}),"\npage for more information."]}),"\n",(0,o.jsx)(i.h2,{id:"tutorial-prerequisites",children:"Tutorial prerequisites"}),"\n",(0,o.jsx)(i.p,{children:"During this tutorial you need these tools on your development machine:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"docker or another container engine: used to build the WebAssembly policy.\nYou'll be using the compiler shipped in the official TinyGo container image."}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/bats-core/bats-core",children:"bats"}),":\nused to write the tests and automate their execution."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://github.com/kubewarden/kwctl/releases",children:"kwctl"}),":\nCLI tool provided by Kubewarden to run its policies outside of Kubernetes, among other actions.\nIt's covered in ",(0,o.jsx)(i.a,{href:"/1.17/tutorials/testing-policies/",children:"this section"})," of the documentation."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);