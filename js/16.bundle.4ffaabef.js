(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7,8,9,26,27,28,29],{186:function(e,t,a){"use strict";a.r(t);a(82),a(74),a(60),a(68),a(38),a(75),a(53),a(61),a(69),a(67),a(52),a(76);var l=a(0),m=a.n(l),d=a(21),f=a(456),v=a(26),p=a(133);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(e){i=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(i)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=e.data,a=y(Object(l.useState)(0),2),i=a[0],n=a[1],o=t.length,s=Object(d.d)(),e=y(Object(l.useState)(!0),2),a=e[0],r=e[1],c=Object(v.c)(r,5e3);Object(p.a)(function(){n((i+1)%o)},a?5e3:null);var u=function(e){n(e),r(!1),c(!0)};return m.a.createElement("div",{className:f.default.carousel},m.a.createElement("div",{className:f.default["card-container"]},t.map(function(e,t){var a,n=e.imageUrl,r=e.targetId,c=e.targetType,l=e.url;return m.a.createElement("div",{className:f.default.card,key:t,onClick:function(){return function(e,t,a,n){if(i===e)switch(a){case 1:s.push("/Song?id=".concat(t));break;case 10:s.push("/Album?id=".concat(t));break;case 1e3:s.push("SongList?id=".concat(t));break;case 1004:s.push("/Video?id=".concat(t));break;case 3e3:window.open(n);break;default:return}else u(e)}(t,r,c,l)},style:(a=0<(e=(a=t)-i)?e-o:e+o,a=Math.abs(e)>Math.abs(a)?a:e,e={},0===a?(e.left="33.3%",e.zIndex=999,e.opacity=1,e.transform="scale(1)"):e.left="".concat(0<a?16.7+40*a:50+40*a,"%"),2<=Math.abs(a)&&(e.opacity=0,e.transform="scale(0)"),e)},m.a.createElement("img",{src:"".concat(Object(v.e)(n),"?param=500y200")}))})),m.a.createElement("div",{className:f.default.rects},t.map(function(e,t){return m.a.createElement("div",{key:t,className:f.default.rect+(i===t?" ".concat(f.default.active):""),onClick:function(){return u(t)}})})))}},187:function(e,t,a){"use strict";a.r(t);a(82),a(67),a(52),a(306),a(183),a(38),a(307),a(99);var n=a(0),i=a.n(n),o=a(457),s=a(89),u=a(487),m=a(26);t.default=function(e){function l(e,t){e.preventDefault(),a(t)}var t=e.data,a=e.onPlay;return i.a.createElement("div",{className:o.default["recent-music-list"]},i.a.createElement("div",{className:o.default.left},t.slice(0,5).map(function(e,t){var a=e.cover,n=e.singers,r=e.name,c=e.id;return i.a.createElement("div",{className:o.default.item,key:c},i.a.createElement("div",{className:o.default.order},(t+1).toString().padStart(2,0)),i.a.createElement(s.b,{className:o.default.image,to:"/Song?id=".concat(c)},i.a.createElement("img",{src:"".concat(Object(m.e)(a),"?param=50y50"),loading:"lazy"}),i.a.createElement("div",{className:o.default["play-button"],onClick:function(e){return l(e,c)}},i.a.createElement(u.a,null))),i.a.createElement("div",{className:o.default.information},i.a.createElement(s.b,{className:o.default["song-title"],to:"/Song?id=".concat(c)},r),i.a.createElement("div",{className:o.default.singer},n.map(function(e){return e.name}).join("/"))))})),i.a.createElement("div",{className:o.default.right},t.slice(5,10).map(function(e,t){var a=e.cover,n=e.singers,r=e.name,c=e.id;return i.a.createElement("div",{className:o.default.item,key:c},i.a.createElement("div",{className:o.default.order},(t+6).toString().padStart(2,0)),i.a.createElement(s.b,{className:o.default.image,to:"/Song?id=".concat(c)},i.a.createElement("img",{src:"".concat(Object(m.e)(a),"?param=50y50"),loading:"lazy"}),i.a.createElement("div",{className:o.default["play-button"],onClick:function(e){return l(e,c)}},i.a.createElement(u.a,null))),i.a.createElement("div",{className:o.default.information},i.a.createElement(s.b,{className:o.default["song-title"],to:"/Song?id=".concat(c)},r),i.a.createElement("div",{className:o.default.singer},n.map(function(e){return e.name}).join("/"))))})))}},188:function(e,t,a){"use strict";a.r(t);a(63),a(305),a(82),a(67),a(52),a(60),a(68),a(38),a(62);var n=a(0),o=a.n(n),s=a(458),u=a(89),m=a(480),d=a(487),f=a(26);function v(e,t,a,n,r,c,l){try{var i=e[c](l),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function p(e){return 1e4<=e?"".concat(parseInt(e/1e4),"万"):e}t.default=function(e){var t=e.data,n=e.onPlay,i=function(){var i,a=(i=regeneratorRuntime.mark(function e(t,a){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(a);case 2:case"end":return e.stop()}},e)}),function(){var e=this,l=arguments;return new Promise(function(t,a){var n=i.apply(e,l);function r(e){v(n,t,a,r,c,"next",e)}function c(e){v(n,t,a,r,c,"throw",e)}r(void 0)})});return function(e,t){return a.apply(this,arguments)}}();return o.a.createElement("div",{className:s.default["recommend-song-list"]},o.a.createElement("div",{className:s.default.songlist},t.slice(0,5).map(function(e,t){var a=e.picUrl,n=e.name,r=e.copywriter,c=e.playCount,l=e.id;return o.a.createElement("div",{className:s.default.listitem,key:t},o.a.createElement(u.b,{className:s.default.image,to:"/SongList?id=".concat(l)},o.a.createElement("img",{src:"".concat(Object(f.e)(a),"?param=240y240"),loading:"lazy"}),o.a.createElement("div",{className:s.default.copywriter},r),o.a.createElement("div",{className:s.default["play-count"]},o.a.createElement(m.a,null),p(c)),o.a.createElement("div",{className:s.default["play-button"],onClick:function(e){return i(e,l)}},o.a.createElement(d.a,null))),o.a.createElement(u.b,{className:s.default.description,to:"/SongList?id=".concat(l)},n))})),o.a.createElement("div",{className:s.default.songlist},t.slice(5,10).map(function(e,t){var a=e.picUrl,n=e.name,r=e.copywriter,c=e.playCount,l=e.id;return o.a.createElement("div",{className:s.default.listitem,key:t},o.a.createElement(u.b,{className:s.default.image,to:"/SongList?id=".concat(l)},o.a.createElement("img",{src:"".concat(Object(f.e)(a),"?param=240y240"),loading:"lazy"}),o.a.createElement("div",{className:s.default.copywriter},r),o.a.createElement("div",{className:s.default["play-count"]},o.a.createElement(m.a,null),p(c)),o.a.createElement("div",{className:s.default["play-button"],onClick:function(e){return i(e,l)}},o.a.createElement(d.a,null))),o.a.createElement(u.b,{className:s.default.description,to:"/SongList?id=".concat(l)},n))})))}},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(463),l=a(132),i=a(186),o=a(188),s=a(187);t.default=function(e){var t=e.state,a=e.onSongPlay,e=e.onSonglistPlay;return t?r.a.createElement("div",{className:c.default.discovery},r.a.createElement("div",{className:c.default.banner},r.a.createElement(i.default,{data:t.bannerData.banners})),r.a.createElement("div",null,r.a.createElement("div",{className:c.default.title},"推荐歌单"),r.a.createElement(o.default,{data:t.recommendData.result,onPlay:e})),r.a.createElement("div",null,r.a.createElement("div",{className:c.default.title},"最新音乐"),r.a.createElement(s.default,{data:t.topSongData,onPlay:a}))):r.a.createElement(l.a,null)}},456:function(e,t,a){"use strict";a.r(t),t.default={carousel:"carousel_zTOnU","card-container":"card-container__xDA8",card:"card_2dcr7",rects:"rects_oMFiE",rect:"rect_2cUuo",active:"active_T3xb1"}},457:function(e,t,a){"use strict";a.r(t),t.default={"recent-music-list":"recent-music-list_31H8M",left:"left_1ERkB",right:"right_2aMfg",item:"item_JZJAo",order:"order_10TsK",image:"image_30pqu","play-button":"play-button_3JqMR",information:"information_2Wdhv","song-title":"song-title__czca",singer:"singer_3BtEo"}},458:function(e,t,a){"use strict";a.r(t),t.default={"recommend-song-list":"recommend-song-list_289Zg",songlist:"songlist_Z21YM",listitem:"listitem_12v4l",image:"image_291sx",copywriter:"copywriter_3oBCM","play-count":"play-count_i1k-t","play-button":"play-button_2RFj8",description:"description_3yjR9"}},463:function(e,t,a){"use strict";a.r(t),t.default={discovery:"discovery_3WDUG",banner:"banner_2f2gT",title:"title_2Sjvx"}}}]);