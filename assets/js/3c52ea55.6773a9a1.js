"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(b,a(a({ref:t},c),{},{components:n})):i.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Network Capabilities",title:""},a="Network capabilities",l={unversionedId:"writing-policies/spec/host-capabilities/net",id:"version-1.9/writing-policies/spec/host-capabilities/net",title:"",description:"Kubewarden policies cannot make network request from within the WebAssembly",source:"@site/versioned_docs/version-1.9/writing-policies/spec/host-capabilities/04-net.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/net",permalink:"/writing-policies/spec/host-capabilities/net",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/spec/host-capabilities/04-net.md",tags:[],version:"1.9",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Network Capabilities",title:""},sidebar:"docs",previous:{title:"Container Registry Capabilities",permalink:"/writing-policies/spec/host-capabilities/container-registry"},next:{title:"Cryptographic Capabilities",permalink:"/writing-policies/spec/host-capabilities/crypto"}},s={},p=[{value:"DNS host lookup",id:"dns-host-lookup",level:2},{value:"Caching",id:"caching",level:3},{value:"Communication protocol",id:"communication-protocol",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network-capabilities"},"Network capabilities"),(0,r.kt)("p",null,"Kubewarden policies cannot make network request from within the WebAssembly\nexecution context."),(0,r.kt)("p",null,"Network operations can be done by leveraging a series of capabilities exposed\nby the host."),(0,r.kt)("h2",{id:"dns-host-lookup"},"DNS host lookup"),(0,r.kt)("p",null,"This function performs a DNS lookup starting from the FQDN given by the policy."),(0,r.kt)("h3",{id:"caching"},"Caching"),(0,r.kt)("p",null,"Lookup results are cached for 1 minute."),(0,r.kt)("h3",{id:"communication-protocol"},"Communication protocol"),(0,r.kt)("p",null,"This is the description of the waPC protocol used to expose this capability:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," waPC function name ")," ",(0,r.kt)("th",null," Input payload ")," ",(0,r.kt)("th",null," Output payload ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v1/dns_lookup_host"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},"# hostname - JSON encoded string\nstring\n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'\n{\n  # list of IPs\n  "ips": [string]\n}\n'))))),(0,r.kt)("p",null,"All the IPs associated with the given FQDN, are going to be returned as strings\ninside of the response. Both IPv4 and IPv6 entries are going to be returned as\npart of the same response."),(0,r.kt)("p",null,"For example, when requesting the manifest digest of the ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox:latest")," image,\nthe payload would be the following ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input payload: ",(0,r.kt)("inlineCode",{parentName:"li"},'"google.com"')),(0,r.kt)("li",{parentName:"ul"},"Output payload: ",(0,r.kt)("inlineCode",{parentName:"li"},'{ "ips": ["127.0.0.1"]}'))))}d.isMDXComponent=!0}}]);