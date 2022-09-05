---
id: api-search
title: API - Search a PID
slug: search
sidebar_position: 7
---

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Search a PID - Description
You can search for a PID by using a term. 

| Type            | Description                 |
| --------------- | --------------------------- |
| **Description** | Search a PID |
| **URL**         | The  ePIC API Url+?PARAMETER=\*term\*  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting this information.|

The parameters you may use for a search request are described in the following table:

Parameter |Value| Description | Example value |
------|--------|-------------|----------|---------------|---------------|
INST | string: name of the INST| Search and get the list of PIDs registered by an institute| https://epic.grnet.gr/api/v2/handles/11239/?INST=GRNET
URL | string: the url you are searching for | Search and get the PID of an object with the selected url | https://epic.grnet.gr/api/v2/handles/11239/?URL=http://www.grnet.gr
limit | int: the limit of results | Limit your results | https://epic.grnet.gr/api/v2/handles/11239/?URL=http://www.grnet.gr&limit=10

#### You may also:
- combine the parameters to get the list of PIDs. (e.g. https://epic.grnet.gr/api/v2/handles/11239/?URL=http://www.grnet.gr&INST=GRNET).
- use part of the term in the search parameter (e.g. search for PIDS that contain "grnet" in the URL https://epic.grnet.gr/api/v2/handles/11239/?URL=\*grnet\*).


## Example

In this example we are going to use the term  to retrieve the list of PIDs with the following URL https://epic.grnet.gr/api/v2/handles/11239/?URL=\*GRNET\*

import Curl     from './examples/_searchcurl.md'
import Perl     from './examples/_searchperl.md'
import PHP      from './examples/_searchphp.md'
import Python   from './examples/_searchpython.md'
import Results  from './examples/_searchres.md'


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



