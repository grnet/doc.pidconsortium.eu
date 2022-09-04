---
id: handle
title: Introduction
sidebar_position: 1
---

The Handle server HTTP interface has in the past responded to requests in the native binary Handle
protocol of RFC 3652. As of version 8 requests can also be made using a REST API, with requests and
responses expressed via JSON encoding. This API may be useful for server administration or for
developing applications using Handle, especially those not developed in Java and thus unable to use the
Client SDK.

By default the Handle server HTTP interface will respond to requests using HTTP or HTTPS, on the same
port. This is called "port unification" and was preferred in order to allow legacy servers to upgrade to v8
and receive the full benefits of the REST API without requiring a new port to be made available.
Administrative operations using the REST API require the use of HTTPS.

Handle servers generally use self-signed certificates which can not be validated using the typical browser
certificate validation. See "Authenticating the Server" in this chapter for one way to authenticate that
the correct server has been reached.

