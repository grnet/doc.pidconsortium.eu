---
title: API | Delete a PID
kind: code
slug: delete
result: resultdelete
---

# API - Delete a PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## DELETE a PID - Description

You may want to delete a defined PID. Once you have the PID url, then you can delete the PID, by just supplying it. 

**At the moment a nodelete profile is enforced. So the deletion of handles is deactivated.**


| **Description** | Delete a PID |
| **URL**         | The GRNET API Service URL with the PID   |
| **HTTP Method** | DELETE                        |
| **Security**    | Requires ownership of the PID. So you must authenticate before actually deleting the file        |

The data you must send in order to delete are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
suffix | The local name of the handle in the system | Yes | None |  05C3DB56-5692-11E3-AF8F-1C6F65A666B5 |

## Example

In this example we are going to delete of a selected PID https://epic.grnet.gr/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5


