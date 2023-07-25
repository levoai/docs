import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageSolutions() {
    return (
        <div className={clsx("container", styles.containerPadding)}>
        <div className="row">
            <div className="col">
            <div className={clsx("card ")}>
                <div className={clsx("card-body", styles.cardPadding)}>
                    <h1 className="card-title"> API Obeservability </h1>
                    <p className="card-text">
                        Levo’s frictionless & privacy-preserving API Observability solution, auto 
                        discovers and auto documents all your APIs, making API Observability a 
                        mission critical requirement.
                    </p>
                    <br></br>
                    <Link to="/solutions/api-observability" className="button button--primary button--lg">Learn More</Link>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card">
                <div className={clsx("card-body", styles.cardPadding)}>
                <h1 className='card-title'> API Contract Testing</h1>
                <p className="card-text">
                    Levo lets modern development teams ship fast, and NOT compromise on quality & security.
                    Build resilient APIs. Prevent critical customer/partner integrations disruptions.
                </p>
                <br></br>
                <Link to="/solutions/api-contract-testing" className="button button--primary button--lg">Learn More</Link>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card">
                <div className={clsx("card-body", styles.cardPadding)}>
                <h1 className='card-title'> API Security Testing</h1>
                <p className="card-text">
                    Levo lets modern development teams ship fast, and NOT compromise on quality & security 
                    by providing high fidelity, low noise, and jargon free finds aimed for direct consumption 
                    by development teams.
                </p>
                <Link to="/solutions/api-security-testing" className="button button--primary button--lg">Learn More</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}