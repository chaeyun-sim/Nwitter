import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavList, NavItems } from './Styles'
import { CgProfile } from 'react-icons/cg'
import logo from '../../assets/logo.png'

const Navigation = () => {  
  return (
    <Nav>
      <NavList>
        <NavItems>
          <Link to="/home" style={{ 'textDecoration': 'none'}} >
            <img src={logo} alt="logo" width="42px" style={{ marginRight: '10px', marginTop: '-5px' }} />
          </Link>
        </NavItems>
      </NavList>
    </Nav>
  )
};

export default Navigation;