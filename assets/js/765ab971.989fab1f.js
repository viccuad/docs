"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[629],{54616:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"tutorials/writing-policies/go/logging","title":"Logging","description":"A tutorial introduction to logging when using Go to write a Kubewarden policy.","source":"@site/versioned_docs/version-1.15/tutorials/writing-policies/go/06-logging.md","sourceDirName":"tutorials/writing-policies/go","slug":"/tutorials/writing-policies/go/logging","permalink":"/1.15/tutorials/writing-policies/go/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.15/tutorials/writing-policies/go/06-logging.md","tags":[],"version":"1.15","lastUpdatedAt":1733418174000,"sidebarPosition":48,"frontMatter":{"sidebar_label":"Logging","sidebar_position":48,"title":"Logging","description":"A tutorial introduction to logging when using Go to write a Kubewarden policy.","keywords":["kubewarden","kubernetes","writing policies","golang","go","logging"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","golang","logging"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"End-to-end testing","permalink":"/1.15/tutorials/writing-policies/go/e2e-tests"},"next":{"title":"GitHub Actions","permalink":"/1.15/tutorials/writing-policies/go/automate"}}');var t=n(74848),r=n(28453);const l={sidebar_label:"Logging",sidebar_position:48,title:"Logging",description:"A tutorial introduction to logging when using Go to write a Kubewarden policy.",keywords:["kubewarden","kubernetes","writing policies","golang","go","logging"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","golang","logging"],"doc-persona":["kubewarden-policy-developer"]},s=void 0,g={},a=[{value:"Initialize logger",id:"initialize-logger",level:2},{value:"Consuming the logger",id:"consuming-the-logger",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/go/logging"})}),"\n",(0,t.jsxs)(o.p,{children:["The Go SDK integrates with the\n",(0,t.jsx)(o.a,{href:"https://github.com/francoispqt/onelog",children:(0,t.jsx)(o.code,{children:"onelog"})}),"\nproject, almost out of the box."]}),"\n",(0,t.jsx)(o.p,{children:"The project has chosen this library as:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"It works with WebAssembly binaries.\nOther popular logging solutions can't compile to target WebAssembly."}),"\n",(0,t.jsxs)(o.li,{children:["It provides ",(0,t.jsx)(o.a,{href:"https://github.com/francoispqt/onelog#benchmarks",children:"good performance"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"It supports structured logging."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"initialize-logger",children:"Initialize logger"}),"\n",(0,t.jsxs)(o.p,{children:["You need to initialize a logger structure.\nBy performing this initialization in a global variable,\nyou can log from the two main policy entry points: ",(0,t.jsx)(o.code,{children:"validate"})," and\n",(0,t.jsx)(o.code,{children:"validate_settings"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["In the main package, ",(0,t.jsx)(o.code,{children:"main.go"})," there is initialization for the logger:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:"var (\n    logWriter = kubewarden.KubewardenLogWriter{}\n    logger    = onelog.New(\n        &logWriter,\n        onelog.ALL, // shortcut for onelog.DEBUG|onelog.INFO|onelog.WARN|onelog.ERROR|onelog.FATAL\n    )\n)\n"})}),"\n",(0,t.jsx)(o.h2,{id:"consuming-the-logger",children:"Consuming the logger"}),"\n",(0,t.jsxs)(o.p,{children:["Now, you can use the ",(0,t.jsx)(o.code,{children:"logger"})," object to log from wherever required your policy:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n    // ...\n    logger.Info("validating request")\n    // ...\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"You can add structured logging:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n    // ...\n    logger.WarnWithFields("logging something important", func(e onelog.Entry) {\n        e.String("one_field", "a value")\n        e.String("another_field", "another value")\n    })\n    // ...\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["You can refer to the\n",(0,t.jsxs)(o.a,{href:"https://pkg.go.dev/github.com/francoispqt/onelog?utm_source=godoc",children:[(0,t.jsx)(o.code,{children:"onelog"})," documentation"]}),"\nfor more information."]}),"\n",(0,t.jsxs)(o.p,{children:["Policy logging goes to the policy evaluator\n(for example, ",(0,t.jsx)(o.code,{children:"kwctl"})," or ",(0,t.jsx)(o.code,{children:"policy-server"}),"),\nand they log on behalf of the policy.\nThey use mechanisms that are interoperable with other components that enable distributed tracing such as\n",(0,t.jsx)(o.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"."]})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>s});var i=n(96540);const t={},r=i.createContext(t);function l(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);