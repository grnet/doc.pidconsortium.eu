---
title: API | Get a PID
kind: code
slug: get
result: resultget
---

# API - GET a PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## GET a PID - Description
Once you have the PID url, then you can retrieve the information at once for this PID, by just supplying its URL. 

| **Description** | GET a PID |
| **URL**         | The GRNET API Service URL with the suffix |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting PID information. |

The data you must send in order to get the PID are described in the following table 

Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
url to authenticate | a url to authenticate. We use the service PID service URL | Yes | None |  https://epic.grnet.gr/api/v2/handles/ |
username | your username | Yes |None| |
password | your password | Yes |None| |

## Example

In this example we are going to retrieve the information of a PID with the following URL https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5


