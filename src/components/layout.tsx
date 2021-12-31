/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ margin: `0 auto` }}>
        <main>{children}</main>
        <footer
          style={{ margin: `3rem 0 .5rem 0.5rem` }}
        >
          <Link to="/">@me</Link> - {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
