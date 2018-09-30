import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Row, Col, Chip, Icon  } from 'react-materialize'

class hasAbilities extends Component {
  render(){
    return (
      <div className="container">
      <br/>
        <div className='z-depth-1'>
          <div className="haswantsabilities-header center">
            <span>Hablemos de ti, ¿en que eres bueno?</span>
          </div>
          <div className="haswantsabilities-content">
             <Chip>Habilidad 001</Chip>
             <Chip>Habilidad 002</Chip>
             <Chip>Habilidad 003</Chip>
             <Chip>Habilidad 004</Chip>
             <Chip>Habilidad 005</Chip>
             <Chip>Habilidad 006</Chip>
             <Chip>Habilidad 007</Chip>
             <Chip>Habilidad 008</Chip>
             <div className="haswantsabilities-footer center-align">
              <small className='center-align'>Selecciona por lo menos 2 habilidades diferentes</small>
              <div className="clear"></div>
              <div className="text-float-button valign-wrapper right">
                  <small className="#">Siguiente </small>
                  <a href="/autent" className="btn-floating btn-large waves-effect waves-light gray right">
                  <Icon className="material-icons">arrow_forward</Icon></a>
              </div>
             </div>
             <div className="clear"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default hasAbilities;
