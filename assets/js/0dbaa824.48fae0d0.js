"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={id:"responses",title:"Responses",slug:"responses",sidebar_position:5},o=void 0,i={unversionedId:"handle_api/responses",id:"handle_api/responses",title:"Responses",description:"All response entities are JSON.",source:"@site/docs/handle_api/responses.md",sourceDirName:"handle_api",slug:"/handle_api/responses",permalink:"/docs/handle_api/responses",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"responses",title:"Responses",slug:"responses",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cross-Origin Resource Sharing",permalink:"/docs/handle_api/cross-origin"},next:{title:"Methods",permalink:"/docs/handle_api/methods"}},s={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All response entities are JSON."),(0,a.kt)("p",null,"Response statuses:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status code"),(0,a.kt)("th",{parentName:"tr",align:null},"Status Message"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,a.kt)("td",{parentName:"tr",align:null},"The operation succeeded.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,a.kt)("td",{parentName:"tr",align:null},"The operation succeeded and resulted in a new handle or new handle values being created.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,a.kt)("td",{parentName:"tr",align:null},"Returned for a incorrectly formatted or otherwise invalid request. ",(0,a.kt)("br",null)," Also returned for a request for a handle for which a server is not responsible.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,a.kt)("td",{parentName:"tr",align:null},"The operation requires an authorized caller, but the call in not authenticated.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,a.kt)("td",{parentName:"tr",align:null},"The caller is authenticated but not authorized to perform the operation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,a.kt)("td",{parentName:"tr",align:null},"The handle in question does not exist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"409 Conflict"),(0,a.kt)("td",{parentName:"tr",align:null},"A request to PUT a handle or handle values specified not to overwrite, but the handle or handle ",(0,a.kt)("br",null)," values already exist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500 Internal Server Error"),(0,a.kt)("td",{parentName:"tr",align:null},"Something unexpected has gone wrong on the server.")))),(0,a.kt)("p",null,'Many response entities include a "responseCode" property which is the Handle protocol response code.\nSome common response codes and the corresponding HTTP status codes are:'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status code"),(0,a.kt)("th",{parentName:"tr",align:null},"Status Message"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Success (200 OK or 201 Created)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"An unexpected error on the server (500 Internal Server Error)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"Handle not found (404 Not Found)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"101"),(0,a.kt)("td",{parentName:"tr",align:null},"Handle already exists (409 Conflict)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"102"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid handle (400 Bad Request)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"Values not found (in resolution, 200 OK; otherwise 400 Bad Request)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"201"),(0,a.kt)("td",{parentName:"tr",align:null},"Value already exists (409 Conflict)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"202"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid value (400 Bad Request)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"301"),(0,a.kt)("td",{parentName:"tr",align:null},"Server not responsible for handle (400 Bad Request)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"402"),(0,a.kt)("td",{parentName:"tr",align:null},"Authentication needed (401 Unauthorized)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"40x"),(0,a.kt)("td",{parentName:"tr",align:null},"Other authentication errors (403 Forbidden)")))),(0,a.kt)("p",null,"The bulk of request and response entities are JSON representations of handle values.\nThe syntax for this is described at the end of this document."))}u.isMDXComponent=!0}}]);