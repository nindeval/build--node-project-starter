import React from 'react';
import {Link} from "react-router-dom"

export default class NoMatch404 extends React.Component {
  render(){
    return (
      <div className="header--404 center-align">
          <h3 className="">
            <i className="material-icons large">sentiment_dissatisfied</i>
            <br/ >
            Ooops!...
            <br/ >
            <span>Página no encontrada</span>
          </h3>
          <br/>
          <a className="" href="/"> Regresar a página principal</a>
      </div>
    )
  }
}
