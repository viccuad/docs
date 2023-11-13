"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1715],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return i?n.createElement(h,r(r({ref:t},c),{},{components:i})):n.createElement(h,r({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},99031:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const o={sidebar_label:"Introduction to WASI",title:""},r="WASI",s={unversionedId:"writing-policies/wasi/intro-wasi",id:"version-1.9/writing-policies/wasi/intro-wasi",title:"",description:"Regular policy authors should never use plain WASI system interfaces",source:"@site/versioned_docs/version-1.9/writing-policies/wasi/01-intro-wasi.md",sourceDirName:"writing-policies/wasi",slug:"/writing-policies/wasi/intro-wasi",permalink:"/writing-policies/wasi/intro-wasi",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/wasi/01-intro-wasi.md",tags:[],version:"1.9",lastUpdatedAt:1699878380,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to WASI",title:""},sidebar:"docs",previous:{title:"TypeScript",permalink:"/writing-policies/typescript"},next:{title:"Raw policies",permalink:"/writing-policies/wasi/raw-policies"}},l={},p=[{value:"Limitations",id:"limitations",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Communication protocol",id:"communication-protocol",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Settings validation",id:"settings-validation",level:3},{value:"Policy metadata",id:"policy-metadata",level:2},{value:"Template project",id:"template-project",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wasi"},"WASI"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Regular policy authors should never use plain WASI system interfaces\nto write policies."),(0,a.kt)("p",{parentName:"admonition"},"This page is meant to be used by Kubewarden maintainers/low level\npolicy authors who want to experiment with bleeding edge WASM platforms.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Kubewarden WASI policies are supported starting from Kubewarden 1.7.0 release")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wasi.dev/"},"WASI")," is a WebAssembly standard that provides a set of\ninterfaces that allow the execution of WebAssembly outside of the browser."),(0,a.kt)("p",null,"Thanks to WASI, it's possible to have a WebAssembly module that interacts\nwith system primitives like STDOUT, STDERR, STDIN, environment variables and\nmore."),(0,a.kt)("p",null,"Actually, many of the compilers used to compile Kubewarden policies\nproduce WebAssembly modules that targets the WASI interfaces.\nHowever, Kubewarden policies leverage the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wapc"},"waPC"),"\nproject to implement a bi-directional communication between the\npolicy and the policy runtime (",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server"),"); this communication\nprotocol is described ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/spec/intro-spec"},"here"),"."),(0,a.kt)("p",null,"There are however some special cases when the waPC project cannot be\nused yet. In these limited circumstances it's possible to write a policy\njust by using the interfaces provided by WASI."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"WASI policies should not be used under regular circumstances because\nthey suffer from the following limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No bi-directional communication, hence\n",(0,a.kt)("a",{parentName:"li",href:"/writing-policies/spec/host-capabilities/intro-host-capabilities"},"host capabilities"),"\nare not available"),(0,a.kt)("li",{parentName:"ul"},"No ",(0,a.kt)("a",{parentName:"li",href:"/explanations/context-aware-policies"},"context-aware")," capabilities"),(0,a.kt)("li",{parentName:"ul"},"Inferior performance at evaluation time compared to waPC/Rego based policies")),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,'The only reason to write a "plain WASI" policy is when the waPC communication\nmechanism cannot be leveraged.'),(0,a.kt)("p",null,"Currently (as of June 2023), the only good reason to do that is when using the\nofficial Go compiler to produce a WebAssembly module."),(0,a.kt)("p",null,"Starting from the 1.21 release, the official Go compiler is able to produce WebAssembly\nmodules targeting the WASI interface. However, these modules cannot yet\nexport functions to the WebAssembly runtime. This limitation, tracked by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/issues/42372"},"this dedicated issue"),", prevents\nthe adoption of the waPC protocol."),(0,a.kt)("p",null,"Generally speaking, we advice to write Kubewarden Go policies using the TinyGo\ncompiler, as described ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/go/intro-go"},"here"),"."),(0,a.kt)("p",null,"However, some complex Go code bases cannot be compiled using the TinyGo compiler.\nThis includes, for example, code bases like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cel-go"},"CEL-go"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kyverno/kyverno/"},"kyverno"),". In these circumstances, the\nusage of the official Go compiler can be beneficial."),(0,a.kt)("h2",{id:"communication-protocol"},"Communication protocol"),(0,a.kt)("p",null,"This section describes how to write a plain WASI policy."),(0,a.kt)("p",null,"The code has to be written as a regular CLI program. The program must take\nthe following subcommands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate"),": this command is invoked by the policy engine to evaluate\nan admission request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate-settings"),": this command is invoked by the policy engine to\nvalidate the policy settings")),(0,a.kt)("p",null,"In both cases, the data to be validated is provided via the STDIN. The policy\nmust provide the answer via the STDOUT.\nThe STDERR can be used to provide debug or error messages."),(0,a.kt)("h3",{id:"validation"},"Validation"),(0,a.kt)("p",null,"The validation of a request is done when the policy CLI program is invoked using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," subcommand."),(0,a.kt)("p",null,"The STDIN must contain a JSON document describing a ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," object.\nThe policy must to write to the STDOUT a JSON document that contains a\n",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object."),(0,a.kt)("p",null,"Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," objects are described\n",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/spec/validating-policies"},"here"),"."),(0,a.kt)("h3",{id:"mutation"},"Mutation"),(0,a.kt)("p",null,"Mutating policies work in the same way as validating ones. The policy CLI program\nis invoked using the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," subcommand."),(0,a.kt)("p",null,"The STDIN must contain a JSON document describing a ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," object.\nThe policy must to write to the STDOUT a JSON document that contains a\n",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object."),(0,a.kt)("p",null,"Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," objects are described\n",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/spec/validating-policies"},"here"),"."),(0,a.kt)("p",null,"When a mutation has to be done, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object must have a\nkey ",(0,a.kt)("inlineCode",{parentName:"p"},"mutated_object")," that contains the object that has to be created.\nThis is described ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/spec/mutating-policies"},"here"),"."),(0,a.kt)("h3",{id:"settings-validation"},"Settings validation"),(0,a.kt)("p",null,"The policy must provide a subcommand named ",(0,a.kt)("inlineCode",{parentName:"p"},"validate-settings"),". This command\nis used to validate the settings that have been provided by the user."),(0,a.kt)("p",null,"The program must receive on the STDIN a JSON object that holds the settings\nprovided by the user.\nIt will then validate them and write a ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object\nto the STDOUT."),(0,a.kt)("p",null,"The format of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," and the settings validation\nprocess is described ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/spec/settings"},"here"),"."),(0,a.kt)("h2",{id:"policy-metadata"},"Policy metadata"),(0,a.kt)("p",null,"Each Kubewarden policy must be annotated via the ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl annotate")," command.\nThe policy metadata of a plain WASI policy must provide this value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"executionMode: wasi\n")),(0,a.kt)("h2",{id:"template-project"},"Template project"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-wasi-policy-template"},"This GitHub repository"),"\ncontains a template of a Go-based policy that leverages the WASI protocol."))}u.isMDXComponent=!0}}]);