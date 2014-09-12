---
title: PHP
parent: auth
order: 3
---

The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
// Get cURL resource
$curl = curl_init();

// Set the url to authenticate
curl_setopt($curl,CURLOPT_URL,$PIDSERVICE_URL);
// Set the authentication options
curl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

// Include header in result? (0 = yes, 1 = no)
curl_setopt($curl, CURLOPT_HEADER, 0);
// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Download the given URL, and return output
$output = curl_exec($curl);
$finalData = json_decode($output);

$info = curl_getinfo($curl);
if( $info['http_code']==200) echo "Authorization ok<br/>";
if( $info['http_code']==401) echo "Authorization failed: Either your login or your password is wrong.<br/>";

// Close the cURL resource, and free system resources
curl_close($curl);

</code></pre>



