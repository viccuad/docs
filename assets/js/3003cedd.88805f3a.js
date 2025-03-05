"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[31629],{72403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorials/writing-policies/go/validation-with-queries","title":"Validation using JSON queries","description":"Validation using JSON queries with Kubewarden policies in Go.","source":"@site/versioned_docs/version-1.21/tutorials/writing-policies/go/09-validation-with-queries.md","sourceDirName":"tutorials/writing-policies/go","slug":"/tutorials/writing-policies/go/validation-with-queries","permalink":"/1.21/tutorials/writing-policies/go/validation-with-queries","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.21/tutorials/writing-policies/go/09-validation-with-queries.md","tags":[],"version":"1.21","lastUpdatedAt":1741176355000,"sidebarPosition":90,"frontMatter":{"sidebar_label":"Validation using JSON queries","sidebar_position":90,"title":"Validation using JSON queries","description":"Validation using JSON queries with Kubewarden policies in Go.","keywords":["kubewarden","kubernetes","validation using JSON queries"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","golang","validation-using-json"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"Distributing policy","permalink":"/1.21/tutorials/writing-policies/go/distribute"},"next":{"title":"Raw policies","permalink":"/1.21/tutorials/writing-policies/go/raw-policies"}}');var s=t(74848),a=t(28453);const o={sidebar_label:"Validation using JSON queries",sidebar_position:"090",title:"Validation using JSON queries",description:"Validation using JSON queries with Kubewarden policies in Go.",keywords:["kubewarden","kubernetes","validation using JSON queries"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","golang","validation-using-json"],"doc-persona":["kubewarden-policy-developer"]},r=void 0,l={},d=[{value:"The <code>validate</code> function",id:"the-validate-function",level:2},{value:"Testing the validation code",id:"testing-the-validation-code",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:t,Head:i}=n;return t||h("Details",!0),i||h("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/go/validation-with-queries"})}),"\n",(0,s.jsxs)(n.p,{children:["An earlier section shows how to write a\n",(0,s.jsx)(n.a,{href:"/1.21/tutorials/writing-policies/go/validation",children:"validation"}),"\npolicy by using Go types describing Kubernetes objects."]}),"\n",(0,s.jsx)(n.p,{children:"There is another way to write validation logic,\nby extracting the relevant data from the JSON document using ad-hoc queries."}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.em,{children:'"jq-like"'})," approach can be useful when the policy has to look deep inside a Kubernetes object.\nIt's especially helpful when dealing with optional inner objects."]}),"\n",(0,s.jsx)(n.p,{children:"This document re-implements the earlier code using JSON queries instead of unmarshaling the JSON payload into Go types."}),"\n",(0,s.jsxs)(n.h2,{id:"the-validate-function",children:["The ",(0,s.jsx)(n.code,{children:"validate"})," function"]}),"\n",(0,s.jsxs)(n.p,{children:["You can use the policy you just created and change its ",(0,s.jsx)(n.code,{children:"validate"})," function\nto not use the Go types that define Kubernetes objects."]}),"\n",(0,s.jsxs)(n.p,{children:["You can instead use the ",(0,s.jsx)(n.a,{href:"https://github.com/tidwall/gjson",children:(0,s.jsx)(n.code,{children:"gjson"})})," library to extract data from the raw JSON object."]}),"\n",(0,s.jsx)(n.p,{children:"Firstly, you need to change the requirement section.\nThis is how the code should look:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n    "encoding/json"\n    "fmt"\n\n    mapset "github.com/deckarep/golang-set/v2"\n    kubewarden "github.com/kubewarden/policy-sdk-go"\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n    "github.com/tidwall/gjson"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Change the ",(0,s.jsx)(n.code,{children:"validate"})," function to look like:"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)(n.code,{children:"validate"})," function"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func validate(payload []byte) ([]byte, error) {\n    // Create a ValidationRequest instance from the incoming payload\n    validationRequest := kubewarden_protocol.ValidationRequest{}\n    err := json.Unmarshal(payload, &validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // Create a Settings instance from the ValidationRequest object\n    settings, err := NewSettingsFromValidationReq(&validationRequest)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // Access the **raw** JSON that describes the object\n    podJSON := validationRequest.Request.Object\n\n    // NOTE 1\n    data := gjson.GetBytes(\n        podJSON,\n        "metadata.labels")\n\n    var validationErr error\n    labels := mapset.NewThreadUnsafeSet[string]()\n    data.ForEach(func(key, value gjson.Result) bool {\n        // NOTE 2\n        label := key.String()\n        labels.Add(label)\n\n        // NOTE 3\n        validationErr = validateLabel(label, value.String(), &settings)\n\n        // keep iterating if there are no errors\n        return validationErr == nil\n    })\n\n    // NOTE 4\n    if validationErr != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(validationErr.Error()),\n            kubewarden.NoCode)\n    }\n\n    // NOTE 5\n    for requiredLabel := range settings.ConstrainedLabels {\n        if !labels.Contains(requiredLabel) {\n            return kubewarden.RejectRequest(\n                kubewarden.Message(fmt.Sprintf("Constrained label %s not found inside of Pod", requiredLabel)),\n                kubewarden.NoCode)\n        }\n    }\n\n    return kubewarden.AcceptRequest()\n}\n'})})]}),"\n",(0,s.jsxs)(n.p,{children:["The first part of the ",(0,s.jsx)(n.code,{children:"validate"})," function is similar as before.\nThe 'NOTE's mark the changes."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["You use a ",(0,s.jsx)(n.code,{children:"gjson"})," selector to get the ",(0,s.jsx)(n.code,{children:"label"})," map provided by the object embedded into the request"]}),"\n",(0,s.jsxs)(n.li,{children:["You use a ",(0,s.jsx)(n.code,{children:"gjson"})," helper to iterate over the results of the query.\nIf the query has no results, the loop never takes place."]}),"\n",(0,s.jsxs)(n.li,{children:["You use the ",(0,s.jsx)(n.code,{children:"validateLabel"})," function to validate the label and its value, as before.\nYou're also adding the labels found in the Pod to a previously defined ",(0,s.jsx)(n.code,{children:"mapset.Set"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the validation produced an error, you immediately return with a validation rejection reply."}),"\n",(0,s.jsxs)(n.li,{children:["As before, you iterate over the ",(0,s.jsx)(n.code,{children:"constrainedLabels"})," to check all are specified in the Pod.\nThe code has been slightly changed to make use of the previously populated ",(0,s.jsx)(n.code,{children:"mapset.Set"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testing-the-validation-code",children:"Testing the validation code"}),"\n",(0,s.jsx)(n.p,{children:"The unit tests and the end-to-end tests don't need any change, you can run them as before:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"make test\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestValidateLabel\n--- PASS: TestValidateLabel (0.00s)\nPASS\nok      github.com/kubewarden/go-policy-template    0.002s\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"make e2e-tests\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"bats e2e.bats\ne2e.bats\n \u2713 accept when no settings are provided\n \u2713 accept because label is satisfying a constraint\n \u2713 accept labels are not on deny list\n \u2713 reject because label is on deny list\n \u2713 reject because label is not satisfying a constraint\n \u2713 reject because constrained label is missing\n \u2713 fail settings validation because of conflicting labels\n \u2713 fail settings validation because of invalid constraint\n\n8 tests, 0 failures\n"})}),"\n",(0,s.jsx)(n.p,{children:"All the tests are working as expected."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);