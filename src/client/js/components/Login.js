import React, { Component } from 'react';
import request from 'superagent'
import NotificationSystem from 'react-notification-system'

import {Link} from "react-router-dom"
import { Row, Col, Input, Icon, Button } from 'react-materialize'

import PubSub from "pubsub-js"

class Login extends Component {
  _handleLogin(evt){
    evt.preventDefault()
    const formEl = evt.target
    const emailInput = formEl.email.value
    const pwInput = formEl.password.value

    const component = this
    console.log(emailInput);
    console.log(pwInput);

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
      .catch((e)=>{
      console.log("error time");
       console.log(e);
       component.refs.notificationSystem.addNotification({
           title: 'Unauthorized meh',
           message: 'Your email or password was incorrect',
           level: 'error'
         })
       })
  }


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
            <form onSubmit={ (evt)=>{ this._handleLogin(evt) }}>
              <Col m={3}></Col>
              <Col m={6}>
                <p className="title-form">Colóca tus datos</p>
                <Input s={12} name="email" label="Email" validate type='email' ref="emailinput"></Input>
                <Input  name="password" type="password" label="Contraseña" s={12} />
                <div className="clear"></div>
                <div className="text-float-button valign-wrapper right">
                    <Button>Ingresa</Button>
                    <input type='submit' value='Ingresa' />
                </div>
                <div className="clear"></div>
                <div>
                  <small>¿No te has registrado?<Link to="/enhorabuena"> Regístrate aquí</Link></small>
                </div>
              </Col>
            </form>
          </div>
        </Row>
      </div>
    )
  }
}
export default Login;
