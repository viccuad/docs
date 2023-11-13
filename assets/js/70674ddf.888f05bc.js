"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var g=2;g<o;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"Logging",title:""},a="Logging",l={unversionedId:"writing-policies/rust/logging",id:"version-1.7/writing-policies/rust/logging",title:"",description:"You can perform logging in your policy, so the policy-server or kwctl will forward those log",source:"@site/versioned_docs/version-1.7/writing-policies/rust/06-logging.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/logging",permalink:"/1.7/writing-policies/rust/logging",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/rust/06-logging.md",tags:[],version:"1.7",lastUpdatedAt:1699878380,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Logging",title:""},sidebar:"docs",previous:{title:"Creating a new mutation policy",permalink:"/1.7/writing-policies/rust/mutation-policy"},next:{title:"Building & Distributing Policies",permalink:"/1.7/writing-policies/rust/build-and-distribute"}},s={},g=[{value:"Initialize logger",id:"initialize-logger",level:2},{value:"Consuming the logger",id:"consuming-the-logger",level:2}],c={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logging"},"Logging"),(0,i.kt)("p",null,"You can perform logging in your policy, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy-server")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," will forward those log\nentries with the appropriate information."),(0,i.kt)("p",null,"The logging library chosen for the Rust SDK is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/slog-rs/slog"},(0,i.kt)("inlineCode",{parentName:"a"},"slog")),", as it is a\nwell known crate and integrates in a very straightforward way with Kubewarden."),(0,i.kt)("h2",{id:"initialize-logger"},"Initialize logger"),(0,i.kt)("p",null,"We recommend that you create a global sink where you can log from where you need within your policy. For this, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy_static")," crate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use slog::{o, Logger};\n\nlazy_static! {\n    static ref LOG_DRAIN: Logger = Logger::root(\n        logging::KubewardenDrain::new(),\n        o!("policy" => "sample-policy")\n    );\n}\n')),(0,i.kt)("h2",{id:"consuming-the-logger"},"Consuming the logger"),(0,i.kt)("p",null,"Now, from within our ",(0,i.kt)("inlineCode",{parentName:"p"},"validate"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"validate_settings")," functions, we are able to log using the macros exported by ",(0,i.kt)("inlineCode",{parentName:"p"},"slog")," that match each supported logging level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use slog::{info, o, warn, Logger};\n\nfn validate(payload: &[u8]) -> CallResult {\n    // ...\n    info!(LOG_DRAIN, "starting validation");\n    // ...\n    warn!(\n        LOG_DRAIN, "structured log";\n        "some_resource_name" => &some_resource_name\n    );\n    // ...\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"slog")," library will send all logs to the drain we initialized in the global variable, that will\nget sinked to the policy evaluator executing the policy, ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy-server"),". Then the\npolicy evaluator will log this information, adding more contextual information it knows about, such\nas the Kubernetes request ",(0,i.kt)("inlineCode",{parentName:"p"},"uid"),"."),(0,i.kt)("p",null,"More information about the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/slog/2.7.0/slog/macro.log.html"},"logging macros")," offered\nby slog can be found inside of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/slog/2.7.0/slog/index.html"},"its documentation"),"."))}u.isMDXComponent=!0}}]);