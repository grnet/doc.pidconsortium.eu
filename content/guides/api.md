---
title: Getting Started
---

# API

This document describes the handle RESTful web service, using the HTTP application protocol. The API supports the following functions 

- GET for getting the data of a selected PID 
- POST for creating a new PID with automatic generation of suffix name.
- PUT for creating/updating a new PID with manual generation of suffix name
- DELETE for deleting a selected PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

<ul>
  	<li><strong><a href="/guides/api-auth/">Authenticate</a></strong> with basic authenctication.</li>
        <li><strong><a href="/guides/api-generation/">PID Generation</a></strong></li>
  	<li><strong><a href="/guides/api-get/">Get a PID</a></strong>: retrieve the information of a selected PID.</li>
  	<li><strong><a href="/guides/api-list/">List all PID</a></strong>: retrieve the list of pids at once.</li>
  	<li><strong><a href="/guides/api-search/">Search</a></strong>: search for a PID by using a term.</li>
  	<li><strong><a href="/guides/api-create/">Create a PID</a></strong></li>
  	<li><strong><a href="/guides/api-update/">Update a PID</a></strong></li>
  	<li><strong><a href="/guides/api-delete/">Delete a PID</a></strong></li>
  	<li><strong><a href="/guides/api-partial/">Part Identifiers</a></strong></li>
</ul>
