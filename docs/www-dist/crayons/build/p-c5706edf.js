const e="crayons";let t,n,l,s=!1,o=!1,r=!1,i=!1,c=null,a=!1;const f="undefined"!=typeof window?window:{},u=f.CSS,d=f.document||{head:{}},h=f.HTMLElement||class{},$={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},p=(()=>(d.head.attachShadow+"").indexOf("[native")>-1)(),y=e=>Promise.resolve(e),b=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),m=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=e,r=w(t,s),i=g(n);$.ael(o,l,r,i),(t.o=t.o||[]).push((()=>$.rel(o,l,r,i)))}))},w=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(l){Se(l)}},g=e=>0!=(2&e),v="http://www.w3.org/1999/xlink",j=new WeakMap,k=e=>"sc-"+e.h,O={},S=e=>"object"==(e=typeof e)||"function"===e,C=(e,t,...n)=>{let l=null,s=null,o=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!S(l))&&(l+=""),r&&i?c[c.length-1].$+=l:c.push(r?_(null,l):l),i=r)};if(a(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,M);const f=_(e,null);return f.p=t,c.length>0&&(f.m=c),f.g=s,f.v=o,f},_=(e,t)=>({t:0,j:e,$:t,k:null,m:null,p:null,g:null,v:null}),x={},M={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(E)},R=e=>({vattrs:e.p,vchildren:e.m,vkey:e.g,vname:e.v,vtag:e.j,vtext:e.$}),E=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),C(e.vtag,t,...e.vchildren||[])}const t=_(e.vtag,e.vtext);return t.p=e.vattrs,t.m=e.vchildren,t.g=e.vkey,t.v=e.vname,t},N=(e,t,n,l,s,o)=>{if(n!==l){let i=Oe(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=T(n),o=T(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const a=S(l);if((i||a&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(r){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(v,t):e.removeAttribute(t)):(!i||4&o||s)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(v,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):Oe(f,c)?c.slice(2):c[2]+t.slice(3),n&&$.rel(e,t,n,!1),l&&$.ael(e,t,l,!1)}},P=/\s/,T=e=>e?e.split(P):[],L=(e,t,n,l)=>{const s=11===t.k.nodeType&&t.k.host?t.k.host:t.k,o=e&&e.p||O,r=t.p||O;for(l in o)l in r||N(s,l,o[l],void 0,n,t.t);for(l in r)N(s,l,o[l],r[l],n,t.t)},W=(e,o,c,a)=>{let f,u,h,$=o.m[c],p=0;if(s||(r=!0,"slot"===$.j&&(t&&a.classList.add(t+"-s"),$.t|=$.m?2:1)),null!==$.$)f=$.k=d.createTextNode($.$);else if(1&$.t)f=$.k=d.createTextNode("");else{if(i||(i="svg"===$.j),f=$.k=d.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.j),i&&"foreignObject"===$.j&&(i=!1),L(null,$,i),null!=t&&f["s-si"]!==t&&f.classList.add(f["s-si"]=t),$.m)for(p=0;p<$.m.length;++p)u=W(e,$,p,f),u&&f.appendChild(u);"svg"===$.j?i=!1:"foreignObject"===f.tagName&&(i=!0)}return f["s-hn"]=l,3&$.t&&(f["s-sr"]=!0,f["s-cr"]=n,f["s-sn"]=$.v||"",h=e&&e.m&&e.m[c],h&&h.j===$.j&&e.k&&A(e.k,!1)),f},A=(e,t)=>{$.t|=1;const n=e.childNodes;for(let s=n.length-1;s>=0;s--){const e=n[s];e["s-hn"]!==l&&e["s-ol"]&&(H(e).insertBefore(e,q(e)),e["s-ol"].remove(),e["s-ol"]=void 0,r=!0),t&&A(e,t)}$.t&=-2},F=(e,t,n,s,o,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=W(null,n,o,e),i&&(s[o].k=i,c.insertBefore(i,q(t))))},U=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.k,J(l),o=!0,s["s-ol"]?s["s-ol"].remove():A(s,!0),s.remove())},D=(e,t)=>e.j===t.j&&("slot"===e.j?e.v===t.v:e.g===t.g),q=e=>e&&e["s-ol"]||e,H=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,V=(e,t)=>{const n=t.k=e.k,l=e.m,s=t.m,o=t.j,r=t.$;let c;null===r?(i="svg"===o||"foreignObject"!==o&&i,"slot"===o||L(e,t,i),null!==l&&null!==s?((e,t,n,l)=>{let s,o,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],h=l.length-1,$=l[0],p=l[h];for(;r<=f&&i<=h;)if(null==u)u=t[++r];else if(null==d)d=t[--f];else if(null==$)$=l[++i];else if(null==p)p=l[--h];else if(D(u,$))V(u,$),u=t[++r],$=l[++i];else if(D(d,p))V(d,p),d=t[--f],p=l[--h];else if(D(u,p))"slot"!==u.j&&"slot"!==p.j||A(u.k.parentNode,!1),V(u,p),e.insertBefore(u.k,d.k.nextSibling),u=t[++r],p=l[--h];else if(D(d,$))"slot"!==u.j&&"slot"!==p.j||A(d.k.parentNode,!1),V(d,$),e.insertBefore(d.k,u.k),d=t[--f],$=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].g&&t[a].g===$.g){c=a;break}c>=0?(o=t[c],o.j!==$.j?s=W(t&&t[i],n,c,e):(V(o,$),t[c]=void 0,s=o.k),$=l[++i]):(s=W(t&&t[i],n,i,e),$=l[++i]),s&&H(u.k).insertBefore(s,q(u.k))}r>f?F(e,null==l[h+1]?null:l[h+1].k,n,l,i,h):i>h&&U(t,r,f)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),F(n,null,t,s,0,s.length-1)):null!==l&&U(l,0,l.length-1),i&&"svg"===o&&(i=!1)):(c=n["s-cr"])?c.parentNode.textContent=r:e.$!==r&&(n.data=r)},z=e=>{let t,n,l,s,o,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(r=i[s].nodeType,i[s]["s-hn"]!==t["s-hn"]||""!==o){if(1===r&&o===i[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){t.hidden=!0;break}z(t)}},B=[],G=e=>{let t,n,l,s,r,i,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(I(n,s)?(r=B.find((e=>e.O===n)),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.S=t:B.push({S:t,O:n}),n["s-sr"]&&B.map((e=>{I(e.O,n["s-sn"])&&(r=B.find((e=>e.O===n)),r&&!e.S&&(e.S=r.S))}))):B.some((e=>e.O===n))||B.push({O:n}));1===t.nodeType&&G(t)}},I=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,J=e=>{e.p&&e.p.ref&&e.p.ref(null),e.m&&e.m.map(J)},K=e=>ve(e).C,Q=(e,t,n)=>{const l=K(e);return{emit:e=>X(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},X=(e,t,n)=>{const l=$.ce(t,n);return e.dispatchEvent(l),l},Y=(e,t)=>{t&&!e._&&t["s-p"]&&t["s-p"].push(new Promise((t=>e._=t)))},Z=(e,t)=>{if(e.t|=16,!(4&e.t))return Y(e,e.M),Le((()=>ee(e,t)));e.t|=512},ee=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>ie(n,e,t))),e.u=null),l=ie(n,"componentWillLoad")):l=ie(n,"componentWillUpdate"),ce(l,(()=>te(e,n,t)))},te=async(e,t,n)=>{const l=e.C,s=l["s-rc"];n&&(e=>{const t=e.R,n=e.C,l=t.t,s=((e,t)=>{let n=k(t),l=xe.get(n);if(e=11===e.nodeType?e:d,l)if("string"==typeof l){let t,s=j.get(e=e.head||e);s||j.set(e,s=new Set),s.has(n)||(t=d.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);ne(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>se(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},ne=(e,i)=>{try{c=i,i=i.render(),e.t&=-17,e.t|=2,((e,i)=>{const c=e.C,a=e.R,f=e.N||_(null,null),u=(e=>e&&e.j===x)(i)?i:C(null,null,i);if(l=c.tagName,a.P&&(u.p=u.p||{},a.P.map((([e,t])=>u.p[t]=c[e]))),u.j=null,u.t|=4,e.N=u,u.k=f.k=c.shadowRoot||c,t=c["s-sc"],n=c["s-cr"],s=p&&0!=(1&a.t),o=!1,V(f,u),$.t|=1,r){let e,t,n,l,s,o;G(u.k);let r=0;for(;r<B.length;r++)e=B[r],t=e.O,t["s-ol"]||(n=d.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<B.length;r++)if(e=B[r],t=e.O,e.S){for(l=e.S.parentNode,s=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}o&&z(u.k),$.t&=-2,B.length=0})(e,i)}catch(a){Se(a,e.C)}return c=null,null},le=()=>c,se=e=>{const t=e.C,n=e.i,l=e.M;ie(n,"componentDidRender"),64&e.t||(e.t|=64,ae(t),ie(n,"componentDidLoad"),e.T(t),l||re()),e.L(t),e._&&(e._(),e._=void 0),512&e.t&&Te((()=>Z(e,!1))),e.t&=-517},oe=e=>{{const t=ve(e),n=t.C.isConnected;return n&&2==(18&t.t)&&Z(t,!1),n}},re=()=>{ae(d.documentElement),Te((()=>X(f,"appload",{detail:{namespace:"crayons"}})))},ie=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){Se(l)}},ce=(e,t)=>e&&e.then?e.then(t):t(),ae=e=>e.classList.add("hydrated"),fe=(e,t,n)=>{if(t.W){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.W),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>ve(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=ve(e),o=s.C,r=s.F.get(t),i=s.t,c=s.i;if(n=((e,t)=>null==e||S(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),!(8&i&&void 0!==r||n===r)&&(s.F.set(t,n),c)){if(l.A&&128&i){const e=l.A[t];e&&e.map((e=>{try{c[e](n,r,t)}catch(l){Se(l,o)}}))}2==(18&i)&&Z(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ve(this);return n.U.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){$.jmp((()=>{const t=n.get(e);this.hasOwnProperty(t)&&(l=this[t],delete this[t]),this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.P.push([e,s]),s}))}}return e},ue=e=>{ie(e,"connectedCallback")},de=e=>{const t=e.cloneNode;e.cloneNode=function(e){const n=this,l=n.shadowRoot&&p,s=t.call(n,!!l&&e);if(!l&&e){let e,t,l=0,o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;l<n.childNodes.length;l++)e=n.childNodes[l]["s-nr"],t=o.every((e=>!n.childNodes[l][e])),e&&(s.__appendChild?s.__appendChild(e.cloneNode(!0)):s.appendChild(e.cloneNode(!0))),t&&s.appendChild(n.childNodes[l].cloneNode(!0))}return s}},he=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){const t=e["s-sn"]=pe(e),n=ye(this.childNodes,t);if(n){const l=be(n,t),s=l[l.length-1];return s.parentNode.insertBefore(e,s.nextSibling)}return this.__appendChild(e)}},$e=(e,t)=>{class n extends Array{item(e){return this[e]}}if(8&t.t){const t=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map((e=>1===e.nodeType))}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){const e=t.call(this);if(0==(1&$.t)&&2&ve(this).t){const t=new n;for(let n=0;n<e.length;n++){const l=e[n]["s-nr"];l&&t.push(l)}return t}return n.from(e)}})}},pe=e=>e["s-sn"]||1===e.nodeType&&e.getAttribute("slot")||"",ye=(e,t)=>{let n,l=0;for(;l<e.length;l++){if(n=e[l],n["s-sr"]&&n["s-sn"]===t)return n;if(n=ye(n.childNodes,t),n)return n}return null},be=(e,t)=>{const n=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)n.push(e);return n},me=(e,t={})=>{const n=[],l=t.exclude||[],s=f.customElements,o=d.head,r=o.querySelector("meta[charset]"),i=d.createElement("style"),c=[];let a,u=!0;Object.assign($,t),$.l=new URL(t.resourcesUrl||"./",d.baseURI).href,e.map((e=>e[1].map((t=>{const o={t:t[0],h:t[1],W:t[2],D:t[3]};o.W=t[2],o.D=t[3],o.P=[],o.A={},!p&&1&o.t&&(o.t|=8);const r=o.h,i=class extends HTMLElement{constructor(e){super(e),ke(e=this,o),1&o.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e)),$e(e,o)}connectedCallback(){a&&(clearTimeout(a),a=null),u?c.push(this):$.jmp((()=>(e=>{if(0==(1&$.t)){const t=ve(e),n=t.R,l=()=>{};if(1&t.t)m(e,t,n.D),ue(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=d.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Y(t,t.M=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),Te((()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=_e(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.A=s.watchers,fe(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(i){Se(i)}t.t&=-9,t.t|=128,e(),ue(t.i)}if(s.style){let e=s.style;const t=k(n);if(!xe.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_crayons("./p-32abb7ce.js").then((n=>n.scopeCss(e,t,!1)))),((e,t,n)=>{let l=xe.get(e);b&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,xe.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,r=()=>Z(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)))}l()}})(this)))}disconnectedCallback(){$.jmp((()=>(()=>{if(0==(1&$.t)){const e=ve(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),ie(t,"disconnectedCallback")}})()))}componentOnReady(){return ve(this).q}};de(i.prototype),he(i.prototype),o.H=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,fe(i,o,1)))})))),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),u=!1,c.length?c.map((e=>e.connectedCallback())):$.jmp((()=>a=setTimeout(re,30)))},we=(e,t)=>t,ge=new WeakMap,ve=e=>ge.get(e),je=(e,t)=>ge.set(t.i=e,t),ke=(e,t)=>{const n={t:0,C:e,R:t,F:new Map};return n.U=new Promise((e=>n.L=e)),n.q=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],m(e,n,t.D),ge.set(e,n)},Oe=(e,t)=>t in e,Se=(e,t)=>(0,console.error)(e,t),Ce=new Map,_e=e=>{const t=e.h.replace(/-/g,"_"),n=e.H,l=Ce.get(n);return l?l[t]:__sc_import_crayons(`./${n}.entry.js`).then((e=>(Ce.set(n,e),e[t])),Se)},xe=new Map,Me=[],Re=[],Ee=(e,t)=>n=>{e.push(n),a||(a=!0,t&&4&$.t?Te(Pe):$.raf(Pe))},Ne=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){Se(t)}e.length=0},Pe=()=>{Ne(Me),Ne(Re),(a=Me.length>0)&&$.raf(Pe)},Te=e=>y().then(e),Le=Ee(Re,!0);export{u as C,we as F,h as H,e as N,y as a,me as b,Q as c,d,x as e,oe as f,le as g,C as h,K as i,$ as p,je as r,f as w}