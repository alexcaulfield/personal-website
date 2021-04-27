import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Menu, Checkbox, Container } from "semantic-ui-react";
import styled from "styled-components";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const WORK = "Work";

const Toggle = styled(Checkbox)`
  margin: auto 0;
`;

const DarkModeMenu = styled(Menu)`
  max-width: 98vw !important;
  background-color: var(--bg) !important;
  .item {
    color: var(--textNormal) !important;
  }
`;

const Header = ({ activePanel }) => {
  const workActive = activePanel === WORK;
  return (
    <DarkModeMenu secondary pointing fixed="top" size="massive">
      <Container>
        <Menu.Item name="AC" as={Link} to="/" />
        <Menu.Menu position="right">
          <Menu.Item name={WORK} as={Link} to="/work" active={workActive} />
        </Menu.Menu>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Toggle
              toggle
              checked={theme === "dark"}
              onChange={(e, { checked }) =>
                toggleTheme(checked ? "dark" : "light")
              }
            />
          )}
        </ThemeToggler>
      </Container>
    </DarkModeMenu>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
