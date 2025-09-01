---
sidebar_position: 3
title: Common tasks for detection module
---

### 1. Toggle Blocking on/off
```bash
curl -X POST http://localhost:8080/api/toggle-blocking \ 
                   -H "Content-Type: application/json" \
                   -d '{"enable":"False"}'
```

### 2. Modsecurity Debug level 
```bash
curl -X POST http://localhost:8080/api/debug-level \ 
                   -H "Content-Type: application/json" \
                   -d '{"level":"3"}'
```

### 3. Add Custom Ruleset 

#### Generating a regular rule:
You need the:
- Type: `regular`
- Inspection point
- Operator
- Action

#### Inspection Point:
Following are the inspection points:
```
'ip'
'single_header'
'all_headers'
'single_query_param'
'all_query_params'
'cookie'
'uri_path'
'method'
'body'
```

#### Operator:
Following are the operators:
```
'exact'
'contains'
'regex'
'ip_match'
'greater_than'
'less_than'
'begins_with'
'ends_with'
'length'
```

#### Action:
The action types are as follows:
```
'block'
'deny'
'allow'
'count'
'redirect'
```

#### Generating a rate limit rule:
A rate limit rule needs to following:
- Type: `rate_limit`
- Rate limit ("rateLimit") - Number of requests to allow
- Window size ("windowSize") - Window to check the requests in seconds
- Inspection point (same as in [regular rule](#inspection-point))
- Action (same as in [regular rule](#action))



Following is an example ruleset to whitelist an IP: `172.24.220.82` and block all other IPs, and a rate limit of 5 requests in 10 seconds for the allowed IP.

```bash
# Following is an example ruleset to whitelist an IP: `172.24.220.82` and block all other IPs,
# and a rate limit of 5 requests in 10 seconds for the allowed IP.

curl -X POST http://0.0.0.0:8080/api/ruleset/generate -H "Content-Type: application/json" \
-d '{
  "metadata": {
    "name": "IP Whitelist with Rate Limiting",
    "description": "Whitelist 172.24.220.82 and apply rate limiting"
  },
  "rules": [
    {
      "type": "regular",
      "inspectionPoint": "ip",
      "matchConditions": {
        "type": "ip_match",
        "value": "172.24.220.82"
      },
      "action": {
        "type": "pass",
        "message": "Whitelisted IP allowed"
      }
    },
    {
      "type": "regular",
      "inspectionPoint": "ip",
      "matchConditions": {
        "type": "regex",
        "value": "^(?!172\\\\.24\\\\.220\\\\.82$).*"
      },
      "action": {
        "type": "deny",
        "status": 403,
        "message": "Blocked IP ## not whitelisted"
      }
    },
    {
      "type": "rate_limit",
      "rateLimit": 5,
      "windowSize": 10,
      "inspectionPoint": "ip",
      "action": "deny"
    }
  ]
}'
```

### 4. Get custom rules list
```bash
curl http://localhost:8080/api/list-rules
```

### 5. Remove a custom rule using id
```bash
curl -X DELETE "http://localhost:8080/remove-rule?id=1000"
```


## For Docker Installation only:

### 1. Add upstream server to the nginx conf
```bash
curl -X POST http://localhost:8080/api/add-server \
                   -H "Content-Type: application/json" \
                   -d '{"name":"app1","port":80,"upstream":"http://httpbin.org"}'
```

### 2. List servers 
```bash
curl -X DELETE "http://localhost:8080/list-servers"
```

### 3. Remove server
```bash
curl -X DELETE "http://localhost:8080/remove-server?name=app1"
```