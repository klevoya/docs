(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return d}));var r=n(1),a=n(9),c=(n(0),n(155)),o={title:"Account"},i={id:"api/account",title:"Account",description:"Accounts represent EOSIO accounts and are the main form of interacting with the Hydra blockchain environment.",source:"@site/docs/api/account.md",permalink:"/docs/hydra/api/account",editUrl:"https://github.com/klevoya/docs/edit/master/docs/api/account.md",sidebar:"docs",previous:{title:"Blockchain",permalink:"/docs/hydra/api/blockchain"},next:{title:"Account.Contract",permalink:"/docs/hydra/api/contract"}},u=[{value:"Methods",id:"methods",children:[{value:"setContract(contract: Contract): void",id:"setcontractcontract-contract-void",children:[]},{value:"getTableRowsScoped(tableName: string): Dictionary&lt;TableStructure[]&gt;",id:"gettablerowsscopedtablename-string-dictionarytablestructure",children:[]},{value:"resetTables(): void",id:"resettables-void",children:[]},{value:"loadFixtures(): Promise&lt;void&gt;",id:"loadfixtures-promisevoid",children:[]},{value:"updateAuth(permissionName: string, parentPermissionName: string, auth:TAuthority): Account",id:"updateauthpermissionname-string-parentpermissionname-string-authtauthority-account",children:[]}]},{value:"Fields",id:"fields",children:[{value:"accountName: string",id:"accountname-string",children:[]},{value:"contract: Contract",id:"contract-contract",children:[]}]}],s={rightToc:u};function d(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Accounts represent EOSIO accounts and are the main form of interacting with the Hydra blockchain environment.\nA contract template can be deployed on an account and used to send transactions and read table data."),Object(c.b)("p",null,"Accounts are created using the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/hydra/api/blockchain#createaccountaccountname-stringownerauth-tauthority-activeauth-tauthority-account"}),"createAccount method")," of the Blockchain object."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"setcontractcontract-contract-void"},"setContract(contract: Contract): void"),Object(c.b)("p",null,"Sets contract and ABI of this account"),Object(c.b)("h3",{id:"gettablerowsscopedtablename-string-dictionarytablestructure"},"getTableRowsScoped(tableName: string): Dictionary<TableStructure[]",">"),Object(c.b)("p",null,"Gets the table rows of the specified table, keyed by scopes"),Object(c.b)("h3",{id:"resettables-void"},"resetTables(): void"),Object(c.b)("p",null,"Deletes all of this account's table data"),Object(c.b)("h3",{id:"loadfixtures-promisevoid"},"loadFixtures(): Promise<void",">"),Object(c.b)("p",null,"Loads initial contract data defined for the currently deployed contract"),Object(c.b)("h3",{id:"updateauthpermissionname-string-parentpermissionname-string-authtauthority-account"},"updateAuth(permissionName: string, parentPermissionName: string, auth:",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/docs/hydra/api/types#tauthority"}),"TAuthority"),"): ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/docs/hydra/api/account"}),"Account")),Object(c.b)("p",null,"Updates account's authorization."),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("h3",{id:"accountname-string"},"accountName: string"),Object(c.b)("p",null,"Account's on-chain name"),Object(c.b)("h3",{id:"contract-contract"},"contract: ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"/docs/hydra/api/contract"}),"Contract")),Object(c.b)("p",null,"Account's contract object"))}d.isMDXComponent=!0},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a.a.createContext({}),d=function(t){var e=a.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i({},e,{},t)),n},l=function(t){var e=d(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=d(n),b=r,h=l["".concat(o,".").concat(b)]||l[b]||p[b]||c;return n?a.a.createElement(h,i({ref:e},s,{components:n})):a.a.createElement(h,i({ref:e},s))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);