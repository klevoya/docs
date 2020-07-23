(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return s}));var r=n(2),a=n(9),c=(n(0),n(162)),o={title:"Account"},i={id:"api/account",isDocsHomePage:!1,title:"Account",description:"Accounts represent EOSIO accounts and are the main form of interacting with the Hydra blockchain environment.",source:"@site/docs/api/account.md",permalink:"/hydra/api/account",editUrl:"https://github.com/klevoya/docs/edit/master/docs/api/account.md",sidebar:"docs",previous:{title:"Blockchain",permalink:"/hydra/api/blockchain"},next:{title:"Account.Contract",permalink:"/hydra/api/contract"}},u=[{value:"Methods",id:"methods",children:[{value:"setContract(contract: Contract): void",id:"setcontractcontract-contract-void",children:[]},{value:"getTableRowsScoped(tableName: string): Dictionary&lt;TableRowStructure[]&gt;",id:"gettablerowsscopedtablename-string-dictionarytablerowstructure",children:[]},{value:"resetTables(): void",id:"resettables-void",children:[]},{value:"loadFixtures(tableName?: string, fixtureScopeRowsMap?: Dictionary&lt;TableRowStructure[]&gt;): Promise&lt;void&gt;",id:"loadfixturestablename-string-fixturescoperowsmap-dictionarytablerowstructure-promisevoid",children:[]},{value:"updateAuth(permissionName: string, parentPermissionName: string, auth:TAuthority): Account",id:"updateauthpermissionname-string-parentpermissionname-string-authtauthority-account",children:[]}]},{value:"Fields",id:"fields",children:[{value:"accountName: string",id:"accountname-string",children:[]},{value:"contract: Contract",id:"contract-contract",children:[]}]}],l={rightToc:u};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Accounts represent EOSIO accounts and are the main form of interacting with the Hydra blockchain environment.\nA contract template can be deployed on an account and used to send transactions and read table data."),Object(c.b)("p",null,"Accounts are created using the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/api/blockchain#createaccountaccountname-stringownerauth-tauthority-activeauth-tauthority-account"}),"createAccount method")," of the Blockchain object."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"setcontractcontract-contract-void"},"setContract(contract: Contract): void"),Object(c.b)("p",null,"Sets contract and ABI of this account"),Object(c.b)("h3",{id:"gettablerowsscopedtablename-string-dictionarytablerowstructure"},"getTableRowsScoped(tableName: string): Dictionary<TableRowStructure[]",">"),Object(c.b)("p",null,"Gets the table rows of the specified table, keyed by scopes"),Object(c.b)("h3",{id:"resettables-void"},"resetTables(): void"),Object(c.b)("p",null,"Deletes all of this account's table data"),Object(c.b)("h3",{id:"loadfixturestablename-string-fixturescoperowsmap-dictionarytablerowstructure-promisevoid"},"loadFixtures(tableName?: string, fixtureScopeRowsMap?: Dictionary<TableRowStructure[]",">","): Promise<void",">"),Object(c.b)("p",null,"Loads initial contract data defined for the currently deployed contract."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"If no arguments are defined it loads the data from the JSON fixture files."),Object(c.b)("li",{parentName:"ul"},"If ",Object(c.b)("inlineCode",{parentName:"li"},"tableName")," and ",Object(c.b)("inlineCode",{parentName:"li"},"fixtureScopeRowsMap")," are defined it will only load the table data given by the ",Object(c.b)("inlineCode",{parentName:"li"},"fixtureScopeRowsMap")," argument.")),Object(c.b)("h3",{id:"updateauthpermissionname-string-parentpermissionname-string-authtauthority-account"},"updateAuth(permissionName: string, parentPermissionName: string, auth:",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/hydra/api/types#tauthority"}),"TAuthority"),"): ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/hydra/api/account"}),"Account")),Object(c.b)("p",null,"Updates account's authorization."),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("h3",{id:"accountname-string"},"accountName: string"),Object(c.b)("p",null,"Account's on-chain name"),Object(c.b)("h3",{id:"contract-contract"},"contract: ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/hydra/api/contract"}),"Contract")),Object(c.b)("p",null,"Account's contract object"))}s.isMDXComponent=!0},162:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),s=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,o=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||c;return n?a.a.createElement(m,i(i({ref:e},l),{},{components:n})):a.a.createElement(m,i({ref:e},l))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);