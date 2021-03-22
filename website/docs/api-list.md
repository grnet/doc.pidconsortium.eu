---
id: api-list
title: API - List PID
kind: code
slug: list
result: resultlist
---

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## List PID - Description
You can retrieve the list of pids at once, by just supplying the Service Url with the prefix. 

| Type            | Description                 |
| --------------- | --------------------------- |
| **Description** | GET a PID |
| **URL**         | The  API Service URL  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting all PID. |

Because collections can get very lange, they are rendered page by page.
By default, you'll only see the first page with at maximum 1000 results.
To modify this behaviour, use the following query parameters:

Parameter |Value| Description | Example value |
------|--------|-------------|----------|---------------|---------------|
limit | int: the limit of results | the maximum number of items to return. The default is 1000. As a special case, if you specify `limit=0`, <em>all</em> items will be returned, without limit.  |	https://epic.grnet.gr/api/v2/handles/11239/?limit=10
page | int: the page of results  | When using limit parameter the returned data are displayed on multiple pages. the number of the page to return. I.e., if you specify `limit=100&page=3`, items 201 through 300 will be returned |https://epic.grnet.gr/api/v2/handles/11239/?limit=10&page=2


## Example

In this example we are going to retrieve the information of all PID in the 11239 prefix URL https://epic.grnet.gr/api/v2/handles/11239/


import Curl     from './examples/listcurl.md'
import Perl     from './examples/listperl.md'
import PHP      from './examples/listphp.md'
import Python   from './examples/listpython.md'
import Results  from './examples/listres.md'


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="curl"
  values={[
    {label: 'Curl',     value: 'curl'},
    {label: 'Python',   value: 'python'},
    {label: 'PHP',      value: 'php'},
    {label: 'Perl',     value: 'perl'},
  ]
}>
<TabItem value="curl">

<Curl />

</TabItem>
<TabItem value="python">

<Python />

</TabItem>
<TabItem value="php">

<PHP />

</TabItem>
<TabItem value="perl">

<Perl />

</TabItem>
</Tabs>


<Results />



