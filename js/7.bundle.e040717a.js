(window.webpackJsonp=window.webpackJsonp||[]).push([[7,27],{180:function(e,t,r){"use strict";r.r(t);r(91),r(78),r(59),r(71),r(38),r(79),r(60),r(54),r(72),r(70),r(53),r(80);var o=r(0),f=r.n(o),d=r(24),m=r(450),b=r(61),p=r(128);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(e){var t=e.data,r=y(Object(o.useState)(0),2),i=r[0],a=r[1],u=t.length,l=Object(d.d)(),e=y(Object(o.useState)(!0),2),r=e[0],n=e[1],c=Object(b.c)(n,5e3);Object(p.a)(function(){a((i+1)%u)},r?5e3:null);var s=function(e){a(e),n(!1),c(!0)};return f.a.createElement("div",{className:m.default.carousel},f.a.createElement("div",{className:m.default["card-container"]},t.map(function(e,t){var r,a=e.imageUrl,n=e.targetId,c=e.targetType,o=e.url;return f.a.createElement("div",{className:m.default.card,key:t,onClick:function(){return function(e,t,r,a){if(i===e)switch(r){case 1:l.push("/Song?id=".concat(t));break;case 10:l.push("/Album?id=".concat(t));break;case 1e3:l.push("SongList?id=".concat(t));break;case 1004:l.push("/Video?id=".concat(t));break;case 3e3:window.open(a);break;default:return}else s(e)}(t,n,c,o)},style:(r=0<(e=(r=t)-i)?e-u:e+u,r=Math.abs(e)>Math.abs(r)?r:e,e={},0===r?(e.left="33.3%",e.zIndex=999,e.opacity=1,e.transform="scale(1)"):e.left="".concat(0<r?16.7+40*r:50+40*r,"%"),2<=Math.abs(r)&&(e.opacity=0,e.transform="scale(0)"),e)},f.a.createElement("img",{src:"".concat(a,"?param=500y200")}))})),f.a.createElement("div",{className:m.default.rects},t.map(function(e,t){return f.a.createElement("div",{key:t,className:m.default.rect+(i===t?" ".concat(m.default.active):""),onClick:function(){return s(t)}})})))}},450:function(e,t,r){"use strict";r.r(t),t.default={carousel:"carousel_zTOnU","card-container":"card-container__xDA8",card:"card_2dcr7",rects:"rects_oMFiE",rect:"rect_2cUuo",active:"active_T3xb1"}}}]);