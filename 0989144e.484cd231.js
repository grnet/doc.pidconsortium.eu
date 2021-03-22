(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return $}));var r=t(0),s=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),d=function(e){var n=s.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return s.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},l=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=d(t),l=r,$=c["".concat(a,".").concat(l)]||c[l]||f[l]||i;return t?s.a.createElement($,o(o({ref:n},p),{},{components:t})):s.a.createElement($,o({ref:n},p))}));function $(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=l;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},49:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(2),s=t(6),i=(t(0),t(125)),a={title:"Perl",parent:"generate",order:4},o={unversionedId:"examples/generateperl",id:"examples/generateperl",isDocsHomePage:!1,title:"Perl",description:"The request in perl",source:"@site/docs/examples/generateperl.md",slug:"/examples/generateperl",permalink:"/doc.pidconsortium.eu/docs/examples/generateperl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/generateperl.md",version:"current"},u=[],p={rightToc:u};function d(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The request in perl"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-perl"},"#!/usr/bin/perl\n\nuse strict;\nuse warnings;\nuse Data::Dumper;\nuse Getopt::Long;\nuse Switch 'Perl5', 'Perl6';\nuse JSON;\nuse WWW::Curl::Easy;\n\nmy $fullargv0 = $0;\nmy ($argv0) = $fullargv0 =~ /([^\\/\\\\]+)$/;\n\nmy %settings = (\n'debug' => 'False',\n'handle' => {\n    'action' =>'put',\n    'credentials'   =>  {\n        'username'  => 'empty',\n        'password'  => 'empty',\n        'baseuri'   => 'empty',\n    },\n    'data'  =>{\n        'get'   => '',\n        'putpost'=> '',\n    },\n    'format' => 'none',\n    'headerextra'   => '',\n    'type' => 'none',\n    'url'=> {\n        'pid'=> 'prefix=GRNET&suffix=TEST',\n    },\n},\n);\n\n# Main subroutine\nsub main {\n\n    #Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Get the script arguments\n    (my $returncode) = get_arguments($settings_ref);\n\n    if( $returncode == 0 ) \n     performPost($settings_ref);\n\n    return($returncode);\n}\n \n# Subroutine to perform a POST action\nsub performPost {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    #construct url and headers\n    my $url=\"$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}\";\n    printf(\"The constructed url is        : %s\\n\",$url) if $settings_ref->{debug} =~ /True/ ;\n    my @httpHeaders = ( 'Content-Type: application/json' );\n\n    #construct data\n    my $data=$settings_ref->{handle}->{data}->{putpost};\n    printf(\"The data is                   : %s\\n\",$data) if $settings_ref->{debug} =~ /True/ ;\n\n    # perform action\n    (my $returncode, my $response_code, my $response_content_type, my $response_url ) = httpPost($settings_ref, $url, \\@httpHeaders, $data );\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_url\\n\");\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\");\n        } \n\n    } else {\n        print('An error happened\\n');\n    }\n}\n\n# reader helper calback function\nsub read_callback {\n    my ($maxlength,$pointer)=@_;\n    # printf(\"The MAXLENGTH is     : \\n\", $maxlength);\n    # printf(\"The POINTER is       : \\n\", $$pointer) ;\n    my $data = $$pointer;\n    $$pointer = \"\";\n    return $data;\n}\n\n# Subroutine to post data via a http POST\nsub httpPost {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n    my $url = shift;\n    my $httpHeaders_ref = shift;\n    my $data = shift;\n\n    print('Entering httpPost             :\\n')         if $settings_ref->{debug} =~ /True/;\n\n    # local varables\n    my $body = \"\";\n    my $header = \"\";\n    my $response_body;\n    my $response_code;\n    my $response_content_type;\n    my $response_url = \"\";\n\n    my $curl = WWW::Curl::Easy->new;\n\n    # set options for the curl http request\n    $curl->setopt(CURLOPT_HEADER, 1);\n    $curl->setopt(CURLOPT_HTTPHEADER, $httpHeaders_ref );\n    $curl->setopt(CURLOPT_POST, 1);\n    $curl->setopt(CURLOPT_POSTFIELDS, $data);\n    $curl->setopt(CURLOPT_POSTFIELDSIZE, length($data)) ;\n    $curl->setopt(CURLOPT_URL, $url);\n    $curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});\n    $curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});\n\n    #debugging\n    #$curl->setopt (CURLOPT_VERBOSE, 1);\n\n    # A filehandle, reference to a scalar or reference to a typeglob can be used here.\n    open my $fh, '>:encoding(UTF-8)', \\$response_body or die \"$!\";\n    $curl->setopt(CURLOPT_WRITEDATA, $fh);\n\n    # Do the actual curl http request\n    my $returncode = $curl->perform;\n\n    # close file handle\n    close($fh);\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n        $response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);\n        $response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);\n        print(\"Received response code        : $response_code\\n\")         if $settings_ref->{debug} =~ /True/;\n        print(\"Received response content type: $response_content_type\\n\") if $settings_ref->{debug} =~ /True/;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_body\\n\") if $settings_ref->{debug} =~ /True/;\n            open my $fh, '<:encoding(UTF-8)', \\$response_body or die \"$!\";\n            while (my $row = <$fh>) {\n                chomp $row;\n                print \"row: $row\\n\" if $settings_ref->{debug} =~ /True/;\n                if ( $row =~ /^Location/ ) {\n                    $response_url = $row;\n                    $response_url =~ s/^Location: // ;\n                    print(\"Received response url         : $response_url\\n\") if $settings_ref->{debug} =~ /True/;\n                    last;\n                }\n            }\n\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\") if $settings_ref->{debug} =~ /True/;\n        } \n\n    } else {\n        # Error code, type of error, error message\n        print(\"An error happened: $returncode \".$curl->strerror($returncode).\" \".$curl->errbuf.\"\\n\");\n    }\n\n    # Return the results\n    return($returncode, $response_code, $response_content_type, $response_url );\n}\n\n# Subroutine to get and check all script arguments\nsub get_arguments {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Define local variables\n    my %arguments;\n    my $username;\n    my $password;\n    my $baseUri;\n    my $pidUrl;\n    my $credentials;\n    my $handleData;\n    my $type;\n    my $header;\n    my $returncode=0;\n    my $message;\n    my @sources;\n\n    GetOptions( 'h|help'    => \\$arguments{help},\n        'user=s'        => \\$username,\n        'passwd=s'      => \\$password,\n        'base=s'        => \\$baseUri,\n        'pid=s'         => \\$pidUrl,\n        'cred=s'        => \\$credentials,\n        'data=s'        => \\$handleData,\n        'type=s'        => \\$type,\n        'header=s'      => \\$header,\n        'get'           => \\$arguments{get},\n        'put'           => \\$arguments{put},\n        'delete'        => \\$arguments{delete},\n        'post'          => \\$arguments{post},\n        'pretty'        => \\$arguments{pretty},\n        'd|debug'       => \\$arguments{debug},\n    );\n\n    # Check the help flag\n    if( $arguments{help} ) {\n\n        # Set the returncode\n        $returncode=255;\n\n        $message = print_help();\n    }\n    \n    # Check the debug flag\n    if( $arguments{debug} ) {\n\n        $settings_ref->{debug} = 'True';\n        printf('debug is                      : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the pretty flag\n    if( $arguments{pretty} ) {\n\n        $settings_ref->{handle}->{format} = 'pretty';\n        printf('pretty format printing is     : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the action flag's (get,put,delete,post,search,nagios)\n    if( $arguments{get} ) {\n\n        $settings_ref->{handle}->{action} = 'get';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{put} ) {\n\n        $settings_ref->{handle}->{action} = 'put';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{delete} ) {\n\n        $settings_ref->{handle}->{action} = 'delete';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{post} ) {\n\n        $settings_ref->{handle}->{action} = 'post';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the username\n    if( $username ) {\n\n        $settings_ref->{handle}->{credentials}->{username} = $username;\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the password\n    if( $password ) {\n\n        $settings_ref->{handle}->{credentials}->{password} = $password;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the base uri\n    if( $baseUri ) {\n\n        $settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the pid url\n    if( $pidUrl ) {\n\n        $settings_ref->{handle}->{url}->{pid} = $pidUrl;\n        printf(\"The pid is                    : %s\\n\",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the handle data\n    if( $handleData ) {\n\n        $settings_ref->{handle}->{data}->{putpost} = $handleData;\n        printf(\"The data is                   : %s\\n\",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the type data\n    if( $type ) {\n\n        $settings_ref->{handle}->{type} = $type;\n        printf(\"The type(s) to show is/are    : %s\\n\",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n    \n    # check the header data\n    if( $header ) {\n\n        $settings_ref->{handle}->{headerextra} = $header;\n        printf(\"The extra header info is      : %s\\n\",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the credentials data\n    if( $credentials ) {\n\n        # read the credentials from the file\n        my $filename = $credentials;\n        my $json_text = do {\n            open(my $json_fh, \"<:encoding(UTF-8)\", $filename)  or die(\"Can't open $filename: $!\\n\");\n            local $/;\n            <$json_fh>\n        };\n\n        # convert from json and put in correct place \n        my $json = JSON->new;\n        $settings_ref->{handle}->{credentials} = $json->decode($json_text);\n\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n    }\n\n    # Print the message\n    if( $message ) {\n\n        print \"$message\\n\";\n    };\n\n    # Return the results\n    return($returncode);\n\n};\n\n")))}d.isMDXComponent=!0}}]);