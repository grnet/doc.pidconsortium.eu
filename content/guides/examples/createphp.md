---
title: PHP
parent: create
order: 3
---

The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$UUID = gen_uuid(); //a function to generate a uuid
$URL_TO_OPEN = $PIDSERVICE_URL.$UUID;
$data = array(array('type' => 'URL','parsed_data'=>'http://www.grnet.gr/'));
$update_json=json_encode($data);

// Get cURL resource
$ch = curl_init();

//Set the headers to complete the request
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($update_json)));

//set the PUT Action
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

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

function gen_uuid() {
    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            // 32 bits for "time_low"
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

            // 16 bits for "time_mid"
            mt_rand( 0, 0xffff ),

            // 16 bits for "time_hi_and_version",
            // four most significant bits holds version number 4
            mt_rand( 0, 0x0fff ) | 0x4000,

            // 16 bits, 8 bits for "clk_seq_hi_res",
            // 8 bits for "clk_seq_low",
            // two most significant bits holds zero and one for variant DCE1.1
            mt_rand( 0, 0x3fff ) | 0x8000,

            // 48 bits for "node"
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
    );
}

</code></pre>



