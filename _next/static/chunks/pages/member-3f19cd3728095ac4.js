(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{1058:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/member",function(){return n(6342)}])},8019:function(e,t,n){"use strict";var r=n(5893),o=(n(7294),n(1664));t.Z=function(){return(0,r.jsx)("nav",{className:"",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,r.jsx)(o.default,{href:"/",passHref:!0,children:(0,r.jsxs)("h1",{className:"lg:text-3xl text-xl font-extrabold cursor-pointer",children:["dominateforex",(0,r.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-white to-pcolor",children:"NFT"})]})}),(0,r.jsx)(o.default,{href:"/member",passHref:!0,children:(0,r.jsx)("span",{className:"text-white text-xl font-extrabold cursor-pointer",children:"Member"})})]})})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(6273),s=n(387),l=n(7190);var i={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=a.default.useMemo((function(){var t=r(c.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,p=f.as,x=e.children,h=e.replace,v=e.shallow,m=e.scroll,y=e.locale;"string"===typeof x&&(x=a.default.createElement("a",null,x));var b=(t=a.default.Children.only(x))&&"object"===typeof t&&t.ref,g=r(l.useIntersection({rootMargin:"200px"}),2),j=g[0],N=g[1],w=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=N&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=i[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,N,y,n,o]);var _={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:s}))}(e,o,d,p,h,v,m,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);_.href=k||c.addBasePath(c.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,_)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=o.useRef(),i=r(o.useState(!1),2),u=i[0],f=i[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!c&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},6342:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(8019)),a=n(9396);function c(e){var t=e.connect;return(0,r.jsx)("div",{className:"mx-auto my-auto",children:(0,r.jsx)("button",{onClick:t,className:"bg-white text-scolor text-lg font-bold py-3 px-6 rounded-xl focus:ring",children:"Connect your wallet"})})}function s(e){var t=e.account,n=e.show,o=void 0!==n&&n;return(0,r.jsxs)("div",{className:"mx-auto mt-10",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("h1",{className:"font-extrabold ",children:["Address",(0,r.jsx)("span",{className:"text-tcolor bg-slate-50 ml-2 px-2 py-1 rounded",children:t})]})}),o?(0,r.jsx)(i,{}):(0,r.jsx)(l,{})]})}function l(){return(0,r.jsx)("div",{className:"mx-auto mt-10 text-center",children:(0,r.jsx)("div",{className:"my-10",children:(0,r.jsx)("a",{href:"https://opensea.io/collection/dominateforex",target:"_blank",rel:"noreferrer",className:"bg-white text-scolor text-xl font-bold py-3 px-6 rounded-xl focus:ring",children:"Click here to Buy our NFTs"})})})}function i(){return(0,r.jsxs)("div",{className:"mx-auto mt-10 text-center",children:[(0,r.jsxs)("div",{className:"my-10",children:[(0,r.jsx)("label",{className:"",children:"Tradingview UserName:"}),(0,r.jsx)("input",{type:"text",placeholder:"User Name",className:"text-icolor mx-2 rounded ml px-2 py-1"}),(0,r.jsx)("button",{className:"bg-white text-scolor text-base font-bold py-1 px-2 rounded focus:ring",children:"Save"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"bg-white text-scolor text-base font-bold py-1 px-2 rounded focus:ring",children:"Click here to Download our MT4 products"})})]})}t.default=function(){var e=(0,a.useMetaMask)(),t=(e.status,e.connect),n=e.account;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{}),n?(0,r.jsx)(s,{account:n}):(0,r.jsx)(c,{connect:t})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=1058,e(e.s=t);var t}));var t=e.O();_N_E=t}]);