---
sidebar_position: 5
---

# Levo CLI Command Reference

## help
Show help message for the CLI,

`levo --help`

## version
Show the current version of the CLI.

`levo --version`

## login
Login (authenticate) to Levo SaaS.

`levo login`

## test-conformance
`levo test-conformance [options] <arguments>`

```
Perform schema conformance tests against API endpoints specified in the target-url.

Options:
  --schema TEXT                   --schema must specify a valid URL or
                                  absolute file path that points to an Open
                                  API / Swagger specification.  [required]

  --target-url TEXT               --target-url must specify a valid URL
                                  pointing to a live host that implements the
                                  endpoints specified by --schema.  [required]

  -a, --auth TEXT                 Use in conjunction with '--auth'. For basic
                                  authentication this specifies the target
                                  server's user and password. Example:
                                  USER:PASSWORD .

  -A, --auth-type [basic]         The authentication mechanism to be used.
                                  Only 'basic' currently supported.  [default:
                                  basic]

  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS
                                  portal.

  -H, --header TEXT               Custom header that will be used in all
                                  requests to the target server. Example: -H
                                  "Authorization: Bearer 123" .

  --show-errors-tracebacks        Show full tracebacks for internal errors.
                                  [default: False]

  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  Accept all of the Python's log level values:
                                  CRITICAL, ERROR, WARNING, INFO, DEBUG, and
                                  NOTSET (all case insensitive).

  -h, --help                      Show this message and exit.
```

> Levo CLI runs as a Docker container and mounts the host file system. If specifying a schema file as an argument, please provide the absolute path of the file on the host filesystem.

## test

`levo test [options] <arguments>`

```
Execute a test plan against the specified target-url.

Options:
  --target-url TEXT               --target-url must specify a valid URL
                                  pointing to a live host that implements the
                                  endpoints that are present in the test plan.
                                  [required]

  -a, --auth TEXT                 Use in conjunction with '--auth'. For basic
                                  authentication this specifies the target
                                  server's user and password. Example:
                                  USER:PASSWORD . For token and apikey
                                  authentication this is the appropriate
                                  key:value.

  -A, --auth-type [basic|token|apikey]
                                  The authentication mechanism to be used.
                                  Defaults to 'basic'.  [default: basic]

  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS
                                  portal.

  --test-plan TEXT                --test-plan must specify a valid Levo
                                  Resource Name (LRN) or an absolute path to a
                                  Levo Test Plan folder.  [required]

  -H, --header TEXT               Custom header that will be used in all
                                  requests to the target server. Example: -H
                                  "Authorization: Bearer 123" .

  --show-errors-tracebacks        Show full tracebacks for internal errors.
                                  [default: False]

  --env-file TEXT                 Path to YAML file with environment
                                  definitions (AuthN/AuthZ info, etc.).

  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
  -h, --help                      Show this message and exit.
```

> Levo CLI runs as a Docker container and mounts the host file system. If specifying a Test Plan folder as an argument, please provide the absolute path of the file on the host filesystem.

> Authentication credentials and user role information might be required by some `Test Plans` for proper execution. This is to be provided using the `--env-file` option. Please refer to details on [the Environment YAML file][env-yaml].


## test-plan

Test Plan management sub commands.

### run
This is an alias of the `levo test` command.

`levo test-plan run [options] <arguments>`

```
Run a test plan against the specified target-url.

Options:
  --target-url TEXT               --target-url must specify a valid URL
                                  pointing to a live host that implements the
                                  endpoints that are present in the test plan.
                                  [required]

  -a, --auth TEXT                 Use in conjunction with '--auth'. For basic
                                  authentication this specifies the target
                                  server's user and password. Example:
                                  USER:PASSWORD . For token and apikey
                                  authentication this is the appropriate
                                  key:value.

  -A, --auth-type [basic|token|apikey]
                                  The authentication mechanism to be used.
                                  Defaults to 'basic'.  [default: basic]

  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS
                                  portal.

  --test-plan TEXT                --test-plan must specify a valid Levo
                                  Resource Name (LRN) or an absolute path to a
                                  Levo Test Plan folder.  [required]

  -H, --header TEXT               Custom header that will be used in all
                                  requests to the target server. Example: -H
                                  "Authorization: Bearer 123" .

  --show-errors-tracebacks        Show full tracebacks for internal errors.
                                  [default: False]

  --env-file TEXT                 Path to YAML file with environment
                                  definitions (AuthN/AuthZ info, etc.).

  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
  -h, --help                      Show this message and exit.
```

> Levo CLI runs as a Docker container and mounts the host file system. If specifying a Test Plan folder as an argument, please provide the absolute path of the file on the host filesystem.

> Authentication credentials and user role information might be required by some `Test Plans` for proper execution. This is to be provided using the `--env-file` option. Please refer to details on [the Environment YAML file][env-yaml].






[env-yaml]: ./levo-cli-environment-file.md