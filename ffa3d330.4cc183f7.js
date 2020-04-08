(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(161)),i=r(172),c={title:"Getting Started"},s={id:"about/getting-started",title:"Getting Started",description:"import Asciinema from '@site/src/components/asciinema';",source:"@site/docs/about/getting-started.md",permalink:"/hydra/about/getting-started",editUrl:"https://github.com/klevoya/docs/edit/master/docs/about/getting-started.md",sidebar:"docs",next:{title:"Hello Hydra",permalink:"/hydra/about/hello-hydra"}},l=[{value:"Quick Start",id:"quick-start",children:[{value:"Setup",id:"setup",children:[]},{value:"Writing tests",id:"writing-tests",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.\nBesides Hydra, installing additional software or running your own local blockchain node is ",Object(o.b)("strong",{parentName:"p"},"not")," required. "),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("h3",{id:"setup"},"Setup"),Object(o.b)("p",null,"Hydra is a Node.js library, so make sure ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js/NPM")," is installed."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @klevoya/hydra\n")),Object(o.b)("p",null,"Log in to your existing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://klevoya.com"}),"Klevoya account")," or sign up by running the ",Object(o.b)("inlineCode",{parentName:"p"},"login")," command and following the instructions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"hydra login\n")),Object(o.b)(i.a,{id:"asciicast-nhP4pvp7hv6L6FFJu4kyUYHzc",src:"https://asciinema.org/a/nhP4pvp7hv6L6FFJu4kyUYHzc.js",autoPlay:!0,mdxType:"Asciinema"}),Object(o.b)("h3",{id:"writing-tests"},"Writing tests"),Object(o.b)("p",null,"Hydra tests are written in JavaScript/TypeScript using a JavaScript testing library of your choice."),Object(o.b)("p",null,"Navigate to your contract project's root folder and compile your smart contract.\nAfter that, run the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra init")," command selecting the contracts you want to test.\nIt will initialize an NPM project and set up a JavaScript testing library (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jestjs.io/"}),"jest"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd eos-project\n\nhydra init\n")),Object(o.b)(i.a,{id:"asciicast-PAxoLGM4Qck2APSvquLFcAN4T",src:"https://asciinema.org/a/PAxoLGM4Qck2APSvquLFcAN4T.js",mdxType:"Asciinema"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"init")," command also bootstraps your project by creating a ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.yml")," configuration file and a test boilerplate in the ",Object(o.b)("inlineCode",{parentName:"p"},"tests")," directory.\nThen run your tests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm test\n")),Object(o.b)(i.a,{id:"asciicast-kNeDMxCjx1zZM4AtjFwhxilsE",src:"https://asciinema.org/a/kNeDMxCjx1zZM4AtjFwhxilsE.js",autoPlay:!0,mdxType:"Asciinema"}))}p.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},172:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.id,r=e.src,o=e.rows,i=e.autoPlay,c=e.loop,s=a.a.useRef();return function(e){var t=e.ref,r=e.src,a=e.id,o=e.rows,i=void 0===o?16:o,c=e.autoPlay,s=void 0!==c&&c,l=e.loop,u=void 0!==l&&l;Object(n.useEffect)((function(){if(console.log(t.current),t.current){var e=document.createElement("script");return e.src=r,e.id=a,e.dataset.autoplay=s,e.dataset.loop=u,e.dataset.size="small",e.dataset.rows=i,e.dataset.cols=120,e.async=!0,t.current.appendChild(e),function(){t.current&&t.current.removeChild(e)}}}),[t])}({ref:s,id:t,src:r,rows:o,autoPlay:i,loop:c}),a.a.createElement("div",{key:t,ref:s})}}}]);