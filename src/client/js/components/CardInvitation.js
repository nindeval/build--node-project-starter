import React, { Component } from 'react';
import { Col, Card, CardTitle, Icon, Chip, Tag, Badge, Button} from 'react-materialize'

class CardInvitation extends Component {
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
                <small> Su habilidad</small>
                <Chip>Canto</Chip>
              </Col>
              <Col m={2}>
                <i className="material-icons">compare_arrows</i>
              </Col>
              <Col m={5}>
                <small> Tu habilidad </small>
                <Chip>Teatro</Chip>
              </Col>
            </div>
            <div className="user-card-invitation-status center">
              <small>Enviaste una invitación</small>
            </div>
            <div>
              <small className="valign-wrapper"><Icon className="tiny">visibility </Icon>  Ver perfil</small>
            </div>
        </Card>
      </Col>
    )
  }
}
export default CardInvitation;
