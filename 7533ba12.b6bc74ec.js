(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(94)),o={title:"Continuous Integration (CI)"},c={unversionedId:"guides/ci",id:"guides/ci",isDocsHomePage:!1,title:"Continuous Integration (CI)",description:"Hydra allows developers to easily integrate smart contract tests into their continuous integration workflow.",source:"@site/docs/guides/ci.md",slug:"/guides/ci",permalink:"/hydra/guides/ci",editUrl:"https://github.com/klevoya/docs/edit/master/docs/guides/ci.md",version:"current",sidebar:"docs",previous:{title:"Deferred Transactions",permalink:"/hydra/guides/deferred-tx"},next:{title:"CLI",permalink:"/hydra/cli/cli"}},s=[{value:"CI Authentication",id:"ci-authentication",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra allows developers to easily integrate smart contract tests into their continuous integration workflow."),Object(i.b)("p",null,"The CI server needs to support a node runtime to install the dependencies defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file.\nThese are all dependencies that need to be installed on the CI server and running the tests works the same way as on a local machine."),Object(i.b)("p",null,"However, you need to make sure that your CI server is authenticated."),Object(i.b)("h2",{id:"ci-authentication"},"CI Authentication"),Object(i.b)("p",null,"Running the interactive ",Object(i.b)("inlineCode",{parentName:"p"},"hydra login")," command is not an option on most CI servers.\nInstead, we recommend running ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/cli/cli#login"}),"hydra login")," locally and passing the resulting JSON authentication payload as a ",Object(i.b)("em",{parentName:"p"},"secure")," environment variable to the CI server."),Object(i.b)("p",null,"The JSON authentication payload can be found in the ",Object(i.b)("inlineCode",{parentName:"p"},"~/.hydra/auth.json")," file after login. It can then be passed as the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"HYDRA_AUTH")," environment variable")," to the CI server.\nThe authentication info automatically renews expired authentication tokens as it includes a refresh token, therefore this setup only needs to be done once."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Security")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure your authentication info is not publicly available or leaked by your CI output."))))}u.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);