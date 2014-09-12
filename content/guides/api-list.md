---
title: API | List PID
kind: code
slug: list
result: resultlist
---

# API - List PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## List PID - Description
You can retrieve the list of pids at once, by just supplying the Service Url with the prefix. 

| **Description** | GET a PID |
| **URL**         | The GRNET API Service URL  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting all PID. |

Because collections can get very lange, they are rendered page by page.
By default, you'll only see the first page with at maximum 1000 results.
To modify this behaviour, use the following query parameters:

Parameter |Value| Description | Example value |
------|--------|-------------|----------|---------------|---------------|
limit | int: the limit of results | the maximum number of items to return. The default is 1000. As a special case, if you specify <code>limit=0</code>, <em>all</em> items will be returned, without limit.  |	https://epic.grnet.gr/api/v2/handles/11239/?limit=10
page | int: the page of results  | When using limit parameter the returned data are displayed on multiple pages. the number of the page to return. I.e., if you specify <code>limit=100&amp;page=3</code>, items 201 through 300 will be returned |https://epic.grnet.gr/api/v2/handles/11239/?limit=10&page=2


## Example

In this example we are going to retrieve the information of all PID in the 11239 prefix URL https://epic.grnet.gr/api/v2/handles/11239/


