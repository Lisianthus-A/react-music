(window.webpackJsonp=window.webpackJsonp||[]).push([[18,26],{309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(464),c=a(499),i=a(500),o=a(501),m=a(132);t.default=function(e){e=e.state;return e?r.a.createElement("div",{className:l.default.album},r.a.createElement(c.a,{data:e.detail,songs:e.songs}),r.a.createElement(i.a,{data:e.songs}),r.a.createElement(o.a,{data:e.comment,songs:e.songs})):r.a.createElement(m.a,null)}},464:function(e,t,a){"use strict";a.r(t),t.default={album:"album_1B3P6"}},499:function(e,t,a){"use strict";a(60),a(68),a(52),a(117),a(88),a(98),a(233),a(183),a(74),a(37),a(75),a(53),a(61),a(69),a(67),a(76);var n=a(0),g=a.n(n),N="detail_25jrL",h="list-left_2yfy6",k="image_2bPOj",_="list-right_2mj2G",j="title_1lnwV",w="btns_2-io8",S="creator_3n7vo",O="label_3EjNA",A="singer_1GFVl",C="lyric_1lU6E",I="toggle_384mF",F="description_3nXU6",U=a(89),n=a(232),x=a(41),T=a(182),D=a(93),G=a(489),L=a(484),J=a(494);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var R=n.d.setPlaylist;t.a=function(e){var t=e.data,a=e.songs,n=e.lyric,r=t.isSonglist,l=t.isAlbum,c=t.isSong,i=t.title,o=t.cover,m=t.creator,s=t.labels,u=t.description,d=t.singers,E=t.publishTime,f=t.albumId,b=t.albumName,v=r?"歌单":l?"专辑":"单曲",e=a[0],t=e.isFree,p=e.name,y=e.id;return g.a.createElement("div",{className:N+" detail"},g.a.createElement("div",{className:h},g.a.createElement("div",{className:k},g.a.createElement("img",{src:"".concat(Object(x.e)(o),"?param=240y240")}))),g.a.createElement("div",{className:_},g.a.createElement("div",{className:j,style:{"--text":"'".concat(v,"'")}},i),l&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(U.b,{to:"/Singer?id=".concat(a)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"发行时间：",new Date(E).toLocaleDateString().replace(/\//g,"-"))),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:A},"歌手：",d.map(function(e,t){var a=e.id,e=e.name;return g.a.createElement(g.a.Fragment,{key:t},g.a.createElement(U.b,{to:"/Singer?id=".concat(a)},e),g.a.createElement("span",null," / "))})),g.a.createElement("div",null,"所属专辑：",g.a.createElement(U.b,{to:"/Album?id=".concat(f)},b))),r&&g.a.createElement("div",{className:S},g.a.createElement(U.b,{to:"/User?id=".concat(m.id)},g.a.createElement("img",{src:"".concat(Object(x.e)(m.avatar),"?param=40y40")}),m.name),new Date(m.createTime).toLocaleString().replace(/[ ].+/,"").replace(/\//g,"-"),"创建"),g.a.createElement("div",{className:w},(l||r)&&g.a.createElement(D.a,{icon:g.a.createElement(G.a,null),onClick:function(){var e=a.filter(function(e){return e.isFree});R(e)}},"播放全部"),c&&g.a.createElement(g.a.Fragment,null,g.a.createElement(D.a,{icon:g.a.createElement(G.a,null),onClick:function(){R(a)},disabled:!t},"播放"),g.a.createElement(D.a,{icon:g.a.createElement(L.a,null),onClick:function(){Object(T.a)(y)},disabled:!t},"添加到歌单"),g.a.createElement(D.a,{icon:g.a.createElement(J.a,null),onClick:function(){Object(T.b)(p,y)},disabled:!t},"下载"))),r&&g.a.createElement("div",{className:O},"标签：",s.map(function(e,t){return g.a.createElement("span",{key:t},e)})),(r||l)&&g.a.createElement("div",{className:F},u),c&&g.a.createElement("input",{type:"checkbox",id:"toggle-lyric",className:I,style:{display:"none"}}),c&&0===n.length&&g.a.createElement("div",null,"暂无歌词"),c&&g.a.createElement("div",{className:C},n.map(function(e,t){var a=P(e,2),e=a[0],a=a[1];return g.a.createElement("p",{key:t},e,a&&g.a.createElement(g.a.Fragment,null,g.a.createElement("br",null),a))})),c&&g.a.createElement("label",{htmlFor:"toggle-lyric"})))}},500:function(e,t,a){"use strict";a(463),a(90),a(184),a(52),a(67),a(305),a(88),a(74),a(60),a(68),a(37),a(75),a(53),a(61),a(69),a(76);var n=a(0),E=a.n(n),r="songs_3dNMY",l="title_1N7Gm",f="icons_2bnDC",b="singer_3Y19L",v="playButton_3n5OR",p="fee_3nc7T",y=a(89),c=a(232),g=a(477),N=a(301),h=a(489),k=a(493),_=a(484),j=a(494),w=a(492),S=a(185),O=a(41),A=a(182);function C(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=e.data,o=e.isCreator,m=Object(n.useContext)(c.a).playlist,s=c.d.setPlaylist,t=i(Object(n.useState)(t),2),u=t[0],d=t[1];return E.a.createElement("div",{className:r},E.a.createElement("div",{className:l},"歌曲列表",E.a.createElement("span",null,u.length,"首歌")),E.a.createElement("table",null,E.a.createElement("thead",null,E.a.createElement("tr",null,E.a.createElement("th",{scope:"col"}),E.a.createElement("th",{scope:"col"},"歌曲标题"),E.a.createElement("th",{scope:"col"},"时长"),E.a.createElement("th",{scope:"col"},"歌手"),E.a.createElement("th",{scope:"col"},"专辑"))),E.a.createElement("tbody",null,u.map(function(e,t){var n=e.id,a=e.name,r=e.singers,l=e.duration,c=e.isFree,i=e.albumId,e=e.albumName;return E.a.createElement("tr",{key:t,className:c?"":p},E.a.createElement("td",null,E.a.createElement("span",null,t+1),E.a.createElement(h.a,{className:v,onClick:function(){var t,e;t=n,e=u.find(function(e){return e.id===t}),s([e])}})),E.a.createElement("td",null,E.a.createElement(y.b,{to:"/Song?id=".concat(n)},a),E.a.createElement("div",{className:f},c&&E.a.createElement(E.a.Fragment,null,E.a.createElement(k.a,{title:"添加到播放列表",onClick:function(){var t,e;t=n,m.find(function(e){return e.id===t})||(e=u.find(function(e){return e.id===t}),e=[].concat(C(m),[e]),s(e,!1))}}),E.a.createElement(_.a,{title:"收藏到歌单",onClick:function(){var e;e=n,Object(A.a)(e)}}),E.a.createElement(j.a,{title:"下载",onClick:function(){var e,t;e=a,t=n,Object(A.b)(e,t)}})),o&&E.a.createElement(w.a,{title:"删除",onClick:function(){var t,e,a;t=n,e=+Object(O.f)(window.location.hash,"id"),a=u.findIndex(function(e){return e.id===t}),g.a.confirm({title:"删除歌曲",content:"是否要删除歌曲 ".concat(u[a].name," ？"),okText:"是",cancelText:"否",onOk:function(){return Object(S.d)("del",e,[t]).then(function(){N.b.success("已删除");var e=u.slice();e.splice(a,1),d(e)})}})}}))),E.a.createElement("td",null,Object(O.b)(l)),E.a.createElement("td",null,r.map(function(e,t){var a=e.id,e=e.name;return E.a.createElement(E.a.Fragment,{key:t},E.a.createElement(y.b,{to:"/Singer?id=".concat(a),title:e,className:b},e),E.a.createElement("span",null," / "))})),E.a.createElement("td",null,E.a.createElement(y.b,{to:"/Album?id=".concat(i),title:e},e)))}))))}},501:function(e,t,a){"use strict";a(88);var n=a(0),c=a.n(n),i={"comment-list":"comment-list_1x3ow",title:"title_wQwDf",total:"total_15S_0","sub-title":"sub-title_26rkG",comment:"comment_QmkHt",container:"container_RtfsL",content:"content_8OEHS",image:"image_1WnJG",reply:"reply_2xYmi",footer:"footer_2kjrJ"},o=a(89),m=a(497),s=a(41);t.a=function(e){var t=e.data,a=t.hotComments,e=t.comments,t=t.total;return c.a.createElement("div",{className:i["comment-list"]},c.a.createElement("div",{className:i.title},"评论列表",c.a.createElement("span",{className:i.total},"共",t,"条")),0<a.length&&c.a.createElement("div",{className:i["sub-title"]},"精彩评论"),0<a.length&&a.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.e)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}),0<e.length&&c.a.createElement("div",{className:i["sub-title"]},"最新评论"),0<e.length&&e.map(function(e,t){var a=e.beReplied,n=e.content,r=e.user,l=e.time,e=e.likedCount;return c.a.createElement("div",{className:i.comment,key:t},c.a.createElement("div",{className:i.image},c.a.createElement("img",{src:"".concat(Object(s.e)(r.avatarUrl),"?param=50y50"),loading:"lazy"})),c.a.createElement("div",{className:i.container},c.a.createElement("div",{className:i.content},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(r.userId)},r.nickname,"："),n),a[0]&&c.a.createElement("div",{className:i.reply},c.a.createElement("span",null,c.a.createElement(o.b,{to:"User?id=".concat(a[0].user.userId)},a[0].user.nickname,"："),a[0].content))),c.a.createElement("div",{className:i.footer},c.a.createElement("span",{className:i.date},Object(s.a)(l)),c.a.createElement("span",{className:i.like},c.a.createElement(m.a,{style:{color:"#1890ff"}}),"(",e,")"))))}))}}}]);