(window.webpackJsonp=window.webpackJsonp||[]).push([[41,14,15,21,51],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),o=(n(0),n(125)),u=n(69),c=n(60),i=n(61),l=n(80),s=n(129),p=n(130),d={id:"api-auth",title:"API - Basic Authentication",kind:"code",slug:"auth",result:"resultauth"},b={unversionedId:"api-auth",id:"api-auth",isDocsHomePage:!1,title:"API - Basic Authentication",description:"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.",source:"@site/docs/api-auth.md",slug:"/auth",permalink:"/doc.pidconsortium.eu/docs/auth",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/api-auth.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/doc.pidconsortium.eu/docs/api"},next:{title:"PID generation",permalink:"/doc.pidconsortium.eu/docs/generate"}},m=[{value:"Basic Authentication - Description",id:"basic-authentication---description",children:[]},{value:"Example",id:"example",children:[]}],h={rightToc:m};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON."),Object(o.b)("h2",{id:"basic-authentication---description"},"Basic Authentication - Description"),Object(o.b)("p",null,"The API allows REST clients to authenticate themselves with a user name and password using basic authentication."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Description")),Object(o.b)("td",{parentName:"tr",align:null},"Authenticate to API Service")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"URL")),Object(o.b)("td",{parentName:"tr",align:null},"The API Service URL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"HTTP Method")),Object(o.b)("td",{parentName:"tr",align:null},"GET")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Security")),Object(o.b)("td",{parentName:"tr",align:null},"Basic Authentication")))),Object(o.b)("p",null,"The data you must send in order to authenticate are described in the following table "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Default value"),Object(o.b)("th",{parentName:"tr",align:null},"Example value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"url to authenticate"),Object(o.b)("td",{parentName:"tr",align:null},"a url to authenticate. We use the service PID service URL"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"None"),Object(o.b)("td",{parentName:"tr",align:null},"ServiceURL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"username"),Object(o.b)("td",{parentName:"tr",align:null},"your username"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"None"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"password"),Object(o.b)("td",{parentName:"tr",align:null},"your password"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"None"),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"In this example we are going to authenticate by using the main PID service URL."),Object(o.b)(s.a,{defaultValue:"curl",values:[{label:"Curl",value:"curl"},{label:"Python",value:"python"},{label:"PHP",value:"php"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"curl",mdxType:"TabItem"},Object(o.b)(u.default,{mdxType:"Curl"})),Object(o.b)(p.a,{value:"python",mdxType:"TabItem"},Object(o.b)(i.default,{mdxType:"Python"})),Object(o.b)(p.a,{value:"php",mdxType:"TabItem"},Object(o.b)(c.default,{mdxType:"PHP"}))),Object(o.b)(l.default,{mdxType:"Results"}))}f.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var l=2;l<o;l++)u[l]=n[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},126:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},127:function(e,t,n){"use strict";var r=n(0),a=n(128);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},129:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(127),u=n(126),c=n(47),i=n.n(c),l=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(r.useState)(c),g=O[0],j=O[1],y=Object(r.useState)(!1),T=y[0],v=y[1];if(null!=d){var E=h[d];null!=E&&E!==g&&p.some((function(e){return e.value===E}))&&j(E)}var R=function(e){j(e),null!=d&&f(d,e)},P=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},D=function(){v(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",D),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",D)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(u.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),style:T?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),N(e)},onFocus:function(){return R(t)},onClick:function(){R(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},130:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(125)),u={title:"PHP",parent:"auth",order:3},c={unversionedId:"examples/authphp",id:"examples/authphp",isDocsHomePage:!1,title:"PHP",description:"The request in php",source:"@site/docs/examples/authphp.md",slug:"/examples/authphp",permalink:"/doc.pidconsortium.eu/docs/examples/authphp",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/authphp.md",version:"current"},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The request in php "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";\n$PIDSERVICE_USER="YOURUSERNAME";\n$PIDSERVICE_PASSWD="YOURPASSWORD";\n// Get cURL resource\n$curl = curl_init();\n\n// Set the url to authenticate\ncurl_setopt($curl,CURLOPT_URL,$PIDSERVICE_URL);\n// Set the authentication options\ncurl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);\ncurl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);\n\n// Include header in result? (0 = yes, 1 = no)\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n// Should cURL return or print out the data? (true = return, false = print)\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n// Download the given URL, and return output\n$output = curl_exec($curl);\n$finalData = json_decode($output);\n\n$info = curl_getinfo($curl);\nif( $info[\'http_code\']==200) echo "Authorization ok<br/>";\nif( $info[\'http_code\']==401) echo "Authorization failed: Either your login or your password is wrong.<br/>";\n\n// Close the cURL resource, and free system resources\ncurl_close($curl);\n')))}s.isMDXComponent=!0},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(125)),u={title:"Python",parent:"auth",order:2},c={unversionedId:"examples/authpython",id:"examples/authpython",isDocsHomePage:!1,title:"Python",description:"The request in python",source:"@site/docs/examples/authpython.md",slug:"/examples/authpython",permalink:"/doc.pidconsortium.eu/docs/examples/authpython",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/authpython.md",version:"current"},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The request in python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'import urllib.request, urllib.error, urllib.parse\n\nPIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"\nPIDSERVICE_USER="YOURUSERNAME"\nPIDSERVICE_PASSWD="YOURPASSWORD"\nDATAURL=\'\'\nURL_TO_OPEN=PIDSERVICE_URL\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create "opener" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib.request.install_opener(opener)\n\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN)\ntry:\n    DATAURL = urllib.request.urlopen(REQUESTDATA)\nexcept urllib.error.URLError as e:\n    if e.code == 401:\n         print("401-Authentication failed")\n\nif DATAURL:\n    # Getting the code\n    print("This gets the code: ", DATAURL.code)\n')))}s.isMDXComponent=!0},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(125)),u={title:"Curl",parent:"auth",order:1},c={unversionedId:"examples/authcurl",id:"examples/authcurl",isDocsHomePage:!1,title:"Curl",description:"The request in curl",source:"@site/docs/examples/authcurl.md",slug:"/examples/authcurl",permalink:"/doc.pidconsortium.eu/docs/examples/authcurl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/authcurl.md",version:"current"},i=[],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The request in curl"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-curl"},'    curl -D- -u "YOURUSERNAME:YOURPASSWORD" -X GET -H "Content-Type: application/json" https://epic.grnet.gr/api/v2/handles/\n')))}s.isMDXComponent=!0},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(125)),u={title:"Auth Results",parent:"resultauth",order:1},c={unversionedId:"examples/authres",id:"examples/authres",isDocsHomePage:!1,title:"Auth Results",description:"The response:",source:"@site/docs/examples/authres.md",slug:"/examples/authres",permalink:"/doc.pidconsortium.eu/docs/examples/authres",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/authres.md",version:"current"},i=[{value:"The response:",id:"the-response",children:[]}],l={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"the-response"},"The response:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HTTP/1.1 200 OK: (Success)"),Object(o.b)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong")))}s.isMDXComponent=!0}}]);