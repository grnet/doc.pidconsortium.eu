---
title: API | Create a PID
kind: code
slug: create
result: resultcreate
---

# API - Create a new PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Create a new PID - Description

You want to create a new PID. There are two ways to create - generate a new PID 

- automatic generation of the suffix name via the POST method
- manual generation of the suffix name via the PUT method

HTTP PUT can be used for both resource creation and resource updates .
So if you want to be sure that you are going to create a new one you must first check if it exists. If you don't check the existence of a PID based on the suffix it is possible that you will update the data of an existing one. 

There is a way to make your HTTP PUT request “conditional” in the sense that it will only be executed if the URL doesn’t exist yet (which constitutes a create action), or that it does exist yet (which constitutes an update ). 

<p class="text-warning"><span class="label label-success">Info</span> In order to make the PUT request conditional use HTTP’s If-Match: * or If-None-Match:* headers.</p>

| **Description** | Create a new PID |
| **URL**         | The GRNET API Service URL  |
| **HTTP Method** | PUT for manual generation of suffix name                       |
| **HTTP Method** | POST for automatic generation of suffix name                       |
| **Security**    | Requires ownership of the PID. So you must authenticate before actually creating the PID|

The data you must send in order to create are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
suffix | The local name of the handle in the system | Yes | None | a) use a UUID generator via **PUT method**, b) automatic generation via **POST method** |

The data you must send as json representation are described in the following table 

Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
type |Each handle has a set of values assigned to it.  These handle values use a common data structure for its data. The data type defines the syntax and semantics of the data in its data field.  | Yes | None | URL |
parsed_data|A set of data that describes the resource identified by the handle. The syntax and semantics of parsed data are identified by the <type> field.|Yes|None|http://www.grnet.gr
timestamp|The timestamp records the last time this Handle Value was updated at the server. The field contains elapsed time since 00:00:00 UTC, January 1970 in milliseconds.|NO|timestamp|2013-11-26T11:58:14Z
ttl_type|the TTL type indicates whether the TTL value is absolute or relative.  The absolute TTL value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970.  A relative TTL specifies the time to live in terms of the number of seconds elapsed since the value was obtained by the client from any handle server.|NO|integer 0=relative, 1=absolute by default 0|0|
ttl|a number that specifies the Time-To- Live of the value record. A positive value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970. A negative value specifies the time to live in terms of the number of seconds elapsed since the value was obtained. (if ttl_type is absolute, then this indicates the date/time of expiration in seconds since Jan 1 0:00:00 1970.) |NO|integer seconds |86400|
refs|a list of references to other Handle Values| No| None| [{'idx':'1','handle':'11239/12'}] where idx is the value for index field of handle data, and handle is the referenced handle value 

## Example

In this example we are going to create a new handle via the PUT method  in the following url https://epic.grnet.gr/handles/11239/UUIDGENERATE. There is an example via POST method at [PID generation page][PIDGEN]

[PIDGEN]: /guides/api-generation/
