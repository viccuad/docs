"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[4796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},96064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={sidebar_label:"Context Aware Policies",title:""},l="Context aware policies",c={unversionedId:"writing-policies/spec/context-aware-policies",id:"version-1.7/writing-policies/spec/context-aware-policies",title:"",description:"The policy-server has capabilities to expose cluster information to",source:"@site/versioned_docs/version-1.7/writing-policies/spec/05-context-aware-policies.mdx",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/context-aware-policies",permalink:"/1.7/writing-policies/spec/context-aware-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/spec/05-context-aware-policies.mdx",tags:[],version:"1.7",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Context Aware Policies",title:""},sidebar:"docs",previous:{title:"Mutating Policies",permalink:"/1.7/writing-policies/spec/mutating-policies"},next:{title:"Host Capabilities Specification",permalink:"/1.7/writing-policies/spec/host-capabilities/intro-host-capabilities"}},u={},p=[{value:"ClusterAdmissionPolicies",id:"clusteradmissionpolicies",level:3},{value:"Testing context aware policies locally",id:"testing-context-aware-policies-locally",level:3},{value:"Language SDKs",id:"language-sdks",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context-aware-policies"},"Context aware policies"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server")," has capabilities to expose cluster information to\npolicies, so that they can take decisions based on other existing\nresources, and not only based on the details provided by the admission request."),(0,a.kt)("p",null,"The retrieval of Kubernetes resources is performed by the Policy Server hosting the policy.\nAccess to Kubernetes is regulated by RBAC rules applied to the Service Account used by the Policy Server."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," Policy Server deployed by Kubewarden helm charts has access to the following Kubernetes resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Namespaces"),(0,a.kt)("li",{parentName:"ul"},"Services"),(0,a.kt)("li",{parentName:"ul"},"Ingresses")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Access to Kubernetes resources is currently available only to Kubewarden policies written using traditional programming languages. This is not available yet for Rego-based policies.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The policy server performs caching of the results obtained from the Kubernetes API server to reduce the amount of load of this core piece of Kubernetes.\nThat means some information might be stale or missing.")),(0,a.kt)("h3",{id:"clusteradmissionpolicies"},"ClusterAdmissionPolicies"),(0,a.kt)("p",null,"ClusterAdmissionPolicies have the field ",(0,a.kt)("a",{parentName:"p",href:"https://doc.crds.dev/github.com/kubewarden/kubewarden-controller/policies.kubewarden.io/ClusterAdmissionPolicy/v1#spec-contextAwareResources"},"spec.contextAwareResources"),". This field provides a list a ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupVersionKind"),' resources that the policy needs to access. This allows policy writers to ship the "permissions" that the policy needs together with the policy. Moreover, this allows policy operators to review the "permissions" needed by the policy at deployment time.'),(0,a.kt)("h3",{id:"testing-context-aware-policies-locally"},"Testing context aware policies locally"),(0,a.kt)("p",null,"Apart from running policies in cluster for end-to-end tests, one can use our ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," CLI utility to run policies and mock requests against the cluster."),(0,a.kt)("p",null,"For that, ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl run")," can first record all the interactions with the cluster into a file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --record-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n")),(0,a.kt)("p",null,"which creates the following ",(0,a.kt)("inlineCode",{parentName:"p"},"replay-session.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# replay-session.yml\n---\n- type: Exchange\n  request: |\n    !KubernetesGetResource\n    api_version: /v1\n    kind: Pod\n    name: p-testing\n    namespace: local\n    disable_cache: true\n  response:\n    type: Success\n    payload: \'{"apiVersion":"","kind":"Pod", <snipped> }\'\n')),(0,a.kt)("p",null,"With the replay session, one can now mock the cluster interactions without the need\nof a cluster, perfect for CI and end-to-end tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kwctl run \\\n    --allow-context-aware \\\n    -r request.json \\\n    --replay-host-capabilities-interactions replay-session.yml \\\n    annotated-policy.wasm\n")),(0,a.kt)("h3",{id:"language-sdks"},"Language SDKs"),(0,a.kt)("p",null,"Language SDK's that support cluster context at this time will expose\nfunctions that allow policies to retrieve the current state of the\ncluster."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"rust",label:"Rust SDK",default:!0,mdxType:"TabItem"},"See the functions exposing this functionality at the ",(0,a.kt)("a",{href:"https://docs.rs/kubewarden-policy-sdk/0.8.7/kubewarden_policy_sdk"},"Rust SDK reference docs")),(0,a.kt)(i.Z,{value:"go",label:"Go SDK",mdxType:"TabItem"},"See the functions exposing this functionality at the ",(0,a.kt)("a",{href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go"},"Go SDK reference docs"))),(0,a.kt)("p",null,"If you want more information about the WaPC function used by the SDKs, check the ",(0,a.kt)("a",{parentName:"p",href:"/next/writing-policies/spec/host-capabilities/kubernetes"},"Kubernetes capabilities")," reference documentation."))}h.isMDXComponent=!0}}]);