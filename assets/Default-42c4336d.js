import{p as A,i as J,c as u,r as W,a as D,g as se,s as w,o as ue,b as re,d as P,f as we,e as ke,h as Ce,j as Pe,k as ie,l as ce,m as j,n as F,w as R,q as ve,t as Ae,u as le,v as Le,x as M,y as s,z as de,A as G,B as me,C as fe,D as $e,E as Re,F as O,G as Me,H as ze,I as ge,J as Ee,K as He,L as Ne}from"./index-e881fdae.js";import{i as De,b as Oe}from"./nxCloud-d60f7109.js";import{u as Ue,V as ye,m as K,a as Q,b as z,c as je,d as Fe,e as Ke,f as qe,g as Ze,h as Xe,i as Ye,j as Ge,k as Y,l as Je,n as he,o as We,p as Qe}from"./ssrBoot-1f44533d.js";const U=Symbol.for("vuetify:layout"),pe=Symbol.for("vuetify:layout-item"),oe=1e3,et=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),tt=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function at(){const e=J(U);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function lt(e){const o=J(U);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${ke()}`,n=se("useLayoutItem");re(pe,{id:t});const a=w(!1);Ce(()=>a.value=!0),Pe(()=>a.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:r}=o.register(n,{...e,active:u(()=>a.value?!1:e.active.value),id:t});return ie(()=>o.unregister(t)),{layoutItemStyles:l,layoutRect:o.layoutRect,layoutItemScrimStyles:r}}const ot=(e,o,t,n)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const r of e){const d=o.get(r),y=t.get(r),p=n.get(r);if(!d||!y||!p)continue;const m={...a,[d.value]:parseInt(a[d.value],10)+(p.value?parseInt(y.value,10):0)};l.push({id:r,layer:m}),a=m}return l};function nt(e){const o=J(U,null),t=u(()=>o?o.rootZIndex.value-100:oe),n=W([]),a=D(new Map),l=D(new Map),r=D(new Map),d=D(new Map),y=D(new Map),{resizeRef:p,contentRect:m}=Ue(),T=u(()=>{const v=new Map,_=e.overlaps??[];for(const i of _.filter(b=>b.includes(":"))){const[b,g]=i.split(":");if(!n.value.includes(b)||!n.value.includes(g))continue;const B=a.get(b),$=a.get(g),E=l.get(b),H=l.get(g);!B||!$||!E||!H||(v.set(g,{position:B.value,amount:parseInt(E.value,10)}),v.set(b,{position:$.value,amount:-parseInt(H.value,10)}))}return v}),h=u(()=>{const v=[...new Set([...r.values()].map(i=>i.value))].sort((i,b)=>i-b),_=[];for(const i of v){const b=n.value.filter(g=>{var B;return((B=r.get(g))==null?void 0:B.value)===i});_.push(...b)}return ot(_,a,l,d)}),f=u(()=>!Array.from(y.values()).some(v=>v.value)),S=u(()=>h.value[h.value.length-1].layer),k=u(()=>({"--v-layout-left":P(S.value.left),"--v-layout-right":P(S.value.right),"--v-layout-top":P(S.value.top),"--v-layout-bottom":P(S.value.bottom),...f.value?void 0:{transition:"none"}})),V=u(()=>h.value.slice(1).map((v,_)=>{let{id:i}=v;const{layer:b}=h.value[_],g=l.get(i),B=a.get(i);return{id:i,...b,size:Number(g.value),position:B.value}})),c=v=>V.value.find(_=>_.id===v),x=se("createLayout"),C=w(!1);ue(()=>{C.value=!0}),re(U,{register:(v,_)=>{let{id:i,order:b,position:g,layoutSize:B,elementSize:$,active:E,disableTransitions:H,absolute:Ve}=_;r.set(i,b),a.set(i,g),l.set(i,B),d.set(i,E),H&&y.set(i,H);const ee=we(pe,x==null?void 0:x.vnode).indexOf(v);ee>-1?n.value.splice(ee,0,i):n.value.push(i);const te=u(()=>V.value.findIndex(N=>N.id===i)),q=u(()=>t.value+h.value.length*2-te.value*2),Ie=u(()=>{const N=g.value==="left"||g.value==="right",Z=g.value==="right",Be=g.value==="bottom",ae={[g.value]:0,zIndex:q.value,transform:`translate${N?"X":"Y"}(${(E.value?0:-110)*(Z||Be?-1:1)}%)`,position:Ve.value||t.value!==oe?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!C.value)return ae;const I=V.value[te.value];if(!I)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const X=T.value.get(i);return X&&(I[X.position]+=X.amount),{...ae,height:N?`calc(100% - ${I.top}px - ${I.bottom}px)`:$.value?`${$.value}px`:void 0,left:Z?void 0:`${I.left}px`,right:Z?`${I.right}px`:void 0,top:g.value!=="bottom"?`${I.top}px`:void 0,bottom:g.value!=="top"?`${I.bottom}px`:void 0,width:N?$.value?`${$.value}px`:void 0:`calc(100% - ${I.left}px - ${I.right}px)`}}),Te=u(()=>({zIndex:q.value-1}));return{layoutItemStyles:Ie,layoutItemScrimStyles:Te,zIndex:q}},unregister:v=>{r.delete(v),a.delete(v),l.delete(v),d.delete(v),y.delete(v),n.value=n.value.filter(_=>_!==v)},mainRect:S,mainStyles:k,getLayoutItem:c,items:V,layoutRect:m,rootZIndex:t});const L=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),xe=u(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:L,layoutStyles:xe,getLayoutItem:c,items:V,layoutRect:m,layoutRef:p}}const st={__name:"LoginButton",setup(e){return ce(()=>De()),(o,t)=>(j(),F(ye,{href:le(Oe)()},{default:R(()=>[ve(Ae(le(Le).email??"Login"),1)]),_:1},8,["href"]))}};const be=A({text:String,...K(),...Q()},"VToolbarTitle"),Se=M()({name:"VToolbarTitle",props:be(),setup(e,o){let{slots:t}=o;return z(()=>{const n=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[n&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),ut=[null,"prominent","default","comfortable","compact"],_e=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ut.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...je(),...K(),...Fe(),...Ke(),...Q({tag:"header"}),...de()},"VToolbar"),ne=M()({name:"VToolbar",props:_e(),setup(e,o){var f;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:a}=qe(G(e,"color")),{borderClasses:l}=Ze(e),{elevationClasses:r}=Xe(e),{roundedClasses:d}=Ye(e),{themeClasses:y}=me(e),{rtlClasses:p}=fe(),m=w(!!(e.extended||(f=t.extension)!=null&&f.call(t))),T=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=u(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return $e({VBtn:{variant:"text"}}),z(()=>{var c;const S=!!(e.title||t.title),k=!!(t.image||e.image),V=(c=t.extension)==null?void 0:c.call(t);return m.value=!!(e.extended||V),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,l.value,r.value,d.value,y.value,p.value,e.class],style:[a.value,e.style]},{default:()=>[k&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Ge,{key:"image-img",cover:!0,src:e.image},null)]),s(Y,{defaults:{VTabs:{height:P(T.value)}}},{default:()=>{var x,C,L;return[s("div",{class:"v-toolbar__content",style:{height:P(T.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),S&&s(Se,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(L=t.append)==null?void 0:L.call(t)])])]}}),s(Y,{defaults:{VTabs:{height:P(h.value)}}},{default:()=>[s(Je,null,{default:()=>[m.value&&s("div",{class:"v-toolbar__extension",style:{height:P(h.value)}},[V])]})]})]})}),{contentHeight:T,extensionHeight:h}}}),rt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function it(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let n=0;const a=W(null),l=w(0),r=w(0),d=w(0),y=w(!1),p=w(!1),m=u(()=>Number(e.scrollThreshold)),T=u(()=>Re((m.value-l.value)/m.value||0)),h=()=>{const f=a.value;!f||t&&!t.value||(n=l.value,l.value="window"in f?f.pageYOffset:f.scrollTop,p.value=l.value<n,d.value=Math.abs(l.value-m.value))};return O(p,()=>{r.value=r.value||l.value}),O(y,()=>{r.value=0}),ue(()=>{O(()=>e.scrollTarget,f=>{var k;const S=f?document.querySelector(f):window;S&&S!==a.value&&((k=a.value)==null||k.removeEventListener("scroll",h),a.value=S,a.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),ie(()=>{var f;(f=a.value)==null||f.removeEventListener("scroll",h)}),t&&O(t,h,{immediate:!0}),{scrollThreshold:m,currentScroll:l,currentThreshold:d,isScrollActive:y,scrollRatio:T,isScrollingUp:p,savedScroll:r}}const ct=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._e(),...tt(),...rt(),height:{type:[Number,String],default:64}},"VAppBar"),vt=M()({name:"VAppBar",props:ct(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=W(),a=Me(e,"modelValue"),l=u(()=>{var x;const c=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),r=u(()=>{const c=l.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!a.value}),{currentScroll:d,scrollThreshold:y,isScrollingUp:p,scrollRatio:m}=it(e,{canScroll:r}),T=u(()=>e.collapse||l.value.collapse&&(l.value.inverted?m.value>0:m.value===0)),h=u(()=>e.flat||l.value.elevate&&(l.value.inverted?d.value>0:d.value===0)),f=u(()=>l.value.fadeImage?l.value.inverted?1-m.value:m.value:void 0),S=u(()=>{var C,L;if(l.value.hide&&l.value.inverted)return 0;const c=((C=n.value)==null?void 0:C.contentHeight)??0,x=((L=n.value)==null?void 0:L.extensionHeight)??0;return c+x});ze(u(()=>!!e.scrollBehavior),()=>{Ee(()=>{l.value.hide?l.value.inverted?a.value=d.value>y.value:a.value=p.value||d.value<y.value:a.value=!0})});const{ssrBootStyles:k}=he(),{layoutItemStyles:V}=lt({id:e.name,order:u(()=>parseInt(e.order,10)),position:G(e,"location"),layoutSize:S,elementSize:w(void 0),active:a,absolute:G(e,"absolute")});return z(()=>{const[c]=ne.filterProps(e);return s(ne,ge({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":f.value,height:void 0,...k.value},e.style]},c,{collapse:T.value,flat:h.value}),t)}),{}}}),dt=M()({name:"VAppBarTitle",props:be(),setup(e,o){let{slots:t}=o;return z(()=>s(Se,ge(e,{class:"v-app-bar-title"}),t)),{}}}),mt=We("v-spacer","div","VSpacer"),ft={__name:"AppBar",setup(e){const o=He();ce(()=>{const n=localStorage.getItem("vue-theme")??"light";o.global.name.value=n});function t(){o.global.name.value=o.global.current.value.dark?"light":"dark",localStorage.setItem("vue-theme",o.global.name.value)}return(n,a)=>(j(),F(vt,{flat:""},{default:R(()=>[s(dt,null,{default:R(()=>[ve(" VMS Health Dashboard ")]),_:1}),s(mt),s(ye,{class:"ma-2",color:"primary",onClick:t},{default:R(()=>[s(Qe,{icon:"mdi-theme-light-dark"})]),_:1}),s(st)]),_:1}))}};const gt=A({scrollable:Boolean,...K(),...Q({tag:"main"})},"VMain"),yt=M()({name:"VMain",props:gt(),setup(e,o){let{slots:t}=o;const{mainStyles:n}=at(),{ssrBootStyles:a}=he();return z(()=>s(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,a.value,e.style]},{default:()=>{var l,r;return[e.scrollable?s("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}}),ht={__name:"View",setup(e){return(o,t)=>{const n=Ne("router-view");return j(),F(yt,null,{default:R(()=>[s(n)]),_:1})}}};const pt=A({...K(),...et({fullHeight:!0}),...de()},"VApp"),bt=M()({name:"VApp",props:pt(),setup(e,o){let{slots:t}=o;const n=me(e),{layoutClasses:a,getLayoutItem:l,items:r,layoutRef:d}=nt(e),{rtlClasses:y}=fe();return z(()=>{var p;return s("div",{ref:d,class:["v-application",n.themeClasses.value,a.value,y.value,e.class],style:[e.style]},[s("div",{class:"v-application__wrap"},[(p=t.default)==null?void 0:p.call(t)])])}),{getLayoutItem:l,items:r,theme:n}}}),It={__name:"Default",setup(e){return(o,t)=>(j(),F(bt,null,{default:R(()=>[s(ft),s(ht)]),_:1}))}};export{It as default};
