(window.webpackJsonp=window.webpackJsonp||[]).push([[5,20,37],{193:function(e,t,a){"use strict";a.r(t);a(60),a(94),a(302),a(73),a(58),a(64),a(38),a(74),a(52),a(59),a(65),a(63),a(51),a(75),a(66);var n=a(0),r=a.n(n),i=a(24),o=a(232),m=a(42),s=a(231),u=a(311);function d(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(n,r)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(i.e)().search,l=Object(m.f)(e,"id");if(!l)return r.a.createElement("div",null,"歌曲id错误");var t=f(Object(n.useState)(null),2),e=t[0],c=t[1];return Object(n.useEffect)(function(){var e=function(){var i,e=(i=regeneratorRuntime.mark(function e(){var t,a,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)([l]);case 2:return r=e.sent,t=Object(s.c)(r.songs),a=Object(s.a)(r),e.next=7,Object(o.a)(l).then(s.b);case 7:return n=e.sent,e.next=10,Object(o.b)(l);case 10:r=e.sent,document.title=a.title,c({detail:a,songs:t,lyric:n,comment:r});case 13:case"end":return e.stop()}},e)}),function(){var e=this,c=arguments;return new Promise(function(t,a){var n=i.apply(e,c);function r(e){d(n,t,a,r,l,"next",e)}function l(e){d(n,t,a,r,l,"throw",e)}r(void 0)})});return function(){return e.apply(this,arguments)}}();c(null),e()},[l]),r.a.createElement(u.default,{state:e})}},311:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(462),c=a(492),i=a(494),o=a(128);t.default=function(e){e=e.state;return e?r.a.createElement("div",{className:l.default.song},r.a.createElement(c.a,{data:e.detail,songs:e.songs,lyric:e.lyric}),r.a.createElement(i.a,{data:e.comment})):r.a.createElement(o.a,null)}},462:function(e,t,a){"use strict";a.r(t),t.default={song:"song_3h_lc"}},492:function(e,t,a){"use strict";a(58),a(64),a(113),a(92),a(51),a(94),a(230),a(180),a(73),a(38),a(74),a(52),a(59),a(65),a(63),a(75);var n=a(0),b=a.n(n),y="detail_25jrL",p="list-left_2yfy6",g="image_2bPOj",h="list-right_2mj2G",N="title_1lnwV",j="btns_2-io8",k="creator_3n7vo",_="label_3EjNA",w="singer_1GFVl",O="lyric_1lU6E",S="toggle_384mF",A="description_3nXU6",x=a(85),n=a(229),F=a(42),I=a(179),U=a(89),C=a(482),R=a(477),D=a(487);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var J=n.e.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,s=t.labels,u=t.description,d=t.singers,f=t.publishTime,E=t.albumId,v=t.albumName,e=r?"歌单":l?"专辑":"单曲",t=a[0].isFree;return b.a.createElement("div",{className:y+" detail"},b.a.createElement("div",{className:p},b.a.createElement("div",{className:g},b.a.createElement("img",{src:"".concat(Object(F.e)(o),"?param=240y240")}))),b.a.createElement("div",{className:h},b.a.createElement("div",{className:N,style:{"--text":"'".concat(e,"'")}},i),l&&b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:w},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return b.a.createElement(b.a.Fragment,{key:t},b.a.createElement(x.b,{to:"/Singer?id=".concat(a)},e),b.a.createElement("span",null," / "))})),b.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:w},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return b.a.createElement(b.a.Fragment,{key:t},b.a.createElement(x.b,{to:"/Singer?id=".concat(a)},e),b.a.createElement("span",null," / "))})),b.a.createElement("div",null,"所属专辑：",b.a.createElement(x.b,{to:"/Album?id=".concat(E)},v))),r&&b.a.createElement("div",{className:k},b.a.createElement(x.b,{to:"/User?id=".concat(m.id)},b.a.createElement("img",{src:"".concat(Object(F.e)(m.avatar),"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),b.a.createElement("div",{className:j},(l||r)&&b.a.createElement(U.a,{icon:b.a.createElement(C.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});J(e)}},"播放全部"),c&&b.a.createElement(b.a.Fragment,null,b.a.createElement(U.a,{icon:b.a.createElement(C.a,null),onClick:function(){J(a)},disabled:!t},"播放"),b.a.createElement(U.a,{icon:b.a.createElement(R.a,null),onClick:function(){Object(I.a)(a[0].id)},disabled:!t},"添加到歌单"),b.a.createElement(U.a,{icon:b.a.createElement(D.a,null),onClick:function(){Object(I.b)(name,id)},disabled:!t},"下载"))),r&&b.a.createElement("div",{className:_},"标签：",s.map(function(e,t){return b.a.createElement("span",{key:t},e)})),(r||l)&&b.a.createElement("div",{className:A},u),c&&b.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:S,style:{display:"none"}}),c&&0===n.length&&b.a.createElement("div",null,"暂无歌词"),c&&b.a.createElement("div",{className:O},n.map(function(e,t){var a=G(e,2),e=a[0],a=a[1];return b.a.createElement("p",{key:t},e,a&&b.a.createElement(b.a.Fragment,null,b.a.createElement("br",null),a))})),c&&b.a.createElement("label",{htmlFor:"toggle-lyric"})))}},494:function(e,t,a){"use strict";a(92);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=a(85),m=a(490),s=a(42);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.e)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.e)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);