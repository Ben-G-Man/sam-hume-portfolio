var Tt=Object.defineProperty;var Bt=(n,t,e)=>t in n?Tt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>Bt(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,nt=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),at=new WeakMap;let _t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(nt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(e,t))}return t}toString(){return this.cssText}};const Nt=n=>new _t(typeof n=="string"?n:n+"",void 0,rt),g=(n,...t)=>{const e=n.length===1?n[0]:t.reduce(((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1]),n[0]);return new _t(e,n,rt)},jt=(n,t)=>{if(nt)n.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},lt=nt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Nt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ot,defineProperty:Ut,getOwnPropertyDescriptor:Ht,getOwnPropertyNames:Lt,getOwnPropertySymbols:Rt,getPrototypeOf:It}=Object,_=globalThis,ht=_.trustedTypes,zt=ht?ht.emptyScript:"",W=_.reactiveElementPolyfillSupport,B=(n,t)=>n,K={toAttribute(n,t){switch(t){case Boolean:n=n?zt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},wt=(n,t)=>!Ot(n,t),dt={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ut(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Ht(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);r==null||r.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const e=this.properties,i=[...Lt(e),...Rt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(lt(s))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach((e=>e(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:K).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r,o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:K;this._$Em=s;const d=a.fromAttribute(e,l.type);this[s]=d??((o=this._$Ej)==null?void 0:o.get(s))??d,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const r=this.constructor,o=this[t];if(i??(i=r.getPropertyOptions(t)),!((i.hasChanged??wt)(o,e)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:l}=o,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach((s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)})),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach((i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach((e=>this._$ET(e,this[e])))),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[B("elementProperties")]=new Map,k[B("finalized")]=new Map,W==null||W({ReactiveElement:k}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,G=N.trustedTypes,ct=G?G.createPolicy("lit-html",{createHTML:n=>n}):void 0,At="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+v,Gt=`<${St}>`,x=document,O=()=>x.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",ot=Array.isArray,Dt=n=>ot(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",V=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ut=/>/g,A=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,gt=/"/g,Et=/^(?:script|style|textarea|title)$/i,qt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),u=qt(1),P=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ft=new WeakMap,S=x.createTreeWalker(x,129);function xt(n,t){if(!ot(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}const Ft=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=T;for(let l=0;l<e;l++){const a=n[l];let d,m,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,m=o.exec(a),m!==null);)f=o.lastIndex,o===T?m[1]==="!--"?o=pt:m[1]!==void 0?o=ut:m[2]!==void 0?(Et.test(m[2])&&(s=RegExp("</"+m[2],"g")),o=A):m[3]!==void 0&&(o=A):o===A?m[0]===">"?(o=s??T,h=-1):m[1]===void 0?h=-2:(h=o.lastIndex-m[2].length,d=m[1],o=m[3]===void 0?A:m[3]==='"'?gt:mt):o===gt||o===mt?o=A:o===pt||o===ut?o=T:(o=A,s=void 0);const b=o===A&&n[l+1].startsWith("/>")?" ":"";r+=o===T?a+Gt:h>=0?(i.push(d),a.slice(0,h)+At+a.slice(h)+v+b):a+v+(h===-2?l:b)}return[xt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const l=t.length-1,a=this.parts,[d,m]=Ft(t,e);if(this.el=H.createElement(d,i),S.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=S.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(At)){const f=m[o++],b=s.getAttribute(h).split(v),R=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:R[2],strings:b,ctor:R[1]==="."?Vt:R[1]==="?"?Yt:R[1]==="@"?Xt:F}),s.removeAttribute(h)}else h.startsWith(v)&&(a.push({type:6,index:r}),s.removeAttribute(h));if(Et.test(s.tagName)){const h=s.textContent.split(v),f=h.length-1;if(f>0){s.textContent=G?G.emptyScript:"";for(let b=0;b<f;b++)s.append(h[b],O()),S.nextNode(),a.push({type:2,index:++r});s.append(h[f],O())}}}else if(s.nodeType===8)if(s.data===St)a.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(v,h+1))!==-1;)a.push({type:7,index:r}),h+=v.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function M(n,t,e=n,i){var o,l;if(t===P)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=M(n,s._$AS(n,t.values),s,i)),t}class Wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);S.currentNode=s;let r=S.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new L(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Kt(r,this,t)),this._$AV.push(d),a=i[++l]}o!==(a==null?void 0:a.index)&&(r=S.nextNode(),o++)}return S.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),U(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(xt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new Wt(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new H(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new L(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=M(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const l=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=M(this,l[i+a],e,a),d===P&&(d=this._$AH[a]),o||(o=!U(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!s&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Yt extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Xt extends F{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??c)===P)return;const i=this._$AH,s=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==c&&(i===c||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Kt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const Y=N.litHtmlPolyfillSupport;Y==null||Y(H,L),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.1");const Jt=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new L(t.insertBefore(O(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class $ extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}}var yt;$._$litElement$=!0,$.finalized=!0,(yt=E.litElementHydrateSupport)==null||yt.call(E,{LitElement:$});const X=E.litElementPolyfillSupport;X==null||X({LitElement:$});(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");class C extends ${constructor(){super(),this.travel=1,this.looping=!0,this.duration=.3,this.currentIndex=this.looping?1:0,this.totalSlides=0,this.isTransitioning=!1,this.slidesContainer=null,this.userSlides=[]}renderExtraContent(){return u``}firstUpdated(){this.slidesContainer=this.renderRoot.querySelector(".slides"),this.userSlides=Array.from(this.children),this.totalSlides=this.userSlides.length,this.populateSlides(),this.slidesContainer.addEventListener("transitionend",()=>{this.handleTransitionEnd()})}populateSlides(){if(this.slidesContainer&&(this.slidesContainer.innerHTML="",this.totalSlides!==0)){if(this.looping){const t=this.userSlides[this.totalSlides-1].cloneNode(!0);t.classList.add("slide"),this.slidesContainer.appendChild(t)}if(this.userSlides.forEach(t=>{const e=t.cloneNode(!0);e.classList.add("slide"),this.slidesContainer.appendChild(e)}),this.looping){const t=this.userSlides[0].cloneNode(!0);t.classList.add("slide"),this.slidesContainer.appendChild(t)}this.updateTransform(!0)}}prevSlide(){this.setSlide(this.currentIndex-this.travel)}nextSlide(){this.setSlide(this.currentIndex+this.travel)}setSlide(t){this.isTransitioning||this.totalSlides===0||!this.looping&&(t<0||t>=this.totalSlides-this.travel)||(this.adjustTravel(),this.isTransitioning=!0,this.currentIndex=t,this.updateTransform())}adjustTravel(){(typeof this.travel!="number"||this.travel<=0||this.travel>1)&&(this.travel=1)}updateTransform(t=!1){this.slidesContainer&&(this.slidesContainer.style.transition=t||this.duration<=0?"none":`transform ${this.duration}s ease`,this.slidesContainer.style.transform=`translateX(-${this.currentIndex*100}%)`,!t&&this.duration<=0&&this.handleTransitionEnd())}handleTransitionEnd(){this.looping&&(this.currentIndex<this.travel?(this.currentIndex=this.totalSlides,this.updateTransform(!0)):this.currentIndex>this.totalSlides+1-this.travel&&(this.currentIndex=1,this.updateTransform(!0))),this.isTransitioning=!1}render(){return u`
            <div class="viewport">
                <div class="slides"></div>
            </div>

            ${this.renderExtraContent()}
        `}}p(C,"properties",{currentIndex:{type:Number},travel:{type:Number},looping:{type:Boolean},duration:{type:Number}}),p(C,"styles",g`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
        }

        .viewport {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .slides {
            display: flex;
            height: 100%;
            transition: transform 0.25s ease;
            will-change: transform;
        }

        .slide {
            flex: 0 0 100%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
            
        .imageSlide {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .imageSlide img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            pointer-events: none;
        }
    `);customElements.define("default-slideshow",C);class J extends C{constructor(){super(),this.buttonStyle="tape"}renderExtraContent(){return u`
                <button id="prev" class="${this.buttonStyle}" @click=${this.prevSlide}></button>
                <button id="next" class="${this.buttonStyle}" @click=${this.nextSlide}></button>
            </div>
        `}}p(J,"properties",{buttonStyle:{type:String}}),p(J,"styles",[C.styles,g`
            :host {
                width: 100%;
                height: 100%;
            }

            button {
                position: absolute;
                width: 13vw;
                height: 13vw;
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
            }

            #prev.scribble {
                left: -3vw;
            }

            #next.scribble {
                right: -3vw;
            }

            #prev.tape {
                left: 3vw;
            }

            #next.tape {
                right: 3vw;
            }

            button.tape {
                filter: grayscale(100%);
                transition: filter 0.1s ease;
            }

            button.tape:hover {
                filter: grayscale(0%);
                transition: filter 0.1s ease;
            }

            #prev.tape {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp);
            }

            #next.tape {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-right-red.webp);
            }

            button.scribble {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_1.webp);
            }

            button.scribble:hover {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_2.gif);
            }

            #next.scribble {
                transform: translateY(-50%) scaleX(-1);
            }
        `]);customElements.define("interactive-slideshow",J);class Ct extends C{constructor(){super()}renderExtraContent(){return u`
            <div id="navbar"></div>
            <div>
                <button id="prev" @click=${this.prevSlide}></button>
                <button id="next" @click=${this.nextSlide}></button>
            </div>
        `}}p(Ct,"styles",[C.styles,g`
            :host {
                width: 100%;
                height: 100%;
            }

            #navbar {
                position: absolute;
                width: 70%;
                left: 15%;
                bottom: 0;
                height: 6vw;
                background-color: rgba(0, 0, 0, 0.5);
            }

            button {
                position: absolute;
                width: 6vw;
                height: 6vw;
                border: 0;
                bottom: 0;
                background: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp);
                cursor: pointer;
            }

            button:hover {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp);
            }

            #prev {
                left: 0;
            }

            #next {
                right: 0;
                transform: scaleX(-1);
            }
        `]);customElements.define("navbar-slideshow",Ct);class D extends ${constructor(){super()}}p(D,"styles",g`
        .slice {
            position: relative;
            display: block;
            height: 100%;
        }

        .slice-back {
            height: 100%;
            position: relative;
        }
    `);customElements.define("basic-slice",D);class Z extends D{constructor(){super()}render(){return u`
            <a class="slice interactive" target="_blank" href="${this.link}">
                <img
                    class="slice-back"
                    src="${this.imagePath.replace(/(\.[^/.]+)$/,"-hover$1")}"
                    loading="lazy"
                />
                <img
                    class="slice-front"
                    src="${this.imagePath}"
                    loading="lazy"
                />
            </a>
        `}}p(Z,"properties",{imagePath:{type:String},link:{type:String}}),p(Z,"styles",[D.styles,g`
            .slice-front {
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .slice.interactive {
                cursor: pointer;
            }

            .slice.interactive > :first-child {
                opacity: 0;
            }

            .slice.interactive > :last-child {
                opacity: 1;
            }

            .slice.interactive:hover > :first-child {
                opacity: 1;
            }

            .slice.interactive:hover > :last-child {
                opacity: 0;
            }
        `]);customElements.define("interactive-slice",Z);class w extends ${constructor(){super()}renderExtraContent(){return u``}render(){return u`
            <div class="popup-container">
                <div id="exit-button" onclick="ClosePopup()"></div>
                ${this.renderExtraContent()}
            </div>
        `}}p(w,"styles",g`
        .popup-container {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            align-items: center; 
        }

        #exit-button {
            width: 150px;
            aspect-ratio: 1/1;
            position: absolute;
            top: 5%;
            right: 5%;
            background-image: url('https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/exit-symbol-2.webp');
            filter: grayscale(100%);
            transition: filter 0.1s ease;
            background-size: cover;
            cursor: pointer;
            z-index: 21;
        }

        #exit-button:hover {
            filter: grayscale(0%);
            transition: filter 0.1s ease;
        }
    `);customElements.define("project-popup",w);class Q extends w{constructor(){super(),this.standardSuffix=".webp",this.videos=[]}renderExtraContent(){return u`
            <img loading="lazy" id="background" src='https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/background-squared-paper.webp' />
            <multimedia-slideshow
                .images=${Array.from({length:this.slideCount},(t,e)=>`${this.slideDeckPrefixPath}${e+1}${this.standardSuffix}`)}
                .video=${this.video}
                navbar="true"
                duration="0"
            ></multimedia-slideshow>
            <table>
                <tr>
                    <td colspan="2" id="title">${this.title}</td>
                </tr>
                <tr>
                    <td>Year:</td>
                    <td>${this.year}</td>
                </tr>
                <tr>
                    <td>Length:</td>
                    <td>${this.length}</td>
                </tr>
                <tr>
                    <td>Tools:</td>
                    <td>${this.tools}</td>
                </tr>
                <tr>
                    <td colspan="2">${this.description}</td>
                </tr>
            </table>​
        `}}p(Q,"properties",{title:{type:String},year:{type:String},length:{type:String},tools:{type:String},description:{type:String},slideDeckPrefixPath:{type:String},slideCount:{type:Number},standardSuffix:{type:String},video:{type:String}}),p(Q,"styles",[w.styles,g`
                #background {
                    width: 90%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }

                multimedia-slideshow {
                    position: absolute;
                    right: 10%;
                    width: 55%;
                    aspect-ratio: 5 / 4;
                }

                table {
                    position: absolute;
                    left: 13%;
                    /* This calc keeps the top of the text in line with the top of the space allocated in the background art */
                    top: calc(50% - 20.5vw);
                    width: 18.5%;
                    border-spacing: 0 1vh;
                    font-size: var(--text-height);
                    font-family: 'HelveticaThermal', sans-serif;
                }

                table #title {
                    font-size: var(--subtitle-height);
                }

                table tr:last-of-type {
                    transform: translateY(1.4vh);
                }
            `]);customElements.define("default-project-popup",Q);class tt extends ${constructor(){super(),this.src="",this.loading="lazy"}_open(){const e=document.getElementById("full-screen-template").content,i=document.importNode(e,!0),s=i.querySelector("#image-full-screen");s.src=this.src,i.querySelector("#exit-button").addEventListener("click",()=>this._close()),document.body.appendChild(i)}_close(){const t=document.getElementById("image-full-screen-container");t&&document.body.removeChild(t)}render(){return u`
      <img id="main-image" loading=${this.loading} src=${this.src} @click=${this._open} />
      ${this.open?c:""}
    `}}p(tt,"properties",{src:{type:String},loading:{type:String}}),p(tt,"styles",g`
    #main-image {
      max-width: 100%;
      max-height: 100%;
      cursor: zoom-in;
    }
  `);customElements.define("expandable-image",tt);class et extends ${constructor(){super(),this.images=[],this.videos=[],this.travel=1,this.continuous=!1,this.navBar=!1,this.duration=.3}getSlides(){let t=this.images.map(e=>u`
                <div>
                    ${this.continuous?u`<img style="height: 100%;" src="${e}" />`:u`<expandable-image style="max-height: 100%; max-width: 90%;" src="${e}"></expandable-image>`}
                </div>
            `);return this.video&&t.push(u`
                    <div>
                        <iframe
                            width="65%"
                            height="50%"
                            src="${this.video}"
                            title="YouTube video player"
                            frameborder="0"
                            allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                `),t}render(){return this.navBar?u`
                <navbar-slideshow travel="${this.travel}" duration="${this.duration}">
                    ${this.getSlides()}
                </navbar-slideshow>
            `:u`
                <interactive-slideshow
                    buttonStyle="scribble"
                    duration="${this.duration}"
                    travel="${this.travel}"
                >
                    ${this.getSlides()}
                </interactive-slideshow>
            `}}p(et,"properties",{images:{type:Array},video:{type:String},travel:{type:Number},continuous:{type:Boolean},navBar:{type:Boolean},duration:{type:Number}}),p(et,"styles",g`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
        }

        navbar-slideshow {
            margin-top: -3vw;
        }
    `);customElements.define("multimedia-slideshow",et);class kt extends w{constructor(){super(),this.slideshowImages=["https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-1.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-2.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-3.webp"]}renderExtraContent(){return u`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sketchbook-layout.webp" />
            <multimedia-slideshow
                travel="0.5"
                .images=${this.slideshowImages}
                .continuous=${!0}
            ></multimedia-slideshow>
        `}}p(kt,"styles",[w.styles,g`
            img {
                position: absolute;
                width: 105%;
                max-height: 100vh;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            multimedia-slideshow {
                padding-top: 4%;
                margin-left: 3.5%;
                width: 92%;
                aspect-ratio: 1946 / 800;
            }
        `]);customElements.define("sketchbook-popup",kt);class Pt extends w{constructor(){super(),this.slideshowImages=["https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-1.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-2.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-3.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-4.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-5.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-6.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-7.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-8.webp"]}renderExtraContent(){return u`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/other digital art.webp" />
            <multimedia-slideshow
                .images=${this.slideshowImages}
                duration="0"
            ></multimedia-slideshow>
        `}}p(Pt,"styles",[w.styles,g`
            img {
                position: absolute;
                width: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                object-fit: contain;
            }

            multimedia-slideshow {
                margin-left: 13%;
                height: 100%;
                width: 74%;
            }
        `]);customElements.define("digital-art-popup",Pt);window.addEventListener("load",()=>{const n=document.getElementById("loading");n&&n.classList.add("end")});const Zt=document.getElementById("face-melt"),it=document.getElementsByTagName("main")[0],$t=8,Qt=20,te=1e3/Qt;let st=1,I=1,bt=0;const ee=n=>`https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/landing/face-melt-${n}.webp`;function ie(n){Zt.src=ee(n)}function se(){const n=it.clientHeight,t=n*.15;return{start:t,range:n-t}}it.addEventListener("scroll",()=>{const{start:n,range:t}=se(),i=(it.scrollTop-n)/t,s=Math.max(0,Math.min(1,i));st=Math.min($t,Math.floor(s*$t))});function Mt(){requestAnimationFrame(Mt);const n=performance.now();n-bt<te||I!==st&&(I+=Math.sign(st-I),ie(I),bt=n)}Mt();console.log("Welcome to the Sam Site (TM)! Don't touch anything. This site is built on fragile hopes and dreams.");const j="open";let y,q;function ne(n){if(y&&y.classList.remove(j),y=document.getElementById(n),!y){console.error("Popup not found:",n);return}y.classList.add(j),q.classList.add(j)}function re(){y&&y.classList.remove(j),y=null,q.classList.remove(j)}document.addEventListener("DOMContentLoaded",()=>{q=document.getElementById("blur"),q||console.error("Blur background not found!"),window.OpenPopup=ne,window.ClosePopup=re});const oe=document.getElementById("main-background"),vt=document.getElementsByTagName("main")[0];vt.addEventListener("scroll",()=>{oe.style.marginTop=`-${vt.scrollTop/2}px`});
