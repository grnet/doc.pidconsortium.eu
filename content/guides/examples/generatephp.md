---
title: PHP
parent: generate
order: 3
---

The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$UUID = "?prefix=GRNET&suffix=TEST";
$URL_TO_OPEN = $PIDSERVICE_URL.$UUID;
$data = array(array('type' => 'URL','parsed_data'=>'http://www.grnet.gr/'));
$update_json=json_encode($data);

// Get cURL resource
$ch = curl_init();

//Set the headers to complete the request
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($update_json)));

//set the POST Action
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");

//SET the postfield data
curl_setopt($ch, CURLOPT_POSTFIELDS,$update_json);

// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//Set the url with the new name of the PID 
curl_setopt($ch, CURLOPT_URL, $URL_TO_OPEN);

// Set the authentication options
curl_setopt($ch, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

$output = curl_exec($ch);
$info = curl_getinfo($ch);

// Download the given URL, and return output 

if( $info['http_code']==200) echo "HANDLE EXISTS<br/>";
if( $info['http_code']==201) echo "PID CREATED<br/>";
if( $info['http_code']==204) echo "PID UPDATED<br/>";
if( $info['http_code']==404) echo "HANDLE DOESNT EXIST<br/>";

curl_close($ch);

</code></pre>



