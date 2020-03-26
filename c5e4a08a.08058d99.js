(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),c=(n(0),n(155)),i={title:"Overview"},o={id:"guides/overview",title:"Overview",description:"# Folder Structure",source:"@site/docs/guides/overview.md",permalink:"/docs/hydra/guides/overview",editUrl:"https://github.com/klevoya/docs/edit/master/docs/guides/overview.md",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/hydra/about/getting-started"},next:{title:"Custom Permissions",permalink:"/docs/hydra/guides/permissions"}},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"folder-structure"},"Folder Structure"),Object(c.b)("p",null,"After running the ",Object(c.b)("inlineCode",{parentName:"p"},"hydra init")," command the following files and directories are created:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"hydra.yml"),": The ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/hydra/cli/config"}),"configuration file")," defining contract templates that can be referenced in the tests and other general options."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"tests/<contract>.test.js"),": Boilerplate test files for every selected contract."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"fixtures/<contract>/<table>.json"),": These JSON fixture files can be used in the tests to ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/hydra/guides/initial-contract-tables"}),"load initial table contract data"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"hydra.hpp"),": This C++ helper file must be consumed by contracts that want to make use of the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/hydra/guides/initial-contract-tables"}),"loading initial table contract data feature"),".")),Object(c.b)("h1",{id:"test-file"},"Test File"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"init")," command creates separate ",Object(c.b)("inlineCode",{parentName:"p"},"tests/<contract>.test.js")," files for each selected contract. Each test file already contains contract-specific boilerplate to quickly get started writing tests."),Object(c.b)("p",null,"Each test file first imports the hydra library and loads the ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.yml")," config file."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { loadConfig, Blockchain } = require("hydra");\n\nconst config = loadConfig("hydra.yml");\n')),Object(c.b)("p",null,"The test specification starts by creating a new ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hydra/api/blockchain"}),"Blockchain")," object and creates a new ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hydra/api/account"}),"Account")," with the same name as the contract."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Assertion Libraries")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This document uses ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/"}),"jest")," as the assertion library. Any other testing framework can be used, but they might slightly differ in their syntax."))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'describe("eosio.token", () => {\n  let blockchain = new Blockchain(config);\n  let tester = blockchain.createAccount(`eosio.token`);\n\n  // ...\n}\n')),Object(c.b)("p",null,"Note that there is ",Object(c.b)("em",{parentName:"p"},"no need to manage any keys")," for the accounts, although ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hydra/guides/permissions"}),"custom permissions")," can be configured to test the contract under the same permissions as in a production environment."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Once")," before any test is run, the created account's code is set to the contract template. It must have the same key as specified in the loaded config file.\nThe boilerplate also updates the account's ",Object(c.b)("inlineCode",{parentName:"p"},"active")," permission to include the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/issues/3013#issuecomment-388983168"}),Object(c.b)("inlineCode",{parentName:"a"},"eosio.code"))," permission - a requirement if the contract code sends actions or transactions itself."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"beforeAll(async () => {\n  tester.setContract(blockchain.contractTemplates[`eosio.token`]);\n  tester.updateAuth(`active`, `owner`, {\n    accounts: [\n      {\n        permission: {\n          actor: tester.accountName,\n          permission: `eosio.code`\n        },\n        weight: 1\n      }\n    ]\n  });\n});\n")),Object(c.b)("p",null,"Multiple test ",Object(c.b)("em",{parentName:"p"},"tasks")," can be defined in a single test file and it is a good idea to clear the contract's table data before each task.\nThen tests can be written by sending transactions and checking the contract tables. "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'beforeEach(async () => {\n  tester.resetTables();\n});\n\nit("can send the create + issue action", async () => {\n  expect.assertions(1);\n\n  await tester.contract.create({\n    issuer: tester.accountName,\n    maximum_supply: "10000000000.0000 EOS"\n  });\n  await tester.contract.issue({\n    to: tester.accountName,\n    quantity: "42.0000 EOS",\n    memo: "i \u2764\ufe0f hydra"\n  });\n\n  const scope = tester.accountName;\n  expect(tester.getTableRowsScoped(`accounts`)).toEqual({\n    [scope]: [\n      {\n        balance: "42.0000 EOS"\n      }\n    ]\n  });\n});\n')),Object(c.b)("p",null,"Sending transactions from the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hydra/api/account"}),"Account object")," returns a transaction trace that can be used to reason about."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'it("prints the correct thing fast", async () => {\n  expect.assertions(2);\n\n  const txTrace = await tester.contract.print();\n\n  // get all print output from initial \'print\' action + inline actions\n  const consoleOutput = txTrace.action_traces.map(t => t.console).join(``)\n\n  expect(consoleOutput).toBe("this was printed from the contract");\n  // the transaction execution time, note that this is subjective to the Hydra node and will differ from a production environment\n  expect(txTrace.elapsed).toBeLessThan(1000)\n});\n')))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);