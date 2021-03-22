---
title: Python
parent: get
order: 2
---

The request in python

<pre><code class="language-python">
import urllib2

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX" #dont forget to add "/" at the end
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
HANDLENAME="YOUR_PID" #for example "66742AB2-5685-11E3-A413-1C6F65A666B5"
URL_TO_OPEN=PIDSERVICE_URL+HANDLENAME
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

REQUESTDATA = urllib2.Request(URL_TO_OPEN)
try:
    DATAURL = urllib2.urlopen(REQUESTDATA)
except urllib2.URLError, e:
    if e.code == 404:
        print "404-Not found"
    if e.code == 401:
        print "401-Authentication failed"

if DATAURL:
    # Getting the code
    print "This gets the code: ", DATAURL.code
 
</code></pre>

