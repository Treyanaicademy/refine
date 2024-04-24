"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76722],{64925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>g});a(96540);var n=a(15680),r=a(5063),o=a(15947);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",slug:"refine-vs-adminbro",authors:"melih",tags:["Refine","react","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},u=void 0,d={permalink:"/blog/refine-vs-adminbro",source:"@site/blog/2021-11-29-refine-vs-admin-bro.md",title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",date:"2021-11-29T00:00:00.000Z",formattedDate:"November 29, 2021",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:13.44,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",description:"Refine vs AdminBro",slug:"refine-vs-adminbro",authors:"melih",tags:["Refine","react","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload"},nextItem:{title:"refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin"},relatedPosts:[{title:"How to set up a WebSocket connection with Node.js and React.js?",description:"Understanding Real-time communication with React and WebSocket",permalink:"/blog/react-websocket-tutorial-nodejs",formattedDate:"August 16, 2023",authors:[{name:"Frank Joseph",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"frank_joseph"}],readingTime:12.475,date:"2023-08-16T00:00:00.000Z"},{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",permalink:"/blog/react-hook-form-vs-formik",formattedDate:"January 30, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:7.945,date:"2023-01-30T00:00:00.000Z"},{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/radix-ui",formattedDate:"April 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.375,date:"2024-04-04T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.515,date:"2021-12-27T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-generator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.21,date:"2022-02-22T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",description:"We have listed Open source ReactJS frameworks that will help and speed you up while developing internal-tool applications.",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.115,date:"2022-03-16T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},g=[{value:"Refine",id:"refine",level:2},{value:"Installation",id:"installation",level:3},{value:"Features",id:"features",level:3},{value:"SSR - Next.js Support",id:"ssr---nextjs-support",level:3},{value:"SSR-Next.js Setup",id:"ssr-nextjs-setup",level:4},{value:"SSR-Next.js Basic Usage",id:"ssr-nextjs-basic-usage",level:4},{value:"Routing",id:"routing",level:3},{value:"Data Provider Logic",id:"data-provider-logic",level:3},{value:"GraphQL Data Provider",id:"graphql-data-provider",level:4},{value:"Basic GraphQL Usage",id:"basic-graphql-usage",level:4},{value:"Refine Available Providers",id:"refine-available-providers",level:3},{value:"Customization",id:"customization",level:3},{value:"UI/UX Customization:",id:"uiux-customization",level:4},{value:"Logic Customization:",id:"logic-customization",level:4},{value:"Pricing",id:"pricing",level:3},{value:"AdminBro",id:"adminbro",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Features",id:"features-1",level:3},{value:"SSR - Next.js Support\u200b",id:"ssr---nextjs-support-1",level:3},{value:"Routing",id:"routing-1",level:3},{value:"Data Provider Logic",id:"data-provider-logic-1",level:3},{value:"Install the Database Adapter and add resources",id:"install-the-database-adapter-and-add-resources",level:4},{value:"GraphQL Data Provider",id:"graphql-data-provider-1",level:4},{value:"Customization",id:"customization-1",level:3},{value:"UI/UX Customization:\u200b",id:"uiux-customization-1",level:4},{value:"Pricing",id:"pricing-1",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:g},h="wrapper";function y(e){var{components:t}=e,a=l(e,["components"]);return(0,n.yg)(h,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,n.yg)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,n.yg)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,n.yg)("p",{parentName:"admonition"},"You should know that ",(0,n.yg)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,n.yg)("p",null,"Looking for open source ",(0,n.yg)("strong",{parentName:"p"},"admin panel framework"),"? Here we are going to review two of the best ",(0,n.yg)("strong",{parentName:"p"},"Open Source admin panel frameworks of 2021"),"."),(0,n.yg)("p",null,"These frameworks that we will talk about have emerged to offer solutions to the same business demands in general. Although the purpose of these two frameworks is the same, the solutions are different from each other. Our goal in this article is to show you these differences and help you find the appropriate framework for your project."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"This comparison table strives to be as accurate and as unbiased as possible. If you use any of these libraries and feel the information could be improved, feel free to suggest changes (with notes or evidence of claims) contact ",(0,n.yg)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev")," or you can open a issue on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Github"),".")),(0,n.yg)("h2",{id:"refine"},"Refine"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," is a React-based framework that helps you to develop admin panel, B2B and dashboard that can be fully customized with Ant Design."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," directly provides Ant Design components and some hooks to work with those components. These hooks give you the required props for those Ant Design components."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," is a collection of helper hooks, components and providers. They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," uses ",(0,n.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"React Query")," for data processing, caching, and state management. In this respect, you do not need to define anything extra for every cases and model."),(0,n.yg)("p",null,"Although ",(0,n.yg)("strong",{parentName:"p"},"Refine")," is a newer framework, it is successful in identifying deficiencies in development and producing solutions accordingly. Using new technologies, it offers users more effective and simpler development options."),(0,n.yg)("h3",{id:"installation"},"Installation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Installation is very simple and customizable options can be added.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest demo-refine-project -- -b v3\n")),(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-29-refine-vs-adminbro/project_setup.gif",alt:"setup"}),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Configuration: One-line setup with superplate. Project setup is very simple. Using superplate you can choose the content of your project and the features you want to add.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"UI: You have full control over the UI elements. Fully customizable, open to use. Works seamlessly with Ant Design.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Out-of-the-box: Routing, networking, authentication, state management, i18n and UI.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"SSR: ",(0,n.yg)("strong",{parentName:"p"},"Refine")," can be used with Next.js and Remix to SSR your pages.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"React Location: React Location router provider support"))),(0,n.yg)("h3",{id:"ssr---nextjs-support"},"SSR - Next.js Support"),(0,n.yg)("p",null,"Refine has support for SSR - Next.js. This is an important feature that separates ",(0,n.yg)("strong",{parentName:"p"},"Refine")," from other frameworks. Thanks to this feature, ",(0,n.yg)("strong",{parentName:"p"},"Refine")," provides the opportunity to develop B2C applications in addition to B2B and admin panel."),(0,n.yg)("p",null,"Refine can be used with Next.js to SSR your pages. It doesn't get in the way and follows Next.js conventions and also provides helper modules when necessary."),(0,n.yg)("h4",{id:"ssr-nextjs-setup"},"SSR-Next.js Setup"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine @refinedev/nextjs-router\n")),(0,n.yg)("h4",{id:"ssr-nextjs-basic-usage"},"SSR-Next.js Basic Usage"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>")," must wrap your pages in a custom App component. This way your pages are integrated to refine."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/_app.tsx",title:"pages/_app.tsx"},'import { AppProps } from "next/app";\n\nimport { Refine } from "@pankod/refine";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/nextjs-router";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n    >\n      <Component {...pageProps} />\n    </Refine>\n  );\n}\n\nexport default MyApp;\n')),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/ssr/nextjs/"},"For more information on how to add SSR-Next.js to your Refine project ->")),(0,n.yg)("h3",{id:"routing"},"Routing"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," uses a customized Router Provider to save routes and navigate between pages. ",(0,n.yg)("strong",{parentName:"p"},"Refine")," offers a much more flexible structure thanks to its routerProvider support."),(0,n.yg)("p",null,"A router provider must include the following methods:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"const routerProvider = {\n    useHistory: () => {\n        push: (...args) => any,\n        replace: (...args) => any,\n        goBack: (...args) => any,\n    },\n    useLocation: () => {\n        pathname: string,\n        search: string,\n    },\n    useParams: <Params extends { [K in keyof Params]?: string } = {}>() => Params,\n    Prompt: React.FC<PromptProps*>,\n    Link: React.FC<any>,\n    RouterComponent?: React.FC<any>,\n};\n")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Refine includes many router providers to use in your projects like:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"React Router"),(0,n.yg)("li",{parentName:"ul"},"React Location"),(0,n.yg)("li",{parentName:"ul"},"Next.js Router"))),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/routers/"},"To take a look at how other router providers are defined and working")),(0,n.yg)("p",null,"To activate router provider in ",(0,n.yg)("strong",{parentName:"p"},"Refine"),", we have to pass the routerProvider to the ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,n.yg)(r.A,{defaultValue:"react-router",values:[{label:"React Router",value:"react-router"},{label:"React Location",value:"react-location"},{label:"Next.js Router",value:"nextjs"}],mdxType:"Tabs"},(0,n.yg)(o.A,{value:"react-router",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/react-router-v6";\n\nconst App: React.FC = () => {\n  return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,n.yg)(o.A,{value:"react-location",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-location";\n\nconst App: React.FC = () => {\n  return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,n.yg)(o.A,{value:"nextjs",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/nextjs-router";\n\nconst App: React.FC = () => {\n  return <Refine routerProvider={routerProvider} />;\n};\n')))),(0,n.yg)("p",null,"You just need to tell the route of your component to the routerProvider."),(0,n.yg)("h3",{id:"data-provider-logic"},"Data Provider Logic"),(0,n.yg)("p",null,"A data provider is the place where a ",(0,n.yg)("strong",{parentName:"p"},"Refine")," app communicates with an API."),(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-11-29-refine-vs-adminbro/refine_flow.png",alt:"refine"}),(0,n.yg)("p",null,"A data provider must include following methods:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'const dataProvider = {\n  create: ({ resource, variables, meta }) => Promise,\n  createMany: ({ resource, variables, meta }) => Promise,\n  deleteOne: ({ resource, id, meta }) => Promise,\n  deleteMany: ({ resource, ids, meta }) => Promise,\n  getList: ({ resource, pagination, sorters, filters, meta }) => Promise,\n  getMany: ({ resource, ids, meta }) => Promise,\n  getOne: ({ resource, id, meta }) => Promise,\n  update: ({ resource, id, variables, meta }) => Promise,\n  updateMany: ({ resource, ids, variables, meta }) => Promise,\n  custom: ({ url, method, sorters, filters, payload, query, headers, meta }) =>\n    Promise,\n  getApiUrl: () => "",\n};\n')),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Data hooks uses React Query to manage data fetching. React Query handles important concerns like caching, invalidation, loading states etc..")),(0,n.yg)("h4",{id:"graphql-data-provider"},"GraphQL Data Provider"),(0,n.yg)("p",null,"It is well covered by GraphQL data provider ",(0,n.yg)("strong",{parentName:"p"},"Refine")," and explained step by step in the documentation."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," GraphQL data provider is built with ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"qql-query-builder")," and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-request"},"graphql-request"),". The purpose here is to send dynamic queries that we can do with qql-query-builder as requests with graphql-request."),(0,n.yg)("p",null,"Query builder helps us build queries and mutations. We can use these queries with the getList, getMany and getOne methods in our data provider. On the other hand, the create, createMany, update, updateMany, deleteOne and deleteMany methods generate a mutation to send a request."),(0,n.yg)("p",null,"In order to create a query, we need to specify the fields that we will use from our data provider. Thanks to the MetaDataQuery, we pass these fields to our data provider and start using them."),(0,n.yg)("h4",{id:"basic-graphql-usage"},"Basic GraphQL Usage"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"src/App.tsx","src/App.tsx":!0},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider, { GraphQLClient } from "@refinedev/graphql";\n\nconst client = new GraphQLClient("API_URL");\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(client)}\n    />\n  );\n};\n')),(0,n.yg)("p",null,"When sending the request, we must specify which fields will come, so we send fields in ",(0,n.yg)("inlineCode",{parentName:"p"},"meta")," to hooks that we will fetch data from."),(0,n.yg)(r.A,{defaultValue:"usage",values:[{label:"usage",value:"usage"},{label:"output",value:"output"}],mdxType:"Tabs"},(0,n.yg)(o.A,{value:"usage",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'export const PostList = () => {\n  const { tableProps, sorter } = useTable<IPost>({\n    sorters: {\n      initial: [\n        {\n          field: "id",\n          order: "asc",\n        },\n      ],\n    },\n    // highlight-start\n    meta: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["title"],\n        },\n      ],\n    },\n    // highlight-end\n  });\n\n  const { selectProps } = useSelect<ICategory>({\n    resource: "categories",\n    // highlight-start\n    meta: {\n      fields: ["id", "title"],\n    },\n    // highlight-end\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          sorter={{ multiple: 2 }}\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n        />\n        <Table.Column\n          key="title"\n          dataIndex="title"\n          title="Title"\n          sorter={{ multiple: 1 }}\n        />\n        <Table.Column<IPost>\n          dataIndex="category"\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                style={{ minWidth: 200 }}\n                mode="multiple"\n                placeholder="Select Category"\n                {...selectProps}\n              />\n            </FilterDropdown>\n          )}\n          render={(_, record) => record.category.title}\n        />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n'))),(0,n.yg)(o.A,{value:"output",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"query ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,n.yg)("p",null,"Here we only make requests for queries that are necessary. As you can see, all you have to do is specify the field you want to select with ",(0,n.yg)("inlineCode",{parentName:"p"},"meta"),"."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/data-providers/graphql/"},"Refer to the GraphQL for detailed usage. \u2192 ")),(0,n.yg)("h3",{id:"refine-available-providers"},"Refine Available Providers"),(0,n.yg)("p",null,"Connects to any REST or GraphQL custom backend."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"NestJs CRUD: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-nestjsx-crud"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-nestjsx-crud")),(0,n.yg)("li",{parentName:"ul"},"Airtable: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-airtable"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-airtable")),(0,n.yg)("li",{parentName:"ul"},"Strapi: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi")),(0,n.yg)("li",{parentName:"ul"},"Strapi v4: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-v4"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-strapi-v4")),(0,n.yg)("li",{parentName:"ul"},"Supabase: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-supabase"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-supabase")),(0,n.yg)("li",{parentName:"ul"},"Hasura: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-hasura"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-hasura")),(0,n.yg)("li",{parentName:"ul"},"Appwrite: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/examples/data-provider-appwrite"},"https://github.com/refinedev/refine/tree/master/examples/data-provider-appwrite")),(0,n.yg)("li",{parentName:"ul"},"Medusa: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/medusa"},"https://github.com/refinedev/refine/tree/master/packages/medusa"))),(0,n.yg)("h3",{id:"customization"},"Customization"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Refine's"),' motivation and main purpose are as follows: "Higher-level frontend frameworks can save you a lot time, but they typically offer you a trade-off between speed and flexibility."'),(0,n.yg)("li",{parentName:"ul"},"While the admin panel allows you to make dashboard, B2B and B2C applications quickly, we offer you flexibility in your UI or business model.")),(0,n.yg)("h4",{id:"uiux-customization"},"UI/UX Customization:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Refine"),", comes ready-made decoupled from the UI, and is used. ",(0,n.yg)("strong",{parentName:"li"},"Refine")," mostly touches UI components via hooks. The main advantage of this for you is that you can successfully perform any Business request or different case.")),(0,n.yg)("h4",{id:"logic-customization"},"Logic Customization:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Refine"),", works flawless with react-query. You don't have to worry about state management in your business model or when you encounter a different situation.")),(0,n.yg)("h3",{id:"pricing"},"Pricing"),(0,n.yg)("p",null,"All features of ",(0,n.yg)("strong",{parentName:"p"},"Refine")," are available as ",(0,n.yg)("strong",{parentName:"p"},"open source"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Access Control Provider (RBAC, ABAC, ACL, IP, LDAP, etc...)"),(0,n.yg)("li",{parentName:"ul"},"Realtime"),(0,n.yg)("li",{parentName:"ul"},"Search"),(0,n.yg)("li",{parentName:"ul"},"Navigation and more features are available")),(0,n.yg)("p",null,"If you want to get information about the Enterprise, Refine ready to help you for Support and Training.\n",(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/enterprise/"},"For more info about Enterprise->")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Refine")," Docs & Demo: ",(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Documentation")," - ",(0,n.yg)("a",{parentName:"p",href:"https://refine.dev/demo/"},"Live Demo")),(0,n.yg)("h2",{id:"adminbro"},"AdminBro"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://adminbro.com/index.html"},"AdminBro")," is an open-source package from that adds an auto-generated admin panel to your Node.js application. You provide database models or schemas and AdminBro generates the user interface for you."),(0,n.yg)("p",null,"You can connect your various databases to the admin interface and perform standard CRUD operations on the records. In this way, it makes it to make changes on your data and provides you with a great deal of convenience."),(0,n.yg)("p",null,"You can quickly develop and customize the Admin panel with AdminBro."),(0,n.yg)("p",null,"It provides you with solutions and provides convenience when making admin panel and b2b applications. It is an open source project that has been in development and ongoing development for a long time."),(0,n.yg)("h3",{id:"installation-1"},"Installation"),(0,n.yg)("p",null,"We can say that it is difficult to install, but it is clearly explained step by step in the documentation."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Since AdminBro uses your existing framework to render its routes - you have to use one of our plugins."),(0,n.yg)("p",{parentName:"admonition"},"There are plugins for:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Express"),(0,n.yg)("li",{parentName:"ul"},"Hapi"),(0,n.yg)("li",{parentName:"ul"},"Koa.js"),(0,n.yg)("li",{parentName:"ul"},"Nest.js"))),(0,n.yg)("p",null,"Install the AdminBro along with the express plugin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install admin-bro @admin-bro/express\n")),(0,n.yg)("p",null,"Then, we need to install some dependencies express and the express-formidable packages. express-formidable is a peer dependency for AdminBro"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install express express-formidable\n")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://adminbro.com/tutorial-installation-instructions.html"},"For detailed installation \u2192")),(0,n.yg)("h3",{id:"features-1"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You can use any data from any source and make changes to the data(create, read, update, delete)"),(0,n.yg)("li",{parentName:"ul"},"Custom actions"),(0,n.yg)("li",{parentName:"ul"},"Custom resource decorators"),(0,n.yg)("li",{parentName:"ul"},"Form validation"),(0,n.yg)("li",{parentName:"ul"},"A full-featured control panel can be created."),(0,n.yg)("li",{parentName:"ul"},"Internationalization(i18n)")),(0,n.yg)("h3",{id:"ssr---nextjs-support-1"},"SSR - Next.js Support\u200b"),(0,n.yg)("p",null,"AdminBro does not support SSR-Next.js. It only helps you develop B2B and admin panel applications."),(0,n.yg)("h3",{id:"routing-1"},"Routing"),(0,n.yg)("p",null,"Adminbro's routing processes are slightly different than others. You can also define the routes of the components that you have created custom here."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},'const AdminBro = require("admin-bro");\nconst AdminBroExpress = require("@admin-bro/express");\n\nconst express = require("express");\nconst app = express();\n\nconst adminBro = new AdminBro({\n  databases: [],\n  rootPath: "/admin",\n});\n\nconst router = AdminBroExpress.buildRouter(adminBro);\n')),(0,n.yg)("p",null,"The concept of routing is handled in a different way and in general all routing operations are defined through this file."),(0,n.yg)("h3",{id:"data-provider-logic-1"},"Data Provider Logic"),(0,n.yg)("p",null,"It does not have a data provider exactly like other frameworks. It has a different structure. It has created functions for you to control your data. But there are rules that we must follow and do."),(0,n.yg)("p",null,"AdminBro can be connected to many different types of resources. Right now, they support the following options:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Mongoose"),(0,n.yg)("li",{parentName:"ul"},"Sequelize"),(0,n.yg)("li",{parentName:"ul"},"TypeORM")),(0,n.yg)("p",null,"To add resources , you first have to install an adapter for the resource you want to use."),(0,n.yg)("h4",{id:"install-the-database-adapter-and-add-resources"},"Install the Database Adapter and add resources"),(0,n.yg)("p",null,"Let's take a look at an example made with the mongoose adapter."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install mongoose @admin-bro/mongoose\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.js"',title:'"index.js"'},'const AdminBro = require("admin-bro");\nconst AdminBroExpress = require("@admin-bro/express");\nconst AdminBroMongoose = require("@admin-bro/mongoose");\n\nconst express = require("express");\nconst app = express();\n\nconst mongoose = require("mongoose");\n\nAdminBro.registerAdapter(AdminBroMongoose);\n\nconst run = async () => {\n  const connection = await mongoose.connect("mongodb://localhost:27017/users", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n  });\n\n  const User = mongoose.model("User", {\n    name: String,\n    email: String,\n    surname: String,\n  });\n\n  const adminBro = new AdminBro({\n    Databases: [connection],\n    rootPath: "/admin",\n    resources: [User],\n  });\n  const router = AdminBroExpress.buildRouter(adminBro);\n  app.use(adminBro.options.rootPath, router);\n\n  app.listen(3000, () => {\n    console.log("Application is up and running under localhost:3000/admin");\n  });\n};\nrun();\n')),(0,n.yg)("p",null,"Here we first installed and connected mongoose. We then created a model and passed it to the AdminBro resource. AdminBro has built an interface for us where we can list our users. You can also add your own ",(0,n.yg)("a",{parentName:"p",href:"https://adminbro.com/tutorial-writing-custom-adapters.html"},"custom adapters")," and set up ",(0,n.yg)("a",{parentName:"p",href:"https://adminbro.com/tutorial-customizing-resources.html"},"custom resources"),"."),(0,n.yg)("p",null,"The logic is well covered and also well explained in the documentation. But we can say that it is complex compared to other frameworks. It can be difficult to use on big data."),(0,n.yg)("h4",{id:"graphql-data-provider-1"},"GraphQL Data Provider"),(0,n.yg)("p",null,"There is no native GraphQL support. It can be supported with 3rd party packages."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/admin-bro-graphql"},"https://www.npmjs.com/package/admin-bro-graphql"),"\n",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SoftwareBrothers/adminjs/issues/655"},"https://github.com/SoftwareBrothers/adminjs/issues/655")),(0,n.yg)("h3",{id:"customization-1"},"Customization"),(0,n.yg)("p",null,"AdminBro is good at customizing. You can connect your own adapters and customize your resources. These customizations are challenging and complex."),(0,n.yg)("p",null,"Some customizable features are as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://adminbro.com/tutorial-customizing-resources.html"},"Customize Resources")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://adminbro.com/tutorial-actions.html"},"Customize Actions")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://adminbro.com/tutorial-actions-validations.html"},"Custom Validations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://adminbro.com/tutorial-custom-dashboard.html"},"Customize dashboard"))),(0,n.yg)("h4",{id:"uiux-customization-1"},"UI/UX Customization:\u200b"),(0,n.yg)("p",null,"It automatically offers you an interface option that you can use. You can also develop and customize your own components. You can do your own styling and write your own custom components, but for this customization, you need to follow and apply a few steps. It doesn't speed you up in UI development."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://adminbro.com/tutorial-writing-react-components.html"},"For more information about developing your own components ->")),(0,n.yg)("h3",{id:"pricing-1"},"Pricing"),(0,n.yg)("p",null,"All features of Adminbro are open source and accessible."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Role-Based Access Control"),(0,n.yg)("li",{parentName:"ul"},"Content Management System")),(0,n.yg)("p",null,"AdminBro Docs & Demo: ",(0,n.yg)("a",{parentName:"p",href:"https://adminbro.com/tutorial-installation-instructions.html"},"Documentation")," - ",(0,n.yg)("a",{parentName:"p",href:"https://admin-bro-example-app-staging.herokuapp.com/admin/login"},"Live Demo")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"We have examined these two frameworks under some headings. Both help you successfully develop admin panel and B2B applications."),(0,n.yg)("p",null,"We suggest asking some questions to find out which one is more suitable for your project."),(0,n.yg)("p",null,"At this point, the questions you should ask when choosing these of framework may be as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"How flexible are they in offering solutions to the different business demands we may encounter?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"How difficult will it be to implement the providers and features we will be using?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If any problem arises, can I easily find a solution from the documentation?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"How dependent am I on this framework when using it in my project and does it offer customization possibilities?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"What does it offer me as an extra feature?"))),(0,n.yg)("p",null,"Here ",(0,n.yg)("strong",{parentName:"p"},"Refine")," directly answers some of your questions. ",(0,n.yg)("strong",{parentName:"p"},"Refine"),"'s customized structures (API, Router, i18n, GraphQL provider, etc...) provide you convenience from many points, unlike admin bro. This convenience and perspective provided by ",(0,n.yg)("strong",{parentName:"p"},"Refine")," can be preferred for many projects. In addition, you can be limited to internal tool/B2B applications with AdminBro. You can develop many different projects with ",(0,n.yg)("strong",{parentName:"p"},"Refine"),"'s rich UI library and SSR support."),(0,n.yg)("p",null,"In this article, we tried to answer these questions. By reading this article, you can choose the appropriate framework for your project and use it."))}y.isMDXComponent=!0}}]);