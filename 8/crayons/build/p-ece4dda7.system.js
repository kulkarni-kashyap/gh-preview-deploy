var __awaiter=this&&this.__awaiter||function(e,t,s,n){function r(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,o){function a(e){try{d(n.next(e))}catch(t){o(t)}}function i(e){try{d(n["throw"](e))}catch(t){o(t)}}function d(e){e.done?s(e.value):r(e.value).then(a,i)}d((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var s={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(t){return d([e,t])}}function d(a){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:s.label++;return{value:a[1],done:false};case 5:s.label++;r=a[1];a=[0];continue;case 7:a=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){s=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(a[0]===6&&s.label<o[1]){s.label=o[1];o=a;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(a);break}if(o[2])s.ops.pop();s.trys.pop();continue}a=t.call(e,s)}catch(i){a=[6,i];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-6d102d56.system.js"],(function(e,t){"use strict";var s,n;return{setters:[function(e){s=e.g;n=e.f}],execute:function(){var r=function(e,t,s){var n=e.get(t);if(!n){e.set(t,[s])}else if(!n.includes(s)){n.push(s)}};var o=function(e,t){var s;return function(){var n=[];for(var r=0;r<arguments.length;r++){n[r]=arguments[r]}if(s){clearTimeout(s)}s=setTimeout((function(){s=0;e.apply(void 0,n)}),t)}};var a=function(e){return!("isConnected"in e)||e.isConnected};var i=o((function(e){for(var t=0,s=e.keys();t<s.length;t++){var n=s[t];e.set(n,e.get(n).filter(a))}}),2e3);var d=function(){if(typeof s!=="function"){return{}}var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=s();if(n){r(e,t,n)}},set:function(t){var s=e.get(t);if(s){e.set(t,s.filter(n))}i(e)},reset:function(){e.forEach((function(e){return e.forEach(n)}));i(e)}}};var u=function(e,t){if(t===void 0){t=function(e,t){return e!==t}}var s=new Map(Object.entries(e!==null&&e!==void 0?e:{}));var n={dispose:[],get:[],set:[],reset:[]};var r=function(){s=new Map(Object.entries(e!==null&&e!==void 0?e:{}));n.reset.forEach((function(e){return e()}))};var o=function(){n.dispose.forEach((function(e){return e()}));r()};var a=function(e){n.get.forEach((function(t){return t(e)}));return s.get(e)};var i=function(e,r){var o=s.get(e);if(t(r,o,e)){s.set(e,r);n.set.forEach((function(t){return t(e,r,o)}))}};var d=typeof Proxy==="undefined"?{}:new Proxy(e,{get:function(e,t){return a(t)},ownKeys:function(e){return Array.from(s.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(e,t){return s.has(t)},set:function(e,t,s){i(t,s);return true}});var u=function(e,t){n[e].push(t);return function(){l(n[e],t)}};var c=function(t,s){var n=u("set",(function(e,n){if(e===t){s(n)}}));var r=u("reset",(function(){return s(e[t])}));return function(){n();r()}};var m=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var s=e.reduce((function(e,t){if(t.set){e.push(u("set",t.set))}if(t.get){e.push(u("get",t.get))}if(t.reset){e.push(u("reset",t.reset))}if(t.dispose){e.push(u("dispose",t.dispose))}return e}),[]);return function(){return s.forEach((function(e){return e()}))}};var f=function(e){var t=s.get(e);n.set.forEach((function(s){return s(e,t,t)}))};return{state:d,get:a,set:i,on:u,onChange:c,use:m,dispose:o,reset:r,forceUpdate:f}};var l=function(e,t){var s=e.indexOf(t);if(s>=0){e[s]=e[e.length-1];e.length--}};var c=function(e,t){var s=u(e,t);s.use(d());return s};function m(e){switch(e){case"../../../node_modules/date-fns/esm/locale/af/index.js":return t.import("./p-228e4476.system.js");case"../../../node_modules/date-fns/esm/locale/ar/index.js":return t.import("./p-6f3e96eb.system.js");case"../../../node_modules/date-fns/esm/locale/ar-DZ/index.js":return t.import("./p-99a8178f.system.js");case"../../../node_modules/date-fns/esm/locale/ar-EG/index.js":return t.import("./p-5e262214.system.js");case"../../../node_modules/date-fns/esm/locale/ar-MA/index.js":return t.import("./p-ec87fdf0.system.js");case"../../../node_modules/date-fns/esm/locale/ar-SA/index.js":return t.import("./p-3b83a8ee.system.js");case"../../../node_modules/date-fns/esm/locale/ar-TN/index.js":return t.import("./p-cf6c46cc.system.js");case"../../../node_modules/date-fns/esm/locale/az/index.js":return t.import("./p-8ed2101b.system.js");case"../../../node_modules/date-fns/esm/locale/be/index.js":return t.import("./p-365dc431.system.js");case"../../../node_modules/date-fns/esm/locale/bg/index.js":return t.import("./p-6c4b32a5.system.js");case"../../../node_modules/date-fns/esm/locale/bn/index.js":return t.import("./p-31819035.system.js");case"../../../node_modules/date-fns/esm/locale/bs/index.js":return t.import("./p-e6d73809.system.js");case"../../../node_modules/date-fns/esm/locale/ca/index.js":return t.import("./p-ad28ec94.system.js");case"../../../node_modules/date-fns/esm/locale/cs/index.js":return t.import("./p-f98a15a1.system.js");case"../../../node_modules/date-fns/esm/locale/cy/index.js":return t.import("./p-506b67fa.system.js");case"../../../node_modules/date-fns/esm/locale/da/index.js":return t.import("./p-1256df78.system.js");case"../../../node_modules/date-fns/esm/locale/de/index.js":return t.import("./p-3a50f5e2.system.js");case"../../../node_modules/date-fns/esm/locale/de-AT/index.js":return t.import("./p-87062c5f.system.js");case"../../../node_modules/date-fns/esm/locale/el/index.js":return t.import("./p-d18781c6.system.js");case"../../../node_modules/date-fns/esm/locale/en-AU/index.js":return t.import("./p-b31056d9.system.js");case"../../../node_modules/date-fns/esm/locale/en-CA/index.js":return t.import("./p-02d1990a.system.js");case"../../../node_modules/date-fns/esm/locale/en-GB/index.js":return t.import("./p-621948b9.system.js");case"../../../node_modules/date-fns/esm/locale/en-IE/index.js":return t.import("./p-5857198a.system.js");case"../../../node_modules/date-fns/esm/locale/en-IN/index.js":return t.import("./p-db624803.system.js");case"../../../node_modules/date-fns/esm/locale/en-NZ/index.js":return t.import("./p-b7fe8f5c.system.js");case"../../../node_modules/date-fns/esm/locale/en-US/index.js":return t.import("./p-1e09d5ed.system.js");case"../../../node_modules/date-fns/esm/locale/en-ZA/index.js":return t.import("./p-0a99857e.system.js");case"../../../node_modules/date-fns/esm/locale/eo/index.js":return t.import("./p-8ce0803d.system.js");case"../../../node_modules/date-fns/esm/locale/es/index.js":return t.import("./p-7b145639.system.js");case"../../../node_modules/date-fns/esm/locale/et/index.js":return t.import("./p-e09a35a6.system.js");case"../../../node_modules/date-fns/esm/locale/eu/index.js":return t.import("./p-adafbf13.system.js");case"../../../node_modules/date-fns/esm/locale/fa-IR/index.js":return t.import("./p-1bcf2b33.system.js");case"../../../node_modules/date-fns/esm/locale/fi/index.js":return t.import("./p-79bf2958.system.js");case"../../../node_modules/date-fns/esm/locale/fr/index.js":return t.import("./p-44306af8.system.js");case"../../../node_modules/date-fns/esm/locale/fr-CA/index.js":return t.import("./p-e08019f7.system.js");case"../../../node_modules/date-fns/esm/locale/fr-CH/index.js":return t.import("./p-33f78cdd.system.js");case"../../../node_modules/date-fns/esm/locale/fy/index.js":return t.import("./p-bad56f56.system.js");case"../../../node_modules/date-fns/esm/locale/gd/index.js":return t.import("./p-37ac176b.system.js");case"../../../node_modules/date-fns/esm/locale/gl/index.js":return t.import("./p-cd1d2323.system.js");case"../../../node_modules/date-fns/esm/locale/gu/index.js":return t.import("./p-10f9ff81.system.js");case"../../../node_modules/date-fns/esm/locale/he/index.js":return t.import("./p-d2687af4.system.js");case"../../../node_modules/date-fns/esm/locale/hi/index.js":return t.import("./p-fc188a21.system.js");case"../../../node_modules/date-fns/esm/locale/hr/index.js":return t.import("./p-fb1e5725.system.js");case"../../../node_modules/date-fns/esm/locale/ht/index.js":return t.import("./p-6e567f71.system.js");case"../../../node_modules/date-fns/esm/locale/hu/index.js":return t.import("./p-135a1a51.system.js");case"../../../node_modules/date-fns/esm/locale/hy/index.js":return t.import("./p-a978bd22.system.js");case"../../../node_modules/date-fns/esm/locale/id/index.js":return t.import("./p-6cd6e5a3.system.js");case"../../../node_modules/date-fns/esm/locale/is/index.js":return t.import("./p-c5e537cc.system.js");case"../../../node_modules/date-fns/esm/locale/it/index.js":return t.import("./p-b94ae2c3.system.js");case"../../../node_modules/date-fns/esm/locale/ja/index.js":return t.import("./p-05d0ccfb.system.js");case"../../../node_modules/date-fns/esm/locale/ja-Hira/index.js":return t.import("./p-17d5e96f.system.js");case"../../../node_modules/date-fns/esm/locale/ka/index.js":return t.import("./p-fdfd8211.system.js");case"../../../node_modules/date-fns/esm/locale/kk/index.js":return t.import("./p-7beffb0e.system.js");case"../../../node_modules/date-fns/esm/locale/km/index.js":return t.import("./p-c94fad96.system.js");case"../../../node_modules/date-fns/esm/locale/kn/index.js":return t.import("./p-706fa9be.system.js");case"../../../node_modules/date-fns/esm/locale/ko/index.js":return t.import("./p-b619bc97.system.js");case"../../../node_modules/date-fns/esm/locale/lb/index.js":return t.import("./p-34c89bb0.system.js");case"../../../node_modules/date-fns/esm/locale/lt/index.js":return t.import("./p-28f3aabb.system.js");case"../../../node_modules/date-fns/esm/locale/lv/index.js":return t.import("./p-1099067f.system.js");case"../../../node_modules/date-fns/esm/locale/mk/index.js":return t.import("./p-9280ecd0.system.js");case"../../../node_modules/date-fns/esm/locale/mn/index.js":return t.import("./p-f8e0db10.system.js");case"../../../node_modules/date-fns/esm/locale/ms/index.js":return t.import("./p-61ce8020.system.js");case"../../../node_modules/date-fns/esm/locale/mt/index.js":return t.import("./p-5275e831.system.js");case"../../../node_modules/date-fns/esm/locale/nb/index.js":return t.import("./p-23d4a630.system.js");case"../../../node_modules/date-fns/esm/locale/nl/index.js":return t.import("./p-8fa62fbd.system.js");case"../../../node_modules/date-fns/esm/locale/nl-BE/index.js":return t.import("./p-28ed2b78.system.js");case"../../../node_modules/date-fns/esm/locale/nn/index.js":return t.import("./p-2dbfc6b0.system.js");case"../../../node_modules/date-fns/esm/locale/pl/index.js":return t.import("./p-b02356f5.system.js");case"../../../node_modules/date-fns/esm/locale/pt/index.js":return t.import("./p-4feddb20.system.js");case"../../../node_modules/date-fns/esm/locale/pt-BR/index.js":return t.import("./p-9496f035.system.js");case"../../../node_modules/date-fns/esm/locale/ro/index.js":return t.import("./p-41f27290.system.js");case"../../../node_modules/date-fns/esm/locale/ru/index.js":return t.import("./p-e5a5cddb.system.js");case"../../../node_modules/date-fns/esm/locale/sk/index.js":return t.import("./p-f49ee387.system.js");case"../../../node_modules/date-fns/esm/locale/sl/index.js":return t.import("./p-ed149d38.system.js");case"../../../node_modules/date-fns/esm/locale/sq/index.js":return t.import("./p-2a1f3916.system.js");case"../../../node_modules/date-fns/esm/locale/sr/index.js":return t.import("./p-95923534.system.js");case"../../../node_modules/date-fns/esm/locale/sr-Latn/index.js":return t.import("./p-8684aec2.system.js");case"../../../node_modules/date-fns/esm/locale/sv/index.js":return t.import("./p-65ec3a51.system.js");case"../../../node_modules/date-fns/esm/locale/ta/index.js":return t.import("./p-0244fedc.system.js");case"../../../node_modules/date-fns/esm/locale/te/index.js":return t.import("./p-f0ee0980.system.js");case"../../../node_modules/date-fns/esm/locale/th/index.js":return t.import("./p-4265744a.system.js");case"../../../node_modules/date-fns/esm/locale/tr/index.js":return t.import("./p-89f51bf7.system.js");case"../../../node_modules/date-fns/esm/locale/ug/index.js":return t.import("./p-99222ca2.system.js");case"../../../node_modules/date-fns/esm/locale/uk/index.js":return t.import("./p-ec98d6d7.system.js");case"../../../node_modules/date-fns/esm/locale/uz/index.js":return t.import("./p-905bc28d.system.js");case"../../../node_modules/date-fns/esm/locale/uz-Cyrl/index.js":return t.import("./p-ad0854eb.system.js");case"../../../node_modules/date-fns/esm/locale/vi/index.js":return t.import("./p-26b400c2.system.js");case"../../../node_modules/date-fns/esm/locale/zh-CN/index.js":return t.import("./p-604bc9db.system.js");case"../../../node_modules/date-fns/esm/locale/zh-HK/index.js":return t.import("./p-7a849d36.system.js");case"../../../node_modules/date-fns/esm/locale/zh-TW/index.js":return t.import("./p-1e73c09f.system.js");default:return new Promise((function(t,s){(typeof queueMicrotask==="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}function f(e){switch(e){case"../i18n/de.json":return t.import("./p-dec19c37.system.js");case"../i18n/en.json":return t.import("./p-42339760.system.js");default:return new Promise((function(t,s){(typeof queueMicrotask==="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}function p(e){if(e===void 0){e=document.body}var t=e.closest("[lang]");if(!t)return undefined;var s=t.lang;if(!s)return undefined;if(s.indexOf("-")!==-1){s=s.split("-")[0]}if(s.indexOf("_")!==-1){s=s.split("_")[0]}return s}function j(){if(typeof window==="undefined"||typeof window.navigator==="undefined"){return undefined}var e=window.navigator.languages&&window.navigator.languages.length>0?window.navigator.languages[0]:null;e=e||window.navigator.language;if(typeof e==="undefined"){return"en"}if(e.indexOf("-")!==-1){e=e.split("-")[0]}if(e.indexOf("_")!==-1){e=e.split("_")[0]}return e}function _(){var e=p()||j();return e||"en"}function h(e,t){if(t===void 0){t={}}if(!e)return"";return e===null||e===void 0?void 0:e.split(".").reduce((function(e,t){return e?e[t]:undefined}),t)}function y(e,t){return Object.entries(t).reduce((function(e,t){var s=t[0],n=t[1];return e.replace(new RegExp("{{[  ]*"+s+"[  ]*}}","gm"),String(g(n)))}),e)}function g(e){return typeof e==="function"?e():e}function v(e){var t=e.key,s=e.values,n=e.obj,r=e.lang,o=e.context;var a;var i=(a=h(t,n))!==null&&a!==void 0?a:t;return s?y(i,s):i}var b=function(){function e(){var e=this;this.requests=new Map;var t=c({lang:"",globalStrings:null,customTranslations:{}}),s=t.state,n=t.onChange;this.state=s;this.onChange=n;this.onChange("lang",(function(t){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.fetchTranslations(t);return[4,this.fetchDateLangModule(t)];case 1:e.sent();return[2]}}))}))}));this.onChange("customTranslations",(function(t){return __awaiter(e,void 0,void 0,(function(){var e,s,n,r;return __generator(this,(function(o){switch(o.label){case 0:s=this.state.lang||_();if(!!this.state.globalStrings)return[3,2];return[4,this.fetchTranslations(s)];case 1:o.sent();o.label=2;case 2:n=((e=t)===null||e===void 0?void 0:e[s])||{};r=Object.assign(Object.assign({},this.state.globalStrings),n);this.state.globalStrings=r;return[2]}}))}))}));if("MutationObserver"in window){var r=new MutationObserver((function(t){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(s){if(t[0].attributeName==="lang"){e=document.documentElement.getAttribute("lang");if(e!==t[0].oldValue){this.state.lang=e}}return[2]}))}))}));r.observe(document.documentElement,{attributes:true,attributeFilter:["lang"],attributeOldValue:true})}this.initialize()}e.prototype.initialize=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.fetchTranslations(),this.fetchDateLangModule()]).catch((function(e){return console.error("Error occurred in intialising i18n lib "+e.message)}))];case 1:e.sent();return[2]}}))}))};e.prototype.setLang=function(e){this.state.lang=e};e.prototype.getLang=function(){return this.state.lang};e.prototype.getDateLangModule=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.fetchDateLangModule(e||this.state.lang)];case 1:return[2,t.sent()]}}))}))};e.prototype.fetchTranslations=function(e){return __awaiter(this,void 0,void 0,(function(){var t;var s=this;return __generator(this,(function(n){t=e||_();this.state.lang=t;return[2,this.fetchDefaultTranslations(t).then((function(e){var n;var r=((n=s.state.customTranslations)===null||n===void 0?void 0:n[t])||{};var o=Object.assign(Object.assign({},e),r);s.state.globalStrings=o;return o}))]}))}))};e.prototype.fetchDefaultTranslations=function(e){var t=this;var s=this.requests.get(e);if(!s){s=f("../i18n/"+e+".json").then((function(e){return e.default})).then((function(e){return e})).catch((function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:console.warn("Error loading config for lang: "+e+" from pre-defined set. defaulting to en-US translation");return[4,this.fetchDefaultTranslations("en")];case 1:return[2,t.sent()]}}))}))}));this.requests.set(e,s)}return s};e.prototype.fetchDateLangModule=function(e){return __awaiter(this,void 0,void 0,(function(){var t,s,n;var r=this;return __generator(this,(function(o){t=e||_();s=this.requests.get("date_"+t);if(!s){n=t;if(n==="en")n="en-US";s=m("../../../node_modules/date-fns/esm/locale/"+n+"/index.js").then((function(e){return e.default})).then((function(e){return e})).catch((function(e){return __awaiter(r,void 0,void 0,(function(){var t;return __generator(this,(function(s){switch(s.label){case 0:console.warn("Error loading date lang module for : "+n+" from date-fns set",e);return[4,this.fetchDateLangModule("en-US").catch((function(e){console.error(" Error in fetching default date lang module ",e.message);return{}}))];case 1:t=s.sent();return[2,t]}}))}))}));this.requests.set("date_"+t,s)}return[2,s]}))}))};e.prototype.setTranslations=function(e){this.state.customTranslations=e};e.prototype.t=function(e,t,s){if(e===void 0){e=""}var n;return(n=v({key:e,values:t,obj:this.state.globalStrings,lang:this.state.lang,context:s}))!==null&&n!==void 0?n:e};e.prototype.i18n=function(e){var t=this;var s=e===void 0?{}:e,n=s.keyName,r=n===void 0?"":n;return function(e,s){var n=t;var o=e.componentWillLoad;e.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;var t=this;return __generator(this,(function(a){switch(a.label){case 0:if(!!n.state.globalStrings)return[3,2];return[4,n.fetchTranslations(n.state.lang||_())];case 1:a.sent();a.label=2;case 2:e=true;if(!this[s]){this[s]=v({key:r,values:null,obj:n.state.globalStrings,lang:n.state.lang,context:null});e=false}n.onChange("globalStrings",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){if(!e){this[s]=v({key:r,values:null,obj:n.state.globalStrings,lang:n.state.lang,context:null})}return[2]}))}))}));return[2,o&&o.call(this)]}}))}))}}};return e}();var x=e("T",new b);var w=e("i",x.i18n.bind(x))}}}));