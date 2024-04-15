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
`levo login [options] <arguments>`

```
Authenticate the CLI with Levo's SaaS portal.

Options:
  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  OPTIONAL Accept all of the Python's log
                                  level values: CRITICAL, ERROR, WARNING,
                                  INFO, DEBUG, and NOTSET (all case
                                  insensitive).
  -k, --key TEXT                  Specify an authorization key to login with.
                                  Go to https://app.dev.levo.ai/settings/keys
                                  to get your authorization key.
  -o, --organization TEXT         OPTIONAL Specify the id of the organization
                                  you want to work with.
  -h, --help                      Show this message and exit.
```

The login command might ask you for a `CLI Authorization Key`, that is used to authenticate the CLI with Levo.ai. This key can be retrieved from [User Profile-->User Settings-->Keys](https://app.dev.levo.ai/settings/keys).

You will need an account on [Levo.ai](https://levo.ai/levo-signup/) to retrieve the key.

The login command stores authentication tokens in the `$HOME/.config/configstore/levo.json` file (on the Docker host). This file is only accessible by the user who owns the $HOME directory. Treat this file as do with any secrets.

## logout
`levo logout [options]`

```
Removes the local login config file.

Options:
  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  OPTIONAL Accept all of the Python's log
                                  level values: CRITICAL, ERROR, WARNING,
                                  INFO, DEBUG, and NOTSET (all case
                                  insensitive).
  -h, --help                      Show this message and exit.
```

The logout command removes the `$HOME/.config/configstore/levo.json` file (on the Docker Host). This file contains authentication tokens, and other local state persisted by the CLI.

## test-conformance
`levo test-conformance [options] <arguments>`

```
Perform schema conformance tests against API endpoints specified in the target-url.

Options:
  --schema TEXT                   --schema must specify a valid URL or file
                                  path (accessible from the CLI container)
                                  that points to an Open API / Swagger
                                  specification.  [required]
  --target-url TEXT               --target-url must specify a valid URL
                                  pointing to a live host that implements the
                                  endpoints specified by --schema.  [required]
  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS
                                  portal.
  -H, --header TEXT               Custom header that will be used in all
                                  requests to the target server. Example: -H
                                  "Authorization: Bearer 123" .
  --show-errors-tracebacks        Show full tracebacks for internal errors.
  --ignore-ssl-verify TEXT        Controls whether the test run verifies the
                                  server's SSL certificate.
  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  OPTIONAL Accept all of the Python's log
                                  level values: CRITICAL, ERROR, WARNING,
                                  INFO, DEBUG, and NOTSET (all case
                                  insensitive).
  --export-junit-xml FILENAME     Export test results as JUnit XML
  -h, --help                      Show this message and exit.
```

> Levo CLI runs as a Docker container and by default mounts the current working directory on the host file system as read/write. If specifying a schema file as an argument, please provide a path that is accessible by the CLI container.

> Do not use `127.0.0.1` or `localhost` as arguments of the `--target-url`, as these will not resolve correctly within the CLI container. Please use `host.docker.internal` instead.

##### Usage Examples
`levo test-conformance --target-url http://host.docker.internal:9000/ --schema ./malschema.json`

`levo test-conformance --target-url http://host.docker.internal:9000/ --schema http://host.docker.internal:9000/api/openapi.json`

## test

`levo test [options] <arguments>`

```
Execute a test plan against the specified target-url.

Options:
  --target-url TEXT               --target-url must specify a valid URL
                                  pointing to a live host that implements the
                                  endpoints that are present in the test plan.
                                  [required]
  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS
                                  portal.
  --test-plan TEXT                --test-plan must specify a valid Levo
                                  Resource Name (LRN) or a path to a Levo Test
                                  Plan folder (accessible from the CLI
                                  container).  [required]
  -H, --header TEXT               Custom header that will be used in all
                                  requests to the target server. Example: -H
                                  "Authorization: Bearer 123" .
  --show-errors-tracebacks        Show full tracebacks for internal errors.
  --env-file TEXT                 Path to YAML file with environment
                                  definitions (AuthN/AuthZ info, etc.). This
                                  file must be accessible from the CLI
                                  container.
  --ignore-ssl-verify TEXT        Controls whether the test run verifies the
                                  server's SSL certificate.
  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
  -d, --suite-execution-delay INTEGER
                                  Adds a delay between test suite execution
  --request-timeout INTEGER       Timeout for the http request made to the API
  --export-junit-xml FILENAME     Export test results as JUnit XML
  -h, --help                      Show this message and exit.
```

> Levo CLI runs as a Docker container and by default mounts the current working directory on the host file system as read/write. If specifying a `Test Plan` folder as an argument, please provide a path that is accessible by the CLI container.

> Do not use `127.0.0.1` or `localhost` as arguments of the `--target-url`, as these will not resolve correctly within the CLI container. Please use `host.docker.internal` instead.

> Authentication credentials and user role information might be required by some `Test Plans` for proper execution. This is to be provided using the `--env-file` option. Please refer to details on [Authentication/Authorization][env-yaml].

##### Usage Examples
- Using a local test plan folder
`levo test --target-url host.docker.internal:8888 --test-plan ./my-test-plan-folder --env-file ./environment.yml`

- using a LRN (Levo Resource Name) for a test plan located in Levo SaaS
`levo test --target-url host.docker.internal:8888 --test-plan demo:app/Demo_crAPI:tp/Demo_crAPI --env-file ./environment.yml`

Here `demo:app/Demo_crAPI:tp/Demo_crAPI` is the LRN for a test plan located in Levo SaaS.


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
  --disable-reporting-to-saas     Do not send test reports to Levo's SaaS
                                  portal.
  --test-plan TEXT                --test-plan must specify a valid Levo
                                  Resource Name (LRN) or a path to a Levo Test
                                  Plan folder (accessible from the CLI
                                  container).  [required]
  -H, --header TEXT               Custom header that will be used in all
                                  requests to the target server. Example: -H
                                  "Authorization: Bearer 123" .
  --show-errors-tracebacks        Show full tracebacks for internal errors.
  --env-file TEXT                 Path to YAML file with environment
                                  definitions (AuthN/AuthZ info, etc.). This
                                  file must be accessible from the CLI
                                  container.
  --ignore-ssl-verify TEXT        Controls whether the test run verifies the
                                  server's SSL certificate.
  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
  -d, --suite-execution-delay INTEGER
                                  Adds a delay between test suite execution
  --request-timeout INTEGER       Timeout for the http request made to the API
  --export-junit-xml FILENAME     Export test results as JUnit XML
  -h, --help                      Show this message and exit.
```

> This command is a functional equivalent of the `levo test` command. Please see constraints and examples outlined for that command.

### export-env

The environment file is used to specify authentication credentials, and optional role(s)
information (for authorization tests). Please refer to [Authentication/Authorization][env-yaml].

`levo test-plan export-env [OPTIONS] <arguments>`

```
Export the environment file of a test plan from Levo SaaS to the local file system.

Options:
  --lrn TEXT                      The LRN of the test plan, whose environment
                                  file you want to export.  [required]
  --local-dir TEXT                Path to a local directory where the
                                  environment file is to be exported. The
                                  local directory must be accessible from the
                                  CLI container. If not specified, the test
                                  plan is exported to the current working
                                  directory.
  -v, --verbosity [NOTSET|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  Accept all of the Python's log level values:
                                  CRITICAL, ERROR, WARNING, INFO, DEBUG, and
                                  NOTSET (all case insensitive).
  -h, --help                      Show this message and exit.
```

> Levo CLI runs as a Docker container and by default mounts the current working directory on the host file system as read/write.

##### Usage Examples
`levo test-plan export-env --lrn "acme-gizmo-org:ws/buchi:app/Demo_crAPI:tp/Demo_crAPI" --local-dir ./`

## Additional Notes

### Usage with a proxy

#### Option 1: Copy proxy CA certificate

The CLI container does not have access to the host's CA certificates. If you are using a proxy with a self-signed certificate, you can copy the CA certificate to `$HOME/.config/configstore/ca-cert.pem` on the host. This directory is mounted as a volume in the CLI container in the alias. The CLI will read this file if it exists and load it into the container's CA certificate store.

#### Option 2: Use the `--ignore-ssl-verify` option

You can use the `--ignore-ssl-verify` flag with the `levo` command to disable SSL verification for **all** requests made by the CLI, for example:

```shell
levo --ignore-ssl-verify test --target-url https://crapi.levo.ai --app-lrn your-app
```

The usage of this option is discouraged unless absolutely necessary.

:::tip
Adding the `--ignore-ssl-verify` flag after the `test` subcommand, e.g. `levo test --ignore-ssl-verify`, will cause SSL verification to be ignored only for the requests sent to the target server.
:::

[env-yaml]: /guides/security-testing/concepts/test-plans/env-yml.md
