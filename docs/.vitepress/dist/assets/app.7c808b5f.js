import{d as F,f as A,e as D,h as J2,w as J,o as x,c as w,x as P,r as G,n as j,b as k,y as Z,D as X,a2 as li,z as e2,W as v1,t as C2,A as O,T as m1,a1 as Z4,a3 as fi,a4 as vi,C as T2,R as Q4,Q as O3,a as D3,a5 as u1,a6 as Z8,X as F1,v as J4,a7 as w3,a8 as mi,F as X2,a9 as ui,$ as A2,aa as pi,i as Q8,Y as Hi,B as hi,K as R3,ab as zi,ac as di,ad as Vi,ae as P0,af as Mi,ag as J8,I as y4,ah as Ci,ai as gi,aj as Li,ak as xi,al as bi,am as yi,an as Ni,ao as wi,ap as Si,aq as ki,ar as Ai,u as Ti,l as Pi,as as Bi,at as Fi,au as Oi}from"./chunks/framework.16f412ef.js";import{t as Di}from"./chunks/theme.da0a86ba.js";function B0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function y(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?B0(Object(e),!0).forEach(function(r){Y(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):B0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function S3(c){"@babel/helpers - typeof";return S3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S3(c)}function Ri(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function F0(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Ei(c,a,e){return a&&F0(c.prototype,a),e&&F0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function Y(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function c6(c,a){return $i(c)||Ui(c,a)||c5(c,a)||ji()}function W1(c){return _i(c)||Ii(c)||c5(c)||qi()}function _i(c){if(Array.isArray(c))return N4(c)}function $i(c){if(Array.isArray(c))return c}function Ii(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Ui(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function c5(c,a){if(c){if(typeof c=="string")return N4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N4(c,a)}}function N4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function qi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ji(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O0=function(){},a6={},a5={},e5=null,r5={mark:O0,measure:O0};try{typeof window<"u"&&(a6=window),typeof document<"u"&&(a5=document),typeof MutationObserver<"u"&&(e5=MutationObserver),typeof performance<"u"&&(r5=performance)}catch{}var Wi=a6.navigator||{},D0=Wi.userAgent,R0=D0===void 0?"":D0,P2=a6,q=a5,E0=e5,f3=r5;P2.document;var y2=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",s5=~R0.indexOf("MSIE")||~R0.indexOf("Trident/"),v3,m3,u3,p3,H3,g2="___FONT_AWESOME___",w4=16,n5="fa",i5="svg-inline--fa",Y2="data-fa-i2svg",S4="data-fa-pseudo-element",Gi="data-fa-pseudo-element-pending",e6="data-prefix",r6="data-icon",_0="fontawesome-i2svg",Xi="async",Yi=["HTML","HEAD","STYLE","SCRIPT"],t5=function(){try{return!0}catch{return!1}}(),U="classic",W="sharp",s6=[U,W];function G1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[U]}})}var O1=G1((v3={},Y(v3,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Y(v3,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),v3)),D1=G1((m3={},Y(m3,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Y(m3,W,{solid:"fass",regular:"fasr"}),m3)),R1=G1((u3={},Y(u3,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Y(u3,W,{fass:"fa-solid",fasr:"fa-regular"}),u3)),Ki=G1((p3={},Y(p3,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Y(p3,W,{"fa-solid":"fass","fa-regular":"fasr"}),p3)),Zi=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,o5="fa-layers-text",Qi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ji=G1((H3={},Y(H3,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Y(H3,W,{900:"fass",400:"fasr"}),H3)),l5=[1,2,3,4,5,6,7,8,9,10],ct=l5.concat([11,12,13,14,15,16,17,18,19,20]),at=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E1=new Set;Object.keys(D1[U]).map(E1.add.bind(E1));Object.keys(D1[W]).map(E1.add.bind(E1));var et=[].concat(s6,W1(E1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q2.GROUP,q2.SWAP_OPACITY,q2.PRIMARY,q2.SECONDARY]).concat(l5.map(function(c){return"".concat(c,"x")})).concat(ct.map(function(c){return"w-".concat(c)})),S1=P2.FontAwesomeConfig||{};function rt(c){var a=q.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function st(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(q&&typeof q.querySelector=="function"){var nt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nt.forEach(function(c){var a=c6(c,2),e=a[0],r=a[1],s=st(rt(e));s!=null&&(S1[r]=s)})}var f5={styleDefault:"solid",familyDefault:"classic",cssPrefix:n5,replacementClass:i5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};S1.familyPrefix&&(S1.cssPrefix=S1.familyPrefix);var p1=y(y({},f5),S1);p1.autoReplaceSvg||(p1.observeMutations=!1);var N={};Object.keys(f5).forEach(function(c){Object.defineProperty(N,c,{enumerable:!0,set:function(e){p1[c]=e,k1.forEach(function(r){return r(N)})},get:function(){return p1[c]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(a){p1.cssPrefix=a,k1.forEach(function(e){return e(N)})},get:function(){return p1.cssPrefix}});P2.FontAwesomeConfig=N;var k1=[];function it(c){return k1.push(c),function(){k1.splice(k1.indexOf(c),1)}}var S2=w4,H2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tt(c){if(!(!c||!y2)){var a=q.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=q.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return q.head.insertBefore(a,r),c}}var ot="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _1(){for(var c=12,a="";c-- >0;)a+=ot[Math.random()*62|0];return a}function C1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function n6(c){return c.classList?C1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function v5(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lt(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(v5(c[e]),'" ')},"").trim()}function E3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function i6(c){return c.size!==H2.size||c.x!==H2.x||c.y!==H2.y||c.rotate!==H2.rotate||c.flipX||c.flipY}function ft(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:l}}function vt(c){var a=c.transform,e=c.width,r=e===void 0?w4:e,s=c.height,n=s===void 0?w4:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&s5?o+="translate(".concat(a.x/S2-r/2,"em, ").concat(a.y/S2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/S2,"em), calc(-50% + ").concat(a.y/S2,"em)) "):o+="translate(".concat(a.x/S2,"em, ").concat(a.y/S2,"em) "),o+="scale(".concat(a.size/S2*(a.flipX?-1:1),", ").concat(a.size/S2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var mt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function m5(){var c=n5,a=i5,e=N.cssPrefix,r=N.replacementClass,s=mt;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var $0=!1;function h4(){N.autoAddCss&&!$0&&(tt(m5()),$0=!0)}var ut={mixout:function(){return{dom:{css:m5,insertCss:h4}}},hooks:function(){return{beforeDOMElementCreation:function(){h4()},beforeI2svg:function(){h4()}}}},L2=P2||{};L2[g2]||(L2[g2]={});L2[g2].styles||(L2[g2].styles={});L2[g2].hooks||(L2[g2].hooks={});L2[g2].shims||(L2[g2].shims=[]);var u2=L2[g2],u5=[],pt=function c(){q.removeEventListener("DOMContentLoaded",c),k3=1,u5.map(function(a){return a()})},k3=!1;y2&&(k3=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),k3||q.addEventListener("DOMContentLoaded",pt));function Ht(c){y2&&(k3?setTimeout(c,0):u5.push(c))}function X1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?v5(c):"<".concat(a," ").concat(lt(r),">").concat(n.map(X1).join(""),"</").concat(a,">")}function I0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var ht=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},z4=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=s!==void 0?ht(e,s):e,o,l,f;for(r===void 0?(o=1,f=a[n[0]]):(o=0,f=r);o<i;o++)l=n[o],f=t(f,a[l],l,a);return f};function zt(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function k4(c){var a=zt(c);return a.length===1?a[0].toString(16):null}function dt(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function U0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function A4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=U0(a);typeof u2.hooks.addPack=="function"&&!s?u2.hooks.addPack(c,U0(a)):u2.styles[c]=y(y({},u2.styles[c]||{}),n),c==="fas"&&A4("fa",a)}var h3,z3,d3,t1=u2.styles,Vt=u2.shims,Mt=(h3={},Y(h3,U,Object.values(R1[U])),Y(h3,W,Object.values(R1[W])),h3),t6=null,p5={},H5={},h5={},z5={},d5={},Ct=(z3={},Y(z3,U,Object.keys(O1[U])),Y(z3,W,Object.keys(O1[W])),z3);function gt(c){return~et.indexOf(c)}function Lt(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!gt(s)?s:null}var V5=function(){var a=function(n){return z4(t1,function(i,t,o){return i[o]=z4(t,n,{}),i},{})};p5=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),H5=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),d5=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var e="far"in t1||N.autoFetchSvg,r=z4(Vt,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});h5=r.names,z5=r.unicodes,t6=_3(N.styleDefault,{family:N.familyDefault})};it(function(c){t6=_3(c.styleDefault,{family:N.familyDefault})});V5();function o6(c,a){return(p5[c]||{})[a]}function xt(c,a){return(H5[c]||{})[a]}function j2(c,a){return(d5[c]||{})[a]}function M5(c){return h5[c]||{prefix:null,iconName:null}}function bt(c){var a=z5[c],e=o6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function B2(){return t6}var l6=function(){return{prefix:null,iconName:null,rest:[]}};function _3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?U:e,s=O1[r][c],n=D1[r][c]||D1[r][s],i=c in u2.styles?c:null;return n||i||null}var q0=(d3={},Y(d3,U,Object.keys(R1[U])),Y(d3,W,Object.keys(R1[W])),d3);function $3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},Y(a,U,"".concat(N.cssPrefix,"-").concat(U)),Y(a,W,"".concat(N.cssPrefix,"-").concat(W)),a),i=null,t=U;(c.includes(n[U])||c.some(function(l){return q0[U].includes(l)}))&&(t=U),(c.includes(n[W])||c.some(function(l){return q0[W].includes(l)}))&&(t=W);var o=c.reduce(function(l,f){var v=Lt(N.cssPrefix,f);if(t1[f]?(f=Mt[t].includes(f)?Ki[t][f]:f,i=f,l.prefix=f):Ct[t].indexOf(f)>-1?(i=f,l.prefix=_3(f,{family:t})):v?l.iconName=v:f!==N.replacementClass&&f!==n[U]&&f!==n[W]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var u=i==="fa"?M5(l.iconName):{},p=j2(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||p||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!t1.far&&t1.fas&&!N.autoFetchSvg&&(l.prefix="fas")}return l},l6());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===W&&(t1.fass||N.autoFetchSvg)&&(o.prefix="fass",o.iconName=j2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=B2()||"fas"),o}var yt=function(){function c(){Ri(this,c),this.definitions={}}return Ei(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=y(y({},e.definitions[t]||{}),i[t]),A4(t,i[t]);var o=R1[U][t];o&&A4(o,i[t]),V5()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,l=i.icon,f=l[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(v){typeof v=="string"&&(e[t][v]=l)}),e[t][o]=l}),e}}]),c}(),j0=[],o1={},l1={},Nt=Object.keys(l1);function wt(c,a){var e=a.mixoutsTo;return j0=c,o1={},Object.keys(l1).forEach(function(r){Nt.indexOf(r)===-1&&delete l1[r]}),j0.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),S3(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){o1[i]||(o1[i]=[]),o1[i].push(n[i])})}r.provides&&r.provides(l1)}),e}function T4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=o1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function K2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=o1[c]||[];s.forEach(function(n){n.apply(null,e)})}function x2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return l1[c]?l1[c].apply(null,a):void 0}function P4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||B2();if(a)return a=j2(e,a)||a,I0(C5.definitions,e,a)||I0(u2.styles,e,a)}var C5=new yt,St=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,K2("noAuto")},kt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return y2?(K2("beforeI2svg",a),x2("pseudoElements2svg",a),x2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Ht(function(){Tt({autoReplaceSvgRoot:e}),K2("watch",a)})}},At={icon:function(a){if(a===null)return null;if(S3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:j2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=_3(a[0]);return{prefix:r,iconName:j2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(N.cssPrefix,"-"))>-1||a.match(Zi))){var s=$3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||B2(),iconName:j2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=B2();return{prefix:n,iconName:j2(n,a)||a}}}},t2={noAuto:St,config:N,dom:kt,parse:At,library:C5,findIconDefinition:P4,toHtml:X1},Tt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?q:e;(Object.keys(u2.styles).length>0||N.autoFetchSvg)&&y2&&N.autoReplaceSvg&&t2.dom.i2svg({node:r})};function I3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return X1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(y2){var r=q.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Pt(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(i6(i)&&e.found&&!r.found){var t=e.width,o=e.height,l={x:t/o/2,y:.5};s.style=E3(y(y({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Bt(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(N.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:y(y({},s),{},{id:i}),children:r}]}]}function f6(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,l=c.maskId,f=c.titleId,v=c.extra,u=c.watchable,p=u===void 0?!1:u,C=r.found?r:e,h=C.width,z=C.height,m=s==="fak",V=[N.replacementClass,n?"".concat(N.cssPrefix,"-").concat(n):""].filter(function(S){return v.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(v.classes).join(" "),M={children:[],attributes:y(y({},v.attributes),{},{"data-prefix":s,"data-icon":n,class:V,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(z)})},H=m&&!~v.classes.indexOf("fa-fw")?{width:"".concat(h/z*16*.0625,"em")}:{};p&&(M.attributes[Y2]=""),o&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||_1())},children:[o]}),delete M.attributes.title);var L=y(y({},M),{},{prefix:s,iconName:n,main:e,mask:r,maskId:l,transform:i,symbol:t,styles:y(y({},H),v.styles)}),g=r.found&&e.found?x2("generateAbstractMask",L)||{children:[],attributes:{}}:x2("generateAbstractIcon",L)||{children:[],attributes:{}},d=g.children,b=g.attributes;return L.children=d,L.attributes=b,t?Bt(L):Pt(L)}function W0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,l=y(y(y({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[Y2]="");var f=y({},i.styles);i6(s)&&(f.transform=vt({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var v=E3(f);v.length>0&&(l.style=v);var u=[];return u.push({tag:"span",attributes:l,children:[a]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function Ft(c){var a=c.content,e=c.title,r=c.extra,s=y(y(y({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=E3(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var d4=u2.styles;function B4(c){var a=c[0],e=c[1],r=c.slice(4),s=c6(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(q2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(q2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(q2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Ot={found:!1,width:512,height:512};function Dt(c,a){!t5&&!N.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function F4(c,a){var e=a;return a==="fa"&&N.styleDefault!==null&&(a=B2()),new Promise(function(r,s){if(x2("missingIconAbstract"),e==="fa"){var n=M5(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&d4[a]&&d4[a][c]){var i=d4[a][c];return r(B4(i))}Dt(c,a),r(y(y({},Ot),{},{icon:N.showMissingIcons&&c?x2("missingIconAbstract")||{}:{}}))})}var G0=function(){},O4=N.measurePerformance&&f3&&f3.mark&&f3.measure?f3:{mark:G0,measure:G0},N1='FA "6.3.0"',Rt=function(a){return O4.mark("".concat(N1," ").concat(a," begins")),function(){return g5(a)}},g5=function(a){O4.mark("".concat(N1," ").concat(a," ends")),O4.measure("".concat(N1," ").concat(a),"".concat(N1," ").concat(a," begins"),"".concat(N1," ").concat(a," ends"))},v6={begin:Rt,end:g5},L3=function(){};function X0(c){var a=c.getAttribute?c.getAttribute(Y2):null;return typeof a=="string"}function Et(c){var a=c.getAttribute?c.getAttribute(e6):null,e=c.getAttribute?c.getAttribute(r6):null;return a&&e}function _t(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(N.replacementClass)}function $t(){if(N.autoReplaceSvg===!0)return x3.replace;var c=x3[N.autoReplaceSvg];return c||x3.replace}function It(c){return q.createElementNS("http://www.w3.org/2000/svg",c)}function Ut(c){return q.createElement(c)}function L5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?It:Ut:e;if(typeof c=="string")return q.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(L5(i,{ceFn:r}))}),s}function qt(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var x3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(L5(s),e)}),e.getAttribute(Y2)===null&&N.keepOriginalSource){var r=q.createComment(qt(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~n6(e).indexOf(N.replacementClass))return x3.replace(a);var s=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===N.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return X1(t)}).join(`
`);e.setAttribute(Y2,""),e.innerHTML=i}};function Y0(c){c()}function x5(c,a){var e=typeof a=="function"?a:L3;if(c.length===0)e();else{var r=Y0;N.mutateApproach===Xi&&(r=P2.requestAnimationFrame||Y0),r(function(){var s=$t(),n=v6.begin("mutate");c.map(s),n(),e()})}}var m6=!1;function b5(){m6=!0}function D4(){m6=!1}var A3=null;function K0(c){if(E0&&N.observeMutations){var a=c.treeCallback,e=a===void 0?L3:a,r=c.nodeCallback,s=r===void 0?L3:r,n=c.pseudoElementsCallback,i=n===void 0?L3:n,t=c.observeMutationsRoot,o=t===void 0?q:t;A3=new E0(function(l){if(!m6){var f=B2();C1(l).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!X0(v.addedNodes[0])&&(N.searchPseudoElements&&i(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&N.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&X0(v.target)&&~at.indexOf(v.attributeName))if(v.attributeName==="class"&&Et(v.target)){var u=$3(n6(v.target)),p=u.prefix,C=u.iconName;v.target.setAttribute(e6,p||f),C&&v.target.setAttribute(r6,C)}else _t(v.target)&&s(v.target)})}}),y2&&A3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jt(){A3&&A3.disconnect()}function Wt(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function Gt(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=$3(n6(c));return s.prefix||(s.prefix=B2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=xt(s.prefix,c.innerText)||o6(s.prefix,k4(c.innerText))),!s.iconName&&N.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Xt(c){var a=C1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return N.autoA11y&&(e?a["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||_1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Yt(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Gt(c),r=e.iconName,s=e.prefix,n=e.rest,i=Xt(c),t=T4("parseNodeAttributes",{},c),o=a.styleParser?Wt(c):[];return y({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:H2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var Kt=u2.styles;function y5(c){var a=N.autoReplaceSvg==="nest"?Z0(c,{styleParser:!1}):Z0(c);return~a.extra.classes.indexOf(o5)?x2("generateLayersText",c,a):x2("generateSvgReplacementMutation",c,a)}var F2=new Set;s6.map(function(c){F2.add("fa-".concat(c))});Object.keys(O1[U]).map(F2.add.bind(F2));Object.keys(O1[W]).map(F2.add.bind(F2));F2=W1(F2);function Q0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y2)return Promise.resolve();var e=q.documentElement.classList,r=function(v){return e.add("".concat(_0,"-").concat(v))},s=function(v){return e.remove("".concat(_0,"-").concat(v))},n=N.autoFetchSvg?F2:s6.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Kt));n.includes("fa")||n.push("fa");var i=[".".concat(o5,":not([").concat(Y2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(Y2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=C1(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=v6.begin("onTree"),l=t.reduce(function(f,v){try{var u=y5(v);u&&f.push(u)}catch(p){t5||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,v){Promise.all(l).then(function(u){x5(u,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),f()})}).catch(function(u){o(),v(u)})})}function Zt(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;y5(c).then(function(e){e&&x5([e],a)})}function Qt(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:P4(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:P4(s||{})),c(r,y(y({},e),{},{mask:s}))}}var Jt=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?H2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,l=e.maskId,f=l===void 0?null:l,v=e.title,u=v===void 0?null:v,p=e.titleId,C=p===void 0?null:p,h=e.classes,z=h===void 0?[]:h,m=e.attributes,V=m===void 0?{}:m,M=e.styles,H=M===void 0?{}:M;if(a){var L=a.prefix,g=a.iconName,d=a.icon;return I3(y({type:"icon"},a),function(){return K2("beforeDOMElementCreation",{iconDefinition:a,params:e}),N.autoA11y&&(u?V["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(C||_1()):(V["aria-hidden"]="true",V.focusable="false")),f6({icons:{main:B4(d),mask:o?B4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:g,transform:y(y({},H2),s),symbol:i,title:u,maskId:f,titleId:C,extra:{attributes:V,styles:H,classes:z}})})}},co={mixout:function(){return{icon:Qt(Jt)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Q0,e.nodeCallback=Zt,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?q:r,n=e.callback,i=n===void 0?function(){}:n;return Q0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,l=r.symbol,f=r.mask,v=r.maskId,u=r.extra;return new Promise(function(p,C){Promise.all([F4(s,t),f.iconName?F4(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var z=c6(h,2),m=z[0],V=z[1];p([e,f6({icons:{main:m,mask:V},prefix:t,iconName:s,transform:o,symbol:l,maskId:v,title:n,titleId:i,extra:u,watchable:!0})])}).catch(C)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,o=E3(t);o.length>0&&(s.style=o);var l;return i6(i)&&(l=x2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:s}}}},ao={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return I3({type:"layer"},function(){K2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(W1(n)).join(" ")},children:i}]})}}}},eo={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,f=r.styles,v=f===void 0?{}:f;return I3({type:"counter",content:e},function(){return K2("beforeDOMElementCreation",{content:e,params:r}),Ft({content:e.toString(),title:n,extra:{attributes:l,styles:v,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(W1(t))}})})}}}},ro={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?H2:s,i=r.title,t=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,f=r.attributes,v=f===void 0?{}:f,u=r.styles,p=u===void 0?{}:u;return I3({type:"text",content:e},function(){return K2("beforeDOMElementCreation",{content:e,params:r}),W0({content:e,transform:y(y({},H2),n),title:t,extra:{attributes:v,styles:p,classes:["".concat(N.cssPrefix,"-layers-text")].concat(W1(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(s5){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/l,o=f.height/l}return N.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,W0({content:e.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},so=new RegExp('"',"ug"),J0=[1105920,1112319];function no(c){var a=c.replace(so,""),e=dt(a,0),r=e>=J0[0]&&e<=J0[1],s=a.length===2?a[0]===a[1]:!1;return{value:k4(s?a[0]:a),isSecondary:r||s}}function c8(c,a){var e="".concat(Gi).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=C1(c.children),i=n.filter(function(d){return d.getAttribute(S4)===a})[0],t=P2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(Qi),l=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&f!=="none"&&f!==""){var v=t.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?W:U,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?D1[u][o[2].toLowerCase()]:Ji[u][l],C=no(v),h=C.value,z=C.isSecondary,m=o[0].startsWith("FontAwesome"),V=o6(p,h),M=V;if(m){var H=bt(h);H.iconName&&H.prefix&&(V=H.iconName,p=H.prefix)}if(V&&!z&&(!i||i.getAttribute(e6)!==p||i.getAttribute(r6)!==M)){c.setAttribute(e,M),i&&c.removeChild(i);var L=Yt(),g=L.extra;g.attributes[S4]=a,F4(V,p).then(function(d){var b=f6(y(y({},L),{},{icons:{main:d,mask:l6()},prefix:p,iconName:M,extra:g,watchable:!0})),S=q.createElement("svg");a==="::before"?c.insertBefore(S,c.firstChild):c.appendChild(S),S.outerHTML=b.map(function(T){return X1(T)}).join(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+e+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+e+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+e+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+e+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+e+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+e+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+e+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),n=new RegExp("(?:^"+e+"$)|(?:^"+s+"$)"),i=new RegExp("^"+e+"$"),t=new RegExp("^"+s+"$"),o=function(H){return H&&H.exact?n:new RegExp("(?:"+a(H)+e+a(H)+")|(?:"+a(H)+s+a(H)+")","g")};o.v4=function(M){return M&&M.exact?i:new RegExp(""+a(M)+e+a(M),"g")},o.v6=function(M){return M&&M.exact?t:new RegExp(""+a(M)+s+a(M),"g")};var l="(?:(?:[a-z]+:)?//)",f="(?:\\S+(?::\\S*)?@)?",v=o.v4().source,u=o.v6().source,p="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",C="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",h="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",z="(?::\\d{2,5})?",m='(?:[/?#][^\\s"]*)?',V="(?:"+l+"|www\\.)"+f+"(?:localhost|"+v+"|"+u+"|"+p+C+h+")"+z+m;return g3=new RegExp("(?:^"+V+"$)","i"),g3},X8={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},w1={integer:function(a){return w1.number(a)&&parseInt(a,10)===a},float:function(a){return w1.number(a)&&!w1.integer(a)},array:function(a){return Array.isArray(a)},regexp:function(a){if(a instanceof RegExp)return!0;try{return!!new RegExp(a)}catch{return!1}},date:function(a){return typeof a.getTime=="function"&&typeof a.getMonth=="function"&&typeof a.getYear=="function"&&!isNaN(a.getTime())},number:function(a){return isNaN(a)?!1:typeof a=="number"},object:function(a){return typeof a=="object"&&!w1.array(a)},method:function(a){return typeof a=="function"},email:function(a){return typeof a=="string"&&a.length<=320&&!!a.match(X8.email)},url:function(a){return typeof a=="string"&&a.length<=2048&&!!a.match(Fq())},hex:function(a){return typeof a=="string"&&!!a.match(X8.hex)}},Oq=function(a,e,r,s,n){if(a.required&&e===void 0){Zn(a,e,r,s,n);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],t=a.type;i.indexOf(t)>-1?w1[t](e)||s.push(i2(n.messages.types[t],a.fullField,a.type)):t&&typeof e!==a.type&&s.push(i2(n.messages.types[t],a.fullField,a.type))},Dq=function(a,e,r,s,n){var i=typeof a.len=="number",t=typeof a.min=="number",o=typeof a.max=="number",l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,f=e,v=null,u=typeof e=="number",p=typeof e=="string",C=Array.isArray(e);if(u?v="number":p?v="string":C&&(v="array"),!v)return!1;C&&(f=e.length),p&&(f=e.replace(l,"_").length),i?f!==a.len&&s.push(i2(n.messages[v].len,a.fullField,a.len)):t&&!o&&f<a.min?s.push(i2(n.messages[v].min,a.fullField,a.min)):o&&!t&&f>a.max?s.push(i2(n.messages[v].max,a.fullField,a.max)):t&&o&&(f<a.min||f>a.max)&&s.push(i2(n.messages[v].range,a.fullField,a.min,a.max))},i1="enum",Rq=function(a,e,r,s,n){a[i1]=Array.isArray(a[i1])?a[i1]:[],a[i1].indexOf(e)===-1&&s.push(i2(n.messages[i1],a.fullField,a[i1].join(", ")))},Eq=function(a,e,r,s,n){if(a.pattern){if(a.pattern instanceof RegExp)a.pattern.lastIndex=0,a.pattern.test(e)||s.push(i2(n.messages.pattern.mismatch,a.fullField,e,a.pattern));else if(typeof a.pattern=="string"){var i=new RegExp(a.pattern);i.test(e)||s.push(i2(n.messages.pattern.mismatch,a.fullField,e,a.pattern))}}},B={required:Zn,whitespace:Bq,type:Oq,range:Dq,enum:Rq,pattern:Eq},_q=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e,"string")&&!a.required)return r();B.required(a,e,s,i,n,"string"),K(e,"string")||(B.type(a,e,s,i,n),B.range(a,e,s,i,n),B.pattern(a,e,s,i,n),a.whitespace===!0&&B.whitespace(a,e,s,i,n))}r(i)},$q=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&B.type(a,e,s,i,n)}r(i)},Iq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(e===""&&(e=void 0),K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&(B.type(a,e,s,i,n),B.range(a,e,s,i,n))}r(i)},Uq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&B.type(a,e,s,i,n)}r(i)},qq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),K(e)||B.type(a,e,s,i,n)}r(i)},jq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&(B.type(a,e,s,i,n),B.range(a,e,s,i,n))}r(i)},Wq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&(B.type(a,e,s,i,n),B.range(a,e,s,i,n))}r(i)},Gq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(e==null&&!a.required)return r();B.required(a,e,s,i,n,"array"),e!=null&&(B.type(a,e,s,i,n),B.range(a,e,s,i,n))}r(i)},Xq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&B.type(a,e,s,i,n)}r(i)},Yq="enum",Kq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n),e!==void 0&&B[Yq](a,e,s,i,n)}r(i)},Zq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e,"string")&&!a.required)return r();B.required(a,e,s,i,n),K(e,"string")||B.pattern(a,e,s,i,n)}r(i)},Qq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e,"date")&&!a.required)return r();if(B.required(a,e,s,i,n),!K(e,"date")){var o;e instanceof Date?o=e:o=new Date(e),B.type(a,o,s,i,n),o&&B.range(a,o.getTime(),s,i,n)}}r(i)},Jq=function(a,e,r,s,n){var i=[],t=Array.isArray(e)?"array":typeof e;B.required(a,e,s,i,n,t),r(i)},b4=function(a,e,r,s,n){var i=a.type,t=[],o=a.required||!a.required&&s.hasOwnProperty(a.field);if(o){if(K(e,i)&&!a.required)return r();B.required(a,e,s,t,n,i),K(e,i)||B.type(a,e,s,t,n)}r(t)},cj=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();B.required(a,e,s,i,n)}r(i)},B1={string:_q,method:$q,number:Iq,boolean:Uq,regexp:qq,integer:jq,float:Wq,array:Gq,object:Xq,enum:Kq,pattern:Zq,date:Qq,url:b4,hex:b4,email:b4,required:Jq,any:cj};function Y4(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var a=JSON.parse(JSON.stringify(this));return a.clone=this.clone,a}}}var K4=Y4(),s3=function(){function c(e){this.rules=null,this._messages=K4,this.define(e)}var a=c.prototype;return a.define=function(r){var s=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(n){var i=r[n];s.rules[n]=Array.isArray(i)?i:[i]})},a.messages=function(r){return r&&(this._messages=G8(Y4(),r)),this._messages},a.validate=function(r,s,n){var i=this;s===void 0&&(s={}),n===void 0&&(n=function(){});var t=r,o=s,l=n;if(typeof o=="function"&&(l=o,o={}),!this.rules||Object.keys(this.rules).length===0)return l&&l(null,t),Promise.resolve(t);function f(h){var z=[],m={};function V(H){if(Array.isArray(H)){var L;z=(L=z).concat.apply(L,H)}else z.push(H)}for(var M=0;M<h.length;M++)V(h[M]);z.length?(m=X4(z),l(z,m)):l(null,t)}if(o.messages){var v=this.messages();v===K4&&(v=Y4()),G8(v,o.messages),o.messages=v}else o.messages=this.messages();var u={},p=o.keys||Object.keys(this.rules);p.forEach(function(h){var z=i.rules[h],m=t[h];z.forEach(function(V){var M=V;typeof M.transform=="function"&&(t===r&&(t=W2({},t)),m=t[h]=M.transform(m)),typeof M=="function"?M={validator:M}:M=W2({},M),M.validator=i.getValidationMethod(M),M.validator&&(M.field=h,M.fullField=M.fullField||h,M.type=i.getType(M),u[h]=u[h]||[],u[h].push({rule:M,value:m,source:t,field:h}))})});var C={};return Aq(u,o,function(h,z){var m=h.rule,V=(m.type==="object"||m.type==="array")&&(typeof m.fields=="object"||typeof m.defaultField=="object");V=V&&(m.required||!m.required&&h.value),m.field=h.field;function M(g,d){return W2({},d,{fullField:m.fullField+"."+g,fullFields:m.fullFields?[].concat(m.fullFields,[g]):[g]})}function H(g){g===void 0&&(g=[]);var d=Array.isArray(g)?g:[g];!o.suppressWarning&&d.length&&c.warning("async-validator:",d),d.length&&m.message!==void 0&&(d=[].concat(m.message));var b=d.map(W8(m,t));if(o.first&&b.length)return C[m.field]=1,z(b);if(!V)z(b);else{if(m.required&&!h.value)return m.message!==void 0?b=[].concat(m.message).map(W8(m,t)):o.error&&(b=[o.error(m,i2(o.messages.required,m.field))]),z(b);var S={};m.defaultField&&Object.keys(h.value).map(function($){S[$]=m.defaultField}),S=W2({},S,h.rule.fields);var T={};Object.keys(S).forEach(function($){var R=S[$],V2=Array.isArray(R)?R:[R];T[$]=V2.map(M.bind(null,$))});var _=new c(T);_.messages(o.messages),h.rule.options&&(h.rule.options.messages=o.messages,h.rule.options.error=o.error),_.validate(h.value,h.rule.options||o,function($){var R=[];b&&b.length&&R.push.apply(R,b),$&&$.length&&R.push.apply(R,$),z(R.length?R:null)})}}var L;if(m.asyncValidator)L=m.asyncValidator(m,h.value,H,h.source,o);else if(m.validator){try{L=m.validator(m,h.value,H,h.source,o)}catch(g){console.error==null||console.error(g),o.suppressValidatorError||setTimeout(function(){throw g},0),H(g.message)}L===!0?H():L===!1?H(typeof m.message=="function"?m.message(m.fullField||m.field):m.message||(m.fullField||m.field)+" fails"):L instanceof Array?H(L):L instanceof Error&&H(L.message)}L&&L.then&&L.then(function(){return H()},function(g){return H(g)})},function(h){f(h)},t)},a.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!B1.hasOwnProperty(r.type))throw new Error(i2("Unknown rule type %s",r.type));return r.type||"string"},a.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var s=Object.keys(r),n=s.indexOf("message");return n!==-1&&s.splice(n,1),s.length===1&&s[0]==="required"?B1.required:B1[this.getType(r)]||void 0},c}();s3.register=function(a,e){if(typeof e!="function")throw new Error("Cannot register a validator by type, validator is not a function");B1[a]=e};s3.warning=Nq;s3.messages=K4;s3.validators=B1;const aj={class:"s-form__item"},ej={class:"s-form__label s-form__item--vertical"},rj={key:0,class:"s-form__item--error"},sj=F({name:"SFormItem"}),nj=F({...sj,props:{label:null,field:null},setup(c){const a=c,e=O3(Kn),r=A(!1),s=A(""),n=()=>{console.log("输入流")},t={validate:()=>{if(!e)return console.warn("请在Form中使用FormItem"),Promise.reject("请在Form中使用FormItem");if(!a.field)return console.warn("如果要校验当前项，请设置field字段"),Promise.reject("如果要校验当前项，请设置field字段");if(!e.rules)return Promise.resolve({result:!0});const o=e.rules[a.field]||void 0;if(!o)return Promise.resolve({result:!0});const l=e.model[a.field];return new s3({[a.field]:o}).validate({[a.field]:l},v=>{v?(r.value=!0,s.value=v[0].message||"校验错误"):(r.value=!1,s.value="")})}};return Q4("FORM_ITEM_CTX",t),J2(()=>{a.field&&(e==null||e.addItem(t))}),J4(()=>{a.field&&(e==null||e.removeItem(t))}),(o,l)=>(x(),w("div",aj,[P("span",ej,C2(a.label),1),P("div",{class:j({"s-form__item--errorInput":r.value})},[G(o.$slots,"default",{onInput:n})],2),r.value?(x(),w("div",rj,C2(s.value),1)):O("",!0)]))}}),Qn=c2(gq),Jn=c2(nj);const ij={class:"vk-dropdown"},tj={class:"vk-dropdown__menu"},oj={key:0,role:"separator",class:"divided-placeholder"},lj=["onClick","id"],fj=F({name:"SDropdown"}),vj=F({...fj,props:{content:null,trigger:null,placement:null,manual:{type:Boolean},popperOptions:null,transition:null,openDelay:null,closeDelay:null,menuOptions:null,hideAfterClick:{type:Boolean,default:!0}},emits:["visible-change","select"],setup(c,{expose:a,emit:e}){const r=c,s=A(null),n=t=>{e("visible-change",t)},i=t=>{var o;t.disabled||(e("select",t),r.hideAfterClick&&((o=s.value)==null||o.hide()))};return a({show:()=>{var t;return(t=s.value)==null?void 0:t.show()},hide:()=>{var t;return(t=s.value)==null?void 0:t.hide()}}),(t,o)=>(x(),w("div",ij,[X(k(r3),{trigger:c.trigger,placement:c.placement,"popper-options":c.popperOptions,"open-delay":c.openDelay,"close-delay":c.closeDelay,manual:c.manual,onVisibleChange:n,ref_key:"tooltipRef",ref:s},{content:e2(()=>[P("ul",tj,[(x(!0),w(X2,null,R3(c.menuOptions,l=>(x(),w(X2,{key:l.key},[l.divided?(x(),w("li",oj)):O("",!0),P("li",{class:j(["vk-dropdown__item",{"is-disabled":l.disabled,"is-divided":l.divided}]),onClick:f=>i(l),id:`dropdown-item-${l.key}`},[X(k(v4),{vNode:l.label},null,8,["vNode"])],10,lj)],64))),128))])]),default:e2(()=>[G(t.$slots,"default")]),_:3},8,["trigger","placement","popper-options","open-delay","close-delay","manual"])]))}}),mj=c2(vj),ci=mj,uj={modelValue:Boolean,label:String,disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},pj=P("span",{class:"h-checkbox__inner"},null,-1),Hj=["disabled","value"],hj={class:"h-checkbox__label"},zj={name:"SCheckbox"},dj=F({...zj,props:uj,emits:["update:modelValue","change"],setup(c,{emit:a}){const e=c,r=O3("checkboxGroup",{}),s=D(()=>!!(r&&r.modelValue)),n=D({get(){return s.value?r&&r.modelValue.value:e.modelValue},set(l){s.value?r&&r.changeEvent(l):a("update:modelValue",l)}}),i=D(()=>s.value?n.value.includes(e.label):n.value),t=D(()=>s.value&&r&&r.disabled.value||e.disabled),o=()=>{Q8(()=>a("change",n.value))};return(l,f)=>(x(),w("label",{class:j(["h-checkbox",[{"is-checked":i.value},{"is-disabled":t.value},{"is-bordered":l.border}]])},[P("span",{class:j(["h-checkbox__input",{"is-checked":i.value,"is-disabled":t.value,"is-indeterminate":l.indeterminate}])},[pj,u1(P("input",{class:"h-checkbox__original",type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=v=>n.value=v),disabled:t.value,value:l.label,onChange:o},null,40,Hj),[[J8,n.value]])],2),P("span",hj,[G(l.$slots,"default"),l.$slots.default?O("",!0):(x(),w(X2,{key:0},[D3(C2(l.label),1)],64))])],2))}}),Vj=c2(dj),ai=Vj,Y8={SButton:An,SIcon:Q,SCollapse:Tn,SCollapseItem:Pn,STooltip:r3,SInput:f4,SSwitch:Un,SSelect:qn,SAutoComplete:jn,SMessage:Wn,SDialog:Gn,STree:Yn,SFormItem:Jn,SForm:Qn,SDropdown:ci,SCheckbox:ai},Mj=c=>{for(const a in Y8)c.component(a,Y8[a])},Cj=(c,a)=>{Mj(c)},gj={install:Cj},K8=Object.freeze(Object.defineProperty({__proto__:null,SAutoComplete:jn,SButton:An,SCheckbox:ai,SCollapse:Tn,SCollapseItem:Pn,SDialog:Gn,SDropdown:ci,SForm:Qn,SFormItem:Jn,SIcon:Q,SInput:f4,SMessage:Wn,SSelect:qn,SSwitch:Un,STooltip:r3,STree:Yn,default:gj},Symbol.toStringTag,{value:"Module"})),Lj={install:c=>{for(const a in K8)c.use(K8[a])}};ho.add(jF);const xj={...Di,enhanceApp({app:c}){c.config.globalProperties.$message=j4,c.use(Lj),c.component("demo-preview",gO)}};function ei(c){if(c.extends){const a=ei(c.extends);return{...a,...c,async enhanceApp(e){a.enhanceApp&&await a.enhanceApp(e),c.enhanceApp&&await c.enhanceApp(e)}}}return c}const f1=ei(xj),bj=F({name:"VitePressApp",setup(){const{site:c}=Ti();return J2(()=>{Pi(()=>{document.documentElement.lang=c.value.lang,document.documentElement.dir=c.value.dir})}),Bi(),Fi(),Oi(),f1.setup&&f1.setup(),()=>Z4(f1.Layout)}});async function yj(){const c=wj(),a=Nj();a.provide(gi,c);const e=Li(c.route);return a.provide(xi,e),a.component("Content",bi),a.component("ClientOnly",yi),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),f1.enhanceApp&&await f1.enhanceApp({app:a,router:c,siteData:Ni}),{app:a,router:c,data:e}}function Nj(){return wi(bj)}function wj(){let c=y4,a;return Si(e=>{let r=ki(e);return c&&(a=r),(c||a===r)&&(r=r.replace(/\.js$/,".lean.js")),y4&&(c=!1),Ai(()=>import(r),[])},f1.NotFound)}y4&&yj().then(({app:c,router:a,data:e})=>{a.go().then(()=>{Ci(a.route,e.site),c.mount("#app")})});export{yj as createApp};