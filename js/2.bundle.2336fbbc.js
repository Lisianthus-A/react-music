(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7,8,9,17,27,28,29,30],{186:function(e,t,n){"use strict";n.r(t);n(83),n(74),n(60),n(69),n(38),n(75),n(53),n(61),n(70),n(68),n(52),n(76);var i=n(0),m=n.n(i),f=n(22),d=n(459),p=n(27),v=n(134);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,c=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(e){var t=e.data,n=y(Object(i.useState)(0),2),o=n[0],a=n[1],l=t.length,u=Object(f.d)(),e=y(Object(i.useState)(!0),2),n=e[0],r=e[1],c=Object(p.c)(r,5e3);Object(v.a)(function(){a((o+1)%l)},n?5e3:null);var s=function(e){a(e),r(!1),c(!0)};return m.a.createElement("div",{className:d.default.carousel},m.a.createElement("div",{className:d.default["card-container"]},t.map(function(e,t){var n,a=e.imageUrl,r=e.targetId,c=e.targetType,i=e.url;return m.a.createElement("div",{className:d.default.card,key:t,onClick:function(){return function(e,t,n,a){if(o===e)switch(n){case 1:u.push("/Song?id=".concat(t));break;case 10:u.push("/Album?id=".concat(t));break;case 1e3:u.push("SongList?id=".concat(t));break;case 1004:u.push("/Video?id=".concat(t));break;case 3e3:window.open(a);break;default:return}else s(e)}(t,r,c,i)},style:(n=0<(e=(n=t)-o)?e-l:e+l,n=Math.abs(e)>Math.abs(n)?n:e,e={},0===n?(e.left="33.3%",e.zIndex=999,e.opacity=1,e.transform="scale(1)"):e.left="".concat(0<n?16.7+40*n:50+40*n,"%"),2<=Math.abs(n)&&(e.opacity=0,e.transform="scale(0)"),e)},m.a.createElement("img",{src:"".concat(Object(p.e)(a),"?param=500y200")}))})),m.a.createElement("div",{className:d.default.rects},t.map(function(e,t){return m.a.createElement("div",{key:t,className:d.default.rect+(o===t?" ".concat(d.default.active):""),onClick:function(){return s(t)}})})))}},187:function(e,t,n){"use strict";n.r(t);n(83),n(68),n(52),n(309),n(183),n(38),n(310),n(99);var a=n(0),o=n.n(a),l=n(460),u=n(89),s=n(491),m=n(27);t.default=function(e){function i(e,t){e.preventDefault(),n(t)}var t=e.data,n=e.onPlay;return o.a.createElement("div",{className:l.default["recent-music-list"]},o.a.createElement("div",{className:l.default.left},t.slice(0,5).map(function(e,t){var n=e.cover,a=e.singers,r=e.name,c=e.id;return o.a.createElement("div",{className:l.default.item,key:c},o.a.createElement("div",{className:l.default.order},(t+1).toString().padStart(2,0)),o.a.createElement(u.b,{className:l.default.image,to:"/Song?id=".concat(c)},o.a.createElement("img",{src:"".concat(Object(m.e)(n),"?param=50y50"),loading:"lazy"}),o.a.createElement("div",{className:l.default["play-button"],onClick:function(e){return i(e,c)}},o.a.createElement(s.a,null))),o.a.createElement("div",{className:l.default.information},o.a.createElement(u.b,{className:l.default["song-title"],to:"/Song?id=".concat(c)},r),o.a.createElement("div",{className:l.default.singer},a.map(function(e){return e.name}).join("/"))))})),o.a.createElement("div",{className:l.default.right},t.slice(5,10).map(function(e,t){var n=e.cover,a=e.singers,r=e.name,c=e.id;return o.a.createElement("div",{className:l.default.item,key:c},o.a.createElement("div",{className:l.default.order},(t+6).toString().padStart(2,0)),o.a.createElement(u.b,{className:l.default.image,to:"/Song?id=".concat(c)},o.a.createElement("img",{src:"".concat(Object(m.e)(n),"?param=50y50"),loading:"lazy"}),o.a.createElement("div",{className:l.default["play-button"],onClick:function(e){return i(e,c)}},o.a.createElement(s.a,null))),o.a.createElement("div",{className:l.default.information},o.a.createElement(u.b,{className:l.default["song-title"],to:"/Song?id=".concat(c)},r),o.a.createElement("div",{className:l.default.singer},a.map(function(e){return e.name}).join("/"))))})))}},188:function(e,t,n){"use strict";n.r(t);n(63),n(308),n(83),n(68),n(52),n(60),n(69),n(38),n(62);var a=n(0),l=n.n(a),u=n(461),s=n(89),m=n(484),f=n(491),d=n(27);function p(e,t,n,a,r,c,i){try{var o=e[c](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function v(e){return 1e4<=e?"".concat(parseInt(e/1e4),"万"):e}t.default=function(e){var t=e.data,a=e.onPlay,o=function(){var o,n=(o=regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a(n);case 2:case"end":return e.stop()}},e)}),function(){var e=this,i=arguments;return new Promise(function(t,n){var a=o.apply(e,i);function r(e){p(a,t,n,r,c,"next",e)}function c(e){p(a,t,n,r,c,"throw",e)}r(void 0)})});return function(e,t){return n.apply(this,arguments)}}();return l.a.createElement("div",{className:u.default["recommend-song-list"]},l.a.createElement("div",{className:u.default.songlist},t.slice(0,5).map(function(e,t){var n=e.picUrl,a=e.name,r=e.copywriter,c=e.playCount,i=e.id;return l.a.createElement("div",{className:u.default.listitem,key:t},l.a.createElement(s.b,{className:u.default.image,to:"/SongList?id=".concat(i)},l.a.createElement("img",{src:"".concat(Object(d.e)(n),"?param=240y240"),loading:"lazy"}),l.a.createElement("div",{className:u.default.copywriter},r),l.a.createElement("div",{className:u.default["play-count"]},l.a.createElement(m.a,null),v(c)),l.a.createElement("div",{className:u.default["play-button"],onClick:function(e){return o(e,i)}},l.a.createElement(f.a,null))),l.a.createElement(s.b,{className:u.default.description,to:"/SongList?id=".concat(i)},a))})),l.a.createElement("div",{className:u.default.songlist},t.slice(5,10).map(function(e,t){var n=e.picUrl,a=e.name,r=e.copywriter,c=e.playCount,i=e.id;return l.a.createElement("div",{className:u.default.listitem,key:t},l.a.createElement(s.b,{className:u.default.image,to:"/SongList?id=".concat(i)},l.a.createElement("img",{src:"".concat(Object(d.e)(n),"?param=240y240"),loading:"lazy"}),l.a.createElement("div",{className:u.default.copywriter},r),l.a.createElement("div",{className:u.default["play-count"]},l.a.createElement(m.a,null),v(c)),l.a.createElement("div",{className:u.default["play-button"],onClick:function(e){return o(e,i)}},l.a.createElement(f.a,null))),l.a.createElement(s.b,{className:u.default.description,to:"/SongList?id=".concat(i)},a))})))}},201:function(e,t,n){"use strict";n.r(t);n(83),n(68),n(74),n(60),n(69),n(38),n(75),n(53),n(61),n(70),n(52),n(76),n(62),n(63);var c=n(0),i=n.n(c),o=n(232),a=n(29);function l(e,t,n,a,r,c,i){try{var o=e[c](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function r(o){return function(){var e=this,i=arguments;return new Promise(function(t,n){var a=o.apply(e,i);function r(e){l(a,t,n,r,c,"next",e)}function c(e){l(a,t,n,r,c,"throw",e)}r(void 0)})}}var u=function(){var e=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.a)("/banner");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=r(regeneratorRuntime.mark(function e(){var t,n=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<n.length&&void 0!==n[0]?n[0]:10,e.next=3,Object(a.a)("/personalized?limit=".concat(t));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=r(regeneratorRuntime.mark(function e(){var t,n=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<n.length&&void 0!==n[0]?n[0]:0,e.next=3,Object(a.a)("/top/song?type=".concat(t));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=n(235),d=n(185),p=n(234),v=n(312);function y(e,t,n,a,r,c,i){try{var o=e[c](i),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(a,r)}function g(o){return function(){var e=this,i=arguments;return new Promise(function(t,n){var a=o.apply(e,i);function r(e){y(a,t,n,r,c,"next",e)}function c(e){y(a,t,n,r,c,"throw",e)}r(void 0)})}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,c=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var a=o.d.setPlaylist,e=b(Object(c.useState)(null),2),t=e[0],r=e[1],n=function(){var t=g(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)([t]);case 2:n=e.sent,a(Object(p.c)(n.songs));case 4:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),e=function(){var t=g(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(t);case 2:return n=e.sent,n=n.playlist.trackIds.map(function(e){return e.id}),e.next=6,Object(f.c)(n);case 6:n=e.sent,a(Object(p.c)(n.songs));case 8:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)(function(){document.title="发现音乐"}),Object(c.useEffect)(function(){(function(){var e=g(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return t=e.sent,e.next=5,s();case 5:return n=e.sent,e.next=8,m();case 8:a=e.sent,r({bannerData:t,recommendData:n,topSongData:Object(p.c)(a.data.slice(0,10),2)});case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),i.a.createElement(v.default,{state:t,onSongPlay:n,onSonglistPlay:e})}},312:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(467),i=n(133),o=n(186),l=n(188),u=n(187);t.default=function(e){var t=e.state,n=e.onSongPlay,e=e.onSonglistPlay;return t?r.a.createElement("div",{className:c.default.discovery},r.a.createElement("div",{className:c.default.banner},r.a.createElement(o.default,{data:t.bannerData.banners})),r.a.createElement("div",null,r.a.createElement("div",{className:c.default.title},"推荐歌单"),r.a.createElement(l.default,{data:t.recommendData.result,onPlay:e})),r.a.createElement("div",null,r.a.createElement("div",{className:c.default.title},"最新音乐"),r.a.createElement(u.default,{data:t.topSongData,onPlay:n}))):r.a.createElement(i.a,null)}},459:function(e,t,n){"use strict";n.r(t),t.default={carousel:"carousel_zTOnU","card-container":"card-container__xDA8",card:"card_2dcr7",rects:"rects_oMFiE",rect:"rect_2cUuo",active:"active_T3xb1"}},460:function(e,t,n){"use strict";n.r(t),t.default={"recent-music-list":"recent-music-list_31H8M",left:"left_1ERkB",right:"right_2aMfg",item:"item_JZJAo",order:"order_10TsK",image:"image_30pqu","play-button":"play-button_3JqMR",information:"information_2Wdhv","song-title":"song-title__czca",singer:"singer_3BtEo"}},461:function(e,t,n){"use strict";n.r(t),t.default={"recommend-song-list":"recommend-song-list_289Zg",songlist:"songlist_Z21YM",listitem:"listitem_12v4l",image:"image_291sx",copywriter:"copywriter_3oBCM","play-count":"play-count_i1k-t","play-button":"play-button_2RFj8",description:"description_3yjR9"}},467:function(e,t,n){"use strict";n.r(t),t.default={discovery:"discovery_3WDUG",banner:"banner_2f2gT",title:"title_2Sjvx"}}}]);