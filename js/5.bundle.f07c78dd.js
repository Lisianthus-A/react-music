(window.webpackJsonp=window.webpackJsonp||[]).push([[5,19,35],{196:function(e,t,a){"use strict";a.r(t);a(63),a(100),a(305),a(74),a(60),a(68),a(39),a(75),a(54),a(61),a(69),a(67),a(53),a(76),a(62);var n=a(0),r=a.n(n),i=a(22),o=a(235),m=a(27),s=a(234),u=a(313);function d(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(i.e)().search,l=Object(m.f)(e,"id");if(!l)return r.a.createElement("div",null,"歌曲id错误");var t=f(Object(n.useState)(null),2),e=t[0],c=t[1];return Object(n.useEffect)(function(){var e=function(){var i,e=(i=regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)([l]);case 2:return r=e.sent,t=Object(s.c)(r.songs),a=Object(s.a)(r),e.next=7,Object(o.a)(l).then(s.b);case 7:return n=e.sent,e.next=10,Object(o.b)(l);case 10:r=e.sent,document.title=a.title,c({detail:a,songs:t,lyric:n,comment:r});case 13:case"end":return e.stop()}},e)}),function(){var e=this,c=arguments;return new Promise(function(t,a){var n=i.apply(e,c);function r(e){d(n,t,a,r,l,"next",e)}function l(e){d(n,t,a,r,l,"throw",e)}r(void 0)})});return function(){return e.apply(this,arguments)}}();c(null),e()},[l]),r.a.createElement(u.default,{state:e})}},313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(472),c=a(503),i=a(505),o=a(134);t.default=function(e){e=e.state;return e?r.a.createElement("div",{className:l.default.song},r.a.createElement(c.a,{data:e.detail,songs:e.songs,lyric:e.lyric}),r.a.createElement(i.a,{data:e.comment})):r.a.createElement(o.a,null)}},472:function(e,t,a){"use strict";a.r(t),t.default={song:"song_3h_lc"}},503:function(e,t,a){"use strict";a(60),a(68),a(53),a(119),a(84),a(100),a(233),a(184),a(74),a(39),a(75),a(54),a(61),a(69),a(67),a(76);var n=a(0),g=a.n(n),h="detail_25jrL",N="list-left_2yfy6",j="image_2bPOj",k="list-right_2mj2G",_="title_1lnwV",w="btns_2-io8",O="creator_3n7vo",S="label_3EjNA",A="singer_1GFVl",x="lyric_1lU6E",F="toggle_384mF",I="description_3nXU6",U=a(92),n=a(232),C=a(27),R=a(183),D=a(95),G=a(493),J=a(488),L=a(498);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var T=n.d.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,s=t.labels,u=t.description,d=t.singers,f=t.publishTime,E=t.albumId,v=t.albumName,b=r?"歌单":l?"专辑":"单曲",e=a[0],t=e.isFree,y=e.name,p=e.id;return g.a.createElement("div",{className:h+" detail"},g.a.createElement("div",{className:N},g.a.createElement("div",{className:j},g.a.createElement("img",{src:"".concat(Object(C.e)(o),"?param=240y240")}))),g.a.createElement("div",{className:k},g.a.createElement("div",{className:_,style:{"--text":"'".concat(b,"'")}},i),l&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(U.b,{to:"/Singer?id=".concat(a)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(U.b,{to:"/Singer?id=".concat(a)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"所属专辑：",g.a.createElement(U.b,{to:"/Album?id=".concat(E)},v))),r&&g.a.createElement("div",{className:O},g.a.createElement(U.b,{to:"/User?id=".concat(m.id)},g.a.createElement("img",{src:"".concat(Object(C.e)(m.avatar),"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),g.a.createElement("div",{className:w},(l||r)&&g.a.createElement(D.a,{icon:g.a.createElement(G.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});T(e)}},"播放全部"),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement(D.a,{icon:g.a.createElement(G.a,null),onClick:function(){T(a)},disabled:!t},"播放"),g.a.createElement(D.a,{icon:g.a.createElement(J.a,null),onClick:function(){Object(R.a)(p)},disabled:!t},"添加到歌单"),g.a.createElement(D.a,{icon:g.a.createElement(L.a,null),onClick:function(){Object(R.b)(y,p)},disabled:!t},"下载"))),r&&g.a.createElement("div",{className:S},"标签：",s.map(function(e,t){return g.a.createElement("span",{key:t},e)})),(r||l)&&g.a.createElement("div",{className:I},u),c&&g.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:F,style:{display:"none"}}),c&&0===n.length&&g.a.createElement("div",null,"暂无歌词"),c&&g.a.createElement("div",{className:x},n.map(function(e,t){var a=P(e,2),e=a[0],a=a[1];return g.a.createElement("p",{key:t},e,a&&g.a.createElement(g.a.Fragment,null,g.a.createElement("br",null),a))})),c&&g.a.createElement("label",{htmlFor:"toggle-lyric"})))}},505:function(e,t,a){"use strict";a(84);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=a(92),m=a(501),s=a(27);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.e)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.e)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);