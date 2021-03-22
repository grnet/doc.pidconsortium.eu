---
title: Python
parent: create
order: 2
---

The request in python

<pre><code class="language-python">
import urllib2
import uuid
import json

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
SUFFIX =str(uuid.uuid1());
URL_TO_OPEN=PIDSERVICE_URL+SUFFIX
DATAURL=''

# create a password manager
password_mgr = urllib2.HTTPPasswordMgrWithDefaultRealm()

# Add the username and password.
password_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)

handler = urllib2.HTTPBasicAuthHandler(password_mgr)

# create "opener" (OpenerDirector instance)
opener = urllib2.build_opener(handler)

# use the opener to fetch a URL
opener.open(PIDSERVICE_URL)

# Install the opener.
# Now all calls to urllib2.urlopen use the created opener.
urllib2.install_opener(opener)

#create the json data
JSONDATA = [{'type':'URL','parsed_data':'http://www.grnet.gr'}]
JSONDATATOSEND = json.dumps(JSONDATA);

REQUESTDATA = urllib2.Request(URL_TO_OPEN, data=JSONDATATOSEND)

#create the headers
REQUESTDATA.add_header('Content-Type','application/json')
REQUESTDATA.add_header('Content-Length',len(JSONDATATOSEND))

# creates the PUT method
REQUESTDATA.get_method = lambda: 'PUT'

try:
    DATAURL = urllib2.urlopen(REQUESTDATA)
    
except urllib2.URLError, e:
    print e
    if e.code == 404:
        print "404-Not found"
    if e.code == 401:
        print "401-Authentication failed"    
        #get http code of the request

if DATAURL:
    # Getting the code
    print "This gets the code: ", DATAURL.code

</code></pre>

