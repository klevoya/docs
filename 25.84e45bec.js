(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5],{187:function(e,t,a){"use strict";var r=a(2),l=a(9),n=a(0),o=a.n(n),c=a(172),m=a.n(c),s=a(165),i=a(162),f=a(163),u=a(130),_=a.n(u);function E(e){var t=e.to,a=e.href,n=e.label,c=Object(l.a)(e,["to","href","label"]),m=Object(f.a)(t);return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:m},c),n)}var h=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},l=r.copyright,n=r.links,c=void 0===n?[]:n,s=r.logo,u=void 0===s?{}:s,d=Object(f.a)(u.src);return a?o.a.createElement("footer",{className:m()("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},c&&c.length>0&&o.a.createElement("div",{className:"row footer__links"},c.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement("div",{className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title "+_.a.footerTitle},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items "+_.a.footerItems},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(E,e))}))):null))}))),(u||l)&&o.a.createElement("div",{className:"text--center"},u&&u.src&&o.a.createElement("div",{className:"margin-bottom--sm"},u.href?o.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:_.a.footerLogoLink},o.a.createElement(h,{alt:u.alt,url:d})):o.a.createElement(h,{alt:u.alt,url:d})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))):null}}}]);