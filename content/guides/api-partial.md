---
title: API | Part Identifiers
kind: code
---

# API - Part Identifiers
Part identifiers compute an unlimited number of handles on the fly, by registering just one. A single template handle can be created as a base that will allow any number of extensions to that base to be resolved as full handles, according to a pattern, without each such handle being individually registered.  In the handle system the part - fragment identifier is enabled with a template. The template is a syntax that defines a delimiter and an extension (extension is the option to add any kind of string behind the delimiter). 

The template is not actually part of the PID. Syntax of the PIDs as well as the resolution mechanism accept the usage of part - fragment identifiers.

The part - fragment identifier is enabled for a specific prefix. So everyone using the prefix must agree on a common pattern based on the community context and specific use cases.The resolution mechanism needs to pass through the fragment specification. The repository service hosting the data has to understand the fragment parameter the resolver just passed through.

As previously mentioned,  the template feature can be configured per handle prefix with a specific delimiter. So for prefix 11239 in GRNET EPIC service the delimiter is set to "@", but <strong>no template is enabled at the moment.</strong> 

## How to use it?
use a single handle
<ul>
<li>to reference a part of a dictionary</li>
<li>to reference an unlimited number of ranges within a video</li>
<li>to reference a part of a collection of items</li>
</ul>

<strong>Please note</strong>  that when your system offers PIDs with part identifiers, it is responsible of maintaining the part identification fragment as well. Remember that users will use it to link to your system resources and that the resulting end point should always be available.

## Example
In our example we have a main handle 11239/1234576. 

So suppose that 11239/1234576 resolves to http://grnet.gr 

suppose that a template  is enabled with the expression

the part identifier behavior is enabled with the expression 
  <i>prefix/suffix@a=x&b=y</i>
then 
 11239/1234576@a=c&b=d  will be resolved to http://grnet.gr?a=c&b=d


