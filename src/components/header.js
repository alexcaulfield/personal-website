import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Menu } from "semantic-ui-react";

const WORK = "Work";

const Header = ({ activePanel }) => {
  const workActive = activePanel === WORK;
  return (
    <Menu secondary pointing fixed="top" size="massive">
      <div className="ui container" style={{ backgroundColor: "white" }}>
        <Menu.Item name="AC" as={Link} to="/" />
        <Menu.Menu position="right">
          <Menu.Item name={WORK} as={Link} to="/work" active={workActive} />
        </Menu.Menu>
      </div>
    </Menu>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
