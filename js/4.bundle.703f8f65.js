(window.webpackJsonp=window.webpackJsonp||[]).push([[4,19,38],{191:function(e,t,a){"use strict";a.r(t);a(63),a(303),a(111),a(92),a(78),a(59),a(71),a(38),a(79),a(60),a(54),a(72),a(70),a(53),a(80),a(62);var n=a(0),c=a.n(n),i=a(24),o=a(61),m=a(226),s=a(179),u=a(227),d=a(312);function f(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(i.e)().search,r=Object(o.e)(e,"id");if(!r)return c.a.createElement("div",null,"id错误");var t=E(Object(n.useState)(null),2),e=t[0],l=t[1];return Object(n.useEffect)(function(){var e=function(){var i,e=(i=regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.c)(r);case 2:return t=e.sent,n=t.playlist.trackIds.map(function(e){return e.id}),t=Object(m.a)(t),e.next=7,Object(u.c)(n).then(function(e){return Object(m.c)(e.songs)});case 7:return a=e.sent,e.next=10,Object(s.b)(r);case 10:n=e.sent,l({detail:t,songs:a,comment:n});case 12:case"end":return e.stop()}},e)}),function(){var e=this,c=arguments;return new Promise(function(t,a){var n=i.apply(e,c);function r(e){f(n,t,a,r,l,"next",e)}function l(e){f(n,t,a,r,l,"throw",e)}r(void 0)})});return function(){return e.apply(this,arguments)}}();l(null),e()},[r]),c.a.createElement(d.default,{state:e})}},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(462),c=a(491),i=a(492),o=a(493),m=a(127);t.default=function(e){var t=e.state;if(!t)return r.a.createElement(m.a,null);e=t.detail.isCreator;return r.a.createElement("div",{className:l.default.songlist},r.a.createElement(c.a,{data:t.detail,songs:t.songs}),r.a.createElement(i.a,{data:t.songs,isCreator:e}),r.a.createElement(o.a,{data:t.comment}))}},462:function(e,t,a){"use strict";a.r(t),t.default={songlist:"songlist_1ykkf"}},491:function(e,t,a){"use strict";a(59),a(71),a(112),a(92),a(53),a(225),a(111),a(224),a(78),a(38),a(79),a(60),a(54),a(72),a(70),a(80);var n=a(0),v=a.n(n),y="detail_25jrL",p="list-left_2yfy6",g="image_2bPOj",h="list-right_2mj2G",N="title_1lnwV",j="btns_2-io8",k="creator_3n7vo",O="label_3EjNA",S="singer_1GFVl",w="lyric_1lU6E",_="toggle_384mF",A="description_3nXU6",C=a(85),n=a(223),I=a(177),x=a(89),F=a(481),U=a(476),T=a(486);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var D=n.d.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,s=t.labels,u=t.description,d=t.singers,f=t.publishTime,E=t.albumId,b=t.albumName,e=r?"歌单":l?"专辑":"单曲",t=a[0].isFree;return v.a.createElement("div",{className:y+" detail"},v.a.createElement("div",{className:p},v.a.createElement("div",{className:g},v.a.createElement("img",{src:"".concat(o,"?param=240y240")}))),v.a.createElement("div",{className:h},v.a.createElement("div",{className:N,style:{"--text":"'".concat(e,"'")}},i),l&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:S},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return v.a.createElement(v.a.Fragment,{key:t},v.a.createElement(C.b,{to:"/Singer?id=".concat(a)},e),v.a.createElement("span",null," / "))})),v.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:S},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return v.a.createElement(v.a.Fragment,{key:t},v.a.createElement(C.b,{to:"/Singer?id=".concat(a)},e),v.a.createElement("span",null," / "))})),v.a.createElement("div",null,"所属专辑：",v.a.createElement(C.b,{to:"/Album?id=".concat(E)},b))),r&&v.a.createElement("div",{className:k},v.a.createElement(C.b,{to:"/User?id=".concat(m.id)},v.a.createElement("img",{src:"".concat(m.avatar,"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),v.a.createElement("div",{className:j},(l||r)&&v.a.createElement(x.a,{icon:v.a.createElement(F.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});D(e)}},"播放全部"),c&&v.a.createElement(v.a.Fragment,null,v.a.createElement(x.a,{icon:v.a.createElement(F.a,null),onClick:function(){D(a)},disabled:!t},"播放"),v.a.createElement(x.a,{icon:v.a.createElement(U.a,null),onClick:function(){Object(I.a)(a[0].id)},disabled:!t},"添加到歌单"),v.a.createElement(x.a,{icon:v.a.createElement(T.a,null),onClick:function(){Object(I.b)(name,id)},disabled:!t},"下载"))),r&&v.a.createElement("div",{className:O},"标签：",s.map(function(e,t){return v.a.createElement("span",{key:t},e)})),(r||l)&&v.a.createElement("div",{className:A},u),c&&v.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:_,style:{display:"none"}}),c&&0===n.length&&v.a.createElement("div",null,"暂无歌词"),c&&v.a.createElement("div",{className:w},n.map(function(e,t){var a=R(e,2),e=a[0],a=a[1];return v.a.createElement("p",{key:t},e,a&&v.a.createElement(v.a.Fragment,null,v.a.createElement("br",null),a))})),c&&v.a.createElement("label",{htmlFor:"toggle-lyric"})))}},492:function(e,t,a){"use strict";a(456),a(94),a(178),a(53),a(70),a(304),a(92),a(78),a(59),a(71),a(38),a(79),a(60),a(54),a(72),a(80);var n=a(0),f=a.n(n),r="songs_3dNMY",l="title_1N7Gm",E="icons_2bnDC",b="singer_3Y19L",v="playButton_3n5OR",y="fee_3nc7T",p=a(85),c=a(223),g=a(470),h=a(300),N=a(481),j=a(485),k=a(476),O=a(486),S=a(484),w=a(179),_=a(61),A=a(177);function C(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=e.data,o=e.isCreator,m=Object(n.useContext)(c.a).playlist,s=c.d.setPlaylist,t=i(Object(n.useState)(t),2),u=t[0],d=t[1];return f.a.createElement("div",{className:r},f.a.createElement("div",{className:l},"歌曲列表",f.a.createElement("span",null,u.length,"首歌")),f.a.createElement("table",null,f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"col"}),f.a.createElement("th",{scope:"col"},"歌曲标题"),f.a.createElement("th",{scope:"col"},"时长"),f.a.createElement("th",{scope:"col"},"歌手"),f.a.createElement("th",{scope:"col"},"专辑"))),f.a.createElement("tbody",null,u.map(function(e,t){var n=e.id,a=e.name,r=e.singers,l=e.duration,c=e.isFree,i=e.albumId,e=e.albumName;return f.a.createElement("tr",{key:t,className:c?"":y},f.a.createElement("td",null,f.a.createElement("span",null,t+1),f.a.createElement(N.a,{className:v,onClick:function(){var t,e;t=n,e=u.find(function(e){return e.id===t}),s([e])}})),f.a.createElement("td",null,f.a.createElement(p.b,{to:"/Song?id=".concat(n)},a),f.a.createElement("div",{className:E},c&&f.a.createElement(f.a.Fragment,null,f.a.createElement(j.a,{title:"添加到播放列表",onClick:function(){var t,e;t=n,m.find(function(e){return e.id===t})||(e=u.find(function(e){return e.id===t}),e=[].concat(C(m),[e]),s(e,!1))}}),f.a.createElement(k.a,{title:"收藏到歌单",onClick:function(){var e;e=n,Object(A.a)(e)}}),f.a.createElement(O.a,{title:"下载",onClick:function(){var e,t;e=a,t=n,Object(A.b)(e,t)}})),o&&f.a.createElement(S.a,{title:"删除",onClick:function(){var t,e,a;t=n,e=+Object(_.e)(window.location.hash,"id"),a=u.findIndex(function(e){return e.id===t}),g.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(u[a].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(w.d)("del",e,[t]).then(function(){h.b.success("已删除");var e=u.slice();e.splice(a,1),d(e)})}})}}))),f.a.createElement("td",null,Object(_.b)(l)),f.a.createElement("td",null,r.map(function(e,t){var a=e.id,e=e.name;return f.a.createElement(f.a.Fragment,{key:t},f.a.createElement(p.b,{to:"/Singer?id=".concat(a),title:e,className:b},e),f.a.createElement("span",null," / "))})),f.a.createElement("td",null,f.a.createElement(p.b,{to:"/Album?id=".concat(i),title:e},e)))}))))}},493:function(e,t,a){"use strict";a(92);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=a(85),m=a(489),s=a(61);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(r.avatarUrl,"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(r.avatarUrl,"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);