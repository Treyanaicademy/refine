"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99764],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(96540);var o=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",slug:"react-server-components",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-09-react-server-components/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/react-server-components",source:"@site/blog/2024-01-25-react-server-components.md",title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",date:"2024-01-25T00:00:00.000Z",formattedDate:"January 25, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:11.35,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"An Intro to Server Components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",slug:"react-server-components",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-09-react-server-components/social.png",hide_table_of_contents:!1},prevItem:{title:"git stash - Save the Uncommitted Changes Locally",permalink:"/blog/git-stash"},nextItem:{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide"},relatedPosts:[{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.18,date:"2022-11-17T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.78,date:"2022-07-21T00:00:00.000Z"},{title:"Build internal tools using Low-Code with Refine, React-based framework",description:"Why you should be using low-code app Refine to build internal tools? Learn how to build low-code apps using Refine, React and Ant Design.",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.65,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"How to Hide Scrollbar Using CSS?",description:"We'll demonstrate how to hide scrollbars using CSS.",permalink:"/blog/css-hide-scrollbar",formattedDate:"February 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:4.805,date:"2024-02-20T00:00:00.000Z"},{title:"How do you wrap text content in CSS?",description:"We'll look at the CSS features that allow us to wrap overflowing text in containers.",permalink:"/blog/css-text-wrap",formattedDate:"March 5, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.6,date:"2024-03-05T00:00:00.000Z"},{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"October 26, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.11,date:"2023-10-26T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What are React server components?",id:"what-are-react-server-components",level:2},{value:"Problems React server components attempt to solve",id:"problems-react-server-components-attempt-to-solve",level:2},{value:"Differences between React server components and client components",id:"differences-between-react-server-components-and-client-components",level:2},{value:"Differences between React server components and server-side rendering(SSR) in React",id:"differences-between-react-server-components-and-server-side-renderingssr-in-react",level:2},{value:"Using server components in a React application",id:"using-server-components-in-a-react-application",level:2},{value:"When to use React server components?",id:"when-to-use-react-server-components",level:2},{value:"Using server components in a Next.js application",id:"using-server-components-in-a-nextjs-application",level:2},{value:"Pros and Cons of React server components",id:"pros-and-cons-of-react-server-components",level:2},{value:"Conclusion.",id:"conclusion",level:2}],m={toc:d},u="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(u,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("em",{parentName:"strong"},"This article was last updated on January 25, 2024 to add new usecases and clear definition for React Server Components"))),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"There has been a lot of hype and excitement around React server components(RSCs) recently. This is largely because server components run exclusively on the server. Therefore, eliminating the need to bundle server components with client JavaScript. With RSCs, you can now have a mix of both server components and the traditional client components in a single application."),(0,o.yg)("p",null,"RSCs also improve page load time because you can prefetch data from the database or an API and prerender your UI on the server. In this article, we'll discuss React server components and how to start using them."),(0,o.yg)("p",null,"Steps we'll follow:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#what-are-react-server-components"},"What are React server components?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#problems-react-server-components-attempt-to-solve"},"Problems React server components attempt to solve")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#differences-between-react-server-components-and-client-components"},"Differences between React server components and client components")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#differences-between-react-server-components-and-server-side-renderingssr-in-react"},"Differences between React server components and server-side rendering(SSR) in React")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#using-server-components-in-a-react-application"},"Using server components in a React application")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#when-to-use-react-server-components"},"When to use React server components?")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#using-server-components-in-a-nextjs-application"},"Using server components in a Next.js application")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#pros-and-cons-of-react-server-components"},"Pros and Cons of React server components"))),(0,o.yg)("h2",{id:"what-are-react-server-components"},"What are React server components?"),(0,o.yg)("p",null,"React Server Components(RSCs) are a new addition to the React ecosystem. With RSCs, you can create components that run exclusively on the server side. These components are referred to as Server Components."),(0,o.yg)("p",null,"With RSCs, data fetching and all other side effects happen on the server and rendering happen at the component level. It eliminates round trips as with conventional rendering because of the proximity of the data fetching functionality to the database server or API."),(0,o.yg)("p",null,"Server components execute once at build time or on demand when a user hits an endpoint. You can fetch data from the database or API and render it once. The rendered data is locked. The code you write in a Server component remains on the server. It is not shipped to the front-end. Therefore, Server Components do not use React hooks and don't have access to web APIs."),(0,o.yg)("h2",{id:"problems-react-server-components-attempt-to-solve"},"Problems React server components attempt to solve"),(0,o.yg)("p",null,"In this section, we will explore real-world problems that RSCs attempt to solve."),(0,o.yg)("p",null,"As an illustration, let's assume the code below displays product details on a web app. The ",(0,o.yg)("inlineCode",{parentName:"p"},"ProductPage")," component renders the ",(0,o.yg)("inlineCode",{parentName:"p"},"ProductDetails"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"ProductItem"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"MatchedItems")," components ."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const ProductPage = ({ productId }) => {\n  return (\n    <>\n      <ProductDetails productId={productId}>\n        <ProductItem productId={productId} />\n        <MatchedItems productId={productId} />\n      </ProductDetails>\n    </>\n  );\n};\n")),(0,o.yg)("p",null,"There are several ways you can fetch the data to display on the above page. We could fetch the data all at once in the ",(0,o.yg)("inlineCode",{parentName:"p"},"ProductPage")," component as in the example below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const ProductPage = ({ productId }) => {\n  const data = fetchContentsFromAPI();\n\n  return (\n    <>\n      <ProductDetails details={data.details} productId={productId}>\n        <ProductItem item={data.product} productId={productId} />\n        <MatchedItems items={data.matchedItems} productId={productId} />\n      </ProductDetails>\n    </>\n  );\n};\n")),(0,o.yg)("p",null,"The above approach works fine and has its advantage."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It could provide a good user experience since all the components are rendered after fetching the data.")),(0,o.yg)("p",null,"However, it may create some issues below."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It creates a high level of coupling. The child components are tightly coupled with their parent. They also depend on the data the parent component provides. This makes it difficult to maintain them."),(0,o.yg)("li",{parentName:"ul"},"It also goes against the idea of single responsibility. The child components aren't individually responsible for their data. They're dependent on the data from their parent."),(0,o.yg)("li",{parentName:"ul"},"High load time. The parent component fetches all the data for all the components at once.")),(0,o.yg)("p",null,"For the sake of single responsibility, we could refactor the parent component to render its children as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const ProductDetails = ({ productId, children }) => {\n  const details = fetchProductDetails(productId);\n\n  return <>{{ children }}</>;\n};\n\nconst ProductItem = ({ productId }) => {\n  const item = fetchProductItem(productId);\n\n  return /*...*/;\n};\n\nconst MatchedItems = ({ productId }) => {\n  const items = fetchMatchedItems(productId);\n\n  return /*...*/;\n};\n\nconst ProductPage = ({ productId }) => {\n  return (\n    <>\n      <ProductDetails productId={productId}>\n        <ProductItem productId={productId} />\n        <MatchedItems productId={productId} />\n      </ProductDetails>\n    </>\n  );\n};\n")),(0,o.yg)("p",null,"The above refactor works fine and has its advantage:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Single responsibility: Each component is responsible for its data.")),(0,o.yg)("p",null,"However, it may create some issues:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It may provide poor user experience. Any of the child components can be rendered before the other based on how fast the network requests resolve. Users will see sections of the page before the other."),(0,o.yg)("li",{parentName:"ul"},"It will create a ",(0,o.yg)("a",{parentName:"li",href:"https://nischithbm.medium.com/web-performance-optimizing-the-network-waterfall-8a65df932df6"},"network waterfall")," problem because of sequential data fetching.")),(0,o.yg)("p",null,"Each of the methods highlighted above have their pros and cons, however, they share a common limitation. Both approaches require making API calls to the server from the client. This can increase ",(0,o.yg)("a",{parentName:"p",href:"https://aws.amazon.com/what-is/latency/"},"latency"),"."),(0,o.yg)("p",null,"This limitation initially prompted the React team to introduce server components. Because server components execute on the server, they can make API calls and render faster than client components."),(0,o.yg)("p",null,"While it was initially created to address the limitation highlighted above, it had other benefits. Since server components execute on the server, they can access backend-only services easily."),(0,o.yg)("h2",{id:"differences-between-react-server-components-and-client-components"},"Differences between React server components and client components"),(0,o.yg)("p",null,"A major distinction between server components and client components is that server components are rendered once on the server-side while client components are rendered on the client-side. Client components are re-rendered as the user interacts with the application."),(0,o.yg)("p",null,"Normally for a client-side react application, when a user requests a web page, the server sends an empty HTML file with one or more script tags for loading the React code and other project dependencies. The browser parses the HTML file, downloads the Javascript files, and uses the client JavaScript to render the web page."),(0,o.yg)("p",null,"Server components execute on the server-side. They are not included in the client JavaScript bundle. Thus, reducing the client JavaScript bundle size. Client components, on the other hand, are sent to the client and increases the bundle size of your application. A client component is a typical traditional React component."),(0,o.yg)("p",null,"Another distinction lies in their rendering environment which gives them different properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A server component cannot use React hooks like ",(0,o.yg)("inlineCode",{parentName:"li"},"useState"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"useReducer"),", and ",(0,o.yg)("inlineCode",{parentName:"li"},"useEffect"),". This is because a server component is rendered once on the server and doesn't re-render. On the other hand, a client component is a normal React component with access to hooks and re-renders as the user interacts with the app."),(0,o.yg)("li",{parentName:"ul"},"A server component does not have access to browser APIs such as ",(0,o.yg)("inlineCode",{parentName:"li"},"sessionStorage")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"localStorage"),". On the other hand, a client component is a normal React component with access to all the browser APIs."),(0,o.yg)("li",{parentName:"ul"},"Server components support async/await. You can use async/await to make AJAX requests and connect to databases and APIs in the component body. A client component cannot be asynchronous. You need to use React hooks for AJAX requests and other side effects.")),(0,o.yg)("h2",{id:"differences-between-react-server-components-and-server-side-renderingssr-in-react"},"Differences between React server components and server-side rendering(SSR) in React"),(0,o.yg)("p",null,"Server-side rendering (SSR) in the case of React refers to an application's ability to turn React components on the server into a fully rendered static HTML page for the client.\nReact Server Components, on the other hand, work with SSR via an intermediary structure(a protocol similar to that of a JSON format) to enable rendering without delivering any bundles to the client side."),(0,o.yg)("h2",{id:"using-server-components-in-a-react-application"},"Using server components in a React application"),(0,o.yg)("p",null,"Server components can be confusing at first sight. As explained above, a server component can be asynchronous and perform side effects within the function body."),(0,o.yg)("p",null,"Also note that in order to utilize ",(0,o.yg)("inlineCode",{parentName:"p"},"async/await")," in a typescript component with ",(0,o.yg)("inlineCode",{parentName:"p"},".tsx")," file, you will need to update your typescript version to 5.1.1. Read ",(0,o.yg)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#decoupled-type-checking-between-jsx-elements-and-jsx-tag-types"},"this article")," for more."),(0,o.yg)("p",null,"Below is an example of a simple server component,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="BlogPost.tsx"',title:'"BlogPost.tsx"'},"// Server Component\n\nconst BlogPost = async ({ id, isEditing }) => {\n  const post = await db.posts.get(id);\n\n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <section>{post.body}</section>\n    </div>\n  );\n};\n")),(0,o.yg)("p",null,"A client component is a regular React component. However, you need to include the ",(0,o.yg)("inlineCode",{parentName:"p"},"'use client'")," directive at the top of the component file. The ",(0,o.yg)("inlineCode",{parentName:"p"},"'use client'")," directive is similar to the ",(0,o.yg)("inlineCode",{parentName:"p"},"'use strict'")," directive for executing JavaScript code in strict mode."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostEditor.tsx"',title:'"PostEditor.tsx"'},'// A client component\n\n"use client";\n\nimport React, { useState } from "react";\nimport { v4 as uuidv4 } from "uuid";\n\nconst PostEditor = ({ blogPost }) => {\n  const [post, setPost] = useState<any>({\n    id: uuidv4(),\n    title: blogPost.title,\n    content: blogPost.content,\n  });\n\n  const onChange = (type: any, value: any) => {\n    switch (type) {\n      case "title":\n        setPost({ ...post, title: value });\n        break;\n      case "content":\n        setPost({ ...post, content: value });\n        break;\n      default:\n        break;\n    }\n  };\n\n  const submitPost = () => {\n    // save blog post\n  };\n\n  return (\n    <div>\n      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">\n        <h1 className="my-4 text-center">Create Post</h1>\n\n        <form onSubmit={submitPost}>\n          <div className="mt-8">\n            <label className="text-white mb-2"> Title </label>\n            <input\n              type="text"\n              placeholder=""\n              value={post.title}\n              required\n              onChange={(e) => onChange("title", e.target.value)}\n            />\n          </div>\n\n          <div className="mt-8">\n            <label className="text-white mb-2">Add your Blog content</label>\n            <textarea\n              value={post.content}\n              required\n              onChange={(e) => onChange("content", e.target.value)}\n            ></textarea>\n          </div>\n\n          <div className="flex justify-end mt-8">\n            <button\n              type="submit"\n              className="px-4 py-4 bg-[#0e9f64] c-white border-radius"\n            >\n              Create Post\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default PostEditor;\n')),(0,o.yg)("p",null,"There are certain rules you need to follow when working with server and client components."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Server components cannot be imported into client components but client components can be imported into server components. We will illustrate how to import a client component to a server component using our previous example:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="BlogPost.tsx"',title:'"BlogPost.tsx"'},'// Server Component\n\nimport db from "db";\nimport NoteEditor from "NoteEditor";\n\nasync function BlogPost({ id, isEditing }) {\n  const post = await db.posts.get(id);\n\n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <section>{post.body}</section>\n      {isEditing ? <PostEditor blogPost={post} /> : null}\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"In the code above, we imported the ",(0,o.yg)("inlineCode",{parentName:"p"},"PostEditor")," client component into the ",(0,o.yg)("inlineCode",{parentName:"p"},"BlogPost")," server component."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A server component can be passed as a child prop to a client component when the client component is rendered in a server component.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const ServerComponent1 = () => {\n  return (\n    <ClientComponent>\n      <ServerComponent2 />\n    </ClientComponent>\n  );\n};\n")),(0,o.yg)("h2",{id:"when-to-use-react-server-components"},"When to use React server components?"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Faster Initial Load Times:")," React Server Components significantly reduce web app loading times, improving the user experience."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Ideal for Large-Scale Apps:")," They shine in complex applications where handling client-side interactivity is challenging."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Reduced Client-Side Interactivity:")," Use them for components not requiring immediate client-side interactions."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"SEO Benefits:")," Server-side rendering with React Server Components enhances SEO by providing pre-rendered content to search engines, boosting discoverability.")),(0,o.yg)("h2",{id:"using-server-components-in-a-nextjs-application"},"Using server components in a Next.js application"),(0,o.yg)("p",null,"At the time of writing this article, Next.js is the only stable implementation of React Server Components. In any Next.js project that uses App router, each component is a server component by default."),(0,o.yg)("p",null,"The code below shows what a simple Server component looks like in Next.js."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/BlogPost.tsx"',title:'"app/BlogPost.tsx"'},"// Server Component\n\nconst BlogPost = async ({ id, isEditing }) => {\n  const post = await db.posts.get(id);\n\n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <section>{post.body}</section>\n    </div>\n  );\n};\n")),(0,o.yg)("p",null,"On the other hand, a client component looks like a regular React component but has a ",(0,o.yg)("inlineCode",{parentName:"p"},"'use client'")," directive at the top of the component file like so:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/PostEditor.tsx"',title:'"app/PostEditor.tsx"'},'// A client component\n\n"use client";\n\nimport React, { useState } from "react";\nimport { v4 as uuidv4 } from "uuid";\n\nconst PostEditor = ({ blogPost }) => {\n  const [post, setPost] = useState<any>({\n    id: uuidv4(),\n    title: blogPost.title,\n    content: blogPost.content,\n  });\n\n  const onChange = (type: any, value: any) => {\n    switch (type) {\n      case "title":\n        setPost({ ...post, title: value });\n        break;\n      case "content":\n        setPost({ ...post, content: value });\n        break;\n      default:\n        break;\n    }\n  };\n\n  const submitPost = () => {\n    // save blog post\n  };\n\n  return (\n    <div>\n      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">\n        <h1 className="my-4 text-center">Create Post</h1>\n\n        <form onSubmit={submitPost}>\n          <div className="mt-8">\n            <label className="text-white mb-2"> Title </label>\n            <input\n              type="text"\n              placeholder=""\n              value={post.title}\n              required\n              onChange={(e) => onChange("title", e.target.value)}\n            />\n          </div>\n\n          <div className="mt-8">\n            <label className="text-white mb-2">Add your Blog content</label>\n            <textarea\n              value={post.content}\n              required\n              onChange={(e) => onChange("content", e.target.value)}\n            ></textarea>\n          </div>\n\n          <div className="flex justify-end mt-8">\n            <button\n              type="submit"\n              className="px-4 py-4 bg-[#0e9f64] c-white border-radius"\n            >\n              Create Post\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default PostEditor;\n')),(0,o.yg)("h2",{id:"pros-and-cons-of-react-server-components"},"Pros and Cons of React server components"),(0,o.yg)("p",null,"In this section, we will explore the pros and cons of React Server Components."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Pros:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Reduced bundle size"),": Server components execute and remain on the server. They don't contribute to the front-end JavaScript bundle. You can use third-party packages in RSCs without worrying about their impact to your client bundle size."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Improved security"),": Because server components execute on the server-side, you can securely access sensitive data such as API keys, database URI strings and endpoints, usernames, and passwords."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Reduced Latency"),": You can delegate certain API calls to server components since they run on the server. Therefore, eliminating round trips as with client components."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Improved SEO"),": Server components are executed on the server side and only the generated HTML is sent to the client side. This makes it easier for search engines to index your web page."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Improved performance"),": We fetch data and render server components on the server. Therefore, improving performance.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Cons:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You can only use React Server components with meta React frameworks. At the moment, you can only use it with Next.js. You can't use it with vanilla React."),(0,o.yg)("li",{parentName:"ul"},"RSCs can be complex, unintuitive and difficult to get right. RSCs introduce a new mental model. The shift in paradigm comes with significant learning overhead.")),(0,o.yg)("h2",{id:"conclusion"},"Conclusion."),(0,o.yg)("p",null,"In this article, we explored React server components and discussed its use and benefits. React server components enable us combine both client-side and server-side rendered components in React applications in a new way. I hope this article convinces you to test out React server components today."))}h.isMDXComponent=!0}}]);