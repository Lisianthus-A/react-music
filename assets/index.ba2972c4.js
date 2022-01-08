import{b as l,j as e,r as c,f as A,L as F,l as M,i as H,H as R,k as z,D as Q,M as q,p as G}from"./vendor.fb93b9f7.js";import{l as N,S as J,F as K,u as U,L as V,f as W,m as X,g as Y,s as Z,b as I}from"./index.39ed000d.js";const ee="_songlist_1x4kn_1";var B={songlist:ee};const te="_pagination_vr65g_1";var ne={pagination:te};function se({currentPage:a,total:i,pageSize:f,onChange:r}){const h=Math.ceil(i/f);if(h<=1)return null;const p=d=>{if(d==="prev"&&a>1){const u=document.getElementsByClassName(N.right)[0];u.scrollTop=0,r(a-1)}else if(d==="next"&&a<h){const u=document.getElementsByClassName(N.right)[0];u.scrollTop=0,r(a+1)}};return l("div",{className:ne.pagination,children:[e("div",{className:"page-btn",onClick:()=>p("prev"),children:"<"}),e("div",{className:"page",children:a}),e("div",{className:"page-btn",onClick:()=>p("next"),children:">"})]})}function le({songList:a,songIds:i,isCreator:f}){const r=c.exports.useContext(J),{playSong:h,collectSong:p,setPlaylist:d}=c.exports.useContext(K),u=U("id"),{playingItem:D,playlist:g}=r,[m,x]=c.exports.useState(a||[]),[C,L]=c.exports.useState(1),w=t=>{if(g.find(s=>s.id===t.id))return;const n=g.slice();n.push(t),d(n)},T=t=>{const{id:n,name:s}=t;X().download(n,s)},E=t=>{if(h(t),g.find(s=>s.id===t.id))return;const n=g.slice();n.push(t),d(n)},O=t=>{p(t)},_=t=>{q.confirm({title:"\u5220\u9664\u6B4C\u66F2",content:`\u662F\u5426\u8981\u5220\u9664\u6B4C\u66F2 ${t.name} \uFF1F`,okText:"\u662F",cancelText:"\u5426",async onOk(){await Y("del",u,t.id),G.success("\u5DF2\u5220\u9664");const n=m.slice(),s=m.findIndex(o=>o.id===t.id);n.splice(s,1),x(n)}})};return c.exports.useEffect(()=>{i&&(async()=>{x([]);const n=(C-1)*50,s=i.slice(n,n+50),o=await Z(s);x(I(o.songs,"detail"))})()},[i,C]),m.length===0?e(V,{}):l("div",{className:B.songlist,children:[l("div",{className:"title",children:["\u6B4C\u66F2\u5217\u8868",l("span",{children:[(a||i).length,"\u9996\u6B4C"]})]}),l("table",{children:[e("thead",{children:l("tr",{children:[e("th",{scope:"col"}),e("th",{scope:"col",children:"\u6B4C\u66F2\u6807\u9898"}),e("th",{scope:"col",children:"\u65F6\u957F"}),e("th",{scope:"col",children:"\u6B4C\u624B"}),e("th",{scope:"col",children:"\u4E13\u8F91"})]})}),e("tbody",{children:m.map((t,n)=>{const{id:s,name:o,singers:y,duration:$,isFree:v,albumId:j,albumName:S}=t;return l("tr",{className:v?void 0:"fee",children:[l("td",{children:[e("span",{children:(C-1)*50+n+1}),e(A,{className:D.id===s?"play-btn-playing":"play-btn",onClick:()=>E(t)})]}),l("td",{children:[e(F,{to:`/Song?id=${s}`,title:o,children:o}),l("div",{className:"icons",children:[v&&l(M,{children:[e(H,{title:"\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868",onClick:()=>w(t)}),e(R,{title:"\u6536\u85CF\u5230\u6B4C\u5355",onClick:()=>O(s)}),e(z,{title:"\u4E0B\u8F7D",onClick:()=>T(t)})]}),f&&e(Q,{title:"\u5220\u9664",onClick:()=>_(t)})]})]}),e("td",{children:W($)}),e("td",{children:y.map(({id:P,name:b},k)=>l(c.exports.Fragment,{children:[e(F,{to:`/Singer?id=${P}`,title:b,className:B.singer,children:b}),k!==y.length-1&&e("span",{children:" / "})]},k))}),e("td",{children:e(F,{to:`/Album?id=${j}`,title:S,children:S})})]},s)})})]}),e(se,{currentPage:C,total:(i==null?void 0:i.length)||0,pageSize:50,onChange:L})]})}var ce=c.exports.memo(le);export{se as P,ce as S};
