"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?s.createElement(g,i(i({ref:t},u),{},{components:n})):s.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"End-to-end testing",title:""},i="End-to-end testing",r={unversionedId:"writing-policies/go/e2e-tests",id:"writing-policies/go/e2e-tests",title:"",description:"So far we have tested the policy using a set of Go unit tests. This section shows",source:"@site/docs/writing-policies/go/05-e2e-tests.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/e2e-tests",permalink:"/next/writing-policies/go/e2e-tests",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/05-e2e-tests.md",tags:[],version:"current",lastUpdatedAt:1699878380,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"End-to-end testing",title:""},sidebar:"docs",previous:{title:"Write the Validation Logic",permalink:"/next/writing-policies/go/validation"},next:{title:"Logging",permalink:"/next/writing-policies/go/logging"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"end-to-end-testing"},"End-to-end testing"),(0,a.kt)("p",null,"So far we have tested the policy using a set of Go unit tests. This section shows\nhow we can write end-to-end tests that run against the actual WebAssembly\nbinary produced by TinyGo."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"These tools need to be installed on your development machine:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker or another container engine: used to build the WebAssembly\npolicy. We will rely on the compiler shipped within the official\nTinyGo container image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bats-core/bats-core"},"bats"),": used to write the\ntests and automate their execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/kwctl/releases"},"kwctl"),": CLI tool\nprovided by Kubewarden to run its policies outside of Kubernetes,\namong other actions. This is covered in depth inside of ",(0,a.kt)("a",{parentName:"li",href:"/next/testing-policies/intro"},"this section"),"](/next/testing-policies/intro) of the documentation.")),(0,a.kt)("h2",{id:"writing-tests"},"Writing tests"),(0,a.kt)("p",null,"We are going to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bats-core/bats-core"},"bats")," to write and\nautomate our tests. Each test will be composed by the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the policy using ",(0,a.kt)("inlineCode",{parentName:"li"},"kwctl"),"."),(0,a.kt)("li",{parentName:"ol"},"Perform some assertions against the output produced by the\n",(0,a.kt)("inlineCode",{parentName:"li"},"kwctl"),".")),(0,a.kt)("p",null,"All the end-to-end tests are located inside a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e.bats"),". The\nscaffolded project already includes such a file. We will just change its\ncontents to reflect how our policy behaves."),(0,a.kt)("p",null,"As a final note, for the end-to-end tests, we will use the same test fixtures files\nwe previously used inside of the Go unit tests."),(0,a.kt)("p",null,"The first test ensures a request is approved when no settings are provided:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "accept when no settings are provided" {\n  run kwctl run -r test_data/pod.json policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # request is accepted\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n')),(0,a.kt)("p",null,"We can execute the end-to-end tests by using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make e2e-tests\n")),(0,a.kt)("p",null,"This will produce the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bats e2e.bats\n \u2713 accept when no settings are provided\n\n1 test, 0 failures\n")),(0,a.kt)("p",null,"Let's write a test to ensure a request is approved when a user-defined constraint\nis respected:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "accept because label is satisfying a constraint" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"cc-center": "\\\\d+"}}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*true\') -ne 0 ]\n}\n')),(0,a.kt)("p",null,"Next, we can write a test to ensure a request is accepted when none of the\nlabels is on the deny list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "accept labels are not on deny list" {\n  run kwctl run \\\n    -r test_data/pod.json \\\n    --settings-json \'{"denied_labels": ["foo", "bar"]}\' \\\n    policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ $(expr "$output" : \'.*"allowed":true.*\') -ne 0 ]\n}\n')),(0,a.kt)("p",null,"Let's improve the test coverage by adding a test that rejects a request\nbecause one of the labels is on the deny list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "reject because label is on deny list" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"denied_labels": ["foo", "owner"]}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*false\') -ne 0 ]\n  [ $(expr "$output" : ".*Label owner is on the deny list.*") -ne 0 ]\n}\n')),(0,a.kt)("p",null,"The following test ensures a request is rejected when one of its labels doesn't\nsatisfy the constraint provided by the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "reject because label is not satisfying a constraint" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"cc-center": "team-\\\\d+"}}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*false\') -ne 0 ]\n  [ $(expr "$output" : ".*The value of cc-center doesn\'t pass user-defined constraint.*") -ne 0 ]\n}\n')),(0,a.kt)("p",null,"Now let's make sure the validation fails if one of the constrained labels is\nnot found:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "reject because constrained label is missing" {\n  run kwctl run annotated-policy.wasm \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"organization": "\\\\d+"}}\'\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ "$status" -eq 0 ]\n  [ $(expr "$output" : \'.*allowed.*false\') -ne 0 ]\n  [ $(expr "$output" : ".*Constrained label organization not found inside of Pod.*") -ne 0 ]\n}\n')),(0,a.kt)("p",null,"We want to ensure settings' validation is working properly. This can be done\nwith the following tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@test "fail settings validation because of conflicting labels" {\n  run kwctl run \\\n    -r test_data/pod.json \\\n    --settings-json \'{"denied_labels": ["foo", "cc-center"], "constrained_labels": {"cc-center": "^cc-\\\\d+$"}}\' \\\n    policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  # settings validation failed\n  [ $(expr "$output" : \'.*"valid":false.*\') -ne 0 ]\n  [ $(expr "$output" : ".*Provided settings are not valid: These labels cannot be constrained and denied at the same time: Set{cc-center}.*") -ne 0 ]\n}\n\n@test "fail settings validation because of invalid constraint" {\n  run kwctl run \\\n    -r test_data/pod.json \\\n    --settings-json \'{"constrained_labels": {"cc-center": "^cc-[12$"}}\' \\\n    policy.wasm\n\n  # this prints the output when one the checks below fails\n  echo "output = ${output}"\n\n  [ $(expr "$output" : \'.*"valid":false.*\') -ne 0 ]\n  [ $(expr "$output" : ".*Provided settings are not valid: error parsing regexp.*") -ne 0 ]\n}\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have reached a pretty good level of coverage, let's run all the end-to-end\ntests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ make e2e-tests\nbats e2e.bats\ne2e.bats\n \u2713 accept when no settings are provided\n \u2713 accept because label is satisfying a constraint\n \u2713 accept labels are not on deny list\n \u2713 reject because label is on deny list\n \u2713 reject because label is not satisfying a constraint\n \u2713 reject because constrained label is missing\n \u2713 fail settings validation because of conflicting labels\n \u2713 fail settings validation because of invalid constraint\n\n8 tests, 0 failures\n")))}d.isMDXComponent=!0}}]);