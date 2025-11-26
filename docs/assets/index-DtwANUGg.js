var $t=Object.defineProperty;var _t=(r,t,e)=>t in r?$t(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var $=(r,t,e)=>_t(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,F=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),X=new WeakMap;let at=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(e,t))}return t}toString(){return this.cssText}};const mt=r=>new at(typeof r=="string"?r:r+"",void 0,J),j=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1]),r[0]);return new at(e,r,J)},gt=(r,t)=>{if(F)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Y=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:vt,getOwnPropertyDescriptor:At,getOwnPropertyNames:bt,getOwnPropertySymbols:St,getPrototypeOf:Et}=Object,m=globalThis,G=m.trustedTypes,wt=G?G.emptyScript:"",D=m.reactiveElementPolyfillSupport,x=(r,t)=>r,W={toAttribute(r,t){switch(t){case Boolean:r=r?wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ht=(r,t)=>!yt(r,t),Q={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&vt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=At(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const h=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,i=[...bt(e),...St(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Y(s))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach((e=>e(this)))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)}))}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach((e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:W).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n,o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const h=i.getPropertyOptions(s),a=typeof h.converter=="function"?{fromAttribute:h.converter}:((n=h.converter)==null?void 0:n.fromAttribute)!==void 0?h.converter:W;this._$Em=s;const c=a.fromAttribute(e,h.type);this[s]=c??((o=this._$Ej)==null?void 0:o.get(s))??c,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const n=this.constructor,o=this[t];if(i??(i=n.getPropertyOptions(t)),!((i.hasChanged??ht)(o,e)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:h}=o,a=this[n];h!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach((s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)})),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach((i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach((e=>this._$ET(e,this[e])))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[x("elementProperties")]=new Map,b[x("finalized")]=new Map,D==null||D({ReactiveElement:b}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,I=P.trustedTypes,tt=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,lt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+_,Ct=`<${ct}>`,A=document,T=()=>A.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",Z=Array.isArray,xt=r=>Z(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,g=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,dt=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),U=Pt(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),nt=new WeakMap,y=A.createTreeWalker(A,129);function ut(r,t){if(!Z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const Tt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=C;for(let h=0;h<e;h++){const a=r[h];let c,u,l=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===C?u[1]==="!--"?o=et:u[1]!==void 0?o=st:u[2]!==void 0?(dt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=g):u[3]!==void 0&&(o=g):o===g?u[0]===">"?(o=s??C,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?g:u[3]==='"'?rt:it):o===rt||o===it?o=g:o===et||o===st?o=C:(o=g,s=void 0);const f=o===g&&r[h+1].startsWith("/>")?" ":"";n+=o===C?a+Ct:l>=0?(i.push(c),a.slice(0,l)+lt+a.slice(l)+_+f):a+_+(l===-2?h:f)}return[ut(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,u]=Tt(t,e);if(this.el=N.createElement(c,i),y.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=y.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(lt)){const p=u[o++],f=s.getAttribute(l).split(_),R=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:R[2],strings:f,ctor:R[1]==="."?Ut:R[1]==="?"?Nt:R[1]==="@"?Ht:z}),s.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:n}),s.removeAttribute(l));if(dt.test(s.tagName)){const l=s.textContent.split(_),p=l.length-1;if(p>0){s.textContent=I?I.emptyScript:"";for(let f=0;f<p;f++)s.append(l[f],T()),y.nextNode(),a.push({type:2,index:++n});s.append(l[p],T())}}}else if(s.nodeType===8)if(s.data===ct)a.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:n}),l+=_.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var o,h;if(t===E)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=w(r,s._$AS(r,t.values),s,i)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);y.currentNode=s;let n=y.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new k(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Mt(n,this,t)),this._$AV.push(c),a=i[++h]}o!==(a==null?void 0:a.index)&&(n=y.nextNode(),o++)}return y.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(ut(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Ot(s,this),h=o.u(this.options);o.p(e),this.T(h),this._$AH=o}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new N(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new k(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=w(this,h[i+a],e,a),c===E&&(c=this._$AH[a]),o||(o=!O(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Nt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ht extends z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===E)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const q=P.litHtmlPolyfillSupport;q==null||q(N,k),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.1");const kt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new k(t.insertBefore(T(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=globalThis;class S extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var ot;S._$litElement$=!0,S.finalized=!0,(ot=v.litElementHydrateSupport)==null||ot.call(v,{LitElement:S});const V=v.litElementPolyfillSupport;V==null||V({LitElement:S});(v.litElementVersions??(v.litElementVersions=[])).push("4.2.1");class H extends S{constructor(){super(),this.currentIndex=1,this.travel=1,this.totalSlides=0,this.isTransitioning=!1,this.slidesContainer=null,this.userSlides=[]}renderExtraContent(){return U``}firstUpdated(){this.slidesContainer=this.renderRoot.querySelector(".slides"),this.userSlides=Array.from(this.children),this.totalSlides=this.userSlides.length,this.populateSlides(),this.slidesContainer.addEventListener("transitionend",()=>{this.handleTransitionEnd()})}populateSlides(){if(!this.slidesContainer||(this.slidesContainer.innerHTML="",this.totalSlides===0))return;const t=this.userSlides[this.totalSlides-1].cloneNode(!0);t.classList.add("slide"),this.slidesContainer.appendChild(t),this.userSlides.forEach(i=>{const s=i.cloneNode(!0);s.classList.add("slide"),this.slidesContainer.appendChild(s)});const e=this.userSlides[0].cloneNode(!0);e.classList.add("slide"),this.slidesContainer.appendChild(e),this.updateTransform(!0)}prevSlide(){this.isTransitioning||this.totalSlides===0||(this.adjustTravel(),this.isTransitioning=!0,this.currentIndex-=this.travel,this.updateTransform())}nextSlide(){this.isTransitioning||this.totalSlides===0||(this.adjustTravel(),this.isTransitioning=!0,this.currentIndex+=this.travel,this.updateTransform())}adjustTravel(){(typeof this.travel!="number"||this.travel<=0||this.travel>1)&&(this.travel=1)}updateTransform(t=!1){this.slidesContainer&&(this.slidesContainer.style.transition=t?"none":"transform 0.25s ease",this.slidesContainer.style.transform=`translateX(-${this.currentIndex*100}%)`)}handleTransitionEnd(){this.currentIndex<1?(this.currentIndex=this.totalSlides,this.updateTransform(!0)):this.currentIndex>this.totalSlides&&(this.currentIndex=1,this.updateTransform(!0)),this.isTransitioning=!1}render(){return U`
            <div class="viewport">
                <div class="slides"></div>
            </div>

            ${this.renderExtraContent()}
        `}}$(H,"properties",{currentIndex:{type:Number},travel:{type:Number}}),$(H,"styles",j`
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
    `);customElements.define("infinite-slideshow",H);class pt extends H{renderExtraContent(){return U`
            <button id="prev" @click="${this.prevSlide}"></button>
            <button id="next" @click="${this.nextSlide}"></button>
        `}}$(pt,"styles",[H.styles,j`
            :host {
                width: 100%;
                aspect-ratio: 2 / 1;
            }
            button {
                position: absolute;
                width: 13vw;
                aspect-ratio: 1 / 1;
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0);
                background-size: cover;
                cursor: pointer;
            }
            #prev {
                left: 10vw;
                background-image: url("src/images/animation/button left grey.webp");
            }
            #prev:hover {
                background-image: url("src/images/animation/button left red.webp");
            }
            #next {
                right: 10vw;
                background-image: url("src/images/animation/button right grey.webp");
            }
            #next:hover {
                background-image: url("src/images/animation/button right red.webp");
            }
        `]);customElements.define("animation-slideshow",pt);class M extends S{constructor(){super()}}$(M,"styles",j`
        .slice {
            position: relative;
            display: block;
            height: 100%;
        }

        .slice-back {
            height: 100%;
            position: relative;
        }
    `);customElements.define("basic-slice",M);class ft extends M{constructor(){super()}render(){return U`
            <div class="slice">
                <img class="slice-back" src="${this.imagePath}" />
            </div>
        `}}$(ft,"properties",{imagePath:{type:String}});customElements.define("blank-slice",ft);class K extends M{constructor(){super()}render(){return U`
            <a class="slice interactive" target="_blank" href="${this.link}">
                <img
                    class="slice-back"
                    src="${this.imagePath.replace(/(\.[^/.]+)$/,"-hover$1")}"
                />
                <img class="slice-front" src="${this.imagePath}" />
            </a>
        `}}$(K,"properties",{imagePath:{type:String},link:{type:String}}),$(K,"styles",[M.styles,j`
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
        `]);customElements.define("interactive-slice",K);
