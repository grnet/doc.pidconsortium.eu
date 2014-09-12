---
title: Glossary | GRNET Handle API
---

# Glossary

* TOC
{:toc}

### API data


    # GRNET EPIC API URL
    https://epic.grnet.gr/api/v2/handles/11239/

    # GRNET EPIC API prefix
    11239

### Basic terms

Some terms in this document have a very specific meaning:

- **PID**: Persistent identifier. It is the Identifier pointing to a resource with no knowledge of the resource. It is the the combination of the prefix/suffix . The prefix is the GRNET API Prefix 11239. As a suffix we use a dynamically created UUID as shown in the following examples.  

- **handle**: The handle is the PID along with a set of values that accompany the PID

- **the API**: the Application Programming Interface laid out in this document

- **server**, **implementation**: an implementation of the API

- **(service) provider**: an organisation or person that operates a server as a service

- **client**: a piece of software that interacts with a server using the API

- **user**: an organisation or person that operates a client

- **UUID**: UUID stands for Universally Unique IDentifier, GUID for Globally Unique IDentifier. A universally unique identifier (UUID) is an identifier standard used in software construction, standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE). The intent of UUIDs is to enable distributed systems to uniquely identify information without significant central coordination.

### The data model

#### Handle value

A handle value is a collection of the data describing it and the administrative data. Each handle has one or more administrators. Any administrative operation (e.g., add, delete or modify handle values) can only be performed by the handle owner with adequate privilege. The handle owner and any other person with administrative rights on the specific handle, are defined in terms of HS_ADMIN values.

So a handle value is a collection with at least the following:

- idx: a positive number that specifies the unique index of this Handle Value within its Value Set.
- type: Specifies the data type of member data.
- parsed_data: The data you entered for the defined type in human readable format. 
- data: a blob. 
- timestamp: a number that records the last time this Handle Value was updated at the server. The field contains elapsed time since 00:00:00 UTC, January 1970 in milliseconds.
- ttl_type: the TTL type indicates whether the TTL value is absolute or relative.  The absolute TTL value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970.  A relative TTL specifies the time to live in terms of the number of seconds elapsed since the value was obtained by the client from any handle server.
- ttl: a number that specifies the Time-To- Live of the value record. A positive value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970. A negative value specifies the time to live in terms of the number of seconds elapsed since the value was obtained.
- refs: a list of references to other Handle Values.
- privs: The permissions of the handle

**Administrative**

- idx: the unique id of the administrator
- type: the admin type
- parsed_data: the admin data with a set of possible permissions
