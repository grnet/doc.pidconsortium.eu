---
title: API | Search a PID
kind: code
slug: search
result: resultsearch
---

# API - Search a PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Search a PID - Description
You can search for a PID by using a term. 

| **Description** | Search a PID |
| **URL**         | The GRNET EPIC API Url+?PARAMETER=\*term\*  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting this information.|

The parameters you may use for a search request are described in the following table:

Parameter |Value| Description | Example value |
------|--------|-------------|----------|---------------|---------------|
INST | string: name of the INST| Search and get the list of PIDs registered by an institute| https://epic.grnet.gr/api/v2/handles/11239/?INST=GRNET
URL | string: the url you are searching for | Search and get the PID of an object with the selected url | https://epic.grnet.gr/api/v2/handles/11239/?URL=http://www.grnet.gr
limit | int: the limit of results | Limit your results | https://epic.grnet.gr/api/v2/handles/11239/?URL=http://www.grnet.gr&limit=10

####You may also:
- combine the parameters to get the list of PIDs. (e.g. https://epic.grnet.gr/api/v2/handles/11239/?URL=http://www.grnet.gr&INST=GRNET).
- use part of the term in the search parameter (e.g. search for PIDS that contain "grnet" in the URL https://epic.grnet.gr/api/v2/handles/11239/?URL=\*grnet\*).


## Example

In this example we are going to use the term GRNET to retrieve the list of PIDs with the following URL https://epic.grnet.gr/api/v2/handles/11239/?URL=\*GRNET\*

