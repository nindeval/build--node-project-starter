import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Row, Col, Input, Icon, Button } from 'react-materialize'

class Login extends Component {
  render(){
    return (
      <div className='login'>
        <Row>
          <Col m={12}>
            <div>
            <br/>
              <div className="section white">
                <div className="row container">
                  <h3 className="header center">Hey ¡te extrañamos!</h3>
                  <p className="center">Encuentra personas que buscan aprender y compartir habilidades. </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="container">
            <Col m={3}></Col>
            <Col m={6}>
              <p className="title-form">Colóca tus datos</p>
              <Input s={12} label="Email" validate type='email'></Input>
              <Input type="password" label="Contraseña" s={12} />
              <div className="clear"></div>
              <div className="text-float-button valign-wrapper right">
                  <Button>Ingresa</Button>
              </div>
              <div className="clear"></div>
              <div>
                <small>¿No te has registrado?<Link to="/enhorabuena"> Regístrate aquí</Link></small>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    )
  }
}
export default Login;
