(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(d,u(u({ref:r},s),{},{components:t})):o.a.createElement(d,u({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(117)),c={title:"Auth Results",parent:"resultauth",order:1},u={unversionedId:"examples/authres",id:"examples/authres",isDocsHomePage:!1,title:"Auth Results",description:"The response:",source:"@site/docs/examples/authres.md",slug:"/examples/authres",permalink:"/doc.pidconsortium.eu/docs/examples/authres",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/authres.md",version:"current"},i=[{value:"The response:",id:"the-response",children:[]}],s={rightToc:i};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"the-response"},"The response:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"HTTP/1.1 200 OK: (Success)"),Object(a.b)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong")))}p.isMDXComponent=!0}}]);