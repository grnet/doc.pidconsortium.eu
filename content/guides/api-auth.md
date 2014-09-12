---
title: API | Basic Authentication
kind: code
slug: auth
result: resultauth
---

# API - Basic Authentication 

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Basic Authentication - Description
The API allows REST clients to authenticate themselves with a user name and password using basic authentication.

If you don’t have an account please contact hdl@grnet.gr

| **Description** | Authenticate to API Service |
| **URL**         | The GRNET API Service URL   |
| **HTTP Method** | GET                         |
| **Security**    | Basic Authentication        |

The data you must send in order to authenticate are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
url to authenticate | a url to authenticate. We use the service PID service URL | Yes | None |  https://epic.grnet.gr/api/v2/handles/ |
username | your username | Yes |None| |
password | your password | Yes |None| |

## Example

In this example we are going to authenticate by using the main PID service URL.


