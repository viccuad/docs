"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Raw policies",title:"Raw policies"},o="Writing raw policies",l={unversionedId:"writing-policies/rego/open-policy-agent/raw-policies",id:"writing-policies/rego/open-policy-agent/raw-policies",title:"Raw policies",description:"Raw policies are policies that can evaluate arbitrary JSON documents.",source:"@site/docs/writing-policies/rego/open-policy-agent/05-raw-policies.md",sourceDirName:"writing-policies/rego/open-policy-agent",slug:"/writing-policies/rego/open-policy-agent/raw-policies",permalink:"/next/writing-policies/rego/open-policy-agent/raw-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/open-policy-agent/05-raw-policies.md",tags:[],version:"current",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Raw policies",title:"Raw policies"},sidebar:"docs",previous:{title:"Distribute",permalink:"/next/writing-policies/rego/open-policy-agent/distribute"},next:{title:"Introduction",permalink:"/next/writing-policies/rego/gatekeeper/intro"}},p={},s=[{value:"Example",id:"example",level:2},{value:"Validation",id:"validation",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-raw-policies"},"Writing raw policies"),(0,r.kt)("p",null,"Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/next/howtos/raw-policies"},"raw policies")," page."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following examples should look familiar if you completed the ",(0,r.kt)("a",{parentName:"p",href:"/next/writing-policies/rego/open-policy-agent/create-policy"},"validation")," page of this tutorial."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Remember to mark the policy as ",(0,r.kt)("inlineCode",{parentName:"p"},"raw")," by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"policyType")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.yml")," configuration.\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"/next/writing-policies/metadata"},"metadata")," specification for more information.")),(0,r.kt)("h3",{id:"validation"},"Validation"),(0,r.kt)("p",null,"We are going to write a policy that accepts a request in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "user": "alice",\n    "action": "read",\n    "resource": "products"\n  }\n}\n')),(0,r.kt)("p",null,"and validates that only the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user can delete resources."),(0,r.kt)("p",null,"Let's start by scaffolding a policy by using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/opa-policy-template"},"OPA policy template"),"."),(0,r.kt)("p",null,"First, we need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.rego")," file to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rego"},'package validation\n\ndeny[msg] {\n    input.request.action == "delete"\n    input.request.user != "admin"\n    msg := sprintf("user %v is not allowed to delete resources", [input.request.user])\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"utility/policy.rego")," module must be modified to remove Kubernetes-specific code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rego"},'package policy\n\nimport data.validation\n\nmain = {\n    "response": response,\n}\n\n// highlight-start\n# OPA policy responses need the uid field to be set.\n# If the request doesn\'t contain a uid, set it to an empty string.\ndefault uid = ""\n\nuid = input.request.uid\n// highlight-end\n\nresponse = {\n    "uid": uid,\n    "allowed": false,\n    "status": {"message": reason},\n} {\n    reason = concat(", ", validation.deny)\n    reason != ""\n} else = {\n    "uid": uid,\n    "allowed": true,\n} {\n    true\n}\n')))}d.isMDXComponent=!0}}]);