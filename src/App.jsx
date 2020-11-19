import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { pathName } from 'api/api';

import About from './components/about/About';
import Search from './components/search/Search';
import Repo from './components/repo/Repo';
import Repos from './components/repos/Repos';
import Layout from './theme/layout/Layout';

const App = () => {
  const noSite = () => {
    return (
      <div><h1>404</h1></div>
    )
  }

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={`${pathName}/`}>
            <Redirect exact to={`${pathName}/search`} />
          </Route>
          <Route exact path={`${pathName}/search`} component={Search} />
          <Route exact path={`${pathName}/:username/repos`} component={Repos} />
          <Route exact path={`${pathName}/:username/repos/:repo`} component={Repo} />
          <Route exact path={`${pathName}/about`} component={About} />
          <Route component={noSite} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
