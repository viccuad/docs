"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8848],{53819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"writing-policies/go/policy-settings","title":"","description":"As a first step we will define the structure that holds the policy settings.","source":"@site/versioned_docs/version-1.9/writing-policies/go/03-policy-settings.md","sourceDirName":"writing-policies/go","slug":"/writing-policies/go/policy-settings","permalink":"/1.9/writing-policies/go/policy-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.9/writing-policies/go/03-policy-settings.md","tags":[],"version":"1.9","lastUpdatedAt":1738256368000,"sidebarPosition":3,"frontMatter":{"sidebar_label":"Define Policy Settings","title":""},"sidebar":"docs","previous":{"title":"Create a New Policy","permalink":"/1.9/writing-policies/go/scaffold"},"next":{"title":"Write the Validation Logic","permalink":"/1.9/writing-policies/go/validation"}}');var i=n(74848),r=n(28453);const a={sidebar_label:"Define Policy Settings",title:""},o="Defining policy settings",l={},d=[{value:"Building <code>Settings</code> instances",id:"building-settings-instances",level:2},{value:"Implementing <code>Settings</code> validation",id:"implementing-settings-validation",level:2},{value:"Testing the settings code",id:"testing-the-settings-code",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"defining-policy-settings",children:"Defining policy settings"})}),"\n",(0,i.jsx)(t.p,{children:"As a first step we will define the structure that holds the policy settings."}),"\n",(0,i.jsxs)(t.p,{children:["We will do that by adding this code inside of the ",(0,i.jsx)(t.code,{children:"settings.go"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n\t"encoding/json"\n\t"fmt"\n\t"regexp"\n\n\tmapset "github.com/deckarep/golang-set/v2"\n\tkubewarden "github.com/kubewarden/policy-sdk-go"\n\tkubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n)\n\ntype Settings struct {\n\tDeniedLabels      mapset.Set[string]        `json:"denied_labels"`\n\tConstrainedLabels map[string]*RegularExpression `json:"constrained_labels"`\n}\n\ntype RegularExpression struct {\n\t*regexp.Regexp\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["As you can see we're using the ",(0,i.jsx)(t.code,{children:"regexp"})," package to handle regular expression objects and\nwe use the ",(0,i.jsx)(t.a,{href:"https://github.com/deckarep/golang-set",children:(0,i.jsx)(t.code,{children:"mapset.Set"})})," type to store\nthe list of denied labels."]}),"\n",(0,i.jsxs)(t.p,{children:["Since ",(0,i.jsx)(t.code,{children:"regexp.Regexp"})," doesn't handle deserialization, we need to define a custom type to handle marshaling and unmarshalling of regular expressions:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"// UnmarshalText satisfies the encoding.TextMarshaler interface,\n// also used by json.Unmarshal.\nfunc (r *RegularExpression) UnmarshalText(text []byte) error {\n\tnativeRegExp, err := regexp.Compile(string(text))\n\tif err != nil {\n\t\treturn err\n\t}\n\tr.Regexp = nativeRegExp\n\treturn nil\n}\n\n// MarshalText satisfies the encoding.TextMarshaler interface,\n// also used by json.Marshal.\nfunc (r *RegularExpression) MarshalText() ([]byte, error) {\n\tif r.Regexp != nil {\n\t\treturn []byte(r.Regexp.String()), nil\n\t}\n\n\treturn nil, nil\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Also, we define the ",(0,i.jsx)(t.code,{children:"UnmarshalJSON"})," method to handle the deserialization of the\n",(0,i.jsx)(t.code,{children:"Settings"})," struct:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func (s *Settings) UnmarshalJSON(data []byte) error {\n\trawSettings := struct {\n\t\tDeniedLabels      []string          `json:"denied_labels"`\n\t\tConstrainedLabels map[string]*RegularExpression `json:"constrained_labels"`\n\t}{}\n\n\terr := json.Unmarshal(data, &rawSettings)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\ts.DeniedLabels = mapset.NewThreadUnsafeSet[string](rawSettings.DeniedLabels...)\n\ts.ConstrainedLabels = rawSettings.ConstrainedLabels\n\n\treturn nil\n}\n'})}),"\n",(0,i.jsxs)(t.h2,{id:"building-settings-instances",children:["Building ",(0,i.jsx)(t.code,{children:"Settings"})," instances"]}),"\n",(0,i.jsx)(t.p,{children:"A Kubewarden policy exposes two different functions that receive the\npolicy settings as input:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"validate"}),": This is the function that is invoked every time some Kubernetes\nobject has to be validated by the policy. The settings are received as part\nof the ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go@v0.2.1/protocol#ValidationRequest",children:(0,i.jsx)(t.code,{children:"ValidationRequest"})}),"\nobject"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"validate_settings"}),": This function is called only when the policy is first\nloaded by Kubewarden. The function receives the policy settings as input and\nensures their validity."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We will create a helper function that creates a ",(0,i.jsx)(t.code,{children:"Settings"})," object starting\nfrom the JSON payload:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func NewSettingsFromValidationReq(validationReq *kubewarden_protocol.ValidationRequest) (Settings, error) {\n\tsettings := Settings{}\n\terr := json.Unmarshal(validationReq.Settings, &settings)\n\tif err != nil {\n\t\treturn Settings{}, err\n\t}\n\n\treturn settings, nil\n}\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["All the ",(0,i.jsx)(t.code,{children:"mapset.Set"})," objects are deliberately created using\ntheir ",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/deckarep/golang-set?utm_source=godoc#NewThreadUnsafeSet",children:"thread-unsafe variant"}),".\nThe WebAssembly code is executed in a single thread, hence there are no\nconcurrency issues."]}),(0,i.jsxs)(t.p,{children:["Moreover, the WebAssembly standard doesn't cover\nthreads yet. See ",(0,i.jsx)(t.a,{href:"https://github.com/WebAssembly/threads",children:"the official proposal"}),"\nfor more details."]})]}),"\n",(0,i.jsxs)(t.h2,{id:"implementing-settings-validation",children:["Implementing ",(0,i.jsx)(t.code,{children:"Settings"})," validation"]}),"\n",(0,i.jsx)(t.p,{children:"All Kubewarden policies have to implement settings validation."}),"\n",(0,i.jsxs)(t.p,{children:["This can be easily done by adding a ",(0,i.jsx)(t.code,{children:"Valid"})," method to the ",(0,i.jsx)(t.code,{children:"Settings"})," instances:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func (s *Settings) Valid() (bool, error) {\n\tconstrainedLabels := mapset.NewThreadUnsafeSet[string]()\n\n\tfor label := range s.ConstrainedLabels {\n\t\tconstrainedLabels.Add(label)\n\t}\n\n\tconstrainedAndDenied := constrainedLabels.Intersect(s.DeniedLabels)\n\tif constrainedAndDenied.Cardinality() != 0 {\n\t\treturn false,\n\t\t\tfmt.Errorf("These labels cannot be constrained and denied at the same time: %v", constrainedAndDenied)\n\t}\n\n\treturn true, nil\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Valid"}),' method ensures no "denied" label is also part of the "constrained" map. The check\nis simplified by the usage of the ',(0,i.jsx)(t.code,{children:"Intersect"})," method provided by ",(0,i.jsx)(t.code,{children:"mapset.Set"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Valid"})," method is invoked against an already instantiated ",(0,i.jsx)(t.code,{children:"Setting"})," object. That means\nthe validation of the regular expression provided by the user already took place\ninside of the ",(0,i.jsx)(t.code,{children:"Settings"})," unmarshaller."]})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, we have to ensure the ",(0,i.jsx)(t.code,{children:"validateSettings"})," function that was automatically generated\nis changed to look like that:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func validateSettings(payload []byte) ([]byte, error) {\n\tsettings := Settings{}\n\terr := json.Unmarshal(payload, &settings)\n\tif err != nil {\n\t\treturn kubewarden.RejectSettings(\n\t\t\tkubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n\t}\n\n\tvalid, err := settings.Valid()\n\tif valid {\n\t\treturn kubewarden.AcceptSettings()\n\t}\n\n\treturn kubewarden.RejectSettings(\n\t\tkubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["As you can see, the function takes advantage of the helper functions provided\nby ",(0,i.jsx)(t.a,{href:"https://github.com/kubewarden/policy-sdk-go",children:"Kubewarden's SDK"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"testing-the-settings-code",children:"Testing the settings code"}),"\n",(0,i.jsxs)(t.p,{children:["As always, it's important to have good test coverage of the code we write.\nThe code we generated comes with a series of unit tests defined inside of\nthe ",(0,i.jsx)(t.code,{children:"settings_test.go"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["We will have to change the contents of this file to reflect the new behaviour of the\n",(0,i.jsx)(t.code,{children:"Settings"})," class."]}),"\n",(0,i.jsx)(t.p,{children:"We will start by including the Go packages we will use:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n\t"testing"\n\n\t"encoding/json"\n\n\tkubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["We will start by writing a unit test that ensures we can allocate a ",(0,i.jsx)(t.code,{children:"Settings"}),"\ninstance from a ",(0,i.jsx)(t.code,{children:"ValidationRequest"})," object:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func TestParseValidSettings(t *testing.T) {\n\tsettingsJSON := []byte(`\n\t\t{\n\t\t\t"denied_labels": [ "foo", "bar" ],\n\t\t\t"constrained_labels": {\n\t\t\t\t\t"cost-center": "cc-\\\\d+"\n\t\t\t}\n\t\t}`)\n\n\tsettings := Settings{}\n\terr := json.Unmarshal(settingsJSON, &settings)\n\tif err != nil {\n\t\tt.Errorf("Unexpected error %+v", err)\n\t}\n\n\texpected_denied_labels := []string{"foo", "bar"}\n\tfor _, exp := range expected_denied_labels {\n\t\tif !settings.DeniedLabels.Contains(exp) {\n\t\t\tt.Errorf("Missing value %s", exp)\n\t\t}\n\t}\n\n\tre, found := settings.ConstrainedLabels["cost-center"]\n\tif !found {\n\t\tt.Error("Didn\'t find the expected constrained label")\n\t}\n\n\texpected_regexp := `cc-\\d+`\n\tif re.String() != expected_regexp {\n\t\tt.Errorf("Expected regexp to be %v - got %v instead",\n\t\t\texpected_regexp, re.String())\n\t}\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Next we will define a test that ensures a ",(0,i.jsx)(t.code,{children:"Settings"})," instance\ncannot be generated when the user provides a broken regular\nexpression:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func TestParseSettingsWithInvalidRegexp(t *testing.T) {\n\tsettingsJSON := []byte(`\n\t\t{\n\t\t\t"denied_labels": [ "foo", "bar" ],\n\t\t\t"constrained_labels": {\n\t\t\t\t\t"cost-center": "cc-[a+"\n\t\t\t}\n\t\t}`)\n\n\terr := json.Unmarshal(settingsJSON, &Settings{})\n\tif err == nil {\n\t\tt.Errorf("Didn\'g get expected error")\n\t}\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Next we will define a test that checks the behaviour\nof the ",(0,i.jsx)(t.code,{children:"validate_settings"})," entry-point."]}),"\n",(0,i.jsxs)(t.p,{children:["In this case, we actually look at the ",(0,i.jsx)(t.code,{children:"SettingsValidationResponse"})," object\nreturned by our ",(0,i.jsx)(t.code,{children:"validateSettings"})," function:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func TestDetectValidSettings(t *testing.T) {\n\tsettingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-\\\\d+"\n        }\n    }`)\n\n\tresponsePayload, err := validateSettings(settingsJSON)\n\tif err != nil {\n\t\tt.Errorf("Unexpected error %+v", err)\n\t}\n\n\tvar response kubewarden_protocol.SettingsValidationResponse\n\tif err := json.Unmarshal(responsePayload, &response); err != nil {\n\t\tt.Errorf("Unexpected error: %+v", err)\n\t}\n\n\tif !response.Valid {\n\t\tt.Errorf("Expected settings to be valid: %s", *response.Message)\n\t}\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, we write two more tests to ensure the ",(0,i.jsx)(t.code,{children:"validateSettings"})," function\nrejects invalid settings with the right messages:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func TestDetectNotValidSettingsDueToBrokenRegexp(t *testing.T) {\n\tsettingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-[a+"\n        }\n    }\n    `)\n\n\tresponsePayload, err := validateSettings(settingsJSON)\n\tif err != nil {\n\t\tt.Errorf("Unexpected error %+v", err)\n\t}\n\n\tvar response kubewarden_protocol.SettingsValidationResponse\n\tif err := json.Unmarshal(responsePayload, &response); err != nil {\n\t\tt.Errorf("Unexpected error: %+v", err)\n\t}\n\n\tif response.Valid {\n\t\tt.Error("Expected settings to not be valid")\n\t}\n\n\tif *response.Message != "Provided settings are not valid: error parsing regexp: missing closing ]: `[a+`" {\n\t\tt.Errorf("Unexpected validation error message: %s", *response.Message)\n\t}\n}\n\nfunc TestDetectNotValidSettingsDueToConflictingLabels(t *testing.T) {\n\tsettingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar", "cost-center" ],\n        "constrained_labels": {\n            "cost-center": ".*"\n        }\n    }`)\n\tresponsePayload, err := validateSettings(settingsJSON)\n\tif err != nil {\n\t\tt.Errorf("Unexpected error %+v", err)\n\t}\n\n\tvar response kubewarden_protocol.SettingsValidationResponse\n\tif err := json.Unmarshal(responsePayload, &response); err != nil {\n\t\tt.Errorf("Unexpected error: %+v", err)\n\t}\n\n\tif response.Valid {\n\t\tt.Error("Expected settings to not be valid")\n\t}\n\n\tif *response.Message != "Provided settings are not valid: These labels cannot be constrained and denied at the same time: Set{cost-center}" {\n\t\tt.Errorf("Unexpected validation error message: %s", *response.Message)\n\t}\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now we can run the test by using the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"go test -v settings.go settings_test.go\n"})}),"\n",(0,i.jsx)(t.p,{children:"All the tests will pass with the following output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\nPASS\nok  \tcommand-line-arguments\t0.002s\n"})}),"\n",(0,i.jsx)(t.p,{children:"We can now move to implement the actual validation code."})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);