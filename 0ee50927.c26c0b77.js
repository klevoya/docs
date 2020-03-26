(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),c=(n(0),n(155)),o={title:"Deferred Transactions"},i={id:"guides/deferred-tx",title:"Deferred Transactions",description:"On real EOSIO networks, when a smart contract schedules a deferred transaction, it might or might not be picked up and executed by a block producing node after the specified delay.",source:"@site/docs/guides/deferred-tx.md",permalink:"/docs/hydra/guides/deferred-tx",editUrl:"https://github.com/klevoya/docs/edit/master/docs/guides/deferred-tx.md",sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/hydra/guides/tokens"},next:{title:"CLI",permalink:"/docs/hydra/cli/cli"}},s=[],d={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"On real EOSIO networks, when a smart contract schedules a deferred transaction, it might or might not be picked up and executed by a block producing node after the specified delay.\nThis non-determinism is not desirable for testing, therefore, the deferred transaction model in Hydra is different: Deferred transactions are recorded, but not automatically executed. They can be manually executed at any time disregarding their specified delay."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'let blockchain = new Blockchain(config);\nlet tester = blockchain.createAccount(`tester`);\ntester.setContract(blockchain.contractTemplates[`deferredtx`]);\n\ntest(async () => {\n  // assume the schedule action of the contract schedules a deferred tx\n  await tester.contract.schedule();\n\n  let deferredTransactions = blockchain.getDeferredTransactions();\n\n  expect(deferredTransactions).toMatchObject([\n    {\n      actions: [\n        {\n          account: "tester",\n          name: "scheduledef",\n          authorization: [\n            {\n              actor: "tester",\n              permission: "active"\n            }\n          ],\n          data: {\n            from_contract: "tester",\n            value: "1"\n          }\n        }\n      ],\n      delay_sec: 1\n    }\n  ]);\n\n  // deferred transactions are like standard transactions\n  // and can be executed using the sendTransaction method\n  await blockchain.sendTransaction(deferredTransactions[0]);\n  deferredTransactions = blockchain.getDeferredTransactions();\n  // when a deferred transaction is executed, it is **not** cleared\n  expect(deferredTransactions.length).toBe(2);\n\n  // deferred transactions must be cleared manually\n  blockchain.clearDeferredTransactions();\n  deferredTransactions = blockchain.getDeferredTransactions();\n  expect(deferredTransactions.length).toBe(0);\n});\n')))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,b=u["".concat(o,".").concat(p)]||u[p]||f[p]||c;return n?a.a.createElement(b,i({ref:t},d,{components:n})):a.a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<c;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);