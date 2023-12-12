"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8659],{81144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(85893),o=t(11151);const a={sidebar_label:"Create a New Policy",title:""},s="Creating a new validation policy",l={id:"writing-policies/go/scaffold",title:"",description:"We are going to create a policy that validates the labels of Pod",source:"@site/versioned_docs/version-1.7/writing-policies/go/02-scaffold.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/scaffold",permalink:"/1.7/writing-policies/go/scaffold",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/go/02-scaffold.md",tags:[],version:"1.7",lastUpdatedAt:1702388605,formattedLastUpdatedAt:"Dec 12, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Create a New Policy",title:""},sidebar:"docs",previous:{title:"Introduction to Go",permalink:"/1.7/writing-policies/go/intro-go"},next:{title:"Define Policy Settings",permalink:"/1.7/writing-policies/go/policy-settings"}},r={},c=[{value:"Scaffolding new policy project",id:"scaffolding-new-policy-project",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-a-new-validation-policy",children:"Creating a new validation policy"}),"\n",(0,i.jsx)(n.p,{children:"We are going to create a policy that validates the labels of Pod\nobjects."}),"\n",(0,i.jsx)(n.p,{children:"The policy will reject all the Pods that use one or more labels on the deny list.\nThe policy will also validate certain labels using a regular expression\nprovided by the user."}),"\n",(0,i.jsx)(n.p,{children:"To summarize, the policy settings will look like that:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# List of labels that cannot be used\ndenied_labels:\n- foo\n- bar\n\n# Labels that are validated with user-defined regular expressions\nconstrained_labels:\n  priority: "[123]"\n  cost-center: "^cc-\\d+"\n'})}),"\n",(0,i.jsx)(n.p,{children:"The policy would reject the creation of this Pod:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    foo: hello world\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"The policy would also reject the creation of this Pod:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    cost-center: cc-marketing\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"Policy's settings can also be used to force certain labels to be specified,\nregardless of their contents:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# Policy's settings\n\nconstrained_labels:\n  mandatory-label: \".*\" # <- this label must be present, we don't care about its value\n"})}),"\n",(0,i.jsx)(n.h2,{id:"scaffolding-new-policy-project",children:"Scaffolding new policy project"}),"\n",(0,i.jsxs)(n.p,{children:["The creation of a new policy project can be done by using this GitHub\ntemplate repository: ",(0,i.jsx)(n.a,{href:"https://github.com/kubewarden/go-policy-template",children:"kubewarden/go-policy-template"}),'.\nJust press the "Use  this template" green button near the top of the page\nand follow GitHub\'s wizard.']}),"\n",(0,i.jsxs)(n.p,{children:["Clone the repository locally and then ensure the ",(0,i.jsx)(n.code,{children:"module"})," directive inside\nof the ",(0,i.jsx)(n.code,{children:"go.mod"})," file looks like that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go-mod",children:"module <path to your repository>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);