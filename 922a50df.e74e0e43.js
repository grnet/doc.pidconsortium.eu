(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),l=(n(0),n(123)),o={id:"responses",title:"Responses",slug:"responses"},b={unversionedId:"responses",id:"responses",isDocsHomePage:!1,title:"Responses",description:"All response entities are JSON.",source:"@site/docs/responses.md",slug:"/responses",permalink:"/doc.pidconsortium.eu/docs/responses",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/responses.md",version:"current",sidebar:"someSidebar",previous:{title:"Cross-Origin Resource Sharing",permalink:"/doc.pidconsortium.eu/docs/cross-origin"},next:{title:"Methods",permalink:"/doc.pidconsortium.eu/docs/methods"}},c=[],i={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"All response entities are JSON."),Object(l.b)("p",null,"Response statuses:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Status code"),Object(l.b)("th",{parentName:"tr",align:null},"Status Message"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"200 OK"),Object(l.b)("td",{parentName:"tr",align:null},"The operation succeeded.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"201 Created"),Object(l.b)("td",{parentName:"tr",align:null},"The operation succeeded and resulted in a new handle or new handle values being created.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"400 Bad Request"),Object(l.b)("td",{parentName:"tr",align:null},"Returned for a incorrectly formatted or otherwise invalid request. ",Object(l.b)("br",null)," Also returned for a request for a handle for which a server is not responsible.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"401 Unauthorized"),Object(l.b)("td",{parentName:"tr",align:null},"The operation requires an authorized caller, but the call in not authenticated.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"403 Forbidden"),Object(l.b)("td",{parentName:"tr",align:null},"The caller is authenticated but not authorized to perform the operation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"404 Not Found"),Object(l.b)("td",{parentName:"tr",align:null},"The handle in question does not exist.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"409 Conflict"),Object(l.b)("td",{parentName:"tr",align:null},"A request to PUT a handle or handle values specified not to overwrite, but the handle or handle ",Object(l.b)("br",null)," values already exist.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"500 Internal Server Error"),Object(l.b)("td",{parentName:"tr",align:null},"Something unexpected has gone wrong on the server.")))),Object(l.b)("p",null,'Many response entities include a "responseCode" property which is the Handle protocol response code.\nSome common response codes and the corresponding HTTP status codes are:'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Status code"),Object(l.b)("th",{parentName:"tr",align:null},"Status Message"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"Success (200 OK or 201 Created)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"An unexpected error on the server (500 Internal Server Error)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"100"),Object(l.b)("td",{parentName:"tr",align:null},"Handle not found (404 Not Found)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"101"),Object(l.b)("td",{parentName:"tr",align:null},"Handle already exists (409 Conflict)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"102"),Object(l.b)("td",{parentName:"tr",align:null},"Invalid handle (400 Bad Request)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"200"),Object(l.b)("td",{parentName:"tr",align:null},"Values not found (in resolution, 200 OK; otherwise 400 Bad Request)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"201"),Object(l.b)("td",{parentName:"tr",align:null},"Value already exists (409 Conflict)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"202"),Object(l.b)("td",{parentName:"tr",align:null},"Invalid value (400 Bad Request)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"301"),Object(l.b)("td",{parentName:"tr",align:null},"Server not responsible for handle (400 Bad Request)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"402"),Object(l.b)("td",{parentName:"tr",align:null},"Authentication needed (401 Unauthorized)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"40x"),Object(l.b)("td",{parentName:"tr",align:null},"Other authentication errors (403 Forbidden)")))),Object(l.b)("p",null,"The bulk of request and response entities are JSON representations of handle values.\nThe syntax for this is described at the end of this document."))}d.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),d=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(o,".").concat(p)]||s[p]||u[p]||l;return n?a.a.createElement(m,b(b({ref:t},i),{},{components:n})):a.a.createElement(m,b({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);