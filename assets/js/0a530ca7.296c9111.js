"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[426],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=d(t),u=r,h=g["".concat(l,".").concat(u)]||g[u]||c[u]||a;return t?i.createElement(h,s(s({ref:n},p),{},{components:t})):i.createElement(h,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1379:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),s=["components"],o={sidebar_label:"Define Policy Settings",title:""},l="Defining policy settings",d={unversionedId:"writing-policies/go/policy-settings",id:"writing-policies/go/policy-settings",title:"",description:"As a first step we will define the structure that holds the policy settings.",source:"@site/docs/writing-policies/go/03-policy-settings.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/policy-settings",permalink:"/writing-policies/go/policy-settings",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/03-policy-settings.md",tags:[],version:"current",lastUpdatedAt:1654161587,formattedLastUpdatedAt:"6/2/2022",sidebarPosition:3,frontMatter:{sidebar_label:"Define Policy Settings",title:""},sidebar:"docs",previous:{title:"Create a New Policy",permalink:"/writing-policies/go/scaffold"},next:{title:"Write the Validation Logic",permalink:"/writing-policies/go/validation"}},p={},c=[{value:"Building <code>Settings</code> instances",id:"building-settings-instances",level:2},{value:"Implementing <code>Settings</code> validation",id:"implementing-settings-validation",level:2},{value:"Testing the settings code",id:"testing-the-settings-code",level:2}],g={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defining-policy-settings"},"Defining policy settings"),(0,a.kt)("p",null,"As a first step we will define the structure that holds the policy settings."),(0,a.kt)("p",null,"We will do that by adding this code inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.go")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/deckarep/golang-set"\n    "github.com/kubewarden/gjson"\n    kubewarden "github.com/kubewarden/policy-sdk-go"\n\n    "fmt"\n    "regexp"\n)\n\ntype Settings struct {\n    DeniedLabels      mapset.Set                    `json:"denied_labels"`\n    ConstrainedLabels map[string]*RegularExpression `json:"constrained_labels"`\n}\n')),(0,a.kt)("p",null,"As you can see we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"regexp")," package to handle regular expression objects, plus\nwe use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapset.Set")," structure to store the list of denied labels."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," struct has json attributes, we will use them later when writing\nour unit tests. The unit tests are going to be executed using Go official compiler, hence\nwe will be able to leverage the ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding/json")," package."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," class is not using the official ",(0,a.kt)("inlineCode",{parentName:"p"},"regexp.RegExp")," object to\nrepresent regular expressions. That's because the ",(0,a.kt)("inlineCode",{parentName:"p"},"regexp.RegExp")," struct doesn't\nhandle serialization and deserialization to JSON."),(0,a.kt)("p",null,"This is the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"RegularExpression")," struct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// A wrapper around the standard regexp.Regexp struct\n// that implements marshalling and unmarshalling\ntype RegularExpression struct {\n    *regexp.Regexp\n}\n\n// Convenience method to build a regular expression\nfunc CompileRegularExpression(expr string) (*RegularExpression, error) {\n    nativeRegExp, err := regexp.Compile(expr)\n    if err != nil {\n        return nil, err\n    }\n    return &RegularExpression{nativeRegExp}, nil\n}\n\n// UnmarshalText satisfies the encoding.TextMarshaler interface,\n// also used by json.Unmarshal.\nfunc (r *RegularExpression) UnmarshalText(text []byte) error {\n    nativeRegExp, err := regexp.Compile(string(text))\n    if err != nil {\n        return err\n    }\n    r.Regexp = nativeRegExp\n    return nil\n}\n\n// MarshalText satisfies the encoding.TextMarshaler interface,\n// also used by json.Marshal.\nfunc (r *RegularExpression) MarshalText() ([]byte, error) {\n    if r.Regexp != nil {\n        return []byte(r.Regexp.String()), nil\n    }\n\n    return nil, nil\n}\n")),(0,a.kt)("h2",{id:"building-settings-instances"},"Building ",(0,a.kt)("inlineCode",{parentName:"h2"},"Settings")," instances"),(0,a.kt)("p",null,"At runtime we can't rely on the automatic struct marshalling and unmarshalling\nprovided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding/json")," package due to TinyGo current limitations.\nBecause of that we will create two initialization helpers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NewSettingsFromValidationReq"),": this is used when building a ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings"),"\ninstance starting from a ",(0,a.kt)("a",{parentName:"li",href:"/writing-policies/#the-validationrequest-object"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidationRequest")),"\nobject"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NewSettingsFromValidateSettingsPayload"),": this is used when building a\n",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," instance inside of the ",(0,a.kt)("a",{parentName:"li",href:"/writing-policies/#the-validate_settings-entry-point"},(0,a.kt)("inlineCode",{parentName:"a"},"validate_settings")),' entry point. This entry point receives the "naked" Settings JSON\ndictionary')),(0,a.kt)("p",null,"This is the implementation of these functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Builds a new Settings instance starting from a validation\n// request payload:\n// {\n//    "request": ...,\n//    "settings": {\n//       "denied_labels": [...],\n//       "constrained_labels": { ... }\n//    }\n// }\nfunc NewSettingsFromValidationReq(payload []byte) (Settings, error) {\n    // Note well: we don\'t validate the input JSON now, this has\n    // already done inside of the `validate` function\n\n    return newSettings(\n        payload,\n        "settings.denied_labels",\n        "settings.constrained_labels")\n}\n\n// Builds a new Settings instance starting from a Settings\n// payload:\n// {\n//    "denied_names": [ ... ],\n//    "constrained_labels": { ... }\n// }\nfunc NewSettingsFromValidateSettingsPayload(payload []byte) (Settings, error) {\n    if !gjson.ValidBytes(payload) {\n        return Settings{}, fmt.Errorf("denied JSON payload")\n    }\n\n    return newSettings(\n        payload,\n        "denied_labels",\n        "constrained_labels")\n}\n')),(0,a.kt)("p",null,"The heavy lifting of the setting is done inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"newSettings")," function, which\nis invoked by both ",(0,a.kt)("inlineCode",{parentName:"p"},"NewSettingsFromValidateSettingsPayload")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NewSettingsFromValidationReq"),"."),(0,a.kt)("p",null,"The function takes the raw JSON payload and a list of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidwall/gjson"},"gjson"),"\nqueries. These queries are used to extract the values from the JSON data and\nbuild the actual object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func newSettings(payload []byte, paths ...string) (Settings, error) {\n    if len(paths) != 2 {\n        return Settings{}, fmt.Errorf("wrong number of json paths")\n    }\n\n    data := gjson.GetManyBytes(payload, paths...)\n\n    deniedLabels := mapset.NewThreadUnsafeSet()\n    data[0].ForEach(func(_, entry gjson.Result) bool {\n        deniedLabels.Add(entry.String())\n        return true\n    })\n\n    constrainedLabels := make(map[string]*RegularExpression)\n    var err error\n    data[1].ForEach(func(key, value gjson.Result) bool {\n        var regExp *RegularExpression\n        regExp, err = CompileRegularExpression(value.String())\n        if err != nil {\n            return false\n        }\n\n        constrainedLabels[key.String()] = regExp\n        return true\n    })\n    if err != nil {\n        return Settings{}, err\n    }\n\n    return Settings{\n        DeniedLabels:      deniedLabels,\n        ConstrainedLabels: constrainedLabels,\n    }, nil\n}\n')),(0,a.kt)("p",null,"As you can see the code above is pretty straightforward. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gjson")," package\nprovides a convenient method to fetch multiple values from the JSON data."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"newSettings")," function also creates instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"regexp.Regexp")," objects\nand ensures the regular expressions provided by the user are correct."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note well:")," all the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapset.Set")," objects are deliberately created using\ntheir ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/deckarep/golang-set?utm_source=godoc#NewThreadUnsafeSet"},"thread-unsafe variant"),".\nThe WebAssembly code is executed in single thread, hence there are no\nconcurrency issues."),(0,a.kt)("p",{parentName:"blockquote"},"Moreover, the WebAssembly standard doesn't cover\nthreads yet. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/threads"},"the official proposal"),"\nfor more details.")),(0,a.kt)("h2",{id:"implementing-settings-validation"},"Implementing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Settings")," validation"),(0,a.kt)("p",null,"All Kubewarden policies have to implement\n",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/#the-validate_settings-entry-point"},"settings validation"),"."),(0,a.kt)("p",null,"This can be easily done by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid")," method to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," instances:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (s *Settings) Valid() (bool, error) {\n    constrainedLabels := mapset.NewThreadUnsafeSet()\n\n    for label := range s.ConstrainedLabels {\n        constrainedLabels.Add(label)\n    }\n\n    constrainedAndDenied := constrainedLabels.Intersect(s.DeniedLabels)\n    if constrainedAndDenied.Cardinality() != 0 {\n        return false,\n            fmt.Errorf("These labels cannot be constrained and denied at the same time: %v", constrainedAndDenied)\n    }\n\n    return true, nil\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid"),' method ensures no "denied" label is also part of the "constrained" map. The check\nis simplified by the usage of the ',(0,a.kt)("inlineCode",{parentName:"p"},"Intersect")," method provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"mapset.Set"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note well:")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid")," method is invoked against an already instantiated ",(0,a.kt)("inlineCode",{parentName:"p"},"Setting")," object. That means\nthe validation of the regular expression provided by the user already took place at\ninside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," constructor.")),(0,a.kt)("p",null,"Finally, we have to ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function that was automatically generated\nis changed to look like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func validateSettings(payload []byte) ([]byte, error) {\n    settings, err := NewSettingsFromValidateSettingsPayload(payload)\n    if err != nil {\n        // this happens when one of the user-defined regular expressions are invalid\n        return kubewarden.RejectSettings(\n            kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n    }\n\n    valid, err := settings.Valid()\n    if valid {\n        return kubewarden.AcceptSettings()\n    }\n    return kubewarden.RejectSettings(\n        kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n}\n')),(0,a.kt)("p",null,"As you can see, the function takes advantage of the helper functions provided\nby ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-sdk-go"},"Kubewarden's SDK"),"."),(0,a.kt)("h2",{id:"testing-the-settings-code"},"Testing the settings code"),(0,a.kt)("p",null,"As always, it's important to have good test coverage of the code we write.\nThe code we generated comes with a series of unit test defined inside of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"settings_test.go")," file."),(0,a.kt)("p",null,"We will have to change the contents of this file to reflect the new behaviour of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," class."),(0,a.kt)("p",null,"We will start by including the Go packages we will use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "encoding/json"\n    "testing"\n\n    kubewarden_testing "github.com/kubewarden/policy-sdk-go/testing"\n)\n')),(0,a.kt)("p",null,"As stated before, the unit tests are not part of the final WebAssembly binary, hence\nwe can build them using the official Go compiler. That means we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding/json"),"\npackage to simplify our tests."),(0,a.kt)("p",null,"We will start by writing a unit test that ensures we can allocate a ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),"\ninstance from a ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/#the-validationrequest-object"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidationRequest")),"\nobject:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestParseValidSettings(t *testing.T) {\n    request := `\n    {\n        "request": "doesn\'t matter here",\n        "settings": {\n            "denied_labels": [ "foo", "bar" ],\n            "constrained_labels": {\n                "cost-center": "cc-\\\\d+"\n            }\n        }\n    }\n    `\n    rawRequest := []byte(request)\n\n    settings, err := NewSettingsFromValidationReq(rawRequest)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    expected_denied_labels := []string{"foo", "bar"}\n    for _, exp := range expected_denied_labels {\n        if !settings.DeniedLabels.Contains(exp) {\n            t.Errorf("Missing value %s", exp)\n        }\n    }\n\n    re, found := settings.ConstrainedLabels["cost-center"]\n    if !found {\n        t.Error("Didn\'t find the expected constrained label")\n    }\n\n    expected_regexp := `cc-\\d+`\n    if re.String() != expected_regexp {\n        t.Errorf("Expected regexp to be %v - got %v instead",\n            expected_regexp, re.String())\n    }\n}\n')),(0,a.kt)("p",null,"Next we will define a test that ensures a ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," instance\ncannot be generated when the user provides a broken regular\nexpression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestParseSettingsWithInvalidRegexp(t *testing.T) {\n    request := `\n    {\n        "request": "doesn\'t matter here",\n        "settings": {\n            "denied_labels": [ "foo", "bar" ],\n            "constrained_labels": {\n                "cost-center": "cc-[a+"\n            }\n        }\n    }\n    `\n    rawRequest := []byte(request)\n\n    _, err := NewSettingsFromValidationReq(rawRequest)\n    if err == nil {\n        t.Errorf("Didn\'g get expected error")\n    }\n}\n')),(0,a.kt)("p",null,"Next we will define a test that checks the behaviour\nof the ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/#the-validate_settings-entry-point"},(0,a.kt)("inlineCode",{parentName:"a"},"validate_settings")),"\nentry-point."),(0,a.kt)("p",null,"In this case we actually look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object\nreturned by our ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestDetectValidSettings(t *testing.T) {\n    request := `\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-\\\\d+"\n        }\n    }\n    `\n    rawRequest := []byte(request)\n    responsePayload, err := validateSettings(rawRequest)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_testing.SettingsValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if !response.Valid {\n        t.Errorf("Expected settings to be valid: %s", response.Message)\n    }\n}\n')),(0,a.kt)("p",null,"Finally, we write two more tests to ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function\nrejects invalid settings with the right messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestDetectNotValidSettingsDueToBrokenRegexp(t *testing.T) {\n    request := `\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-[a+"\n        }\n    }\n    `\n    rawRequest := []byte(request)\n    responsePayload, err := validateSettings(rawRequest)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_testing.SettingsValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Valid {\n        t.Error("Expected settings to not be valid")\n    }\n\n    if response.Message != "Provided settings are not valid: error parsing regexp: missing closing ]: `[a+`" {\n        t.Errorf("Unexpected validation error message: %s", response.Message)\n    }\n}\n\nfunc TestDetectNotValidSettingsDueToConflictingLabels(t *testing.T) {\n    request := `\n    {\n        "denied_labels": [ "foo", "bar", "cost-center" ],\n        "constrained_labels": {\n            "cost-center": ".*"\n        }\n    }\n    `\n    rawRequest := []byte(request)\n    responsePayload, err := validateSettings(rawRequest)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_testing.SettingsValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Valid {\n        t.Error("Expected settings to not be valid")\n    }\n\n    if response.Message != "Provided settings are not valid: These labels cannot be constrained and denied at the same time: Set{cost-center}" {\n        t.Errorf("Unexpected validation error message: %s", response.Message)\n    }\n}\n')),(0,a.kt)("p",null,"Now we can run the test by using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go test -v settings.go settings_test.go\n")),(0,a.kt)("p",null,"All the tests will pass with the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\nPASS\nok      command-line-arguments  0.001s\n")),(0,a.kt)("p",null,"We can now move to implement the actual validation code."))}u.isMDXComponent=!0}}]);