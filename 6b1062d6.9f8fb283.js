(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(94)),c={title:"Accessing Contract Prints"},i={unversionedId:"guides/contract-prints",id:"guides/contract-prints",isDocsHomePage:!1,title:"Accessing Contract Prints",description:"For debugging purposes one can add eosio::print instructions to a contract.",source:"@site/docs/guides/contract-prints.md",slug:"/guides/contract-prints",permalink:"/hydra/guides/contract-prints",editUrl:"https://github.com/klevoya/docs/edit/master/docs/guides/contract-prints.md",version:"current",sidebar:"docs",previous:{title:"Tokens",permalink:"/hydra/guides/tokens"},next:{title:"Deferred Transactions",permalink:"/hydra/guides/deferred-tx"}},s=[{value:"Reading contract console prints",id:"reading-contract-console-prints",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For debugging purposes one can add ",Object(o.b)("inlineCode",{parentName:"p"},"eosio::print")," instructions to a contract.\nThese printed messages can be read in Hydra by accessing the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/api/types#ttransactiontrace"}),"transaction trace object")," that is returned when executing transactions on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/api/contract"}),"account contract object"),"."),Object(o.b)("h2",{id:"reading-contract-console-prints"},"Reading contract console prints"),Object(o.b)("p",null,"For a given contract with a ",Object(o.b)("inlineCode",{parentName:"p"},"hello")," action that prints the username a test could be written as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'ACTION hello(name user) {\n  print("Hello ", user, "!");\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'it("prints the correct message", async () => {\n  expect.assertions(1);\n\n  const txTrace = await tester.contract.hello({\n    user: `bob`,\n  });\n\n  // get the print output of the first action (\'hello\' action)\n  const consoleOutput = txTrace.action_traces[0].console;\n\n  expect(consoleOutput).toBe("Hello bob!");\n});\n')),Object(o.b)("p",null,"Printing the contract console output to the test runner output is done by using JavaScript's ",Object(o.b)("inlineCode",{parentName:"p"},"console.log")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'it("prints the correct message", async () => {\n  expect.assertions(1);\n\n  const txTrace = await tester.contract.transfer(\n    {\n      from: `alice`,\n      to: `bob`,\n      quantity: `100.0000 EOS`,\n      memo: ``,\n    },\n    [{ actor: `alice`, permission: `active` }]\n  );\n\n  // get all print output of the transfer action and its created notifications\n  const consoleOutput = txTrace.action_traces.map((t) => t.console).join(``);\n\n  // print it to test runner\'s stdout\n  console.log(consoleOutput);\n  // ...\n});\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Console prints are recorded per action")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is no single console output for a transaction, instead, each action carries its own console output in the corresponding action trace.\nMake sure to access the correct action trace when dealing with inline actions or notifications to other contracts.\nFor example, when transferring tokens using the ",Object(o.b)("inlineCode",{parentName:"p"},"eosio.token")," contract three action traces are created, one for the initial action on the ",Object(o.b)("inlineCode",{parentName:"p"},"eosio.token")," contract and two for the notifications sent to the sender and receiver."))))}l.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);