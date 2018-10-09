import React, { Component } from 'react';
import request from 'superagent'
import NotificationSystem from 'react-notification-system'

import {Link} from "react-router-dom"
import { Row, Col, Input, Icon, Button } from 'react-materialize'

// import PubSub from "pubsub-js"

class RegistrationAccount extends Component {

  _validateFields(firstNameInput, lastNameInput, emailStr, pwStr, confirmStr){
    if(firstNameInput.trim().length === 0) {
      this.refs.notificationSystem.addNotification({
        title: 'Nombre requerido',
        message: ' Por favor, colóca tu nombre',
        level: 'error'
      })
      return false
    }

    if(lastNameInput.trim().length === 0) {
      this.refs.notificationSystem.addNotification({
        title: 'Apellido requerido',
        message: ' Por favor, colóca tu apellido',
        level: 'error'
      })
      return false
    }

    if(emailStr.trim().length === 0) {
      this.refs.notificationSystem.addNotification({
        title: 'Email requerido',
        message : 'Por favor, colóca tu correo',
        level: 'error'
      })
      return false
    }

    if(pwStr.trim().length === 0) {
      this.refs.notificationSystem.addNotification({
        title: 'Email incompleto',
        message: 'El campo de password no puede quedar vacío',
        level: 'error'
      })
      return false
    }

    if(pwStr !== confirmStr){
      this.refs.notificationSystem.addNotification({
        title: 'Password sin confirmar',
        message: 'Tu contraseña es incorrecta',
        level: 'error'
      })
      return false
    }

    return true

  }

  _handleResgisterClick(evt){
    evt.preventDefault()
    const component = this
    const theFormEl = evt.target
    // console.log(theFormEl.email);

    const firstNameInput = theFormEl.firstname.value
    const lastNameInput = theFormEl.lastname.value
    const emailInput = theFormEl.email.value
    const pwInput = theFormEl.password.value
    const confirmPwInput = theFormEl.confirmpassword.value

    const allFieldsValid = this._validateFields(firstNameInput, lastNameInput, emailInput, pwInput, confirmPwInput)

    if(allFieldsValid === true){
      request
        .post('/auth/register')
        .send({ email: emailInput, password: pwInput })
        .then((serverRes)=>{
          const user = serverRes.body
          component.refs.notificationSystem.addNotification({
            title: 'Nueva cuenta creada',
            message: `Bienvenido, ${user.email}`,
            level: 'success'
          })

          setTimeout(()=>{
            component.props.history.push('/ingresa')
          }, 3000)

        })
        .catch((err)=>{
          console.log(err);
            component.refs.notificationSystem.addNotification({
            title: `Oops!`,
            message: `Algo salió mal..`,
            level: `error`
          })
        })
    }
  }


  render(){
    const component = this
    return (
      <div className='registration-account'>
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
            <form onSubmit={ (evt)=>{ component._handleResgisterClick(evt) } }>
              <p className="title-form"> Bienvenido</p>
              <Input s={6} name="firstname" label="Nombre" validate ></Input>
              <Input s={6} name="lastname" label="Apellido" validate />
              <Input s={6} name="email" label="Email" validate type='email' ref="emailinput" />
              <Input type="password" name="password" label="Contraseña" s={3} />
              <Input type="password" name="confirmpassword" label="Confirma tu contraseña" s={3} />
              <div className="clear"></div>
              <input type='submit' value='register' />
            {// <div className="text-float-button valign-wrapper right">
              //     <small className="">Siguiente </small>
              //     <a href="/ingresa" className="btn-floating btn-large waves-effect waves-light gray right">
              //     <Icon className="material-icons">arrow_forward</Icon></a>
              // </div>
            }
              <div className="clear"></div>
              <div>
                <small>¿Ya eres usuario?<Link to="/ingresa"> Inicia sesión aquí.</Link></small>
              </div>
            </form>
            <NotificationSystem ref='notificationSystem' />
          </div>
        </Row>
      </div>
    )
  }
}
export default RegistrationAccount;
