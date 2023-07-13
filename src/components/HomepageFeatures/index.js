import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For Developers',
    Svg: require('@site/static/img/levo-value/developers.svg').default,
    description: (
      <ul>
        <li>
          <span>
            Seamless API Exploration, Auto-documentation using <code><a href="https://swagger.io/specification/">OpenAPI Specifications</a></code>, 
            and Testing.
          </span>
        </li>
        <li>
          <span>
            Validation for conformance to their OpenAPI Schemas. Prevent breaking changes from impacting API deployments in production.
          </span> 
        </li>
        <li>
          <span>
            Deploy regression free APIs to customers and partners.
          </span> 
        </li>
      </ul>
    ),
  },
  {
    title: 'For Security Engineers',
    Svg: require('@site/static/img/levo-value/security-pros.svg').default,
    description: (
      <ul>
        <li>
          <span>
            Uncover, Protect, and Scale! Automatically test all API end points for comprehensive security 
            vulnerabilities in CI/CD.
          </span>
        </li>
        <li>
          <span>
            Shift security left and prevent vulnerabilities from leaking into production. 
            Instant Visibility, Bulletproof Testing, Agile Security.
          </span>
        </li>
        <li>
          <span>
            Accelerate compliance initiatives by providing proof of API security posture to auditors.
          </span>
        </li>
      </ul>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className='col'>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
        </div>
        <div className="flex">
          <div className="text--left padding-horiz--md">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container-fluid'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <div class="w-100"></div>
          </div>
        </div>
    </section>
  );
}
