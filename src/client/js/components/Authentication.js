import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Row, Col, Input, Icon, Button } from 'react-materialize'

class Authentication extends Component {
  render(){
    return (
      <div className='authentication'>
        <Row>
          <Col m={12}>
            <div>
            <br/>
              <div className="section white">
                <div className="row container">
                  <h3 className="header center">¡Truequea con nosotros!</h3>
                  <p className="center">HxH es una comunidad de trueque personal, ¡sientete libre de dar a conocer tus habilidades!</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="container">
            <p className="title-form"> Bienvenido</p>
            <Input s={6} label="Nombre" validate></Input>
            <Input s={6} label="Apellido" validate />
            <Input s={6} label="Email" validate type='email'></Input>
            <Input type="password" label="Contraseña" s={3} />
            <Input type="password" label="Confirma tu contraseña" s={3} />
            <div className="clear"></div>
            <div className="text-float-button valign-wrapper right">
                <small className="#">Siguiente </small>
                <a href="/autent" className="btn-floating btn-large waves-effect waves-light gray right">
                <Icon className="material-icons">arrow_forward</Icon></a>
            </div>
            <div className="clear"></div>
            <div>
              <small>¿Ya eres usuario?<Link to="/"> Inicia sesión aquí.</Link></small>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
export default Authentication;
