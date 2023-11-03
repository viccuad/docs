"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1575],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>b});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(i),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return i?n.createElement(b,a(a({ref:t},c),{},{components:i})):n.createElement(b,a({ref:t},c))}));function b(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},23291:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const o={sidebar_label:"Building & Distributing Policies",title:""},a=void 0,l={unversionedId:"writing-policies/rust/build-and-distribute",id:"version-1.9/writing-policies/rust/build-and-distribute",title:"",description:"Building the policy",source:"@site/versioned_docs/version-1.9/writing-policies/rust/07-build-and-distribute.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/build-and-distribute",permalink:"/writing-policies/rust/build-and-distribute",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/rust/07-build-and-distribute.md",tags:[],version:"1.9",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"Building & Distributing Policies",title:""},sidebar:"docs",previous:{title:"Logging",permalink:"/writing-policies/rust/logging"},next:{title:"Raw policies",permalink:"/writing-policies/rust/raw-policies"}},s={},u=[{value:"Building the policy",id:"building-the-policy",level:2},{value:"Distributing the policy",id:"distributing-the-policy",level:2},{value:"More examples",id:"more-examples",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"building-the-policy"},"Building the policy"),(0,r.kt)("p",null,"So far we have built the policy using as a compilation target the same operating\nsystem and architecture of our development machine."),(0,r.kt)("p",null,"It's now time to build the policy as a WebAssembly binary, also known as ",(0,r.kt)("inlineCode",{parentName:"p"},".wasm"),"\nfile."),(0,r.kt)("p",null,"This can be done with a simple command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make policy.wasm\n")),(0,r.kt)("p",null,"This command will build the code in release mode, with WebAssembly as\ncompilation target."),(0,r.kt)("p",null,"The build will produce the following file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ file target/wasm32-wasi/release/demo.wasm\ntarget/wasm32-wasi/release/demo.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)\n")),(0,r.kt)("h2",{id:"distributing-the-policy"},"Distributing the policy"),(0,r.kt)("p",null,"This topic is covered inside of the ",(0,r.kt)("a",{parentName:"p",href:"/distributing-policies"},"distributing\npolicies")," section of Kubewarden's\ndocumentation."),(0,r.kt)("h2",{id:"more-examples"},"More examples"),(0,r.kt)("p",null,"You can find more Kubewarden policies written in Rust inside of Kubewarden's\nGitHub space. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?l=Rust&q=topic%3Apolicy-as-code+org%3Akubewarden&type=Repositories"},"This query"),"\ncan help you find them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Worth of note:")," these repositories have a series of GitHub Actions that automate\nthe following tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run unit tests and code linting on pull requests and after code is merged\ninto the main branch"),(0,r.kt)("li",{parentName:"ul"},"Build the policy in ",(0,r.kt)("inlineCode",{parentName:"li"},"release")," mode and push it to a OCI registry as an\nartifact")))}d.isMDXComponent=!0}}]);