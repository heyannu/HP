import React, { Component } from 'react';
import Landing from './Components/Landing/landing.js'
import House from './Components/Houses/house.js';
import Errorr from './Components/Error/error.js'
import Onehouse from './Components/Onehouse/onehouse.js';
import Character from './Components/Characters/characters.js';
import SortingHat from './Components/SortingHat/sort.js'
import Spells from './Components/Spells/spells.js'
import Spellbook from './Components/Spellbook/spellbook.js'
import Details from './Components/Details/details.js'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/houses' component={House} />
            <Route exact path='/house' component={Onehouse} />
            <Route exact path='/spells' component={Spells} />
            <Route exact path='/houses' component={House} />
            <Route exact path='/students' component={Character} />
            <Route exact path='/sort' component={SortingHat} />
            <Route exact path='/details' component={Details}/>
            <Route exact path='/spellbook' component={Spellbook}/>
            <Route component={Errorr} />
          </Switch>
        </Router>
      </div>
    );
  }
}
