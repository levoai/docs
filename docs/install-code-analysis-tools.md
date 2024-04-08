---
sidebar_position: 6
---

# Install Code Analysis Tools

## Prerequisites
- Docker is installed on your machine.
- Ensure that you are able to launch and use Docker containers, and network connectivity works.
- `api.levo.ai` is reachable from the host machine

## Instructions to setup code-scanning

- [Install Levo CLI][install-cli], which contains the commands to scan code
- Once the CLI is installed, you can
    - [Scan your code and identify REST API endpoints.](#scan-code-and-identify-rest-api-endpoints)
    - [Scan the project directory to look for existing OpenAPI/Swagger specs.](#scan-project-directory-to-fetch-and-import-openapiswagger-specs)


### Scan Code and identify REST API Endpoints

- Login to Levo CLI
    ```
    levo login
    ```
- Enter the CLI authorization key and select the organization.
- Once logged in, go to the project directory where you want to run code-scanning
    ```
    cd <your_project_directory>
    ```
- Inside the project directory, run the below CLI command
    ```
    levo scan code \
        --dir <relative path to directory you wish to scan> \
        --app-name <name of the app you wish to see on Dashboard> \
        --env-name <the environment to which your app should belong>
    ```
- In the `--dir` option, you can specify the relative subdirectory path (`./path/to/sub-directory`) if you want to scan only a part of the project, or simply DOT (`.`) for the current directory.
- If there are REST endpoints in the code, they will be imported to the Levo Dashboard, under the given app-name.


### Scan project directory to fetch and import OpenAPI/Swagger specs

- Login to Levo CLI
    ```
    levo login
    ```
- Enter the CLI authorization key and select the organization.
- Once logged in, go to the project directory where you want to scan for openAPI specs.
    ```
    cd <your_project_directory>
    ```
- Inside the project directory, run the below CLI command
    ```
    levo scan schema \
        --dir <relative path to directory you want to scan>  \
        --env-name <the environment to which your app should belong>
    ```
- In the `--dir` option, you can specify the relative subdirectory path (`./path/to/sub-directory`) if you want to scan only a part of the project, or simply DOT (`.`) for the current directory.
- If there are OpenAPI/Swagger specs in the project directory, they will be imported to Levo Dashboard.
- The App Name will be the same as the title of the OpenAPI/Swagger spec.


### Github Action

#### Prerequisites
- Forever Free Account on Levo.ai
- An application code repository on GitHub (Currently Java is supported)

#### Action Configuration
The pre-built action for executing `Scan Code` requires the following configuration settings:

- `authorization-key` : Specify your CLI authorization key here. Refer to [Generating CLI Authorization Keys](/integrations/common-tasks.md#generating-cli-authorization-keys) for instructions on fetching your key

- `organization-id` : Specify your *Organization ID* here. Refer to [Accessing Organization IDs](/integrations/common-tasks.md#accessing-organization-ids) for instructions on fetching your ID
 
- `saas-url` : The URL of the Levo SaaS instance. Default value is `https://api.levo.ai`. For India, use `https://api.india-1.levo.ai`.

- `app-name` : The name of the application you want to see on the Levo Dashboard

- `env-name` : This is an **OPTIONAL** setting. The environment to which your app should belong. Default value is `staging`.

Here is a sample *Scan Code Action* with its configuration:

```YAML
- name: Levo Scan Repo
  uses: levoai/actions/scan@scan
  with:
    # Authorization key required to execute the Levo CLI. Please refer to https://app.levo.ai/settings/keys to get your authorization key.
    authorization-key: <'Specify your CLI authorization key here'>

    # The ID of your organization in Levo dashboard. Please refer to https://app.levo.ai/settings/organization to get your organization id.
    organization-id: <'Specify your organization ID here'>

    # [OPTIONAL] The environment to which your app should belong. Default: staging.
    saas-url: "https://api.dev.levo.ai"

    # The name of the application you want to see on the Levo Dashboard.
    app-name: <'Application Name here'>

    # [OPTIONAL] The environment to which your app should belong. Default: staging.
    env-name: <'Environment Name here'>
```

#### Job Outputs
This pre-built *Action* produces the below [Outputs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs), which can be referenced by downstream Actions/Jobs.

```YAML
outputs:
  scan-success: <'true/false'>
```


[install-cli]: /security-testing/test-laptop
