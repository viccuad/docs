"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?i.createElement(b,a(a({ref:t},u),{},{components:r})):i.createElement(b,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=r(3117),n=(r(7294),r(3905));const o={sidebar_label:"Distributing Policy",title:""},a="Distribute policy",l={unversionedId:"writing-policies/go/distribute",id:"writing-policies/go/distribute",title:"",description:"Congratulations for having made this far \ud83c\udf89\ud83c\udf89\ud83c\udf89",source:"@site/docs/writing-policies/go/08-distribute.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/distribute",permalink:"/writing-policies/go/distribute",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/08-distribute.md",tags:[],version:"current",lastUpdatedAt:1669039588,formattedLastUpdatedAt:"Nov 21, 2022",sidebarPosition:8,frontMatter:{sidebar_label:"Distributing Policy",title:""},sidebar:"docs",previous:{title:"GitHub Action Integration",permalink:"/writing-policies/go/automate"},next:{title:"Validate doing JSON queries",permalink:"/writing-policies/go/validation-with-queries"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"distribute-policy"},"Distribute policy"),(0,n.kt)("p",null,"Congratulations for having made this far \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,n.kt)("p",null,"We hope you enjoyed the journey!"),(0,n.kt)("p",null,"In case you haven't realized, we actually created the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/safe-labels-policy"},"safe-labels-policy"),"\ntogether."),(0,n.kt)("p",null,"There's nothing special to be done when it comes to distributing the\npolicy. If you followed this guide you have already published\nyour policy using the GitHub ",(0,n.kt)("inlineCode",{parentName:"p"},"release.yml")," Action defined in the previous\nchapter."),(0,n.kt)("p",null,"The topic of distributing policies is covered in depth inside of the\n",(0,n.kt)("a",{parentName:"p",href:"/distributing-policies"},'"distributing policies"'),"\nsection of Kubewarden's documentation."))}p.isMDXComponent=!0}}]);