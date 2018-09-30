import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardPanel, Icon, Tabs, Tab, Chip, Tag, Badge, Button} from 'react-materialize'

import CardInterested from './CardInterested.js'
import CardOfInterest from './CardOfInterest.js'
import CardInvitation from './CardInvitation.js'


class Dashboard extends Component {
  render(){

    return (
      <div className="container">
      <br/>
        <Tabs className='tab-demo z-depth-1'>
           <Tab title="Te interesa" active>
              <Row className="">
                {/* <Col m={9} s={12}>
                  <Card horizontal header={<CardTitle  image="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg"></CardTitle>} >
                  <p>Ana Moguel <Badge>24</Badge> </p>
                  <small className="valign-wrapper">
                    <i className="material-icons md-1">place</i> Delegación Benito Juárez</small>
                  <hr />
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
                    <Button className="btn waves-effect waves-light" type="submit" name="action">
                      <Icon className="material-icons">thumb_up</Icon>
                    </Button>

                    <Button className="btn waves-effect waves-light" type="submit" name="action">
                      <i className="material-icons">thumb_down</i>
                    </Button>
                  </Card>
                </Col>
                 */}
                 <CardInterested />
                 <CardInterested />
                 <CardInterested />
              </Row>
            </Tab>

            <Tab title="Le interesas">
              <Row>
                <CardOfInterest />
                <CardOfInterest />
                <CardOfInterest />
              </Row>
            </Tab>
            <Tab title="Invitaciones Pendientes">
              <Row>
                <CardInvitation />
              </Row>
            </Tab>
        </Tabs>

        <Button floating fab='vertical' faicon='fa fa-plus' className='red' large style={{bottom: '45px', right: '24px'}}>
          <Button floating icon='insert_chart' className='red'/>
          <Button floating icon='format_quote' className='yellow darken-1'/>
          <Button floating icon='publish' className='green'/>
          <Button floating icon='attach_file' className='blue'/>
        </Button>
      </div>
    )
  }
}
export default Dashboard;
