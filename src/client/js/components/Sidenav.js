import React, { Component } from 'react';
import { Row, Col, SideNav, SideNavItem, Button } from 'react-materialize'

class SideNavigation extends Component {
  render(){
    return (
      <div>
         <SideNav
          trigger={
            <li>
            <a>Perfil</a>
            </li>
          }
          options={{ closeOnClick: true }}
          >
          <SideNavItem userView
            user={{
              background: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              image: 'https://cdnb.artstation.com/p/assets/images/images/001/863/575/large/irakli-nadar-artstation-da.jpg?1453903033',
              name: 'Somebody',
              email: 'Somebody@gmail.com'
            }}
          />

          <SideNavItem href='#!icon' icon='cloud' subheader>Habilidades para mostrar</SideNavItem>
          <SideNavItem divider />
          <SideNavItem href='#!icon' icon='cloud' subheader>Habilidades para aprender</SideNavItem>
          <SideNavItem divider />
          <SideNavItem >Editar perfil</SideNavItem>
          <SideNavItem >Opciones</SideNavItem>

          { /*
            <SideNavItem href='#!second'>Second Link</SideNavItem>
            <SideNavItem waves href='#!third'>Opciones</SideNavItem> */ }
        </SideNav>
      </div>
    )
  }
}
export default SideNavigation;
