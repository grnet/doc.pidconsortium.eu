import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Started',
    Svg: require('@site/static/img/undraw_annotation.svg').default,
    description: (
      <>
        Get started with the ePIC API.
        Browse the documentation
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('@site/static/img/undraw_code_typing.svg').default,
    description: (
      <>
        Enable the use of persistent identifiers in your application using the ePIC API
      </>
    ),
  },
  {
    title: 'Contact',
    Svg: require('@site/static/img/undraw_contact_us.svg').default,
    description: (
      <>
        Are you interested in using Persistent Identifiers for your data set? Get in touch with us to get you started. Just send an email support [at] pidconsortium.net
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
