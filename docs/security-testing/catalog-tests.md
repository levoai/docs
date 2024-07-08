---
sidebar_position: 0
---

# Running Tests from Catalog

Levo provides you with the ability to run a variety of tests on your API endpoints using the Run Tests feature.

### Navigate to the `Applications` tab and choose an Application you want to run tests against.

![](../assets/testruns-step-1.png)

<br></br>

### Click on the `Run Tests` button on the bottom right side of the screen. You can choose to
- `Run On Cloud`: The tests will be run on Levo's platform, i.e., the requests to the target server are made by Levo. This means that the application must be exposed via a publicly reachable domain or IP address.
- `Run OnPrem`: The tests will run on your premise. Head to the **[testrunners](testrunner.md)** page to know how to install **Testrunners**.

![](../assets/testruns-step-2.png)

<br></br>

### Select Runnable Endpoints on the next screen.

![](../assets/testruns-step-3.png)

>Note: You can configure non-runnable endpoints by manually entering sample values for mandatory parameters.

<br></br>

### Click on Next and select the categories of test you want to run from and choose from a wide variety of Tests like BOLA, SQLI, CORS, Fuzzing, etc.

![](../assets/testruns-step-4.png)

<br></br>

### Enter a Target URL to run tests against, e.g. `http://crapi.levo.ai` and click on `Run Tests` to start the tests' execution.

![](../assets/testruns-step-5.png)
