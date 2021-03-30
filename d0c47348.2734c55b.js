(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{117:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),i=(t(0),t(125)),c={id:"cross-origin",title:"Cross-Origin Resource Sharing",slug:"cross-origin"},s={unversionedId:"cross-origin",id:"cross-origin",isDocsHomePage:!1,title:"Cross-Origin Resource Sharing",description:"All resources support Cross-Origin Resource Sharing (CORS).",source:"@site/docs/cross-origin.md",slug:"/cross-origin",permalink:"/docs/cross-origin",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/cross-origin.md",version:"current",sidebar:"someSidebar",previous:{title:"Requests",permalink:"/docs/requests"},next:{title:"Responses",permalink:"/docs/responses"}},a=[],u={rightToc:a};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All resources support Cross-Origin Resource Sharing (CORS).\nNote that Access-Control-Allow-Credentials: is not set true, to prevent CSRF attacks.\nCross-origin applications can send the Authorization: Handle header which is constructed by the application rather than the browser."))}p.isMDXComponent=!0},125:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return g}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,g=l["".concat(c,".").concat(d)]||l[d]||f[d]||i;return t?o.a.createElement(g,s(s({ref:r},u),{},{components:t})):o.a.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);