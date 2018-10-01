import React, { Component } from 'react';
import request from 'superagent'
import NotificationSystem from 'react-notification-system'

import {Link} from "react-router-dom"
import { Row, Col, Input, Icon, Button } from 'react-materialize'

import PubSub from "pubsub-js"

class Authentication extends Component {

  _handleLogin(evt){
    evt.preventDefault()
    const formEl = evt.target
    const emailInput = formEl.email.value
    const pwInput = formEl.password.value

    const component = this

    request
      .post('/auth/login')
      .send({email: emailInput, password: pwInput})
      .then((serverRes)=>{
        let user = serverRes.body

        const newUserState = {
          currentUser : user
        }

        PubSub.publishSync("updateState", newUserState)

        if(user.delegacion && user.zipcode && user.city){
            component.props.history.push('/dashboard')
        } else {
            component.props.history.push("/tus-datos")
        }

      })
      // .catch((e))
  }

  render(){
    console.log(this.props);

    console.log('hola!');

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
            <form onSubmit={ (evt)=>{ this._handleLogin(evt) }}>
              <p className="title-form"> Bienvenido</p>
              <Input s={6} name="firstname" label="Nombre" validate></Input>
              <Input s={6} name="lastname" label="Apellido" validate />
              <Input s={6} name="email" label="Email" validate type='email'></Input>
              <Input type="password" name="password" label="Contraseña" s={3} />
              <Input type="password" name="re-password" label="Confirma tu contraseña" s={3} />
              <div className="clear"></div>
              <div className="text-float-button valign-wrapper right">
                  <small className="">Siguiente </small>
                  <a href="/ingresa" className="btn-floating btn-large waves-effect waves-light gray right">
                  <Icon className="material-icons">arrow_forward</Icon></a>
              </div>
              <div className="clear"></div>
              <div>
                <small>¿Ya eres usuario?<Link to="/ingresa"> Inicia sesión aquí.</Link></small>
              </div>
            </form>
            <NotificationSystem ref='NotificationSystem' />
          </div>
        </Row>
      </div>
    )
  }
}
export default Authentication;
