"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58627],{65354:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(96540),o=n(12075);function c({children:e,fallback:t}){return(0,o.A)()?r.createElement(r.Fragment,null,null==e?void 0:e()):null!=t?t:null}},89546:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(96540),o=n(54625),c=n(69428),i=n(90062),u=n(11410),a=n(78557);const l=r.createContext({collectLink:()=>{}});var s=n(92469);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){var{isNavLink:n,to:f,href:m,activeClassName:b,isActive:h,"data-noBrokenLinkCheck":y,autoAddBaseUrl:O=!0}=e,w=v(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:g,baseUrl:E}}=(0,i.A)(),{withBaseUrl:k}=(0,s.h)(),P=(0,r.useContext)(l),j=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>j.current));const A=f||m;const C=(0,u.A)(A),x=null==A?void 0:A.replace("pathname://","");let L=void 0!==x?(R=x,O&&(e=>e.startsWith("/"))(R)?k(R):R):void 0;var R;L&&C&&(L=(0,c.applyTrailingSlash)(L,{trailingSlash:g,baseUrl:E}));const S=(0,r.useRef)(!1),B=n?o.k2:o.N_,z=a.A.canUseIntersectionObserver,N=(0,r.useRef)(),I=()=>{S.current||null==L||(window.docusaurus.preload(L),S.current=!0)};var M;(0,r.useEffect)((()=>(!z&&C&&null!=L&&window.docusaurus.prefetch(L),()=>{z&&N.current&&N.current.disconnect()})),[N,L,z,C]);const U=null!==(M=null==L?void 0:L.startsWith("#"))&&void 0!==M&&M,D=!L||!C||U;return D||y||P.collectLink(L),D?r.createElement("a",d({ref:j,href:L},A&&!C&&{target:"_blank",rel:"noopener noreferrer"},w)):r.createElement(B,d(p(d({},w),{onMouseEnter:I,onTouchStart:I,innerRef:e=>{j.current=e,z&&e&&C&&(N.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(N.current.unobserve(e),N.current.disconnect(),null!=L&&window.docusaurus.prefetch(L))}))})),N.current.observe(e))},to:L}),n&&{isActive:h,activeClassName:b}))}const b=r.forwardRef(m)},10905:(e,t,n)=>{n.d(t,{N:()=>h});var r=n(31635),o=n(96540),c=n(15974),i=n(2717),u=n(25128);function a(){var e=(0,o.useRef)(!1);return(0,u.E)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var l=n(86719),s=n(28601),f=n(91897),d=function(e){var t=e.children,n=e.initial,c=e.isPresent,i=e.onExitComplete,u=e.custom,a=e.presenceAffectsLayout,d=(0,s.M)(p),v=(0,f.B)(),m=(0,o.useMemo)((function(){return{id:v,initial:n,isPresent:c,custom:u,onExitComplete:function(e){var t,n;d.set(e,!0);try{for(var o=(0,r.Ju)(d.values()),c=o.next();!c.done;c=o.next()){if(!c.value)return}}catch(u){t={error:u}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}null==i||i()},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),a?void 0:[c]);return(0,o.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[c]),o.useEffect((function(){!c&&!d.size&&(null==i||i())}),[c]),o.createElement(l.t.Provider,{value:m},t)};function p(){return new Map}var v=n(29473),m=n(57491),b=function(e){return e.key||""};var h=function(e){var t=e.children,n=e.custom,l=e.initial,s=void 0===l||l,f=e.onExitComplete,p=e.exitBeforeEnter,h=e.presenceAffectsLayout,y=void 0===h||h,O=(0,r.zs)(function(){var e=a(),t=(0,r.zs)((0,o.useState)(0),2),n=t[0],c=t[1],u=(0,o.useCallback)((function(){e.current&&c(n+1)}),[n]);return[(0,o.useCallback)((function(){return i.Ay.postRender(u)}),[u]),n]}(),1),w=O[0],g=(0,o.useContext)(v.L).forceRender;g&&(w=g);var E=a(),k=function(e){var t=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&t.push(e)})),t}(t),P=k,j=new Set,A=(0,o.useRef)(P),C=(0,o.useRef)(new Map).current,x=(0,o.useRef)(!0);if((0,u.E)((function(){x.current=!1,function(e,t){e.forEach((function(e){var n=b(e);t.set(n,e)}))}(k,C),A.current=P})),(0,m.l)((function(){x.current=!0,C.clear(),j.clear()})),x.current)return o.createElement(o.Fragment,null,P.map((function(e){return o.createElement(d,{key:b(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:y},e)})));P=(0,r.fX)([],(0,r.zs)(P),!1);for(var L=A.current.map(b),R=k.map(b),S=L.length,B=0;B<S;B++){var z=L[B];-1===R.indexOf(z)&&j.add(z)}return p&&j.size&&(P=[]),j.forEach((function(e){if(-1===R.indexOf(e)){var t=C.get(e);if(t){var r=L.indexOf(e);P.splice(r,0,o.createElement(d,{key:b(t),isPresent:!1,onExitComplete:function(){C.delete(e),j.delete(e);var t=A.current.findIndex((function(t){return t.key===e}));if(A.current.splice(t,1),!j.size){if(A.current=k,!1===E.current)return;w(),f&&f()}},custom:n,presenceAffectsLayout:y},t))}}})),P=P.map((function(e){var t=e.key;return j.has(t)?e:o.createElement(d,{key:b(e),isPresent:!0,presenceAffectsLayout:y},e)})),"production"!==c._&&p&&P.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),o.createElement(o.Fragment,null,j.size?P:P.map((function(e){return(0,o.cloneElement)(e)})))}}}]);