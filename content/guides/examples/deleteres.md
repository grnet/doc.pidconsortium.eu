---
title: Search Results
parent: resultdelete
order: 1
---
### The response:
- HTTP/1.1 204 No Content: (Success)
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong
- HTTP/1.1 404 Not found: The resource doesn't exist
- HTTP/1.1 403 Forbidden: The operation is not permitted
- HTTP/1.1 405 Method Not Allowed: The submitted url with PID is wrong

<pre><code>
> DELETE /handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5 HTTP/1.1
> Authorization: Basic Y2xhcmluLWVsOjUxMjdkZWIxZTJjNg==
> User-Agent: curl/7.22.0 (i686-pc-linux-gnu) libcurl/7.22.0 OpenSSL/1.0.1 zlib/1.2.3.4 libidn/1.23 librtmp/2.3
> Host: epic.grnet.gr
> Accept:application/json
> Content-Type:application/json
>
< HTTP/1.1 204 No Content
< Date: Fri, 22 Nov 2013 13:05:14 GMT
< Content-Length: 0
</code></pre>


