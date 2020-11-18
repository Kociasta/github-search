import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();


import Home from './Home';
import User from './User';
import SearchForm from './searchForm/SearchForm';

const App = () => {
  return (
    <Router history={customHistory}>
      <div>
        <Switch>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/user" component={User} />
          {/* <Route exact path="/repo" component={Repo} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
