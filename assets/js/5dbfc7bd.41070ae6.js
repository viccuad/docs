"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[59864],{96058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorials/writing-policies/wasi/raw-policies","title":"Writing raw policies","description":"Using Kubewarden for writing raw policies.","source":"@site/versioned_docs/version-1.17/tutorials/writing-policies/wasi/02-raw-policies.md","sourceDirName":"tutorials/writing-policies/wasi","slug":"/tutorials/writing-policies/wasi/raw-policies","permalink":"/1.17/tutorials/writing-policies/wasi/raw-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.17/tutorials/writing-policies/wasi/02-raw-policies.md","tags":[],"version":"1.17","lastUpdatedAt":1738256368000,"sidebarPosition":2,"frontMatter":{"sidebar_label":"Raw policies","title":"Writing raw policies","description":"Using Kubewarden for writing raw policies.","keywords":["kubewarden","kubernetes","raw policies"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","raw-policies"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"WASI","permalink":"/1.17/tutorials/writing-policies/wasi/intro-wasi"},"next":{"title":"Policy metadata","permalink":"/1.17/tutorials/writing-policies/metadata"}}');var i=t(74848),a=t(28453);const r={sidebar_label:"Raw policies",title:"Writing raw policies",description:"Using Kubewarden for writing raw policies.",keywords:["kubewarden","kubernetes","raw policies"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","raw-policies"],"doc-persona":["kubewarden-policy-developer"]},o=void 0,l={},c=[{value:"Examples",id:"examples",level:2},{value:"Validation",id:"validation",level:3},{value:"Mutation",id:"mutation",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/wasi/raw-policies"})}),"\n",(0,i.jsxs)(n.p,{children:["Raw policies are policies that can evaluate arbitrary JSON documents.\nFor more information about raw policies, please refer to the ",(0,i.jsx)(n.a,{href:"/1.17/howtos/raw-policies",children:"raw policies"})," page."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"/1.17/tutorials/writing-policies/wasi/intro-wasi",children:"Introduction to WASI"})," for an overview of the WASI execution mode."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You mark the policy as ",(0,i.jsx)(n.code,{children:"raw"})," by using the ",(0,i.jsx)(n.code,{children:"policyType"})," field in the ",(0,i.jsx)(n.code,{children:"metadata.yml"})," configuration.\nPlease refer to the ",(0,i.jsx)(n.a,{href:"/1.17/tutorials/writing-policies/metadata",children:"metadata"})," specification for more information."]})}),"\n",(0,i.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(n.p,{children:"As an example you can write a policy that accepts a request in the following format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "request": {\n    "user": "alice",\n    "action": "delete",\n    "resource": "products"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"and validates that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user"})," is in the list of valid users"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"action"})," is in the list of valid actions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"resource"})," is in the list of valid resources"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Start by scaffolding the policy by using the\n",(0,i.jsx)(n.a,{href:"https://github.com/kubewarden/go-wasi-policy-template",children:"go WASI policy template"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"First, you need to define the types that represent the payload of the request."}),"\n",(0,i.jsxs)(n.p,{children:["You should declare a custom ",(0,i.jsx)(n.code,{children:"RawValidationRequest"})," type containing the ",(0,i.jsx)(n.code,{children:"Request"})," and the ",(0,i.jsx)(n.code,{children:"Settings"}),", instead of using the ",(0,i.jsx)(n.code,{children:"ValidationRequest"})," type provided by the ",(0,i.jsx)(n.code,{children:"kw_sdk.go"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// RawValidationRequest represents the request that is sent to the validate function by the Policy Server.\ntype RawValidationRequest struct {\n    Request Request `json:"request"`\n    // Raw policies can have settings.\n    Settings Settings `json:"settings"`\n}\n\n// Request represents the payload of the request.\ntype Request struct {\n    User     string `json:"user"`\n    Action   string `json:"action"`\n    Resource string `json:"resource"`\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then you define the ",(0,i.jsx)(n.code,{children:"Settings"})," type and the ",(0,i.jsx)(n.code,{children:"validateSettings"})," function in the ",(0,i.jsx)(n.code,{children:"settings.go"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Settings represents the settings of the policy.\ntype Settings struct {\n    ValidUsers     []string `json:"validUsers"`\n    ValidActions   []string `json:"validActions"`\n    ValidResources []string `json:"validResources"`\n}\n\nfunc validateSettings(input []byte) []byte {\n    var response SettingsValidationResponse\n\n    settings := &Settings{}\n    if err := json.Unmarshal(input, &settings); err != nil {\n        response = RejectSettings(Message(fmt.Sprintf("cannot unmarshal settings: %v", err)))\n    } else {\n        response = validateCliSettings(settings)\n    }\n\n    responseBytes, err := json.Marshal(&response)\n    if err != nil {\n        log.Fatalf("can not marshal validation response: %v", err)\n    }\n    return responseBytes\n}\n\nfunc validateCliSettings(settings *Settings) SettingsValidationResponse {\n    if len(settings.ValidUsers) == 0 {\n        return RejectSettings(Message(\n            "At least one valid user must be specified"))\n    }\n\n    if len(settings.ValidActions) == 0 {\n        return RejectSettings(Message(\n            "At least one valid action must be specified"))\n    }\n\n    if len(settings.ValidResources) == 0 {\n        return RejectSettings(Message(\n            "At least one valid resource must be specified"))\n    }\n\n    return AcceptSettings()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you update the validation logic in ",(0,i.jsx)(n.code,{children:"validate.go"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func validate(input []byte) []byte {\n    var validationRequest RawValidationRequest\n    validationRequest.Settings = Settings{}\n    decoder := json.NewDecoder(strings.NewReader(string(input)))\n    decoder.DisallowUnknownFields()\n    err := decoder.Decode(&validationRequest)\n    if err != nil {\n        return marshalValidationResponseOrFail(\n            RejectRequest(\n                Message(fmt.Sprintf("Error deserializing validation request: %v", err)),\n                Code(400)))\n    }\n\n    return marshalValidationResponseOrFail(\n        validateRequest(validationRequest.Settings, validationRequest.Request))\n}\n\nfunc marshalValidationResponseOrFail(response ValidationResponse) []byte {\n    responseBytes, err := json.Marshal(&response)\n    if err != nil {\n        log.Fatalf("cannot marshal validation response: %v", err)\n    }\n    return responseBytes\n}\n\nfunc validateRequest(settings Settings, request Request) ValidationResponse {\n    if slices.Contains(settings.ValidUsers, request.User) &&\n        slices.Contains(settings.ValidActions, request.Action) &&\n        slices.Contains(settings.ValidResources, request.Resource) {\n        return AcceptRequest()\n    }\n\n    return RejectRequest(\n        Message("The request cannot be accepted."),\n        Code(403))\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mutation",children:"Mutation"}),"\n",(0,i.jsx)(n.p,{children:"You can change the earlier example to mutate the request instead of rejecting it."}),"\n",(0,i.jsxs)(n.p,{children:["In this case, the settings should contain the ",(0,i.jsx)(n.code,{children:"defaultUser"}),", ",(0,i.jsx)(n.code,{children:"defaultAction"})," and ",(0,i.jsx)(n.code,{children:"defaultRequest"})," to use to mutate the request if the user, the action, or the resource isn't valid."]}),"\n",(0,i.jsxs)(n.p,{children:["You need to update the ",(0,i.jsx)(n.code,{children:"Settings"})," type with the new fields:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// Settings represents the settings of the policy.\ntype Settings struct {\n    ValidUsers []string `json:"validUsers"`\n    ValidActions []string `json:"validActions"`\n    ValidResources []string `json:"validResources"`\n    DefaultUser string `json:"defaultUser"`\n    DefaultAction string `json:"defaultAction"`\n    DefaultResource string `json:"defaultResource"`\n}\n\nfunc validateCliSettings(settings *Settings) SettingsValidationResponse {\n    if len(settings.ValidUsers) == 0 {\n        return RejectSettings(Message(\n            "At least one valid user must be specified"))\n    }\n\n    if len(settings.ValidActions) == 0 {\n        return RejectSettings(Message(\n            "At least one valid action must be specified"))\n    }\n\n    if len(settings.ValidResources) == 0 {\n        return RejectSettings(Message(\n            "At least one valid resource must be specified"))\n    }\n\n    if settings.DefaultUser == "" {\n        return RejectSettings(Message(\n            "Default user must be specified"))\n    }\n\n    if settings.DefaultAction == "" {\n        return RejectSettings(Message(\n            "Default action must be specified"))\n    }\n\n    if settings.DefaultResource == "" {\n        return RejectSettings(Message(\n            "Default resource must be specified"))\n    }\n\n    return AcceptSettings()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You also need to update the ",(0,i.jsx)(n.code,{children:"ValidationResponse"})," struct and the ",(0,i.jsx)(n.code,{children:"MutateRequest"})," function in ",(0,i.jsx)(n.code,{children:"kw_sdk.go"})," to remove the Kubernetes-specific types and use Kubewarden types instead:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'// ValidationResponse defines the response given when validating a request\ntype ValidationResponse struct {\n    Accepted bool `json:"accepted"`\n    // Optional - ignored if accepted\n    Message *string `json:"message,omitempty"`\n    // Optional - ignored if accepted\n    Code *uint16 `json:"code,omitempty"`\n    // Optional - used only by mutating policies\n    // highlight-next-line\n    MutatedObject *Request `json:"mutated_object,omitempty"`\n}\n\n// MutateRequest accepts the request. The given `mutatedObject` is how\n// the evaluated object must look once accepted\n// highlight-next-line\nfunc MutateRequest(mutatedObject *Request) ValidationResponse {\n    return ValidationResponse{\n        Accepted:      true,\n        MutatedObject: mutatedObject,\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now you can update the ",(0,i.jsx)(n.code,{children:"validate"})," function to mutate the request if not valid:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func validateRequest(settings Settings, request Request) ValidationResponse {\n    if slices.Contains(settings.ValidUsers, request.User) &&\n        slices.Contains(settings.ValidActions, request.Action) &&\n        slices.Contains(settings.ValidResources, request.Resource) {\n        return AcceptRequest()\n    }\n\n    if !slices.Contains(settings.ValidUsers, request.User) {\n        request.User = settings.DefaultUser\n    }\n\n    if !slices.Contains(settings.ValidActions, request.Action) {\n        request.Action = settings.DefaultAction\n    }\n\n    if !slices.Contains(settings.ValidResources, request.Resource) {\n        request.Resource = settings.DefaultResource\n    }\n\n    return MutateRequest(&request)\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);