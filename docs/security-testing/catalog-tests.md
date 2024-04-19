---
sidebar_position: 0
---

# Running Tests from Catalog

Levo provides you with the ability to run a variety of tests on your endpoints using the Test Runs feature.

The tests run on Levo's Platform, i.e., the requests to the target server are made by Levo. This means that the application must be exposed via a publicly reachable domain or IP address.

Navigate to the `Applications` tab and choose an Application you want to run tests against.

Click on `Run Tests` on the top right side and then choose `Run on Cloud`.

Select Runnable Endpoints from the screen that comes up.

>Note: You can configure a non-runnable endpoint by entering a sample value for mandatory query parameters.

Click on Next and select the categories of test you want to run from and choose from a wide variety of Tests like BOLA, SQLI, CORS, Fuzzing, etc.

Enter a Target URL to run tests against, e.g. `http://crapi.levo.ai` and click on `Run Tests` to start the tests' execution.