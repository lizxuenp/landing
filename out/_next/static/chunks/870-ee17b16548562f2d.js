(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{8045:function(e,t,i){"use strict";var n=i(9361).default,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,m=void 0!==p&&p,z=e.loading,A=e.lazyRoot,k=void 0===A?null:A,R=e.lazyBoundary,P=e.className,I=e.quality,_=e.width,L=e.height,C=e.style,M=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,D=e.placeholder,B=void 0===D?"empty":D,W=e.blurDataURL,V=h(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=l.useContext(d.ImageConfigContext),H=l.useMemo((function(){var e=y||U||s.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:i})}),[U]),Z=V,F=i?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(F=Z.layout),delete Z.layout);var T=x;if("loader"in Z){if(Z.loader){var G=Z.loader;T=function(e){e.config;var t=h(e,["config"]);return G(t)}}delete Z.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(W=W||Q.blurDataURL,J=Q.src,(!F||"fill"!==F)&&(L=L||Q.height,_=_||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:J;var K=O(_),X=O(L),Y=O(I),$=!m&&("lazy"===z||"undefined"===typeof z);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);b.has(t)&&($=!1);v&&(f=!0);var ee,te=r(l.useState(!1),2),ie=te[0],ne=te[1],re=r(u.useIntersection({rootRef:k,rootMargin:R||"200px",disabled:!$}),3),oe=re[0],ae=re[1],le=re[2],ce=!$||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:q};0;var ge=Object.assign({},C,fe),pe="blur"!==B||ie?{}:{backgroundSize:M||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===F)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var he=X/K,me=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===F?(se.display="block",se.position="relative",de=!0,ue.paddingTop=me):"intrinsic"===F?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===F&&(se.display="inline-block",se.position="relative",se.width=K,se.height=X)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};ce&&(ve=j({config:H,src:t,unoptimized:f,layout:F,width:K,quality:Y,sizes:i,loader:T}));var ye=t;0;var be,we="imagesrcset",ze="imagesizes";we="imageSrcSet",ze="imageSizes";var Se=(n(be={},we,ve.srcSet),n(be,ze,ve.sizes),be),je=l.default.useLayoutEffect,Oe=l.useRef(N),xe=l.useRef(t);l.useEffect((function(){Oe.current=N}),[N]),je((function(){xe.current!==t&&(le(),xe.current=t)}),[le,t]);var Ae=g({isLazy:$,imgAttributes:ve,heightInt:X,widthInt:K,qualityInt:Y,layout:F,className:P,imgStyle:ge,blurStyle:pe,loading:z,config:H,unoptimized:f,placeholder:B,loader:T,srcString:ye,onLoadingCompleteRef:Oe,setBlurComplete:ne,setIntersection:oe,isVisible:ce,noscriptSizes:i},Z);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:se},de?l.default.createElement("span",{style:ue},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(E,Object.assign({},Ae))),m?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},Se))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]}i.default=e,t&&t.set(e,i);return i}(i(7294)),c=(a=i(5443))&&a.__esModule?a:{default:a},s=i(9309),u=i(7190),d=i(9977),f=(i(3794),i(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function h(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0}||{},v=m.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalUnoptimized:!0},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(k(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(k(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(k(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function j(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=z.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,s=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,p=e.config,m=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,S=e.onError,O=(e.isVisible,e.noscriptSizes),x=h(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=s?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,t,{decoding:"async","data-nimg":r,className:o,style:g({},a,c),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&A(e,f,0,u,y,b)}),[w,f,r,u,y,b]),onLoad:function(e){A(e.currentTarget,f,0,u,y,b),z&&z(e)},onError:function(e){"blur"===u&&b(!0),S&&S(e)}})),(s||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},x,j({config:p,src:f,unoptimized:m,layout:r,width:i,quality:n,sizes:O,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(8045)},2981:function(e,t,i){"use strict";var n=i(7294);const r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",clipRule:"evenodd"}))}));t.Z=r},2565:function(e,t,i){"use strict";var n=i(7294);const r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"}))}));t.Z=r},8113:function(e,t,i){"use strict";var n=i(7294);const r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}))}));t.Z=r},7568:function(e,t,i){"use strict";function n(e,t,i,n,r,o,a){try{var l=e[o](a),c=l.value}catch(s){return void i(s)}l.done?t(c):Promise.resolve(c).then(n,r)}function r(e){return function(){var t=this,i=arguments;return new Promise((function(r,o){var a=e.apply(t,i);function l(e){n(a,r,o,l,c,"next",e)}function c(e){n(a,r,o,l,c,"throw",e)}l(void 0)}))}}i.d(t,{Z:function(){return r}})},9396:function(e,t,i){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}i.d(t,{Z:function(){return n}})}}]);