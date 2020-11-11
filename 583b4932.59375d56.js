(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,s(s({ref:t},p),{},{components:n})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(117)),i={title:"Search Results",parent:"resultget",order:1},s={unversionedId:"examples/getres",id:"examples/getres",isDocsHomePage:!1,title:"Search Results",description:"The response:",source:"@site/docs/examples/getres.md",slug:"/examples/getres",permalink:"/doc.pidconsortium.eu/docs/examples/getres",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/getres.md",version:"current"},c=[{value:"The response:",id:"the-response",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"the-response"},"The response:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HTTP/1.1 200 OK: (Success)"),Object(o.b)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong"),Object(o.b)("li",{parentName:"ul"},"HTTP/1.1 404 NOT found: The url doesn't exist")),Object(o.b)("p",null,"After a successful request, the response consists of an array of the PID and an array of all the information that apply to it. The response provides the idx, the type, and all the data described in the data model. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'Get all data:  [\n{\n"idx":1,\n"type":"URL",\n"parsed_data":"http://www.grnet.gr/",\n"data":"aHR0cDovL3d3dy5ncm5ldC5nci8=",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n{\n"idx":2,\n"type":"URL",\n"parsed_data":"https://www.grnet.gr/en/node/64",\n"data":"aHR0cHM6Ly93d3cuZ3JuZXQuZ3IvZW4vbm9kZS82NA==",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n{\n"idx":3,\n"type":"INST",\n"parsed_data":"CLARIN-EL",\n"data":"Q0xBUklOLUVM",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n\n{\n"idx":100,\n"type":"HS_ADMIN",\n"parsed_data":{\n"adminId":"0.NA/11239",\n"adminIdIndex":300,\n"perms":{\n"add_handle":true,\n"delete_handle":true,\n"add_naming_auth":false,\n"delete_naming_auth":false,\n"modify_value":true,\n"remove_value":true,\n"add_value":true,\n"read_value":true,\n"modify_admin":true,\n"remove_admin":true,\n"add_admin":true,\n"list_handles":false\n}\n},\n"data":"B/MAAAAKMC5OQS8xMTIzOQAAASw=",\n"timestamp":"2013-11-15T14:25:58Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n}\n]\n')))}l.isMDXComponent=!0}}]);