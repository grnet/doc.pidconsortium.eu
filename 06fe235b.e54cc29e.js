(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(m,u(u({ref:t},l),{},{components:n})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(117)),c={title:"Manual Genaration of Suffix",parent:"resultgenerate",order:1},u={unversionedId:"examples/generateres",id:"examples/generateres",isDocsHomePage:!1,title:"Manual Genaration of Suffix",description:"The Result",source:"@site/docs/examples/generateres.md",slug:"/examples/generateres",permalink:"/doc.pidconsortium.eu/docs/examples/generateres",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/generateres.md",version:"current"},i=[{value:"Manual generation of SUFFIX",id:"manual-generation-of-suffix",children:[]}],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"the-result"},"The Result"),Object(o.b)("p",null,"The result of the automatic generation"),Object(o.b)("span",{class:"txtcenter"},Object(o.b)("strong",null,"GRNET-0000-0000-000A-5-TEST ")),Object(o.b)("h2",{id:"manual-generation-of-suffix"},"Manual generation of SUFFIX"),Object(o.b)("p",null,"Its up to the user to decide the names of the PIDs. You may use"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a number"),Object(o.b)("li",{parentName:"ul"},"a string"),Object(o.b)("li",{parentName:"ul"},"a UUID "),Object(o.b)("li",{parentName:"ul"},"a pattern based on the community context")),Object(o.b)("p",null,"In all examples in this manual we use a UUID generator."))}s.isMDXComponent=!0}}]);