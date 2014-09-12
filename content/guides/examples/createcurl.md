---
title: Curl
parent: create
order: 1
---
The request in curl

<pre><code>
#!/bin/bash    

SUFFIX=`uuidgen`
curl -v -u "YOURUSERNAME:YOURPASSWORD" -H "Accept:application/json" -H "Content-Type:application/json" -X PUT --data '[{"type":"URL","parsed_data":"http://www.grnet.gr/"}]' https://epic.grnet.gr/api/v2/handles/11239/$SUFFIX 

</code></pre>

