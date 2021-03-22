---
title: Python
parent: delete
order: 2
---

The request in python

```python
import urllib.request, urllib.error, urllib.parse

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
HANDLENAME="05C3DB56-5692-11E3-AF8F-1C6F65A666B5"
URL_TO_OPEN=PIDSERVICE_URL+HANDLENAME
DATAURL=""

# create a password manager
password_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()

# Add the username and password.
password_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)

handler = urllib.request.HTTPBasicAuthHandler(password_mgr)

# create "opener" (OpenerDirector instance)
opener = urllib.request.build_opener(handler)

# use the opener to fetch a URL
opener.open(URL_TO_OPEN)

# Install the opener.
# Now all calls to urllib2.urlopen use our opener.
urllib.request.install_opener(opener)

#http://stackoverflow.com/questions/2407126/python-urllib2-basic-auth-problem
REQUESTDATA = urllib.request.Request(URL_TO_OPEN)
# creates the delete method
REQUESTDATA.get_method = lambda: 'DELETE'

try:
        DATAURL = urllib.request.urlopen(REQUESTDATA)
except urllib.error.URLError as e:
        if e.code == 404:
                print("404-Not found")
        if e.code == 401:
                print("401-Authentication failed")
        if e.code == 403:
                print("403-Not permitted")
```

