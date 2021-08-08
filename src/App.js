import React, { Component, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './screens/test/test.screen';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/test" component={Test}  />
        </Switch>
      </Router>
    );
  }
}

export default App;
