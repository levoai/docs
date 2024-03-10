---
sidebar_position: 1
---

# General FAQs

#### Why do you need Levo?
Automated security testing of microservices, which uncovers sophisticated [business logic][biz-logic-flaws] and access control-based attacks, is a significant gap today. Continuous Security Assurance from Levo.ai provides fully automated and effortless (runtime) security testing for Microservices in CI/CD.

#### How is Levo different from other Application Security Testing tools?

Modern attacks target [business logic flaws][biz-logic-flaws] that arise from sub-optimal authentication and authorization across API endpoints.

AST tools like [SCA][sca] & [SAST][sast] statically analyze source code for security defects, but are unaware of authentication & authorization flaws.

[DAST][dast] tools focus on the runtime but lack adoption due to the significant manual heavy lifting required. Moreover, they are [“business logic blind”][biz-logic-flaws-tests] as they are unable to uncover sophisticated business logic and access control violation attacks.

[IAST][iast] tools require comprehensive unit test coverage written by developers, and are also “business logic blind”.

Levo is the only purpose-built security solution for APIs & microservices that provides comprehensive detection of both business logic, and OWASP Top 10 vulnerabilities.

#### What CI/CD environments are supported?
Levo supports all popular CI/CD environments. Please refer to [Integrations](/integrations/integrations.md) for more information.


[biz-logic-flaws]: https://www.hackerone.com/company-news/rise-idor
[biz-logic-flaws-tests]: https://engineeringblog.yelp.com/2020/01/automated-idor-discovery-through-stateful-swagger-fuzzing.html
[sca]: https://www.synopsys.com/glossary/what-is-software-composition-analysis.html
[sast]: https://www.microfocus.com/en-us/what-is/sast
[dast]: https://www.microfocus.com/en-us/what-is/dast
[iast]: https://snyk.io/learn/application-security/iast-interactive-application-security-testing/

