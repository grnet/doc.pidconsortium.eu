(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(b,i(i({ref:r},p),{},{components:t})):o.a.createElement(b,i({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(6),a=(t(0),t(123)),c={id:"api-calls",title:"Resources",slug:"api-calls"},i={unversionedId:"api-calls",id:"api-calls",isDocsHomePage:!1,title:"Resources",description:"The primary resource in this api is the handle record for a handle:",source:"@site/docs/api-calls.md",slug:"/api-calls",permalink:"/doc.pidconsortium.eu/docs/api-calls",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/api-calls.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/doc.pidconsortium.eu/docs/handle"},next:{title:"Requests",permalink:"/doc.pidconsortium.eu/docs/requests"}},l=[],p={rightToc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The primary resource in this api is the handle record for a handle:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/api/handles/{handle}\n")),Object(a.b)("p",null,"The handle record for handle {handle}."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/api/handles/{handle}?index={index}\n")),Object(a.b)("p",null,"URI query parameters can be used to specify that the resource in question is restricted to one or more\nof the handle values from the handle record. This is detailed in the method documentation."),Object(a.b)("p",null,"Another resource is the collection of handles:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/api/handles?prefix={prefix}\n")),Object(a.b)("p",null,"The list of handles available at this server under prefix {prefix}."),Object(a.b)("p",null,"Another resource is the collection of homed prefixes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"/api/prefixes\n")),Object(a.b)("p",null,"The list of prefixes homed at this server."))}s.isMDXComponent=!0}}]);