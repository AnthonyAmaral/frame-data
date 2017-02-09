import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import SideNav from './UI/sideNav/SideNav';
import Fox from './components/characters/Fox';
import Falco from './components/characters/Falco';
import Shiek from './components/characters/Shiek';
import Marth from './components/characters/Marth';


import Description from './components/description/Description';

const NotFound = () => (<h1>404.. This page is not found!</h1>)



class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={SideNav}>
          <IndexRoute component={Description} />
          <Route path='/fox' component={Fox}/>
          <Route path='/falco' component={Falco}/>
          <Route path='/shiek' component={Shiek}/>
          <Route path='/marth' component={Marth}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App
