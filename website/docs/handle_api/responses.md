---
id: responses
title: Responses
slug: responses
sidebar_position: 5
---

All response entities are JSON.


Response statuses:

| Status code | Status Message |
|---|---|
| 200 OK            | The operation succeeded.  |
| 201 Created       | The operation succeeded and resulted in a new handle or new handle values being created.  |
| 400 Bad Request   | Returned for a incorrectly formatted or otherwise invalid request. <br/> Also returned for a request for a handle for which a server is not responsible. |
| 401 Unauthorized  | The operation requires an authorized caller, but the call in not authenticated.   |
| 403 Forbidden     | The caller is authenticated but not authorized to perform the operation.   |
| 404 Not Found     | The handle in question does not exist.   |
| 409 Conflict      |  A request to PUT a handle or handle values specified not to overwrite, but the handle or handle <br/> values already exist.  |
| 500 Internal Server Error | Something unexpected has gone wrong on the server.  |


Many response entities include a "responseCode" property which is the Handle protocol response code.
Some common response codes and the corresponding HTTP status codes are:

| Status code | Status Message |
| --- | --- |
| 1   | Success (200 OK or 201 Created)  |
| 2   | An unexpected error on the server (500 Internal Server Error) |
| 100 | Handle not found (404 Not Found)  |
| 101 | Handle already exists (409 Conflict)  |
| 102 | Invalid handle (400 Bad Request)  |
| 200 | Values not found (in resolution, 200 OK; otherwise 400 Bad Request)  |
| 201 | Value already exists (409 Conflict)  |
| 202 | Invalid value (400 Bad Request)  |
| 301 | Server not responsible for handle (400 Bad Request)  |
| 402 | Authentication needed (401 Unauthorized) |
| 40x | Other authentication errors (403 Forbidden)  |


The bulk of request and response entities are JSON representations of handle values.
The syntax for this is described at the end of this document.


