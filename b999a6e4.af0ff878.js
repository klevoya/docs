(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return o})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return p}));var r=t(2),a=t(9),i=(t(0),t(157)),c={title:"Types"},o={id:"api/types",title:"Types",description:"TAuthority",source:"@site/docs/api/types.md",permalink:"/hydra/api/types",editUrl:"https://github.com/klevoya/docs/edit/master/docs/api/types.md",sidebar:"docs",previous:{title:"Account.Contract",permalink:"/hydra/api/contract"}},s=[{value:"TAuthority",id:"tauthority",children:[]},{value:"TActionAuthorization",id:"tactionauthorization",children:[]},{value:"TTransaction",id:"ttransaction",children:[]},{value:"TTransactionTrace",id:"ttransactiontrace",children:[]},{value:"TDeferredTransaction",id:"tdeferredtransaction",children:[]},{value:"THydraConfig",id:"thydraconfig",children:[]},{value:"TProtocolFeatures",id:"tprotocolfeatures",children:[]}],u={rightToc:s};function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tauthority"},"TAuthority"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type TAuthority = {\n  threshold: number;\n  keys: { key: string; weight: number }[];\n  accounts: {\n    permission: { actor: string; permission: string };\n    weight: number;\n  }[];\n  waits: { wait_sec: number; weight: number }[];\n};\n")),Object(i.b)("h2",{id:"tactionauthorization"},"TActionAuthorization"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type TActionAuthorization = {\n  actor: string;\n  permission: string;\n};\n")),Object(i.b)("h2",{id:"ttransaction"},"TTransaction"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export type TTransaction = {\n  actions: {\n    account: string;\n    name: string;\n    authorization: TActionAuthorization[];\n    data: any;\n  }[]\n};\n")),Object(i.b)("h2",{id:"ttransactiontrace"},"TTransactionTrace"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'type TTransactionTrace = {\n  id: string;\n  block_num: number;\n  block_time: string; // "2000-01-01T00:00:00.000"\n  elapsed: number;\n  net_usage: number;\n  scheduled: boolean;\n  action_traces: TActionTrace[];\n  failed_dtrx_trace: any;\n};\n\ntype TActionTrace = {\n  action_ordinal: number;\n  creator_action_ordinal: number;\n  closest_unnotified_ancestor_action_ordinal: number;\n  receipt: {\n    receiver: string;\n    act_digest: string;\n    global_sequence: string;\n    recv_sequence: string;\n    auth_sequence: [string, number][];\n    code_sequence: string;\n    abi_sequence: number;\n  };\n  receiver: string;\n  act: {\n    account: string;\n    name: string;\n    authorization: { actor: string; permission: string }[];\n    data: string;\n  };\n  context_free: boolean;\n  elapsed: number;\n  console: string;\n  trx_id: string;\n  block_num: number;\n  block_time: string; // "2000-01-01T00:00:00.000";\n  account_ram_deltas: any[];\n};\n')),Object(i.b)("h2",{id:"tdeferredtransaction"},"TDeferredTransaction"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'type TDeferredTransaction = {\n  sender: string;\n  sender_id: string;\n  payer: string;\n  expiration: string;\n  ref_block_num: number;\n  ref_block_prefix: number;\n  max_net_usage_words: number;\n  max_cpu_usage_ms: number;\n  delay_sec: number;\n  context_free_actions: any[];\n  actions: TTransaction["actions"];\n  transaction_extensions: any[];\n};\n')),Object(i.b)("h2",{id:"thydraconfig"},"THydraConfig"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type TContractObject = {\n  name: string;\n  wasm: string;\n  abi: string;\n  fixturesDir?: string;\n};\n\ntype THydraConfigOptions = {\n  serverBaseUrl?: string;\n  skipAuth?: boolean;\n};\n\ntype THydraConfig = {\n  contracts: { [key: string]: TContractObject };\n  options: THydraConfigOptions;\n};\n")),Object(i.b)("h2",{id:"tprotocolfeatures"},"TProtocolFeatures"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'// enabled by default\n"PREACTIVATE_FEATURE"\n"ONLY_BILL_FIRST_AUTHORIZER"\n"DISALLOW_EMPTY_PRODUCER_SCHEDULE"\n"ONLY_LINK_TO_EXISTING_PERMISSION"\n"FIX_LINKAUTH_RESTRICTION"\n"RAM_RESTRICTIONS"\n// disabled by default\n"REPLACE_DEFERRED"\n"NO_DUPLICATE_DEFERRED_ID"\n"RESTRICT_ACTION_TO_SELF"\n"FORWARD_SETCODE"\n"GET_SENDER"\n"WEBAUTHN_KEY"\n"WTMSIG_BLOCK_SIGNATURES"\n')))}p.isMDXComponent=!0},157:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),p=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=p(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),l=p(t),d=r,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||i;return t?a.a.createElement(m,o(o({ref:e},u),{},{components:t})):a.a.createElement(m,o({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:r,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);