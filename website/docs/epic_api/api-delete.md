---
id: api-delete
title: API - Delete a PID
kind: code
slug: delete
result: resultdelete
sidebar_position: 10
---

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## DELETE a PID - Description

You may want to delete a defined PID. Once you have the PID url, then you can delete the PID, by just supplying it. 

**At the moment a nodelete profile is enforced. So the deletion of handles is deactivated.**

| Type            | Description                 |
| --------------- | --------------------------- |
| **Description** | Delete a PID |
| **URL**         | The  API Service URL with the PID   |
| **HTTP Method** | DELETE                        |
| **Security**    | Requires ownership of the PID. So you must authenticate before actually deleting the file        |

The data you must send in order to delete are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
suffix | The local name of the handle in the system | Yes | None |  05C3DB56-5692-11E3-AF8F-1C6F65A666B5 |

## Example

In this example we are going to delete of a selected PID https://epic.grnet.gr/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5

import Curl     from './examples/_deletecurl.md'
import Perl     from './examples/_deleteperl.md'
import PHP      from './examples/_deletephp.md'
import Python   from './examples/_deletepython.md'
import Results  from './examples/_deleteres.md'


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


