System.register([],(function(t){"use strict";return{execute:function(){t({a:r,b:a,c:e,d:n});function a(t){return function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var r=a.width?String(a.width):t.defaultWidth;var e=t.formats[r]||t.formats[t.defaultWidth];return e}}function r(t){return function(a,r){var e=r||{};var n=e.context?String(e.context):"standalone";var u;if(n==="formatting"&&t.formattingValues){var l=t.defaultFormattingWidth||t.defaultWidth;var i=e.width?String(e.width):l;u=t.formattingValues[i]||t.formattingValues[l]}else{var f=t.defaultWidth;var v=e.width?String(e.width):t.defaultWidth;u=t.values[v]||t.values[f]}var c=t.argumentCallback?t.argumentCallback(a):a;return u[c]}}function e(t){return function(a){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var e=a.match(t.matchPattern);if(!e)return null;var n=e[0];var u=a.match(t.parsePattern);if(!u)return null;var l=t.valueCallback?t.valueCallback(u[0]):u[0];l=r.valueCallback?r.valueCallback(l):l;var i=a.slice(n.length);return{value:l,rest:i}}}function n(t){return function(a){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var e=r.width;var n=e&&t.matchPatterns[e]||t.matchPatterns[t.defaultMatchWidth];var i=a.match(n);if(!i){return null}var f=i[0];var v=e&&t.parsePatterns[e]||t.parsePatterns[t.defaultParseWidth];var c=Array.isArray(v)?l(v,(function(t){return t.test(f)})):u(v,(function(t){return t.test(f)}));var d;d=t.valueCallback?t.valueCallback(c):c;d=r.valueCallback?r.valueCallback(d):d;var h=a.slice(f.length);return{value:d,rest:h}}}function u(t,a){for(var r in t){if(t.hasOwnProperty(r)&&a(t[r])){return r}}return undefined}function l(t,a){for(var r=0;r<t.length;r++){if(a(t[r])){return r}}return undefined}}}}));