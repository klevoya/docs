/*! For license information please see 2.a76a69e4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),o=a(88),i=a(81),l=a(82),s=a(10),u="light",d="dark",f=function(e){return e===d?d:u},m=function(){return s.a.canUseDOM?f(document.documentElement.getAttribute("data-theme")):u},h=function(e){try{localStorage.setItem("theme",f(e))}catch(t){console.error(t)}},v=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).colorMode,n=(a=void 0===a?{}:a).disableSwitch,c=void 0!==n&&n,o=Object(r.useState)(m),l=o[0],s=o[1],v=Object(r.useCallback)((function(){s(u),h(u)}),[]),b=Object(r.useCallback)((function(){s(d),h(d)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",f(l))}),[l]),Object(r.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&s(f(e))}catch(t){console.error(t)}}),[s]),Object(r.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;s(t?d:u)}))}),[]),{isDarkTheme:l===d,setLightTheme:v,setDarkTheme:b}},b=a(93);var p=function(e){var t=v(),a=t.isDarkTheme,n=t.setLightTheme,r=t.setDarkTheme;return c.a.createElement(b.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:r}},e.children)},g="docusaurus.tab.",k=function(){var e=Object(r.useState)({}),t=e[0],a=e[1],n=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(g))e[n.substring(g.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),n(e,t)}}},E="docusaurus.announcement.dismiss",O="docusaurus.announcement.id",j=function(){var e=Object(i.a)().siteConfig.themeConfig.announcementBar,t=Object(r.useState)(!0),a=t[0],n=t[1],c=Object(r.useCallback)((function(){localStorage.setItem(E,"true"),n(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(O);"annoucement-bar"===a&&(a="announcement-bar");var r=t!==a;localStorage.setItem(O,t),r&&localStorage.setItem(E,"false"),(r||"false"===localStorage.getItem(E))&&n(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},y=a(94);var w=function(e){var t=k(),a=t.tabGroupChoices,n=t.setTabGroupChoices,r=j(),o=r.isAnnouncementBarClosed,i=r.closeAnnouncementBar;return c.a.createElement(y.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},C=a(84),_=a(95),N=a(48),S=a.n(N);var T=function(){var e,t=Object(i.a)().siteConfig,a=(t=void 0===t?{}:t).themeConfig,n=(a=void 0===a?{}:a).announcementBar,r=void 0===n?{}:n,o=r.content,l=r.backgroundColor,s=r.textColor,u=r.isCloseable,d=Object(_.a)(),f=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!o||u&&f?null:c.a.createElement("div",{className:S.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},c.a.createElement("div",{className:Object(C.a)(S.a.announcementBarContent,(e={},e[S.a.announcementBarCloseable]=u,e)),dangerouslySetInnerHTML:{__html:o}}),u?c.a.createElement("button",{type:"button",className:S.a.announcementBarClose,onClick:m,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=a(86),x=function(){return null},B=a(106),I=a.n(B),D=a(49),P=a.n(D),M=function(e){var t=e.icon,a=e.style;return c.a.createElement("span",{className:Object(C.a)(P.a.toggle,P.a.dark),style:a},t)},A=function(e){var t=e.icon,a=e.style;return c.a.createElement("span",{className:Object(C.a)(P.a.toggle,P.a.light),style:a},t)},X=function(e){var t=Object(i.a)(),a=t.siteConfig.themeConfig.colorMode.switchConfig,r=a.darkIcon,o=a.darkIconStyle,l=a.lightIcon,s=a.lightIconStyle,u=t.isClient;return c.a.createElement(I.a,Object(n.a)({disabled:!u,icons:{checked:c.a.createElement(M,{icon:r,style:o}),unchecked:c.a.createElement(A,{icon:l,style:s})}},e))},F=a(90),R=a(85);var V=function(e){var t=Object(r.useState)(e),a=t[0],n=t[1];return Object(r.useEffect)((function(){var e=function(){return n(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,n]},U=a(96),H=function(e){var t=Object(r.useState)(!0),a=t[0],n=t[1],c=Object(r.useState)(!1),o=c[0],i=c[1],l=Object(r.useState)(0),s=l[0],u=l[1],d=Object(r.useState)(0),f=d[0],m=d[1],h=Object(r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(R.useLocation)(),b=V(v.hash),p=b[0],g=b[1];return Object(U.a)((function(t){var a=t.scrollY;if(e&&(0===a&&n(!0),!(a<f))){if(o)return i(!1),n(!1),void u(a);var r=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&a>=s?n(!1):a+c<r&&n(!0),u(a)}}),[s,f]),Object(r.useEffect)((function(){e&&(n(!0),g(v.hash))}),[v]),Object(r.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},G=a(97),W=a(98),Y=a(99),K=a(50),z=a.n(K),J=a(6),q=a(92),Q={default:function(){return q.a},docsVersion:function(){return a(110).default},docsVersionDropdown:function(){return a(114).default}};function Z(e){var t=e.type,a=Object(J.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=Q[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return c.a.createElement(n,a)}var $="right";var ee=function(){var e,t,a=Object(i.a)(),o=a.siteConfig.themeConfig,l=o.navbar,s=(l=void 0===l?{}:l).title,u=void 0===s?"":s,d=l.items,f=void 0===d?[]:d,m=l.hideOnScroll,h=void 0!==m&&m,v=l.style,b=void 0===v?void 0:v,p=o.colorMode,g=(p=void 0===p?{}:p).disableSwitch,k=void 0!==g&&g,E=a.isClient,O=Object(r.useState)(!1),j=O[0],y=O[1],w=Object(r.useState)(!1),_=w[0],N=w[1],S=Object(F.a)(),T=S.isDarkTheme,B=S.setLightTheme,I=S.setDarkTheme,D=H(h),P=D.navbarRef,M=D.isNavbarVisible,A=Object(Y.a)(),R=A.logoLink,V=A.logoLinkProps,U=A.logoImageUrl,K=A.logoAlt;Object(G.a)(j);var J=Object(r.useCallback)((function(){y(!0)}),[y]),q=Object(r.useCallback)((function(){y(!1)}),[y]),Q=Object(r.useCallback)((function(e){return e.target.checked?I():B()}),[B,I]),ee=Object(W.a)();Object(r.useEffect)((function(){ee===W.b.desktop&&y(!1)}),[ee]);var te=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:$)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:$)}))}}(f),ae=te.leftItems,ne=te.rightItems;return c.a.createElement("nav",{ref:P,className:Object(C.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===b,"navbar--primary":"primary"===b,"navbar-sidebar--show":j},e[z.a.navbarHideable]=h,e[z.a.navbarHidden]=!M,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=f&&0!==f.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:J,onKeyDown:J},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(L.a,Object(n.a)({className:"navbar__brand",to:R},V),null!=U&&c.a.createElement("img",{key:E,className:"navbar__logo",src:U,alt:K}),null!=u&&c.a.createElement("strong",{className:Object(C.a)("navbar__title",(t={},t[z.a.hideLogoText]=_,t))},u)),ae.map((function(e,t){return c.a.createElement(Z,Object(n.a)({},e,{key:t}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},ne.map((function(e,t){return c.a.createElement(Z,Object(n.a)({},e,{key:t}))})),!k&&c.a.createElement(X,{className:z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:Q}),c.a.createElement(x,{handleSearchBarToggle:N,isSearchBarExpanded:_}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(L.a,Object(n.a)({className:"navbar__brand",onClick:q,to:R},V),null!=U&&c.a.createElement("img",{key:E,className:"navbar__logo",src:U,alt:K}),null!=u&&c.a.createElement("strong",{className:"navbar__title"},u)),!k&&j&&c.a.createElement(X,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:Q})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},f.map((function(e,t){return c.a.createElement(Z,Object(n.a)({mobile:!0},e,{onClick:q,key:t}))})))))))},te=a(100);a(51);function ae(e){var t=e.children;return c.a.createElement(p,null,c.a.createElement(w,null,t))}t.a=function(e){var t=Object(i.a)().siteConfig,a=t.favicon,r=t.title,s=t.themeConfig,u=s.image,d=s.metadatas,f=t.url,m=e.children,h=e.title,v=e.noFooter,b=e.description,p=e.image,g=e.keywords,k=e.permalink,E=h?h+" | "+r:r,O=p||u,j=Object(l.a)(O,{absolute:!0}),y=Object(l.a)(a);return c.a.createElement(ae,null,c.a.createElement(o.a,null,c.a.createElement("html",{lang:"en"}),E&&c.a.createElement("title",null,E),E&&c.a.createElement("meta",{property:"og:title",content:E}),a&&c.a.createElement("link",{rel:"shortcut icon",href:y}),b&&c.a.createElement("meta",{name:"description",content:b}),b&&c.a.createElement("meta",{property:"og:description",content:b}),g&&g.length&&c.a.createElement("meta",{name:"keywords",content:g.join(",")}),O&&c.a.createElement("meta",{property:"og:image",content:j}),O&&c.a.createElement("meta",{property:"twitter:image",content:j}),O&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),k&&c.a.createElement("meta",{property:"og:url",content:f+k}),k&&c.a.createElement("link",{rel:"canonical",href:f+k}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(o.a,null,d.map((function(e,t){return c.a.createElement("meta",Object(n.a)({key:"metadata_"+t},e))}))),c.a.createElement(T,null),c.a.createElement(ee,null),c.a.createElement("div",{className:"main-wrapper"},m),!v&&c.a.createElement(te.a,null))}},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(101);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},106:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),i=f(a(89)),l=f(a(7)),s=f(a(107)),u=f(a(108)),d=a(109);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},107:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},108:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},109:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},110:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=a(0),o=a.n(c),i=a(92),l=a(87);function s(e){var t=e.label,a=e.to,c=e.docsPluginId,s=Object(r.a)(e,["label","to","docsPluginId"]),u=Object(l.useActiveVersion)(c),d=Object(l.useLatestVersion)(c),f=null!=u?u:d,m=null!=t?t:f.label,h=null!=a?a:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(f).path;return o.a.createElement(i.a,Object(n.a)({},s,{label:m,to:h}))}},114:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),c=a(0),o=a.n(c),i=a(92),l=a(87),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,a=e.mobile,c=e.docsPluginId,u=Object(r.a)(e,["mobile","docsPluginId"]),d=Object(l.useActiveDocContext)(c),f=Object(l.useVersions)(c),m=Object(l.useLatestVersion)(c);var h=null!==(t=d.activeVersion)&&void 0!==t?t:m,v=a?"Versions":h.label,b=a?void 0:s(h).path;return o.a.createElement(i.a,Object(n.a)({},u,{mobile:a,label:v,to:b,items:function(){if(!(f.length<=2))return f.map((function(e){var t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==d?void 0:d.activeVersion)}}}))}()}))}},89:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},90:function(e,t,a){"use strict";var n=a(0),r=a(93);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},92:function(e,t,a){"use strict";var n,r=a(2),c=a(6),o=a(0),i=a.n(o),l=a(84),s=a(86),u=a(82);var d=function(){if(void 0!==n)return n;var e=!1,t={get passive(){e=!0}},a=function(){};return window.addEventListener("t",a,t),window.removeEventListener("t",a,t),n=e,e},f=o.useLayoutEffect,m=function(e){var t=Object(o.useRef)(e);return f((function(){t.current=e})),t},h="touchstart",v=["mousedown",h],b=function(e){if(e===h)return d()?{passive:!0}:void 0};var p=function(e,t){var a=m(t);Object(o.useEffect)((function(){if(t){var n=function(t){e.current&&a.current&&!e.current.contains(t.target)&&a.current(t)};return v.forEach((function(e){document.addEventListener(e,n,b(e))})),function(){v.forEach((function(e){document.removeEventListener(e,n,b(e))}))}}}),[!t])};function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,o=e.href,l=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(c.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(n),b=Object(u.a)(t),p=Object(u.a)(o,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(r.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:m?p:o}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),l)}function k(e){var t=e.items,a=e.position,n=e.className,s=Object(c.a)(e,["items","position","className"]),u=i.a.useRef(null),d=i.a.useRef(null),f=Object(o.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,a,n=null==d||null===(t=d.current)||void 0===t||null===(a=t.firstChild)||void 0===a?void 0:a.firstChild;n&&n.focus()}h(e)}p(u,(function(){return v(!1)}));var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":m})},i.a.createElement(g,Object(r.a)({className:b(n)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),i.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var n=e.className,o=Object(c.a)(e,["className"]);return i.a.createElement("li",{key:a},i.a.createElement(g,Object(r.a)({onKeyDown:function(e){a===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:b(n,!0)},o)))})))):i.a.createElement(g,Object(r.a)({className:b(n)},s))}function E(e){var t=e.items,a=(e.position,e.className),n=Object(c.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(g,Object(r.a)({className:o(a,!0)},n),n.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,l=Object(c.a)(e,["className"]);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(g,Object(r.a)({activeClassName:"menu__link--active",className:o(a)},l,{onClick:n.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(g,Object(r.a)({className:o(a)},n)))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(c.a)(e,["mobile"]),r=a?E:k;return i.a.createElement(r,n)}},93:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},94:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},95:function(e,t,a){"use strict";var n=a(0),r=a(94);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],i=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},97:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},98:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},99:function(e,t,a){"use strict";var n=a(81),r=a(90),c=a(82),o=a(83);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).navbar,i=(a=void 0===a?{}:a).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(c.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(f),logoAlt:l.alt}}}}]);