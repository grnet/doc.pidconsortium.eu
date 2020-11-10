---
id: requests
title: Requests
slug: requests
---


All request entities are JSON.

Generally supported URI query parameters:
* **callback={callback}**
Allows the use of JSONP. The response entity will be wrapped in {callback}(...).
* **pretty=[true|false]**
If true responses are pretty-printed. Default false.

For any boolean query parameter, the parameter without any value (e.g. ?pretty) is considered to have
value true.

