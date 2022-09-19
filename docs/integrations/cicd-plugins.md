---
sidebar_position: 2
---

# CI/CD Integrations

![Embed Levo in CI/CD Quality Gates](../assets/levo-quality-gates.svg)

You can embed Levo’s contract & security tests in various stages of your software delivery pipeline via CI/CD [Quality Gates](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates?view=azure-devops).

While Levo can be embedded in any CI/CD product (via the CLI), below are first class integrations.

- [Jenkins](#jenkins)
- [GitHub Actions](#github-actions)
- [Other CI/CD Products](#others)
<br/>

-----------------------------------

## Jenkins

Levo's security/contract tests can be embedded in Jenkins quality gates via Levo's [Jenkins plugin](https://plugins.jenkins.io/levo/).

### Prerequisites
- Forever Free Account on Levo.ai
- A runnable Levo [Test Plan](../security-contract-testing/concepts/test-plans/test-plans.md)
- A `Levo CLI Authorization Key`. Refer to instructions [here](#generating-cli-authorization-keys)

### Installation
Below are the installation options:

- [Using the GUI](https://www.jenkins.io/doc/book/managing/plugins/#from-the-web-ui): From your Jenkins dashboard navigate to `Manage Jenkins > Manage Plugins` and select the `Available` tab. Locate the plugin by searching for levo, and install it

- Using the [CLI tool](https://github.com/jenkinsci/plugin-installation-manager-tool):
    ```bash
    jenkins-plugin-cli --plugins levo:33.vc34b_8f81dc9a
    ```

- Using [direct upload](https://www.jenkins.io/doc/book/managing/plugins/#advanced-installation). Download one of the [releases](https://plugins.jenkins.io/levo/#releases) and upload it to your Jenkins instance

### Running Levo Test Plans Via Freestyle Projects (Jobs)
Follow the steps below to create a build job to execute a Levo Test Plan against your build target.

1. Create a `Freestyle project` and name it appropriately

2. Optionally configure the `General`, `Build Triggers`, and `Build Environment` sections based on your preferences

3. Add `Levo Test Plan` build step to `Build Steps`

    ![Jenkins Build Step](../assets/jenkins-build-step.png)

4. Configure the build step as shown below

    ![Levo Build Step Config](../assets/jenkins-levo-test-plan-build-step.png)

    i. `Configure Test Plan`
    
    Copy the LRN of your Levo Test Plan (from the Levo console), and paste it in the Test Plan section. The LRN uniquely identifies the Test Plan to execute.

    ![LRN](../assets/test-plan-lrn.png)

    ii. `Configure Target`

    Specify the API target that needs to be tested here. This is usually the base URL of your API.
    
    iii. Configure Extra CLI Arguments (optional)
    
    Please refer to the [CLI Command Reference](../security-contract-testing/levo-cli/levo-cli-command-reference.md). Specify any optional arguments based on your preferences here.

    iv. `Generate JUnit Reports`
    
    If you would to generate build results (Test Plan execution results) in standard [JUnit format](https://www.ibm.com/docs/en/developer-for-zos/14.1.0?topic=formats-junit-xml-format), check the box titled `Generate JUnit Reports`.

    v. `Levo Credentials`

    You will need to specify the *Levo CLI Authorization Key* here. The Jenkins [Credentials Provider Plugin](https://plugins.jenkins.io/credentials/) is utilized to securely store the API key.

    ![Jenkins Credentials](../assets/add-jenkins-cli-auth-key.png)

    - Click on the "Add" button next to the credentials dropdown
    - Select your domain
    - Select "Levo CLI Credentials" for Kind
    - Select your `Scope` based on your preferences
    - Enter your *Organization ID* in the `Organization Id` text box. Refer to [Accessing Organization IDs](./common-tasks.md#accessing-organization-ids) for instructions on fetching your ID
    - Enter your CLI authorization key in the `CLI Authorization Key` textbox. Refer to [Generating CLI Authorization Keys](./common-tasks.md#generating-cli-authorization-keys) for instructions on fetching your key
    - Click `Add` to save the credentials
    - Finally select the credential you just added

    vi. `Environment Secret Text`

    If you are using an [environment file](https://docs.levo.ai/security-contract-testing/test-your-app/test-app-security/data-driven/configure-env-yml) to define authentication details, you add those details as a secret file here.

    ![Environment File for Jenkins](../assets/add-env-file-to-jenkins-secret.png)

    - Click on the "Add" button next to the *Environment Secret Text* dropdown
    - Select your domain
    - Select "Secret file" for Kind
    - Select your `Scope` based on your preferences
    - Import your `environment.yml` file using the file chooser dialog
    - Click `Add` to save the environment.yml as a secret file
    - Now select the secret file you just added

5. Optionally configure `Post-build Actions`

6. `Save/Apply` your `Freestyle Project` configuration. You are done!





<br/>

-----------------------------------
## GitHub Actions
Levo's security/contract tests can be embedded in quality gates via [GitHub Actions](https://docs.github.com/en/actions).

Below are examples of embedding Levo's autogenerated tests in GitHub CI/CD via pre-built actions. You have two choices.
- [Execute Test Plans](#execute-test-plans-via-actions)
- [Execute Standalone Contract Tests](#execute-standalone-schema-conformance-tests-aka-contract-tests-via-actions)


### Execute Test Plans Via Actions

The pre-built action for executing `Test Plans` requires the following configuration settings:

- `authorization-key` : Specify your CLI authorization key here. Refer to [Generating CLI Authorization Keys](./common-tasks.md#generating-cli-authorization-keys) for instructions on fetching your key

- `organization-id` : Specify your *Organization ID* here. Refer to [Accessing Organization IDs](./common-tasks.md#accessing-organization-ids) for instructions on fetching your ID

- `target` : The base URL of the Application/API under test

- `plan` : Specify the LRN of your Levo Test Plan (from the Levo console) here. The LRN uniquely identifies the Test Plan to execute

    ![LRN](../assets/test-plan-lrn.png)

- `base64_env` : This is an **OPTIONAL** setting.

    If you are using an [environment file](https://docs.levo.ai/security-contract-testing/test-your-app/test-app-security/data-driven/configure-env-yml) to define authentication details, you add the contents of the file here in BASE64 encoded format.

- `report` : This is an **OPTIONAL** setting.
    
    This setting controls the reporting of test results to the Levo Cloud. If you do not want to send test results to the Levo Cloud, set this to `false`. The default value is `true`. 

- `cli_extra_args` : This is an **OPTIONAL** setting.

    Use this setting to pass extra CLI arguments like headers or the verbosity level. Please use `\\\˝` to escape quotes.
    
    E.g. `cli_extra_args: "-H \\\"Authorization: Bearer 1234\\\" --verbosity INFO"`

Here is a sample *Test Plan Action* with its configuration:

```YAML
- uses: levoai/actions/test-plan@v1-beta
  with:
    # Authorization key required to execute the Levo CLI. Please refer to https://app.levo.ai/settings/keys to get your authorization key.
    authorization-key: <'Specify your CLI authorization key here'>

    # The ID of your organization in Levo dashboard. Please refer to https://app.levo.ai/settings/organization to get your organization id.
    organization-id: <'Specify your organization ID here'>

    # The base URL of the Application/API under test.
    target: <'Specify the target base URL here'>

    # Test plan LRN. You can get this value from the test plan section in the Levo SaaS console.
    plan: <'Specify your Test Plan's LRN here'>

    # [OPTIONAL] Base64 encoded environment file content.
    base64_env: <'The contents of your environment fil as a BASE64 encoded string here'>

    # [OPTIONAL] If you do not want to report the result of this execution to the Levo cloud, set this value to false. Default: true.
    report: <true|false>

    # [OPTIONAL] Use this option to pass extra CLI arguments like headers or verbosity.
    # Please use \\\˝ to escape quotes.
    # E.g. cli_extra_args: "-H \\\"Authorization: Bearer 1234\\\" --verbosity INFO"
    cli_extra_args: <"Specify any extra arguments here">
```

#### Job Outputs
This pre-built *Action* produces the below [Outputs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs), which can be referenced by downstream Actions/Jobs.

```YAML
outputs:
  success:
    description: '# of successful test cases'
  failed:
    description: '# of failed test cases'
  skipped:
    description: '# of skipped test cases'
```


### Execute Standalone Schema Conformance Tests (aka Contract Tests) Via Actions

The pre-built action for executing standalone `Schema Conformance Tests` requires the following configuration settings:

- `authorization-key` : Specify your CLI authorization key here. Refer to [Generating CLI Authorization Keys](./common-tasks.md#generating-cli-authorization-keys) for instructions on fetching your key

- `organization-id` : Specify your *Organization ID* here. Refer to [Accessing Organization IDs](./common-tasks.md#accessing-organization-ids) for instructions on fetching your ID

- `schema` : The URL or file path of the (under test) API's OpenAPI schema (YAML or JSON format)

- `target` : The base URL of the Application/API under test

- `report` : This is an **OPTIONAL** setting.
    
    This setting controls the reporting of test results to the Levo Cloud. If you do not want to send test results to the Levo Cloud, set this to `false`. The default value is `true`. 

- `cli_extra_args` : This is an **OPTIONAL** setting.

    Use this setting to pass extra CLI arguments like headers or the verbosity level. Please use `\\\˝` to escape quotes.
    
    E.g. `cli_extra_args: "-H \\\"Authorization: Bearer 1234\\\" --verbosity INFO"`

Here is a sample *Schema Conformance Test Action* with its configuration:

```YAML
- uses: levoai/actions/schema-conformance@v1-beta
  with:
    # Authorization key required to execute the Levo CLI. Please refer to https://app.levo.ai/settings/keys to get your authorization key.
    authorization-key: <'Specify your CLI authorization key here'>

    # The ID of your organization in the Levo dashboard. Please refer to https://app.levo.ai/settings/organization to get your organization id.
    organization-id: <'Specify your organization ID here'>

    # The URL or file path of the API's OpenAPI schema.
    schema: '<URL of schema|File path of schema>'

    # The base URL of the Application/API under test.
    target: '<Specify the target base URL here>'

    # [OPTIONAL] If you do not want to report the result of this execution to the Levo cloud, set this value to false. Default: true.
    report: <true|false>

    # [OPTIONAL] Use this option to pass extra CLI arguments like headers or verbosity.
    # Please use \\\˝ to escape quotes.
    # E.g. cli_extra_args: "-H \\\"Authorization: Bearer 1234\\\" --verbosity INFO"
    cli_extra_args: <"Specify any extra arguments here">
```

#### Job Outputs
This pre-built *Action* produces the below [Outputs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs), which can be referenced by downstream Actions/Jobs.

```YAML
outputs:
  success:
    description: '# of successful test cases'
  failed:
    description: '# of failed test cases'
```

<br/>

-----------------------------------

## Others

Need support for a CI/CD vendor that is not listed above?

Levo's autogenerated tests can be embedded in any CI/CD product by simply wrapping the Levo CLI in a shell script that is invoked by your CI/CD vendor's job hooks.

Contact `support@levo.ai` for more information.

<br/>

-----------------------------------