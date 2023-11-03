"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Signature Verifier Policies",title:""},s="Signature verifier policies",o={unversionedId:"writing-policies/spec/host-capabilities/signature-verifier-policies",id:"version-1.9/writing-policies/spec/host-capabilities/signature-verifier-policies",title:"",description:"Kubewarden implements support for the Sigstore",source:"@site/versioned_docs/version-1.9/writing-policies/spec/host-capabilities/02-signature-verifier-policies.md",sourceDirName:"writing-policies/spec/host-capabilities",slug:"/writing-policies/spec/host-capabilities/signature-verifier-policies",permalink:"/writing-policies/spec/host-capabilities/signature-verifier-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/spec/host-capabilities/02-signature-verifier-policies.md",tags:[],version:"1.9",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Signature Verifier Policies",title:""},sidebar:"docs",previous:{title:"Host Capabilities Specification",permalink:"/writing-policies/spec/host-capabilities/intro-host-capabilities"},next:{title:"Container Registry Capabilities",permalink:"/writing-policies/spec/host-capabilities/container-registry"}},l={},u=[{value:"A concrete example",id:"a-concrete-example",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signature-verifier-policies"},"Signature verifier policies"),(0,r.kt)("p",null,"Kubewarden implements support for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.sigstore.dev/"},"Sigstore"),"\nproject. This allows to implement a Secure Supply Chain for your cluster."),(0,r.kt)("p",null,"Part of that is to ensure that all container images running in the cluster are\nsigned and verified, proving that they come from their stated authors, and\nhaven't been tampered with. For further reading, do check out the docs on\n",(0,r.kt)("a",{parentName:"p",href:"/distributing-policies/secure-supply-chain"},"how we implement a Secure Supply Chain for the policies themselves"),")."),(0,r.kt)("p",null,"Sigstore signatures are stored inside of container registries, next to the OCI\nobject being signed; be it a container image or a more generic OCI artifact,\nlike a Kubewarden policy. Given an object to be signed, all its signatures are\ngoing to be stored as layers of a special OCI object created by sigstore.\nPolicies that want to check Sigstore signatures of containers need then to check\nthose layers, and would need to pull the signature layers to see the\nsignatures themselves."),(0,r.kt)("p",null,"Obtaining and operating with those OCI layers needs to happen outside of the\nWebAssembly guest (the policy). Hence this is done by the WebAssembly runtime:\nKubewarden's ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl"),"."),(0,r.kt)("p",null,"The different language SDKs for Kubewarden policies take care of all that, and\nprovide functions for verification of container image, Kubewarden policies, Helm\ncharts and generally speaking any kind of OCI artifact. This ensures a safe and\ntested codepath for verification. In addition, pulling data from a registry and\ncryptographically verifying signatures can be time and computationally\nexpensive, so the WebAssembly runtime (PolicyServer, ",(0,r.kt)("inlineCode",{parentName:"p"},"kwctl"),") ensures both\nsignature pulls and verification computations are cached. The cached entries\nare automatically expired after 60 seconds to prevent stale data from being\nserved."),(0,r.kt)("p",null,"The SDKs provide functions similar to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"verify_pub_keys_image(\n    image_url: string,\n    vector_of_pub_keys: vector<string>,\n    vector_of_sigstore_annotations: Vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"verify_keyless_exact_match(\n    image_url: string,\n    vector_of_tuples_issuer_and_subject: vector<(issuer, subject: string)>,\n    vector_of_sigstore_annotations: vector<(key, value: string)>\n    )\n    returns (is_trusted: bool, digest_of_verified_image: string)\n")))),(0,r.kt)("p",null,"Both functions verify that the image is signed and satisfy the passed\nconstraints."),(0,r.kt)("p",null,"Note well: on success, the functions return the digest of the verified image. It\nis now on the policy to ensure that containers are instantiated from that\ndigest, and not from tag that may or may not match that checksum digest (and\ntherefore be compromised)."),(0,r.kt)("h2",{id:"a-concrete-example"},"A concrete example"),(0,r.kt)("p",null,"The Kubewarden team ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/verify-image-signatures"},"provides a verifier policy"),"\nthat enforces Sigstore signatures for all containers, built on Rust and with the\nRust SDK. The policy ensures that the containers are signed, and optionally,\nmutates the requests appending the exact verified checksum to the tag of the\nimage. Check its docs for specifics."),(0,r.kt)("p",null,"This policy may cover all your needs, but in case you would prefer a different\nUX, of course you can build on top of it or any of the other SDKs."),(0,r.kt)("h1",{id:"wapc-protocol-contract"},"WaPC protocol contract"),(0,r.kt)("p",null,"In case you are implementing your own language SDK, these are the functions a\npolicy that verifies signatures can use:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," waPC function name ")," ",(0,r.kt)("th",null," Input payload ")," ",(0,r.kt)("th",null," Output payload ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v2/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  type: "SigstorePubKeyVerify",\n\n  # **mandatory**: image URI to verify\n  "image": string,\n  "pub_keys": [\n    # PEM-encoded public keys\n    string\n    ],\n  # optional:\n  "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v2/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  type: "SigstoreKeylessVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless": [\n    # list of (issuer, subject) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # signature subject (mail, CI URL, ...)\n      "subject": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v2/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  type: "SigstoreKeylessPrefixVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  "keyless_prefix": [\n    # list of (issuer, url_prefix) tuples\n    {\n      # OIDC issuer\n      "issuer": string,\n      # URL Prefix of subject (CI URL, ...)\n      "url_prefix": string\n    }\n  ],\n  # optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v2/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  type: "SigstoreGithubActionsVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # GitHub owner\n  "owner": string,\n  # optional:\n  # GitHub repository \n  "repo": string\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v2/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  type: "SigstoreCertificateVerify",\n\n  # mandatory: image URI to verify\n  "image": string,\n  # PEM-encoded certificated used to\n  # verify the signature.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate": [byte(int), ..., byte(int)],\n  # Optional - certificate chain used to\n  # verify the provided certificate.\n  # When not specified, the certificate\n  # is assumed to be trusted.\n  # The certificate is UTF-8 encoded.\n  # It\'s an array of bytes of the unicode code pointers of a PEM encoded\n  # certificate string.\n  "certificate_chain": [\n    [byte(int), ..., byte(int)],\n    ...\n    [byte(int), ..., byte(int)]\n  ], \n  # Require the signature layer to have\n  # a Rekor bundle.\n  # Having a Rekor bundle allows further\n  # checks to be performed, e.g. ensuring\n  # the signature has been produced during\n  # the validity time frame of the cert.\n  # Recommended to set to `true`\n  require_rekor_bundle: bool,\n  # Optional:\n  "annotations": [\n    # signature annotations\n    {\n      "key": string,\n      "value": string\n    },\n  ]\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'))))),(0,r.kt)("p",null,"Marked for deprecation:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," WaPC function name ")," ",(0,r.kt)("td",null," Input payload ")," ",(0,r.kt)("td",null," Output payload ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v1/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  "SigstorePubKeyVerify": {\n    # **mandatory**: image URI to verify\n    "image": string,\n    "pub_keys": [\n      # PEM-encoded public keys\n      string\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v1/verify"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  "SigstoreKeylessVerify": {\n    # mandatory: image URI to verify\n    "image": string,\n    "keyless": [\n      # list of (issuer, subject) tuples\n      {\n        # OIDC issuer\n        "issuer": string,\n        # signature subject (mail, CI URL, ...)\n        "subject": string\n      }\n    ],\n    # optional:\n    "annotations": [\n      # signature annotations\n      {\n        "key": string,\n        "value": string\n      },\n    ]\n  }\n}\n'))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n   # true if image verified\n   "is_trusted": boolean,\n   # digest of verified image\n   "digest": string\n}\n'))))))}d.isMDXComponent=!0}}]);