(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["ytdemo-ui"]=e():t["ytdemo-ui"]=e()})(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="ef2b")}({"00ee":function(t,e,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),c=n("fc6a"),u=n("c04e"),a=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"19aa":function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),o=r("iterator"),i=!1;try{var c=0,u={next:function(){return{done:!!c++}},return:function(){i=!0}};u[o]=function(){return this},Array.from(u,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(a){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},2266:function(t,e,n){var r=n("825a"),o=n("e95a"),i=n("50c4"),c=n("0366"),u=n("35a1"),a=n("2a62"),f=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var s,p,l,d,v,h,y,b=n&&n.that,g=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),m=!(!n||!n.INTERRUPTED),w=c(e,b,1+g+m),j=function(t){return s&&a(s),new f(!0,t)},O=function(t){return g?(r(t),m?w(t[0],t[1],j):w(t[0],t[1])):m?w(t,j):w(t)};if(x)s=t;else{if(p=u(t),"function"!=typeof p)throw TypeError("Target is not iterable");if(o(p)){for(l=0,d=i(t.length);d>l;l++)if(v=O(t[l]),v&&v instanceof f)return v;return new f(!1)}s=p.call(t)}h=s.next;while(!(y=h.call(s)).done){try{v=O(y.value)}catch(S){throw a(s),S}if("object"==typeof v&&v&&v instanceof f)return v}return new f(!1)}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),u=n("ce4e"),a=n("e893"),f=n("94ca");t.exports=function(t,e){var n,s,p,l,d,v,h=t.target,y=t.global,b=t.stat;if(s=y?r:b?r[h]||u(h,{}):(r[h]||{}).prototype,s)for(p in e){if(d=e[p],t.noTargetGet?(v=o(s,p),l=v&&v.value):l=s[p],n=f(y?p:h+(b?".":"#")+p,t.forced),!n&&void 0!==l){if(typeof d===typeof l)continue;a(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(s,p,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2626:function(t,e,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),c=n("83ab"),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,u){var a,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,e){return a.call(e),s(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},"2cf4":function(t,e,n){var r,o,i,c=n("da84"),u=n("d039"),a=n("0366"),f=n("1be4"),s=n("cc12"),p=n("1cdc"),l=n("605d"),d=c.location,v=c.setImmediate,h=c.clearImmediate,y=c.process,b=c.MessageChannel,g=c.Dispatch,x=0,m={},w="onreadystatechange",j=function(t){if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},O=function(t){return function(){j(t)}},S=function(t){j(t.data)},P=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};v&&h||(v=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return m[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(x),x},h=function(t){delete m[t]},l?r=function(t){y.nextTick(O(t))}:g&&g.now?r=function(t){g.now(O(t))}:b&&!p?(o=new b,i=o.port2,o.port1.onmessage=S,r=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&d&&"file:"!==d.protocol&&!u(P)?(r=P,c.addEventListener("message",S,!1)):r=w in s("script")?function(t){f.appendChild(s("script"))[w]=function(){f.removeChild(this),j(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:v,clear:h}},"2d00":function(t,e,n){var r,o,i=n("da84"),c=n("342f"),u=i.process,a=u&&u.versions,f=a&&a.v8;f?(r=f.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),o=n("3f8c"),i=n("b622"),c=i("iterator");t.exports=function(t){if(void 0!=t)return t[c]||t["@@iterator"]||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),c=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=c(e),u=r.length,a=0;while(u>a)o.f(t,n=r[a++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3e2b":function(t,e,n){},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),c=r("unscopables"),u=Array.prototype;void 0==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),o=n("1c0b"),i=n("b622"),c=i("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[c])?e:o(n)}},4930:function(t,e,n){var r=n("605d"),o=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.10.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),c=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"605d":function(t,e,n){var r=n("c6b6"),o=n("da84");t.exports="process"==r(o.process)},"60da":function(t,e,n){"use strict";var r=n("83ab"),o=n("d039"),i=n("df75"),c=n("7418"),u=n("d1e7"),a=n("7b0b"),f=n("44ad"),s=Object.assign,p=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||i(s({},e)).join("")!=o}))?function(t,e){var n=a(t),o=arguments.length,s=1,p=c.f,l=u.f;while(o>s){var d,v=f(arguments[s++]),h=p?i(v).concat(p(v)):i(v),y=h.length,b=0;while(y>b)d=h[b++],r&&!l.call(v,d)||(n[d]=v[d])}return n}:s},"69f3":function(t,e,n){var r,o,i,c=n("7f9a"),u=n("da84"),a=n("861d"),f=n("9112"),s=n("5135"),p=n("c6cd"),l=n("f772"),d=n("d012"),v=u.WeakMap,h=function(t){return i(t)?o(t):r(t,{})},y=function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(c){var b=p.state||(p.state=new v),g=b.get,x=b.has,m=b.set;r=function(t,e){return e.facade=t,m.call(b,t,e),e},o=function(t){return g.call(b,t)||{}},i=function(t){return x.call(b,t)}}else{var w=l("state");d[w]=!0,r=function(t,e){return e.facade=t,f(t,w,e),e},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:r,get:o,has:i,enforce:h,getterFor:y}},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),i=n("5135"),c=n("ce4e"),u=n("8925"),a=n("69f3"),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,e,n,u){var a,f=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),a=s(n),a.source||(a.source=p.join("string"==typeof e?e:""))),t!==r?(f?!d&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,o=n("825a"),i=n("37e8"),c=n("7839"),u=n("d012"),a=n("1be4"),f=n("cc12"),s=n("f772"),p=">",l="<",d="prototype",v="script",h=s("IE_PROTO"),y=function(){},b=function(t){return l+v+p+t+l+"/"+v+p},g=function(t){t.write(b("")),t.close();var e=t.parentWindow.Object;return t=null,e},x=function(){var t,e=f("iframe"),n="java"+v+":";return e.style.display="none",a.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(b("document.F=Object")),t.close(),t.F},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}m=r?g(r):x();var t=c.length;while(t--)delete m[d][c[t]];return m()};u[h]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(y[d]=o(t),n=new y,y[d]=null,n[h]=t):n=m(),void 0===e?n:i(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),o=n("9ed3"),i=n("e163"),c=n("d2bb"),u=n("d44e"),a=n("9112"),f=n("6eeb"),s=n("b622"),p=n("c430"),l=n("3f8c"),d=n("ae93"),v=d.IteratorPrototype,h=d.BUGGY_SAFARI_ITERATORS,y=s("iterator"),b="keys",g="values",x="entries",m=function(){return this};t.exports=function(t,e,n,s,d,w,j){o(n,e,s);var O,S,P,_=function(t){if(t===d&&C)return C;if(!h&&t in T)return T[t];switch(t){case b:return function(){return new n(this,t)};case g:return function(){return new n(this,t)};case x:return function(){return new n(this,t)}}return function(){return new n(this)}},k=e+" Iterator",E=!1,T=t.prototype,R=T[y]||T["@@iterator"]||d&&T[d],C=!h&&R||_(d),I="Array"==e&&T.entries||R;if(I&&(O=i(I.call(new t)),v!==Object.prototype&&O.next&&(p||i(O)===v||(c?c(O,v):"function"!=typeof O[y]&&a(O,y,m)),u(O,k,!0,!0),p&&(l[k]=m))),d==g&&R&&R.name!==g&&(E=!0,C=function(){return R.call(this)}),p&&!j||T[y]===C||a(T,y,C),l[e]=C,d)if(S={values:_(g),keys:w?C:_(b),entries:_(x)},j)for(P in S)(h||E||!(P in T))&&f(T,P,S[P]);else r({target:e,proto:!0,forced:h||E},S);return S}},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),c=n("c04e"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),c=n("d44e"),u=n("3f8c"),a=function(){return this};t.exports=function(t,e,n){var f=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,f,!1,!0),u[f]=a,t}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),c=n("d039"),u=n("d066"),a=n("4840"),f=n("cdf9"),s=n("6eeb"),p=!!i&&c((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));r({target:"Promise",proto:!0,real:!0,forced:p},{finally:function(t){var e=a(this,u("Promise")),n="function"==typeof t;return this.then(n?function(n){return f(e,t()).then((function(){return n}))}:t,n?function(n){return f(e,t()).then((function(){throw n}))}:t)}}),o||"function"!=typeof i||i.prototype["finally"]||s(i.prototype,"finally",u("Promise").prototype["finally"])},ae93:function(t,e,n){"use strict";var r,o,i,c=n("d039"),u=n("e163"),a=n("9112"),f=n("5135"),s=n("b622"),p=n("c430"),l=s("iterator"),d=!1,v=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):d=!0);var h=void 0==r||c((function(){var t={};return r[l].call(t)!==t}));h&&(r={}),p&&!h||f(r,l)||a(r,l,v),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,a="name";r&&!(a in i)&&o(i,a,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,o,i,c,u,a,f,s,p=n("da84"),l=n("06cf").f,d=n("2cf4").set,v=n("1cdc"),h=n("a4b4"),y=n("605d"),b=p.MutationObserver||p.WebKitMutationObserver,g=p.document,x=p.process,m=p.Promise,w=l(p,"queueMicrotask"),j=w&&w.value;j||(r=function(){var t,e;y&&(t=x.domain)&&t.exit();while(o){e=o.fn,o=o.next;try{e()}catch(n){throw o?c():i=void 0,n}}i=void 0,t&&t.enter()},v||y||h||!b||!g?m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=y?function(){x.nextTick(r)}:function(){d.call(p,r)}:(u=!0,a=g.createTextNode(""),new b(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=j||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("5135"),c=n("90e3"),u=n("4930"),a=n("fdbf"),f=o("wks"),s=r.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,c=n("d012");t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);while(e.length>a)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(t,e,n){var r=n("825a"),o=n("861d"),i=n("f069");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),c=n.resolve;return c(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},d44e:function(t,e,n){var r=n("9bf2").f,o=n("5135"),i=n("b622"),c=i("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},da5b:function(t,e,n){"use strict";n("3e2b")},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e163:function(t,e,n){var r=n("5135"),o=n("7b0b"),i=n("f772"),c=n("e177"),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),c=n("69f3"),u=n("7dd0"),a="Array Iterator",f=c.set,s=c.getterFor(a);t.exports=u(Array,"Array",(function(t,e){f(this,{type:a,target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,o,i,c,u=n("23e7"),a=n("c430"),f=n("da84"),s=n("d066"),p=n("fea9"),l=n("6eeb"),d=n("e2cc"),v=n("d44e"),h=n("2626"),y=n("861d"),b=n("1c0b"),g=n("19aa"),x=n("8925"),m=n("2266"),w=n("1c7e"),j=n("4840"),O=n("2cf4").set,S=n("b575"),P=n("cdf9"),_=n("44de"),k=n("f069"),E=n("e667"),T=n("69f3"),R=n("94ca"),C=n("b622"),I=n("605d"),A=n("2d00"),M=C("species"),$="Promise",F=T.get,L=T.set,N=T.getterFor($),B=p,D=f.TypeError,U=f.document,G=f.process,z=s("fetch"),W=k.f,q=W,H=!!(U&&U.createEvent&&f.dispatchEvent),V="function"==typeof PromiseRejectionEvent,X="unhandledrejection",Y="rejectionhandled",K=0,J=1,Q=2,Z=1,tt=2,et=R($,(function(){var t=x(B)!==String(B);if(!t){if(66===A)return!0;if(!I&&!V)return!0}if(a&&!B.prototype["finally"])return!0;if(A>=51&&/native code/.test(B))return!1;var e=B.resolve(1),n=function(t){t((function(){}),(function(){}))},r=e.constructor={};return r[M]=n,!(e.then((function(){}))instanceof n)})),nt=et||!w((function(t){B.all(t)["catch"]((function(){}))})),rt=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},ot=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,o=t.state==J,i=0;while(n.length>i){var c,u,a,f=n[i++],s=o?f.ok:f.fail,p=f.resolve,l=f.reject,d=f.domain;try{s?(o||(t.rejection===tt&&at(t),t.rejection=Z),!0===s?c=r:(d&&d.enter(),c=s(r),d&&(d.exit(),a=!0)),c===f.promise?l(D("Promise-chain cycle")):(u=rt(c))?u.call(c,p,l):p(c)):l(r)}catch(v){d&&!a&&d.exit(),l(v)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ct(t)}))}},it=function(t,e,n){var r,o;H?(r=U.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},!V&&(o=f["on"+t])?o(r):t===X&&_("Unhandled promise rejection",n)},ct=function(t){O.call(f,(function(){var e,n=t.facade,r=t.value,o=ut(t);if(o&&(e=E((function(){I?G.emit("unhandledRejection",r,n):it(X,n,r)})),t.rejection=I||ut(t)?tt:Z,e.error))throw e.value}))},ut=function(t){return t.rejection!==Z&&!t.parent},at=function(t){O.call(f,(function(){var e=t.facade;I?G.emit("rejectionHandled",e):it(Y,e,t.value)}))},ft=function(t,e,n){return function(r){t(e,r,n)}},st=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=Q,ot(t,!0))},pt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw D("Promise can't be resolved itself");var r=rt(e);r?S((function(){var n={done:!1};try{r.call(e,ft(pt,n,t),ft(st,n,t))}catch(o){st(n,o,t)}})):(t.value=e,t.state=J,ot(t,!1))}catch(o){st({done:!1},o,t)}}};et&&(B=function(t){g(this,B,$),b(t),r.call(this);var e=F(this);try{t(ft(pt,e),ft(st,e))}catch(n){st(e,n)}},r=function(t){L(this,{type:$,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:K,value:void 0})},r.prototype=d(B.prototype,{then:function(t,e){var n=N(this),r=W(j(this,B));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=I?G.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=K&&ot(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=F(t);this.promise=t,this.resolve=ft(pt,e),this.reject=ft(st,e)},k.f=W=function(t){return t===B||t===i?new o(t):q(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,e){var n=this;return new B((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof z&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return P(B,z.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:et},{Promise:B}),v(B,$,!1,!0),h($),i=s($),u({target:$,stat:!0,forced:et},{reject:function(t){var e=W(this);return e.reject.call(void 0,t),e.promise}}),u({target:$,stat:!0,forced:a||et},{resolve:function(t){return P(a&&this===i?B:this,t)}}),u({target:$,stat:!0,forced:nt},{all:function(t){var e=this,n=W(e),r=n.resolve,o=n.reject,i=E((function(){var n=b(e.resolve),i=[],c=0,u=1;m(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=W(e),r=n.reject,o=E((function(){var o=b(e.resolve);m(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},e95a:function(t,e,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},ef2b:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"ticket",staticClass:"ticket-all"},[n("div",{staticClass:"ticket"},[n("div",{staticClass:"pl"},[t._t("left")],2)]),n("div",{staticClass:"ticket-left"},[n("div",{staticClass:"border pl"},[t._t("right")],2)])])},o=[],i={name:"Ticket2",props:{Lw:String,Rw:String,height:String,radius:String,Lback:String,Rback:String,border:String,Bordercolor:String,num:String,borderH:String},data:function(){return{}},mounted:function(){this.$refs.ticket.style.setProperty("--height",this.height?this.height:"100px"),this.$refs.ticket.style.setProperty("--borderH",this.radius?"calc(100% - ".concat(this.radius,")"):"calc(100% - 10px)"),this.$refs.ticket.style.setProperty("--Lw",this.Lw?this.Lw:"100px"),this.$refs.ticket.style.setProperty("--Rw",this.Rw?this.Rw:"200px"),this.$refs.ticket.style.setProperty("--Lback",this.backColor?this.backColor:"#f7eed6"),this.$refs.ticket.style.setProperty("--Bordercolor",this.Bordercolor?this.Bordercolor:"rgb(252, 200, 132)"),this.$refs.ticket.style.setProperty("--Rback",this.backColor?this.backColor:"linear-gradient(to right,#ff9000 0,#ff5000 100%)"),this.$refs.ticket.style.setProperty("--radius",this.radius?this.radius:"10px"),this.$refs.ticket.style.setProperty("--pos",this.radius?"-".concat(this.radius):"-10px"),this.$refs.ticket.style.setProperty("--bos",this.radius?"".concat(this.radius/2):"5px"),this.$refs.ticket.style.setProperty("--num",6==this.num?"/50%":"/100%")}},c=i,u=(n("da5b"),n("2877")),a=Object(u["a"])(c,r,o,!1,null,"916b4938",null),f=a.exports;f.install=function(t){t.component(f.name,f)};e["default"]=f},f069:function(t,e,n){"use strict";var r=n("1c0b"),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},f5df:function(t,e,n){var r=n("00ee"),o=n("c6b6"),i=n("b622"),c=i("toStringTag"),u="Arguments"==o(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),c))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}})["default"]}));