"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7044],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=r,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return t?i.createElement(d,o(o({ref:n},u),{},{components:t})):i.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3344:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=["components"],l={sidebar_label:"Verification Config",title:""},s="Verification Config",c={unversionedId:"operator-manual/verification-config",id:"operator-manual/verification-config",title:"",description:"Example",source:"@site/docs/operator-manual/verification-config.md",sourceDirName:"operator-manual",slug:"/operator-manual/verification-config",permalink:"/operator-manual/verification-config",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/verification-config.md",tags:[],version:"current",lastUpdatedAt:1665482672,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{sidebar_label:"Verification Config",title:""},sidebar:"docs",previous:{title:"Custom Resources Definitions (CRDs)",permalink:"/operator-manual/CRDs"},next:{title:"Introduction to Monitor Mode",permalink:"/operator-manual/monitor-mode/intro"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Format",id:"format",level:2}],f={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verification-config"},"Verification Config"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here you can see an example of a configuration for verifying\nsignatures using the Sigstore workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\n\nallOf:\n  - kind: githubAction\n    owner: kubewarden   # mandatory\n    repo: policy-server # optional\n    annotations:  # optional\n      env: prod\n\nanyOf: # at least `anyOf.minimumMatches` are required to match\n  minimumMatches: 2 # default is 1\n  signatures:\n  - kind: pubKey\n    owner: alice # optional\n    key: | # mandatory\n         -----BEGIN PUBLIC KEY-----\n         MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEQiTy5S+2JFvVlhUwWPLziM7iTM2j\n         byLgh2IjpNQN0Uio/9pZOTP/CsJmXoUNshfpTUHd3OxgHgz/6adtf2nBwQ==\n         -----END PUBLIC KEY-----\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://github.com/login/oauth\n    subject:\n      equal: alice@example.com\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      equal: https://github.com/bob/app-example/.github/workflows/release.yml@refs/heads/main\n    annotations:  # optional\n      env: prod\n  - kind: genericIssuer\n    issuer: https://token.actions.githubusercontent.com\n    subject:\n      urlPrefix: https://github.com/bob # <- it will be post-fixed with `/` for security reasons\n")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"The config has 2 root keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allOf"),": All verification info listed here must be satisfied for accepting a\ncontainer image as signed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"anyOf"),": At least ",(0,a.kt)("inlineCode",{parentName:"li"},"anyOf.minimumMatches")," of all info listed here must be\nsatisfied for accepting a container image as signed.")),(0,a.kt)("p",null,"These two root keys accept an array of keys of type ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),".\nA full list of accepted keys based on different use cases is given below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pubKey"),": for signatures performed with traditional public/private key\ncryptography."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"githubAction"),": for signatures performed with Sigstore's keyless workflow\ninside GitHub Actions. Kubewarden checks this information against the x509\ncertificate extension ",(0,a.kt)("inlineCode",{parentName:"li"},"workflow_repository")," created by the OpenID Connect of\nGithub, and not only the ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"subject"),". Hence, it is strongly\nrecommended to use this ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," if dealing with GitHub Actions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"genericIssuer"),": for signatures performed with Sigstore's keyless worfklow,\nwhere the user needs to validate the certificate ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"subject")," on\ntheir own.\nIt accepts a ",(0,a.kt)("inlineCode",{parentName:"li"},"subject"),", which can be:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equal"),": the value passed here must match exactly against the ",(0,a.kt)("inlineCode",{parentName:"li"},"subject")," in\nthe signing certificate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"urlPrefix"),": the value passed here is post-fixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," to prevent\ntypo-squatting, and must be a prefix of the ",(0,a.kt)("inlineCode",{parentName:"li"},"subject")," in the signing\ncertificate.")))),(0,a.kt)("p",null,"the ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," key optionally accepts an ",(0,a.kt)("inlineCode",{parentName:"p"},"annotations")," key, with a list of\nkey-values, that must be present in the signature."))}m.isMDXComponent=!0}}]);