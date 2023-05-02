import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavList, NavItems, Title } from './Styles'
import { CgProfile } from 'react-icons/cg'
import logo from '../../assets/logo.png'

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItems>
          <Link to="/" style={{ 'textDecoration': 'none'}} >
            <img src={logo} alt="logo" width="42px" style={{ marginRight: '10px', marginTop: '-5px' }} />
          </Link>
        </NavItems>
        <NavItems>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <CgProfile size={'35px'} color='black' />
          </Link>
        </NavItems>
      </NavList>
    </Nav>
  )
};

export default Navigation;