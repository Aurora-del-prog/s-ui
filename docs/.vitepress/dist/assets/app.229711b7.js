import{d as D,f as T,e as R,h as J2,w as J,o as x,c as N,x as B,r as W,n as j,b as A,y as Z,D as X,a3 as vi,z as r2,W as v1,t as g2,A as E,T as m1,a1 as Z4,a4 as mi,a5 as ui,C as P2,R as Q4,Q as G1,a6 as u1,a7 as J8,X as F1,a as X1,v as J4,a2 as O1,a8 as pi,F as X2,a9 as Hi,aa as hi,i as c5,$ as T2,Y as zi,B as di,K as R3,ab as Vi,ac as Mi,ad as Ci,ae as B0,af as gi,ag as a5,I as y4,ah as Li,ai as xi,aj as bi,ak as yi,al as Ni,am as wi,an as Si,ao as ki,ap as Ai,aq as Ti,ar as Pi,u as Bi,l as Fi,as as Oi,at as Di,au as Ri}from"./chunks/framework.53a55068.js";import{t as Ei}from"./chunks/theme.743dcae8.js";function F0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function b(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?F0(Object(e),!0).forEach(function(r){Y(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):F0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function A3(c){"@babel/helpers - typeof";return A3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},A3(c)}function $i(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function O0(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function _i(c,a,e){return a&&O0(c.prototype,a),e&&O0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function Y(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function c6(c,a){return Ui(c)||ji(c,a)||e5(c,a)||Gi()}function Y1(c){return Ii(c)||qi(c)||e5(c)||Wi()}function Ii(c){if(Array.isArray(c))return N4(c)}function Ui(c){if(Array.isArray(c))return c}function qi(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ji(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function e5(c,a){if(c){if(typeof c=="string")return N4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N4(c,a)}}function N4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Wi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D0=function(){},a6={},r5={},s5=null,n5={mark:D0,measure:D0};try{typeof window<"u"&&(a6=window),typeof document<"u"&&(r5=document),typeof MutationObserver<"u"&&(s5=MutationObserver),typeof performance<"u"&&(n5=performance)}catch{}var Xi=a6.navigator||{},R0=Xi.userAgent,E0=R0===void 0?"":R0,B2=a6,q=r5,$0=s5,u3=n5;B2.document;var N2=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",i5=~E0.indexOf("MSIE")||~E0.indexOf("Trident/"),p3,H3,h3,z3,d3,L2="___FONT_AWESOME___",w4=16,t5="fa",o5="svg-inline--fa",Y2="data-fa-i2svg",S4="data-fa-pseudo-element",Yi="data-fa-pseudo-element-pending",e6="data-prefix",r6="data-icon",_0="fontawesome-i2svg",Ki="async",Zi=["HTML","HEAD","STYLE","SCRIPT"],l5=function(){try{return!0}catch{return!1}}(),U="classic",G="sharp",s6=[U,G];function K1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[U]}})}var D1=K1((p3={},Y(p3,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Y(p3,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),p3)),R1=K1((H3={},Y(H3,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Y(H3,G,{solid:"fass",regular:"fasr"}),H3)),E1=K1((h3={},Y(h3,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Y(h3,G,{fass:"fa-solid",fasr:"fa-regular"}),h3)),Qi=K1((z3={},Y(z3,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Y(z3,G,{"fa-solid":"fass","fa-regular":"fasr"}),z3)),Ji=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,f5="fa-layers-text",ct=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,at=K1((d3={},Y(d3,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Y(d3,G,{900:"fass",400:"fasr"}),d3)),v5=[1,2,3,4,5,6,7,8,9,10],et=v5.concat([11,12,13,14,15,16,17,18,19,20]),rt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$1=new Set;Object.keys(R1[U]).map($1.add.bind($1));Object.keys(R1[G]).map($1.add.bind($1));var st=[].concat(s6,Y1($1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q2.GROUP,q2.SWAP_OPACITY,q2.PRIMARY,q2.SECONDARY]).concat(v5.map(function(c){return"".concat(c,"x")})).concat(et.map(function(c){return"w-".concat(c)})),S1=B2.FontAwesomeConfig||{};function nt(c){var a=q.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function it(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(q&&typeof q.querySelector=="function"){var tt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tt.forEach(function(c){var a=c6(c,2),e=a[0],r=a[1],s=it(nt(e));s!=null&&(S1[r]=s)})}var m5={styleDefault:"solid",familyDefault:"classic",cssPrefix:t5,replacementClass:o5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};S1.familyPrefix&&(S1.cssPrefix=S1.familyPrefix);var p1=b(b({},m5),S1);p1.autoReplaceSvg||(p1.observeMutations=!1);var y={};Object.keys(m5).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){p1[c]=e,k1.forEach(function(r){return r(y)})},get:function(){return p1[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){p1.cssPrefix=a,k1.forEach(function(e){return e(y)})},get:function(){return p1.cssPrefix}});B2.FontAwesomeConfig=y;var k1=[];function ot(c){return k1.push(c),function(){k1.splice(k1.indexOf(c),1)}}var k2=w4,z2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lt(c){if(!(!c||!N2)){var a=q.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=q.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return q.head.insertBefore(a,r),c}}var ft="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _1(){for(var c=12,a="";c-- >0;)a+=ft[Math.random()*62|0];return a}function C1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function n6(c){return c.classList?C1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function u5(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vt(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(u5(c[e]),'" ')},"").trim()}function E3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function i6(c){return c.size!==z2.size||c.x!==z2.x||c.y!==z2.y||c.rotate!==z2.rotate||c.flipX||c.flipY}function mt(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:l}}function ut(c){var a=c.transform,e=c.width,r=e===void 0?w4:e,s=c.height,n=s===void 0?w4:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&i5?o+="translate(".concat(a.x/k2-r/2,"em, ").concat(a.y/k2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/k2,"em), calc(-50% + ").concat(a.y/k2,"em)) "):o+="translate(".concat(a.x/k2,"em, ").concat(a.y/k2,"em) "),o+="scale(".concat(a.size/k2*(a.flipX?-1:1),", ").concat(a.size/k2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var pt=`:root, :host {
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
}`;function p5(){var c=t5,a=o5,e=y.cssPrefix,r=y.replacementClass,s=pt;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var I0=!1;function h4(){y.autoAddCss&&!I0&&(lt(p5()),I0=!0)}var Ht={mixout:function(){return{dom:{css:p5,insertCss:h4}}},hooks:function(){return{beforeDOMElementCreation:function(){h4()},beforeI2svg:function(){h4()}}}},x2=B2||{};x2[L2]||(x2[L2]={});x2[L2].styles||(x2[L2].styles={});x2[L2].hooks||(x2[L2].hooks={});x2[L2].shims||(x2[L2].shims=[]);var p2=x2[L2],H5=[],ht=function c(){q.removeEventListener("DOMContentLoaded",c),T3=1,H5.map(function(a){return a()})},T3=!1;N2&&(T3=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),T3||q.addEventListener("DOMContentLoaded",ht));function zt(c){N2&&(T3?setTimeout(c,0):H5.push(c))}function Z1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?u5(c):"<".concat(a," ").concat(vt(r),">").concat(n.map(Z1).join(""),"</").concat(a,">")}function U0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var dt=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},z4=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=s!==void 0?dt(e,s):e,o,l,f;for(r===void 0?(o=1,f=a[n[0]]):(o=0,f=r);o<i;o++)l=n[o],f=t(f,a[l],l,a);return f};function Vt(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function k4(c){var a=Vt(c);return a.length===1?a[0].toString(16):null}function Mt(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function q0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function A4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=q0(a);typeof p2.hooks.addPack=="function"&&!s?p2.hooks.addPack(c,q0(a)):p2.styles[c]=b(b({},p2.styles[c]||{}),n),c==="fas"&&A4("fa",a)}var V3,M3,C3,t1=p2.styles,Ct=p2.shims,gt=(V3={},Y(V3,U,Object.values(E1[U])),Y(V3,G,Object.values(E1[G])),V3),t6=null,h5={},z5={},d5={},V5={},M5={},Lt=(M3={},Y(M3,U,Object.keys(D1[U])),Y(M3,G,Object.keys(D1[G])),M3);function xt(c){return~st.indexOf(c)}function bt(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!xt(s)?s:null}var C5=function(){var a=function(n){return z4(t1,function(i,t,o){return i[o]=z4(t,n,{}),i},{})};h5=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),z5=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),M5=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var e="far"in t1||y.autoFetchSvg,r=z4(Ct,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});d5=r.names,V5=r.unicodes,t6=$3(y.styleDefault,{family:y.familyDefault})};ot(function(c){t6=$3(c.styleDefault,{family:y.familyDefault})});C5();function o6(c,a){return(h5[c]||{})[a]}function yt(c,a){return(z5[c]||{})[a]}function j2(c,a){return(M5[c]||{})[a]}function g5(c){return d5[c]||{prefix:null,iconName:null}}function Nt(c){var a=V5[c],e=o6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F2(){return t6}var l6=function(){return{prefix:null,iconName:null,rest:[]}};function $3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?U:e,s=D1[r][c],n=R1[r][c]||R1[r][s],i=c in p2.styles?c:null;return n||i||null}var j0=(C3={},Y(C3,U,Object.keys(E1[U])),Y(C3,G,Object.keys(E1[G])),C3);function _3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},Y(a,U,"".concat(y.cssPrefix,"-").concat(U)),Y(a,G,"".concat(y.cssPrefix,"-").concat(G)),a),i=null,t=U;(c.includes(n[U])||c.some(function(l){return j0[U].includes(l)}))&&(t=U),(c.includes(n[G])||c.some(function(l){return j0[G].includes(l)}))&&(t=G);var o=c.reduce(function(l,f){var v=bt(y.cssPrefix,f);if(t1[f]?(f=gt[t].includes(f)?Qi[t][f]:f,i=f,l.prefix=f):Lt[t].indexOf(f)>-1?(i=f,l.prefix=$3(f,{family:t})):v?l.iconName=v:f!==y.replacementClass&&f!==n[U]&&f!==n[G]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var u=i==="fa"?g5(l.iconName):{},p=j2(l.prefix,l.iconName);u.prefix&&(i=null),l.iconName=u.iconName||p||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!t1.far&&t1.fas&&!y.autoFetchSvg&&(l.prefix="fas")}return l},l6());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===G&&(t1.fass||y.autoFetchSvg)&&(o.prefix="fass",o.iconName=j2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=F2()||"fas"),o}var wt=function(){function c(){$i(this,c),this.definitions={}}return _i(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=b(b({},e.definitions[t]||{}),i[t]),A4(t,i[t]);var o=E1[U][t];o&&A4(o,i[t]),C5()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,l=i.icon,f=l[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(v){typeof v=="string"&&(e[t][v]=l)}),e[t][o]=l}),e}}]),c}(),W0=[],o1={},l1={},St=Object.keys(l1);function kt(c,a){var e=a.mixoutsTo;return W0=c,o1={},Object.keys(l1).forEach(function(r){St.indexOf(r)===-1&&delete l1[r]}),W0.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),A3(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){o1[i]||(o1[i]=[]),o1[i].push(n[i])})}r.provides&&r.provides(l1)}),e}function T4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=o1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function K2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=o1[c]||[];s.forEach(function(n){n.apply(null,e)})}function b2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return l1[c]?l1[c].apply(null,a):void 0}function P4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||F2();if(a)return a=j2(e,a)||a,U0(L5.definitions,e,a)||U0(p2.styles,e,a)}var L5=new wt,At=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,K2("noAuto")},Tt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N2?(K2("beforeI2svg",a),b2("pseudoElements2svg",a),b2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,zt(function(){Bt({autoReplaceSvgRoot:e}),K2("watch",a)})}},Pt={icon:function(a){if(a===null)return null;if(A3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:j2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=$3(a[0]);return{prefix:r,iconName:j2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(Ji))){var s=_3(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||F2(),iconName:j2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=F2();return{prefix:n,iconName:j2(n,a)||a}}}},t2={noAuto:At,config:y,dom:Tt,parse:Pt,library:L5,findIconDefinition:P4,toHtml:Z1},Bt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?q:e;(Object.keys(p2.styles).length>0||y.autoFetchSvg)&&N2&&y.autoReplaceSvg&&t2.dom.i2svg({node:r})};function I3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return Z1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(N2){var r=q.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Ft(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(i6(i)&&e.found&&!r.found){var t=e.width,o=e.height,l={x:t/o/2,y:.5};s.style=E3(b(b({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Ot(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},s),{},{id:i}),children:r}]}]}function f6(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,l=c.maskId,f=c.titleId,v=c.extra,u=c.watchable,p=u===void 0?!1:u,z=r.found?r:e,h=z.width,H=z.height,m=s==="fak",V=[y.replacementClass,n?"".concat(y.cssPrefix,"-").concat(n):""].filter(function(k){return v.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(v.classes).join(" "),d={children:[],attributes:b(b({},v.attributes),{},{"data-prefix":s,"data-icon":n,class:V,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(H)})},M=m&&!~v.classes.indexOf("fa-fw")?{width:"".concat(h/H*16*.0625,"em")}:{};p&&(d.attributes[Y2]=""),o&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(f||_1())},children:[o]}),delete d.attributes.title);var C=b(b({},d),{},{prefix:s,iconName:n,main:e,mask:r,maskId:l,transform:i,symbol:t,styles:b(b({},M),v.styles)}),g=r.found&&e.found?b2("generateAbstractMask",C)||{children:[],attributes:{}}:b2("generateAbstractIcon",C)||{children:[],attributes:{}},L=g.children,w=g.attributes;return C.children=L,C.attributes=w,t?Ot(C):Ft(C)}function G0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,l=b(b(b({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[Y2]="");var f=b({},i.styles);i6(s)&&(f.transform=ut({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var v=E3(f);v.length>0&&(l.style=v);var u=[];return u.push({tag:"span",attributes:l,children:[a]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function Dt(c){var a=c.content,e=c.title,r=c.extra,s=b(b(b({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=E3(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var d4=p2.styles;function B4(c){var a=c[0],e=c[1],r=c.slice(4),s=c6(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(q2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(q2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(q2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Rt={found:!1,width:512,height:512};function Et(c,a){!l5&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function F4(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=F2()),new Promise(function(r,s){if(b2("missingIconAbstract"),e==="fa"){var n=g5(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&d4[a]&&d4[a][c]){var i=d4[a][c];return r(B4(i))}Et(c,a),r(b(b({},Rt),{},{icon:y.showMissingIcons&&c?b2("missingIconAbstract")||{}:{}}))})}var X0=function(){},O4=y.measurePerformance&&u3&&u3.mark&&u3.measure?u3:{mark:X0,measure:X0},N1='FA "6.3.0"',$t=function(a){return O4.mark("".concat(N1," ").concat(a," begins")),function(){return x5(a)}},x5=function(a){O4.mark("".concat(N1," ").concat(a," ends")),O4.measure("".concat(N1," ").concat(a),"".concat(N1," ").concat(a," begins"),"".concat(N1," ").concat(a," ends"))},v6={begin:$t,end:x5},y3=function(){};function Y0(c){var a=c.getAttribute?c.getAttribute(Y2):null;return typeof a=="string"}function _t(c){var a=c.getAttribute?c.getAttribute(e6):null,e=c.getAttribute?c.getAttribute(r6):null;return a&&e}function It(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function Ut(){if(y.autoReplaceSvg===!0)return N3.replace;var c=N3[y.autoReplaceSvg];return c||N3.replace}function qt(c){return q.createElementNS("http://www.w3.org/2000/svg",c)}function jt(c){return q.createElement(c)}function b5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?qt:jt:e;if(typeof c=="string")return q.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(b5(i,{ceFn:r}))}),s}function Wt(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var N3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(b5(s),e)}),e.getAttribute(Y2)===null&&y.keepOriginalSource){var r=q.createComment(Wt(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~n6(e).indexOf(y.replacementClass))return N3.replace(a);var s=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===y.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return Z1(t)}).join(`
`);e.setAttribute(Y2,""),e.innerHTML=i}};function K0(c){c()}function y5(c,a){var e=typeof a=="function"?a:y3;if(c.length===0)e();else{var r=K0;y.mutateApproach===Ki&&(r=B2.requestAnimationFrame||K0),r(function(){var s=Ut(),n=v6.begin("mutate");c.map(s),n(),e()})}}var m6=!1;function N5(){m6=!0}function D4(){m6=!1}var P3=null;function Z0(c){if($0&&y.observeMutations){var a=c.treeCallback,e=a===void 0?y3:a,r=c.nodeCallback,s=r===void 0?y3:r,n=c.pseudoElementsCallback,i=n===void 0?y3:n,t=c.observeMutationsRoot,o=t===void 0?q:t;P3=new $0(function(l){if(!m6){var f=F2();C1(l).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Y0(v.addedNodes[0])&&(y.searchPseudoElements&&i(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&y.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&Y0(v.target)&&~rt.indexOf(v.attributeName))if(v.attributeName==="class"&&_t(v.target)){var u=_3(n6(v.target)),p=u.prefix,z=u.iconName;v.target.setAttribute(e6,p||f),z&&v.target.setAttribute(r6,z)}else It(v.target)&&s(v.target)})}}),N2&&P3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gt(){P3&&P3.disconnect()}function Xt(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function Yt(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=_3(n6(c));return s.prefix||(s.prefix=F2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=yt(s.prefix,c.innerText)||o6(s.prefix,k4(c.innerText))),!s.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Kt(c){var a=C1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||_1()):(a["aria-hidden"]="true",a.focusable="false")),a}function Zt(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Yt(c),r=e.iconName,s=e.prefix,n=e.rest,i=Kt(c),t=T4("parseNodeAttributes",{},c),o=a.styleParser?Xt(c):[];return b({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:z2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var Qt=p2.styles;function w5(c){var a=y.autoReplaceSvg==="nest"?Q0(c,{styleParser:!1}):Q0(c);return~a.extra.classes.indexOf(f5)?b2("generateLayersText",c,a):b2("generateSvgReplacementMutation",c,a)}var O2=new Set;s6.map(function(c){O2.add("fa-".concat(c))});Object.keys(D1[U]).map(O2.add.bind(O2));Object.keys(D1[G]).map(O2.add.bind(O2));O2=Y1(O2);function J0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N2)return Promise.resolve();var e=q.documentElement.classList,r=function(v){return e.add("".concat(_0,"-").concat(v))},s=function(v){return e.remove("".concat(_0,"-").concat(v))},n=y.autoFetchSvg?O2:s6.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Qt));n.includes("fa")||n.push("fa");var i=[".".concat(f5,":not([").concat(Y2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(Y2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=C1(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=v6.begin("onTree"),l=t.reduce(function(f,v){try{var u=w5(v);u&&f.push(u)}catch(p){l5||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,v){Promise.all(l).then(function(u){y5(u,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),f()})}).catch(function(u){o(),v(u)})})}function Jt(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;w5(c).then(function(e){e&&y5([e],a)})}function co(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:P4(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:P4(s||{})),c(r,b(b({},e),{},{mask:s}))}}var ao=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?z2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,l=e.maskId,f=l===void 0?null:l,v=e.title,u=v===void 0?null:v,p=e.titleId,z=p===void 0?null:p,h=e.classes,H=h===void 0?[]:h,m=e.attributes,V=m===void 0?{}:m,d=e.styles,M=d===void 0?{}:d;if(a){var C=a.prefix,g=a.iconName,L=a.icon;return I3(b({type:"icon"},a),function(){return K2("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(u?V["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(z||_1()):(V["aria-hidden"]="true",V.focusable="false")),f6({icons:{main:B4(L),mask:o?B4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:g,transform:b(b({},z2),s),symbol:i,title:u,maskId:f,titleId:z,extra:{attributes:V,styles:M,classes:H}})})}},eo={mixout:function(){return{icon:co(ao)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=J0,e.nodeCallback=Jt,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?q:r,n=e.callback,i=n===void 0?function(){}:n;return J0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,l=r.symbol,f=r.mask,v=r.maskId,u=r.extra;return new Promise(function(p,z){Promise.all([F4(s,t),f.iconName?F4(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var H=c6(h,2),m=H[0],V=H[1];p([e,f6({icons:{main:m,mask:V},prefix:t,iconName:s,transform:o,symbol:l,maskId:v,title:n,titleId:i,extra:u,watchable:!0})])}).catch(z)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,o=E3(t);o.length>0&&(s.style=o);var l;return i6(i)&&(l=b2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:s}}}},ro={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return I3({type:"layer"},function(){K2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(Y1(n)).join(" ")},children:i}]})}}}},so={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,f=r.styles,v=f===void 0?{}:f;return I3({type:"counter",content:e},function(){return K2("beforeDOMElementCreation",{content:e,params:r}),Dt({content:e.toString(),title:n,extra:{attributes:l,styles:v,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(Y1(t))}})})}}}},no={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?z2:s,i=r.title,t=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,f=r.attributes,v=f===void 0?{}:f,u=r.styles,p=u===void 0?{}:u;return I3({type:"text",content:e},function(){return K2("beforeDOMElementCreation",{content:e,params:r}),G0({content:e,transform:b(b({},z2),n),title:t,extra:{attributes:v,styles:p,classes:["".concat(y.cssPrefix,"-layers-text")].concat(Y1(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(i5){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/l,o=f.height/l}return y.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,G0({content:e.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},io=new RegExp('"',"ug"),c8=[1105920,1112319];function to(c){var a=c.replace(io,""),e=Mt(a,0),r=e>=c8[0]&&e<=c8[1],s=a.length===2?a[0]===a[1]:!1;return{value:k4(s?a[0]:a),isSecondary:r||s}}function a8(c,a){var e="".concat(Yi).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=C1(c.children),i=n.filter(function(L){return L.getAttribute(S4)===a})[0],t=B2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(ct),l=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&f!=="none"&&f!==""){var v=t.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?G:U,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?R1[u][o[2].toLowerCase()]:at[u][l],z=to(v),h=z.value,H=z.isSecondary,m=o[0].startsWith("FontAwesome"),V=o6(p,h),d=V;if(m){var M=Nt(h);M.iconName&&M.prefix&&(V=M.iconName,p=M.prefix)}if(V&&!H&&(!i||i.getAttribute(e6)!==p||i.getAttribute(r6)!==d)){c.setAttribute(e,d),i&&c.removeChild(i);var C=Zt(),g=C.extra;g.attributes[S4]=a,F4(V,p).then(function(L){var w=f6(b(b({},C),{},{icons:{main:L,mask:l6()},prefix:p,iconName:d,extra:g,watchable:!0})),k=q.createElement("svg");a==="::before"?c.insertBefore(k,c.firstChild):c.appendChild(k),k.outerHTML=w.map(function(S){return Z1(S)}).join(`
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
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),n=new RegExp("(?:^"+e+"$)|(?:^"+s+"$)"),i=new RegExp("^"+e+"$"),t=new RegExp("^"+s+"$"),o=function(M){return M&&M.exact?n:new RegExp("(?:"+a(M)+e+a(M)+")|(?:"+a(M)+s+a(M)+")","g")};o.v4=function(d){return d&&d.exact?i:new RegExp(""+a(d)+e+a(d),"g")},o.v6=function(d){return d&&d.exact?t:new RegExp(""+a(d)+s+a(d),"g")};var l="(?:(?:[a-z]+:)?//)",f="(?:\\S+(?::\\S*)?@)?",v=o.v4().source,u=o.v6().source,p="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",z="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",h="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",H="(?::\\d{2,5})?",m='(?:[/?#][^\\s"]*)?',V="(?:"+l+"|www\\.)"+f+"(?:localhost|"+v+"|"+u+"|"+p+z+h+")"+H+m;return b3=new RegExp("(?:^"+V+"$)","i"),b3},K8={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},w1={integer:function(a){return w1.number(a)&&parseInt(a,10)===a},float:function(a){return w1.number(a)&&!w1.integer(a)},array:function(a){return Array.isArray(a)},regexp:function(a){if(a instanceof RegExp)return!0;try{return!!new RegExp(a)}catch{return!1}},date:function(a){return typeof a.getTime=="function"&&typeof a.getMonth=="function"&&typeof a.getYear=="function"&&!isNaN(a.getTime())},number:function(a){return isNaN(a)?!1:typeof a=="number"},object:function(a){return typeof a=="object"&&!w1.array(a)},method:function(a){return typeof a=="function"},email:function(a){return typeof a=="string"&&a.length<=320&&!!a.match(K8.email)},url:function(a){return typeof a=="string"&&a.length<=2048&&!!a.match(Rq())},hex:function(a){return typeof a=="string"&&!!a.match(K8.hex)}},Eq=function(a,e,r,s,n){if(a.required&&e===void 0){Jn(a,e,r,s,n);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],t=a.type;i.indexOf(t)>-1?w1[t](e)||s.push(i2(n.messages.types[t],a.fullField,a.type)):t&&typeof e!==a.type&&s.push(i2(n.messages.types[t],a.fullField,a.type))},$q=function(a,e,r,s,n){var i=typeof a.len=="number",t=typeof a.min=="number",o=typeof a.max=="number",l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,f=e,v=null,u=typeof e=="number",p=typeof e=="string",z=Array.isArray(e);if(u?v="number":p?v="string":z&&(v="array"),!v)return!1;z&&(f=e.length),p&&(f=e.replace(l,"_").length),i?f!==a.len&&s.push(i2(n.messages[v].len,a.fullField,a.len)):t&&!o&&f<a.min?s.push(i2(n.messages[v].min,a.fullField,a.min)):o&&!t&&f>a.max?s.push(i2(n.messages[v].max,a.fullField,a.max)):t&&o&&(f<a.min||f>a.max)&&s.push(i2(n.messages[v].range,a.fullField,a.min,a.max))},i1="enum",_q=function(a,e,r,s,n){a[i1]=Array.isArray(a[i1])?a[i1]:[],a[i1].indexOf(e)===-1&&s.push(i2(n.messages[i1],a.fullField,a[i1].join(", ")))},Iq=function(a,e,r,s,n){if(a.pattern){if(a.pattern instanceof RegExp)a.pattern.lastIndex=0,a.pattern.test(e)||s.push(i2(n.messages.pattern.mismatch,a.fullField,e,a.pattern));else if(typeof a.pattern=="string"){var i=new RegExp(a.pattern);i.test(e)||s.push(i2(n.messages.pattern.mismatch,a.fullField,e,a.pattern))}}},O={required:Jn,whitespace:Dq,type:Eq,range:$q,enum:_q,pattern:Iq},Uq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e,"string")&&!a.required)return r();O.required(a,e,s,i,n,"string"),K(e,"string")||(O.type(a,e,s,i,n),O.range(a,e,s,i,n),O.pattern(a,e,s,i,n),a.whitespace===!0&&O.whitespace(a,e,s,i,n))}r(i)},qq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&O.type(a,e,s,i,n)}r(i)},jq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(e===""&&(e=void 0),K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&(O.type(a,e,s,i,n),O.range(a,e,s,i,n))}r(i)},Wq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&O.type(a,e,s,i,n)}r(i)},Gq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),K(e)||O.type(a,e,s,i,n)}r(i)},Xq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&(O.type(a,e,s,i,n),O.range(a,e,s,i,n))}r(i)},Yq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&(O.type(a,e,s,i,n),O.range(a,e,s,i,n))}r(i)},Kq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(e==null&&!a.required)return r();O.required(a,e,s,i,n,"array"),e!=null&&(O.type(a,e,s,i,n),O.range(a,e,s,i,n))}r(i)},Zq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&O.type(a,e,s,i,n)}r(i)},Qq="enum",Jq=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n),e!==void 0&&O[Qq](a,e,s,i,n)}r(i)},cj=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e,"string")&&!a.required)return r();O.required(a,e,s,i,n),K(e,"string")||O.pattern(a,e,s,i,n)}r(i)},aj=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e,"date")&&!a.required)return r();if(O.required(a,e,s,i,n),!K(e,"date")){var o;e instanceof Date?o=e:o=new Date(e),O.type(a,o,s,i,n),o&&O.range(a,o.getTime(),s,i,n)}}r(i)},ej=function(a,e,r,s,n){var i=[],t=Array.isArray(e)?"array":typeof e;O.required(a,e,s,i,n,t),r(i)},b4=function(a,e,r,s,n){var i=a.type,t=[],o=a.required||!a.required&&s.hasOwnProperty(a.field);if(o){if(K(e,i)&&!a.required)return r();O.required(a,e,s,t,n,i),K(e,i)||O.type(a,e,s,t,n)}r(t)},rj=function(a,e,r,s,n){var i=[],t=a.required||!a.required&&s.hasOwnProperty(a.field);if(t){if(K(e)&&!a.required)return r();O.required(a,e,s,i,n)}r(i)},B1={string:Uq,method:qq,number:jq,boolean:Wq,regexp:Gq,integer:Xq,float:Yq,array:Kq,object:Zq,enum:Jq,pattern:cj,date:aj,url:b4,hex:b4,email:b4,required:ej,any:rj};function Y4(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var a=JSON.parse(JSON.stringify(this));return a.clone=this.clone,a}}}var K4=Y4(),t3=function(){function c(e){this.rules=null,this._messages=K4,this.define(e)}var a=c.prototype;return a.define=function(r){var s=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(n){var i=r[n];s.rules[n]=Array.isArray(i)?i:[i]})},a.messages=function(r){return r&&(this._messages=Y8(Y4(),r)),this._messages},a.validate=function(r,s,n){var i=this;s===void 0&&(s={}),n===void 0&&(n=function(){});var t=r,o=s,l=n;if(typeof o=="function"&&(l=o,o={}),!this.rules||Object.keys(this.rules).length===0)return l&&l(null,t),Promise.resolve(t);function f(h){var H=[],m={};function V(M){if(Array.isArray(M)){var C;H=(C=H).concat.apply(C,M)}else H.push(M)}for(var d=0;d<h.length;d++)V(h[d]);H.length?(m=X4(H),l(H,m)):l(null,t)}if(o.messages){var v=this.messages();v===K4&&(v=Y4()),Y8(v,o.messages),o.messages=v}else o.messages=this.messages();var u={},p=o.keys||Object.keys(this.rules);p.forEach(function(h){var H=i.rules[h],m=t[h];H.forEach(function(V){var d=V;typeof d.transform=="function"&&(t===r&&(t=W2({},t)),m=t[h]=d.transform(m)),typeof d=="function"?d={validator:d}:d=W2({},d),d.validator=i.getValidationMethod(d),d.validator&&(d.field=h,d.fullField=d.fullField||h,d.type=i.getType(d),u[h]=u[h]||[],u[h].push({rule:d,value:m,source:t,field:h}))})});var z={};return Bq(u,o,function(h,H){var m=h.rule,V=(m.type==="object"||m.type==="array")&&(typeof m.fields=="object"||typeof m.defaultField=="object");V=V&&(m.required||!m.required&&h.value),m.field=h.field;function d(g,L){return W2({},L,{fullField:m.fullField+"."+g,fullFields:m.fullFields?[].concat(m.fullFields,[g]):[g]})}function M(g){g===void 0&&(g=[]);var L=Array.isArray(g)?g:[g];!o.suppressWarning&&L.length&&c.warning("async-validator:",L),L.length&&m.message!==void 0&&(L=[].concat(m.message));var w=L.map(X8(m,t));if(o.first&&w.length)return z[m.field]=1,H(w);if(!V)H(w);else{if(m.required&&!h.value)return m.message!==void 0?w=[].concat(m.message).map(X8(m,t)):o.error&&(w=[o.error(m,i2(o.messages.required,m.field))]),H(w);var k={};m.defaultField&&Object.keys(h.value).map(function($){k[$]=m.defaultField}),k=W2({},k,h.rule.fields);var S={};Object.keys(k).forEach(function($){var F=k[$],o2=Array.isArray(F)?F:[F];S[$]=o2.map(d.bind(null,$))});var P=new c(S);P.messages(o.messages),h.rule.options&&(h.rule.options.messages=o.messages,h.rule.options.error=o.error),P.validate(h.value,h.rule.options||o,function($){var F=[];w&&w.length&&F.push.apply(F,w),$&&$.length&&F.push.apply(F,$),H(F.length?F:null)})}}var C;if(m.asyncValidator)C=m.asyncValidator(m,h.value,M,h.source,o);else if(m.validator){try{C=m.validator(m,h.value,M,h.source,o)}catch(g){console.error==null||console.error(g),o.suppressValidatorError||setTimeout(function(){throw g},0),M(g.message)}C===!0?M():C===!1?M(typeof m.message=="function"?m.message(m.fullField||m.field):m.message||(m.fullField||m.field)+" fails"):C instanceof Array?M(C):C instanceof Error&&M(C.message)}C&&C.then&&C.then(function(){return M()},function(g){return M(g)})},function(h){f(h)},t)},a.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!B1.hasOwnProperty(r.type))throw new Error(i2("Unknown rule type %s",r.type));return r.type||"string"},a.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var s=Object.keys(r),n=s.indexOf("message");return n!==-1&&s.splice(n,1),s.length===1&&s[0]==="required"?B1.required:B1[this.getType(r)]||void 0},c}();t3.register=function(a,e){if(typeof e!="function")throw new Error("Cannot register a validator by type, validator is not a function");B1[a]=e};t3.warning=kq;t3.messages=K4;t3.validators=B1;const sj={class:"vk-form-item__label"},nj={class:"vk-form-item__content"},ij={key:0,class:"vk-form-item__error-msg"},tj=D({name:"SFormItem"}),oj=D({...tj,props:{label:null,prop:null},setup(c,{expose:a}){const e=c,r=G1(jn),s=R(()=>{const z=r==null?void 0:r.model;return z&&e.prop&&!P8(z[e.prop])?z[e.prop]:null}),n=R(()=>{const z=r==null?void 0:r.rules;return z&&e.prop&&z[e.prop]?z[e.prop]:[]}),i=z=>{const h=n.value;if(h)return h.filter(H=>!H.trigger||!z?!0:H.trigger&&H.trigger===z)},t=O1({state:"init",errorMsg:"",loading:!1});let o=null;const l=R(()=>n.value.some(z=>z.required)),f=async z=>{const h=e.prop,H=i(z);if(!(H!=null&&H.length))return!0;if(h){const m=new t3({[h]:H});return t.loading=!0,m.validate({[h]:s.value}).then(()=>{t.state="success",console.log("first")}).catch(V=>{const{errors:d}=V;return t.state="error",t.errorMsg=d&&d.length&&d[0].message||"",console.log(t.state),Promise.reject(V)}).finally(()=>{t.loading=!1})}},v=()=>{t.state="init",t.errorMsg="",t.loading=!1},u=()=>{v();const z=r==null?void 0:r.model;z&&e.prop&&!P8(z[e.prop])&&(z[e.prop]=o,console.log(z[e.prop]))},p={validate:f,prop:e.prop||"",clearValidate:v,resetField:u};return Q4(L0,p),J2(()=>{e.prop&&(r==null||r.addField(p))}),J4(()=>{e.prop&&(r==null||r.removeField(p),o=s.value)}),a({validateStatus:t,validate:f,resetField:u,clearValidate:v}),(z,h)=>(x(),N("div",{class:j(["vk-form-item",{"is-error":t.state==="error","is-success":t.state==="success","is-loading":t.loading,"is-required":l.value}])},[B("label",sj,[W(z.$slots,"label",{label:c.label},()=>[X1(g2(c.label),1)])]),B("div",nj,[W(z.$slots,"default",{validate:f}),t.state==="error"?(x(),N("div",ij,g2(t.errorMsg),1)):E("",!0)])],2))}}),ci=c2(bq),ai=c2(oj);const lj={class:"vk-dropdown"},fj={class:"vk-dropdown__menu"},vj={key:0,role:"separator",class:"divided-placeholder"},mj=["onClick","id"],uj=D({name:"SDropdown"}),pj=D({...uj,props:{content:null,trigger:null,placement:null,manual:{type:Boolean},popperOptions:null,transition:null,openDelay:null,closeDelay:null,menuOptions:null,hideAfterClick:{type:Boolean,default:!0}},emits:["visible-change","select"],setup(c,{expose:a,emit:e}){const r=c,s=T(null),n=t=>{e("visible-change",t)},i=t=>{var o;t.disabled||(e("select",t),r.hideAfterClick&&((o=s.value)==null||o.hide()))};return a({show:()=>{var t;return(t=s.value)==null?void 0:t.show()},hide:()=>{var t;return(t=s.value)==null?void 0:t.hide()}}),(t,o)=>(x(),N("div",lj,[X(A(i3),{trigger:c.trigger,placement:c.placement,"popper-options":c.popperOptions,"open-delay":c.openDelay,"close-delay":c.closeDelay,manual:c.manual,onVisibleChange:n,ref_key:"tooltipRef",ref:s},{content:r2(()=>[B("ul",fj,[(x(!0),N(X2,null,R3(c.menuOptions,l=>(x(),N(X2,{key:l.key},[l.divided?(x(),N("li",vj)):E("",!0),B("li",{class:j(["vk-dropdown__item",{"is-disabled":l.disabled,"is-divided":l.divided}]),onClick:f=>i(l),id:`dropdown-item-${l.key}`},[X(A(v4),{vNode:l.label},null,8,["vNode"])],10,mj)],64))),128))])]),default:r2(()=>[W(t.$slots,"default")]),_:3},8,["trigger","placement","popper-options","open-delay","close-delay","manual"])]))}}),Hj=c2(pj),ei=Hj,hj={modelValue:Boolean,label:String,disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},zj=B("span",{class:"h-checkbox__inner"},null,-1),dj=["disabled","value"],Vj={class:"h-checkbox__label"},Mj={name:"SCheckbox"},Cj=D({...Mj,props:hj,emits:["update:modelValue","change"],setup(c,{emit:a}){const e=c,r=G1("checkboxGroup",{}),s=R(()=>!!(r&&r.modelValue)),n=R({get(){return s.value?r&&r.modelValue.value:e.modelValue},set(l){s.value?r&&r.changeEvent(l):a("update:modelValue",l)}}),i=R(()=>s.value?n.value.includes(e.label):n.value),t=R(()=>s.value&&r&&r.disabled.value||e.disabled),o=()=>{c5(()=>a("change",n.value))};return(l,f)=>(x(),N("label",{class:j(["h-checkbox",[{"is-checked":i.value},{"is-disabled":t.value},{"is-bordered":l.border}]])},[B("span",{class:j(["h-checkbox__input",{"is-checked":i.value,"is-disabled":t.value,"is-indeterminate":l.indeterminate}])},[zj,u1(B("input",{class:"h-checkbox__original",type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=v=>n.value=v),disabled:t.value,value:l.label,onChange:o},null,40,dj),[[a5,n.value]])],2),B("span",Vj,[W(l.$slots,"default"),l.$slots.default?E("",!0):(x(),N(X2,{key:0},[X1(g2(l.label),1)],64))])],2))}}),gj=c2(Cj),ri=gj,Z8={SButton:Pn,SIcon:Q,SCollapse:Bn,SCollapseItem:Fn,STooltip:i3,SInput:f4,SSwitch:Wn,SSelect:Gn,SAutoComplete:Xn,SMessage:Yn,SDialog:Kn,STree:Qn,SFormItem:ai,SForm:ci,SDropdown:ei,SCheckbox:ri},Lj=c=>{for(const a in Z8)c.component(a,Z8[a])},xj=(c,a)=>{Lj(c)},bj={install:xj},Q8=Object.freeze(Object.defineProperty({__proto__:null,SAutoComplete:Xn,SButton:Pn,SCheckbox:ri,SCollapse:Bn,SCollapseItem:Fn,SDialog:Kn,SDropdown:ei,SForm:ci,SFormItem:ai,SIcon:Q,SInput:f4,SMessage:Yn,SSelect:Gn,SSwitch:Wn,STooltip:i3,STree:Qn,default:bj},Symbol.toStringTag,{value:"Module"})),yj={install:c=>{for(const a in Q8)c.use(Q8[a])}};Vo.add(GF);const Nj={...Ei,enhanceApp({app:c}){c.config.globalProperties.$message=j4,c.use(yj),c.component("demo-preview",xO)}};function si(c){if(c.extends){const a=si(c.extends);return{...a,...c,async enhanceApp(e){a.enhanceApp&&await a.enhanceApp(e),c.enhanceApp&&await c.enhanceApp(e)}}}return c}const f1=si(Nj),wj=D({name:"VitePressApp",setup(){const{site:c}=Bi();return J2(()=>{Fi(()=>{document.documentElement.lang=c.value.lang,document.documentElement.dir=c.value.dir})}),Oi(),Di(),Ri(),f1.setup&&f1.setup(),()=>Z4(f1.Layout)}});async function Sj(){const c=Aj(),a=kj();a.provide(xi,c);const e=bi(c.route);return a.provide(yi,e),a.component("Content",Ni),a.component("ClientOnly",wi),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),f1.enhanceApp&&await f1.enhanceApp({app:a,router:c,siteData:Si}),{app:a,router:c,data:e}}function kj(){return ki(wj)}function Aj(){let c=y4,a;return Ai(e=>{let r=Ti(e);return c&&(a=r),(c||a===r)&&(r=r.replace(/\.js$/,".lean.js")),y4&&(c=!1),Pi(()=>import(r),[])},f1.NotFound)}y4&&Sj().then(({app:c,router:a,data:e})=>{a.go().then(()=>{Li(a.route,e.site),c.mount("#app")})});export{Sj as createApp};