(window.webpackJsonp=window.webpackJsonp||[]).push([[19,38],{312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(462),c=a(491),i=a(492),m=a(493),o=a(126);t.default=function(e){var t=e.state;if(!t)return r.a.createElement(o.a,null);e=t.detail.isCreator;return r.a.createElement("div",{className:l.default.songlist},r.a.createElement(c.a,{data:t.detail,songs:t.songs}),r.a.createElement(i.a,{data:t.songs,isCreator:e}),r.a.createElement(m.a,{data:t.comment}))}},462:function(e,t,a){"use strict";a.r(t),t.default={songlist:"songlist_1ykkf"}},491:function(e,t,a){"use strict";a(59),a(71),a(111),a(91),a(53),a(225),a(110),a(224),a(78),a(38),a(79),a(60),a(54),a(72),a(70),a(80);var n=a(0),y=a.n(n),p="detail_25jrL",b="list-left_2yfy6",g="image_2bPOj",h="list-right_2mj2G",N="title_1lnwV",k="btns_2-io8",_="creator_3n7vo",j="label_3EjNA",S="singer_1GFVl",w="lyric_1lU6E",O="toggle_384mF",A="description_3nXU6",n=a(223),C=a(176),I=a(88),F=a(481),U=a(476),x=a(486);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var D=n.d.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,m=t.cover,o=t.creator,s=t.labels,u=t.description,d=t.singers,f=t.publishTime,E=t.albumId,v=t.albumName,e=r?"歌单":l?"专辑":"单曲",t=a[0].isFree;return y.a.createElement("div",{className:p+" detail"},y.a.createElement("div",{className:b},y.a.createElement("div",{className:g},y.a.createElement("img",{src:"".concat(m,"?param=240y240")}))),y.a.createElement("div",{className:h},y.a.createElement("div",{className:N,style:{"--text":"'".concat(e,"'")}},i),l&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:S},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return y.a.createElement(y.a.Fragment,{key:t},y.a.createElement("a",{href:"#/Singer?id=".concat(a)},e),y.a.createElement("span",null," / "))})),y.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:S},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return y.a.createElement(y.a.Fragment,{key:t},y.a.createElement("a",{href:"#/Singer?id=".concat(a)},e),y.a.createElement("span",null," / "))})),y.a.createElement("div",null,"所属专辑：",y.a.createElement("a",{href:"#/Album?id=".concat(E)},v))),r&&y.a.createElement("div",{className:_},y.a.createElement("a",{href:"#/User?id=".concat(o.id)},y.a.createElement("img",{src:"".concat(o.avatar,"?param=40y40")}),o.name),new Date(o.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),y.a.createElement("div",{className:k},(l||r)&&y.a.createElement(I.a,{icon:y.a.createElement(F.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});D(e)}},"播放全部"),c&&y.a.createElement(y.a.Fragment,null,y.a.createElement(I.a,{icon:y.a.createElement(F.a,null),onClick:function(){D(a)},disabled:!t},"播放"),y.a.createElement(I.a,{icon:y.a.createElement(U.a,null),onClick:function(){Object(C.a)(a[0].id)},disabled:!t},"添加到歌单"),y.a.createElement(I.a,{icon:y.a.createElement(x.a,null),onClick:function(){Object(C.b)(name,id)},disabled:!t},"下载"))),r&&y.a.createElement("div",{className:j},"标签：",s.map(function(e,t){return y.a.createElement("span",{key:t},e)})),(r||l)&&y.a.createElement("div",{className:A},u),c&&y.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:O,style:{display:"none"}}),c&&0===n.length&&y.a.createElement("div",null,"暂无歌词"),c&&y.a.createElement("div",{className:w},n.map(function(e,t){var a=T(e,2),e=a[0],a=a[1];return y.a.createElement("p",{key:t},e,a&&y.a.createElement(y.a.Fragment,null,y.a.createElement("br",null),a))})),c&&y.a.createElement("label",{htmlFor:"toggle-lyric"})))}},492:function(e,t,a){"use strict";a(456),a(93),a(178),a(53),a(70),a(304),a(91),a(78),a(59),a(71),a(38),a(79),a(60),a(54),a(72),a(80);var n=a(0),f=a.n(n),r="songs_3dNMY",l="title_1N7Gm",E="icons_2bnDC",v="singer_3Y19L",y="playButton_3n5OR",p="fee_3nc7T",c=a(223),b=a(470),g=a(300),h=a(481),N=a(485),k=a(476),_=a(486),j=a(484),S=a(179),w=a(61),O=a(176);function A(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=e.data,m=e.isCreator,o=Object(n.useContext)(c.a).playlist,s=c.d.setPlaylist,t=i(Object(n.useState)(t),2),u=t[0],d=t[1];return f.a.createElement("div",{className:r},f.a.createElement("div",{className:l},"歌曲列表",f.a.createElement("span",null,u.length,"首歌")),f.a.createElement("table",null,f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"col"}),f.a.createElement("th",{scope:"col"},"歌曲标题"),f.a.createElement("th",{scope:"col"},"时长"),f.a.createElement("th",{scope:"col"},"歌手"),f.a.createElement("th",{scope:"col"},"专辑"))),f.a.createElement("tbody",null,u.map(function(e,t){var n=e.id,a=e.name,r=e.singers,l=e.duration,c=e.isFree,i=e.albumId,e=e.albumName;return f.a.createElement("tr",{key:t,className:c?"":p},f.a.createElement("td",null,f.a.createElement("span",null,t+1),f.a.createElement(h.a,{className:y,onClick:function(){var t,e;t=n,e=u.find(function(e){return e.id===t}),s([e])}})),f.a.createElement("td",null,f.a.createElement("a",{href:"#/Song?id=".concat(n)},a),f.a.createElement("div",{className:E},c&&f.a.createElement(f.a.Fragment,null,f.a.createElement(N.a,{title:"添加到播放列表",onClick:function(){var t,e;t=n,o.find(function(e){return e.id===t})||(e=u.find(function(e){return e.id===t}),e=[].concat(A(o),[e]),s(e,!1))}}),f.a.createElement(k.a,{title:"收藏到歌单",onClick:function(){var e;e=n,Object(O.a)(e)}}),f.a.createElement(_.a,{title:"下载",onClick:function(){var e,t;e=a,t=n,Object(O.b)(e,t)}})),m&&f.a.createElement(j.a,{title:"删除",onClick:function(){var t,e,a;t=n,e=+Object(w.e)(window.location.hash,"id"),a=u.findIndex(function(e){return e.id===t}),b.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(u[a].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(S.d)("del",e,[t]).then(function(){g.b.success("已删除");var e=u.slice();e.splice(a,1),d(e)})}})}}))),f.a.createElement("td",null,Object(w.b)(l)),f.a.createElement("td",null,r.map(function(e,t){var a=e.id,e=e.name;return f.a.createElement(f.a.Fragment,{key:t},f.a.createElement("a",{href:"#/Singer?id=".concat(a),title:e,className:v},e),f.a.createElement("span",null," / "))})),f.a.createElement("td",null,f.a.createElement("a",{href:"#/Album?id=".concat(i),title:e},e)))}))))}},493:function(e,t,a){"use strict";a(91);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},m=a(489),o=a(61);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(r.avatarUrl,"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement("a",{href:"#/User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement("a",{href:"#/User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(o.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(r.avatarUrl,"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement("a",{href:"#/User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement("a",{href:"#/User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(o.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);