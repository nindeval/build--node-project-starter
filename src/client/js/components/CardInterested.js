import React, { Component } from 'react';
import { Col, Card, CardTitle, Icon, Chip, Tag, Badge, Button} from 'react-materialize'

class CardInterested extends Component {
  render(){

    return (
      <Col m={4} s={12}>
        <Card className="user-card" header={
          <CardTitle  image="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg">
          </CardTitle>}>
          <div className="user-card-abilities-title">
            <p>Ana Moguel <Badge>8.4</Badge> </p>
            <small className="valign-wrapper">
            <i className="material-icons tiny">place</i> Delegación Benito Juárez</small>
          </div>
          <div className="divider"></div>
            <div className="user-card-abilities valign-wrapper center">
              <Col m={5}>
                <small> Tu habilidad</small>
                <Chip>Canto</Chip>
              </Col>
              <Col m={2}>
                <i className="material-icons">compare_arrows</i>
              </Col>
              <Col m={5}>
                <small> Su habilidad </small>
                <Chip>Teatro</Chip>
              </Col>
            </div>
            <div className="user-card-abilities">
              <p>¿Quieres Intercambiar?</p>
              <Button className="btn waves-effect waves-light" type="submit" name="action">
                <Icon className="material-icons">thumb_up</Icon>
              </Button>
              <Button className="btn waves-effect waves-light" type="submit" name="action">
                <i className="material-icons">thumb_down</i>
              </Button>
              { /*
                <a className="btn-floating halfway-fab waves-effect waves-light red">
                 <i className="material-icons">add</i>
              </a>
              */}
            </div>
        </Card>
      </Col>
    )
  }
}
export default CardInterested;
