import{j as n,b as m,r as a}from"./vendor.fb93b9f7.js";import{L as f,u as g,s as x,v,r as y,b as L,w as j,x as p}from"./index.39ed000d.js";import{D as w,C as D}from"./index.20099192.js";const b="_song_1solt_1";var C={song:b};function E({pageState:s}){if(!s)return n(f,{});const{detail:t,songList:i,lyric:o,comment:e}=s;return m("div",{className:C.song,children:[n(w,{data:{detail:t,songList:i,lyric:o}}),n(D,{data:e})]})}function F(){const s=g("id");if(!s)return n("div",{children:"\u6B4C\u66F2id\u9519\u8BEF"});const[t,i]=a.exports.useState(null);return a.exports.useEffect(()=>{const o=async()=>{const e=await x([s]),r=await v(s),c=y(e),l=L(e.songs,"detail"),d=j(r),u=await p(s);i({detail:c,songList:l,lyric:d,comment:u})};i(null),o()},[s]),a.exports.useEffect(()=>{var e;const o=(e=t==null?void 0:t.detail)==null?void 0:e.title;o&&(document.title=o)},[t]),n(E,{pageState:t})}export{F as default};
