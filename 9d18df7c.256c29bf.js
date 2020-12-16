(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(c,".").concat(p)]||u[p]||b[p]||i;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(108)),c={title:"Initial Table Data"},o={unversionedId:"guides/initial-contract-tables",id:"guides/initial-contract-tables",isDocsHomePage:!1,title:"Initial Table Data",description:"Hydra allows loading of smart contract table data which is very useful for defining the initial context the tests will run in.",source:"@site/docs/guides/initial-contract-tables.md",slug:"/guides/initial-contract-tables",permalink:"/hydra/guides/initial-contract-tables",editUrl:"https://github.com/klevoya/docs/edit/master/docs/guides/initial-contract-tables.md",version:"current",sidebar:"docs",previous:{title:"Custom Permissions",permalink:"/hydra/guides/permissions"},next:{title:"Tokens",permalink:"/hydra/guides/tokens"}},s=[{value:"Adding the <code>hydraload</code> action to smart contracts",id:"adding-the-hydraload-action-to-smart-contracts",children:[]},{value:"Creating the JSON fixtures",id:"creating-the-json-fixtures",children:[]},{value:"Loading Fixtures",id:"loading-fixtures",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra allows loading of smart contract table data which is very useful for defining the initial context the tests will run in.\nInstead of defining a sequence of actions that results in the table state, the table state is simply defined in JSON files."),Object(i.b)("h2",{id:"adding-the-hydraload-action-to-smart-contracts"},"Adding the ",Object(i.b)("inlineCode",{parentName:"h2"},"hydraload")," action to smart contracts"),Object(i.b)("p",null,"Every contract template making use of this feature requires adding the ",Object(i.b)("inlineCode",{parentName:"p"},"hydraload")," action which can be added by including the ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.hpp")," helper file.\nThis C++ header file is created in ",Object(i.b)("inlineCode",{parentName:"p"},"tests/hydra.hpp")," when running the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/cli/cli#init"}),"init command")," and can be copied to the smart contract source files."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Why is this needed?")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ABI of a contract defines the table ",Object(i.b)("em",{parentName:"p"},"structure"),", but the primary and secondary key derivation functions are WASM-internal. To make sure the loaded data can also be used from within the contract, the corresponding keys for each index defined need to be computed for each table record."))),Object(i.b)("p",null,"Adding the ",Object(i.b)("inlineCode",{parentName:"p"},"hydraload")," action is done using the ",Object(i.b)("inlineCode",{parentName:"p"},"HYDRA_FIXTURE_ACTION")," macro:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include "hydra.hpp"\n\nclass [[eosio::contract("eosio.token")]] token : public contract {\n  struct [[eosio::table]] currency_stats {\n    asset    supply;\n    asset    max_supply;\n    name     issuer;\n\n    uint64_t primary_key()const { return supply.symbol.code().raw(); }\n  };\n  typedef eosio::multi_index< "accounts"_n, account > accounts;\n  typedef eosio::multi_index< "stat"_n, currency_stats > stats;\n\n  // the HYDRA_FIXTURE_ACTION macro adds the hydra action\n  // to the contract and the ABI\n  // each table to load data for must be specified here\n  // the macro takes a list of tuples, each tuple defining a table\n  // ((table_name)(struct_name)(multi_index_typedef))\n  // the same order as the template parameters & name of the multi_index typedef\n  HYDRA_FIXTURE_ACTION(\n    ((accounts)(account)(accounts))\n    ((stat)(currency_stats)(stats))\n  )\n}\n\n// if a custom apply function is used, the hydraload action can be exposed\n// using the HYDRA_APPLY_FIXTURE_ACTION(CONTRACT_CLASS_NAME) macro\nextern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {\n  if (code == receiver) {\n    HYDRA_APPLY_FIXTURE_ACTION(token)\n    switch (action) { EOSIO_DISPATCH_HELPER(token, (create)(issue)(transfer)) }\n  }\n}\n')),Object(i.b)("p",null,"It is recommended to remove the ",Object(i.b)("inlineCode",{parentName:"p"},"hydraload")," action before deploying the smart contract to production.\nHowever, even if this precaution is not performed it shouldn't be a security concern as the ",Object(i.b)("inlineCode",{parentName:"p"},"hydraload")," action requires the authorization of the ",Object(i.b)("inlineCode",{parentName:"p"},"eosio")," system account.\nIncluding or excluding the ",Object(i.b)("inlineCode",{parentName:"p"},"hydraload")," action can be toggled by defining the ",Object(i.b)("inlineCode",{parentName:"p"},"HYDRA_SKIP_HELPERS")," macro."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// define this for production use\n#define HYDRA_SKIP_HELPERS\n")),Object(i.b)("h2",{id:"creating-the-json-fixtures"},"Creating the JSON fixtures"),Object(i.b)("p",null,"The contract table data to load is defined through JSON files - one JSON file per table. Running the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/cli/cli#init"}),"init command")," creates example boilerplate files in ",Object(i.b)("inlineCode",{parentName:"p"},"tests/fixtures/<contract>/<table>.json")),Object(i.b)("p",null,"The structure of a JSON fixture is a JSON object mapping scopes to an array of table records."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// example eosio.token accounts table\n// scope is account name\n// table record must have all fields and correct types\n// as defined by the table structure in the ABI\n{\n    "tester1": [\n        {\n            "balance": "70.6013 EOS"\n        }\n    ],\n    "player1": [\n        {\n            "balance": "100.0000 EOS"\n        }\n    ],\n    "player2": [\n        {\n            "balance": "100.0000 EOS"\n        }\n    ]\n}\n')),Object(i.b)("p",null,"The path to the fixtures must be added to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/cli/config"}),Object(i.b)("inlineCode",{parentName:"a"},"hydra.yml")," configuration file"),"."),Object(i.b)("h2",{id:"loading-fixtures"},"Loading Fixtures"),Object(i.b)("p",null,"Once the contract is compiled with the hydraload action exposed in the ABI, tables can be loaded by using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/api/account"}),"Account's ",Object(i.b)("inlineCode",{parentName:"a"},"loadFixtures"))," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// make sure fixtures is defined for contract template in config\nlet blockchain = new Blockchain(config);\nlet tester = blockchain.createAccount(`tester`);\ntester.setContract(blockchain.contractTemplates[`eosio.token`]);\n\n// loads fixtures for the currently deployed contract on tester\n// no arguments loads data for all tables from the JSON files\nawait tester.loadFixtures();\n\n// reset tables before each test\nbeforeEach(async () => {\n  tester.resetTables();\n  await tester.loadFixtures();\n});\n\ntest(`some test that requires different initial data`, async () => {\n  // loads fixtures for `accounts` table given the data\n  await tester.loadFixtures(`accounts`, {\n      // scope: [row1, row2, ...],\n      "tester": [{"balance": "0.0000 EOS"}],\n      "tester2": [{"balance": "100.0000 EOS"}],\n  });\n  // data can still be defined and loaded from a JSON file\n  await tester.loadFixtures(`accounts`, require(`./fixtures/lots-of-balances.json`));\n})\n')))}d.isMDXComponent=!0}}]);