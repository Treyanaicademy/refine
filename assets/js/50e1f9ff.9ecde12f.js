"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96013],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>y});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,y=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?t.createElement(y,i(i({ref:r},p),{},{components:n})):t.createElement(y,i({ref:r},p))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47489:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>l});n(96540);var t=n(15680);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={},s=void 0,u={unversionedId:"api-reference/core/hooks/data/useMany/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useMany",slug:"/api-reference/core/hooks/data/useMany/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1712126795,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{}},p={},l=[],d={toc:l},f="wrapper";function y(e){var{components:r}=e,n=i(e,["components"]);return(0,t.yg)(f,a(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},d,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px",live:!0,url:"http://localhost:3000/products",previewHeight:"300px"},'setInitialRoutes(["/products"]);\n// visible-block-start\nimport { useState } from "react";\nimport { useMany, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    const [ids, setIds] = useState([1, 2, 3]);\n\n    const { data, isLoading, isError } = useMany<IProduct, HttpError>({\n        resource: "products",\n        ids,\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {products.map((product) => (\n                <ul key={product.id}>\n                    <li key={product.id}>\n                        {product.id} - {product.name}{" "}\n                        <button\n                            onClick={() =>\n                                setIds((prev) =>\n                                    prev.filter((id) => id !== product.id),\n                                )\n                            }\n                        >\n                            remove\n                        </button>\n                    </li>\n                </ul>\n            ))}\n\n            <button\n                onClick={() => {\n                    setIds((prev) => [\n                        ...prev,\n                        Math.floor(Math.random() * 1000) + 1,\n                    ]);\n                }}\n            >\n                Add new product\n            </button>\n        </div>\n    );\n};\n\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}y.isMDXComponent=!0}}]);