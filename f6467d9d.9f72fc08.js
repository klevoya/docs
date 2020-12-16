(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(108)),o={title:"Tokens"},i={unversionedId:"hydra/guides/tokens",id:"hydra/guides/tokens",isDocsHomePage:!1,title:"Tokens",description:"Hydra comes with a set of predefined contract templates that can be used without explicitly defining them in the config file.",source:"@site/docs/hydra/guides/tokens.md",slug:"/hydra/guides/tokens",permalink:"/hydra/hydra/guides/tokens",editUrl:"https://github.com/klevoya/docs/edit/master/docs/hydra/guides/tokens.md",version:"current"},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Hydra comes with a set of predefined ",Object(c.b)("em",{parentName:"p"},"contract templates")," that can be used without explicitly defining them in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/hydra/cli/config"}),"config file"),".\nThe ",Object(c.b)("inlineCode",{parentName:"p"},"eosio.token")," contract is one of them, making it very easy to deploy token contracts and creating/issuing tokens to accounts."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Using a different eosio.token contract")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"In case there's a contract template with the ",Object(c.b)("inlineCode",{parentName:"p"},"eosio.token")," name defined in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/hydra/cli/config"}),"config file"),", it will overwrite the predefined one."))),Object(c.b)("p",null,"The predefined ",Object(c.b)("inlineCode",{parentName:"p"},"eosio.token")," contract uses the eosio.token-v1.7 contract of the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eosio.contracts/tree/3cbe918e57781542c1b0b706621c723f2229a1f1/contracts/eosio.token"}),"eosio.contracts repo")," extended with ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/hydra/hydra/guides/initial-contract-tables"}),"JSON fixture loading"),"."),Object(c.b)("p",null,"Creating tokens and issuing initial balances can be done by creating two ",Object(c.b)("inlineCode",{parentName:"p"},"stat.json")," and ",Object(c.b)("inlineCode",{parentName:"p"},"accounts.json")," fixture files in the ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"tests/fixtures/eosio.token"))," directory."),Object(c.b)("h4",{id:"statjson"},"stat.json"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "EOS": [\n    {\n      "supply": "270.6013 EOS",\n      "max_supply": "10000000000.0000 EOS",\n      "issuer": "eosio.token"\n    }\n  ]\n}\n')),Object(c.b)("h4",{id:"accountsjson"},"accounts.json"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "tester1": [\n    {\n      "balance": "70.6013 EOS"\n    }\n  ],\n  "player1": [\n    {\n      "balance": "100.0000 EOS"\n    }\n  ],\n  "player2": [\n    {\n      "balance": "100.0000 EOS"\n    }\n  ]\n}\n')),Object(c.b)("p",null,"After creating all accounts and loading the fixtures, the token has been created and accounts will have an initial balance."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let blockchain = new Blockchain(config);\nlet tester1 = blockchain.createAccount(`tester1`);\nlet player1 = blockchain.createAccount(`player1`);\nlet player2 = blockchain.createAccount(`player2`);\n\nlet token = blockchain.createAccount(`eosio.token`);\ntoken.setContract(blockchain.contractTemplates[`eosio.token`]);\nawait token.loadFixtures();\n\nconst accountsTable = tester.getTableRowsScoped(`accounts`)\n\nconsole.log(accountsTable)\n// {\n//   tester1: [{ balance: "70.6013 EOS" }],\n//   player1: [{ balance: "100.0000 EOS" }],\n//   player2: [{ balance: "100.0000 EOS" }]\n// }\n')))}b.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);