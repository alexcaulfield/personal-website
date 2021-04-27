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
import styled from "styled-components";

const StyleWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--bg);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
  .segments {
    background-color: var(--bg) !important;
  }
`;

const MainViewWrapper = styled.div`
  flex-grow: 1;
  padding-top: 8vh;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ activePanel, children }) => {
  return (
    <StyleWrapper>
      <Header activePanel={activePanel} />
      <MainViewWrapper>{children}</MainViewWrapper>
      <Footer />
    </StyleWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
