import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Row, Col, Input, Icon } from 'react-materialize'

class Register extends Component {
  render(){
    return (
      <div className='Register'>
        <Row>
          <Col m={12}>
            <div>
            <br/>
              <div className="section white">
                <div className="row container">
                  <h3 className="header center">Un par de pasos más..</h3>
                  <p className="center">Tus datos nos ayudarán a  conectarte con otras personas que quieren hacer este proceso de intercambio. <br/> Por favor llena los siguientes espacios puntualmente.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="container">
            <p className="title-form">¿Dónde estás ubicado?</p>
            {
              // <Input s={10} label="Calle" validate></Input>
              // <Input s={2} label="Número" validate />
              // <Input s={4} label="Colonia" validate></Input>
              //
              // <Input s={4} label="Estado" validate />
            }
            <Input s={4} label="Delegación" validate />
            <Input s={4} label="Código Postal" validate />
            <Input s={4} label="Ciudad" validate />
            <div className="clear"></div>
            <p className="title-form">Foto de perfil</p>
            <Input type="file" label="buscar" s={12} multiple placeholder="Muéstranos tu mejor selfie ;)" />
            <div className="text-float-button valign-wrapper right">
                <small className="#">Siguiente </small>
                <a href="/autent" className="btn-floating btn-large waves-effect waves-light gray right">
                <Icon className="material-icons">arrow_forward</Icon></a>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
export default Register;
