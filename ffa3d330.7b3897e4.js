(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=r(0),c=r.n(i),o=r(160),s=function(e){var t=e.id,r=e.src,n=e.autoPlay,a=c.a.useRef();return function(e){var t=e.ref,r=e.src,n=e.id,a=e.autoPlay;Object(i.useEffect)((function(){if(console.log(t.current),t.current){var e=document.createElement("script");return e.src=r,e.id=n,e.dataset.autoplay=a,e.dataset.size="small",e.dataset.rows=16,e.async=!0,t.current.appendChild(e),function(){t.current&&t.current.removeChild(e)}}}),[t])}({ref:a,id:t,src:r,autoPlay:n}),c.a.createElement("div",{key:t,ref:a})},l={title:"Getting Started"},u={id:"about/getting-started",title:"Getting Started",description:"Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.",source:"@site/docs/about/getting-started.md",permalink:"/hydra/about/getting-started",editUrl:"https://github.com/klevoya/docs/edit/master/docs/about/getting-started.md",sidebar:"docs",next:{title:"Overview",permalink:"/hydra/guides/overview"}},p=[{value:"Quick Start",id:"quick-start",children:[{value:"Setup",id:"setup",children:[]},{value:"Writing tests",id:"writing-tests",children:[]}]}],d={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.\nBesides Hydra, installing additional software or running your own local blockchain node is ",Object(o.b)("strong",{parentName:"p"},"not")," required. "),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("h3",{id:"setup"},"Setup"),Object(o.b)("p",null,"Hydra is a Node.js library, so make sure ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js/NPM")," is installed."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @klevoya/hydra\n")),Object(o.b)("p",null,"Log in to your existing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://klevoya.com"}),"Klevoya account")," or sign up by running the ",Object(o.b)("inlineCode",{parentName:"p"},"login")," command and following the instructions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hydra login\n")),Object(o.b)(s,{id:"asciicast-nhP4pvp7hv6L6FFJu4kyUYHzc",src:"https://asciinema.org/a/nhP4pvp7hv6L6FFJu4kyUYHzc.js",autoPlay:!0,mdxType:"Asciinema"}),Object(o.b)("h3",{id:"writing-tests"},"Writing tests"),Object(o.b)("p",null,"Hydra tests are written in JavaScript/TypeScript using a JavaScript testing library of your choice."),Object(o.b)("p",null,"Navigate to your contract project's root folder and compile your smart contract.\nAfter that, run the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra init")," command selecting the contracts you want to test.\nIt will initialize an NPM project and set up a JavaScript testing library (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jestjs.io/"}),"jest"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd eos-project\n\nhydra init\n")),Object(o.b)(s,{id:"asciicast-u4CCaH93v6Hti0VBP8gErgskT",src:"https://asciinema.org/a/u4CCaH93v6Hti0VBP8gErgskT.js",mdxType:"Asciinema"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"init")," command also bootstraps your project by creating a ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.yml")," configuration file and a test boilerplate in the ",Object(o.b)("inlineCode",{parentName:"p"},"tests")," directory.\nThen run your tests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm test\n")))}b.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,o({ref:t},l,{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);