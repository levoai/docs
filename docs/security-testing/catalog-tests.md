---
sidebar_position: 1
---

# Running Tests from Catalog

Levo provides you with the ability to run a variety of tests on your API endpoints using the Run Tests feature.

### Navigate to 'Applications' tab and select the application you want to run tests. 

![image](https://github.com/user-attachments/assets/450f865e-7346-41f2-8b0e-b08d1744d27c)

<br></br>

### Select the endpoints to 'Test' and click on the test button on the right upper corner. 

![image](https://github.com/user-attachments/assets/7957ef7e-ccfe-4eb7-98cd-ff3d280d1c3b)

<br></br>

### Select Test Mode.

![Screenshot 2025-07-07 131321](https://github.com/user-attachments/assets/762541bd-33e5-4e72-9c72-d1efeda9f78a)

### Tests will run for all runnable endpoints, you can change the endpoints test parameters if needed.

![Screenshot 2025-07-07 131602](https://github.com/user-attachments/assets/971b73de-f8ca-48c5-92ad-93f1f5e44ea1)

>Note: You can configure non-runnable endpoints by manually entering sample values for mandatory parameters.

<br></br>

### Select the categories of test you want to run from and choose from a wide variety of Tests like BOLA, SQLI, CORS, Fuzzing, etc.

![Screenshot 2025-07-07 131837](https://github.com/user-attachments/assets/3871888a-71e7-4ecb-be18-364a54711d40)

<br></br>

### Select Method and Enter a Target URL to run tests against, e.g. `http://crapi.levo.ai` and click on `Run Tests` to start the tests' execution.
- `Run on Cloud`: The tests will be run on Levo's platform, i.e., the requests to the target server are made by Levo. This means that the application must be exposed via a publicly reachable domain or IP address.
- `Run on-prem`: The tests will run on your premise. Head to the **[Testrunners](testrunner.mdx)** page to know how to install **Testrunners**.

![image](https://github.com/user-attachments/assets/8ca33d19-8bdf-4e01-ab4d-2b8f1d1f89a1)
