"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||n;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={id:"api",title:"Getting Started",sidebar_position:2},o="API",p={unversionedId:"epic_api/api",id:"epic_api/api",title:"Getting Started",description:"This document describes the handle RESTful web service, using the HTTP application protocol. The API supports the following functions",source:"@site/docs/epic_api/api.md",sourceDirName:"epic_api",slug:"/epic_api/api",permalink:"/docs/epic_api/api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"api",title:"Getting Started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"API - Basic Authentication",permalink:"/docs/epic_api/auth"}},l={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("p",null,"This document describes the handle RESTful web service, using the HTTP application protocol. The API supports the following functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET for getting the data of a selected PID"),(0,i.kt)("li",{parentName:"ul"},"POST for creating a new PID with automatic generation of suffix name."),(0,i.kt)("li",{parentName:"ul"},"PUT for creating/updating a new PID with manual generation of suffix name"),(0,i.kt)("li",{parentName:"ul"},"DELETE for deleting a selected PID")),(0,i.kt)("p",null,"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/auth"},"Authenticate")," with basic authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/generate"},"PID Generation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/get"},"Get a PID"),": retrieve the information of a selected PID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/list"},"List all PID"),": retrieve the list of pids at once."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/search"},"Search"),": search for a PID by using a term."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/create"},"Create a PID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/api-update"},"Update a PID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/delete"},"Delete a PID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/epic_api/api-partial"},"Part Identifiers"),".")))}u.isMDXComponent=!0}}]);