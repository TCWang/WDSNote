import{_ as b}from"./DykZMrhX.js";import{_ as v,u as w,g as C,h as k,c as r,a,F as D,r as $,i as A,o as i,b as I,w as S,p as q,e as B,n as F,t as y}from"./B44xM3Tz.js";import{u as N,q as L}from"./ZZUxttD3.js";import"./COj3gMSh.js";const h=s=>(q("data-v-bc79d618"),s=s(),B(),s),V={class:"w-full max-w-6xl not-prose"},z=h(()=>a("h2",null,"開發基礎",-1)),E=h(()=>a("div",{class:"column space-x-24 ml-6"},[a("div",null,"類別"),a("div",null,"標題")],-1)),H={class:"pl-6"},M={__name:"index",async setup(s){let o,u;w({title:"開發基礎",meta:[{name:"description",content:"開發基礎 - 學習筆記 "}]});const{data:d}=([o,u]=C(()=>N("basic-list",()=>L("/basic").where({_path:{$ne:"/basic"}}).only(["_path","title","publishedAt","category","sequence","link","image"]).sort({publishedAt:-1}).sort({category:1}).find())),o=await o,u(),o),m=k(()=>{if(!d.value)return[];const n=[];let c=null;for(const e of d.value){const t=new Date(e.publishedAt),g=t.getFullYear(),p=t.getMonth()+1,_=t.getDate(),f=`${g}-${p<10?"0":""}${p}-${_<10?"0":""}${_}`,l=e.category,x=l!==c;e.displayCategory=x,e.categorykeep=l,e.fullDate=f,n.push(e),c=l}return n});return(n,c)=>{const e=b;return i(),r("section",V,[z,E,a("ul",null,[(i(!0),r(D,null,$(A(m),t=>(i(),r("li",{style:{"list-style":"none"},key:t._path},[I(e,{to:t._path,class:"column hover:bg-gray-100 dark:hover:bg-gray-800"},{default:S(()=>[a("div",{class:F({"text-white ":!t.displayCategory,"text-gray-900":t.displayCategory})},y(t.category),3),a("div",H,y(t.title),1)]),_:2},1032,["to"])]))),128))])])}}},K=v(M,[["__scopeId","data-v-bc79d618"]]);export{K as default};
