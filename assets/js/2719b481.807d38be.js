"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Build and Run",title:""},l="Build and run",o={unversionedId:"writing-policies/rego/gatekeeper/build-and-run",id:"version-1.8/writing-policies/rego/gatekeeper/build-and-run",title:"",description:"Building and running the policy is done exactly the same way as a Rego",source:"@site/versioned_docs/version-1.8/writing-policies/rego/gatekeeper/03-build-and-run.md",sourceDirName:"writing-policies/rego/gatekeeper",slug:"/writing-policies/rego/gatekeeper/build-and-run",permalink:"/writing-policies/rego/gatekeeper/build-and-run",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.8/writing-policies/rego/gatekeeper/03-build-and-run.md",tags:[],version:"1.8",lastUpdatedAt:1699006582,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Build and Run",title:""},sidebar:"docs",previous:{title:"Create a New Policy",permalink:"/writing-policies/rego/gatekeeper/create-policy"},next:{title:"Distribute",permalink:"/writing-policies/rego/gatekeeper/distribute"}},p={},u=[{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-and-run"},"Build and run"),(0,i.kt)("p",null,"Building and running the policy is done exactly the same way as a Rego\npolicy targeting Open Policy Agent. The structure of our project is\nlike:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u2514\u2500\u2500 policy.rego\n\n1 directory, 3 files\n")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Let's build our policy by running the following ",(0,i.kt)("inlineCode",{parentName:"p"},"opa")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ opa build -t wasm -e policy/violation policy.rego\n")),(0,i.kt)("p",null,"What this does is build the rego policy, with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm"),". We want  to build the policy for the ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm")," target."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entrypoint"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"policy/violation"),". The entry point is the ",(0,i.kt)("inlineCode",{parentName:"li"},"violation"),"\nrule inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"policy")," package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policy.rego"),": build and include the ",(0,i.kt)("inlineCode",{parentName:"li"},"policy.rego")," file.")),(0,i.kt)("p",null,"The previous command generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle.tar.gz")," file. You can extract\nthe wasm module from it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -xf bundle.tar.gz /policy.wasm\n")),(0,i.kt)("p",null,"The project tree looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 bundle.tar.gz\n\u251c\u2500\u2500 data\n\u2502\xa0\xa0 \u251c\u2500\u2500 default-ns.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 other-ns.json\n\u251c\u2500\u2500 policy.rego\n\u2514\u2500\u2500 policy.wasm\n\n1 directory, 5 files\n")),(0,i.kt)("p",null,"We can now execute our policy!"),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl")," to run our policy as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ kwctl run -e gatekeeper --request-path data/other-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": true\n}\n')),(0,i.kt)("p",null,"Given that this is our resource created in the namespace called\n",(0,i.kt)("inlineCode",{parentName:"p"},"other"),", this resource is accepted, as expected."),(0,i.kt)("p",null,"Now let's execute a request that will be rejected by the policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ kwctl run -e gatekeeper --request-path data/default-ns.json policy.wasm | jq\n{\n  "uid": "1299d386-525b-4032-98ae-1949f69f9cfc",\n  "allowed": false,\n  "status": {\n    "message": "it is forbidden to use the default namespace"\n  }\n}\n')),(0,i.kt)("p",null,"As you can see, our Gatekeeper policy rejected this resource as expected."))}d.isMDXComponent=!0}}]);