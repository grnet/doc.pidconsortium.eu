---
title: Perl
parent: delete
order: 4
---

The request in perl

```perl
#!/usr/bin/perl

use strict;
use warnings;
use Data::Dumper;
use Getopt::Long;
use Switch 'Perl5', 'Perl6';
use JSON;
use WWW::Curl::Easy;

my $fullargv0 = $0;
my ($argv0) = $fullargv0 =~ /([^\/\\]+)$/;

my %settings = (
'debug' => 'False',
'handle' => {
	'action' =>'delete',
	'credentials' 	=>	{
		'username'	=> 'empty',
		'password'	=> 'empty',
		'baseuri'	=> 'empty',
	},
	'data'	=>{
		'get'	=> '',
		'putpost'=> '',
	},
	'format' => 'none',
	'headerextra'	=> '',
	'type' => 'none',
	'url'=>	{
		'pid'=> '',
	},
},
);

# Main subroutine
sub main {

	#Get the subroutine arguments
	my $settings_ref = shift;

	# Get the script arguments
	(my $returncode) = get_arguments($settings_ref);

	if( $returncode == 0 ) 
		performDelete($settings_ref); 

	return($returncode);
}
 
# Subroutine to perform a DELETE action
sub performDelete {

	# Get the subroutine arguments
	my $settings_ref = shift;

	#construct url
	my $url="$settings_ref->{handle}->{credentials}->{baseuri}$settings_ref->{handle}->{url}->{pid}";
	printf("The constructed url is        : %s\n",$url) if $settings_ref->{debug} =~ /True/ ;

	# perform action
	(my $returncode, my $response_code, my $response_content_type ) = httpDelete($settings_ref, $url );

	# Looking at the results of the curl request
	if ($returncode == 0) {
		print('Transfer went ok\n') if $settings_ref->{debug} =~ /True/ ;

		# judge result and next action based on $response_code
		if ($response_code >= 200 && $response_code < 300 ) {
			print('The request went ok\n') if $settings_ref->{debug} =~ /True/ ;
		} else {
			print('The request went NOT ok\n') if $settings_ref->{debug} =~ /True/ ;
			print("$response_code\n");
		} 

	} else {
		print('An error happened\n');
	}
}
# reader helper calback function
sub read_callback {
	my ($maxlength,$pointer)=@_;
	# printf("The MAXLENGTH is     : \n", $maxlength);
	# printf("The POINTER is       : \n", $$pointer) ;
	my $data = $$pointer;
	$$pointer = "";
	return $data;
}

# Subroutine delete via a http DELETE
sub httpDelete {

	# Get the subroutine arguments
	my $settings_ref = shift;
	my $url = shift;

	print('Entering httpDelete           :\n')         if $settings_ref->{debug} =~ /True/;

	# local varables
	my $body = "";
	my $header = "";
	my $response_code;
	my $response_content_type;

	my $curl = WWW::Curl::Easy->new;

	# set options for the curl http request
	$curl->setopt(CURLOPT_HEADER, 0);
	$curl->setopt(CURLOPT_NOBODY, 1);
	$curl->setopt(CURLOPT_CUSTOMREQUEST, 'DELETE');
	$curl->setopt(CURLOPT_URL, $url);
	$curl->setopt(CURLOPT_USERNAME, $settings_ref->{handle}->{credentials}->{username});
	$curl->setopt(CURLOPT_PASSWORD, $settings_ref->{handle}->{credentials}->{password});

	#debugging
	#$curl->setopt (CURLOPT_VERBOSE, 1);

	# Do the actual curl http request
	my $returncode = $curl->perform;

	# Looking at the results of the curl request
	if ($returncode == 0) {
		print('Transfer went ok\n') if $settings_ref->{debug} =~ /True/ ;

		$response_code         = $curl->getinfo(CURLINFO_HTTP_CODE);
		$response_content_type = $curl->getinfo(CURLINFO_CONTENT_TYPE);
		print("Received response code        : $response_code\n")         if $settings_ref->{debug} =~ /True/;
		print("Received response content type: $response_content_type\n") if $settings_ref->{debug} =~ /True/;

		# judge result and next action based on $response_code
		if ($response_code >= 200 && $response_code < 300 ) {
			print('The request went ok\n') if $settings_ref->{debug} =~ /True/ ;
		} else {
			print('The request went NOT ok\n') if $settings_ref->{debug} =~ /True/ ;
			print("$response_code\n") if $settings_ref->{debug} =~ /True/ ;
		} 

	} else {
		# Error code, type of error, error message
		print("An error happened: $returncode ".$curl->strerror($returncode)." ".$curl->errbuf."\n");
	}

	# Return the results
	return($returncode, $response_code, $response_content_type );
}
# Subroutine to get and check all script arguments
sub get_arguments {

	# Get the subroutine arguments
	my $settings_ref = shift;

	# Define local variables
	my %arguments;
	my $username;
	my $password;
	my $baseUri;
	my $pidUrl;
	my $credentials;
	my $handleData;
	my $type;
	my $header;
	my $returncode=0;
	my $message;
	my @sources;

	GetOptions( 'h|help'    => \$arguments{help},
		'user=s'		=> \$username,
		'passwd=s'		=> \$password,
		'base=s'		=> \$baseUri,
		'pid=s'			=> \$pidUrl,
		'cred=s'		=> \$credentials,
		'data=s'		=> \$handleData,
		'type=s'		=> \$type,
		'header=s'		=> \$header,
		'get'			=> \$arguments{get},
		'put'			=> \$arguments{put},
		'delete'		=> \$arguments{delete},
		'post'			=> \$arguments{post},
		'pretty'		=> \$arguments{pretty},
		'd|debug'		=> \$arguments{debug},
	);

	# Check the help flag
	if( $arguments{help} ) {

		# Set the returncode
		$returncode=255;

		$message = print_help();
	}
	
	# Check the debug flag
	if( $arguments{debug} ) {

		$settings_ref->{debug} = 'True';
		printf('debug is                      : on\n') if $settings_ref->{debug} =~ /True/ ;

	}

	# Check the pretty flag
	if( $arguments{pretty} ) {

		$settings_ref->{handle}->{format} = 'pretty';
		printf('pretty format printing is     : on\n') if $settings_ref->{debug} =~ /True/ ;

	}

	# Check the action flag's (get,put,delete,post,search,nagios)
	if( $arguments{get} ) {

		$settings_ref->{handle}->{action} = 'get';
		printf("The action is                 : %s\n", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;

	} elsif ( $arguments{put} ) {

		$settings_ref->{handle}->{action} = 'put';
		printf("The action is                 : %s\n", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;

	} elsif ( $arguments{delete} ) {

		$settings_ref->{handle}->{action} = 'delete';
		printf("The action is                 : %s\n", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;

	} elsif ( $arguments{post} ) {

		$settings_ref->{handle}->{action} = 'post';
		printf("The action is                 : %s\n", $settings_ref->{handle}->{action}) if $settings_ref->{debug} =~ /True/ ;

	}

	# check the username
	if( $username ) {

		$settings_ref->{handle}->{credentials}->{username} = $username;
		printf("The username is               : %s\n",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;

	}

	# check the password
	if( $password ) {

		$settings_ref->{handle}->{credentials}->{password} = $password;
		printf("The password is               : %s\n",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;

	}

	# check the base uri
	if( $baseUri ) {

		$settings_ref->{handle}->{credentials}->{baseuri} = $baseUri;
		printf("The base uri is               : %s\n",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;

	}

	# check the pid url
	if( $pidUrl ) {

		$settings_ref->{handle}->{url}->{pid} = $pidUrl;
		printf("The pid is                    : %s\n",$settings_ref->{handle}->{url}->{pid}) if $settings_ref->{debug} =~ /True/ ;
	
	}

	# check the handle data
	if( $handleData ) {

		$settings_ref->{handle}->{data}->{putpost} = $handleData;
		printf("The data is                   : %s\n",$settings_ref->{handle}->{data}->{putpost}) if $settings_ref->{debug} =~ /True/ ;
	
	}

	# check the type data
	if( $type ) {

		$settings_ref->{handle}->{type} = $type;
		printf("The type(s) to show is/are    : %s\n",$settings_ref->{handle}->{type}) if $settings_ref->{debug} =~ /True/ ;

	}
	
	# check the header data
	if( $header ) {

		$settings_ref->{handle}->{headerextra} = $header;
		printf("The extra header info is      : %s\n",$settings_ref->{handle}->{headerextra}) if $settings_ref->{debug} =~ /True/ ;
	
	}

	# check the credentials data
	if( $credentials ) {

		# read the credentials from the file
		my $filename = $credentials;
		my $json_text = do {
			open(my $json_fh, "<:encoding(UTF-8)", $filename)  or die("Can't open $filename: $!\n");
			local $/;
			<$json_fh>
		};

		# convert from json and put in correct place 
		my $json = JSON->new;
		$settings_ref->{handle}->{credentials} = $json->decode($json_text);

		printf("The username is               : %s\n",$settings_ref->{handle}->{credentials}->{username}) if $settings_ref->{debug} =~ /True/ ;
		printf("The password is               : %s\n",$settings_ref->{handle}->{credentials}->{password}) if $settings_ref->{debug} =~ /True/ ;
		printf("The base uri is               : %s\n",$settings_ref->{handle}->{credentials}->{baseuri}) if $settings_ref->{debug} =~ /True/ ;
	}

	# Print the message
	if( $message ) {

		print "$message\n";
	};

	# Return the results
	return($returncode);

};
```

