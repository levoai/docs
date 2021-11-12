# Using your own app to evaluate Levo's schema conformance testing

Ensure your target application is running and note down its URL.

Use `host.docker.internal` instead of `localhost` or `127.0.0.1` for targets on your local machine.

## I use a live URL for my OpenAPI v3 specifications
Execute the following in the shell where you installed Levo CLI:

```
export SCHEMA_URL="<your live schema's URL>"
export TARGET_URL="<your live target's URL>"

# Run all schema conformance tests for all my API operations
levo test-conformance --schema $SCHEMA_URL --target-url $TARGET_URL

# Provide custom headers (e.g. Authorization if required)
levo test-conformance --schema $SCHEMA_URL --target-url $TARGET_URL -H "Authorization: Bearer <token>"

```
Now you can view the test results in the https://levo.ai SaaS console's `Test Runs` page.

## I use a local JSON or YAML file my OpenAPI v3 specifications
Levo CLI can accept schemas (OASv3, Swagger, etc.) as a file rather than a live URL. The Levo CLI container, mounts the user's HOME directory (on the host), as readonly directory inside the container.

Execute the following in the shell where you installed Levo CLI:

```
export SCHEMA_FILE="<your schema file's absolute path from the $HOME directory>"
export TARGET_URL="<your live target's URL>"

# Run all schema conformance tests for all my API operations
levo test-conformance --schema $SCHEMA_FILE --target-url $TARGET_URL

# Provide custom headers (e.g. Authorization if required)
levo test-conformance --schema $SCHEMA_FILE --target-url $TARGET_URL -H "Authorization: Bearer <token>"

```
Now you can view the test results in the https://levo.ai SaaS console's `Test Runs` page.
