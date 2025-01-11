"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{5952:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(2265);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:u="",children:d,iconNode:c,...f}=e;return(0,n.createElement)("svg",{ref:t,...a,width:i,height:i,stroke:r,strokeWidth:s?24*Number(l)/Number(i):l,className:o("lucide",u),...f},[...c.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=((e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:s,...u}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:o("lucide-".concat(i(e)),s),...u})});return r.displayName="".concat(e),r})("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},7138:function(e,t,r){r.d(t,{default:function(){return i.a}});var n=r(231),i=r.n(n)},8173:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(9920),i=r(1452),o=r(7437),a=i._(r(2265)),l=n._(r(4887)),s=n._(r(8321)),u=r(497),d=r(7103),c=r(3938);r(2301);let f=r(291),p=n._(r(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:_,sizesInput:j,onLoad:C,onError:S,...E}=e;return(0,o.jsx)("img",{...E,...g(f),loading:m,width:s,height:l,decoding:u,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,p,b,w,x,v,j))},[r,p,b,w,x,S,v,j,t]),onLoad:e=>{h(e.currentTarget,p,b,w,x,v,j)},onError:e=>{_(!0),"empty"!==p&&x(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[b,w]=(0,a.useState)(!1),[x,_]=(0,a.useState)(!1),{props:j,meta:C}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext({})},687:function(e,t){function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2301);let n=r(1564),i=r(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:g,width:v,height:y,fill:b=!1,style:w,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:C="empty",blurDataURL:S,fetchPriority:E,layout:P,objectFit:O,objectPosition:M,lazyBoundary:I,lazyRoot:R,...k}=e,{imgConf:z,showAltText:A,blurComplete:L,defaultLoader:N}=t,D=z||i.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let W=k.loader||N;delete k.loader,delete k.srcSet;let T="__next_img_default"in W;if(T){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let U="",F=a(v),B=a(y);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,U=e.src,!b){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),l.unoptimized&&(f=!0),T&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let V=a(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:M}:{},A?{}:{color:"transparent"},w),$=L||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:s,blurHeight:u,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+C+'")',q=$?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:F,quality:V,sizes:c,loader:W});return{props:{...k,loading:G?"lazy":m,fetchPriority:E,width:F,height:B,decoding:"async",className:h,style:{...H,...q},sizes:Y.sizes,srcSet:Y.srcSet,src:x||Y.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:b}}}},8321:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let n=r(9920),i=r(1452),o=r(7437),a=i._(r(2265)),l=n._(r(5960)),s=r(2901),u=r(6590),d=r(687);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(9920)._(r(2265)),i=r(7103),o=n.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(e,t){function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5960:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2265),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4458:function(e,t,r){r.d(t,{Ee:function(){return w},NY:function(){return x},fC:function(){return b}});var n=r(2265),i=r(8324),o=r(5137),a=r(1336),l=r(5171),s=r(7437),u="Avatar",[d,c]=(0,i.b)(u),[f,p]=d(u),m=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...i}=e,[o,a]=n.useState("idle");return(0,s.jsx)(f,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:(0,s.jsx)(l.WV.span,{...i,ref:t})})});m.displayName=u;var h="AvatarImage",g=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:i,onLoadingStatusChange:u=()=>{},...d}=e,c=p(h,r),f=function(e,t){let[r,i]=n.useState("idle");return(0,a.b)(()=>{if(!e){i("error");return}let r=!0,n=new window.Image,o=e=>()=>{r&&i(e)};return i("loading"),n.onload=o("loaded"),n.onerror=o("error"),n.src=e,t&&(n.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(i,d.referrerPolicy),m=(0,o.W)(e=>{u(e),c.onImageLoadingStatusChange(e)});return(0,a.b)(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,s.jsx)(l.WV.img,{...d,ref:t,src:i}):null});g.displayName=h;var v="AvatarFallback",y=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:i,...o}=e,a=p(v,r),[u,d]=n.useState(void 0===i);return n.useEffect(()=>{if(void 0!==i){let e=window.setTimeout(()=>d(!0),i);return()=>window.clearTimeout(e)}},[i]),u&&"loaded"!==a.imageLoadingStatus?(0,s.jsx)(l.WV.span,{...o,ref:t}):null});y.displayName=v;var b=m,w=g,x=y},4446:function(e,t,r){r.d(t,{M:function(){return v}});var n=r(7437),i=r(2265),o=r(5050),a=r(458),l=r(7797),s=r(9791);class u extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:r}=e,o=(0,i.useId)(),a=(0,i.useRef)(null),l=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,i.useContext)(s._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:i}=l.current;if(r||!a.current||!e||!t)return;a.current.dataset.motionPopId=o;let s=document.createElement("style");return d&&(s.nonce=d),document.head.appendChild(s),s.sheet&&s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(s)}},[r]),(0,n.jsx)(u,{isPresent:r,childRef:a,sizeRef:l,children:i.cloneElement(t,{ref:a})})}let c=e=>{let{children:t,initial:r,isPresent:o,onExitComplete:s,custom:u,presenceAffectsLayout:c,mode:p}=e,m=(0,a.h)(f),h=(0,i.useId)(),g=(0,i.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;s&&s()},[m,s]),v=(0,i.useMemo)(()=>({id:h,initial:r,isPresent:o,custom:u,onExitComplete:g,register:e=>(m.set(e,!1),()=>m.delete(e))}),c?[Math.random(),g]:[o,g]);return(0,i.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[o]),i.useEffect(()=>{o||m.size||!s||s()},[o]),"popLayout"===p&&(t=(0,n.jsx)(d,{isPresent:o,children:t})),(0,n.jsx)(l.O.Provider,{value:v,children:t})};function f(){return new Map}var p=r(3241);let m=e=>e.key||"";function h(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var g=r(9033);let v=e=>{let{children:t,custom:r,initial:l=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:d="sync",propagate:f=!1}=e,[v,y]=(0,p.oO)(f),b=(0,i.useMemo)(()=>h(t),[t]),w=f&&!v?[]:b.map(m),x=(0,i.useRef)(!0),_=(0,i.useRef)(b),j=(0,a.h)(()=>new Map),[C,S]=(0,i.useState)(b),[E,P]=(0,i.useState)(b);(0,g.L)(()=>{x.current=!1,_.current=b;for(let e=0;e<E.length;e++){let t=m(E[e]);w.includes(t)?j.delete(t):!0!==j.get(t)&&j.set(t,!1)}},[E,w.length,w.join("-")]);let O=[];if(b!==C){let e=[...b];for(let t=0;t<E.length;t++){let r=E[t],n=m(r);w.includes(n)||(e.splice(t,0,r),O.push(r))}"wait"===d&&O.length&&(e=O),P(h(e)),S(b);return}let{forceRender:M}=(0,i.useContext)(o.p);return(0,n.jsx)(n.Fragment,{children:E.map(e=>{let t=m(e),i=(!f||!!v)&&(b===E||w.includes(t));return(0,n.jsx)(c,{isPresent:i,initial:(!x.current||!!l)&&void 0,custom:i?void 0:r,presenceAffectsLayout:u,mode:d,onExitComplete:i?void 0:()=>{if(!j.has(t))return;j.set(t,!0);let e=!0;j.forEach(t=>{t||(e=!1)}),e&&(null==M||M(),P(_.current),f&&(null==y||y()),s&&s())},children:e},t)})})}},7476:function(e,t,r){r.d(t,{Y:function(){return a}});var n=r(2265),i=r(6167);let o={some:0,all:1};function a(e,{root:t,margin:r,amount:a,once:l=!1}={}){let[s,u]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current||l&&s)return;let n={root:t&&t.current||void 0,margin:r,amount:a};return function(e,t,{root:r,margin:n,amount:a="some"}={}){let l=(0,i.IG)(e),s=new WeakMap,u=new IntersectionObserver(e=>{e.forEach(e=>{let r=s.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?s.set(e.target,r):u.unobserve(e.target)}else"function"==typeof r&&(r(e),s.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof a?a:o[a]});return l.forEach(e=>u.observe(e)),()=>u.disconnect()}(e.current,()=>(u(!0),l?void 0:()=>u(!1)),n)},[t,e,r,l,a]),s}}}]);