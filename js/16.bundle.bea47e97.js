(window.webpackJsonp=window.webpackJsonp||[]).push([[16,11,12,13,33,34,35,36],{189:function(e,t,n){"use strict";n.r(t);n(52),n(99);var a=n(0),r=n.n(a),l=n(462),c=n(27);t.default=function(e){var t=e.data,n=t.name,e=t.alias,t=t.cover;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.default.title},n,r.a.createElement("span",null,e.join(";"))),r.a.createElement("div",{className:l.default.image},r.a.createElement("img",{src:"".concat(Object(c.e)(t),"?param=640y300")})))}},190:function(e,t,n){"use strict";n.r(t);n(83);var a=n(0),r=n.n(a),l=n(463);t.default=function(e){var t=e.data,e=t.briefDesc,t=t.intro;return r.a.createElement("div",{className:l.default.intro},r.a.createElement("div",{className:l.default.block},r.a.createElement("h2",null,"歌手简介"),r.a.createElement("span",null,e)),t.map(function(e,t){var n=e.ti,e=e.txt;return r.a.createElement("div",{className:l.default.block,key:t},r.a.createElement("h2",null,n),r.a.createElement("span",null,e))}))}},191:function(e,t,n){"use strict";n.r(t);n(83),n(90);var a=n(0),l=n.n(a),c=n(464);t.default=function(e){var t=e.tabs,a=e.activeTab,r=e.setActive;return l.a.createElement("div",{className:c.default.tabs},t.map(function(e){var t=e.text,n=e.id;return l.a.createElement("div",{className:a===n?"".concat(c.default.tab," ").concat(c.default.active):c.default.tab,key:n,onClick:function(){return r(n)}},t)}))}},314:function(e,t,n){"use strict";n.r(t);n(74),n(60),n(69),n(38),n(75),n(53),n(61),n(70),n(68),n(52),n(76);var a=n(0),r=n.n(a),l=n(469),c=n(133),i=n(502),o=n(189),u=n(191),s=n(190);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=[{text:"热门作品",id:0},{text:"歌手介绍",id:1}];t.default=function(e){var t=e.state;if(!t)return r.a.createElement(c.a,null);var n=m(Object(a.useState)(0),2),e=n[0],n=n[1];return r.a.createElement("div",{className:l.default.singer},r.a.createElement(o.default,{data:t.header}),r.a.createElement(u.default,{tabs:d,activeTab:e,setActive:n}),0===e&&r.a.createElement(i.a,{data:t.songs}),1===e&&r.a.createElement(s.default,{data:t.intro}))}},462:function(e,t,n){"use strict";n.r(t),t.default={title:"title_-x2Xp",image:"image_vfSBc"}},463:function(e,t,n){"use strict";n.r(t),t.default={intro:"intro_3cW6L",block:"block_3G_E9"}},464:function(e,t,n){"use strict";n.r(t),t.default={tabs:"tabs_J40Xj",tab:"tab_1hMfV",active:"active_1vkvh"}},469:function(e,t,n){"use strict";n.r(t),t.default={singer:"singer_C4mAo"}},502:function(e,t,n){"use strict";n(465),n(90),n(184),n(52),n(68),n(307),n(83),n(74),n(60),n(69),n(38),n(75),n(53),n(61),n(70),n(76);var a=n(0),d=n.n(a),r="songs_3dNMY",l="title_1N7Gm",b="icons_2bnDC",v="singer_3Y19L",E="playButton_3n5OR",y="fee_3nc7T",p=n(89),c=n(232),h=n(479),g=n(303),k=n(491),A=n(495),j=n(486),w=n(496),S=n(494),N=n(185),O=n(27),_=n(182);function C(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=e.data,o=e.isCreator,u=Object(a.useContext)(c.a).playlist,s=c.d.setPlaylist,t=i(Object(a.useState)(t),2),m=t[0],f=t[1];return d.a.createElement("div",{className:r},d.a.createElement("div",{className:l},"歌曲列表",d.a.createElement("span",null,m.length,"首歌")),d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"}),d.a.createElement("th",{scope:"col"},"歌曲标题"),d.a.createElement("th",{scope:"col"},"时长"),d.a.createElement("th",{scope:"col"},"歌手"),d.a.createElement("th",{scope:"col"},"专辑"))),d.a.createElement("tbody",null,m.map(function(e,t){var a=e.id,n=e.name,r=e.singers,l=e.duration,c=e.isFree,i=e.albumId,e=e.albumName;return d.a.createElement("tr",{key:t,className:c?"":y},d.a.createElement("td",null,d.a.createElement("span",null,t+1),d.a.createElement(k.a,{className:E,onClick:function(){var t,e;t=a,e=m.find(function(e){return e.id===t}),s([e])}})),d.a.createElement("td",null,d.a.createElement(p.b,{to:"/Song?id=".concat(a)},n),d.a.createElement("div",{className:b},c&&d.a.createElement(d.a.Fragment,null,d.a.createElement(A.a,{title:"添加到播放列表",onClick:function(){var t,e;t=a,u.find(function(e){return e.id===t})||(e=m.find(function(e){return e.id===t}),e=[].concat(C(u),[e]),s(e,!1))}}),d.a.createElement(j.a,{title:"收藏到歌单",onClick:function(){var e;e=a,Object(_.a)(e)}}),d.a.createElement(w.a,{title:"下载",onClick:function(){var e,t;e=n,t=a,Object(_.b)(e,t)}})),o&&d.a.createElement(S.a,{title:"删除",onClick:function(){var t,e,n;t=a,e=+Object(O.f)(window.location.hash,"id"),n=m.findIndex(function(e){return e.id===t}),h.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(m[n].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(N.d)("del",e,[t]).then(function(){g.b.success("已删除");var e=m.slice();e.splice(n,1),f(e)})}})}}))),d.a.createElement("td",null,Object(O.b)(l)),d.a.createElement("td",null,r.map(function(e,t){var n=e.id,e=e.name;return d.a.createElement(d.a.Fragment,{key:t},d.a.createElement(p.b,{to:"/Singer?id=".concat(n),title:e,className:v},e),d.a.createElement("span",null," / "))})),d.a.createElement("td",null,d.a.createElement(p.b,{to:"/Album?id=".concat(i),title:e},e)))}))))}}}]);