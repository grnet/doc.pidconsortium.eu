---
title: API | PID generation
kind: code
slug: generate
result: resultgenerate
---

# API - PID generation

Every identifier consists of two parts: its prefix , and a unique local name under the prefix known as its suffix

<span class="txtcenter"><strong>
< PREFIX > / < SUFFIX > (e.g. 11239/123456745).
</strong></span>

Any suffix - local name must be unique under its local namespace. The uniqueness of a prefix and a local name under that prefix ensures that any identifier is globally unique within the context of the System.

There are two ways to generate the SUFFIX a) automatic and b) manual


## Automatic generation of SUFFIX

The API supports the automatic generation of a local name - suffix by using a generator via a POST Request. This generator uses UUIDs to guarantee the uniqueness of created handles. The syntax follows the following pattern

<span class="txtcenter"><strong>SUFFIX = prefix - UUID - suffix </strong></span>

***where***

- **prefix**: Optional: a string of UTF-8 encoded printable unicode characters to put before the UUID.
- **UUID**: UUID stands for Universally Unique IDentifier, GUID for Globally Unique IDentifier. A universally unique identifier (UUID) is an identifier standard used in software construction, standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE). The intent of UUIDs is to enable distributed systems to uniquely identify information without significant central coordination.
- **suffix**: Optional: a string of UTF-8 encoded printable unicode characters to put after the UUID.


## Example

In this example we are going to use the automatic creation of PID. The automatic generation of PID is executed using a POST HTTP Request.



