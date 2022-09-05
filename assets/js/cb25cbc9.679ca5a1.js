"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[500],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),h=a,f=c["".concat(o,".").concat(h)]||c[h]||d[h]||s;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const s="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(7462),a=t(7294),s=t(6010),i=t(2389),l=t(7392),o=t(7094),u=t(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var n;const{lazy:t,block:i,defaultValue:c,values:h,groupId:f,className:m}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),$=h??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),_=(0,l.l)($,((e,n)=>e.value===n.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==y&&!$.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${$.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:T}=(0,o.U)(),[k,v]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=f){const e=b[f];null!=e&&e!==k&&$.some((n=>n.value===e))&&v(e)}const D=e=>{const n=e.currentTarget,t=E.indexOf(n),r=$[t].value;r!==k&&(N(n),v(r),null!=f&&T(f,String(r)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},$.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>E.push(e),onKeyDown:P,onFocus:D,onClick:D},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function h(e){const n=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>_,default:()=>v,frontMatter:()=>$,metadata:()=>y,toc:()=>T});var r=t(7462),a=(t(7294),t(3905));const s={toc:[]};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -D- -u "YOURUSERNAME:YOURPASSWORD" -X GET -H "Content-Type: application/json" https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5\n')))}i.isMDXComponent=!0;const l={toc:[]};function o(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in perl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-perl"},"#!/usr/bin/perl\n\nuse strict;\nuse warnings;\nuse Data::Dumper;\nuse Getopt::Long;\nuse Switch 'Perl5', 'Perl6';\nuse JSON;\nuse WWW::Curl::Easy;\n\nmy $fullargv0 = $0;\nmy ($argv0) = $fullargv0 =~ /([^\\/\\\\]+)$/;\n\n\x3c!---\nmy %settings = (\n'debug' => 'False',\n'handle' => {\n    'action' =>'get',\n    'credentials'   =>  {\n        'username'  => 'empty',\n        'password'  => 'empty',\n        'baseuri'   => 'empty',\n    },\n    'data'  =>{\n        'get'   => '',\n        'putpost'=> '',\n    },\n    'format' => 'none',\n    'headerextra'   => '',\n    'type' => 'none',\n    'url'=> {\n        'pid'=> '',\n    },\n},\n);\n\n# Main subroutine\nsub main {\n\n    #Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Get the script arguments\n    (my $returncode) = get_arguments($settings_ref);\n\n    if( $returncode == 0 ) \n        performGet($settings_ref); \n\n    return($returncode);\n}\n \n# Subroutine to perform a GET action\nsub performGet {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    #construct url and headers\n    my $url=\"$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}\";\n    printf(\"The constructed url is        : %s\\n\",$url) if $settings_ref->{debug} =~ /True/ ;\n    my @httpHeaders = ('Accept: application/json' ) ;\n    push(@httpHeaders, \"$settings_ref->{handle}->{headerextra}\" ) if $settings_ref->{handle}->{headerextra} ;\n\n    # perform action\n    (my $returncode, my $response_code, my $response_content_type ) = httpGet($settings_ref, $url, \\@httpHeaders);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print Dumper $settings_ref->{handle}->{data}->{get} if $settings_ref->{debug} =~ /True/ ;\n\n            # show only types we want to show. implicit is that we than only show type and parsed_data\n            unless ( $settings_ref->{handle}->{type} =~ /none/ ) {\n\n                if (ref($settings_ref->{handle}->{data}->{get}) eq 'ARRAY') {\n                    print \"We have an array of hashes \\n\" if $settings_ref->{debug} =~ /True/ ;\n\n                    # grep so we have only the hashes with the selected fields\n                    @{$settings_ref->{handle}->{data}->{get}} = grep {$_->{type} =~ /$settings_ref->{handle}->{type}/ } @{$settings_ref->{handle}->{data}->{get}} ; \n                    print Dumper @{$settings_ref->{handle}->{data}->{get}} if $settings_ref->{debug} =~ /True/ ;\n\n                    # delete items from retrieved handle which are not type and parsed_data\n                    for my $hash ( @{$settings_ref->{handle}->{data}->{get}}) {\n                        foreach my $key ( keys %$hash ) {           \n                            print \"key: $key, value: $hash->{$key}\\n\" if $settings_ref->{debug} =~ /True/ ;\n                            unless ( $key =~ /^type|^parsed_data/ ) {\n                                delete $hash->{$key};\n                            }\n                        }   \n                    }\n                } else {\n                    print \"We have a hash of arrays of hashes \\n\" if  $settings_ref->{debug} =~ /True/ ;\n                    # grep so we have only the hashes with the selected fields\n                    for my $array (values(%{$settings_ref->{handle}->{data}->{get}})) { \n                        @$array = grep {$_->{type} =~ /$settings_ref->{handle}->{type}/ } @$array ;\n                    } \n                    print Dumper %{$settings_ref->{handle}->{data}->{get}} if $settings_ref->{debug} =~ /True/ ;\n\n                    # delete items from retrieved handle which are not type and parsed_data\n                    for my $array (values(%{$settings_ref->{handle}->{data}->{get}})) { \n                        for my $hash ( @$array ) {\n                            foreach my $key ( keys %$hash ) {           \n                                print \"key: $key, value: $hash->{$key}\\n\" if $settings_ref->{debug} =~ /True/ ;\n                                unless ( $key =~ /^type|^parsed_data/ ) {\n                                    delete $hash->{$key};\n                                }\n                            }\n                        }   \n                    }\n                }\n            }\n\n            # print the data in json format, pretty if the parameter is set\n            my $json = JSON->new;\n            my $json_printed;\n            if ( $settings_ref->{handle}->{format} =~ /pretty/ ) {\n                $json_printed = $json->pretty->encode( $settings_ref->{handle}->{data}->{get} );\n            } else {\n                $json_printed = $json->encode( $settings_ref->{handle}->{data}->{get} );\n            }\n            print(\"$json_printed\\n\");\n\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\");\n        } \n\n    } else {\n        print('An error happened\\n');\n    }\n}\n\n# reader helper calback function\nsub read_callback {\n    my ($maxlength,$pointer)=@_;\n    # printf(\"The MAXLENGTH is     : \\n\", $maxlength);\n    # printf(\"The POINTER is       : \\n\", $$pointer) ;\n    my $data = $$pointer;\n    $$pointer = \"\";\n    return $data;\n}\n\n# Subroutine to retrieve data via a http GET\nsub httpGet {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n    my $url = shift;\n    my $httpHeaders_ref = shift;\n\n    print('Entering httpGet              :\\n')         if $settings_ref->{debug} =~ /True/;\n\n    # local varables\n    my $response_body;\n    my $response_code;\n    my $response_content_type;\n\n    my $curl = WWW::Curl::Easy->new;\n\n    # set options for the curl http request\n    $curl->setopt(CURLOPT_HEADER, 0);\n    $curl->setopt(CURLOPT_HTTPHEADER, $httpHeaders_ref );\n    $curl->setopt(CURLOPT_URL, $url);\n    $curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});\n    $curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});\n\n    # A filehandle, reference to a scalar or reference to a typeglob can be used here.\n    open my $fh, '>', \\$response_body or die \"$!\";\n    $curl->setopt(CURLOPT_WRITEDATA, $fh);\n\n    # Do the actual curl http request\n    my $returncode = $curl->perform;\n\n    # close file handle\n    close($fh);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        $response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);\n        $response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);\n        print(\"Received response code        : $response_code\\n\")         if $settings_ref->{debug} =~ /True/;\n        print(\"Received response content type: $response_content_type\\n\") if $settings_ref->{debug} =~ /True/;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_body\\n\") if $settings_ref->{debug} =~ /True/;\n\n            # convert from json and put in correct place \n            my $json = JSON->new;\n            $settings_ref->{handle}->{data}->{get} = $json->decode($response_body);\n\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\") if $settings_ref->{debug} =~ /True/;\n        } \n\n    } else {\n        # Error code, type of error, error message\n        print(\"An error happened: $returncode \".$curl->strerror($returncode).\" \".$curl->errbuf.\"\\n\");\n    }\n\n    # Return the results\n    return($returncode, $response_code, $response_content_type );\n}\n\n# Subroutine to get and check all script arguments\nsub get_arguments {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Define local variables\n    my %arguments;\n    my $username;\n    my $password;\n    my $baseUri;\n    my $pidUrl;\n    my $credentials;\n    my $handleData;\n    my $type;\n    my $header;\n    my $returncode=0;\n    my $message;\n    my @sources;\n\n    GetOptions( 'h|help'    => \\$arguments{help},\n        'user=s'        => \\$username,\n        'passwd=s'      => \\$password,\n        'base=s'        => \\$baseUri,\n        'pid=s'         => \\$pidUrl,\n        'cred=s'        => \\$credentials,\n        'data=s'        => \\$handleData,\n        'type=s'        => \\$type,\n        'header=s'      => \\$header,\n        'get'           => \\$arguments{get},\n        'put'           => \\$arguments{put},\n        'delete'        => \\$arguments{delete},\n        'post'          => \\$arguments{post},\n        'pretty'        => \\$arguments{pretty},\n        'd|debug'       => \\$arguments{debug},\n    );\n\n    # Check the help flag\n    if( $arguments{help} ) {\n\n        # Set the returncode\n        $returncode=255;\n\n        $message = print_help();\n    }\n    \n    # Check the debug flag\n    if( $arguments{debug} ) {\n\n        $settings_ref->{debug} = 'True';\n        printf('debug is                      : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the pretty flag\n    if( $arguments{pretty} ) {\n\n        $settings_ref->{handle}->{format} = 'pretty';\n        printf('pretty format printing is     : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the action flag's (get,put,delete,post,search,nagios)\n    if( $arguments{get} ) {\n\n        $settings_ref->{handle}->{action} = 'get';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{put} ) {\n\n        $settings_ref->{handle}->{action} = 'put';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{delete} ) {\n\n        $settings_ref->{handle}->{action} = 'delete';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{post} ) {\n\n        $settings_ref->{handle}->{action} = 'post';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the username\n    if( $username ) {\n\n        $settings_ref->{handle}->{credentials}->{username} = $username;\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the password\n    if( $password ) {\n\n        $settings_ref->{handle}->{credentials}->{password} = $password;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the base uri\n    if( $baseUri ) {\n\n        $settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the pid url\n    if( $pidUrl ) {\n\n        $settings_ref->{handle}->{url}->{pid} = $pidUrl;\n        printf(\"The pid is                    : %s\\n\",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the handle data\n    if( $handleData ) {\n\n        $settings_ref->{handle}->{data}->{putpost} = $handleData;\n        printf(\"The data is                   : %s\\n\",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the type data\n    if( $type ) {\n\n        $settings_ref->{handle}->{type} = $type;\n        printf(\"The type(s) to show is/are    : %s\\n\",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n    \n    # check the header data\n    if( $header ) {\n\n        $settings_ref->{handle}->{headerextra} = $header;\n        printf(\"The extra header info is      : %s\\n\",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the credentials data\n    if( $credentials ) {\n\n        # read the credentials from the file\n        my $filename = $credentials;\n        my $json_text = do {\n            open(my $json_fh, \"<:encoding(UTF-8)\", $filename)  or die(\"Can't open $filename: $!\\n\");\n            local $/;\n            <$json_fh>\n        };\n\n        # convert from json and put in correct place \n        my $json = JSON->new;\n        $settings_ref->{handle}->{credentials} = $json->decode($json_text);\n\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n    }\n\n    # Print the message\n    if( $message ) {\n\n        print \"$message\\n\";\n    };\n\n    # Return the results\n    return($returncode);\n\n};\n")))}o.isMDXComponent=!0;const u={toc:[]};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in php "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";\n$PIDSERVICE_USER="YOURUSERNAME";\n$PIDSERVICE_PASSWD="YOURPASSWORD";\n$PID="THE_PID"; //"05C3DB56-5692-11E3-AF8F-1C6F65A666B5";\n$GETPIDURL =$PIDSERVICE_URL.$PID;\n\n\n// Get cURL resource\n$curl = curl_init();\n// Set some options - we are passing in a useragent too here\ncurl_setopt($curl,CURLOPT_URL,$GETPIDURL);\n// Set the authentication options\ncurl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);\ncurl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);\n\n// Include header in result? (0 = yes, 1 = no)\ncurl_setopt($curl, CURLOPT_HEADER, 0);\n// Should cURL return or print out the data? (true = return, false = print)\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n// Download the given URL, and return output\n$output = curl_exec($curl);\n$info = curl_getinfo($curl);\nif( $info[\'http_code\']==200) echo "PID DATA";\nif( $info[\'http_code\']==401) echo "Authorization problem";\nif( $info[\'http_code\']==404) echo "Not found";\n\n// Close the cURL resource, and free system resources\ncurl_close($curl);\n')))}p.isMDXComponent=!0;const d={toc:[]};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The request in python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import urllib.request, urllib.error, urllib.parse\nimport json\n\nPIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX" #dont forget to add "/" at the end\nPIDSERVICE_USER="YOURUSERNAME"\nPIDSERVICE_PASSWD="YOURPASSWORD"\nHANDLENAME="YOUR_PID" #for example "66742AB2-5685-11E3-A413-1C6F65A666B5"\nURL_TO_OPEN=PIDSERVICE_URL+HANDLENAME\nDATAURL=\'\'\n\n# create a password manager\npassword_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()\n\n# Add the username and password.\npassword_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)\n\nhandler = urllib.request.HTTPBasicAuthHandler(password_mgr)\n\n# create "opener" (OpenerDirector instance)\nopener = urllib.request.build_opener(handler)\n\n# use the opener to fetch a URL\nopener.open(PIDSERVICE_URL)\n\n# Install the opener.\n# Now all calls to urllib2.urlopen use the created opener.\nurllib.request.install_opener(opener)\n\nREQUESTDATA = urllib.request.Request(URL_TO_OPEN)\ntry:\n    DATAURL = urllib.request.urlopen(REQUESTDATA)\nexcept urllib.error.URLError as e:\n    if e.code == 404:\n        print("404-Not found")\n    if e.code == 401:\n        print("401-Authentication failed")\n\nif DATAURL:\n    # Getting the code\n    print("This gets the code: ", DATAURL.code)\n    if DATAURL.code == 200:\n        print("PID data: ",json.loads(DATAURL.read()))\n \n')))}c.isMDXComponent=!0;const h={toc:[{value:"The response:",id:"the-response",level:3}]};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"the-response"},"The response:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP/1.1 200 OK: (Success)"),(0,a.kt)("li",{parentName:"ul"},"HTTP/1.1 401 Unauthorized: Your username or your password is wrong"),(0,a.kt)("li",{parentName:"ul"},"HTTP/1.1 404 NOT found: The url doesn't exist")),(0,a.kt)("p",null,"After a successful request, the response consists of an array of the PID and an array of all the information that apply to it. The response provides the idx, the type, and all the data described in the data model. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Get all data:  [\n{\n"idx":1,\n"type":"URL",\n"parsed_data":"http://www.grnet.gr/",\n"data":"aHR0cDovL3d3dy5ncm5ldC5nci8=",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n{\n"idx":2,\n"type":"URL",\n"parsed_data":"https://www.grnet.gr/en/node/64",\n"data":"aHR0cHM6Ly93d3cuZ3JuZXQuZ3IvZW4vbm9kZS82NA==",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n{\n"idx":3,\n"type":"INST",\n"parsed_data":"CLARIN-EL",\n"data":"Q0xBUklOLUVM",\n"timestamp":"2013-11-26T11:58:14Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n},\n\n{\n"idx":100,\n"type":"HS_ADMIN",\n"parsed_data":{\n"adminId":"0.NA/11239",\n"adminIdIndex":300,\n"perms":{\n"add_handle":true,\n"delete_handle":true,\n"add_naming_auth":false,\n"delete_naming_auth":false,\n"modify_value":true,\n"remove_value":true,\n"add_value":true,\n"read_value":true,\n"modify_admin":true,\n"remove_admin":true,\n"add_admin":true,\n"list_handles":false\n}\n},\n"data":"B/MAAAAKMC5OQS8xMTIzOQAAASw=",\n"timestamp":"2013-11-15T14:25:58Z",\n"ttl_type":0,\n"ttl":86400,\n"refs":[],\n"privs":"rwr-"\n}\n]\n')))}f.isMDXComponent=!0;var m=t(5488),g=t(5162);const $={id:"api-get",title:"API - Get a PID",kind:"code",slug:"get",result:"resultget",sidebar_position:5},_="API - GET a PID",y={unversionedId:"epic_api/api-get",id:"epic_api/api-get",title:"API - Get a PID",description:"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.",source:"@site/docs/epic_api/api-get.md",sourceDirName:"epic_api",slug:"/epic_api/get",permalink:"/docs/epic_api/get",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"api-get",title:"API - Get a PID",kind:"code",slug:"get",result:"resultget",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"API - PID generation",permalink:"/docs/epic_api/generate"},next:{title:"API - List PID",permalink:"/docs/epic_api/list"}},b={},T=[{value:"GET a PID - Description",id:"get-a-pid---description",level:2},{value:"Example",id:"example",level:2}],k={toc:T};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api---get-a-pid"},"API - GET a PID"),(0,a.kt)("p",null,"This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON."),(0,a.kt)("h2",{id:"get-a-pid---description"},"GET a PID - Description"),(0,a.kt)("p",null,"Once you have the PID url, then you can retrieve the information at once for this PID, by just supplying its URL. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Description")),(0,a.kt)("td",{parentName:"tr",align:null},"GET a PID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The  API Service URL with the suffix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"HTTP Method")),(0,a.kt)("td",{parentName:"tr",align:null},"GET")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Security")),(0,a.kt)("td",{parentName:"tr",align:null},"You must authenticate before actually getting PID information.")))),(0,a.kt)("p",null,"The data you must send in order to get the PID are described in the following table "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url to authenticate"),(0,a.kt)("td",{parentName:"tr",align:null},"a url to authenticate. We use the service PID service URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://epic.grnet.gr/api/v2/handles/"},"https://epic.grnet.gr/api/v2/handles/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"your username"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"your password"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example we are going to retrieve the information of a PID with the following URL ",(0,a.kt)("a",{parentName:"p",href:"https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5"},"https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5")),(0,a.kt)(m.Z,{defaultValue:"curl",values:[{label:"Curl",value:"curl"},{label:"Python",value:"python"},{label:"PHP",value:"php"},{label:"Perl",value:"perl"}],mdxType:"Tabs"},(0,a.kt)(g.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)(i,{mdxType:"Curl"})),(0,a.kt)(g.Z,{value:"python",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"Python"})),(0,a.kt)(g.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"PHP"})),(0,a.kt)(g.Z,{value:"perl",mdxType:"TabItem"},(0,a.kt)(o,{mdxType:"Perl"}))),(0,a.kt)(f,{mdxType:"Results"}))}v.isMDXComponent=!0}}]);