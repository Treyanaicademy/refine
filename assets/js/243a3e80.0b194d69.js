"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72877],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),d=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),y=n,g=s["".concat(c,".").concat(y)]||s[y]||u[y]||o;return t?a.createElement(g,i(i({ref:r},l),{},{components:t})):a.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},45464:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>s});t(96540);var a=t(15680);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const p={id:"useDataProvider",title:"useDataProvider",source:"packages/core/src/hooks/data/useDataProvider.tsx"},c=void 0,d={unversionedId:"api-reference/core/hooks/data/useDataProvider",id:"version-3.xx.xx/api-reference/core/hooks/data/useDataProvider",title:"useDataProvider",description:"useDataProvider is a React hook that returns the dataProvider which is passed to `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useDataProvider.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useDataProvider",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDataProvider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useDataProvider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Nikita Dobrenko",lastUpdatedAt:1715081381,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"useDataProvider",title:"useDataProvider",source:"packages/core/src/hooks/data/useDataProvider.tsx"},sidebar:"someSidebar",previous:{title:"useCustomMutation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"},next:{title:"useDelete",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3}],u=(y="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var y;const g={toc:s},f="wrapper";function m(e){var{components:r}=e,t=i(e,["components"]);return(0,a.yg)(f,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){n(e,r,t[r])}))}return e}({},g,t),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useDataProvider")," is a React hook that returns the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," which is passed to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,a.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,a.yg)("p",null,"It is useful when you have multiple data providers and you want to access one of them."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(u,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's say we have two data providers:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst App = () => {\n    return (\n        <Refine\n            dataProvider={{\n                default: dataProvider("API_URL"),\n                second: dataProvider("SECOND_API_URL"),\n            }}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.yg)("p",null,"Now we can access the data providers with the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDataProvider")," hook:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useDataProvider } from "@pankod/refine-core";\n\nconst dataProvider = useDataProvider();\n\nconst defaultDataProvider = dataProvider(); // return default data provider\nconst secondDataProvider = dataProvider("second"); // return second data provider\n'))),(0,a.yg)("h2",{id:"api"},"API"),(0,a.yg)("h3",{id:"properties"},"Properties"),(0,a.yg)(u,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,a.yg)("td",{parentName:"tr",align:null},"The name of the data provider you want to access"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"default")))))),(0,a.yg)("h3",{id:"return-value"},"Return value"),(0,a.yg)(u,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Provider"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"Data Provider"))))))))}m.isMDXComponent=!0}}]);