---
sidebar_position: 2
---

# Troubleshooting

```bash
➜ kubectl -n levoai get pods                              
NAME                                READY   STATUS    RESTARTS      AGE
levoai-collector-848fb4fff9-gv8g9   1/1     Running   0             4m8s
levoai-rabbitmq-0                   1/1     Running   0             4m8s
levoai-satellite-54956ccb89-5s4h2   1/1     Running   0             4m8s
levoai-tagger-799db4d9cc-89jm8      0/1     Error     5 (97s ago)   4m8s




kubectl -n levoai get pods
NAME                                READY   STATUS    RESTARTS      AGE
levoai-collector-848fb4fff9-gv8g9   1/1     Running   0             64s
levoai-rabbitmq-0                   0/1     Running   0             64s
levoai-satellite-54956ccb89-5s4h2   1/1     Running   0             64s
levoai-tagger-799db4d9cc-89jm8      0/1     Error     1 (14s ago)   64s

➜  Downloads kubectl -n levoai logs -f levoai-tagger-799db4d9cc-89jm8
{"level": "info", "time": "2022-06-05 22:19:37,250", "line": "saas_client.py:29", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_e7s.dispatcher.saas_client", "message": "Base URL: https://api.levo.ai"}
{"level": "info", "time": "2022-06-05 22:19:37,250", "line": "saas_client.py:36", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_e7s.dispatcher.saas_client", "message": "Refreshing the token."}
{"level": "debug", "time": "2022-06-05 22:19:37,250", "line": "levo_auth.py:50", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_common_public.auth.levo_auth", "message": "data={'grant_type': 'refresh_token', 'refresh_token': 'v1.MbUqr57IAHbpJjAgMTXfPmf__G-crAwcYLN1Tbm4tukR_8hD9jNvGQTltDdElHVqc4xrkRh3nVxBB1k_0GBPWPU', 'organization_id': None, 'client_id': 'aa9hJp2bddyhZeEXjAsura6bWIdSEr5s'}"}
{"level": "debug", "time": "2022-06-05 22:19:37,255", "line": "connectionpool.py:975", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "urllib3.connectionpool", "message": "Starting new HTTPS connection (1): levoai.us.auth0.com:443"}
{"level": "debug", "time": "2022-06-05 22:19:37,556", "line": "connectionpool.py:461", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "urllib3.connectionpool", "message": "https://levoai.us.auth0.com:443 \"POST /oauth/token HTTP/1.1\" 403 None"}
{"level": "debug", "time": "2022-06-05 22:19:37,559", "line": "levo_auth.py:52", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_common_public.auth.levo_auth", "message": "response={'error': 'invalid_grant', 'error_description': 'The client associated with this refresh token (40J3vohUR7gMBKknWipvNpm4AwBgA6W7) is different than the one sent in the request (aa9hJp2bddyhZeEXjAsura6bWIdSEr5s).'}"}
Traceback (most recent call last):
  File "/opt/levoai/e7s/src/python/levoai_e7s/tag_server.py", line 224, in <module>
    tag_server = TagServer()
  File "/opt/levoai/e7s/src/python/levoai_e7s/tag_server.py", line 73, in __init__
    self._dispatcher = dispatcher or Dispatcher()
  File "/opt/levoai/e7s/src/python/levoai_e7s/dispatcher/dispatcher.py", line 44, in __init__
    self.client = SaaSClient()
  File "/opt/levoai_venv/lib/python3.7/site-packages/singletons/singleton.py", line 39, in __call__
    Singleton.__instances[cls] = super().__call__(*args, **kwargs)  # type: ignore
  File "/opt/levoai/e7s/src/python/levoai_e7s/dispatcher/saas_client.py", line 32, in __init__
    self.refresh_auth()
  File "/opt/levoai/e7s/src/python/levoai_e7s/dispatcher/saas_client.py", line 37, in refresh_auth
    access_token = levo_auth.refresh_access_token(self._refresh_token)
  File "/opt/levoai/common-public/src/python/levoai_common_public/auth/levo_auth.py", line 26, in refresh_access_token
    access_token = _refresh_access_token(refresh_token, None)
  File "/opt/levoai/common-public/src/python/levoai_common_public/auth/levo_auth.py", line 56, in _refresh_access_token
    raise Exception("Failed to refresh access token.")
Exception: Failed to refresh access token.



kubectl -n levoai logs -f levoai-tagger-799db4d9cc-4tdng
{"level": "info", "time": "2022-06-06 01:41:36,771", "line": "saas_client.py:29", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_e7s.dispatcher.saas_client", "message": "Base URL: https://api.dev.levo.ai"}
{"level": "info", "time": "2022-06-06 01:41:36,771", "line": "saas_client.py:36", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_e7s.dispatcher.saas_client", "message": "Refreshing the token."}
{"level": "debug", "time": "2022-06-06 01:41:36,771", "line": "levo_auth.py:50", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_common_public.auth.levo_auth", "message": "data={'grant_type': 'refresh_token', 'refresh_token': 'pllOFIQOK5sz0ZxUHy56Z4GGuEkaj4hYZOFV8TiF5Y_md', 'organization_id': None, 'client_id': '8hd3Fcxx20CfR9uKfPb0Bh4hQ2QSp0W3'}"}
{"level": "debug", "time": "2022-06-06 01:41:36,777", "line": "connectionpool.py:975", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "urllib3.connectionpool", "message": "Starting new HTTPS connection (1): levoai.us.auth0.com:443"}
{"level": "debug", "time": "2022-06-06 01:41:37,222", "line": "connectionpool.py:461", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "urllib3.connectionpool", "message": "https://levoai.us.auth0.com:443 \"POST /oauth/token HTTP/1.1\" 200 None"}
{"level": "debug", "time": "2022-06-06 01:41:37,224", "line": "levo_auth.py:52", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_common_public.auth.levo_auth", "message": "response={'access_token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikh5Qk81azFRNnlXVk9UelFSTFh2UCJ9.eyJodHRwczovL2FwaS5sZXZvLmFpL2VtYWlsIjoiaGFyaXNoQGxldm8uYWkiLCJodHRwczovL2FwaS5sZXZvLmFpL2VtYWlsX3ZlcmlmaWVkIjp0cnVlLCJodHRwczovL2FwaS5sZXZvLmFpL3VzZXJfaWQiOiI3YzU5ZDM1NS1iODg4LTQxMGUtYTcxMi05ZjU4ZTI3ZDRmMjAiLCJodHRwczovL2FwaS5sZXZvLmFpL3VzZXJfb3JnYW5pemF0aW9ucyI6WyI3ZTVmZTQ0Ny1lODZjLTRhYjYtYWVmMS02NWRkMWU4ZWE5YzQiLCI1ZjczM2VkOC0zOWM5LTQwZDEtODZiMy0xMWUyYjA0NTE4NDIiLCJiZDUwNDkyYS04OGUxLTQ1MWQtOTFiYS1kM2VjNDQxYzU0YWIiLCI2ZmZkMTE3OC05NjQzLTQyZjAtODkzMC0zNDQ3ZmI3YjA5MDgiXSwiaXNzIjoiaHR0cHM6Ly9sZXZvYWkudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEzNTA1NzU4Mjg3MjM1MDQ5OTk1IiwiYXVkIjpbImh0dHBzOi8vYXBpLmxldm8uYWkiLCJodHRwczovL2xldm9haS51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU0NDc5Njk3LCJleHAiOjE2NTQ1NjYwOTcsImF6cCI6IjhoZDNGY3h4MjBDZlI5dUtmUGIwQmg0aFEyUVNwMFczIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.RL1NUIPkWL8Q8Q6CHcsJXDBJLHAOdxUdZYehge7ChXvggsjQydpkSvQ7daZeGr7sPEN8eNxsHBpHWYnpn7YNlLE7eIFDvqB3PSEZ_plJYTF3lzmHro2fFDGOaiDGL-Akw3oOxjDqiVhWHv-WILRrRPPcGJW_ijuUP9QctDntW_qsZ9xAiQdt5xZ7w60Y7-qp3eoTo0BB2S1cyzJAq37Lw1AhOhYPNRJEkqH6qgaG0XTlAvb_-tYX6DqRAVdTCfjQ_9cubcEni7IKKiUc5yMY_VmIYjZwAQFCgQ19Axf3eQLBPM7flDFMYQD4LFUk0h1cJ0tBI-GWZkA-XTDDY1X2dA', 'id_token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikh5Qk81azFRNnlXVk9UelFSTFh2UCJ9.eyJlbWFpbCI6ImhhcmlzaEBsZXZvLmFpIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vbGV2b2FpLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMzUwNTc1ODI4NzIzNTA0OTk5NSIsImF1ZCI6IjhoZDNGY3h4MjBDZlI5dUtmUGIwQmg0aFEyUVNwMFczIiwiaWF0IjoxNjU0NDc5Njk3LCJleHAiOjE2NTQ1MTU2OTd9.DxbPdItfWB9g1Kzvlcjr1VSNP7-c-iQKN7wjONTfKERx1zH18UtEm7ZNYyyjcRvWdMlgsncKihELJt2dCskWcuhByqbPwGBvU2h241GZdwNwhvj6jC8lxFyx7DFWTs_ty9Fm7HeLKqQTpAEP-hVmRiGDIrIv_FOaPw3bJrRyfDJqzMpUDJg7eG5aFJ6Q_G8ToJel8TrZEZ0e-2mDrlLRexel9H_IAWc2FBbj7r1uycMS9z6_rR1xnlJQ9rj71A7EA11pdqXHrIz4w9FwF3J5TCRN9b6_XPzyyGv4cio6aa2mL3eaKdByJx6LjX2_Bbj-m5W46y8on6GGLXzqsaYFwg', 'scope': 'openid email offline_access', 'expires_in': 86400, 'token_type': 'Bearer'}"}
{"level": "debug", "time": "2022-06-06 01:41:37,226", "line": "connectionpool.py:975", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "urllib3.connectionpool", "message": "Starting new HTTPS connection (1): api.dev.levo.ai:443"}
{"level": "debug", "time": "2022-06-06 01:41:38,205", "line": "connectionpool.py:461", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "urllib3.connectionpool", "message": "https://api.dev.levo.ai:443 \"GET /organizations HTTP/1.1\" 200 None"}
{"level": "error", "time": "2022-06-06 01:41:38,208", "line": "levo_auth.py:86", "version": "c8b3dc5f14b1b565e931de6eb5a11112a94ef5de", "module": "levoai_common_public.auth.levo_auth", "message": "User is a part of multiple orgs but onprem-api.org-prefix config isn't set."}
User is a part of multiple orgs but onprem-api.org-prefix config isn't set.


To solve above set below:
--set global.levoai_config_override.onprem-api.org-prefix="ORG prefix (needn't be full org name but unique prefix)"

--------------------

```