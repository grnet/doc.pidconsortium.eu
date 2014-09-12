---
title: PHP
parent: delete
order: 3
---

The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$HANDLENAME="05C3DB56-5692-11E3-AF8F-1C6F65A666B5";
$PIDTODELETE= $PIDSERVICE_URL.$HANDLENAME;
// Get cURL resource
$curl = curl_init();

// Set the url to authenticate
curl_setopt($curl,CURLOPT_URL,$PIDTODELETE);
// Set the authentication options
curl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

//set the DELETE action
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");

// Include header in result? (0 = yes, 1 = no)
curl_setopt($curl, CURLOPT_HEADER, 0);
// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Download the given URL, and return output
$output = curl_exec($curl);
$info = curl_getinfo($curl);
if( $info['http_code']==204) echo "The PID was successfully deleted";
if( $info['http_code']==401) echo "Authorization failed: Either your login or your password is wrong.";
if( $info['http_code']==403) echo "HTTP/1.1 403 Forbidden: The operation is not permitted.<br/>";
if( $info['http_code']==405) echo "HTTP/1.1 405 Method Not Allowed: The submitted url with PID is wrong<br/>";

// Close the cURL resource, and free system resources
curl_close($curl);
</code></pre>



