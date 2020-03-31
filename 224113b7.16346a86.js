(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),i=(n(0),n(155)),a={title:"Custom Permissions"},c={id:"guides/permissions",title:"Custom Permissions",description:"It can be useful to mirror the permission structure of the production environment in order to catch unsatisfied authorization errors early.",source:"@site/docs/guides/permissions.md",permalink:"/hydra/guides/permissions",editUrl:"https://github.com/klevoya/docs/edit/master/docs/guides/permissions.md",sidebar:"docs",previous:{title:"Overview",permalink:"/hydra/guides/overview"},next:{title:"Initial Table Data",permalink:"/hydra/guides/initial-contract-tables"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It can be useful to mirror the permission structure of the production environment in order to catch unsatisfied authorization errors early.\nHydra makes this possible by creating custom permissions and linking these permissions to specific contract actions of an account. (",Object(i.b)("inlineCode",{parentName:"p"},"linkAuth"),")"),Object(i.b)("p",null,"There shouldn't be any need to attach EOSIO public keys to permissions for transaction signing while testing. Hydra automatically handles this part by using a default key."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"let blockchain = new Blockchain(config);\n// the eosio system account always exists\nlet eosio = blockchain.accounts.eosio;\nlet tester = blockchain.createAccount(`tester`);\ntester.setContract(blockchain.contractTemplates[`eosio.token`]);\n\n// create new 'child' permission with 'active' as parent\ntester.updateAuth(`child`, `active`, {\n  threshold: 1,\n  // omit 'keys', Hydra will add a default key\n  // keys: []\n  // can optionally add accounts\n  accounts: [\n    {\n      permission: {\n        actor: tester.accountName,\n        permission: `eosio.code`\n      },\n      weight: 1\n    }\n  ]\n});\n\n// link tester@child to tester::create action\nawait eosio.contract.linkauth(\n  {\n    account: tester.accountName,\n    requirement: \"child\",\n    code: tester.accountName,\n    type: \"create\"\n  },\n  [{ actor: tester.accountName, permission: `active` }]\n);\nawait tester.contract.create(\n  {\n    issuer: tester.accountName,\n    maximum_supply: `1.0000 TOKENS`\n  },\n  // specify transaction to run with child permission\n  [{ actor: tester.accountName, permission: `child` }]\n);\n")))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return n?o.a.createElement(f,c({ref:t},u,{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);