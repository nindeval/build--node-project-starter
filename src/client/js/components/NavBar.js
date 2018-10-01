import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

class Nav extends Component {
  render(){
    return (
      <div>
        <Navbar brand='HxH' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem> */}
          <NavItem href='/enhorabuena'>Regístrate</NavItem>
          <NavItem href='/ingresa'>Ingresa aquí</NavItem>
        </Navbar>
      </div>
    )
  }
}
export default Nav;
