(window.webpackJsonp=window.webpackJsonp||[]).push([[1,11,12,13,16,33,34,35,36],{187:function(t,e,n){"use strict";n.r(e);var r=n(51),r=n(129),r=n(0),a=n.n(r),c=n(453),i=n(42);e.default=function(t){var e=t.data,n=e.name,t=e.alias,e=e.cover;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:c.default.title},n,a.a.createElement("span",null,t.join(";"))),a.a.createElement("div",{className:c.default.image},a.a.createElement("img",{src:"".concat(Object(i.e)(e),"?param=640y300")})))}},188:function(t,e,n){"use strict";n.r(e);var r=n(92),r=n(0),a=n.n(r),c=n(454);e.default=function(t){var e=t.data,t=e.briefDesc,e=e.intro;return a.a.createElement("div",{className:c.default.intro},a.a.createElement("p",null,a.a.createElement("h2",null,"歌手简介"),a.a.createElement("span",null,t)),e.map(function(t){var e=t.ti,t=t.txt;return a.a.createElement("p",null,a.a.createElement("h2",null,e),a.a.createElement("span",null,t))}))}},189:function(t,e,n){"use strict";n.r(e);var r=n(92),r=n(95),r=n(0),c=n.n(r),i=n(455);e.default=function(t){var e=t.tabs,r=t.activeTab,a=t.setActive;return c.a.createElement("div",{className:i.default.tabs},e.map(function(t){var e=t.text,n=t.id;return c.a.createElement("div",{className:r===n?"".concat(i.default.tab," ").concat(i.default.active):i.default.tab,key:n,onClick:function(){return a(n)}},e)}))}},201:function(t,e,n){"use strict";n.r(e);n(66),n(302),n(94),n(51),n(73),n(57),n(63),n(38),n(74),n(58),n(52),n(64),n(62),n(75),n(65);var r=n(0),a=n.n(r),o=n(24),u=n(42),l=n(229),c=n(31);function s(t,e,n,r,a,c,i){try{var o=t[c](i),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function i(o){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=o.apply(t,i);function a(t){s(r,e,n,a,c,"next",t)}function c(t){s(r,e,n,a,c,"throw",t)}a(void 0)})}}var f=function(){var e=i(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("/artists?id=".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=i(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("/artist/desc?id=".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),d=n(310);function v(t,e,n,r,a,c,i){try{var o=t[c](i),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(){var t=Object(o.e)().search,c=Object(u.f)(t,"id"),e=b(Object(r.useState)(null),2),t=e[0],i=e[1];return Object(r.useEffect)(function(){var t=function(){var o,t=(o=regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(c);case 2:return e=t.sent,t.next=5,m(c);case 5:a=t.sent,n={name:e.artist.name,alias:e.artist.alias,cover:e.artist.picUrl},r=Object(l.c)(e.hotSongs),a={intro:a.introduction,briefDesc:a.briefDesc},document.title="".concat(n.name,"的音乐"),i({header:n,songs:r,intro:a});case 11:case"end":return t.stop()}},t)}),function(){var t=this,i=arguments;return new Promise(function(e,n){var r=o.apply(t,i);function a(t){v(r,e,n,a,c,"next",t)}function c(t){v(r,e,n,a,c,"throw",t)}a(void 0)})});return function(){return t.apply(this,arguments)}}();i(null),t()},[c]),a.a.createElement(d.default,{state:t})}},310:function(t,e,n){"use strict";n.r(e);n(73),n(57),n(63),n(38),n(74),n(58),n(52),n(64),n(62),n(51),n(75);var r=n(0),a=n.n(r),c=n(460),i=n(128),o=n(492),u=n(187),l=n(189),s=n(188);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=[{text:"热门作品",id:0},{text:"歌手介绍",id:1}];e.default=function(t){var e=t.state;if(!e)return a.a.createElement(i.a,null);var n=f(Object(r.useState)(0),2),t=n[0],n=n[1];return a.a.createElement("div",{className:c.default.singer},a.a.createElement(u.default,{data:e.header}),a.a.createElement(l.default,{tabs:d,activeTab:t,setActive:n}),0===t&&a.a.createElement(o.a,{data:e.songs}),1===t&&a.a.createElement(s.default,{data:e.intro}))}},453:function(t,e,n){"use strict";n.r(e),e.default={title:"title_-x2Xp",image:"image_vfSBc"}},454:function(t,e,n){"use strict";n.r(e),e.default={intro:"intro_3cW6L"}},455:function(t,e,n){"use strict";n.r(e),e.default={tabs:"tabs_J40Xj",tab:"tab_1hMfV",active:"active_1vkvh"}},460:function(t,e,n){"use strict";n.r(e),e.default={singer:"singer_C4mAo"}},492:function(t,e,n){"use strict";n(456),n(95),n(182),n(51),n(62),n(303),n(92),n(73),n(57),n(63),n(38),n(74),n(58),n(52),n(64),n(75);var r=n(0),d=n.n(r),a="songs_3dNMY",c="title_1N7Gm",v="icons_2bnDC",b="singer_3Y19L",p="playButton_3n5OR",y="fee_3nc7T",h=n(85),i=n(227),E=n(470),g=n(299),j=n(481),w=n(485),O=n(476),S=n(486),A=n(484),x=n(183),k=n(42),N=n(180);function C(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(t){var e=t.data,u=t.isCreator,l=Object(r.useContext)(i.a).playlist,s=i.d.setPlaylist,e=o(Object(r.useState)(e),2),f=e[0],m=e[1];return d.a.createElement("div",{className:a},d.a.createElement("div",{className:c},"歌曲列表",d.a.createElement("span",null,f.length,"首歌")),d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"}),d.a.createElement("th",{scope:"col"},"歌曲标题"),d.a.createElement("th",{scope:"col"},"时长"),d.a.createElement("th",{scope:"col"},"歌手"),d.a.createElement("th",{scope:"col"},"专辑"))),d.a.createElement("tbody",null,f.map(function(t,e){var r=t.id,n=t.name,a=t.singers,c=t.duration,i=t.isFree,o=t.albumId,t=t.albumName;return d.a.createElement("tr",{key:e,className:i?"":y},d.a.createElement("td",null,d.a.createElement("span",null,e+1),d.a.createElement(j.a,{className:p,onClick:function(){var e,t;e=r,t=f.find(function(t){return t.id===e}),s([t])}})),d.a.createElement("td",null,d.a.createElement(h.b,{to:"/Song?id=".concat(r)},n),d.a.createElement("div",{className:v},i&&d.a.createElement(d.a.Fragment,null,d.a.createElement(w.a,{title:"添加到播放列表",onClick:function(){var e,t;e=r,l.find(function(t){return t.id===e})||(t=f.find(function(t){return t.id===e}),t=[].concat(C(l),[t]),s(t,!1))}}),d.a.createElement(O.a,{title:"收藏到歌单",onClick:function(){var t;t=r,Object(N.a)(t)}}),d.a.createElement(S.a,{title:"下载",onClick:function(){var t,e;t=n,e=r,Object(N.b)(t,e)}})),u&&d.a.createElement(A.a,{title:"删除",onClick:function(){var e,t,n;e=r,t=+Object(k.f)(window.location.hash,"id"),n=f.findIndex(function(t){return t.id===e}),E.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(f[n].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(x.d)("del",t,[e]).then(function(){g.b.success("已删除");var t=f.slice();t.splice(n,1),m(t)})}})}}))),d.a.createElement("td",null,Object(k.b)(c)),d.a.createElement("td",null,a.map(function(t,e){var n=t.id,t=t.name;return d.a.createElement(d.a.Fragment,{key:e},d.a.createElement(h.b,{to:"/Singer?id=".concat(n),title:t,className:b},t),d.a.createElement("span",null," / "))})),d.a.createElement("td",null,d.a.createElement(h.b,{to:"/Album?id=".concat(o),title:t},t)))}))))}}}]);