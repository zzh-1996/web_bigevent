!function(){"use strict";var t=function(e){var n=e,o=function(){return n};return{get:o,set:function(t){n=t},clone:function(){return t(o())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.util.Tools");function o(t,e){return i(document.createElement("canvas"),t,e)}function r(t){return t.getContext("2d")}function i(t,e,n){return t.width=e,t.height=n,t}var a,u,c,l,s={create:o,clone:function(t){var e;return r(e=o(t.width,t.height)).drawImage(t,0,0),e},resize:i,get2dContext:r,get3dContext:function(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(n){}return e||(e=null),e}},f={getWidth:function(t){return t.naturalWidth||t.width},getHeight:function(t){return t.naturalHeight||t.height}},d=window.Promise?window.Promise:function(){var t=function(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(t,n(i,this),n(a,this))},e=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(t){setTimeout(t,1)};function n(t,e){return function(){t.apply(e,arguments)}}var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function r(t){var n=this;null!==this._state?e(function(){var e=n._state?t.onFulfilled:t.onRejected;if(null!==e){var o;try{o=e(n._value)}catch(r){return void t.reject(r)}t.resolve(o)}else(n._state?t.resolve:t.reject)(n._value)}):this._deferreds.push(t)}function i(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void c(n(e,t),n(i,this),n(a,this))}this._state=!0,this._value=t,u.call(this)}catch(o){a.call(this,o)}}function a(t){this._state=!1,this._value=t,u.call(this)}function u(){for(var t=0,e=this._deferreds.length;t<e;t++)r.call(this,this._deferreds[t]);this._deferreds=null}function c(t,e,n){var o=!1;try{t(function(t){o||(o=!0,e(t))},function(t){o||(o=!0,n(t))})}catch(r){if(o)return;o=!0,n(r)}}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype.then=function(e,n){var o=this;return new t(function(t,i){r.call(o,new function(t,e,n,o){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=o}(e,n,t,i))})},t.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&o(arguments[0])?arguments[0]:arguments);return new t(function(t,n){if(0===e.length)return t([]);var o=e.length;function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(t){r(i,t)},n)}e[i]=a,0==--o&&t(e)}catch(c){n(c)}}for(var i=0;i<e.length;i++)r(i,e[i])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},t}(),h=function(t){return function(){return t}},p={noop:function(){},noarg:function(t){return function(){return t()}},compose:function(t,e){return function(){return t(e.apply(null,arguments))}},constant:h,identity:function(t){return t},tripleEquals:function(t,e){return t===e},curry:function(t){for(var e=new Array(arguments.length-1),n=1;n<arguments.length;n++)e[n-1]=arguments[n];return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];var r=e.concat(n);return t.apply(null,r)}},not:function(t){return function(){return!t.apply(null,arguments)}},die:function(t){return function(){throw new Error(t)}},apply:function(t){return t()},call:function(t){t()},never:h(!1),always:h(!0)},m=p.never,g=p.always,v=function(){return y},y=(l={fold:function(t,e){return t()},is:m,isSome:m,isNone:g,getOr:c=function(t){return t},getOrThunk:u=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},or:c,orThunk:u,map:v,ap:v,each:function(){},bind:v,flatten:v,exists:m,forall:g,filter:v,equals:a=function(t){return t.isNone()},equals_:a,toArray:function(){return[]},toString:p.constant("none()")},Object.freeze&&Object.freeze(l),l),b=function(t){var e=function(){return t},n=function(){return r},o=function(e){return e(t)},r={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:g,isNone:m,getOr:e,getOrThunk:e,getOrDie:e,or:n,orThunk:n,map:function(e){return b(e(t))},ap:function(e){return e.fold(v,function(e){return b(e(t))})},each:function(e){e(t)},bind:o,flatten:e,exists:o,forall:o,filter:function(e){return e(t)?r:y},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(m,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return r},w={some:b,none:v,from:function(t){return null===t||t===undefined?y:b(t)}},x="undefined"!=typeof window?window:Function("return this;")(),R=function(t,e){for(var n=e!==undefined&&null!==e?e:x,o=0;o<t.length&&n!==undefined&&null!==n;++o)n=n[t[o]];return n},I=function(t,e){var n=t.split(".");return R(n,e)},T={getOrDie:function(t,e){var n=I(t,e);if(n===undefined||null===n)throw t+" not available on this browser";return n}};function k(){return new(T.getOrDie("FileReader"))}var C={atob:function(t){return T.getOrDie("atob")(t)},requestAnimationFrame:function(t){T.getOrDie("requestAnimationFrame")(t)}};function B(t){return new d(function(e,n){var o=URL.createObjectURL(t),r=new Image,i=function(){r.removeEventListener("load",a),r.removeEventListener("error",u)};function a(){i(),e(r)}function u(){i(),n("Unable to load data of type "+t.type+": "+o)}r.addEventListener("load",a),r.addEventListener("error",u),r.src=o,r.complete&&a()})}function U(t){return new d(function(e,n){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(){200==this.status&&e(this.response)},o.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},o.send()})}function M(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return w.none();for(var o,r,i,a=n[1],u=e[1],c=C.atob(u),l=c.length,s=Math.ceil(l/1024),f=new Array(s),d=0;d<s;++d){for(var h=1024*d,p=Math.min(h+1024,l),m=new Array(p-h),g=h,v=0;g<p;++v,++g)m[v]=c[g].charCodeAt(0);f[d]=(o=m,new(T.getOrDie("Uint8Array"))(o))}return w.some((r=f,i={type:a},new(T.getOrDie("Blob"))(r,i)))}function A(t){return new d(function(e,n){M(t).fold(function(){n("uri is not base64: "+t)},e)})}function j(t){return new d(function(e){var n=new k;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}var E={blobToImage:B,imageToBlob:function(t){return(e=t,new d(function(t){e.complete?t(e):e.addEventListener("load",function n(){e.removeEventListener("load",n),t(e)})})).then(function(t){var e=t.src;return 0===e.indexOf("blob:")?U(e):0===e.indexOf("data:")?A(e):U(e)});var e},blobToArrayBuffer:function(t){return new d(function(e){var n=new k;n.onloadend=function(){e(n.result)},n.readAsArrayBuffer(t)})},blobToDataUri:j,blobToBase64:function(t){return j(t).then(function(t){return t.split(",")[1]})},dataUriToBlobSync:M,canvasToBlob:function(t,e,n){return e=e||"image/png",HTMLCanvasElement.prototype.toBlob?new d(function(o){t.toBlob(function(t){o(t)},e,n)}):A(t.toDataURL(e,n))},canvasToDataURL:function(t,e,n){return e=e||"image/png",t.then(function(t){return t.toDataURL(e,n)})},blobToCanvas:function(t){return B(t).then(function(t){var e,n;return e=t,URL.revokeObjectURL(e.src),n=s.create(f.getWidth(t),f.getHeight(t)),s.get2dContext(n).drawImage(t,0,0),n})},uriToBlob:function(t){return 0===t.indexOf("blob:")?U(t):0===t.indexOf("data:")?A(t):null}},z=function(t){return E.blobToImage(t)},O=function(t){return E.imageToBlob(t)};function D(t,e,n){var o=e.type;function r(e,n){return t.then(function(t){return E.canvasToDataURL(t,e,n)})}return{getType:p.constant(o),toBlob:function(){return d.resolve(e)},toDataURL:function(){return n},toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return E.canvasToBlob(t,e,n)})},toAdjustedDataURL:r,toAdjustedBase64:function(t,e){return r(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function(){return t.then(s.clone)}}}function S(t){return E.blobToDataUri(t).then(function(e){return D(E.blobToCanvas(t),t,e)})}var L={fromBlob:S,fromCanvas:function(t,e){return E.canvasToBlob(t,e).then(function(e){return D(d.resolve(t),e,t.toDataURL())})},fromImage:function(t){return E.imageToBlob(t).then(function(t){return S(t)})},fromBlobAndUrlSync:function(t,e){return D(E.blobToCanvas(t),t,e)}};function H(t,e,n){return(t=parseFloat(t))>n?t=n:t<e&&(t=e),t}var _=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];function F(t,e){var n,o,r,i,a=[],u=new Array(10);for(n=0;n<5;n++){for(o=0;o<5;o++)a[o]=e[o+5*n];for(o=0;o<5;o++){for(i=0,r=0;r<5;r++)i+=t[o+5*r]*a[r];u[o+5*n]=i}}return u}function P(t,e){return e=H(e,0,1),t.map(function(t,n){return n%6==0?t=1-(1-t)*e:t*=e,H(t,0,1)})}var W={identity:function(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]},adjust:P,multiply:F,adjustContrast:function(t,e){var n;return e=H(e,-1,1),F(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?_[e]:_[Math.floor(e)]*(1-n)+_[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])},adjustBrightness:function(t,e){return F(t,[1,0,0,0,e=H(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])},adjustSaturation:function(t,e){var n;return F(t,[.3086*(1-(n=1+((e=H(e,-1,1))>0?3*e:e)))+n,.6094*(1-n),.082*(1-n),0,0,.3086*(1-n),.6094*(1-n)+n,.082*(1-n),0,0,.3086*(1-n),.6094*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])},adjustHue:function(t,e){var n,o,r,i,a;return e=H(e,-180,180)/180*Math.PI,F(t,[(r=.213)+.787*(n=Math.cos(e))+(o=Math.sin(e))*-r,(i=.715)+n*-i+o*-i,(a=.072)+n*-a+.928*o,0,0,r+n*-r+.143*o,i+n*(1-i)+.14*o,a+n*-a+-.283*o,0,0,r+n*-r+-.787*o,i+n*-i+o*i,a+.928*n+o*a,0,0,0,0,0,1,0,0,0,0,0,1])},adjustColors:function(t,e,n,o){return F(t,[e=H(e,0,2),0,0,0,0,0,n=H(n,0,2),0,0,0,0,0,o=H(o,0,2),0,0,0,0,0,1,0,0,0,0,0,1])},adjustSepia:function(t,e){return F(t,P([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=H(e,0,1)))},adjustGrayscale:function(t,e){return F(t,P([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=H(e,0,1)))}};function q(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,u=s.get2dContext(o),a=function(t,e){var n,o,r,i,a,u=t.data,c=e[0],l=e[1],s=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=e[9],y=e[10],b=e[11],w=e[12],x=e[13],R=e[14],I=e[15],T=e[16],k=e[17],C=e[18],B=e[19];for(a=0;a<u.length;a+=4)n=u[a],o=u[a+1],r=u[a+2],i=u[a+3],u[a]=n*c+o*l+r*s+i*f+d,u[a+1]=n*h+o*p+r*m+i*g+v,u[a+2]=n*y+o*b+r*w+i*x+R,u[a+3]=n*I+o*T+r*k+i*C+B;return t}(u.getImageData(0,0,o.width,o.height),i),u.putImageData(a,0,0),L.fromCanvas(o,r);var o,r,i,a,u})}function V(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,c=s.get2dContext(o),a=c.getImageData(0,0,o.width,o.height),u=c.getImageData(0,0,o.width,o.height),u=function(t,e,n){var o,r,i,a,u,c,l,s,f,d,h,p,m,g,v,y,b;function w(t,e,n){return t>n?t=n:t<e&&(t=e),t}for(i=Math.round(Math.sqrt(n.length)),a=Math.floor(i/2),o=t.data,r=e.data,y=t.width,b=t.height,c=0;c<b;c++)for(u=0;u<y;u++){for(l=s=f=0,h=0;h<i;h++)for(d=0;d<i;d++)p=w(u+d-a,0,y-1),m=w(c+h-a,0,b-1),g=4*(m*y+p),v=n[h*i+d],l+=o[g]*v,s+=o[g+1]*v,f+=o[g+2]*v;r[g=4*(c*y+u)]=w(l,0,255),r[g+1]=w(s,0,255),r[g+2]=w(f,0,255)}return e}(a,u,i),c.putImageData(u,0,0),L.fromCanvas(o,r);var o,r,i,a,u,c})}function N(t){return function(e,n){return e.toCanvas().then(function(o){return function(e,n,o){var r,i,a=s.get2dContext(e),u=new Array(256);for(i=0;i<u.length;i++)u[i]=t(i,o);return r=function(t,e){var n,o=t.data;for(n=0;n<o.length;n+=4)o[n]=e[o[n]],o[n+1]=e[o[n+1]],o[n+2]=e[o[n+2]];return t}(a.getImageData(0,0,e.width,e.height),u),a.putImageData(r,0,0),L.fromCanvas(e,n)}(o,e.getType(),n)})}}function $(t){return function(e,n){return q(e,t(W.identity(),n))}}function X(t){return function(e){return V(e,t)}}var G,Y={invert:(G=[-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0],function(t){return q(t,G)}),brightness:$(W.adjustBrightness),hue:$(W.adjustHue),saturate:$(W.adjustSaturation),contrast:$(W.adjustContrast),grayscale:$(W.adjustGrayscale),sepia:$(W.adjustSepia),colorize:function(t,e,n,o){return q(t,W.adjustColors(W.identity(),e,n,o))},sharpen:X([0,-1,0,-1,5,-1,0,-1,0]),emboss:X([-2,-1,0,-1,1,1,0,1,2]),gamma:N(function(t,e){return 255*Math.pow(t/255,1-e)}),exposure:N(function(t,e){return 255*(1-Math.exp(-t/255*e))}),colorFilter:q,convoluteFilter:V},J={scale:function Jt(t,e,n){var o=f.getWidth(t),r=f.getHeight(t),i=e/o,a=n/r,u=!1;(i<.5||i>2)&&(i=i<.5?.5:2,u=!0),(a<.5||a>2)&&(a=a<.5?.5:2,u=!0);var c,l,h,p=(c=t,l=i,h=a,new d(function(t){var e=f.getWidth(c),n=f.getHeight(c),o=Math.floor(e*l),r=Math.floor(n*h),i=s.create(o,r),a=s.get2dContext(i);a.drawImage(c,0,0,e,n,0,0,o,r),t(i)}));return u?p.then(function(t){return Jt(t,e,n)}):p}},K={rotate:function(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=s.create(o.width,o.height),u=s.get2dContext(a),c=0,l=0,90!=(i=i<0?360+i:i)&&270!=i||s.resize(a,a.height,a.width),90!=i&&180!=i||(c=a.width),270!=i&&180!=i||(l=a.height),u.translate(c,l),u.rotate(i*Math.PI/180),u.drawImage(o,0,0),L.fromCanvas(a,r);var o,r,i,a,u,c,l})},flip:function(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=s.create(o.width,o.height),u=s.get2dContext(a),"v"==i?(u.scale(1,-1),u.drawImage(o,0,-a.height)):(u.scale(-1,1),u.drawImage(o,-a.width,0)),L.fromCanvas(a,r);var o,r,i,a,u})},crop:function(t,e,n,o,r){return t.toCanvas().then(function(i){return a=i,u=t.getType(),c=e,l=n,f=o,d=r,h=s.create(f,d),s.get2dContext(h).drawImage(a,-c,-l),L.fromCanvas(h,u);var a,u,c,l,f,d,h})},resize:function(t,e,n){return t.toCanvas().then(function(o){return J.scale(o,e,n).then(function(e){return L.fromCanvas(e,t.getType())})})}},Z={invert:function(t){return Y.invert(t)},sharpen:function(t){return Y.sharpen(t)},emboss:function(t){return Y.emboss(t)},brightness:function(t,e){return Y.brightness(t,e)},hue:function(t,e){return Y.hue(t,e)},saturate:function(t,e){return Y.saturate(t,e)},contrast:function(t,e){return Y.contrast(t,e)},grayscale:function(t,e){return Y.grayscale(t,e)},sepia:function(t,e){return Y.sepia(t,e)},colorize:function(t,e,n,o){return Y.colorize(t,e,n,o)},gamma:function(t,e){return Y.gamma(t,e)},exposure:function(t,e){return Y.exposure(t,e)},flip:function(t,e){return K.flip(t,e)},crop:function(t,e,n,o,r){return K.crop(t,e,n,o,r)},resize:function(t,e,n){return K.resize(t,e,n)},rotate:function(t,e){return K.rotate(t,e)}},Q=function(t){return t.toBlob()},tt={blobToImageResult:function(t){return L.fromBlob(t)},fromBlobAndUrlSync:function(t,e){return L.fromBlobAndUrlSync(t,e)},imageToImageResult:function(t){return L.fromImage(t)},imageResultToBlob:function(t,e,n){return e===undefined&&n===undefined?Q(t):t.toAdjustedBlob(e,n)},imageResultToOriginalBlob:Q,imageResultToDataURL:function(t){return t.toDataURL()}},et=function(){return T.getOrDie("URL")},nt={createObjectURL:function(t){return et().createObjectURL(t)},revokeObjectURL:function(t){et().revokeObjectURL(t)}},ot=tinymce.util.Tools.resolve("tinymce.util.Delay"),rt=tinymce.util.Tools.resolve("tinymce.util.Promise"),it=tinymce.util.Tools.resolve("tinymce.util.URI"),at=function(t){return t.getParam("imagetools_toolbar","rotateleft rotateright | flipv fliph | crop editimage imageoptions")},ut=function(t){return t.getParam("imagetools_proxy")},ct=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),lt=tinymce.util.Tools.resolve("tinymce.ui.Factory"),st=tinymce.util.Tools.resolve("tinymce.geom.Rect"),ft=function(t){return new rt(function(e){var n=function(){t.removeEventListener("load",n),e(t)};t.complete?e(t):t.addEventListener("load",n)})},dt=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),ht=tinymce.util.Tools.resolve("tinymce.util.Observable"),pt=tinymce.util.Tools.resolve("tinymce.util.VK"),mt=0,gt={create:function(t){return new(lt.get("Control").extend({Defaults:{classes:"imagepanel"},selection:function(t){return arguments.length?(this.state.set("rect",t),this):this.state.get("rect")},imageSize:function(){var t=this.state.get("viewRect");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set("cropEnabled",t)},imageSrc:function(t){var e=this,n=new Image;n.src=t,ft(n).then(function(){var t,o,r=e.state.get("viewRect");if((o=e.$el.find("img"))[0])o.replaceWith(n);else{var i=document.createElement("div");i.className="mce-imagepanel-bg",e.getEl().appendChild(i),e.getEl().appendChild(n)}t={x:0,y:0,w:n.naturalWidth,h:n.naturalHeight},e.state.set("viewRect",t),e.state.set("rect",st.inflate(t,-20,-20)),r&&r.w===t.w&&r.h===t.h||e.zoomFit(),e.repaintImage(),e.fire("load")})},zoom:function(t){return arguments.length?(this.state.set("zoom",t),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,o,r,i;t=this.$el.find("img"),e=this.getEl().clientWidth,n=this.getEl().clientHeight,o=t[0].naturalWidth,r=t[0].naturalHeight,(i=Math.min((e-10)/o,(n-10)/r))>=1&&(i=1),this.zoom(i)},repaintImage:function(){var t,e,n,o,r,i,a,u,c,l,s;s=this.getEl(),c=this.zoom(),l=this.state.get("rect"),a=this.$el.find("img"),u=this.$el.find(".mce-imagepanel-bg"),r=s.offsetWidth,i=s.offsetHeight,n=a[0].naturalWidth*c,o=a[0].naturalHeight*c,t=Math.max(0,r/2-n/2),e=Math.max(0,i/2-o/2),a.css({left:t,top:e,width:n,height:o}),u.css({left:t,top:e,width:n,height:o}),this.cropRect&&(this.cropRect.setRect({x:l.x*c+t,y:l.y*c+e,w:l.w*c,h:l.h*c}),this.cropRect.setClampRect({x:t,y:e,w:n,h:o}),this.cropRect.setViewPortRect({x:0,y:0,w:r,h:i}))},bindStates:function(){var t=this;function e(e){t.cropRect=function(t,e,o,r,i){var a,u,c,l,s="mce-",f=s+"crid-"+mt++;function d(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function h(e,n,r,i){var u,c,l,s,f;u=n.x,c=n.y,l=n.w,s=n.h,u+=r*e.deltaX,c+=i*e.deltaY,(l+=r*e.deltaW)<20&&(l=20),(s+=i*e.deltaH)<20&&(s=20),f=t=st.clamp({x:u,y:c,w:l,h:s},o,"move"===e.name),f=d(o,f),a.fire("updateRect",{rect:f}),g(f)}function p(t){function o(t,e){e.h<0&&(e.h=0),e.w<0&&(e.w=0),dt("#"+f+"-"+t,r).css({left:e.x,top:e.y,width:e.w,height:e.h})}n.each(u,function(e){dt("#"+f+"-"+e.name,r).css({left:t.w*e.xMul+t.x,top:t.h*e.yMul+t.y})}),o("top",{x:e.x,y:e.y,w:e.w,h:t.y-e.y}),o("right",{x:t.x+t.w,y:t.y,w:e.w-t.x-t.w+e.x,h:t.h}),o("bottom",{x:e.x,y:t.y+t.h,w:e.w,h:e.h-t.y-t.h+e.y}),o("left",{x:e.x,y:t.y,w:t.x-e.x,h:t.h}),o("move",t)}function m(e){p(t=e)}function g(t){var e,n;m((e=o,{x:(n=t).x+e.x,y:n.y+e.y,w:n.w,h:n.h}))}return u=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],l=["top","right","bottom","left"],dt('<div id="'+f+'" class="'+s+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(r),n.each(l,function(t){dt("#"+f,r).append('<div id="'+f+"-"+t+'"class="'+s+'croprect-block" style="display: none" data-mce-bogus="all">')}),n.each(u,function(t){dt("#"+f,r).append('<div id="'+f+"-"+t.name+'" class="'+s+"croprect-handle "+s+"croprect-handle-"+t.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+t.label+'" aria-grabbed="false">')}),c=n.map(u,function(e){var n;return new(lt.get("DragHelper"))(f,{document:r.ownerDocument,handle:f+"-"+e.name,start:function(){n=t},drag:function(t){h(e,n,t.deltaX,t.deltaY)}})}),p(t),dt(r).on("focusin focusout",function(t){dt(t.target).attr("aria-grabbed","focus"===t.type)}),dt(r).on("keydown",function(e){var o;function r(t,e,n,r,i){t.stopPropagation(),t.preventDefault(),h(o,n,r,i)}switch(n.each(u,function(t){if(e.target.id===f+"-"+t.name)return o=t,!1}),e.keyCode){case pt.LEFT:r(e,0,t,-10,0);break;case pt.RIGHT:r(e,0,t,10,0);break;case pt.UP:r(e,0,t,0,-10);break;case pt.DOWN:r(e,0,t,0,10);break;case pt.ENTER:case pt.SPACEBAR:e.preventDefault(),i()}}),a=n.extend({toggleVisibility:function(t){var e;e=n.map(u,function(t){return"#"+f+"-"+t.name}).concat(n.map(l,function(t){return"#"+f+"-"+t})).join(","),t?dt(e,r).show():dt(e,r).hide()},setClampRect:function(e){o=e,p(t)},setRect:m,getInnerRect:function(){return d(o,t)},setInnerRect:g,setViewPortRect:function(n){e=n,p(t)},destroy:function(){n.each(c,function(t){t.destroy()}),c=[]}},ht)}(e,t.state.get("viewRect"),t.state.get("viewRect"),t.getEl(),function(){t.fire("crop")}),t.cropRect.on("updateRect",function(e){var n=e.rect,o=t.zoom();n={x:Math.round(n.x/o),y:Math.round(n.y/o),w:Math.round(n.w/o),h:Math.round(n.h/o)},t.state.set("rect",n)}),t.on("remove",t.cropRect.destroy)}t.state.on("change:cropEnabled",function(e){t.cropRect.toggleVisibility(e.value),t.repaintImage()}),t.state.on("change:zoom",function(){t.repaintImage()}),t.state.on("change:rect",function(n){var o=n.value;t.cropRect||e(o),t.cropRect.setRect(o)})}}))(t)}};function vt(t){return{blob:t,url:nt.createObjectURL(t)}}function yt(t){t&&nt.revokeObjectURL(t.url)}function bt(t){n.each(t,yt)}function wt(t,e,o,r){var i,a,u,c,l,s,f,d,h,p,m,g,v,y,b,w,x,R,I,T,k,C,B,U,M,A,j,E=function(){var t=[],e=-1;function n(){return e>0}function o(){return-1!==e&&e<t.length-1}return{data:t,add:function(n){var o;return o=t.splice(++e),t.push(n),{state:n,removed:o}},undo:function(){if(n())return t[--e]},redo:function(){if(o())return t[++e]},canUndo:n,canRedo:o}}(),z=function(e){return t.rtl?e.reverse():e};function O(t){var e,n,o,r;e=i.find("#w")[0],n=i.find("#h")[0],o=parseInt(e.value(),10),r=parseInt(n.value(),10),i.find("#constrain")[0].checked()&&U&&M&&o&&r&&("w"===t.control.settings.name?(r=Math.round(o*A),n.value(r)):(o=Math.round(r*j),e.value(o))),U=o,M=r}function D(t){return Math.round(100*t)+"%"}function S(){i.find("#undo").disabled(!E.canUndo()),i.find("#redo").disabled(!E.canRedo()),i.statusbar.find("#save").disabled(!E.canUndo())}function L(){i.find("#undo").disabled(!0),i.find("#redo").disabled(!0)}function H(t){t&&d.imageSrc(t.url)}function _(t){return function(){var e=n.grep(B,function(e){return e.settings.name!==t});n.each(e,function(t){t.hide()}),t.show(),t.focus()}}function F(t){H(c=vt(t))}function P(t){H(e=vt(t)),bt(E.add(e).removed),S()}function W(){var t=d.selection();tt.blobToImageResult(e.blob).then(function(e){Z.crop(e,t.x,t.y,t.w,t.h).then(X).then(function(t){P(t),V()})})}var q=function(t){var n=[].slice.call(arguments,1);return function(){var o=c||e;tt.blobToImageResult(o.blob).then(function(e){t.apply(this,[e].concat(n)).then(X).then(F)})}};function V(){H(e),yt(c),_(a)(),S()}function N(){c?(P(c.blob),V()):function e(n,o){c?o():setTimeout(function(){n-- >0?e(n,o):t.windowManager.alert("Error: failed to apply image operation.")},10)}(100,N)}function $(t){return lt.create("Form",{layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:t})}var X=function(t){return t.toBlob()};function G(t,n){return $(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",function(){L(),tt.blobToImageResult(e.blob).then(function(t){return n(t)}).then(X).then(function(t){var e=vt(t);H(e),yt(c),c=e})})}function Y(n,o,r,i,a){return $(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(t){var n;n=t.value,tt.blobToImageResult(e.blob).then(function(t){return o(t,n)}).then(X).then(function(t){var e=vt(t);H(e),yt(c),c=e})},minValue:t.rtl?a:i,maxValue:t.rtl?i:a,value:r,previewFilter:D},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",function(){this.find("slider").value(r),L()})}l=$(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:W}])).hide().on("show hide",function(t){d.toggleCropRect("show"===t.type)}).on("show",L),s=$(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:O},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:O},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:function(t){!0===t.control.value()&&(A=M/U,j=U/M)}},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}])).hide().on("submit",function(t){var n=parseInt(i.find("#w").value(),10),o=parseInt(i.find("#h").value(),10);t.preventDefault(),function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=[].slice.call(arguments,1);return function(){tt.blobToImageResult(e.blob).then(function(e){t.apply(this,[e].concat(r)).then(X).then(P)})}}(Z.resize,n,o)(),V()}).on("show",L),f=$(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:q(Z.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:q(Z.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:q(Z.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:q(Z.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",L),m=G(0,Z.invert),I=G(0,Z.sharpen),T=G(0,Z.emboss),g=Y(0,Z.brightness,0,-1,1),v=Y(0,Z.hue,180,0,360),y=Y(0,Z.saturate,0,-1,1),b=Y(0,Z.contrast,0,-1,1),w=Y(0,Z.grayscale,0,0,1),x=Y(0,Z.sepia,0,0,1),R=function(n,o){function r(){var t,n,r;t=i.find("#r")[0].value(),n=i.find("#g")[0].value(),r=i.find("#b")[0].value(),tt.blobToImageResult(e.blob).then(function(e){return o(e,t,n,r)}).then(X).then(function(t){var e=vt(t);H(e),yt(c),c=e})}var a=t.rtl?2:0,u=t.rtl?0:2;return $(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:a,value:1,maxValue:u,ondragend:r,previewFilter:D},{type:"slider",label:"G",name:"g",minValue:a,value:1,maxValue:u,ondragend:r,previewFilter:D},{type:"slider",label:"B",name:"b",minValue:a,value:1,maxValue:u,ondragend:r,previewFilter:D},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:N}])).hide().on("show",function(){i.find("#r,#g,#b").value(1),L()})}(0,Z.colorize),k=Y(0,Z.gamma,0,-1,1),C=Y(0,Z.exposure,1,0,2),u=$(z([{text:"Back",onclick:V},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:_(v)},{text:"saturate",icon:"saturate",onclick:_(y)},{text:"sepia",icon:"sepia",onclick:_(x)},{text:"emboss",icon:"emboss",onclick:_(T)},{text:"exposure",icon:"exposure",onclick:_(C)},{type:"spacer",flex:1}])).hide(),a=$(z([{tooltip:"Crop",icon:"crop",onclick:_(l)},{tooltip:"Resize",icon:"resize2",onclick:_(s)},{tooltip:"Orientation",icon:"orientation",onclick:_(f)},{tooltip:"Brightness",icon:"sun",onclick:_(g)},{tooltip:"Sharpen",icon:"sharpen",onclick:_(I)},{tooltip:"Contrast",icon:"contrast",onclick:_(b)},{tooltip:"Color levels",icon:"drop",onclick:_(R)},{tooltip:"Gamma",icon:"gamma",onclick:_(k)},{tooltip:"Invert",icon:"invert",onclick:_(m)}])),d=gt.create({flex:1,imageSrc:e.url}),h=lt.create("Container",{layout:"flex",direction:"column",pack:"start",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:function(){H(e=E.undo()),S()}},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:function(){H(e=E.redo()),S()}},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:function(){var t=d.zoom();t<2&&(t+=.1),d.zoom(t)}},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:function(){var t=d.zoom();t>.1&&(t-=.1),d.zoom(t)}}]}),p=lt.create("Container",{type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:z([h,d])}),B=[a,l,s,f,u,m,g,v,y,b,w,x,R,I,T,k,C],(i=t.windowManager.open({layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(ct.DOM.getViewPort().w,800),minHeight:Math.min(ct.DOM.getViewPort().h,650),title:"Edit image",items:B.concat([p]),buttons:z([{text:"Save",name:"save",subtype:"primary",onclick:function(){o(e.blob),i.close()}},{text:"Cancel",onclick:"close"}])})).on("close",function(){r(),bt(E.data),E=null,c=null}),E.add(e),S(),d.on("load",function(){U=d.imageSize().w,M=d.imageSize().h,A=M/U,j=U/M,i.find("#w").value(U),i.find("#h").value(M)}),d.on("crop",W)}var xt={edit:function(t,e){return new rt(function(n,o){return e.toBlob().then(function(e){wt(t,vt(e),n,o)})})}},Rt={getImageSize:function(t){var e,n;function o(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?o(e)&&o(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)},setImageSize:function(t,e){var n,o;e&&(n=t.style.width,o=t.style.height,(n||o)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,o=t.height,(n||o)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))},getNaturalImageSize:function(t){return{w:t.naturalWidth,h:t.naturalHeight}}},It=(Array.prototype.indexOf,undefined,Array.prototype.push,Array.prototype.slice,function(t,e){for(var n=0,o=t.length;n<o;n++){var r=t[n];if(e(r,n,t))return w.some(r)}return w.none()}),Tt=function(t){return null!==t&&t!==undefined},kt={traverse:function(t,e){var n;return n=e.reduce(function(t,e){return Tt(t)?t[e]:undefined},t),Tt(n)?n:null},readBlob:function(t){return new rt(function(e){var n=new k;n.onload=function(t){var n=t.target;e(n.result)},n.readAsText(t)})},requestUrlAsBlob:function(t,e){return new rt(function(o){var r;(r=new function(){return new(T.getOrDie("XMLHttpRequest"))}).onreadystatechange=function(){4===r.readyState&&o({status:r.status,blob:this.response})},r.open("GET",t,!0),n.each(e,function(t,e){r.setRequestHeader(e,t)}),r.responseType="blob",r.send()})},parseJson:function(t){var e;try{e=JSON.parse(t)}catch(n){}return e}},Ct=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],Bt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],Ut=function(t){return"ImageProxy HTTP error: "+It(Ct,function(e){return t===e.code}).fold(p.constant("Unknown ImageProxy error"),function(t){return t.message})},Mt=function(t){var e=Ut(t);return rt.reject(e)},At=function(t){return It(Bt,function(e){return e.type===t}).fold(p.constant("Unknown service error"),function(t){return t.message})},jt=function(t,e){return kt.readBlob(e).then(function(t){var e,n,o,r=(e=t,n=kt.parseJson(e),"ImageProxy Service error: "+((o=kt.traverse(n,["error","type"]))?At(o):"Invalid JSON in service error message"));return rt.reject(r)})},Et={handleServiceErrorResponse:function(t,e){return 400===(n=t)||403===n||500===n?jt(0,e):Mt(t);var n},handleHttpError:Mt,getHttpErrorMsg:Ut,getServiceErrorMsg:At},zt=function(t,e){return kt.requestUrlAsBlob((n=t,o=e,r=-1===n.indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!o?n:n+r+"apiKey="+encodeURIComponent(o)),{"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e}).then(function(t){return t.status<200||t.status>=300?Et.handleServiceErrorResponse(t.status,t.blob):rt.resolve(t.blob)});var n,o,r},Ot=function(t,e){return e?zt(t,e):(n=t,kt.requestUrlAsBlob(n,{}).then(function(t){return t.status<200||t.status>=300?Et.handleHttpError(t.status):rt.resolve(t.blob)}));var n},Dt=0,St=function(t,e){t.notificationManager.open({text:e,type:"error"})},Lt=function(t){return t.selection.getNode()},Ht=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new it(n).host===t.documentBaseURI.host},_t=function(t,e){return-1!==n.inArray(t.settings.imagetools_cors_hosts,new it(e.src).host)},Ft=function(t){var e,n,o,r,i,a;return(e=t.editorUpload.blobCache.getByUri(Lt(t).src))?rt.resolve(e.blob()):(n=t,o=Lt(t),a=o.src,_t(n,o)?Ot(o.src,null):Ht(n,o)?O(o):(a=ut(n),a+=(-1===a.indexOf("?")?"?":"&")+"url="+encodeURIComponent(o.src),r=(i=n).settings.api_key||i.settings.imagetools_api_key,Ot(a,r)))},Pt=function(t,e){var n=ot.setEditorTimeout(t,function(){t.editorUpload.uploadImagesAuto()},t.settings.images_upload_timeout||3e4);e.set(n)},Wt=function(t){clearTimeout(t.get())},qt=function(t,e,n,o,r){return e.toBlob().then(function(i){var a,u,c,l,s,f,d;return c=t.editorUpload.blobCache,a=(s=Lt(t)).src,t.settings.images_reuse_filename&&((l=c.getByUri(a))?(a=l.uri(),u=l.name()):(f=t,u=(d=a.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?f.dom.encode(d[1]):null)),l=c.create({id:"imagetools"+Dt++,blob:i,base64:e.toBase64(),uri:a,name:u}),c.add(l),t.undoManager.transact(function(){t.$(s).on("load",function e(){t.$(s).off("load",e),t.nodeChanged(),n?t.editorUpload.uploadImagesAuto():(Wt(o),Pt(t,o))}),r&&t.$(s).attr({width:r.w,height:r.h}),t.$(s).attr({src:l.blobUri()}).removeAttr("data-mce-src")}),l})},Vt=function(t,e,n,o){return function(){return t._scanForImages().then(p.curry(Ft,t)).then(tt.blobToImageResult).then(n).then(function(n){return qt(t,n,!1,e,o)},function(e){St(t,e)})}},Nt={rotate:function(t,e,n){return function(){var o=Rt.getImageSize(Lt(t)),r=o?{w:o.h,h:o.w}:null;return Vt(t,e,function(t){return Z.rotate(t,n)},r)()}},flip:function(t,e,n){return function(){return Vt(t,e,function(t){return Z.flip(t,n)})()}},editImageDialog:function(t,e){return function(){var n=Lt(t),o=Rt.getNaturalImageSize(n),r=function(t){return new rt(function(e){z(t).then(function(r){var i=Rt.getNaturalImageSize(r);o.w===i.w&&o.h===i.h||Rt.getImageSize(n)&&Rt.setImageSize(n,i),nt.revokeObjectURL(r.src),e(t)})})};Ft(t).then(tt.blobToImageResult).then(p.curry(function(t,n){return xt.edit(t,n).then(r).then(tt.blobToImageResult).then(function(n){return qt(t,n,!0,e)},function(){})},t),function(e){St(t,e)})}},isEditableImage:function(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(Ht(t,e)||_t(t,e)||t.settings.imagetools_proxy)},cancelTimedUpload:Wt},$t=function(t,e){n.each({mceImageRotateLeft:Nt.rotate(t,e,-90),mceImageRotateRight:Nt.rotate(t,e,90),mceImageFlipVertical:Nt.flip(t,e,"v"),mceImageFlipHorizontal:Nt.flip(t,e,"h"),mceEditImage:Nt.editImageDialog(t,e)},function(e,n){t.addCommand(n,e)})},Xt=function(t,e,n){t.on("NodeChange",function(o){var r=n.get();r&&r.src!==o.element.src&&(Nt.cancelTimedUpload(e),t.editorUpload.uploadImagesAuto(),n.set(null)),Nt.isEditableImage(t,o.element)&&n.set(o.element)})},Gt=function(t){t.addButton("rotateleft",{title:"Rotate counterclockwise",cmd:"mceImageRotateLeft"}),t.addButton("rotateright",{title:"Rotate clockwise",cmd:"mceImageRotateRight"}),t.addButton("flipv",{title:"Flip vertically",cmd:"mceImageFlipVertical"}),t.addButton("fliph",{title:"Flip horizontally",cmd:"mceImageFlipHorizontal"}),t.addButton("editimage",{title:"Edit image",cmd:"mceEditImage"}),t.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})},Yt=function(t){t.addContextToolbar(p.curry(Nt.isEditableImage,t),at(t))};e.add("imagetools",function(e){var n=t(0),o=t(null);$t(e,n),Gt(e),Yt(e),Xt(e,n,o)})}();