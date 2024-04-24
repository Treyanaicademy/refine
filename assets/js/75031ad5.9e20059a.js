"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36947],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"Import",swizzle:!0},s=void 0,l={unversionedId:"ui-integrations/ant-design/components/buttons/import-button/index",id:"ui-integrations/ant-design/components/buttons/import-button/index",title:"Import",description:"` is compatible with the useImport` hook and is meant to be used as it's upload button.",source:"@site/docs/ui-integrations/ant-design/components/buttons/import-button/index.md",sourceDirName:"ui-integrations/ant-design/components/buttons/import-button",slug:"/ui-integrations/ant-design/components/buttons/import-button/",permalink:"/docs/ui-integrations/ant-design/components/buttons/import-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/buttons/import-button/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1713946721,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"Import",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Export",permalink:"/docs/ui-integrations/ant-design/components/buttons/export-button/"},next:{title:"List",permalink:"/docs/ui-integrations/ant-design/components/buttons/list-button/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"hideText",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),g=d("PropsTable"),b={toc:c},y="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<ImportButton>")," is compatible with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-import"},(0,r.yg)("inlineCode",{parentName:"a"},"useImport"))," hook and is meant to be used as it's upload button."),(0,r.yg)("p",null,"It uses Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Upload>"))," components. It wraps a ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component with an ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Upload>"))," component and accepts properties for ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Upload>"))," components separately."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'import {\n  List,\n  useTable,\n  // highlight-start\n  useImport,\n  ImportButton,\n  // highlight-end\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  // highlight-next-line\n  const importProps = useImport<IPostFile>();\n\n  return (\n    <List\n      headerButtons={\n        // highlight-next-line\n        <ImportButton {...importProps} />\n      }\n    >\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n\ninterface IPostFile {\n  title: string;\n  categoryId: number;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to hide the text of the button. When its ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon will be visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { ImportButton, useImport } from "@refinedev/antd";\n\nconst MyImportComponent = () => {\n  const importProps = useImport();\n\n  return (\n    <ImportButton\n      {...importProps}\n      // highlight-next-line\n      hideText\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyImportComponent,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(g,{module:"@refinedev/antd/ImportButton",mdxType:"PropsTable"})))}f.isMDXComponent=!0}}]);