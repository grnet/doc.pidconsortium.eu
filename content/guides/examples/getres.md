---
title: Search Results
parent: resultget
order: 1
---
### The response:
- HTTP/1.1 200 OK: (Success)
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong
- HTTP/1.1 404 NOT found: The url doesn't exist

After a successful request, the response consists of an array of the PID and an array of all the information that apply to it. The response provides the idx, the type, and all the data described in the data model. 

<pre><code>
Get all data:  [
{
"idx":1,
"type":"URL",
"parsed_data":"http://www.grnet.gr/",
"data":"aHR0cDovL3d3dy5ncm5ldC5nci8=",
"timestamp":"2013-11-26T11:58:14Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
},
{
"idx":2,
"type":"URL",
"parsed_data":"https://www.grnet.gr/en/node/64",
"data":"aHR0cHM6Ly93d3cuZ3JuZXQuZ3IvZW4vbm9kZS82NA==",
"timestamp":"2013-11-26T11:58:14Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
},
{
"idx":3,
"type":"INST",
"parsed_data":"CLARIN-EL",
"data":"Q0xBUklOLUVM",
"timestamp":"2013-11-26T11:58:14Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
},

{
"idx":100,
"type":"HS_ADMIN",
"parsed_data":{
"adminId":"0.NA/11239",
"adminIdIndex":300,
"perms":{
"add_handle":true,
"delete_handle":true,
"add_naming_auth":false,
"delete_naming_auth":false,
"modify_value":true,
"remove_value":true,
"add_value":true,
"read_value":true,
"modify_admin":true,
"remove_admin":true,
"add_admin":true,
"list_handles":false
}
},
"data":"B/MAAAAKMC5OQS8xMTIzOQAAASw=",
"timestamp":"2013-11-15T14:25:58Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
}
]
</code></pre>

