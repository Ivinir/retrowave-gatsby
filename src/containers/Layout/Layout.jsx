import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={
      (data) => (
        <>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta charSet="utf-8" />
            <html lang="en" />
          </Helmet>
          <div className="mainWrapper">
            {children}
          </div>
        </>
      )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
