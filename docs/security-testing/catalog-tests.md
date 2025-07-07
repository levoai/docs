---
sidebar_position: 1
---

# Running Tests from Catalog

Levo provides you with the ability to run a variety of tests on your API endpoints using the Run Tests feature.

### Navigate to 'Applications' tab and select the application you want to run tests. 

![image](https://github.com/user-attachments/assets/a2744440-38f4-4a2a-9d9a-e0a6ff15cc3a)

<br></br>

### The 'Test' button on the top right corner, will test all the endpoints of the application. 

![image](https://github.com/user-attachments/assets/2bb5e5d1-7ed2-46e5-b1be-ed8803efc047)

### Select the endpoints to 'Test' and click on the test button at the lower right bottom. 

![image](https://github.com/user-attachments/assets/5fcb8668-a31f-4238-bb19-add2cdb2404f)

<br></br>

### Select Test Mode.

For testing using test user, we have to configure the test user, before running the tests. 

![image](https://github.com/user-attachments/assets/56acd527-b558-4509-aebf-d7ff56beb0f7)
![image](https://github.com/user-attachments/assets/edcb2214-dac2-459b-805a-ef5cab0b562e)

For testing using traces, it will use the recent traces to run the tests. 

![image](https://github.com/user-attachments/assets/18590d42-c916-40cd-a06f-a29135b6f8e8)

### Tests will run for all runnable endpoints, you can change the endpoints test parameters if needed.

![image](https://github.com/user-attachments/assets/35c8c891-02ef-4839-987a-719711c62278)

>Note: You can configure non-runnable endpoints by manually entering sample values for mandatory parameters.

<br></br>

### Select the categories of test you want to run from and choose from a wide variety of Tests like BOLA, SQLI, CORS, Fuzzing, etc.

![image](https://github.com/user-attachments/assets/3985b363-8db3-4447-942d-e5b6376e482b)

<br></br>

### Select Method and Enter a Target URL to run tests against, e.g. `http://crapi.levo.ai` and click on `Run Tests` to start the tests' execution.
- `Run on Cloud`: The tests will be run on Levo's platform, i.e., the requests to the target server are made by Levo. This means that the application must be exposed via a publicly reachable domain or IP address.
- `Run on-prem`: The tests will run on your premise. Head to the **[Testrunners](testrunner.mdx)** page to know how to install **Testrunners**.

![image](https://github.com/user-attachments/assets/f062ced0-2383-4d9d-abff-07e05069178d)

