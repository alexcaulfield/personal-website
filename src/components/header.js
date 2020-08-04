import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu, Container } from 'semantic-ui-react'

const PROJECTS = 'Projects';
const WORK = 'Work';

const Header = ({ activePanel }) => {
  const projectActive = activePanel === PROJECTS;
  const workActive = activePanel === WORK;
  return (
    <Menu
      secondary
      pointing
      fixed='top'
      size='massive'
    >
      <div className='ui container' style={{backgroundColor: 'white'}}>
        <Menu.Item
          name='AC'
          as={Link}
          to='/'
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name={PROJECTS}
            as={Link}
            to='/projects'
            active={projectActive}
          />
          <Menu.Item
            name={WORK}
            as={Link}
            to='/work'
            active={workActive}
          />
        </Menu.Menu>
      </div>
    </Menu>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
