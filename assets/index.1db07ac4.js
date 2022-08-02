const Mv=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Mv();function ll(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Lv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uv=ll(Lv);function mf(t){return!!t||t===""}function ul(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ke(s)?Vv(s):ul(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ke(t))return t;if(De(t))return t}}const Fv=/;(?![^(]*\))/g,$v=/:(.+)/;function Vv(t){const e={};return t.split(Fv).forEach(n=>{if(n){const s=n.split($v);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Js(t){let e="";if(Ke(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Js(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Bv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=go(t[s],e[s]);return n}function go(t,e){if(t===e)return!0;let n=Xu(t),s=Xu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Fr(t),s=Fr(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?Bv(t,e):!1;if(n=De(t),s=De(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!go(t[o],e[o]))return!1}}return String(t)===String(e)}const $e=t=>Ke(t)?t:t==null?"":G(t)||De(t)&&(t.toString===yf||!ee(t.toString))?JSON.stringify(t,gf,2):String(t),gf=(t,e)=>e&&e.__v_isRef?gf(t,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:vf(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!G(e)&&!_f(e)?String(e):e,Ie={},Ds=[],$t=()=>{},jv=()=>!1,qv=/^on[^a-z]/,Yo=t=>qv.test(t),hl=t=>t.startsWith("onUpdate:"),ct=Object.assign,dl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hv=Object.prototype.hasOwnProperty,ue=(t,e)=>Hv.call(t,e),G=Array.isArray,Os=t=>li(t)==="[object Map]",vf=t=>li(t)==="[object Set]",Xu=t=>li(t)==="[object Date]",ee=t=>typeof t=="function",Ke=t=>typeof t=="string",Fr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",fl=t=>De(t)&&ee(t.then)&&ee(t.catch),yf=Object.prototype.toString,li=t=>yf.call(t),zv=t=>li(t).slice(8,-1),_f=t=>li(t)==="[object Object]",pl=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,to=ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kv=/-(\w)/g,Xt=Xo(t=>t.replace(Kv,(e,n)=>n?n.toUpperCase():"")),Wv=/\B([A-Z])/g,Zs=Xo(t=>t.replace(Wv,"-$1").toLowerCase()),Jo=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Xo(t=>t?`on${Jo(t)}`:""),$r=(t,e)=>!Object.is(t,e),no=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},yo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ju;const Gv=()=>Ju||(Ju=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let zt;class bf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&zt&&(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function wf(t){return new bf(t)}function Qv(t,e=zt){e&&e.active&&e.effects.push(t)}const ml=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ef=t=>(t.w&Mn)>0,If=t=>(t.n&Mn)>0,Yv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Mn},Xv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ef(r)&&!If(r)?r.delete(t):e[n++]=r,r.w&=~Mn,r.n&=~Mn}e.length=n}},fc=new WeakMap;let yr=0,Mn=1;const pc=30;let Lt;const ss=Symbol(""),mc=Symbol("");class gl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qv(this,s)}run(){if(!this.active)return this.fn();let e=Lt,n=kn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,kn=!0,Mn=1<<++yr,yr<=pc?Yv(this):Zu(this),this.fn()}finally{yr<=pc&&Xv(this),Mn=1<<--yr,Lt=this.parent,kn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(Zu(this),this.onStop&&this.onStop(),this.active=!1)}}function Zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kn=!0;const Tf=[];function er(){Tf.push(kn),kn=!1}function tr(){const t=Tf.pop();kn=t===void 0?!0:t}function Et(t,e,n){if(kn&&Lt){let s=fc.get(t);s||fc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ml()),Sf(r)}}function Sf(t,e){let n=!1;yr<=pc?If(t)||(t.n|=Mn,n=!Ef(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function ln(t,e,n,s,r,i){const o=fc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?pl(n)&&a.push(o.get("length")):(a.push(o.get(ss)),Os(t)&&a.push(o.get(mc)));break;case"delete":G(t)||(a.push(o.get(ss)),Os(t)&&a.push(o.get(mc)));break;case"set":Os(t)&&a.push(o.get(ss));break}if(a.length===1)a[0]&&gc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);gc(ml(c))}}function gc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&eh(s);for(const s of n)s.computed||eh(s)}function eh(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Jv=ll("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fr)),Zv=vl(),ey=vl(!1,!0),ty=vl(!0),th=ny();function ny(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=pe(this);for(let i=0,o=this.length;i<o;i++)Et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er();const s=pe(this)[e].apply(this,n);return tr(),s}}),t}function vl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?yy:Nf:e?Rf:Af).get(s))return s;const o=G(s);if(!t&&o&&ue(th,r))return Reflect.get(th,r,i);const a=Reflect.get(s,r,i);return(Fr(r)?xf.has(r):Jv(r))||(t||Et(s,"get",r),e)?a:Ne(a)?o&&pl(r)?a:a.value:De(a)?t?Df(a):nr(a):a}}const sy=Cf(),ry=Cf(!0);function Cf(t=!1){return function(n,s,r,i){let o=n[s];if(Vr(o)&&Ne(o)&&!Ne(r))return!1;if(!t&&!Vr(r)&&(vc(r)||(r=pe(r),o=pe(o)),!G(n)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=G(n)&&pl(s)?Number(s)<n.length:ue(n,s),c=Reflect.set(n,s,r,i);return n===pe(i)&&(a?$r(r,o)&&ln(n,"set",s,r):ln(n,"add",s,r)),c}}function iy(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ln(t,"delete",e,void 0),s}function oy(t,e){const n=Reflect.has(t,e);return(!Fr(e)||!xf.has(e))&&Et(t,"has",e),n}function ay(t){return Et(t,"iterate",G(t)?"length":ss),Reflect.ownKeys(t)}const kf={get:Zv,set:sy,deleteProperty:iy,has:oy,ownKeys:ay},cy={get:ty,set(t,e){return!0},deleteProperty(t,e){return!0}},ly=ct({},kf,{get:ey,set:ry}),yl=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function Bi(t,e,n=!1,s=!1){t=t.__v_raw;const r=pe(t),i=pe(e);n||(e!==i&&Et(r,"get",e),Et(r,"get",i));const{has:o}=Zo(r),a=s?yl:n?wl:Br;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ji(t,e=!1){const n=this.__v_raw,s=pe(n),r=pe(t);return e||(t!==r&&Et(s,"has",t),Et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function qi(t,e=!1){return t=t.__v_raw,!e&&Et(pe(t),"iterate",ss),Reflect.get(t,"size",t)}function nh(t){t=pe(t);const e=pe(this);return Zo(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function sh(t,e){e=pe(e);const n=pe(this),{has:s,get:r}=Zo(n);let i=s.call(n,t);i||(t=pe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?$r(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function rh(t){const e=pe(this),{has:n,get:s}=Zo(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ln(e,"delete",t,void 0),i}function ih(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Hi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=pe(o),c=e?yl:t?wl:Br;return!t&&Et(a,"iterate",ss),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function zi(t,e,n){return function(...s){const r=this.__v_raw,i=pe(r),o=Os(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?yl:e?wl:Br;return!e&&Et(i,"iterate",c?mc:ss),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:this}}function uy(){const t={get(i){return Bi(this,i)},get size(){return qi(this)},has:ji,add:nh,set:sh,delete:rh,clear:ih,forEach:Hi(!1,!1)},e={get(i){return Bi(this,i,!1,!0)},get size(){return qi(this)},has:ji,add:nh,set:sh,delete:rh,clear:ih,forEach:Hi(!1,!0)},n={get(i){return Bi(this,i,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hi(!0,!1)},s={get(i){return Bi(this,i,!0,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zi(i,!1,!1),n[i]=zi(i,!0,!1),e[i]=zi(i,!1,!0),s[i]=zi(i,!0,!0)}),[t,n,e,s]}const[hy,dy,fy,py]=uy();function _l(t,e){const n=e?t?py:fy:t?dy:hy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ue(n,r)&&r in s?n:s,r,i)}const my={get:_l(!1,!1)},gy={get:_l(!1,!0)},vy={get:_l(!0,!1)},Af=new WeakMap,Rf=new WeakMap,Nf=new WeakMap,yy=new WeakMap;function _y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function by(t){return t.__v_skip||!Object.isExtensible(t)?0:_y(zv(t))}function nr(t){return Vr(t)?t:bl(t,!1,kf,my,Af)}function wy(t){return bl(t,!1,ly,gy,Rf)}function Df(t){return bl(t,!0,cy,vy,Nf)}function bl(t,e,n,s,r){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=by(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function An(t){return Vr(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function Vr(t){return!!(t&&t.__v_isReadonly)}function vc(t){return!!(t&&t.__v_isShallow)}function Of(t){return An(t)||Vr(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Vs(t){return vo(t,"__v_skip",!0),t}const Br=t=>De(t)?nr(t):t,wl=t=>De(t)?Df(t):t;function Pf(t){kn&&Lt&&(t=pe(t),Sf(t.dep||(t.dep=ml())))}function Mf(t,e){t=pe(t),t.dep&&gc(t.dep)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Xe(t){return Lf(t,!1)}function Ey(t){return Lf(t,!0)}function Lf(t,e){return Ne(t)?t:new Iy(t,e)}class Iy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Br(e)}get value(){return Pf(this),this._value}set value(e){e=this.__v_isShallow?e:pe(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Br(e),Mf(this))}}function ot(t){return Ne(t)?t.value:t}const Ty={get:(t,e,n)=>ot(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ne(r)&&!Ne(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Uf(t){return An(t)?t:new Proxy(t,Ty)}function Sy(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=Cy(t,n);return e}class xy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Cy(t,e,n){const s=t[e];return Ne(s)?s:new xy(t,e,n)}class ky{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new gl(e,()=>{this._dirty||(this._dirty=!0,Mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=pe(this);return Pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ay(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=$t):(s=t.get,r=t.set),new ky(s,r,i||!r,n)}function Rn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ui(i,e,n)}return r}function Nt(t,e,n,s){if(ee(t)){const i=Rn(t,e,n,s);return i&&fl(i)&&i.catch(o=>{ui(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Nt(t[i],e,n,s));return r}function ui(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rn(c,null,10,[t,o,a]);return}}Ry(t,n,r,s)}function Ry(t,e,n,s=!0){console.error(t)}let _o=!1,yc=!1;const bt=[];let nn=0;const Tr=[];let _r=null,xs=0;const Sr=[];let wn=null,Cs=0;const Ff=Promise.resolve();let El=null,_c=null;function Il(t){const e=El||Ff;return t?e.then(this?t.bind(this):t):e}function Ny(t){let e=nn+1,n=bt.length;for(;e<n;){const s=e+n>>>1;jr(bt[s])<t?e=s+1:n=s}return e}function $f(t){(!bt.length||!bt.includes(t,_o&&t.allowRecurse?nn+1:nn))&&t!==_c&&(t.id==null?bt.push(t):bt.splice(Ny(t.id),0,t),Vf())}function Vf(){!_o&&!yc&&(yc=!0,El=Ff.then(Hf))}function Dy(t){const e=bt.indexOf(t);e>nn&&bt.splice(e,1)}function Bf(t,e,n,s){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Vf()}function Oy(t){Bf(t,_r,Tr,xs)}function jf(t){Bf(t,wn,Sr,Cs)}function ea(t,e=null){if(Tr.length){for(_c=e,_r=[...new Set(Tr)],Tr.length=0,xs=0;xs<_r.length;xs++)_r[xs]();_r=null,xs=0,_c=null,ea(t,e)}}function qf(t){if(ea(),Sr.length){const e=[...new Set(Sr)];if(Sr.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,s)=>jr(n)-jr(s)),Cs=0;Cs<wn.length;Cs++)wn[Cs]();wn=null,Cs=0}}const jr=t=>t.id==null?1/0:t.id;function Hf(t){yc=!1,_o=!0,ea(t),bt.sort((n,s)=>jr(n)-jr(s));const e=$t;try{for(nn=0;nn<bt.length;nn++){const n=bt[nn];n&&n.active!==!1&&Rn(n,null,14)}}finally{nn=0,bt.length=0,qf(),_o=!1,El=null,(bt.length||Tr.length||Sr.length)&&Hf(t)}}function Py(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ie;d&&(r=n.map(p=>p.trim())),h&&(r=n.map(yo))}let a,c=s[a=Ba(e)]||s[a=Ba(Xt(e))];!c&&i&&(c=s[a=Ba(Zs(e))]),c&&Nt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(l,t,6,r)}}function zf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=zf(l,e,!0);u&&(a=!0,ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):ct(o,i),s.set(t,o),o)}function ta(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Zs(e))||ue(t,e))}let At=null,na=null;function bo(t){const e=At;return At=t,na=t&&t.type.__scopeId||null,e}function fn(t){na=t}function pn(){na=null}function mt(t,e=At,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vh(-1);const i=bo(e),o=t(...r);return bo(i),s._d&&vh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ja(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:v,inheritAttrs:b}=t;let _,x;const w=bo(t);try{if(n.shapeFlag&4){const L=r||s;_=Mt(u.call(L,L,h,i,p,d,v)),x=c}else{const L=e;_=Mt(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),x=e.props?c:Ly(c)}}catch(L){Cr.length=0,ui(L,t,1),_=fe(wt)}let R=_;if(x&&b!==!1){const L=Object.keys(x),{shapeFlag:V}=R;L.length&&V&7&&(o&&L.some(hl)&&(x=Uy(x,o)),R=Ln(R,x))}return n.dirs&&(R=Ln(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),_=R,bo(w),_}function My(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(To(s)){if(s.type!==wt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},Uy=(t,e)=>{const n={};for(const s in t)(!hl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Fy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?oh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ta(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?oh(s,o,l):!0:!!o;return!1}function oh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function Tl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $y=t=>t.__isSuspense,Vy={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?jy(e,n,s,r,i,o,a,c,l):qy(t,e,n,s,r,o,a,c,l)},hydrate:Hy,create:Sl,normalize:zy},By=Vy;function qr(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function jy(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),d=t.suspense=Sl(t,r,s,e,h,n,i,o,a,c);l(null,d.pendingBranch=t.ssContent,h,null,s,d,i,o),d.deps>0?(qr(t,"onPending"),qr(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Ps(d,t.ssFallback)):d.resolve()}function qy(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:v,pendingBranch:b,isInFallback:_,isHydrating:x}=h;if(b)h.pendingBranch=d,Kt(d,b)?(c(b,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():_&&(c(v,p,n,s,r,null,i,o,a),Ps(h,p))):(h.pendingId++,x?(h.isHydrating=!1,h.activeBranch=b):l(b,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),_?(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(v,p,n,s,r,null,i,o,a),Ps(h,p))):v&&Kt(d,v)?(c(v,d,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(v&&Kt(d,v))c(v,d,n,s,r,h,i,o,a),Ps(h,d);else if(qr(e,"onPending"),h.pendingBranch=d,h.pendingId++,c(null,d,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:w,pendingId:R}=h;w>0?setTimeout(()=>{h.pendingId===R&&h.fallback(p)},w):w===0&&h.fallback(p)}}function Sl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:d,um:p,n:v,o:{parentNode:b,remove:_}}=l,x=yo(t.props&&t.props.timeout),w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1){const{vnode:L,activeBranch:V,pendingBranch:Q,pendingId:W,effects:P,parentComponent:Y,container:ie}=w;if(w.isHydrating)w.isHydrating=!1;else if(!R){const nt=V&&Q.transition&&Q.transition.mode==="out-in";nt&&(V.transition.afterLeave=()=>{W===w.pendingId&&d(Q,ie,qe,0)});let{anchor:qe}=w;V&&(qe=v(V),p(V,Y,w,!0)),nt||d(Q,ie,qe,0)}Ps(w,Q),w.pendingBranch=null,w.isInFallback=!1;let de=w.parent,Re=!1;for(;de;){if(de.pendingBranch){de.effects.push(...P),Re=!0;break}de=de.parent}Re||jf(P),w.effects=[],qr(L,"onResolve")},fallback(R){if(!w.pendingBranch)return;const{vnode:L,activeBranch:V,parentComponent:Q,container:W,isSVG:P}=w;qr(L,"onFallback");const Y=v(V),ie=()=>{!w.isInFallback||(h(null,R,W,Y,Q,null,P,a,c),Ps(w,R))},de=R.transition&&R.transition.mode==="out-in";de&&(V.transition.afterLeave=ie),w.isInFallback=!0,p(V,Q,null,!0),de||ie()},move(R,L,V){w.activeBranch&&d(w.activeBranch,R,L,V),w.container=R},next(){return w.activeBranch&&v(w.activeBranch)},registerDep(R,L){const V=!!w.pendingBranch;V&&w.deps++;const Q=R.vnode.el;R.asyncDep.catch(W=>{ui(W,R,0)}).then(W=>{if(R.isUnmounted||w.isUnmounted||w.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:P}=R;Cc(R,W,!1),Q&&(P.el=Q);const Y=!Q&&R.subTree.el;L(R,P,b(Q||R.subTree.el),Q?null:v(R.subTree),w,o,c),Y&&_(Y),Tl(R,P.el),V&&--w.deps===0&&w.resolve()})},unmount(R,L){w.isUnmounted=!0,w.activeBranch&&p(w.activeBranch,n,R,L),w.pendingBranch&&p(w.pendingBranch,n,R,L)}};return w}function Hy(t,e,n,s,r,i,o,a,c){const l=e.suspense=Sl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function zy(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=ah(s?n.default:n),t.ssFallback=s?ah(n.fallback):fe(wt)}function ah(t){let e;if(ee(t)){const n=Bs&&t._c;n&&(t._d=!1,ce()),t=t(),n&&(t._d=!0,e=Rt,cp())}return G(t)&&(t=My(t)),t=Mt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Ky(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):jf(t)}function Ps(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Tl(s,r))}function so(t,e){if(ze){let n=ze.provides;const s=ze.parent&&ze.parent.provides;s===n&&(n=ze.provides=Object.create(s)),n[t]=e}}function Vt(t,e,n=!1){const s=ze||At;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}function Wy(t,e){return xl(t,null,e)}const ch={};function xr(t,e,n){return xl(t,e,n)}function xl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ie){const a=ze;let c,l=!1,u=!1;if(Ne(t)?(c=()=>t.value,l=vc(t)):An(t)?(c=()=>t,s=!0):G(t)?(u=!0,l=t.some(x=>An(x)||vc(x)),c=()=>t.map(x=>{if(Ne(x))return x.value;if(An(x))return Zn(x);if(ee(x))return Rn(x,a,2)})):ee(t)?e?c=()=>Rn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Nt(t,a,3,[d])}:c=$t,e&&s){const x=c;c=()=>Zn(x())}let h,d=x=>{h=_.onStop=()=>{Rn(x,a,4)}};if(zr)return d=$t,e?n&&Nt(e,a,3,[c(),u?[]:void 0,d]):c(),$t;let p=u?[]:ch;const v=()=>{if(!!_.active)if(e){const x=_.run();(s||l||(u?x.some((w,R)=>$r(w,p[R])):$r(x,p)))&&(h&&h(),Nt(e,a,3,[x,p===ch?void 0:p,d]),p=x)}else _.run()};v.allowRecurse=!!e;let b;r==="sync"?b=v:r==="post"?b=()=>pt(v,a&&a.suspense):b=()=>Oy(v);const _=new gl(c,b);return e?n?v():p=_.run():r==="post"?pt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&dl(a.scope.effects,_)}}function Gy(t,e,n){const s=this.proxy,r=Ke(t)?t.includes(".")?Kf(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=ze;Un(this);const a=xl(r,i.bind(s),n);return o?Un(o):Nn(),a}function Kf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Zn(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))Zn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(vf(t)||Os(t))t.forEach(n=>{Zn(n,e)});else if(_f(t))for(const n in t)Zn(t[n],e);return t}function Qy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wo(()=>{t.isMounted=!0}),Xf(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],Yy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},setup(t,{slots:e}){const n=oa(),s=Qy();let r;return()=>{const i=e.default&&Gf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==wt){o=b;break}}const a=pe(t),{mode:c}=a;if(s.isLeaving)return qa(o);const l=lh(o);if(!l)return qa(o);const u=bc(l,a,s,n);wc(l,u);const h=n.subTree,d=h&&lh(h);let p=!1;const{getTransitionKey:v}=l.type;if(v){const b=v();r===void 0?r=b:b!==r&&(r=b,p=!0)}if(d&&d.type!==wt&&(!Kt(l,d)||p)){const b=bc(d,a,s,n);if(wc(d,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},qa(o);c==="in-out"&&l.type!==wt&&(b.delayLeave=(_,x,w)=>{const R=Wf(s,d);R[String(d.key)]=d,_._leaveCb=()=>{x(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Xy=Yy;function Wf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function bc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:b,onAppear:_,onAfterAppear:x,onAppearCancelled:w}=e,R=String(t.key),L=Wf(n,t),V=(P,Y)=>{P&&Nt(P,s,9,Y)},Q=(P,Y)=>{const ie=Y[1];V(P,Y),G(P)?P.every(de=>de.length<=1)&&ie():P.length<=1&&ie()},W={mode:i,persisted:o,beforeEnter(P){let Y=a;if(!n.isMounted)if(r)Y=b||a;else return;P._leaveCb&&P._leaveCb(!0);const ie=L[R];ie&&Kt(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),V(Y,[P])},enter(P){let Y=c,ie=l,de=u;if(!n.isMounted)if(r)Y=_||c,ie=x||l,de=w||u;else return;let Re=!1;const nt=P._enterCb=qe=>{Re||(Re=!0,qe?V(de,[P]):V(ie,[P]),W.delayedLeave&&W.delayedLeave(),P._enterCb=void 0)};Y?Q(Y,[P,nt]):nt()},leave(P,Y){const ie=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return Y();V(h,[P]);let de=!1;const Re=P._leaveCb=nt=>{de||(de=!0,Y(),nt?V(v,[P]):V(p,[P]),P._leaveCb=void 0,L[ie]===t&&delete L[ie])};L[ie]=t,d?Q(d,[P,Re]):Re()},clone(P){return bc(P,e,n,s)}};return W}function qa(t){if(sa(t))return t=Ln(t),t.children=null,t}function lh(t){return sa(t)?t.children?t.children[0]:void 0:t}function wc(t,e){t.shapeFlag&6&&t.component?wc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===rt?(o.patchFlag&128&&r++,s=s.concat(Gf(o.children,e,a))):(e||o.type!==wt)&&s.push(a!=null?Ln(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Qf(t){return ee(t)?{setup:t,name:t.name}:t}const ro=t=>!!t.type.__asyncLoader,sa=t=>t.type.__isKeepAlive;function Jy(t,e){Yf(t,"a",e)}function Zy(t,e){Yf(t,"da",e)}function Yf(t,e,n=ze){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ra(e,s,n),n){let r=n.parent;for(;r&&r.parent;)sa(r.parent.vnode)&&e_(s,e,n,r),r=r.parent}}function e_(t,e,n,s){const r=ra(e,t,s,!0);Cl(()=>{dl(s[e],r)},n)}function ra(t,e,n=ze,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;er(),Un(n);const a=Nt(e,n,t,o);return Nn(),tr(),a});return s?r.unshift(i):r.push(i),i}}const mn=t=>(e,n=ze)=>(!zr||t==="sp")&&ra(t,e,n),t_=mn("bm"),wo=mn("m"),n_=mn("bu"),s_=mn("u"),Xf=mn("bum"),Cl=mn("um"),r_=mn("sp"),i_=mn("rtg"),o_=mn("rtc");function a_(t,e=ze){ra("ec",t,e)}function st(t,e){const n=At;if(n===null)return t;const s=aa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];ee(o)&&(o={mounted:o,updated:o}),o.deep&&Zn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Wn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(er(),Nt(c,n,8,[t.el,a,t,e]),tr())}}const Jf="components";function hi(t,e){return l_(Jf,t,!0,e)||t}const c_=Symbol();function l_(t,e,n=!0,s=!1){const r=At||ze;if(r){const i=r.type;if(t===Jf){const a=U_(i,!1);if(a&&(a===e||a===Xt(e)||a===Jo(Xt(e))))return i}const o=uh(r[t]||i[t],e)||uh(r.appContext[t],e);return!o&&s?i:o}}function uh(t,e){return t&&(t[e]||t[Xt(e)]||t[Jo(Xt(e))])}function sr(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ec=t=>t?hp(t)?aa(t)||t.proxy:Ec(t.parent):null,Eo=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ec(t.parent),$root:t=>Ec(t.root),$emit:t=>t.emit,$options:t=>ep(t),$forceUpdate:t=>t.f||(t.f=()=>$f(t.update)),$nextTick:t=>t.n||(t.n=Il.bind(t.proxy)),$watch:t=>Gy.bind(t)}),u_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Ie&&ue(s,e))return o[e]=1,s[e];if(r!==Ie&&ue(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Ie&&ue(n,e))return o[e]=4,n[e];Ic&&(o[e]=0)}}const u=Eo[e];let h,d;if(u)return e==="$attrs"&&Et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ue(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ue(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Ie&&ue(r,e)?(r[e]=n,!0):s!==Ie&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ue(t,o)||e!==Ie&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(s,o)||ue(Eo,o)||ue(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ic=!0;function h_(t){const e=ep(t),n=t.proxy,s=t.ctx;Ic=!1,e.beforeCreate&&hh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:b,deactivated:_,beforeDestroy:x,beforeUnmount:w,destroyed:R,unmounted:L,render:V,renderTracked:Q,renderTriggered:W,errorCaptured:P,serverPrefetch:Y,expose:ie,inheritAttrs:de,components:Re,directives:nt,filters:qe}=e;if(l&&d_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const ye=o[Te];ee(ye)&&(s[Te]=ye.bind(n))}if(r){const Te=r.call(n,n);De(Te)&&(t.data=nr(Te))}if(Ic=!0,i)for(const Te in i){const ye=i[Te],yt=ee(ye)?ye.bind(n,n):ee(ye.get)?ye.get.bind(n,n):$t,ws=!ee(ye)&&ee(ye.set)?ye.set.bind(n):$t,en=Ut({get:yt,set:ws});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>en.value,set:jt=>en.value=jt})}if(a)for(const Te in a)Zf(a[Te],s,n,Te);if(c){const Te=ee(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ye=>{so(ye,Te[ye])})}u&&hh(u,t,"c");function Fe(Te,ye){G(ye)?ye.forEach(yt=>Te(yt.bind(n))):ye&&Te(ye.bind(n))}if(Fe(t_,h),Fe(wo,d),Fe(n_,p),Fe(s_,v),Fe(Jy,b),Fe(Zy,_),Fe(a_,P),Fe(o_,Q),Fe(i_,W),Fe(Xf,w),Fe(Cl,L),Fe(r_,Y),G(ie))if(ie.length){const Te=t.exposed||(t.exposed={});ie.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:yt=>n[ye]=yt})})}else t.exposed||(t.exposed={});V&&t.render===$t&&(t.render=V),de!=null&&(t.inheritAttrs=de),Re&&(t.components=Re),nt&&(t.directives=nt)}function d_(t,e,n=$t,s=!1){G(t)&&(t=Tc(t));for(const r in t){const i=t[r];let o;De(i)?"default"in i?o=Vt(i.from||r,i.default,!0):o=Vt(i.from||r):o=Vt(i),Ne(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function hh(t,e,n){Nt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zf(t,e,n,s){const r=s.includes(".")?Kf(n,s):()=>n[s];if(Ke(t)){const i=e[t];ee(i)&&xr(r,i)}else if(ee(t))xr(r,t.bind(n));else if(De(t))if(G(t))t.forEach(i=>Zf(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&xr(r,i,t)}}function ep(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Io(c,l,o,!0)),Io(c,e,o)),i.set(e,c),c}function Io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Io(t,i,n,!0),r&&r.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=f_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const f_={data:dh,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Qn,directives:Qn,watch:m_,provide:dh,inject:p_};function dh(t,e){return e?t?function(){return ct(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function p_(t,e){return Qn(Tc(t),Tc(e))}function Tc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?ct(ct(Object.create(null),t),e):e}function m_(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function g_(t,e,n,s=!1){const r={},i={};vo(i,ia,1),t.propsDefaults=Object.create(null),tp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:wy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function v_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=pe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ta(t.emitsOptions,d))continue;const p=e[d];if(c)if(ue(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const v=Xt(d);r[v]=Sc(c,a,v,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{tp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=Zs(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Sc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&ln(t,"set","$attrs")}function tp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(to(c))continue;const l=e[c];let u;r&&ue(r,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ta(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=pe(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Sc(r,c,h,l[h],t,!ue(l,h))}}return o}function Sc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Un(r),s=l[n]=c.call(null,e),Nn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zs(n))&&(s=!0))}return s}function np(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,p]=np(h,e,!0);ct(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,Ds),Ds;if(G(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);fh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Xt(u);if(fh(h)){const d=i[u],p=o[h]=G(d)||ee(d)?{type:d}:d;if(p){const v=gh(Boolean,p.type),b=gh(String,p.type);p[0]=v>-1,p[1]=b<0||v<b,(v>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function fh(t){return t[0]!=="$"}function ph(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function mh(t,e){return ph(t)===ph(e)}function gh(t,e){return G(e)?e.findIndex(n=>mh(n,t)):ee(e)&&mh(e,t)?0:-1}const sp=t=>t[0]==="_"||t==="$stable",kl=t=>G(t)?t.map(Mt):[Mt(t)],y_=(t,e,n)=>{if(e._n)return e;const s=mt((...r)=>kl(e(...r)),n);return s._c=!1,s},rp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(sp(r))continue;const i=t[r];if(ee(i))e[r]=y_(r,i,s);else if(i!=null){const o=kl(i);e[r]=()=>o}}},ip=(t,e)=>{const n=kl(e);t.slots.default=()=>n},__=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),vo(e,"_",n)):rp(e,t.slots={})}else t.slots={},e&&ip(t,e);vo(t.slots,ia,1)},b_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ct(r,e),!n&&a===1&&delete r._):(i=!e.$stable,rp(e,r)),o=e}else e&&(ip(t,e),o={default:1});if(i)for(const a in r)!sp(a)&&!(a in o)&&delete r[a]};function op(){return{app:null,config:{isNativeTag:jv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function E_(t,e){return function(s,r=null){ee(s)||(s=Object.assign({},s)),r!=null&&!De(r)&&(r=null);const i=op(),o=new Set;let a=!1;const c=i.app={_uid:w_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:V_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=fe(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,aa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function xc(t,e,n,s,r=!1){if(G(t)){t.forEach((d,p)=>xc(d,e&&(G(e)?e[p]:e),n,s,r));return}if(ro(s)&&!r)return;const i=s.shapeFlag&4?aa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ke(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Ne(l)&&(l.value=null)),ee(c))Rn(c,a,12,[o,u]);else{const d=Ke(c),p=Ne(c);if(d||p){const v=()=>{if(t.f){const b=d?u[c]:c.value;r?G(b)&&dl(b,i):G(b)?b.includes(i)||b.push(i):d?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ue(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,pt(v,n)):v()}}}const pt=Ky;function I_(t){return T_(t)}function T_(t,e){const n=Gv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=$t,cloneNode:v,insertStaticContent:b}=t,_=(f,m,y,S=null,I=null,N=null,M=!1,A=null,D=!!m.dynamicChildren)=>{if(f===m)return;f&&!Kt(f,m)&&(S=q(f),St(f,I,N,!0),f=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:C,ref:z,shapeFlag:F}=m;switch(C){case Al:x(f,m,y,S);break;case wt:w(f,m,y,S);break;case io:f==null&&R(m,y,S,M);break;case rt:nt(f,m,y,S,I,N,M,A,D);break;default:F&1?Q(f,m,y,S,I,N,M,A,D):F&6?qe(f,m,y,S,I,N,M,A,D):(F&64||F&128)&&C.process(f,m,y,S,I,N,M,A,D,Se)}z!=null&&I&&xc(z,f&&f.ref,N,m||f,!m)},x=(f,m,y,S)=>{if(f==null)s(m.el=a(m.children),y,S);else{const I=m.el=f.el;m.children!==f.children&&l(I,m.children)}},w=(f,m,y,S)=>{f==null?s(m.el=c(m.children||""),y,S):m.el=f.el},R=(f,m,y,S)=>{[f.el,f.anchor]=b(f.children,m,y,S,f.el,f.anchor)},L=({el:f,anchor:m},y,S)=>{let I;for(;f&&f!==m;)I=d(f),s(f,y,S),f=I;s(m,y,S)},V=({el:f,anchor:m})=>{let y;for(;f&&f!==m;)y=d(f),r(f),f=y;r(m)},Q=(f,m,y,S,I,N,M,A,D)=>{M=M||m.type==="svg",f==null?W(m,y,S,I,N,M,A,D):ie(f,m,I,N,M,A,D)},W=(f,m,y,S,I,N,M,A)=>{let D,C;const{type:z,props:F,shapeFlag:K,transition:Z,patchFlag:he,dirs:be}=f;if(f.el&&v!==void 0&&he===-1)D=f.el=v(f.el);else{if(D=f.el=o(f.type,N,F&&F.is,F),K&8?u(D,f.children):K&16&&Y(f.children,D,null,S,I,N&&z!=="foreignObject",M,A),be&&Wn(f,null,S,"created"),F){for(const Ce in F)Ce!=="value"&&!to(Ce)&&i(D,Ce,null,F[Ce],N,f.children,S,I,O);"value"in F&&i(D,"value",null,F.value),(C=F.onVnodeBeforeMount)&&Ht(C,S,f)}P(D,f,f.scopeId,M,S)}be&&Wn(f,null,S,"beforeMount");const we=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;we&&Z.beforeEnter(D),s(D,m,y),((C=F&&F.onVnodeMounted)||we||be)&&pt(()=>{C&&Ht(C,S,f),we&&Z.enter(D),be&&Wn(f,null,S,"mounted")},I)},P=(f,m,y,S,I)=>{if(y&&p(f,y),S)for(let N=0;N<S.length;N++)p(f,S[N]);if(I){let N=I.subTree;if(m===N){const M=I.vnode;P(f,M,M.scopeId,M.slotScopeIds,I.parent)}}},Y=(f,m,y,S,I,N,M,A,D=0)=>{for(let C=D;C<f.length;C++){const z=f[C]=A?En(f[C]):Mt(f[C]);_(null,z,m,y,S,I,N,M,A)}},ie=(f,m,y,S,I,N,M)=>{const A=m.el=f.el;let{patchFlag:D,dynamicChildren:C,dirs:z}=m;D|=f.patchFlag&16;const F=f.props||Ie,K=m.props||Ie;let Z;y&&Gn(y,!1),(Z=K.onVnodeBeforeUpdate)&&Ht(Z,y,m,f),z&&Wn(m,f,y,"beforeUpdate"),y&&Gn(y,!0);const he=I&&m.type!=="foreignObject";if(C?de(f.dynamicChildren,C,A,y,S,he,N):M||yt(f,m,A,null,y,S,he,N,!1),D>0){if(D&16)Re(A,m,F,K,y,S,I);else if(D&2&&F.class!==K.class&&i(A,"class",null,K.class,I),D&4&&i(A,"style",F.style,K.style,I),D&8){const be=m.dynamicProps;for(let we=0;we<be.length;we++){const Ce=be[we],Pt=F[Ce],Es=K[Ce];(Es!==Pt||Ce==="value")&&i(A,Ce,Pt,Es,I,f.children,y,S,O)}}D&1&&f.children!==m.children&&u(A,m.children)}else!M&&C==null&&Re(A,m,F,K,y,S,I);((Z=K.onVnodeUpdated)||z)&&pt(()=>{Z&&Ht(Z,y,m,f),z&&Wn(m,f,y,"updated")},S)},de=(f,m,y,S,I,N,M)=>{for(let A=0;A<m.length;A++){const D=f[A],C=m[A],z=D.el&&(D.type===rt||!Kt(D,C)||D.shapeFlag&70)?h(D.el):y;_(D,C,z,null,S,I,N,M,!0)}},Re=(f,m,y,S,I,N,M)=>{if(y!==S){for(const A in S){if(to(A))continue;const D=S[A],C=y[A];D!==C&&A!=="value"&&i(f,A,C,D,M,m.children,I,N,O)}if(y!==Ie)for(const A in y)!to(A)&&!(A in S)&&i(f,A,y[A],null,M,m.children,I,N,O);"value"in S&&i(f,"value",y.value,S.value)}},nt=(f,m,y,S,I,N,M,A,D)=>{const C=m.el=f?f.el:a(""),z=m.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:K,slotScopeIds:Z}=m;Z&&(A=A?A.concat(Z):Z),f==null?(s(C,y,S),s(z,y,S),Y(m.children,y,z,I,N,M,A,D)):F>0&&F&64&&K&&f.dynamicChildren?(de(f.dynamicChildren,K,y,I,N,M,A),(m.key!=null||I&&m===I.subTree)&&ap(f,m,!0)):yt(f,m,y,z,I,N,M,A,D)},qe=(f,m,y,S,I,N,M,A,D)=>{m.slotScopeIds=A,f==null?m.shapeFlag&512?I.ctx.activate(m,y,S,M,D):Ue(m,y,S,I,N,M,D):Fe(f,m,D)},Ue=(f,m,y,S,I,N,M)=>{const A=f.component=D_(f,S,I);if(sa(f)&&(A.ctx.renderer=Se),O_(A),A.asyncDep){if(I&&I.registerDep(A,Te),!f.el){const D=A.subTree=fe(wt);w(null,D,m,y)}return}Te(A,f,m,y,I,N,M)},Fe=(f,m,y)=>{const S=m.component=f.component;if(Fy(f,m,y))if(S.asyncDep&&!S.asyncResolved){ye(S,m,y);return}else S.next=m,Dy(S.update),S.update();else m.el=f.el,S.vnode=m},Te=(f,m,y,S,I,N,M)=>{const A=()=>{if(f.isMounted){let{next:z,bu:F,u:K,parent:Z,vnode:he}=f,be=z,we;Gn(f,!1),z?(z.el=he.el,ye(f,z,M)):z=he,F&&no(F),(we=z.props&&z.props.onVnodeBeforeUpdate)&&Ht(we,Z,z,he),Gn(f,!0);const Ce=ja(f),Pt=f.subTree;f.subTree=Ce,_(Pt,Ce,h(Pt.el),q(Pt),f,I,N),z.el=Ce.el,be===null&&Tl(f,Ce.el),K&&pt(K,I),(we=z.props&&z.props.onVnodeUpdated)&&pt(()=>Ht(we,Z,z,he),I)}else{let z;const{el:F,props:K}=m,{bm:Z,m:he,parent:be}=f,we=ro(m);if(Gn(f,!1),Z&&no(Z),!we&&(z=K&&K.onVnodeBeforeMount)&&Ht(z,be,m),Gn(f,!0),F&&se){const Ce=()=>{f.subTree=ja(f),se(F,f.subTree,f,I,null)};we?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=ja(f);_(null,Ce,y,S,f,I,N),m.el=Ce.el}if(he&&pt(he,I),!we&&(z=K&&K.onVnodeMounted)){const Ce=m;pt(()=>Ht(z,be,Ce),I)}(m.shapeFlag&256||be&&ro(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&pt(f.a,I),f.isMounted=!0,m=y=S=null}},D=f.effect=new gl(A,()=>$f(C),f.scope),C=f.update=()=>D.run();C.id=f.uid,Gn(f,!0),C()},ye=(f,m,y)=>{m.component=f;const S=f.vnode.props;f.vnode=m,f.next=null,v_(f,m.props,S,y),b_(f,m.children,y),er(),ea(void 0,f.update),tr()},yt=(f,m,y,S,I,N,M,A,D=!1)=>{const C=f&&f.children,z=f?f.shapeFlag:0,F=m.children,{patchFlag:K,shapeFlag:Z}=m;if(K>0){if(K&128){en(C,F,y,S,I,N,M,A,D);return}else if(K&256){ws(C,F,y,S,I,N,M,A,D);return}}Z&8?(z&16&&O(C,I,N),F!==C&&u(y,F)):z&16?Z&16?en(C,F,y,S,I,N,M,A,D):O(C,I,N,!0):(z&8&&u(y,""),Z&16&&Y(F,y,S,I,N,M,A,D))},ws=(f,m,y,S,I,N,M,A,D)=>{f=f||Ds,m=m||Ds;const C=f.length,z=m.length,F=Math.min(C,z);let K;for(K=0;K<F;K++){const Z=m[K]=D?En(m[K]):Mt(m[K]);_(f[K],Z,y,null,I,N,M,A,D)}C>z?O(f,I,N,!0,!1,F):Y(m,y,S,I,N,M,A,D,F)},en=(f,m,y,S,I,N,M,A,D)=>{let C=0;const z=m.length;let F=f.length-1,K=z-1;for(;C<=F&&C<=K;){const Z=f[C],he=m[C]=D?En(m[C]):Mt(m[C]);if(Kt(Z,he))_(Z,he,y,null,I,N,M,A,D);else break;C++}for(;C<=F&&C<=K;){const Z=f[F],he=m[K]=D?En(m[K]):Mt(m[K]);if(Kt(Z,he))_(Z,he,y,null,I,N,M,A,D);else break;F--,K--}if(C>F){if(C<=K){const Z=K+1,he=Z<z?m[Z].el:S;for(;C<=K;)_(null,m[C]=D?En(m[C]):Mt(m[C]),y,he,I,N,M,A,D),C++}}else if(C>K)for(;C<=F;)St(f[C],I,N,!0),C++;else{const Z=C,he=C,be=new Map;for(C=he;C<=K;C++){const _t=m[C]=D?En(m[C]):Mt(m[C]);_t.key!=null&&be.set(_t.key,C)}let we,Ce=0;const Pt=K-he+1;let Es=!1,Gu=0;const pr=new Array(Pt);for(C=0;C<Pt;C++)pr[C]=0;for(C=Z;C<=F;C++){const _t=f[C];if(Ce>=Pt){St(_t,I,N,!0);continue}let qt;if(_t.key!=null)qt=be.get(_t.key);else for(we=he;we<=K;we++)if(pr[we-he]===0&&Kt(_t,m[we])){qt=we;break}qt===void 0?St(_t,I,N,!0):(pr[qt-he]=C+1,qt>=Gu?Gu=qt:Es=!0,_(_t,m[qt],y,null,I,N,M,A,D),Ce++)}const Qu=Es?S_(pr):Ds;for(we=Qu.length-1,C=Pt-1;C>=0;C--){const _t=he+C,qt=m[_t],Yu=_t+1<z?m[_t+1].el:S;pr[C]===0?_(null,qt,y,Yu,I,N,M,A,D):Es&&(we<0||C!==Qu[we]?jt(qt,y,Yu,2):we--)}}},jt=(f,m,y,S,I=null)=>{const{el:N,type:M,transition:A,children:D,shapeFlag:C}=f;if(C&6){jt(f.component.subTree,m,y,S);return}if(C&128){f.suspense.move(m,y,S);return}if(C&64){M.move(f,m,y,Se);return}if(M===rt){s(N,m,y);for(let F=0;F<D.length;F++)jt(D[F],m,y,S);s(f.anchor,m,y);return}if(M===io){L(f,m,y);return}if(S!==2&&C&1&&A)if(S===0)A.beforeEnter(N),s(N,m,y),pt(()=>A.enter(N),I);else{const{leave:F,delayLeave:K,afterLeave:Z}=A,he=()=>s(N,m,y),be=()=>{F(N,()=>{he(),Z&&Z()})};K?K(N,he,be):be()}else s(N,m,y)},St=(f,m,y,S=!1,I=!1)=>{const{type:N,props:M,ref:A,children:D,dynamicChildren:C,shapeFlag:z,patchFlag:F,dirs:K}=f;if(A!=null&&xc(A,null,y,f,!0),z&256){m.ctx.deactivate(f);return}const Z=z&1&&K,he=!ro(f);let be;if(he&&(be=M&&M.onVnodeBeforeUnmount)&&Ht(be,m,f),z&6)B(f.component,y,S);else{if(z&128){f.suspense.unmount(y,S);return}Z&&Wn(f,null,m,"beforeUnmount"),z&64?f.type.remove(f,m,y,I,Se,S):C&&(N!==rt||F>0&&F&64)?O(C,m,y,!1,!0):(N===rt&&F&384||!I&&z&16)&&O(D,m,y),S&&Va(f)}(he&&(be=M&&M.onVnodeUnmounted)||Z)&&pt(()=>{be&&Ht(be,m,f),Z&&Wn(f,null,m,"unmounted")},y)},Va=f=>{const{type:m,el:y,anchor:S,transition:I}=f;if(m===rt){E(y,S);return}if(m===io){V(f);return}const N=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:A}=I,D=()=>M(y,N);A?A(f.el,N,D):D()}else N()},E=(f,m)=>{let y;for(;f!==m;)y=d(f),r(f),f=y;r(m)},B=(f,m,y)=>{const{bum:S,scope:I,update:N,subTree:M,um:A}=f;S&&no(S),I.stop(),N&&(N.active=!1,St(M,f,m,y)),A&&pt(A,m),pt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(f,m,y,S=!1,I=!1,N=0)=>{for(let M=N;M<f.length;M++)St(f[M],m,y,S,I)},q=f=>f.shapeFlag&6?q(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),_e=(f,m,y)=>{f==null?m._vnode&&St(m._vnode,null,null,!0):_(m._vnode||null,f,m,null,null,null,y),qf(),m._vnode=f},Se={p:_,um:St,m:jt,r:Va,mt:Ue,mc:Y,pc:yt,pbc:de,n:q,o:t};let oe,se;return e&&([oe,se]=e(Se)),{render:_e,hydrate:oe,createApp:E_(_e,oe)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ap(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=En(r[i]),a.el=o.el),n||ap(o,a))}}function S_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const x_=t=>t.__isTeleport,rt=Symbol(void 0),Al=Symbol(void 0),wt=Symbol(void 0),io=Symbol(void 0),Cr=[];let Rt=null;function ce(t=!1){Cr.push(Rt=t?null:[])}function cp(){Cr.pop(),Rt=Cr[Cr.length-1]||null}let Bs=1;function vh(t){Bs+=t}function lp(t){return t.dynamicChildren=Bs>0?Rt||Ds:null,cp(),Bs>0&&Rt&&Rt.push(t),t}function ve(t,e,n,s,r,i){return lp(g(t,e,n,s,r,i,!0))}function Ms(t,e,n,s,r){return lp(fe(t,e,n,s,r,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const ia="__vInternal",up=({key:t})=>t!=null?t:null,oo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||Ne(t)||ee(t)?{i:At,r:t,k:e,f:!!n}:t:null;function g(t,e=null,n=null,s=0,r=null,i=t===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&up(e),ref:e&&oo(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Rl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Bs>0&&!o&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const fe=C_;function C_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===c_)&&(t=wt),To(t)){const a=Ln(t,e,!0);return n&&Rl(a,n),Bs>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(F_(t)&&(t=t.__vccOpts),e){e=k_(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=Js(a)),De(c)&&(Of(c)&&!G(c)&&(c=ct({},c)),e.style=ul(c))}const o=Ke(t)?1:$y(t)?128:x_(t)?64:De(t)?4:ee(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function k_(t){return t?Of(t)||ia in t?ct({},t):t:null}function Ln(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?A_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&up(a),ref:e&&e.ref?n&&r?G(r)?r.concat(oo(e)):[r,oo(e)]:oo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ln(t.ssContent),ssFallback:t.ssFallback&&Ln(t.ssFallback),el:t.el,anchor:t.anchor}}function Me(t=" ",e=0){return fe(Al,null,t,e)}function di(t,e){const n=fe(io,null,t);return n.staticCount=e,n}function Hr(t="",e=!1){return e?(ce(),Ms(wt,null,t)):fe(wt,null,t)}function Mt(t){return t==null||typeof t=="boolean"?fe(wt):G(t)?fe(rt,null,t.slice()):typeof t=="object"?En(t):fe(Al,null,String(t))}function En(t){return t.el===null||t.memo?t:Ln(t)}function Rl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Rl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ia in e)?e._ctx=At:r===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:At},n=32):(e=String(e),s&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function A_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Js([e.class,s.class]));else if(r==="style")e.style=ul([e.style,s.style]);else if(Yo(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){Nt(t,e,7,[n,s])}const R_=op();let N_=0;function D_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||R_,i={uid:N_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(s,r),emitsOptions:zf(s,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Py.bind(null,i),t.ce&&t.ce(i),i}let ze=null;const oa=()=>ze||At,Un=t=>{ze=t,t.scope.on()},Nn=()=>{ze&&ze.scope.off(),ze=null};function hp(t){return t.vnode.shapeFlag&4}let zr=!1;function O_(t,e=!1){zr=e;const{props:n,children:s}=t.vnode,r=hp(t);g_(t,n,r,e),__(t,s);const i=r?P_(t,e):void 0;return zr=!1,i}function P_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vs(new Proxy(t.ctx,u_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?L_(t):null;Un(t),er();const i=Rn(s,t,0,[t.props,r]);if(tr(),Nn(),fl(i)){if(i.then(Nn,Nn),e)return i.then(o=>{Cc(t,o,e)}).catch(o=>{ui(o,t,0)});t.asyncDep=i}else Cc(t,i,e)}else dp(t,e)}function Cc(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Uf(e)),dp(t,n)}let yh;function dp(t,e,n){const s=t.type;if(!t.render){if(!e&&yh&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ct(ct({isCustomElement:i,delimiters:a},o),c);s.render=yh(r,l)}}t.render=s.render||$t}Un(t),er(),h_(t),tr(),Nn()}function M_(t){return new Proxy(t.attrs,{get(e,n){return Et(t,"get","$attrs"),e[n]}})}function L_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=M_(t))},slots:t.slots,emit:t.emit,expose:e}}function aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Uf(Vs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Eo)return Eo[n](t)}}))}function U_(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function F_(t){return ee(t)&&"__vccOpts"in t}const Ut=(t,e)=>Ay(t,e,zr);function $_(t){const e=oa();let n=t();return Nn(),fl(n)&&(n=n.catch(s=>{throw Un(e),s})),[n,()=>Un(e)]}function fp(t,e,n){const s=arguments.length;return s===2?De(e)&&!G(e)?To(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&To(n)&&(n=[n]),fe(t,e,n))}const V_="3.2.37",B_="http://www.w3.org/2000/svg",Xn=typeof document!="undefined"?document:null,_h=Xn&&Xn.createElement("template"),j_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Xn.createElementNS(B_,t):Xn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_h.innerHTML=s?`<svg>${t}</svg>`:t;const a=_h.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function q_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function H_(t,e,n){const s=t.style,r=Ke(n);if(n&&!r){for(const i in n)kc(s,i,n[i]);if(e&&!Ke(e))for(const i in e)n[i]==null&&kc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const bh=/\s*!important$/;function kc(t,e,n){if(G(n))n.forEach(s=>kc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=z_(t,e);bh.test(n)?t.setProperty(Zs(s),n.replace(bh,""),"important"):t[s]=n}}const wh=["Webkit","Moz","ms"],Ha={};function z_(t,e){const n=Ha[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return Ha[e]=s;s=Jo(s);for(let r=0;r<wh.length;r++){const i=wh[r]+s;if(i in t)return Ha[e]=i}return e}const Eh="http://www.w3.org/1999/xlink";function K_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eh,e.slice(6,e.length)):t.setAttributeNS(Eh,e,n);else{const i=Uv(e);n==null||i&&!mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function W_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[pp,G_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ac=0;const Q_=Promise.resolve(),Y_=()=>{Ac=0},X_=()=>Ac||(Q_.then(Y_),Ac=pp());function Jn(t,e,n,s){t.addEventListener(e,n,s)}function J_(t,e,n,s){t.removeEventListener(e,n,s)}function Z_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=e0(e);if(s){const l=i[e]=t0(s,r);Jn(t,a,l,c)}else o&&(J_(t,a,o,c),i[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function e0(t){let e;if(Ih.test(t)){e={};let n;for(;n=t.match(Ih);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Zs(t.slice(2)),e]}function t0(t,e){const n=s=>{const r=s.timeStamp||pp();(G_||r>=n.attached-1)&&Nt(n0(s,n.value),e,5,[s])};return n.value=t,n.attached=X_(),n}function n0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Th=/^on[a-z]/,s0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?q_(t,s,r):e==="style"?H_(t,n,s):Yo(e)?hl(e)||Z_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):r0(t,e,s,r))?W_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),K_(t,e,s,r))};function r0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&Ke(n)?!1:e in t}const i0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xy.props;const So=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>no(e,n):e};function o0(t){t.target.composing=!0}function Sh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ct={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=So(r);const i=s||r.props&&r.props.type==="number";Jn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=yo(a)),t._assign(a)}),n&&Jn(t,"change",()=>{t.value=t.value.trim()}),e||(Jn(t,"compositionstart",o0),Jn(t,"compositionend",Sh),Jn(t,"change",Sh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=So(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&yo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},xh={created(t,{value:e},n){t.checked=go(e,n.props.value),t._assign=So(n),Jn(t,"change",()=>{t._assign(a0(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=So(s),e!==n&&(t.checked=go(e,s.props.value))}};function a0(t){return"_value"in t?t._value:t.value}const c0=["ctrl","shift","alt","meta"],l0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>c0.some(n=>t[`${n}Key`]&&!e.includes(n))},os=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=l0[e[r]];if(i&&i(n,e))return}return t(n,...s)},Ch={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):mr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),mr(t,!0),s.enter(t)):s.leave(t,()=>{mr(t,!1)}):mr(t,e))},beforeUnmount(t,{value:e}){mr(t,e)}};function mr(t,e){t.style.display=e?t._vod:"none"}const u0=ct({patchProp:s0},j_);let kh;function h0(){return kh||(kh=I_(u0))}const d0=(...t)=>{const e=h0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=f0(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function f0(t){return Ke(t)?document.querySelector(t):t}var p0=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let mp;const ca=t=>mp=t,gp=Symbol();function Rc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var kr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(kr||(kr={}));function m0(){const t=wf(!0),e=t.run(()=>Xe({}));let n=[],s=[];const r=Vs({install(i){ca(r),r._a=i,i.provide(gp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!p0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const vp=()=>{};function Ah(t,e,n,s=vp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&oa()&&Cl(r),r}function Is(t,...e){t.slice().forEach(n=>{n(...e)})}function Nc(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Rc(r)&&Rc(s)&&t.hasOwnProperty(n)&&!Ne(s)&&!An(s)?t[n]=Nc(r,s):t[n]=s}return t}const g0=Symbol();function v0(t){return!Rc(t)||!t.hasOwnProperty(g0)}const{assign:tn}=Object;function y0(t){return!!(Ne(t)&&t.effect)}function _0(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Sy(n.state.value[t]);return tn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Vs(Ut(()=>{ca(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=yp(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{tn(d,h)})},c}function yp(t,e,n={},s,r,i){let o;const a=tn({actions:{}},n),c={deep:!0};let l,u,h=Vs([]),d=Vs([]),p;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),Xe({});let b;function _(W){let P;l=u=!1,typeof W=="function"?(W(s.state.value[t]),P={type:kr.patchFunction,storeId:t,events:p}):(Nc(s.state.value[t],W),P={type:kr.patchObject,payload:W,storeId:t,events:p});const Y=b=Symbol();Il().then(()=>{b===Y&&(l=!0)}),u=!0,Is(h,P,s.state.value[t])}const x=vp;function w(){o.stop(),h=[],d=[],s._s.delete(t)}function R(W,P){return function(){ca(s);const Y=Array.from(arguments),ie=[],de=[];function Re(Ue){ie.push(Ue)}function nt(Ue){de.push(Ue)}Is(d,{args:Y,name:W,store:V,after:Re,onError:nt});let qe;try{qe=P.apply(this&&this.$id===t?this:V,Y)}catch(Ue){throw Is(de,Ue),Ue}return qe instanceof Promise?qe.then(Ue=>(Is(ie,Ue),Ue)).catch(Ue=>(Is(de,Ue),Promise.reject(Ue))):(Is(ie,qe),qe)}}const L={_p:s,$id:t,$onAction:Ah.bind(null,d),$patch:_,$reset:x,$subscribe(W,P={}){const Y=Ah(h,W,P.detached,()=>ie()),ie=o.run(()=>xr(()=>s.state.value[t],de=>{(P.flush==="sync"?u:l)&&W({storeId:t,type:kr.direct,events:p},de)},tn({},c,P)));return Y},$dispose:w},V=nr(tn({},L));s._s.set(t,V);const Q=s._e.run(()=>(o=wf(),o.run(()=>e())));for(const W in Q){const P=Q[W];if(Ne(P)&&!y0(P)||An(P))i||(v&&v0(P)&&(Ne(P)?P.value=v[W]:Nc(P,v[W])),s.state.value[t][W]=P);else if(typeof P=="function"){const Y=R(W,P);Q[W]=Y,a.actions[W]=P}}return tn(V,Q),tn(pe(V),Q),Object.defineProperty(V,"$state",{get:()=>s.state.value[t],set:W=>{_(P=>{tn(P,W)})}}),s._p.forEach(W=>{tn(V,o.run(()=>W({store:V,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(V.$state,v),l=!0,u=!0,V}function _p(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=oa();return a=a||l&&Vt(gp),a&&ca(a),a=mp,a._s.has(s)||(i?yp(s,e,r,a):_0(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},b0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):b0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},w0=function(t){const e=bp(t);return wp.encodeByteArray(e,!0)},Ep=function(t){return w0(t).replace(/\./g,"")},E0=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ip(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T0(){return We().indexOf("Electron/")>=0}function xp(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S0(){return We().indexOf("MSAppHost/")>=0}function x0(){return typeof indexedDB=="object"}function C0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="FirebaseError";class qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=k0,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?A0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qn(r,a,s)}}function A0(t,e){return t.replace(R0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const R0=/\{\$([^}]+)}/g;function N0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Rh(i)&&Rh(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Rh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function br(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function wr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function D0(t,e){const n=new O0(t,e);return n.subscribe.bind(n)}class O0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");P0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=za),r.error===void 0&&(r.error=za),r.complete===void 0&&(r.complete=za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new I0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U0(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:L0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L0(t){return t===Yn?void 0:t}function U0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new M0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const $0={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},V0=me.INFO,B0={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},j0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=B0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=V0,this._logHandler=j0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const q0=(t,e)=>e.some(n=>t instanceof n);let Nh,Dh;function H0(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z0(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,Dc=new WeakMap,kp=new WeakMap,Ka=new WeakMap,Dl=new WeakMap;function K0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cp.set(n,t)}).catch(()=>{}),Dl.set(e,t),e}function W0(t){if(Dc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dc.set(t,e)}let Oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function G0(t){Oc=t(Oc)}function Q0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wa(this),e,...n);return kp.set(s,e.sort?e.sort():[e]),Dn(s)}:z0().includes(t)?function(...e){return t.apply(Wa(this),e),Dn(Cp.get(this))}:function(...e){return Dn(t.apply(Wa(this),e))}}function Y0(t){return typeof t=="function"?Q0(t):(t instanceof IDBTransaction&&W0(t),q0(t,H0())?new Proxy(t,Oc):t)}function Dn(t){if(t instanceof IDBRequest)return K0(t);if(Ka.has(t))return Ka.get(t);const e=Y0(t);return e!==t&&(Ka.set(t,e),Dl.set(e,t)),e}const Wa=t=>Dl.get(t);function X0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const J0=["get","getKey","getAll","getAllKeys","count"],Z0=["put","add","delete","clear"],Ga=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Z0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||J0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ga.set(e,i),i}G0(t=>({...t,get:(e,n,s)=>Oh(e,n)||t.get(e,n,s),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",Ph="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Nl("@firebase/app"),nb="@firebase/app-compat",sb="@firebase/analytics-compat",rb="@firebase/analytics",ib="@firebase/app-check-compat",ob="@firebase/app-check",ab="@firebase/auth",cb="@firebase/auth-compat",lb="@firebase/database",ub="@firebase/database-compat",hb="@firebase/functions",db="@firebase/functions-compat",fb="@firebase/installations",pb="@firebase/installations-compat",mb="@firebase/messaging",gb="@firebase/messaging-compat",vb="@firebase/performance",yb="@firebase/performance-compat",_b="@firebase/remote-config",bb="@firebase/remote-config-compat",wb="@firebase/storage",Eb="@firebase/storage-compat",Ib="@firebase/firestore",Tb="@firebase/firestore-compat",Sb="firebase",xb="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="[DEFAULT]",Cb={[Pc]:"fire-core",[nb]:"fire-core-compat",[rb]:"fire-analytics",[sb]:"fire-analytics-compat",[ob]:"fire-app-check",[ib]:"fire-app-check-compat",[ab]:"fire-auth",[cb]:"fire-auth-compat",[lb]:"fire-rtdb",[ub]:"fire-rtdb-compat",[hb]:"fire-fn",[db]:"fire-fn-compat",[fb]:"fire-iid",[pb]:"fire-iid-compat",[mb]:"fire-fcm",[gb]:"fire-fcm-compat",[vb]:"fire-perf",[yb]:"fire-perf-compat",[_b]:"fire-rc",[bb]:"fire-rc-compat",[wb]:"fire-gcs",[Eb]:"fire-gcs-compat",[Ib]:"fire-fst",[Tb]:"fire-fst-compat","fire-js":"fire-js",[Sb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,Mc=new Map;function kb(t,e){try{t.container.addComponent(e)}catch(n){Ol.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function as(t){const e=t.name;if(Mc.has(e))return Ol.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of Co.values())kb(n,t);return!0}function la(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},cs=new fi("app","Firebase",Ab);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=xb;function Nb(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ap,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw cs.create("bad-app-name",{appName:String(s)});const r=Co.get(s);if(r){if(xo(t,r.options)&&xo(n,r.config))return r;throw cs.create("duplicate-app",{appName:s})}const i=new F0(s);for(const a of Mc.values())i.addComponent(a);const o=new Rb(t,n,i);return Co.set(s,o),o}function Pl(t=Ap){const e=Co.get(t);if(!e)throw cs.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let r=(s=Cb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ol.warn(a.join(" "));return}as(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="firebase-heartbeat-database",Ob=1,Kr="firebase-heartbeat-store";let Qa=null;function Rp(){return Qa||(Qa=X0(Db,Ob,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kr)}}}).catch(t=>{throw cs.create("storage-open",{originalErrorMessage:t.message})})),Qa}async function Pb(t){var e;try{return(await Rp()).transaction(Kr).objectStore(Kr).get(Np(t))}catch(n){throw cs.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Mh(t,e){var n;try{const r=(await Rp()).transaction(Kr,"readwrite");return await r.objectStore(Kr).put(e,Np(t)),r.done}catch(s){throw cs.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Np(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=1024,Lb=30*24*60*60*1e3;class Ub{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $b(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Lb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lh(),{heartbeatsToSend:n,unsentEntries:s}=Fb(this._heartbeatsCache.heartbeats),r=Ep(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Lh(){return new Date().toISOString().substring(0,10)}function Fb(t,e=Mb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Uh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Uh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $b{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?C0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uh(t){return Ep(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){as(new Fn("platform-logger",e=>new eb(e),"PRIVATE")),as(new Fn("heartbeat",e=>new Ub(e),"PRIVATE")),Wt(Pc,Ph,t),Wt(Pc,Ph,"esm2017"),Wt("fire-js","")}Vb("");var Bb="firebase",jb="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(Bb,jb,"app");function Ml(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Dp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qb=Dp,Op=new fi("auth","Firebase",Dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new Nl("@firebase/auth");function ao(t,...e){Fh.logLevel<=me.ERROR&&Fh.error(`Auth (${rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw Ll(t,...e)}function Gt(t,...e){return Ll(t,...e)}function Hb(t,e,n){const s=Object.assign(Object.assign({},qb()),{[e]:n});return new fi("auth","Firebase",s).create(e,{appName:t.name})}function Ll(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Op.create(t,...e)}function X(t,e,...n){if(!t)throw Ll(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function un(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Map;function rn(t){un(t instanceof Function,"Expected a class definition");let e=$h.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$h.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e){const n=la(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(xo(i,e!=null?e:{}))return r;Bt(r,"already-initialized")}return n.initialize({options:e})}function Kb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wb(){return Vh()==="http:"||Vh()==="https:"}function Vh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wb()||Tp()||"connection"in navigator)?navigator.onLine:!0}function Qb(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=Ip()||Sp()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new mi(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,s,r={}){return Mp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=pi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pp.fetch()(Lp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Mp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Yb),e);try{const r=new Jb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ki(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ki(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ki(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hb(t,u,l);Bt(t,u)}}catch(r){if(r instanceof qn)throw r;Bt(t,"network-request-failed")}}async function yi(t,e,n,s,r={}){const i=await vi(t,e,n,s,r);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ul(t.config,r):`${t.config.apiScheme}://${r}`}class Jb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),Xb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Gt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function ew(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tw(t,e=!1){const n=vt(t),s=await n.getIdToken(e),r=Fl(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ar(Ya(r.auth_time)),issuedAtTime:Ar(Ya(r.iat)),expirationTime:Ar(Ya(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function Fl(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const i=E0(s);return i?JSON.parse(i):(ao("Failed to decode base64 JWT payload"),null)}catch(i){return ao("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function nw(t){const e=Fl(t);return X(e,"internal-error"),X(typeof e.exp!="undefined","internal-error"),X(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof qn&&sw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function sw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ar(this.lastLoginAt),this.creationTime=Ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Wr(t,ew(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?aw(i.providerUserInfo):[],a=ow(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Up(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iw(t){const e=vt(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ow(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function aw(t){return t.map(e=>{var{providerId:n}=e,s=Ml(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(t,e){const n=await Mp(t,{},async()=>{const s=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Lp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken!="undefined","internal-error"),X(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):nw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await cw(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Gr;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){X(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ml(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Up(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tw(this,e)}reload(){return iw(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,Zb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:L,isAnonymous:V,providerData:Q,stsTokenManager:W}=n;X(R&&W,e,"internal-error");const P=Gr.fromJSON(this.name,W);X(typeof R=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),X(typeof L=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),yn(p,e.name),yn(v,e.name),yn(b,e.name),yn(_,e.name),yn(x,e.name),yn(w,e.name);const Y=new rs({uid:R,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:V,photoURL:v,phoneNumber:p,tenantId:b,stsTokenManager:P,createdAt:x,lastLoginAt:w});return Q&&Array.isArray(Q)&&(Y.providerData=Q.map(ie=>Object.assign({},ie))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(e,n,s=!1){const r=new Gr;r.updateFromServerResponse(n);const i=new rs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ko(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fp.type="NONE";const Bh=Fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=co(this.userKey,r.apiKey,i),this.fullPersistenceKey=co("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ls(rn(Bh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||rn(Bh);const o=co(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rs._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ls(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qp(e))return"Blackberry";if(Hp(e))return"Webos";if($l(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(jp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $p(t=We()){return/firefox\//i.test(t)}function $l(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(t=We()){return/crios\//i.test(t)}function Bp(t=We()){return/iemobile/i.test(t)}function jp(t=We()){return/android/i.test(t)}function qp(t=We()){return/blackberry/i.test(t)}function Hp(t=We()){return/webos/i.test(t)}function ua(t=We()){return/iphone|ipad|ipod/i.test(t)}function lw(t=We()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uw(){return xp()&&document.documentMode===10}function zp(t=We()){return ua(t)||jp(t)||Hp(t)||qp(t)||/windows phone/i.test(t)||Bp(t)}function hw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e=[]){let n;switch(t){case"Browser":n=jh(We());break;case"Worker":n=`${jh(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qh(this),this.idTokenSubscription=new qh(this),this.beforeStateQueue=new dw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Op,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ko(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ha(t){return vt(t)}class qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=D0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function pw(t,e){return vi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function vw(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Vl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return mw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gw(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vw(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="http://localhost";class ls extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ml(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ls(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bw(t){const e=br(wr(t)).link,n=e?br(wr(e)).deep_link_id:null,s=br(wr(t)).deep_link_id;return(s?br(wr(s)).link:null)||s||n||e||t}class Bl{constructor(e){var n,s,r,i,o,a;const c=br(wr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=_w((r=c.mode)!==null&&r!==void 0?r:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bw(e);try{return new Bl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return Qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bl.parseLink(n);return X(s,"argument-error"),Qr._fromEmailAndCode(e,s.code,s.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends _i{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends _i{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends _i{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,e){return yi(t,"POST","/v1/accounts:signUp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await rs._fromIdTokenResponse(e,s,r),o=Hh(s);return new us({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Hh(s);return new us({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends qn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ao(e,n,s,r)}}function Gp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(t,i,e,s):i})}async function Ew(t,e,n=!1){const s=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Wr(t,Gp(r,i,e,t),n);X(o.idToken,r,"internal-error");const a=Fl(o.idToken);X(a,r,"internal-error");const{sub:c}=a;return X(t.uid===c,r,"user-mismatch"),us._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e,n=!1){const s="signIn",r=await Gp(t,s,e),i=await us._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Tw(t,e){return Qp(ha(t),e)}async function Sw(t,e,n){const s=ha(t),r=await ww(s,{returnSecureToken:!0,email:e,password:n}),i=await us._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function xw(t,e,n){return Tw(vt(t),ir.credential(e,n))}function Yp(t,e,n,s){return vt(t).onAuthStateChanged(e,n,s)}function Cw(t){return vt(t).signOut()}const Ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(){const t=We();return $l(t)||ua(t)}const Aw=1e3,Rw=10;class Jp extends Xp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kw()&&hw(),this.fallbackToPolling=zp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);uw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rw):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jp.type="LOCAL";const Nw=Jp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp extends Xp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zp.type="SESSION";const em=Zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new da(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Dw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=jl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function Pw(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){return typeof Qt().WorkerGlobalScope!="undefined"&&typeof Qt().importScripts=="function"}async function Mw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uw(){return tm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="firebaseLocalStorageDb",Fw=1,No="firebaseLocalStorage",sm="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([No],e?"readwrite":"readonly").objectStore(No)}function $w(){const t=indexedDB.deleteDatabase(nm);return new bi(t).toPromise()}function Uc(){const t=indexedDB.open(nm,Fw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(No,{keyPath:sm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(No)?e(s):(s.close(),await $w(),e(await Uc()))})})}async function zh(t,e,n){const s=fa(t,!0).put({[sm]:e,value:n});return new bi(s).toPromise()}async function Vw(t,e){const n=fa(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function Kh(t,e){const n=fa(t,!0).delete(e);return new bi(n).toPromise()}const Bw=800,jw=3;class rm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(Uw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new Ow(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uc();return await zh(e,Ro,"1"),await Kh(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Vw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=fa(r,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rm.type="LOCAL";const qw=rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Gt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Hw().appendChild(s)})}function Kw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){return e?rn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gw(t){return Qp(t.auth,new ql(t),t.bypassAuthState)}function Qw(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Iw(n,new ql(t),t.bypassAuthState)}async function Yw(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Ew(n,new ql(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gw;case"linkViaPopup":case"linkViaRedirect":return Yw;case"reauthViaPopup":case"reauthViaRedirect":return Qw;default:Bt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new mi(2e3,1e4);class As extends im{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xw.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="pendingRedirect",lo=new Map;class Zw extends im{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const s=await eE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eE(t,e){const n=sE(e),s=nE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function tE(t,e){lo.set(t._key(),e)}function nE(t){return rn(t._redirectPersistence)}function sE(t){return co(Jw,t.config.apiKey,t.name)}async function rE(t,e,n=!1){const s=ha(t),r=Ww(s,e),o=await new Zw(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=10*60*1e3;class oE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!om(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wh(e))}saveEventToCache(e){this.cachedEventUids.add(Wh(e)),this.lastProcessedEventTime=Date.now()}}function Wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function om({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return om(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uE=/^https?/;async function hE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cE(t);for(const n of e)try{if(dE(n))return}catch{}Bt(t,"unauthorized-domain")}function dE(t){const e=Lc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!uE.test(n))return!1;if(lE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=new mi(3e4,6e4);function Gh(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pE(t){return new Promise((e,n)=>{var s,r,i;function o(){Gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gh(),n(Gt(t,"network-request-failed"))},timeout:fE.get()})}if(!((r=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=Kw("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},zw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw uo=null,e})}let uo=null;function mE(t){return uo=uo||pE(t),uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new mi(5e3,15e3),vE="__/auth/iframe",yE="emulator/auth/iframe",_E={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wE(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ul(e,yE):`https://${t.config.authDomain}/${vE}`,s={apiKey:e.apiKey,appName:t.name,v:rr},r=bE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${pi(s).slice(1)}`}async function EE(t){const e=await mE(t),n=Qt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:wE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_E,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},gE.get());function c(){Qt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TE=500,SE=600,xE="_blank",CE="http://localhost";class Qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kE(t,e,n,s=TE,r=SE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},IE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=We().toLowerCase();n&&(a=Vp(l)?xE:n),$p(l)&&(e=e||CE,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(lw(l)&&a!=="_self")return AE(e||"",a),new Qh(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Qh(h)}function AE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="__/auth/handler",NE="emulator/auth/handler";function Yh(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rr,eventId:r};if(e instanceof Wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",N0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof _i){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${DE(t)}?${pi(a).slice(1)}`}function DE({config:t}){return t.emulator?Ul(t,NE):`https://${t.authDomain}/${RE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class OE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=em,this._completeRedirectFn=rE,this._overrideRedirectResult=tE}async _openPopup(e,n,s,r){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Yh(e,n,s,Lc(),r);return kE(e,o,jl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Pw(Yh(e,n,s,Lc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await EE(e),s=new oE(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Xa];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zp()||$l()||ua()}}const PE=OE;var Xh="@firebase/auth",Jh="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UE(t){as(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{X(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kp(t)},u=new fw(a,c,l);return Kb(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),as(new Fn("auth-internal",e=>{const n=ha(e.getProvider("auth").getImmediate());return(s=>new ME(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Xh,Jh,LE(t)),Wt(Xh,Jh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t=Pl()){const e=la(t,"auth");return e.isInitialized()?e.getImmediate():zb(t,{popupRedirectResolver:PE,persistence:[qw,Nw,em]})}UE("Browser");var $E=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,Hl=Hl||{},J=$E||self;function Do(){}function Fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VE(t){return Object.prototype.hasOwnProperty.call(t,Ja)&&t[Ja]||(t[Ja]=++BE)}var Ja="closure_uid_"+(1e9*Math.random()>>>0),BE=0;function jE(t,e,n){return t.call.apply(t.bind,arguments)}function qE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=jE:Je=qE,Je.apply(null,arguments)}function Wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Hn(){this.s=this.s,this.o=this.o}var HE=0;Hn.prototype.s=!1;Hn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),HE!=0)&&VE(this)};Hn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},cm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function zE(t){e:{var e=L1;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Zh(t){return Array.prototype.concat.apply([],arguments)}function zl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Oo(t){return/^[\s\xa0]*$/.test(t)}var ed=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ut(t,e){return t.indexOf(e)!=-1}function Za(t,e){return t<e?-1:t>e?1:0}var ht;e:{var td=J.navigator;if(td){var nd=td.userAgent;if(nd){ht=nd;break e}}ht=""}function Kl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lm(t){const e={};for(const n in t)e[n]=t[n];return e}var sd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function um(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<sd.length;i++)n=sd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Wl(t){return Wl[" "](t),t}Wl[" "]=Do;function KE(t){var e=QE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WE=ut(ht,"Opera"),js=ut(ht,"Trident")||ut(ht,"MSIE"),hm=ut(ht,"Edge"),$c=hm||js,dm=ut(ht,"Gecko")&&!(ut(ht.toLowerCase(),"webkit")&&!ut(ht,"Edge"))&&!(ut(ht,"Trident")||ut(ht,"MSIE"))&&!ut(ht,"Edge"),GE=ut(ht.toLowerCase(),"webkit")&&!ut(ht,"Edge");function fm(){var t=J.document;return t?t.documentMode:void 0}var Po;e:{var ec="",tc=function(){var t=ht;if(dm)return/rv:([^\);]+)(\)|;)/.exec(t);if(hm)return/Edge\/([\d\.]+)/.exec(t);if(js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GE)return/WebKit\/(\S+)/.exec(t);if(WE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tc&&(ec=tc?tc[1]:""),js){var nc=fm();if(nc!=null&&nc>parseFloat(ec)){Po=String(nc);break e}}Po=ec}var QE={};function YE(){return KE(function(){let t=0;const e=ed(String(Po)).split("."),n=ed("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Za(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Za(r[2].length==0,i[2].length==0)||Za(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Vc;if(J.document&&js){var rd=fm();Vc=rd||parseInt(Po,10)||void 0}else Vc=void 0;var XE=Vc,JE=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",Do,e),J.removeEventListener("test",Do,e)}catch{}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};function Yr(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dm){e:{try{Wl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yr.Z.h.call(this)}}tt(Yr,at);var ZE={2:"touch",3:"pen",4:"mouse"};Yr.prototype.h=function(){Yr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ei="closure_listenable_"+(1e6*Math.random()|0),e1=0;function t1(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++e1,this.ca=this.fa=!1}function pa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ma(t){this.src=t,this.g={},this.h=0}ma.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=jc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new t1(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Bc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=am(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(pa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Gl="closure_lm_"+(1e6*Math.random()|0),sc={};function pm(t,e,n,s,r){if(s&&s.once)return gm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pm(t,e[i],n,s,r);return null}return n=Xl(n),t&&t[Ei]?t.N(e,n,wi(s)?!!s.capture:!!s,r):mm(t,e,n,!1,s,r)}function mm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=wi(r)?!!r.capture:!!r,a=Yl(t);if(a||(t[Gl]=a=new ma(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=n1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)JE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ym(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function n1(){function t(n){return e.call(t.src,t.listener,n)}var e=s1;return t}function gm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gm(t,e[i],n,s,r);return null}return n=Xl(n),t&&t[Ei]?t.O(e,n,wi(s)?!!s.capture:!!s,r):mm(t,e,n,!0,s,r)}function vm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vm(t,e[i],n,s,r);else s=wi(s)?!!s.capture:!!s,n=Xl(n),t&&t[Ei]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=jc(i,n,s,r),-1<n&&(pa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jc(e,n,s,r)),(n=-1<t?e[t]:null)&&Ql(n))}function Ql(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ei])Bc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ym(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Yl(e))?(Bc(n,t),n.h==0&&(n.src=null,e[Gl]=null)):pa(t)}}}function ym(t){return t in sc?sc[t]:sc[t]="on"+t}function s1(t,e){if(t.ca)t=!0;else{e=new Yr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Ql(t),t=n.call(s,e)}return t}function Yl(t){return t=t[Gl],t instanceof ma?t:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(t){return typeof t=="function"?t:(t[rc]||(t[rc]=function(e){return t.handleEvent(e)}),t[rc])}function Ge(){Hn.call(this),this.i=new ma(this),this.P=this,this.I=null}tt(Ge,Hn);Ge.prototype[Ei]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){vm(this,t,e,n,s)};function Ze(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(s,t),um(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Gi(o,s,!0,e)&&r}if(o=e.g=t,r=Gi(o,s,!0,e)&&r,r=Gi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Gi(o,s,!1,e)&&r}Ge.prototype.M=function(){if(Ge.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)pa(n[s]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Bc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Jl=J.JSON.stringify;function r1(){var t=bm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class i1{constructor(){this.h=this.g=null}add(e,n){const s=_m.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var _m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new o1,t=>t.reset());class o1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function a1(t){J.setTimeout(()=>{throw t},0)}function Zl(t,e){qc||c1(),Hc||(qc(),Hc=!0),bm.add(t,e)}var qc;function c1(){var t=J.Promise.resolve(void 0);qc=function(){t.then(l1)}}var Hc=!1,bm=new i1;function l1(){for(var t;t=r1();){try{t.h.call(t.g)}catch(n){a1(n)}var e=_m;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hc=!1}function ga(t,e){Ge.call(this),this.h=t||1,this.g=e||J,this.j=Je(this.kb,this),this.l=Date.now()}tt(ga,Ge);U=ga.prototype;U.da=!1;U.S=null;U.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ze(this,"tick"),this.da&&(eu(this),this.start()))}};U.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function eu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}U.M=function(){ga.Z.M.call(this),eu(this),delete this.g};function tu(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function wm(t){t.g=tu(()=>{t.g=null,t.i&&(t.i=!1,wm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class u1 extends Hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wm(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(t){Hn.call(this),this.h=t,this.g={}}tt(Xr,Hn);var id=[];function Em(t,e,n,s){Array.isArray(n)||(n&&(id[0]=n.toString()),n=id);for(var r=0;r<n.length;r++){var i=pm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Im(t){Kl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ql(e)},t),t.g={}}Xr.prototype.M=function(){Xr.Z.M.call(this),Im(this)};Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function va(){this.g=!0}va.prototype.Aa=function(){this.g=!1};function h1(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function d1(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Rs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+p1(t,n)+(s?" "+s:"")})}function f1(t,e){t.info(function(){return"TIMEOUT: "+e})}va.prototype.info=function(){};function p1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Jl(n)}catch{return e}}var vs={},od=null;function ya(){return od=od||new Ge}vs.Ma="serverreachability";function Tm(t){at.call(this,vs.Ma,t)}tt(Tm,at);function Jr(t){const e=ya();Ze(e,new Tm(e))}vs.STAT_EVENT="statevent";function Sm(t,e){at.call(this,vs.STAT_EVENT,t),this.stat=e}tt(Sm,at);function dt(t){const e=ya();Ze(e,new Sm(e,t))}vs.Na="timingevent";function xm(t,e){at.call(this,vs.Na,t),this.size=e}tt(xm,at);function Ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var _a={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Cm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function nu(){}nu.prototype.h=null;function ad(t){return t.h||(t.h=t.i())}function km(){}var Ti={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function su(){at.call(this,"d")}tt(su,at);function ru(){at.call(this,"c")}tt(ru,at);var zc;function ba(){}tt(ba,nu);ba.prototype.g=function(){return new XMLHttpRequest};ba.prototype.i=function(){return{}};zc=new ba;function Si(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Xr(this),this.P=m1,t=$c?125:void 0,this.W=new ga(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Am}function Am(){this.i=null,this.g="",this.h=!1}var m1=45e3,Kc={},Mo={};U=Si.prototype;U.setTimeout=function(t){this.P=t};function Wc(t,e,n){t.K=1,t.v=Ea(hn(e)),t.s=n,t.U=!0,Rm(t,null)}function Rm(t,e){t.F=Date.now(),xi(t),t.A=hn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Um(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Am,t.g=sg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new u1(Je(t.Ia,t,t.g),t.O)),Em(t.V,t.g,"readystatechange",t.gb),e=t.H?lm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Jr(),h1(t.j,t.u,t.A,t.m,t.X,t.s)}U.gb=function(t){t=t.target;const e=this.L;e&&on(t)==3?e.l():this.Ia(t)};U.Ia=function(t){try{if(t==this.g)e:{const u=on(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||$c||this.g&&(this.h.h||this.g.ga()||hd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Jr(3):Jr(2)),wa(this);var n=this.g.ba();this.N=n;t:if(Nm(this)){var s=hd(this.g);t="";var r=s.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){es(this),Rr(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,d1(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oo(a)){var l=a;break t}}l=null}if(n=l)Rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gc(this,n);else{this.i=!1,this.o=3,dt(12),es(this),Rr(this);break e}}this.U?(Dm(this,u,o),$c&&this.i&&u==3&&(Em(this.V,this.W,"tick",this.fb),this.W.start())):(Rs(this.j,this.m,o,null),Gc(this,o)),u==4&&es(this),this.i&&!this.I&&(u==4?Zm(this.l,this):(this.i=!1,xi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),es(this),Rr(this)}}}catch{}finally{}};function Nm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Dm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=g1(t,n),r==Mo){e==4&&(t.o=4,dt(14),s=!1),Rs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Kc){t.o=4,dt(15),Rs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Rs(t.j,t.m,r,null),Gc(t,r);Nm(t)&&r!=Mo&&r!=Kc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fu(e),e.L=!0,dt(11))):(Rs(t.j,t.m,n,"[Invalid Chunked Response]"),es(t),Rr(t))}U.fb=function(){if(this.g){var t=on(this.g),e=this.g.ga();this.C<e.length&&(wa(this),Dm(this,t,e),this.i&&t!=4&&xi(this))}};function g1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Mo:(n=Number(e.substring(n,s)),isNaN(n)?Kc:(s+=1,s+n>e.length?Mo:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,es(this)};function xi(t){t.Y=Date.now()+t.P,Om(t,t.P)}function Om(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ii(Je(t.eb,t),e)}function wa(t){t.B&&(J.clearTimeout(t.B),t.B=null)}U.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(f1(this.j,this.A),this.K!=2&&(Jr(),dt(17)),es(this),this.o=2,Rr(this)):Om(this,this.Y-t)};function Rr(t){t.l.G==0||t.I||Zm(t.l,t)}function es(t){wa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,eu(t.W),Im(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qc(n.i,t))){if(n.I=t.N,!t.J&&Qc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)$o(n),Sa(n);else break e;du(n),dt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ii(Je(n.ab,n),6e3));if(1>=Vm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ts(n,11)}else if((t.J||n.g==t)&&$o(n),!Oo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.i;!i.g&&(ut(v,"spdy")||ut(v,"quic")||ut(v,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(au(i,i.h),i.h=null))}if(s.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,Ae(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ng(s,s.H?s.la:null,s.W),o.J){Bm(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(wa(a),xi(a)),s.g=o}else Xm(s);0<n.l.length&&xa(n)}else l[0]!="stop"&&l[0]!="close"||ts(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ts(n,7):hu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Jr(4)}catch{}}function v1(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Fc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function iu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fc(t)||typeof t=="string")cm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Fc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=v1(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function or(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof or)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}U=or.prototype;U.R=function(){ou(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};U.T=function(){return ou(this),this.g.concat()};function ou(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];hs(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],hs(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}U.get=function(t,e){return hs(this.h,t)?this.h[t]:e};U.set=function(t,e){hs(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};U.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function hs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Pm=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function y1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ds(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ds){this.g=e!==void 0?e:t.g,Lo(this,t.j),this.s=t.s,Uo(this,t.i),Fo(this,t.m),this.l=t.l,e=t.h;var n=new Zr;n.i=e.i,e.g&&(n.g=new or(e.g),n.h=e.h),cd(this,n),this.o=t.o}else t&&(n=String(t).match(Pm))?(this.g=!!e,Lo(this,n[1]||"",!0),this.s=Nr(n[2]||""),Uo(this,n[3]||"",!0),Fo(this,n[4]),this.l=Nr(n[5]||"",!0),cd(this,n[6]||"",!0),this.o=Nr(n[7]||"")):(this.g=!!e,this.h=new Zr(null,this.g))}ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Er(e,ld,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Er(e,ld,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Er(n,n.charAt(0)=="/"?I1:E1,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Er(n,S1)),t.join("")};function hn(t){return new ds(t)}function Lo(t,e,n){t.j=n?Nr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Uo(t,e,n){t.i=n?Nr(e,!0):e}function Fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cd(t,e,n){e instanceof Zr?(t.h=e,x1(t.h,t.g)):(n||(e=Er(e,T1)),t.h=new Zr(e,t.g))}function Ae(t,e,n){t.h.set(e,n)}function Ea(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _1(t){return t instanceof ds?hn(t):new ds(t,void 0)}function b1(t,e,n,s){var r=new ds(null,void 0);return t&&Lo(r,t),e&&Uo(r,e),n&&Fo(r,n),s&&(r.l=s),r}function Nr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,w1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function w1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ld=/[#\/\?@]/g,E1=/[#\?:]/g,I1=/[#\?]/g,T1=/[#\?@]/g,S1=/#/g;function Zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new or,t.h=0,t.i&&y1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Zr.prototype;U.add=function(t,e){zn(this),this.i=null,t=ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mm(t,e){zn(t),e=ar(t,e),hs(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,hs(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ou(t)))}function Lm(t,e){return zn(t),e=ar(t,e),hs(t.g.h,e)}U.forEach=function(t,e){zn(this),this.g.forEach(function(n,s){cm(n,function(r){t.call(e,r,s,this)},this)},this)};U.T=function(){zn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};U.R=function(t){zn(this);var e=[];if(typeof t=="string")Lm(this,t)&&(e=Zh(e,this.g.get(ar(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Zh(e,t[n])}return e};U.set=function(t,e){return zn(this),this.i=null,t=ar(this,t),Lm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Um(t,e,n){Mm(t,e),0<n.length&&(t.i=null,t.g.set(ar(t,e),zl(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function x1(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Mm(this,s),Um(this,r,n))},t)),t.j=e}var C1=class{constructor(t,e){this.h=t,this.g=e}};function Fm(t){this.l=t||k1,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ea&&J.g.Ea()&&J.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var k1=10;function $m(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vm(t){return t.h?1:t.g?t.g.size:0}function Qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function au(t,e){t.g?t.g.add(e):t.h=e}function Bm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fm.prototype.cancel=function(){if(this.i=jm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zl(t.i)}function cu(){}cu.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};cu.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function A1(){this.g=new cu}function R1(t,e,n){const s=n||"";try{iu(t,function(r,i){let o=r;wi(r)&&(o=Jl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function N1(t,e){const n=new va;if(J.Image){const s=new Image;s.onload=Wi(Qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Wi(Qi,n,s,"TestLoadImage: error",!1,e),s.onabort=Wi(Qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Wi(Qi,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ci(t){this.l=t.$b||null,this.j=t.ib||!1}tt(Ci,nu);Ci.prototype.g=function(){return new Ia(this.l,this.j)};Ci.prototype.i=function(t){return function(){return t}}({});function Ia(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Ia,Ge);var lu=0;U=Ia.prototype;U.open=function(t,e){if(this.readyState!=lu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ei(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=lu};U.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof J.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function qm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}U.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ki(this):ei(this),this.readyState==3&&qm(this)}};U.Ua=function(t){this.g&&(this.response=this.responseText=t,ki(this))};U.Ta=function(t){this.g&&(this.response=t,ki(this))};U.ha=function(){this.g&&ki(this)};function ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ei(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D1=J.JSON.parse;function Le(t){Ge.call(this),this.headers=new or,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hm,this.K=this.L=!1}tt(Le,Ge);var Hm="",O1=/^https?$/i,P1=["POST","PUT"];U=Le.prototype;U.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zc.g(),this.C=this.u?ad(this.u):ad(zc),this.g.onreadystatechange=Je(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ud(this,i);return}t=n||"";const r=new or(this.headers);s&&iu(s,function(i,o){r.set(o,i)}),s=zE(r.T()),n=J.FormData&&t instanceof J.FormData,!(0<=am(P1,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wm(this),0<this.B&&((this.K=M1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.pa,this)):this.A=tu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ud(this,i)}};function M1(t){return js&&YE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function L1(t){return t.toLowerCase()=="content-type"}U.pa=function(){typeof Hl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function ud(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zm(t),Ta(t)}function zm(t){t.D||(t.D=!0,Ze(t,"complete"),Ze(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Ta(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ta(this,!0)),Le.Z.M.call(this)};U.Fa=function(){this.s||(this.F||this.v||this.l?Km(this):this.cb())};U.cb=function(){Km(this)};function Km(t){if(t.h&&typeof Hl!="undefined"&&(!t.C[1]||on(t)!=4||t.ba()!=2)){if(t.v&&on(t)==4)tu(t.Fa,0,t);else if(Ze(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Pm)[1]||null;if(!r&&J.self&&J.self.location){var i=J.self.location.protocol;r=i.substr(0,i.length-1)}s=!O1.test(r?r.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",zm(t)}}finally{Ta(t)}}}}function Ta(t,e){if(t.g){Wm(t);const n=t.g,s=t.C[0]?Do:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function Wm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}U.ba=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};U.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D1(e)}};function hd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Da=function(){return this.m};U.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function U1(t){let e="";return Kl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function uu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=U1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function gr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gm(t){this.za=0,this.l=[],this.h=new va,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=gr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=gr("baseRetryDelayMs",5e3,t),this.$a=gr("retryDelaySeedMs",1e4,t),this.Ya=gr("forwardChannelMaxRetries",2,t),this.ra=gr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Fm(t&&t.concurrentRequestLimit),this.Ca=new A1,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}U=Gm.prototype;U.ma=8;U.G=1;function hu(t){if(Qm(t),t.G==3){var e=t.V++,n=hn(t.F);Ae(n,"SID",t.J),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Ai(t,n),e=new Si(t,t.h,e,void 0),e.K=2,e.v=Ea(hn(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=sg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xi(e)}tg(t)}U.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Sa(t){t.g&&(fu(t),t.g.cancel(),t.g=null)}function Qm(t){Sa(t),t.u&&(J.clearTimeout(t.u),t.u=null),$o(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function ic(t,e){t.l.push(new C1(t.Za++,e)),t.G==3&&xa(t)}function xa(t){$m(t.i)||t.m||(t.m=!0,Zl(t.Ha,t),t.C=0)}function F1(t,e){return Vm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ii(Je(t.Ha,t,e),eg(t,t.C)),t.C++,!0)}U.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Si(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=lm(i),um(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ym(this,r,e),n=hn(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),Ai(this,n),this.o&&i&&uu(n,this.o,i),au(this.i,r),this.Ra&&Ae(n,"TYPE","init"),this.ja?(Ae(n,"$req",e),Ae(n,"SID","null"),r.$=!0,Wc(r,n,null)):Wc(r,n,e),this.G=2}}else this.G==3&&(t?dd(this,t):this.l.length==0||$m(this.i)||dd(this))};function dd(t,e){var n;e?n=e.m:n=t.V++;const s=hn(t.F);Ae(s,"SID",t.J),Ae(s,"RID",n),Ae(s,"AID",t.U),Ai(t,s),t.o&&t.s&&uu(s,t.o,t.s),n=new Si(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ym(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),au(t.i,n),Wc(n,s,e)}function Ai(t,e){t.j&&iu({},function(n,s){Ae(e,s,n)})}function Ym(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Je(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{R1(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Xm(t){t.g||t.u||(t.Y=1,Zl(t.Ga,t),t.A=0)}function du(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ii(Je(t.Ga,t),eg(t,t.A)),t.A++,!0)}U.Ga=function(){if(this.u=null,Jm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ii(Je(this.bb,this),t)}};U.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),Sa(this),Jm(this))};function fu(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Jm(t){t.g=new Si(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=hn(t.oa);Ae(e,"RID","rpc"),Ae(e,"SID",t.J),Ae(e,"CI",t.N?"0":"1"),Ae(e,"AID",t.U),Ai(t,e),Ae(e,"TYPE","xmlhttp"),t.o&&t.s&&uu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ea(hn(e)),n.s=null,n.U=!0,Rm(n,t)}U.ab=function(){this.v!=null&&(this.v=null,Sa(this),du(this),dt(19))};function $o(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Zm(t,e){var n=null;if(t.g==e){$o(t),fu(t),t.g=null;var s=2}else if(Qc(t.i,e))n=e.D,Bm(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ya(),Ze(s,new xm(s,n)),xa(t)}else Xm(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&F1(t,e)||s==2&&du(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ts(t,5);break;case 4:ts(t,10);break;case 3:ts(t,6);break;default:ts(t,2)}}}function eg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ts(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Je(t.jb,t);n||(n=new ds("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Lo(n,"https"),Ea(n)),N1(n.toString(),s)}else dt(2);t.G=0,t.j&&t.j.va(e),tg(t),Qm(t)}U.jb=function(t){t?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))};function tg(t){t.G=0,t.I=-1,t.j&&((jm(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,zl(t.l),t.l.length=0),t.j.ua())}function ng(t,e,n){let s=_1(n);if(s.i!="")e&&Uo(s,e+"."+s.i),Fo(s,s.m);else{const r=J.location;s=b1(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Kl(t.aa,function(r,i){Ae(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ae(s,e,n),Ae(s,"VER",t.ma),Ai(t,s),s}function sg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Le(new Ci({ib:!0})):new Le(t.qa),e.L=t.H,e}function rg(){}U=rg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Oa=function(){};function Vo(){if(js&&!(10<=Number(XE)))throw Error("Environmental error: no available transport.")}Vo.prototype.g=function(t,e){return new It(t,e)};function It(t,e){Ge.call(this),this.g=new Gm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cr(this)}tt(It,Ge);It.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zl(Je(t.hb,t,e))),dt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ng(t,null,t.W),xa(t)};It.prototype.close=function(){hu(this.g)};It.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ic(this.g,e)}else this.v?(e={},e.__data__=Jl(t),ic(this.g,e)):ic(this.g,t)};It.prototype.M=function(){this.g.j=null,delete this.j,hu(this.g),delete this.g,It.Z.M.call(this)};function ig(t){su.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(ig,su);function og(){ru.call(this),this.status=1}tt(og,ru);function cr(t){this.g=t}tt(cr,rg);cr.prototype.xa=function(){Ze(this.g,"a")};cr.prototype.wa=function(t){Ze(this.g,new ig(t))};cr.prototype.va=function(t){Ze(this.g,new og)};cr.prototype.ua=function(){Ze(this.g,"b")};Vo.prototype.createWebChannel=Vo.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;_a.NO_ERROR=0;_a.TIMEOUT=8;_a.HTTP_ERROR=6;Cm.COMPLETE="complete";km.EventType=Ti;Ti.OPEN="a";Ti.CLOSE="b";Ti.ERROR="c";Ti.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.La;Le.prototype.getLastErrorCode=Le.prototype.Da;Le.prototype.getStatus=Le.prototype.ba;Le.prototype.getResponseJson=Le.prototype.Qa;Le.prototype.getResponseText=Le.prototype.ga;Le.prototype.send=Le.prototype.ea;var $1=function(){return new Vo},V1=function(){return ya()},oc=_a,B1=Cm,j1=vs,fd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},q1=Ci,Yi=km,H1=Le;const pd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Nl("@firebase/firestore");function md(){return fs.logLevel}function j(t,...e){if(fs.logLevel<=me.DEBUG){const n=e.map(pu);fs.debug(`Firestore (${lr}): ${t}`,...n)}}function $n(t,...e){if(fs.logLevel<=me.ERROR){const n=e.map(pu);fs.error(`Firestore (${lr}): ${t}`,...n)}}function gd(t,...e){if(fs.logLevel<=me.WARN){const n=e.map(pu);fs.warn(`Firestore (${lr}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function xe(t,e){t||te()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class W1{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new z1(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new gt(e)}}class G1{constructor(e,n,s){this.type="FirstParty",this.user=gt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Q1{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new G1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X1{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.p=n.token,new Y1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=J1(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ge(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ve(0,0))}static max(){return new re(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s){n===void 0?n=0:n>e.length&&te(),s===void 0?s=e.length-n:s>e.length-n&&te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends ti{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const Z1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends ti{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return Z1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ke.fromString(e))}static fromName(e){return new H(ke.fromString(e).popFirst(5))}static empty(){return new H(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ke(e.slice()))}}function eI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new Ve(n+1,0):new Ve(n,s));return new Vn(r,H.empty(),e)}function tI(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Vn(re.min(),H.empty(),-1)}static max(){return new Vn(re.max(),H.empty(),-1)}}function nI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==sI)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(r=>r?k.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new k((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new k((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ni(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mu.ot=-1;class je{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Qe.RED,this.left=r!=null?r:Qe.EMPTY,this.right=i!=null?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new Be(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const iI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=iI.exec(t);if(xe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hs(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ug(t){const e=t.mapValue.fields.__previous_value__;return lg(e)?ug(e):e}function ni(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function aI(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lg(t)?4:cI(t)?9007199254740991:10:te()}function Jt(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ni(t).isEqual(ni(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Bn(s.timestampValue),o=Bn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Hs(s.bytesValue).isEqual(Hs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Pe(s.geoPointValue.latitude)===Pe(r.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Pe(s.integerValue)===Pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Pe(s.doubleValue),o=Pe(r.doubleValue);return i===o?Bo(i)===Bo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(vd(i)!==vd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Jt(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function si(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return ge(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Pe(r.integerValue||r.doubleValue),a=Pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _d(t.timestampValue,e.timestampValue);case 4:return _d(ni(t),ni(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Hs(r),a=Hs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ge(Pe(r.latitude),Pe(i.latitude));return o!==0?o:ge(Pe(r.longitude),Pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ks(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ji.mapValue&&i===Ji.mapValue)return 0;if(r===Ji.mapValue)return 1;if(i===Ji.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const d=Ks(o[a[u]],c[l[u]]);if(d!==0)return d}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw te()}}function _d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Bn(t),s=Bn(e),r=ge(n.seconds,s.seconds);return r!==0?r:ge(n.nanos,s.nanos)}function Fs(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Bn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Yc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Yc(s.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function bd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xc(t){return!!t&&"integerValue"in t}function gu(t){return!!t&&"arrayValue"in t}function wd(t){return!!t&&"nullValue"in t}function Ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function Dr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ur(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Dr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Dr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dr(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Dr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ho(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ur(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new kt(Dr(this.value))}}function hg(t){const e=[];return ur(t.fields,(n,s)=>{const r=new it([n]);if(ho(s)){const i=hg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ye(e,0,re.min(),re.min(),kt.empty(),0)}static newFoundDocument(e,n,s){return new Ye(e,1,n,re.min(),s,0)}static newNoDocument(e,n){return new Ye(e,2,n,re.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,re.min(),kt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Id(t,e=null,n=[],s=[],r=null,i=null,o=null){return new lI(t,e,n,s,r,i,o)}function vu(t){const e=ne(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Fs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ca(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fs(s)).join(",")),e.ut=n}return e.ut}function uI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Fs(s.value)}`;var s}).join(", ")}]`),Ca(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Fs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Fs(n)).join(",")),`Target(${e})`}function yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!yI(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Jt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sd(t.startAt,e.startAt)&&Sd(t.endAt,e.endAt)}function Jc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ft extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new hI(e,n,s):n==="array-contains"?new pI(e,s):n==="in"?new mI(e,s):n==="not-in"?new gI(e,s):n==="array-contains-any"?new vI(e,s):new ft(e,n,s)}static ct(e,n,s){return n==="in"?new dI(e,s):new fI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Ks(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.at(Ks(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hI extends ft{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.at(n)}}class dI extends ft{constructor(e,n){super(e,"in",n),this.keys=dg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fI extends ft{constructor(e,n){super(e,"not-in",n),this.keys=dg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class pI extends ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gu(n)&&si(n.arrayValue,this.value)}}class mI extends ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&si(this.value.arrayValue,n)}}class gI extends ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!si(this.value.arrayValue,n)}}class vI extends ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>si(this.value.arrayValue,s))}}class jo{constructor(e,n){this.position=e,this.inclusive=n}}class Or{constructor(e,n="asc"){this.field=e,this.dir=n}}function yI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Td(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function _I(t,e,n,s,r,i,o,a){return new Di(t,e,n,s,r,i,o,a)}function fg(t){return new Di(t)}function bI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mg(t){for(const e of t.filters)if(e.ht())return e.field;return null}function gg(t){return t.collectionGroup!==null}function ri(t){const e=ne(t);if(e.lt===null){e.lt=[];const n=mg(e),s=pg(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new Or(n)),e.lt.push(new Or(it.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Or(it.keyField(),i))}}}return e.lt}function ms(t){const e=ne(t);if(!e.ft)if(e.limitType==="F")e.ft=Id(e.path,e.collectionGroup,ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ri(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Or(i.field,o))}const s=e.endAt?new jo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new jo(e.startAt.position,e.startAt.inclusive):null;e.ft=Id(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function wI(t,e,n){return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ka(t,e){return yu(ms(t),ms(e))&&t.limitType===e.limitType}function vg(t){return`${vu(ms(t))}|lt:${t.limitType}`}function Zc(t){return`Query(target=${uI(ms(t))}; limitType=${t.limitType})`}function _u(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Td(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ri(n),s)||n.endAt&&!function(r,i,o){const a=Td(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ri(n),s))}(t,e)}function EI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yg(t){return(e,n)=>{let s=!1;for(const r of ri(t)){const i=II(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function II(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ks(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function bg(t){return{integerValue:""+t}}function TI(t,e){return aI(e)?bg(e):_g(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this._=void 0}}function SI(t,e,n){return t instanceof ii?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof oi?Eg(t,e):t instanceof ai?Ig(t,e):function(s,r){const i=wg(s,r),o=xd(i)+xd(s._t);return Xc(i)&&Xc(s._t)?bg(o):_g(s.wt,o)}(t,e)}function xI(t,e,n){return t instanceof oi?Eg(t,e):t instanceof ai?Ig(t,e):n}function wg(t,e){return t instanceof qo?Xc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ii extends Aa{}class oi extends Aa{constructor(e){super(),this.elements=e}}function Eg(t,e){const n=Tg(e);for(const s of t.elements)n.some(r=>Jt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ai extends Aa{constructor(e){super(),this.elements=e}}function Ig(t,e){let n=Tg(e);for(const s of t.elements)n=n.filter(r=>!Jt(r,s));return{arrayValue:{values:n}}}class qo extends Aa{constructor(e,n){super(),this.wt=e,this._t=n}}function xd(t){return Pe(t.integerValue||t.doubleValue)}function Tg(t){return gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this.field=e,this.transform=n}}function kI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof oi&&s instanceof oi||n instanceof ai&&s instanceof ai?qs(n.elements,s.elements,Jt):n instanceof qo&&s instanceof qo?Jt(n._t,s._t):n instanceof ii&&s instanceof ii}(t.transform,e.transform)}class AI{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ra{}function Sg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cg(t.key,an.none()):new Oi(t.key,t.data,an.none());{const n=t.data,s=kt.empty();let r=new Be(it.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ys(t.key,s,new Yt(r.toArray()),an.none())}}function RI(t,e,n){t instanceof Oi?function(s,r,i){const o=s.value.clone(),a=kd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ys?function(s,r,i){if(!fo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=kd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(xg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Pr(t,e,n,s){return t instanceof Oi?function(r,i,o,a){if(!fo(r.precondition,i))return o;const c=r.value.clone(),l=Ad(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ys?function(r,i,o,a){if(!fo(r.precondition,i))return o;const c=Ad(r.fieldTransforms,a,i),l=i.data;return l.setAll(xg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return fo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function NI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=wg(s.transform,r||null);i!=null&&(n===null&&(n=kt.empty()),n.set(s.field,i))}return n||null}function Cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&qs(n,s,(r,i)=>kI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends Ra{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ys extends Ra{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function kd(t,e,n){const s=new Map;xe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,xI(o,a,n[r]))}return s}function Ad(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,SI(i,o,e))}return s}class Cg extends Ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DI extends Ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,le;function PI(t){switch(t){default:return te();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function kg(t){if(t===void 0)return $n("GRPC error has no .code"),T.UNKNOWN;switch(t){case Oe.OK:return T.OK;case Oe.CANCELLED:return T.CANCELLED;case Oe.UNKNOWN:return T.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return T.INTERNAL;case Oe.UNAVAILABLE:return T.UNAVAILABLE;case Oe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Oe.NOT_FOUND:return T.NOT_FOUND;case Oe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Oe.ABORTED:return T.ABORTED;case Oe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Oe.DATA_LOSS:return T.DATA_LOSS;default:return te()}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new je(H.comparator);function dn(){return MI}const Ag=new je(H.comparator);function Ir(...t){let e=Ag;for(const n of t)e=e.insert(n.key,n);return e}function Rg(t){let e=Ag;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ns(){return Mr()}function Ng(){return Mr()}function Mr(){return new hr(t=>t.toString(),(t,e)=>t.isEqual(e))}const LI=new je(H.comparator),UI=new Be(H.comparator);function ae(...t){let e=UI;for(const n of t)e=e.add(n);return e}const FI=new Be(ge);function Dg(){return FI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Na(re.min(),s,Dg(),dn(),ae())}}class Pi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Pi(et.EMPTY_BYTE_STRING,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class Og{constructor(e,n){this.targetId=e,this.It=n}}class Pg{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Rd{constructor(){this.Tt=0,this.Et=Dd(),this.At=et.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ae(),n=ae(),s=ae();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:te()}}),new Pi(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Dd()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class $I{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=dn(),this.Bt=Nd(),this.Lt=new Be(ge)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Jc(i))if(s===0){const o=new H(i.path);this.Kt(n,o,Ye.newNoDocument(o,re.min()))}else xe(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Jc(a.target)){const c=new H(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ye.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=ae();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new Na(e,n,this.Lt,this.$t,s);return this.$t=dn(),this.Bt=Nd(),this.Lt=new Be(ge),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Rd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Be(ge),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Rd),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function Nd(){return new je(H.comparator)}function Dd(){return new je(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jI{constructor(e,n){this.databaseId=e,this.dt=n}}function Ho(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(t,e){return t.dt?e.toBase64():e.toUint8Array()}function qI(t,e){return Ho(t,e.toTimestamp())}function cn(t){return xe(!!t),re.fromTimestamp(function(e){const n=Bn(e);return new Ve(n.seconds,n.nanos)}(t))}function bu(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Lg(t){const e=ke.fromString(t);return xe($g(e)),e}function el(t,e){return bu(t.databaseId,e.path)}function ac(t,e){const n=Lg(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Ug(n))}function tl(t,e){return bu(t.databaseId,e)}function HI(t){const e=Lg(t);return e.length===4?ke.emptyPath():Ug(e)}function nl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ug(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Od(t,e,n){return{name:el(t,e),fields:n.value.mapValue.fields}}function zI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(xe(l===void 0||typeof l=="string"),et.fromBase64String(l||"")):(xe(l===void 0||l instanceof Uint8Array),et.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:kg(c.code);return new $(l,c.message||"")}(o);n=new Pg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ac(t,s.document.name),i=cn(s.document.updateTime),o=new kt({mapValue:{fields:s.document.fields}}),a=Ye.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new po(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ac(t,s.document),i=s.readTime?cn(s.readTime):re.min(),o=Ye.newNoDocument(r,i),a=s.removedTargetIds||[];n=new po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ac(t,s.document),i=s.removedTargetIds||[];n=new po([],i,r,null)}else{if(!("filter"in e))return te();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new OI(r),o=s.targetId;n=new Og(o,i)}}return n}function KI(t,e){let n;if(e instanceof Oi)n={update:Od(t,e.key,e.value)};else if(e instanceof Cg)n={delete:el(t,e.key)};else if(e instanceof ys)n={update:Od(t,e.key,e.data),updateMask:nT(e.fieldMask)};else{if(!(e instanceof DI))return te();n={verify:el(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ii)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ai)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:qI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:te()}(t,e.precondition)),n}function WI(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?cn(s.updateTime):cn(r);return i.isEqual(re.min())&&(i=cn(r)),new AI(i,s.transformResults||[])}(n,e))):[]}function GI(t,e){return{documents:[tl(t,e.path)]}}function QI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=tl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Ed(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NAN"}};if(wd(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ed(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NOT_NAN"}};if(wd(h.value))return{unaryFilter:{field:Ts(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(h.field),op:ZI(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ts(u.field),direction:JI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||Ca(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function YI(t){let e=HI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){xe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Fg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Or(Ns(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ca(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new jo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new jo(d,h)}(n.endAt)),_I(e,r,o,i,a,"F",c,l)}function XI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fg(t){return t?t.unaryFilter!==void 0?[tT(t)]:t.fieldFilter!==void 0?[eT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Fg(e)).reduce((e,n)=>e.concat(n)):te():[]}function JI(t){return VI[t]}function ZI(t){return BI[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Ns(t){return it.fromServerFormat(t.fieldPath)}function eT(t){return ft.create(Ns(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}function tT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ns(t.unaryFilter.field);return ft.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ns(t.unaryFilter.field);return ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ns(t.unaryFilter.field);return ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ns(t.unaryFilter.field);return ft.create(r,"!=",{nullValue:"NULL_VALUE"});default:return te()}}function nT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $g(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&RI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ng();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Sg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,s)=>Cd(n,s))&&qs(this.baseMutations,e.baseMutations,(n,s)=>Cd(n,s))}}class wu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){xe(e.mutations.length===s.length);let r=LI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new wu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s,r,i=re.min(),o=re.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.ne=e}}function oT(t){const e=YI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.ze=new cT}addToCollectionParentIndex(e,n){return this.ze.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Vn.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class cT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Be(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Be(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ws(0)}static Rn(){return new Ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.changes=new hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Pr(s.mutation,r,Yt.empty(),Ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ir();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=dn();const o=Mr(),a=Mr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ys)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Pr(u.mutation,l,u.mutation.getFieldMask(),Ve.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new uT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Mr();let r=new je((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Yt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ng();u.forEach(d=>{if(!i.has(d)){const p=Sg(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):k.resolve(ns());let a=-1,c=i;return o.next(l=>k.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?k.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:Rg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=Ir();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ir();return this.indexManager.getCollectionParents(e,r).next(o=>k.forEach(o,a=>{const c=function(l,u){return new Di(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ye.newInvalidDocument(l)))});let o=Ir();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Pr(l.mutation,c,Yt.empty(),Ve.now()),_u(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):k.resolve(Ye.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return k.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:cn(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:oT(s.bundledQuery),readTime:cn(s.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.overlays=new je(H.comparator),this.Xn=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ns();return k.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const r=ns(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return k.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ns(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ns(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return k.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rT(n,s));let i=this.Xn.get(n);i===void 0&&(i=ae(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Zn=new Be(He.ts),this.es=new Be(He.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new He(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new He(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new H(new ke([])),s=new He(n,e),r=new He(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new H(new ke([])),s=new He(n,e),r=new He(n,e+1);let i=ae();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class He{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return H.comparator(e.key,n.key)||ge(e.ls,n.ls)}static ns(e,n){return ge(e.ls,n.ls)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Be(He.ts)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new He(n,0),r=new He(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Be(ge);return n.forEach(r=>{const i=new He(r,0),o=new He(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),k.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new He(new H(i),0);let a=new Be(ge);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ls)),!0)},o),k.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){xe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return k.forEach(n.mutations,r=>{const i=new He(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new He(n,0),r=this.ds.firstAfterOrEqual(s);return k.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.ps=e,this.docs=new je(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let s=dn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ye.newInvalidDocument(r))}),k.resolve(s)}getAllFromCollection(e,n,s){let r=dn();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nI(tI(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return k.resolve(r)}getAllFromCollectionGroup(e,n,s,r){te()}Is(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gT(this)}getSize(e){return k.resolve(this.size)}}class gT extends lT{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.persistence=e,this.Ts=new hr(n=>vu(n),yu),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Es=0,this.As=new Eu,this.targetCount=0,this.Rs=Ws.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),k.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.vn(n),k.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n){this.bs={},this.overlays={},this.Ps=new mu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new vT(this),this.indexManager=new aT,this.remoteDocumentCache=function(s){return new mT(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new iT(n),this.Ds=new dT(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new pT(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new _T(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return k.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class _T extends rI{constructor(e){super(),this.currentSequenceNumber=e}}class Iu{constructor(e){this.persistence=e,this.ks=new Eu,this.Os=null}static Ms(e){return new Iu(e)}get Fs(){if(this.Os)return this.Os;throw te()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),k.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Fs,s=>{const r=H.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,re.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return k.or([()=>k.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=ae(),r=ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return k.resolve(null)}xi(e,n,s,r){return bI(n)||r.isEqual(re.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):(md()<=me.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zc(n)),this.Mi(e,o,n,eI(r,-1)))})}ki(e,n){let s=new Be(yg(e));return n.forEach((r,i)=>{_u(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return md()<=me.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Zc(n)),this.Di.getDocumentsMatchingQuery(e,n,Vn.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new je(ge),this.Bi=new hr(i=>vu(i),yu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hT(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function ET(t,e,n,s){return new wT(t,e,n,s)}async function Vg(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ae();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function IT(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=k.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(v=>{const b=c.docVersions.get(p);xe(b!==null),v.version.compareTo(b)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Bg(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function TT(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(et.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(v,b,_){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,u)&&a.push(n.Vs.updateTargetData(i,p))});let c=dn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ST(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(re.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=r,i))}function ST(t,e,n){let s=ae(),r=ae();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=dn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function xT(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CT(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new is(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function sl(t,e,n){const s=ne(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ni(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Pd(t,e,n){const s=ne(t);let r=re.min(),i=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.Bi.get(l);return h!==void 0?k.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,ms(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:re.min(),n?i:ae())).next(a=>(kT(s,EI(e),a),{documents:a,ji:i})))}function kT(t,e,n){let s=re.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class Md{constructor(){this.activeTargetIds=Dg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AT{constructor(){this.Fr=new Md,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Md,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);j("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw gd("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=NT[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new H1;a.listenOnce(B1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case oc.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case oc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(v)>=0?v:T.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(T.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=$1(),o=V1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new q1({})),this.uo(a.initMessageHeaders,n,s),Ip()||Sp()||T0()||xp()||S0()||Tp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new DT({jr:v=>{h?j("Connection","Not sending because WebChannel is closed:",v):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",v),l.send(v))},Wr:()=>l.close()}),p=(v,b,_)=>{v.listen(b,x=>{try{_(x)}catch(w){setTimeout(()=>{throw w},0)}})};return p(l,Yi.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),p(l,Yi.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.eo())}),p(l,Yi.EventType.ERROR,v=>{h||(h=!0,gd("Connection","WebChannel transport errored:",v),d.eo(new $(T.UNAVAILABLE,"The operation could not be completed")))}),p(l,Yi.EventType.MESSAGE,v=>{var b;if(!h){const _=v.data[0];xe(!!_);const x=_,w=x.error||((b=x[0])===null||b===void 0?void 0:b.error);if(w){j("Connection","WebChannel received error:",w);const R=w.status;let L=function(Q){const W=Oe[Q];if(W!==void 0)return kg(W)}(R),V=w.message;L===void 0&&(L=T.INTERNAL,V="Unknown error status: "+R+" with message "+w.message),h=!0,d.eo(new $(L,V)),l.close()}else j("Connection","WebChannel received:",_),d.no(_)}}),p(o,j1.STAT_EVENT,v=>{v.stat===fd.PROXY?j("Connection","Detected buffering proxy"):v.stat===fd.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function cc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return new jI(t,!0)}class jg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new jg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===T.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new $(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PT extends qg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=zI(this.wt,e),s=function(r){if(!("targetChange"in r))return re.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?cn(i.readTime):re.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=nl(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Jc(a)?{documents:GI(r,a)}:{query:QI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Mg(r,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=Ho(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=XI(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=nl(this.wt),n.removeTarget=e,this.Mo(n)}}class MT extends qg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=WI(e.writeResults,e.commitTime),s=cn(e.commitTime);return this.listener.Jo(s,n)}return xe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=nl(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>KI(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(T.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class UT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?($n(n),this.su=!1):j("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{_s(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.lu.add(4),await Mi(c),c._u.set("Unknown"),c.lu.delete(4),await Oa(c)}(this))})}),this._u=new UT(s,r)}}async function Oa(t){if(_s(t))for(const e of t.fu)await e(!0)}async function Mi(t){for(const e of t.fu)await e(!1)}function Hg(t,e){const n=ne(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Cu(n)?xu(n):dr(n).Co()&&Su(n,e))}function zg(t,e){const n=ne(t),s=dr(n);n.hu.delete(e),s.Co()&&Kg(n,e),n.hu.size===0&&(s.Co()?s.ko():_s(n)&&n._u.set("Unknown"))}function Su(t,e){t.wu.Nt(e.targetId),dr(t).Qo(e)}function Kg(t,e){t.wu.Nt(e),dr(t).jo(e)}function xu(t){t.wu=new $I({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),dr(t).start(),t._u.iu()}function Cu(t){return _s(t)&&!dr(t).Do()&&t.hu.size>0}function _s(t){return ne(t).lu.size===0}function Wg(t){t.wu=void 0}async function $T(t){t.hu.forEach((e,n)=>{Su(t,e)})}async function VT(t,e){Wg(t),Cu(t)?(t._u.uu(e),xu(t)):t._u.set("Unknown")}async function BT(t,e,n){if(t._u.set("Online"),e instanceof Pg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zo(t,s)}else if(e instanceof po?t.wu.Ut(e):e instanceof Og?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(re.min()))try{const s=await Bg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),Kg(r,a);const l=new is(c.target,a,1,c.sequenceNumber);Su(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await zo(t,s)}}async function zo(t,e,n){if(!Ni(e))throw e;t.lu.add(1),await Mi(t),t._u.set("Offline"),n||(n=()=>Bg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Oa(t)})}function Gg(t,e){return e().catch(n=>zo(t,n,e))}async function Pa(t){const e=ne(t),n=jn(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;jT(e);)try{const r=await xT(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,qT(e,r)}catch(r){await zo(e,r)}Qg(e)&&Yg(e)}function jT(t){return _s(t)&&t.au.length<10}function qT(t,e){t.au.push(e);const n=jn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Qg(t){return _s(t)&&!jn(t).Do()&&t.au.length>0}function Yg(t){jn(t).start()}async function HT(t){jn(t).Xo()}async function zT(t){const e=jn(t);for(const n of t.au)e.Ho(n.mutations)}async function KT(t,e,n){const s=t.au.shift(),r=wu.from(s,e,n);await Gg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Pa(t)}async function WT(t,e){e&&jn(t).zo&&await async function(n,s){if(r=s.code,PI(r)&&r!==T.ABORTED){const i=n.au.shift();jn(n).No(),await Gg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pa(n)}var r}(t,e),Qg(t)&&Yg(t)}async function Ud(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=_s(n);n.lu.add(3),await Mi(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Oa(n)}async function GT(t,e){const n=ne(t);e?(n.lu.delete(2),await Oa(n)):e||(n.lu.add(2),await Mi(n),n._u.set("Unknown"))}function dr(t){return t.mu||(t.mu=function(e,n,s){const r=ne(e);return r.tu(),new PT(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:$T.bind(null,t),Jr:VT.bind(null,t),Go:BT.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Cu(t)?xu(t):t._u.set("Unknown")):(await t.mu.stop(),Wg(t))})),t.mu}function jn(t){return t.gu||(t.gu=function(e,n,s){const r=ne(e);return r.tu(),new MT(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:HT.bind(null,t),Jr:WT.bind(null,t),Yo:zT.bind(null,t),Jo:KT.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Pa(t)):(await t.gu.stop(),t.au.length>0&&(j("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ku(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(t,e){if($n("AsyncQueue",`${e}: ${t}`),Ni(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Ir(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.yu=new je(H.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):te():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Gs(e,n,$s.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.Iu=void 0,this.listeners=[]}}class YT{constructor(){this.queries=new hr(e=>vg(e),ka),this.onlineState="Unknown",this.Tu=new Set}}async function XT(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new QT),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Au(o,`Initialization of query '${Zc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Ru(n)}async function JT(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ZT(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Ru(n)}function eS(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ru(t){t.Tu.forEach(e=>{e.next()})}class tS{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.key=e}}class Jg{constructor(e){this.key=e}}class nS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ae(),this.mutatedKeys=ae(),this.Lu=yg(e),this.Uu=new $s(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Fd,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=_u(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?v!==b&&(s.track({type:3,doc:p}),_=!0):this.Qu(d,p)||(s.track({type:2,doc:p}),_=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),_=!0):d&&!p&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(h)-p(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Gs(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Fd,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ae(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Jg(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new Xg(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=ae();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Gs.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class sS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class rS{constructor(e){this.key=e,this.Xu=!1}}class iS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new hr(a=>vg(a),ka),this.ec=new Map,this.nc=new Set,this.sc=new je(H.comparator),this.ic=new Map,this.rc=new Eu,this.oc={},this.uc=new Map,this.cc=Ws.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function oS(t,e){const n=gS(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await CT(n.localStore,ms(e));n.isPrimaryClient&&Hg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await aS(n,e,s,a==="current")}return r}async function aS(t,e,n,s){t.hc=(u,h,d)=>async function(p,v,b,_){let x=v.view.Ku(b);x.Oi&&(x=await Pd(p.localStore,v.query,!1).then(({documents:L})=>v.view.Ku(L,x)));const w=_&&_.targetChanges.get(v.targetId),R=v.view.applyChanges(x,p.isPrimaryClient,w);return Vd(p,v.targetId,R.zu),R.snapshot}(t,u,h,d);const r=await Pd(t.localStore,e,!0),i=new nS(e,r.ji),o=i.Ku(r.documents),a=Pi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Vd(t,n,c.zu);const l=new sS(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function cS(t,e){const n=ne(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!ka(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await sl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),zg(n.remoteStore,s.targetId),rl(n,s.targetId)}).catch(Ri)):(rl(n,s.targetId),await sl(n.localStore,s.targetId,!0))}async function lS(t,e,n){const s=vS(t);try{const r=await function(i,o){const a=ne(i),c=Ve.now(),l=o.reduce((d,p)=>d.add(p.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=dn(),v=ae();return a.Ui.getEntries(d,l).next(b=>{p=b,p.forEach((_,x)=>{x.isValidDocument()||(v=v.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(b=>{u=b;const _=[];for(const x of o){const w=NI(x,u.get(x.key).overlayedDocument);w!=null&&_.push(new ys(x.key,w,hg(w.value.mapValue),an.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(b=>{h=b;const _=b.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,b.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Rg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new je(ge)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Li(s,r.changes),await Pa(s.remoteStore)}catch(r){const i=Au(r,"Failed to persist write");n.reject(i)}}async function Zg(t,e){const n=ne(t);try{const s=await TT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(xe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?xe(o.Xu):r.removedDocuments.size>0&&(xe(o.Xu),o.Xu=!1))}),await Li(n,s,e)}catch(s){await Ri(s)}}function $d(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Ru(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uS(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new je(H.comparator);o=o.insert(i,Ye.newNoDocument(i,re.min()));const a=ae().add(i),c=new Na(re.min(),new Map,new Be(ge),o,a);await Zg(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),Nu(s)}else await sl(s.localStore,e,!1).then(()=>rl(s,e,n)).catch(Ri)}async function hS(t,e){const n=ne(t),s=e.batch.batchId;try{const r=await IT(n.localStore,e);tv(n,s,null),ev(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Li(n,r)}catch(r){await Ri(r)}}async function dS(t,e,n){const s=ne(t);try{const r=await function(i,o){const a=ne(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(xe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);tv(s,e,n),ev(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Li(s,r)}catch(r){await Ri(r)}}function ev(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function tv(t,e,n){const s=ne(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||nv(t,s)})}function nv(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(zg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Nu(t))}function Vd(t,e,n){for(const s of n)s instanceof Xg?(t.rc.addReference(s.key,e),fS(t,s)):s instanceof Jg?(j("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||nv(t,s.key)):te()}function fS(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.nc.add(s),Nu(t))}function Nu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new H(ke.fromString(e)),s=t.cc.next();t.ic.set(s,new rS(n)),t.sc=t.sc.insert(n,s),Hg(t.remoteStore,new is(ms(fg(n.path)),s,2,mu.ot))}}async function Li(t,e,n){const s=ne(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Tu.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(c,h=>k.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>k.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ni(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,v)}}}(s.localStore,i))}async function pS(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Vg(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new $(T.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Li(n,s.Ki)}}function mS(t,e){const n=ne(t),s=n.ic.get(e);if(s&&s.Xu)return ae().add(s.key);{let r=ae();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function gS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uS.bind(null,e),e.Zu.Go=ZT.bind(null,e.eventManager),e.Zu.lc=eS.bind(null,e.eventManager),e}function vS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dS.bind(null,e),e}class yS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Da(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return ET(this.persistence,new bT,e.initialUser,this.wt)}_c(e){return new yT(Iu.Ms,this.wt)}dc(e){return new AT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _S{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$d(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pS.bind(null,this.syncEngine),await GT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YT}createDatastore(e){const n=Da(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new OT(r));var r;return function(i,o,a,c){return new LT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>$d(this.syncEngine,a,0),o=Ld.V()?new Ld:new RT,new FT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new iS(s,r,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);j("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Mi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=gt.UNAUTHENTICATED,this.clientId=ag.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Au(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ES(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Vg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TS(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ud(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ud(e.remoteStore,i)),t.onlineComponents=e}async function TS(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await ES(t,new yS)),t.offlineComponents}async function sv(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await IS(t,new _S)),t.onlineComponents}function SS(t){return sv(t).then(e=>e.syncEngine)}async function xS(t){const e=await sv(t),n=e.eventManager;return n.onListen=oS.bind(null,e.syncEngine),n.onUnlisten=cS.bind(null,e.syncEngine),n}function CS(t,e,n={}){const s=new On;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new bS({next:h=>{i.enqueueAndForget(()=>JT(r,u)),h.fromCache&&a.source==="server"?c.reject(new $(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new tS(o,l,{includeMetadataChanges:!0,Du:!0});return XT(r,u)}(await xS(t),t.asyncQueue,e,n,s)),s.promise}const Bd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kS(t,e,n,s){if(e===!0&&s===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jd(t){if(!H.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qd(t){if(H.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ma(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function il(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ma(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1,e instanceof zs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zs(r.options.projectId)}(e))}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new K1;switch(n.type){case"gapi":const s=n.client;return xe(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Q1(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bd.get(e);n&&(j("ComponentProvider","Removing Datastore"),Bd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Ui{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class Pn extends Ui{constructor(e,n,s){super(e,n,fg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new H(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function Fi(t,e,...n){if(t=vt(t),rv("collection","path",e),t instanceof Du){const s=ke.fromString(e,...n);return qd(s),new Pn(t,null,s)}{if(!(t instanceof Dt||t instanceof Pn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return qd(s),new Pn(t.firestore,null,s)}}function AS(t,e,...n){if(t=vt(t),arguments.length===1&&(e=ag.I()),rv("doc","path",e),t instanceof Du){const s=ke.fromString(e,...n);return jd(s),new Dt(t,null,new H(s))}{if(!(t instanceof Dt||t instanceof Pn))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return jd(s),new Dt(t.firestore,t instanceof Pn?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new jg(this,"async_queue_retry"),this.Kc=()=>{const n=cc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new On;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Ni(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw $n("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=ku.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ou extends Du{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new RS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ov(this),this._firestoreClient.terminate()}}function NS(t=Pl()){return la(t,"firestore").getImmediate()}function iv(t){return t._firestoreClient||ov(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ov(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new oI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new wS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(et.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=/^__.*__$/;class OS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}function av(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Uu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ko(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(av(this.Zc)&&DS.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class PS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Da(e)}aa(e,n,s,r=!1){return new Uu({Zc:e,methodName:n,ca:s,path:it.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function cv(t){const e=t._freezeSettings(),n=Da(t._databaseId);return new PS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MS(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);hv("Data must be an object, but it was:",o,s);const a=lv(s,o);let c,l;if(i.merge)c=new Yt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=US(e,h,n);if(!o.contains(d))throw new $(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$S(u,d)||u.push(d)}c=new Yt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new OS(new kt(a),c,l)}class Fu extends Mu{_toFieldTransform(e){return new CI(e.path,new ii)}isEqual(e){return e instanceof Fu}}function LS(t,e,n,s=!1){return $u(n,t.aa(s?4:3,e))}function $u(t,e){if(uv(t=vt(t)))return hv("Unsupported field value:",e,t),lv(t,e);if(t instanceof Mu)return function(n,s){if(!av(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=$u(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return TI(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ve.fromDate(n);return{timestampValue:Ho(s.wt,r)}}if(n instanceof Ve){const r=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ho(s.wt,r)}}if(n instanceof Lu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qs)return{bytesValue:Mg(s.wt,n._byteString)};if(n instanceof Dt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:bu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Ma(n)}`)}(t,e)}function lv(t,e){const n={};return cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(t,(s,r)=>{const i=$u(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function uv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Lu||t instanceof Qs||t instanceof Dt||t instanceof Mu)}function hv(t,e,n){if(!uv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ma(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function US(t,e,n){if((e=vt(e))instanceof Pu)return e._internalPath;if(typeof e=="string")return dv(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const FS=new RegExp("[~\\*/\\[\\]]");function dv(t,e,n){if(e.search(FS)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pu(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(T.INVALID_ARGUMENT,a+t+c)}function $S(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VS extends fv{data(){return super.data()}}function Vu(t,e){return typeof e=="string"?dv(t,e):e instanceof Pu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BS extends fv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Vu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class mo extends BS{data(e={}){return super.data(e)}}class jS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Zi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new mo(this._firestore,this._userDataWriter,s.key,s,new Zi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:qS(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zS{}function Bu(t,...e){for(const n of e)t=n._apply(t);return t}class KS extends zS{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=cv(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new $(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Kd(u,l);const p=[];for(const v of u)p.push(zd(a,r,v));h={arrayValue:{values:p}}}else h=zd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Kd(u,l),h=LS(o,i,u,l==="in"||l==="not-in");const d=ft.create(c,l,h);return function(p,v){if(v.ht()){const _=mg(p);if(_!==null&&!_.isEqual(v.field))throw new $(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${v.field.toString()}'`);const x=pg(p);x!==null&&WS(p,v.field,x)}const b=function(_,x){for(const w of _.filters)if(x.indexOf(w.op)>=0)return w.op;return null}(p,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(b!==null)throw b===v.op?new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${b.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Ui(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Di(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function pv(t,e,n){const s=e,r=Vu("where",t);return new KS(r,s,n)}function zd(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new $(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gg(e)&&n.indexOf("/")!==-1)throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ke.fromString(n));if(!H.isDocumentKey(s))throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return bd(t,new H(s))}if(n instanceof Dt)return bd(t,n._key);throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ma(n)}.`)}function Kd(t,e){if(!Array.isArray(t)||t.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new $(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function WS(t,e,n){if(!n.isEqual(e))throw new $(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const s={};return ur(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Lu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ug(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);xe($g(s));const r=new zs(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class YS extends GS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function ju(t){t=il(t,Ui);const e=il(t.firestore,Ou),n=iv(e),s=new YS(e);return HS(t._query),CS(n,t._query).then(r=>new jS(e,s,t,r))}function mv(t,e){const n=il(t.firestore,Ou),s=AS(t),r=QS(t.converter,e);return XS(n,[MS(cv(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,an.exists(!1))]).then(()=>s)}function XS(t,e){return function(n,s){const r=new On;return n.asyncQueue.enqueueAndForget(async()=>lS(await SS(n),s,r)),r.promise}(iv(t),e)}function JS(){return new Fu("serverTimestamp")}(function(t,e=!0){(function(n){lr=n})(rr),as(new Fn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Ou(r,new W1(n.getProvider("auth-internal")),new X1(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Wt(pd,"3.4.11",t),Wt(pd,"3.4.11","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebasestorage.googleapis.com",ZS="storageBucket",ex=2*60*1e3,tx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends qn{constructor(e,n){super(lc(e),`Firebase Storage: ${n} (${lc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Zt.prototype)}_codeEquals(e){return lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function lc(t){return"storage/"+t}function nx(){const t="An unknown error occurred, please check the error payload for server response.";return new Zt("unknown",t)}function sx(){return new Zt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function rx(){return new Zt("canceled","User canceled the upload/download.")}function ix(t){return new Zt("invalid-url","Invalid URL '"+t+"'.")}function ox(t){return new Zt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Wd(t){return new Zt("invalid-argument",t)}function vv(){return new Zt("app-deleted","The Firebase app was deleted.")}function ax(t){return new Zt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(s.path==="")return s;throw ox(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),v={bucket:1,path:3},b=n===gv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",x=new RegExp(`^https?://${b}/${r}/${_}`,"i"),R=[{regex:a,indices:c,postModify:i},{regex:p,indices:v,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let L=0;L<R.length;L++){const V=R[L],Q=V.regex.exec(e);if(Q){const W=Q[V.indices.bucket];let P=Q[V.indices.path];P||(P=""),s=new Ft(W,P),V.postModify(s);break}}if(s==null)throw ix(e);return s}}class cx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,t(p,c())},_)}function d(){i&&clearTimeout(i)}function p(_,...x){if(l){d();return}if(_){d(),u.call(null,_,...x);return}if(c()||o){d(),u.call(null,_,...x);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let v=!1;function b(_){v||(v=!0,d(),!l&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function ux(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){return t!==void 0}function Gd(t,e,n,s){if(s<e)throw Wd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Wd(`Invalid value for '${t}'. Expected ${n} or less.`)}function dx(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wo||(Wo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new eo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wo.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Wo.ABORT;s(!1,new eo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new eo(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());hx(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=nx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?vv():rx();o(c)}else{const c=sx();o(c)}};this.canceled_?n(!1,new eo(!1,null,!0)):this.backoffId_=lx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ux(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class eo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function px(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function gx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yx(t,e,n,s,r,i){const o=dx(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return gx(c,e),px(c,n),mx(c,i),vx(c,s),new fx(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Go(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bx(this._location.path)}get storage(){return this._service}get parent(){const e=_x(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Go(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ax(e)}}function Qd(t,e){const n=e==null?void 0:e[ZS];return n==null?null:Ft.makeFromBucketSpec(n,t)}class wx{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=gv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ex,this._maxUploadRetryTime=tx,this._requests=new Set,r!=null?this._bucket=Ft.makeFromBucketSpec(r,this._host):this._bucket=Qd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Qd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Go(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new cx(vv());{const i=yx(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Yd="@firebase/storage",Xd="0.9.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="storage";function Ex(t=Pl(),e){return t=vt(t),la(t,yv).getImmediate({identifier:e})}function Ix(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new wx(n,s,r,e,rr)}function Tx(){as(new Fn(yv,Ix,"PUBLIC").setMultipleInstances(!0)),Wt(Yd,Xd,""),Wt(Yd,Xd,"esm2017")}Tx();const Sx={apiKey:"AIzaSyDMd8_4lQXxVzXRq_e-8bdeN_GLK3YUzfk",authDomain:"vt-shop.firebaseapp.com",projectId:"vt-shop",storageBucket:"vt-shop.appspot.com",messagingSenderId:"980909398814",appId:"1:980909398814:web:c0920fd27ef6bde687470f"},qu=Nb(Sx),gs=FE(qu),$i=NS(qu);Ex(qu);const gn=_p({id:"products",state:()=>({product:{title:"",description:"",price:null,discountPercentage:null,stock:null,brand:"",category:"",images:[]},products:[],cart:[],orders:[]}),getters:{getSpecialProduct(t){return t.products.filter(e=>e.price=="700").slice(0,4)},getHeroProduct:t=>t.products.filter(e=>e.price>300).slice(0,4),getBestSellingProduct:t=>t.products.filter(e=>e.discountPercentage>10).slice(0,4),filterByCategory(t,e){return t.products.filter(n=>n.category===e)}},actions:{async getAllProducts(t){const e=Bu(Fi($i,"products"));(await ju(e)).forEach(s=>t.push(s.data()))}}});var Tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const Kn=t=>(fn("data-v-0a12b81d"),t=t(),pn(),t),xx={class:"header"},Cx={class:"mobile-menu bg-second"},kx=Me("VTShop"),Ax=Kn(()=>g("span",{class:"mb-menu-toggle",id:"mb-menu-toggle"},[g("span",{class:"material-icons"},"menu")],-1)),Rx={class:"header-wrapper",id:"header-wrapper"},Nx=di('<span class="mb-menu-toggle mb-menu-close" id="mb-menu-close" data-v-0a12b81d><i class="bx bx-x" data-v-0a12b81d></i></span><div class="bg-second" data-v-0a12b81d><div class="top-header container" data-v-0a12b81d><ul class="devided" data-v-0a12b81d><li data-v-0a12b81d><a href="#" data-v-0a12b81d>+84984041242</a></li><li data-v-0a12b81d><a href="#" data-v-0a12b81d>trungvuhoang2005@gmail.com</a></li></ul></div></div>',2),Dx={class:"bg-main"},Ox={class:"mid-header container"},Px=Me("VTShop"),Mx=Kn(()=>g("div",{class:"search"},[g("input",{type:"text",placeholder:"Search"}),g("span",{class:"material-icons"},"search")],-1)),Lx={class:"user-menu"},Ux=Kn(()=>g("span",{class:"material-icons"},"notifications",-1)),Fx=Kn(()=>g("span",{class:"material-icons"},"login",-1)),$x={class:"account-menu"},Vx={key:0,class:"account-menu-dropdown"},Bx=["onClick"],jx=Kn(()=>g("span",{class:"material-icons"},"account_circle",-1)),qx=Me("User"),Hx=[jx,qx],zx=["onClick"],Kx=Kn(()=>g("span",{class:"material-icons"},"logout",-1)),Wx=Me("Logout"),Gx=[Kx,Wx],Qx=Kn(()=>g("span",{class:"material-icons"},"shopping_bag",-1)),Yx={class:"cart-counter"},Xx={class:"bg-second"},Jx={class:"bottom-header container"},Zx={class:"main-menu"},eC=Me("home"),tC={class:"mega-dropdown"},nC=Me("Shop"),sC=Kn(()=>g("span",{class:"material-icons"},"expand_more",-1)),rC=di('<div class="mega-content" data-v-0a12b81d><div class="row" data-v-0a12b81d><div class="col-3 col-md-12" data-v-0a12b81d><div class="box" data-v-0a12b81d><h3 data-v-0a12b81d>All Product</h3><ul data-v-0a12b81d><li data-v-0a12b81d><a href="#" data-v-0a12b81d>Keyboard</a></li><li data-v-0a12b81d><a href="#" data-v-0a12b81d>Monitor</a></li><li data-v-0a12b81d><a href="#" data-v-0a12b81d>Mouse</a></li><li data-v-0a12b81d><a href="#" data-v-0a12b81d>Headphone</a></li></ul></div></div></div></div>',1),iC=Me("blog"),oC=Me("contact"),aC={__name:"Header",props:["isLogged"],emits:["sign_out","to_user_view"],setup(t,{emit:e}){const n=gn();function s(){e("sign_out")}function r(){e("to_user_view")}const i=Xe(!1),o=()=>{i.value=!i.value};return(a,c)=>{const l=hi("router-link");return ce(),ve("div",xx,[g("header",null,[g("div",Cx,[fe(l,{to:{name:"Home"},class:"mb-logo"},{default:mt(()=>[kx]),_:1}),Ax]),g("div",Rx,[Nx,g("div",Dx,[g("div",Ox,[fe(l,{to:{name:"Home"},class:"logo"},{default:mt(()=>[Px]),_:1}),Mx,g("ul",Lx,[g("li",null,[fe(l,{to:"#"},{default:mt(()=>[Ux]),_:1})]),g("li",null,[st(fe(l,{to:{name:"Login"}},{default:mt(()=>[Fx]),_:1},512),[[Ch,!t.isLogged]]),st(g("div",$x,[g("span",{class:"material-icons",onClick:o},"account_circle"),i.value?(ce(),ve("ul",Vx,[g("li",{onClick:os(r,["prevent"])},Hx,8,Bx),g("li",{onClick:os(s,["prevent"])},Gx,8,zx)])):Hr("",!0)],512),[[Ch,t.isLogged]])]),g("li",null,[fe(l,{to:{name:"Checkout"}},{default:mt(()=>[Qx,g("span",Yx,$e(ot(n).cart.length),1)]),_:1})])])])]),g("div",Xx,[g("div",Jx,[g("ul",Zx,[g("li",null,[fe(l,{to:{name:"Home"}},{default:mt(()=>[eC]),_:1})]),g("li",tC,[fe(l,{to:{name:"AllProducts"}},{default:mt(()=>[nC,sC]),_:1}),rC]),g("li",null,[fe(l,{to:{name:"Blogs"}},{default:mt(()=>[iC]),_:1})]),g("li",null,[fe(l,{to:"#"},{default:mt(()=>[oC]),_:1})])])])])])])])}}};var cC=Tt(aC,[["__scopeId","data-v-0a12b81d"]]);const lC={},uC={class:"bg-second"},hC=di('<div class="container" data-v-d0346c7e><div class="row" data-v-d0346c7e><div class="col-3 col-md-6" data-v-d0346c7e><h3 class="footer-head" data-v-d0346c7e>Products</h3><ul class="menu" data-v-d0346c7e><li data-v-d0346c7e><a href="#" data-v-d0346c7e>Help center</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>Contact us</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>product help</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>warranty</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>order status</a></li></ul></div><div class="col-3 col-md-6" data-v-d0346c7e><h3 class="footer-head" data-v-d0346c7e>services</h3><ul class="menu" data-v-d0346c7e><li data-v-d0346c7e><a href="#" data-v-d0346c7e>Help center</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>Contact us</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>product help</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>warranty</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>order status</a></li></ul></div><div class="col-3 col-md-6" data-v-d0346c7e><h3 class="footer-head" data-v-d0346c7e>support</h3><ul class="menu" data-v-d0346c7e><li data-v-d0346c7e><a href="#" data-v-d0346c7e>Help center</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>Contact us</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>product help</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>warranty</a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e>order status</a></li></ul></div><div class="col-3 col-md-6 col-sm-12" data-v-d0346c7e><div class="contact" data-v-d0346c7e><h3 class="contact-header" data-v-d0346c7e> VTShop </h3><ul class="contact-socials" data-v-d0346c7e><li data-v-d0346c7e><a href="#" data-v-d0346c7e><i class="bx bxl-facebook-circle" data-v-d0346c7e></i></a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e><i class="bx bxl-instagram-alt" data-v-d0346c7e></i></a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e><i class="bx bxl-youtube" data-v-d0346c7e></i></a></li><li data-v-d0346c7e><a href="#" data-v-d0346c7e><i class="bx bxl-twitter" data-v-d0346c7e></i></a></li></ul></div><div class="subscribe" data-v-d0346c7e><input type="email" placeholder="ENTER YOUR EMAIL" data-v-d0346c7e><button data-v-d0346c7e>subscribe</button></div></div></div></div>',1),dC=[hC];function fC(t,e,n,s,r,i){return ce(),ve("footer",uC,dC)}var pC=Tt(lC,[["render",fC],["__scopeId","data-v-d0346c7e"]]);/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _v=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fr=t=>_v?Symbol(t):"_vr_"+t,mC=fr("rvlm"),Jd=fr("rvd"),La=fr("r"),Hu=fr("rl"),ol=fr("rvl"),ks=typeof window!="undefined";function gC(t){return t.__esModule||_v&&t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function uc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Lr=()=>{},vC=/\/$/,yC=t=>t.replace(vC,"");function hc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=EC(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function _C(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ys(e.matched[s],n.matched[r])&&bv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wC(t[n],e[n]))return!1;return!0}function wC(t,e){return Array.isArray(t)?ef(t,e):Array.isArray(e)?ef(e,t):t===e}function ef(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function EC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ur||(Ur={}));function IC(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yC(t)}const TC=/^[^#]+#/;function SC(t,e){return t.replace(TC,"#")+e}function xC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function CC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tf(t,e){return(history.state?history.state.position-e:-1)+t}const al=new Map;function kC(t,e){al.set(t,e)}function AC(t){const e=al.get(t);return al.delete(t),e}let RC=()=>location.protocol+"//"+location.host;function wv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Zd(c,"")}return Zd(n,t)+s+r}function NC(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=wv(t,location),v=n.value,b=e.value;let _=0;if(d){if(n.value=p,e.value=d,o&&o===v){o=null;return}_=b?d.position-b.position:0}else s(p);r.forEach(x=>{x(n.value,v,{delta:_,type:ci.pop,direction:_?_>0?Ur.forward:Ur.back:Ur.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(Ee({},d.state,{scroll:Ua()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function nf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ua():null}}function DC(t){const{history:e,location:n}=window,s={value:wv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:RC()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ee({},e.state,nf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ee({},r.value,e.state,{forward:c,scroll:Ua()});i(u.current,u,!0);const h=Ee({},nf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function OC(t){t=IC(t);const e=DC(t),n=NC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:SC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function PC(t){return typeof t=="string"||t&&typeof t=="object"}function Ev(t){return typeof t=="string"||typeof t=="symbol"}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Iv=fr("nf");var sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sf||(sf={}));function Xs(t,e){return Ee(new Error,{type:t,[Iv]:!0},e)}function bn(t,e){return t instanceof Error&&Iv in t&&(e==null||!!(t.type&e))}const rf="[^/]+?",MC={sensitive:!1,strict:!1,start:!0,end:!0},LC=/[.+*?^${}()[\]/\\]/g;function UC(t,e){const n=Ee({},MC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(LC,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:b,optional:_,regexp:x}=d;i.push({name:v,repeatable:b,optional:_});const w=x||rf;if(w!==rf){p+=10;try{new RegExp(`(${w})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+L.message)}}let R=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(R=_&&l.length<2?`(?:/${R})`:"/"+R),_&&(R+="?"),r+=R,p+=20,_&&(p+=-8),b&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",v=i[d-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:b,optional:_}=p,x=v in l?l[v]:"";if(Array.isArray(x)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(x)?x.join("/"):x;if(!w)if(_)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=w}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function FC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $C(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=FC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(of(s))return 1;if(of(r))return-1}return r.length-s.length}function of(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VC={type:0,value:""},BC=/[a-zA-Z0-9_]/;function jC(t){if(!t)return[[]];if(t==="/")return[[VC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:BC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function qC(t,e,n){const s=UC(jC(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function HC(t,e){const n=[],s=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,v=KC(u);v.aliasOf=d&&d.record;const b=cf(e,u),_=[v];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of R)_.push(Ee({},v,{components:d?d.record.components:v.components,path:L,aliasOf:d?d.record:v}))}let x,w;for(const R of _){const{path:L}=R;if(h&&L[0]!=="/"){const V=h.record.path,Q=V[V.length-1]==="/"?"":"/";R.path=h.record.path+(L&&Q+L)}if(x=qC(R,h,b),d?d.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),p&&u.name&&!af(x)&&o(u.name)),"children"in v){const V=v.children;for(let Q=0;Q<V.length;Q++)i(V[Q],x,d&&d.children[Q])}d=d||x,c(x)}return w?()=>{o(w)}:Lr}function o(u){if(Ev(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&$C(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Tv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!af(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},v,b;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Xs(1,{location:u});b=d.record.name,p=Ee(zC(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),v=d.stringify(p)}else if("path"in u)v=u.path,d=n.find(w=>w.re.test(v)),d&&(p=d.parse(v),b=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw Xs(1,{location:u,currentLocation:h});b=d.record.name,p=Ee({},h.params,u.params),v=d.stringify(p)}const _=[];let x=d;for(;x;)_.unshift(x.record),x=x.parent;return{name:b,path:v,params:p,matched:_,meta:GC(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function zC(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function KC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:WC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function WC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GC(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function cf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Tv(t,e){return e.children.some(n=>n===t||Tv(t,n))}const Sv=/#/g,QC=/&/g,YC=/\//g,XC=/=/g,JC=/\?/g,xv=/\+/g,ZC=/%5B/g,ek=/%5D/g,Cv=/%5E/g,tk=/%60/g,kv=/%7B/g,nk=/%7C/g,Av=/%7D/g,sk=/%20/g;function zu(t){return encodeURI(""+t).replace(nk,"|").replace(ZC,"[").replace(ek,"]")}function rk(t){return zu(t).replace(kv,"{").replace(Av,"}").replace(Cv,"^")}function cl(t){return zu(t).replace(xv,"%2B").replace(sk,"+").replace(Sv,"%23").replace(QC,"%26").replace(tk,"`").replace(kv,"{").replace(Av,"}").replace(Cv,"^")}function ik(t){return cl(t).replace(XC,"%3D")}function ok(t){return zu(t).replace(Sv,"%23").replace(JC,"%3F")}function ak(t){return t==null?"":ok(t).replace(YC,"%2F")}function Qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ck(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(xv," "),o=i.indexOf("="),a=Qo(o<0?i:i.slice(0,o)),c=o<0?null:Qo(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function lf(t){let e="";for(let n in t){const s=t[n];if(n=ik(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&cl(i)):[s&&cl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function lk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function vr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function In(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Xs(4,{from:n,to:e})):h instanceof Error?a(h):PC(h)?a(Xs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function dc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(uk(a)){const l=(a.__vccOpts||a)[e];l&&r.push(In(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=gC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&In(d,n,s,i,o)()}))}}return r}function uk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uf(t){const e=Vt(La),n=Vt(Hu),s=Ut(()=>e.resolve(ot(t.to))),r=Ut(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ys.bind(null,u));if(d>-1)return d;const p=hf(c[l-2]);return l>1&&hf(u)===p&&h[h.length-1].path!==p?h.findIndex(Ys.bind(null,c[l-2])):d}),i=Ut(()=>r.value>-1&&pk(n.params,s.value.params)),o=Ut(()=>r.value>-1&&r.value===n.matched.length-1&&bv(n.params,s.value.params));function a(c={}){return fk(c)?e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(Lr):Promise.resolve()}return{route:s,href:Ut(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const hk=Qf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uf,setup(t,{slots:e}){const n=nr(uf(t)),{options:s}=Vt(La),r=Ut(()=>({[df(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[df(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:fp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),dk=hk;function fk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const df=(t,e,n)=>t!=null?t:e!=null?e:n,mk=Qf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Vt(ol),r=Ut(()=>t.route||s.value),i=Vt(Jd,0),o=Ut(()=>r.value.matched[i]);so(Jd,i+1),so(mC,o),so(ol,r);const a=Xe();return xr(()=>[a.value,o.value,t.name],([c,l,u],[h,d,p])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!Ys(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return ff(n.default,{Component:u,route:c});const d=l.props[t.name],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,b=fp(u,Ee({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return ff(n.default,{Component:b,route:c})||b}}});function ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gk=mk;function vk(t){const e=HC(t.routes,t),n=t.parseQuery||ck,s=t.stringifyQuery||lf,r=t.history,i=vr(),o=vr(),a=vr(),c=Ey(_n);let l=_n;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uc.bind(null,E=>""+E),h=uc.bind(null,ak),d=uc.bind(null,Qo);function p(E,B){let O,q;return Ev(E)?(O=e.getRecordMatcher(E),q=B):q=E,e.addRoute(q,O)}function v(E){const B=e.getRecordMatcher(E);B&&e.removeRoute(B)}function b(){return e.getRoutes().map(E=>E.record)}function _(E){return!!e.getRecordMatcher(E)}function x(E,B){if(B=Ee({},B||c.value),typeof E=="string"){const se=hc(n,E,B.path),f=e.resolve({path:se.path},B),m=r.createHref(se.fullPath);return Ee(se,f,{params:d(f.params),hash:Qo(se.hash),redirectedFrom:void 0,href:m})}let O;if("path"in E)O=Ee({},E,{path:hc(n,E.path,B.path).path});else{const se=Ee({},E.params);for(const f in se)se[f]==null&&delete se[f];O=Ee({},E,{params:h(E.params)}),B.params=h(B.params)}const q=e.resolve(O,B),_e=E.hash||"";q.params=u(d(q.params));const Se=_C(s,Ee({},E,{hash:rk(_e),path:q.path})),oe=r.createHref(Se);return Ee({fullPath:Se,hash:_e,query:s===lf?lk(E.query):E.query||{}},q,{redirectedFrom:void 0,href:oe})}function w(E){return typeof E=="string"?hc(n,E,c.value.path):Ee({},E)}function R(E,B){if(l!==E)return Xs(8,{from:B,to:E})}function L(E){return W(E)}function V(E){return L(Ee(w(E),{replace:!0}))}function Q(E){const B=E.matched[E.matched.length-1];if(B&&B.redirect){const{redirect:O}=B;let q=typeof O=="function"?O(E):O;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=w(q):{path:q},q.params={}),Ee({query:E.query,hash:E.hash,params:E.params},q)}}function W(E,B){const O=l=x(E),q=c.value,_e=E.state,Se=E.force,oe=E.replace===!0,se=Q(O);if(se)return W(Ee(w(se),{state:_e,force:Se,replace:oe}),B||O);const f=O;f.redirectedFrom=B;let m;return!Se&&bC(s,q,O)&&(m=Xs(16,{to:f,from:q}),ws(q,q,!0,!1)),(m?Promise.resolve(m):Y(f,q)).catch(y=>bn(y)?bn(y,2)?y:yt(y):Te(y,f,q)).then(y=>{if(y){if(bn(y,2))return W(Ee(w(y.to),{state:_e,force:Se,replace:oe}),B||f)}else y=de(f,q,!0,oe,_e);return ie(f,q,y),y})}function P(E,B){const O=R(E,B);return O?Promise.reject(O):Promise.resolve()}function Y(E,B){let O;const[q,_e,Se]=yk(E,B);O=dc(q.reverse(),"beforeRouteLeave",E,B);for(const se of q)se.leaveGuards.forEach(f=>{O.push(In(f,E,B))});const oe=P.bind(null,E,B);return O.push(oe),Ss(O).then(()=>{O=[];for(const se of i.list())O.push(In(se,E,B));return O.push(oe),Ss(O)}).then(()=>{O=dc(_e,"beforeRouteUpdate",E,B);for(const se of _e)se.updateGuards.forEach(f=>{O.push(In(f,E,B))});return O.push(oe),Ss(O)}).then(()=>{O=[];for(const se of E.matched)if(se.beforeEnter&&!B.matched.includes(se))if(Array.isArray(se.beforeEnter))for(const f of se.beforeEnter)O.push(In(f,E,B));else O.push(In(se.beforeEnter,E,B));return O.push(oe),Ss(O)}).then(()=>(E.matched.forEach(se=>se.enterCallbacks={}),O=dc(Se,"beforeRouteEnter",E,B),O.push(oe),Ss(O))).then(()=>{O=[];for(const se of o.list())O.push(In(se,E,B));return O.push(oe),Ss(O)}).catch(se=>bn(se,8)?se:Promise.reject(se))}function ie(E,B,O){for(const q of a.list())q(E,B,O)}function de(E,B,O,q,_e){const Se=R(E,B);if(Se)return Se;const oe=B===_n,se=ks?history.state:{};O&&(q||oe?r.replace(E.fullPath,Ee({scroll:oe&&se&&se.scroll},_e)):r.push(E.fullPath,_e)),c.value=E,ws(E,B,O,oe),yt()}let Re;function nt(){Re||(Re=r.listen((E,B,O)=>{const q=x(E),_e=Q(q);if(_e){W(Ee(_e,{replace:!0}),q).catch(Lr);return}l=q;const Se=c.value;ks&&kC(tf(Se.fullPath,O.delta),Ua()),Y(q,Se).catch(oe=>bn(oe,12)?oe:bn(oe,2)?(W(oe.to,q).then(se=>{bn(se,20)&&!O.delta&&O.type===ci.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),Te(oe,q,Se))).then(oe=>{oe=oe||de(q,Se,!1),oe&&(O.delta?r.go(-O.delta,!1):O.type===ci.pop&&bn(oe,20)&&r.go(-1,!1)),ie(q,Se,oe)}).catch(Lr)}))}let qe=vr(),Ue=vr(),Fe;function Te(E,B,O){yt(E);const q=Ue.list();return q.length?q.forEach(_e=>_e(E,B,O)):console.error(E),Promise.reject(E)}function ye(){return Fe&&c.value!==_n?Promise.resolve():new Promise((E,B)=>{qe.add([E,B])})}function yt(E){return Fe||(Fe=!E,nt(),qe.list().forEach(([B,O])=>E?O(E):B()),qe.reset()),E}function ws(E,B,O,q){const{scrollBehavior:_e}=t;if(!ks||!_e)return Promise.resolve();const Se=!O&&AC(tf(E.fullPath,0))||(q||!O)&&history.state&&history.state.scroll||null;return Il().then(()=>_e(E,B,Se)).then(oe=>oe&&CC(oe)).catch(oe=>Te(oe,E,B))}const en=E=>r.go(E);let jt;const St=new Set;return{currentRoute:c,addRoute:p,removeRoute:v,hasRoute:_,getRoutes:b,resolve:x,options:t,push:L,replace:V,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:ye,install(E){const B=this;E.component("RouterLink",dk),E.component("RouterView",gk),E.config.globalProperties.$router=B,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(c)}),ks&&!jt&&c.value===_n&&(jt=!0,L(r.location).catch(_e=>{}));const O={};for(const _e in _n)O[_e]=Ut(()=>c.value[_e]);E.provide(La,B),E.provide(Hu,nr(O)),E.provide(ol,c);const q=E.unmount;St.add(E),E.unmount=function(){St.delete(E),St.size<1&&(l=_n,Re&&Re(),Re=null,c.value=_n,jt=!1,Fe=!1),q()}}}}function Ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function yk(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ys(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ys(l,c))||r.push(c))}return[n,s,r]}function bs(){return Vt(La)}function Fa(){return Vt(Hu)}const _k={class:"app"},bk={__name:"App",setup(t){const e=Fa(),n=bs(),s=Xe(null),r=Xe(!1),i=()=>{if(e.name==="Login"||e.name==="Register"){s.value=!1;return}s.value=!0},o=()=>{Cw(gs).then(()=>{alert("logged out successfully")})};let a="";const c=()=>{n.push(`/user/${a}`)},l=gn(),u=l.products;return wo(()=>{l.getAllProducts(u)}),wo(()=>{Yp(gs,h=>{h?(r.value=!0,a=h.uid):r.value=!1})}),Wy(i),(h,d)=>{const p=hi("router-view");return ce(),ve("div",_k,[s.value?(ce(),Ms(cC,{key:0,isLogged:r.value,onSign_out:o,onTo_user_view:c},null,8,["isLogged"])):Hr("",!0),(ce(),Ms(By,null,{default:mt(()=>[fe(p)]),_:1})),s.value?(ce(),Ms(pC,{key:1})):Hr("",!0)])}}};const Ku=t=>(fn("data-v-4024f94b"),t=t(),pn(),t),wk={class:"hero"},Ek={class:"slider"},Ik={class:"container"},Tk={class:"info"},Sk={class:"info-content"},xk={class:"top-down"},Ck={class:"top-down trans-delay-0-2"},kk={class:"top-down trans-delay-0-4"},Ak={class:"top-down trans-delay-0-6"},Rk=["onClick"],Nk=Ku(()=>g("span",null,"shop now",-1)),Dk=[Nk],Ok={class:"img top-down"},Pk=["src"],Mk=Ku(()=>g("span",{class:"material-icons"},"navigate_next",-1)),Lk=[Mk],Uk=Ku(()=>g("span",{class:"material-icons"},"navigate_before",-1)),Fk=[Uk],$k={__name:"HeroSection",setup(t){const n=gn().getHeroProduct,s=bs();Fa();const r=c=>{s.push(`/product/${c}`)},i=Xe(0),o=()=>i.value=i.value+1===n.length?0:i.value+1,a=()=>i.value=i.value-1<0?n.length-1:i.value-1;return(c,l)=>(ce(),ve("div",wk,[g("div",Ek,[g("div",Ik,[(ce(!0),ve(rt,null,sr(ot(n),(u,h)=>(ce(),ve("div",{class:Js(["slide",h==i.value?"active":""]),key:h},[g("div",Tk,[g("div",Sk,[g("h3",xk,$e(u.title),1),g("h2",Ck,$e(u.slogan),1),g("p",kk,$e(u.description),1),g("div",Ak,[g("button",{class:"btn-flat btn-hover",onClick:d=>r(u.title)},Dk,8,Rk)])])]),g("div",Ok,[g("img",{src:u.images[0]},null,8,Pk)])],2))),128))]),g("button",{class:"slide-controll slide-next",onClick:o},Lk),g("button",{class:"slide-controll slide-prev",onClick:a},Fk)])]))}};var Vk=Tt($k,[["__scopeId","data-v-4024f94b"]]);const Rv=t=>(fn("data-v-a668338c"),t=t(),pn(),t),Bk={class:"col-3 col-md-6 col-sm-12"},jk={class:"product-card"},qk={class:"product-card-img"},Hk=["src"],zk={class:"product-card-info"},Kk=Rv(()=>g("button",{class:"btn-flat btn-hover btn-cart-add"},[g("span",{class:"material-icons"},"add_shopping_cart")],-1)),Wk=Rv(()=>g("button",{class:"btn-flat btn-hover btn-cart-add"},[g("span",{class:"material-icons"},"favorite")],-1)),Gk={class:"product-card-name"},Qk={class:"product-card-price"},Yk={key:0},Xk={class:"curr-price"},Jk={__name:"ProductCard",props:["product"],setup(t){const e=t;Fa();const n=bs(),s=()=>{n.push(`/product/${e.product.title}`)};return(r,i)=>(ce(),ve("div",Bk,[g("div",jk,[g("div",qk,[(ce(!0),ve(rt,null,sr(t.product.images,(o,a)=>(ce(),ve("img",{src:o,alt:"",key:a},null,8,Hk))),128))]),g("div",zk,[g("div",{class:"product-btn"},[g("button",{onClick:s,class:"btn-flat btn-hover btn-shop-now"},"shop now"),Kk,Wk]),g("div",Gk,$e(t.product.title),1),g("div",Qk,[t.product.discountPercentage?(ce(),ve("span",Yk,"%"+$e(t.product.discountPercentage),1)):Hr("",!0),g("span",null,[g("del",null,$e(t.product.price+t.product.discountPercentage*t.product.price/100),1)]),g("span",Xk,"$"+$e(t.product.price),1)])])])]))}};var Nv=Tt(Jk,[["__scopeId","data-v-a668338c"]]);const Zk={class:"section"},eA={class:"container"},tA={class:"section-header"},nA={class:"row",id:"latest-products"},sA={class:"section-footer"},rA=Me("view all"),iA={__name:"ProductsList",props:["title","products"],setup(t){return(e,n)=>{const s=hi("router-link");return ce(),ve("div",Zk,[g("div",eA,[g("div",tA,[g("h2",null,$e(t.title),1)]),g("div",nA,[(ce(!0),ve(rt,null,sr(t.products,(r,i)=>(ce(),Ms(Nv,{key:i,product:r},null,8,["product"]))),128))]),g("div",sA,[fe(s,{to:{name:"AllProducts"},class:"btn-flat btn-hover"},{default:mt(()=>[rA]),_:1})])])])}}};var pf=Tt(iA,[["__scopeId","data-v-42832d38"]]);const oA={class:"bg-second"},aA={class:"row"},cA={class:"col-4 col-md-4"},lA={class:"sp-item-img"},uA=["src"],hA={class:"col-7 col-md-8"},dA={class:"sp-item-info"},fA={class:"sp-item-name"},pA={class:"sp-item-description"},mA=["onClick"],gA={__name:"SpecialProduct",setup(t){const e=gn(),n=bs(),s=e.getSpecialProduct,r=i=>{n.push(`/product/${i}`)};return(i,o)=>(ce(),ve("div",oA,[(ce(!0),ve(rt,null,sr(ot(s),(a,c)=>(ce(),ve("div",{class:"section container",key:c},[g("div",aA,[g("div",cA,[g("div",lA,[g("img",{src:a.images[0],alt:""},null,8,uA)])]),g("div",hA,[g("div",dA,[g("div",fA,$e(a.title),1),g("p",pA,$e(a.description),1),g("button",{onClick:l=>r(a.title),class:"btn-flat btn-hover"},"shop now",8,mA)])])])]))),128))]))}};var vA=Tt(gA,[["__scopeId","data-v-31cb87fc"]]);const yA={class:"home"},_A={__name:"Home",setup(t){const e=gn(),n=e.getBestSellingProduct,s=e.getHeroProduct;return(r,i)=>(ce(),ve("div",yA,[fe(Vk),fe(pf,{title:"lastest product",products:ot(s)},null,8,["products"]),fe(vA),fe(pf,{title:"best selling",products:ot(n)},null,8,["products"])]))}};const bA=t=>(fn("data-v-e16bfc6c"),t=t(),pn(),t),wA={class:"bg-main"},EA={class:"container"},IA={class:"box"},TA={class:"row"},SA=di('<div class="col-3 filter-col" id="filter-col" data-v-e16bfc6c><div class="box filter-toggle-box" data-v-e16bfc6c><button class="btn-flat btn-hover" id="filter-close" data-v-e16bfc6c>close</button></div><div class="box" data-v-e16bfc6c><span class="filter-header" data-v-e16bfc6c> Categories </span><ul class="filter-list" data-v-e16bfc6c><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>Keyboard</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>Mouse</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>Monitor</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>Headphone</a></li></ul></div><div class="box" data-v-e16bfc6c><span class="filter-header" data-v-e16bfc6c> Price </span><div class="price-range" data-v-e16bfc6c><input type="text" data-v-e16bfc6c><span data-v-e16bfc6c>-</span><input type="text" data-v-e16bfc6c></div></div><div class="box" data-v-e16bfc6c><ul class="filter-list" data-v-e16bfc6c><li data-v-e16bfc6c><div class="group-checkbox" data-v-e16bfc6c><input type="checkbox" id="status1" data-v-e16bfc6c><label for="status1" data-v-e16bfc6c> On sale <span class="material-icons" data-v-e16bfc6c>done</span></label></div></li><li data-v-e16bfc6c><div class="group-checkbox" data-v-e16bfc6c><input type="checkbox" id="status2" data-v-e16bfc6c><label for="status2" data-v-e16bfc6c> In stock <span class="material-icons" data-v-e16bfc6c>done</span></label></div></li><li data-v-e16bfc6c><div class="group-checkbox" data-v-e16bfc6c><input type="checkbox" id="status3" data-v-e16bfc6c><label for="status3" data-v-e16bfc6c> Featured <span class="material-icons" data-v-e16bfc6c>done</span></label></div></li></ul></div></div>',1),xA={class:"col-9 col-md-12"},CA=bA(()=>g("div",{class:"box filter-toggle-box"},[g("button",{class:"btn-flat btn-hover",id:"filter-toggle"},"filter")],-1)),kA={class:"box"},AA={class:"row",id:"products"},RA=di('<div class="box" data-v-e16bfc6c><ul class="pagination" data-v-e16bfc6c><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c><span class="material-icons" data-v-e16bfc6c>chevron_left</span></a></li><li data-v-e16bfc6c><a href="#" class="active" data-v-e16bfc6c>1</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>2</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>3</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>4</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c>5</a></li><li data-v-e16bfc6c><a href="#" data-v-e16bfc6c><span class="material-icons" data-v-e16bfc6c>chevron_right</span></a></li></ul></div>',1),NA={__name:"AllProducts",setup(t){const n=gn().products;return(s,r)=>(ce(),ve("div",wA,[g("div",EA,[g("div",IA,[g("div",TA,[SA,g("div",xA,[CA,g("div",kA,[g("div",AA,[(ce(!0),ve(rt,null,sr(ot(n),(i,o)=>(ce(),Ms(Nv,{key:o,product:i},null,8,["product"]))),128))])]),RA])])])])]))}};var DA=Tt(NA,[["__scopeId","data-v-e16bfc6c"]]);const Vi=t=>(fn("data-v-6d90a135"),t=t(),pn(),t),OA={class:"bg-main"},PA={class:"container"},MA={class:"row product-row"},LA={class:"col-5 col-md-12"},UA={class:"product-img",id:"product-img"},FA=["src"],$A={class:"box"},VA={class:"product-img-list"},BA={class:"product-img-item"},jA=["src"],qA={class:"product-img-item"},HA=["src"],zA={class:"col-7 col-md-12"},KA={class:"product-info"},WA={class:"product-info-detail"},GA=Vi(()=>g("span",{class:"product-info-detail-title"},"Brand: ",-1)),QA={href:"#"},YA={class:"product-description"},XA={class:"product-info-price"},JA={class:"product-quantity-wrapper"},ZA={class:"product-quantity"},eR=["onClick"],tR={class:"box"},nR=Vi(()=>g("div",{class:"box-header"}," description ",-1)),sR={class:"product-detail-description"},rR=Vi(()=>g("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium obcaecati odit dolorem, doloremque accusamus esse neque ipsa dignissimos saepe quisquam tempore perferendis deserunt sapiente! Recusandae illum totam earum ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt maxime rerum reprehenderit voluptas asperiores ipsam quas consequuntur maiores, at odit obcaecati vero sunt! Reiciendis aperiam perferendis consequuntur odio quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat eum veniam doloremque nihil repudiandae odio ratione culpa libero tempora. Expedita, quo molestias. Minus illo quis dignissimos aliquid sapiente error! ",-1)),iR=["src"],oR=Vi(()=>g("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officia, quae fuga in exercitationem aliquam labore ex doloribus repellendus beatae facilis ipsam. Veritatis vero obcaecati iste atque aspernatur ducimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam praesentium id sit amet magnam ad, dolorum, cumque iste optio itaque expedita eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in corrupti ipsam sint error possimus commodi incidunt suscipit sit voluptatum quibusdam enim eligendi animi deserunt recusandae earum natus voluptas blanditiis? ",-1)),aR=["src"],cR=Vi(()=>g("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam fugit veniam ipsum recusandae incidunt, ex ratione, magnam labore ad tenetur officia! In, totam. Molestias sapiente deserunt animi porro? ",-1)),lR={__name:"ProductDetail",props:["id"],async setup(t){let e,n;const s=t,r=gn(),i=Xe({}),o=Bu(Fi($i,"products"),pv("title","==",s.id)),a=Xe(!1),c=()=>{a.value=!a.value};([e,n]=$_(()=>ju(o)),e=await e,n(),e).forEach(b=>{i.value=b.data()});const u=Xe(0),h=()=>u.value++,d=()=>u.value--?u.value>0:u.value=0,p=r.cart,v=()=>{u.value>0&&p.push({product:i,quantity:u})};return(b,_)=>(ce(),ve("div",OA,[g("div",PA,[g("div",MA,[g("div",LA,[g("div",UA,[g("img",{src:i.value.images[0],alt:""},null,8,FA)]),g("div",$A,[g("div",VA,[g("div",BA,[g("img",{src:i.value.images[0],alt:""},null,8,jA)]),g("div",qA,[g("img",{src:i.value.images[1],alt:""},null,8,HA)])])])]),g("div",zA,[g("div",KA,[g("h1",null,$e(i.value.title),1),g("div",WA,[GA,g("a",QA,$e(i.value.brand),1)]),g("p",YA,$e(i.value.description),1),g("div",XA,$e(i.value.price)+"$",1),g("div",JA,[g("span",{class:"material-icons",onClick:d},"remove"),g("span",ZA,$e(u.value),1),g("span",{class:"material-icons",onClick:h},"add")]),g("div",null,[g("button",{class:"btn-flat btn-hover",onClick:os(v,["prevent"])},"add to cart",8,eR)])])])]),g("div",tR,[nR,g("div",sR,[g("button",{class:"btn-flat btn-hover btn-view-description",id:"view-all-description",onClick:c}," view all "),g("div",{class:Js(["product-detail-description-content",a.value==!0?"active":""])},[rR,g("img",{src:i.value.images[0],alt:""},null,8,iR),oR,g("img",{src:i.value.images[1],alt:""},null,8,aR),cR],2)])])])]))}};var uR=Tt(lR,[["__scopeId","data-v-6d90a135"]]);const hR={},dR={class:"blogs"};function fR(t,e,n,s,r,i){return ce(),ve("div",dR," this is blog page ")}var pR=Tt(hR,[["render",fR]]);const Dv=t=>(fn("data-v-064c0c12"),t=t(),pn(),t),mR={class:"login"},gR=["onSubmit"],vR=Dv(()=>g("h1",null,"Login",-1)),yR=Dv(()=>g("input",{type:"submit",value:"Login"},null,-1)),_R=Me("No account? Please "),bR=Me("Register"),wR=Me(" first."),ER={__name:"Login",setup(t){const e=Xe(""),n=Xe(""),s=bs(),r=async()=>{xw(gs,e.value,n.value).then(i=>{i.user,s.push("/")}).catch(i=>{console.log(i.message)})};return(i,o)=>{const a=hi("router-link");return ce(),ve("div",mR,[g("form",{onSubmit:os(r,["prevent"])},[vR,st(g("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c)},null,512),[[Ct,e.value]]),st(g("input",{type:"password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c)},null,512),[[Ct,n.value]]),yR,g("p",null,[_R,fe(a,{to:{name:"Register"}},{default:mt(()=>[bR]),_:1}),wR])],40,gR)])}}};var IR=Tt(ER,[["__scopeId","data-v-064c0c12"]]);const TR=_p({id:"auth",state:()=>({currentUser:{firstName:"",lastName:"",email:"",phoneNumber:""}})});const $a=t=>(fn("data-v-8bc4163e"),t=t(),pn(),t),SR={class:"profile"},xR={class:"profile-info"},CR=$a(()=>g("h1",null,"Infomation",-1)),kR={class:"profile-form"},AR=$a(()=>g("label",{for:"name"},"Name",-1)),RR=["value"],NR=$a(()=>g("label",{for:"email"},"Email",-1)),DR=["value"],OR=$a(()=>g("label",{for:"phone-number"},"Phone Number",-1)),PR=["value"],MR={__name:"UserView",props:["id"],setup(t){Fa();const e=bs();gn().cart;const r=TR().currentUser;return Xe(""),Yp(gs,async i=>{if(i){const o=Bu(Fi($i,"users"),pv("email","==",i.email));(await ju(o)).forEach(c=>{r.firstName=c.data().firstName,r.lastName=c.data().lastName,r.email=c.data().email,r.phoneNumber=c.data().phoneNumber})}else e.push("/")}),(i,o)=>(ce(),ve("div",SR,[g("div",xR,[CR,g("form",kR,[AR,g("input",{type:"text",value:ot(r).firstName+" "+ot(r).lastName},null,8,RR),NR,g("input",{type:"text",value:ot(r).email},null,8,DR),OR,g("input",{type:"text",value:ot(r).phoneNumber},null,8,PR),g("button",{onClick:o[0]||(o[0]=os((...a)=>i.updateAvatar&&i.updateAvatar(...a),["prevent"]))},"Save Changes")])])]))}};var LR=Tt(MR,[["__scopeId","data-v-8bc4163e"]]);const Ov=t=>(fn("data-v-921da476"),t=t(),pn(),t),UR={class:"register"},FR=["onSubmit"],$R=Ov(()=>g("h1",null,"Register",-1)),VR=Ov(()=>g("input",{type:"submit",value:"Register"},null,-1)),BR=Me("Go to "),jR=Me("Home"),qR=Me("."),HR={__name:"Register",setup(t){const e=bs(),n=Xe({firstName:"",lastName:"",phoneNumber:"",email:"",password:""}),s=async()=>{if(n.value.firstName!==""&&n.value.lastName!==""&&n.value.phoneNumber!==""&&n.value.email!==""&&n.value.password!==""){Sw(gs,n.value.email,n.value.password),mv(Fi($i,"users"),{firstName:n.value.firstName,lastName:n.value.lastName,phoneNumber:n.value.phoneNumber,email:n.value.email}),e.push({name:"Home"});return}};return(r,i)=>{const o=hi("router-link");return ce(),ve("div",UR,[g("form",{onSubmit:os(s,["prevent"])},[$R,st(g("input",{type:"text",placeholder:"First Name","onUpdate:modelValue":i[0]||(i[0]=a=>n.value.firstName=a)},null,512),[[Ct,n.value.firstName]]),st(g("input",{type:"text",placeholder:"Last Name","onUpdate:modelValue":i[1]||(i[1]=a=>n.value.lastName=a)},null,512),[[Ct,n.value.lastName]]),st(g("input",{type:"text",placeholder:"Phone Number","onUpdate:modelValue":i[2]||(i[2]=a=>n.value.phoneNumber=a)},null,512),[[Ct,n.value.phoneNumber]]),st(g("input",{type:"email",placeholder:"Email","onUpdate:modelValue":i[3]||(i[3]=a=>n.value.email=a)},null,512),[[Ct,n.value.email]]),st(g("input",{type:"password",placeholder:"Password","onUpdate:modelValue":i[4]||(i[4]=a=>n.value.password=a)},null,512),[[Ct,n.value.password]]),VR,g("p",null,[BR,fe(o,{to:{name:"Home"}},{default:mt(()=>[jR]),_:1}),qR])],40,FR)])}}};var zR=Tt(HR,[["__scopeId","data-v-921da476"]]);const Ot=t=>(fn("data-v-14092739"),t=t(),pn(),t),KR={class:"checkoutScreen"},WR={class:"checkOutCard"},GR={class:"billing"},QR=Ot(()=>g("h3",{class:"title"},[g("span",{class:"material-icons"},"done"),Me("Checkout")],-1)),YR=Ot(()=>g("hr",null,null,-1)),XR={class:"sections"},JR={class:"section"},ZR={class:"content"},eN={class:"name"},tN={class:"location"},nN={action:"",class:"deliveryMethods"},sN=Ot(()=>g("div",{class:"method"},[g("h5"),g("h5",null,"Method"),g("h5",null,"Time"),g("h5",null,"Cost")],-1)),rN={class:"method"},iN=Ot(()=>g("h6",null,"Standard",-1)),oN=Ot(()=>g("h6",null,"5-7 days",-1)),aN=Ot(()=>g("h6",null,"FREE",-1)),cN={class:"method"},lN=Ot(()=>g("h6",null,"Express",-1)),uN=Ot(()=>g("h6",null,"1-3 days",-1)),hN=Ot(()=>g("h6",null,"$5.99",-1)),dN={key:0,class:"error-msg"},fN=Ot(()=>g("hr",null,null,-1)),pN=["onClick"],mN={class:"check"},gN=Ot(()=>g("h3",{class:"title"},[g("span",{class:"material-icons"},"shopping_cart"),Me("Your Order")],-1)),vN=Ot(()=>g("hr",null,null,-1)),yN=["src"],_N={__name:"Checkout",props:["id"],setup(t){const e=gn(),n=e.cart;e.orders;const s=Xe(null),r=Xe({email:"",firstName:"",lastName:"",address:"",phoneNumber:""}),i=Xe(""),o=()=>{r.value.email="",r.value.firstName="",r.value.lastName="",r.value.address="",r.value.phoneNumber=""},a=async()=>{n.length>0?r.value.email!=""&&r.value.firstName!=""&&r.value.lastName!=""&&r.value.phoneNumber!=""?(s.value=!1,await mv(Fi($i,"orders"),{timestamp:JS(),customerInfo:r.value,cart:n,deliveryMethod:i.value}),alert("successful ordered!")):s.value=!0:alert("There is no cart!"),o()};return(c,l)=>(ce(),ve("section",KR,[g("div",WR,[g("div",GR,[QR,YR,g("div",XR,[g("div",JR,[g("div",ZR,[g("form",{action:"",class:Js(["deliveryInfo",s.value==!0?"error":""])},[st(g("input",{class:"email",type:"email",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=u=>r.value.email=u)},null,512),[[Ct,r.value.email]]),g("div",eN,[st(g("input",{type:"text",placeholder:"First Name","onUpdate:modelValue":l[1]||(l[1]=u=>r.value.firstName=u)},null,512),[[Ct,r.value.firstName]]),st(g("input",{type:"text",placeholder:"Last Name","onUpdate:modelValue":l[2]||(l[2]=u=>r.value.lastName=u)},null,512),[[Ct,r.value.lastName]])]),st(g("input",{type:"text",placeholder:"Address","onUpdate:modelValue":l[3]||(l[3]=u=>r.value.address=u)},null,512),[[Ct,r.value.address]]),g("div",tN,[st(g("input",{type:"text",placeholder:"Phone Number","onUpdate:modelValue":l[4]||(l[4]=u=>r.value.phoneNumber=u)},null,512),[[Ct,r.value.phoneNumber]])])],2),g("form",nN,[sN,g("div",rN,[st(g("input",{type:"radio",id:"standard",value:"standard","onUpdate:modelValue":l[5]||(l[5]=u=>i.value=u)},null,512),[[xh,i.value]]),iN,oN,aN]),g("div",cN,[st(g("input",{type:"radio",id:"express",value:"express","onUpdate:modelValue":l[6]||(l[6]=u=>i.value=u)},null,512),[[xh,i.value]]),lN,uN,hN]),Me(" "+$e(i.value),1)])]),s.value==!0?(ce(),ve("p",dN,"Please fill out all the field")):Hr("",!0)]),fN,g("button",{class:"btn-flat btn-hover",onClick:os(a,["prevent"])},"buy",8,pN)])]),g("div",mN,[gN,vN,(ce(!0),ve(rt,null,sr(ot(n),(u,h)=>(ce(),ve("div",{class:"cart",key:h},[g("img",{src:u.product.images,alt:"",style:{width:"50px",height:"50px"}},null,8,yN),Me(" "+$e(u.product.title)+" "+$e(u.quantity),1)]))),128))])])]))}};var bN=Tt(_N,[["__scopeId","data-v-14092739"]]);const wN=[{path:"/",name:"Home",component:_A},{path:"/all-products",name:"AllProducts",component:DA},{path:"/product/:id",name:"ProductDetail",component:uR,props:!0},{path:"/blogs",name:"Blogs",component:pR},{path:"/login",name:"Login",component:IR},{path:"/register",name:"Register",component:zR},{path:"/checkout",name:"Checkout",component:bN},{path:"/user/:id",name:"UserView",component:LR}],Pv=vk({history:OC(),routes:wN});Pv.beforeEach((t,e,n)=>{const s=t.matched.some(r=>r.meta.requiresAuth);s&&gs.currentUser.email==null?n("/"):(s&&gs.currentUser!=null,n())});const Wu=d0(bk);Wu.use(Pv);Wu.use(m0());Wu.mount("#app");
