"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89963],{89963:(e,t,n)=>{n.d(t,{l:()=>Ee});var r=n(96540),o=n.t(r,2),l=n(96992),u=n(95015),a=n(58084),i=n(4610),s=n(22903),c=n(74156),d=n(64335),f=n(98975),p=n(84e3);function m(e,t){let n=(0,r.useRef)([]),o=(0,u._)(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,l]of t.entries())if(n.current[r]!==l){let r=o(t,e);return n.current=t,r}}),[o,...t])}var v=n(39528);let g=[];!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}((()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&g[0]!==e.target&&(g.unshift(e.target),g=g.filter((e=>null!=e&&e.isConnected)),g.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}));var h=n(64122),E=n(85897),w=n(82924),b=n(66206);function y(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var T=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(T||{});let P=(0,b.FX)((function(e,t){let n=(0,r.useRef)(null),o=(0,f.P)(n,t),{initialFocus:T,containers:P,features:L=30,...M}=e;(0,d.g)()||(L=1);let S=(0,c.g)(n);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,r.useRef)(g.slice());return m((([e],[n])=>{!0===n&&!1===e&&(0,w._)((()=>{t.current.splice(0)})),!1===n&&!0===e&&(t.current=g.slice())}),[e,g,t]),(0,u._)((()=>{var e;return null!=(e=t.current.find((e=>null!=e&&e.isConnected)))?e:null}))}(t);m((()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,h.pW)(n())}),[t]),(0,s.X)((()=>{t&&(0,h.pW)(n())}))}({ownerDocument:S},Boolean(16&L));let C=function({ownerDocument:e,container:t,initialFocus:n},o){let l=(0,r.useRef)(null),u=(0,i.a)();return m((()=>{if(!o)return;let r=t.current;r&&(0,w._)((()=>{if(!u.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(l.current=t)}else if(r.contains(t))return void(l.current=t);null!=n&&n.current?(0,h.pW)(n.current):(0,h.CU)(r,h.BD.First)===h.Me.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=null==e?void 0:e.activeElement}))}),[o]),l}({ownerDocument:S,container:n,initialFocus:T},Boolean(2&L));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,i.a)();(0,a.M)(null==e?void 0:e.defaultView,"focus",(e=>{if(!o||!l.current)return;let u=y(n);t.current instanceof HTMLElement&&u.add(t.current);let a=r.current;if(!a)return;let i=e.target;i&&i instanceof HTMLElement?F(u,i)?(r.current=i,(0,h.pW)(i)):(e.preventDefault(),e.stopPropagation(),(0,h.pW)(a)):(0,h.pW)(r.current)}),!0)}({ownerDocument:S,container:n,containers:P,previousActiveElement:C},Boolean(8&L));let D=(0,p.u)(),O=(0,u._)((e=>{let t=n.current;t&&(0,E.Y)(D.current,{[p.O.Forwards]:()=>{(0,h.CU)(t,h.BD.First,{skipElements:[e.relatedTarget]})},[p.O.Backwards]:()=>{(0,h.CU)(t,h.BD.Last,{skipElements:[e.relatedTarget]})}})})),R=(0,l.L)(),k=(0,r.useRef)(!1),A={ref:o,onKeyDown(e){"Tab"==e.key&&(k.current=!0,R.requestAnimationFrame((()=>{k.current=!1})))},onBlur(e){let t=y(P);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(F(t,r)||(k.current?(0,h.CU)(n.current,(0,E.Y)(D.current,{[p.O.Forwards]:()=>h.BD.Next,[p.O.Backwards]:()=>h.BD.Previous})|h.BD.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,h.pW)(e.target)))}};return r.createElement(r.Fragment,null,Boolean(4&L)&&r.createElement(v.j,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:O,features:v.O.Focusable}),(0,b.XX)({ourProps:A,theirProps:M,defaultTag:"div",name:"FocusTrap"}),Boolean(4&L)&&r.createElement(v.j,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:O,features:v.O.Focusable}))})),L=Object.assign(P,{features:T});function F(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var M=n(78302);const S="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:C,useEffect:D,useLayoutEffect:O,useDebugValue:R}=o;function k(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!S(n,e)}catch{return!0}}const A=!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:o},l]=C({inst:{value:r,getSnapshot:t}});return O((()=>{o.value=r,o.getSnapshot=t,k(o)&&l({inst:o})}),[e,r,t]),D((()=>(k(o)&&l({inst:o}),e((()=>{k(o)&&l({inst:o})})))),[e]),R(r),r},N=A;var x=n(76339),X=n(82599);function _(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}var B=n(92157);function H(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let I=function(e,t){let n=e(),r=new Set;return{getSnapshot:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),dispatch(e,...o){let l=t[e].call(n,...o);l&&(n=l,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,X.e)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:H(n)},o=[(0,B.un)()?{before({doc:e,d:t,meta:n}){function r(e){return n.containers.flatMap((e=>e())).some((t=>t.contains(e)))}t.microTask((()=>{var n;if("auto"!==window.getComputedStyle(e.documentElement).scrollBehavior){let n=(0,X.e)();n.style(e.documentElement,"scrollBehavior","auto"),t.add((()=>t.microTask((()=>n.dispose()))))}let o=null!=(n=window.scrollY)?n:window.pageYOffset,l=null;t.addEventListener(e,"click",(t=>{if(t.target instanceof HTMLElement)try{let n=t.target.closest("a");if(!n)return;let{hash:o}=new URL(n.href),u=e.querySelector(o);u&&!r(u)&&(l=u)}catch{}}),!0),t.addEventListener(e,"touchstart",(e=>{if(e.target instanceof HTMLElement)if(r(e.target)){let n=e.target;for(;n.parentElement&&r(n.parentElement);)n=n.parentElement;t.style(n,"overscrollBehavior","contain")}else t.style(e.target,"touchAction","none")})),t.addEventListener(e,"touchmove",(e=>{if(e.target instanceof HTMLElement)if(r(e.target)){let t=e.target;for(;t.parentElement&&""!==t.dataset.headlessuiPortal&&!(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth);)t=t.parentElement;""===t.dataset.headlessuiPortal&&e.preventDefault()}else e.preventDefault()}),{passive:!1}),t.add((()=>{var e;let t=null!=(e=window.scrollY)?e:window.pageYOffset;o!==t&&window.scrollTo(0,o),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)}))}))}}:{},_(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];o.forEach((({before:e})=>null==e?void 0:e(r))),o.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function W(e,t,n){let r=function(e){return N(e.subscribe,e.getSnapshot,e.getSnapshot)}(I),o=e?r.get(e):void 0,l=!!o&&o.count>0;return(0,x.s)((()=>{if(e&&t)return I.dispatch("PUSH",e,n),()=>I.dispatch("POP",e,n)}),[t,e]),l}I.subscribe((()=>{let e=I.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&I.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&I.dispatch("TEARDOWN",n)}}));var U=n(90262);let Y=new Map,j=new Map;function $(e,t=!0){(0,x.s)((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=j.get(r))?n:0;return j.set(r,o+1),0!==o||(Y.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=j.get(r))?e:1;if(1===t?j.delete(r):j.set(r,t-1),1!==t)return;let n=Y.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,Y.delete(r))}}),[e,t])}var V=n(46276),q=n(24032),G=n(13149),K=n(96717);let Z=(0,r.createContext)((()=>{}));Z.displayName="StackContext";var z,J=((z=J||{})[z.Add=0]="Add",z[z.Remove=1]="Remove",z);function Q({children:e,onUpdate:t,type:n,element:o,enabled:l}){let a=(0,r.useContext)(Z),i=(0,u._)(((...e)=>{null==t||t(...e),a(...e)}));return(0,x.s)((()=>{let e=void 0===l||!0===l;return e&&i(0,n,o),()=>{e&&i(1,n,o)}}),[i,n,o,l]),r.createElement(Z.Provider,{value:i},e)}var ee=n(9685);let te=(0,r.createContext)(null);function ne(){let e=(0,r.useContext)(te);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,ne),e}return e}let re=(0,b.FX)((function(e,t){let n=(0,U.B)(),{id:r=`headlessui-description-${n}`,...o}=e,l=ne(),u=(0,f.P)(t);(0,x.s)((()=>l.register(r)),[r,l.register]);let a={ref:u,...l.props,id:r};return(0,b.XX)({ourProps:a,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})})),oe=Object.assign(re,{});var le=n(44586),ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ue||{}),ae=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(ae||{});let ie={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},se=(0,r.createContext)(null);function ce(e){let t=(0,r.useContext)(se);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ce),t}return t}function de(e,t){return(0,E.Y)(t.type,ie,e,t)}se.displayName="DialogContext";let fe=b.O5.RenderStrategy|b.O5.Static;let pe=(0,b.FX)((function(e,t){let n=(0,U.B)(),{id:o=`headlessui-dialog-${n}`,open:l,onClose:i,initialFocus:s,role:p="dialog",__demoMode:m=!1,...v}=e,[g,h]=(0,r.useState)(0),w=(0,r.useRef)(!1);p="dialog"===p||"alertdialog"===p?p:(w.current||(w.current=!0,console.warn(`Invalid role [${p}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog");let y=(0,G.O_)();void 0===l&&null!==y&&(l=(y&G.Uw.Open)===G.Uw.Open);let T=(0,r.useRef)(null),P=(0,f.P)(T,t),F=(0,c.g)(T),S=e.hasOwnProperty("open")||null!==y,C=e.hasOwnProperty("onClose");if(!S&&!C)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!C)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof l)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if("function"!=typeof i)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);let D=l?0:1,[O,R]=(0,r.useReducer)(de,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),k=(0,u._)((()=>i(!1))),A=(0,u._)((e=>R({type:0,id:e}))),N=!!(0,d.g)()&&(!m&&0===D),x=g>1,X=null!==(0,r.useContext)(se),[_,B]=(0,M.k)(),H={get current(){var e;return null!=(e=O.panelRef.current)?e:T.current}},{resolveContainers:I,mainTreeNodeRef:Y,MainTreeNode:j}=(0,q.i)({portals:_,defaultContainers:[H]}),Z=x?"parent":"leaf",z=null!==y&&(y&G.Uw.Closing)===G.Uw.Closing,ee=!X&&!z&&N,ne=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==F?void 0:F.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(Y.current)&&e instanceof HTMLElement))))?t:null}),[Y]);$(ne,ee);let re=!!x||N,oe=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==F?void 0:F.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(Y.current)&&e instanceof HTMLElement)))?t:null}),[Y]);$(oe,re);let ue=!(!N||x);(0,V.j)(I,k,ue);let ae=!(x||0!==D);(0,a.M)(null==F?void 0:F.defaultView,"keydown",(e=>{ae&&(e.defaultPrevented||e.key===le.D.Escape&&(e.preventDefault(),e.stopPropagation(),k()))})),function(e,t,n=(()=>[document.body])){W(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(F,!(z||0!==D||X),I),(0,r.useEffect)((()=>{if(0!==D||!T.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&k()}}));return e.observe(T.current),()=>e.disconnect()}),[D,T,k]);let[ie,ce]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,u._)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(te.Provider,{value:o},e.children)}),[t])]}(),pe=(0,r.useMemo)((()=>[{dialogState:D,close:k,setTitleId:A},O]),[D,O,k,A]),me=(0,r.useMemo)((()=>({open:0===D})),[D]),ve={ref:P,id:o,role:p,"aria-modal":0===D||void 0,"aria-labelledby":O.titleId,"aria-describedby":ie};return r.createElement(Q,{type:"Dialog",enabled:0===D,element:T,onUpdate:(0,u._)(((e,t)=>{"Dialog"===t&&(0,E.Y)(e,{[J.Add]:()=>h((e=>e+1)),[J.Remove]:()=>h((e=>e-1))})}))},r.createElement(K.a,{force:!0},r.createElement(M.Z,null,r.createElement(se.Provider,{value:pe},r.createElement(M.Z.Group,{target:T},r.createElement(K.a,{force:!1},r.createElement(ce,{slot:me,name:"Dialog.Description"},r.createElement(L,{initialFocus:s,containers:I,features:N?(0,E.Y)(Z,{parent:L.features.RestoreFocus,leaf:L.features.All&~L.features.FocusLock}):L.features.None},r.createElement(B,null,(0,b.XX)({ourProps:ve,theirProps:v,slot:me,defaultTag:"div",features:fe,visible:0===D,name:"Dialog"}))))))))),r.createElement(j,null))})),me=(0,b.FX)((function(e,t){let n=(0,U.B)(),{id:o=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:u},a]=ce("Dialog.Backdrop"),i=(0,f.P)(t);(0,r.useEffect)((()=>{if(null===a.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[a.panelRef]);let s=(0,r.useMemo)((()=>({open:0===u})),[u]);return r.createElement(K.a,{force:!0},r.createElement(M.Z,null,(0,b.XX)({ourProps:{ref:i,id:o,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:"div",name:"Dialog.Backdrop"})))})),ve=(0,b.FX)((function(e,t){let n=(0,U.B)(),{id:o=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},i]=ce("Dialog.Panel"),s=(0,f.P)(t,i.panelRef),c=(0,r.useMemo)((()=>({open:0===a})),[a]),d=(0,u._)((e=>{e.stopPropagation()}));return(0,b.XX)({ourProps:{ref:s,id:o,onClick:d},theirProps:l,slot:c,defaultTag:"div",name:"Dialog.Panel"})})),ge=(0,b.FX)((function(e,t){let n=(0,U.B)(),{id:o=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:i}]=ce("Dialog.Overlay"),s=(0,f.P)(t),c=(0,u._)((e=>{if(e.target===e.currentTarget){if((0,ee.l)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}})),d=(0,r.useMemo)((()=>({open:0===a})),[a]);return(0,b.XX)({ourProps:{ref:s,id:o,"aria-hidden":!0,onClick:c},theirProps:l,slot:d,defaultTag:"div",name:"Dialog.Overlay"})})),he=(0,b.FX)((function(e,t){let n=(0,U.B)(),{id:o=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:u,setTitleId:a}]=ce("Dialog.Title"),i=(0,f.P)(t);(0,r.useEffect)((()=>(a(o),()=>a(null))),[o,a]);let s=(0,r.useMemo)((()=>({open:0===u})),[u]);return(0,b.XX)({ourProps:{ref:i,id:o},theirProps:l,slot:s,defaultTag:"h2",name:"Dialog.Title"})})),Ee=Object.assign(pe,{Backdrop:me,Panel:ve,Overlay:ge,Title:he,Description:oe})},78302:(e,t,n)=>{n.d(t,{Z:()=>y,k:()=>E});var r=n(96540),o=n(40961),l=n(95015),u=n(76339),a=n(22903),i=n(74156),s=n(64335),c=n(98975),d=n(96717),f=n(99851),p=n(66206);let m=r.Fragment;let v=r.Fragment,g=(0,r.createContext)(null);let h=(0,r.createContext)(null);function E(){let e=(0,r.useContext)(h),t=(0,r.useRef)([]),n=(0,l._)((n=>(t.current.push(n),e&&e.register(n),()=>o(n)))),o=(0,l._)((n=>{let r=t.current.indexOf(n);-1!==r&&t.current.splice(r,1),e&&e.unregister(n)})),u=(0,r.useMemo)((()=>({register:n,unregister:o,portals:t})),[n,o,t]);return[t,(0,r.useMemo)((()=>function({children:e}){return r.createElement(h.Provider,{value:u},e)}),[u])]}let w=(0,p.FX)((function(e,t){let n=e,l=(0,r.useRef)(null),v=(0,c.P)((0,c.a)((e=>{l.current=e})),t),E=(0,i.g)(l),w=function(e){let t=(0,d.S)(),n=(0,r.useContext)(g),o=(0,i.g)(e),[l,u]=(0,r.useState)((()=>{if(!t&&null!==n||f._.isServer)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==l&&(null!=o&&o.body.contains(l)||null==o||o.body.appendChild(l))}),[l,o]),(0,r.useEffect)((()=>{t||null!==n&&u(n.current)}),[n,u,t]),l}(l),[b]=(0,r.useState)((()=>{var e;return f._.isServer?null:null!=(e=null==E?void 0:E.createElement("div"))?e:null})),y=(0,r.useContext)(h),T=(0,s.g)();return(0,u.s)((()=>{!w||!b||w.contains(b)||(b.setAttribute("data-headlessui-portal",""),w.appendChild(b))}),[w,b]),(0,u.s)((()=>{if(b&&y)return y.register(b)}),[y,b]),(0,a.X)((()=>{var e;!w||!b||(b instanceof Node&&w.contains(b)&&w.removeChild(b),w.childNodes.length<=0&&(null==(e=w.parentElement)||e.removeChild(w)))})),T&&w&&b?(0,o.createPortal)((0,p.XX)({ourProps:{ref:v},theirProps:n,defaultTag:m,name:"Portal"}),b):null})),b=(0,p.FX)((function(e,t){let{target:n,...o}=e,l={ref:(0,c.P)(t)};return r.createElement(g.Provider,{value:n},(0,p.XX)({ourProps:l,theirProps:o,defaultTag:v,name:"Popover.Group"}))})),y=Object.assign(w,{Group:b})},58084:(e,t,n)=>{n.d(t,{M:()=>l});var r=n(96540),o=n(34424);function l(e,t,n,l){let u=(0,o.Y)(n);(0,r.useEffect)((()=>{function n(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}),[e,t,l])}},22903:(e,t,n)=>{n.d(t,{X:()=>u});var r=n(96540),o=n(82924),l=n(95015);function u(e){let t=(0,l._)(e),n=(0,r.useRef)(!1);(0,r.useEffect)((()=>(n.current=!1,()=>{n.current=!0,(0,o._)((()=>{n.current&&t()}))})),[t])}},46276:(e,t,n)=>{n.d(t,{j:()=>s});var r=n(96540),o=n(64122),l=n(92157),u=n(34424);function a(e,t,n){let o=(0,u.Y)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var i=n(15074);function s(e,t,n=!0){let u=(0,r.useRef)(!1);function s(n,r){if(!u.current||n.defaultPrevented)return;let l=r(n);if(null===l||!l.getRootNode().contains(l)||!l.isConnected)return;let a=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of a){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l)||n.composed&&n.composedPath().includes(t))return}return!(0,o.Bm)(l,o.MZ.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{u.current=n}))}),[n]);let c=(0,r.useRef)(null);a("pointerdown",(e=>{var t,n;u.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),a("mousedown",(e=>{var t,n;u.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),a("click",(e=>{(0,l.Fr)()||c.current&&(s(e,(()=>c.current)),c.current=null)}),!0),a("touchend",(e=>s(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,i.M)("blur",(e=>s(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},74156:(e,t,n)=>{n.d(t,{g:()=>l});var r=n(96540),o=n(2211);function l(...e){return(0,r.useMemo)((()=>(0,o.T)(...e)),[...e])}},24032:(e,t,n)=>{n.d(t,{i:()=>a,x:()=>i});var r=n(96540),o=n(39528),l=n(95015),u=n(74156);function a({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var a;let i=(0,r.useRef)(null!=(a=null==n?void 0:n.current)?a:null),s=(0,u.g)(i),c=(0,l._)((()=>{var n,r,o;let l=[];for(let t of e)null!==t&&(t instanceof HTMLElement?l.push(t):"current"in t&&t.current instanceof HTMLElement&&l.push(t.current));if(null!=t&&t.current)for(let e of t.current)l.push(e);for(let e of null!=(n=null==s?void 0:s.querySelectorAll("html > *, body > *"))?n:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(i.current)||e.contains(null==(o=null==(r=i.current)?void 0:r.getRootNode())?void 0:o.host)||l.some((t=>e.contains(t)))||l.push(e));return l}));return{resolveContainers:c,contains:(0,l._)((e=>c().some((t=>t.contains(e))))),mainTreeNodeRef:i,MainTreeNode:(0,r.useMemo)((()=>function(){return null!=n?null:r.createElement(o.j,{features:o.O.Hidden,ref:i})}),[i,n])}}function i(){let e=(0,r.useRef)(null);return{mainTreeNodeRef:e,MainTreeNode:(0,r.useMemo)((()=>function(){return r.createElement(o.j,{features:o.O.Hidden,ref:e})}),[e])}}},84e3:(e,t,n)=>{n.d(t,{O:()=>u,u:()=>a});var r,o=n(96540),l=n(15074),u=((r=u||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function a(){let e=(0,o.useRef)(0);return(0,l.M)("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}},15074:(e,t,n)=>{n.d(t,{M:()=>l});var r=n(96540),o=n(34424);function l(e,t,n){let l=(0,o.Y)(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}},39528:(e,t,n)=>{n.d(t,{O:()=>l,j:()=>u});var r=n(66206);var o,l=((o=l||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let u=(0,r.FX)((function(e,t){var n;let{features:o=1,...l}=e,u={ref:t,"aria-hidden":!(2&~o)||(null!=(n=l["aria-hidden"])?n:void 0),style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~o)&&!!(2&~o)&&{display:"none"}}};return(0,r.XX)({ourProps:u,theirProps:l,slot:{},defaultTag:"div",name:"Hidden"})}))},96717:(e,t,n)=>{n.d(t,{S:()=>l,a:()=>u});var r=n(96540);let o=(0,r.createContext)(!1);function l(){return(0,r.useContext)(o)}function u(e){return r.createElement(o.Provider,{value:e.force},e.children)}},64122:(e,t,n)=>{n.d(t,{BD:()=>c,Bm:()=>v,CU:()=>T,Fh:()=>g,MZ:()=>m,Me:()=>d,iq:()=>p,p9:()=>y,pW:()=>E,wl:()=>b});var r=n(82599),o=n(85897),l=n(2211);let u=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var a,i,s,c=((s=c||{})[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s),d=((i=d||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),f=((a=f||{})[a.Previous=-1]="Previous",a[a.Next=1]="Next",a);function p(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(u)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var m=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(m||{});function v(e,t=0){var n;return e!==(null==(n=(0,l.T)(e))?void 0:n.body)&&(0,o.Y)(t,{0:()=>e.matches(u),1(){let t=e;for(;null!==t;){if(t.matches(u))return!0;t=t.parentElement}return!1}})}function g(e){let t=(0,l.T)(e);(0,r.e)().nextFrame((()=>{t&&!v(t.activeElement,0)&&E(e)}))}var h=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(h||{});function E(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let w=["textarea","input"].join(",");function b(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function y(e,t){return T(p(),t,{relativeTo:e})}function T(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?b(e):e:p(e);o.length>0&&u.length>1&&(u=u.filter((e=>!o.includes(e)))),r=null!=r?r:l.activeElement;let a,i=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,u.indexOf(r))-1;if(4&t)return Math.max(0,u.indexOf(r))+1;if(8&t)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,f=u.length;do{if(d>=f||d+f<=0)return 0;let e=s+d;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}a=u[e],null==a||a.focus(c),d+=i}while(a!==l.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,w))&&n}(a)&&a.select(),2}},92157:(e,t,n)=>{function r(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function o(){return r()||/Android/gi.test(window.navigator.userAgent)}n.d(t,{Fr:()=>o,un:()=>r})}}]);