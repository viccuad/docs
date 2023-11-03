"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return n?i.createElement(g,s(s({ref:t},c),{},{components:n})):i.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Raw policies",title:"Raw policies"},s="Writing raw policies",o={unversionedId:"writing-policies/go/raw-policies",id:"writing-policies/go/raw-policies",title:"Raw policies",description:"Raw policies are policies that can evaluate arbitrary JSON documents.",source:"@site/docs/writing-policies/go/10-raw-policies.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/raw-policies",permalink:"/next/writing-policies/go/raw-policies",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/10-raw-policies.md",tags:[],version:"current",lastUpdatedAt:1699014555,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"Raw policies",title:"Raw policies"},sidebar:"docs",previous:{title:"Validate doing JSON queries",permalink:"/next/writing-policies/go/validation-with-queries"},next:{title:"Introduction to Rego",permalink:"/next/writing-policies/rego/intro-rego"}},l={},u=[{value:"Examples",id:"examples",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-raw-policies"},"Writing raw policies"),(0,a.kt)("p",null,"Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/next/howtos/raw-policies"},"raw policies")," page."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The following examples should look familiar if you completed the ",(0,a.kt)("a",{parentName:"p",href:"/next/writing-policies/go/validation"},"validation")," page of this tutorial."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to mark the policy as ",(0,a.kt)("inlineCode",{parentName:"p"},"raw")," by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"policyType")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.yml")," configuration.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"/next/writing-policies/metadata"},"metadata")," specification for more information.")),(0,a.kt)("h3",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Let's write a policy that accepts a request in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "user": "alice",\n    "action": "delete",\n    "resource": "products"\n  }\n}\n')),(0,a.kt)("p",null,"and validates that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," is in the list of valid users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"action")," is in the list of valid actions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource")," is in the list of valid resources")),(0,a.kt)("p",null,"Start by scaffolding the policy by using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/go-policy-template"},"go policy template"),"."),(0,a.kt)("p",null,"First, we define the types that represent the payload of the request."),(0,a.kt)("p",null,"We will declare a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"RawValidationRequest")," type that contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),",\ninstead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," type that is provided by the SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// RawValidationRequest represents the request that is sent to the validate function by the Policy Server.\ntype RawValidationRequest struct {\n    Request Request `json:"request"`\n    // Raw policies can have settings.\n    Settings Settings `json:"settings"`\n}\n\n// Request represents the payload of the request.\ntype Request struct {\n    User     string `json:"user"`\n    Action   string `json:"action"`\n    Resource string `json:"resource"`\n}\n')),(0,a.kt)("p",null,"Then we need to define the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," type and the ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Settings represents the settings of the policy.\ntype Settings struct {\n    ValidUsers     []string `json:"validUsers"`\n    ValidActions   []string `json:"validActions"`\n    ValidResources []string `json:"validResources"`\n}\n\n// Valid returns true if the settings are valid.\nfunc (s *Settings) Valid() (bool, error) {\n    if len(s.ValidUsers) == 0 {\n        return false, fmt.Errorf("validUsers cannot be empty")\n    }\n\n    if len(s.ValidActions) == 0 {\n        return false, fmt.Errorf("validActions cannot be empty")\n    }\n\n    if len(s.ValidResources) == 0 {\n        return false, fmt.Errorf("validResources cannot be empty")\n    }\n\n    return true, nil\n}\n\n// validateSettings validates the settings.\nfunc validateSettings(payload []byte) ([]byte, error) {\n    logger.Info("validating settings")\n\n    settings := Settings{}\n    err := json.Unmarshal(payload, &settings)\n    if err != nil {\n        return kubewarden.RejectSettings(kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n    }\n\n    valid, err := settings.Valid()\n    if err != nil {\n        return kubewarden.RejectSettings(kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n    }\n    if valid {\n        return kubewarden.AcceptSettings()\n    }\n\n    logger.Warn("rejecting settings")\n    return kubewarden.RejectSettings(kubewarden.Message("Provided settings are not valid"))\n}\n')),(0,a.kt)("p",null,"Finally, we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // Unmarshal the payload into a RawValidationRequest instance\n    validationRequest := RawValidationRequest{}\n    err := json.Unmarshal(payload, &validationRequest)\n    if err != nil {\n        // If the payload is not valid, reject the request\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    request := validationRequest.Request\n    settings := validationRequest.Settings\n\n    // Validate the payload\n    if slices.Contains(settings.ValidUsers, request.User) &&\n        slices.Contains(settings.ValidActions, request.Action) &&\n        slices.Contains(settings.ValidResources, request.Resource) {\n        return kubewarden.AcceptRequest()\n    }\n\n    return kubewarden.RejectRequest(\n        kubewarden.Message("The request cannot be accepted."),\n        kubewarden.Code(400))\n}\n')),(0,a.kt)("h3",{id:"mutation"},"Mutation"),(0,a.kt)("p",null,"Let's modify the previous example to mutate the request instead of rejecting it.\nIn this case, the settings will contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultUser"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultAction")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultRequest")," that will be used to mutate the request if the user, the action or the resource is not valid."),(0,a.kt)("p",null,"We need to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," type with the new fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Settings defines the settings of the policy.\ntype Settings struct {\n    ValidUsers      []string `json:"validUsers"`\n    ValidActions    []string `json:"validActions"`\n    ValidResources  []string `json:"validResources"`\n    DefaultUser     string   `json:"defaultUser"`\n    DefaultAction   string   `json:"defaultAction"`\n    DefaultResource string   `json:"defaultResource"`\n}\n\n// Valid returns true if the settings are valid.\nfunc (s *Settings) Valid() (bool, error) {\n    if len(s.ValidUsers) == 0 {\n        return false, fmt.Errorf("validUsers cannot be empty")\n    }\n\n    if len(s.ValidActions) == 0 {\n        return false, fmt.Errorf("validActions cannot be empty")\n    }\n\n    if len(s.ValidResources) == 0 {\n        return false, fmt.Errorf("validResources cannot be empty")\n    }\n\n    if s.DefaultUser == "" {\n        return false, fmt.Errorf("defaultUser cannot be empty")\n    }\n\n    if s.DefaultAction == "" {\n        return false, fmt.Errorf("defaultUser cannot be empty")\n    }\n\n    if s.DefaultResource == "" {\n        return false, fmt.Errorf("defaultResource cannot be empty")\n    }\n\n    return true, nil\n}\n')),(0,a.kt)("p",null,"and the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," function to introduce the mutation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // Unmarshal the payload into a RawValidationRequest instance\n    validationRequest := RawValidationRequest{}\n    err := json.Unmarshal(payload, &validationRequest)\n    if err != nil {\n        // If the payload is not valid, reject the request\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    request := validationRequest.Request\n    settings := validationRequest.Settings\n\n    logger.Info("validating request")\n\n    // Accept the request without mutating it if it is valid\n    if slices.Contains(settings.ValidUsers, request.User) &&\n        slices.Contains(settings.ValidActions, request.Action) &&\n        slices.Contains(settings.ValidResources, request.Resource) {\n        return kubewarden.AcceptRequest()\n    }\n\n    logger.Info("mutating request")\n\n    // Mutate the request if it is not valid\n    if !slices.Contains(settings.ValidUsers, request.User) {\n        request.User = settings.DefaultUser\n    }\n\n    if !slices.Contains(settings.ValidActions, request.Action) {\n        request.Action = settings.DefaultAction\n    }\n\n    if !slices.Contains(settings.ValidResources, request.Resource) {\n        request.Resource = settings.DefaultResource\n    }\n\n    return kubewarden.MutateRequest(request)\n}\n')))}p.isMDXComponent=!0}}]);