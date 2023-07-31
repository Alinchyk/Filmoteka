/*! For license information please see 569.5c8dae30.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[569],{913:function(t,r,e){e.d(r,{Z:function(){return f}});var n,o,a=e(433),i=(e(791),e(168)),c=e(867),u=c.ZP.button(n||(n=(0,i.Z)(["\n  /* \u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0456 \u0441\u0442\u0438\u043b\u0456 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043e\u043a */\n  padding: 8px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  border: none;\n  background-color: #f2f2f2;\n  color: #333;\n  margin: 0 4px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #ddd;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  &.active {\n    background-color: #007bff;\n    color: #fff;\n\n    &:hover {\n      background-color: #0056b3;\n    }\n  }\n"]))),s=c.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px 0;\n  margin-top: 20px;\n"]))),l=e(184);function f(t){var r=t.currentPage,e=t.totalPages,n=t.onPageChange,o=function(t){n(t)};return(0,l.jsxs)(s,{children:[(0,l.jsx)(u,{onClick:function(){return o(r-1)},disabled:1===r,children:"Prev"}),function(){var t=Math.floor(5);if(e<=10)return Array.from({length:e},(function(t,r){return r+1}));var n=Math.max(1,r-t),o=Math.min(e,r+t),i=Array.from({length:o-n+1},(function(t,r){return n+r}));return n>1&&(i=n>2?[1,"..."].concat((0,a.Z)(i)):[1].concat((0,a.Z)(i))),o<e&&(i=[].concat((0,a.Z)(i),o<e-1?["...",e]:[e])),i}().map((function(t,e){return(0,l.jsx)(u,{onClick:function(){return o(t)},className:r===t?"active":"",disabled:"..."===t,children:t},e)})),(0,l.jsx)(u,{onClick:function(){return o(r+1)},disabled:r===e,children:"Next"})]})}},258:function(t,r,e){e.d(r,{Df:function(){return c},Gc:function(){return s},IR:function(){return f},Pg:function(){return u},jr:function(){return l}});var n=e(861),o=e(243);function a(){a=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(O){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var a=r&&r.prototype instanceof p?r:p,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:L(t,e,c)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var g={};s(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(Z([])));m&&m!==r&&e.call(m,i)&&(g=m);var x=v.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,a,i,c){var u=f(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=E(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function Z(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,n(x,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new b(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:Z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var i="79f7e9d5eb5b406ae3795a32db0606aa";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/trending/movie/day?api_key=".concat(i,"&page=").concat(r));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Oops... seems like an error occurred.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(r,"?api_key=").concat(i)).then((function(t){return{title:t.data.title,poster_path:t.data.poster_path,vote_average:t.data.vote_average,overview:t.data.overview,genres:t.data.genres}}));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Error while fetching movie details");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Failed to fetch movie cast");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i,"&page=1"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Failed to fetch movie reviews");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r,e){var n,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r,"&page=").concat(e||1));case 3:return n=t.sent,c=n.data,t.abrupt("return",c);case 8:throw t.prev=8,t.t0=t.catch(0),console.error("Error while searching movies:",t.t0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r,e){return t.apply(this,arguments)}}()},569:function(t,r,e){e.r(r),e.d(r,{default:function(){return N}});var n,o,a,i,c,u,s,l,f=e(861),h=e(439),p=e(791),d=e(689),v=e(258),g=e(913),y=e(174),m=(e(462),e(168)),x=e(867),w=e(87),b=(0,x.ZP)(w.rU)(n||(n=(0,m.Z)(["\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18;\n\n  &:hover {\n    color: #9d0043;\n  }\n"]))),L=x.ZP.form(o||(o=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 40px;\n"]))),E=x.ZP.input(a||(a=(0,m.Z)(["\n  padding: 10px;\n  width: 350px;\n  border: 1px solid black;\n  border-radius: 4px;\n  transition: border-color 0.3s ease;\n\n  &:hover {\n    border-color: #ff4081;\n  }\n"]))),j=x.ZP.button(i||(i=(0,m.Z)(["\n  margin-left: 10px;\n  padding: 10px 20px;\n  background-color: #9d0043;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #e0005a;\n  }\n"]))),k=x.ZP.span(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 18px;\n  padding-bottom: 22px;\n  align-items: center;\n  text-align: center;\n  font-style: italic;\n  color: black;\n"]))),_=x.ZP.li(u||(u=(0,m.Z)(["\n  border-radius: 5px;\n  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,\n    inset rgba(255, 255, 255, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n  overflow: hidden;\n\n  &:hover {\n    box-shadow: 0 0 13px 3px #9d0043;\n    transform: scale(1.03);\n  }\n"]))),Z=x.ZP.ul(s||(s=(0,m.Z)(["\n  display: grid;\n  max-width: calc(100vw - 35px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  margin: 10px auto 0px;\n  padding: 0px 0px 30px;\n  list-style: none;\n"]))),P=x.ZP.img(l||(l=(0,m.Z)(["\n  width: 100%;\n  min-height: 410px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),O=e(184);function S(){S=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var a=r&&r.prototype instanceof h?r:h,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:b(t,e,c)}),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==r&&e.call(y,a)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){function o(n,a,i,c){var u=l(t[n],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return Z()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=L(i,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new w(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(m),u(m,c,"Generator"),u(m,a,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),u=e.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function N(){var t=(0,p.useState)([]),r=(0,h.Z)(t,2),e=r[0],n=r[1],o=(0,p.useState)(1),a=(0,h.Z)(o,2),i=a[0],c=a[1],u=(0,d.TH)(),s=(0,d.s0)(),l=(0,p.useState)(0),m=(0,h.Z)(l,2),x=m[0],w=m[1],N=new URLSearchParams(u.search),G=N.get("query");(0,p.useEffect)((function(){var t=function(){var t=(0,f.Z)(S().mark((function t(){var r,e,o;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.IR)(G,i);case 3:r=t.sent,e=r.results,o=r.total_pages,n(e),w(o),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error while searching:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[G,i]);return(0,O.jsxs)("div",{children:[(0,O.jsxs)(L,{onSubmit:function(t){t.preventDefault();var r=t.target.movie.value;""!==r.trim()?(N.set("query",r),N.delete("page"),s("?".concat(N.toString()),{replace:!0}),t.target.movie.value=""):y.Am.error("Enter the query correctly...",{theme:"colored"})},children:[(0,O.jsx)(E,{type:"text",name:"movie",placeholder:"Enter the movie...",autoComplete:"off",defaultValue:G}),(0,O.jsx)(j,{type:"submit",variant:"outlined",size:"small",children:"Search"})]}),(0,O.jsxs)(O.Fragment,{children:[G&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Z,{children:e.map((function(t){var r=t.id,e=t.title,n=(t.name,t.poster_path);return(0,O.jsx)(_,{children:(0,O.jsxs)(b,{to:"".concat(r),state:{from:u.pathname+u.search},children:[(0,O.jsx)(P,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n),alt:e}),(0,O.jsx)(k,{children:e})]})},r)}))}),(0,O.jsx)(g.Z,{currentPage:i,totalPages:x,onPageChange:function(t){c(t),N.set("page",t),s("?".concat(N.toString()),{replace:!0})}})]}),G&&0===e.length&&(0,O.jsx)("p",{children:"No movies found."})]}),(0,O.jsx)(y.Ix,{autoClose:3e3})]})}}}]);
//# sourceMappingURL=569.5c8dae30.chunk.js.map