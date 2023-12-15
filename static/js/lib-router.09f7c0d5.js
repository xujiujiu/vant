/*! For license information please see lib-router.09f7c0d5.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["1700"],{33611:function(e,t,n){"use strict";n.r(t),n.d(t,{createRouter:function(){return eC},createWebHashHistory:function(){return S}});var r,l,o,a,i,u,c=n("38613");let s="undefined"!=typeof window,f=Object.assign;function p(e,t){let n={};for(let r in t){let l=t[r];n[r]=d(l)?l.map(e):e(l)}return n}let h=()=>{},d=Array.isArray,m=/\/$/,g=e=>e.replace(m,"");function v(e,t,n="/"){let r,l={},o="",a="",i=t.indexOf("#"),u=t.indexOf("?");return i<u&&i>=0&&(u=-1),u>-1&&(r=t.slice(0,u),l=e(o=t.slice(u+1,i>-1?i:t.length))),i>-1&&(r=r||t.slice(0,i),a=t.slice(i,t.length)),{fullPath:(r=function(e,t){let n,r;if(e.startsWith("/"))return e;if(!e)return t;let l=t.split("/"),o=e.split("/"),a=o[o.length-1];(".."===a||"."===a)&&o.push("");let i=l.length-1;for(n=0;n<o.length;n++)if("."!==(r=o[n])){if(".."===r)i>1&&i--;else break}return l.slice(0,i).join("/")+"/"+o.slice(n-(n===o.length?1:0)).join("/")}(null!=r?r:t,n))+(o&&"?")+o+a,path:r,query:l,hash:a}}function y(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function b(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function w(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!function(e,t){return d(e)?E(e,t):d(t)?E(t,e):e===t}(e[n],t[n]))return!1;return!0}function E(e,t){return d(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}(r=a||(a={})).pop="pop",r.push="push",(l=i||(i={})).back="back",l.forward="forward",l.unknown="";let k=/^[^#]+#/;function O(e,t){return e.replace(k,"#")+t}let R=()=>({left:window.pageXOffset,top:window.pageYOffset});function C(e,t){return(history.state?history.state.position-t:-1)+e}let P=new Map,j=()=>location.protocol+"//"+location.host;function x(e,t){let{pathname:n,search:r,hash:l}=t,o=e.indexOf("#");if(o>-1){let t=l.includes(e.slice(o))?e.slice(o).length:1,n=l.slice(t);return"/"!==n[0]&&(n="/"+n),y(n,"")}return y(n,e)+r+l}function $(e,t,n,r=!1,l=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:l?R():null}}function S(e){return!(e=location.host?e||location.pathname+location.search:"").includes("#")&&(e+="#"),function(e){let t=function(e){let{history:t,location:n}=window,r={value:x(e,n)},l={value:t.state};function o(r,o,a){let i=e.indexOf("#"),u=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+r:j()+e+r;try{t[a?"replaceState":"pushState"](o,"",u),l.value=o}catch(e){console.error(e),n[a?"replace":"assign"](u)}}return!l.value&&o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:l,push:function(e,n){let a=f({},l.value,t.state,{forward:e,scroll:R()});o(a.current,a,!0);let i=f({},$(r.value,e,null),{position:a.position+1},n);o(e,i,!1),r.value=e},replace:function(e,n){let a=f({},t.state,$(l.value.back,e,l.value.forward,!0),n,{position:l.value.position});o(e,a,!0),r.value=e}}}(e=function(e){if(!e){if(s){let t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/"}return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}(e)),n=function(e,t,n,r){let l=[],o=[],u=null,c=({state:o})=>{let c=x(e,location),s=n.value,f=t.value,p=0;if(o){if(n.value=c,t.value=o,u&&u===s){u=null;return}p=f?o.position-f.position:0}else r(c);l.forEach(e=>{e(n.value,s,{delta:p,type:a.pop,direction:p?p>0?i.forward:i.back:i.unknown})})};function s(){let{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:R()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:function(){u=n.value},listen:function(e){l.push(e);let t=()=>{let t=l.indexOf(e);t>-1&&l.splice(t,1)};return o.push(t),t},destroy:function(){for(let e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",s)}}}(e,t.state,t.location,t.replace),r=f({location:"",base:e,go:function(e,t=!0){!t&&n.pauseListeners(),history.go(e)},createHref:O.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(e)}function q(e){return"string"==typeof e||"symbol"==typeof e}let A={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},M=Symbol("");function L(e,t){return f(Error(),{type:e,[M]:!0},t)}function B(e,t){return e instanceof Error&&M in e&&(null==t||!!(e.type&t))}(o=u||(u={}))[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated";let G="[^/]+?",_={sensitive:!1,strict:!1,start:!0,end:!0},W=/[.+*?^${}()[\]/\\]/g;function I(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}let D={type:0,value:""},T=/[a-zA-Z0-9_]/;function U(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function F(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function H(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}let V=/#/g,z=/&/g,K=/\//g,Q=/=/g,X=/\?/g,Y=/\+/g,N=/%5B/g,Z=/%5D/g,J=/%5E/g,ee=/%60/g,et=/%7B/g,en=/%7C/g,er=/%7D/g,el=/%20/g;function eo(e){return encodeURI(""+e).replace(en,"|").replace(N,"[").replace(Z,"]")}function ea(e){return eo(e).replace(Y,"%2B").replace(el,"+").replace(V,"%23").replace(z,"%26").replace(ee,"`").replace(et,"{").replace(er,"}").replace(J,"^")}function ei(e){return null==e?"":eo(e).replace(V,"%23").replace(X,"%3F").replace(K,"%2F")}function eu(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ec(e){let t={};if(""===e||"?"===e)return t;let n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){let r=n[e].replace(Y," "),l=r.indexOf("="),o=eu(l<0?r:r.slice(0,l)),a=l<0?null:eu(r.slice(l+1));if(o in t){let e=t[o];!d(e)&&(e=t[o]=[e]),e.push(a)}else t[o]=a}return t}function es(e){let t="";for(let n in e){let r=e[n];if(n=ea(n).replace(Q,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(d(r)?r.map(e=>e&&ea(e)):[r&&ea(r)]).forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}let ef=Symbol(""),ep=Symbol(""),eh=Symbol(""),ed=Symbol(""),em=Symbol("");function eg(){let e=[];return{add:function(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function ev(e,t,n,r,l){let o=r&&(r.enterCallbacks[l]=r.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{let u=e=>{if(!1===e)i(L(4,{from:n,to:t}));else if(e instanceof Error)i(e);else{var u;if("string"==typeof(u=e)||u&&"object"==typeof u)i(L(2,{from:t,to:e}));else o&&r.enterCallbacks[l]===o&&"function"==typeof e&&o.push(e),a()}},c=Promise.resolve(e.call(r&&r.instances[l],t,n,u));e.length<3&&(c=c.then(u)),c.catch(e=>i(e))})}function ey(e,t,n,r){let l=[];for(let o of e)for(let e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e]){if(function(e){return"object"==typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}(a)){let i=(a.__vccOpts||a)[t];i&&l.push(ev(i,n,r,o,e))}else{let i=a();l.push(()=>i.then(l=>{var a;if(!l)return Promise.reject(Error(`Couldn't resolve component "${e}" at "${o.path}"`));let i=(a=l).__esModule||"Module"===a[Symbol.toStringTag]?l.default:l;o.components[e]=i;let u=(i.__vccOpts||i)[t];return u&&ev(u,n,r,o,e)()}))}}}return l}function eb(e){let t=(0,c.inject)(eh),n=(0,c.inject)(ed),r=(0,c.computed)(()=>t.resolve((0,c.unref)(e.to))),l=(0,c.computed)(()=>{let{matched:e}=r.value,{length:t}=e,l=e[t-1],o=n.matched;if(!l||!o.length)return -1;let a=o.findIndex(b.bind(null,l));if(a>-1)return a;let i=eE(e[t-2]);return t>1&&eE(l)===i&&o[o.length-1].path!==i?o.findIndex(b.bind(null,e[t-2])):a}),o=(0,c.computed)(()=>l.value>-1&&function(e,t){for(let n in t){let r=t[n],l=e[n];if("string"==typeof r){if(r!==l)return!1}else if(!d(l)||l.length!==r.length||r.some((e,t)=>e!==l[t]))return!1}return!0}(n.params,r.value.params)),a=(0,c.computed)(()=>l.value>-1&&l.value===n.matched.length-1&&w(n.params,r.value.params));return{route:r,href:(0,c.computed)(()=>r.value.href),isActive:o,isExactActive:a,navigate:function(n={}){return function(e){if(!e.metaKey&&!e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.defaultPrevented){if(void 0===e.button||0===e.button){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}}(n)?t[(0,c.unref)(e.replace)?"replace":"push"]((0,c.unref)(e.to)).catch(h):Promise.resolve()}}}let ew=(0,c.defineComponent)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eb,setup(e,{slots:t}){let n=(0,c.reactive)(eb(e)),{options:r}=(0,c.inject)(eh),l=(0,c.computed)(()=>({[ek(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ek(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{let r=t.default&&t.default(n);return e.custom?r:(0,c.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},r)}}});function eE(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}let ek=(e,t,n)=>null!=e?e:null!=t?t:n,eO=(0,c.defineComponent)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=(0,c.inject)(em),l=(0,c.computed)(()=>e.route||r.value),o=(0,c.inject)(ep,0),a=(0,c.computed)(()=>{let e,t=(0,c.unref)(o),{matched:n}=l.value;for(;(e=n[t])&&!e.components;)t++;return t}),i=(0,c.computed)(()=>l.value.matched[a.value]);(0,c.provide)(ep,(0,c.computed)(()=>a.value+1)),(0,c.provide)(ef,i),(0,c.provide)(em,l);let u=(0,c.ref)();return(0,c.watch)(()=>[u.value,i.value,e.name],([e,t,n],[r,l,o])=>{t&&(t.instances[n]=e,l&&l!==t&&e&&e===r&&(!t.leaveGuards.size&&(t.leaveGuards=l.leaveGuards),!t.updateGuards.size&&(t.updateGuards=l.updateGuards))),e&&t&&(!l||!b(t,l)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{let r=l.value,o=e.name,a=i.value,s=a&&a.components[o];if(!s)return eR(n.default,{Component:s,route:r});let p=a.props[o],h=p?!0===p?r.params:"function"==typeof p?p(r):p:null,d=(0,c.h)(s,f({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:u}));return eR(n.default,{Component:d,route:r})||d}}});function eR(e,t){if(!e)return null;let n=e(t);return 1===n.length?n[0]:n}function eC(e){let t,n,r;let l=function(e,t){let n=[],r=new Map;t=H({strict:!1,end:!0,sensitive:!1},t);function l(e,a,i){let u,c;let s=!i,p=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:function(e){let t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="object"==typeof n?n[r]:n;return t}(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);p.aliasOf=i&&i.record;let m=H(t,e),g=[p];if("alias"in e)for(let t of"string"==typeof e.alias?[e.alias]:e.alias)g.push(f({},p,{components:i?i.record.components:p.components,path:t,aliasOf:i?i.record:p}));for(let t of g){let{path:h}=t;if(a&&"/"!==h[0]){let e=a.record.path,n="/"===e[e.length-1]?"":"/";t.path=a.record.path+(h&&n+h)}if(u=function(e,t,n){let r=function(e,t){let n=f({},_,t),r=[],l=n.start?"^":"",o=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(l+="/");for(let r=0;r<t.length;r++){let a=t[r],i=40+(n.sensitive?.25:0);if(0===a.type)!r&&(l+="/"),l+=a.value.replace(W,"\\$&"),i+=40;else if(1===a.type){let{value:e,repeatable:n,optional:u,regexp:c}=a;o.push({name:e,repeatable:n,optional:u});let s=c||G;if(s!==G){i+=10;try{RegExp(`(${s})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${s}): `+t.message)}}let f=n?`((?:${s})(?:/(?:${s}))*)`:`(${s})`;!r&&(f=u&&t.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),l+=f,i+=20,u&&(i+=-8),n&&(i+=-20),".*"===s&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}!n.strict&&(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");let a=new RegExp(l,n.sensitive?"":"i");return{re:a,score:r,keys:o,parse:function(e){let t=e.match(a),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||"",l=o[e-1];n[l.name]=r&&l.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(let l of e)for(let e of((!r||!n.endsWith("/"))&&(n+="/"),r=!1,l))if(0===e.type)n+=e.value;else if(1===e.type){let{value:o,repeatable:a,optional:i}=e,u=o in t?t[o]:"";if(d(u)&&!a)throw Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);let c=d(u)?u.join("/"):u;if(!c){if(i)l.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${o}"`)}n+=c}return n||"/"}}}(function(e){let t,n;if(!e)return[[]];if("/"===e)return[[D]];if(!e.startsWith("/"))throw Error(`Invalid path "${e}"`);function r(e){throw Error(`ERR (${l})/"${c}": ${e}`)}let l=0,o=0,a=[];function i(){t&&a.push(t),t=[]}let u=0,c="",s="";function f(){c&&(0===l?t.push({type:0,value:c}):1===l||2===l||3===l?(t.length>1&&("*"===n||"+"===n)&&r(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:c,regexp:s,repeatable:"*"===n||"+"===n,optional:"*"===n||"?"===n})):r("Invalid state to consume buffer"),c="")}function p(){c+=n}for(;u<e.length;){if("\\"===(n=e[u++])&&2!==l){o=l,l=4;continue}switch(l){case 0:"/"===n?(c&&f(),i()):":"===n?(f(),l=1):c+=n;break;case 4:c+=n,l=o;break;case 1:"("===n?l=2:T.test(n)?c+=n:(f(),l=0,"*"!==n&&"?"!==n&&"+"!==n&&u--);break;case 2:")"===n?"\\"==s[s.length-1]?s=s.slice(0,-1)+n:l=3:s+=n;break;case 3:f(),l=0,"*"!==n&&"?"!==n&&"+"!==n&&u--,s="";break;default:r("Unknown state")}}return 2===l&&r(`Unfinished custom RegExp for param "${c}"`),f(),i(),a}(e.path),n),l=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}(t,a,m),i?i.alias.push(u):((c=c||u)!==u&&c.alias.push(u),s&&e.name&&!F(u)&&o(e.name)),p.children){let e=p.children;for(let t=0;t<e.length;t++)l(e[t],u,i&&i.children[t])}i=i||u,(u.record.components&&Object.keys(u.record.components).length||u.record.name||u.record.redirect)&&function(e){let t=0;for(;t<n.length&&function(e,t){let n=0,r=e.score,l=t.score;for(;n<r.length&&n<l.length;){let e=function(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}(r[n],l[n]);if(e)return e;n++}if(1===Math.abs(l.length-r.length)){if(I(r))return 1;if(I(l))return -1}return l.length-r.length}(e,n[t])>=0&&(e.record.path!==n[t].record.path||!function e(t,n){return n.children.some(n=>n===t||e(t,n))}(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!F(e)&&r.set(e.record.name,e)}(u)}return c?()=>{o(c)}:h}function o(e){if(q(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}return e.forEach(e=>l(e)),{addRoute:l,resolve:function(e,t){let l,o,a;let i={};if("name"in e&&e.name){if(!(l=r.get(e.name)))throw L(1,{location:e});a=l.record.name,i=f(U(t.params,l.keys.filter(e=>!e.optional).map(e=>e.name)),e.params&&U(e.params,l.keys.map(e=>e.name))),o=l.stringify(i)}else if("path"in e)o=e.path,(l=n.find(e=>e.re.test(o)))&&(i=l.parse(o),a=l.record.name);else{if(!(l=t.name?r.get(t.name):n.find(e=>e.re.test(t.path))))throw L(1,{location:e,currentLocation:t});a=l.record.name,i=f({},t.params,e.params),o=l.stringify(i)}let u=[],c=l;for(;c;)u.unshift(c.record),c=c.parent;return{name:a,path:o,params:i,matched:u,meta:function(e){return e.reduce((e,t)=>f(e,t.meta),{})}(u)}},removeRoute:o,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}(e.routes,e),o=e.parseQuery||ec,i=e.stringifyQuery||es,u=e.history,m=eg(),g=eg(),y=eg(),E=(0,c.shallowRef)(A),k=A;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");let O=p.bind(null,e=>""+e),j=p.bind(null,ei),x=p.bind(null,eu);function $(e,t){let n;if(t=f({},t||E.value),"string"==typeof e){let n=v(o,e,t.path),r=l.resolve({path:n.path},t),a=u.createHref(n.fullPath);return f(n,r,{params:x(r.params),hash:eu(n.hash),redirectedFrom:void 0,href:a})}if("path"in e)n=f({},e,{path:v(o,e.path,t.path).path});else{let r=f({},e.params);for(let e in r)null==r[e]&&delete r[e];n=f({},e,{params:j(r)}),t.params=j(t.params)}let r=l.resolve(n,t),a=e.hash||"";r.params=O(x(r.params));let c=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,f({},e,{hash:eo(a).replace(et,"{").replace(er,"}").replace(J,"^"),path:r.path})),s=u.createHref(c);return f({fullPath:c,hash:a,query:i===es?function(e){let t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=d(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}(e.query):e.query||{}},r,{redirectedFrom:void 0,href:s})}function S(e){return"string"==typeof e?v(o,e,E.value.path):f({},e)}function M(e,t){if(k!==e)return L(8,{from:t,to:e})}function V(e){return K(e)}function z(e){let t=e.matched[e.matched.length-1];if(t&&t.redirect){let{redirect:n}=t,r="function"==typeof n?n(e):n;return"string"==typeof r&&((r=r.includes("?")||r.includes("#")?r=S(r):{path:r}).params={}),f({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function K(e,t){let n;let r=k=$(e),l=E.value,o=e.state,a=e.force,u=!0===e.replace,c=z(r);return c?K(f(S(c),{state:"object"==typeof c?f({},o,c.state):o,force:a,replace:u}),t||r):(r.redirectedFrom=t,!a&&function(e,t,n){let r=t.matched.length-1,l=n.matched.length-1;return r>-1&&r===l&&b(t.matched[r],n.matched[l])&&w(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,l,r)&&(n=L(16,{to:r,from:l}),ef(l,l,!0,!1)),(n?Promise.resolve(n):Y(r,l)).catch(e=>B(e)?B(e,2)?e:ea(e):el(e,r,l)).then(e=>{if(e){if(B(e,2))return K(f({replace:u},S(e.to),{state:"object"==typeof e.to?f({},o,e.to.state):o,force:a}),t||r)}else e=Z(r,l,!0,u,o);return N(r,l,e),e}))}function Q(e,t){let n=M(e,t);return n?Promise.reject(n):Promise.resolve()}function X(e){let t=eb.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function Y(e,t){let n;let[r,l,o]=function(e,t){let n=[],r=[],l=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){let o=t.matched[a];o&&(e.matched.find(e=>b(e,o))?r.push(o):n.push(o));let i=e.matched[a];i&&!t.matched.find(e=>b(e,i))&&l.push(i)}return[n,r,l]}(e,t);for(let l of(n=ey(r.reverse(),"beforeRouteLeave",e,t),r))l.leaveGuards.forEach(r=>{n.push(ev(r,e,t))});let a=Q.bind(null,e,t);return n.push(a),ek(n).then(()=>{for(let r of(n=[],m.list()))n.push(ev(r,e,t));return n.push(a),ek(n)}).then(()=>{for(let r of(n=ey(l,"beforeRouteUpdate",e,t),l))r.updateGuards.forEach(r=>{n.push(ev(r,e,t))});return n.push(a),ek(n)}).then(()=>{for(let r of(n=[],o))if(r.beforeEnter){if(d(r.beforeEnter))for(let l of r.beforeEnter)n.push(ev(l,e,t));else n.push(ev(r.beforeEnter,e,t))}return n.push(a),ek(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),(n=ey(o,"beforeRouteEnter",e,t)).push(a),ek(n))).then(()=>{for(let r of(n=[],g.list()))n.push(ev(r,e,t));return n.push(a),ek(n)}).catch(e=>B(e,8)?e:Promise.reject(e))}function N(e,t,n){y.list().forEach(r=>X(()=>r(e,t,n)))}function Z(e,t,n,r,l){let o=M(e,t);if(o)return o;let a=t===A,i=s?history.state:{};n&&(r||a?u.replace(e.fullPath,f({scroll:a&&i&&i.scroll},l)):u.push(e.fullPath,l)),E.value=e,ef(e,t,n,a),ea()}let ee=eg(),en=eg();function el(e,t,n){ea(e);let r=en.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ea(e){return!n&&(n=!e,t||(t=u.listen((e,t,n)=>{if(!eE.listening)return;let r=$(e),l=z(r);if(l){K(f(l,{replace:!0}),r).catch(h);return}k=r;let o=E.value;if(s){var i,c;i=C(o.fullPath,n.delta),c=R(),P.set(i,c)}Y(r,o).catch(e=>B(e,12)?e:B(e,2)?(K(e.to,r).then(e=>{B(e,20)&&!n.delta&&n.type===a.pop&&u.go(-1,!1)}).catch(h),Promise.reject()):(n.delta&&u.go(-n.delta,!1),el(e,r,o))).then(e=>{(e=e||Z(r,o,!1))&&(n.delta&&!B(e,8)?u.go(-n.delta,!1):n.type===a.pop&&B(e,20)&&u.go(-1,!1)),N(r,o,e)}).catch(h)})),ee.list().forEach(([t,n])=>e?n(e):t()),ee.reset()),e}function ef(t,n,r,l){let{scrollBehavior:o}=e;if(!s||!o)return Promise.resolve();let a=!r&&function(e){let t=P.get(e);return P.delete(e),t}(C(t.fullPath,0))||(l||!r)&&history.state&&history.state.scroll||null;return(0,c.nextTick)().then(()=>o(t,n,a)).then(e=>e&&function(e){let t;if("el"in e){let n=e.el,r="string"==typeof n&&n.startsWith("#"),l="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=function(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e)).catch(e=>el(e,t,n))}let ep=e=>u.go(e),eb=new Set,eE={currentRoute:E,listening:!0,addRoute:function(e,t){let n,r;return q(e)?(n=l.getRecordMatcher(e),r=t):r=e,l.addRoute(r,n)},removeRoute:function(e){let t=l.getRecordMatcher(e);t&&l.removeRoute(t)},hasRoute:function(e){return!!l.getRecordMatcher(e)},getRoutes:function(){return l.getRoutes().map(e=>e.record)},resolve:$,options:e,push:V,replace:function(e){return K(f(S(e),{replace:!0}))},go:ep,back:()=>ep(-1),forward:()=>ep(1),beforeEach:m.add,beforeResolve:g.add,afterEach:y.add,onError:en.add,isReady:function(){return n&&E.value!==A?Promise.resolve():new Promise((e,t)=>{ee.add([e,t])})},install(e){if(e.component("RouterLink",ew),e.component("RouterView",eO),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,c.unref)(E)}),s&&!r&&E.value===A)r=!0,K(u.location).catch(e=>{});let l={};for(let e in A)Object.defineProperty(l,e,{get:()=>E.value[e],enumerable:!0});e.provide(eh,this),e.provide(ed,(0,c.shallowReactive)(l)),e.provide(em,E);let o=e.unmount;eb.add(e),e.unmount=function(){eb.delete(e),eb.size<1&&(k=A,t&&t(),t=null,E.value=A,r=!1,n=!1),o()}}};function ek(e){return e.reduce((e,t)=>e.then(()=>X(t)),Promise.resolve())}return eE}}}]);