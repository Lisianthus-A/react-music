(window.webpackJsonp=window.webpackJsonp||[]).push([[3,17,25],{194:function(e,t,n){"use strict";n.r(t);n(64),n(117),n(291),n(86),n(77),n(78),n(50),n(87),n(62),n(69),n(79),n(76),n(61),n(88),n(63);var a=n(0),c=n.n(a),i=n(21),r=n(29),l=n.n(r);function o(e,t,n,a,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(a,r)}function m(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var a=i.apply(e,c);function r(e){o(a,t,n,r,l,"next",e)}function l(e){o(a,t,n,r,l,"throw",e)}r(void 0)})}}var u=function(){var t=m(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("/comment/album?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=m(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("/album?id=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),d=n(26),f=n(223),E=n(294);function p(e,t,n,a,r,l,c){try{var i=e[l](c),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(a,r)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e=Object(i.e)().search,r=Object(d.searchItem)(e,"id");if(!r)return c.a.createElement("div",null,"id错误");var t=v(Object(a.useState)(null),2),e=t[0],l=t[1];return Object(a.useEffect)(function(){var e=function(){var i,e=(i=regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(r);case 2:return a=e.sent,t=Object(f.c)(a.songs),n=Object(f.a)(a),e.next=7,u(r);case 7:a=e.sent,document.title=n.title,l({detail:n,comment:a,songs:t});case 10:case"end":return e.stop()}},e)}),function(){var e=this,c=arguments;return new Promise(function(t,n){var a=i.apply(e,c);function r(e){p(a,t,n,r,l,"next",e)}function l(e){p(a,t,n,r,l,"throw",e)}r(void 0)})});return function(){return e.apply(this,arguments)}}();l(null),e()},[r]),c.a.createElement(E.default,{state:e})}},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(451),c=n(495),i=n(496),o=n(497),m=n(131);t.default=function(e){e=e.state;return e?r.a.createElement("div",{className:l.default.album},r.a.createElement(c.a,{data:e.detail,songs:e.songs}),r.a.createElement(i.a,{data:e.songs}),r.a.createElement(o.a,{data:e.comment,songs:e.songs})):r.a.createElement(m.a,null)}},451:function(e,t,n){"use strict";n.r(t),t.default={album:"album_1B3P6"}},495:function(e,t,n){"use strict";n(77),n(78),n(61),n(181),n(75),n(117),n(293),n(222),n(86),n(50),n(87),n(62),n(69),n(79),n(76),n(88);var a=n(0),g=n.n(a),h="detail_25jrL",N="list-left_2yfy6",w="image_2bPOj",j="list-right_2mj2G",k="title_1lnwV",O="btns_2-io8",S="creator_3n7vo",_="label_3EjNA",A="singer_1GFVl",x="lyric_1lU6E",I="toggle_384mF",C="description_3nXU6",F=n(85),a=n(221),T=n(26),U=n(180),H=n(92),R=n(485),P=n(480),D=n(490);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var L=a.d.setPlaylist;t.a=function(e){var t=e.data,n=e.songs,a=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,u=t.labels,s=t.description,d=t.singers,f=t.publishTime,E=t.albumId,p=t.albumName,v=r?"歌单":l?"专辑":"单曲",e=n[0],t=e.isFree,b=e.name,y=e.id;return g.a.createElement("div",{className:h+" detail"},g.a.createElement("div",{className:N},g.a.createElement("div",{className:w},g.a.createElement("img",{src:"".concat(Object(T.replaceHttpToHttps)(o),"?param=240y240")}))),g.a.createElement("div",{className:j},g.a.createElement("div",{className:k,style:{"--text":"'".concat(v,"'")}},i),l&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var n=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(F.b,{to:"/Singer?id=".concat(n)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"发行时间：",new Date(f).toLocaleDateString().replace(/\//g,"-"))),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var n=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(F.b,{to:"/Singer?id=".concat(n)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"所属专辑：",g.a.createElement(F.b,{to:"/Album?id=".concat(E)},p))),r&&g.a.createElement("div",{className:S},g.a.createElement(F.b,{to:"/User?id=".concat(m.id)},g.a.createElement("img",{src:"".concat(Object(T.replaceHttpToHttps)(m.avatar),"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),g.a.createElement("div",{className:O},(l||r)&&g.a.createElement(H.a,{icon:g.a.createElement(R.a,null),onClick:function(){var e=n.filter(function(e){return e.isFree});L(e)}},"播放全部"),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement(H.a,{icon:g.a.createElement(R.a,null),onClick:function(){L(n)},disabled:!t},"播放"),g.a.createElement(H.a,{icon:g.a.createElement(P.a,null),onClick:function(){Object(U.a)(y)},disabled:!t},"添加到歌单"),g.a.createElement(H.a,{icon:g.a.createElement(D.a,null),onClick:function(){Object(U.b)(b,y)},disabled:!t},"下载"))),r&&g.a.createElement("div",{className:_},"标签：",u.map(function(e,t){return g.a.createElement("span",{key:t},e)})),(r||l)&&g.a.createElement("div",{className:C},s),c&&g.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:I,style:{display:"none"}}),c&&0===a.length&&g.a.createElement("div",null,"暂无歌词"),c&&g.a.createElement("div",{className:x},a.map(function(e,t){var n=G(e,2),e=n[0],n=n[1];return g.a.createElement("p",{key:t},e,n&&g.a.createElement(g.a.Fragment,null,g.a.createElement("br",null),n))})),c&&g.a.createElement("label",{htmlFor:"toggle-lyric"})))}},496:function(e,t,n){"use strict";n(450),n(98),n(182),n(61),n(76),n(292),n(75),n(86),n(77),n(78),n(50),n(87),n(62),n(69),n(79),n(88);var a=n(0),f=n.n(a),r="songs_3dNMY",l="title_1N7Gm",E="icons_2bnDC",p="singer_3Y19L",v="playButton_3n5OR",b="fee_3nc7T",y=n(85),c=n(221),g=n(473),h=n(288),N=n(485),w=n(489),j=n(480),k=n(490),O=n(488),S=n(183),_=n(26),A=n(180);function x(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return l}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=e.data,o=e.isCreator,m=Object(a.useContext)(c.a).playlist,u=c.d.setPlaylist,t=i(Object(a.useState)(t),2),s=t[0],d=t[1];return f.a.createElement("div",{className:r},f.a.createElement("div",{className:l},"歌曲列表",f.a.createElement("span",null,s.length,"首歌")),f.a.createElement("table",null,f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"col"}),f.a.createElement("th",{scope:"col"},"歌曲标题"),f.a.createElement("th",{scope:"col"},"时长"),f.a.createElement("th",{scope:"col"},"歌手"),f.a.createElement("th",{scope:"col"},"专辑"))),f.a.createElement("tbody",null,s.map(function(e,t){var a=e.id,n=e.name,r=e.singers,l=e.duration,c=e.isFree,i=e.albumId,e=e.albumName;return f.a.createElement("tr",{key:t,className:c?"":b},f.a.createElement("td",null,f.a.createElement("span",null,t+1),f.a.createElement(N.a,{className:v,onClick:function(){var t,e;t=a,e=s.find(function(e){return e.id===t}),u([e])}})),f.a.createElement("td",null,f.a.createElement(y.b,{to:"/Song?id=".concat(a),title:n},n),f.a.createElement("div",{className:E},c&&f.a.createElement(f.a.Fragment,null,f.a.createElement(w.a,{title:"添加到播放列表",onClick:function(){var t,e;t=a,m.find(function(e){return e.id===t})||(e=s.find(function(e){return e.id===t}),e=[].concat(x(m),[e]),u(e,!1))}}),f.a.createElement(j.a,{title:"收藏到歌单",onClick:function(){var e;e=a,Object(A.a)(e)}}),f.a.createElement(k.a,{title:"下载",onClick:function(){var e,t;e=n,t=a,Object(A.b)(e,t)}})),o&&f.a.createElement(O.a,{title:"删除",onClick:function(){var t,e,n;t=a,e=+Object(_.searchItem)(window.location.hash,"id"),n=s.findIndex(function(e){return e.id===t}),g.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(s[n].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(S.d)("del",e,[t]).then(function(){h.b.success("已删除");var e=s.slice();e.splice(n,1),d(e)})}})}}))),f.a.createElement("td",null,Object(_.convertTime)(l)),f.a.createElement("td",null,r.map(function(e,t){var n=e.id,e=e.name;return f.a.createElement(f.a.Fragment,{key:t},f.a.createElement(y.b,{to:"/Singer?id=".concat(n),title:e,className:p},e),f.a.createElement("span",null," / "))})),f.a.createElement("td",null,f.a.createElement(y.b,{to:"/Album?id=".concat(i),title:e},e)))}))))}},497:function(e,t,n){"use strict";n(75);var a=n(0),c=n.n(a),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=n(85),m=n(493),u=n(26);t.a=function(e){var t=e.data,n=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<n.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<n.length&&n.map(function(e,t){var n=e.beReplied,a=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(u.replaceHttpToHttps)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),a),n[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(n[0].user.userId)},n[0].user.nickname,"："),n[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(u.convertDate)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var n=e.beReplied,a=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(u.replaceHttpToHttps)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),a),n[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(n[0].user.userId)},n[0].user.nickname,"："),n[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(u.convertDate)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);