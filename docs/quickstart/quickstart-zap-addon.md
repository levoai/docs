---
sidebar_position: 6
keywords: [API Security, ZAP, OWASP, Linux, macOS, Windows, API Observability]
---

# Quickstart with OWASP ZAP

The Levo.ai add-on for ZAP allows building OpenAPI specs with the traffic sent or proxied via ZAP.

This guide assumes that you have [signed up for a Levo account](https://app.levo.ai/signup) and have [installed a recent version of ZAP](https://www.zaproxy.org/download/) (> 2.12.0).

Here are the steps you need to follow to start building OpenAPI specs with Levo and ZAP:
1. The OpenAPI spec is built by sending anonymized API traces to Levo. You may run the *Satellite* (a set of services which receives and processes the traces) locally using docker or minikube, or on AWS with an AMI provided by Levo.

   [Click here for instructions on installing the satellite](/api-observability/install-guide/install-satellite).

   Please ensure that ZAP is able to reach the satellite at the configured listening port (the default is `9999`).

2. Launch ZAP and install the Levo.ai add-on from the [ZAP Marketplace](https://www.zaproxy.org/addons/). You may need to restart ZAP after the add-on is installed.
3. If the add-on is successfully installed, you should see a new button in the main toolbar.
   ![Screenshot of the Levo.ai button in ZAP's main toolbar](../assets/zap-levo-button-toolbar.png)

   Clicking on it will toggle sending traffic to Levo's satellite.
4. Navigate to Tools &rarr; Options &rarr; Levo.ai in ZAP and enter the URL pointing to the satellite (e.g. `http://localhost:9999`).

   ![Screenshot of the Levo.ai Options Panel in ZAP](../assets/zap-levo-options.png)
5. Ensure that the Levo button is enabled in the toolbar, and you are good to go! Start browsing your website using ZAP and you should start seeing auto-discovered applications in your Levo dashboard in a few minutes.
