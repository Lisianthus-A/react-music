(window.webpackJsonp=window.webpackJsonp||[]).push([[4,18,36],{191:function(e,t,a){"use strict";a.r(t);a(64),a(117),a(291),a(75),a(86),a(77),a(78),a(50),a(87),a(62),a(69),a(79),a(76),a(61),a(88),a(63);var n=a(0),c=a.n(n),i=a(21),o=a(26),m=a(223),s=a(183),u=a(224),d=a(298);function f(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(i.e)().search,r=Object(o.searchItem)(e,"id");if(!r)return c.a.createElement("div",null,"id错误");var t=E(Object(n.useState)(null),2),e=t[0],l=t[1];return Object(n.useEffect)(function(){var e=function(){var i,e=(i=regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.c)(r);case 2:return t=e.sent,n=t.playlist.trackIds.map(function(e){return e.id}),t=Object(m.a)(t),e.next=7,Object(u.c)(n).then(function(e){return Object(m.c)(e.songs)});case 7:return a=e.sent,e.next=10,Object(s.b)(r);case 10:n=e.sent,document.title=t.title,l({detail:t,songs:a,comment:n});case 13:case"end":return e.stop()}},e)}),function(){var e=this,c=arguments;return new Promise(function(t,a){var n=i.apply(e,c);function r(e){f(n,t,a,r,l,"next",e)}function l(e){f(n,t,a,r,l,"throw",e)}r(void 0)})});return function(){return e.apply(this,arguments)}}();l(null),e()},[r]),c.a.createElement(d.default,{state:e})}},298:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(456),c=a(495),i=a(496),o=a(497),m=a(131);t.default=function(e){var t=e.state;if(!t)return r.a.createElement(m.a,null);e=t.detail.isCreator;return r.a.createElement("div",{className:l.default.songlist},r.a.createElement(c.a,{data:t.detail,songs:t.songs}),r.a.createElement(i.a,{data:t.songs,isCreator:e}),r.a.createElement(o.a,{data:t.comment}))}},456:function(e,t,a){"use strict";a.r(t),t.default={songlist:"songlist_1ykkf"}},495:function(e,t,a){"use strict";a(77),a(78),a(61),a(181),a(75),a(117),a(293),a(222),a(86),a(50),a(87),a(62),a(69),a(79),a(76),a(88);var n=a(0),g=a.n(n),h="detail_25jrL",N="list-left_2yfy6",j="image_2bPOj",k="list-right_2mj2G",O="title_1lnwV",w="btns_2-io8",S="creator_3n7vo",_="label_3EjNA",A="singer_1GFVl",I="lyric_1lU6E",C="toggle_384mF",x="description_3nXU6",F=a(85),n=a(221),T=a(26),U=a(180),H=a(92),D=a(485),R=a(480),G=a(490);function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var P=n.d.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,s=t.labels,u=t.description,d=t.singers,f=t.publishTime,E=t.albumId,p=t.albumName,v=r?"歌单":l?"专辑":"单曲",e=a[0],t=e.isFree,b=e.name,y=e.id;return g.a.createElement("div",{className:h+" detail"},g.a.createElement("div",{className:N},g.a.createElement("div",{className:j},g.a.createElement("img",{src:"".concat(Object(T.replaceHttpToHttps)(o),"?param=240y240")}))),g.a.createElement("div",{className:k},g.a.createElement("div",{className:O,style:{"--text":"'".concat(v,"'")}},i),l&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(F.b,{to:"/Singer?id=".concat(a)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(F.b,{to:"/Singer?id=".concat(a)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"所属专辑：",g.a.createElement(F.b,{to:"/Album?id=".concat(E)},p))),r&&g.a.createElement("div",{className:S},g.a.createElement(F.b,{to:"/User?id=".concat(m.id)},g.a.createElement("img",{src:"".concat(Object(T.replaceHttpToHttps)(m.avatar),"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),g.a.createElement("div",{className:w},(l||r)&&g.a.createElement(H.a,{icon:g.a.createElement(D.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});P(e)}},"播放全部"),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement(H.a,{icon:g.a.createElement(D.a,null),onClick:function(){P(a)},disabled:!t},"播放"),g.a.createElement(H.a,{icon:g.a.createElement(R.a,null),onClick:function(){Object(U.a)(y)},disabled:!t},"添加到歌单"),g.a.createElement(H.a,{icon:g.a.createElement(G.a,null),onClick:function(){Object(U.b)(b,y)},disabled:!t},"下载"))),r&&g.a.createElement("div",{className:_},"标签：",s.map(function(e,t){return g.a.createElement("span",{key:t},e)})),(r||l)&&g.a.createElement("div",{className:x},u),c&&g.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:C,style:{display:"none"}}),c&&0===n.length&&g.a.createElement("div",null,"暂无歌词"),c&&g.a.createElement("div",{className:I},n.map(function(e,t){var a=L(e,2),e=a[0],a=a[1];return g.a.createElement("p",{key:t},e,a&&g.a.createElement(g.a.Fragment,null,g.a.createElement("br",null),a))})),c&&g.a.createElement("label",{htmlFor:"toggle-lyric"})))}},496:function(e,t,a){"use strict";a(450),a(98),a(182),a(61),a(76),a(292),a(75),a(86),a(77),a(78),a(50),a(87),a(62),a(69),a(79),a(88);var n=a(0),f=a.n(n),r="songs_3dNMY",l="title_1N7Gm",E="icons_2bnDC",p="singer_3Y19L",v="playButton_3n5OR",b="fee_3nc7T",y=a(85),c=a(221),g=a(473),h=a(288),N=a(485),j=a(489),k=a(480),O=a(490),w=a(488),S=a(183),_=a(26),A=a(180);function I(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=e.data,o=e.isCreator,m=Object(n.useContext)(c.a).playlist,s=c.d.setPlaylist,t=i(Object(n.useState)(t),2),u=t[0],d=t[1];return f.a.createElement("div",{className:r},f.a.createElement("div",{className:l},"歌曲列表",f.a.createElement("span",null,u.length,"首歌")),f.a.createElement("table",null,f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"col"}),f.a.createElement("th",{scope:"col"},"歌曲标题"),f.a.createElement("th",{scope:"col"},"时长"),f.a.createElement("th",{scope:"col"},"歌手"),f.a.createElement("th",{scope:"col"},"专辑"))),f.a.createElement("tbody",null,u.map(function(e,t){var n=e.id,a=e.name,r=e.singers,l=e.duration,c=e.isFree,i=e.albumId,e=e.albumName;return f.a.createElement("tr",{key:t,className:c?"":b},f.a.createElement("td",null,f.a.createElement("span",null,t+1),f.a.createElement(N.a,{className:v,onClick:function(){var t,e;t=n,e=u.find(function(e){return e.id===t}),s([e])}})),f.a.createElement("td",null,f.a.createElement(y.b,{to:"/Song?id=".concat(n),title:a},a),f.a.createElement("div",{className:E},c&&f.a.createElement(f.a.Fragment,null,f.a.createElement(j.a,{title:"添加到播放列表",onClick:function(){var t,e;t=n,m.find(function(e){return e.id===t})||(e=u.find(function(e){return e.id===t}),e=[].concat(I(m),[e]),s(e,!1))}}),f.a.createElement(k.a,{title:"收藏到歌单",onClick:function(){var e;e=n,Object(A.a)(e)}}),f.a.createElement(O.a,{title:"下载",onClick:function(){var e,t;e=a,t=n,Object(A.b)(e,t)}})),o&&f.a.createElement(w.a,{title:"删除",onClick:function(){var t,e,a;t=n,e=+Object(_.searchItem)(window.location.hash,"id"),a=u.findIndex(function(e){return e.id===t}),g.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(u[a].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(S.d)("del",e,[t]).then(function(){h.b.success("已删除");var e=u.slice();e.splice(a,1),d(e)})}})}}))),f.a.createElement("td",null,Object(_.convertTime)(l)),f.a.createElement("td",null,r.map(function(e,t){var a=e.id,e=e.name;return f.a.createElement(f.a.Fragment,{key:t},f.a.createElement(y.b,{to:"/Singer?id=".concat(a),title:e,className:p},e),f.a.createElement("span",null," / "))})),f.a.createElement("td",null,f.a.createElement(y.b,{to:"/Album?id=".concat(i),title:e},e)))}))))}},497:function(e,t,a){"use strict";a(75);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=a(85),m=a(493),s=a(26);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.replaceHttpToHttps)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.convertDate)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.replaceHttpToHttps)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.convertDate)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);