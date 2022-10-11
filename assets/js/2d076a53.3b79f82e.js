"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1970],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return d}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(i),d=r,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8890:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=i(3117),r=i(102),a=(i(7294),i(3905)),o=["components"],s={sidebar_label:"Host Capabilities Specification",title:""},l="Host capabilities specification",c={unversionedId:"writing-policies/spec/host-capabilities/intro-host-capabilities",id:"writing-policies/spec/host-capabilities/intro-host-capabilities",title:"",description:"While being evaluated, Kubewarden policies can access extra capabilities offered",source:"@site/docs/writing-policies/spec/host-capabilities/01-intro-host-capabilities.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/intro-host-capabilities",permalink:"/writing-policies/spec/host-capabilities/intro-host-capabilities",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/host-capabilities/01-intro-host-capabilities.md",tags:[],version:"current",lastUpdatedAt:1665482672,formattedLastUpdatedAt:"Oct 11, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Host Capabilities Specification",title:""},sidebar:"docs",previous:{title:"Context Aware Policies",permalink:"/writing-policies/spec/context-aware-policies"},next:{title:"Signature Verifier Policies",permalink:"/writing-policies/spec/host-capabilities/signature-verifier-policies"}},p={},u=[],h={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"host-capabilities-specification"},"Host capabilities specification"),(0,a.kt)("p",null,"While being evaluated, Kubewarden policies can access extra capabilities offered\nby the host environment.\nThis mechanism uses an approach similar to traditional ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remote_procedure_call"},"RPC"),"."),(0,a.kt)("p",null,"This is what happens when a request is issued by a Kubewarden policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubewarden policy:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Invokes the capability offered by the host environment"),(0,a.kt)("li",{parentName:"ul"},"The invocation is a blocking operation, hence the policy code will wait until the\nhost provides an answer"))),(0,a.kt)("li",{parentName:"ul"},"Host environment:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A capability invocation is received"),(0,a.kt)("li",{parentName:"ul"},"The host performs the operation"),(0,a.kt)("li",{parentName:"ul"},"The host provides an answer to the policy, which could be either a success or a\nfailure"))),(0,a.kt)("li",{parentName:"ul"},"Kubewarden policy:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The code receives the answer from the host and resumes execution"),(0,a.kt)("li",{parentName:"ul"},"The host response is handled accordingly")))),(0,a.kt)("p",null,"The host capabilities feature is implemented using ",(0,a.kt)("a",{parentName:"p",href:"https://wapc.io/"},"waPC"),",\neach capability is expressed using these details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"waPC function name: name of the capability exposed by the host"),(0,a.kt)("li",{parentName:"ul"},"input payload: the body of the request made by the policy. This is always\nencoded using JSON format"),(0,a.kt)("li",{parentName:"ul"},"output payload: the body of the response coming from the host. This is\nalways encoded using JSON format")),(0,a.kt)("p",null,"When something goes wrong, the host will reply with an error . This is handled\nusing the idiomatic error type of the programming language used by the policy.\nThe error consists of a UTF-8 string that holds an explanation message."))}d.isMDXComponent=!0}}]);