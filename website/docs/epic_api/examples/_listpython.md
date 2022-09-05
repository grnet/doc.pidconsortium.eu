
The request in python

```python
import urllib.request, urllib.error, urllib.parse

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
URL_TO_OPEN="THE_SERVICE_URL_WITH_PREFIX"
DATAURL='';

# create a password manager
password_mgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()

# Add the username and password.
password_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)

handler = urllib.request.HTTPBasicAuthHandler(password_mgr)

# create "opener" (OpenerDirector instance)
opener = urllib.request.build_opener(handler)

# use the opener to fetch a URL
opener.open(PIDSERVICE_URL)

# Install the opener.
# Now all calls to urllib2.urlopen use the created opener.
urllib.request.install_opener(opener)

REQUESTDATA = urllib.request.Request(URL_TO_OPEN)
try:
    DATAURL = urllib.request.urlopen(REQUESTDATA)
except urllib.error.URLError as e:
    if e.code == 404:
        print("404-Not found")
    if e.code == 401:
        print("401-Authentication failed")

if DATAURL:
    # Getting the code
    print("This gets the code: ", DATAURL.code)

```

