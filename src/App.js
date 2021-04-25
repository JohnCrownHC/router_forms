import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo';
import Finish from './components/Finish';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/step/1'>
            <StepOne />
          </Route>
          <Route path='/step/2'>
            <StepTwo />
          </Route>
          <Route path='/finish'>
            <Finish />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
