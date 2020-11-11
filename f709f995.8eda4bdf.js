(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?o.a.createElement(f,p(p({ref:n},u),{},{components:t})):o.a.createElement(f,p({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(6),a=(t(0),t(117)),c={title:"Python",parent:"create",order:2},p={unversionedId:"examples/createpython",id:"examples/createpython",isDocsHomePage:!1,title:"Python",description:"The request in python",source:"@site/docs/examples/createpython.md",slug:"/examples/createpython",permalink:"/doc.pidconsortium.eu/docs/examples/createpython",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/createpython.md",version:"current"},i=[],u={rightToc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The request in python"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"import urllib2\nimport uuid\nimport json\n\nPIDSERVICE_URL=\"THE_SERVICE_URL_WITH_PREFIX\"\nPIDSERVICE_USER=\"YOURUSERNAME\"\nPIDSERVICE_PASSWD=\"YOURPASSWORD\"\nSUFFIX =str(uuid.uuid1());\nURL_TO_OPEN=PIDSERVICE_URL+SUFFIX\nDATAURL=''\n\n# create a password manager\npassword_mgr = urllib2.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib2.HTTPBasicAuthHandler(password_mgr)\n\n# create \"opener\" (OpenerDirector instance)\nopener = urllib2.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib2.install_opener(opener)\n\n#create the json data\nJSONDATA = [{'type':'URL','parsed_data':'http://www.grnet.gr'}]\nJSONDATATOSEND = json.dumps(JSONDATA);\n\nREQUESTDATA = urllib2.Request(URL_TO_OPEN, data=JSONDATATOSEND)\n\n#create the headers\nREQUESTDATA.add_header('Content-Type','application/json')\nREQUESTDATA.add_header('Content-Length',len(JSONDATATOSEND))\n\n# creates the PUT method\nREQUESTDATA.get_method = lambda: 'PUT'\n\ntry:\n    DATAURL = urllib2.urlopen(REQUESTDATA)\n    \nexcept urllib2.URLError, e:\n    print e\n    if e.code == 404:\n        print \"404-Not found\"\n    if e.code == 401:\n        print \"401-Authentication failed\"    \n        #get http code of the request\n\nif DATAURL:\n    # Getting the code\n    print \"This gets the code: \", DATAURL.code\n")))}l.isMDXComponent=!0}}]);