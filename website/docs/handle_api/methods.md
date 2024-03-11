---
id: methods
title: Methods
slug: methods
sidebar_position: 6
---


## Methods - GET Handle

```
/api/handles/{handle}
```

Resolves the handle record for handle `{handle}`.

URI query parameters:
* **index=\{index\}**
Specifies that only the handle value with index `{index}` should be resolved. The query parameter
can be repeated to indicate a collection of handle values.
* **type=\{type\}**
Specifies that only the handle values with type `{type}` should be resolved. If `{type}` ends with a
period all period-delimited subtypes are included. The query parameter can be repeated.
Multiple index and type parameters indicate that all handle values either of a matching index or
a matching type should be resolved.
* **auth=[true|false]**
If true, perform an authoritative resolution, bypassing cache and sending the request to a
primary server. Default: false. This flag is ignored in requests sent directly to an end server
(instead of a proxy).
* **publicOnly=[true|false]**
If true, only resolve publicly readable handle values. If false, resolve all values, potentially
resulting in a 401 Unauthorized response. Default: true for unauthenticated requests, false for
authenticated requests.


Response entity: an object with the following properties:
* "responseCode": Handle protocol response code for the message.
* "handle": The handle specified in the request.
* "message": For error responses, an error message.
* "values": An array of handle values.


## Methods - PUT

```
/api/handles/{handle}
```

```
/api/handles/{handle}?index={index}
```

Create the handle `{handle}` or replace its handle record. If query parameters specify specific indices, add or replace those specific handle values in the handle record.

Request entity: an array of handle values, or an object with property values an array of handle values
(other properties are ignored). A single value is accepted as well.


URI query parameters:
* **index=\{index\}**
Specifies that only the handle value with index `{index}` should be added or replaced. The query
parameter can be repeated to indicate a collection of handle values. The indices must match
the indices of the handle values in the request entity.
* **index=various**
A shortcut to indicate that the handle values given in the request entity should be added or
replaced.
* **overwrite=[true|false]**
If true, replace handle records of handles which already exist, or replace handle values which
already exist. If false, return 409 Conflict for attempts to PUT an existing handle or existing
handle values. Default: true.
* **mintNewSuffix=[true|false]**
If true, the handle to be created is formed by appending a random server-generated string to
the `{handle}` parameter. Note that the slash should be included in the `{handle}` parameter.
Default: false.


Response entity: an object with the following properties:
* "responseCode": Handle protocol response code for the message.
* "handle": The handle specified in the request.
* "message": For error responses, an error message.



## Methods - DELETE

```
/api/handles/{handle}
```

```
/api/handles/{handle}?index={index}
```

Delete the handle `{handle}`. If query parameters specify specific indices, delete those specific handle
values from the handle record.


URI query parameters:
* **index=\{index\}**
Specifies that only the handle value with index `{index}` should be deleted. The query parameter
can be repeated to indicate a collection of handle values.

Response entity: an object with the following properties:
* "responseCode": Handle protocol response code for the message.
* "handle": The handle specified in the request.
* "message": For error responses, an error message.



## Methods - GET Prefix

```
/api/handles?prefix={prefix}
```

List handles under prefix `{prefix}`.

URI query parameters:
* **prefix=\{prefix\}**
Required. Specifies the prefix of the handles to be listed.
* **page=\{page\}**
**pageSize=\{pageSize\}**
Specify paginated listing. The page number `{page}` is zero-based. If the page size `{pageSize}` is
zero a count of handles is returned but no handles. If either parameter is missing or negative all
handles are returned.


Response entity: an object with the following properties:
* "responseCode": Handle protocol response code for the message.
* "prefix": The prefix specified in the request.
* "message": For error responses, an error message.
* "totalCount": The total number of handles under the given prefix.
* "handles": An array of strings.




