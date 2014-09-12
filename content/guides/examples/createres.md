---
title: Search Results
parent: resultcreate
order: 1
---
### The response:

- HTTP/1.1 201 Created: (Success) 
- HTTP/1.1 204 No-Content: The local name already exists , and instead of creating a new one you’ve just updated the values of an existing one.  
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong
- HTTP/1.1 405 Method Not Allowed: 
  1. You are trying to create a new handle in the main url of the server either (https://epic.grnet.gr/handles/11239/) or (https://epic.grnet.gr/handles). You have not specified a unique name for your handle. (or)
  2. You are trying to create a new handle with manual generation of suffix name via POST instead of PUT. POST supports automatic generation of suffix name.
- HTTP/1.1 412 Precondition failed: You have used the precondition (HTTP’s If-Match: * or If-None-Match:*) in the request-header fields. The precondition given, evaluated to false when it was tested on the server and prevented the requested method from being applied.
- HTTP/1.1 415 Unsupported Media Type: You haven't specify the correct headers for your request. The service supports Json representation so you must define the content-type of the request.


<pre><code>
HTTP/1.1 201 Created
Date: Mon, 25 Nov 2013 10:18:18 GMT
Content-Length: 2211
Location: https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5
ETag: "1B2M2Y8AsgTpgAmY7PhCfg"
Last-Modified: Thu, 01 Jan 1970 00:00:00 GMT
</code></pre>

