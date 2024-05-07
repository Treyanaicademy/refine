"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2411],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(r),y=a,m=c["".concat(s,".").concat(y)]||c[y]||l[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},54170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>c});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"hasura",title:"Hasura","example-tags":["antd","data-provider","hasura","graphql","live-provider"]},s=void 0,d={unversionedId:"examples/data-provider/hasura",id:"version-3.xx.xx/examples/data-provider/hasura",title:"Hasura",description:"Any REST or GraphQL custom backend work integrated with refine. refine Hasura GraphQL Data Provider comes out-of-the-box. Thanks to refine, you can connect to your Hasura database and create special queries and use your data easily. This example shows in detail how you can use the data in your Hasura database with refine project.",source:"@site/versioned_docs/version-3.xx.xx/examples/data-provider/hasura.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/hasura",permalink:"/docs/3.xx.xx/examples/data-provider/hasura",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/data-provider/hasura.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Nikita Dobrenko",lastUpdatedAt:1715081381,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"hasura",title:"Hasura","example-tags":["antd","data-provider","hasura","graphql","live-provider"]},sidebar:"someSidebar",previous:{title:"Elide",permalink:"/docs/3.xx.xx/examples/data-provider/elide"},next:{title:"Multiple Providers",permalink:"/docs/3.xx.xx/examples/data-provider/multiple"}},u={},c=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},y=l("DocThumbsUpDownFeedbackWidget"),m=l("CodeSandboxExample"),g={toc:c},f="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Any REST or GraphQL custom backend work integrated with ",(0,n.yg)("strong",{parentName:"p"},"refine"),". ",(0,n.yg)("strong",{parentName:"p"},"refine")," ",(0,n.yg)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura")," GraphQL Data Provider comes out-of-the-box. Thanks to ",(0,n.yg)("strong",{parentName:"p"},"refine"),", you can connect to your Hasura database and create special queries and use your data easily. This example shows in detail how you can use the data in your Hasura database with ",(0,n.yg)("strong",{parentName:"p"},"refine")," project."),(0,n.yg)("h2",{id:"id-data-type"},"ID Data Type"),(0,n.yg)(y,{id:"id-data-type",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null," By default, the data provider assume that your ",(0,n.yg)("inlineCode",{parentName:"p"},"ID")," type is ",(0,n.yg)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,n.yg)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,n.yg)("inlineCode",{parentName:"p"},"Int")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,n.yg)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,n.yg)("inlineCode",{parentName:"p"},"idType")," based on the resource name.")),(0,n.yg)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,n.yg)("inlineCode",{parentName:"h4"},"idType")),(0,n.yg)(y,{id:"passing-int-or-uuid-to-idtype",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null," This will allow you to determine the ",(0,n.yg)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n    idType: "Int",\n});\n'))),(0,n.yg)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,n.yg)("inlineCode",{parentName:"h4"},"idType")),(0,n.yg)(y,{id:"passing-function-to-idtype",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null," This will allow you to determine the ",(0,n.yg)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n    users: "Int",\n    posts: "uuid",\n};\nconst myDataProvider = dataProvider(client, {\n    idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,n.yg)(m,{path:"data-provider-hasura",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);