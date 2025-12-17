var Tt=Object.defineProperty;var Bt=(n,t,e)=>t in n?Tt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>Bt(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,st=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),ot=new WeakMap;let _t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ot.set(e,t))}return t}toString(){return this.cssText}};const jt=n=>new _t(typeof n=="string"?n:n+"",void 0,nt),g=(n,...t)=>{const e=n.length===1?n[0]:t.reduce(((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1]),n[0]);return new _t(e,n,nt)},Ht=(n,t)=>{if(st)n.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=G.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},at=st?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return jt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nt,defineProperty:Ot,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Lt,getOwnPropertySymbols:Rt,getPrototypeOf:It}=Object,_=globalThis,lt=_.trustedTypes,zt=lt?lt.emptyScript:"",V=_.reactiveElementPolyfillSupport,B=(n,t)=>n,Y={toAttribute(n,t){switch(t){case Boolean:n=n?zt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},wt=(n,t)=>!Nt(n,t),ht={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ot(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Ut(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);r==null||r.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const e=this.properties,i=[...Lt(e),...Rt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(at(s))}else t!==void 0&&e.push(at(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach((e=>e(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ht(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Y).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r,o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:Y;this._$Em=s;const c=a.fromAttribute(e,l.type);this[s]=c??((o=this._$Ej)==null?void 0:o.get(s))??c,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const r=this.constructor,o=this[t];if(i??(i=r.getPropertyOptions(t)),!((i.hasChanged??wt)(o,e)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:l}=o,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach((s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)})),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach((i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach((e=>this._$ET(e,this[e])))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[B("elementProperties")]=new Map,P[B("finalized")]=new Map,V==null||V({ReactiveElement:P}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,q=j.trustedTypes,ct=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,At="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+y,Gt=`<${St}>`,x=document,N=()=>x.createComment(""),O=n=>n===null||typeof n!="object"&&typeof n!="function",rt=Array.isArray,Dt=n=>rt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",K=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,pt=/>/g,A=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,mt=/"/g,Et=/^(?:script|style|textarea|title)$/i,qt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),m=qt(1),k=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),gt=new WeakMap,S=x.createTreeWalker(x,129);function xt(n,t){if(!rt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}const Ft=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=T;for(let l=0;l<e;l++){const a=n[l];let c,u,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===T?u[1]==="!--"?o=dt:u[1]!==void 0?o=pt:u[2]!==void 0?(Et.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=s??T,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?A:u[3]==='"'?mt:ut):o===mt||o===ut?o=A:o===dt||o===pt?o=T:(o=A,s=void 0);const v=o===A&&n[l+1].startsWith("/>")?" ":"";r+=o===T?a+Gt:h>=0?(i.push(c),a.slice(0,h)+At+a.slice(h)+y+v):a+y+(h===-2?l:v)}return[xt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const l=t.length-1,a=this.parts,[c,u]=Ft(t,e);if(this.el=U.createElement(c,i),S.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=S.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(At)){const f=u[o++],v=s.getAttribute(h).split(y),z=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:z[2],strings:v,ctor:z[1]==="."?Vt:z[1]==="?"?Kt:z[1]==="@"?Xt:W}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:r}),s.removeAttribute(h));if(Et.test(s.tagName)){const h=s.textContent.split(y),f=h.length-1;if(f>0){s.textContent=q?q.emptyScript:"";for(let v=0;v<f;v++)s.append(h[v],N()),S.nextNode(),a.push({type:2,index:++r});s.append(h[f],N())}}}else if(s.nodeType===8)if(s.data===St)a.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:r}),h+=y.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function M(n,t,e=n,i){var o,l;if(t===k)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=M(n,s._$AS(n,t.values),s,i)),t}class Wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??x).importNode(e,!0);S.currentNode=s;let r=S.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new I(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Jt(r,this,t)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(r=S.nextNode(),o++)}return S.currentNode=x,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(xt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new Wt(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new U(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new I(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=M(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==k,o&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=M(this,l[i+a],e,a),c===k&&(c=this._$AH[a]),o||(o=!O(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Kt extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Xt extends W{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??d)===k)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Jt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const X=j.litHtmlPolyfillSupport;X==null||X(U,I),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.1");const Yt=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new I(t.insertBefore(N(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis;class $ extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}}var bt;$._$litElement$=!0,$.finalized=!0,(bt=E.litElementHydrateSupport)==null||bt.call(E,{LitElement:$});const J=E.litElementPolyfillSupport;J==null||J({LitElement:$});(E.litElementVersions??(E.litElementVersions=[])).push("4.2.1");class L extends ${constructor(){super(),this.looping=!0,this.currentIndex=this.looping?1:0,this.travel=1,this.totalSlides=0,this.isTransitioning=!1,this.slidesContainer=null,this.userSlides=[]}renderExtraContent(){return m``}firstUpdated(){this.slidesContainer=this.renderRoot.querySelector(".slides"),this.userSlides=Array.from(this.children),this.totalSlides=this.userSlides.length,this.populateSlides(),this.slidesContainer.addEventListener("transitionend",()=>{this.handleTransitionEnd()})}populateSlides(){if(this.slidesContainer&&(this.slidesContainer.innerHTML="",this.totalSlides!==0)){if(this.looping){const t=this.userSlides[this.totalSlides-1].cloneNode(!0);t.classList.add("slide"),this.slidesContainer.appendChild(t)}if(this.userSlides.forEach(t=>{const e=t.cloneNode(!0);e.classList.add("slide"),this.slidesContainer.appendChild(e)}),this.looping){const t=this.userSlides[0].cloneNode(!0);t.classList.add("slide"),this.slidesContainer.appendChild(t)}this.updateTransform(!0)}}prevSlide(){this.setSlide(this.currentIndex-this.travel)}nextSlide(){this.setSlide(this.currentIndex+this.travel)}setSlide(t){this.isTransitioning||this.totalSlides===0||!this.looping&&(t<0||t>=this.totalSlides-this.travel)||(this.adjustTravel(),this.isTransitioning=!0,this.currentIndex=t,this.updateTransform())}adjustTravel(){(typeof this.travel!="number"||this.travel<=0||this.travel>1)&&(this.travel=1)}updateTransform(t=!1){this.slidesContainer&&(this.slidesContainer.style.transition=t?"none":"transform 0.25s ease",this.slidesContainer.style.transform=`translateX(-${this.currentIndex*100}%)`)}handleTransitionEnd(){this.looping&&(this.currentIndex<this.travel?(this.currentIndex=this.totalSlides,this.updateTransform(!0)):this.currentIndex>this.totalSlides+1-this.travel&&(this.currentIndex=1,this.updateTransform(!0))),this.isTransitioning=!1}render(){return m`
            <div class="viewport">
                <div class="slides"></div>
            </div>

            ${this.renderExtraContent()}
        `}}p(L,"properties",{currentIndex:{type:Number},travel:{type:Number},looping:{type:Boolean}}),p(L,"styles",g`
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
    `);customElements.define("default-slideshow",L);class Z extends L{constructor(){super(),this.imagePath="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp",this.imagePathHover="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp",this.buttonSpacing="10vw"}renderExtraContent(){return m`
            <button
                id="prev"
                @click="${this.prevSlide}"
                style="
                    --btn-img: url(${this.imagePath});
                    --btn-img-hover: url(${this.imagePathHover});
                    --button-spacing: ${this.buttonSpacing};
                "
            ></button>

            <button
                id="next"
                @click="${this.nextSlide}"
                style="
                    --btn-img: url(${this.imagePath});
                    --btn-img-hover: url(${this.imagePathHover});
                    --button-spacing: ${this.buttonSpacing};
                "
            ></button>
        `}}p(Z,"properties",{imagePath:{type:String},imagePathHover:{type:String},buttonSpacing:{type:String}}),p(Z,"styles",[L.styles,g`
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
                background: rgba(0, 0, 0, 0);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
            }

            #prev {
                left: var(--button-spacing);
                background-image: var(--btn-img);
            }

            #prev:hover {
                background-image: var(--btn-img-hover);
            }

            #next {
                right: var(--button-spacing);
                background-image: var(--btn-img);
                transform: translateY(-50%) scaleX(-1);
            }

            #next:hover {
                background-image: var(--btn-img-hover);
            }
        `]);customElements.define("interactive-slideshow",Z);class R extends ${constructor(){super()}}p(R,"styles",g`
        .slice {
            position: relative;
            display: block;
            height: 100%;
        }

        .slice-back {
            height: 100%;
            position: relative;
        }
    `);customElements.define("basic-slice",R);class Ct extends R{constructor(){super()}render(){return m`
            <div class="slice">
                <img
                    class="slice-back"
                    src="${this.imagePath}"
                    loading="lazy"
                />
            </div>
        `}}p(Ct,"properties",{imagePath:{type:String}});customElements.define("blank-slice",Ct);class Q extends R{constructor(){super()}render(){return m`
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
        `}}p(Q,"properties",{imagePath:{type:String},link:{type:String}}),p(Q,"styles",[R.styles,g`
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
        `]);customElements.define("interactive-slice",Q);class w extends ${constructor(){super()}renderExtraContent(){return m``}render(){return m`
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
            width: 100px;
            height: 100px;
            position: absolute;
            top: 5%;
            right: 5%;
            background-image: url('https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/exit-symbol-1.webp');
            background-size: cover;
            cursor: pointer;
            z-index: 12;
        }

        #exit-button:hover {
            background-image: url('https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/exit-symbol-2.webp');
        }
    `);customElements.define("project-popup",w);class tt extends w{constructor(){super(),this.standardSuffix=".webp"}renderExtraContent(){return m`
            <img loading="lazy" id="background" src='https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/background-squared-paper.webp' />
            <image-slideshow
                .images=${Array.from({length:this.slideCount},(t,e)=>`${this.slideDeckPrefixPath}${e+1}${this.standardSuffix}`)}
            ></image-slideshow>
        `}}p(tt,"properties",{title:{type:String},year:{type:String},length:{type:String},tools:{type:String},description:{type:String},slideDeckPrefixPath:{type:String},slideCount:{type:Number},standardSuffix:{type:String}}),p(tt,"styles",[w.styles,g`
                .work-text {
                    pointer-events: none;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index: 5;
                }

                #background {
                    height: 90%;
                    position: absolute;
                    top: 5%;
                    left: 50%;
                    transform: translateX(-50%);
                }

                image-slideshow {
                    position: absolute;
                    right: 15%;
                    width: 55%;
                    height: 80%;
                }
            `]);customElements.define("default-project-popup",tt);class et extends ${constructor(){super(),this.src="",this.loading="lazy"}_open(){const e=document.getElementById("full-screen-template").content,i=document.importNode(e,!0),s=i.querySelector("#image-full-screen");s.src=this.src,i.querySelector("#exit-button").addEventListener("click",()=>this._close()),document.body.appendChild(i)}_close(){const t=document.getElementById("image-full-screen-container");t&&document.body.removeChild(t)}render(){return m`
      <img id="main-image" loading=${this.loading} src=${this.src} @click=${this._open} />
      ${this.open?d:""}
    `}}p(et,"properties",{src:{type:String},loading:{type:String}}),p(et,"styles",g`
    #main-image {
      max-width: 100%;
      max-height: 100%;
      cursor: zoom-in;
    }
  `);customElements.define("expandable-image",et);class it extends ${constructor(){super(),this.imagePath="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow 1.webp",this.imagePathHover="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow 2 (select).gif",this.travel=1,this.continuous=!1}render(){return m`
        <interactive-slideshow
        .imagePath=${this.imagePath}
        .imagePathHover=${this.imagePathHover}
        buttonSpacing="0"
        travel="${this.travel}"
        >
        ${this.images.map(t=>m`
                <div>
                    ${this.continuous?m`<img style="height: 100%;" src="${t}" />`:m`<expandable-image style="max-height: 100%; max-width: 72%;" src="${t}"></expandable-image>`}
                </div>
            `)}

        </interactive-slideshow>
    `}}p(it,"properties",{images:{type:Array},travel:{type:Number},continuous:{type:Boolean}}),p(it,"styles",g`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
        }
    `);customElements.define("image-slideshow",it);class Pt extends w{constructor(){super(),this.slideshowImages=["https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-1.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-2.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-3.webp"]}renderExtraContent(){return m`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sketchbook layout.webp" />
            <image-slideshow
                travel="0.5"
                .images=${this.slideshowImages}
                .continuous=${!0}
            ></image-slideshow>
        `}}p(Pt,"styles",[w.styles,g`
            img {
                position: absolute;
                width: 91%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            image-slideshow {
                padding-top: 4%;
                margin-left: 10%;
                width: 80%;
                aspect-ratio: 1946 / 800;
            }
        `]);customElements.define("sketchbook-popup",Pt);class kt extends w{constructor(){super(),this.slideshowImages=["https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-1.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-2.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-3.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-4.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-5.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-6.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-7.webp","https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-8.webp"]}renderExtraContent(){return m`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/other digital art.webp" />
            <image-slideshow
                .images=${this.slideshowImages}
            ></image-slideshow>
        `}}p(kt,"styles",[w.styles,g`
            img {
                position: absolute;
                width: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                object-fit: contain;
            }

            image-slideshow {
                margin-left: 13%;
                height: 100%;
                width: 74%;
            }
        `]);customElements.define("digital-art-popup",kt);window.addEventListener("load",()=>{const n=document.getElementById("loading");n&&n.classList.add("end")});const Zt=document.getElementById("face-melt"),ft=document.getElementsByTagName("main")[0],Qt=window.innerHeight*.15,te=window.innerHeight*.6,$t=8,ee=20,ie=1e3/ee;let D=1,C=1,vt=0;const se=n=>`https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/landing/face-melt-${n.toString()}.webp`;function ne(n){Zt.src=se(n)}ft.addEventListener("scroll",()=>{let t=(ft.scrollTop-Qt)/te;t=Math.max(0,Math.min(1,t)),D=Math.min($t,Math.floor(t*$t))});function Mt(){requestAnimationFrame(Mt);const n=performance.now();n-vt<ie||C!==D&&(C<D?C++:C>D&&C--,ne(C),vt=n)}Mt();console.log("Welcome to the Sam Site (TM)! Don't touch anything. This site is built on fragile hopes and dreams.");const H="open";let b,F;function re(n){if(b&&b.classList.remove(H),b=document.getElementById(n),!b){console.error("Popup not found:",n);return}b.classList.add(H),F.classList.add(H)}function oe(){b&&b.classList.remove(H),b=null,F.classList.remove(H)}document.addEventListener("DOMContentLoaded",()=>{F=document.getElementById("blur"),F||console.error("Blur background not found!"),window.OpenPopup=re,window.ClosePopup=oe});const ae=document.getElementById("main-background"),yt=document.getElementsByTagName("main")[0];yt.addEventListener("scroll",()=>{ae.style.marginTop=`-${yt.scrollTop/2}px`});
