"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(3117),a=(n(7294),n(3905));const r={sidebar_label:"Policy Settings",title:""},o="Policy settings",s={unversionedId:"writing-policies/spec/settings",id:"writing-policies/spec/settings",title:"",description:"Policy behaviour is not set in stone, it can be configured by providing configuration",source:"@site/docs/writing-policies/spec/02-settings.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/settings",permalink:"/writing-policies/spec/settings",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/02-settings.md",tags:[],version:"current",lastUpdatedAt:1669039588,formattedLastUpdatedAt:"Nov 21, 2022",sidebarPosition:2,frontMatter:{sidebar_label:"Policy Settings",title:""},sidebar:"docs",previous:{title:"Policy Communication Specification",permalink:"/writing-policies/spec/intro-spec"},next:{title:"Validating Policies",permalink:"/writing-policies/spec/validating-policies"}},l={},p=[{value:"Settings validation",id:"settings-validation",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"policy-settings"},"Policy settings"),(0,a.kt)("p",null,"Policy behaviour is not set in stone, it can be configured by providing configuration\ndetails to the policy at runtime. The policy author has full freedom to define\nthe structure of the policy settings."),(0,a.kt)("p",null,"Kubewarden takes care of serializing the policy settings into JSON and provide\nthem to the policy every time it is invoked."),(0,a.kt)("h2",{id:"settings-validation"},"Settings validation"),(0,a.kt)("p",null,"Some policies might want to validate the settings a user provides to ensure\nthey are correct."),(0,a.kt)("p",null,"Each policy must register a waPC function called ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_settings")," that\ntakes care of validating the policy settings."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_settings")," function receives as input a JSON representation of\nthe settings provided by the user. The function validates them and returns\nas a response a ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object."),(0,a.kt)("p",null,"The structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object is the following one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  # mandatory\n  "valid": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n}\n')),(0,a.kt)("p",null,"If the user provided settings are ",(0,a.kt)("inlineCode",{parentName:"p"},"valid"),", the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," are ignored.\nOtherwise the contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," are shown to the user."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Kubewarden's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chimera-kube/policy-server"},"policy-server"),"\nvalidates all the policy settings provided by users at start time.\nThe policy-server exits immediately with an error if at least one of its\npolicies received wrong configuration parameters.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's take as an example the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/psp-capabilities"},"psp-capabilities"),"\npolicy which has the following configuration format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"allowed_capabilities:\n- CHOWN\n\nrequired_drop_capabilities:\n- NET_ADMIN\n\ndefault_add_capabilities:\n- KILL\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_settings")," function will receive as input the following JSON\ndocument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowed_capabilities": [\n    "CHOWN"\n  ],\n  "required_drop_capabilities": [\n    "NET_ADMIN"\n  ],\n  "default_add_capabilities": [\n    "KILL"\n  ]\n}\n')),(0,a.kt)("h1",{id:"recap"},"Recap"),(0,a.kt)("p",null,"Each policy must register a waPC function called ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_settings")," that has\nthe following API:"))}d.isMDXComponent=!0}}]);