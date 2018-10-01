import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PubSub from "pubsub-js"

import Nav from './components/NavBar.js'
// import NavDash from './components/NavDash.js'

import Home from './components/Home.js'
import Authentication from './components/Authentication.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
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
          <Route exact path='/ingresa' component={Login}/>
          <Route exact path='/enhorabuena' component={Authentication}/>
          <Route exact path='/tus-datos' component={Register}/>
          <Route exact path='/tus-habilidades' component={HasAbilities}/>
          <Route exact path='/habilidades-de-interes' component={WantsAbilities}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact component={NoMatch404}/>
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
