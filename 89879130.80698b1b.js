(window.webpackJsonp=window.webpackJsonp||[]).push([[37,16,27,45,48,60],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return g}));var r=n(2),a=n(6),s=(n(0),n(123)),i=n(76),o=n(77),c=n(70),l=n(78),u=n(67),d=n(127),p=n(128),b={id:"api-create",title:"Create a PID",kind:"code",slug:"create",result:"resultcreate"},m={unversionedId:"api-create",id:"api-create",isDocsHomePage:!1,title:"Create a PID",description:"API - Create a new PID",source:"@site/docs/api-create.md",slug:"/create",permalink:"/doc.pidconsortium.eu/docs/create",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/api-create.md",version:"current",sidebar:"someSidebar",previous:{title:"API - Search a PID",permalink:"/doc.pidconsortium.eu/docs/search"},next:{title:"Update a PID",permalink:"/doc.pidconsortium.eu/docs/api-update"}},h=[{value:"Create a new PID - Description",id:"create-a-new-pid---description",children:[]},{value:"Example",id:"example",children:[]}],f={rightToc:h};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"api---create-a-new-pid"},"API - Create a new PID"),Object(s.b)("p",null,"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON."),Object(s.b)("h2",{id:"create-a-new-pid---description"},"Create a new PID - Description"),Object(s.b)("p",null,"You want to create a new PID. There are two ways to create - generate a new PID "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"automatic generation of the suffix name via the POST method"),Object(s.b)("li",{parentName:"ul"},"manual generation of the suffix name via the PUT method")),Object(s.b)("p",null,"HTTP PUT can be used for both resource creation and resource updates .\nSo if you want to be sure that you are going to create a new one you must first check if it exists. If you don't check the existence of a PID based on the suffix it is possible that you will update the data of an existing one. "),Object(s.b)("p",null,"There is a way to make your HTTP PUT request \u201cconditional\u201d in the sense that it will only be executed if the URL doesn\u2019t exist yet (which constitutes a create action), or that it does exist yet (which constitutes an update ). "),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"In order to make the PUT request conditional use HTTP\u2019s If-Match: ",Object(s.b)("em",{parentName:"p"}," or If-None-Match:")," headers."))),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null}))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"Description")),Object(s.b)("td",{parentName:"tr",align:null},"Create a new PID")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"URL")),Object(s.b)("td",{parentName:"tr",align:null},"The API Service URL")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"HTTP Method")),Object(s.b)("td",{parentName:"tr",align:null},"PUT for manual generation of suffix name")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"HTTP Method")),Object(s.b)("td",{parentName:"tr",align:null},"POST for automatic generation of suffix name")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"Security")),Object(s.b)("td",{parentName:"tr",align:null},"Requires ownership of the PID. So you must authenticate before actually creating the PID")))),Object(s.b)("p",null,"The data you must send in order to create are described in the following table"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Default value"),Object(s.b)("th",{parentName:"tr",align:null},"Example value"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"suffix"),Object(s.b)("td",{parentName:"tr",align:null},"The local name of the handle in the system"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null},"a) use a UUID generator via ",Object(s.b)("strong",{parentName:"td"},"PUT method"),", b) automatic generation via ",Object(s.b)("strong",{parentName:"td"},"POST method"))))),Object(s.b)("p",null,"The data you must send as json representation are described in the following table"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Default value"),Object(s.b)("th",{parentName:"tr",align:null},"Example value"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"type"),Object(s.b)("td",{parentName:"tr",align:null},"Each handle has a set of values assigned to it.  These handle values use a common data structure for its data. The data type defines the syntax and semantics of the data in its data field."),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null},"URL")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"parsed_data"),Object(s.b)("td",{parentName:"tr",align:null},"A set of data that describes the resource identified by the handle. The syntax and semantics of parsed data are identified by the field."),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"http://www.grnet.gr"},"http://www.grnet.gr"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"timestamp"),Object(s.b)("td",{parentName:"tr",align:null},"The timestamp records the last time this Handle Value was updated at the server. The field contains elapsed time since 00:00:00 UTC, January 1970 in milliseconds."),Object(s.b)("td",{parentName:"tr",align:null},"NO"),Object(s.b)("td",{parentName:"tr",align:null},"timestamp"),Object(s.b)("td",{parentName:"tr",align:null},"2013-11-26T11:58:14Z")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"ttl_type"),Object(s.b)("td",{parentName:"tr",align:null},"the TTL type indicates whether the TTL value is absolute or relative.  The absolute TTL value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970.  A relative TTL specifies the time to live in terms of the number of seconds elapsed since the value was obtained by the client from any handle server."),Object(s.b)("td",{parentName:"tr",align:null},"NO"),Object(s.b)("td",{parentName:"tr",align:null},"integer 0=relative, 1=absolute by default 0"),Object(s.b)("td",{parentName:"tr",align:null},"0")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"ttl"),Object(s.b)("td",{parentName:"tr",align:null},"a number that specifies the Time-To- Live of the value record. A positive value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970. A negative value specifies the time to live in terms of the number of seconds elapsed since the value was obtained. (if ttl_type is absolute, then this indicates the date/time of expiration in seconds since Jan 1 0:00:00 1970.)"),Object(s.b)("td",{parentName:"tr",align:null},"NO"),Object(s.b)("td",{parentName:"tr",align:null},"integer seconds"),Object(s.b)("td",{parentName:"tr",align:null},"86400")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"refs"),Object(s.b)("td",{parentName:"tr",align:null},"a list of references to other Handle Values"),Object(s.b)("td",{parentName:"tr",align:null},"No"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null},"[{'idx':'1','handle':'11239/12'}]"," where idx is the value for index field of handle data, and handle is the referenced handle value")))),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"In this example we are going to create a new handle via the PUT method  in the following url ",Object(s.b)("a",{parentName:"p",href:"https://epic.grnet.gr/handles/11239/UUIDGENERATE"},"https://epic.grnet.gr/handles/11239/UUIDGENERATE"),". There is an example via POST method at ",Object(s.b)("a",{parentName:"p",href:"/doc.pidconsortium.eu/docs/generate"},"PID generation page")),Object(s.b)(d.a,{defaultValue:"curl",values:[{label:"Curl",value:"curl"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Perl",value:"perl"}],mdxType:"Tabs"},Object(s.b)(p.a,{value:"curl",mdxType:"TabItem"},Object(s.b)(i.default,{mdxType:"Curl"})),Object(s.b)(p.a,{value:"python",mdxType:"TabItem"},Object(s.b)(l.default,{mdxType:"Python"})),Object(s.b)(p.a,{value:"php",mdxType:"TabItem"},Object(s.b)(c.default,{mdxType:"PHP"})),Object(s.b)(p.a,{value:"perl",mdxType:"TabItem"},Object(s.b)(o.default,{mdxType:"Perl"}))),Object(s.b)(u.default,{mdxType:"Results"}))}g.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||s;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},124:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},125:function(e,t,n){"use strict";var r=n(0),a=n(126);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},127:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(125),i=n(124),o=n(47),c=n.n(o),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(s.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,g=Object(r.useState)(o),T=g[0],O=g[1],$=Object(r.useState)(!1),y=$[0],_=$[1];if(null!=p){var j=h[p];null!=j&&j!==T&&d.some((function(e){return e.value===j}))&&O(j)}var N=function(e){O(e),null!=p&&f(p,e)},v=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||_(!0)},w=function(){_(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",w),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",w)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":T===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":T===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e),P(e)},onFocus:function(){return N(t)},onClick:function(){N(t),_(!1)},onPointerDown:function(){return _(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===T}))[0]))}},128:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(123)),i={title:"Search Results",parent:"resultcreate",order:1},o={unversionedId:"examples/createres",id:"examples/createres",isDocsHomePage:!1,title:"Search Results",description:"The response:",source:"@site/docs/examples/createres.md",slug:"/examples/createres",permalink:"/doc.pidconsortium.eu/docs/examples/createres",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/createres.md",version:"current"},c=[{value:"The response:",id:"the-response",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"the-response"},"The response:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 201 Created: (Success) "),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 204 No-Content: The local name already exists , and instead of creating a new one you\u2019ve just updated the values of an existing one.  "),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong"),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 405 Method Not Allowed: ",Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},"You are trying to create a new handle in the main url of the server either (",Object(s.b)("a",{parentName:"li",href:"https://epic.grnet.gr/handles/11239/"},"https://epic.grnet.gr/handles/11239/"),") or (",Object(s.b)("a",{parentName:"li",href:"https://epic.grnet.gr/handles"},"https://epic.grnet.gr/handles"),"). You have not specified a unique name for your handle. (or)"),Object(s.b)("li",{parentName:"ol"},"You are trying to create a new handle with manual generation of suffix name via POST instead of PUT. POST supports automatic generation of suffix name."))),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 412 Precondition failed: You have used the precondition (HTTP\u2019s If-Match: ",Object(s.b)("em",{parentName:"li"}," or If-None-Match:"),") in the request-header fields. The precondition given, evaluated to false when it was tested on the server and prevented the requested method from being applied."),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 415 Unsupported Media Type: You haven't specify the correct headers for your request. The service supports Json representation so you must define the content-type of the request.")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'HTTP/1.1 201 Created\nDate: Mon, 25 Nov 2013 10:18:18 GMT\nContent-Length: 2211\nLocation: https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5\nETag: "1B2M2Y8AsgTpgAmY7PhCfg"\nLast-Modified: Thu, 01 Jan 1970 00:00:00 GMT\n')))}u.isMDXComponent=!0},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(123)),i={title:"PHP",parent:"create",order:3},o={unversionedId:"examples/createphp",id:"examples/createphp",isDocsHomePage:!1,title:"PHP",description:"The request in php",source:"@site/docs/examples/createphp.md",slug:"/examples/createphp",permalink:"/doc.pidconsortium.eu/docs/examples/createphp",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/createphp.md",version:"current"},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in php "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},'$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";\n$PIDSERVICE_USER="YOURUSERNAME";\n$PIDSERVICE_PASSWD="YOURPASSWORD";\n$UUID = gen_uuid(); //a function to generate a uuid\n$URL_TO_OPEN = $PIDSERVICE_URL.$UUID;\n$data = array(array(\'type\' => \'URL\',\'parsed_data\'=>\'http://www.grnet.gr/\'));\n$update_json=json_encode($data);\n\n// Get cURL resource\n$ch = curl_init();\n\n//Set the headers to complete the request\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array(\'Content-Type: application/json\',\'Content-Length: \' . strlen($update_json)));\n\n//set the PUT Action\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");\n\n//SET the postfield data\ncurl_setopt($ch, CURLOPT_POSTFIELDS,$update_json);\n\n// Should cURL return or print out the data? (true = return, false = print)\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n\n//Set the url with the new name of the PID \ncurl_setopt($ch, CURLOPT_URL, $URL_TO_OPEN);\n\n// Set the authentication options\ncurl_setopt($ch, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);\ncurl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);\n\n$output = curl_exec($ch);\n$info = curl_getinfo($ch);\n\n// Download the given URL, and return output \n\nif( $info[\'http_code\']==200) echo "HANDLE EXISTS<br/>";\nif( $info[\'http_code\']==201) echo "PID CREATED<br/>";\nif( $info[\'http_code\']==204) echo "PID UPDATED<br/>";\nif( $info[\'http_code\']==404) echo "HANDLE DOESNT EXIST<br/>";\n\ncurl_close($ch);\n\nfunction gen_uuid() {\n    return sprintf( \'%04x%04x-%04x-%04x-%04x-%04x%04x%04x\',\n            // 32 bits for "time_low"\n            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),\n\n            // 16 bits for "time_mid"\n            mt_rand( 0, 0xffff ),\n\n            // 16 bits for "time_hi_and_version",\n            // four most significant bits holds version number 4\n            mt_rand( 0, 0x0fff ) | 0x4000,\n\n            // 16 bits, 8 bits for "clk_seq_hi_res",\n            // 8 bits for "clk_seq_low",\n            // two most significant bits holds zero and one for variant DCE1.1\n            mt_rand( 0, 0x3fff ) | 0x8000,\n\n            // 48 bits for "node"\n            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )\n    );\n}\n')))}u.isMDXComponent=!0},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(123)),i={title:"Curl",parent:"create",order:1},o={unversionedId:"examples/createcurl",id:"examples/createcurl",isDocsHomePage:!1,title:"Curl",description:"The request in curl",source:"@site/docs/examples/createcurl.md",slug:"/examples/createcurl",permalink:"/doc.pidconsortium.eu/docs/examples/createcurl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/createcurl.md",version:"current"},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in curl"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash    \n\nSUFFIX=`uuidgen`\ncurl -v -u "YOURUSERNAME:YOURPASSWORD" -H "Accept:application/json" -H "Content-Type:application/json" -X PUT --data \'[{"type":"URL","parsed_data":"http://www.grnet.gr/"}]\' https://epic.grnet.gr/api/v2/handles/11239/$SUFFIX \n')))}u.isMDXComponent=!0},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(123)),i={title:"Perl",parent:"create",order:4},o={unversionedId:"examples/createperl",id:"examples/createperl",isDocsHomePage:!1,title:"Perl",description:"The request in perl",source:"@site/docs/examples/createperl.md",slug:"/examples/createperl",permalink:"/doc.pidconsortium.eu/docs/examples/createperl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/createperl.md",version:"current"},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in perl"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-perl"},"#!/usr/bin/perl\n\nuse strict;\nuse warnings;\nuse Data::Dumper;\nuse Getopt::Long;\nuse Switch 'Perl5', 'Perl6';\nuse JSON;\nuse WWW::Curl::Easy;\n\nmy $fullargv0 = $0;\nmy ($argv0) = $fullargv0 =~ /([^\\/\\\\]+)$/;\n\nmy %settings = (\n'debug' => 'False',\n'handle' => {\n    'action' =>'put',\n    'credentials'   =>  {\n        'username'  => 'empty',\n        'password'  => 'empty',\n        'baseuri'   => 'empty',\n    },\n    'data'  =>{\n        'get'   => '',\n        'putpost'=> '',\n    },\n    'format' => 'none',\n    'headerextra'   => '',\n    'type' => 'none',\n    'url'=> {\n        'pid'=> 'ADD A PID',\n    },\n},\n);\n\n# Main subroutine\nsub main {\n\n    #Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Get the script arguments\n    (my $returncode) = get_arguments($settings_ref);\n\n    if( $returncode == 0 ) \n         performPut($settings_ref);\n\n    return($returncode);\n}\n \n# Subroutine to perform a PUT action\nsub performPut {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    #construct url and headers\n    my $url=\"$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}\";\n    printf(\"The constructed url is        : %s\\n\",$url) if $settings_ref->{debug} =~ /True/ ;\n    my @httpHeaders = ( 'Content-Type: application/json' );\n    # add extra header info. f.i. \"If-Match: *\" or \"If-None-Match: *\"\n    push(@httpHeaders, \"$settings_ref->{handle}->{headerextra}\" ) if $settings_ref->{handle}->{headerextra} ;\n\n    #construct data\n    my $data=$settings_ref->{handle}->{data}->{putpost};\n    printf(\"The data is                   : %s\\n\",$data) if $settings_ref->{debug} =~ /True/ ;\n\n    # perform action\n    (my $returncode, my $response_code, my $response_content_type, my $response_body ) = httpPut($settings_ref, $url, \\@httpHeaders, $data );\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\");\n        } \n\n    } else {\n        print('An error happened\\n');\n    }\n}\n\n# reader helper calback function\nsub read_callback {\n    my ($maxlength,$pointer)=@_;\n    # printf(\"The MAXLENGTH is     : \\n\", $maxlength);\n    # printf(\"The POINTER is       : \\n\", $$pointer) ;\n    my $data = $$pointer;\n    $$pointer = \"\";\n    return $data;\n}\n\n# Subroutine to post data via a http PUT\nsub httpPut {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n    my $url = shift;\n    my $httpHeaders_ref = shift;\n    my $data = shift;\n\n    print('Entering httpPut              :\\n')         if $settings_ref->{debug} =~ /True/;\n\n    # local varables\n    my $length = length ($data);\n    my $body = \"\";\n    my $header = \"\";\n    my $response_body;\n    my $response_code;\n    my $response_content_type;\n\n    my $curl = WWW::Curl::Easy->new;\n\n    # set options for the curl http request\n    $curl->setopt(CURLOPT_HEADER, 0);\n    $curl->setopt(CURLOPT_HTTPHEADER, $httpHeaders_ref );\n    $curl->setopt(CURLOPT_READFUNCTION, \\&read_callback);\n    $curl->setopt(CURLOPT_UPLOAD, 1);\n    $curl->setopt(CURLOPT_INFILE, \\$data);\n    $curl->setopt(CURLOPT_INFILESIZE, length($data));\n    $curl->setopt(CURLOPT_URL, $url);\n    $curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});\n    $curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});\n\n    #debugging\n    #$curl->setopt (CURLOPT_VERBOSE, 1);\n\n    # A filehandle, reference to a scalar or reference to a typeglob can be used here.\n    open my $fh, '>', \\$response_body or die \"$!\";\n    $curl->setopt(CURLOPT_WRITEDATA, $fh);\n\n    # Do the actual curl http request\n    my $returncode = $curl->perform;\n\n    # close file handle\n    close($fh);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        $response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);\n        $response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);\n        print(\"Received response code        : $response_code\\n\")         if $settings_ref->{debug} =~ /True/;\n        print(\"Received response content type: $response_content_type\\n\") if $settings_ref->{debug} =~ /True/;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_body\\n\") if $settings_ref->{debug} =~ /True/ ;\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\") if $settings_ref->{debug} =~ /True/;\n        } \n\n    } else {\n        # Error code, type of error, error message\n        print(\"An error happened: $returncode \".$curl->strerror($returncode).\" \".$curl->errbuf.\"\\n\");\n    }\n\n    # Return the results\n    return($returncode, $response_code, $response_content_type, $response_body );\n}\n# Subroutine to get and check all script arguments\nsub get_arguments {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Define local variables\n    my %arguments;\n    my $username;\n    my $password;\n    my $baseUri;\n    my $pidUrl;\n    my $credentials;\n    my $handleData;\n    my $type;\n    my $header;\n    my $returncode=0;\n    my $message;\n    my @sources;\n\n    GetOptions( 'h|help'    => \\$arguments{help},\n        'user=s'        => \\$username,\n        'passwd=s'      => \\$password,\n        'base=s'        => \\$baseUri,\n        'pid=s'         => \\$pidUrl,\n        'cred=s'        => \\$credentials,\n        'data=s'        => \\$handleData,\n        'type=s'        => \\$type,\n        'header=s'      => \\$header,\n        'get'           => \\$arguments{get},\n        'put'           => \\$arguments{put},\n        'delete'        => \\$arguments{delete},\n        'post'          => \\$arguments{post},\n        'pretty'        => \\$arguments{pretty},\n        'd|debug'       => \\$arguments{debug},\n    );\n\n    # Check the help flag\n    if( $arguments{help} ) {\n\n        # Set the returncode\n        $returncode=255;\n\n        $message = print_help();\n    }\n    \n    # Check the debug flag\n    if( $arguments{debug} ) {\n\n        $settings_ref->{debug} = 'True';\n        printf('debug is                      : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the pretty flag\n    if( $arguments{pretty} ) {\n\n        $settings_ref->{handle}->{format} = 'pretty';\n        printf('pretty format printing is     : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the action flag's (get,put,delete,post,search,nagios)\n    if( $arguments{get} ) {\n\n        $settings_ref->{handle}->{action} = 'get';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{put} ) {\n\n        $settings_ref->{handle}->{action} = 'put';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{delete} ) {\n\n        $settings_ref->{handle}->{action} = 'delete';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{post} ) {\n\n        $settings_ref->{handle}->{action} = 'post';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the username\n    if( $username ) {\n\n        $settings_ref->{handle}->{credentials}->{username} = $username;\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the password\n    if( $password ) {\n\n        $settings_ref->{handle}->{credentials}->{password} = $password;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the base uri\n    if( $baseUri ) {\n\n        $settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the pid url\n    if( $pidUrl ) {\n\n        $settings_ref->{handle}->{url}->{pid} = $pidUrl;\n        printf(\"The pid is                    : %s\\n\",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the handle data\n    if( $handleData ) {\n\n        $settings_ref->{handle}->{data}->{putpost} = $handleData;\n        printf(\"The data is                   : %s\\n\",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the type data\n    if( $type ) {\n\n        $settings_ref->{handle}->{type} = $type;\n        printf(\"The type(s) to show is/are    : %s\\n\",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n    \n    # check the header data\n    if( $header ) {\n\n        $settings_ref->{handle}->{headerextra} = $header;\n        printf(\"The extra header info is      : %s\\n\",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the credentials data\n    if( $credentials ) {\n\n        # read the credentials from the file\n        my $filename = $credentials;\n        my $json_text = do {\n            open(my $json_fh, \"<:encoding(UTF-8)\", $filename)  or die(\"Can't open $filename: $!\\n\");\n            local $/;\n            <$json_fh>\n        };\n\n        # convert from json and put in correct place \n        my $json = JSON->new;\n        $settings_ref->{handle}->{credentials} = $json->decode($json_text);\n\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n    }\n\n    # Print the message\n    if( $message ) {\n\n        print \"$message\\n\";\n    };\n\n    # Return the results\n    return($returncode);\n\n};\n\n")))}u.isMDXComponent=!0},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(123)),i={title:"Python",parent:"create",order:2},o={unversionedId:"examples/createpython",id:"examples/createpython",isDocsHomePage:!1,title:"Python",description:"The request in python",source:"@site/docs/examples/createpython.md",slug:"/examples/createpython",permalink:"/doc.pidconsortium.eu/docs/examples/createpython",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/createpython.md",version:"current"},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in python"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"import urllib.request, urllib.error, urllib.parse\nimport uuid\nimport json\n\nPIDSERVICE_URL=\"THE_SERVICE_URL_WITH_PREFIX\"\nPIDSERVICE_USER=\"YOURUSERNAME\"\nPIDSERVICE_PASSWD=\"YOURPASSWORD\"\nSUFFIX =str(uuid.uuid1());\nURL_TO_OPEN=PIDSERVICE_URL+SUFFIX\nDATAURL=''\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create \"opener\" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib.request.install_opener(opener)\n\n#create the json data\nJSONDATA = [{'type':'URL','parsed_data':'http://www.grnet.gr'}]\nJSONDATATOSEND = json.dumps(JSONDATA);\n\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN, data=JSONDATATOSEND)\n\n#create the headers\nREQUESTDATA.add_header('Content-Type','application/json')\nREQUESTDATA.add_header('Content-Length',len(JSONDATATOSEND))\n\n# creates the PUT method\nREQUESTDATA.get_method = lambda: 'PUT'\n\ntry:\n    DATAURL = urllib.request.urlopen(REQUESTDATA)\n    \nexcept urllib.error.URLError as e:\n    print(e)\n    if e.code == 404:\n        print(\"404-Not found\")\n    if e.code == 401:\n        print(\"401-Authentication failed\")\n        #get http code of the request\n\nif DATAURL:\n    # Getting the code\n    print(\"This gets the code: \", DATAURL.code)\n")))}u.isMDXComponent=!0}}]);