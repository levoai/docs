import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HomepageWorking from '../components/HomepageWorking';
import HomepageSolutions from '../components/HomepageSolutions';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx(styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx(styles.heroSubTitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Quick Start to Levo - 1min 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <br></br>
        <div className='container'>
          <div className={styles.heroBanner}>
            <h1 className={clsx(styles.sectionTitle)}>How Levo Works ?</h1>
          </div>
        </div>
        <br></br>
        <HomepageWorking />
        <div className='container'>
          <div className={styles.heroBanner}>
            <h1 className={clsx(styles.sectionTitle)}>Solutions Levo Offers</h1>
          </div>
        </div>
        <br></br>
        <HomepageSolutions />
      </main>
    </Layout>
  );
}
