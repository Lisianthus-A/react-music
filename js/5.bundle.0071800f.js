(window.webpackJsonp=window.webpackJsonp||[]).push([[5,20,37],{190:function(e,t,a){"use strict";a.r(t);a(63),a(303),a(111),a(78),a(59),a(71),a(38),a(79),a(60),a(54),a(72),a(70),a(53),a(80),a(62);var n=a(0),r=a.n(n),i=a(24),o=a(227),m=a(61),s=a(226),u=a(311);function d(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(i.e)().search,l=Object(m.e)(e,"id");if(!l)return r.a.createElement("div",null,"歌曲id错误");var t=f(Object(n.useState)(null),2),e=t[0],c=t[1];return Object(n.useEffect)(function(){var e=function(){var i,e=(i=regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)([l]);case 2:return r=e.sent,t=Object(s.c)(r.songs),a=Object(s.a)(r),e.next=7,Object(o.a)(l).then(s.b);case 7:return n=e.sent,e.next=10,Object(o.b)(l);case 10:r=e.sent,c({detail:a,songs:t,lyric:n,comment:r});case 12:case"end":return e.stop()}},e)}),function(){var e=this,c=arguments;return new Promise(function(t,a){var n=i.apply(e,c);function r(e){d(n,t,a,r,l,"next",e)}function l(e){d(n,t,a,r,l,"throw",e)}r(void 0)})});return function(){return e.apply(this,arguments)}}();c(null),e()},[l]),r.a.createElement(u.default,{state:e})}},311:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(461),c=a(491),i=a(493),o=a(127);t.default=function(e){e=e.state;return e?r.a.createElement("div",{className:l.default.song},r.a.createElement(c.a,{data:e.detail,songs:e.songs,lyric:e.lyric}),r.a.createElement(i.a,{data:e.comment})):r.a.createElement(o.a,null)}},461:function(e,t,a){"use strict";a.r(t),t.default={song:"song_3h_lc"}},491:function(e,t,a){"use strict";a(59),a(71),a(112),a(92),a(53),a(225),a(111),a(224),a(78),a(38),a(79),a(60),a(54),a(72),a(70),a(80);var n=a(0),y=a.n(n),b="detail_25jrL",p="list-left_2yfy6",g="image_2bPOj",h="list-right_2mj2G",N="title_1lnwV",j="btns_2-io8",k="creator_3n7vo",_="label_3EjNA",w="singer_1GFVl",O="lyric_1lU6E",S="toggle_384mF",A="description_3nXU6",x=a(85),n=a(223),F=a(177),I=a(89),U=a(481),C=a(476),R=a(486);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var G=n.d.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,s=t.labels,u=t.description,d=t.singers,f=t.publishTime,E=t.albumId,v=t.albumName,e=r?"歌单":l?"专辑":"单曲",t=a[0].isFree;return y.a.createElement("div",{className:b+" detail"},y.a.createElement("div",{className:p},y.a.createElement("div",{className:g},y.a.createElement("img",{src:"".concat(o,"?param=240y240")}))),y.a.createElement("div",{className:h},y.a.createElement("div",{className:N,style:{"--text":"'".concat(e,"'")}},i),l&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:w},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return y.a.createElement(y.a.Fragment,{key:t},y.a.createElement(x.b,{to:"/Singer?id=".concat(a)},e),y.a.createElement("span",null," / "))})),y.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:w},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return y.a.createElement(y.a.Fragment,{key:t},y.a.createElement(x.b,{to:"/Singer?id=".concat(a)},e),y.a.createElement("span",null," / "))})),y.a.createElement("div",null,"所属专辑：",y.a.createElement(x.b,{to:"/Album?id=".concat(E)},v))),r&&y.a.createElement("div",{className:k},y.a.createElement(x.b,{to:"/User?id=".concat(m.id)},y.a.createElement("img",{src:"".concat(m.avatar,"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),y.a.createElement("div",{className:j},(l||r)&&y.a.createElement(I.a,{icon:y.a.createElement(U.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});G(e)}},"播放全部"),c&&y.a.createElement(y.a.Fragment,null,y.a.createElement(I.a,{icon:y.a.createElement(U.a,null),onClick:function(){G(a)},disabled:!t},"播放"),y.a.createElement(I.a,{icon:y.a.createElement(C.a,null),onClick:function(){Object(F.a)(a[0].id)},disabled:!t},"添加到歌单"),y.a.createElement(I.a,{icon:y.a.createElement(R.a,null),onClick:function(){Object(F.b)(name,id)},disabled:!t},"下载"))),r&&y.a.createElement("div",{className:_},"标签：",s.map(function(e,t){return y.a.createElement("span",{key:t},e)})),(r||l)&&y.a.createElement("div",{className:A},u),c&&y.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:S,style:{display:"none"}}),c&&0===n.length&&y.a.createElement("div",null,"暂无歌词"),c&&y.a.createElement("div",{className:O},n.map(function(e,t){var a=D(e,2),e=a[0],a=a[1];return y.a.createElement("p",{key:t},e,a&&y.a.createElement(y.a.Fragment,null,y.a.createElement("br",null),a))})),c&&y.a.createElement("label",{htmlFor:"toggle-lyric"})))}},493:function(e,t,a){"use strict";a(92);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=a(85),m=a(489),s=a(61);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(r.avatarUrl,"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(r.avatarUrl,"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);