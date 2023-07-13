import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const WorkingList = [
    {
        title: 'Observe',
        Svg: require('@site/static/img/levo-value/developers.svg').default,
        description: (
            <ul>
                <li>
                    <strong>You cannot protect what you cannot see!</strong> 
                    {/* Visibility of APIs is fundamental for API Management, Governance, and Security.
                    Conventional instrumentation techniques are very intrusive, and require DevOps 
                    teams to add runtime agents, SDKs, or sidecar proxies to their running 
                    applications/services.
                    This causes unnecessary friction between DevOps and SecOps teams. */}
                </li>
                <li>
                    Levo provides frictionless API Observability via a no-code and agentless 
                    approach.
                </li>
                <li>
                    Levo uses an <code><a href="https://ebpf.io/">eBPF</a></code> sensor to 
                    passively, and transparently capture all API traffic in pre-production and 
                    production environments. 
                </li>
                <li>
                    The eBPF sensor is <bold>not</bold> inline with 
                    application traffic, and will not impact the performance of the applications 
                    being instrumented.
                </li>
                <li>
                    Levo can sample traffic aggressively, leading to optimized resource consumption 
                    by the eBPF sensor. The captured API traffic is anonymized and then sent to 
                    Levo SaaS, which consumes API schema without ingesting any of your actual API data.
                </li>
                <li>
                    If you already have OpenAPI specifications for your APIs. Levo can simply import
                    your OpenAPI and Swagger files.
                </li>
            </ul>
        ),
    },
    {
        title: 'Model',
        Svg: require('@site/static/img/levo-value/security-pros.svg').default,
        description: (
            <ul>
                <li>
                    API metadata consumed from your runtime environments is used to build a behavior 
                    model of your APIs.
                </li>
                <li>
                    The Model comprises of a comprehensive API catalog.
                </li>
                <li>
                    The API Catalog is the auto discovered, and auto documented 
                    <code><a href="https://swagger.io/specification/">OpenAPI Specification</a></code>
                     of all the API endpoints present in your runtime environments.</li>
                <li>
                    The API Catalog provides continuous visibility to enable proper API 
                    Management & Governance.
                </li>
            </ul>
        ),
    },
    {
        title: 'Generate',
        Svg: require('@site/static/img/levo-value/security-pros.svg').default,
        description: (
            <ul>
                <li>
                    The model generates tailored security test plans for all your auto 
                    discovered API endpoints. 
                    The test plans are analogous to 
                    <code><a href="https://www.postman.com/collection/">Postman Collections</a></code>
                </li>
                <li>
                    The test plans provide comprehensive coverage for business logic, 
                    authentication/authorization, and OWASP Top 10 vulnerabilities that are specific to APIs.
                </li>
            </ul>
        ),
    },
    {
        title: 'Execute',
        Svg: require('@site/static/img/levo-value/security-pros.svg').default,
        description: (
            <ul>
                <li>
                The test plans execute in CI/CD 
                <code>
                    <a href="https://docs.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates?view=azure-devops">
                        gates
                    </a>
                </code>
                 via Levo's `Test Runner`, similar to how DevOps teams run functional tests (unit, integration, etc.).
                </li>
                <li>
                    Levo provides Test Runner plugins for popular CI/CD vendors. The Test Runner is packaged as a
                     Docker image.
                </li>
                <li>
                    Results from the test plan execution are emitted to both CI/CD logs and Levo SaaS.
                </li>
            </ul>
        ),
    }, 
    {
        title: 'Actionable Insights',
        Svg: require('@site/static/img/levo-value/security-pros.svg').default,
        description: (
            <ul>
                <li>
                    Levo provides high fidelity, low noise, and jargon free (vulnerability) findings
                 that are targeted for direct consumption by development teams.
                </li>
                <li>
                    Findings have detailed API traffic logs that aid in better comprehension, 
                    and problem reproduction.
                </li>
                <li>
                    Levo provides contextual remediation help for development teams to address 
                    issues via self service.
                </li>
            </ul>
        ),
    }
]

function WorkingText({title, description}) {
    return (
        <div className="col">
            <div className="card-body">
                <br></br>
                <div className="container">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

function WorkingImage({Svg}) {
    return (
        <div className="col-1">
            <div className={clsx('card-image',styles.imageFlex)}>
                <Svg className={styles.image} role="img"/>
            </div>
        </div>
    );
}

function WorkingCard({idx, title, Svg, description}) {
    if (idx % 2 == 0) {
        return (
            <div className='container'>
                <div className="card">
                    <div className='row no-gutters'>
                        <WorkingImage Svg={Svg}/>
                        <WorkingText title={title} description={description}/>
                    </div>
                </div>
                <br></br>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <div className="card">
                    <div className="row no-gutters">
                        <WorkingText title={title} description={description}/>
                        <WorkingImage Svg={Svg}/>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}

export default function HomepageWorking() {
    return (
        <div className="container">
            {
                WorkingList.map((props, idx) => (
                    <WorkingCard idx={idx} {...props} />
                ))
            }
        </div>
    );
}