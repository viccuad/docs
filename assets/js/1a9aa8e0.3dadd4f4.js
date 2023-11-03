"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Validating Policies",title:""},a="Validating policies",s={unversionedId:"writing-policies/spec/validating-policies",id:"version-1.7/writing-policies/spec/validating-policies",title:"",description:"The Kubewarden policy server receives",source:"@site/versioned_docs/version-1.7/writing-policies/spec/03-validating-policies.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/validating-policies",permalink:"/1.7/writing-policies/spec/validating-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.7/writing-policies/spec/03-validating-policies.md",tags:[],version:"1.7",lastUpdatedAt:1699006582,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Validating Policies",title:""},sidebar:"docs",previous:{title:"Policy Settings",permalink:"/1.7/writing-policies/spec/settings"},next:{title:"Mutating Policies",permalink:"/1.7/writing-policies/spec/mutating-policies"}},l={},c=[{value:"The <code>ValidationRequest</code> object",id:"the-validationrequest-object",level:2},{value:"A concrete example",id:"a-concrete-example",level:3},{value:"The <code>ValidationResponse</code> object",id:"the-validationresponse-object",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validating-policies"},"Validating policies"),(0,o.kt)("p",null,"The Kubewarden policy server receives\n",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/k8s.io/api/admission/v1#AdmissionReview"},(0,o.kt)("inlineCode",{parentName:"a"},"AdmissionReview")),"\nobjects from the Kubernetes API server. It then forwards the value of\nits ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," attribute (of type\n",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/k8s.io/api/admission/v1#AdmissionRequest"},(0,o.kt)("inlineCode",{parentName:"a"},"AdmissionRequest")),"\nkey to the policy to be evaluated."),(0,o.kt)("p",null,"The policy has to evaluate the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," and state whether it should be\naccepted or not. When the request is rejected, the policy might provide the\nexplanation message and a specific error code that is going to be shown to the end user."),(0,o.kt)("p",null,"By convention of the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," project, the guest has to expose\na function named ",(0,o.kt)("inlineCode",{parentName:"p"},"validate"),", exposed through the waPC guest SDK, so\nthat the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy-server")," (waPC host) can invoke it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," function receives a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," object serialized as JSON and\nreturns a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object serialized as JSON."),(0,o.kt)("h2",{id:"the-validationrequest-object"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"ValidationRequest")," object"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," is a simple JSON object that is received by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," function. It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "request": <AdmissionReview.request data>,\n  "settings": {\n    # your policy configuration\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"settings")," key points to a free-form JSON document that can hold the policy\nspecific settings. The previous chapter focused on policies and settings."),(0,o.kt)("h3",{id:"a-concrete-example"},"A concrete example"),(0,o.kt)("p",null,"Given the following Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"AdmissionReview"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    # Random uid uniquely identifying this admission call\n    "uid": "705ab4f5-6393-11e8-b7cc-42010a800002",\n\n    # Fully-qualified group/version/kind of the incoming object\n    "kind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified\n    "resource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    "subResource": "scale",\n\n    # Fully-qualified group/version/kind of the incoming object in the original request to the API server.\n    # This only differs from `kind` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestKind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified in the original request to the API server.\n    # This only differs from `resource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestResource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    # This only differs from `subResource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestSubResource": "scale",\n\n    # Name of the resource being modified\n    "name": "my-deployment",\n    # Namespace of the resource being modified, if the resource is namespaced (or is a Namespace object)\n    "namespace": "my-namespace",\n\n    # operation can be CREATE, UPDATE, DELETE, or CONNECT\n    "operation": "UPDATE",\n\n    "userInfo": {\n      # Username of the authenticated user making the request to the API server\n      "username": "admin",\n      # UID of the authenticated user making the request to the API server\n      "uid": "014fbff9a07c",\n      # Group memberships of the authenticated user making the request to the API server\n      "groups": ["system:authenticated","my-admin-group"],\n      # Arbitrary extra info associated with the user making the request to the API server.\n      # This is populated by the API server authentication layer and should be included\n      # if any SubjectAccessReview checks are performed by the webhook.\n      "extra": {\n        "some-key":["some-value1", "some-value2"]\n      }\n    },\n\n    # object is the new object being admitted.\n    # It is null for DELETE operations.\n    "object": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # oldObject is the existing object.\n    # It is null for CREATE and CONNECT operations.\n    "oldObject": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # options contains the options for the operation being admitted, like meta.k8s.io/v1 CreateOptions, UpdateOptions, or DeleteOptions.\n    # It is null for CONNECT operations.\n    "options": {"apiVersion":"meta.k8s.io/v1","kind":"UpdateOptions",...},\n\n    # dryRun indicates the API request is running in dry run mode and will not be persisted.\n    # Webhooks with side effects should avoid actuating those side effects when dryRun is true.\n    # See http://k8s.io/docs/reference/using-api/api-concepts/#make-a-dry-run-request for more details.\n    "dryRun": false\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," object would look like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "request": {\n    # Random uid uniquely identifying this admission call\n    "uid": "705ab4f5-6393-11e8-b7cc-42010a800002",\n\n    # Fully-qualified group/version/kind of the incoming object\n    "kind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified\n    "resource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    "subResource": "scale",\n\n    # Fully-qualified group/version/kind of the incoming object in the original request to the API server.\n    # This only differs from `kind` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestKind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified in the original request to the API server.\n    # This only differs from `resource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestResource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    # This only differs from `subResource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestSubResource": "scale",\n\n    # Name of the resource being modified\n    "name": "my-deployment",\n    # Namespace of the resource being modified, if the resource is namespaced (or is a Namespace object)\n    "namespace": "my-namespace",\n\n    # operation can be CREATE, UPDATE, DELETE, or CONNECT\n    "operation": "UPDATE",\n\n    "userInfo": {\n      # Username of the authenticated user making the request to the API server\n      "username": "admin",\n      # UID of the authenticated user making the request to the API server\n      "uid": "014fbff9a07c",\n      # Group memberships of the authenticated user making the request to the API server\n      "groups": ["system:authenticated","my-admin-group"],\n      # Arbitrary extra info associated with the user making the request to the API server.\n      # This is populated by the API server authentication layer and should be included\n      # if any SubjectAccessReview checks are performed by the webhook.\n      "extra": {\n        "some-key":["some-value1", "some-value2"]\n      }\n    },\n\n    # object is the new object being admitted.\n    # It is null for DELETE operations.\n    "object": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # oldObject is the existing object.\n    # It is null for CREATE and CONNECT operations.\n    "oldObject": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # options contains the options for the operation being admitted, like meta.k8s.io/v1 CreateOptions, UpdateOptions, or DeleteOptions.\n    # It is null for CONNECT operations.\n    "options": {"apiVersion":"meta.k8s.io/v1","kind":"UpdateOptions",...},\n\n    # dryRun indicates the API request is running in dry run mode and will not be persisted.\n    # Webhooks with side effects should avoid actuating those side effects when dryRun is true.\n    # See http://k8s.io/docs/reference/using-api/api-concepts/#make-a-dry-run-request for more details.\n    "dryRun": false\n  },\n  "settings": {\n    # policy settings\n  }\n}\n')),(0,o.kt)("h2",{id:"the-validationresponse-object"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"ValidationResponse")," object"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," function returns the outcome of its validation using a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationResponse"),"\nobject."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," is structured in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  # mandatory\n  "accepted": <boolean>,\n\n  # optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n\n  # optional, ignored if accepted\n  "code": <integer>,\n\n  # optional, used by mutation policies\n  "mutated_object": <string>\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," attributes can be specified when the request\nis not accepted. ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," is a free form textual error. ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"\nrepresents an HTTP error code."),(0,o.kt)("p",null,"If the request is accepted, ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"\nvalues will be ignored by the Kubernetes API server if they are\npresent."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," are provided, and the request is not\naccepted, the Kubernetes API server will forward this information as\npart of the body of the error returned to the Kubernetes API server\nclient that issued the rejected request."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mutated_object")," is an optional field used only by mutating policies.\nThis is going to be covered inside of the next chapter."),(0,o.kt)("h1",{id:"recap"},"Recap"),(0,o.kt)("p",null,"These are the functions a validating policy must implement:"))}p.isMDXComponent=!0}}]);