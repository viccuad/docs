"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[71751],{6690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/writing-policies/rust/write-validation-logic","title":"Writing validation logic","description":"Writing validation logic in Rust for a Kubewarden policy","source":"@site/versioned_docs/version-1.20/tutorials/writing-policies/rust/04-write-validation-logic.md","sourceDirName":"tutorials/writing-policies/rust","slug":"/tutorials/writing-policies/rust/write-validation-logic","permalink":"/1.20/tutorials/writing-policies/rust/write-validation-logic","draft":false,"unlisted":false,"editUrl":"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.20/tutorials/writing-policies/rust/04-write-validation-logic.md","tags":[],"version":"1.20","lastUpdatedAt":1742897255000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Writing validation logic","title":"Writing validation logic","description":"Writing validation logic in Rust for a Kubewarden policy","keywords":["kubewarden","kubernetes","policy","writing","rust","validation logic"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","validation-logic"],"doc-persona":["kubewarden-policy-developer"]},"sidebar":"docs","previous":{"title":"Defining policy settings","permalink":"/1.20/tutorials/writing-policies/rust/define-policy-settings"},"next":{"title":"Creating a new mutation policy","permalink":"/1.20/tutorials/writing-policies/rust/mutation-policy"}}');var s=t(74848),a=t(28453);const o={sidebar_label:"Writing validation logic",title:"Writing validation logic",description:"Writing validation logic in Rust for a Kubewarden policy",keywords:["kubewarden","kubernetes","policy","writing","rust","validation logic"],"doc-type":["tutorial"],"doc-topic":["kubewarden","writing-policies","rust","validation-logic"],"doc-persona":["kubewarden-policy-developer"]},r=void 0,d={},l=[{value:"Unit tests",id:"unit-tests",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rust/write-validation-logic"})}),"\n",(0,s.jsxs)(n.p,{children:["It's time to write the actual validation code.\nIt's defined in the ",(0,s.jsx)(n.code,{children:"src/lib.rs"})," file.\nIn this file you can find a function called ",(0,s.jsx)(n.code,{children:"validate"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This is the scaffolding provided function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"showLineNumbers",children:'fn validate(payload: &[u8]) -> CallResult {\n    // \u2780\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    info!(LOG_DRAIN, "starting validation");\n    if validation_request.request.kind.kind != apicore::Pod::KIND {\n        warn!(LOG_DRAIN, "Policy validates Pods only. Accepting resource"; "kind" => &validation_request.request.kind.kind);\n        return kubewarden::accept_request();\n    }\n    // TODO: you can unmarshal any Kubernetes API type you are interested in\n    // \u2781\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            // TODO: your logic goes here\n            // \u2782\n            if pod.metadata.name == Some("invalid-pod-name".to_string()) {\n                let pod_name = pod.metadata.name.unwrap();\n                info!(\n                    LOG_DRAIN,\n                    "rejecting pod";\n                    "pod_name" => &pod_name\n                );\n                kubewarden::reject_request(\n                    Some(format!("pod name {} is not accepted", &pod_name)),\n                    None,\n                    None,\n                    None,\n                )\n            } else {\n                info!(LOG_DRAIN, "accepting resource");\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // TODO: handle as you wish\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            warn!(LOG_DRAIN, "cannot unmarshal resource: this policy does not know how to evaluate this resource; accept it");\n            // \u2783\n            kubewarden::accept_request()\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Walking through the code listing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the line marked \u2780. Parse the incoming ",(0,s.jsx)(n.code,{children:"payload"})," into a ",(0,s.jsx)(n.code,{children:"ValidationRequest<Setting>"})," object.\nThis automatically populates the ",(0,s.jsx)(n.code,{children:"Settings"})," instance inside the ",(0,s.jsx)(n.code,{children:"ValidationRequest"})," with the parameters provided by the user."]}),"\n",(0,s.jsxs)(n.li,{children:["In the line marked \u2781. Convert the Kubernetes raw JSON object embedded into the request into an instance of the\n",(0,s.jsx)(n.a,{href:"https://arnavion.github.io/k8s-openapi/v0.11.x/k8s_openapi/api/core/v1/struct.Pod.html",children:"Pod struct"})]}),"\n",(0,s.jsxs)(n.li,{children:["In the line marked \u2782. The request has a Pod object, the code approves only the requests that don't have ",(0,s.jsx)(n.code,{children:"metadata.name"})," equal to the hard-coded value ",(0,s.jsx)(n.code,{children:"invalid-pod-name"})]}),"\n",(0,s.jsx)(n.li,{children:"In the line marked \u2783. The request doesn't contain a Pod object, hence the policy accepts the request."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As you can see, the code is already doing a validation that resembles the one you want to implement.\nYou just have to remove the hard-coded value and use the values provided by the user via the policy settings."}),"\n",(0,s.jsxs)(n.p,{children:["You can do by replacing the scaffolding ",(0,s.jsx)(n.code,{children:"validate"})," function, in ",(0,s.jsx)(n.code,{children:"src/lib.rs"}),", with this one:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn validate(payload: &[u8]) -> CallResult {\n    let validation_request: ValidationRequest<Settings> = ValidationRequest::new(payload)?;\n\n    info!(LOG_DRAIN, "starting validation");\n    if validation_request.request.kind.kind != apicore::Pod::KIND {\n        warn!(LOG_DRAIN, "Policy validates Pods only. Accepting resource"; "kind" => &validation_request.request.kind.kind);\n        return kubewarden::accept_request();\n    }\n\n    match serde_json::from_value::<apicore::Pod>(validation_request.request.object) {\n        Ok(pod) => {\n            let pod_name = pod.metadata.name.unwrap_or_default();\n            if validation_request\n                .settings\n                .invalid_names\n                .contains(&pod_name)\n            {\n                kubewarden::reject_request(\n                    Some(format!("pod name {:?} is not accepted", pod_name)),\n                    None,\n                    None,\n                    None,\n                )\n            } else {\n                kubewarden::accept_request()\n            }\n        }\n        Err(_) => {\n            // We were forwarded a request we cannot unmarshal or\n            // understand, just accept it\n            kubewarden::accept_request()\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,s.jsx)(n.p,{children:"Finally, you can create unit tests to check the validation code works as\nexpected."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"lib.rs"})," file already has tests defined at the bottom of the file, and as\nyou can see, Kubewarden's Rust SDK provides test helpers too."]}),"\n",(0,s.jsxs)(n.p,{children:["Moreover, the scaffold project already ships with default\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Test_fixture#Software",children:"test fixtures"})," in\nthe ",(0,s.jsx)(n.code,{children:"test_data"})," directory. You are going to use of these recorded\nadmission requests to write your unit tests."]}),"\n",(0,s.jsxs)(n.p,{children:["Change the contents of the test section at the end of ",(0,s.jsx)(n.code,{children:"src/lib.rs"})," to look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[cfg(test)]\nmod tests {\n    use super::*;\n\n    use kubewarden_policy_sdk::test::Testcase;\n    use std::collections::HashSet;\n\n    #[test]\n    fn accept_pod_with_valid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("bad_name1"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with valid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn reject_pod_with_invalid_name() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("nginx"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/pod_creation.json";\n        let tc = Testcase {\n            name: String::from("Pod creation with invalid name"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: false,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n\n    #[test]\n    fn accept_request_with_non_pod_resource() -> Result<(), ()> {\n        let mut invalid_names = HashSet::new();\n        invalid_names.insert(String::from("prod"));\n        let settings = Settings { invalid_names };\n\n        let request_file = "test_data/ingress_creation.json";\n        let tc = Testcase {\n            name: String::from("Ingress creation"),\n            fixture_file: String::from(request_file),\n            expected_validation_result: true,\n            settings,\n        };\n\n        let res = tc.eval(validate).unwrap();\n        assert!(\n            res.mutated_object.is_none(),\n            "Something mutated with test case: {}",\n            tc.name,\n        );\n\n        Ok(())\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You now have three unit tests defined in ",(0,s.jsx)(n.code,{children:"lib.rs"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"accept_pod_with_valid_name"}),": accepts a Pod with a valid name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reject_pod_with_invalid_name"}),": rejects a Pod with an invalid name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"accept_request_with_non_pod_resource"}),": accept requests that don't have a ",(0,s.jsx)(n.code,{children:"Pod"})," as an object"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can run the unit tests again:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ cargo test\n   Compiling demo v0.1.0 (/home/flavio/hacking/kubernetes/kubewarden/demo)\n    Finished test [unoptimized + debuginfo] target(s) in 3.45s\n     Running target/debug/deps/demo-24670dd6a538fd72\n\nrunning 5 tests\ntest settings::tests::accept_settings_with_a_list_of_invalid_names ... ok\ntest settings::tests::reject_settings_without_a_list_of_invalid_names ... ok\ntest tests::accept_request_with_non_pod_resource ... ok\ntest tests::accept_pod_with_valid_name ... ok\ntest tests::reject_pod_with_invalid_name ... ok\n\ntest result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's all that's required if you need to write a simple validating policy."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);