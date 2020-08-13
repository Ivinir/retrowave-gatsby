import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image filename={'gatsby-astronaut.png'} alt={'gatsby-astronaut.png'} />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to Using TypeScript</Link>
  </Layout>
);

export default IndexPage;
