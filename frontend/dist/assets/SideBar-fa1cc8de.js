import{d as _,c as y,o as b,a as c,b as a,w as n,n as f,u as t,e as g,f as r,r as m,g as w,t as k,h as x,R as B,i as l,F as C,p as R,j as S,k as h,m as I,l as v,q as D}from"./index-3298ba1d.js";import{i as $,a as z,b as F,c as N,d as V,e as j,f as A,g as M,h as T,j as q,k as E}from"./index-d31b89ec.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const L="/assets/logo-7a5e8562.png";function P(){$(),z(),F(),N(),V(),j(),A(),M(),T(),q(),E()}const W=["src"],G={key:2,class:"flex flex-1 ml-3 whitespace-nowrap"},d=_({__name:"BarItem",props:{to:null,name:null,icon:null,activeIcon:null,active:{type:Boolean}},setup(e){const s=e,u=g(),o=y(()=>s.active??u.currentRoute.value.path==s.to);return b(()=>{P()}),(i,p)=>(r(),c("li",null,[a(t(B),{to:e.to,class:f(["flex items-center p-4 mr-4",t(o)?"bg-primary text-white rounded-lg":" text-appBlack"])},{default:n(()=>[e.icon?(r(),c("img",{key:0,src:t(o)&&e.activeIcon?e.activeIcon:e.icon,alt:"dashboard",class:"sidebar-icon"},null,8,W)):m(i.$slots,"right",{key:1}),t(w)?x("",!0):(r(),c("span",G,k(e.name),1)),m(i.$slots,"left")]),_:3},8,["to","class"])]))}}),J=e=>(R("data-v-57725940"),e=e(),S(),e),K={class:"h-full pl-4 py-4 overflow-y-auto"},O=J(()=>l("div",{class:"flex mb-12 mt-12"},[l("img",{class:"h-7",src:L,alt:""})],-1)),Q={class:"space-y-2 font-medium text-primary"},U=_({__name:"SideBar",setup(e){const s=g();return(u,o)=>{const i=D("app-icon");return r(),c(C,null,[!t(h)&&t(I)?(r(),c("div",{key:0,onClick:o[0]||(o[0]=(...p)=>t(v)&&t(v)(...p)),class:"z-20 fixed top-0 left-0 bg-gray-500 opacity-30 w-screen h-screen"})):x("",!0),l("aside",{class:f(["z-40 pl-3 h-screen fixed top-0 left-0 opacity-100 bg-appWhite",t(h)?"hidden":""]),"aria-label":"Sidebar"},[l("div",K,[O,l("ul",Q,[a(d,{to:"/dashboard",name:"Dashboard",active:t(s).currentRoute.value.path.includes("dashboard")},{right:n(()=>[a(i,{icon:"iconamoon:category-fill",width:"23px"})]),_:1},8,["active"]),a(d,{to:"/drivers",name:"Drivers",active:t(s).currentRoute.value.path.includes("driver")},{right:n(()=>[a(i,{icon:"healthicons:truck-driver",width:"23px"})]),_:1},8,["active"]),a(d,{to:"/customers",name:"Customers",active:t(s).currentRoute.value.path.includes("customer")},{right:n(()=>[a(i,{icon:"clarity:users-line",width:"23px"})]),_:1},8,["active"]),a(d,{to:"/rides",name:"Rides",active:t(s).currentRoute.value.path.includes("ride")},{right:n(()=>[a(i,{icon:"bx:trip",width:"23px"})]),_:1},8,["active"])])])],2)],64)}}});const ee=H(U,[["__scopeId","data-v-57725940"]]);export{ee as default};
