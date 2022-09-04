---
id: api-auth
title: API - Basic Authentication 
kind: code
slug: auth
result: resultauth
sidebar_position: 3
---

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Basic Authentication - Description
The API allows REST clients to authenticate themselves with a user name and password using basic authentication.

| Type            | Description                 |
| --------------- | --------------------------- |
| **Description** | Authenticate to API Service |
| **URL**         | The API Service URL         |
| **HTTP Method** | GET                         |
| **Security**    | Basic Authentication        |

The data you must send in order to authenticate are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
url to authenticate | a url to authenticate. We use the service PID service URL | Yes | None |  ServiceURL|
username | your username | Yes |None| |
password | your password | Yes |None| |

## Example

In this example we are going to authenticate by using the main PID service URL.


import Curl     from './examples/_authcurl.md'
import PHP      from './examples/_authphp.md'
import Python   from './examples/_authpython.md'
import Results  from './examples/_authres.md'


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="curl"
  values={[
    {label: 'Curl',     value: 'curl'},
    {label: 'Python',   value: 'python'},
    {label: 'PHP',      value: 'php'},
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
</Tabs>


<Results />


