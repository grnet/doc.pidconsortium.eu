---
id: api-calls
title: Resources
slug: api-calls
sidebar_position: 2
---

The primary resource in this api is the handle record for a handle:

```
/api/handles/{handle}
```
The handle record for handle `{handle}`.

```
/api/handles/{handle}?index={index}
```
URI query parameters can be used to specify that the resource in question is restricted to one or more
of the handle values from the handle record. This is detailed in the method documentation.

Another resource is the collection of handles:

```
/api/handles?prefix={prefix}
```
The list of handles available at this server under prefix `{prefix}`.

Another resource is the collection of homed prefixes:

```
/api/prefixes
```
The list of prefixes homed at this server.

