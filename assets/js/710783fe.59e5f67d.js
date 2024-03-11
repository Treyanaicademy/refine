"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},l=void 0,p={unversionedId:"realtime/hooks/use-subscription/index",id:"realtime/hooks/use-subscription/index",title:"useSubscription",description:"useSubscription calls the subscribe method from liveProvider when mounted. It is useful when you want to subscribe to a Realtime channel.",source:"@site/docs/realtime/hooks/use-subscription/index.md",sourceDirName:"realtime/hooks/use-subscription",slug:"/realtime/hooks/use-subscription/",permalink:"/docs/realtime/hooks/use-subscription/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/realtime/hooks/use-subscription/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1710167091,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},sidebar:"mainSidebar",previous:{title:"usePublish",permalink:"/docs/realtime/hooks/use-publish/"},next:{title:"Ably",permalink:"/docs/examples/live-provider/ably"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:3},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"onLiveEvent <PropTag required/>",id:"onliveevent-",level:3},{value:"types",id:"types",level:3},{value:"enabled",id:"enabled",level:3},{value:"params",id:"params",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),b=d("PropTag"),v=d("PropsTable"),f={toc:u};function h(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useSubscription")," calls the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},(0,n.kt)("inlineCode",{parentName:"a"},"subscribe"))," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider"))," when mounted. It is useful when you want to subscribe to a Realtime channel."),(0,n.kt)("p",null,"Refine uses this hook internally in data hooks to ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," Realtime data. You can refer liveProvider's ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#integrated-hooks"},"Integrated Hooks")," section for more information."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSubscription } from "@refinedev/core";\n\nuseSubscription({\n    channel: "channel-name",\n    types: ["event-name", "another-event-name"]\n    onLiveEvent: (event) => {},\n    dataProviderName: "default",\n});\n\n'))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useSubscription")," will be passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},"subscribe")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"liveProvider")," as a parameter. You can use the following properties of this method while subscribing to a channel.")),(0,n.kt)("h3",{id:"channel-"},"channel ",(0,n.kt)(b,{required:!0,mdxType:"PropTag"})),(0,n.kt)(m,{id:"channel-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Channel name to subscribe to.")),(0,n.kt)("h3",{id:"onliveevent-"},"onLiveEvent ",(0,n.kt)(b,{required:!0,mdxType:"PropTag"})),(0,n.kt)(m,{id:"onliveevent-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Callback that is run when new events from the subscription arrive.")),(0,n.kt)("h3",{id:"types"},"types"),(0,n.kt)(m,{id:"types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"Type of events to subscribe. ",(0,n.kt)("inlineCode",{parentName:"p"},'"\\*"')," means all events. By default, it subscribes to all events.")),(0,n.kt)("h3",{id:"enabled"},"enabled"),(0,n.kt)(m,{id:"enabled",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"You can disable the subscription by setting this prop to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," and vice versa. By default, it is enabled.")),(0,n.kt)("h3",{id:"params"},"params"),(0,n.kt)(m,{id:"params",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"You can pass any additional parameters to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},(0,n.kt)("inlineCode",{parentName:"a"},"subscribe"))," method."),(0,n.kt)("p",null,"Hooks that use ",(0,n.kt)("inlineCode",{parentName:"p"},"useSubscription")," internally send the query's parameters' (pagination, meta, sort, filters, etc.) information along with this prop."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information on which hooks use ",(0,n.kt)("inlineCode",{parentName:"p"},"useSubscription")," internally, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/realtime/live-provider#integrated-hooks"},'LiveProvider\'s "Integrated Hooks" section',"\u2192")))),(0,n.kt)("h3",{id:"dataprovidername"},"dataProviderName"),(0,n.kt)(m,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("p",null,"You can pass the name of the data provider to use for the subscription. By default, it uses the ",(0,n.kt)("inlineCode",{parentName:"p"},'"default"')," data provider.")),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)(v,{module:"@refinedev/core/useSubscription",mdxType:"PropsTable"})))}h.isMDXComponent=!0}}]);