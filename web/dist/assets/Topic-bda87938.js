import{_ as T}from"./main-nav.vue_vue_type_style_index_0_lang-d6d2ed7f.js";import{q as w,_ as x}from"./index-ce5b62d8.js";import{d as q,r as s,j as B,c as i,L as t,Y as o,o as _,F as C,$ as F,_ as M,K as N,e as V,M as l,a as L}from"./@vue-f70ab1bd.js";import{F as $,f as j,g as D,a as E,k as I,o as K,M as S}from"./naive-ui-ddb574dd.js";import"./vuex-cc1858c6.js";import"./vue-router-29025daf.js";import"./vooks-dfdd6eef.js";import"./evtd-b614532e.js";import"./@vicons-fc06a0bb.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./@css-render-66126308.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const U={class:"tag-hot"},Y=q({__name:"Topic",setup(z){const p=s([]),c=s("hot"),a=s(!1),r=()=>{a.value=!0,w({type:c.value,num:50}).then(n=>{p.value=n.topics,a.value=!1}).catch(n=>{a.value=!1})},u=n=>{c.value=n,r()};return B(()=>{r()}),(n,A)=>{const d=T,m=j,g=D,f=M("router-link"),v=K,h=S,y=E,b=I,k=$;return _(),i("div",null,[t(d,{title:"话题"}),t(k,{class:"main-content-wrap tags-wrap",bordered:""},{default:o(()=>[t(g,{type:"line",animated:"","onUpdate:value":u},{default:o(()=>[t(m,{name:"hot",tab:"热门"}),t(m,{name:"new",tab:"最新"})]),_:1}),t(b,{show:a.value},{default:o(()=>[t(y,null,{default:o(()=>[(_(!0),i(C,null,F(p.value,e=>(_(),N(h,{class:"tag-item",type:"success",round:"",key:e.id},{avatar:o(()=>[t(v,{src:e.user.avatar},null,8,["src"])]),default:o(()=>[t(f,{class:"hash-link",to:{name:"home",query:{q:e.tag,t:"tag"}}},{default:o(()=>[V(" #"+l(e.tag),1)]),_:2},1032,["to"]),L("span",U,"("+l(e.quote_num)+")",1)]),_:2},1024))),128))]),_:1})]),_:1},8,["show"])]),_:1})])}}});const lt=x(Y,[["__scopeId","data-v-c1908b4e"]]);export{lt as default};
