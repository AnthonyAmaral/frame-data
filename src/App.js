import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import SideNav from './UI/sideNav/SideNav';
import NotFound from './components/notFound/NotFound';

import Fox from './components/characters/Fox';
import Falco from './components/characters/Falco';
import Shiek from './components/characters/Shiek';
import Marth from './components/characters/Marth';
import CaptainFalcon from './components/characters/Captain-Falcon';
import Jigglypuff from './components/characters/jigglypuff';
import IceClimbers from './components/characters/Ice-Climbers';


import Description from './components/description/Description';


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
          <Route path='/captain-falcon' component={CaptainFalcon}/>
          <Route path='/jigglypuff' component={Jigglypuff}/>
          <Route path='/ice-climbers' component={IceClimbers}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App
