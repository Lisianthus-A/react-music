import{r as b,q as i,b as f,l as m,j as o}from"./vendor.fb93b9f7.js";const v="_tabs_1cb5f_1",_="_tab_1cb5f_1";var r={tabs:v,tab:_,"tab-active":"_tab-active_1cb5f_9"};function p({children:a,onChange:n}){const s=b.exports.useMemo(()=>{const t=[];return i.Children.forEach(a,e=>{i.isValidElement(e)&&t.push({key:e.key,text:e.props.text,element:e})}),t},[a]),[c,l]=b.exports.useState(s[0].key);return f(m,{children:[o("div",{className:r.tabs,children:s.map(({key:t,text:e})=>o("div",{className:c===t?r["tab-active"]:r.tab,onClick:()=>{l(t),n&&n(t)},children:e},t))}),s.filter(t=>t.key===c)[0].element]})}function u(a){return a.children}p.Pane=u;export{p as T};
