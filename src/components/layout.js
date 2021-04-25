/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import "./layout.css";
import "semantic-ui-less/semantic.less";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ activePanel, children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          backgroundColor: "var(--bg)",
          color: "var(--textNormal)",
          transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        <Header activePanel={activePanel} />
        <div
          style={{
            flexGrow: 1,
            paddingTop: "8vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
