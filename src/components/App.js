import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import User from './User';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          {/* <Route exact path="/repo" component={Repo} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
