"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20214],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(37953);var r=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"useUpdateMany",title:"useUpdateMany","example-title":"Ant Design useUpdateMany Hook","example-tags":["table","antd","refine-hooks","react-router"]},l=void 0,s={unversionedId:"examples/table/antd/useUpdateMany",id:"version-3.xx.xx/examples/table/antd/useUpdateMany",title:"useUpdateMany",description:"useUpdateMany is one of refine's data hooks. It performs the process of updating more than one data. In this example, we used the useUpdateMany hook to edit multiple data on the table. You can edit more than one data by selecting the rows you want to edit on your table. You can get more information by examining the example.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/antd/useUpdateMany.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useUpdateMany",permalink:"/docs/3.xx.xx/examples/table/antd/useUpdateMany",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/antd/useUpdateMany.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718892843,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{id:"useUpdateMany",title:"useUpdateMany","example-title":"Ant Design useUpdateMany Hook","example-tags":["table","antd","refine-hooks","react-router"]},sidebar:"someSidebar",previous:{title:"useTable",permalink:"/docs/3.xx.xx/examples/table/antd/useTable"},next:{title:"Advanced",permalink:"/docs/3.xx.xx/examples/table/mantine/advanced-react-table"}},c={},u=[],d=(y="CodeSandboxExample",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var y;const m={toc:u},f="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useUpdateMany")," is one of refine's data hooks. It performs the process of updating more than one data. In this example, we used the ",(0,r.yg)("inlineCode",{parentName:"p"},"useUpdateMany")," hook to edit multiple data on the table. You can edit more than one data by selecting the rows you want to edit on your table. You can get more information by examining the example."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdateMany/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"refine")," useUpdateMany data hook documentation for more information. \u2192")),(0,r.yg)(d,{path:"table-antd-use-update-many",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);