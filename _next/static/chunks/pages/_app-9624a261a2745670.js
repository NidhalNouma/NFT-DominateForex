(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9396:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(9655),t),a(n(3499),t)},8216:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.MetamaskContext=void 0;var o=i(n(7294));t.MetamaskContext=o.createContext(void 0)},9655:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(u){i=[6,u],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.MetaMaskProvider=void 0;var s=n(5893),l=o(n(7294)),f=n(8216),d=n(3471),h=n(9069);var p={status:"initializing",account:null,chainId:null};t.MetaMaskProvider=function(e){var t=l.useReducer(d.reducer,p),n=t[0],a=t[1],i=h.useSafeDispatch(a),o=n.status,v="initializing"===o;l.useEffect((function(){v&&function(e){u(this,void 0,void 0,(function(){var t,n,r;return c(this,(function(a){switch(a.label){case 0:return t=window.ethereum,Boolean(t)&&t.isMetaMask?[4,t.request({method:"eth_chainId"})]:(e({type:"metaMaskUnavailable"}),[2]);case 1:return n=a.sent(),[4,t._metamask.isUnlocked()];case 2:return a.sent()?[4,t.request({method:"eth_accounts"})]:(e({type:"metaMaskLocked",payload:{chainId:n}}),[2]);case 3:return 0===(r=a.sent()).length?e({type:"metaMaskUnlocked",payload:{chainId:n}}):e({type:"metaMaskConnected",payload:{accounts:r,chainId:n}}),[2]}}))}))}(i)}),[i,v]);var b="connected"===o;l.useEffect((function(){return b?function(e){var t=window.ethereum,n=function(t){return e({type:"metaMaskAccountsChanged",payload:t})};return t.on("accountsChanged",n),function(){t.removeListener("accountsChanged",n)}}(i):function(){}}),[i,b]);var y="unavailable"!==o&&"initializing"!==o;l.useEffect((function(){return y?function(e){var t=window.ethereum,n=function(t){return e({type:"metaMaskChainChanged",payload:t})};return t.on("chainChanged",n),function(){t.removeListener("chainChanged",n)}}(i):function(){}}),[i,y]);var _=l.useCallback((function(){return y?function(e){return u(this,void 0,void 0,(function(){var t,n,r;return c(this,(function(a){switch(a.label){case 0:t=window.ethereum,e({type:"metaMaskConnecting"}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.request({method:"eth_requestAccounts"})];case 2:return n=a.sent(),e({type:"metaMaskConnected",payload:{accounts:n}}),[2,n];case 3:throw r=a.sent(),e({type:"metaMaskPermissionRejected"}),r;case 4:return[2]}}))}))}(i):(console.warn("`enable` method has been called while MetaMask is not available or synchronising. Nothing will be done in this case."),Promise.resolve([]))}),[i,y]),m=l.useMemo((function(){return r(r({},n),{connect:_,ethereum:y?window.ethereum:null})}),[_,n,y]);return s.jsx(f.MetamaskContext.Provider,r({value:m},e),void 0)}},3471:function(e,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0,t.reducer=function(e,t){switch(t.type){case"metaMaskUnavailable":return{chainId:null,account:null,status:"unavailable"};case"metaMaskLocked":case"metaMaskUnlocked":return n(n({},e),{chainId:t.payload.chainId,account:null,status:"notConnected"});case"metaMaskConnected":var r=t.payload.accounts;return{chainId:t.payload.chainId||e.chainId,account:r[0],status:"connected"};case"metaMaskConnecting":return n(n({},e),{account:null,status:"connecting"});case"metaMaskPermissionRejected":return n(n({},e),{account:null,status:"notConnected"});case"metaMaskAccountsChanged":var a=t.payload;return 0===a.length?n(n({},e),{account:null,status:"notConnected"}):n(n({},e),{account:a[0]});case"metaMaskChainChanged":return n(n({},e),{chainId:t.payload})}}},3499:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useMetaMask=void 0;var o=i(n(7294)),u=n(8216);t.useMetaMask=function(){var e=o.useContext(u.MetamaskContext);if(!e)throw new Error("`useMetamask` should be used within a `MetaMaskProvider`");return e}},9069:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useSafeDispatch=void 0;var o=i(n(7294)),u="undefined"!==typeof window?o.useLayoutEffect:o.useEffect;t.useSafeDispatch=function(e){var t=o.useRef(!1);return u((function(){return t.current=!0,function(){t.current=!1}}),[]),o.useCallback((function(n){t.current&&e(n)}),[e])}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=(n(906),n(9008)),i=n(9396);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(i.MetaMaskProvider,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"DominateForex NFT"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{className:"mx-auto px-2 sm:px-16 lg:px-24 min-h-screen flex flex-col",children:(0,r.jsx)(t,u({},n))})]})}},906:function(){},9008:function(e,t,n){e.exports=n(5443)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);