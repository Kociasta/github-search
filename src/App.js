import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { pathName } from 'api/api'

import AppInfo from './components/appInfo/AppInfo';
import SearchForm from './components/searchForm/SearchForm';
import Repo from './components/repo/Repo';
import Repos from './components/repos/Repos';

const App = () => {
  const noSite = () => {
    return (
      <div><h1>404</h1></div>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={`${pathName}/`}>
            <Redirect exact to={`${pathName}/search`} />
          </Route>
          <Route exact path={`${pathName}/search`} component={SearchForm} />
          <Route exact path={`${pathName}/:username/repos`} component={Repos} />
          <Route exact path={`${pathName}/:username/repos/:repo`} component={Repo} />
          <Route exact path={`${pathName}/info`} component={AppInfo} />
          <Route component={noSite} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
