(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(123)),o={id:"api-update",title:"Update a PID",kind:"code"},c={unversionedId:"api-update",id:"api-update",isDocsHomePage:!1,title:"Update a PID",description:"API - Update an existing PID",source:"@site/docs/api-update.md",slug:"/api-update",permalink:"/doc.pidconsortium.eu/docs/api-update",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/api-update.md",version:"current",sidebar:"someSidebar",previous:{title:"Create a PID",permalink:"/doc.pidconsortium.eu/docs/create"},next:{title:"Delete a PID",permalink:"/doc.pidconsortium.eu/docs/delete"}},p=[{value:"Update a PID - Description",id:"update-a-pid---description",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"api---update-an-existing-pid"},"API - Update an existing PID"),Object(i.b)("p",null,"You may want to update the values of an existing PID. This action is similar to the Create action. "),Object(i.b)("p",null,"The basic parameters are the same as in CREATE a PID"),Object(i.b)("h2",{id:"update-a-pid---description"},"Update a PID - Description"),Object(i.b)("p",null,"You may want to update the values of an existing PID. This action is similar to the Create action. "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null}))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Description")),Object(i.b)("td",{parentName:"tr",align:null},"Update an existing PID")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"URL")),Object(i.b)("td",{parentName:"tr",align:null},"The  API Service URL with the PID")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"HTTP Method")),Object(i.b)("td",{parentName:"tr",align:null},"PUT")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Security")),Object(i.b)("td",{parentName:"tr",align:null},"Requires ownership of the PID. So you must authenticate before actually updating the PID")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"You may use the  create examples"))}l.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),s=r,m=d["".concat(o,".").concat(s)]||d[s]||b[s]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);