(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{123:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=t,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return r?o.a.createElement(f,i(i({ref:n},c),{},{components:r})):o.a.createElement(f,i({ref:n},c))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(2),o=r(6),a=(r(0),r(123)),l={title:"Python",parent:"delete",order:2},i={unversionedId:"examples/deletepython",id:"examples/deletepython",isDocsHomePage:!1,title:"Python",description:"The request in python",source:"@site/docs/examples/deletepython.md",slug:"/examples/deletepython",permalink:"/doc.pidconsortium.eu/docs/examples/deletepython",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/deletepython.md",version:"current"},p=[],c={rightToc:p};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The request in python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'import urllib.request, urllib.error, urllib.parse\n\nPIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"\nPIDSERVICE_USER="YOURUSERNAME"\nPIDSERVICE_PASSWD="YOURPASSWORD"\nHANDLENAME="05C3DB56-5692-11E3-AF8F-1C6F65A666B5"\nURL_TO_OPEN=PIDSERVICE_URL+HANDLENAME\nDATAURL=""\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create "opener" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(URL_TO_OPEN)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use our opener.\nurllib.request.install_opener(opener)\n\n#http://stackoverflow.com/questions/2407126/python-urllib2-basic-auth-problem\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN)\n# creates the delete method\nREQUESTDATA.get_method = lambda: \'DELETE\'\n\ntry:\n        DATAURL = urllib.request.urlopen(REQUESTDATA)\nexcept urllib.error.URLError as e:\n        if e.code == 404:\n                print("404-Not found")\n        if e.code == 401:\n                print("401-Authentication failed")\n        if e.code == 403:\n                print("403-Not permitted")\n')))}u.isMDXComponent=!0}}]);