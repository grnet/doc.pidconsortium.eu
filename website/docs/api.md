---
id: api
title: Getting Started
---

# API

This document describes the handle RESTful web service, using the HTTP application protocol. The API supports the following functions

- GET for getting the data of a selected PID
- POST for creating a new PID with automatic generation of suffix name.
- PUT for creating/updating a new PID with manual generation of suffix name
- DELETE for deleting a selected PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.


* [Authenticate](api-auth.md) with basic authenctication.
* [PID Generation](api-generation.md).
* [Get a PID](api-get.md): retrieve the information of a selected PID.
* [List all PID](api-list.md): retrieve the list of pids at once.
* [Search](api-search.md): search for a PID by using a term.
* [Create a PID](api-create.md).
* [Update a PID](api-update.md).
* [Delete a PID](api-delete.md).
* [Part Identifiers](api-partial.md).

