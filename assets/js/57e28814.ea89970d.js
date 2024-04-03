"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98601],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,u=c["".concat(d,".").concat(m)]||c[m]||g[m]||a;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/index",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-show-page"}},d=void 0,l={unversionedId:"tutorial/adding-crud-pages/chakra-ui/add-edit-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/chakra-ui/add-edit-page",title:"2. Adding Edit Page",description:"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/add-edit-page.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/add-edit-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/chakra-ui/add-edit-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/add-edit-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1712126795,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/index",next:"3.xx.xx/tutorial/adding-crud-pages/{preferredUI}/add-show-page"}}},s={},c=[{value:"Creating Edit Page",id:"creating-edit-page",level:2},{value:"Understanding the Edit Component",id:"understanding-the-edit-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Edit Page to the App",id:"adding-the-edit-page-to-the-app",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=g("DocThumbsUpDownFeedbackWidget"),u=g("Checklist"),h=g("ChecklistItem"),y={toc:c},f="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(f,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,r.yg)("h2",{id:"creating-edit-page"},"Creating Edit Page"),(0,r.yg)(m,{id:"creating-edit-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"First, let's create our file under the ",(0,r.yg)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.yg)("inlineCode",{parentName:"p"},"edit.tsx"),". Then, we will copy the edit page code generated by Inferencer and paste it into the file."),(0,r.yg)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to the ",(0,r.yg)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'To open the edit page, click any "Edit" button in the "Actions" column of the table.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'On the edit page, click on the "Show Code" button in the bottom right corner of the page.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'You can see the edit page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.yg)("inlineCode",{parentName:"p"},"edit.tsx")," file."))),(0,r.yg)("p",null,"You can see the edit page code generated by Inferencer below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: ChakraUIInferencer,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n            edit: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n')),(0,r.yg)("p",null,"Instead of coding the edit page component from scratch, Inferencer created the required code base on API response, so that we can customize.")),(0,r.yg)("h2",{id:"understanding-the-edit-component"},"Understanding the Edit Component"),(0,r.yg)(m,{id:"understanding-the-edit-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"We will go through the edit page components and hooks one by one."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<Edit/>")," is a ",(0,r.yg)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button, refresh button etc."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/edit"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"<Edit/>")," documentation for more information ","\u2192"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," package, has been developed by using the ",(0,r.yg)("strong",{parentName:"p"},"React Hook Form")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package."),(0,r.yg)("p",{parentName:"li"},"It provides all the features of the ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package as well as the ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,r.yg)("strong",{parentName:"p"},"React Hook Form"),"."),(0,r.yg)("p",{parentName:"li"},"It also provides the ",(0,r.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,r.yg)("p",{parentName:"li"},"When you use ",(0,r.yg)("inlineCode",{parentName:"p"},"useForm")," in the edit page, it automatically fetches the data of the record by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," in the URL, then fills the form with the data. It sends the form data to ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," method when the form is submitted."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"@pankod/refine-react-hook-form")," ",(0,r.yg)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"All other components provided by ",(0,r.yg)("strong",{parentName:"p"},"Chakra UI")," are used to display the form fields."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Chakra UI")," documentation for more information ","\u2192"))))),(0,r.yg)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.yg)(m,{id:"handling-relationships",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"In the edit page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,r.yg)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,r.yg)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,r.yg)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useSelect/"},"Refer to the ",(0,r.yg)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/select/usage"},"Refer to the ",(0,r.yg)("strong",{parentName:"a"},"Chakra UI")," ",(0,r.yg)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,r.yg)("p",null,"In the auto-generated edit page code, Inferencer used the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,r.yg)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n  resource: "categories",\n});\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," returns 10 record by default, but the category of the blog post may not be in the first 10 records. To solve this problem, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"defaultValue")," prop to set the default value of the ",(0,r.yg)("inlineCode",{parentName:"p"},"useSelect")," hook like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n  resource: "categories",\n  defaultValue: blogPostsData?.category?.id,\n});\n'))),(0,r.yg)("h2",{id:"adding-the-edit-page-to-the-app"},"Adding the Edit Page to the App"),(0,r.yg)(m,{id:"adding-the-edit-page-to-the-app",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Now that we have created the edit page, we need to add it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Import the created ",(0,r.yg)("inlineCode",{parentName:"p"},"BlogPostEdit")," component.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," component with the ",(0,r.yg)("inlineCode",{parentName:"p"},"BlogPostEdit")," component."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n//highlight-next-line\nimport { BlogPostEdit } from "pages/blog-posts/edit";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n        resources={[\n          {\n            name: "blog_posts",\n            list: BlogPostList,\n            //highlight-next-line\n            edit: BlogPostEdit,\n            show: ChakraUIInferencer,\n            create: ChakraUIInferencer,\n          },\n        ]}\n      />\n    </ChakraProvider>\n  );\n};\nexport default App;\n')),(0,r.yg)("p",null,"Now, we can see the edit page in the browser at ",(0,r.yg)("a",{href:"http://localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123")),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)(u,{mdxType:"Checklist"},(0,r.yg)(h,{id:"add-edit-page-chakra-ui",mdxType:"ChecklistItem"},"I added the edit page to the app."),(0,r.yg)(h,{id:"add-edit-page-chakra-ui-2",mdxType:"ChecklistItem"},"I understood the edit page components and hooks."),(0,r.yg)(h,{id:"add-edit-page-chakra-ui-3",mdxType:"ChecklistItem"},"I understood the relationship handling."))))}b.isMDXComponent=!0}}]);