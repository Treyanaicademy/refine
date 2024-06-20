"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26661],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Save",swizzle:!0},l=void 0,p={unversionedId:"ui-integrations/material-ui/components/buttons/save-button/index",id:"ui-integrations/material-ui/components/buttons/save-button/index",title:"Save",description:"` uses Material UI's ` component. It uses it for presantation purposes only. Some of the hooks that Refine has adds features to this button.",source:"@site/docs/ui-integrations/material-ui/components/buttons/save-button/index.md",sourceDirName:"ui-integrations/material-ui/components/buttons/save-button",slug:"/ui-integrations/material-ui/components/buttons/save-button/",permalink:"/docs/ui-integrations/material-ui/components/buttons/save-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/components/buttons/save-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718892843,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{title:"Save",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Refresh",permalink:"/docs/ui-integrations/material-ui/components/buttons/refresh-button/"},next:{title:"Show",permalink:"/docs/ui-integrations/material-ui/components/buttons/show-button/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"hideText",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},d=m("DocThumbsUpDownFeedbackWidget"),g=m("PropsTable"),f={toc:c},b="wrapper";function y(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Material UI's ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that Refine has adds features to this button."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"For example, let's add logic to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,r.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,r.yg)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Edit } from "@refinedev/mui";\nimport { Box, TextField } from "@mui/material";\n\nconst PostEdit: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n  } = useForm<ICategory>();\n\n  return (\n    <Edit\n      isLoading={formLoading}\n      // highlight-next-line\n      saveButtonProps={{ onClick: handleSubmit(onFinish) }}\n    >\n      <Box component="form">\n        <TextField\n          {...register("title", { required: true })}\n          error={!!errors?.title}\n          helperText={errors?.title?.message}\n          margin="normal"\n          required\n          fullWidth\n          id="title"\n          label="Title"\n          name="title"\n          defaultValue={" "}\n        />\n      </Box>\n    </Edit>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/posts/edit/123"]}\n    resources={[\n      {\n        name: "posts",\n        edit: PostEdit,\n      },\n    ]}\n  />,\n);\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook exposes ",(0,r.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," to be passed to ",(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," component which includes submitting the form action, button loading, and disable states.")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(d,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to show or hide the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { SaveButton } from "@refinedev/mui";\n\nconst MySaveComponent = () => {\n  return (\n    <SaveButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MySaveComponent,\n      },\n    ]}\n    DashboardPage={MySaveComponent}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(d,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(g,{module:"@refinedev/mui/SaveButton",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/api/button/"},"Button"),"."))))}y.isMDXComponent=!0}}]);