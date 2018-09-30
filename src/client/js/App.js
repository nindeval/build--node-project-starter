import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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


const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}


const SelectedAbilities = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 styleObj={styleObj}> Selected Abilities</h2>
}


class App extends React.Component {
  render (){
    return (
      <div>
        <Nav />
        <Switch>
          <Route path='/dashboard-select-abilities' component={SelectedAbilities}/>
          <Route path='/ex/:routeVal' component={DynamicRoute}/>
          <Route path='/demo' component={DemoComponent}/>
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
