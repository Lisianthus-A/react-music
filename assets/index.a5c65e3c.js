import{j as a,b as c,r as i}from"./vendor.fb93b9f7.js";import{a as r,L as d,u as f,r as b,b as x}from"./index.39ed000d.js";import{D as j,C as g}from"./index.20099192.js";import{S as p}from"./index.ba2972c4.js";const v=t=>r(`/comment/album?id=${t}`),L=async t=>r(`/album?id=${t}`),y="_album_ctrgz_1";var D={album:y};function w({pageState:t}){if(!t)return a(d,{});const{detail:s,songList:n,comment:e}=t;return c("div",{className:D.album,children:[a(j,{data:{detail:s,songList:n}}),a(p,{songList:n}),a(g,{data:e})]})}function $(){const t=f("id");if(!t)return a("div",{children:"id\u9519\u8BEF"});const[s,n]=i.exports.useState(null);return i.exports.useEffect(()=>{const e=async()=>{const o=await L(t),l=b(o),m=x(o.songs,"detail"),u=await v(t);n({detail:l,songList:m,comment:u})};n(null),e()},[t]),i.exports.useEffect(()=>{var o;const e=(o=s==null?void 0:s.detail)==null?void 0:o.title;e&&(document.title=e)},[s]),a(w,{pageState:s})}export{$ as default};
