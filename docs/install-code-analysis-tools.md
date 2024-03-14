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


[install-cli]: /security-testing/test-laptop
