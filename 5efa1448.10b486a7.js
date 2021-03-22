(window.webpackJsonp=window.webpackJsonp||[]).push([[30,11,19,29,56,61],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return f})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return h})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),s=(t(0),t(125)),i=t(68),o=t(72),u=t(73),l=t(55),c=t(71),d=t(129),p=t(130),f={id:"api-get",title:"API - GET a PID",kind:"code",slug:"get",result:"resultget"},m={unversionedId:"api-get",id:"api-get",isDocsHomePage:!1,title:"API - GET a PID",description:"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.",source:"@site/docs/api-get.md",slug:"/get",permalink:"/doc.pidconsortium.eu/docs/get",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/api-get.md",version:"current",sidebar:"someSidebar",previous:{title:"API - PID generation",permalink:"/doc.pidconsortium.eu/docs/generate"},next:{title:"API - List PID",permalink:"/doc.pidconsortium.eu/docs/list"}},h=[{value:"GET a PID - Description",id:"get-a-pid---description",children:[]},{value:"Example",id:"example",children:[]}],g={rightToc:h};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON."),Object(s.b)("h2",{id:"get-a-pid---description"},"GET a PID - Description"),Object(s.b)("p",null,"Once you have the PID url, then you can retrieve the information at once for this PID, by just supplying its URL. "),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"Description")),Object(s.b)("td",{parentName:"tr",align:null},"GET a PID")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"URL")),Object(s.b)("td",{parentName:"tr",align:null},"The  API Service URL with the suffix")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"HTTP Method")),Object(s.b)("td",{parentName:"tr",align:null},"GET")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},"Security")),Object(s.b)("td",{parentName:"tr",align:null},"You must authenticate before actually getting PID information.")))),Object(s.b)("p",null,"The data you must send in order to get the PID are described in the following table "),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Type"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Default value"),Object(s.b)("th",{parentName:"tr",align:null},"Example value"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"url to authenticate"),Object(s.b)("td",{parentName:"tr",align:null},"a url to authenticate. We use the service PID service URL"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("a",{parentName:"td",href:"https://epic.grnet.gr/api/v2/handles/"},"https://epic.grnet.gr/api/v2/handles/"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"username"),Object(s.b)("td",{parentName:"tr",align:null},"your username"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null})),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"password"),Object(s.b)("td",{parentName:"tr",align:null},"your password"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"None"),Object(s.b)("td",{parentName:"tr",align:null})))),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"In this example we are going to retrieve the information of a PID with the following URL ",Object(s.b)("a",{parentName:"p",href:"https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5"},"https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5")),Object(s.b)(d.a,{defaultValue:"curl",values:[{label:"Curl",value:"curl"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Perl",value:"perl"}],mdxType:"Tabs"},Object(s.b)(p.a,{value:"curl",mdxType:"TabItem"},Object(s.b)(i.default,{mdxType:"Curl"})),Object(s.b)(p.a,{value:"python",mdxType:"TabItem"},Object(s.b)(l.default,{mdxType:"Python"})),Object(s.b)(p.a,{value:"php",mdxType:"TabItem"},Object(s.b)(u.default,{mdxType:"PHP"})),Object(s.b)(p.a,{value:"perl",mdxType:"TabItem"},Object(s.b)(o.default,{mdxType:"Perl"}))),Object(s.b)(c.default,{mdxType:"Results"}))}b.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},126:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},127:function(e,n,t){"use strict";var r=t(0),a=t(128);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},129:function(e,n,t){"use strict";var r=t(0),a=t.n(r),s=t(127),i=t(126),o=t(47),u=t.n(o),l=37,c=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,d=e.values,p=e.groupId,f=e.className,m=Object(s.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,b=Object(r.useState)(o),$=b[0],y=b[1],_=Object(r.useState)(!1),T=_[0],O=_[1];if(null!=p){var j=h[p];null!=j&&j!==$&&d.some((function(e){return e.value===j}))&&y(j)}var v=function(e){y(e),null!=p&&g(p,e)},E=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||O(!0)},D=function(){O(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",D),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",D)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},f)},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":$===n,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":$===n}),style:T?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case c:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),P(e)},onFocus:function(){return v(n)},onClick:function(){v(n),O(!1)},onPointerDown:function(){return O(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===$}))[0]))}},130:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),s=(t(0),t(125)),i={title:"Python",parent:"get",order:2},o={unversionedId:"examples/getpython",id:"examples/getpython",isDocsHomePage:!1,title:"Python",description:"The request in python",source:"@site/docs/examples/getpython.md",slug:"/examples/getpython",permalink:"/doc.pidconsortium.eu/docs/examples/getpython",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/getpython.md",version:"current"},u=[],l={rightToc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in python"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},'import urllib.request, urllib.error, urllib.parse\nimport json\n\nPIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX" #dont forget to add "/" at the end\nPIDSERVICE_USER="YOURUSERNAME"\nPIDSERVICE_PASSWD="YOURPASSWORD"\nHANDLENAME="YOUR_PID" #for example "66742AB2-5685-11E3-A413-1C6F65A666B5"\nURL_TO_OPEN=PIDSERVICE_URL+HANDLENAME\nDATAURL=\'\'\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create "opener" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib.request.install_opener(opener)\n\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN)\ntry:\n    DATAURL = urllib.request.urlopen(REQUESTDATA)\nexcept urllib.error.URLError as e:\n    if e.code == 404:\n        print("404-Not found")\n    if e.code == 401:\n        print("401-Authentication failed")\n\nif DATAURL:\n    # Getting the code\n    print("This gets the code: ", DATAURL.code)\n    if DATAURL.code == 200:\n        print("PID data: ",json.loads(DATAURL.read()))\n \n')))}c.isMDXComponent=!0},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),s=(t(0),t(125)),i={title:"Curl",parent:"get",order:1},o={unversionedId:"examples/getcurl",id:"examples/getcurl",isDocsHomePage:!1,title:"Curl",description:"The request in curl",source:"@site/docs/examples/getcurl.md",slug:"/examples/getcurl",permalink:"/doc.pidconsortium.eu/docs/examples/getcurl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/getcurl.md",version:"current"},u=[],l={rightToc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in curl"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'curl -D- -u "YOURUSERNAME:YOURPASSWORD" -X GET -H "Content-Type: application/json" https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5\n')))}c.isMDXComponent=!0},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),s=(t(0),t(125)),i={title:"Search Results",parent:"resultget",order:1},o={unversionedId:"examples/getres",id:"examples/getres",isDocsHomePage:!1,title:"Search Results",description:"The response:",source:"@site/docs/examples/getres.md",slug:"/examples/getres",permalink:"/doc.pidconsortium.eu/docs/examples/getres",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/getres.md",version:"current"},u=[{value:"The response:",id:"the-response",children:[]}],l={rightToc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"the-response"},"The response:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 200 OK: (Success)"),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong"),Object(s.b)("li",{parentName:"ul"},"HTTP/1.1 404 NOT found: The url doesn't exist")),Object(s.b)("p",null,"After a successful request, the response consists of an array of the PID and an array of all the information that apply to it. The response provides the idx, the type, and all the data described in the data model. "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'Get all data:  [\n{\n"idx":1,\n"type":"URL",\n"parsed_data":"http://www.grnet.gr/",\n"data":"aHR0cDovL3d3dy5ncm5ldC5nci8=",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n{\n"idx":2,\n"type":"URL",\n"parsed_data":"https://www.grnet.gr/en/node/64",\n"data":"aHR0cHM6Ly93d3cuZ3JuZXQuZ3IvZW4vbm9kZS82NA==",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n{\n"idx":3,\n"type":"INST",\n"parsed_data":"CLARIN-EL",\n"data":"Q0xBUklOLUVM",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n\n{\n"idx":100,\n"type":"HS_ADMIN",\n"parsed_data":{\n"adminId":"0.NA/11239",\n"adminIdIndex":300,\n"perms":{\n"add_handle":true,\n"delete_handle":true,\n"add_naming_auth":false,\n"delete_naming_auth":false,\n"modify_value":true,\n"remove_value":true,\n"add_value":true,\n"read_value":true,\n"modify_admin":true,\n"remove_admin":true,\n"add_admin":true,\n"list_handles":false\n}\n},\n"data":"B/MAAAAKMC5OQS8xMTIzOQAAASw=",\n"timestamp":"2013-11-15T14:25:58Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n}\n]\n')))}c.isMDXComponent=!0},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),s=(t(0),t(125)),i={title:"Perl",parent:"get",order:4},o={unversionedId:"examples/getperl",id:"examples/getperl",isDocsHomePage:!1,title:"Perl",description:"The request in perl",source:"@site/docs/examples/getperl.md",slug:"/examples/getperl",permalink:"/doc.pidconsortium.eu/docs/examples/getperl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/getperl.md",version:"current"},u=[],l={rightToc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in perl"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-perl"},"#!/usr/bin/perl\n\nuse strict;\nuse warnings;\nuse Data::Dumper;\nuse Getopt::Long;\nuse Switch 'Perl5', 'Perl6';\nuse JSON;\nuse WWW::Curl::Easy;\n\nmy $fullargv0 = $0;\nmy ($argv0) = $fullargv0 =~ /([^\\/\\\\]+)$/;\n\n\x3c!---\nmy %settings = (\n'debug' => 'False',\n'handle' => {\n    'action' =>'get',\n    'credentials'   =>  {\n        'username'  => 'empty',\n        'password'  => 'empty',\n        'baseuri'   => 'empty',\n    },\n    'data'  =>{\n        'get'   => '',\n        'putpost'=> '',\n    },\n    'format' => 'none',\n    'headerextra'   => '',\n    'type' => 'none',\n    'url'=> {\n        'pid'=> '',\n    },\n},\n);\n\n# Main subroutine\nsub main {\n\n    #Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Get the script arguments\n    (my $returncode) = get_arguments($settings_ref);\n\n    if( $returncode == 0 ) \n        performGet($settings_ref); \n\n    return($returncode);\n}\n \n# Subroutine to perform a GET action\nsub performGet {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    #construct url and headers\n    my $url=\"$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}\";\n    printf(\"The constructed url is        : %s\\n\",$url) if $settings_ref->{debug} =~ /True/ ;\n    my @httpHeaders = ('Accept: application/json' ) ;\n    push(@httpHeaders, \"$settings_ref->{handle}->{headerextra}\" ) if $settings_ref->{handle}->{headerextra} ;\n\n    # perform action\n    (my $returncode, my $response_code, my $response_content_type ) = httpGet($settings_ref, $url, \\@httpHeaders);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print Dumper $settings_ref->{handle}->{data}->{get} if $settings_ref->{debug} =~ /True/ ;\n\n            # show only types we want to show. implicit is that we than only show type and parsed_data\n            unless ( $settings_ref->{handle}->{type} =~ /none/ ) {\n\n                if (ref($settings_ref->{handle}->{data}->{get}) eq 'ARRAY') {\n                    print \"We have an array of hashes \\n\" if $settings_ref->{debug} =~ /True/ ;\n\n                    # grep so we have only the hashes with the selected fields\n                    @{$settings_ref->{handle}->{data}->{get}} = grep {$_->{type} =~ /$settings_ref->{handle}->{type}/ } @{$settings_ref->{handle}->{data}->{get}} ; \n                    print Dumper @{$settings_ref->{handle}->{data}->{get}} if $settings_ref->{debug} =~ /True/ ;\n\n                    # delete items from retrieved handle which are not type and parsed_data\n                    for my $hash ( @{$settings_ref->{handle}->{data}->{get}}) {\n                        foreach my $key ( keys %$hash ) {           \n                            print \"key: $key, value: $hash->{$key}\\n\" if $settings_ref->{debug} =~ /True/ ;\n                            unless ( $key =~ /^type|^parsed_data/ ) {\n                                delete $hash->{$key};\n                            }\n                        }   \n                    }\n                } else {\n                    print \"We have a hash of arrays of hashes \\n\" if  $settings_ref->{debug} =~ /True/ ;\n                    # grep so we have only the hashes with the selected fields\n                    for my $array (values(%{$settings_ref->{handle}->{data}->{get}})) { \n                        @$array = grep {$_->{type} =~ /$settings_ref->{handle}->{type}/ } @$array ;\n                    } \n                    print Dumper %{$settings_ref->{handle}->{data}->{get}} if $settings_ref->{debug} =~ /True/ ;\n\n                    # delete items from retrieved handle which are not type and parsed_data\n                    for my $array (values(%{$settings_ref->{handle}->{data}->{get}})) { \n                        for my $hash ( @$array ) {\n                            foreach my $key ( keys %$hash ) {           \n                                print \"key: $key, value: $hash->{$key}\\n\" if $settings_ref->{debug} =~ /True/ ;\n                                unless ( $key =~ /^type|^parsed_data/ ) {\n                                    delete $hash->{$key};\n                                }\n                            }\n                        }   \n                    }\n                }\n            }\n\n            # print the data in json format, pretty if the parameter is set\n            my $json = JSON->new;\n            my $json_printed;\n            if ( $settings_ref->{handle}->{format} =~ /pretty/ ) {\n                $json_printed = $json->pretty->encode( $settings_ref->{handle}->{data}->{get} );\n            } else {\n                $json_printed = $json->encode( $settings_ref->{handle}->{data}->{get} );\n            }\n            print(\"$json_printed\\n\");\n\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\");\n        } \n\n    } else {\n        print('An error happened\\n');\n    }\n}\n\n# reader helper calback function\nsub read_callback {\n    my ($maxlength,$pointer)=@_;\n    # printf(\"The MAXLENGTH is     : \\n\", $maxlength);\n    # printf(\"The POINTER is       : \\n\", $$pointer) ;\n    my $data = $$pointer;\n    $$pointer = \"\";\n    return $data;\n}\n\n# Subroutine to retrieve data via a http GET\nsub httpGet {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n    my $url = shift;\n    my $httpHeaders_ref = shift;\n\n    print('Entering httpGet              :\\n')         if $settings_ref->{debug} =~ /True/;\n\n    # local varables\n    my $response_body;\n    my $response_code;\n    my $response_content_type;\n\n    my $curl = WWW::Curl::Easy->new;\n\n    # set options for the curl http request\n    $curl->setopt(CURLOPT_HEADER, 0);\n    $curl->setopt(CURLOPT_HTTPHEADER, $httpHeaders_ref );\n    $curl->setopt(CURLOPT_URL, $url);\n    $curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});\n    $curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});\n\n    # A filehandle, reference to a scalar or reference to a typeglob can be used here.\n    open my $fh, '>', \\$response_body or die \"$!\";\n    $curl->setopt(CURLOPT_WRITEDATA, $fh);\n\n    # Do the actual curl http request\n    my $returncode = $curl->perform;\n\n    # close file handle\n    close($fh);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        $response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);\n        $response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);\n        print(\"Received response code        : $response_code\\n\")         if $settings_ref->{debug} =~ /True/;\n        print(\"Received response content type: $response_content_type\\n\") if $settings_ref->{debug} =~ /True/;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_body\\n\") if $settings_ref->{debug} =~ /True/;\n\n            # convert from json and put in correct place \n            my $json = JSON->new;\n            $settings_ref->{handle}->{data}->{get} = $json->decode($response_body);\n\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\") if $settings_ref->{debug} =~ /True/;\n        } \n\n    } else {\n        # Error code, type of error, error message\n        print(\"An error happened: $returncode \".$curl->strerror($returncode).\" \".$curl->errbuf.\"\\n\");\n    }\n\n    # Return the results\n    return($returncode, $response_code, $response_content_type );\n}\n\n# Subroutine to get and check all script arguments\nsub get_arguments {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Define local variables\n    my %arguments;\n    my $username;\n    my $password;\n    my $baseUri;\n    my $pidUrl;\n    my $credentials;\n    my $handleData;\n    my $type;\n    my $header;\n    my $returncode=0;\n    my $message;\n    my @sources;\n\n    GetOptions( 'h|help'    => \\$arguments{help},\n        'user=s'        => \\$username,\n        'passwd=s'      => \\$password,\n        'base=s'        => \\$baseUri,\n        'pid=s'         => \\$pidUrl,\n        'cred=s'        => \\$credentials,\n        'data=s'        => \\$handleData,\n        'type=s'        => \\$type,\n        'header=s'      => \\$header,\n        'get'           => \\$arguments{get},\n        'put'           => \\$arguments{put},\n        'delete'        => \\$arguments{delete},\n        'post'          => \\$arguments{post},\n        'pretty'        => \\$arguments{pretty},\n        'd|debug'       => \\$arguments{debug},\n    );\n\n    # Check the help flag\n    if( $arguments{help} ) {\n\n        # Set the returncode\n        $returncode=255;\n\n        $message = print_help();\n    }\n    \n    # Check the debug flag\n    if( $arguments{debug} ) {\n\n        $settings_ref->{debug} = 'True';\n        printf('debug is                      : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the pretty flag\n    if( $arguments{pretty} ) {\n\n        $settings_ref->{handle}->{format} = 'pretty';\n        printf('pretty format printing is     : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the action flag's (get,put,delete,post,search,nagios)\n    if( $arguments{get} ) {\n\n        $settings_ref->{handle}->{action} = 'get';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{put} ) {\n\n        $settings_ref->{handle}->{action} = 'put';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{delete} ) {\n\n        $settings_ref->{handle}->{action} = 'delete';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{post} ) {\n\n        $settings_ref->{handle}->{action} = 'post';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the username\n    if( $username ) {\n\n        $settings_ref->{handle}->{credentials}->{username} = $username;\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the password\n    if( $password ) {\n\n        $settings_ref->{handle}->{credentials}->{password} = $password;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the base uri\n    if( $baseUri ) {\n\n        $settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the pid url\n    if( $pidUrl ) {\n\n        $settings_ref->{handle}->{url}->{pid} = $pidUrl;\n        printf(\"The pid is                    : %s\\n\",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the handle data\n    if( $handleData ) {\n\n        $settings_ref->{handle}->{data}->{putpost} = $handleData;\n        printf(\"The data is                   : %s\\n\",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the type data\n    if( $type ) {\n\n        $settings_ref->{handle}->{type} = $type;\n        printf(\"The type(s) to show is/are    : %s\\n\",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n    \n    # check the header data\n    if( $header ) {\n\n        $settings_ref->{handle}->{headerextra} = $header;\n        printf(\"The extra header info is      : %s\\n\",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the credentials data\n    if( $credentials ) {\n\n        # read the credentials from the file\n        my $filename = $credentials;\n        my $json_text = do {\n            open(my $json_fh, \"<:encoding(UTF-8)\", $filename)  or die(\"Can't open $filename: $!\\n\");\n            local $/;\n            <$json_fh>\n        };\n\n        # convert from json and put in correct place \n        my $json = JSON->new;\n        $settings_ref->{handle}->{credentials} = $json->decode($json_text);\n\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n    }\n\n    # Print the message\n    if( $message ) {\n\n        print \"$message\\n\";\n    };\n\n    # Return the results\n    return($returncode);\n\n};\n")))}c.isMDXComponent=!0},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),s=(t(0),t(125)),i={title:"PHP",parent:"get",order:3},o={unversionedId:"examples/getphp",id:"examples/getphp",isDocsHomePage:!1,title:"PHP",description:"The request in php",source:"@site/docs/examples/getphp.md",slug:"/examples/getphp",permalink:"/doc.pidconsortium.eu/docs/examples/getphp",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/getphp.md",version:"current"},u=[],l={rightToc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The request in php "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},'$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";\n$PIDSERVICE_USER="YOURUSERNAME";\n$PIDSERVICE_PASSWD="YOURPASSWORD";\n$PID="THE_PID"; //"05C3DB56-5692-11E3-AF8F-1C6F65A666B5";\n$GETPIDURL =$PIDSERVICE_URL.$PID;\n\n\n// Get cURL resource\n$curl = curl_init();\n// Set some options - we are passing in a useragent too here\ncurl_setopt($curl,CURLOPT_URL,$GETPIDURL);\n// Set the authentication options\ncurl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);\ncurl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);\n\n// Include header in result? (0 = yes, 1 = no)\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n// Should cURL return or print out the data? (true = return, false = print)\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n// Download the given URL, and return output\n$output = curl_exec($curl);\n$info = curl_getinfo($curl);\nif( $info[\'http_code\']==200) echo "PID DATA";\nif( $info[\'http_code\']==401) echo "Authorization problem";\nif( $info[\'http_code\']==404) echo "Not found";\n\n// Close the cURL resource, and free system resources\ncurl_close($curl);\n')))}c.isMDXComponent=!0}}]);