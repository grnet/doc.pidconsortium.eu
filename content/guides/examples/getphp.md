---
title: PHP
parent: get
order: 3
---

The request in php 

<pre><code class="language-php5">

$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$PID="THE_PID"; //"05C3DB56-5692-11E3-AF8F-1C6F65A666B5";
$GETPIDURL =$PIDSERVICE_URL.$PID;


// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt($curl,CURLOPT_URL,$GETPIDURL);
// Set the authentication options
curl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

// Include header in result? (0 = yes, 1 = no)
curl_setopt($curl, CURLOPT_HEADER, 0);
// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Download the given URL, and return output
$output = curl_exec($curl);
$info = curl_getinfo($curl);
if( $info['http_code']==200) echo "PID DATA";
if( $info['http_code']==401) echo "Authorization problem";
if( $info['http_code']==404) echo "Not found";

// Close the cURL resource, and free system resources
curl_close($curl);


</code></pre>



