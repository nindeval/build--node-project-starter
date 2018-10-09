import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PubSub from "pubsub-js"

import Nav from './components/NavBar.js'
import NavDash from './components/NavDash.js'

import Home from './components/Home.js'
import RegistrationAdditional from './components/RegistrationAdditional.js'
import Login from './components/Login.js'
import RegistrationAccount from './components/RegistrationAccount.js'
import HasAbilities from './components/HasAbilities.js'
import WantsAbilities from './components/WantsAbilities.js'
import Dashboard from './components/Dash.js'
import NoMatch404 from './components/NoMatch404.js'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser : {}
    }
  }

  componentDidMount(){
    const component = this
    PubSub.subscribe("updateState", (evtName, newStateOb)=>{
      if(typeof newStateOb !== "object" ) return
      component.setState(newStateOb)
    })
    this._getCurrentUser()
  }

  _getCurrentUser(){
    const component = this

    request
      .get('/auth/current')
      .then((serverRes)=>{
        const userInfo = serverRes.body
        component.setState({
          currentUser : userInfo
        })
      })
  }


  render (){
    let navbarComponent = <Nav appState={this.state}/>
    if(this.state.currentUser.email){
      navbarComponent = <NavDash appState={this.state}/>
    }
    return (
      <div>
        {navbarComponent}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/ingresa'
            component={ (thePropsWithRouterInfo) => {
                return <Login
                {...thePropsWithRouterInfo}
                />
              }}
          />
          <Route exact path='/enhorabuena'
            component={ (thePropsWithRouterInfo) => {
            return <RegistrationAccount
                  {...thePropsWithRouterInfo}
                  />
              }}
          />
          <Route exact path='/tus-datos' component={RegistrationAdditional}/>
          <Route exact path='/tus-habilidades' component={HasAbilities}/>
          <Route exact path='/habilidades-de-interes' component={WantsAbilities}/>
          <Route exact path='/dashboard' component={(thePropsWithRouterInfo)=>{
            return <Dashboard
                    {...thePropsWithRouterInfo}
                    />
            }}
          />
          <Route exact component={NoMatch404}/>
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
