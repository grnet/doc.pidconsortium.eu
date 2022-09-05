"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[801],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,h=d["".concat(u,".").concat(f)]||d[f]||c[f]||s;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const s="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(7462),a=t(7294),s=t(6010),i=t(2389),o=t(7392),u=t(7094),l=t(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:f,groupId:h,className:g}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),$=f??m.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),T=(0,o.l)($,((e,n)=>e.value===n.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===d?d:d??(null==(n=m.find((e=>e.props.default)))?void 0:n.props.value)??m[0].props.value;if(null!==_&&!$.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${$.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,u.U)(),[E,P]=(0,a.useState)(_),U=[],{blockElementScrollPositionUntilNextRender:R}=(0,l.o5)();if(null!=h){const e=b[h];null!=e&&e!==E&&$.some((n=>n.value===e))&&P(e)}const D=e=>{const n=e.currentTarget,t=U.indexOf(n),r=$[t].value;r!==E&&(R(n),P(r),null!=h&&y(h,String(r)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=U.indexOf(e.currentTarget)+1;t=U[n]??U[0];break}case"ArrowLeft":{const n=U.indexOf(e.currentTarget)-1;t=U[n]??U[U.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},g)},$.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:e=>U.push(e),onKeyDown:S,onFocus:D,onClick:D},i,{className:(0,s.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===n})}),t??n)}))),t?(0,a.cloneElement)(m.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},m.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})))))}function f(e){const n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},8693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>T,default:()=>P,frontMatter:()=>$,metadata:()=>_,toc:()=>y});var r=t(7462),a=(t(7294),t(3905));const s={toc:[]};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v -u "YOURUSERNAME:YOURPASSWORD" -H "Accept:application/json" -H "Content-Type:application/json" -X POST --data \'[{"type":"URL","parsed_data":"http://www.grnet.gr/"}]\' https://epic.grnet.gr/api/v2/handles/11239/\\?prefix=GRNET\\&suffix=TEST\n')))}i.isMDXComponent=!0;const o={toc:[]};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in perl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},"#!/usr/bin/perl\n\nuse strict;\nuse warnings;\nuse Data::Dumper;\nuse Getopt::Long;\nuse Switch 'Perl5', 'Perl6';\nuse JSON;\nuse WWW::Curl::Easy;\n\nmy $fullargv0 = $0;\nmy ($argv0) = $fullargv0 =~ /([^\\/\\\\]+)$/;\n\nmy %settings = (\n'debug' => 'False',\n'handle' => {\n    'action' =>'put',\n    'credentials'   =>  {\n        'username'  => 'empty',\n        'password'  => 'empty',\n        'baseuri'   => 'empty',\n    },\n    'data'  =>{\n        'get'   => '',\n        'putpost'=> '',\n    },\n    'format' => 'none',\n    'headerextra'   => '',\n    'type' => 'none',\n    'url'=> {\n        'pid'=> 'prefix=GRNET&suffix=TEST',\n    },\n},\n);\n\n# Main subroutine\nsub main {\n\n    #Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Get the script arguments\n    (my $returncode) = get_arguments($settings_ref);\n\n    if( $returncode == 0 ) \n     performPost($settings_ref);\n\n    return($returncode);\n}\n \n# Subroutine to perform a POST action\nsub performPost {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    #construct url and headers\n    my $url=\"$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}\";\n    printf(\"The constructed url is        : %s\\n\",$url) if $settings_ref->{debug} =~ /True/ ;\n    my @httpHeaders = ( 'Content-Type: application/json' );\n\n    #construct data\n    my $data=$settings_ref->{handle}->{data}->{putpost};\n    printf(\"The data is                   : %s\\n\",$data) if $settings_ref->{debug} =~ /True/ ;\n\n    # perform action\n    (my $returncode, my $response_code, my $response_content_type, my $response_url ) = httpPost($settings_ref, $url, \\@httpHeaders, $data );\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_url\\n\");\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\");\n        } \n\n    } else {\n        print('An error happened\\n');\n    }\n}\n\n# reader helper calback function\nsub read_callback {\n    my ($maxlength,$pointer)=@_;\n    # printf(\"The MAXLENGTH is     : \\n\", $maxlength);\n    # printf(\"The POINTER is       : \\n\", $$pointer) ;\n    my $data = $$pointer;\n    $$pointer = \"\";\n    return $data;\n}\n\n# Subroutine to post data via a http POST\nsub httpPost {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n    my $url = shift;\n    my $httpHeaders_ref = shift;\n    my $data = shift;\n\n    print('Entering httpPost             :\\n')         if $settings_ref->{debug} =~ /True/;\n\n    # local varables\n    my $body = \"\";\n    my $header = \"\";\n    my $response_body;\n    my $response_code;\n    my $response_content_type;\n    my $response_url = \"\";\n\n    my $curl = WWW::Curl::Easy->new;\n\n    # set options for the curl http request\n    $curl->setopt(CURLOPT_HEADER, 1);\n    $curl->setopt(CURLOPT_HTTPHEADER, $httpHeaders_ref );\n    $curl->setopt(CURLOPT_POST, 1);\n    $curl->setopt(CURLOPT_POSTFIELDS, $data);\n    $curl->setopt(CURLOPT_POSTFIELDSIZE, length($data)) ;\n    $curl->setopt(CURLOPT_URL, $url);\n    $curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});\n    $curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});\n\n    #debugging\n    #$curl->setopt (CURLOPT_VERBOSE, 1);\n\n    # A filehandle, reference to a scalar or reference to a typeglob can be used here.\n    open my $fh, '>:encoding(UTF-8)', \\$response_body or die \"$!\";\n    $curl->setopt(CURLOPT_WRITEDATA, $fh);\n\n    # Do the actual curl http request\n    my $returncode = $curl->perform;\n\n    # close file handle\n    close($fh);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n        $response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);\n        $response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);\n        print(\"Received response code        : $response_code\\n\")         if $settings_ref->{debug} =~ /True/;\n        print(\"Received response content type: $response_content_type\\n\") if $settings_ref->{debug} =~ /True/;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_body\\n\") if $settings_ref->{debug} =~ /True/;\n            open my $fh, '<:encoding(UTF-8)', \\$response_body or die \"$!\";\n            while (my $row = <$fh>) {\n                chomp $row;\n                print \"row: $row\\n\" if $settings_ref->{debug} =~ /True/;\n                if ( $row =~ /^Location/ ) {\n                    $response_url = $row;\n                    $response_url =~ s/^Location: // ;\n                    print(\"Received response url         : $response_url\\n\") if $settings_ref->{debug} =~ /True/;\n                    last;\n                }\n            }\n\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\") if $settings_ref->{debug} =~ /True/;\n        } \n\n    } else {\n        # Error code, type of error, error message\n        print(\"An error happened: $returncode \".$curl->strerror($returncode).\" \".$curl->errbuf.\"\\n\");\n    }\n\n    # Return the results\n    return($returncode, $response_code, $response_content_type, $response_url );\n}\n\n# Subroutine to get and check all script arguments\nsub get_arguments {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Define local variables\n    my %arguments;\n    my $username;\n    my $password;\n    my $baseUri;\n    my $pidUrl;\n    my $credentials;\n    my $handleData;\n    my $type;\n    my $header;\n    my $returncode=0;\n    my $message;\n    my @sources;\n\n    GetOptions( 'h|help'    => \\$arguments{help},\n        'user=s'        => \\$username,\n        'passwd=s'      => \\$password,\n        'base=s'        => \\$baseUri,\n        'pid=s'         => \\$pidUrl,\n        'cred=s'        => \\$credentials,\n        'data=s'        => \\$handleData,\n        'type=s'        => \\$type,\n        'header=s'      => \\$header,\n        'get'           => \\$arguments{get},\n        'put'           => \\$arguments{put},\n        'delete'        => \\$arguments{delete},\n        'post'          => \\$arguments{post},\n        'pretty'        => \\$arguments{pretty},\n        'd|debug'       => \\$arguments{debug},\n    );\n\n    # Check the help flag\n    if( $arguments{help} ) {\n\n        # Set the returncode\n        $returncode=255;\n\n        $message = print_help();\n    }\n    \n    # Check the debug flag\n    if( $arguments{debug} ) {\n\n        $settings_ref->{debug} = 'True';\n        printf('debug is                      : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the pretty flag\n    if( $arguments{pretty} ) {\n\n        $settings_ref->{handle}->{format} = 'pretty';\n        printf('pretty format printing is     : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the action flag's (get,put,delete,post,search,nagios)\n    if( $arguments{get} ) {\n\n        $settings_ref->{handle}->{action} = 'get';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{put} ) {\n\n        $settings_ref->{handle}->{action} = 'put';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{delete} ) {\n\n        $settings_ref->{handle}->{action} = 'delete';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{post} ) {\n\n        $settings_ref->{handle}->{action} = 'post';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the username\n    if( $username ) {\n\n        $settings_ref->{handle}->{credentials}->{username} = $username;\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the password\n    if( $password ) {\n\n        $settings_ref->{handle}->{credentials}->{password} = $password;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the base uri\n    if( $baseUri ) {\n\n        $settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the pid url\n    if( $pidUrl ) {\n\n        $settings_ref->{handle}->{url}->{pid} = $pidUrl;\n        printf(\"The pid is                    : %s\\n\",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the handle data\n    if( $handleData ) {\n\n        $settings_ref->{handle}->{data}->{putpost} = $handleData;\n        printf(\"The data is                   : %s\\n\",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the type data\n    if( $type ) {\n\n        $settings_ref->{handle}->{type} = $type;\n        printf(\"The type(s) to show is/are    : %s\\n\",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n    \n    # check the header data\n    if( $header ) {\n\n        $settings_ref->{handle}->{headerextra} = $header;\n        printf(\"The extra header info is      : %s\\n\",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the credentials data\n    if( $credentials ) {\n\n        # read the credentials from the file\n        my $filename = $credentials;\n        my $json_text = do {\n            open(my $json_fh, \"<:encoding(UTF-8)\", $filename)  or die(\"Can't open $filename: $!\\n\");\n            local $/;\n            <$json_fh>\n        };\n\n        # convert from json and put in correct place \n        my $json = JSON->new;\n        $settings_ref->{handle}->{credentials} = $json->decode($json_text);\n\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n    }\n\n    # Print the message\n    if( $message ) {\n\n        print \"$message\\n\";\n    };\n\n    # Return the results\n    return($returncode);\n\n};\n\n")))}u.isMDXComponent=!0;const l={toc:[]};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in php "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$PIDSERVICE_URL=\"THE_SERVICE_URL_WITH_PREFIX\";\n$PIDSERVICE_USER=\"YOURUSERNAME\";\n$PIDSERVICE_PASSWD=\"YOURPASSWORD\";\n$UUID = \"?prefix=GRNET&suffix=TEST\";\n$URL_TO_OPEN = $PIDSERVICE_URL.$UUID;\n$data = array(array('type' => 'URL','parsed_data'=>'http://www.grnet.gr/'));\n$update_json=json_encode($data);\n\n// Get cURL resource\n$ch = curl_init();\n\n//Set the headers to complete the request\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($update_json)));\n\n//set the POST Action\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"POST\");\n\n//SET the postfield data\ncurl_setopt($ch, CURLOPT_POSTFIELDS,$update_json);\n\n// Should cURL return or print out the data? (true = return, false = print)\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n\n//Set the url with the new name of the PID \ncurl_setopt($ch, CURLOPT_URL, $URL_TO_OPEN);\n\n// Set the authentication options\ncurl_setopt($ch, CURLOPT_USERPWD, $PIDSERVICE_USER.\":\".$PIDSERVICE_PASSWD);\ncurl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);\n\n$output = curl_exec($ch);\n$info = curl_getinfo($ch);\n\n// Download the given URL, and return output \n\nif( $info['http_code']==200) echo \"HANDLE EXISTS<br/>\";\nif( $info['http_code']==201) echo \"PID CREATED<br/>\";\nif( $info['http_code']==204) echo \"PID UPDATED<br/>\";\nif( $info['http_code']==404) echo \"HANDLE DOESNT EXIST<br/>\";\n\ncurl_close($ch);\n")))}p.isMDXComponent=!0;const c={toc:[]};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in python.\nThe main difference is that you have to do a POST request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import urllib.request, urllib.error, urllib.parse\nimport uuid\nimport json\n\nPIDSERVICE_URL=\"THE_SERVICE_URL_WITH_PREFIX\"\nPIDSERVICE_USER=\"YOURUSERNAME\"\nPIDSERVICE_PASSWD=\"YOURPASSWORD\"\nSUFFIX =\"?prefix=GRNET&suffix=test\"\nURL_TO_OPEN=PIDSERVICE_URL+SUFFIX\nDATAURL=''\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create \"opener\" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib.request.install_opener(opener)\n\n#create the json data\nJSONDATA = [{'type':'URL','parsed_data':'http://www.grnet.gr'}]\nJSONDATATOSEND = json.dumps(JSONDATA);\n\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN, data=JSONDATATOSEND)\n\n#create the headers\nREQUESTDATA.add_header('Content-Type','application/json')\nREQUESTDATA.add_header('Content-Length',len(JSONDATATOSEND))\n\n# creates the POST method\nREQUESTDATA.get_method = lambda: 'POST'\n\ntry:\n    DATAURL = urllib.request.urlopen(REQUESTDATA)\n\nexcept urllib.error.URLError as e:\n    print(e)\n    if e.code == 404:\n        print(\"404-Not found\")\n    if e.code == 401:\n        print(\"401-Authentication failed\")\n        #get http code of the request\n\nif DATAURL:\n    # Getting the code\n    print(\"This gets the code: \", DATAURL.code)\n\n")))}d.isMDXComponent=!0;const f={toc:[{value:"The Result",id:"the-result",level:4},{value:"Manual generation of SUFFIX",id:"manual-generation-of-suffix",level:2}]};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"the-result"},"The Result"),(0,a.kt)("p",null,"The result of the automatic generation"),(0,a.kt)("span",{class:"txtcenter"},(0,a.kt)("strong",null,"GRNET-0000-0000-000A-5-TEST ")),(0,a.kt)("h2",{id:"manual-generation-of-suffix"},"Manual generation of SUFFIX"),(0,a.kt)("p",null,"Its up to the user to decide the names of the PIDs. You may use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a number"),(0,a.kt)("li",{parentName:"ul"},"a string"),(0,a.kt)("li",{parentName:"ul"},"a UUID "),(0,a.kt)("li",{parentName:"ul"},"a pattern based on the community context")),(0,a.kt)("p",null,"In all examples in this manual we use a UUID generator."))}h.isMDXComponent=!0;var g=t(5488),m=t(5162);const $={id:"api-generation",title:"API - PID generation",kind:"code",slug:"generate",result:"resultgenerate",sidebar_position:4},T="API - PID generation",_={unversionedId:"epic_api/api-generation",id:"epic_api/api-generation",title:"API - PID generation",description:"Every identifier consists of two parts: its prefix and a unique local name under the prefix known as its suffix",source:"@site/docs/epic_api/api-generation.md",sourceDirName:"epic_api",slug:"/epic_api/generate",permalink:"/docs/epic_api/generate",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"api-generation",title:"API - PID generation",kind:"code",slug:"generate",result:"resultgenerate",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"API - Basic Authentication",permalink:"/docs/epic_api/auth"},next:{title:"API - Get a PID",permalink:"/docs/epic_api/get"}},b={},y=[{value:"Automatic generation of SUFFIX",id:"automatic-generation-of-suffix",level:2},{value:"Example",id:"example",level:2}],E={toc:y};function P(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api---pid-generation"},"API - PID generation"),(0,a.kt)("p",null,"Every identifier consists of two parts: its prefix and a unique local name under the prefix known as its suffix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"< PREFIX > / < SUFFIX > (e.g. 11239/123456745).\n")),(0,a.kt)("p",null,"Any suffix - local name must be unique under its local namespace. The uniqueness of a prefix and a local name under that prefix ensures that any identifier is globally unique within the context of the System."),(0,a.kt)("p",null,"Depending on the service there are two ways to generate the SUFFIX a) automatic and b) manual"),(0,a.kt)("h2",{id:"automatic-generation-of-suffix"},"Automatic generation of SUFFIX"),(0,a.kt)("p",null,"The API supports the automatic generation of a local name - suffix by using a generator via a POST Request. This generator uses UUIDs to guarantee the uniqueness of created handles. The syntax follows the following pattern"),(0,a.kt)("span",{class:"txtcenter"},(0,a.kt)("strong",null,"SUFFIX = prefix - UUID - suffix ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"where"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prefix"),": Optional: a string of UTF-8 encoded printable unicode characters to put before the UUID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UUID"),": UUID stands for Universally Unique IDentifier, GUID for Globally Unique IDentifier. A universally unique identifier (UUID) is an identifier standard used in software construction, standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE). The intent of UUIDs is to enable distributed systems to uniquely identify information without significant central coordination."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"suffix"),": Optional: a string of UTF-8 encoded printable unicode characters to put after the UUID.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example we are going to use the automatic creation of PID. The automatic generation of PID is executed using a POST HTTP Request."),(0,a.kt)(g.Z,{defaultValue:"curl",values:[{label:"Curl",value:"curl"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Perl",value:"perl"}],mdxType:"Tabs"},(0,a.kt)(m.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)(i,{mdxType:"Curl"})),(0,a.kt)(m.Z,{value:"python",mdxType:"TabItem"},(0,a.kt)(d,{mdxType:"Python"})),(0,a.kt)(m.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"PHP"})),(0,a.kt)(m.Z,{value:"perl",mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"Perl"}))),(0,a.kt)(h,{mdxType:"Results"}))}P.isMDXComponent=!0}}]);