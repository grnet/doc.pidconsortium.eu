---
title: Overview | GRNET EPIC API
---

## Overview

GRNET Handle service is a service dedicated to provide, resolve and mint persistent identifiers (PID). This document describes the Handle [RESTful][restful] web service, using the HTTP/1.1 application protocol.

The API supports the following functions 

- GET for getting the data of a selected PID 
- POST for creating a new PID with automatic generation of suffix name.
- PUT for creating/updating a new PID with manual generation of suffix name 
- DELETE for deleting a selected PID

PID EPIC is totally (100%) compatible with the DOI and a PID (including the prefix) can also be interpreted from any server DOI. 

[restful]: https://en.wikipedia.org/wiki/Representational_state_transfer
