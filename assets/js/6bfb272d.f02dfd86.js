"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58488],{58860:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(37953);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>p});a(37953);var n=a(58860);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",slug:"kubectl-scale",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubectl-scale",source:"@site/blog/2023-12-25-kubectl-scale.md",title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",date:"2023-12-25T00:00:00.000Z",formattedDate:"December 25, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:6.4,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",slug:"kubectl-scale",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Build a Web App in 10 steps in 2024",permalink:"/blog/how-to-build-a-web-app"},nextItem:{title:"The Anatomy of the Web Development in 2024",permalink:"/blog/web-development"},relatedPosts:[{title:"Introduction to Docker Compose",description:"We'll go over the basics of Docker Compose in this article, including what it is, how it works, and how to use it.",permalink:"/blog/docker-compose",formattedDate:"July 31, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.205,date:"2023-07-31T00:00:00.000Z"},{title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",permalink:"/blog/kubernetes-statefulset-vs-deployment",formattedDate:"January 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.095,date:"2024-01-04T00:00:00.000Z"},{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"}],authorPosts:[{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.07,date:"2022-11-13T00:00:00.000Z"},{title:"How to Change Node Version",description:"A comprehensive guide on how to change the node version.",permalink:"/blog/change-node-version",formattedDate:"March 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.11,date:"2024-03-27T00:00:00.000Z"},{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Scaling with kubectl scale",id:"basic-scaling-with-kubectl-scale",level:2},{value:"Syntax and Usage",id:"syntax-and-usage",level:4},{value:"Practical Example",id:"practical-example",level:4},{value:"Advanced Scaling Options in Kubectl",id:"advanced-scaling-options-in-kubectl",level:2},{value:"A. Conditional Scaling",id:"a-conditional-scaling",level:3},{value:"B. Scaling Multiple Resources",id:"b-scaling-multiple-resources",level:4},{value:"Automated Scaling vs. Manual Scaling",id:"automated-scaling-vs-manual-scaling",level:2},{value:"Horizontal Pod Autoscaler (HPA)",id:"horizontal-pod-autoscaler-hpa",level:3},{value:"When to Use Manual Scaling",id:"when-to-use-manual-scaling",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p},d="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(d,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Understanding Kubernetes Workloads")),(0,n.yg)("p",null,"In Kubernetes, we deal with several types of workloads, each serving a unique purpose. Let's dive into what these are and how ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"kubectl scale"))," can be applied to manage them."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Deployments")),(0,n.yg)("p",null,"Imagine Deployments as managers for your application instances. They ensure that a specified number of these instances, known as Pods, are running at any given time. Using ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"kubectl scale")),", you can tell Kubernetes to increase or decrease the number of Pods in a Deployment."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"StatefulSets")),(0,n.yg)("p",null,"StatefulSets are like Deployments but with a memory. They're used when your application needs to remember its state (like a database). You can also scale StatefulSets with ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"kubectl scale")),", adjusting the number of replicas while maintaining their unique identities and storage."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"ReplicaSets")),(0,n.yg)("p",null,"ReplicaSets are the workforce behind Deployments. They make sure the right number of Pod replicas are running. Though usually managed by Deployments, you can directly scale ReplicaSets using ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"kubectl scale"))," if needed."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"DaemonSets")),(0,n.yg)("p",null,"DaemonSets ensure that each node in your Kubernetes cluster runs a copy of a Pod. It's like having a utility software installed on every computer in an office. Scaling DaemonSets is a bit different. Instead of changing the number of Pods, scaling here typically involves adding or removing nodes from the cluster."),(0,n.yg)("p",null,"Understanding these workloads and how to scale them efficiently is crucial in Kubernetes. It ensures your applications have the resources they need when they need them, and also that you're not using more resources than necessary. Whether it's handling peak traffic times or scaling down during quieter periods, ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"kubectl scale"))," gives you the flexibility to manage your application's demands effectively."),(0,n.yg)("h2",{id:"basic-scaling-with-kubectl-scale"},"Basic Scaling with kubectl scale"),(0,n.yg)("p",null,"Managing your Kubernetes resources effectively means needing to adjust their scale to accommodate different loads or requirements. This is where the ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale")," command comes into play, offering a straightforward way to change the number of replicas of a resource."),(0,n.yg)("h4",{id:"syntax-and-usage"},"Syntax and Usage"),(0,n.yg)("p",null,"The basic syntax for scaling a resource is:\n",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale --replicas=<number> <resource-type>/<resource-name>")),(0,n.yg)("p",null,"This command allows you to specify the desired number of replicas for a particular resource, such as a Deployment or ReplicaSet."),(0,n.yg)("h4",{id:"practical-example"},"Practical Example"),(0,n.yg)("p",null,"Consider you have a Kubernetes deployment named ",(0,n.yg)("inlineCode",{parentName:"p"},"printing")," that has currently just one replica. We will use the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get deployment <deploymentName>"),' to currently serve replicas. Notice the value in the "available" column, which shows the current replica count available to serve. That is currently 1.'),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image1.PNG",alt:"kubectl scale"})),(0,n.yg)("p",null,"Now you want to scale it to 3 replicas. Here's how you would do it:\n",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale --replicas=3 deployment/printing")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image2.PNG",alt:"kubectl scale"})),(0,n.yg)("p",null,"As you can see from above srcreenshot, this command has increased the number of replicas for ",(0,n.yg)("inlineCode",{parentName:"p"},"printing")," deployment to 3."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Expert tips:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Do not confuse replica with pod; they are both different. Replica is the desired number of running pods whereas the pods are the actual running instances of an application. A deployment with 3 replicas might have 2 running pods if one pod is being unhealthy."),(0,n.yg)("li",{parentName:"ul"},"Use the ",(0,n.yg)("inlineCode",{parentName:"li"},"--dry-run")," flag to simulate the scaling command without actually applying the changes. It is helpful when you want to confirm the command syntax, your access rights, the name of the deployment, etc.")),(0,n.yg)("h2",{id:"advanced-scaling-options-in-kubectl"},"Advanced Scaling Options in Kubectl"),(0,n.yg)("h3",{id:"a-conditional-scaling"},"A. Conditional Scaling"),(0,n.yg)("p",null,"Conditional scaling in Kubectl allows you to scale resources based on current states. It's like saying, \"If there are 'X' replicas now, change it to 'Y' replicas.\""),(0,n.yg)("p",null,"Use the command: ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale --current-replicas=<number> --replicas=<new-number> <resource>"),"."),(0,n.yg)("p",null,"Note that the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," here can refer to any of the deployment types mentioned workloads above, e.g., deployment, replica sets, stateful sets, etc."),(0,n.yg)("p",null,'Let\'s try this command. In our example, we will use the "deployment" resource.'),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale --current-replicas=3 --replicas=5 deployment/printing")," So this command should increase the replicas to 5, right?"),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image3.PNG",alt:"kubectl scale"})),(0,n.yg)("p",null,"What do you think what happened? The scaling operation failed. And this is the difference between this command (conditional scaling) and the simple non-conditional scaling command we discussed above. The conditional scaling command verifies whether you have specified the current replica count correctly or not. If incorrect, it will not scale. This is contrary to the simple non-conditional scaling command that will scale the replicas to the desired number regardless of the current replica count. Let's correct the command and try again. As you can see below, it worked fine this time."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image4.PNG",alt:"kubectl scale"})),(0,n.yg)("h4",{id:"b-scaling-multiple-resources"},"B. Scaling Multiple Resources"),(0,n.yg)("p",null,"Sometimes, you would like to scale multiple resources simultaneously, e.g., scaling two deployments at the same time, like one for API and one for the front end."),(0,n.yg)("p",null,"You can use the command: ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl scale --replicas=<number> deployment/<deployment1> deployment/<deployment2>"),". In our example we have two deployments named printing. You can use the command ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get deployments")," to confirm the name of your deployments. Let's scale both of these in the same command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"kubectl scale --replicas=3 deployment/hello-app deployment/printing\n")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image5.PNG",alt:"kubectl scale"})),"The above screenshots show that both deployments were scaled successfully.",(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Expert tips:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You can scale more than two deployments in the same command; just use the same format as above."),(0,n.yg)("li",{parentName:"ul"},"If you specify two deployments to scale, but the name of one of the deployments is incorrect, the deployment with the correct name will scale successfully, but the other one with the incorrect name will fail, and you will see its error, too. See the screenshot below for an example.")),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image6.PNG",alt:"kubectl scale partial failure"})),(0,n.yg)("h2",{id:"automated-scaling-vs-manual-scaling"},"Automated Scaling vs. Manual Scaling"),(0,n.yg)("h3",{id:"horizontal-pod-autoscaler-hpa"},"Horizontal Pod Autoscaler (HPA)"),(0,n.yg)("p",null,"Automated scaling in Kubernetes is primarily handled by the Horizontal Pod Autoscaler (HPA). HPA automatically adjusts the number of pods in a deployment, replica set, or stateful set based on observed CPU utilization or other select metrics. It's like having a smart assistant that keeps an eye on your application's load and adjusts resources accordingly without any manual intervention."),(0,n.yg)("p",null,"To set up HPA, you can use below command:\n",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl autoscale deployment [deployment-name] --min=[min-pods] --max=[max-pods] --cpu-percent=[target-percentage]")),(0,n.yg)("p",null,"This command tells Kubernetes to keep the number of pods between the minimum and maximum limits, scaling up or down based on CPU usage. Let's look at the example below:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"kubectl autoscale deployment hello-app --min=2 --max=5 --cpu-percent=80")),(0,n.yg)("p",null,"In the above example, 80% is the target average CPU utilization across all pods in the deployment. When the average CPU utilization exceeds this threshold, Kubernetes will add more pods (not more than 5 which is max). When the average CPU utilization falls below this threshold, Kubernetes will remove pods (not less than 2, which is the minimum)."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Expert tip:")," The scope of this article's scaling options is limited to horizontal scaling. Kubernetes also allows to do vertical scaling. Just like HPA (horizontal pod autoscaler), there is VPA (vertical pod autoscaler) too. Depending on your need, you can utilize vertical pod autoscaler too (a topic for some other day perhaps)."),(0,n.yg)("h3",{id:"when-to-use-manual-scaling"},"When to Use Manual Scaling"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Specific Event-Driven Scenarios: If you know there will be a spike in traffic (like a sale or an event), you can proactively scale up."),(0,n.yg)("li",{parentName:"ul"},"Testing and Development: In development environments, you might need to test the behavior of your application under different loads, e.g., load testing, etc.")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"This article provided a comprehensive overview of kubectl scale, a crucial tool for managing Kubernetes workloads. We explored different scenarios to scale your Kubernetes replica/nodes. We also explored advanced scaling options like conditional scaling, scaling multiple resources simultaneously, and automated scaling using Horizontal Pod Autoscalers (HPA). Finally, we discussed the pros and cons of manual scaling versus automated scaling and potential scenarios where each might be beneficial."))}g.isMDXComponent=!0}}]);