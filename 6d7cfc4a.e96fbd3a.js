(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return $}));var r=t(0),s=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=s.a.createContext({}),p=function(e){var n=s.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=p(e.components);return s.a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},f=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,$=l["".concat(a,".").concat(f)]||l[f]||c[f]||i;return t?s.a.createElement($,u(u({ref:n},d),{},{components:t})):s.a.createElement($,u({ref:n},d))}));function $(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var d=2;d<i;d++)a[d]=t[d];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(2),s=t(6),i=(t(0),t(123)),a={title:"Perl",parent:"delete",order:4},u={unversionedId:"examples/deleteperl",id:"examples/deleteperl",isDocsHomePage:!1,title:"Perl",description:"The request in perl",source:"@site/docs/examples/deleteperl.md",slug:"/examples/deleteperl",permalink:"/doc.pidconsortium.eu/docs/examples/deleteperl",editUrl:"https://github.com/grnet/doc.pidconsortium.eu/docs/examples/deleteperl.md",version:"current"},o=[],d={rightToc:o};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The request in perl"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-perl"},"#!/usr/bin/perl\n\nuse strict;\nuse warnings;\nuse Data::Dumper;\nuse Getopt::Long;\nuse Switch 'Perl5', 'Perl6';\nuse JSON;\nuse WWW::Curl::Easy;\n\nmy $fullargv0 = $0;\nmy ($argv0) = $fullargv0 =~ /([^\\/\\\\]+)$/;\n\nmy %settings = (\n'debug' => 'False',\n'handle' => {\n    'action' =>'delete',\n    'credentials'   =>  {\n        'username'  => 'empty',\n        'password'  => 'empty',\n        'baseuri'   => 'empty',\n    },\n    'data'  =>{\n        'get'   => '',\n        'putpost'=> '',\n    },\n    'format' => 'none',\n    'headerextra'   => '',\n    'type' => 'none',\n    'url'=> {\n        'pid'=> '',\n    },\n},\n);\n\n# Main subroutine\nsub main {\n\n    #Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Get the script arguments\n    (my $returncode) = get_arguments($settings_ref);\n\n    if( $returncode == 0 ) \n        performDelete($settings_ref); \n\n    return($returncode);\n}\n \n# Subroutine to perform a DELETE action\nsub performDelete {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    #construct url\n    my $url=\"$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}\";\n    printf(\"The constructed url is        : %s\\n\",$url) if $settings_ref->{debug} =~ /True/ ;\n\n    # perform action\n    (my $returncode, my $response_code, my $response_content_type ) = httpDelete($settings_ref, $url );\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\");\n        } \n\n    } else {\n        print('An error happened\\n');\n    }\n}\n# reader helper calback function\nsub read_callback {\n    my ($maxlength,$pointer)=@_;\n    # printf(\"The MAXLENGTH is     : \\n\", $maxlength);\n    # printf(\"The POINTER is       : \\n\", $$pointer) ;\n    my $data = $$pointer;\n    $$pointer = \"\";\n    return $data;\n}\n\n# Subroutine delete via a http DELETE\nsub httpDelete {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n    my $url = shift;\n\n    print('Entering httpDelete           :\\n')         if $settings_ref->{debug} =~ /True/;\n\n    # local varables\n    my $body = \"\";\n    my $header = \"\";\n    my $response_code;\n    my $response_content_type;\n\n    my $curl = WWW::Curl::Easy->new;\n\n    # set options for the curl http request\n    $curl->setopt(CURLOPT_HEADER, 0);\n    $curl->setopt(CURLOPT_NOBODY, 1);\n    $curl->setopt(CURLOPT_CUSTOMREQUEST, 'DELETE');\n    $curl->setopt(CURLOPT_URL, $url);\n    $curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});\n    $curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});\n\n    #debugging\n    #$curl->setopt (CURLOPT_VERBOSE, 1);\n\n    # Do the actual curl http request\n    my $returncode = $curl->perform;\n\n    # Looking at the results of the curl request\n    if ($returncode == 0) {\n        print('Transfer went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n\n        $response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);\n        $response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);\n        print(\"Received response code        : $response_code\\n\")         if $settings_ref->{debug} =~ /True/;\n        print(\"Received response content type: $response_content_type\\n\") if $settings_ref->{debug} =~ /True/;\n\n        # judge result and next action based on $response_code\n        if ($response_code >= 200 && $response_code < 300 ) {\n            print('The request went ok\\n') if $settings_ref->{debug} =~ /True/ ;\n        } else {\n            print('The request went NOT ok\\n') if $settings_ref->{debug} =~ /True/ ;\n            print(\"$response_code\\n\") if $settings_ref->{debug} =~ /True/ ;\n        } \n\n    } else {\n        # Error code, type of error, error message\n        print(\"An error happened: $returncode \".$curl->strerror($returncode).\" \".$curl->errbuf.\"\\n\");\n    }\n\n    # Return the results\n    return($returncode, $response_code, $response_content_type );\n}\n# Subroutine to get and check all script arguments\nsub get_arguments {\n\n    # Get the subroutine arguments\n    my $settings_ref = shift;\n\n    # Define local variables\n    my %arguments;\n    my $username;\n    my $password;\n    my $baseUri;\n    my $pidUrl;\n    my $credentials;\n    my $handleData;\n    my $type;\n    my $header;\n    my $returncode=0;\n    my $message;\n    my @sources;\n\n    GetOptions( 'h|help'    => \\$arguments{help},\n        'user=s'        => \\$username,\n        'passwd=s'      => \\$password,\n        'base=s'        => \\$baseUri,\n        'pid=s'         => \\$pidUrl,\n        'cred=s'        => \\$credentials,\n        'data=s'        => \\$handleData,\n        'type=s'        => \\$type,\n        'header=s'      => \\$header,\n        'get'           => \\$arguments{get},\n        'put'           => \\$arguments{put},\n        'delete'        => \\$arguments{delete},\n        'post'          => \\$arguments{post},\n        'pretty'        => \\$arguments{pretty},\n        'd|debug'       => \\$arguments{debug},\n    );\n\n    # Check the help flag\n    if( $arguments{help} ) {\n\n        # Set the returncode\n        $returncode=255;\n\n        $message = print_help();\n    }\n    \n    # Check the debug flag\n    if( $arguments{debug} ) {\n\n        $settings_ref->{debug} = 'True';\n        printf('debug is                      : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the pretty flag\n    if( $arguments{pretty} ) {\n\n        $settings_ref->{handle}->{format} = 'pretty';\n        printf('pretty format printing is     : on\\n') if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # Check the action flag's (get,put,delete,post,search,nagios)\n    if( $arguments{get} ) {\n\n        $settings_ref->{handle}->{action} = 'get';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{put} ) {\n\n        $settings_ref->{handle}->{action} = 'put';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{delete} ) {\n\n        $settings_ref->{handle}->{action} = 'delete';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    } elsif ( $arguments{post} ) {\n\n        $settings_ref->{handle}->{action} = 'post';\n        printf(\"The action is                 : %s\\n\", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the username\n    if( $username ) {\n\n        $settings_ref->{handle}->{credentials}->{username} = $username;\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the password\n    if( $password ) {\n\n        $settings_ref->{handle}->{credentials}->{password} = $password;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the base uri\n    if( $baseUri ) {\n\n        $settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n\n    # check the pid url\n    if( $pidUrl ) {\n\n        $settings_ref->{handle}->{url}->{pid} = $pidUrl;\n        printf(\"The pid is                    : %s\\n\",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the handle data\n    if( $handleData ) {\n\n        $settings_ref->{handle}->{data}->{putpost} = $handleData;\n        printf(\"The data is                   : %s\\n\",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the type data\n    if( $type ) {\n\n        $settings_ref->{handle}->{type} = $type;\n        printf(\"The type(s) to show is/are    : %s\\n\",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;\n\n    }\n    \n    # check the header data\n    if( $header ) {\n\n        $settings_ref->{handle}->{headerextra} = $header;\n        printf(\"The extra header info is      : %s\\n\",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;\n    \n    }\n\n    # check the credentials data\n    if( $credentials ) {\n\n        # read the credentials from the file\n        my $filename = $credentials;\n        my $json_text = do {\n            open(my $json_fh, \"<:encoding(UTF-8)\", $filename)  or die(\"Can't open $filename: $!\\n\");\n            local $/;\n            <$json_fh>\n        };\n\n        # convert from json and put in correct place \n        my $json = JSON->new;\n        $settings_ref->{handle}->{credentials} = $json->decode($json_text);\n\n        printf(\"The username is               : %s\\n\",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The password is               : %s\\n\",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;\n        printf(\"The base uri is               : %s\\n\",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;\n    }\n\n    # Print the message\n    if( $message ) {\n\n        print \"$message\\n\";\n    };\n\n    # Return the results\n    return($returncode);\n\n};\n")))}p.isMDXComponent=!0}}]);