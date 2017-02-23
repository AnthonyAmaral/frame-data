import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import SideNav from './UI/sideNav/SideNav';
import NotFound from './components/notFound/NotFound';

import Character from './components/character/character';

import Description from './components/description/Description';

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={SideNav}>
          <IndexRoute component={Description} />
          <Route path="/character/:character" component={Character}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default App
