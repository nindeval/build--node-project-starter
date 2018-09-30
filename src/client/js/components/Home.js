import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Row, Col, Parallax } from 'react-materialize'

class Home extends Component {
  render(){
    return (
      <div className='home'>
        <Col m={12}>
          <div>
            <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
            <div className="section white">
              <div className="row container">
                <h2 className="header center">Hola! Esto es HxH</h2>
                <p className="grey-text text-darken-3 li  ghten-3 center">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
              </div>
            </div>
          </div>
        </Col>
        <Row>
          <Col m={4} className="promo center promo-example">
            <i className="material-icons">flash_on</i>
              <p className="promo-caption">Speeds up development</p>
              <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
          </Col>
          <Col m={4} className="promo center promo-example">
            <i className="material-icons">flash_on</i>
              <p className="promo-caption">Speeds up development</p>
              <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
          </Col>
          <Col m={4} className="promo center promo-example">
            <i className="material-icons">flash_on</i>
              <p className="promo-caption">Speeds up development</p>
              <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
          </Col>
        </Row>

      </div>
    )
  }
}
export default Home;
