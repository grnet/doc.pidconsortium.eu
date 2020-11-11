(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return t?o.a.createElement(m,p(p({ref:n},l),{},{components:t})):o.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(117)),i={title:"Python",parent:"generate",order:2},p={unversionedId:"examples/generatepython",id:"examples/generatepython",isDocsHomePage:!1,title:"Python",description:"The request in python.",source:"@site/docs/examples/generatepython.md",slug:"/examples/generatepython",permalink:"/doc.pidconsortium.eu/docs/examples/generatepython",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/generatepython.md",version:"current"},c=[],l={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The request in python.\nThe main difference is that you have to do a POST request."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import urllib2\nimport uuid\nimport json\n\nPIDSERVICE_URL=\"THE_SERVICE_URL_WITH_PREFIX\"\nPIDSERVICE_USER=\"YOURUSERNAME\"\nPIDSERVICE_PASSWD=\"YOURPASSWORD\"\nSUFFIX =\"?prefix=GRNET&suffix=test\"\nURL_TO_OPEN=PIDSERVICE_URL+SUFFIX\nDATAURL=''\n\n# create a password manager\npassword_mgr = urllib2.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib2.HTTPBasicAuthHandler(password_mgr)\n\n# create \"opener\" (OpenerDirector instance)\nopener = urllib2.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib2.install_opener(opener)\n\n#create the json data\nJSONDATA = [{'type':'URL','parsed_data':'http://www.grnet.gr'}]\nJSONDATATOSEND = json.dumps(JSONDATA);\n\nREQUESTDATA = urllib2.Request(URL_TO_OPEN, data=JSONDATATOSEND)\n\n#create the headers\nREQUESTDATA.add_header('Content-Type','application/json')\nREQUESTDATA.add_header('Content-Length',len(JSONDATATOSEND))\n\n# creates the POST method\nREQUESTDATA.get_method = lambda: 'POST'\n\ntry:\n    DATAURL = urllib2.urlopen(REQUESTDATA)\n    \nexcept urllib2.URLError, e:\n    print e\n    if e.code == 404:\n        print \"404-Not found\"\n    if e.code == 401:\n        print \"401-Authentication failed\"    \n        #get http code of the request\n\nif DATAURL:\n    # Getting the code\n    print \"This gets the code: \", DATAURL.code\n\n")))}u.isMDXComponent=!0}}]);