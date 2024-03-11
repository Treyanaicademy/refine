"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},26835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});t(67294);var a=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",slug:"tailwind-flex",authors:"abdullah_numan",tags:["tailwind","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/social.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/tailwind-flex",source:"@site/blog/2023-09-11-tailwind-flex.md",title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",date:"2023-09-11T00:00:00.000Z",formattedDate:"September 11, 2023",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"},{label:"css",permalink:"/blog/tags/css"}],readingTime:12.72,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",slug:"tailwind-flex",authors:"abdullah_numan",tags:["tailwind","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/social.png",hide_table_of_contents:!1},prevItem:{title:"Using Heroicons with TailwindCSS",permalink:"/blog/heroicons-with-tailwind"},nextItem:{title:"Building a React Admin Panel with Refine and daisyUI",permalink:"/blog/daisy-ui-react-admin-panel"},relatedPosts:[{title:"CSS Rounded Corners Examples",description:"We'll examine CSS rounded corners in this article.",permalink:"/blog/css-rounded-corners",formattedDate:"February 15, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:7.015,date:"2024-02-15T00:00:00.000Z"},{title:"How to Hide Scrollbar Using CSS?",description:"We'll demonstrate how to hide scrollbars using CSS.",permalink:"/blog/css-hide-scrollbar",formattedDate:"February 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:4.805,date:"2024-02-20T00:00:00.000Z"},{title:"Building React admin panel with NextUI and Refine",description:"We will see how  to build a React admin panel using Refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:42.14,date:"2023-09-20T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"February 2, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.92,date:"2024-02-02T00:00:00.000Z"},{title:"Essentials of TypeScript Classes",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-classes",formattedDate:"November 7, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.06,date:"2023-11-07T00:00:00.000Z"},{title:"A Quick Introduction to Meta's Stylex",description:"This post quickly explores how to apply statically typed, atomic CSS styles to React components with Stylex APIs in a Next.js application.",permalink:"/blog/meta-stylex",formattedDate:"December 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.11,date:"2023-12-13T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starter Files",id:"starter-files",level:2},{value:"<code>&lt;Navbar /&gt;</code> Component",id:"navbar--component",level:3},{value:"Images",id:"images",level:3},{value:"Styles",id:"styles",level:3},{value:"Icons",id:"icons",level:3},{value:"Styling a Navbar with TailwindCSS classes",id:"styling-a-navbar-with-tailwindcss-classes",level:2},{value:"Nav Items with Tailwind Flex",id:"nav-items-with-tailwind-flex",level:3},{value:"Ordering List Items with Tailwind Flex",id:"ordering-list-items-with-tailwind-flex",level:3},{value:"Search Bar",id:"search-bar",level:3},{value:"Positioning Navbar Logo with Tailwind Flex",id:"positioning-navbar-logo-with-tailwind-flex",level:3},{value:"Summary",id:"summary",level:2}],c={toc:d};function u(e){var{components:n}=e,t=r(e,["components"]);return(0,a.kt)("wrapper",l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"TailwindCSS")," is a robust CSS framework that provides numerous utility classes for layout, sizing, colors, typography, etc. One of the most powerful capabilities Tailwind provides is responsive variants of utility classes for all screen sizes. Tailwind also supports variants for an element's states like ",(0,a.kt)("inlineCode",{parentName:"p"},"hover"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"focus"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),", and so on."),(0,a.kt)("p",null,"CSS Flexbox is supported by TailwindCSS with Flex classes that are initiated with ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," and further styled with intuitive and easy to remember placement classes like ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-start"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-center"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"items-start"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"items-center"),", and the like. Layout direction is manipulated using classes named ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-col")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-row"),"."),(0,a.kt)("p",null,"In this post, we will play with Tailwind Flex classes to build a simple React navbar that initially has its menu vertically stacked in screens smaller than ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", and hoists it horizontally to the top at larger screens. Since we are using Tailwind to move the nav menu up, with Flex rows ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"it is just Tailzup!"))),(0,a.kt)("p",null,"We'll employ a mobile-first approach, so we'll be starting with using ",(0,a.kt)("inlineCode",{parentName:"p"},'flex-direction: "column"')," with ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-col")," class and then at ",(0,a.kt)("inlineCode",{parentName:"p"},"md")," apply ",(0,a.kt)("inlineCode",{parentName:"p"},'flex-direction: "row"')," with ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-row"),". We'll use Flex order modifiers such as ",(0,a.kt)("inlineCode",{parentName:"p"},"order-last")," to change the order of navbar items. We'll also be growing items using ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-{n}")," classes."),(0,a.kt)("p",null,"We'll start with a collapsible React navbar that already comes in a collapsed state with the necessary spacing and sizing implemented so that we can focus on the use of Tailwind Flex classes in this article."),(0,a.kt)("p",null,"Before starting, though, let's talk about the prerequisites that need to be managed for getting hands-on with Tailwind Flex."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#starter-files"},"Starter Files"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#navbar--component"},(0,a.kt)("inlineCode",{parentName:"a"},"<Navbar />")," Component")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#styling-a-navbar-with-tailwindcss-classes"},"Styling a Navbar with TailwindCSS classes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nav-items-with-tailwind-flex"},"Nav Items with Tailwind Flex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ordering-list-items-with-tailwind-flex"},"Ordering List Items with Tailwind Flex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#search-bar"},"Search Bar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#positioning-navbar-logo-with-tailwind-flex"},"Positioning Navbar Logo with Tailwind Flex"))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You must first have ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},(0,a.kt)("strong",{parentName:"a"},"Node.js"))," to initialize a React App. You can get it from ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"here"),"."),(0,a.kt)("p",null,"Follow these steps to start a React App with TailwindCSS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From your terminal, go to a folder of your choice. Create a React App with CRA and open it in your code editor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app flex-navbar\ncode flex-navbar\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install TailwindCSS and initialize the ",(0,a.kt)("inlineCode",{parentName:"li"},"tailwind.config.js")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Configure template paths:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},"/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    \"./src/**/*.{js,jsx,ts,tsx}\",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Add Tailwind layers to your CSS file. For this project, I have moved mine to ",(0,a.kt)("inlineCode",{parentName:"li"},"src/styles/styles.css"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/styles/styles.css"',title:'"src/styles/styles.css"'},"/* CSS reset or normalizer code */\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* TailwindCSS styles */\n")),(0,a.kt)("p",null,"It is important that the Tailwind directives are added towards the top of your CSS file before any other TailwindCSS classes are used."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Run the compile script for TailwindCSS, with the ",(0,a.kt)("inlineCode",{parentName:"li"},"--watch")," flag:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx tailwindcss -i ./src/styles/styles.css -o ./public/styles/styles.css --watch\n")),(0,a.kt)("p",null,"With this, TailwindCSS will compile styles in ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/styles/styles.css")," and put it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"./public/styles/styles.css")," folder. It is important that it keeps running in order to instantly compile newly added classes."),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Link the CSS file to ",(0,a.kt)("inlineCode",{parentName:"li"},"./public/index.html")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link href="./styles/styles.css" rel="stylesheet" />\n')),(0,a.kt)("p",null,"If you run into any hurdle, please check out how to initialize a React app with ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," (CRA) for TailwindCSS from ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/guides/create-react-app"},"here"),"."),(0,a.kt)("p",null,"With the development environment set up, let's now get our starter files prepared."),(0,a.kt)("h2",{id:"starter-files"},"Starter Files"),(0,a.kt)("p",null,"To begin working, our ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport Navbar from "./components/Navbar";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Navbar />\n      <main>{/*Lorem stuff here*/}</main>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Please feel free to clean up all other imports and markups."),(0,a.kt)("p",null,"We want to focus on the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Navbar />")," component."),(0,a.kt)("h3",{id:"navbar--component"},(0,a.kt)("inlineCode",{parentName:"h3"},"<Navbar />")," Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Navbar />")," component initially looks like this:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Navbar styles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Navbar.jsx"',title:'"src/components/Navbar.jsx"'},'import React, { useState } from "react";\nimport { Avatar, HamburgerIcon, SearchIcon, TailzupLogo } from "./../icons";\nimport TailzupLogo from "../images/tailzup-logo.png";\n\nconst Navbar = () => {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const menuHidden = !isMobileMenuOpen ? "hidden md:block" : "";\n  return (\n    <nav className="navbar">\n      <div id="brand-wrapper" className="nav-wrapper">\n        <a className="brand" href="/">\n          <img src={TailzupLogo} width={180} height={62} alt="tailzup-logo" />\n        </a>\n      </div>\n      <div\n        className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}\n      >\n        <div id="items" className="my-2">\n          <div className="left mx-2 p-2">\n            <input\n              className="text-input"\n              type="email"\n              placeholder="Find donald trump or something..."\n            />\n            <SearchIcon />\n          </div>\n          <div>\n            <ul id="right" className="">\n              <li className="nav-item">\n                <a href="/">\n                  <Avatar />\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Home\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Friends\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Messages\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <HamburgerIcon\n        isMobileMenuOpen={isMobileMenuOpen}\n        setIsMobileMenuOpen={setIsMobileMenuOpen}\n      />\n    </nav>\n  );\n};\n\nexport default Navbar;\n'))),(0,a.kt)("p",null,"If you examine, you can see that the display and hiding logic of the vertical menu is already implemented using ",(0,a.kt)("inlineCode",{parentName:"p"},"isMobileMenuOpen")," state. We also have all the spacing, typography and color styles completed with ",(0,a.kt)("inlineCode",{parentName:"p"},"navbar"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nav-wrapper"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"brand"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"text-input")," classes composed from necessary TailwindCSS utility classes. You can see what's going on in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/styles/styles.css")," file for the details."),(0,a.kt)("h3",{id:"images"},"Images"),(0,a.kt)("p",null,"We are using the following imported image for our logo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import TailzupLogo from "../images/tailzup-logo.png";\n')),(0,a.kt)("p",null,"You can download it from ",(0,a.kt)("a",{parentName:"p",href:"https://imgbox.com/eCnG8yLw"},"here")," and add it to the specified directory."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/images.png",alt:"tailwind flex"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"styles"},"Styles"),(0,a.kt)("p",null,"The CSS file we are using looks like the one below. Please copy over all the styles and place them inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src/styles/styles.css"),":"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show CSS styles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/styles/styles.css"',title:'"src/styles/styles.css"'},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  --primary-color: rgb(223, 232, 247);\n  --secondary-color: rgb(182, 76, 27);\n  --grayscale: rgb(226, 218, 218);\n  --friendly: green;\n  --neutral: blue;\n  --warning: yellow;\n  --danger: crimson;\n  --forbidden: black;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-width: 450px;\n}\n\n.navbar {\n  @apply fixed mx-auto px-2 w-full h-auto bg-slate-600;\n}\n\n.nav-wrapper {\n  @apply h-14 bg-slate-600 w-full;\n}\n\n.brand {\n  max-width: 12rem;\n  color: var(--primary-color);\n  @apply block text-4xl mx-2 py-2;\n}\n\n.nav-item {\n  @apply mx-2 p-1 rounded lg:mx-8 w-full lg:w-auto hover:scale-105 hover:backdrop-brightness-125 hover:shadow transition-all;\n}\n\n.nav-link {\n  @apply text-center p-1;\n}\n\n.text-input {\n  @apply py-0.5 px-2 border rounded-l text-slate-800;\n}\n\n.avatar {\n  width: 2rem;\n  height: 2rem;\n  color: whitesmoke;\n}\n\n.tailzup-logo {\n  width: 4rem;\n  height: 4rem;\n}\n\n.icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: whitesmoke;\n}\n"))),(0,a.kt)("h3",{id:"icons"},"Icons"),(0,a.kt)("p",null,"We have some icons in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/icons")," folder. They are mainly the JSX markup of Heroicons. Please copy them over and import them as necessary."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Icons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/icons/index.tsx"',title:'"src/components/icons/index.tsx"'},'import React from "react";\n\nexport const HamburgerIcon = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {\n  return (\n    <div\n      className={`absolute top-3 right-4 p-1 border border-slate-500 rounded md:hidden text-slate-500 hover:text-slate-300 hover:bg-slate-500`}\n      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n    >\n      <a href="/">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          fill="none"\n          viewBox="0 0 24 24"\n          strokeWidth={1.5}\n          stroke="currentColor"\n          className="w-6 h-6"\n        >\n          <path\n            strokeLinecap="round"\n            strokeLinejoin="round"\n            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"\n          />\n        </svg>\n      </a>\n    </div>\n  );\n};\n\nexport const Avatar = () => {\n  return (\n    <a href="/">\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        fill="none"\n        viewBox="0 0 24 24"\n        strokeWidth={1.5}\n        stroke="currentColor"\n        className="avatar"\n      >\n        <path\n          strokeLinecap="round"\n          strokeLinejoin="round"\n          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"\n        />\n      </svg>\n    </a>\n  );\n};\n\nexport const SearchIcon = () => {\n  return (\n    <button\n      className="px-2 py-0.5 border rounded-r hover:rounded-r hover:border-slate-400 hover:bg-slate-500 transition ease-in-out duration-50"\n      href="/"\n    >\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        fill="none"\n        viewBox="0 0 24 24"\n        strokeWidth={1.5}\n        stroke="currentColor"\n        className="icon"\n      >\n        <path\n          strokeLinecap="round"\n          strokeLinejoin="round"\n          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"\n        />\n      </svg>\n    </button>\n  );\n};\n'))),(0,a.kt)("p",null,"The icons also come with necessary TailwindCSS styles. You can copy and paste them directly and use them in your navbar if you feel the need to."),(0,a.kt)("p",null,"Alright, with everything now set on the stage, let's try running the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run start\n")),(0,a.kt)("p",null,"You can see a vertical menu and a toggle button at a screen size less than ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),". And the toggle button is functioning properly:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/icons-min.gif",alt:"tailwind flex"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The menu items in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Navbar />")," are not yet following flex formatting, as all the div's and the unordered list are forming Block Formatting Contexts. This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Navbar />")," component does not have any flex styling yet."),(0,a.kt)("p",null,"So, let's start flexing the navbar with TailwindCSS Flex classes."),(0,a.kt)("h2",{id:"styling-a-navbar-with-tailwindcss-classes"},"Styling a Navbar with TailwindCSS classes"),(0,a.kt)("p",null,"We'll go inside out, as it is easier to manage inner flex containers and then combine container siblings up the HTML tree."),(0,a.kt)("h3",{id:"nav-items-with-tailwind-flex"},"Nav Items with Tailwind Flex"),(0,a.kt)("p",null,"We'll apply a mobile-first approach to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ul>")," list and its items. They make up the main navigation links. And we want to start with flex columns on smaller screens and then go horizontal at ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),". While in column layout, we want the items to be justified and aligned to the top-left. This is achieved as default without any flex placing classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <ul\n    id= "right"\n                //highlight-start\n    className="flex flex-col md:flex-row md:justify-start md:items-center"\n                //highlight-end\n  >\n        //highlight-next-line\n    <li className= "nav-item md:order-last" >\n      <a href="/">\n        <Avatar />\n      </a>\n    </li>\n    <li className="nav-item">\n      <a className="nav-link" href="/">\n        Home\n      </a>\n    </li>\n    <li className="nav-item">\n      <a className="nav-link" href="/">\n        Friends\n      </a>\n    </li>\n    <li className="nav-item">\n      <a className="nav-link" href="/">\n        Messages\n      </a>\n    </li>\n  </ul>\n</div>\n')),(0,a.kt)("p",null,"At ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", with ",(0,a.kt)("inlineCode",{parentName:"p"},"md:flex-row md:justify-start md:items-center"),", we are turning the items horizontally, justified to the start, and vertically positioned to the center."),(0,a.kt)("h3",{id:"ordering-list-items-with-tailwind-flex"},"Ordering List Items with Tailwind Flex"),(0,a.kt)("p",null,"Notice, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Avatar />")," item's ",(0,a.kt)("inlineCode",{parentName:"p"},"<li>")," element is the first item on smaller screens, and we moved its order to last with ",(0,a.kt)("inlineCode",{parentName:"p"},"md:order-last"),". On screens larger than ",(0,a.kt)("inlineCode",{parentName:"p"},"md")," it's showing at the end of the horizontal navbar."),(0,a.kt)("h3",{id:"search-bar"},"Search Bar"),(0,a.kt)("p",null,'Next, we look at the sibling of the container of the list we just "flexed" - the parent that houses the search bar. We first want the search bar input and icon to be flexed together, centered horizontally and vertically at all times. So:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<div\n  //highlight-start\n  className="left mx-2 p-2 flex justify-center items-center"\n  //highlight-end\n>\n  <input\n    className="text-input"\n    type="email"\n    placeholder="Find danielle trump or sth..."\n  />\n  <SearchIcon />\n</div>\n')),(0,a.kt)("p",null,"Then, we want to correctly position the search bar and the nav list items. We want the search bar and list items stacked vertically from top-left on smaller screens, i.e., while in ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-col")," direction. And on screens larger than ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", we want them to go horizontal, positioned justified from the start, and vertically centered. So, on the parent container with ",(0,a.kt)("inlineCode",{parentName:"p"},'id=" items"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<div\n  id="items"\n  //highlight-start\n  className="my-2 flex flex-col justify-start items-start md:flex-row md:justify-start md:items-center"\n  //highlight-end\n>\n  <div\n    //highlight-start\n    className="left mx-2 p-2 order-last md:order-none flex justify-center items-center"\n    //highlight-end\n  >\n    <input\n      className="text-input"\n      type="email"\n      placeholder="Find danield trump or st..."\n    />\n    <SearchIcon />\n  </div>\n  <div>\n    <ul\n      id="right"\n      className="flex flex-col md:flex-row md:justify-start md:items-center"\n    >\n      <li className="nav-item md:order-last">\n        <a href="/">\n          <Avatar />\n        </a>\n      </li>\n      <li className="nav-item">\n        <a className="nav-link" href="/">\n          Home\n        </a>\n      </li>\n      <li className="nav-item">\n        <a className="nav-link" href="/">\n          Friends\n        </a>\n      </li>\n      <li className="nav-item">\n        <a className="nav-link" href="/">\n          Messages\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n')),(0,a.kt)("p",null,"Notice we are applying flex order again with Tailwind Flex ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," classes. With ",(0,a.kt)("inlineCode",{parentName:"p"},"order-last md:order-none")," on the search bar container, we are placing it at the bottom of the vertical stack on smaller screens, and by removing it on ",(0,a.kt)("inlineCode",{parentName:"p"},"md")," and up, we are moving it back to the first position."),(0,a.kt)("p",null,"So, with these changes, we have been able to achieve a good shape for the vertical navbar. The navbar looks almost complete, and it can now strongly flex its muscles back and forth in the horizontal position:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/vertical-menu-min.gif",alt:"tailwind flex"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"We need to now fix things with the brand item, which should be on the left of the other items on larger screens."),(0,a.kt)("h3",{id:"positioning-navbar-logo-with-tailwind-flex"},"Positioning Navbar Logo with Tailwind Flex"),(0,a.kt)("p",null,"Before we work on the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"<nav>"),", let's make sure all elements inside the ",(0,a.kt)("inlineCode",{parentName:"p"},'id= "brand-wrapper"')," are always centered horizontally and vertically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div\n  id= "brand-wrapper"\n  //highlight-start\n  className="nav-wrapper flex justify-start items-center flex-1 self-start"\n  //highlight-end\n>\n  <a className="brand" href="/">\n    <img src={TailzupLogo} width={180} height={62} alt="tailzup-logo" />\n  </a>\n</div>\n')),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-1")," class. It is related to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"nav")," element. We are making the ",(0,a.kt)("inlineCode",{parentName:"p"},"brand-wrapper")," ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," grow to empty spaces all the time."),(0,a.kt)("p",null,"And now, in the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"nav")," element, for screens larger than ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", let's make the navbar items on the right become horizontal with the brand item on the left:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<nav\n  //highlight-start\n  className="navbar flex flex-col justify-start md:flex-row md:justify-between md:items-center"\n  //highlight-end\n>\n  <div className="nav-wrapper flex justify-start items-center flex-1 self-start">\n    <a className="brand" href="/">\n      <img src={TailzupLogo} width={180} height={62} alt="tailzup-logo" />\n    </a>\n  </div>\n  <div\n    className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}\n  >\n    <div\n      id="items"\n      className="my-2 flex flex-col justify-start items-start md:flex-row md:justify-start md:items-center"\n    >\n      <div className="left mx-2 p-2 order-last md:order-none flex justify-center items-center">\n        <input\n          className="text-input"\n          type="email"\n          placeholder="Find danielle trump or stormy..."\n        />\n        <SearchIcon />\n      </div>\n      <div>\n        <ul\n          id="right"\n          className="flex flex-col md:flex-row md:justify-start md:items-center"\n        >\n          <li className="nav-item md:order-last">\n            <a href="/">\n              <Avatar />\n            </a>\n          </li>\n          <li className="nav-item">\n            <a className="nav-link" href="/">\n              Home\n            </a>\n          </li>\n          <li className="nav-item">\n            <a className="nav-link" href="/">\n              Friends\n            </a>\n          </li>\n          <li className="nav-item">\n            <a className="nav-link" href="/">\n              Messages\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <HamburgerIcon\n    isMobileMenuOpen={isMobileMenuOpen}\n    setIsMobileMenuOpen={setIsMobileMenuOpen}\n  />\n</nav>\n'))),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"flex flex-col justify-start md:flex-row md:justify-between md:items-start")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"nav")," element, we are placing the brand items stacked on top of other items on smaller screens, and then ",(0,a.kt)("inlineCode",{parentName:"p"},"md")," and up, they are horizontally spaced between and centered vertically."),(0,a.kt)("p",null,"So, with this Tailwind Flex power, we have a pretty neat React responsive navbar we can use on any webpage:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-09-11-tailwind-flex/ezgif.com-optimize-min.gif",alt:"tailwind flex"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"And the final ",(0,a.kt)("inlineCode",{parentName:"p"},"<Navbar />")," component looks like this:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Navbar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Navbar.tsx"',title:'"src/components/Navbar.tsx"'},'import React, { useState } from "react";\nimport { Avatar, HamburgerIcon, SearchIcon } from "./icons";\nimport TailzupLogo from "../images/tailzup-logo.png";\n\nconst Navbar = () => {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const isMenuHidden = !isMobileMenuOpen ? "hidden md:block" : "";\n\n  return (\n    <nav className=" navbar flex flex-col justify-start md:flex-row md:justify-between md:items-center">\n      <div\n        id="brand-wrapper"\n        className="nav-wrapper flex flex-nowrap justify-start items-center flex-1 self-start\n"\n      >\n        <a className="brand" href="/">\n          <img src={TailzupLogo} width={180} height={62} alt="tailzup-logo" />\n        </a>\n      </div>\n      <div\n        className={`${isMenuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}\n      >\n        <div\n          id="items"\n          className="my-2 flex flex-col justify-start items-start md:flex-row md:justify-start md:items-center"\n        >\n          <div className="left mx-2 p-2 order-last md:order-none flex justify-center items-center">\n            <input\n              className="text-input"\n              type="email"\n              placeholder="Find all trump or storm his estates..."\n            />\n            <SearchIcon />\n          </div>\n          <div>\n            <ul\n              id="right"\n              className="flex flex-col md:flex-row md:justify-start md:items-center"\n            >\n              <li className="nav-item md:order-last">\n                <a href="/">\n                  <Avatar />\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Home\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Friends\n                </a>\n              </li>\n              <li className="nav-item">\n                <a className="nav-link" href="/">\n                  Messages\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <HamburgerIcon\n        isMobileMenuOpen={isMobileMenuOpen}\n        setIsMobileMenuOpen={setIsMobileMenuOpen}\n      />\n    </nav>\n  );\n};\n\nexport default Navbar;\n'))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this post, we used Tailwind Flex classes to build a collapsible, responsive React navbar. The navbar hides the menu on mobile screens and can be toggled via clicking on a double cheese hamburger button. It hoists up to a horizontal bar after ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),"."),(0,a.kt)("p",null,"We started off with the layout and element sizes already styled with relevant Tailwind utilities and the mobile menu implemented. We then gradually applied intuitive Tailwind Flex classes to determine the flex directions for our target break points with ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-col")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-row"),". We applied placement flex classes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-center"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-start"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"items-center"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"items-start"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"self-start"),", etc., to position flex items to intended places for each breakpoint. We also changed orders of a couple of flex items using ",(0,a.kt)("inlineCode",{parentName:"p"},"order-{n}")," classes. We also used the ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-{n}")," class to grow our logo wrapper to available spaces."))}u.isMDXComponent=!0}}]);