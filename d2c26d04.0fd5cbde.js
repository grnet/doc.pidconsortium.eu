(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(123)),i={id:"handle",title:"Introduction"},c={unversionedId:"handle",id:"handle",isDocsHomePage:!1,title:"Introduction",description:"The Handle server HTTP interface has in the past responded to requests in the native binary Handle",source:"@site/docs/handle.md",slug:"/handle",permalink:"/doc.pidconsortium.eu/docs/handle",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/handle.md",version:"current",sidebar:"someSidebar",previous:{title:"API - Part Identifiers",permalink:"/doc.pidconsortium.eu/docs/api-partial"},next:{title:"Resources",permalink:"/doc.pidconsortium.eu/docs/api-calls"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Handle server HTTP interface has in the past responded to requests in the native binary Handle\nprotocol of RFC 3652. As of version 8 requests can also be made using a REST API, with requests and\nresponses expressed via JSON encoding. This API may be useful for server administration or for\ndeveloping applications using Handle, especially those not developed in Java and thus unable to use the\nClient SDK."),Object(a.b)("p",null,'By default the Handle server HTTP interface will respond to requests using HTTP or HTTPS, on the same\nport. This is called "port unification" and was preferred in order to allow legacy servers to upgrade to v8\nand receive the full benefits of the REST API without requiring a new port to be made available.\nAdministrative operations using the REST API require the use of HTTPS.'),Object(a.b)("p",null,'Handle servers generally use self-signed certificates which can not be validated using the typical browser\ncertificate validation. See "Authenticating the Server" in this chapter for one way to authenticate that\nthe correct server has been reached.'))}u.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);